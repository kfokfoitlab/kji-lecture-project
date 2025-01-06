import {
  FileResponseDto,
  MiniProjectQuestionResponseDto,
  MiniProjectRequestDto,
  MiniProjectResponseDto,
} from "../@swagger/data-contracts";
import Button from "../components/Button";
import {
  BIO_HEALTH_DATA_LINK_LIST,
  BIO_HEALTH_DESIGN_LINK_LIST,
  CHAT_GPT_LINK_LIST,
  LinkListData,
} from "../data/link";
import { API } from "../utils/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function SubmitPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const miniprojectSeq = searchParams.get("miniProjectSeq");
  const [data, setData] = useState<MiniProjectQuestionResponseDto | null>(null);
  const [miniprojectData, setMiniprojectData] =
    useState<MiniProjectResponseDto | null>(null);
  const [linkData, setLinkData] = useState<LinkListData | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fetchData = async () => {
    try {
      const { data } = await API.get<MiniProjectQuestionResponseDto>(
        `/app/miniProjectQuestion/${params.seq}`,
      );

      setData(data);

      let target: LinkListData[] = [];

      if (data.kdcType === "BIO_HEALTH_DATA") {
        target = BIO_HEALTH_DATA_LINK_LIST;
      }
      if (data.kdcType === "BIO_HEALTH_DESIGN") {
        target = BIO_HEALTH_DESIGN_LINK_LIST;
      }
      if (data.kdcType === "CHAT_GPT") {
        target = CHAT_GPT_LINK_LIST;
      }

      // const target =
      //   data.kdcType === "BIO_HEALTH_DATA"
      //     ? BIO_HEALTH_DATA_LINK_LIST
      //     : BIO_HEALTH_DESIGN_LINK_LIST;

      setLinkData(
        target.find(
          ({ chapter, level }) =>
            chapter === data.chapter && level === data.level,
        ) || null,
      );
    } catch (e) {
      //
    }
  };

  const fetchMiniProjectData = async () => {
    if (!miniprojectSeq || !username) {
      return;
    }
    try {
      const { data } = await API.get<MiniProjectResponseDto>(
        `/app/miniProject/${miniprojectSeq}?username=${username}`,
      );

      setMiniprojectData(data);
    } catch (e) {
      //
    }
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size > 2000 * 1024 * 1024) {
        alert("2GB 이하의 파일만 업로드 가능합니다.");
        return;
      }
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleClickSubmit = async () => {
    if (!data || !data.chapter || !data.kdcType || !data.level || !username) {
      return;
    }

    if (!selectedFile) {
      alert("파일을 선택해 주세요.");
      return;
    }

    if (
      !window.confirm(
        "최종 제출 하시겠습니까? 제출 후에는 수정 및 재응시가 불가능합니다.",
      )
    ) {
      return;
    }

    try {
      const { data: postSeq } = await API.post<
        number,
        {},
        MiniProjectRequestDto
      >(`/app/miniProject`, {
        chapter: data.chapter,
        kdcType: data.kdcType,
        level: data.level,
        username,
      });

      const formData = new FormData();
      formData.append("files", selectedFile);
      const { data: res } = await API.post<FileResponseDto>(
        `/app/file/TYPE_MINI_PROJECT/${postSeq}`,
        formData,
      );

      if (!res) {
        throw new Error();
      }

      navigate(-1);
    } catch (e) {
      alert("제출에 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchData();

    if (miniprojectSeq) {
      fetchMiniProjectData();
    }
  }, [params, miniprojectSeq]);

  if (!data || !linkData) {
    return null;
  }

  return (
    <div className="bg-white">
      <div className="bg-[#033568] h-[50px] pl-[30px] flex items-center">
        <p className="text-white">미니 프로젝트</p>
      </div>

      <div className="p-[30px]">
        <p className="mb-[16px] text-[20px] font-[500]">
          [{data.chapter}차시 Level0{data.level}]
        </p>
        <p className="mb-[26px] font-[500] whitespace-pre-wrap">
          {data.content}
        </p>

        <div className="flex gap-[12px] mb-[40px]">
          {linkData.data.map((value) => (
            <a
              href={value.href}
              target="_blank"
              className="h-[40px] flex items-center justify-center bg-[#033568FF] rounded-[4px] px-[20px] text-white"
              rel="noreferrer"
            >
              {value.text}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-[10px]">
          <div className="w-[60%] flex items-center h-[54px] p-[10px] rounded-[5px] bg-[#e2f0ff] bs-[#ddd]">
            <input type="file" onChange={handleChangeFile} />
          </div>

          <Button
            width={100}
            height={54}
            backgroundColor="#033568FF"
            textColor="#fff"
            onClick={handleClickSubmit}
          >
            제출하기
          </Button>
        </div>

        {miniprojectData?.miniProjectAnswer && (
          <div className="pt-[40px] bt-palette-gray300 mt-[40px]">
            <p className="text-[20px] font-[500] mb-[16px]">[첨삭내용]</p>
            <p>{miniprojectData.miniProjectAnswer.content}</p>
          </div>
        )}
      </div>
    </div>
  );
}

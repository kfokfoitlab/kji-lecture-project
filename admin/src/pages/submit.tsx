import {
  FileResponseDto,
  MiniProjectAnswerRequestDto,
  MiniProjectQuestionResponseDto,
  MiniProjectResponseDto,
} from "@/@swagger/data-contracts";
import Button from "../components/Button";
import { API } from "@/utils/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fileDownload } from "@/utils/file";

export default function SubmitPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const miniProjectSeq = searchParams.get("miniProjectSeq");
  const [data, setData] = useState<MiniProjectQuestionResponseDto | null>(null);
  const [miniProjectData, setMiniProjectData] =
    useState<MiniProjectResponseDto | null>(null);
  const [content, setContent] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await API.get<MiniProjectQuestionResponseDto>(
        `/app/miniProjectQuestion/${params.seq}`,
      );
      const { data: miniProjectData } = await API.get<MiniProjectResponseDto>(
        `/app/miniProject/${miniProjectSeq}`,
        {
          params: {
            username,
          },
        },
      );

      setMiniProjectData(miniProjectData);
      setData(data);
    } catch (e) {
      //
    }
  };

  const handleClickSubmit = async () => {
    try {
      if (!content || !username) {
        return;
      }
      const { data } = await API.post<number, {}, MiniProjectAnswerRequestDto>(
        `/app/miniProjectAnswer/${miniProjectSeq}`,
        {
          username,
          content,
          name: "",
        },
      );

      if (data < 0) {
        throw new Error();
      }

      alert("작성 성공");
      navigate(`/list?username=${username}`, { replace: true });
    } catch (e) {
      alert("작성 실패");
    }
  };

  const handleClickDownloadFile = async (file: FileResponseDto) => {
    await fileDownload(file);
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  if (!data) {
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
        <p className="mb-[26px] font-[500]">{data.content}</p>

        {miniProjectData?.s3Files && (
          <div className="pt-[40px] bt-palette-gray300 mb-[26px]">
            <p className="text-[20px] font-[500] mb-[16px]">[파일]</p>
            <div className="flex items-center gap-[16px] flex-wrap">
              {miniProjectData.s3Files.map((file) => (
                <p
                  className="underline font-[700] cursor-pointer"
                  onClick={() => handleClickDownloadFile(file)}
                  key={file.seq}
                >
                  {file.name}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="pt-[40px] bt-palette-gray300 mt-[40px]">
          <p className="text-[20px] font-[500] mb-[16px]">[첨삭내용]</p>
          <div className="flex flex-col items-end gap-[16px]">
            <textarea
              className="w-full h-[400px] p-[10px]"
              placeholder="내용 입력"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex gap-[10px]">
              <Button
                width={120}
                height={40}
                padding="0"
                fontSize={14}
                backgroundColor="#fff"
                textColor="#033568"
                fontWeight="normal"
                borderColor="#033568"
                onClick={() => navigate(-1)}
              >
                뒤로가기
              </Button>
              <Button
                width={120}
                height={40}
                padding="0"
                fontSize={14}
                backgroundColor="#033568"
                textColor="#fff"
                fontWeight="normal"
                onClick={handleClickSubmit}
              >
                작성하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

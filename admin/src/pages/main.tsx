import {
  FindMiniProjectsTutorParams,
  Metadata,
  MiniProjectResponseDtoKdcTypeEnum,
  PageResponseDtoMiniProjectResponseDto,
} from "@/@swagger/data-contracts";
import Button from "../components/Button";
import { API } from "@/utils/api";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "@/components/Pagination";

export default function MainPage() {
  const queryString = useLocation().search;
  const [data, setData] =
    useState<PageResponseDtoMiniProjectResponseDto | null>(null);
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const page = searchParams.get("page") || "1";
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  const fetchData = async (page?: string, searchString?: string) => {
    if (!username) {
      return;
    }

    try {
      const { data } = await API.get<
        PageResponseDtoMiniProjectResponseDto,
        FindMiniProjectsTutorParams
      >(`/app/miniProjects/tutor`, {
        params: {
          page: Number(page),
          username,
          isAnswer: "false" as unknown as boolean,
          searchString,
        },
      });

      setData(data);
    } catch (e) {
      //
    }
  };

  const renderKdcType = (value: MiniProjectResponseDtoKdcTypeEnum) => {
    switch (value) {
      case MiniProjectResponseDtoKdcTypeEnum.BIO_HEALTH_DATA:
        return "바이오 헬스 데이터";
      case MiniProjectResponseDtoKdcTypeEnum.BIO_HEALTH_DESIGN:
        return "바이오 헬스 디자인";
      default:
        return "타입 없음";
    }
  };

  const handleSearch = (newPage?: string, newSearchString?: string) => {
    const currentParams = new URLSearchParams(queryString);

    currentParams.set("page", newPage || page);
    currentParams.set("searchString", newSearchString || searchString);

    navigate({
      pathname: "/list",
      search: currentParams.toString(),
    });
  };

  useEffect(() => {
    setSearchString(searchParams.get("searchString") || "");
    fetchData(page, searchParams.get("searchString") || "");
  }, [searchParams, navigate]);

  return (
    <div>
      <div className="flex justify-end mb-[20px] gap-[10px]">
        <input
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          className="h-[40px] w-[400px] outline-0 px-[10px] rounded-[4px] bs-palette-gray400"
          placeholder="검색어를 입력하세요"
        />
        <Button
          className="!w-[120px] !h-[40px]"
          onClick={() => handleSearch("1", searchString)}
        >
          검색
        </Button>
      </div>
      <TableWrapper>
        <TableLine>
          <TableData>
            <p>KDC 타입</p>
          </TableData>
          <TableData>
            <p>아이디</p>
          </TableData>
          <TableData>
            <p>분류</p>
          </TableData>
          <TableData>
            <p>제목</p>
          </TableData>
          <TableData>
            <p>첨삭</p>
          </TableData>
        </TableLine>
        {data?.data && data.data.length > 0 ? (
          data?.data?.map((value) => (
            <TableLine key={value.seq}>
              <TableData>
                <p>{renderKdcType(value.kdcType)}</p>
              </TableData>
              <TableData>
                <p>{value.username}</p>
              </TableData>
              <TableData>
                <p>{value.chapter}차시</p>
              </TableData>
              <TableDataContent>
                <p>
                  {value.miniProjectQuestion?.subject} - Level {value.level}
                </p>
              </TableDataContent>
              <TableData>
                <Button
                  fullWidth
                  height={30}
                  padding="0"
                  fontSize={14}
                  borderRadius={40}
                  backgroundColor="#033568"
                  textColor="#fff"
                  fontWeight="normal"
                  onClick={() =>
                    navigate(
                      `/detail/${value.miniProjectQuestion?.seq}?username=${username}&miniProjectSeq=${value.seq}&submitUserName=${value.username}`,
                    )
                  }
                >
                  첨삭하기
                </Button>
              </TableData>
            </TableLine>
          ))
        ) : (
          <div className="py-[40px]">
            <p className="text-center">목록이 없습니다.</p>
          </div>
        )}
      </TableWrapper>

      {data?.metadata?.totalPages && data.metadata.totalPages > 0 && (
        <Pagination
          {...(data.metadata as Required<Metadata>)}
          page={Number(page)}
          onChange={(v) => handleSearch(String(v))}
        />
      )}
    </div>
  );
}

const TableWrapper = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-top: 2px solid #000;
  background-color: #fff;
  font-size: 14px;
`;

const TableLine = styled.div`
  display: grid;
  grid-template-columns: 15% 10% 10% auto 10%;
  text-align: center;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const TableData = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;

  &:not(:last-of-type) {
    border-right: 1px solid #ddd;
  }
`;

const TableDataContent = styled(TableData)`
  justify-content: flex-start;
`;

import {
  FindMiniProjectsTutorParams,
  MiniProjectResponseDtoKdcTypeEnum,
  PageResponseDtoMiniProjectResponseDto,
} from "@/@swagger/data-contracts";
import Button from "../components/Button";
import { API } from "@/utils/api";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [data, setData] =
    useState<PageResponseDtoMiniProjectResponseDto | null>(null);
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const page = searchParams.get("page") || "1";
  const navigate = useNavigate();

  const fetchData = async () => {
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

  useEffect(() => {
    fetchData();
  }, [username, page, navigate]);

  return (
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
                    `/detail/${value.miniProjectQuestion?.seq}?username=${username}&miniProjectSeq=${value.seq}`,
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

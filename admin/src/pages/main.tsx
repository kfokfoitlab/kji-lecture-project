import {
  FindMiniProjectQuestionsParams,
  FindMiniProjectsParams,
  MiniProjectQuestionResponseDto,
  MiniProjectResponseDto,
} from "../@swagger/data-contracts";
import Button from "../components/Button";
import { API } from "../utils/api";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [data, setData] = useState<MiniProjectQuestionResponseDto[]>([]);
  const [miniprojectData, setMiniprojectData] = useState<
    MiniProjectResponseDto[] | null
  >(null);
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const kdcType = searchParams.get("kdcType") as
    | "BIO_HEALTH_DATA"
    | "BIO_HEALTH_DESIGN";
  const navigate = useNavigate();

  const fetchData = async () => {
    if (!username) {
      return;
    }

    try {
      const { data } = await API.get<
        MiniProjectQuestionResponseDto[],
        FindMiniProjectQuestionsParams
      >(`/app/miniProjectQuestions`, {
        params: {
          kdcType,
        },
      });
      const { data: miniprojectData } = await API.get<
        MiniProjectResponseDto[],
        FindMiniProjectsParams
      >(`/app/miniProjects`, {
        params: {
          kdcType,
          username,
        },
      });

      setMiniprojectData(miniprojectData);
      setData(data.sort((a, b) => a.chapter! - b.chapter!));
    } catch (e) {
      //
    }
  };

  useEffect(() => {
    fetchData();
  }, [username, navigate]);

  return (
    <TableWrapper>
      <TableLine>
        <TableData>
          <p>분류</p>
        </TableData>
        <TableData>
          <p>제목</p>
        </TableData>
        <TableData>
          <p>미니 프로젝트</p>
        </TableData>
      </TableLine>
      {data.map((value) => (
        <TableLine key={value.seq}>
          <TableData>
            <p>{value.chapter}차시</p>
          </TableData>
          <TableDataContent>
            <p>
              {value.subject} - Level {value.level}
            </p>
          </TableDataContent>
          <TableData>
            {miniprojectData?.find(
              ({ chapter, level }) =>
                value.chapter === chapter && value.level === level,
            )?.isComplete ? (
              <Button
                fullWidth
                height={40}
                padding="0"
                borderRadius={40}
                backgroundColor="#033568"
                textColor="#fff"
                fontWeight="normal"
                onClick={() =>
                  navigate(
                    `/detail/${value.seq}?username=${username}&kdcType=${kdcType}&miniProjectSeq=${
                      miniprojectData?.find(
                        ({ chapter, level }) =>
                          value.chapter === chapter && value.level === level,
                      )!.seq
                    }`,
                  )
                }
              >
                제출완료
              </Button>
            ) : (
              <Button
                fullWidth
                height={40}
                padding="0"
                borderRadius={40}
                backgroundColor="#033568"
                textColor="#fff"
                fontWeight="normal"
                onClick={() =>
                  navigate(
                    `/detail/${value.seq}?username=${username}&kdcType=${kdcType}`,
                  )
                }
              >
                제출하기
              </Button>
            )}
          </TableData>
        </TableLine>
      ))}
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-top: 2px solid #000;
  background-color: #fff;
`;

const TableLine = styled.div`
  display: grid;
  grid-template-columns: 12% auto 12%;
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

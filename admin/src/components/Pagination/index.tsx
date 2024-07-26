import { useMemo } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "@/components/Button";
import { PaginationWrapper } from "@/components/Pagination/styled";
import { theme } from "@/theme/theme";
import { Metadata } from "@/@swagger/data-contracts";

interface PaginationProps extends Required<Metadata> {
  page: number;
  onChange: (page: number) => void;
  pagePerView?: number;
}

function PaginationButton({ ...args }: ButtonProps & { isDisabled?: boolean }) {
  return (
    <StyledPaginationButton
      fontWeight="normal"
      fontSize={14}
      borderRadius={0}
      disabledBackgroundColor="transparent"
      {...args}
    />
  );
}

type PageArrowType = "first" | "prev" | "next" | "last";

export default function Pagination({
  page,
  onChange,
  pagePerView = 5, // pagePerView 변동 시 동적으로 페이지 개수 랜더링하는 로직은 개발이 안되어 있습니다.
  totalPages,
}: PaginationProps) {
  const isFirstPage = useMemo(() => {
    return page === 1;
  }, [page]);

  const isLastPage = useMemo(() => {
    return page === totalPages;
  }, [page, totalPages]);

  const pageArray: number[] = useMemo(() => {
    if (totalPages === 1) {
      return [1];
    }

    if (totalPages <= pagePerView || page < 3) {
      return new Array(Math.min(totalPages, pagePerView))
        .fill(null)
        .map((_, idx) => idx + 1);
    }

    if (page >= totalPages - 2) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [page - 2, page - 1, page, page + 1, page + 2];
  }, [page, totalPages]);

  const handleClickPage = (value: number) => {
    onChange(value);
  };

  const handleClickPageArrow = (type: PageArrowType) => {
    switch (type) {
      case "first":
        onChange(1);
        break;
      case "prev":
        if (page > 1) {
          onChange(page - 1);
        }
        break;
      case "next":
        if (page < totalPages) {
          onChange(page + 1);
        }
        break;
      case "last":
        onChange(totalPages);
    }
  };

  return (
    <PaginationWrapper>
      <PaginationButton
        width={16}
        height={16}
        padding="0"
        backgroundColor="transparent"
        onClick={() => handleClickPageArrow("first")}
        disabled={isFirstPage}
      >
        <img
          src={
            isFirstPage
              ? "/assets/icons/pagination/ic_first_page_disabled.svg"
              : "/assets/icons/pagination/ic_first_page.svg"
          }
          alt="first"
        />
      </PaginationButton>
      <PaginationButton
        width={16}
        height={16}
        padding="0"
        backgroundColor="transparent"
        onClick={() => handleClickPageArrow("prev")}
        className="!mr-[10px]"
        disabled={isFirstPage}
      >
        <img
          src={
            isFirstPage
              ? "/assets/icons/pagination/ic_prev_page_disabled.svg"
              : "/assets/icons/pagination/ic_prev_page.svg"
          }
          alt="prev"
        />
      </PaginationButton>
      {pageArray.map((value) => (
        <PaginationButton
          width={30}
          height={30}
          backgroundColor="transparent"
          textColor={
            value === page
              ? theme.colors.palette.blueBrandPrimary
              : theme.colors.palette.blackTextPrimary
          }
          fontWeight={value === page ? 700 : 400}
          key={`pagination-${value}`}
          onClick={() => handleClickPage(value)}
        >
          {value}
        </PaginationButton>
      ))}
      <PaginationButton
        width={16}
        height={16}
        padding="0"
        backgroundColor="transparent"
        onClick={() => handleClickPageArrow("next")}
        className="!ml-[10px]"
        disabled={isLastPage}
      >
        <img
          src={
            isLastPage
              ? "/assets/icons/pagination/ic_next_page_disabled.svg"
              : "/assets/icons/pagination/ic_next_page.svg"
          }
          alt="next"
        />
      </PaginationButton>
      <PaginationButton
        width={16}
        height={16}
        padding="0"
        backgroundColor="transparent"
        onClick={() => handleClickPageArrow("last")}
        disabled={isLastPage}
      >
        <img
          src={
            isLastPage
              ? "/assets/icons/pagination/ic_last_page_disabled.svg"
              : "/assets/icons/pagination/ic_last_page.svg"
          }
          alt="last"
        />
      </PaginationButton>
    </PaginationWrapper>
  );
}

const StyledPaginationButton = styled(
  ({ isDisabled, ...args }: ButtonProps & { isDisabled?: boolean }) => (
    <Button {...args} />
  ),
)`
  ${({ isDisabled }) => isDisabled && css``};
`;

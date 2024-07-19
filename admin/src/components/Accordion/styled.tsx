import styled from "@emotion/styled";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { AccordionSummaryProps } from "./index";
import { css } from "@emotion/react";

export const StyledAccordion = styled(Accordion)`
  box-shadow: none;
  border-bottom: 1px solid #d9d9d9;

  &.Mui-expanded {
    margin: 0;
  }
`;

export const StyledAccordionSummary = styled(
  ({ summaryHeight, ...args }: AccordionSummaryProps) => (
    <AccordionSummary {...args} />
  ),
)`
  padding: 0;
  font-weight: bold;

  ${({ summaryHeight }) => css`
    height: ${summaryHeight}px;
    min-height: ${summaryHeight}px;

    &.Mui-expanded {
      height: ${summaryHeight}px;
      min-height: ${summaryHeight}px;
    }
  `}
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  padding: 0;
  border-top: 1px solid #d9d9d9;
`;

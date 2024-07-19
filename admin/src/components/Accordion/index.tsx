import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
} from "./styled";
import {
  AccordionProps as MuiAccordionProps,
  AccordionSummaryProps as MuiAccordionSummaryProps,
  AccordionDetailsProps as MuiAccordionDetailsProps,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export type AccordionSummaryProps = MuiAccordionSummaryProps & {
  summaryHeight?: number;
};

export type AccordionDetailsProps = MuiAccordionDetailsProps & {};

export type AccordionProps = MuiAccordionProps &
  AccordionSummaryProps &
  AccordionDetailsProps & {
    headerElement: React.ReactNode;
    children: React.ReactNode;
  };

export default function Accordion({
  headerElement,
  summaryHeight = 64,
  children,
  ...args
}: AccordionProps) {
  return (
    <StyledAccordion {...args}>
      <StyledAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        summaryHeight={summaryHeight}
      >
        {headerElement}
      </StyledAccordionSummary>
      <StyledAccordionDetails>{children}</StyledAccordionDetails>
    </StyledAccordion>
  );
}

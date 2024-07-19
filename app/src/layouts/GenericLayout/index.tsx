import styled from "@emotion/styled";
import React from "react";

export default function GenericLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f3f3f3]">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
`;

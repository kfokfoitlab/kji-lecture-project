import styled from "@emotion/styled";

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1980px;
  padding: 0 100px;
  position: relative;
  margin: 0 auto;

  @media screen and (max-width: 1119px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
`;

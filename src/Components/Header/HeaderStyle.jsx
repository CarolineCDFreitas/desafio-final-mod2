import styled from "styled-components";
import { FlexboxSpaceBetween } from "../../utils";

export const HeaderStyled = styled.header`
  ${FlexboxSpaceBetween};
  width: calc(100% - 8rem);
  gap: 2rem;
  margin: 0.5em 4rem;
  margin: 0 auto;
  background-color: coral;

  img {
    width: 7%;
  }
  @media (max-width: 480px) {
    width: 100%;
    gap: 1rem;
    margin: 0;

    img {
      width: 15%;
    }
  }
`;

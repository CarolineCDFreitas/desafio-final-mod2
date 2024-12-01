import styled from "styled-components";
import { FlexboxSpaceBetween } from "../../utils";

export const HeaderStyled = styled.header`
  ${FlexboxSpaceBetween};
  width: calc(100% - 12rem);
  gap: 2rem;
  margin: 0 auto;
  margin-top: 0.5em;

  img {
    width: 7%;
  }

  @media (max-width: 480px) {
    width: 100%;
    gap: 1rem;
    margin: 0.2rem 0 0 0;

    img {
      width: 15%;
    }
  }

  @media (min-width: 481px) and (max-width: 1280px) {
    width: calc(100% - 6rem);
  }
`;

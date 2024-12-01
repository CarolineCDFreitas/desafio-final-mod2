import styled from "styled-components";
import { FlexboxColumn, FlexboxSpaceAround } from "../../utils";

const fontColor = (props) => (props.$isGreen ? "#fff" : "#1E3932");
const commonMargin = "0.5em";

export const Main = styled.main`
  background-color: ${(props) => (props.$isGreen ? "#1E3932" : "white")};
  padding-top: ${(props) => (props.$isGreen ? "clamp(1rem, 3vw, 4rem)" : "0")};
  flex: 1;
`;

export const ContainerSection = styled.section`
  ${FlexboxSpaceAround};
  flex-direction: ${(props) => (props.$isGreen ? "row" : "row-reverse")};
  gap: 5rem;
  margin: ${(props) => (props.$isGreen ? "2rem" : "0.25rem 1rem")};
  padding: ${commonMargin};

  @media (max-width: 768px) {
    ${FlexboxColumn};
    align-items: center;
  }

  @media (max-width: 1024px) {
    margin: 1rem;
  }
`;

export const ContentSection = styled.div`
  ${FlexboxColumn};
  flex: 1;
  max-width: 700px;
  padding: 1.5em;

  h1 {
    order: 2;
    font-size: clamp(1.75rem, 5vw, 4rem);
    line-height: 1.3;
    color: ${fontColor};
    margin-block-end: ${commonMargin};
  }

  h2 {
    order: 1;
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-family: "Inter", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: ${fontColor};
    margin-block-end: ${commonMargin};
  }

  p {
    order: 3;
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: ${fontColor};
    margin-block-end: ${commonMargin};
  }

  button {
    order: 4;
    margin-block-start: ${commonMargin};
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;

    p {
      padding-block: 2rem;
    }
  }
`;

export const Img = styled.img`
  max-width: ${(props) => (props.$isResponsive ? "250px" : "500px")};
  width: ${(props) =>
    props.$isResponsive ? "100%" : props.$isGreen ? "40%" : "25%"};
  order: ${(props) => (props.$isResponsive ? 3 : "initial")};
  margin-block-end: ${(props) => (props.$isResponsive ? commonMargin : 0)};
`;

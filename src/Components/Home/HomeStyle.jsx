import styled from "styled-components";
import { FlexboxColumn } from "../../Utils";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  margin: 0.25rem 2rem;
  overflow: hidden;
  button {
    order: 4;
    margin: 0.5em 0;
  }

  @media (max-width: 480px) {
    margin: 2em 0.5em;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    ${FlexboxColumn};
  }
`;

export const Container = styled.div`
  ${FlexboxColumn};
  padding: 0 4rem;

  @media (max-width: 480px) {
    align-items: center;
    justify-content: flex-start;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: clamp(1.75rem, 5vw, 4rem);
  order: 2;

  span {
    font-size: clamp(2.5rem, 5vw, 6rem);
    font-weight: 700;
    color: #037143;
  }
`;

export const Intro = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: clamp(1.75rem, 5vw, 4rem);
  order: 1;
`;

export const Text = styled.p`
  max-width: 650px;
  width: fit-content;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  line-height: 1.7;
  order: 3;
  overflow-wrap: break-word;
  margin-block-end: 0.5em;

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

export const LittleCups = styled.div`
  display: flex;
  gap: 2rem;
  order: 5;
  margin-inline-start: 10rem;
  position: absolute;
  bottom: 3rem;
  left: 25rem;

  img {
    width: 30%;
    @media (min-width: 1024px) {
      &:hover {
        transform: rotateZ(14deg);
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1281px) {
    left: 15rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  margin: 0;

  @media (max-width: 1024px) {
    visibility: hidden;
  }
`;

export const Ellipse = styled.img`
  position: fixed;
  bottom: -3.5rem;
  right: -2rem;

  @media (max-width: 1280px) {
    bottom: -8.5rem;
    right: -8rem;
  }
`;
export const Cup = styled.img`
  width: 30%;
  position: absolute;
  right: 1rem;
  bottom: 2.75rem;

  @media (max-width: 1028px) {
    width: 25%;
    left: 1rem;
  }
`;

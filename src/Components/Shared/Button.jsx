import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: clamp(0.75rem, 2vw, 1.5rem);
  text-align: center;
  text-transform: uppercase;

  background-color: #037143;
  color: #fff;
  border: none;
  border-radius: 1.5rem;

  transition: background-color 0.5s ease, transform 0.2s ease;

  padding: 0.5em 1.75em;

  &:active {
    background-color: #06c274;
    box-shadow: 0 4px #666;
    transform: translateY(4px);
  }

  &:focus-visible{
    outline: 2px solid #037143;
    outline-offset: 0.25em;
  }

  @media (min-width: 768px) {
    &:hover {
      background-color: #049e5b;
    }
  }
`;

export default function Button() {
  return <ButtonStyled>saiba mais</ButtonStyled>;
}

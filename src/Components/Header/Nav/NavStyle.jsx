import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FlexboxSpaceBetween } from "../../../utils";

export const NavStyled = styled.nav`
  border: 2px solid green;
  margin: 0 0.5em;
  padding: 0.4em;
`;

export const Ul = styled.ul`
  ${FlexboxSpaceBetween};
  gap: clamp(0.75rem, 5vw, 5rem);
  list-style-type: none;

  @media (min-width: 820px) {
    gap: 7rem;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #1e3932;
  font-size: clamp(1rem, 2vw, 1.5rem);

  &.active {
    color: #037143;
  }
`;

import { NavStyled, Ul, NavLinkStyled } from "./NavStyle";
export default function Nav() {
  return (
    <NavStyled>
      <Ul>
        <li>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/novidades">Novidades</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/sobre">Sobre</NavLinkStyled>
        </li>
      </Ul>
    </NavStyled>
  );
}

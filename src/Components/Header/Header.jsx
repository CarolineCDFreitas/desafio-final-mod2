import Navigation from "./Nav/Nav";
import { HeaderStyled } from "./HeaderStyle";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="logomarca do Starbucks" />
      <Navigation />
    </HeaderStyled>
  );
}

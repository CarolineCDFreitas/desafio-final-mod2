import Loja from "../../assets/loja.png";
import MainTemplate from "../Shared/MainTemplate";

export default function Sobre() {
  return (
    <MainTemplate
      title="A história da Starbucks"
      intro="Sobre nós"
      mainText="Todos os dias, os parceiros (funcionários) da Starbucks vão trabalhar na esperança de fazer duas coisas: compartilhar um ótimo café com seus amigos e ajudar a tornar o mundo um pouco melhor."
      source={Loja}
      altText="frente da loja"
      $isResponsive
    />
  );
}

import Cafe from "../../assets/cafe.png";
import MainTemplate from "../Shared/MainTemplate";

export default function Novidades() {
  return (
    <MainTemplate
      $isGreen={true}
      title="Níveis de Torra"
      intro="preparação"
      mainText={
        (<>
          Qual a torra que prefere? <em>Starbucks</em>® Torra Clara, Torra
          Média ou Torra Escura? Estas são as torras que fazem parte dos níveis
          de torra <em>Starbucks</em>®
        </>)
      }
      source={Cafe}
      altText="grão de café"
      $isResponsive
    />
  );
}

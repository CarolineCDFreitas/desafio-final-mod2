import OrangeSmall from "../../assets/laranjaSmall.png";
import RedLarge from "../../assets/vermelhoLarge.png";
import YellowSmall from "../../assets/amareloSmall.png";
import OrangeLarge from "../../assets/laranjaLarge.png";
import RedSmall from "../../assets/vermelhoSmall.png";
import YellowLarge from "../../assets/amareloLarge.png";
import EllipseGreen from "../../assets/elipseVerde.png";
import EllipseRed from "../../assets/elipseVermelha.png";
import EllipseYellow from "../../assets/elipseAmarela.png";

export const images = {
  smallCup: {
    orange: {
      src: OrangeSmall,
      alt: "copo laranja pequeno de café",
    },
    red: {
      src: RedSmall,
      alt: "copo vermelho pequeno de café",
    },
    yellow: {
      src: YellowSmall,
      alt: "copo amarelo pequeno de café",
    },
  },
  ellipseWithCup: {
    orange: {
      ellipse: {
        src: EllipseGreen,
        alt: "",
      },
      cup: {
        src: OrangeLarge,
        alt: "copo laranja grande de café",
      },
    },
    red: {
      ellipse: {
        src: EllipseRed,
        alt: "",
      },
      cup: {
        src: RedLarge,
        alt: "copo vermelho grande de café",
      },
    },
    yellow: {
      ellipse: {
        src: EllipseYellow,
        alt: "",
      },
      cup: {
        src: YellowLarge,
        alt: "copo amarelo grande de café",
      },
    },
  },
};

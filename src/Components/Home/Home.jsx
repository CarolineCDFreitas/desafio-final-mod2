import { useState } from "react";
import Button from "../Shared/Button";
import { images } from "./Images";
import {
  MainContainer,
  Container,
  Title,
  Intro,
  Text,
  LittleCups,
  ImageContainer,
  Ellipse,
  Cup,
} from "./HomeStyle";

export default function Home() {
  const [displayImages, setDisplayImages] = useState({
    ellipseImage: {
      src: images.ellipseWithCup.orange.ellipse.src,
      alt: images.ellipseWithCup.orange.ellipse.alt,
    },
    cupImage: {
      src: images.ellipseWithCup.orange.cup.src,
      alt: images.ellipseWithCup.orange.cup.alt,
    },
  });

  function handleImageChange(color) {
    let ellipse = images.ellipseWithCup[color].ellipse;
    let cup = images.ellipseWithCup[color].cup;

    setDisplayImages({
      ellipseImage: {
        src: ellipse.src,
        alt: ellipse.alt,
      },
      cupImage: {
        src: cup.src,
        alt: cup.alt,
      },
    });
  }
  return (
    <>
      <MainContainer>
        <Container>
          <Title>
            Isso é <span>Starbucks</span>
          </Title>
          <Intro>Mais que Café</Intro>
          <Text>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </Text>
          <Button />
          <LittleCups>
            <img
              onClick={() => handleImageChange("orange")}
              src={images.smallCup.orange.src}
              alt={images.smallCup.orange.alt}
            />
            <img
              onClick={() => handleImageChange("red")}
              src={images.smallCup.red.src}
              alt={images.smallCup.red.alt}
            />
            <img
              onClick={() => handleImageChange("yellow")}
              src={images.smallCup.yellow.src}
              alt={images.smallCup.yellow.alt}
            />
          </LittleCups>
        </Container>
        <ImageContainer>
          <Ellipse
            src={displayImages.ellipseImage.src}
            alt={displayImages.ellipseImage.alt}
          />
          <Cup
            src={displayImages.cupImage.src}
            alt={displayImages.cupImage.alt}
          />
        </ImageContainer>
      </MainContainer>
    </>
  );
}

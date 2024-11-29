import { useState, useEffect } from "react";

import {
  Main,
  ContainerSection,
  ContentSection,
  Img,
} from "./MainTemplateStyle";

import PropTypes from "prop-types";
import Button from "../Shared/Button";

export default function MainTemplate(props) {
  const { title, intro, mainText, source, altText, $isGreen } = props;

  const [isResponsive, setIsResponsive] = useState(false);
  //tentar novamente com css grid depois
  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Main $isGreen={$isGreen}>
      <ContainerSection $isGreen={$isGreen}>
        <ContentSection $isGreen={$isGreen}>
          <h1>{title}</h1>
          <h2>{intro}</h2>
          {isResponsive && (
            <Img $isResponsive={isResponsive} src={source} alt={altText} />
          )}
          <p>{mainText}</p>
          <Button />
        </ContentSection>
        {!isResponsive && (
          <Img $isResponsive={isResponsive} src={source} alt={altText} />
        )}
      </ContainerSection>
    </Main>
  );
}

MainTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  mainText: PropTypes.node,
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  altText: PropTypes.string,
  $isGreen: PropTypes.bool,
};

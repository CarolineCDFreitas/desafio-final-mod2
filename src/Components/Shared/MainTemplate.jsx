import {
  Main,
  ContainerSection,
  ContentSection,
  Img,
} from "./MainTemplateStyle";

import PropTypes from "prop-types";
import Button from "../Shared/Button";

export default function MainTemplate(props) {
  const { title, intro, mainText, source, altText, $isgreen } = props;

  return (
    <Main $isgreen={$isgreen}>
      <ContainerSection $isgreen={$isgreen}>
        <ContentSection $isgreen={$isgreen}>
          <h1>{title}</h1>
          <h2>{intro}</h2>
          <p>{mainText}</p>
          <Button />
        </ContentSection>
        <Img src={source} alt={altText} />
      </ContainerSection>
    </Main>
  );
}

MainTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  mainText: PropTypes.string,
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  altText: PropTypes.string,
  $isgreen: PropTypes.bool,
};

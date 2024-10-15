import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const CarouselContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 90%;
  height: 50vh;
  overflow: hidden;
`;

const CarouselItem = styled(Link)`
  flex: ${(props) => (props.expanded ? 2 : 1)};
  display: block;
  position: relative;
  cursor: pointer;
  transition: flex 0.5s ease-in-out;
  
  &:before {
    content: "";
    border-radius: 20px;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-position: center;
    opacity: ${(props) => (props.expanded ? 1 : 0.6)};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 1;
  }

  &:hover:before {
    opacity: 1;
  }

  /* Making sure the titles appear above the background image */
  & > * {
    position: relative;
    z-index: 2;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 22%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const CarouselItemTitle = styled.h2`
  font-size: 1.25rem;
  padding: 0.75rem;
  margin-bottom: 0;
`;

export const CarouselMain = () => {
  const { t, i18n } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(2);

  const products = [
    {
      title: t("bookstores"),
      bgImage: "/assets/bookstore.jpg",
      path: "/gestion-de-librerias",
    },
    {
      title: t("hospitality"),
      bgImage: "/assets/hotel4.jpg",
      path: "/gestion-de-hoteles",
    },
    {
      title: t("business-mgt"),
      bgImage: "/assets/gestion4.jpg",
      path: "/gestion-comercial",
    },
    {
      title: t("accounting"),
      bgImage: "/assets/accounting3.jpg",
      path: "/programa-de-contabilidad",
    },
    { title: t("cloud"), bgImage: "/assets/cloud41.jpg", path: "/cloud" },
  ];

  return (
    <CarouselContainer>
      {products.map((product, index) => (
        <CarouselItem
          key={index}
          bgImage={product.bgImage}
          to={`/${i18n.language}${product.path}`}
          expanded={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <TextContainer>
            <CarouselItemTitle>{product.title}</CarouselItemTitle>
          </TextContainer>
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

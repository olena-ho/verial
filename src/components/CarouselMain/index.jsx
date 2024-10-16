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
  transition: flex 0.6s ease-in-out;

  &:before {
    content: "";
    border-radius: 20px;
    background-image: url(${(props) => props.bgimage});
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
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 0 0 20px 20px;
`;

const CarouselItemTitle = styled.h2`
  font-size: 1.25rem;
  padding: 0.75rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  color: white;

  img {
    margin-left: 0.5rem;
    width: 20px;
  }
`;

export const CarouselMain = () => {
  const { t, i18n } = useTranslation(["navigation"]);
  const [hoveredIndex, setHoveredIndex] = useState(2);

  const products = [
    {
      title: t("bookstores"),
      bgimage: "/assets/bookstore.jpg",
      path: "/gestion-de-librerias",
    },
    {
      title: t("hospitality"),
      bgimage: "/assets/hotel4.jpg",
      path: "/gestion-de-hoteles",
    },
    {
      title: t("business-mgt"),
      bgimage: "/assets/gestion4.jpg",
      path: "/gestion-comercial",
    },
    {
      title: t("accounting"),
      bgimage: "/assets/accounting3.jpg",
      path: "/programa-de-contabilidad",
    },
    { title: t("cloud"), bgimage: "/assets/cloud41.jpg", path: "/cloud" },
  ];

  return (
    <CarouselContainer>
      {products.map((product, index) => (
        <CarouselItem
          key={index}
          bgimage={product.bgimage}
          to={`/${i18n.language}${product.path}`}
          expanded={hoveredIndex === index ? "true" : undefined}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <TextContainer>
            <CarouselItemTitle>
              {product.title}
              {hoveredIndex === index && (
                <img src="/assets/icons/arrow.svg" alt="arrow" />
              )}
            </CarouselItemTitle>
          </TextContainer>
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const CarouselContainer = styled.div`
  display: flex;
  width: 90%;
  height: 50vh;
  border-radius: 20px;
  overflow: hidden;
`;

const CarouselItem = styled.div`
  flex: ${(props) => (props.expanded ? 2 : 1)};
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  position: relative;
  transition: flex 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

export const CarouselMain = () => {
  const { t, i18n } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    { title: t("bookstores"), bgImage: "/assets/bookstore.jpg", path: "/gestion-de-librerias" },
    { title: t("hospitality"), bgImage: "/assets/hotel.jpg", path: "/gestion-de-hoteles" },
    { title: t("business-mgt"), bgImage: "/assets/management.jpg", path: "/gestion-comercial" },
    { title: t("accounting"), bgImage: "/assets/accounting.jpg", path: "/programa-de-contabilidad" },
    { title: t("cloud"), bgImage: "/assets/cloud.jpg", path: "/cloud" },
  ];

  return (
    <CarouselContainer>
      {products.map((product, index) => (
        <CarouselItem
          key={index}
          bgImage={product.bgImage}
          expanded={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <OverlayText>
            <h2>{product.title}</h2>
            <a href={`/${i18n.language}${product.path}`} style={{ color: "#fff" }}>
              Learn More
            </a>
          </OverlayText>
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

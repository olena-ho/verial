import styled from "styled-components";
import { useTranslation } from "react-i18next";

const BookStoresContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const MainTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 1em;
  text-align: center;
  max-width: 40%;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

export const BookStores = () => {
  const { t } = useTranslation();

  return (
    <BookStoresContainer>
      <MainTitle>{t("bookStores.mainTitle")}</MainTitle>
    </BookStoresContainer>
  );
};

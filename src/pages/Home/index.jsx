import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { CarouselMain } from "../../components/CarouselMain";

const HomeContainer = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 90px);
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  margin-bottom: 2em;
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

const CarouselSection = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
  width: 100%;
`;

export const Home = () => {
  const { t } = useTranslation();

  return (
    <HomeContainer>
      <TitleSection>
        <MainTitle>{t("mainTitle")}</MainTitle>
      </TitleSection>
      <CarouselSection>
        <CarouselMain />
      </CarouselSection>
    </HomeContainer>
  );
};

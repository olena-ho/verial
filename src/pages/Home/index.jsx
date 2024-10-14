import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { CarouselMain } from "../../components/CarouselMain";

const HomeContainer = styled.div`
  display: flex;
  margin-top: 82px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const MainTitle = styled.h1`
  font-size: 40px;
  font-weight: 300;
  line-height: 1.25;
  text-align: center;
  max-width: 40%;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const CarouselSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const OfferSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 4rem;
  margin-top: 2rem;
`;

const OfferImage = styled.img`
  width: 50%;
  border-radius: 0 80px 0 80px;
`;
const OfferText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const OfferList = styled.ul`
  font-size: 1.25rem;
  list-style-type: disc;
  padding-left: 20px;
  line-height: 2.5;
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
      <OfferSection>
        <OfferImage src="/public/assets/gestion8.jpg" alt="offer" />
        <OfferText>
          <h2>{t("offerTitle")}</h2>
          <OfferList>
            <li>{t("offer1")}</li>
            <li>{t("offer2")}</li>
            <li>{t("offer3")}</li>
          </OfferList>
        </OfferText>
      </OfferSection>
    </HomeContainer>
  );
};

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
  margin: 2rem 0;
`;

const OfferImage = styled.img`
  width: 50%;
  height: fit-content;
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

const InvestorsSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const InvestorsLogos = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const LogoImage = styled.img`
  max-width: calc(90% / 4);
  height: 100px;
  object-fit: contain;
  flex-shrink: 1;
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
        <OfferImage src="/assets/gestion8.jpg" alt="offer" />
        <OfferText>
          <h2>{t("offerTitle")}</h2>
          <OfferList>
            <li>{t("offer1")}</li>
            <li>{t("offer2")}</li>
            <li>{t("offer3")}</li>
            <li>{t("offer4")}</li>
          </OfferList>
        </OfferText>
      </OfferSection>
      <InvestorsSection>
        <h2>{t("investorsTitle")}</h2>
        <InvestorsLogos>
          <LogoImage src="/assets/logos/ice-logo.png" alt="competitividad empresarial" />
          <LogoImage src="/assets/logos/junta-logo.png" alt="Junta de Castilla y Leon" />
          <LogoImage src="/assets/logos/europa-impulsa-logo.png" alt="europa impulsa" />
          <LogoImage src="/assets/logos/fondo-ue-logo.png" alt="Fondo UE" />
        </InvestorsLogos>
      </InvestorsSection>
    </HomeContainer>
  );
};

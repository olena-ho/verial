import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Container } from "../../styles/global";

const Section = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: space-between;
`;

const TitleSection = styled.div`
  background-color: #0078d7;
  display: flex;
  border-radius: 0 30px 0 30px;
  width: 35%;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

const TitleText = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  text-align: center;
`;

const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  width: 60%;
  line-height: 2;
`;

const LineSloganContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Line = styled.hr`
  flex-grow: 1;
  border: none;
  border-top: 2px solid #0078d7;
  margin: 0 10px;
`;

const Slogan = styled.span`
  font-weight: 600;
`;

export const AboutVerial = () => {
  const { t } = useTranslation(["aboutVerial"]);
  return (
    <Container>
      <h1>{t("about.mainTitle")}</h1>
      <Section>
        <TitleSection>
          <TitleText>{t("about.who")}</TitleText>
        </TitleSection>
        <SectionText>
          <p>{t("about.who.text1")}</p>
          <p>{t("about.who.text2")}</p>
          <p>{t("about.who.text3")}</p>
        </SectionText>
      </Section>

      <LineSloganContainer>
        <Line />
        <Slogan>{t("about.slogan")}</Slogan>
        <Line />
      </LineSloganContainer>

      <Section>
        <SectionText>
          <p>{t("about.clients.text1")}</p>
          <p>{t("about.clients.text2") }</p>
        </SectionText>
        <TitleSection>
          <TitleText>{t("about.clients")}</TitleText>
        </TitleSection>
      </Section>
    </Container>
  );
};

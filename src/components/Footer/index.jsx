import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const InvestorsSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
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

const FooterLinksContainer = styled.footer`
  background-color: #0078d7;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: white;
  padding: 3rem 0;
  margin-top: 4rem;
  text-align: left;
  width: 100%;
`;

const FooterUpperPart = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 90%;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  gap: 1rem;
`;

const CompatibleLogo = styled.img`
  width: 150px;
`;

const MediaLogos = styled.div`
  display: flex;
  gap: 1rem;
`;

const LogoImg = styled.img`
  width: 30px;
`;

const FooterList = styled.ul`
  line-height: 2;
`;

const FooterLink = styled(Link)`
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export function Footer() {
  const { t, i18n } = useTranslation(["translation", "navigation"]);

  return (
    <>
      <InvestorsSection>
        <h2>{t("investorsTitle")}</h2>
        <InvestorsLogos>
          <LogoImage
            src="/assets/logos/ice-logo.png"
            alt="competitividad empresarial"
          />
          <LogoImage
            src="/assets/logos/junta-logo.png"
            alt="Junta de Castilla y Leon"
          />
          <LogoImage
            src="/assets/logos/europa-impulsa-logo.png"
            alt="europa impulsa"
          />
          <LogoImage src="/assets/logos/fondo-ue-logo.png" alt="Fondo UE" />
        </InvestorsLogos>
      </InvestorsSection>
      <FooterLinksContainer>
        <FooterUpperPart>
          <FooterItem>
            <CompatibleLogo src="/assets/logos/Logo-compatible.jpg" />
          </FooterItem>
          <FooterItem>
            <h3>{t("footer.contact")}</h3>
            <FooterList>
              <li>{t("footer.office")}: Paseo Gran Capitán 62</li>
              <li>Tel: 923 121 363</li>
              <li>Email: comercial@verial.es</li>
            </FooterList>
            <MediaLogos>
              <a
                href="https://www.linkedin.com/company/verial-soft-s-l/"
                target="_blank"
              >
                <LogoImg src="/assets/logos/linkedin.svg" />
              </a>
              <a
                href="https://www.linkedin.com/company/verial-soft-s-l/"
                target="_blank"
              >
                <LogoImg src="/assets/logos/facebook.svg" />
              </a>
            </MediaLogos>
          </FooterItem>
          <FooterItem>
            <h3>{t("footer.company")}</h3>
            <FooterList>
              <li>
                <FooterLink to={`/${i18n.language}/sobre-verial`}>
                  {t("navigation:aboutVerial")}
                </FooterLink>
              </li>
              <li>
                <FooterLink to={`/${i18n.language}/distribuidor-verial`}>
                  {t("footer.distributor")}
                </FooterLink>
              </li>
              <li>
                <FooterLink to={`/${i18n.language}/codigo_etico`}>
                  {t("footer.ethics")}
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/">{t("footer.funding")}</FooterLink>
              </li>
              <li>
                <FooterLink to={`/${i18n.language}/f-a-q`}>
                  {t("navigation:FAQs")}
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/">Actualidad Verial</FooterLink>
              </li>
            </FooterList>
          </FooterItem>
          <FooterItem>
            <h3>{t("footer.solutions")}</h3>
            <FooterList>
              <li>
                <FooterLink to={`/${i18n.language}/distribuidor-verial`}>
                  {t("navigation:solutions-overview")}
                </FooterLink>
              </li>
              <li>
                <FooterLink to={`/${i18n.language}/sobre-verial`}>
                  {t("footer.training")}
                </FooterLink>
              </li>
              <li>
                <FooterLink to={`/${i18n.language}/sobre-verial`}>
                  {t("navigation:kit-digital")}
                </FooterLink>
              </li>
            </FooterList>
          </FooterItem>
          <FooterItem>
            <h3>{t("footer.legal")}</h3>
            <FooterList>
              <li>
                <FooterLink to={`/${i18n.language}/sobre-verial`}>
                  Configuración de cookies
                </FooterLink>
              </li>
              <li>
                <FooterLink to={`/${i18n.language}/distribuidor-verial`}>
                  Aviso legal
                </FooterLink>
              </li>
            </FooterList>
          </FooterItem>
        </FooterUpperPart>
      </FooterLinksContainer>
    </>
  );
}

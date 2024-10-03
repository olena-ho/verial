import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
  /* //make the footer stick to the bottom of the page
  position: absolute;
  bottom: 0; */
  width: 100%;
`;

export function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <p>{t('footer.text')}</p>
    </FooterContainer>
  );
}

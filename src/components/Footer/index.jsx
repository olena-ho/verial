import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
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

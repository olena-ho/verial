import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/logo-whiteBG.png";
import english_flag from "../../assets/flags/english-flag.png";
import spanish_flag from "../../assets/flags/spanish-flag.png";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const LeftSection = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-start;
`;

const HomeLink = styled(Link)`
  display: inline-block;
`;

const Logo = styled.img`
  width: 75px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  color: #333;

  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  width: 20%;
`;

const LngSelection = styled.div`
  position: relative;
  cursor: pointer;
  padding: 20px 0;
`;

const ActiveFlag = styled.img`
  width: 30px;
  vertical-align: middle;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 57px;
  right: -1rem;
  background-color: white;
  list-style: none;
  border: none;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.show ? "block" : "none")};
  padding: 0;
  margin: 0;
  z-index: 200;
`;

const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Flag = styled.img`
  width: 30px;
`;

const DemoButton = styled.button`
  background-color: #ff5b5b;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ff3a3a;
  }
`;

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const changeLanguage = (lng) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
      const currentLng = pathname.split("/")[1];
      const newPath = currentLng
        ? pathname.replace(currentLng, lng)
        : `/${lng}${pathname}`;
      navigate(newPath);
      setShowDropdown(false);
    }
  };

  const currentLanguage = i18n.language;

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <HomeLink to={`/${currentLanguage}`}>
          <Logo src={logo} alt="Verial logo" />
        </HomeLink>
      </LeftSection>
      <Nav>
        <NavLink
          to={`/${currentLanguage}/products`}
        >
          {t("products")}
        </NavLink>
        <NavLink
          to={`/${currentLanguage}/services`}
        >
          {t("services")}
        </NavLink>
        <NavLink
          to={`/${currentLanguage}/resources`}
        >
          {t("resources")}
        </NavLink>
        <NavLink
          to={`/${currentLanguage}/about-verial`}
        >
          {t("aboutVerial")}
        </NavLink>
        <NavLink
          to={`/${currentLanguage}/distribution`}
        >
          {t("distribution")}
        </NavLink>
      </Nav>
      <RightSection>
        <LngSelection
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ActiveFlag
            src={currentLanguage === "es" ? spanish_flag : english_flag}
            alt={currentLanguage === "es" ? "Spanish" : "English"}
          />
          <Dropdown show={showDropdown ? "true" : undefined}>
            {currentLanguage === "es" ? (
              <DropdownItem onClick={() => changeLanguage("en")}>
                English
                <Flag src={english_flag} alt="English" />
              </DropdownItem>
            ) : (
              <DropdownItem onClick={() => changeLanguage("es")}>
                Español
                <Flag src={spanish_flag} alt="Spanish" />
              </DropdownItem>
            )}
          </Dropdown>
        </LngSelection>
        <DemoButton>{t("bookDemo")}</DemoButton>
      </RightSection>
    </HeaderContainer>
  );
};

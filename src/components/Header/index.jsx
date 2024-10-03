import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";

import { NavDropdown } from "../NavDropdown";
import logo from "/assets/logo-whiteBG.png";
import english_flag from "/assets/flags/english-flag.png";
import spanish_flag from "/assets/flags/spanish-flag.png";

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
  position: relative;
  `;

const NavItem = styled.div`
  position: relative;
  padding: 20px 0;
  cursor: pointer;
`;

const NavLink = styled.span`
  font-size: 1rem;
  color: #333;
  padding: 0.5rem;

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

const DropdownFlag = styled.ul.attrs((props) => ({
  style: {
    display: props.show ? "block" : "none",
  },
}))`
  position: absolute;
  top: 57px;
  right: -1rem;
  background-color: white;
  list-style: none;
  border: none;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
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

  &:hover {
    background-color: #f0f0f0;
  }
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
  const { t, i18n } = useTranslation(["translation", "navigation"]);
  const [showDropdown, setShowDropdown] = useState({
    solutions: false,
    services: false,
    resources: false,
  });
  const [showLngDropdown, setShowLngDropdown] = useState(false);
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
      setShowLngDropdown(false);
    }
  };

  const currentLanguage = i18n.language;

  const menuItems = {
    solutions: [
      { key: "solutions-overview", label: t("solutions-overview"), path: "/soluciones-y-productos" },
      { key: "business-mgt", label: t("business-mgt"), path: "/gestion-comercial" },
      { key: "hospitality", label: t("hospitality"), path: "/gestion-de-hoteles" },
      { key: "bookstores", label: t("bookstores"), path: "/gestion-de-librerias" },
      { key: "accounting", label: t("accounting"), path: "/programa-de-contabilidad" },
      { key: "cloud", label: t("cloud"), path: "/cloud" },
    ],
    services: [
      { key: "service1", label: t("service1"), path: "/servicios" },
      { key: "service2", label: t("service2"), path: "/servicios/service2" },
    ],
    resources: [
      { key: "kit-digital", label: t("kit-digital"), path: "/kit-digital" },
      { key: "FAQs", label: t("FAQs"), path: "/f-a-q" },
    ],
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <HomeLink to={`/${currentLanguage}`}>
          <Logo src={logo} alt="Verial logo" />
        </HomeLink>
      </LeftSection>
      <Nav>
        {["solutions", "services", "resources"].map((key) => (
          <NavItem
            key={key}
            onMouseEnter={() =>
              setShowDropdown((prev) => ({ ...prev, [key]: true }))
            }
            onMouseLeave={() =>
              setShowDropdown((prev) => ({ ...prev, [key]: false }))
            }
          >
            <NavLink>{t(key)}</NavLink>
            <NavDropdown
              show={showDropdown[key] ? "true" : undefined}
              items={menuItems[key]}
              currentLanguage={currentLanguage}
            />
          </NavItem>
        ))}
        <NavLink as={Link} to={`/${currentLanguage}/sobre-verial`}>
          {t("aboutVerial")}
        </NavLink>
        <NavLink as={Link} to={`/${currentLanguage}/distribuidor-verial`}>
          {t("distribution")}
        </NavLink>
      </Nav>
      <RightSection>
        <LngSelection
          onMouseEnter={() => setShowLngDropdown(true)}
          onMouseLeave={() => setShowLngDropdown(false)}
          onClick={() => setShowLngDropdown((prev) => !prev)} // Toggle dropdown on click
        >
          <ActiveFlag
            src={currentLanguage === "es" ? spanish_flag : english_flag}
            alt={currentLanguage === "es" ? "Spanish" : "English"}
          />
          <DropdownFlag show={showLngDropdown ? "true" : undefined}>
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
          </DropdownFlag>
        </LngSelection>
        <DemoButton>{t("bookDemo")}</DemoButton>
      </RightSection>
    </HeaderContainer>
  );
};

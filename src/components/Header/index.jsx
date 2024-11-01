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
      {
        key: "solutions-overview",
        label: t("navigation:solutions-overview"),
        path: "/soluciones-y-productos",
      },
      {
        key: "business-mgt",
        label: t("navigation:business-mgt"),
        path: "/gestion-comercial",
        types: [
          {
            key: "bebidas y alimentacion",
            label: t("navigation:bebidas"),
            path: "/bebidas-y-alimentacion",
            img: "/assets/icons/wine.png",
          },
          {
            key: "mayorista",
            label: t("navigation:mayorista"),
            path: "/distribucion-mayorista",
            img: "/assets/icons/wholesaler.png",
          },
          {
            key: "supermercados",
            label: t("navigation:supermercados"),
            path: "/gestion-de-supermercados",
            img: "/assets/icons/trolley.png",
          },
          {
            key: "ferreterias",
            label: t("navigation:ferreterias"),
            path: "/gestion-de-ferreterias",
            img: "/assets/icons/maintenance.png",
          },
          {
            key: "veterinaria",
            label: t("navigation:veterinaria"),
            path: "/veterinaria",
            img: "/assets/icons/dog.png",
          },
          {
            key: "carnicas",
            label: t("navigation:carnicas"),
            path: "/carnicas",
            img: "/assets/icons/ham-leg.png",
          },
        ],
      },
      {
        key: "hospitality",
        label: t("navigation:hospitality"),
        path: "/gestion-de-hoteles",
        types: [
          {
            key: "spa",
            label: t("navigation:spa"),
            path: "/spa-balneario",
            img: "/assets/icons/relax.png",
          },
          {
            key: "camping",
            label: t("navigation:camping"),
            path: "/gestion-de-camping",
            img: "/assets/icons/camping.png",
          },
          {
            key: "restaurantes",
            label: t("navigation:restaurantes"),
            path: "/gestion-de-restaurantes-y-pubs",
            img: "/assets/icons/serving-dish.png",
          },
          {
            key: "hotel",
            label: t("navigation:hotel"),
            path: "/gestion-de-hoteles",
            img: "/assets/icons/hotel.png",
          },
        ],
      },
      {
        key: "bookstores",
        label: t("navigation:bookstores"),
        path: "/gestion-de-librerias",
      },
      {
        key: "accounting",
        label: t("navigation:accounting"),
        path: "/programa-de-contabilidad",
      },
      { key: "cloud", label: t("navigation:cloud"), path: "/cloud" },
    ],
    services: [
      {
        key: "services-overview",
        label: t("navigation:service-overview"),
        path: "/servicios",
      },
      {
        key: "support-training",
        label: t("navigation:support-training"),
        path: "/formacion",
      },
    ],
    resources: [
      { key: "FAQs", label: t("navigation:FAQs"), path: "/f-a-q" },
      { key: "Documents", label: t("navigation:Documents"), path: "/DOCS" },
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
            <NavLink>{t(`navigation:${key}`)}</NavLink>
            <NavDropdown
              show={showDropdown[key] ? "true" : undefined}
              setShowDropdown={(value) =>
                setShowDropdown((prev) => ({ ...prev, [key]: value }))
              }
              items={menuItems[key]}
              currentLanguage={currentLanguage}
            />
          </NavItem>
        ))}
        <NavLink as={Link} to={`/${currentLanguage}/sobre-verial`}>
          {t("navigation:aboutVerial")}
        </NavLink>
        <NavLink as={Link} to={`/${currentLanguage}/distribuidor-verial`}>
          {t("navigation:distribution")}
        </NavLink>
        <NavLink as={Link} to={`/${currentLanguage}/kit-digital`}>
          {t("navigation:kit-digital")}
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
        <Link to={`/${currentLanguage}/solicitar-demo`}>
          <DemoButton>{t("bookDemo")}</DemoButton>
        </Link>
      </RightSection>
    </HeaderContainer>
  );
};

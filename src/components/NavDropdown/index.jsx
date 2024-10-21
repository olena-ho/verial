/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DropdownContainer = styled.div.attrs((props) => ({
  style: {
    display: props.show ? "flex" : "none",
  },
}))`
  position: absolute;
  top: 57px;
  left: -100%;
  width: 50vw;
  background-color: white;
  border: none;
  padding: 1rem;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  margin: 0;
  z-index: 200;
`;

const LeftContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 30%;
`;

const DropdownItem = styled.li`
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #EDF5FC;
  }
`;

const DropdownLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  display: block;
  padding: 0.75rem 1rem;
`;

const RightContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  gap: 1rem;
`;

const NavSubTitle = styled.h4`
  color: #6e6e6e;
`;

export const NavDropdown = ({ show, items, currentLanguage }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const { t } = useTranslation("navigation");

  const getRightContent = (key) => {
    return t(`${key}-brief`);
  };

  const selectedItem = items[selectedItemIndex];

  return (
    <DropdownContainer show={show}>
      <LeftContainer>
        {items.map(({ key, label, path }, index) => (
          <DropdownItem
            key={key}
            onMouseEnter={() => setSelectedItemIndex(index)}
          >
            <DropdownLink to={`/${currentLanguage}${path}`}>
              {label}
            </DropdownLink>
          </DropdownItem>
        ))}
      </LeftContainer>
      <RightContainer>
        <NavSubTitle>{t("overview-title")}</NavSubTitle>
        {getRightContent(items[selectedItemIndex].key)}

        {selectedItem.types && (
          <>
            <NavSubTitle>{t("business-type-title")}</NavSubTitle>
            <ul>
            {selectedItem.types.map(({ key, label, path }) => (
              <DropdownItem key={key}>
              <DropdownLink to={`/${currentLanguage}${path}`}>
                {label}
                </DropdownLink>
              </DropdownItem>
            ))}
            </ul>
          </>
        
        )}
      </RightContainer>
    </DropdownContainer>
  );
};

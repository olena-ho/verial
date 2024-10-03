/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DropdownContainer = styled.div.attrs((props) => ({
  style: {
    display: props.show ? "flex" : "none",
  },
}))`
  position: absolute;
  top: 57px;
  left: -1rem;
  width: 600px;
  background-color: white;
  border: none;
  padding-top: 0.5rem;
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
  &:hover {
    background-color: #f0f0f0;
  }

  &:last-child:hover {
    border-radius: 0 0 0 10px;
  }
`;

const DropdownLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: block;
  padding: 1rem 1.5rem;
`;

const RightContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem 1rem;
  line-height: 1.5;
`;

export const NavDropdown = ({ show, items, currentLanguage }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const { t } = useTranslation("navigation");

  useEffect(() => {
    if (show) {
      setSelectedItemIndex(0);
    }
  }, [show]);

  const getRightContent = (key) => {
    return t(`${key}-brief`);
  };

  return (
    <DropdownContainer show={show}>
      <LeftContainer>
        {items.map(({ key, label, path }, index) => (
          <DropdownItem
            key={key}
            active={index === selectedItemIndex}
            onMouseEnter={() => setSelectedItemIndex(index)}
          >
            <DropdownLink to={`/${currentLanguage}${path}`}>
              {label}
            </DropdownLink>
          </DropdownItem>
        ))}
      </LeftContainer>
      <RightContainer>
        {getRightContent(items[selectedItemIndex].key)}
      </RightContainer>
    </DropdownContainer>
  );
};

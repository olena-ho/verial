/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";

const DropdownContainer = styled.ul.attrs((props) => ({
  style: {
    display: props.show ? "block" : "none",
  },
}))`
  position: absolute;
  top: 57px;
  left: -1rem;
  width: max-content;
  background-color: white;
  list-style: none;
  border: none;
  padding-top: 0.5rem;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  margin: 0;
  z-index: 200;
`;

const DropdownItem = styled.li`
  &:hover {
    background-color: #f0f0f0;
  }

  &:last-child:hover {
    border-radius: 0 0 10px 10px;
  }
`;

const DropdownLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: block;
  padding: 1rem 1.5rem;
`;

export const NavDropdown = ({ show, items, currentLanguage }) => {
  return (
    <DropdownContainer show={show}>
      {items.map(({ label, path }, index) => (
        <DropdownItem key={index}>
          <DropdownLink to={`/${currentLanguage}${path}`}>{label}</DropdownLink>
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
};

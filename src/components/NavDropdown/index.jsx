/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";

const DropdownContainer = styled.ul`
  position: absolute;
  top: 40px; /* Adjust this value later */
  background-color: white;
  list-style: none;
  border: 1px solid #ddd;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  margin: 0;
  z-index: 200;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const DropdownLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
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

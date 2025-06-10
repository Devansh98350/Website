// DeityButtonGrid.js
import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const deityPages = [
  { name: "108 Gods Name", path: "/108-names-of-deities" },
  { name: "Durga", path: "/108-names-of-deities/durga" },
  { name: "Shiva", path: "/108-names-of-deities/shiva" },
  { name: "Krishna", path: "/108-names-of-deities/krishna" },
  { name: "Shani", path: "/108-names-of-deities/shani" },
  { name: "Surya", path: "/108-names-of-deities/surya" },
  { name: "Narashimha", path: "/108-names-of-deities/narashima" },
  { name: "Ganesha", path: "/108-names-of-deities/ganesha" },
  { name: "Laxmi", path: "/108-names-of-deities/lakshmi" },
  { name: "Vishnu", path: "/108-names-of-deities/vishnu" },
  { name: "Rama", path: "/108-names-of-deities/ram" },
  { name: "Hanuman", path: "/108-names-of-deities/hanuman" },
  { name: "Murugan", path: "/108-names-of-deities/murugan" },
];

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const StyledLinkButton = styled(Link)`
  background-color: #fff4e6;
  color: #4b2e05;
  border: 2px solid #f0c36d;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #ffe2b7;
    border-color: #e0a84b;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Deity108ButtonGrid = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const filteredPages = deityPages.filter(
    (deity) => deity.path !== currentPath
  );

  return (
    <GridContainer>
      {filteredPages.map((deity) => (
        <StyledLinkButton key={deity.name} to={deity.path}>
          {deity.name}
        </StyledLinkButton>
      ))}
    </GridContainer>
  );
};

export default Deity108ButtonGrid;

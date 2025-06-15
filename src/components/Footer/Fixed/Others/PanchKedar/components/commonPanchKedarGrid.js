import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const PanchKedarPages = [
  { name: "Panch Kedar", path: "/panch-kedar" },
  { name: "Kedarnath", path: "/panch-kedar/kedarnath" },
  { name: "Tungnath", path: "/panch-kedar/tungnath" },
  { name: "Rudranath", path: "/panch-kedar/rudranath" },
  { name: "Madmaheshwar", path: "/panch-kedar/madmaheshwar" },
  { name: "Kalpeshwar", path: "/panch-kedar/kalpeshwar" },
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

const PanchKedarButtonGrid = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const filteredPages = PanchKedarPages.filter(
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

export default PanchKedarButtonGrid;

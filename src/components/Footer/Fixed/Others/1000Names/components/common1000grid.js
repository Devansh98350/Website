// DeityButtonGrid.js
import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const deityPages = [
  { name: "1000 Gods Name", path: "/1000-names-of-deities" },
  { name: "Goddess Durga", path: "/1000-names-of-deities/durga" },
  { name: "Lord Shiva", path: "/1000-names-of-deities/shiva" },
  { name: "Lord Krishna", path: "/1000-names-of-deities/krishna" },
  { name: "Lord Ganesha", path: "/1000-names-of-deities/ganesha" },
  { name: "Lord Lakshmi", path: "/1000-names-of-deities/lakshmi" },
  { name: "Lord Vishnu", path: "/1000-names-of-deities/vishnu" },
  { name: "Lord Ram", path: "/1000-names-of-deities/ram" },
  { name: "Lord Hanuman", path: "/1000-names-of-deities/hanuman" },
  { name: "Goddess Radha", path: "/1000-names-of-deities/radha" },
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

const Deity1000ButtonGrid = () => {
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

export default Deity1000ButtonGrid;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import initiallogo from "../../assests/Home_page/logo.png";

const StyledSidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #f2320c;
  padding: 5px 10px;
  .sidenav {
    height: 100%;
    width: 70%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: #faf9f9; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s;
  }
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 15px;
    color: black;
    display: block;
    transition: 0.3s;
  }
  .sidenav .closebtn {
    position: absolute;
    text=align: right;
    top: 0;
    right: 0;
    font-size: 48px;
    color: #111;
    margin-top: -15px;
  }
  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  #main {
    transition: margin-left 0.5s;
    padding: 20px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
`;
const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const HamburgerIcon = styled.span`
  font-size: 30px;
`;
const UserDetails = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
`;
const UserImage = styled.img`
  margin-left: 5px;
  width: auto;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
const UserName = styled.div`
  font-weight: bold;
  color: red;
  font-size: 24px;
`;
const Details = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  border-bottom: 2px solid #f2320c;
  width: 100%;
  padding: 5px 10px;
`;
const Image = styled.img`
  margin-left: 5px;
  width: auto;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
const Name = styled.div`
  font-weight: bold;
  color: red;
  font-size: 24px;
`;
const SidebarContent = styled.div`
  /* Styling for the sidebar content */
`;
const CloseButton = styled.a`
  cursor: pointer;
  color: black; /* Add your desired color */
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black; /* Set link color */
  display: block;
  padding: 10px; /* Adjust padding as needed */
`;

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <StyledSidebarContainer>
      <MenuButton onClick={toggleSidebar}>
        <HamburgerIcon>&#9776;</HamburgerIcon>
      </MenuButton>
      <UserDetails>
        <UserImage src={initiallogo} alt="" />
        <UserName>AstroSwarg</UserName>
      </UserDetails>
      {isSidebarOpen && (
        <SidebarContent>
          <div id="mySidenav" className="sidenav">
            <CloseButton className="closebtn" onClick={closeSidebar}>
              &times;
            </CloseButton>
            <Details>
              <Image src={initiallogo} alt="" />
              <Name>AstroSwarg</Name>
            </Details>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/freekundli">Free Kundli</StyledLink>
            <StyledLink to="/horoscope-2024">Horoscope 2024</StyledLink>
            <StyledLink to="#">Kundli Matching</StyledLink>
            <StyledLink to="#">Talk with Astrologer</StyledLink>
            <StyledLink to="#">Chat with Astrologer</StyledLink>
            <StyledLink to="#">Book PanditJi Online</StyledLink>
            <StyledLink to="#">AstroSwarg Shop</StyledLink>
            <StyledLink to="#">Contact Us</StyledLink>
          </div>
        </SidebarContent>
      )}
    </StyledSidebarContainer>
  );
};

export default Sidebar;

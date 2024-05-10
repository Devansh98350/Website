import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import mainlogo from "../../assests/Home_page/logo.png";

const StyledSidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 4px solid red;
  padding: 5px 10px;
  .sidenav {
    height: 100%;
    width: 70%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: white; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s;
    font-size: 19px;
  }
  .active {
    background-color: blue;
  }
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 19px;
    background-color: white;
    color: black;
    display: block;
    transition: 0.3s;
  }
  .sidenav .closebtn {
    position: absolute;
    text=align: right;
    top: 0;
    border-bottom: 4px solid red;
    right: 0;
    font-size: 48px;
    color: #111;
    margin-top: -28px;
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
  @media screen and (max-width: 475px) {
    .sidenav {
      width: 80%;
    }
  }
  @media screen and (max-width: 400px) {
    .sidenav {
      width: 90%;
    }
  }
  @media screen and (max-width: 340px) {
    .sidenav {
      width: 95%;
    }
  }
  @media screen and (max-width: 320px) {
    .sidenav {
      width: 100%;
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
  font-size: 30px;
`;
const Details = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  border-bottom: 4px solid red;
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
const SidebarContent = styled.div`
  background-color: white;
`;
const CloseButton = styled.a`
  cursor: pointer;
  color: black; /* Add your desired color */
`;
// Styled component for the NavLink (navigation link)
const StyledNavLink = styled(NavLink)`
  color: white;
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  transition: 0.3s;
  background-color: red;
  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: blue;
  }
`;
// Styled component for the dropdown menu
const DropdownMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  border-bottom: 1px solid orange;
  border-top: 1px solid orange;
  .dropdown-item {
    color: black;
    padding: 10px 30px;
    text-decoration: none;
    display: block;
    transition: 0.3s;

    &:hover {
      background-color: #555;
    }
  }
`;
const DropdownMenu1 = styled.ul`
  list-style-type: none;
  padding: 0;
  border-bottom: 1px solid blue;
  border-top: 1px solid blue;
  .dropdown-item {
    color: black;
    padding: 10px 30px;
    text-decoration: none;
    display: block;
    transition: 0.3s;

    &:hover {
      background-color: #555;
    }
  }
`;
// Styled component for the dropdown toggle (navigation link with dropdown)
const DropdownToggle = styled(StyledNavLink)`
  color: white;
  display: block;
  padding: 1px 1px;
  text-decoration: none;
  transition: 0.3s;
  background-color: white;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #2904f9;
  }
`;
const DropdownToggle1 = styled(StyledNavLink)`
  color: blue;
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #2904f9;
  }
`;
const DropdownItem = styled.li`
  color: white;
  padding: 2px 2px;
  text-decoration: none;
  display: block;
  transition: 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <StyledSidebarContainer>
      <MenuButton onClick={toggleSidebar}>
        <HamburgerIcon>&#9776;</HamburgerIcon>
      </MenuButton>
      <UserDetails>
        <UserImage src={mainlogo} alt="" />
        <UserName>AstroSwarg</UserName>
      </UserDetails>
      {isSidebarOpen && (
        <SidebarContent>
          <div id="mySidenav" className="sidenav">
            <CloseButton className="closebtn" onClick={closeSidebar}>
              &times;
            </CloseButton>
            <Details>
              <Image src={mainlogo} alt="" />
              <UserName>AstroSwarg</UserName>
            </Details>

            <StyledNavLink to="/" exact>
              Home
            </StyledNavLink>
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("about")}
              className="dropdown-toggle"
            >
              About
            </DropdownToggle>
            {dropdownOpen.about && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    About AstroSwarg
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Board of Advisors
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    FAQ's
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Gallery
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("astroservices")}
              className="dropdown-toggle"
            >
              Astro Services
            </DropdownToggle>
            {dropdownOpen.astroservices && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Talk to Astrologer
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Chat with Astrologer
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Kundli Matching
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Palm Reading
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("pujaservices")}
              className="dropdown-toggle"
            >
              Puja Services
            </DropdownToggle>
            {dropdownOpen.pujaservices && (
              <DropdownMenu1>
                <DropdownToggle1
                  to="#"
                  onClick={() => toggleDropdown("puran")}
                  className="dropdown-toggle"
                >
                  Puran Katha
                </DropdownToggle1>
                {dropdownOpen.puran && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Bhagwat Katha
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Shiv Maha Puran
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Ram Katha
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Shrimad Devi Bhagwat Puran
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Vishnu Puran Katha
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Bhaktmal Katha
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  to="#"
                  onClick={() => toggleDropdown("shanti")}
                  className="dropdown-toggle"
                >
                  Shanti Puja
                </DropdownToggle1>
                {dropdownOpen.shanti && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Narayanbali Pitrushraddh Vidhi
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        KaalSharp Yog Shanti
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Nakshatra Shanti
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Vastu Shanti
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        NavGrah Shanti
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Manglik Dosh Shanti
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Shani Shanti
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Guru Shanti
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Rahu Shanti
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Grih Parvesh
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Office Grah Shanti
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Sourya Mandal Shanti
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  to="#"
                  onClick={() => toggleDropdown("yagna")}
                  className="dropdown-toggle"
                >
                  Yagna
                </DropdownToggle1>
                {dropdownOpen.yagna && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Ramarcha Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Shat Chandi Yagna
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Banglamukhi Jaap
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Sri Suktam Havan
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Maha Mritunjay Jap
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Vishnu Yagna
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Navchandi Yagna
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Ekadashi Yagna
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  to="#"
                  onClick={() => toggleDropdown("sanskar")}
                  className="dropdown-toggle"
                >
                  Sanskar Vidhi
                </DropdownToggle1>
                {dropdownOpen.sanskar && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Namkaran Sanskar
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Mundan Sanskar
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Yagnopavit Sanskar
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Vivah Sanskar
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Annaprashan Sanskar
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Vidya Aarambh Sanskar
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Antyoshti Sanskar
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  to="#"
                  onClick={() => toggleDropdown("sthapan")}
                  className="dropdown-toggle"
                >
                  Sthapan Puja
                </DropdownToggle1>
                {dropdownOpen.sthapan && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Ghat Sthapna
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Rudra Abhishek
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Laghu Rudra
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Maha Rudra Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Ati Rudra Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Murti Pranpratishtha
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Yantra Sthapana
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
                <DropdownToggle1
                  to="#"
                  onClick={() => toggleDropdown("festival")}
                  className="dropdown-toggle"
                >
                  Festival Puja
                </DropdownToggle1>
                {dropdownOpen.festival && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Saraswati Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>
                        Kali Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Durga Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Vishwakarma Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Ganesh Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        SatyaNarayan Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Mahadev Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Janamasti Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        Ramnavmi Pooja
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to=" " className="dropdown-item">
                        <i
                          className="fas fa-angle-double-right"
                          style={{ color: "#f39c12", marginRight: "5px" }}
                        ></i>{" "}
                        MahaShivratri Pooja
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </DropdownMenu1>
            )}

            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("panchang")}
              className="dropdown-toggle"
            >
              Panchang 2024
            </DropdownToggle>
            {dropdownOpen.panchang && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink to="/horoscope-2024" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Horoscope 2024
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/shubh-muhurat-2024"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Shubh Muhurat 2024
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/indian-calendar-festivals-2024"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Festival Calendar 2024
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/fasts-calendar-2024"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Vrat Calendar 2024
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/planetary-transit-2024"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Planet Transit 2024
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("contact")}
              className="dropdown-toggle"
            >
              Contact Us
            </DropdownToggle>
            {dropdownOpen.contact && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink to="/join-our-team" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Careers
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    Contact Us
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
          </div>
        </SidebarContent>
      )}
    </StyledSidebarContainer>
  );
};

export default Sidebar;

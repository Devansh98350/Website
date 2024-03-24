import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import initiallogo from "../../assests/Home_page/logo.png";
const StyledDiv = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #f2320c;
    background-color: center;
    padding: 5px 20px;
  }

  .logo-column {
    display: flex;
    align-items: center;
  }

  .logo img {
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;
    height: 70px;
    width: auto;
    border-radius: 35px;
  }

  .name {
    font-size: 35px;
    text-decoration: none;
    border-bottom: 2px solid #fff;
    color: red;
  }

  .dropdowns-column {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
  }

  .dropdowns-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end; /* Align items to the bottom */
  }

  .dropdown {
    margin-bottom: 10px; /* Add some margin between dropdowns */
  }

  .dropbtn {
    background-color: transparent;
    color: #333;
    font-size: 16px;
    border: none;
    margin-left: 20px;
    cursor: pointer;
  }
  .dropbtn:hover {
    color: blue;
    font-weight: bold;
  }
  .dropbtn a {
    background-color: transparent;
    color: #333;
    font-size: 16px;
    border: none;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
  }
  .dropbtn a:hover {
    color: blue;
    font-weight: bold;
  }

  .dropdown-content {
    display: none;
    background-color: #f9f9f9;
    min-width: 160px;
    z-index: 1;
    padding: 10px;
  }

  .dropdown-content a {
    color: #333;
    padding: 5px 10px; /* Adjust padding for options */
    text-decoration: none;
    display: inline-block; /* Display options in a row */
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;

const Navbar = () => {
  return (
    <StyledDiv>
      <div className="navbar">
        <div className="logo-column">
          <div className="logo">
            <img src={initiallogo} alt="" />
          </div>
          <div className="name">AstroSwarg</div>
        </div>
        <div className="dropdowns-column">
          <div className="dropdowns-row">
            <div className="dropdown">
              <button className="dropbtn">
                <Link to="/freekundli">Free Kundli</Link>
              </button>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Kundli Matching</button>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                <Link to="horoscope-2024">Horoscope 2024</Link>
              </button>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Login</button>
            </div>
            <div className="dropdown">
              <button className="dropbtn">AstroShop</button>
            </div>{" "}
            <div className="dropdown">
              <button className="dropbtn">Blog</button>
            </div>
          </div>
          <div className="dropdowns-row">
            <div className="dropdown">
              <button className="dropbtn">
                <Link to="/">Home</Link>
              </button>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Talk with Astrologer</button>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Chat with Astrologer</button>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Book PanditJi Online</button>
            </div>
            <div className="dropdown">
              <button className="dropbtn">About</button>
            </div>

            {/*<div className="dropdown">
              <button className="dropbtn">Dropdown 2</button>
              <div className="dropdown-content">
                <a>Option 1</a>
                <a>Option 2</a>
                <a>Option 3</a>
              </div>
  </div>*/}
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Navbar;

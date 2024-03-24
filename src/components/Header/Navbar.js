import React from "react";
import styled from "styled-components";
import initiallogo from "../../assests/Home_page/logo(initial).png";
const StyledDiv = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px orange;
    background-color: white;
  }

  .logo-column {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;
  }

  .name {
    font-size: 16px;
    color: #777;
  }

  .dropdowns-column {
    display: flex;
  }

  .dropdown {
    position: relative;
    margin-left: 20px;
  }

  .dropbtn {
    background-color: transparent;
    color: #333;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    z-index: 1;
  }

  .dropdown-content a {
    color: #333;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
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
          <div className="dropdown">
            <button className="dropbtn">Dropdown 1</button>
            <div className="dropdown-content">
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Dropdown 2</button>
            <div className="dropdown-content">
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Navbar;

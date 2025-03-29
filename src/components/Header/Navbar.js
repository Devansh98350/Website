import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styled from "styled-components";
import mono from "../../assests/Home_page/logo.png";
const StyledDiv10 = styled.div`
  /* Header row1*/

  .container-fluid {
    background-color: white;
    display: flex;
    justify-content: space-between;
  }

  .header {
    margin-top: 0px;
  }
  .header-col1,
  .header-col2,
  .header-col3 {
    display: flex;
    align-items: center;
  }
  .header-col1 img {
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 65px;
    width: auto;
    border-radius: 35px;
  }
  img {
    pointer-events: none; /* Disable click events */
    user-select: none; /* Disable selection */
  }
  .name {
    font-size: 35px;
    text-decoration: none;
    border-bottom: 2px solid #fff;
    color: red;
  }

  .header-col12 img {
    display: flex;
    align-items: center;
    font-size: 30px;
    width: 120px;
    height: 72px;
  }

  .header-col21 img {
    display: flex;
    align-items: center;
    margin-left: 50px;
    font-size: 30px;
    width: 200px;
    height: 60px;
  }

  .header-col22 img {
    display: flex;
    align-items: center;
    margin-left: 50px;
    margin-right: 80px;
    font-size: 30px;
    width: 100px;
    height: 60px;
  }

  /*Header Row 2*/

  .row2 {
    transition: all 0.1s ease;
    margin-bottom: 20px;
  }

  .row2-fixed {
    position: fixed;
      padding-top: 50 px;
    top: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 2px solid red;
    /* transition: background-color 0.1s, transform 0.1s; */
  }
 
  .container-fluid1 {
    background-color: white;
  }

  .nav-item {
    position: relative;
    display: inline-block;
    align-items: center;
  }

  .nav-link {
    color: white;
    border: none;
  }
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #fff; /* Background color for the dropdown menu */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); /* Box shadow for the dropdown */
    z-index: 100;
    width: 1000px;
  }

  .hover:hover .dropdown-menu {
    display: block;
    width: auto;
    text-decoration: none;
  }

  .nav-item.dropdown {
    position: relative;
    display: inline-block;
    text-decoration: none;
  }

  .nav-link.dropdown-toggle {
    color: black;
    border: none;
    cursor: pointer;
  }
 .nav-link.dropdown-toggle.active {
    color: black;
    border: none;
    cursor: pointer;
  }
  .dropdown-item {
    color: black;
    font-weight: bold;
    font-size: 18px;
    padding: 10px 0; /* Adjust padding as needed */
    text-align: left;
    text-decoration: none;
    display: block;
    padding: 10px;
  }
  .dropdown-item:hover{
    background-color: #F5F210;
    border-radius:20px;
  }
  .active{
    background-color: #F5F210;
    border-radius:20px;
  }
  .dropdown-heading {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .nav-item.dropdown:hover .dropdown-menu {
    display: block;
    text-decoration: none;
  }

  /*For Batches*/

  .column a {
    color: black;
    padding: 10px;
    text-decoration: none;
    display: block;
  }

  .column a:hover {
    background-color: red;
  }

  .column h3 {
    color:red;
  }

  .nav-item.dropdown .nav-link.dropdown-toggle {
    background-color: red;
    color: white;
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .nav-item.dropdown .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 100;
    width: 1200px; 
    left: 40%; 
    transform: translateX(-35%);
    border-bottom: 2px solid red;
  }

  .nav-item.dropdown:hover .dropdown-content {
    display: block;
  }

  .nav-item.dropdown .column {
    float: left;
    width: 16.5%;
    padding: 10px;
    height: 480px; 
  }

  .nav-item.dropdown .column h3 {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
  }

  .nav-item.dropdown .column a {
    color: black;
    font-weight: light;
    padding: 4px;
    text-decoration: none;
    display: block;
  }

  .nav-item.dropdown .column a:hover {
    background-color: #F5F210;
    border-radius:20px;
  }

  .nav-item.dropdown .column a:hover i {
    color: #fff; /* Change text color of the icon to white on hover */
  }
  .dropright-item{
    font-size: 16px;
  }
  .nav-item.dropdown .column h3 {
    border-bottom: 1px solid black; /* Add a white line below each h3 element */
    padding-bottom: 5px; /* Add some padding for better visual separation */
    margin-bottom: 0px; /* Adjust margin as needed */
  }
}
`;

const Navbar = (props) => {
  const [isRow2Fixed, setIsRow2Fixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const row1 = document.querySelector(".row1");
      // const row2 = document.querySelector(".row2");
      const row1Rect = row1.getBoundingClientRect();

      if (row1Rect.bottom <= 0) {
        setIsRow2Fixed(true);
      } else {
        setIsRow2Fixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const renderBatchesDropdown = () => {
    return (
      <li
        className="nav-item dropdown hover"
        style={{ marginLeft: "25px", marginRight: "25px" }}
      >
        <NavLink
          className="nav-link dropdown-toggle"
          href=" "
          role="button"
          style={{
            border: "none",
            color: "white",
          }}
          aria-expanded="false"
          data-bs-toggle="dropdown"
        >
          Puja Services
        </NavLink>
        <div className="dropdown">
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Puran Katha</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "red",
                      marginRight: "5px",
                    }}
                  ></i>
                  Bhagwat Katha
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Shiv Maha Puran
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ram Katha
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "red",
                      marginRight: "5px",
                    }}
                  ></i>
                  Shrimad Devi Bhagwat Puran
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Vishnu Puran Katha
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Bhaktmal Katha
                </NavLink>
              </div>
              <div className="column">
                <h3>Shanti Puja</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Narayanbali Pitrushraddh Vidhi
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  KaalSharp Yog Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Nakshatra Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Vastu Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  NavGrah Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Manglik Dosh Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Shani Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Guru Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Rahu Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Grih Parvesh
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Office Grah Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Sourya Mandal Shanti
                </NavLink>
              </div>
              <div className="column">
                <h3>Yagna</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ramarcha Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Shat Chandi Yagna
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Banglamukhi Jaap
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Sri Suktam Havan
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Maha Mritunjay Jap
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Vishnu Yagna
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Navchandi Yagna
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ekadashi Yagna
                </NavLink>
              </div>
              <div className="column">
                <h3>Sanskar Vidhi</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Namkaran Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Mundan Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Yagnopavit Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Vivah Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Annaprashan Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Vidya Aarambh Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Antyoshti Sanskar
                </NavLink>
              </div>
              <div className="column">
                <h3>Sthapan Puja</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ghat Sthapna
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Rudra Abhishek
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Laghu Rudra
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Maha Rudra Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ati Rudra Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Murti Pranpratishtha
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Yantra Sthapana
                </NavLink>
              </div>
              <div className="column">
                <h3>Festival Puja</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "red",
                      marginRight: "5px",
                    }}
                  ></i>
                  Saraswati Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Kali Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Durga Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "red",
                      marginRight: "5px",
                    }}
                  ></i>
                  Vishwakarma Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ganesh Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  SatyaNarayan Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Mahadev Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "red",
                      marginRight: "5px",
                    }}
                  ></i>
                  Janamasti Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ramnavmi Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  MahaShivratri Pooja
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
  const renderBatchesDropdown1 = () => {
    return (
      <li
        className="nav-item dropdown hover"
        style={{ marginLeft: "25px", marginRight: "25px" }}
      >
        <NavLink
          className="nav-link dropdown-toggle"
          href=" "
          role="button"
          style={{
            border: "none",
            color: "black",
            fontSize: "20px",
            backgroundColor: "white",
            textDecoration: "none",
          }}
          aria-expanded="false"
          data-bs-toggle="dropdown"
        >
          Puja Services
        </NavLink>
        <div className="dropdown">
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Puran Katha</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "red",
                      marginRight: "5px",
                    }}
                  ></i>
                  Bhagwat Katha
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Shiv Maha Puran
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ram Katha
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "red",
                      marginRight: "5px",
                    }}
                  ></i>
                  Shrimad Devi Bhagwat Puran
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Vishnu Puran Katha
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Bhaktmal Katha
                </NavLink>
              </div>
              <div className="column">
                <h3>Shanti Puja</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Narayanbali Pitrushraddh Vidhi
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  KaalSharp Yog Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Nakshatra Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Vastu Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  NavGrah Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Manglik Dosh Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Shani Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Guru Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Rahu Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Grih Parvesh
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Office Grah Shanti
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Sourya Mandal Shanti
                </NavLink>
              </div>
              <div className="column">
                <h3>Yagna</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ramarcha Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Shat Chandi Yagna
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Banglamukhi Jaap
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Sri Suktam Havan
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Maha Mritunjay Jap
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Vishnu Yagna
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Navchandi Yagna
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ekadashi Yagna
                </NavLink>
              </div>
              <div className="column">
                <h3>Sanskar Vidhi</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Namkaran Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Mundan Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Yagnopavit Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Vivah Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Annaprashan Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Vidya Aarambh Sanskar
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Antyoshti Sanskar
                </NavLink>
              </div>
              <div className="column">
                <h3>Sthapan Puja</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ghat Sthapna
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Rudra Abhishek
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Laghu Rudra
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Maha Rudra Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ati Rudra Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Murti Pranpratishtha
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Yantra Sthapana
                </NavLink>
              </div>
              <div className="column">
                <h3>Festival Puja</h3>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "red",
                      marginRight: "5px",
                    }}
                  ></i>
                  Saraswati Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Kali Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Durga Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "red",
                      marginRight: "5px",
                    }}
                  ></i>
                  Vishwakarma Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ganesh Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  SatyaNarayan Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Mahadev Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{
                      color: "red",
                      marginRight: "5px",
                    }}
                  ></i>
                  Janamasti Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  Ramnavmi Pooja
                </NavLink>
                <NavLink to=" " className="dropright-item">
                  <i
                    className="fas fa-angle-double-right"
                    style={{ color: "red", marginRight: "5px" }}
                  ></i>
                  MahaShivratri Pooja
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
  return (
    <StyledDiv10>
      <div className="row1" style={{ display: "row" }}>
        <div className="container-fluid">
          <div className="header-col1">
            <a className="navbar-brand" href="/">
              <img src={mono} alt="" />
            </a>
            <div className="name">AstroSwarg</div>
          </div>
        </div>
      </div>
      {isRow2Fixed ? (
        <div className="row2-fixed">
          {
            <nav className="navbar-expand-lg bg-body-tertiary">
              <div
                className="container-fluid1"
                // style={{ backgroundColor: "white " }}
              >
                <div
                  className="navbarTogglerDemo01"
                  class="collapse navbar-collapse"
                >
                  <ul
                    className="navbar-nav mx-auto mb-2 mb-lg-0 "
                    style={{
                      fontSize: "20px",
                      fontFamily: "comforta",
                      fontWeight: "bold",
                    }}
                  >
                    <li
                      className="nav-item"
                      style={{
                        marginRight: "25px",
                      }}
                    >
                      <NavLink
                        to="/"
                        className="nav-link"
                        classname="active"
                        style={{
                          color: "black",
                          textDecoration: "none",
                          backgroundColor: "white",
                        }}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown hover">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href=""
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          marginLeft: "25px",
                          marginRight: "25px",
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        About
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            About AstroSwarg
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Board of Advisors
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            FAQ's
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Gallery
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    {renderBatchesDropdown1()}
                    <div className={`header-col1  text-center`}>
                      <img
                        src={mono}
                        alt=""
                        style={{
                          width: "auto",
                          height: "40px",
                          borderRadius: "35px",
                        }}
                      />
                    </div>
                    <li
                      className="nav-item dropdown hover"
                      style={{ marginLeft: "0px", marginRight: "25px" }}
                    >
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        Astro Services
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Talk to Astrologer
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Chat with Astrologer
                          </NavLink>
                        </li>
                        {/* <li>
                        <NavLink
                          to="/our-policy-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "red", marginRight: "5px" }}
                          ></i>
                          Pay Fees Online
                        </NavLink>
                      </li> */}
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Kundli Matching
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Palm Reading
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown hover"
                      style={{
                        marginLeft: "25px",
                        marginRight: "25px",
                      }}
                    >
                      <NavLink
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        Panchang 2025
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to="/horoscope-2025"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Horoscope 2025
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/shubh-muhurat-2025"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Shubh Muhurat 2025
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/indian-calendar-festivals-2025"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Festival Calendar 2025
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/fasts-calendar-2025"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Vrat Calendar 2025
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/planetary-transit-2025"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Planet Transit 2025
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown hover"
                      style={{ marginLeft: "25px", marginRight: "25px" }}
                    >
                      <NavLink
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          color: "black",
                          fontSize: "20px",
                          backgroundColor: "white",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                        aria-expanded="false"
                      >
                        Contact Us
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to="/join-our-team"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Careers
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Contact Us
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          }
        </div>
      ) : (
        <div className="row2">
          {
            <nav className="navbar-expand-lg bg-body-tertiary">
              <div
                className="container-fluid"
                style={{ backgroundColor: "red" }}
              >
                <div
                  className="navbarTogglerDemo01"
                  class="collapse navbar-collapse"
                >
                  <ul
                    className="navbar-nav mx-auto mb-2 mb-lg-0 "
                    style={{
                      fontSize: "20px",
                      fontFamily: "comforta",
                      fontWeight: "bold",
                    }}
                  >
                    <li
                      className="nav-item"
                      style={{
                        marginRight: "25px",
                      }}
                    >
                      <NavLink
                        to="/"
                        className="nav-link"
                        activeclassname="active"
                        style={{ color: "White", backgroundColor: "red" }}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown hover">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href=""
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{
                          border: "none",
                          marginLeft: "25px",
                          marginRight: "25px",
                          color: "White",
                        }}
                        aria-expanded="false"
                      >
                        About
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            About AstroSwarg
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Board of Advisors
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            FAQ's
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Gallery
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    {renderBatchesDropdown()}
                    <li
                      className="nav-item dropdown hover"
                      style={{ marginLeft: "25px", marginRight: "25px" }}
                    >
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none", color: "White" }}
                        aria-expanded="false"
                      >
                        Astro Services
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Talk to Astrologer
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Chat with Astrologer
                          </NavLink>
                        </li>
                        {/* <li>
                        <NavLink
                          to="/our-policy-iit-academy"
                          className="dropdown-item"
                        >
                          <i
                            className="fas fa-angle-double-right"
                            style={{ color: "red", marginRight: "5px" }}
                          ></i>
                          Pay Fees Online
                        </NavLink>
                      </li> */}

                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Kundli Matching
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Palm Reading
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown hover"
                      style={{
                        marginLeft: "25px",
                        marginRight: "25px",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <NavLink
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none", color: "White" }}
                        aria-expanded="false"
                      >
                        Panchang 2025
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to="/horoscope-2025"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Horoscope 2025
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/shubh-muhurat-2025"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Shubh Muhurat 2025
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/indian-calendar-festivals-2025"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Festival Calendar 2025
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/fasts-calendar-2025"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Vrat Calendar 2025
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/planetary-transit-2025"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Planet Transit 2025
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="nav-item dropdown hover"
                      style={{ marginLeft: "25px", marginRight: "25px" }}
                    >
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none", color: "White" }}
                        aria-expanded="false"
                      >
                        Contact Us
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to="/join-our-team"
                            className="dropdown-item"
                          >
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Careers
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to=" " className="dropdown-item">
                            <i
                              className="fas fa-angle-double-right"
                              style={{ color: "red", marginRight: "5px" }}
                            ></i>
                            Contact Us
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          }
        </div>
      )}
    </StyledDiv10>
  );
};

export default Navbar;

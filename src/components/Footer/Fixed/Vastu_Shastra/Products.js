import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../Layout/Layout.js";
import styled from "styled-components";
import Breadcrumbs from "../../../Breadcrumb.js";

const StyledDiv = styled.div`
  .body {
    width: 90%;
    margin: auto;
    text-align: justify;
  }

  .heading {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  .inline-text {
    color: red;
    display: inline;
  }
  .inline-text:hover {
    font-weight: bold;
  }

  /*To be modified*/

  .tarot-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 30px;
  }

  .tarot-card {
    flex: 0 0 calc(25% - 12px);
    background-color: #f0e6ff; /* Light purple background */
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    transition: all 0.3s ease;
    text-decoration: none;
    color: #333;
  }

  .tarot-card:hover {
    background-color: #e0d0ff; /* Darker purple on hover */
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* Responsive styles */
  @media (max-width: 992px) {
    .tarot-card {
      flex: 0 0 calc(25% - 12px);
    }
  }

  @media (max-width: 768px) {
    .tarot-card {
      flex: 0 0 calc(33.33% - 12px);
    }
  }

  @media (max-width: 576px) {
    .tarot-card {
      flex: 0 0 calc(50% - 12px);
    }
  }
`;
const vastuProductDetails = [
  { name: "Vastu for New House", path: "" },
  { name: "Vastu Colors for House", path: "" },
  { name: "Vastu for Plots", path: "" },
  { name: "Vastu for Flats", path: "" },
  { name: "Vastu for Entrance and Main Door", path: "" },
  { name: "Vastu for Bedroom", path: "" },
  { name: "Bedroom colours according to Vastu", path: "" },
  { name: "Vastu for Kitchen", path: "" },
  { name: "Vastu for Guest Room", path: "" },
  { name: "Vastu for Children's Room", path: "" },
  { name: "Vastu for Store Room", path: "" },
  { name: "Vastu for Balcony", path: "" },
  { name: "Vastu for Stairs", path: "" },
  { name: "Vastu for House Construction", path: "" },
  { name: "Vastu Shastra for Kitchen Colours", path: "" },
  { name: "Vastu for Bathroom", path: "" },
  { name: "Bathroom colours according to Vastu", path: "" },
  { name: "Vastu for Living Room", path: "" },
  { name: "Living room colour as per Vastu", path: "" },
  { name: "Vastu tips for study room", path: "" },
  { name: "Vastu for Pooja Room", path: "" },
  { name: "Vastu for Dining Room", path: "" },
  { name: "Vastu for Doors and Windows", path: "" },
  { name: "Vastu for Household Appliances", path: "" },
  { name: "Vastu for north facing House", path: "" },
  { name: "Vastu for South facing House", path: "" },
  { name: "Vastu for East facing House", path: "" },
  { name: "Vastu for a West-Facing House", path: "" },
];

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vastu Products" description="" keywords="">
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Vastu Products</h1>
          <p>
            Vastu products help make the negative energy and vibes fall out of
            place and eliminate Vastu Dosh. Moreover, a correct product in the
            rightful place helps achieve abundance and success. You can buy
            multiple such products from the market or online and add extra
            points to your office, house, etc. Whether setting up a cordial
            connection with someone or rebuilding excellent terms with family
            members, Vastu products in astrology shall help you figure out
            ultimate solutions for life and its troubles. Along with removing
            the Vastu Dosh, these products add to the personal well-being and
            sereneness of the place. However, you must ensure the items you buy
            are original and genuine.
          </p>
          <p>
            Vastu Products shall also help rid people’s evil eyes and bring
            prosperity to the lives of the people who place them. A few
            additions and removal of items from your house would be aiding and
            can change your life for the best. The best part of these products
            is that they are not too expensive and add beauty to your place.
            Thus, for a healthy, peaceful, and prosperous life, you can opt to
            have these Vastu items in the areas you wish. You can add them to
            one of the rooms or the entire space.
          </p>
          <p>
            So if you wish to create a favorable environment in your space, you
            must undoubtedly go for these Vastu products:
          </p>
          <h3>Let us see them in details:</h3>
          <div className="tarot-grid">
            {vastuProductDetails.map((card, index) => (
              <Link key={index} to={card.path} className="tarot-card">
                {card.name}
              </Link>
            ))}
          </div>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Products;

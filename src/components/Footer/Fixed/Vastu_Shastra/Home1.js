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
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const vastuForHomeDetails = [
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

const Home1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vastu For Home" description="" keywords="">
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Vastu For Home</h1>
          <p>
            Vastu Shastra for home is to develop an understanding of Vastu's
            primary and traditional means, differentiating them from the modern
            form of house construction. Moreover, it allows you to set your home
            in a manner that would welcome positivity and well-being in your
            life and of the family members living there. Generally, Vastu
            Shastra for house works on the concept of Maana. This sets the
            proportional connection within any construction building. But on the
            other hand, Aayadi helps determine the supreme conditions for
            optimal results, like blessing the folks residing there with peace,
            prosperity, happiness, and well-being.
          </p>
          <p>
            History reveals that the Vastu Shastra application at home was
            restricted to temples only. However, these days, people have widened
            their horizons. They incorporate Vastu in their homes for building
            every room. Be it the bedroom, living room, guest room, kitchen, or
            store room, Vastu tips for home help people achieve success and
            better opportunities in life. Where people live is known as
            Manushalaya, which means Human Temple. Thus, as per Vastu Shastra,
            using such tips is vital to improving our lives.
          </p>
          <h3>Why is Vastu for the house important?</h3>
          <p>
            People possess a close connection with their homes. Thus, our prime
            duty is to keep it away from evil vibes, negativity, and other wrong
            happenings. Vastu for the house is also necessary to welcome warmth,
            sereneness, and a calm environment among the family members.
            Moreover, those who visit your home also sense the same if the house
            is constructed well with the implementation of Vastu Shastra tips.
            On the other hand, if the ill vibes or negative energies degrade
            your home's positivity, it becomes hard to live in that particular
            space. Thus, it might make you stressed and attract wrongdoings and
            unpleasantness in the family.
          </p>
          <p>
            Also, if people follow the right kind of Vastu Shastra tips for
            home, family members shall even attract an abundance of all the
            great things along with wealth and happiness. Vastu Shastra for the
            house includes positioning the doors and windows, ceiling type,
            auspicious colours, etc. Therefore, depending on the astrological
            data of the person and other important factors, you can incorporate
            Vastu more calculatedly to seek maximum benefits from the same.
          </p>
          <h3>The general direction for different rooms</h3>
          <p>
            Different directions, as per Vastu Shastra, are ruled by different
            rulers. For example, the East direction is ruled by Indra Deva. The
            West direction by Varuna Deva, the North by the Kubera, and the
            South by Yam Deva. Depending on the same, some general directions
            are specified for different house rooms.
          </p>
          <p>
            <strong>Bathroom:</strong> East direction
          </p>
          <p>
            <strong>Dining Room:</strong> West direction
          </p>
          <p>
            <strong>Bedroom:</strong> South direction
          </p>
          <p>
            <strong>Kitchen:</strong> Southeast direction
          </p>
          <h3>General guidelines for the house as per Vastu Shastra</h3>
          <p>
            The generic form of houses usually incorporates the open courtyard
            format. However, these days people also include the Western model of
            construction. It gives people the pleasure of a spiritual and cosmic
            ambience and helps them connect with materialism like wealth,
            abundance, and prosperity, along with a shrine-like environment. For
            people with a family, Vastu's science suggests a square-built house
            of 9x9 grid squares. But, for scientists, yogis, and artists, the
            Vastu suggested dimensions are 8x8=64 grid squares grid.
          </p>
          <p>
            Moreover, according to Vastu Shastra, the central space must be
            3x3=9 grid squares. This main space is what we call the
            Brahmasthanam (Sanskrit). Because the Brahma Sthana is considered
            the nuclear field of energy. Therefore, it must be kept empty,
            clean, and open.
          </p>
          <p>
            Moreover, it should closely connect with the outer space or Akash
            element.
          </p>
          <p>
            As per Vastu for the house, one must also remember not to use the
            central area for living or settling. So be it any religious event,
            cultural function, rituals, or ceremonies, you must not perform any
            in that space.
          </p>
          <p>
            Similarly, you can perform multiple activities to avoid any Vastu
            Dosh. Let us see some of them:
          </p>
          <UnorderedList>
            <ListItem>
              You must avoid using dull shades in the house. Also, you can
              decorate your space with Vastu-specific products to attract
              abundance and avoid hurdles.
            </ListItem>
            <ListItem>
              Depending on the individual's horoscope, you must look for proper
              space for the temple. Be it in construction form or getting a
              well-built one, a shrine should be placed well, and the area must
              be clean and pure.
            </ListItem>
            <ListItem>
              Appliance placement must be well-defined. You must avoid keeping
              them in your bedroom as it might lead to family tensions and
              fights between the couple.
            </ListItem>
            <ListItem>
              Also, you must avoid keeping stop clocks as it attracts
              negativity. With that, you should also eliminate cob and spider
              webs as it leads to deterioration of the health of members living
              in that house.
            </ListItem>
          </UnorderedList>
          <p>
            Just like these, there are many such Vastu tips for home which you
            must know and incorporate into your living space to attract good
            times and desired energies and results optimistically.
          </p>
          <h3>Let us see them in details:</h3>
          <div className="tarot-grid">
            {vastuForHomeDetails.map((card, index) => (
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

export default Home1;

import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../../../Layout/Layout.js";
import yogaData from "./yogaTableData.json";
import YogaFYQ from "./YogaFyq.js";
const data = yogaData.Table;

const StyledHeading = styled.h1`
  font-size: 2.4rem;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 660px) {
    font-size: 1.9rem;
  }
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 660px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
  @media (max-width: 425px) {
    font-size: 9px;
  }

  @media (max-width: 375px) {
    font-size: 9px;
  }

  @media (max-width: 320px) {
    font-size: 9px;
  }
`;
function TableHeader() {
  return (
    <StyledTableHeader>
      <div>
        <span>Name</span>
      </div>
      <div>
        <span>Description</span>
      </div>
      <div>
        <span>Result</span>
      </div>
      <div>
        <span>Quality</span>
      </div>
    </StyledTableHeader>
  );
}
function TableRow({ name, description, result, quality }) {
  return (
    <StyleTableRow>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>{description}</span>
      </div>
      <div>
        <span>{result}</span>
      </div>
      <div>
        <span>{quality}</span>
      </div>
    </StyleTableRow>
  );
}
const CommonRow = styled.div`
  display: grid;
  grid-template-columns: 15% 25% 50% 10%;
  grid-template-rows: auto;
  /* column-gap: 2.4rem; */
  align-items: center;
  /* border: 1px solid #333; */

  :last-child {
    border-right: none;
  }
`;
const StyledTableHeader = styled(CommonRow)`
  /* padding: 1.6rem 2.4rem; */
  /* border-bottom: 1px solid #333; */
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;

  div {
    display: flex;
    justify-content: center;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
  }

  div span {
    padding: 1.6rem 2.4rem;
    display: inline;
    text-align: center;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 15% 25% 50% 10%;
    div span {
      padding: 1rem 2rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 15% 25% 50% 10%;
    font-size: 12px;
    div span {
      padding: 1rem 1.8rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 10px;
    grid-template-columns: 15% 25% 50% 10%;
    div span {
      padding: 0.7rem 1rem;
    }
  }

  @media (max-width: 425px) {
    font-size: 8px;
    grid-template-columns: 20% 20% 48% 12%;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }

  @media (max-width: 375px) {
    font-size: 8px;
    grid-template-columns: 20% 20% 48% 12%;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }

  @media (max-width: 320px) {
    font-size: 8px;
    grid-template-columns: 20% 20% 45% 15%;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }
`;
const StyleTableRow = styled(CommonRow)`
  letter-spacing: 0.4px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
    height: 100%;
    width: 100%;
  }

  div span {
    padding: 1.6rem 2.4rem;
    text-align: center;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 15% 25% 50% 10%;
    div span {
      padding: 1rem 2rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 15% 25% 50% 10%;
    font-size: 12px;
    div span {
      padding: 1rem 1.8rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 10px;
    grid-template-columns: 15% 25% 50% 10%;
    div span {
      padding: 0.7rem 1rem;
    }
  }

  @media (max-width: 425px) {
    font-size: 8px;
    grid-template-columns: 20% 20% 48% 12%;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }

  @media (max-width: 375px) {
    font-size: 8px;
    grid-template-columns: 20% 20% 48% 12%;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }

  @media (max-width: 320px) {
    font-size: 8px;
    grid-template-columns: 20% 20% 45% 15%;
    div span {
      padding: 0.4rem 0.3rem;
    }
  }
`;
const StyledTable = styled.div`
  border: 1px solid #333;
  font-size: 16px; /* Default font size */

  @media (max-width: 1024px) {
    font-size: 14px; /* Adjust the font size for screens with a width of 1024px or smaller */
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }

  @media (max-width: 425px) {
    font-size: 8px;
  }

  @media (max-width: 320px) {
    font-size: 6px;
  }
`;

const Yoga = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - 300 Astrology Yoga">
      <div
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "justify",
        }}
      >
        <StyledHeading
          style={{
            textAlign: "center",
            fontSize: "2.4rem",
            fontWeight: "bold",
            marginBottom: "5px",
          }}
        >
          Yogas in Astrology
        </StyledHeading>
        <StyledContent>
          <p>
            Best yogas in kundli or bad yogas in kundli, whatever you are trying
            to find, your search comes to an end here.
          </p>
          <p>
            Yogas in kundli are one of the most sought elements when it comes to
            kundli prediction by astrologers. Yogas (planetary combination) in
            kundli either form at the time of your birth or owing to planetary
            transits, conjunction, etc., as you happen to live your life. To
            explain in very simple words, any yoga in kundli forms when one
            planet, house or sign enters into a relationship with another
            planet, house or sign through transit, aspect or conjunction. What
            is necessary here is to note down whether the yoga forming in kundli
            is a positive yoga or a negative yoga. Based on the positivity or
            negativity of yoga an astrologer can predict your future.
          </p>
          <p>
            For example, people usually are aware of Raj Yoga in kundli. If you
            have a Raj Yoga in kundli, it means you shall enjoy prosperity and
            an abundance of wealth. However, on the other hand, if you have
            Daridra Yoga, it could bring inauspiciousness or poverty.
          </p>
          <p>
            Apart from Raj Yoga and Daridra Yoga, there are close to 300 more
            yogas that can form in your kundli. Having said that, here is the
            list of all Yogas is astrology.
          </p>
        </StyledContent>
        <StyledTable>
          <TableHeader />

          {/* <TableRow
        name={"Sula Yoga"}
        description={"All seven planets occupy any three signs."}
        result={
          "The Sula Yoga in your chart indicates different kinds of attributes of your life. Firstly, you will be a person who will be devoid of wealth and prosperity. In some or the other way, it disappears from your life and there is pretty\r\nmuch nothing that you can do about it. You are also a courageous person who doesn't fear in taking multiple risks in their life. Your nature can seem cruel or rude sometimes by many people. Lastly, you possess various wounds and scars on your body due to any battles or similar errands."
        }
        quality={"Positive"}
      />
      <TableRow
        name={"Sula Yoga"}
        description={"All seven planets occupy any three signs."}
        result={
          "The Sula Yoga in your chart indicates different kinds of attributes of your life. Firstly, you will be a person who will be devoid of wealth and prosperity. In some or the other way, it disappears from your life and there is pretty\r\nmuch nothing that you can do about it. You are also a courageous person who doesn't fear in taking multiple risks in their life. Your nature can seem cruel or rude sometimes by many people. Lastly, you possess various wounds and scars on your body due to any battles or similar errands."
        }
        quality={"Positive"}
      /> */}

          {data.map((item, index) => {
            return (
              <TableRow
                name={item.Name}
                description={item.Description}
                result={item.Result}
                quality={item.Quality}
                key={index}
              />
            );
          })}
        </StyledTable>
        <YogaFYQ />
      </div>
    </Layout>
  );
};

export default Yoga;

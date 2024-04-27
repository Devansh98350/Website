import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../../../Layout/Layout.js";
import yogaData from "./yogaTableData.json";
import YogaFYQ from "./YogaFyq.js";
const data = yogaData.Table;

function TableRow({ name, description, result, quality }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{result}</td>
      <td>{quality}</td>
    </tr>
  );
}

const Container = styled.div`
  .body {
    width: 90%;
    margin: auto;
    text-align: justify;
  }

  .heading {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
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
`;

const Yoga = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - 300 Astrology Yoga">
      <Container>
        <div className="body">
          <h1 className="heading">Yogas in Astrology</h1>
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

          <table border="1" style={{ width: "100%", height: "auto" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Result</th>
                <th>Quality</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
          <YogaFYQ />
        </div>
      </Container>
    </Layout>
  );
};

export default Yoga;

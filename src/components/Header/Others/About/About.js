import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";
import styled from "styled-components";

const Container = styled.div``;

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg">
      <Container>
        <div className="body"></div>
      </Container>
    </Layout>
  );
};

export default About;

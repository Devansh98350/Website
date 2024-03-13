import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Bhoomi_Pujan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Bhoomi Pujan Muhurat 2024">
      Bhoomi Pujan Muhurat 2024
    </Layout>
  );
};

export default Bhoomi_Pujan;

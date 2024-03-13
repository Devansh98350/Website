import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Griha_Pravesh = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Griha Pravesh Muhurat 2024">
      Griha Pravesh Muhurat 2024
    </Layout>
  );
};

export default Griha_Pravesh;

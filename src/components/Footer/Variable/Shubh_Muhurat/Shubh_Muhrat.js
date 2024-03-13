import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout";

const Shubh_Muhrat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Shubh Muhurat 2024">Shubh Muhurat 2024</Layout>
  );
};

export default Shubh_Muhrat;

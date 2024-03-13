import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Anuradha = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Anuradha Nakshatra">Anuradha Nakshatra</Layout>
  );
};

export default Anuradha;

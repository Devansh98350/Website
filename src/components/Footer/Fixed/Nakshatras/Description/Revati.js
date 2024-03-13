import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Revati = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Revati Nakshatra">Revati Nakshatra</Layout>
  );
};

export default Revati;

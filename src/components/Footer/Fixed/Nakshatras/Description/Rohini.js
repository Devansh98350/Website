import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Rohini = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Rohini Nakshatra">Rohini Nakshatra</Layout>
  );
};

export default Rohini;

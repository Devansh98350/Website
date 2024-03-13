import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Krittika = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Krittika Nakshatra">Krittika Nakshatra</Layout>
  );
};

export default Krittika;

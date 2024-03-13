import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Vishakha = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vishakha Nakshatra">Vishakha Nakshatra</Layout>
  );
};

export default Vishakha;

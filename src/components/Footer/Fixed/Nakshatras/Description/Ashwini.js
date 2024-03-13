import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Ashwini = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Ashwini Nakshatra">Ashwini Nakshatra</Layout>
  );
};

export default Ashwini;

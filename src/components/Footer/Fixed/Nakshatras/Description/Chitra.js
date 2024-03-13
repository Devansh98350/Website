import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Chitra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Chitra Nakshatra">Chitra Nakshatra</Layout>
  );
};

export default Chitra;

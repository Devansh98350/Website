import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Bharani = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Bharani Nakshatra">Bharani Nakshatra</Layout>
  );
};

export default Bharani;

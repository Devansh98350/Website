import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Abhijit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Abhijit Nakshatra">Abhijit Nakshatra</Layout>
  );
};

export default Abhijit;

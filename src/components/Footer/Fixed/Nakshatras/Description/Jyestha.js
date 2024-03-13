import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Jyestha = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Jyestha Nakshatra">Jyestha Nakshatra</Layout>
  );
};

export default Jyestha;

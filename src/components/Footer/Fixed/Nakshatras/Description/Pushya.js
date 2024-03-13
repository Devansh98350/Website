import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Pushya = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Pushya Nakshatra">Pushya Nakshatra</Layout>
  );
};

export default Pushya;

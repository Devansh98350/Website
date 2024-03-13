import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";
const Ketu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Ketu Transits 2024">Ketu Transits 2024</Layout>
  );
};

export default Ketu;

import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Rahu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Rahu Transits 2024">Rahu Transits 2024</Layout>
  );
};

export default Rahu;

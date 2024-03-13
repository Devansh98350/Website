import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Moon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Moon Transits 2024">Moon Transits 2024</Layout>
  );
};

export default Moon;

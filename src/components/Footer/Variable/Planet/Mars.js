import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Mars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Mars Transits 2024">Mars Transits 2024</Layout>
  );
};

export default Mars;

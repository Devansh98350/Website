import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Sun = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Sun Transits 2024">Sun Transits 2024</Layout>
  );
};

export default Sun;

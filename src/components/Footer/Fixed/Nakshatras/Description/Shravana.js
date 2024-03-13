import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
const Shravana = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Shravana Nakshatra">Shravana Nakshatra</Layout>
  );
};

export default Shravana;

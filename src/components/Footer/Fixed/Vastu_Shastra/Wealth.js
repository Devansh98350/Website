import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Wealth = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vastu For Wealth">Vastu For Wealth</Layout>
  );
};

export default Wealth;

import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.js";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Pricing Policy">Pricing Policy</Layout>;
};

export default Pricing;

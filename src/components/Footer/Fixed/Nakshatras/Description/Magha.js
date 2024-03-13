import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Magha = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Magha Nakshatra">Magha Nakshatra</Layout>;
};

export default Magha;

import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Swati = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Swati Nakshatra">Swati Nakshatra</Layout>;
};

export default Swati;

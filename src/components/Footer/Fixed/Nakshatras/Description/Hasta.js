import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Hasta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Hasta Nakshatra">Hasta Nakshatra</Layout>;
};

export default Hasta;

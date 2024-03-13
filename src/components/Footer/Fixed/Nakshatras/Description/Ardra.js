import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Ardra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Ardra Nakshatra">Ardra Nakshatra</Layout>;
};

export default Ardra;

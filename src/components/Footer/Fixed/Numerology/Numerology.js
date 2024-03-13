import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Numerology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Numerology">Numerology</Layout>;
};

export default Numerology;

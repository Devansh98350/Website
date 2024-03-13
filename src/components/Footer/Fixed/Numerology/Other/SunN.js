import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const SunN = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Sun Numbers">Sun Numbers</Layout>;
};

export default SunN;

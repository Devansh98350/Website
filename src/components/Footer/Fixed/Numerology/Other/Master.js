import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Master = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Master Numbers">Master Numbers</Layout>;
};

export default Master;

import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Two1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Two of Cups">Two of Cups</Layout>;
};

export default Two1;

import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Knight1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Knight of Cups">Knight of Cups</Layout>;
};

export default Knight1;

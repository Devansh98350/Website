import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Four1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Four of Cups">Four of Cups</Layout>;
};

export default Four1;

import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Six = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Six of Wands">Six of Wands</Layout>;
};

export default Six;

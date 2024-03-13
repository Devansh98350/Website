import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Three = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Three of Wands">Three of Wands</Layout>;
};

export default Three;

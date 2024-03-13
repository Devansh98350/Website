import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Nine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Nine of Wands">Nine of Wands</Layout>;
};

export default Nine;

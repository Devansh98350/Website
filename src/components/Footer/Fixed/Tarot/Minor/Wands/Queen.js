import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Queen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Queen of Wands">Queen of Wands</Layout>;
};

export default Queen;

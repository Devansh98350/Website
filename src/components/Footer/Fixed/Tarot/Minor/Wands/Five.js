import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Five = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Five of Wands">Five of Wands</Layout>;
};

export default Five;

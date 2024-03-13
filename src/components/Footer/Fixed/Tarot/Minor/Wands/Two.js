import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Two = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Two of Wands">Two of Wands</Layout>;
};

export default Two;

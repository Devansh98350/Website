import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Knight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Knight of Wands">Knight of Wands</Layout>;
};

export default Knight;

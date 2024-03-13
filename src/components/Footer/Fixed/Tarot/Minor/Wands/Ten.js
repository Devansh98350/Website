import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Ten = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Ten of Wands">Ten of Wands</Layout>;
};

export default Ten;

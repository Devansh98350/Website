import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Name = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Name Numerology">Name Numerology</Layout>;
};

export default Name;

import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Plants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vastu For Plants">Vastu For Plants</Layout>
  );
};

export default Plants;

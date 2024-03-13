import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Mnn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Marriage And Numerology">
      Marriage And Numerology
    </Layout>
  );
};

export default Mnn;

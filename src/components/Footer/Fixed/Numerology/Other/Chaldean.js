import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Chaldean = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Chaldean Numerology">
      Chaldean Numerology
    </Layout>
  );
};

export default Chaldean;

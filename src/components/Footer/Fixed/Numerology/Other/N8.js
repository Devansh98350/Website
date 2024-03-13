import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const N8 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Number 8 in Numerology">
      Number 8 in Numerology
    </Layout>
  );
};

export default N8;

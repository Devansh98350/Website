import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const N5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Number 5 in Numerology">
      Number 5 in Numerology
    </Layout>
  );
};

export default N5;

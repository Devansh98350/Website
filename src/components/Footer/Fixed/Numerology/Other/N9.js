import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const N9 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Number 9 in Numerology">
      Number 9 in Numerology
    </Layout>
  );
};

export default N9;

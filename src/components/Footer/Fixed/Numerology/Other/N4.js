import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const N4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Number 4 in Numerology">
      Number 4 in Numerology
    </Layout>
  );
};

export default N4;

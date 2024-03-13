import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const N7 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Number 7 in Numerology">
      Number 7 in Numerology
    </Layout>
  );
};

export default N7;

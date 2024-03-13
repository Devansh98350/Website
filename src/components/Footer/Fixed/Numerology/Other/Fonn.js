import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Fonn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Food And Numerology">
      Food And Numerology
    </Layout>
  );
};

export default Fonn;

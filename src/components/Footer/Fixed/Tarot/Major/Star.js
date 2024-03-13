import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Star = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Star Tarot Cards Reading">
      Star Tarot Cards Reading
    </Layout>
  );
};

export default Star;

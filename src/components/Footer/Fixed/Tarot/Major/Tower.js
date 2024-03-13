import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Tower = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Tower Tarot Cards Reading">
      Tower Tarot Cards Reading
    </Layout>
  );
};

export default Tower;

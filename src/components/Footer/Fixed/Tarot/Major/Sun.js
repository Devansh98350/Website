import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Sun = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Sun Tarot Cards Reading">
      Sun Tarot Cards Reading
    </Layout>
  );
};

export default Sun;

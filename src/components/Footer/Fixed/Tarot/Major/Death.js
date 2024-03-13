import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Death = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Death Tarot Cards Reading">
      Death Tarot Cards Reading
    </Layout>
  );
};

export default Death;

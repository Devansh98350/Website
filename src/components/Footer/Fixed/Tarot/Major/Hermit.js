import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Hermit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Hermit Tarot Cards Reading">
      Hermit Tarot Cards Reading
    </Layout>
  );
};

export default Hermit;

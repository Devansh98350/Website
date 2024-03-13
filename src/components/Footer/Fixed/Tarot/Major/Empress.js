import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Empress = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Empress Tarot Cards Reading">
      Empress Tarot Cards Reading
    </Layout>
  );
};

export default Empress;

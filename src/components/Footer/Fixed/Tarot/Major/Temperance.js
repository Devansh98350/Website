import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Temperance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Temperance Tarot Cards Reading">
      Temperance Tarot Cards Reading
    </Layout>
  );
};

export default Temperance;

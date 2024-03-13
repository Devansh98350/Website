import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Magician = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Magician Tarot Cards Reading">
      Magician Tarot Cards Reading
    </Layout>
  );
};

export default Magician;

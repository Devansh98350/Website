import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Hanged = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Hanged Man Tarot Cards Reading">
      Hanged Man Tarot Cards Reading
    </Layout>
  );
};

export default Hanged;

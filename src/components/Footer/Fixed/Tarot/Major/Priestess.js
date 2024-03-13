import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Priestess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - High Priestess Tarot Cards Reading">
      High Priestess Tarot Cards Reading
    </Layout>
  );
};

export default Priestess;

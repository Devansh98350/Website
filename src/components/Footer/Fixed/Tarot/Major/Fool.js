import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Fool = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Fool Tarot Cards Reading">
      Fool Tarot Cards Reading
    </Layout>
  );
};

export default Fool;

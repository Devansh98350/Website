import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Emperor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Emperor Tarot Cards Reading">
      Emperor Tarot Cards Reading
    </Layout>
  );
};

export default Emperor;

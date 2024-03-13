import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Moon1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Moon Tarot Cards Reading">
      Moon Tarot Cards Reading
    </Layout>
  );
};

export default Moon1;

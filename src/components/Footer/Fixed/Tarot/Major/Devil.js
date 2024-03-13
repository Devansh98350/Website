import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Devil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Devil Tarot Cards Reading">
      Devil Tarot Cards Reading
    </Layout>
  );
};

export default Devil;

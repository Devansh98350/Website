import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const World = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - World Tarot Cards Reading">
      World Tarot Cards Reading
    </Layout>
  );
};

export default World;

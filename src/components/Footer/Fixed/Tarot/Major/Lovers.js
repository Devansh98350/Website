import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Lovers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Lovers Tarot Cards Reading">
      Lovers Tarot Cards Reading
    </Layout>
  );
};

export default Lovers;

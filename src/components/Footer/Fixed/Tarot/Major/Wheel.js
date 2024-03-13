import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Wheel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Wheel Of Fortune Tarot Cards Reading">
      Wheel Of Fortune Tarot Cards Reading
    </Layout>
  );
};

export default Wheel;

import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Kabbalah = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Kabbalah Numerology">
      Kabbalah Numerology
    </Layout>
  );
};

export default Kabbalah;

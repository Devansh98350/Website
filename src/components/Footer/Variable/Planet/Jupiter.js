import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";
const Jupiter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Jupiter Transits 2024">
      Jupiter Transits 2024
    </Layout>
  );
};

export default Jupiter;

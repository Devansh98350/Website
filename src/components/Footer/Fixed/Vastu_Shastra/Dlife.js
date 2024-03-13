import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Dlife = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vastu tips for daily life">
      Vastu tips for daily life
    </Layout>
  );
};

export default Dlife;

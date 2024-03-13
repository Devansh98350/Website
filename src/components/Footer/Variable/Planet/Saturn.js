import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Saturn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Saturn Transits 2024">
      Saturn Transits 2024
    </Layout>
  );
};

export default Saturn;

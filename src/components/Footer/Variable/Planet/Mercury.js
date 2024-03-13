import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Mercury = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Mercury Transits 2024">
      Mercury Transits 2024
    </Layout>
  );
};

export default Mercury;

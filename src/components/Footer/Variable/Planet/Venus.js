import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";
const Venus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Venus Transits 2024">
      Venus Transits 2024
    </Layout>
  );
};

export default Venus;

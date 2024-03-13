import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Lnr = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vastu for Love and Relationships">
      Vastu for Love and Relationships
    </Layout>
  );
};

export default Lnr;

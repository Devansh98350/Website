import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Pmirror = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vastu tips for placing mirrors">
      Vastu tips for placing mirrors
    </Layout>
  );
};

export default Pmirror;

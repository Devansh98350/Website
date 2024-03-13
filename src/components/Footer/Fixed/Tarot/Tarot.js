import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Tarot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Tarot Cards Reading">
      Tarot Cards Reading
    </Layout>
  );
};

export default Tarot;

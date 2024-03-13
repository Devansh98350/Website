import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Annanprashan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Annanprashan Muhurat 2024">
      Annanprashan Muhurat 2024
    </Layout>
  );
};

export default Annanprashan;

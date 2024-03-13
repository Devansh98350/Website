import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Mundan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Mundan Muhurat 2024">
      Mundan Muhurat 2024
    </Layout>
  );
};

export default Mundan;

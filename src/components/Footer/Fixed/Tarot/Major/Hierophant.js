import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Hierophant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Hierophant Tarot Cards Reading">
      Hierophant Tarot Cards Reading
    </Layout>
  );
};

export default Hierophant;

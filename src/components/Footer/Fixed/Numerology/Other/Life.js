import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Life = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Life Path Numbers">Life Path Numbers</Layout>
  );
};

export default Life;

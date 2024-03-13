import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Karmic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Karmic Debt Numbers">
      Karmic Debt Numbers
    </Layout>
  );
};

export default Karmic;

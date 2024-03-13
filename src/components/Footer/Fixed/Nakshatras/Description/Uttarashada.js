import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Uttarashada = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Uttarashada Nakshatra">
      Uttarashada Nakshatra
    </Layout>
  );
};

export default Uttarashada;

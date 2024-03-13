import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Poorvashada = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Poorvashada Nakshatra">
      Poorvashada Nakshatra
    </Layout>
  );
};

export default Poorvashada;

import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Moola = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Moola/Mula Nakshatra">
      Moola/Mula Nakshatra
    </Layout>
  );
};

export default Moola;

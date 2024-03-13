import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Mrigashira = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Mrigashira Nakshatra">
      Mrigashira Nakshatra
    </Layout>
  );
};

export default Mrigashira;

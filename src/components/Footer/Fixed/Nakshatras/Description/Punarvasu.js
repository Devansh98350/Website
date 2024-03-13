import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Punarvasu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Punarvasu Nakshatra">
      Punarvasu Nakshatra
    </Layout>
  );
};

export default Punarvasu;

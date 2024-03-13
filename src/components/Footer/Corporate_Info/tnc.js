import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.js";

const Tnc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Terms and Conditions">
      Terms and Conditions
    </Layout>
  );
};

export default Tnc;

import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.js";

const Rcp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Refund & Cancellation Policy">
      Refund & Cancellation Policy
    </Layout>
  );
};

export default Rcp;

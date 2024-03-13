import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.js";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Privacy Policy">Privacy Policy</Layout>;
};

export default Privacy;

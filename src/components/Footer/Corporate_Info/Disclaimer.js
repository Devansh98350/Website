import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.js";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Disclaimer">Disclaimer</Layout>;
};

export default Disclaimer;

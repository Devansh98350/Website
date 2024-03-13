import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Ten1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Ten of Cups">Ten of Cups</Layout>;
};

export default Ten1;

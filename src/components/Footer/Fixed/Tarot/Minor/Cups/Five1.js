import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Five1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Five of Cups">Five of Cups</Layout>;
};

export default Five1;

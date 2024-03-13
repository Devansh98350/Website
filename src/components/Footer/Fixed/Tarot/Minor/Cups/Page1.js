import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Page1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Page of Cups">Page of Cups</Layout>;
};

export default Page1;

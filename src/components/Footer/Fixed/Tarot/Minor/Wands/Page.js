import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Page of Wands">Page of Wands</Layout>;
};

export default Page;

import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Page3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Page of Pentacles">Page of Pentacles</Layout>
  );
};

export default Page3;

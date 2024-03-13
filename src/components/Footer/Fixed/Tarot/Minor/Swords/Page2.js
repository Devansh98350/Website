import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Page2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Page of Swords">Page of Swords</Layout>;
};

export default Page2;

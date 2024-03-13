import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Health = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vastu For Health">Vastu For Health</Layout>
  );
};

export default Health;

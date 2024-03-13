import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const King = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - King of Wands">King of Wands</Layout>;
};

export default King;

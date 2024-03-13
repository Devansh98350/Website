import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Seven = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Seven of Wands">Seven of Wands</Layout>;
};

export default Seven;

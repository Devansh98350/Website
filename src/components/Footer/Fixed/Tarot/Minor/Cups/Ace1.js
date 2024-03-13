import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Ace1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Ace of Cups">Ace of Cups</Layout>;
};

export default Ace1;

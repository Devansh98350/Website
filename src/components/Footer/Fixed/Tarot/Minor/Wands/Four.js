import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Four = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Four of Wands">Four of Wands</Layout>;
};

export default Four;

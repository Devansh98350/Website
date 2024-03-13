import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Ace = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Ace of Wands">Ace of Wands</Layout>;
};

export default Ace;

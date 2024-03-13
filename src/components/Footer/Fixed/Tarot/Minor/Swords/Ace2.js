import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Ace2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Ace of Swords">Ace of Swords</Layout>;
};

export default Ace2;

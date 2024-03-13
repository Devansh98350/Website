import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Nakshatras = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Nakshatras">Nakshatras</Layout>;
};

export default Nakshatras;

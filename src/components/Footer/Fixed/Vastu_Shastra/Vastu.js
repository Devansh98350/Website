import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Vastu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Vastu Shastra">Vastu Shastra</Layout>;
};

export default Vastu;

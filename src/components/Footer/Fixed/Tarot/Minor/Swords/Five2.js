import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";

const Five2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Five of Swords">Five of Swords</Layout>;
};

export default Five2;

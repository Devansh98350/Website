import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Vastu Products">Vastu Products</Layout>;
};

export default Products;

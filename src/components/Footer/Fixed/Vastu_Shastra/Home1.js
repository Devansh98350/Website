import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Home1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout title="AstroSwarg - Vastu For Home">Vastu For Home</Layout>;
};

export default Home1;

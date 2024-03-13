import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Car = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Car Muhurat 2024">Car Muhurat 2024</Layout>
  );
};

export default Car;

import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Property = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vastu For Commercial Properties">
      Vastu For Commercial Properties
    </Layout>
  );
};

export default Property;

import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Planet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Planet Transits 2024">
      Planet Transits 2024
    </Layout>
  );
};

export default Planet;

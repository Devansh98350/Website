import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Naamkaran = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Naamkaran Muhurat 2024">
      Naamkaran Muhurat 2024
    </Layout>
  );
};

export default Naamkaran;

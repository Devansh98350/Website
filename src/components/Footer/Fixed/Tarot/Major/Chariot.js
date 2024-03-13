import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Chariot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Chariot Tarot Cards Reading">
      Chariot Tarot Cards Reading
    </Layout>
  );
};

export default Chariot;

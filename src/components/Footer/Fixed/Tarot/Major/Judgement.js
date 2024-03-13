import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Judgement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Judgement Tarot Cards Reading">
      Judgement Tarot Cards Reading
    </Layout>
  );
};

export default Judgement;

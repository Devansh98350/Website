import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Pythagoras = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Pythagorean Numerology">
      Pythagorean Numerology
    </Layout>
  );
};

export default Pythagoras;

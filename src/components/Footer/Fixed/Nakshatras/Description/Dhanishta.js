import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Dhanishta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Dhanishta Nakshatra">
      Dhanishta Nakshatra
    </Layout>
  );
};

export default Dhanishta;

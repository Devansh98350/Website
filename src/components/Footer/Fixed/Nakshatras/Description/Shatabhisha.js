import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";

const Shatabhisha = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Shatabhisha Nakshatra">
      Shatabhisha Nakshatra
    </Layout>
  );
};

export default Shatabhisha;

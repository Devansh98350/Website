import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";

const Sdirection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Sleeping direction Vastu Shastra">
      Sleeping direction Vastu Shastra
    </Layout>
  );
};

export default Sdirection;

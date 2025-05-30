import React from "react";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  const location = useLocation();
  const canonicalUrl = `https://www.astroswarg.com${location.pathname}`;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <main style={{ minHeight: "68.4vh" }}>
        <Toaster /> {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Astro Swarg",
  description: "Best Institute for JEE and NEET",
  keywords: "mern,react,node,mongodb",
  author: "Devanshu Kumar",
};

export default Layout;

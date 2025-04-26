import React from "react";
import Layout from "../../Layout/Layout";
import Breadcrumbs from "../../Breadcrumb";

const services = [
  {
    icon: "📞",
    title: "Book Consultation Call",
    desc: "Personalized guidance on life, love, career, business, money",
  },
  {
    icon: "👩‍❤️‍👨",
    title: "Couple Kundali",
    desc: "Kundali Milan\nHoroscope Matching for Marriage",
  },
  {
    icon: "🧵",
    title: "Personalized Kundali",
    desc: "10+ years Career, Business, Money, Health, Love, Marriage Prediction Report.",
  },
  {
    icon: "📜",
    title: "Lal Kitab Report",
    desc: "Lal Kitab remedies attract success, prosperity, and positivity.",
  },
  {
    icon: "🕉️",
    title: "Kaal Sarp & Manglik Dosh Report",
    desc: "Kaal Sarp and Manglik Dosh remedies bring balance, success, and peace.",
  },
  {
    icon: "🌟",
    title: "Fortune Report",
    desc: "Fortune Report help you align with nature, & attract more success, money, & positivity into your life.",
  },
  {
    icon: "🧑‍🍼",
    title: "Baby Name Report",
    desc: "Get personalized name suggestions as per numerological explanation",
  },
  {
    icon: "🔢",
    title: "Mega Numerology Webinar",
    desc: "2 Days Live\nNumerology Webinar on Zoom",
  },
  {
    icon: "📕",
    title: "Lal Kitab Webinar",
    desc: "1 Day Live\nLal Kitab Webinar on Zoom",
  },
  {
    icon: "💎",
    title: "Buy Gemstones",
    desc: "Explore our diverse collection of astrological guidance gemstones",
  },
  {
    icon: "🎓",
    title: "Our Courses",
    desc: "Enroll in our Online comprehensive Astrology, Numerology & Vastu Shastra courses.",
  },
  {
    icon: "🔮",
    title: "Buy Rudraksha",
    desc: "Explore our diverse collection of astrological guidance Rudraksha",
  },
];
const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h2 className="service-title">{title}</h2>
      <p className="service-desc">{desc}</p>
      <a
        href=""
        onClick={(e) => e.preventDefault()}
        className="order-btn"
        title="Service will be available soon"
      >
        Order Now
      </a>
    </div>
  );
};

const AstroServicesMain = () => {
  return (
    <Layout title="AstroSwarg">
      <style>
        {`
          .services-section {
            width: 100%;
            padding: 0px 0;
            background: #fff;
          }

          .services-title {
            text-align: center;
            color: #7d1a1a;
            font-size: 2.5rem;
            margin-bottom: 32px;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            row-gap: 20px;
            column-gap: 20px;
            margin-top: 32px;
            max-width: 1150px;
            margin-left: auto;
            margin-right: auto;
          }

          .service-card {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 4px 24px rgba(125, 26, 26, 0.08);
           
            height: auto; /* Fixed the typo */
            padding: 32px 24px 24px 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            transition: box-shadow 0.2s;
          }

          .service-card:hover {
            box-shadow: 0 8px 32px rgba(125, 26, 26, 0.18);
          }

          .service-icon {
            background: #ff6a1a;
            color: #fff;
            font-size: 2.5rem;
            border-radius: 50%;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
          }

          .service-title {
            color: #7d1a1a;
            font-size: 1.35rem;
            text-align: center;
            margin: 0 0 18px 0;
            font-family: 'Georgia', serif;
            line-height: 1.4;
            padding-bottom: 6px;
          }

          .service-desc {
            color: #444;
            font-size: 1.08rem;
            text-align: center;
            margin-bottom: 24px;
            min-height: 60px;
            line-height: 1.7;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .order-btn {
            background: red;
            color: #fff;
            border: none;
            border-radius: 8px;
            padding: 12px 28px;
            font-size: 1rem;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.2s;
            text-decoration: none;
          }

          .order-btn:hover {
            background: #7d1a1a;
          }
        `}
      </style>
      <Breadcrumbs />
      <div className="services-section">
        <h1 className="services-title">Our Astro Services</h1>
        <div className="services-grid">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AstroServicesMain;

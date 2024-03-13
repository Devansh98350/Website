import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div
          className="footer-column"
          style={{
            width: "95%",
            textAlign: "left",
            borderBottom: "2px solid white",
          }}
        >
          <div className="name">About AstroSwarg</div>
          <div className="named">
            Astroswarg is a premier online destination for astrology services
            and panditji bookings. Connect with experienced astrologers for
            accurate predictions and solutions to life's uncertainties. Whether
            it's insights into relationships, career paths, or health matters,
            Astroswarg offers personalized guidance through calls, chats,
            queries, and reports. Experience the wisdom of renowned astrologers
            from India, all in one convenient platform.
          </div>
        </div>
      </div>
      <div
        className="footer-row"
        style={{ marginTop: "1rem", borderBottom: "2px solid white" }}
      >
        <div className="footer-column">
          <div className="name">Horoscope</div>
          <p>
            <Link to="/horoscope-2024">Horoscope 2024</Link>
          </p>
          <p>
            <Link to="/todays-horoscope">Today's Horoscope</Link>
          </p>
          <p>
            <Link to="/todays-love-horoscope">Today's Love Horoscope</Link>
          </p>
          <p>
            <Link to="/yesterdays-horoscope">Yesterday's Horoscope</Link>
          </p>
          <p>
            <Link to="/tomorrows-horoscope">Tomorrow's Horoscope</Link>
          </p>
          <p>
            <Link to="/weekly-horoscope">Weekly Horoscope</Link>
          </p>
          <p>
            <Link to="/monthly-horoscope">Monthly Horoscope</Link>
          </p>
          <p>
            <Link to="/yearly-horoscope">Yearly Horoscope</Link>
          </p>
          <div className="name">
            <Link to="/shubh-muhurat-2024">Shubh Muhurat 2024</Link>
          </div>
          <p>
            <Link to="/shubh-muhurat-2024/annanprashan-muhurat-2024">
              Annaprashan Muhurat 2024
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2024/namkaran-muhurat-2024">
              Naamkaran Muhurat 2024
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2024/car-bike-muhurat-2024">
              Car/Bike Muhurat 2024
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2024/marriage-muhurat-2024">
              Marriage Muhurat 2024
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2024/gold-buying-muhurat-2024">
              Gold Buying Muhurat 2024
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2024/bhoomi-pujan-muhurat-2024">
              Bhoomi Pujan Muhurat 2024
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2024/griha-pravesh-muhurat-2024">
              Griha Pravesh Muhurat 2024
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2024/mundan-muhurat-2024">
              Mundan Muhurat 2024
            </Link>
          </p>
        </div>
        <div className="footer-column">
          <div className="name">Important Links</div>
          <p>
            <Link to="/astromall">Astromall</Link>
          </p>
          <p>
            <Link to="/today-panchang">Today Panchang</Link>
          </p>
          <p>
            <Link to="/live-astrologers">Live Astrologers</Link>
          </p>
          <p>
            <Link to="/how-to-read-kundali">How to read Kundali</Link>
          </p>
          <p>
            <Link to="/free-kundli">Free Kundli</Link>
          </p>
          <p>
            <Link to="/kundli-matching">Kundli Matching</Link>
          </p>
          <p>
            <Link to="/chat-with-astrologer">Chat with Astrologer</Link>
          </p>
          <p>
            <Link to="/talk-to-astrologer">Talk to Astrologer</Link>
          </p>
          <p>
            <Link to="/astrotalk-reviews">Astrotalk Reviews</Link>
          </p>
          <p>
            <Link to="/astrology-yoga">Astrology Yoga</Link>
          </p>
          <p>
            <Link to="/kaalsarp-doshas">Kaalsarp Doshas</Link>
          </p>
          <p>
            <Link to="/child-astrology">Child Astrology</Link>
          </p>
          <p>
            <Link to="/ascendant-sign-gemstone">Ascendant Sign Gemstone</Link>
          </p>
          <p>
            <Link to="/nakshatras-constellations">
              Nakshatras Constellations
            </Link>
          </p>
          <p>
            <Link to="/numerology-introduction">Numerology</Link>
          </p>
          <p>
            <Link to="/mantras">Mantras</Link>
          </p>
          <p>
            <Link to="/astrological-remedies-for-job-promotion">
              Astrological remedies for job promotion
            </Link>
          </p>
        </div>
        <div className="footer-column">
          <div className="name">Important Links</div>
          <p>
            <Link to="/planetary-transit-2024">Planetary Transit 2024</Link>
          </p>
          <p>
            <Link to="/collaboration">Collaboration</Link>
          </p>
          <p>
            <Link to="/tarot">Tarot</Link>
          </p>
          <p>
            <Link to="/zodiac-signs">Zodiac Signs</Link>
          </p>
          <p>
            <Link to="/vastu-shastra">Vastu Shastra</Link>
          </p>
          <p>
            <Link to="/solar-eclipse-2024">Solar Eclipse 2024</Link>
          </p>
          <p>
            <Link to="/lunar-eclipse-2024">Lunar Eclipse 2024</Link>
          </p>
          <p>
            <Link to="/festival-calendar-2024">Festival Calendar 2024</Link>
          </p>
          <p>
            <Link to="/vrat-calendar-2024">Vrat Calendar 2024</Link>
          </p>
          <p>
            <Link to="/mole-astrology">Mole Astrology</Link>
          </p>
          <p>
            <Link to="/love-calculator">Love Calculator</Link>
          </p>
          <p>
            <Link to="/astrotalk-sitemap">Astrotalk Sitemap</Link>
          </p>
          <div className="name">Registration</div>
          <p>
            <Link to="/astrologer-login">Astrologer Login</Link>
          </p>
          <p>
            <Link to="/astrologer-registration">Astrologer Registration</Link>
          </p>
          <p>
            <Link to="/astrologer-login">Pandit Ji Login</Link>
          </p>
          <p>
            <Link to="/astrologer-registration">Pandit Ji Registration</Link>
          </p>
        </div>
        <div className="footer-column">
          <div className="name">Corporate Info</div>
          <p>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </p>
          <p>
            <Link to="/privacy-policies">Privacy Policy</Link>
          </p>
          <p>
            <Link to="/disclaimer">Disclaimer</Link>
          </p>
          <p>
            <Link to="/about-us">About Us</Link>
          </p>
          <p>
            <Link to="/pricing">Pricing Policy</Link>
          </p>
          <p>
            <Link to="/refund-and-cancellation-policy">
              Refund & Cancellation Policy
            </Link>
          </p>
        </div>
      </div>
      <div
        className="footer-row"
        style={{
          textAlign: "center",
        }}
      >
        All Rights Reserved @AstroSwarg 2024
      </div>
    </div>
  );
};

export default Footer;

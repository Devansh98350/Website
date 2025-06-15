import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div
        className="footer-row"
        style={{
          display: "inline",
        }}
      >
        <div
          className="name"
          style={{ textAlign: "left", marginBottom: "3px" }}
        >
          About AstroSwarg
        </div>
        <div
          className="named"
          style={{
            textAlign: "justify",
            width: "90%",
            marginLeft: "5%",
            paddingBottom: "10px",
            borderBottom: "2px solid white",
          }}
        >
          Astroswarg is a premier online destination for astrology services and
          panditji bookings. Connect with experienced astrologers for accurate
          predictions and solutions to life's uncertainties. Whether it's
          insights into relationships, career paths, or health matters,
          Astroswarg offers personalized guidance through calls, chats, queries,
          and reports. Experience the wisdom of renowned astrologers from India,
          all in one convenient platform.
        </div>
      </div>
      <div
        className="footer-row"
        style={{ marginTop: "0.5rem", borderBottom: "2px solid white" }}
      >
        <div className="footer-column">
          <div className="name">Horoscope</div>
          <p>
            <Link to="/horoscope-2025">Horoscope 2025</Link>
          </p>
          {/*<p>
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
          </p>*/}
          <p>
            <Link to="">Today's Horoscope</Link>
          </p>
          <p>
            <Link to="">Today's Love Horoscope</Link>
          </p>
          <p>
            <Link to="">Yesterday's Horoscope</Link>
          </p>
          <p>
            <Link to="">Tomorrow's Horoscope</Link>
          </p>
          <p>
            <Link to="">Weekly Horoscope</Link>
          </p>
          <p>
            <Link to="">Monthly Horoscope</Link>
          </p>
          <p>
            <Link to="">Yearly Horoscope</Link>
          </p>
          <div className="name">
            <Link
              to="/shubh-muhurat-2025"
              style={{ color: "black", marginBottom: "20px" }}
            >
              Shubh Muhurat 2025
            </Link>
          </div>
          <p>
            <Link to="/shubh-muhurat-2025/annanprashan-muhurat-2025">
              Annaprashan Muhurat 2025
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2025/namkaran-muhurat-2025">
              Naamkaran Muhurat 2025
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2025/car-bike-muhurat-2025">
              Car/Bike Muhurat 2025
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2025/marriage-muhurat-2025">
              Marriage Muhurat 2025
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2025/gold-buying-muhurat-2025">
              Gold Buying Muhurat 2025
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2025/bhoomi-pujan-muhurat-2025">
              Bhoomi Pujan Muhurat 2025
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2025/griha-pravesh-muhurat-2025">
              Griha Pravesh Muhurat 2025
            </Link>
          </p>
          <p>
            <Link to="/shubh-muhurat-2025/mundan-muhurat-2025">
              Mundan Muhurat 2025
            </Link>
          </p>
        </div>
        <div className="footer-column">
          <div className="name">Quick Links</div>
          {/*<p>
            <Link to="/astromall">Astromall</Link>
          </p>
          <p>
            <Link to="/today-panchang">Today Panchang</Link>
          </p>
          <p>
            <Link to="/live-astrologers">Live Astrologers</Link>
        </p>*/}
          <p>
            <Link to="">AstroSwarg Shop</Link>
          </p>
          <p>
            <Link to="">Puja Services</Link>
          </p>
          <p>
            <Link to="">Astro Services</Link>
          </p>
          <p>
            <Link to="/freekundli/how-to-read-kundli">How to read Kundali</Link>
          </p>
          <p>
            <Link to="/freekundli">Free Kundli</Link>
          </p>
          {/*<p>
            <Link to="/kundli-matching">Kundli Matching</Link>
          </p>
          <p>
            <Link to="/chat-with-astrologer">Chat with Astrologer</Link>
          </p>
          <p>
            <Link to="/talk-to-astrologer">Talk to Astrologer</Link>
          </p>
          <p>
            <Link to="/astroswarg-reviews">AstroSwarg Reviews</Link>
         </p>*/}
          <p>
            <Link to="">Kundli Matching</Link>
          </p>
          <p>
            <Link to="">Chat with Astrologer</Link>
          </p>
          <p>
            <Link to="">Talk to Astrologer</Link>
          </p>
          <p>
            <Link to="">AstroSwarg Reviews</Link>
          </p>
          <p>
            <Link to="/astrology-yoga">Astrology Yoga</Link>
          </p>
          <p>
            <Link to="/kaal-sarp-dosh-12-types">Kaalsarp Doshas</Link>
          </p>
          <p>
            <Link to="/astrological-remedies-to-conceive-a-child">
              Child Astrology
            </Link>
          </p>
          <p>
            <Link to="/gemstones-for-ascendants">Ascendant Sign Gemstone</Link>
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
            <Link to="/astrology-remedies/astrological-remedies-for-job-promotion">
              Astrological remedies for promotion
            </Link>
          </p>
          <p>
            <Link to="/108-names-of-deities">108 Gods Name</Link>
          </p>
          <p>
            <Link to="/1000-names-of-deities">1000 Gods Name</Link>
          </p>
          <p>
            <Link to="/jyotirilinga">12 Jyotirlinga</Link>
          </p>
          <p>
            <Link to="/panch-kedar">Panch-Kedar</Link>
          </p>
        </div>
        <div className="footer-column">
          <div className="name">Quick Links</div>
          <p>
            <Link to="/planetary-transit-2025">Planetary Transit 2025</Link>
          </p>
          {/*<p>
            <Link to="/collaboration">Collaboration</Link>
          </p>*/}
          <p>
            <Link to="">Collaboration</Link>
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
            <Link to="/solar-eclipse-2025">Solar Eclipse 2025</Link>
          </p>
          <p>
            <Link to="/lunar-eclipse-2025">Lunar Eclipse 2025</Link>
          </p>
          <p>
            <Link to="/indian-calendar-festivals-2025">
              Festival Calendar 2025
            </Link>
          </p>
          <p>
            <Link to="/fasts-calendar-2025">Vrat Calendar 2025</Link>
          </p>
          <p>
            <Link to="/mole-astrology">Mole Astrology</Link>
          </p>
          {/*<p>
            <Link to="/love-calculator">Love Calculator</Link>
          </p>
          <p>
            <Link to="/AstroSwarg-sitemap">AstroSwarg Sitemap</Link>
         </p>*/}
          <p>
            <Link to="">Love Calculator</Link>
          </p>
          <p>
            <Link to="">AstroSwarg Sitemap</Link>
          </p>
          <div className="name">Registration</div>
          {/*<p>
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
         </p>*/}
          <p>
            <Link to="">Astrologer Login</Link>
          </p>
          <p>
            <Link to="">Astrologer Registration</Link>
          </p>
          <p>
            <Link to="">Pandit Ji Login</Link>
          </p>
          <p>
            <Link to="">Pandit Ji Registration</Link>
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
          {/*<p>
            <Link to="/about-us">About Us</Link>
        </p>*/}
          <p>
            <Link to="">About Us</Link>
          </p>
          <p>
            <Link to="/pricing">Pricing Policy</Link>
          </p>
          {/*<p>
            <Link to="/refund-and-cancellation-policy">
              Refund & Cancellation Policy
            </Link>
         </p>*/}
          <p>
            <Link to="">Refund & Cancellation Policy</Link>
          </p>
          <div className="name">Contact Us</div>
          <p>
            <a href="tel:9205704041">+91-9205704041</a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/astroswarg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="linkedin-icon" />
            </a>{" "}
            <a
              href="https://www.linkedin.com/company/astroswarg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
            </a>{" "}
            <a
              href="https://www.facebook.com/astroswarg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="linkedin-icon" />
            </a>{" "}
            <a
              href="https://www.youtube.com/@AstroSwarg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} className="linkedin-icon" />
            </a>
          </p>
        </div>
      </div>
      <div
        className="footer-row"
        style={{
          display: "flex",
          justifyContent: "center",
          color: "red",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        All Rights Reserved @AstroSwarg 2025
      </div>
    </div>
  );
};

export default Footer;

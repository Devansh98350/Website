import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const AstroServices = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardWidthRef = useRef(0);
  useEffect(() => {
    const updateCardWidth = () => {
      const card = scrollRef.current.querySelector(".service-card");
      if (card) {
        const style = window.getComputedStyle(card);
        const margin =
          parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        cardWidthRef.current = card.offsetWidth + margin;
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const slideIndex = Math.round(scrollLeft / cardWidthRef.current);
      setCurrentSlide(slideIndex % services.length);
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const slider = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

    // Touch
    slider.addEventListener("touchstart", (e) => {
      isDown = true;
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("touchend", () => {
      isDown = false;
    });
    slider.addEventListener("touchmove", (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current.scrollBy({
        left: cardWidthRef.current,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const handlePrev = () => {
    scrollRef.current.scrollBy({
      left: -cardWidthRef.current,
      behavior: "smooth",
    });
  };
  const handleNext = () => {
    scrollRef.current.scrollBy({
      left: cardWidthRef.current,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    let interval;
    const slider = scrollRef.current;
    const startAutoPlay = () => {
      interval = setInterval(() => {
        slider.scrollBy({ left: cardWidthRef.current, behavior: "smooth" });
      }, 3000);
    };
    const stopAutoPlay = () => {
      clearInterval(interval);
    };
    startAutoPlay();
    slider.addEventListener("mouseenter", stopAutoPlay);
    slider.addEventListener("mouseleave", startAutoPlay);

    return () => {
      stopAutoPlay();
      slider.removeEventListener("mouseenter", stopAutoPlay);
      slider.removeEventListener("mouseleave", startAutoPlay);
    };
  }, []);
  return (
    <>
      <style>
        {`
          .services-section {
            width: 100%;
            padding: 40px 0;
            background: #fff;
            position: relative;
          }

          .services-title {
            text-align: center;
            color: #7d1a1a;
            font-size: 2.5rem;
            margin-bottom: 32px;
          }

         .services-header {
  display: flex;
  justify-content: center; /* Center the title */
  align-items: center;
  margin: 0 40px 32px 40px;
  position: relative;
}

.view-all-btn {
  position: absolute;
  right: 40px; /* Right side */
  background:red ;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
}

.view-all-btn:hover {
  background: #7d1a1a;
}

          .services-slider {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 20px;

             scrollbar-width: none; 
  -ms-overflow-style: none;
          }

          .service-card {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 4px 24px rgba(125, 26, 26, 0.08);
            padding: 32px 24px 24px 24px;
            width: 24%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            min-width: 250px;
            margin: 0 10px;
            flex-shrink: 0;
            scroll-snap-align: center;
            transition: box-shadow 0.2s;
          }

          @media (max-width: 1024px) {
  .service-card {
    width: 40%;
  }
}

/* Mobile (up to 767px) */
@media (max-width: 767px) {
  .service-card {
    width: 80%;
  }
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
            white-space: pre-line;
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

          .dots {
            text-align: center;
            margin-top: 20px;
          }

          .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            margin: 0 5px;
            background: #ccc;
            border-radius: 50%;
            transition: background 0.3s;
          }

          .dot.active {
            background: #7d1a1a;
          }

          .arrow-btn {
  position: absolute;
  top: 52%;
  transform: translateY(-50%);
  background: linear-gradient(45deg, #ff6a1a, #7d1a1a);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  z-index: 10;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

         .arrow-btn:hover {
  transform: translateY(-50%) scale(1.1); /* Slightly increase size */
  background: linear-gradient(45deg, #7d1a1a, #ff6a1a); /* Reverse gradient */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Add a soft shadow on hover */
}

.arrow-btn:active {
  transform: translateY(-50%) scale(0.95); /* Slightly shrink when pressed */
}

.prev-btn {
  left: -20px;
}

.next-btn {
  right: -20px;
}

.arrow-btn::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border: solid 4px white;
  border-width: 4px 4px 0 0;
  transform: rotate(45deg);
}

.prev-btn::before {
  left: 50%;
  transform: translateX(-50%) rotate(-135deg);
}

.next-btn::before {
  right: 50%;
  transform: translateX(50%) rotate(45deg);
}
    }
        `}
      </style>
      <div className="services-section">
        <div className="services-header">
          <h1 className="services-title">Our Astro Services</h1>
          <Link to="/astro-services" className="view-all-btn">
            View All
          </Link>
        </div>
        <button className="arrow-btn prev-btn" onClick={handlePrev}></button>
        <div className="services-slider" ref={scrollRef}>
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
        <button className="arrow-btn next-btn" onClick={handleNext}></button>
        <div className="dots">
          {services.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentSlide ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default AstroServices;

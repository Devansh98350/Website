import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import styled from "styled-components";
import AstroServices from "./components/AstroServices";
import FAQLayout from "../Common/FaqLayout";

const Container = styled.div`
  .body {
    width: 90%;
    margin: auto;
    text-align: justify;
  }

  .heading {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 0px;
  }
  .heading1 {
    text-align: center;
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 10px;
    color: red;
  }
  .inline {
    display: inline;
  }

  .inline-red-text {
    display: inline;
    color: red;
    cursor: pointer;
  }

  .inline-red-text a {
    display: inline;
    color: red;
    cursor: pointer;
    text-decoration: none;
  }

  .inline-red-text a:hover {
    font-weight: bold;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  .inline {
    color: red;
    font-weight: normal;
  }
  .inline1 {
    color: black;
    font-weight: medium;
    display: inline;
  }
  li {
    margin-bottom: 5px;
  }
  p {
    line-height: 1.5;
  }
`;
const HomepageFAQ = [
  {
    id: 1,
    title: "What is Astro Swarg?",
    content: `Astro Swarg is an online platform that offers one-stop solution for religious needs and requirements of Hindus. In a domain that remained mostly offline and off-limit, we've leveraged technology and streamlined the entire Puja experience. With Astro Swarg, You don't go through any hassles while trying to arrange a Puja in your home or outdoors. We take care of it all. Right from booking a Specialist Pandit, to arranging the best quality Puja Samagri, ensuring Puja is performed on an auspicious muhurat on a desired date and to your satisfaction.`,
  },
  {
    id: 2,
    title: "What are the services provided by Astro Swarg?",
    content: `We offer Puja and Astrology services in all cities of India. Puja Services - You can now book a Puja with a specialist pandit handpicked by Astro Swarg team. Our Pandit Ji comes prepared with all required Puja materials (samagri) and performs puja as per your customs and rituals. Astrology - Our in house expert Vedic Astrologers are now just a call away. You can now get all your questions answered by simply booking a slot online and can converse with them over phone at the comfort of your home. `,
  },
  {
    id: 3,
    title:
      "What is the difference between pandits from Astro Swarg and normal Pandits?",
    content: `Astro Swarg has verified and checked 100's of Pandits and has shortlisted the best ones as per their proficiency, language and qualification. Our Pandits don't just perform the Puja, they will explain the importance and significance of every ritual while performing the Puja. The Pandits will also customize the Puja based on the caste and region from where the customer hails from and conduct the puja as per customer's religious tradition and methodology.`,
  },
  {
    id: 4,
    title: "Why Should You Choose Astro Swarg For An Astrology Horoscope?",
    content: `Astro Swarg has garnered a wide user base that is nothing but satisfied with all the astrology related material we have to offer. The process of recruiting the astrologers on the Astro Swarg platform is really stringent and only the best astrologers can make it to the platform only to ensure you're getting the best service each and every time you get along with us. The services we are talking about range across online Kundli matching, horoscope predictions, daily horoscope, weekly horoscope, numerology, tarot reading, shopping, free blogs, and many more services.Moreover, in case you bump into any sort of problem, you can directly connect with the CEO to register the same with us. Providing exceptional service is our main motto and we ensure that is achieved whatsoever`,
  },
  {
    id: 5,
    title: "What Benefits Can I Expect If I Avail Astrology Services?",
    content: `First of all, if you are new to our platforms, you get a flat 50% discount on your first astrology prediction. So that’s some savings. Secondly, using the insights provided by our astrologers about your future or the present self, you can be careful in terms that will help you deal with major problems, which could be finance-related, career-related, love related etc. By seeing your astrological chart, an astrologer can not only predict about you but also about your behaviour towards your family, your relatives, your colleagues and more. Learning about these behaviours can help you better present yourself in front of people that matter. This way, astrology can positively help you improve your personality among uncountable goods it can do to you. For more details about astrology and future predictions, you can talk to astrologer.`,
  },
  {
    id: 6,
    title: "Which app is best for kundli?",
    content: `Astro Swarg is one of the best platforms to get an online kundli for yourself. The online kundli of Astro Swarg covers all dimensions of your life from past, present and future and based on these dimensions allow you suggestions that you can adopt into your life for a better future ahead. In the online Kundli, we have various sections that highlight the good, bad and neutral Dashas that lie ahead of you and what you must do during these Dasha periods to get the best of the different phases So without a doubt, you can use Astro Swarg for the most authentic kundli. `,
  },
  {
    id: 7,
    title: "How reliable is the Astro Swarg app?",
    content: `Interestingly, the Astro Swarg app is made in such a way that it helps you with all your astrology and puja needs. Apart from the main Talk to astrologers, Call to astrologers features, where the best astrologers from across the world are at your service, and book a pandit ji online, the Astro Swarg app also has many free features that a user can enjoy. AstroSwarg also has daily, weekly, monthly and yearly horoscopes prepared by expert astrologers that help you decode your future in advance. Apart from this, if you need any kind of astrology products such as Rudraksha, Yantras, Gemstones, Reiki healing, etc. such products are too available on the app. So Astro Swarg is a one-stop destination for all your astrology and rituals needs and thus very reliable.`,
  },
  {
    id: 8,
    title: "Is my personal information safe?",
    content: `Yes! Safety of your personal details is of utmost importance to us and we don't share your personal details with any third party at any cost. We have taken required measures to protect your privacy and even if we have to share information internally only limited information required for the specific transaction is shared. For example: If your date of birth is required to look for good muhurth only your date of birth is provided to Pandit`,
  },
  {
    id: 9,
    title: "How many days in advance should i book a pandit?",
    content: `We recommend that you make the booking at least 5 to 7 days in advance.`,
  },
  {
    id: 10,
    title:
      "Is it necessary to create my profile in order to avail services offered by Astro Swarg?",
    content: `Yes, it's a good practice and creating your profile will ensure hassle free operation and experience. By creating your profile, the relevant information gets updated on booking a service and you avoid repeating steps each time you use a service.`,
  },
  {
    id: 11,
    title: "Are the astrology predictions accurate?",
    content: `Astrology predictions are based on planetary movements. A planet moves from one house to another, one zodiac sign to another, etc. These moments by plantes can either be good or unfavourable for the native. For example, if say the planet Mercury is camping in a friendly zodiac sign, the outcomes are to be good for the native. Meanwhile, if the mercury is camping in an unfriendly zodiac sign, the outcome can be critical. An astrologer, based on calculations, notes down such shifts and traits and based on the same share with you if your upcoming time would be good or tough. If you think this way, astrology predictions ought to be true. Accurate predictions are possible when you seek to know about things like upcoming shubh muhurats, whether you are manglik or not?, etc.`,
  },
  {
    id: 12,
    title: "What if the Pandit doesn't reach the puja venue in time?",
    content: `It may be possible that Pandit Ji may be late due to unavoidable circumstances such as a traffic jam or due to rain. In such scenarios we will inform you about the delay as soon as we get to know. We have not come across a situation where the designated Pandit Ji has not reached the Puja venue at all, as Astro Swarg team has thoroughly verified the Pandits credentials and have enrolled only those pandits with high sense of integrity and professionalism. In the worst case if such a situation does occur, we will arrange for a back-up Pandit Ji.`,
  },
];

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg" description="" keywords="">
      <Container>
        <div className="body">
          <AstroServices />
          <h1 className="heading">WHY ASTROLOGY ?</h1>
          <h2 className="heading1">Astrology reveals the will of the God</h2>
          <p>
            Astrology is a predictive science with its own sets of methods,
            claims and findings that have forever inspired and allowed people
            with insights into different aspects of their life. Astrology, with
            its wows and hows, is contentful and approving enough to make people
            a believer of the same. And thankfully, it continues to do so
            despite the world shifting bases from what they believe in and what
            they don’t.
          </p>
          <p>
            If one has to go into the technicalities of astrology, it is the
            study of different cosmic objects, which are usually stars and
            planets, that have an effect on the lives of the people. You must be
            aware that there are as many as 8 planets in the solar system.
            However, If I ask an online astrologer near me about the planets in
            astrology, they will tell me that there are as many as 9 planets in
            astrology also called Navagrahas. And surprisingly, the planet
            Earth, in astrology, is not counted among the nine planets.
          </p>
          <p>
            The 9 planets in astrology are Sun (Surya), Moon (Chandra), Mars
            (Mangala), Mercury (Budha), Jupiter (Brihaspati), Venus (Shukra),
            Saturn (Shani), Rahu (north node of the moon), and Ketu (south node
            of the moon).
          </p>
          <p>
            Among these planets, some planets are called friendly planets,
            meaning the presence of them brings positivity to your life. And
            then, there are also planets that have a negative influence on
            humans. The latter would be planets like Rahu and Ketu. Their
            presence in one’s Kundli is said to bring pain and misery. However,
            there is another aspect one needs to be aware of. It’s the fact that
            the presence of Ketu in one’s horoscope is not always bad and
            similarly, the presence of Jupiter in one’s Kundli might not be the
            best every time.
          </p>
          <p>
            It all depends on which houses these planets are sitting in. If you
            ever had the opportunity to talk to an astrologer online, then s/he
            must have told you about houses in astrology and the movements of
            planets in the same. There are as many as 12 houses in Kundli. And
            all of these houses represent one thing or the other. You can check
            your free kundali online.
          </p>
          <p>
            For example, the first house, which any online astrology
            consultation would tell you is also the ascendant of the person, is
            the house of self. It represents a person’s personality and physical
            traits. Similarly, the fifth house in the Vedic horoscope, also
            known as Putra Bhava is the house of creativity, playfulness, joy,
            pleasure, and romance. If, for example, a good planet, like Jupiter,
            is camping in the fifth house, your love life will excel. Likewise,
            if Rahu is camping in the same house, then you might feel the need
            for online astrology consultation to deal with the woes.
          </p>
          <p>
            Then there are other things in astrology like elements, the Moon
            sign of an individual, numerology, tarot and so much more that is
            impossible to wind up here.
          </p>
          <h3>Online Astrology Consultation & Services</h3>
          <p>
            The online footprint of things and people has grown over the years.
            And AstroSwarg, as a brand, is using the best of it to cater online
            astrology services to anyone and everyone across the length and
            breadth of the globe. AstroSwarg, over the years, has nurtured as a
            community of the best astrologers who have their expertise in Vedic
            Astrology, tarot card reading, Vastu Shastra, numerology, Reiki
            healing, Palmistry, and many more subjects.
          </p>
          <p>
            The motive behind providing astrology predictions online is simply
            helping people save time, money, and pain to find astrologers in the
            hustle and bustle of the city lights. Besides, to ensure
            credibility, AstroSwarg has, over the years, worked extensively to
            add value to customer service. And a good chunk of credit for this
            goes to the astrologers who work for 100% customer satisfaction
            using their knowledge to deliver impeccable astrology consultancy.
          </p>
          <p>
            Surely, not everything in life should revolve around money, so we at
            AstroSwarg, besides online astrology, also organize various events
            that help one get a better understanding of online astrology
            prediction and more related themes. These events range from free
            astrology predictions sessions to live events involving Aartis and
            Pujas that happen across India at some of the most renowned temples.
            It's a way for us to connect with people.
          </p>
          <h3>Online Astrologer</h3>
          <p>
            A huge chunk of credit for what we are today goes to the force of
            online astrologers we have got on board. Astrologers come from
            different walks of life and only the best, who has a piece of
            extensive knowledge in their field, make it to this platform for
            your convenience. As the Astrologers work with us, they are
            scrutinized in the form of ratings that the customers give them. The
            better the rating, the better the service. Talking about service,
            there are multiple ways to avail the same. Either you can talk to
            the astrologer over a call or simply chat with them at your
            convenience. And guess what, the first chat with an astrologer can
            be availed at a 50% discount.
          </p>
          <p>
            The astrologers, we have on board, understand the essence of the
            5000-year old science and try their best to do justice with it.
            Besides sharing their knowledge with you, they also share videos,
            write up and other rich content with us that is available across our
            social media pages and in the blog section of our website. These
            writings on Muhurats, upcoming festivals, online astrology
            prediction will quench the thirst of your pious soul for online
            astrology knowledge.
          </p>
          <h3>Stay Updated With Daily Horoscope Predictions & Zodiac Signs</h3>
          <p>
            We as a brand are new in the online astrology consultation arena
            but, at the same time, also empowered to offer our visitors the best
            invariably. So within a short span of time, we have created a space
            to offer even the minutest details on astrological elements like
            transits, astrology daily horoscope for different zodiac signs,
            updates on upcoming auspicious dates, and much more.
          </p>
          <p>
            While astrology's daily horoscope allows one an opportunity to
            realign their day as per what the stars have for them in the box,
            having knowledge of muhurats, among other astrology services, on the
            other hand, ensures you are well updated on the best times of the
            day. So much information under one roof? Well, that’s what our
            purpose has been over the years and we continue to refine it.
          </p>
          <h3>Why Choose Our Astrology Experts?</h3>
          <p>
            In a nutshell, AstroSwarg and our experts could be your partner and
            guide when it comes to astrology. Be it a question on horoscope or
            numerology, tarot card reading or even connecting you with a foreign
            astrologer, we have practitioners to answer all your starry queries.
          </p>
          <p>
            At last, what do you need to do to get in touch with our
            astrologers? Simply, login to the AstroSwarg app, and guess what?
            There is a free astrology online session waiting for you. Once you
            have finished your free astrology predictions session, and you want
            to stay with us for longer (which you would) then you can recharge
            your wallet, and connect with live astrologers to receive instant
            astrology consultation.
          </p>
          <p>
            The best way to choose the best astrologers is to select the
            category and choose the top astrologers as per the ratings given to
            them by people like you. One can completely trust our service to be
            of supreme quality. And just in case you bump into a nag during
            astrology online consultation, you will be heard by our customer
            service team invariably.
          </p>
          <p>
            AstroSwarg connects you with the best astrologer in India. If want
            to get the best astrological consultation from one of the best
            Indian astrologers online, search for the phrase “best astrologer
            near me” on Google, and you will find Indian astrologers online.
            AstroSwarg connects you with the best astrologers in India, the USA,
            Canada, Australia or we can say that you can connect with the best
            astrologers in the world by using the AstroSwarg website and App. If
            you are looking for the best astrologers in Noida, Delhi/NCR,
            Gurgaon, etc., AstroSwarg is the best online platform for you. We
            have the best astrologers online for marriage, career, health, etc.
            AstroSwarg is your ultimate destination if you want to talk to
            astrologer online, chat with astrologers, check free kundali, match
            making, daily horoscopes, gems, and rudraksha shopping, etc.
          </p>
        </div>
      </Container>
      <FAQLayout faqData={HomepageFAQ} />
    </Layout>
  );
};

export default Homepage;

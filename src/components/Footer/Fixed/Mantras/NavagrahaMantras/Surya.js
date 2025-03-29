import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";
import image from "./../../../../../assests/Others/Mantras/Surya_Mantra.webp";
import Breadcrumbs from "../../../../Breadcrumb.js";

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
    margin-bottom: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  .inline {
    display: inline;
  }
  .image-container {
    text-align: center;
  }
  .image {
    width: 600px;
    height: auto;
  }
  img {
    pointer-events: none; /* Disable click events */
  }
  @media (max-width: 768px) {
    .image {
      margin-left: 2.5%;
      width: 95%;
      height: auto;
    }
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
  .red {
    font-weight: bold;
    color: red;
  }
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Surya = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Surya Mantra" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Surya Mantra</h1>
          <h2>Surya Mantra: Meaning, Significance and Benefits</h2>
          <p>
            In Yoga, mantras are utilised to focus and calm the mind, and soul.
            Also, it lets people focus on the mental preparation during and for
            Pranayama and meditation. Surya Mantra is generally chanted as an
            acknowledgment to Surya Deva, who is known as Lord Sun, as per
            Hinduism.
          </p>
          <p>
            Planet Sun is known as one of the most powerful planets because it
            rules over Earth’s seasons and enhances crop growth and humankind
            with meals. People worship Surya Deva for multiple reasons. They
            believe that it is the provider of light and energy. Moreover, it is
            said that Surya Deva is the only God who individuals can see with
            their naked eyes— Pratyaksha Daivam.
          </p>
          <p>
            Natives who regularly chant the Surya Mantra, Surya Deva dispels the
            negativities and darkness from their lives and provides them with
            knowledge, wisdom, and enlightenment. Lasting a great impact, Sun is
            known by the name Arka and Mitra in various parts of the country.
          </p>
          {/*Image*/}
          <div className="image-container">
            <img src={image} alt="" className="image" />
          </div>
          <h3>Surya Mantra: How do they help</h3>
          <p>
            Surya Mantra is a series of phrases or phrases that people recite to
            invoke the blessings and power of Surya Deva. Mantra usually calms
            the native down and lets them look after the mind's focus and
            positivity in life. In astrology, there are many Surya Mantra, and
            each has its own meaning and impact. However, all of the general
            lets the native attain peace of mind and attract good times and
            prosperity.
          </p>
          <p>
            Moreover, the meaning of the Surya Mantras is to enhance the health
            and well-being of the individuals who recite them and draw them to
            the path of devotion and faith. Moreover, it helps the natives pay
            gratitude to the Universe and helps them become the storehouse of
            health and peace. With that, it also means that Surya Deva is the
            only one who shall remove the diseases and will revitalise the
            entire world. So, the native must meditate upon him to attain
            wealth, health, and longevity.
          </p>
          <h3>How to chant Surya mantra</h3>
          <p>
            Natives can chant Surya Mantra early in the morning, just after the
            sunrise. You must be clear in the chanting and clear the mind from
            negativity and distractions. People orating the Surya Mantra must
            keep in mind that they absorb the positivity and keep themselves
            calm when meditating for the same.
          </p>
          <p>
            Other than this, you must remember the following points when
            chanting the Surya Mantra:
          </p>
          <UnorderedList>
            <ListItem>
              As Lord Sun is the ruler of the Ravi-Vaar, you must make sure to
              recite any Surya Mantra on Sundays. In case you chant it daily,
              make sure to begin it on Sunday.
            </ListItem>
            <ListItem>
              Prayers and meditation must begin from the moment the Sun rises
              with a fresh mind after a bath. Also, the recitation of the
              Mantras must be done facing in the East direction.
            </ListItem>
            <ListItem>
              You must make sure that the use of fresh flowers and incense will
              make the chanting and meditation better. Thus, you can incorporate
              it into your prayers and recitation.
            </ListItem>
            <ListItem>
              Keeping water pot and Kumkum shall also add a plus point when
              reciting the Surya mantras.
            </ListItem>
            <ListItem>
              Make sure your mind is free from negative and ill thoughts.
            </ListItem>
            <ListItem>
              Also, you must not keep any kind of jealousy or anger inside your
              mind or heart while chanting the Surya Mantra. This shall obstruct
              the positive energies and block the auspiciousness.
            </ListItem>
          </UnorderedList>
          <h3>Important Surya Mantras</h3>
          <h4>1. Surya Mantra</h4>
          <p>
            Surya mantra in Vedic astrology is the ultimate mantra to please
            Surya Deva. It helps people get rid of all kinds of diseases and
            gain mental and physical strength along with happiness and
            well-being. Chanting Surya Mantra daily shall also help the people
            attain prosperity and abundance. Not only does it develop a sense of
            assurance in the people, but also, helps overcome self-doubts and
            other mental distress.
          </p>
          <p>The Surya mantra is:</p>
          <p className="red">
            ।। नमः सूर्याय शान्ताय सर्वरोग निवारिणे <br />
            आयुररोग्य मैस्वैर्यं देहि देवः जगत्पते ।।
          </p>
          <p>
            <strong>Meaning-</strong> Surya Deva, ruler of the Universe, you are
            the remover of all diseases, the repository of peace. I bow to you,
            and please bless your devotees with long life, health, and wealth.
          </p>
          <p>
            <strong>Benefits of chanting the Surya mantra</strong>
          </p>
          <UnorderedList>
            <ListItem>
              If you chant the Surya mantra regularly, you shall surely seek the
              grace of Surya Deva (Sun God).
            </ListItem>
            <ListItem>
              You shall become better and strong in facing the hurdles and
              obstacles of life.
            </ListItem>
            <ListItem>
              Your endurance shall become better, and you will find it easy to
              move on the path of spirituality and betterment.
            </ListItem>
            <ListItem>
              With a positive mind, you would bask in the ocean of rich thoughts
              and feel gratitude for the life you have.
            </ListItem>
          </UnorderedList>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Best time to recite the Surya mantra</td>
                  <td>During the sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>3, 7, 9, 108, or 1008 times a day</td>
                </tr>
                <tr>
                  <td>Who can recite the Surya mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>East direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>2. Surya Namaskar Mantra</h4>
          <p>
            The Surya namaskar mantra appreciates the notion that an individual
            offers to the Sun. Generally used for meditation to calm the body
            down, it involves twelve asanas which signify the cycle of the Sun
            of approximately twelve and a quarter years. Natives who feel that
            their body is invigorated, chanting all the Surya Namaskar mantras
            will bring them harmony. Not only does this Surya Mantra make the
            natives physically fit but also allows them to search for their
            souls deeper and better.
          </p>
          <p>
            Each mantra of Surya namaskar involves a different posture or asana
            and charges the different parts of the body.
          </p>
          <p>
            <strong>The Surya namaskar mantras are:</strong>
          </p>
          <p className="red">ॐ मित्राय नमः।</p>
          <p>
            <strong>Meaning-</strong>We pray to the shining one and the radiant
            one.
          </p>
          <p className="red">ॐ रवये नमः।</p>
          <p>
            <strong>Meaning-</strong>We pray to the shining one and the radiant
            one.
          </p>
          <p className="red">ॐ सूर्याय नमः।</p>
          <p>
            <strong>Meaning-</strong>We pray who is the dispeller of darkness
            and responsible for bringing activity.
          </p>
          <p className="red">ॐ भानवे नमः।</p>
          <p>
            <strong>Meaning-</strong> We pray to the one, who illuminates the
            bright one.
          </p>
          <p className="red">ॐ खगाय नमः।</p>
          <p>
            <strong>Meaning-</strong>We pray to one who is all-pervading, one
            who moves through the sky.
          </p>
          <p className="red">ॐ पुषणे नमः।</p>
          <p>
            <strong>Meaning-</strong>We pray to the giver of nourishment and
            fulfilment.
          </p>
          <p className="red">ॐ हिरण्यगर्भाय नमः।</p>
          <p>
            <strong>Meaning-</strong>We pray for those who have golden colour
            brilliance.
          </p>
          <p className="red">ॐ मरीचये नमः।</p>
          <p>
            <strong>Meaning-</strong>We pray to the giver of light with an
            infinite number of rays.
          </p>
          <p className="red">ॐ आदित्याय नमः।</p>
          <p>
            <strong>Meaning-</strong> We pray to the son of Aditi, the cosmic
            divine Mother.
          </p>
          <p className="red">ॐ सवित्रे नमः।</p>
          <p>
            <strong>Meaning-</strong>We pray to the One who is responsible for
            life.
          </p>
          <p className="red">ॐ अर्काय नमः।</p>
          <p>
            <strong>Meaning-</strong>We pray who is worthy of praise and glory.
          </p>
          <p className="red">ॐ भास्कराय नमः।</p>
          <p>
            <strong>Meaning-</strong>We pray to the giver of wisdom and
            illumination.
          </p>
          <h4>Benefits of chanting the Surya mantra</h4>
          <UnorderedList>
            <ListItem>
              Known by the name Sun salutation mantra, it lets the natives have
              a clear alignment with themselves.
            </ListItem>
            <ListItem>
              It helps people pay gratitude to the energy provider of all.
            </ListItem>
            <ListItem>
              Practising and chanting this Surya mantra daily shall help
              individuals attain a spiritual level and inner peace that has no
              match.
            </ListItem>
            <ListItem>
              When you perform the Surya namaskar mantra, you shall feel a
              charged environment around you.
            </ListItem>
            <ListItem>
              The mantra will also help you relax and keep you away from
              tensions and stress.
            </ListItem>
            <ListItem>
              People also get control over their anger and attain a healthy mind
              and body.
            </ListItem>
          </UnorderedList>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Best time to recite the Surya Namaskar mantra</td>
                  <td>During the sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>12 mantras, 12 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Surya Namaskar mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Facing the Sun</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>3. Surya Beej Mantra</h4>
          <p>
            The Surya Beej mantra, as per Vedic astrology, connects an
            individual with higher and greater frequencies of Surya Deva. This
            mantra possesses the power to give you abundance, fame, and health.
            Also, it is believed that it improves eyesight and eliminates the
            shadow of all kinds of ailments and diseases related to the eyes.
            Moreover, chanting this Surya mantra shall help the natives get
            under the shelter of Lord Sun and unlock his divine grace.
          </p>
          <p>The Surya Beej Mantra is:</p>
          <p className="red">।। ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः ।।</p>
          <p>
            <strong>Meaning-</strong>I address the great Surya Deva for his
            divine grace.
          </p>
          <h4>Benefits of chanting the Surya Beej mantra</h4>
          <UnorderedList>
            <ListItem>
              The Surya Beej mantra helps the native attain ultimate balance in
              life.
            </ListItem>
            <ListItem>
              If you chant it daily, you shall effortlessly find a proper way to
              approach the path of spirituality.
            </ListItem>
            <ListItem>
              Moreover, this Surya mantra in Vedic astrology also provides the
              native with Surya deva blessings.
            </ListItem>
            <ListItem>
              This mantra moreover helps them heal through life’s adversities
              and mental confusion.
            </ListItem>
            <ListItem>
              Chanting the Beej mantra of Surya Deva also blesses the people
              with a harmonious life full of power and confidence.
            </ListItem>
          </UnorderedList>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Best time to recite the Surya Beej mantra</td>
                  <td>During the sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>7000 times in 40 days for best results</td>
                </tr>
                <tr>
                  <td>Who can recite the Surya Beej mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>In front of Surya Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Other powerful Surya Mantras</h3>
          <h4>1. Surya Gayatri Mantra</h4>
          <p>
            According to Vedic astrology, the Surya Gayatri mantra eliminates
            all the negative impacts of the planet Sun in the horoscope of an
            individual. Chanting the Surya Gayatri mantra shall also help you
            seek energy and good health. Moreover, this Surya mantra, when
            recited with full devotion and concentration, pleases Surya Deva,
            who is the provider of positivity and divineness. Along with this,
            it is believed that the best time to chant the Sun Gayatri mantra is
            during a solar eclipse.
          </p>
          <p>Surya Gayatri mantras are:</p>
          <p className="red">
            ।। ॐ भास्कराय विद्महे महादुत्याथिकराया धीमहि तनमो आदित्य प्रचोदयात
            ।।
          </p>
          <p>
            <strong>Meaning-</strong>Let me meditate on the Surya Deva, the
            maker of the day, give me higher intellect, And let the Lord Sun
            illuminate my mind.
          </p>
          <p className="red">
            ।। ॐ आदित्याय विद्महे मार्त्तण्डाय धीमहि तन्नः सूर्यः प्रचोदयात् ।।
          </p>
          <p>
            <strong>Meaning-</strong> I meditate on the Sun God, the one with
            thousands of rays. Let the Surya Deva illuminate my intellect.
          </p>
          <p className="red">
            ।। ॐ सप्त-तुरंगाय विद्महे सहस्र-किरणाय धीमहि तन्नो रविः प्रचोदयात्
            ।।
          </p>
          <p>
            <strong>Meaning-</strong>The one who rides a chariot driven by seven
            horses (the seven colours that form the spectrum) and who thousands
            of rays reach the earth, I bow to you.
          </p>
          <h4>Benefits of chanting the Surya Gayatri mantra</h4>
          <UnorderedList>
            <ListItem>
              When you recite the Surya Gayatri mantra, you can even restore
              eyesight and get rid of skin-related problems.
            </ListItem>
            <ListItem>
              During the solar eclipse time, it removes the negative energies of
              the natives.
            </ListItem>
            <ListItem>
              Chanting the Surya Gayatri mantra daily shall let the natives
              accumulate positivity and favourable times with perfect harmony in
              their lives.
            </ListItem>
            <ListItem>
              Purification of the mind from bad thoughts is also a benefit of
              this Surya mantra.
            </ListItem>
            <ListItem>
              Moreover, tilting towards the path of spirituality and calmness
              shall also be there if you chant this mantra daily.
            </ListItem>
          </UnorderedList>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Best time to recite the Surya Gayatri mantra</td>
                  <td>During the sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Surya Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>East direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>2. Aditya Hrudhayam Mantra</h4>
          <p>
            The word Hridaya signifies the one who is a nourisher and healer of
            all. Thus, chanting this Surya mantra helps people gain positivity
            in life right from the soul and heart of Aditya. It aids the natives
            to dwell better in life and shine in all fields in all ways and
            manners. The impact of this mantra is such that it helps the natives
            gain knowledge and makes them devote themselves to betterment. It
            also provides the chanters with power and charisma.
          </p>
          <p>The Aditya Hrudhayam Mantra is:</p>
          <p className="red">
            ।। आदित्यहृदयं पुण्यं सर्वशत्रुविनाशनम् <br /> जयावहं जपं
            नित्यमक्षयं परमं शिवम् ।।
          </p>
          <p>
            <strong>Meaning-</strong>This is the holy hymn Aditya Hrudayam which
            destroys all enemies and brings you victory and permanent happiness
            by chanting it always.
          </p>
          <h4>Benefits of chanting the Aditya Hrudhayam Mantra</h4>
          <UnorderedList>
            <ListItem>
              If you recite the Aditya Hrudhayam Mantra daily, you shall get rid
              of ego and anger.
            </ListItem>
            <ListItem>
              Along with it, people shall get rid of negativity, and greed.
            </ListItem>
            <ListItem>
              Your desire to achieve a cleansed mind will increase.
            </ListItem>
            <ListItem>
              Moreover, chanting this mantra daily would push you towards
              spirituality and a listener of great teachings.
            </ListItem>
            <ListItem>
              This mantra for planet Sun shall also make you fearless and
              confident, which in turn, will help you succeed in life.
            </ListItem>
          </UnorderedList>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Best time to recite the Aditya Hrudhayam Mantra</td>
                  <td>During the sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>6 times a day for 60 days daily</td>
                </tr>
                <tr>
                  <td>Who can recite the Aditya Hrudhayam Mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>East direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall benefits of chanting of Surya Mantras</h3>
          <p>
            Connecting with Lord Sun shall help the natives in many fields.
            Thus, chanting any Surya mantra in Vedic astrology shall help the
            people possess the blessings of Lord Sun. The other benefits of
            reciting the Surya mantra are as follows:
          </p>
          <UnorderedList>
            <ListItem>
              Chanting Surya energises the body and frees the mind from negative
              thoughts.
            </ListItem>
            <ListItem>
              It enhances the well-being of the person and praises the people’s
              mental and physical levels.
            </ListItem>
            <ListItem>
              Paying gratitude to Lord Sun, the native connects better with
              mankind, using the Sun mantra in astrology. Moreover, they also
              become selfless and live life with expectations.
            </ListItem>
            <ListItem>
              It helps cure diseases related to vision. In fact, it also
              improves the eyesight of people.
            </ListItem>
            <ListItem>
              Another benefit of chanting the Surya mantra is that it helps the
              people strengthen their focus. Lord Surya grants the people
              intelligence and wisdom and lets them enjoy success in their
              endeavours.
            </ListItem>
            <ListItem>
              With peace and calmness, it also relaxes the body and lets natives
              attract abundance and prosperity in life.
            </ListItem>
            <ListItem>
              People chanting the mantra for planet Surya become fearless in
              life and face the hurdles in life with confidence and patience.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Surya;

import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";
import image from "./../../../../../assests/Others/Mantras/Chandra_Mantra.webp";
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

const Chandra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Chandra Mantra" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Chandra Mantra</h1>
          <h2>Chandra Mantra: Meaning, benefits and ways to chant</h2>
          <p>
            Cancer is ruled by the Moon in Astrology. Chandra means "bright and
            dazzling" in Sanskrit. According to astrology, the moon has a
            significant influence on one's psychology, feelings, and attitudes.
            Our innermost individual desires, our basic behaviours and reflexes,
            and our subconscious are all represented by the Moon.
          </p>
          <p>
            The Moon is linked to motherhood and the feminine force overall. Our
            inner child and motherhood are both represented by the Moon. It's
            sensitive, empathetic, and thoughtful. The Moon represents our
            intuitive and immediate impulses. In addition, contrary to western
            astrology, which employs sun signs, we use the lunisolar cycle and
            go by the moon sign in Hindu Vedic astrology.
          </p>
          <p>
            Lord Chandra, often known as the Moon God, is a crucial planet in
            everyone's horoscope. The ruler of human minds is Chandra the moon
            or Soma, the planet's presiding god. The impact of the moon on a
            person's horoscope can produce a variety of favourable and
            unfavourable outcomes.
          </p>
          {/*Image*/}
          <div className="image-container">
            <img src={image} alt="" className="image" />
          </div>
          <h3>Chandra Mantra: How do they help?</h3>
          <p>
            The moon mantra is a powerful story that may help one connect with
            the moon. This mantra, when recited, can help you connect
            spiritually with Lord Chandra, the moon deity. There are several
            moon mantras that, when said frequently, can make one's life
            affluent and pleasant.
          </p>
          <p>
            Chanting the Chandra mantra can assist in reducing the miseries
            caused by the troubled position of the moon in a person's horoscope,
            as well as enhance the pleasant effects of the auspicious moon in
            their birth chart.
          </p>
          <h3>How to chant Chandra mantra</h3>
          <p>
            According to Hindu mythology, the best method to appease Lord
            Chandra and gain his blessings for a happy and wealthy life is to
            recite the Chandra mantra. If recited and practised correctly, the
            moon mantra brings auspicious events and prosperity to one’s life.
          </p>
          <UnorderedList>
            <ListItem>
              Early in the morning, take a bath and repeat the selected Chandra
              mantra in front of Lord Chandra's portrait. To get the most out of
              the mantra, learn what it means.
            </ListItem>
            <ListItem>
              Monday of a clear fortnight is the best day to repeat the Chandra
              mantra.
            </ListItem>
            <ListItem>
              Chanting Chandra mantra 18 malas or 18x108 times is the optimal
              counting for the greatest benefits.
            </ListItem>
            <ListItem>
              The good vibrations of Chandra’s mantra chanting serve to
              counteract the adverse effects of the moon's position.
            </ListItem>
            <ListItem>
              The deity of human minds is the Moon. Chanting the Chandra mantra
              might assist to clarify the mind's complexity and increase mental
              power.
            </ListItem>
            <ListItem>
              Lord Chandra can assist you to improve your appearance, intellect,
              vision, memory, and cognitive abilities. The recitation of these
              mantras sharpens these qualities.
            </ListItem>
            <ListItem>
              Chanting the Chandra mantra on a daily basis can assist you to
              increase the good aspects of the moon's astrology chart while
              reducing the bad aspects.
            </ListItem>
          </UnorderedList>
          <h3>Important Chandra Mantras</h3>
          <h3>1. Chandra Beej mantra</h3>
          <p>
            Beej mantras are a collection of short yet intense statements that
            aid in reducing the harmful impacts of planets in our life. They
            have a greater impact than Vedic mantras. Chanting the Moon Beej
            mantra cultivates a clean and heavenly relationship with the moon.
            When reciting the beej mantra, the devotee must concentrate solely
            on the mantra and Chandra Bhagwan. This Chandra mantra must be
            recited in a calm environment.
          </p>
          <p>The Chandra Beej mantras are:</p>
          <p className="red">|| ॐ सों सोमाय नम: ||</p>
          <p className="red">|| ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः ||</p>
          <p>
            <strong>Meaning-</strong>Born while churning the milk ocean.
          </p>
          <h4>Benefits of chanting the Chandra Beej mantra</h4>
          <UnorderedList>
            <ListItem>
              The foremost benefit of chanting the Chandra Beej Mantra is that
              it makes the natives feel betterment in their thinking process.
              Their thinking capacity becomes better, and feelings stay in
              control.
            </ListItem>
            <ListItem>
              You shall attain better intuition power, and your love for
              creativity will increase.
            </ListItem>
            <ListItem>
              Moreover, as a benefit of this Chandra mantra, you would possess a
              love for poetry, music, etc.
            </ListItem>
            <ListItem>
              When you recite this mantra, you may see influences on your
              emotions. You shall become more sensitive and understand
              sentiments well.
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
                  <td>Best time to recite the Chandra Beej mantra</td>
                  <td>Night of the Full Moon</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>18 X 108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Chandra Beej mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Northwest direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>2. Chandra Dhyan mantra</h3>
          <p>
            The Chandra Dhyan mantra gives details of Chandra Deva, including
            the complexion, nature, number of arms, weapons, postures, mudras,
            etc. People who chant the Chandra Dhyan mantra set themselves and
            intellect and calm their minds to focus better on connecting with
            the Chandra Deva and request him to provide them with peace of mind
            and show the path towards spirituality. Helping to attain focus in
            life, this Chandra mantra also helps with dedication regarding
            optimistic deeds in life and keeping away from a fickle mind.
          </p>
          <p>The Chandra Dhyan mantra is:</p>
          <p className="red">
            ।। श्वेतांबरः श्वेता विभूषणस्चा श्वेता धुयातिर दंडाधारो द्विबाहुहु
            चंद्रो मृत्युत्मा वरदः किरीती माई प्रसादम् विधातु देव:।।
          </p>
          <p>
            <strong>Meaning-</strong>Chandra Deva is of white complexion and
            wears white colour clothes and is adorned in white colour ornaments.
            Let Chandra Deva illuminate my intelligence and breathe more
            confidence into my heart.
          </p>
          <h4>Benefits of chanting the Chandra Dhyan mantra</h4>
          <UnorderedList>
            <ListItem>
              Chanting the Chandra Dhyan Mantra shall help the natives to have
              increased self-awareness.
            </ListItem>
            <ListItem>
              When you recite this Chandra mantra, you shall have a more
              positive outlook on life and deal with situations with
              understanding.
            </ListItem>
            <ListItem>
              Moreover, it would make you less tired and more energetic in the
              chores of life.
            </ListItem>
            <ListItem>
              With better control over breathing, you would also attain inner
              peace and command over sentiments.
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
                  <td>Best time to recite the Chandra Dhyan mantra</td>
                  <td>Monday of a bright fortnight</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>18 X 108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Chandra Dhyan mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Chandra Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>3. Chandra Gayatri mantra</h3>
          <p>
            To attain happiness and prosperity, people must chant the Chandra
            gayatri mantra. It is one of the strongest mantras to please Lord
            moon in Vedic astrology. As per Vedic astrology, the Chandra Gayatri
            mantra helps people possess a beautiful soul, mind, and body. When
            people chant this mantra, they get closer and connect better with
            Lord Moon. Also, they shall face the courage to face the hurdles of
            life. When the Chandra Gayatri mantra is recited, people seek the
            blessings of Lord Chandra in hard times and tough situations. One
            can begin chanting this from Monday with a negativity-free mind and
            full focus.
          </p>
          <p>The Chandra Gayatri mantra is:</p>
          <p className="red">
            || ॐ पद्मद्वाजय विधमहे हेमा रूपया धीमेहे तन्नो चंद्र प्रचोदयत ||
          </p>
          <p>
            <strong>Meaning-</strong>I kneel myself before Lord Moon, who wears
            a lotus flag. He gleams with a dazzling gold hue. May Chandra Deva
            enlighten my mind and illuminate my path.
          </p>
          <h4>Benefits of chanting the Chandra Gayatri mantra</h4>
          <UnorderedList>
            <ListItem>
              As a benefit of the Chandra Gayatri mantra, people shall fight the
              fears and issues of life bravely.
            </ListItem>
            <ListItem>
              They shall attain progress in all the works and attain peace
              within themselves.
            </ListItem>
            <ListItem>
              With the blessings of Chandra Deva, you shall have a peaceful
              mind, soul, and body.
            </ListItem>
            <ListItem>
              Connecting better with empathy, you would understand affection
              deeper and intensified.
            </ListItem>
            <ListItem>
              If you are going through mental issues, chanting this Chandra
              mantra will provide you with relief.
            </ListItem>
            <ListItem>
              Also, if you have any skin diseases, this mantra will be aiding in
              this, too.
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
                  <td>Best time to recite the Chandra Gayatri mantra</td>
                  <td>Monday of a bright fortnight</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>3, 7, 9, 108, or 1008 times a day</td>
                </tr>
                <tr>
                  <td>Who can recite the Chandra Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>East direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>4. Chandra Navagraha Shanti mantra</h3>
          <p>
            It symbolises devotional light. This mantra usually helps people to
            have a nurturing life and cool mind, away from problems and hurdles
            of life. Navagrah Chandra Shanti mantra basically provides a clear
            idea to the native in terms of morals and emotions. They become a
            preacher of self-confidence and motivation. Natives also experience
            emotions to their best and become a master of happiness and improved
            health. With the blessings of Chandra Deva people effortlessly
            eliminate ill diseases related to the intestine, stomach, etc.
            Moreover, emotional troubles wear off if someone chants the
            Navagraha Chandra Shanti mantra regularly.
          </p>
          <p>The Chandra Navagraha mantra is:</p>
          <p className="red">
            || दधिशंखतुषाराभं क्षीरोदार्णव सम्भवम नमामि शशिनं सोमं
            शम्भोर्मुकुटभूषणम् ||
          </p>
          <p>
            <strong>Meaning-</strong> I bow to the Moon God whose hue resembles
            the hue of Curds, a conch and the colour of show. I bow down to the
            one who sprang out from the milky ocean and the one who beautifies
            and adorns the crest of Shiva and who is of the form of nectar.
          </p>
          <h4>Benefits of chanting the Chandra Navagraha Shanti mantra</h4>
          <UnorderedList>
            <ListItem>
              Chandra Navagrah Shanti mantra helps wear off the malefic effects
              of planet Moon in the horoscope of the individual.
            </ListItem>
            <ListItem>
              Keeping the bad luck away, this Chandra mantra also attracts
              happiness and peace in the life of the people.
            </ListItem>
            <ListItem>
              You shall be away from diseases and ailments related to skin and
              intestine.
            </ListItem>
            <ListItem>
              Quality of life improvises and calms down the impacts of the ill
              Moon, drifting you towards positivity and optimism.
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
                  <td>Best time to recite Chandra Navagraha Shanti mantra</td>
                  <td>Night of the Full Moon</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>54 or 108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Chandra Navagraha Shanti mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Northwest direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Other powerful Chandra Mantras</h3>
          <h3>1. Chandra Namaskar Mantra</h3>
          <p>
            To attract the lunar energy in life, people perform the Chandra
            Namaskar mantra. As per Yogic Shastra, by performing this
            salutation, a person attains beauty, longevity, and youth. Natives
            get surrounded by energy, and they are full of blissfulness and
            positivity. Their mind becomes flexible to invite wellness and
            healthiness. Also, it makes the people open their creative side in a
            better and more active mode. Involving the 14 asanas, each one
            charges a part of the body and lets the people get into unity with
            the world. Moreover, it depicts the cycle of the Moon from waxing to
            waning.
          </p>
          <p>The Chandra Namaskar mantras are:</p>
          <p className="red">ॐ कामेश्वरयै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who fulfils desires
          </p>
          <p className="red">ॐ भागमलिन्यै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who wears the garland of
            prosperity
          </p>
          <p className="red">ॐ नित्यक्लिन्नयै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who is ever
            compassionate
          </p>
          <p className="red">ॐ भेरुणदयै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who is ferocious
          </p>
          <p className="red">ॐ वाहनिवासिनयै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who resides in fire
          </p>
          <p className="red">ॐ वज्रेश्वरयै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who possesses vajra, the
            thunderbolt.
          </p>
          <p className="red">ॐ दुतै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one whose messenger is
            Shiva.
          </p>
          <p className="red">ॐ त्वरितायै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who is swift.
          </p>
          <p className="red">ॐ कुलसुमदरयै नम:।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who is virtuous,
            respectable and charming.
          </p>
          <p className="red">ॐ नित्यै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who is eternal.
          </p>
          <p className="red">ॐ नीलापटकिनयै नम:।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who is adorned with a
            blue flag.
          </p>
          <p className="red">ॐ विजयायै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who is ever victorious.
          </p>
          <p className="red">ॐ सर्वमंगलयै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who is the source of all
            good fortunes.
          </p>
          <p className="red">ॐ ज्वालामलिन्यै नमः।</p>
          <p>
            <strong>Meaning-</strong>Salutations to one who is fenced with
            instant flames.
          </p>
          <h4>Benefits of chanting the Chandra Namaskar mantra</h4>
          <UnorderedList>
            <ListItem>
              As a benefit of this Chandra mantra, people shall become wonderful
              in their life. They shall have a responsible mind and possess
              mental strength.
            </ListItem>
            <ListItem>
              They have a flexible lifestyle and become prone to adaptability.
            </ListItem>
            <ListItem>
              Their performance in work improvises, and they nurture themselves
              with good energy in themselves.
            </ListItem>
            <ListItem>
              You will also get rid of any skin-related diseases and have inner
              beauty, and possess self-awareness.
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
                  <td>Best time to recite Chandra Namaskar mantra</td>
                  <td>During evening</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>4-5 times at once</td>
                </tr>
                <tr>
                  <td>Who can recite the Chandra Namaskar mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Northwest direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>2. Chandra Dosha Nivaran Mantraa</h3>
          <p>
            Chandra Dosha occurs when the planet Moon comes utterly close to the
            ruling constellation during birth time. Moreover, when the Moon is
            ill or weak in the Chandra Mahadasha people face numerous hurdles
            and troubles. When people face problems like these, it illustrates
            the effects of the Chandra Dosha in the Kundli. Moreover, problems
            regarding wealth, health, and emotions could be there, which make
            the people go through sufferings in their personal life. For the
            same, there is the Chandra Dosha Nivaran mantra.
          </p>
          <p>The Chandra Dosha Nivaran mantra is:</p>
          <p className="red">
            ।। दधि शंख तुषारबम क्षीरोदर्णव संभवम् <br /> नमामि शशिनं सोमं शम्भोर
            मुकुटभूषणम् ।।
          </p>
          <p>
            <strong>Meaning-</strong>The glorious Chandra Deva originated from
            the churning of the ocean of milk by the gods and demons who wanted
            the nectar of immortality. This cool planet sits on the head of Lord
            Shiva. Chandra Deva is in the colour of the snow, curds and the
            conch.
          </p>
          <h4>Benefits of chanting the Chandra Dosha Nivaran mantra</h4>
          <UnorderedList>
            <ListItem>
              If someone possesses a Chandra Dosha in their horoscope, chanting
              this mantra regularly shall wear off the hurdles and other
              troubles from the life of the natives.
            </ListItem>
            <ListItem>
              Also, if you have a weak Moon or the planet is under the influence
              of any malefic planet, chanting this Chandra mantra as a remedy
              will help wear off the ill impacts.
            </ListItem>
            <ListItem>
              Moreover, the Chandra Dosha mantra also helps make the Moon strong
              and calm down the anger and aggression of the person.
            </ListItem>
            <ListItem>
              It shall also help you attain inner peace and evaluate your life
              better and more intensely.
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
                  <td>Best time to recite Chandra Dosha Nivaran mantra</td>
                  <td>Monday of a bright fortnight</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>18 X 108 times.</td>
                </tr>
                <tr>
                  <td>Who can recite the Chandra Dosha Nivaran mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Northwest direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>3. Chandra mantra for Ganesh Chathurthi</h3>
          <p>
            On Ganesh Chathurthi, chant this mantra to see the moon. Seeing the
            moon on Ganesh Chathurthi is not recommended and is strictly
            prohibited. On this day, looking at the moon might make one's life
            unlucky and unpredictable. During Ganesha's birthday celebrations on
            Chathurthi, Chandra (the moon deity) poked fun at Ganesha's fat
            stomach and elephant appearance, according to legend. Parvati and
            Ganesha were enraged by this remark.
          </p>
          <p>
            Ganesha cursed Chandra, saying that he would always be in the dark.
            Ganesha partially erased his curse after Chandra repented and the
            other gods prayed for mercy after a while. It is said that anyone
            who views the moon on Chathurthi would be condemned and suffer from
            Mithya dosha. If one has seen the moon on Chathurthi, one can recite
            the Chandra Darshan mantra if one is put up with the Mithya Dosha.
          </p>
          <p>Chandra mantra for Ganesh Chaturthi is:</p>{" "}
          <p className="red">
            ।। सिंहः प्रसेनमवधीत् सिंहो जाम्बवता हतः <br /> सुकुमारक मा रोदीस्तव
            ह्येष स्यमन्तकः ।।
          </p>
          <p>
            <strong>Meaning-</strong>Lion killed Prasen (brother of Satrajit and
            uncle in law of Lord Krishna- Satyabhama’s uncle) and Jaambvaan
            killed Lion. Now you do not cry, you have the right to this
            syamantak mani.
          </p>
          <h4>Benefits of chanting the Chandra mantra for Ganesh Chaturthi</h4>
          <UnorderedList>
            <ListItem>
              If you chant the Chandra mantra on Ganesh Chaturthi, you shall get
              rid of the ill impacts that the Moon possesses.
            </ListItem>
            <ListItem>
              Moreover, it could save you from troubles and issues that a
              malefic Moon shall have. You would be away from diseases, have
              control over your anger, feel energetic and confident, and have
              empathic behaviour towards others.
            </ListItem>
            <ListItem>
              Another benefit of chanting this Chandra mantra is that your Moon
              will become strong, and any negative impact of the Mithya Dosha
              would be away.
            </ListItem>
            <ListItem>
              Mental troubles like illusions, stress, etc., would be away too.
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
                  <td>
                    Best time to recite Chandra mantra for Ganesh Chaturthi
                  </td>
                  <td>On Ganesh Chaturthi</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times.</td>
                </tr>
                <tr>
                  <td>Who can recite Chandra mantra for Ganesh Chaturthi ?</td>
                  <td> People who see Moon</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Northwest direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall benefits of chanting Chandra mantra</h3>
          <p>
            There are a number of benefits of Chandra mantra, as per Vedic
            astrology. Here’s how Chandra mantra could be helpful to the
            reciters.
          </p>
          <UnorderedList>
            <ListItem>
              Chanting this moon mantra helps to eliminate anxious thoughts,
              eliminate current and impending problems, and distribute positive
              energy by promoting mental calm.
            </ListItem>
            <ListItem>
              It helps in prosperity, as well as strong mental, emotional, and
              physical health.
            </ListItem>
            <ListItem>
              It helps a person to have a healthy and tranquil mind.
            </ListItem>
            <ListItem>
              Most importantly, it helps in maintaining solid relationships with
              friends and colleagues.
            </ListItem>
            <ListItem>
              It helps in increasing the self-assurance and confidence in a
              person.
            </ListItem>
            <ListItem>
              Chandra Mantra may certainly assist you in awakening your
              intuitive powers. It assists you in moving forward on your
              spiritual path.
            </ListItem>
            <ListItem>
              If you're a moody person, Chandra Mantra might help you stay
              optimistic by balancing your emotions.
            </ListItem>
            <ListItem>
              It offers you the power to deal with situations in which you are
              extremely sensitive.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Chandra;

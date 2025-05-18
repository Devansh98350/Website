import React, { useEffect } from "react";
import styled from "styled-components";
import Breadcrumbs from "../../../../Breadcrumb";
import Layout from "../../../../Layout/Layout";

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
const Vastu1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vastu Mantra">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Vastu Mantra</h1>
          <h2>Vastu Mantra: To Remove Vastu Dosha</h2>
          <p>
            Vastu dosh is one of the most dreaded doshas as it can hamper both
            your personal and professional life at once. In astrology, Vastu
            Dosh is all about deficiency present in a house, office or any other
            premises dear to the native. Wrong Vastu, that is placement or
            location of things or overall structure in the wrong direction,
            leads to Vastu dosh. Vastu Dosh attracts negative energies and
            destruction for the native, thus disturbing his or her life. Hence,
            it is advised that one must always try to make his or her house
            Vastu compatible by consulting an astrologer.
          </p>
          <p>
            Vastu incompatibility is a modern problem with contemporary
            residential projects not considering the complete picture of Vastu
            Shastra when building any kind of property, be it residential or
            commercial. However, such errors in construction and non-compliance
            with the rules of Vastu affect the natives using the building the
            most. Vastu Dosh brings along errors and omissions in the direction
            and flow of energy of the Panch Mahabhoot viz earth, water, fire,
            air and space. When these elements get misplaced in the life of the
            native, they tend to affect his life negatively.
          </p>
          <h2>Side Effects of Bad Vastu or Vastu Dosh</h2>
          <UnorderedList>
            <ListItem>
              In Vastu, the North direction rules over the finances of the
              native. This direction is the deciding factor of how well you will
              earn or have monetarily in life. Any kind of Vastu defect in the
              north direction, hence, should be eradicated to have a successful
              life.
            </ListItem>
            <ListItem>
              As per Vastu shastra, the East direction is associated with
              recognition and your love life. Hence if there is any kind of
              strain in any of these two aspects of your life, then it is
              necessary that you pay attention to the Vastu of the east
              direction of the house.
            </ListItem>
            <ListItem>
              As per astrologers, Vastu defects in the West direction of the
              house bring problems like chest disease and poverty. Also, if you
              are noticing problems such as delay in marriage or the youngest
              daughter of the house is facing any problem in life, then in such
              cases, the west direction of the house must be rectified
              astrologically.
            </ListItem>
            <ListItem>
              Legal issues, eye-related problems and problems such as loss of
              work come to people who have defects in the Vastu of the South
              direction of their home or office.
            </ListItem>
            <ListItem>
              In Vastu, the northeast direction is the most important as it is
              associated with the fortune and luck of the native. Vastu defects
              in the northeast direction bring misfortune such as accidents,
              surgeries, legal discords and a general sense of disappointment.
            </ListItem>
            <ListItem>
              If the northwest direction of the house isn’t Vastu-compatible,
              then it can lead to heart disease and mental problems for the
              native. Hence, the main entrance, underground water tank, temple
              or kitchen must never be created in the northeast direction as per
              Vastu.
            </ListItem>
            <ListItem>
              The Southeast direction is associated with the peace of mind of
              the native. Any kind of Vastu dosh in the southeast direction is
              harmful to one’s mental health.
            </ListItem>
            <ListItem>
              The southwest direction controls the personal relationships of the
              residents of any house. Any negative energy emitting from the
              southwest direction could lead to loss of money and domestic
              problems.
            </ListItem>
          </UnorderedList>
          <p>
            If you have a personal house built on your own land, then practising
            remedies for Vastu dosh in home is simple. All you need to do is
            make some changes after taking the advice of the Vastu experts.
            However, then there are situations when making changes to the home
            Vastu isn’t a choice at hand. For example, the people living in
            apartments mostly don’t have an option to make infrastructural
            changes to the apartment even if it's Vastu incompatible. In such a
            situation, Vastu mantras can come in handy.
          </p>
          <p>
            Vastu Dosh can be removed by regular Jaap of the Vastu mantra. Vastu
            mantra helps to get rid of these negative energies and invite
            auspiciousness in the premises. Vastu mantra is one of the best ways
            to remove Vastu dosh from a house if you can’t afford to make
            Vastu-related changes or are just too lazy to make some.
          </p>
          <h2>Vastu Mantras to Remove Vastu Dosh</h2>
          <p>
            The deity of Vastu mantra is Vastu Purush, who also goes by the name
            Kaal Purush. Vastu Purush refers to the soul or energy of a place.
            Vastu Purush lies head down in the earth in an inverted position. In
            the same position, his feet point in the Southwest direction; head
            is in the Northeast; left and right hands are positioned in the
            Southeast and Northwest directions, respectively.
          </p>
          <p>
            As per astrology, the stomach of Vastu Purush is the abode of
            Brahman, who is known as the Creator of the Universe. When in the
            best state, Vastu Purush blesses the natives with abundance of
            wealth, health and peace of mind. Reciting the Vastu Mantra
            dedicated to Vastu Purush creates an atmosphere of calm and
            happiness in the premises of the native. Mere recitation of the
            Vastu Mantra affirms positive energies that sync with the energy of
            nature.
          </p>
          <p>
            Having said that, let’s look at some of the most auspicious Vastu
            Mantras in English and how they can help you.
          </p>
          <h2>Vastu Purusha Mantra</h2>
          <p>
            Most of the time, we unintentionally end up doing things at home or
            at any other place we reside or spend time in that may lead to Vastu
            dosh. In fact, there is always something in our vicinity that might
            be causing or bringing Vastu dosh for us as we can’t perfect
            everything that goes around us. In such a situation, reciting the
            Vastu Purusha Mantra comes in handy.
          </p>
          <p>
            <strong>Here is the Vastu Purusha Mantra:</strong>
          </p>
          <p className="red">|| नमस्ते वास्तु पुरुषाय भूशय्या भिरत प्रभो |</p>
          <p>|| Namaste Vaastu Purushaay Bhooshayyaa Bhirat Prabho |</p>
          <p className="red">मद्गृहं धन धान्यादि समृद्धं कुरु सर्वदा ||</p>
          <p>Madgriham Dhan Dhaanyaadi Samriddham Kuru Sarvada ||</p>
          <h4>Benefits of reciting Vastu Purusha Mantra:</h4>
          <UnorderedList>
            <ListItem>
              Recitation of the Vastu Purusha mantra brings peace and harmony to
              the life and home of the native.
            </ListItem>
            <ListItem>
              If there is any kind of Vastu dosh that is affecting you without
              your awareness, then chanting this Vastu Purusha mantra helps in
              resolving it.
            </ListItem>
            <ListItem>
              Chanting the Vastu Purusha mantra in the office space aids
              creativity.
            </ListItem>
            <ListItem>
              The best part about the mantra is that no muhurta is required to
              chant this Vastu mantra. One can recite the same anywhere,
              anytime.
            </ListItem>
          </UnorderedList>
          <h2>Vastu Dosh Nivaran Mantras</h2>
          <p>
            There is not just one but numerous Vastu Dosh Nirvana mantras in
            Vastu Shastra that a native can chant to get rid of Vastu dosh.
            While the Vastu Purusha Mantra works the best to eradicate the dosh
            caused by unintentional means, Vastu Dosh Nivaran mantras, on the
            other hand, are recited by ones aware of the condition of Vastu dosh
            in their vicinity. Most of the time, the Vastu Dosh Nivaran mantra
            is followed by a Hawan.
          </p>
          <p>
            These Vastu mantras are especially helpful for natives whose
            children are facing problems due to Vastu dosh. Also, health issues
            brought in by the wrong Vastu can also be rectified by chanting
            these mantras on a regular basis.
          </p>
          <h3>Here are all the Vastu Dosh Nivaran Mantras:</h3>
          <p>
            <strong>Vastu Dosha Nivaran Mantra - 1</strong>
          </p>
          <p className="red">
            || ॐ वास्तोष्पते प्रति जानीद्यस्मान स्वावेशो अनमी वो भवान
          </p>
          <p className="red">
            यत्वे महे प्रतितन्नो जुषस्व शन्नो भव द्विपदे शं चतुष्प्दे स्वाहा ||
          </p>
          <p>
            || Om Vaastoshpate Prati Jaanidyasmaan Swaawesho Anamee Vo Bhavaan
            Yatve Mahe Pratitanno Jushasva Sahnno Bhav Dvipade Sham Chatushpade
            Swaahaa ||
          </p>

          <p>
            <strong>Vastu Dosha Nivaran Mantra - 2</strong>
          </p>
          <p className="red">
            || ॐ वास्तोष्पते प्रतरणो न एधि गयस्फानो गोभि रश्वे भिरिदो
          </p>
          <p className="red">
            अजरासस्ते सख्ये स्याम पितेव पुत्रान्प्रतिन्नो जुषस्य शन्नो भव
          </p>
          <p className="red">द्विपदे शं चतुष्प्दे स्वाहा ||</p>
          <p>
            || Om Vaastoshpate Pratarano Na Edhi Gayasphaano Gobhi Rashve
            Bhirido Ajaraasaste Sakhye Syaam Pitev Putraanpratinno Jushashya
            Shanno Bhav Dvipade Sham Chatushpade Swaahaa ||
          </p>

          <p>
            <strong>Vastu Dosha Nivaran Mantra - 3</strong>
          </p>
          <p className="red">
            || ॐ वास्तोष्पते प्रति जानीद्यस्मान स्वावेशो अनमी वो भवान
          </p>
          <p className="red">
            यत्वे महे प्रतितन्नो जुषस्व शन्नो भव द्विपदे शं चतुष्प्दे स्वाहा ||
          </p>
          <p>
            || Om Vaastoshpate Shagmayaa Sa Gvag Sadaate Saksheem Hiranyayaa
            Gaatu Mandhaa |
          </p>
          <p>
            Chahikshem Utayoge Varanno Yooyam Paatasvastibhiha Sadaanah Swaahaa
            ||
          </p>

          <p>
            <strong>Vastu Dosha Nivaran Mantra - 4</strong>
          </p>
          <p className="red">
            || ॐ वास्तोष्पते ध्रुवास्थूणां सनं सौभ्या नां द्रप्सो भेत्ता पुरां
            शाश्वती ना मिन्क्षे मुनीनां सखा स्वाहा ||
          </p>
          <p>
            || Om Vaastoshpate Dhruvaasthoonaam Sanam Saubhyaa Naam Drapso
            Bhettaa Puraam Shashvatee Naa Minkshe Muninaam Sakhaa Swaahaa ||
          </p>
          <h4>Benefits of chanting Vastu Dosh Nivaran mantras:</h4>
          <UnorderedList>
            <ListItem>
              Recitation of this Vastu Dosh Nivaran mantra helps in eradicating
              Vastu dosh from the house.
            </ListItem>
            <ListItem>
              This Vastu dosh mantra in English is especially useful for any
              Vastu dosh coming from the kitchen of the native.
            </ListItem>
            <ListItem>
              The mantra helps in rectifying relationship problems such as
              incompatibility, boredom in the relationship and more.
            </ListItem>
            <ListItem>
              The recitation of the mantra helps achieve clarity of mind and
              fight depression.
            </ListItem>
            <ListItem>
              These mantras must be recited by students preparing for any kind
              of exam, as they help in concentrating.
            </ListItem>
            <ListItem>
              The mantra rectifies Vastu dosh related to the children's room.
            </ListItem>
            <ListItem>
              The Vastu Dosh Nivaran mantras help the natives to get rid of
              malefic energies and gain positive ones.
            </ListItem>
            <ListItem>
              Chanting these mantras help in rectifying the harmful effects of
              malefic planets in the child's horoscope.
            </ListItem>
          </UnorderedList>
          <h3>Vastu Mantra for each direction</h3>
          <p>
            In Vastu Shastra, each and every direction is governed by a planet
            or God. All of these directions have their own significance. For
            example, the North direction in Vastu governs the finances of the
            native. Hence, it is recommended by Vastu experts to always make the
            locker room in the North direction of the house.
          </p>
          <p>
            Also, the north direction is governed by Lord Kuber. Kuber Ji is the
            cashier to Goddess Mahalakshmi. If the North direction of the house
            is not Vastu compatible, it will never help you get the blessing of
            Lord Kuber or monetary benefits. Hence to keep the positive energy
            coming from all directions of the home and to please the Lord
            associated with each direction, mantras for directions come in
            handy.
          </p>
          <p>
            There are 8 directions associated with Vastu Shastra, a deity ruling
            each of them, respectively.
          </p>
          <h4>1. Vastu Mantra for North Direction - Kuber Gayatri Mantra</h4>
          <p>
            Lord Kuber is the cashier to Goddess Mahalakshmi. As per
            astrologers, worshipping Lord Kuber or chanting the Kuber Mantra in
            the north direction helps the native acquire wealth. In Vastu, the
            North direction is associated with the finances of the native and
            hence chanting the Kuber Mantra - while facing the north - can bring
            monetary gains.
          </p>
          <p>
            <strong>
              Vastu Mantra for the north direction of the house is:
            </strong>
          </p>
          <p className="red">
            || ॐ यक्षराजय विद्महे वैश्रवणाय धीमहि । तन्नो कुबेर: प्रचोदयात: ||
          </p>
          <p>
            || Om Yaksharaajaya Vidmahay, Vaishravanaya Dhimahi, Tanno Kubera
            Prachodayat ||
          </p>

          <p>
            <strong>Meaning-</strong>We meditate on Kuber, the king of the
            Yakshas, and son of Vishravana. May that god of wealth inspire and
            illumine us.
          </p>
          <h4>Benefits of chanting the Kuber Gayatri mantra</h4>
          <UnorderedList>
            <ListItem>
              As the north direction is associated with finance, and so is Lord
              Kuber, hence, chanting the Kuber Gayatri mantra can strengthen the
              Vastu of the north direction of the house and thus your finances.
            </ListItem>
            <ListItem>
              Chanting this mantra facing the north helps in getting promotions
              or getting a job faster.
            </ListItem>
            <ListItem>
              The chanting of the mantra helps in making the north direction
              lucky and increases fortune.
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
                  <td>Best time to chant Kuber Gayatri mantra</td>
                  <td>Sandhya kala and Fridays</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>9, 11, 33, 66, 108 or 1008 times</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>2. Vastu Mantra for South Direction - Yama Gayatri Mantra</h4>
          <p>
            Lord Yama is the ruler of death and the South direction, as per
            Vaastu Shastra. The death-God can strengthen or weaken the aspects
            related to the south direction. In Vastu Shastra, the south
            direction of the home is associated with legal issues, loss of work
            and diseases. Hence keeping the Yama Lord pleased or Vastu of the
            South in check can stop the arrival of such problems into your life.
            In doing so, the Yama Gayatri Mantra can help.
          </p>
          <p>
            <strong>
              Vastu mantra for the south direction of the house is:
            </strong>
          </p>
          <p className="red">
            || ॐ सूर्यपुत्राय विद्महे महाकालाय धीमहि। तन्नो यम: प्रचोदयात् ||
          </p>
          <p>
            || Om Surya puthraya Vidhmahe Maha Kalaya Dheemahe Thanno Yama
            Prachodayath ||
          </p>
          <p>
            <strong>Meaning-</strong>Om, Let me meditate on the son of Sun God,
            Oh, great Lord of time, give me higher intellect, And let God of
            death illuminate my mind.
          </p>
          <h4>Benefits of chanting Yama Gayatri mantra</h4>
          <UnorderedList>
            <ListItem>
              Chanting the Yama Gayatri Mantra keeps health problems at bay.
            </ListItem>
            <ListItem>
              The mantra is usually chanted at the death bed as it is believed
              to help the native make a smooth transition into the after-world
            </ListItem>
            <ListItem>
              Constant chanting of this Gayatri Mantra in the South direction
              can relieve the negativity that the south direction is usually
              associated with.
            </ListItem>
            <ListItem>
              Chanting the Yama mantra helps the native safeguard himself from
              enemies.
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
                  <td>Best time to chant Yama Gayatri mantra</td>
                  <td>Yama kanda periods</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>11, 108, or 1008 times</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>3. Vastu Mantra for East Direction - Surya Gayatri Mantra</h4>
          <p>
            The East direction of the home is ruled by the Sun as per Vastu.
            Also, the east direction is associated with recognition and the love
            life of the native. Hence, if facing issues in any of these aspects
            in life, rectifying the flaws emerging from the east direction and
            pleasing the Sun Lord can help. Surya Gayatri mantra for east
            direction can help in doing so.
          </p>
          <p>
            <strong>
              Vastu mantra for the east direction of the house is:
            </strong>
          </p>
          <p className="red">
            || ॐ भास्कराय विद्महे महादुत्याथिकराया धीमहि तनमो आदित्य प्रचोदयात
            ||
          </p>
          <p>
            || Om Bhaskaray Vidmahe Mahadutyathikaraya Dheemahi Tanah Surya
            Prachodayat ||
          </p>

          <p>
            <strong>Meaning-</strong>Let me meditate on the Surya Deva, the
            maker of the day, give me higher intellect, And let the Lord Sun
            illuminate my mind.
          </p>
          <h4>Benefits of Surya Gayatri mantra:</h4>
          <UnorderedList>
            <ListItem>
              Chanting the Surya Gayatri mantra makes the person bold and
              courageous.
            </ListItem>
            <ListItem>
              Recitation of the Surya Gayatri mantra in the East direction of
              the home helps aid one's eyesight and safeguard the native from
              eye-related diseases.
            </ListItem>
            <ListItem>
              The Surya Gayatri mantra cures any negative effects caused by an
              unlucky eastern direction.
            </ListItem>
            <ListItem>
              If facing issues in love life or delay in marriage, chant this
              mantra regularly for the best benefits.
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
                  <td>Best time to chant Surya Gayatri mantra</td>
                  <td>Surya thisai or surya bukthi</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>9, 11, 108, or 1008 times</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>4. Vastu Mantra for West Direction - Varuna Gayatri Mantra</h4>
          <p>
            Lord Varuna is the God of rain and the ruler of the west direction.
            The lord, if in denial of you, can bring marriage delays and even
            health-related problems. Hence, to please Lord Varuna, it is crucial
            to pitch a Vastu compatible west direction of the house and if there
            is none, then chanting the Varuna Gayatri Mantra in the west
            direction of the house can help.
          </p>
          <p>
            <strong>
              Vastu mantra for the west direction of the house is:
            </strong>
          </p>
          <p className="red">
            || ॐ जल बिम्बाय विद्महे नील पुरुषाय धीमहि तन्नो वरुण: प्रचोदयात् ||
          </p>
          <p>
            || Aum Jalbimbaye Vidmahe Nila Purushaye Dhimahi Tanno Varunah
            Prachodayat ||
          </p>
          <p>
            <strong>Meaning - </strong>Om, Let us meditate on the reflection of
            water. O person of ocean blue, give me higher intellect. And let the
            God of water illuminate my mind.
          </p>
          <h4>Benefits of Varuna Gayatri mantra:</h4>
          <UnorderedList>
            <ListItem>
              Vastu mantra for the west direction of the house helps in
              alleviating water shortage and helps to overcome any water-related
              problem.
            </ListItem>
            <ListItem>
              If there is a delay in the marriage of a girl in the house,
              strengthening the Vastu of the west direction by chanting the Lord
              Varuna mantra becomes crucial.
            </ListItem>
            <ListItem>
              Chanting of this Varuna Gayatri Mantra for the west also
              propitiates the western part of the property.
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
                  <td>Best time to chant Varuna Gayatri mantra</td>
                  <td>Sandhya kala</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>9, 11, 108, or 1008 times</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>
            5. Vastu Mantra for Northeast Direction - Ishanya Gayatri Mantra
          </h4>
          <p>
            The northeast direction of the home or office is associated with
            fortune and luck. Hence, the positiveness of this direction can
            really uplift you in life, both personally and professionally. In
            helping you do so, the Ishanya Gayatri Mantra can come in handy.
            Ishanya is the word associated with the third eye of Lord Shiva.
          </p>
          <p>
            <strong>
              Vastu mantra for the northeast direction of the house is:
            </strong>
          </p>
          <p className="red">
            || ॐ महादेवाय विद्महे रुद्रमूर्तये धीमहि तन्नः शिवः प्रचोदयात् ||
          </p>
          <p>
            || Aum Thath-purushaya Vidmahe, Shiva-roopaaya Dhimahee, Thanno
            Rudra Prachodayath ||
          </p>
          <p>
            <strong>Meaning - </strong>Aum. Let us invoke the three realms of
            earth, wind and fire. Aum. Let us invoke the superlative male and
            omniscient lord. Let us meditate and focus upon the supreme lord.
            Let us ask Shiva to provide us inspiration and guidance in our
            spiritual journeys.
          </p>
          <h4>Benefits of chanting Ishanya Gayatri mantra:</h4>
          <UnorderedList>
            <ListItem>
              Chanting the Ishanya Gayatri mantra in the northeastern part of
              the home makes the property lucky.
            </ListItem>
            <ListItem>
              If doing any good or important work, make sure you do it in this
              direction.
            </ListItem>
            <ListItem>
              As per astrologers, it is recommended to chant the Ishanya Gayatri
              mantra before beginning any new task.
            </ListItem>
            <ListItem>
              In the professional space, if taking on any new project, begin it
              with chanting the Ishanya Gayatri mantra in the northeast
              direction.
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
                  <td>Best time to chant Ishanya Gayatri mantra</td>
                  <td>Pradosha thithi, Shivarathri thithi, and Sunday</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>9, 11, 108, or 1008 times</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>6. Vastu Mantra for Northwest Direction - Vayu Gayatri Mantra</h4>
          <p>
            The Vaayu Gayatri Mantra is a mantra for peace and harmony and is
            usually recited to prevent natural disasters. This mantra is
            dedicated to the element of Vaayu or wind. Alongside increasing the
            positiveness of the northwest direction (which is related to mental
            and heart health) of the house, the Vayu mantra also saves the
            native from any kind of mishaps during road journeys.
          </p>
          <p>
            <strong>
              Vastu mantra for the northwest direction of the house is:
            </strong>
          </p>
          <p className="red">
            || ॐ पवनपुरुषाय विद्महे सहस्त्रमूर्तये च धीमहि तन्नो वायु: प्रचोदयात
            ||
          </p>
          <p>
            || Aum Pavanapurushaay Vidmahe Sahasra Murthaye Cha Dheemahe Thanno
            Vaayu Prachodayat ||
          </p>
          <p>
            <strong>Meaning - </strong>O Divine Energy of Wind, bless me with
            higher intellect and illuminate my mind
          </p>
          <h4>Benefits of chanting Vayu Gayatri Mantra:</h4>
          <UnorderedList>
            <ListItem>
              Chanting the Vayu mantra in the northeastern direction of the home
              can uplift positiveness in the house.
            </ListItem>
            <ListItem>
              Chanting this mantra also brings health benefits.
            </ListItem>
            <ListItem>
              The mantra helps bring our inner Vaayu element to a state of
              balance. As a result, it helps us gain the resilience to overcome
              chronic respiratory problems.
            </ListItem>
            <ListItem>
              It helps us achieve clarity of mind and pushes us to pursue our
              goals.
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
                  <td>Best time to chant Vaayu Gayatri mantra</td>
                  <td>During sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>9, 11, 108, or 1008 times</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>7. Vastu Mantra for Southeast Direction - Agni Gayatri Mantra</h4>
          <p>
            The southeast direction is owned by Shukra, who is also the lord of
            fire. The Agni Gayatri mantra is associated with the southeast
            direction of the. As per Vastu, the southeast direction brings peace
            of mind to the native. The positiveness of this direction helps in
            uplifting all the aspects of your life, right from relationship to
            your work-creativity. Chanting the Agni Gayatri Mantra in the
            southeast direction helps the native overcome financial losses too.
          </p>
          <p>
            <strong>
              Vastu mantra for the southeast direction of the house is:
            </strong>
          </p>
          <p className="red">|| ऊँ महाज्वालाय विद्महे अग्नि मध्याय धीमहि |</p>
          <p className="red">तन्नो: अग्नि प्रचोदयात ||</p>
          <p>|| Om Mahajwalay Vidmahe Agni Madhyay Dhimahi |</p>
          <p>Tanno Agnih Prachodayat ||</p>
          <p>
            <strong>Meaning - </strong> Om, Let me meditate on the great flame,
            Oh, God of fire, grant me with higher intellect, Oh, let the radiant
            God of Fire illuminate my mind.
          </p>
          <h4>Benefits of chanting Agni Gayatri mantra:</h4>
          <UnorderedList>
            <ListItem>
              Chanting the Agni Gayatri mantra helps the native improve his or
              her domestic life.
            </ListItem>
            <ListItem>
              The Vastu mantra for the southeast direction of the house is
              crucial for a bright future.
            </ListItem>
            <ListItem>
              Chanting the Agni Gayatri Mantra in the southeast direction helps
              in faster repayment of debt.
            </ListItem>
            <ListItem>
              Chanting this mantra also aids your romantic life. Couples argue
              less and are able to share a lot of happy moments together.
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
                  <td>Best time to chant Agni Gayatri mantra</td>
                  <td>During sunrise and sunset</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>11, 108 or 1008 times108 times daily</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>8. Vastu Mantra for Southwest Direction - Agni Gayatri Mantra</h4>
          <p>
            The southwest direction is governed by the demon Nairuthi. This is
            one of the strongest directions as per Vastu, giving strong life,
            health and wealth to the native. The southwest direction controls
            the personal relationships of the residents in the house. The
            positiveness of the direction is crucial for enjoying harmony at
            home. Also, the direction aids wealth gain.
          </p>
          <p>
            <strong>
              Vastu mantra for the southwest direction of the house is:
            </strong>
          </p>
          <p className="red">|| ऊँ निसासराय विद्महे</p>
          <p className="red">कडगा हस्तय धीमही</p>
          <p className="red">तन्नो नैरुथी प्रचोदयाती ||</p>
          <p>|| Om Nisaasaraaya Vidmahe</p>
          <p>Kadga Hastaya Dheemahi</p>
          <p>Tanno Nairuthi Prachodayat ||</p>
          <h4>Benefits of chanting Nairuthi Gayatri mantra:</h4>
          <UnorderedList>
            <ListItem>
              Lord Nairuthi is worshipped to avoid unwanted relationships or
              marital affairs of any kind.
            </ListItem>
            <ListItem>
              The mantra will increase your chances of sudden wealth gains.
            </ListItem>
            <ListItem>
              Chanting the Nairuthi Gayatri mantra in the southwest direction of
              the house will also aid wealth savings.
            </ListItem>
            <ListItem>
              Chanting Nairuthi Gayatri mantra also alleviates Pitru dosha.
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
                  <td>Best time to chant Nairuthi Gayatri mantra</td>
                  <td>During sunrise and sunset</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>9, 11, 108, or 1008 times</td>
                </tr>
              </tbody>
            </table>
          </table>
        </div>
      </Container>
    </Layout>
  );
};

export default Vastu1;

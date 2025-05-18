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
const Gayatri = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Gayatri Mantra">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Gayatri Mantra</h1>
          <h2>Gayatri Mantra: Meaning, Significance and Benefits</h2>
          <p>
            Gayatri Mantra is perhaps one of the most popularly known Mantras in
            Hindu culture. It was first recorded in the Rig Veda, the first
            Veda, and was written in Sanskrit around 2500 to 3500 years back. It
            is believed that the great Sage Vishwamitra wrote it. The Gayatri
            Mantra comprises twenty-four syllables organised inside a triplet of
            eight syllables.
          </p>
          <p>
            Reciting the Gayatri Mantra not only cleanses the devotee chanting
            it but the listener as well. The Gayatri mantra has 24 letters
            corresponding to the 24 vertebrae of the spine. The backbone is what
            provides support and stability to our body. Similarly, the Gayatri
            mantra brings stability in our intellect. The powers of the Gayatri
            Mantra are well understood.
          </p>
          <p>
            The Gayatri mantra affects all the three states of consciousness,
            jagrut (waking), sushupt (deep sleep) and swapna (dream). It is also
            known to affect the three layers of existence adhyatmik (spiritual),
            adi daivik (supernatural) and adhibhautika (metaphysical). The
            Gayatri mantra is cited widely in Vedic and post-Vedic texts, such
            as the mantra listings of the Śrauta liturgy, and classical Hindu
            texts such as the Bhagavad Gita, Harivamsa and Manusmṛti. The mantra
            and its associated metric form were known by the Buddha. The mantra
            is an important part of the Upanayanam ceremony for young males in
            Hinduism.
          </p>
          <h2>Gayatri Mantra Deity</h2>
          <p>
            The personified form of Gayatri Mantra is known as Gayatri. She is
            also known and understood as Savitri and Vedamata (mother of Vedas).
            Gayatri is often associated with Savitr, a solar deity in the Vedas.
            According to many texts like the Skanda Purana, Gayatri is another
            name of Saraswati or her form and is the consort of Lord Brahma. Ved
            Mata is her epithet, the form in which she gives birth to four
            Vedas, Rig, Sam, Yajur and Atharav.
          </p>
          <p>
            In other texts especially Saivite, Mahagayatri is the consort of
            Shiva and accompanies him in his highest form, the Sadasiva. Gautama
            rishi was blessed by Goddess Gayatri and able to eliminate the
            obstacles he faced in his life, this is also known as the story
            behind the origin of the Gayatri Mantra.
          </p>
          <p>
            According to Varaha Purana and Mahabharata, Goddess Gayatri slew the
            demon Vetrasura, the son of Vritra and river Vetravati, on a Navami
            day, hence removing demonic obstacles from the way of good.
            According to the Skanda Purana Gayatri is married to Brahma, making
            her a form of Saraswati.
          </p>
          <h2>Gayatri Mantra: How do they help?</h2>
          <p>
            ‘Aum’ is the one syllable that means Brahman or the Universe in just
            one syllable. ‘Bhur’, ‘Bhav’ and ‘Svah’ are called Vyahrites.
            Vyahriti is that which gives knowledge of the entire cosmos, they
            mean the ‘past’, ‘present’ and ‘future’ respectively.
          </p>
          <p>
            In brief, the mantra means: ‘O thou existence Absolute, Creator of
            the three dimensions, we contemplate upon thy divine light. May He
            stimulate our intellect and bestow upon us true knowledge.’
          </p>
          <p>
            In less complex terms it simply means ‘O Divine mother, our hearts
            are filled with darkness. Please make this darkness distant from us
            and promote illumination within us.’ ‘Tat’ literally means ‘that’.
            It refers to the Supreme One and The Ultimate Reality.
          </p>
          <p>
            Gayatri Mantra helps in learning, gaining and gives us success in
            life. The texts suggest that the heart becomes pure when a person
            chants Gayatri Mantra with focus. If the mantra is firmly
            established in our minds, we will be at peace no matter what we
            experience in our daily lives. The divine will guide us and give us
            knowledge, peace and wisdom.
          </p>
          <h2>How to Chant the Gayatri Mantra</h2>
          <p>
            The Gayatri is a life-enhancing prayer. The ancient texts say that
            repeating the mantra 10 times daily removes the sins of this life,
            100 times daily removes the sins of your previous life, and 1000
            times daily removes the sins of three yugas (innumerable lives).
          </p>
          <p>
            While Gayatri Mantra can be chanted during any time of the day,
            there are certain recommendations following it. Traditionally, it
            was passed down from a father to the son during the thread ceremony.
            It was not supposed to be repeated when it was heard from someone
            else.
          </p>
          <UnorderedList>
            <ListItem>
              It is recommended that instead of being chanted out loud, it
              should be silently meditated upon, in order for it to have its
              full effect.
            </ListItem>
            <ListItem>
              If you can comfortably wake up and meditate during brahma muhurta
              which is between 3:30 - 4:30 a.m That is the best time for
              practising the Gayatri Mantra. If you think that is not possible
              for you, sunrise, noon, and sunset are also auspicious times. If
              you can only practise one day each week Friday is the most
              auspicious.
            </ListItem>
            <ListItem>
              It is also recommended for the chanter to perform a simple
              pranayama, the expansion of vital breath, such as alternate
              nostril breathing, five times before beginning the recitation of
              the Gayatri Mantra.
            </ListItem>
            <ListItem>
              If possible, face east toward the rising sun in the morning and
              west toward the setting sun in the evening.
            </ListItem>
            <ListItem>
              While chanting the Gayatri Mantra, try to pause slightly at the
              end of each line and at the end of each repetition, rather than
              rushing through it.
            </ListItem>
            <ListItem>
              When practising the Gayatri Mantra, it is recommended to always
              repeat it at least three times, although you can repeat the Mantra
              as many times as is comfortable.
            </ListItem>
            <ListItem>
              Traditionally, the mantra is repeated silently. However, if you
              prefer, it may be chanted softly aloud.
            </ListItem>
            <ListItem>
              If it’s comfortable, when reciting the Gayatri Mantra effortlessly
              visualise the Sun’s rays streaming forth into the world, entering
              your heart and then streaming out from your heart’s centre,
              sending blessings to the world.
            </ListItem>
          </UnorderedList>
          <h3>Important Gayatri Mantras</h3>
          <h4>1. Gayatri Mantra</h4>

          <p>
            <strong>The Gayatri mantra is:</strong>
          </p>
          <p className="red">|| ॐ भूर्भुवः स्वः</p>
          <p>oṃ bhūr bhuvaḥ svaḥ</p>

          <p className="red">तत्सवितुर्वरेण्यम</p>
          <p>tat savitur vareṇyaṃ</p>

          <p className="red">भर्गो देवस्य धीमहि।</p>
          <p>bhargo devasya dhīmahi</p>

          <p className="red">धियो यो नः प्रचोदयात ||</p>
          <p>dhiyo yo naḥ pracodayāt</p>

          <p>
            <strong>Meaning - </strong>O Divine mother, our hearts are filled
            with darkness. Please make this darkness distant from us and promote
            illumination within us.
          </p>
          <h4>Benefits of chanting the Santan Gopal mantra</h4>

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
                  <td>Best time to recite the Gayatri mantra</td>
                  <td>During brahma muhurta</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>10, 100, or 1000 times daily</td>
                </tr>
                <tr>
                  <td>Who can recite the Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Facing the Sun</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>2. Saraswati Gayatri mantra</h4>
          <p>
            The Saraswati Gayatri specifically prays to Goddess Saraswati. You
            can chant this mantra to seek the blessings of Goddess Saraswati.
            Mostly, chanting it on Vasant Panchmi is considered auspicious. It
            helps people perform better in education, arts, and other creative
            fields. Moreover, it helps people attain betterment in the field of
            education and grasp wisdom immensely. For students, this Gayatri
            mantra would be helpful. It would help them calm down and face
            anything without panic. Moreover, this Sarswati Gayatri mantra also
            sharpens the capabilities of students and helps them excel.
          </p>
          <p>
            <strong>The Saraswati Gayatri mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ सरस्वत्यै विद्महे, ब्रह्मपुत्रियै धीमहि। तन्नो देवी प्रचोदयात
            ।।
          </p>
          <p>
            Om Saraswatyai Vidmahe, Brahmaputriye Dheemahi, Tanno Devi
            Prachodayat
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on the goddess of speech.
            Oh, wife of Brahma Deva, give me higher intellect. Let Vani Devi
            illuminate my mind.
          </p>
          <h4>Benefits of chanting the Shri Krishna Santan prapti mantra</h4>

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
                  <td>Best time to recite the Saraswati Gayatri mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>64 times for 21 days</td>
                </tr>
                <tr>
                  <td>Who can recite the Saraswati Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td> East direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>3. Ganesha Gayatri Mantra</h4>
          <p>
            Lord Ganesha is known for new beginnings and obstacles removed from
            life. Vinayak Deva Gayatri mantra holds multiple advantages.
            Therefore, chanting this mantra regularly shall help people attain
            Siddhi in their lives and the deeds they perform. Ganesh Gayatri
            mantra is used to pray to Lord Ganesha during Ganesh Chaturthi or
            Sankashti Chaturthi. When you chant this Gayatri mantra, it shall
            help you move on the path of righteousness and help you win in the
            deeds you work on. Moreover, chanting this mantra in Vedic astrology
            shall also aid in removing hurdles from life.
          </p>
          <p>
            <strong>The Ganesha Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ लंभोदराय विद्महे महोदराय दीमही थन्नो दंथी प्रचोदयाती ।।
          </p>
          <p>
            Om Lambodaraya vidmahe mahodaraya dhimahi tanno danti prachodayat
          </p>
          <p>
            <strong>Meaning-</strong>Let me meditate on that god with broad
            paunch. Oh, God with a big belly, give me higher intellect, and let
            the elephant faced one illuminate my mind.
          </p>

          <p className="red">
            ।। ॐ एकदंतय विद्महे वक्रथुंडया धीमही थन्नो दंथी प्रचोदयाथ ।।
          </p>
          <p>
            Om Ekadantaya vidmahe Vakratundaya dhimahi Tanno danti prachodayath
          </p>
          <p>
            <strong>Meaning-</strong>Let me meditate on that one tusked Deva.
            Oh, God with broken tusks, give me higher intellect, and let the
            elephant faced one illuminate my mind.
          </p>

          <p className="red">
            ।। ॐ तपुरषय विद्महे वक्रथुंडया धीमही थन्नो दंथी प्रचोदयाथ ।।
          </p>
          <p>
            Om Thatpurashaya vidhmahe, Vakratundaya dheemahi, Tanno danti
            prachodayat
          </p>
          <p>
            <strong>Meaning-</strong>Let me meditate on that great male. Oh, God
            with broken tusks, give me higher intellect, and let the elephant
            faced one illuminate my mind.
          </p>

          <h4>Benefits of chanting the Santan Prapti mantra</h4>

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
                  <td>Best time to recite the Ganesha Gayatri mantra</td>
                  <td>Morning and/or evening</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times a day for 51 days</td>
                </tr>
                <tr>
                  <td>Who can recite the Ganesha Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td> In front of Ganesha’s idol</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>4. Shiva Gayatri Mantra</h4>
          <p>
            Shiva Gayatri Mantra is considered one of the most powerful mantras.
            People who chant this mantra attain peace of mind and please Lord
            Shiva. It is a powerful mantra that requests forgiveness from Shiva
            for the sins and misdeeds they have committed. All the course of
            your life, all the problems you may have faced shall wear off if you
            chant this mantra regularly. Along with it, this Gayatri mantra in
            astrology helps to escape the fear of death in people who recite it.
            It also helps people build their life into prosperity and help get
            rid of fears and ailments in the long run. This Mantra of Shiva
            shall also make you strong and confident and improve your inner
            strength and energy.
          </p>
          <p>
            <strong>The Shiva Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ तत पुरुषाय विधमहे महादेवय धीमहे थन्नो रुद्र प्रचोदयाथ ।।
          </p>
          <p>
            Om Tat Purushaya Vidhmahe Mahadevaya Dheemahe Tanno Rudra
            Prachodayath
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on the great Purusha. Oh,
            Mahadeva, give me higher intellect, and let God Rudra illuminate my
            mind.
          </p>

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
                  <td>Best time to recite the Shiva Gayatri mantra</td>
                  <td>Hours of dawn and dusk</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td> 9, 11, 51, 108, or 1008 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Saraswati Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of Lord Shiva</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>5. Brahma Gayatri Mantra</h4>
          <p>
            This Gayatri mantra in Vedic astrology helps seek the blessings of
            Lord Brahma. The Brahma Gayatri Mantra is for the people who wish to
            attain knowledge and know the real tinge behind the things. If you
            recite this mantra regularly, you shall become more creative and
            mentally active and increase your productivity. As Brahma is the
            creator of all, people who recite this Gayatri Mantra daily become
            better at Vaak Siddhi. Moreover, those in the profession of lawyers,
            writers, teachers, writers, etc., may chant the Brahma Gayatri
            Mantra to improve their creativity and talent in their respective
            professions.
          </p>
          <p>
            <strong>The Brahma Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ चतुर मुखिया विद्महे हमासरुदया धीमहे थन्नो ब्रह्म प्रचोदयाथ ।।
          </p>
          <p>
            Om Chathur mukhaya Vidmahe Hamasaroodaya Dheemahe Thanno Brahma
            Prachodayath
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on the God with four
            faces. Oh, God who rides on the Swan, gives me higher intellect, and
            lets the Brahma Devta illuminate my mind.
          </p>

          <p className="red">
            ।। ॐ वेदत्मनाय विद्महे, हिरण्य गर्भ धीमही, थन्नो ब्रह्म प्रचोदयात:
            ।।
          </p>
          <p>
            Om Vedathmanaya vidmahe, Hiranya Garbhaya Dheemahi, Tanno Brahma
            prachodayat
          </p>
          <p>
            <strong>Meaning - </strong>Om, Let me meditate on the Lord who is
            the soul of Vedas, Oh God, who holds the entire world within you,
            give me higher intellect, And let the Lord Brahma illuminate my
            mind.
          </p>

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
                  <td>Best time to recite the Brahma Gayatri mantra</td>
                  <td>Sunrise, noon, and sunset</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>36 and 62 times a minute for 21 days</td>
                </tr>
                <tr>
                  <td>Who can recite the Brahma Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of Lord Brahma</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>6. Lakshmi Gayatri Mantra</h4>
          <p>
            Mahalaxmi or Lakshmi Gayatri Mantra is the one people chant for good
            fortune, prosperity, and beauty. If you recite this mantra daily,
            you shall be able to bring a fulfilled life with energy and
            vitality. Usually, astrologers chant this mantra for luxuries,
            success, and status. By praying to Goddess Lakshmi, people may also
            chant this mantra to invite power and confidence in their lives.
            Countless hymns are used to pray to Goddess Lakshmi. But, chanting
            the Lakshmi Gayatri Mantra is considered to be powerful to attract
            abundance and good fortune. If you recite this Gayatri Mantra daily,
            it would also keep your mind and body healthy and reap maximum
            benefits.
          </p>
          <p>
            <strong>The Lakshmi Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ महादेवयैचा विधमहे विष्णु पठानियाचा धीमहे थन्नो लक्ष्मी
            प्रचोदयाथ ।।
          </p>
          <p>
            Om Mahadevyaicha Vidhmahe Vishnu Pathniyaicha Dheemahe Thanno
            Lakshmi Prachodayath
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on the greatest goddess.
            Oh, wife of Lord Vishnu, give me higher intellect, and let Lakshmi
            Ji illuminate my mind.
          </p>

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
                  <td>Best time to recite the Lakshmi Gayatri mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 × 3 times a day</td>
                </tr>
                <tr>
                  <td>Who can recite the Lakshmi Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of Goddess Lakshmi </td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>7. Durga Gayatri Mantra</h4>
          <p>
            The Durga Gayatri Mantra is a powerful mantra people chant to please
            Goddess Durga. Reciting this mantra is good for people who wish to
            overcome their fears and attract confidence in their lives. Along
            with intellect and peace, this Gayatri mantra also attracts
            prosperity and good luck. If you recite this mantra regularly, you
            shall be away from life’s troubles and mental issues. The Durga
            Gayatri mantra is highly auspicious to eliminate all issues on the
            character and vices. Therefore, reciting it on a daily basis will
            make you a better person with goodwill and intentions. Moreover, it
            removes evil forces from life and shall keep you away from
            negativity. There arises a sense of self-confidence, and inner
            beliefs become better and stronger when people recite the Durga
            Gayatri Mantra, regularly.
          </p>
          <p>
            <strong>The Durga Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ कात्यायनय विद्यामहे कन्या कुमारी चा धीमीे थन्नो दुर्गाय
            प्रचोदयाथ ।।
          </p>
          <p>
            Om Kathyayanaya Vidhmahe Kanya Kumari cha Dheemahe Thanno Durgaya
            Prachodayath
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on the goddess who is the
            daughter of Katyayana. Oh, Goddess Durga gave me higher intellect,
            and let her illuminate my mind.
          </p>

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
                  <td>Best time to recite the Durga Gayatri mantra</td>
                  <td>On Tuesdays and Fridays</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>9, 11, 108 or 1008 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Durga Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of Goddess Durga</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>8. Hanuman Gayatri Mantra</h4>
          <p>
            The Hanuman Gayatri mantra is Vedic astrology chanted to attract
            fearlessness in life. When you recite this mantra daily, you shall
            become stronger and gain more confidence to face life’s issues and
            troubles. Moreover, this mantra will also make you face the tasks of
            your life with confidence and a positive attitude. This Gayatri
            mantra also attracts wit, loyalty, and courage in life. It also
            keeps the person away from negative thoughts and makes them tilt
            towards the right path and devotion. You shall become knowledgeable
            beings who become open to devotion and dedication. Endurance of the
            person increases, and they become focused in life, accepting
            discipline in all means and manners.
          </p>
          <p>
            <strong>The Hanuman Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ आंजनेय विधिमहे महा बलया धीमहे थन्नो हनुमान प्रचोदयाथ ।।
          </p>
          <p>
            Om Aanjaneya Vidhmahe Maha balaya Dheemahe Thanno Hanuman
            Prachodayat
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on the son of Anjana. The
            very strong one, give me higher intellect, and let Hanuman
            illuminate my mind.
          </p>

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
                  <td>Best time to recite the Hanuman Gayatri mantra</td>
                  <td>Tuesdays and Saturdays</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>11, 108 or 1008 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Hanuman Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of Lord Hanuman</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Gayatri Mantra for Navagraha</h3>
          <h4>1. Aditya Gayatri Mantra</h4>
          <p>
            Aditya Gayatri Mantra or Surya Gayatri Mantra is a powerful
            meditation mantra dedicated to Surya Deva. It removes the ill
            effects of the planet Sun in the horoscope of the individual. So, if
            you possess a weak Sun in your horoscope, you can recite this mantra
            and make your Sun strong and seek its blessings. It provides
            positive energy to the people who recite this mantra. Also, chanting
            this Gayatri mantra daily shall help the person seek concentration
            and dedication in life. With health, prosperity, and wealth, this
            mantra also helps to restore the ability to attract abundance.
            Moreover, when you recite this Gayatri mantra, you shall possess
            good eye-sight and get rid of skin-related issues.
          </p>
          <p>
            <strong>The Aditya Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            || ॐ भास्कराय विद्महे दिवा किया धीमहि तन्नो सूर्य प्रचोदयात ||
          </p>
          <p>
            Om Bhaskaraya Vidmahe Diva karaya Dheemahe Thanno Surya Prachodayath
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on the Surya Deva. The
            maker of the day, gives me higher intellect, and lets Surya Deva
            illuminate my mind.
          </p>

          <p className="red">
            ।। ॐ अश्वध्वजय विद्यामहे पासा हस्तय धीमहे थन्नो सूर्य प्रचोदयाथ ।।
          </p>
          <p>
            Om Aswadwajaya Vidhmahe Pasa Hasthaya Dheemahe Thanno Surya
            Prachodayath
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on the god who has a
            horse flag. God who holds the rope, gives me higher intellect, and
            lets Lord Sun illuminate my mind.
          </p>
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
                  <td>Best time to recite the Aditya Gayatri mantra</td>
                  <td>Brahma Muhurta or Surya Hora</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times a day</td>
                </tr>
                <tr>
                  <td>Who can recite the Aditya Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td> East direction</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>2. Chandra Gayatri Mantra</h4>
          <p>
            Chandra Gayatri mantra helps the natives beautify themselves and
            improve their image of the person in public. It helps people seek
            better mental health and face any hurdles with courage and
            confidence. You shall enjoy progress in life and lead a tension-free
            life away from troubles and issues. So, if you would chant this
            Gayatri mantra regularly, you would feel a sense of relief and stay
            from mental illness and problems. It also helps in curing diseases
            related to the skin. Moreover, it shall also keep you away from
            problems regarding self-belief. You would also become empathetic in
            nature and feel glorified with the kind of life you have with the
            regular practice of this Gayatri Mantra.
          </p>
          <p>
            <strong>The Chandra Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ क्षीर पुत्राय विधमहे अमृतथवाय धीमहे थन्नो चंद्र प्रचोदयाथ ।।
          </p>
          <p>
            Om Kshira puthraya Vidhmahe Amrithathvaya Dheemahe Thanno Chandra
            Prachodayath
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on the son of milk. The
            essence of nectar, give me higher intellect, and let moon God
            illuminate my mind.
          </p>

          <p className="red">
            ।। ॐ पद्मद्वाजय विद्महे हेमा रूपया धीमहे थन्नो चंद्र प्रचोदयाथ ।।
          </p>
          <p>
            Om Padmadwajaya Vidhmahe Hema roopaya Dheemahe Thanno Chandra
            Prachodayath
          </p>
          <p>
            <strong>Meaning - </strong> Let me meditate on God who has lotus in
            his flag. The God of golden colour, give me higher intellect, and
            let moon God illuminate my mind.
          </p>
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
                  <td>Monday of Shukla Paksha</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>18 x 108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Chandra Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td> Northwest direction</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>3. Angaraka Gayatri Mantra</h4>
          <p>
            The Mangal Gayatri Mantra helps people get rid of negative or ill
            Mars in their Kundli. Generally, Mars holds a strong connection with
            fertility and courage. So, if you recite the Angaraka Gayatri Mantra
            daily, you shall possess immense confidence in your life. You shall
            get rid of multiple ailments, and regular practice of this mantra
            for at least 4-5 years would benefit the native in a debt-free life
            full of success and abundance. Not only your desires and stamina
            will enjoy improvements, but also shall possess a shield against
            mishappenings and accidents. Also, winning over enemies would be
            possible too, with the regular recitation of this Gayatri Mantra.
          </p>
          <p>
            <strong>The Angaraka Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ वीरध्वजय विद्महे विघ्न हस्तय धीमही तन्नो भौमा प्रचोदयाती ।।
          </p>
          <p>
            Om veeradhwajaaya vidmahe vighna hastaaya dheemahi tanno bhouma
            prachodayaat
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on him who has a hero in
            his flag. He who has power to solve problems, give me higher
            intellect, and let the son of earth God illuminate my mind.
          </p>

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
                  <td>Best time to recite the Angaraka Gayatri mantra</td>
                  <td>During sunrise on Tuesday</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>11 Malas daily</td>
                </tr>
                <tr>
                  <td>Who can recite the Angaraka mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>In front of Mangal Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>4. Budh Gayatri Mantra</h4>
          <p>
            Budh Gayatri Mantra is chanted for great communication skills and
            high intellect. People who wish to have wisdom and knowledge must
            recite this mantra regularly. With balance in life, this Gayatri
            mantra also helps in successful relationships. If you chant this
            mantra in Vedic astrology, you shall become courageous and bold.
            Also, you would attain aid in multiple health issues. Especially,
            troubles related to eyes get cured by the same because of it.
            Moreover, blood pressure and sugar-related ailments also wear off.
            If you have weak or malefic planet Mercury in your horoscope,
            chanting this mantra will be helpful.
          </p>
          <p>
            <strong>The Budh Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ गजध्वजय विद्महे सुखा हस्तय धीमहि: तन्नो बुद्ध: प्रचोदयाती ।।
          </p>
          <p>
            Om gajadhwajaaya vidmahae sukha hastaaya dheemahi tanno budha:
            prachodayat
          </p>
          <p>
            <strong>Meaning - </strong>Om, Let me meditate on him who has an
            elephant in his flag. He who has power to grant pleasure, give me
            higher intellect, and let Budha illuminate my mind.
          </p>

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
                  <td>Best time to recite Budh Gayatri mantra</td>
                  <td>Morning and during sunset on Wednesdays</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>11 times</td>
                </tr>
                <tr>
                  <td>Who can recite Budh Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>In front of Budh Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>5. Guru Gayatri Mantra</h4>
          <p>
            Guru Gayatri mantra is generally chanted to have improvisation in
            the education field. People who wish to attain high intellect in
            their life must chant this Gayatri mantra regularly. It helps to
            achieve devotion and concentration during studies. If you recite
            this mantra in Vedic astrology, you would feel satisfaction in your
            married life, and issues of childbirth also wear off. Moreover, if
            you have weak Jupiter in your Kundli, this mantra will be helpful in
            that. Praising Lord Jupiter with the Brihaspati Gayatri mantra will
            help attract wealth, children, and reputation too.
          </p>
          <p>
            <strong>The Guru Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ वृषभध्वजय विद्महे कृणी हस्तय धीमहि: तन्नो गुरु: प्रचोदयाती ।।
          </p>
          <p>
            Om vrishabadhwajaaya vidmahae kruni hastaaya dheemahi tanno guru:
            prachodayat
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on him who has a bull in
            his flag. He who has power to get things done, gives me higher
            intellect, and lets Guru illuminate my mind.
          </p>

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
                  <td>Best time to recite Budh Gayatri mantra</td>
                  <td>Morning and during sunset on Wednesdays</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>11 times</td>
                </tr>
                <tr>
                  <td>Who can recite Budh Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td> In front of Budh Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>6. Shukra Gayatri Mantra</h4>
          <p>
            The Shukra Gayatri mantra lets the natives enjoy artistic abilities
            and attraction in their lives. When you chant this mantra, you shall
            be able to remove fertility issues and diseases related to kidneys.
            It will also provide success and good luck in the fields you shall
            work. Moreover, this Gayatri mantra will help in business progress
            and the removal of Kalathra Dosha. When you recite this mantra
            daily, you will enjoy a pleasurable life with a good marriage and
            serene domestic life. Also, if you have malefic or weak planet Venus
            in your birth chart, this mantra will be helpful.
          </p>
          <p>
            <strong>The Shukra Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ अश्वध्वजया विद्महे धनुर हस्तय धीमही तन्नो शुक्र: प्रचोदयाती ।।
          </p>
          <p>
            Om aswadhwajaaya vidmahae dhanur hastaaya dheemahi tanno shukra:
            prachodayat
          </p>
          <p>
            <strong>Meaning - </strong> Let me meditate on him who has a horse
            in his flag. He who has a bow in his hand, gives me higher
            intellect, and lets Shukra illuminate my mind.
          </p>

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
                  <td>Best time to recite Shukra Gayatri mantra</td>
                  <td>
                    Friday, when Venus is in Bharani, Purvaphalguni or
                    Purvashada nakshatra
                  </td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite Shukra Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>In front of Shukra Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>7. Shaniswara Gayatri Mantra</h4>
          <p>
            The Shani or Shaniwara Gayatri mantra is to praise Lord Shani and
            get rid of the malefic and ill impacts of planet Saturn in the natal
            chart of the person. It also helps people stay away from problems
            during Sade Sati times and eliminates sorrows and pains from the
            life of the people. It also calms people down from anxiety, stress,
            and negative energies. Therefore, if you recite this Gayatri mantra
            regularly, you will seek benefits like good Karma and trouble-free
            life from all misdeeds and fickle minds. Even during the Shani
            Mahadasha, chanting this mantra will be highly auspicious for people
            who have weak or malefic Shani in their horoscope.
          </p>
          <p>
            <strong>The Shaniswara Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ काकध्वजया विद्महे खड्ग हस्तय धीमहिः तन्नो मंडः प्रचोदयाती ।।
          </p>
          <p>
            Om kaakadhwajaaya vidmahae khadga hastaaya dheemahi tanno mandah:
            prachodayat
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on him who has a crow in
            his flag. He who has a sword in his hand, gives me higher intellect,
            and lets Shani Deva illuminate my mind.
          </p>

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
                  <td>Best time to recite the Shaniswara Gayatri mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times a day</td>
                </tr>
                <tr>
                  <td>Who can recite the Shaniswara Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Northeast or east</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>8. Rahu Gayatri Mantra</h4>
          <p>
            As per astrology, the Rahu Gayatri mantra is to please planet Rahu.
            People who have Kaal Sarp Dosha in their horoscope can chant this
            mantra for auspicious results and better times ahead. With that, if
            you recite this mantra regularly, you shall attain victory over your
            enemies and feel a reduction in the ailments caused by planet Rahu.
            Also, it favours people who have sudden opportunities in their lives
            and keep away from evil energies that may be around them. Along with
            it, if you chant this Gayatri mantra, you may get success and wealth
            in your life, and the luck factor would be on your side too.
          </p>
          <p>
            <strong>The Rahu Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ नाकाध्वजय विद्महे पद्म हस्तय धीमहि: तन्नो राहु: प्रचोदयाती ।।
          </p>
          <p>
            Om naakadhwajaaya vidmahae padma hastaaya dheemahi tanno raahu:
            prachodayat
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on him who has a snake in
            his flag. He who has a lotus in his hand, gives me higher intellect,
            and let Rahu illuminate my mind.
          </p>

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
                  <td>Best time to recite the Rahu Gayatri mantra</td>
                  <td>During night</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>18,000 times in 40 days</td>
                </tr>
                <tr>
                  <td>Who can recite the Rahu Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td> North direction</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>9. Ketu Gayatri Mantra</h4>
          <p>
            The Ketu Gayatri mantra in Vedic astrology is for the people who
            face hard times during the Ketu Mahadasha. Along with it, this
            Gayatri mantra also helps people with the occult and psychic
            knowledge and enhances their interest in the same. Removing all the
            negative impacts of Ketu in the horoscope would help you attain
            courage, fame, and confidence in your life. You shall be away from
            accidents and diseases, and your spiritual knowledge will increase
            drastically. Moreover, you would also develop a keen interest in
            ashrams and tantras. This Gayatri mantra in Vedic astrology will
            also let you pass troubles like loss of reputation and status and
            regain your material wealth effortlessly.
          </p>
          <p>
            <strong>The Ketu Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ अश्वध्वजया विद्महे सुला हस्तय धीमहि तन्नो केतु: प्रचोदयाती ।।
          </p>
          <p>
            Om aswadhwajaaya vidmahae soola hastaaya dheemahi tanno ketu:
            prachodayat
          </p>
          <p>
            <strong>Meaning - </strong>Let me meditate on him who has a horse in
            his flag. He who has a trident in his hand, gives me higher
            intellect, and let Ketu illuminate my mind.
          </p>

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
                  <td>Best time to recite the Ketu Gayatri mantra</td>
                  <td>During the sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Rahu Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Ketu Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall benefits of Chanting Gayatri Mantra</h3>
          <UnorderedList>
            <ListItem>
              Gayatri mantra is a prayer aimed at illuminating the intellect. It
              is directed towards enlightening and giving immense knowledge. It
              is especially recommended for students and people taking any type
              of education.
            </ListItem>
            <ListItem>
              The vibrations created through the chanting of the Gayatri Mantra
              activate certain points on the face to further oxygenate the skin.
              The breathing involved provides more oxygen to the blood vessels
              which travel throughout your skin. The recitation keeps one away
              from skin ailments and brings a glow to the skin.
            </ListItem>
            <ListItem>
              It is advised to practise Pranayama before chanting to open up the
              breathing airways. And while chanting, further controlled deep
              breathing expands your lungs, this improves breathing and
              increases lung capabilities.
            </ListItem>
            <ListItem>
              By the continuous chanting and repetition of the Gayatri Mantra
              one is able to remove negativity from themselves and inculcate
              more positive thoughts in their mind improving overall health.
            </ListItem>
            <ListItem>
              Chanting of the Gayatri Mantra stimulates the brain. It activates
              the cells and mind to think better and to think more positively.
              It heals the spiritual aspect of the mind and is fruitful in
              calming down a stressful mind.
            </ListItem>
            <ListItem>
              The chanting of this mantra also removes anxiety, and stress. This
              is especially essential in today’s world. With the growing
              economy, people are becoming more prone to anxiety and chanting is
              a very natural and efficient way to keep your anxiety in check.
            </ListItem>
            <ListItem>
              The Gayatri mantra has a very soothing effect when chanted. It
              creates vibrations which align the chakras in your body allowing
              the flow of energy from the chakras, due to this it is frequently
              used by Chakra healers and energy healers to align Chakras.
            </ListItem>
            <ListItem>
              The chanting of Gayatri mantra sharpens the intellect and
              brightens the memory. It enhances the brain’s capacity to store
              information and retrieve it effectively.
            </ListItem>
            <ListItem>
              It is said to bring prosperity. The chanting and concentrated
              repetition of Gayatri Mantra appeases the divine goddess. She
              protects her devotees from harm and blesses them with good health,
              wealth and intellect.
            </ListItem>
            <ListItem>
              Gayatri Mantra has the power to remove doshas from one’s
              astrological charts. The benevolent goddess is very soft on her
              devotees and small chants of her name through her favourite Mantra
              brings great favour for her devotees.
            </ListItem>
            <ListItem>
              To know more about Gayatri Mantra, you can talk to our
              astrologers.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Gayatri;

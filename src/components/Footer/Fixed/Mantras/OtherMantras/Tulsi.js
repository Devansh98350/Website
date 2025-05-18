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
const Tulsi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Tulsi Mantra">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Tulsi Mantra</h1>
          <h2>Tulsi Mantra: Meaning, Significance and Benefits</h2>
          <p>
            Tulsi is considered the most sacred plant among Hindus. Most Hindu
            houses have a Tulsi plant, which is worshipped every day after a
            bath. Tulsi, also known as Vrinda, is a Goddess and Shri Vishnu's
            consort. As a result, she is constantly connected with rituals
            celebrating Vishnu's different incarnations, the one who maintains
            life on this world. Tulsi is thought to be an incarnation of Goddess
            Lakshmi on the Planet. The devotion of the Tulsi plant is related to
            a number of causes. The Tulsi or Vrinda is thought to be the doorway
            to heaven or Vaikuntha, Lord Vishnu's dwelling. As a result, she
            assists followers in edging nearer to their eventual aim, Moksha.
          </p>
          <p>
            The many portions of the Tulsi are thought to be the abode of
            numerous gods and holy scriptures of the hindu religion.
            Furthermore, because she is said to be a physical manifestation of
            the Goddess Lakshmi, she is honoured every day for peace and wealth.
            Furthermore, the holy plant aids in the removal of any Vastu Dosha.
            A Tulsi plant would also find a specific place of prayer in
            traditional families. People would do parikrama (circumambulation)
            to honour the Goddess. Tulsi's presence helps to fight against harm
            and unhappiness.
          </p>
          <p>
            Finally, the Tulsi plant has therapeutic properties. Because the
            plant contains therapeutic characteristics, it is used to treat
            common colds, coughs, and other ailments. It also helps to
            strengthen the defence system of our body.
          </p>
          <h3>Tulsi Mantra: How do they help</h3>
          <p>
            In Hinduism, a Mantra is a metre that determines the intonation of
            the voice, and a Devata or a superhuman entity, greater or lesser,
            as its informing force. The Bija, or seed, is a meaningful word or
            set of words that confers extraordinary power. Sometimes this word
            is a sound that harmonises with the key-note of the one utilising it
            and changes with individuals; other times, this word conveys the
            core of the Mantra, and the blossom that springs from this seed is
            the outcome of the Mantra. The Sakti is the power of the Mantras
            shape, and vibrations created by its sounds.
          </p>
          <p>
            Planting a basil tree in the house's Brahmasthan is regarded as
            extremely fortunate. It spreads divinity throughout the environment
            and supports the flow of pleasant energy. Brahamasthan is the
            precise middle of the house and is regarded as the most holy spot.
            Aside from that, Tulsi beads are used to make malas,' which may be
            donned as well as used to recite mantras.
          </p>
          <h3>How to chant tulsi mantra</h3>
          <p>
            It is very important to take proper care of the Tulsi plant at your
            home. The Tulsi plant is a delicate plant and needs a lot of
            dedication and care. Before chanting the mantras and watering the
            plant make sure to maintain proper hygiene and it is also advisable
            to take a bath before.
          </p>
          <p>
            While reciting the mantras make sure to follow some of the
            instructions given below.
          </p>
          <UnorderedList>
            <ListItem>
              Firstly one needs to tidy up the Tulsi area and clean the
              surrounding area for a peaceful, calm and clean environment for
              the chant.
            </ListItem>
            <ListItem>
              It is advisable to light an oil lamp beside the Tulsi plant.
            </ListItem>
            <ListItem>
              Water the Tulsi plant with both hands while holding the Kalash and
              make sure to be fully devoted towards this process.
            </ListItem>
            <ListItem>
              Then, make an offering of haldi, along with flowers and incense
              sticks.
            </ListItem>
            <ListItem>
              Finally Circulate around the plant while reciting the mantras to
              complete the process and to experience positivity and good
              fortune.
            </ListItem>
          </UnorderedList>
          <h3>Important Tulsi Mantras</h3>
          <h4>1. Tulsi Gayatri mantra</h4>
          <p>
            The Tulsi Gayatri mantra is a very potent mantra. The Tulsi gayatri
            mantra provides mental serenity. Most importantly this mantra also
            promotes domestic harmony and contentment. To reap all of the
            advantages of mantra, recite the Tulsi Gayatri mantra. Tulsi Mantra
            honours Tulsi or Basil, a plant sacred to Vishnu and his
            incarnations Krishna and Vittal. The Gayatri Mantra for Goddess
            Tulasi is as follows. This mantra is extremely useful to individuals
            who deal with inconveniences on a regular basis.
          </p>
          <h4>The Tulsi Gayatri mantra is :</h4>
          <p className="red">ॐ तुलसीदेव्यै च विद्महे,</p>
          <p className="red">विष्णुप्रियायै च धीमहि,</p>
          <p className="red">तन्नो वृन्दा प्रचोदयात् ।।</p>
          <p>
            Om Tulsidevye Cha Vidmahe Vishnupriyaye Cha Dheemahi Tanno Vrinda
            Prachodayat.
          </p>
          <p>
            <strong>Meaning - </strong>Om, Let me meditate on the Goddess of
            Ocimum, Oh, Goddess who is dear to Vishnu, give me higher intellect,
            And let Brindha illuminate my mind.
          </p>
          <h3>Benefits of chanting the Tulsi Gayatri mantra</h3>
          <UnorderedList>
            <ListItem>
              Reciting the Tulsi Gayatri Mantra on a regular basis enhances the
              possibilities of positive luck and success.
            </ListItem>
            <ListItem>
              The Mantra improves your income and lowers financial issues.
            </ListItem>
            <ListItem>
              This Mantra assists you in staying away from unhappiness and
              brings more good energy into your life.
            </ListItem>
            <ListItem>
              The Tulsi Gayatri Mantra assists in obtaining blessings from Lord
              Vishnu and Goddess Lakshmi.
            </ListItem>
            <ListItem>
              This mantra helps open new doors and brings forth better
              opportunities for you.
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
                  <td>Best time to recite this mantra</td>
                  <td>After a bath, in the morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>9, 11, 108, or 1008 times</td>
                </tr>
                <tr>
                  <td>Who can recite Katyayani mantra</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Facing the Tulsi plant, idol or image</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>
            2. Vrinda Devi-ashtaka: The eight mantras glorifying Vrinda Devi
            (Tulsi)
          </h3>
          <p>
            These Tulsi Mantras honour Tulsi or Basil, a plant sacred to Vishnu
            and his incarnations Krishna and Vittal. During Tulsi Puja, the
            prayers are chanted. Tulsi mantras are potent chants for good
            health, riches, peace, and success. These mantras can be said before
            or while watering Tulsi. Another thing to remember is that anyone
            who picks Tulsi without first bathing is an offender, and all of his
            efforts are rendered ineffective. Pick the leaves with the right
            hand while holding the branch with the left, taking care not to
            break the branches. It is also important to treat the Tulsi plant
            with respect, love and care. These eight mantras are very important
            to spread positivity in your home and also to please Lord Vishnu and
            goddess Lakshmi. It is significant to recite these mantras with
            dedication and devotion.
          </p>
          <h3>The Vrinda Devi-ashtaka mantras:</h3>
          <p className="red">
            गंगेय-कम्पेय-तदीद-विनिंदी-रोचिह-प्रवाह-स्नपित्तमा-वृन्दे
            बंधुका-रंधु-द्युति-दिव्य-वासोव्रिन्दे नमस ते कैरानारविन्दम ||
          </p>
          <p>
            Gangeya-kampeya-tadid-vinindi-rocih-pravaha-snapitatma-vrinde
            bandhuka-randhu-dyuti-divya-vasovrinde namas te caranaravindam
          </p>
          <p>
            <strong>Meaning - </strong>Dear Vrinda Devi, I bow down at your feet
            in reverence. You are drenched in your own radiance, which overcomes
            the radiance of lightning and the golden champaka flower. The beauty
            of the blue bandhuka flower is overshadowed by the glitter of your
            spiritual clothing.
          </p>
          <p className="red">
            बिंबाधारोदित्वर-मंडा-हस्य-नासाग्र-मुक्ता-द्युति-दिपितस्य
            विचित्र-रत्नभरन-श्रियाध्यायव्रिन्दे नमस ते कैरानारविन्दम||
          </p>
          <p>bimbadharoditvara-manda-hasya-nasagra-mukta-dyuti-dipitasye</p>
          <p>vicitra-ratnabharana-shriyadhyevrinde namas te caranaravindam</p>
          <p>
            <strong>Meaning - </strong>Dear Vrinda Devi, I bow down to your
            lotus feet in reverence. The radiance of the pearl on the tip of
            your nose and the remarkable soft smile on the two bimba fruits that
            are your lips brighten your face. The splendour of the magnificent
            and bright diamonds and accessories you wear enhances you.
          </p>

          <p className="red">
            समस्त वैकुंठ-शिरोमनौ श्री-कृष्णस्य वृंदावन-धान्य-धामनी दत्ताधिकारे
            वृषभानु-पुत्र्यवृन्दे नमस ते कैरानारविन्दम
          </p>
          <p>
            samasta-vaikuntha-shiromanau shri-krishnasya
            vrindavana-dhanya-dhamni dattadhikare vrishabhanu-putryavrinde namas
            te caranaravindam
          </p>
          <p>
            <strong>Meaning - </strong> O Vrinda Devi, I bow to your lotus feet
            with reverence. Shrimati Radharani, the daughter of King
            Vrishabhanu, has appointed you as the ruler of Lord Krishna's
            wealthy and fortunate home of Vrindavana, the crown gem of all the
            Vaikuntha planets.
          </p>

          <p className="red">
            तवद-अजनया पल्लव-पुष्पा-भृंगा-मृगदिभिर माधव-केली-कुंजः माधव-आदिभीर
            भंति विभुश्यामनवरिन्दे नमस ते कैरानारविन्दम
          </p>
          <p>
            tvad-ajnaya pallava-pushpa-bhringa-mrigadibhir madhava-keli-kunjah
            madhv-adibhir bhanti vibhushyamanavrinde namas te caranaravindam
          </p>
          <p>
            <strong>Meaning - </strong> Dear Vrinda Devi, I bow down to your
            lotus feet in reverence. Because of your command, the woods where
            Lord Madhava performs His pastimes look magnificent, with blossoming
            flowers, bumblebees, deer, and other fortunate creatures, flowers,
            and birds.
          </p>

          <p className="red">
            तवड़िया-दुत्येन निकुंज-युनोरत्युतकायोह केली-विलास-सिद्धिः तवत-सौभागम
            केना निरुच्यतम तद्वृन्दे नमस ते कैरनारविन्दम
          </p>
          <p>
            tvadiya-dutyena nikunja-yunoratyutkayoh keli-vilasa-siddhih
            tvat-saubhagam kena nirucyatam tadvrinde namas te caranaravindam
          </p>
          <p>
            <strong>Meaning - </strong> Dear Vrinda Devi, I bow down to your
            lotus feet in reverence. Who can adequately explain your fortunate
            fortune? You were the messenger who brought about the perfection of
            Radha and Krishna's passionate pastimes, the young couple who
            joyfully played in the woods of Vrindavana.
          </p>

          <p className="red">
            रसभिलासो वसातिस क वृंदा-वणे तवद-इसंगरी-सरोजा-सेवा लाभ क पुमसम कृपाय
            तवैववृन्दे नमस ते कैरानारविन्दम
          </p>
          <p>
            rasabhilaso vasatis ca vrinda-vane tvad-isanghri-saroja-seva labhya
            ca pumsam kripaya tavaivavrinde namas te caranaravindam
          </p>
          <p>
            <strong>Meaning - </strong> O Vrinda Devi, I bow to your lotus feet
            with reverence. Vrindavana is the home of the living creatures that
            serve your Lord's lotus feet. And the yearning to comprehend the
            Lord's magnificent diversions of the rasa dance is only possible
            because of your kindness.
          </p>

          <p className="red">
            तवं कीर्त्यसे सत्वत-तंत्र-विद्भीरलीलाभिधन किला कृष्ण- शक्तिः तवैव
            मूर्ति तुलसी नरि-लोकवृन्दे नमस ते कैरानारविन्दम
          </p>
          <p>
            tvam kirtyase satvata-tantra-vidbhirlilabhidhana kila krishna-saktih
            tavaiva murtis tulasi nri-lokevrinde namas te caranaravindam
          </p>
          <p>
            <strong>Meaning - </strong> O Vrinda Devi, I bow to your lotus feet
            with reverence. Those who have studied the Satvata-tantra extol your
            virtues. You are Lord Krishna's ability to do pastimes, and you are
            known in human society as Tulasi Devi.
          </p>

          <p className="red">
            भक्ति विहिना अपराधा-लक्षैःक्षिप्तस क कामदी-तरंगा-मध्ये कृपामयी तवं
            शरणं शरणं प्रपन्नवरिन्दे नमस ते कैरानारविन्दम
          </p>
          <p>
            bhaktya vihina aparadha-lakshaihkshiptas ca kamadi-taranga-madhye
            kripamayi tvam sharanam prapannavrinde namas te caranaravindam
          </p>
          <p>
            <strong>Meaning - </strong> O Vrinda Devi, I bow to your lotus feet
            with reverence. Those who lack devotion to Lord Hari and are pushed
            by their transgressions into the seas of passion and other unlucky
            traits may seek refuge with you.
          </p>

          <h3>Benefits of chanting the Vrinda Devi-ashtaka mantras</h3>
          <UnorderedList>
            <ListItem>
              These mantras guard against unpleasant dreams, anxiety, mishaps,
              and weaponry.
            </ListItem>
            <ListItem>
              It also protects against black magic, the evil eye, and other
              forms of negativity.
            </ListItem>
            <ListItem>
              It is claimed that chanting these mantras helps cleanse a person's
              mind, body, and spirit.
            </ListItem>
            <ListItem>
              It emits good energy into a person's aura and aids in the removal
              of all sorts of bad energy.
            </ListItem>
            <ListItem>
              Wearing a Tulsi mala while reciting mantras improves attention and
              helps the user overcome health issues.
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
                  <td>Best time to recite Vrinda Devi-ashtaka mantra</td>
                  <td>After a bath, in the morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>9, 11, 108, or 1008 times</td>
                </tr>
                <tr>
                  <td>Who can recite Vrinda Devi-ashtaka mantra mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Tulsi plant, idol or image</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h3>Overall benefits of chanting the Tulsi mantras</h3>
          <UnorderedList>
            <ListItem>
              Chanting Tulsi mantras can assist a person in overcoming bad
              karmic effects and realising the purest form of existence.
            </ListItem>
            <ListItem>
              These mantras promote general prosperity and aid in the treatment
              of ailments by disseminating optimism.
            </ListItem>
            <ListItem>
              According to astrologers, these mantras aid in the removal of all
              types of pain.
            </ListItem>
            <ListItem>
              These mantras assist in clearing one's thoughts and maintaining
              serenity and tranquillity.
            </ListItem>
            <ListItem>
              It has the power to remove the impediments to your achievement.
            </ListItem>
            <ListItem>
              It aids in the development of a humanitarian mindset by increasing
              empathy for other living beings.
            </ListItem>
            <ListItem>
              These Mantras can assist you in overcoming stress, which produces
              a host of difficulties in your life, as well as improving your
              spiritual level.
            </ListItem>
            <ListItem>
              Regularly chanting these mantras can assist to calm the mind,
              revitalise the body, and soothe the spirit.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Tulsi;

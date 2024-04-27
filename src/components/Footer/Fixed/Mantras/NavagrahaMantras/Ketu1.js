import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";
import image from "./../../../../../assests/Others/Mantras/Ketu_Mantra.webp";

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

const Ketu1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Ketu Mantra">
      <Container>
        <div className="body">
          <h1 className="heading">Ketu Mantra</h1>
          <h2>Ketu Mantra: Meaning, Significance and Benefits</h2>
          <p>
            Ketu is usually viewed as a "shadow" planet. It is supposed to have
            a remarkable impact on human lives and also on the creation as a
            whole. In some extraordinary circumstances it helps someone achieve
            the pinnacle of fame. Ketu is often depicted with a gem or star on
            his head signifying a mysterious and cosmic light. He is as
            aforementioned a shadow planet or chaya grah, and behaves quite
            likewise. It acts in a similar fashion as the planet of Mars.
          </p>
          <p>
            It is friendly with Mercury, Saturn and Venus. Its prime enemies are
            the Moon, the Sun, Mars, and it is neutral with Jupiter. Ketu is
            mostly associated with detachment, mindlessness, moksha and
            spirituality. Rahu and Ketu are half-bodied; Rahu with the upper
            half and Ketu with the lower half. So, individually, each of the
            shadow planet’s forms is incomplete, which symbolises their
            never-ending quest for satisfaction and fulfilment. It is supposed
            to represent the lack of balance that they each suffer from.
          </p>
          <p>
            While Rahu only gives and gives, Ketu only takes. While Rahu can be
            incredibly attached to materials, Ketu cares for none. They both are
            incomplete in their own ways and are seeking fulfilment in some
            sense. While Ketu is a malefic planet it is also considered with
            taking someone on a quest to meet the highest truth and relevance.
            In order to rise above the materials, Ketu is known to take from the
            possessor's worldly pleasures so they are able to look above it all.
          </p>
          <p>
            Ketu is a very mysterious planet, he has an extreme influence over
            humans. He is the accountant of Karmic cycles and maintains the
            goods and the bads one has committed in their lives. If benefic Ketu
            can produce the best of magicians, exorcists, military commanders,
            militants, healers, masters of occult, spies, ascetics, hermits,
            writers of spiritual texts, donors, philanthropists, interpreters of
            the Vedic texts and mantras, architect. However if negative it can
            produce psychopaths, serial killers, thieves, hypocrites, animal
            hunters and executioners.
          </p>
          {/*Image*/}
          <div className="image-container">
            <img src={image} alt="" className="image" />
          </div>
          <h3>Ketu Mantra: How do they help</h3>
          <p>
            Ketu mantra in Vedic astrology helps invoke the powers of the planet
            Ketu and relates closely with this planetary deity. When you chant
            this mantra regularly for a certain period of time, they shall
            possess protection from the evil spirits and win over the enemies to
            get rid of all the malefic or adverse impacts in the best way
            possible. All the Ketu mantras in astrology help you seek sudden
            results and have perception and liberation about life and wisdom.
            You become sensitive and understand life in a more genuine
            concentrated manner.
          </p>
          <h3>How to chant Ketu mantra</h3>
          <p>
            Ketu is generally known as the shadow planet and is believed to have
            an intense impact on the horoscope of the people. When you chant the
            Ketu mantra, you shall wear off negativities from your life.
            However, to seek the benefits of the mantra, you must chant it
            appropriately. To chant the Ketu mantras, you must follow the
            mentioned pointers.
          </p>
          <UnorderedList>
            <ListItem>
              Recite the mantra using Japa mala 108 times. Japa mala is similar
              to rosaries. Therefore, using it to recite these mantras would be
              helpful.
            </ListItem>
            <ListItem>
              When you chant the Ketu mantra reciting 18,000 times and Pooja
              prior to chanting the mantra with flowers and sandalwood would
              enhance the results.
            </ListItem>
            <ListItem>
              If you begin chanting the Ketu mantra within the ascending cycle
              of the Moon, starting on Tuesday, it shall be appropriate for
              those who chant it.
            </ListItem>
            <ListItem>
              Moreover, if you chant it in front of Maha-Mrityunjaya yantra,
              shall give you desired results faster.
            </ListItem>
          </UnorderedList>
          <h3>Important Ketu Mantras</h3>
          <h3>1. Ketu Beej Mantra</h3>
          <p>
            Ketu Beej mantra in Vedic astrology helps people in creating a whole
            new perspective about themselves. Removing the power of
            discrimination, this mantra in astrology also aids people to become
            better at occult sciences and tantra vidya. You shall attain
            spiritual knowledge and achieve the zenith of fame. When you recite
            this Ketu mantra regularly, you shall see tremendous impacts on your
            life. Especially if you are under the Ketu Mahadasha, you shall
            become better at material wealth, and your reputation shall improve
            for the best. A mysterious light of wisdom also bestows upon the
            natives who recite the Ketu Beej Mantra on a daily basis.
          </p>
          <p>The Ketu Beej mantras are:</p>
          <p className="red">ॐ श्रम श्रीं सरं सह केतवे नमः ||</p>
          <p className="red">ॐ केम केतवे नमः ||</p>
          <p className="red">ॐ हम केतवे नमः ||</p>
          <p>
            <strong>Meaning-</strong> Om, I bow down to Ketu.
          </p>
          <h3>Benefits of chanting Ketu Beej mantra</h3>
          <UnorderedList>
            <ListItem>
              Chanting the Ketu Beej mantra shall enhance your interest in
              ashrams, knowledge, and psychic things. You may feel a drift
              towards isolation. However, it would make you a master of wisdom
              and help you let go of unwanted desires.
            </ListItem>
            <ListItem>
              With that, this Ketu mantra will also keep you away from
              discrimination and similar factors and help you with spiritual
              knowledge.
            </ListItem>
            <ListItem>
              It helps you differentiate between what is wrong and what is
              right, aiding in proper decision-making skills.
            </ListItem>
            <ListItem>
              Moreover, it makes you an expert in tantras and occult sciences.
              With a drift towards these fields, you also gain the power to use
              these skills wisely.
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
                  <td>Best time to recite the Ketu Beej mantra</td>
                  <td>Begin on a Tuesday, during Shukla Paksha</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>18,000 times for best results</td>
                </tr>
                <tr>
                  <td>Who can recite the Ketu Beej mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>God Ketu idol or picture</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>2. Ketu Gayatri Mantra</h3>
          <p>
            Ketu Gayatri mantra is a strong mantra that is ideal for people who
            have issues and troubles related to planet Ketu in their horoscope.
            If natives chant this mantra regularly, it would be meritorious for
            them. Keeping you away from the evil mind and off from the bad eyes
            of the people, you would also become prosperous and healthy in your
            life. This mantra is highly auspicious for the people who are facing
            the negativities of the planet in their lives.
          </p>
          <p>The Ketu Gayatri mantras are:</p>
          <p className="red">
            ॐ चित्रवर्णय विद्माहे, सरपरूपाय धिमहि, तन्नो केतु प्रचोदयात॥
          </p>
          <p className="red">
            ॐ पद्म-पुत्राय विदमहे अमृतेशाय धीमहि तन्नो केतुः प्रचोदयात्॥
          </p>
          <p className="red">
            ॐ गद्दाह्स्ताय विद्महे अमृतेशाय धीमहि तन्न: केतु: प्रचोदयात॥
          </p>
          <p className="red">
            ॐ अश्वाध्वजाय विद्महे शूलाहस्ताय धीमहि तन्नो केतु: प्रचोदयात॥
          </p>
          <p>
            <strong>Meaning-</strong> Om, let me meditate on him who has horse
            in his flag. Oh, He who has a trident in his hand, give me higher
            intellect, and let Ketu illuminate my mind.
          </p>
          <h4>Benefits of chanting Ketu Gayatri Mantra</h4>
          <UnorderedList>
            <ListItem>
              This mantra is helpful to people who are under the adverse
              Mahadasha of Ketu. You would be away from troubles and adversities
              during this time.
            </ListItem>
            <ListItem>
              Chanting this mantra regularly will help you attract courage and
              fame in life.
            </ListItem>
            <ListItem>
              You shall be away from skin-related diseases and accidents. Also,
              you would not be around any severe troubles and ailments.
            </ListItem>
            <ListItem>
              With the regular recitation of this mantra, you shall also attract
              success, wealth, and sudden gains.
            </ListItem>
            <ListItem>
              You shall also become better in terms of reputation and regain
              your lost status in society and the people around you.
            </ListItem>
            <ListItem>
              Relationship-wise, you would become better at understanding it and
              recover from any misunderstandings between you and your partner.
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
                  <td>Best time to recite Ketu Gayatri mantra</td>
                  <td>Begin on a Tuesday, during Shukla Paksha</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>17,000 times</td>
                </tr>
                <tr>
                  <td>Who can recite Ketu Gayatri mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Maha-Mrityunjaya yantra or Ketu idol</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>3. Ketu Puranokta Mantra</h3>
          <p>
            The Puranokta mantras are the ones that have been in existence for a
            long time. People who recite these mantras possess a close
            connection with deities. Ketu Puranokta mantra provides a clear
            picture to the natives and keeps them away from adversities. This
            Ketu mantra helps people address themselves better and help people
            trace their life path better and more intensely. In different
            contexts, the Ketu Puranokta mantra is of variable importance.
          </p>
          <p>The Ketu Puranokta mantra is:</p>
          <p className="red">
            पलास पुष्पा संकासम - तारकग्रह मस्तकाम् <br /> रौध्राम रौध्रथमाकम
            गोरम - थम केथुम प्रणामम् याहं॥
          </p>
          <h4>Benefits of Ketu Puranokta mantra</h4>
          <UnorderedList>
            <ListItem>
              The Ketu Puranokta mantra helps natives achieve the zenith of
              wealth.
            </ListItem>
            <ListItem>
              If you regularly recite this mantra, you would see yourself become
              an effortless discriminator. You shall easily understand what must
              be done and what you must avoid.
            </ListItem>
            <ListItem>
              Knowledge regarding mystical studies will improve. Moreover, you
              shall become a master and tantras and mantras.
            </ListItem>
            <ListItem>
              Recovering from loss-like situations would wear off, which would
              make you achieve better things in life.
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
                  <td>Best time to recite Ketu Puranokta mantra</td>
                  <td>Begin on a Tuesday, during Shukla Paksha</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>7,000 times in 11 days</td>
                </tr>
                <tr>
                  <td>Who can recite Ketu Puranokta mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Ketu idol or picture</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall benefits of Ketu mantras</h3>
          <UnorderedList>
            <ListItem>
              If a person has malefic Ketu in his/her horoscope, he/she will
              have to bear various mis-happenings brought by the wrong
              positioning of planet Ketu in his/her birth chart. In this case
              they are suggested to chant Ketu Mantra to appease the lord Ketu.
            </ListItem>
            <ListItem>
              If a native is undergoing Ketu dasha, he faces uncertainty, loss
              of direction, loss of wealth and even loss of marital happiness,
              in this case Ketu Mantra are useful in mitigating harmful effects.
            </ListItem>
            <ListItem>
              Any person chanting Ketu mantras with utmost dedication and
              devotion will receive blessings and protection of Ketu. The planet
              will not affect them adversely if they continue to seek his
              blessings and appease them.
            </ListItem>
            <ListItem>
              Chanting these mantras will nullify the negative effects of
              malefic Ketu so chanting of Ketu Mantras is especially recommended
              for people who have negative effects of the Ketu planet in their
              birth chart.
            </ListItem>
            <ListItem>
              Ketu leads people away from worldly habits. If one is looking to
              give up negative habits like alcohol, drugs and smoking, chanting
              of Ketu Mantras can be very effective for them.
            </ListItem>
            <ListItem>
              Ketu leads people away from social vices and his worship
              especially through the chanting of Mantras will help one
              accomplish that.
            </ListItem>
            <ListItem>
              Ketu mantra recitation helps one achieve a higher level of wisdom
              and spiritual enlightenment. He stops one's preoccupation with
              material possessions and helps them look beyond the immediate
              gratification of needs.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Ketu1;

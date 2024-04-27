import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";
import image from "./../../../../../assests/Others/Mantras/Sukra_Mantra.webp";

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

const Shukra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Shukra Mantra">
      <Container>
        <div className="body">
          <h1 className="heading">Shukra Mantra</h1>
          <h2>Shukra Mantra: Meaning, Significance and Benefits</h2>
          <p>
            Venus is one of the hottest planets in the cosmos since it is the
            second planet from the Sun. The planet is associated with Shukra or
            Shukracharya, one of the greatest philosophers of all time,
            according to Vedic astrology. He possessed enormous intellect, but
            because he was the advisor and defender of Detyas or Asuras, he also
            possessed worldly pleasures and comforts. The sage is reported to
            have given all of his money to the demons and lived as a monk. After
            being inspired by Lord Brahma, he chose to become a planet and
            safeguard the creatures of all three realms.
          </p>
          <h4>Favourable Shukra:</h4>
          <p>
            According to the Vedas, anyone with a powerful Shukra (Venus) planet
            in their horoscope is inherently gifted with unrivalled
            self-confidence and perfect beauty. Shukra improves the native's
            good qualities and attractiveness. According to astrology, whoever
            is blessed by Shukra or Venus's benefic influences has all of life's
            luxuries, money, a lovely personality, and a devoted soulmate.
          </p>
          <p>
            Shukra is associated with a fruitful family life, a gorgeous
            partner, family love and harmony, a pleasurable connection between
            the duo, lyrical achievements, automobiles, modern conveniences,
            decorations, income, and valuable items, and other fascinating
            aspects of life linked with delight, warmth, and status in society.
            Those who are fortunate enough to be born under this planet's
            influence will succeed.
          </p>
          {/*Image*/}
          <div className="image-container">
            <img src={image} alt="" className="image" />
          </div>
          <h4>Unfavourable Shukra:</h4>
          <p>
            Those with Venus in a poor position in their birth chart face a
            variety of challenges throughout life. These individuals don't
            readily develop monetary luxuries; they don't have a confident
            personality, and they may seek other obstacles in their romantic
            lives as well. Shukra is in charge of the skin, cheeks, eyes,
            reproductive system, and digestive system in the human body. Eye
            difficulties, gastritis, skin irritation, acne, and decreased
            appetite are common during the transiting influences of this planet
            in horoscopes.
          </p>
          <h3>Shukra mantra: How do they help?</h3>
          <p>
            According to the Vedas, anyone with a powerful Shukra (Venus) planet
            in their astrology chart is inherently gifted with unrivalled
            self-confidence and perfect elegance. Shukra improves the native's
            charm and personality. Chanting the Shukra Mantra bestows bravery,
            trust, money, opulence, material pleasures, affection, marriage, and
            a happy married life to the devotee. The Shukra mantra has been
            shown to be quite helpful in achieving success in life. This mantra
            may also be used to speed up the marriage process.
          </p>
          <h3>How to chant the Shukra mantra</h3>
          <UnorderedList>
            <ListItem>
              If you want to recite the Shukra mantra, you should first purchase
              the Shukra Yantra.
            </ListItem>
            <ListItem>
              Prepare a rangoli using sandal powder inside the Puja chamber.
              Then cover it with a white towel and set the Yantra on top of it.
            </ListItem>
            <ListItem>
              To the Yantra, apply sandal paste, turmeric, and vermilion. Also,
              place some flowers on the table and light a candle with incense
              sticks.
            </ListItem>
            <ListItem>
              Sit on a mat and begin repeating the mantra, preferably with a
              Jaap Mala.
            </ListItem>
            <ListItem>
              Friday is the best day to begin reciting the mantra because it is
              considered to be lord Venus' date.
            </ListItem>
          </UnorderedList>
          <h3>Important Shukra mantras</h3>
          <h3>1. Shukra Beej Mantra</h3>
          <p>
            This Mantra is a collection of a few words infused with spiritual
            power, as the name indicates. Beej mantras are so-called because
            they are said to be like seeds (beej) that have been infused with
            heavenly qualities.The Shukra Beej mantra ensures that a person is
            always healthy and linked to all kinds of worldly delights. The
            native receives the boon of peace and a chance to live a happy and
            wealthy life by reciting the Shukra Beej mantra.
          </p>
          <p>The Shukra Beej mantra is:</p>
          <p className="red">|| ॐ द्रां द्रीं द्रौं स: शुक्राय नम: ||</p>
          <p>
            <strong>Meaning-</strong> In these cosmic tones, I feel Lord Shuka.
            Allow the Lord of Venus to enlighten my mind.
          </p>
          <h4>Benefits of chanting the Shukra Mantra</h4>
          <UnorderedList>
            <ListItem>
              The Shukra mantra aids in the removal of obstacles to marriage and
              childbirth.
            </ListItem>
            <ListItem>
              One is blessed to have worldly luxuries in life.
            </ListItem>
            <ListItem>
              Women may achieve aesthetic appeal by repeating this mantra on a
              daily basis.
            </ListItem>
            <ListItem>
              Life's uncertainties may fade away, and serenity and prosperity
              reign supreme.
            </ListItem>
            <ListItem>
              Disputes with opponents are resolved without difficulty, as are
              several of those issues.
            </ListItem>
            <ListItem>
              It helps one prosper in any business and removes all of Venus's
              negative influences from one's horoscope.
            </ListItem>
            <ListItem>
              It enhances a woman's attractiveness to herself and others.
            </ListItem>
            <ListItem>
              It removes any financial barriers, allowing you to enjoy the finer
              things in life.
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
                  <td>Best time to recite the Shukra Beej mantra</td>
                  <td>Friday</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108, 324, or 2268 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Shukra Beej mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>West</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>2. Shukra Gayatri Mantra</h3>
          <p>
            The Shukra Gayatri mantra attracts people and gives them artistic
            ability. Venus, also known as Shukra, is the most generous of all
            the planets. The planet Venus is thought to be the demon's
            instructor. As a result, Venus is said to be connected with
            affluence and worldly comforts. This planet should be worshipped in
            order to have a good marital life. Those who are in their Venus
            dasha. Venus is a passionate planet that increases romance. In Hindu
            mythology, it is known as 'Shukra,' and is the son of the great sage
            Bhrigu and Khyati. Shukra governs the reproductive system, vision,
            neck, face, and kidneys in the body. Shukracharya is the Lord of the
            Planet's riches, which include metals, raw materials, herbs, and
            holy and godly wisdom.
          </p>
          <p>The Shukra Gayatri Mantras are:</p>
          <p className="red">
            || ॐ अश्वध्वजाय विद्महे धनुर्हस्ताय धीमहि तन्नः शुक्रः प्रचोदयात् ॥
          </p>
          <p>
            <strong>Meaning-</strong> Om, let me meditate on the god with the
            horse flag, Oh, God who holds the bow and arrow, grant me better
            intelligence, and let the venus God light up my mind.
          </p>
          <p className="red">
            ||ॐ रजदाभाय विद्महे भृगुसुताय धीमहि तन्नो शुक्र: प्रचोदयात् ||
          </p>
          <p>
            <strong>Meaning-</strong> I kneel myself in front of Lord Shukra,
            who is a descendant of Sage Bhrigu and rides a white horse. Allow
            his blessings to enlighten and illuminate my existence.
          </p>
          <h4>Benefits of chanting the Shukra Gayatri Mantra</h4>
          <UnorderedList>
            <ListItem>
              In horoscopes, the Shukra Gayatri Mantra eliminates all of Venus's
              negative qualities.
            </ListItem>
            <ListItem>
              The Shukra mantra helps with reproductive issues and renal
              disorders.
            </ListItem>
            <ListItem>
              The Shukra mantra may bring you good fortune and prosperity in any
              situation.
            </ListItem>
            <ListItem>
              Shukra Mantra is a powerful magnetic and persuasion tool that may
              be used on a regular basis.
            </ListItem>
            <ListItem>
              Shukra Mantra is a strong mantra that links you to greater
              compassion and attraction vibrations.
            </ListItem>
            <ListItem>
              The Shukra Gayatri mantra attracts people and gives them the
              artistic ability.
            </ListItem>
            <ListItem>
              All household ambiguities are resolved, and stability and
              prosperity reign supreme in the home.
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
                  <td>Best time to recite the Shukra Gayatri mantra</td>
                  <td>Every evening</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Shukra Beej mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Facing the Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall benefits of chanting Shukra mantra</h3>
          <UnorderedList>
            <ListItem>
              Chanting this mantra can help to mitigate the unfavourable impacts
              of a planet's location in the horoscope.
            </ListItem>
            <ListItem>
              Shukra has an impact on a person's financial, physical, and
              marital lives. As a result, reciting this mantra on a daily basis
              keeps negativity at bay in these areas of life.
            </ListItem>
            <ListItem>
              This Graha is linked to luxury, comfort, marriage, passion,
              talent, and creativity, among other things. As a result, repeating
              this Mantra can provide several benefits.
            </ListItem>
            <ListItem>
              Shukra also denotes study and knowledge. This mantra can thus be
              said by individuals who seek to obtain wisdom and commence fresh
              learning.
            </ListItem>
            <ListItem>
              Shukra is linked with Tamasic Gunas, hence seeking his blessing
              for material comforts and luxury is possible.
            </ListItem>
            <ListItem>
              Shukra embodies willpower, boldness, and perseverance. As a
              result, reciting this mantra on a daily basis might help you beat
              your bad tendencies.
            </ListItem>
            <ListItem>
              The Sanjeevani Mantra was bestowed upon Shukracharya, a Shiva
              devotee. As a result, this mantra can be recited for a healthy
              life.
            </ListItem>
          </UnorderedList>
          <p>
            Reciting this mantra with real dedication and complete confidence in
            the spiritual does marvels. To sense the distinction, humble
            yourself before the forces that rule the cosmos.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default Shukra;

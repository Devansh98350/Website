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
const Shakti = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Shakti Mantra">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Shakti Mantra</h1>
          <h2>Shakti Mantra: Meaning, Significance and Benefits</h2>
          <p>
            Shakti is the infinite feminine dynamic strength, the primal holy
            celestial spirit, as a notion or embodiment. It is said to depict
            the dynamic and strong forces that move across all of existence. The
            Goddess Adi Parashakti is thought to be the highest spirit beyond
            form, or Param Atman. She is the creator of the entire cosmos. The
            Goddess is the only source of triumph and the embodiment of victory.
            She is also the Great Goddess, and hence the origin of all other
            goddesses.
          </p>
          <p>
            In Shaktism, she is almighty and regarded as the "Ultimate Reality."
            Shakti may be found in a variety of Hindu Goddesses, including Maa
            Durga, Goddess Parvati, Goddess Lakshmi, and Goddess Kali, to name a
            few. A significant correlation with Shakti energy and the original
            Divine Mother source is established when you interact with these
            deities. She is also known for being the only person who has the
            ability to govern all nine planets.
          </p>
          <p>
            Mantra shakti is the global celestial force produced by the repeated
            chanting of a single syllable, word, or series of syllables, as
            embodied by Shakti. Chanting a mantra vocally or quietly is a yoga
            technique for focusing attention on a single topic and calming the
            mind during meditation. The noises' vibrations are supposed to
            ignite spirituality.
          </p>
          <p>
            Shakti is linked to creation and all of the universe's dynamic
            powers. yogis ponder Shakti in Tantric relaxation techniques to
            comprehend and harness the force, strength, and inspiration within
            themselves and the world. Shakti mantras work at the core of
            pranayama and conscious transformation.
          </p>
          <h3>Shakti Mantra: How do they help</h3>
          <p>
            If you recite the Kaal Bhairav mantra on a daily basis, it might
            bestow infinite favours on the devotee and win him over.
          </p>
          <p>
            The origin of meditative practices is supposed to be chanting
            mantras. Chanting mantras, whether in a group or alone, has been
            discovered to have substantial cognitive, physical, and
            psychological impacts, according to research. The mind quickly
            focuses on a single idea when singing a sacred mantra, speeding up
            the process of thinking freely. Furthermore, singing a mantra on a
            regular basis aids in the development of selflessness, which leads
            to moksha.
          </p>
          <p>
            Moreover, chanting mantras may lift our spirits, serve as a tool for
            clearing out harsh, harmful, and conservative habits and beliefs, or
            just a method to feel pleasure and contentment by allowing our
            thoughts to circulate openly.
          </p>
          <p>
            The therapeutic chant connects you to the Holy vibrations (sound) as
            well as the powerful and positive energy. It's also stated that
            reciting this mantra with a pure heart can accomplish your wishes
            and remove your concerns. The deities will protect a person who
            chants the mantra with faith. Furthermore, saying this mantra
            instils compassion and respect for the Holy Feminine Shakti and
            virtue in everyone.
          </p>
          <h3>How to chant Shakti mantra</h3>
          <p>
            Adi shakti is the power of the creation and the origin of the
            universe. She is the definition of strength, courage and bravery.
          </p>
          <UnorderedList>
            <ListItem>
              To please the divine goddess, it is recommended to chant the
              shakti mantras with utmost sincerity.
            </ListItem>
            <ListItem>
              This practice connects the chanter to the Shakti mantra's
              vibration.
            </ListItem>
            <ListItem>
              It's a wonderful mantra for expecting women to chant for their
              kids, as well as for all women to connect with the Holy Feminine
              energy.
            </ListItem>
            <ListItem>
              Furthermore, when this practice is genuinely performed, the
              safety, wealth, and richness that one requires will be present in
              the devotee's life.
            </ListItem>
            <ListItem>
              It is recommended to chant the mantra for 11 to 31 minutes.
            </ListItem>
          </UnorderedList>
          <h2>Important Shakti Mantras</h2>
          <h3>1. Adi Shakti mantra</h3>
          <p>
            Every Hindu God has Shakti, and they are powerless without Her
            divine force. There is no beginning or end to the feminine energy.
            It cycles through moments of rest and action, yet being restless by
            nature. The Adi Shakti mantra means "Initial Strength" in Sanskrit.
            The Goddess is not only accountable for the entirety of existence,
            but also for all transformation. This mantra has the ability to
            heal, strengthen and empower people with hope when they are going
            through difficult times.
          </p>
          <p>The Adi Shakti mantra is:</p>
          <p className="red">आदि शक्ति, आदि शक्ति, आदि शक्ति, नमो नमो</p>
          <p>Adi Shakti, Adi Shakti, Adi Shakti, Namo Namo</p>

          <p className="red">सरब शक्ति, सरब शक्ति, सरब शक्ति, नमो नमो</p>
          <p>Sarab Shakti, Sarab Shakti, Sarab Shakti, Namo Namo</p>

          <p className="red">
            प्रीतम भगवती, प्रीतम भगवती, प्रीतम भगवती, नमो नमो
          </p>
          <p>Pritham Bhagvati, Pritham Bhagvati, Pritham Bhagvati, Namo Namo</p>

          <p className="red">कुंडलिनी माता शक्ति, माता शक्ति, नमो नमो ||</p>
          <p>Kundalini Mata Shakti, Mata Shakti, Namo Namo</p>
          <p>
            <strong>Meaning - </strong> I submit to the primal force. I bow to
            the all-powerful and energising force. I bow to that which God uses
            to create. I bow to the Kundalini, the Divine Mother Power's
            creating energy.
          </p>
          <h4>Benefits of chanting the Adi shakti mantra</h4>
          <UnorderedList>
            <ListItem>
              Getting rid of fears that prevent us from taking steps toward our
              own independence
            </ListItem>
            <ListItem>
              Improving our sense of personal strength, assurance, and trust
            </ListItem>
            <ListItem>
              Using your imagination to improve your life and the lives of
              people around you
            </ListItem>
            <ListItem>
              Putting us in a state of mind where we can focus on earning more
              and be financially stable.
            </ListItem>
            <ListItem>
              Getting rid of your worries and negative thought patterns.
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
                  <td>Best time to recite Adi shakti mantra</td>
                  <td>Morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td> 10 to 15 times</td>
                </tr>
                <tr>
                  <td>Who can recite Adi shakti mantra</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North Direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>2. Sarva badha mukti mantra</h4>
          <p>
            This mantra is said to get rid of issues in one's life and to get
            the fortitude to tackle them head on. The goddess says that by
            chanting this mantra, followers will be rid of all impediments in
            their lives, and that their lives would be filled with money,
            grains, and children. Chanting this phrase helps to promote
            happiness and provide courage right away. To experience the goodness
            of this mantra, it should be recited with faith and devotion. This
            mantra can also be considered as a part of Shakti mantra because it
            provides strength during one’s most difficult times, and helps get
            rid of problems.
          </p>
          <p>The Sarva badha mukti mantra is:</p>
          <p className="red">सर्व बाधाविनिर्मुक्तो धन धान्य सुतान्वितः</p>
          <p className="red">मनुष्यो मतप्रसादेन भविष्यति न संशय: ||</p>
          <p>Sarvabadha vinirmukto dhan dhaanya sutaanvitaha</p>
          <p>Manushyo mat prasaaden bhavishyati na sanshaya</p>
          <p>
            <strong>Meaning - </strong>Goddess declares that with my blessings,
            the devotee will certainly be free of all difficulties and will be
            blessed with riches, grains, and children.
          </p>
          <h4>Benefits of chanting the Sarva badha mukti mantra</h4>
          <UnorderedList>
            <ListItem>
              Your strength and confidence will grow as you say this mantra, and
              you will be ready to confront any obstacle.
            </ListItem>
            <ListItem>
              The sarva badha mukti mantra can assist you in overcoming whatever
              fears you may be experiencing.
            </ListItem>
            <ListItem>
              This Sarva badha mukti mantra is claimed to be extremely effective
              in eliminating all barriers from one's life.
            </ListItem>
            <ListItem>
              The chanting must be done on a regular basis to get all the
              benefits and goodness of this mantra.
            </ListItem>
            <ListItem>
              It is thought to bring additional profit and fortune.
            </ListItem>
            <ListItem>
              The mantra Sarva badha mukti is also thought to be beneficial to
              persons who are attempting to conceive.
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
                  <td>Best time to recite Sarva badha mukti mantra</td>
                  <td>Anytime</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite Sarva badha mukti mantra</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North Direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>Overall benefits of chanting the Shakti mantras</h4>
          <UnorderedList>
            <ListItem>
              This Mantra might help you concentrate more effectively.
            </ListItem>
            <ListItem>It boosts self-assurance and bravery.</ListItem>
            <ListItem>
              The Shakti Mantra aids in the management of anxiety, sadness, and
              uneasiness.
            </ListItem>
            <ListItem>It ensures professional excellence.</ListItem>
            <ListItem>
              Moreover, It dismisses evil and generates a good environment
              around the devotee.
            </ListItem>
            <ListItem>
              It has the potential to extend your thinking and improve your
              personality. It provides immense mental and spiritual peace.
            </ListItem>
            <ListItem>
              Also, it can assist you in making better judgments by providing
              you with additional information, and attention.
            </ListItem>
            <ListItem>
              The vibrations created by chanting this mantra assist to unite the
              brain, soul, and body.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Shakti;

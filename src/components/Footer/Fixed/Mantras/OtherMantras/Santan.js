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
const Santan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Santan Gopal Mantra">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Santan Gopal Mantra</h1>
          <h2>Santan Gopal Mantra: Meaning, Significance and Benefits</h2>
          <p>
            According to the Vedic scriptures, there are ways to attain the
            unattainable by various rituals, havana, chanting, penance, etc.
            that can benefit the performer in great ways. Among them is the
            performance of mantras and their effect. Mantra is the sound of the
            words we say and not only the words. It is the way every syllable is
            uttered by an individual, and its effect depends on how much faith
            the person has in there while they are saying the words.
          </p>
          <p>
            Like everything else, there are mantras for the attainment of
            children that have a high effect when the parents are struggling to
            bear a child. Among them, the most effective mantra is the Santan
            Gopal Mantra. There are multiple scriptures where this mantra is
            being talked about in high esteem. The miraculous effects of this
            mantra have been discussed and performed for ages. Because of the
            extremely effective ways of this mantra dedicated to Lord Krishna,
            the performer is assured to have children with good qualities. But
            there should be complete devotion while chanting this mantra as the
            effects of this mantra mostly depend on the faith the performer has.
            The person should also remain sattvic while chanting the Santan
            Gopal Mantra.
          </p>
          <p>
            To get the best effects, the mantra should be chanted continuously
            with devotion to bet the best outcome. Many performers are
            performing this mantra with other rituals and havana to get blessed
            with a child. Every new soon-to-be parents pray to have a child
            without any problems and wish for their pregnancy to go smoothly
            without any obstacles. Regular chanting of this mantra will remove
            any obstacles that could harm the child or the parents. The positive
            energy that gets radiated while chanting this mantra creates a
            healthy environment for the child and the mother.
          </p>
          <h2>Santan Gopal mantras: How do they help?</h2>
          <p>
            The deity of the Santan Gopal mantra is Lord Krishna who is one of
            the most beloved and worshiped gods of Hindu mythology. Born in the
            dungeon of Mathura’s palace, Lord Krishna’s birth tale is known by
            all. The struggles mother Devki and father Vasudev had to go through
            during lord Krishna’s birth and the way Vasudev had to pave the path
            to deliver the newborn lord Krishna to Nanda dev to protect him from
            his uncle Kansa, who wanted to kill him because of a prophecy that
            depicted that the child of his sister will be the cause of his
            death.
          </p>
          <p>
            It is a religious tale that has been echoed for centuries. Dark in
            color, Lord Krishna is the epitome of beauty with brains with his
            teachings, leading generations. Worshiping Lord Krishna will bring
            happiness to expecting parents and keep the mother and the child
            safe from any unwanted hurdle.
          </p>
          <h2>How to chant Santan Gopal mantra</h2>
          <UnorderedList>
            <ListItem>
              For obtaining the best results, the best way to chant the Santan
              Gopal mantra is to take a bath first thing in the morning and sit
              in front of an idol of Lord Shri Krishna.
            </ListItem>
            <ListItem>
              The performer should also include the use of tulsi mala while
              chanting to get the full benefit.
            </ListItem>
            <ListItem>
              Flowers that should be used for the ritual are swet pushp or peet
              pushp.
            </ListItem>
            <ListItem>
              They are usually in the color blue or yellow, which represents
              Lord Krishna beautifully.
            </ListItem>
          </UnorderedList>
          <h3>Important Santan Gopal mantras</h3>
          <h4>1. Santan Gopal mantra</h4>
          <p>
            There are various types of mantras, and each mantra holds special
            meaning and purpose. And to perform each mantra there are also
            multiple ways allocated to each mantra. Every mantra activates a
            different part of our body and each one affects it in its own way.
            While chanting the Santan Gopal mantra, awareness is necessary
            because without proper instructions and simply repeating the word
            will bring dullness to the soul and mind.
          </p>
          <p>
            <strong>The Santan Gopal mantra is:</strong>
          </p>
          <p className="red">।। ॐ श्रीं ह्रीं क्लीं ग्लौं देवकीसुत गोविन्द</p>
          <p>Om Shreeng Hreeng Kleeng Glaung Devakisut Govind</p>

          <p className="red">
            वासुदेव जगत्पते देहि मे तनयं कृष्ण त्वामहं शरणं गतः ।।
          </p>
          <p>
            Vasudev Jagatpate Dehi Me Tanayam Krishn Tvaamaham Sharanam Gatah
          </p>
          <h4>Benefits of chanting the Santan Gopal mantra</h4>
          <UnorderedList>
            <ListItem>
              There are many benefits from chanting this mantra regarding
              children.
            </ListItem>
            <ListItem>
              Those who are struggling to attain the happiness of children,
              chanting this mantra is very helpful to fill the blank space in
              their life.
            </ListItem>
            <ListItem>
              Any obstacles that are in the way of achieving the happiness of
              children are removed from the roots.
            </ListItem>
            <ListItem>
              After chanting the Santan Gopal mantra religiously for a long
              period of time will provide the performers with beautiful and
              intelligent children.
            </ListItem>
            <ListItem>
              Mothers who are struggling to conceive a child or are losing the
              child during the pregnancy will have great benefits and will be
              able to keep the child.
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
                  <td>Best time to recite Santan Gopal mantra</td>
                  <td>
                    Shukla paksha, chandravali, subh nakshatra, after taking a
                    bath
                  </td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>1,25,000</td>
                </tr>
                <tr>
                  <td>Who can recite Santan Gopal mantra</td>
                  <td>Expecting mothers</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>In front of God Santhana Idol</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>2. Shri Krishna Santan Prapti mantra</h4>
          <p>
            Lord Krishna is the picture of grace and beauty. He is worshiped as
            the god of love, tenderness, and compassion. Hindu mythology depicts
            him to be the prankster, whose tales of escapades are recited among
            the devotees during kirtans ( devotional singing). He is also the
            universal god of love. The story of Radha and Krishna is so well
            known that it is still described as the greatest love of all, and is
            considered the beginning of true love on earth.
          </p>
          <p>
            <strong>The Shri Krishna Santan prapti mantra is:</strong>
          </p>
          <p className="red">
            ।। ॐ क्लीं गोपालवेषधराय वासुदेवाय हुं फट स्वाह: ।।
          </p>
          <p>Om Kleeng Gopalveshadhaaraay</p>
          <p>Vaasudevaay Hum Phat Swahaa</p>
          <h4>Benefits of chanting the Shri Krishna Santan prapti mantra</h4>
          <UnorderedList>
            <ListItem>
              Lord Krishna is worshiped as the childlike god during Janmashtami
              and praying to him with a pure heart will bless the worshippers
              and cancel all ill fate.
            </ListItem>
            <ListItem>
              Those who are facing problems while trying to bear children or are
              unable to conceive children, chanting the Shri Krishna Santan
              prapti mantra is extremely beneficial.
            </ListItem>
            <ListItem>
              If there is any underlying disease that is becoming the reason for
              the difficulty to get pregnant, then this mantra will benefit the
              person and help keep the body healthy and the environment positive
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
                    Best time to recite the Shri Krishna Santan prapti mantra
                  </td>
                  <td>Anytime, early morning after bath</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 or 28 times a day for 96 days</td>
                </tr>
                <tr>
                  <td>Who can recite Shri Krishna Santan prapti mantra</td>
                  <td>Women who are trying to conceive a child</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of Lord Krishna</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>3. Santan Prapti mantra</h4>
          <p>
            Chanting the Santan prapti mantra regularly will cast off any evil
            energy to create the most suitable environment for the mother so
            that she can focus all her attention on the well-being of her child
            and herself. With regular chanting of this mantra, the performer
            will get to have a peaceful mind with no animosity intended towards
            her. This prayer is to invoke lord Shri Vasudeva, who is the eternal
            father of the universe, and please him with holy fire. Lord Vasudeva
            is responsible for the continuation of the family generation.
          </p>
          <p>
            <strong>The Santan Prapti mantra is:</strong>
          </p>
          <p className="red">।। ॐ नमो भगवते जगत्प्रसूतये नमः ।।</p>
          <p>Om Namo Bhagavate Jagatprasutaye Namah</p>
          <h4>Benefits of chanting the Santan Prapti mantra</h4>
          <UnorderedList>
            <ListItem>
              Chanting the Santan prapti mantra will help in warding off all the
              negative energy that can be harmful to the pregnant mother during
              prepartum.
            </ListItem>
            <ListItem>
              Often in many situations, problems regarding the health of the
              newborn baby arise. Reciting this mantra will ensure healthy
              childbirth with any form of health issues.
            </ListItem>
            <ListItem>
              The health of the mother is also a big concern during childbirth
              or even during the postpartum stage.
            </ListItem>
            <ListItem>
              Many forms of physical ailments arise even after a healthy birth.
              A regular recitation of this mantra will help in maintaining good
              health and fast recovery of the mother.
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
                  <td>Best time to recite the Santan prapti mantra</td>
                  <td>Early morning after taking a bath</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times or 28 times a day</td>
                </tr>
                <tr>
                  <td>Who can recite the Santan prapti mantra</td>
                  <td>Pregnant women or couples trying to conceive a child</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Chant while facing an idol of Lord Krishna</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall benefits of Santan Gopal Mantra</h3>
          <UnorderedList>
            <ListItem>
              Lord Krishna is worshiped in many ways and forms, and one of his
              forms is the one of a child. The child form of lord krishna is
              worshiped during janmashtami.
            </ListItem>
            <ListItem>
              Devotion to Krishna and chanting the santan gopal mantra will
              bring good fortune in terms of children.
            </ListItem>
            <ListItem>
              Expecting parents should definitely start their days with reciting
              the santan gopal mantra to get blessed with beautiful and
              intelligent children.
            </ListItem>
            <ListItem>
              Just like our lord krishna, who has the face of an angel and wit
              to go with it, the devotees who are making chanting santan gopal
              mantra part of their daily life will reap the benefit of gaining
              children just like him.
            </ListItem>
            <ListItem>
              If there are underlying diseases which are becoming an obstacle in
              the way of women who want to become a mother, they will see a
              gradual change in their health in a positive manner.
            </ListItem>
            <ListItem>
              Chanting this mantra will ward off any evil energy in the living
              space of the expecting mother and will create a healthy
              environment.
            </ListItem>
            <ListItem>
              Regularly reciting the santan gopal mantra will cast off the
              chaotic energy around the mother and will help her to focus on her
              and her child’s health.
            </ListItem>
            <ListItem>
              Couple who are struggling for many years to conceive and are
              facing with unwarrented miscarriages will should chant these
              mantras to gain the blessings of lord krishna.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Santan;

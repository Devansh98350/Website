import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";
import image from "./../../../../../assests/Others/Mantras/Mangla_Mantra.webp";
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

const Mangal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Mangal Mantra" description="" keywords="">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Mangal Mantra</h1>
          <h2>Mangal Mantra: Meaning, Significance, and Benefits</h2>
          <p>
            Red colored Mars or mangal, as referred to in Hindu mythology and
            astrology is the 4th planet from the sun. The nearest outer planet
            from the earth, it is also the 7th largest planet in the solar
            system. Also called the red planet because of its red-orange
            appearance, its colour is very well fitting of its possessing
            characteristics. When it comes to the subject of Astrology, planet
            Mangal has been the most compelling celestial being due to its
            unbeatable vigour and high dominion upon the horoscope charts of
            mortal beings.
          </p>
          <p>
            Mangal or Mars is a masculine planet associated with masculinity and
            manly traits. It expresses the toughest shades of masculine
            attributes like strength of body, dominating attitude,
            assertiveness, bravery, valour, belief in self and full of energy.
            Mangal or planet Mars, one of the Navgrahas (nine planets) is
            understood to be Goddess Bhuma (Earth) and Lord Varaha's son. For
            the unversed, the Earth (Bhuma) is an incarnation of Goddess
            Lakshmi, and Lord Varaha is the third avatar of Lord Vishnu.
          </p>
          <p>
            A prayer to this planet is said to free one from debts, poverty and
            illness afflicting the skin. This graha bestows property and
            conveyance .Tuesdays are intended for the worship of Mangal who
            loves the chanting of Sama Veda. If one observes the fast on Tuesday
            for 21 times, the unlucky influence of Tuesday (Mangal) can be
            removed. The legend that depicts the influence of the worship of
            MANGAL goes as follows, and is narrated whenever a worship or
            offering is made to the deity:
          </p>
          <p>
            An old woman used to observe fast on every Tuesday and chanted
            Mangal Mantras to appease the Lord Mangal. Her son was named
            Mangaliya. Lord Mangal desired to test the piety of this old woman.
            He arrived at her home in the disguise of a Brahmin. He asked her "I
            am hungry and I shall prepare my own food but you must plaster the
            ground with cow-dung." The woman then explained to him that since it
            was a Tuesday; she does not plaster cow-dung on that day. Instead
            she offered to sprinkle water so the Brahmin could prepare his food.
            The Brahmin insisted on only cooking on a cow-dung plastered
            surface. The woman refused and said that she could do anything else
            except cow-dung plaster. The Brahmin said, "Let your son lie upside
            down, I shall cook on his back."
          </p>
          <p>
            After some thought, the woman agreed to this bound by her Dharma and
            called her son. The disguised Brahmin lit the furnace on his back
            and cooked his food. After cooking, the Brahmin asked the woman to
            call her son so that he could take the auspicious food. The woman,
            in grief, told him to not make such cruel jokes and since after
            cooking on his back, he would not have survived. The Brahmin
            explained and insisted that she call the son. When the woman called,
            the son came running. The Brahmin said, "Old woman, your fast is
            successful. With kindness, your mind is also full of devotion and
            faith. May you be ever happy." The deity (Mangal) in disguise
            disappeared. This story explains the benefits of Mangal worship and
            chanting.
          </p>
          {/*Image*/}
          <div className="image-container">
            <img src={image} alt="" className="image" />
          </div>
          <h3>Mangal Mantra: How do they help</h3>
          <p>
            Lord Mangal is known by many names such as Angaraka (the one who
            emits radiance like the colour red) Raktavarna (the one whose skin
            is red like blood), Bhauma, Lohitanga and Kuja. The colour red is
            associated with him, and hence, people donate red colored items on
            Tuesdays. Appeasing him helps one take the full benefit of the
            Mangal positions in their chart as well as fix the unfavourable
            ones. Angaraka is portrayed with four hands, carrying a trident,
            mace, lotus and a spear. Wearing red clothes, he often rides on a
            ram/goat.
          </p>
          <p>
            The masculine energy of Mars shows the projection of our vital
            energy and emotion, and it indicates our passion, motivation, and
            determination. A strong Mars will indicate these qualities of
            vitality, power, endurance, drive, courage etc. Also when Mars is
            well placed, it provides confidence, strong will power, insight and
            discrimination. However an ill placed Mars can cause violence,
            control, domination, or injury, accident, anger, war, criticism,
            delayed marriages, relationship struggles etc.
          </p>
          <h3>How to Recite Mangal Mantra</h3>
          <UnorderedList>
            <ListItem>
              Do your recitations on a Tuesday for most advantages. Start by
              taking a bath and wearing fresh and washed clothes.
            </ListItem>
            <ListItem>
              Sit yourself in a lotus position and have you Jaapa Mala with you
              for the chanting of your Mangal Mantra.
            </ListItem>
            <ListItem>
              Now chant the Mangal Mantra 108 times which is also one full round
              of the Jaap Maala.
            </ListItem>
            <ListItem>
              You must repeat the above process for at least 11 days. If you are
              doing the Mantra for a specific reason, ensure to do the Mantra
              for as long as your wish is granted. Generally it takes at least
              21 days for any wish to be granted by Mangal Graha.
            </ListItem>
            <ListItem>
              Donating things and doing charity on Tuesdays will help you get a
              better effect of the Mantra. Donate red things for example copper
              utensils, red lentils, jaggery and mounds.
            </ListItem>
            <ListItem>
              You can also fast on Tuesdays for yielding the maximum benefits of
              the Mangal Mantra. An appeased Lord Mangal will help you in your
              life and will remove your hurdles.
            </ListItem>
          </UnorderedList>
          <h3>Important Mangal Mantras</h3>
          <h3>1. Mangal Beej Mantra</h3>
          <p>
            Beej Mantras also understood as Vedic Seed Mantras and are the core
            mantras or sounds endowed with exuberant spiritual powers. They are
            popularly called the audible seed version of all the Deities majorly
            in Hinduism. Beejas compose part of several mantra chants and hence
            they are almost like the batteries of mantras. It is believed that
            when chanted with concentration Beej mantras can fulfil the desires
            of the devotees and act like a protective shield surrounding them.
          </p>
          <p>The Mangal Beej Mantra is:</p>
          <p className="red">|| ॐ क्राम क्रीम सः भौमाय नमः ||</p>
          <p>
            <strong>Meaning-</strong> I bow down with reverence to Bhauma
            (another name for Lord Mangal as the Son of Bhuma).
          </p>
          <h4>Benefits of chanting Mangal Beej Mantra</h4>
          <UnorderedList>
            <ListItem>
              If you feel your life is absolutely out of goals or you feel as if
              you have no passion towards achieving anything in life, this is
              the Mantra you should chant and worship upon.
            </ListItem>
            <ListItem>
              If you feel a lack of energy and often find yourself becoming lazy
              this Mangal Mantra as per astrology will help you find confidence
              and liveliness.
            </ListItem>
            <ListItem>
              When the planet Mangal is responsible is displeased, he is not
              going to bless you with the energy you want or deserve. In order
              to please him, you can chant the Mangal Beej Mantra.
            </ListItem>
            <ListItem>
              Mangal Beej Mantra chanters become efficiently strong in
              Mathematics, since this planet influences Maths.
            </ListItem>
            <ListItem>
              This Mangal Mantra can improve the relationship between siblings.
              If you have issues going on between you and your brother, or
              sister, you can have them settled by chanting the Mangal Beej
              Mantra.
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
                  <td>Best time to recite the Rudra mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times for 11 or 21 days</td>
                </tr>
                <tr>
                  <td>Who can recite the Rudra mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Mangal Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>2. Rinmochan Mangal Mantra</h3>
          <p>
            Also, if you are unable to pay your debts or loaded with debts,
            chanting Rinmochan Mangal Stotra can do wonders. It has been taken
            from the Skanda Purana and is dedicated to both Lord Mangal and The
            Monkey Lord Sri Hanuman. It is used for getting rid of debts and
            loans. If you are a person who loses control of their temper easily
            and gets annoyed you might understand the ill effects it brings in
            professional and personal lives. When you regularly recite the
            Rinmochan Mangal mantra, it will help you gain control of your
            temper and emotions.
          </p>
          <p>The Rinmochan Mangal Mantra is:</p>
          <p className="red">ॐ अंग अंगरकाय नमः ||</p>
          <p>
            <strong>Meaning-</strong> I bow down in reverence to Angarkaya, the
            one whose skin is red and another name for Lord Mangal.
          </p>
          <h4>Benefits of chanting Rinmochan Mangal Mantra</h4>
          <UnorderedList>
            <ListItem>
              Rinmochan Mangal Mantra is very helpful for gaining repayment for
              loans.
            </ListItem>
            <ListItem>
              If you have given someone money that you find is not coming back
              to you even when needed, chanting this mantra will help you gain
              it back.
            </ListItem>
            <ListItem>
              When under heavy debt, this Mangal Mantra will help you free
              yourself from the clutches of heavy loans.
            </ListItem>
            <ListItem>
              If you are ever in a situation where you feel like you are losing
              control or you have no control over your surroundings, chanting
              this Mangal Mantra will bring you great benefits and control.
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
                  <td>Best time to recite the Rinmochan Mangal Mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times for 11 or 21 days</td>
                </tr>
                <tr>
                  <td>Who can recite the Rinmochan Mangal Mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Mangal Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>3. Mangal Mantra</h4>
          <p>
            This Mantra helps in the enhancement of the power of Mars. It is
            meant to increase physical strength and power. If you wish to
            enhance your sporting abilities or are practising certain forms of
            martial arts. This Mantra will be very beneficial to you. It will
            absolutely elevate your psychomotor skills and make you feel some
            form of power coursing through you. It is also used to achieve
            influence over other people and helps in becoming more assertive in
            professional life.
          </p>
          <p>This Mangal Mantra is:</p>
          <p className="red">
            धरणीगर्भसम्भुतम विद्युत्कांति सम्प्रभम् | <br /> कुमाराम शक्तिहस्तम्
            च तम मंगलम प्रणाम्यम्ः | <br /> ॐ मंगलाय नमः ||
          </p>
          <p>
            <strong>Meaning-</strong> I am paying tribute to the omnipotent Mars
            by bending down in front of the great lord, who is the most
            auspicious icon of paradise, supporting and reinforcing all the
            creatures of almighty. He is glittering over the universe and
            spreading around the delightful beams of love and adorning the land
            with the twinkles of affection. He possesses the supreme power of
            paradise and exert potency in his hands. Om, I bow down to Mars with
            reverence.
          </p>
          <h4>Benefits of chanting Mangal Mantra</h4>
          <UnorderedList>
            <ListItem>This Mantra enhances physical power.</ListItem>
            <ListItem>
              If you are working on making yourself more physically competent
              and confident, chanting of this Mangal Mantra will yield great
              benefits to you.
            </ListItem>
            <ListItem>
              It also helps gain expertise in martial arts. With it, It will
              help you have more courage and bravery.
            </ListItem>
            <ListItem>
              If you are easily scared or are timid by nature, recitation of
              this Mangal Mantra will give you more strength to battle out
              challenges.
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
                  <td>Best time to recite the Mangal mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times for 11 or 21 days</td>
                </tr>
                <tr>
                  <td>Who can recite the Mangal mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Mangal Yantra</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall Benefits of Mangal Mantras</h3>
          <p>
            The recitation of Mangal mantra appeases the valorous Lord Mangal
            and helps in many ways:
          </p>
          <UnorderedList>
            <ListItem>
              Mangal Dosh can be removed or mitigated in the horoscope, when you
              recite the Mangal mantras.
            </ListItem>
            <ListItem>
              The person reciting the Mangal mantra gets happiness, and the
              recitation of the mantra removes obstacles from one's life.
            </ListItem>
            <ListItem>
              Mangal Mantra with its vigilance and valour liberates one from
              poverty, debt, and skin diseases.
            </ListItem>
            <ListItem>
              Reciting the Mangal Mantras blesses one with courage, energy, and
              pride.
            </ListItem>
            <ListItem>
              Mangal Mantra removes anger, lies, jealousy and blesses one with
              bravery.
            </ListItem>
            <ListItem>
              It helps you find the purpose of your life and also grants you
              power and strength to achieve that goal.
            </ListItem>
            <ListItem>
              To achieve the aims in life you must have passion. This is where
              Mars comes in as the planet of vigour and strength.
            </ListItem>
            <ListItem>
              Mangal Mantra in Vedic astrology helps in getting success in
              professions related to fire, energy, metals, initiative, weapons,
              construction, soldiers, police, medical, engineers and sports. It
              is ideal for you if you are in one of the mentioned fields.
            </ListItem>
            <ListItem>
              It helps in achieving influence over other people. If you are
              being side lined by people or are unable to face them head on,
              chanting the Mangal Mantras regularly will help you with this
              situation.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Mangal;

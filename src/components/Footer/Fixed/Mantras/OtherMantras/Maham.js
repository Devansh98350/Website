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
const MahaMrityunjay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Maha Mrityunjay Mantra">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Maha Mrityunjay Mantra</h1>
          <h2>Mahamrityunjay Mantra: Meaning, Significance and Benefits</h2>
          <p>
            Mahamrityunjay mantra is from the Rig Veda of the Hindu religion and
            is considered the most powerful shiv mantra. It is also called the
            Om Tryambakam Mantra. The purpose of this mantra is that it brings
            immortality, prevents premature death, and protects from difficult
            situations. Chanting this mantra leads to the elimination of fear,
            as it calms the soul and makes it strong. Regular chanting of the
            Mahamrityunjay Mantra leads to the performer feeling safe and
            secure. It is also believed that reciting the Mahamrityunjay mantra
            reduces physical ailments and keeps the body healthy.
          </p>
          <p>
            Mantras have a very significant role for every religion and have
            traveled the time to be used by the most modern people. These
            mantras bring peace and solace to the devotees and give them
            comfort. For Hinduism, mantras play a very important role as they
            are used in every religious ritual for big or small events.
          </p>
          <h3>Mahamrityunjay Mantra: Origin and history</h3>
          <p>
            Rishi Bhrigu and Marudmati were both devotees of Lord shiva. They
            did penance for a long time to lord shiva and prayed to have a son
            for years. Lord Shiva, impressed by their devotion granted their
            wish. But there was a condition, only through which they can have
            the son. Lord Shiva gave them two options, one was either they could
            have a son who was very intelligent but had a very very short
            lifespan, or they could have a son who would live a long life, but
            would be low intelligence. They chose the first option and were
            granted their wish, but informed them that he could only live for
            twelve years. They named their child, markandaya, who was everything
            they had a wish for. To give him a happy life, Rishi Bhrigu and his
            wife decided to keep the fact about his lifespan being short a
            secret from him. When markandeya’s 12th birthday came, his parents
            were devastated and he couldn’t fathom their misery. They then
            narrated the whole story of his fate and how he came to be.
          </p>
          <p>
            Hearing the whole story, he started his penance to Lord Shiva. When
            Yama came to take his soul, he escaped and ran and hugged the
            shivling. Seeing Markandaya’s devotion and love towards him, lord
            shiva appeared and ordered Yama to leave markandaya alone. He then
            gave Markandaya the special “Maha Mrityunjay mantra” which would
            help him live a long life. There are other versions of the story of
            how the “Maha Mrityunjay mantra” spread across mankind. It is said
            that Chandra dev was once cursed by the wasting disease by his
            father-in-law. He was cursed that each day he would lose his luster,
            and would eventually fade away. This is when Rishi Markandaya gave
            the Mahamrityunjay Mantra to Sati, Daksha’s daughter, and advised
            her to worship Lord Shiva, who is the god of death and creation, and
            chant this mantra. Ever since then, the Maha Mrityunjay mantra was
            known to the world and the day was noted as “shiv-ratri”.
          </p>
          <p>
            The Mrityunjay mantra is also termed as Rudra Mantra, referring to
            Shiva’s wrathful aspect, the Tryambaka Mantra, referring to Lord
            Shiva’s three eyes, and the Mrita-Sanjivini Mantra, which is a part
            of the ‘life-restoring’ offered to the sage Shukracharya. This
            mantra is mentioned three times in the Hindu Vedas, Rigveda
            (VII.59.12), Yajurveda (III.60), and Atharvaveda (XIV.1.17).
          </p>
          <h3>Mahamrityunjay Mantra: How do they help</h3>
          <p>
            Just like the Gayatri mantras, the Mahamrityunjay mantra is a very
            important and powerful mantra for Hindus. This strong mantra is
            dedicated to lord shiva, and chanting this religiously reduces the
            fear of illness and death. The existence of the mahamrityunjay
            mantra was first discovered through the Rig Veda and was brought to
            mankind by Rishi Markandeya.
          </p>
          <p>
            This mantra is believed to have very special powers which keep the
            mental health good and maintain emotional and physical balance.
            Chanting this mantra also grants a form of immortality, which in
            other words increases lifespan, and decreases the chances of
            untimely death.
          </p>
          <p>
            Many stories depict the story of the Mahamrityunjay mantra and how
            it came to be. There is the story of Rishi Markandeya and how he was
            destined to die at the age of twelve, but fate had other plans for
            him. There is also the popular tale of how Chandra dev was cursed by
            king Daksha, and how this mantra was chanted to save his life.
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

          <h3>The Mahamrityunjay mantra is:</h3>
          <p className="red">ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् |</p>
          <p>Om Tryambakam Yajamahe Sugandhim Pushti Vardhanam</p>

          <p className="red">उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥</p>
          <p>Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat</p>
          <p>
            <strong>Meaning - </strong>ॐ (Om): Lord Shiva in the form of Omkar
          </p>
          <p>त्र्यम्बकं (Tryambakam): You are beautiful with three eyes</p>
          <p>यजामहे (Yajamahe): We worship you, be pleased in our life</p>
          <p>सुगन्धिं (Sugandhim): We give you the fragrance of devotion</p>
          <p>पुष्टिवर्धनम् (Pushti Vardhanam): Increase happiness</p>
          <p>उर्वारुकमिव (Urvarukamiva): The way the fruit easily</p>
          <p>बन्धनान् (Bandhanath): Is freed from the bondage of the tree</p>
          <p>
            मृत्योर्मुक्षीय (Mrityormukshiya): Free us from the bondage of death
          </p>
          <p>मामृतात् (Mamritat): Give me the status of nectar</p>
          <p>
            “We worship Lord Shiva, the fragrant three-eyed One who nourishes
            all beings; For the sake of immortality, may He save me from death,
            just as the cucumber is freed from its creeper’s shackles.”
          </p>
          <p>
            The Maha Mrityunjay mantra is the most beloved mantra of lord shiva,
            who is the conqueror of death and is mentioned in the Rig Veda,
            which is the oldest Hindu text. It is mentioned in the Sukta 59 of
            the seventh mandala of the Rigveda.
          </p>

          <h3>How to chant the Mahamrityunjaya Mantra</h3>
          <UnorderedList>
            <ListItem>
              With a Rudraksha Japamala (rosary), chant the Lord Shiva’s Maha
              Mrityunjay mantra 108 times in a row. Offer flowers to the
              Shivling and perform abhishekam with milk.
            </ListItem>
            <ListItem>
              For best results, it is advised to chant the Maha Mrityunjaya
              mantra 1.25 lakh times. But it is not possible to do it in a day.
              So one should try to chant this mantra 1000 times a day. This way,
              in 125 days, one chants the mantra 1.25 lakh in total.
            </ListItem>
            <ListItem>
              The mantra should be chanted early in the morning. Maha Mrityunjay
              mantra should not be changed in the afternoon.
            </ListItem>
            <ListItem>
              Do Sankalp, by pouring water in a pot to evoke Lord Shiva’s
              blessings.
            </ListItem>
            <ListItem>
              Deepam, water, flowers, Bel leaves, fruits, and incense sticks are
              offered to lord shiva, and a havan is performed after the
              recitation of the Maha Mrityunjay Mantra. Although it is not
              always necessary to perform a havan each time after chanting the
              mantra.
            </ListItem>
            <ListItem>
              The performer of the mantra should make sure not to consume any
              non-vegetarian food.
            </ListItem>
          </UnorderedList>

          <h3>Overall benefits of chanting the Mahamrityunjaya mantra</h3>
          <UnorderedList>
            <ListItem>
              With the regular chanting of the Mrityunjaya Mantra, one wishes
              for the protection of their family. This mantra assures them of
              their good health and their family’s welfare. It provides a
              healthy mentality and emotional capacity.
            </ListItem>
            <ListItem>
              This mantra increases the longevity of life of the performer and
              reduces their fear of illness and death. It fills their life with
              happiness and prosperity.
            </ListItem>
            <ListItem>
              Along with keeping the mental and emotional health in balance, the
              Maha Mrityunjay mantra rejuvenates and nurtures the health of the
              performer, and reduces their stress by eliminating any kind of
              sickness and bad habits.
            </ListItem>
            <ListItem>
              Lord Shiva is known to be the most benevolent god of the Hindu
              religion, and pleasing him is very easy. One only needs to be
              completely devoted to him, and perform any ritual or mantra with
              purity in one heart.
            </ListItem>
            <ListItem>
              With the regular chanting of the Maha Mrityunjay Mantra, one gets
              the blessing of protection for both them and their entire family
              by lord Shiva himself. They receive protection from all kinds of
              negative energy and sudden death.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default MahaMrityunjay;

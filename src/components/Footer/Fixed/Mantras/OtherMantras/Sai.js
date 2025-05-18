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
const Sai = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Sai Mantra">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Sai Mantra</h1>
          <h2>Sai Mantra: Meaning, Significance and Benefits</h2>
          <p>
            Sai Baba, also lovingly called Shirdi sai baba, was a guru, a
            spiritual leader loved and followed by Hindus as well as Muslims
            throughout India. His popularity is immense and is also spread
            across places of America and the Caribbean. His devotees are
            distributed among the Hindu and well as the Muslim community, and
            are equally worshipped. The name sai baba is derived from the word
            Sai which is a Persian word meaning holy, and baba, a Hindu
            terminology for father. The actual history of Sai Baba is still a
            mystery and one cannot be sure where he is actually from.
          </p>
          <p>
            One theory, which is the most popular theory, describes that he was
            born a Hindi Brahmin. Later he was adopted by a Sufi fakir, also as
            a mendicant. He later claimed that he had a Hindu master or guru.
            After a lot of traveling and wandering, he arrived at Shirdi, which
            was in the western Indian state of Maharashtra. He was not welcomed
            in a friendly way when he first arrived at Shirdi and was
            disregarded by most. But after seeing his miracles, sai baba began
            to gain a following among the Hindus as well as Muslims. Everyone
            was mesmerized by the miracles that he performed and was appreciated
            when he healed the sick and unwell. His compelling teachings
            attracted every individual, no matter the religion, caste, or creed.
          </p>
          <p>
            He lived in one of the dooms of Shirdi, wore a turban, and kept a
            lamp burning all the time, a practice followed by the Sufis.
            Although he lived in the mosque, he named it dwarakamai, a Hindu
            religious name, and is believed to have known the Puranas, the
            Bhagavad Gita, and many Hindu religious books. Most of Sai Baba’s
            teachings took a contradictory turn and displayed his unlikeness of
            the rigid formalism of Hinduism and Islam and their rules. He had a
            special empathy toward the poor and the weak.
          </p>
          <h2>Ssi Baba Mantra: How do they help</h2>
          <p>
            Sai baba promised that his blessings will always be with his
            followers, and true to his words, those who pray with devotion to
            sai baba are never to see misfortunes in life. Sai always showers
            his blessings and kindness to his devotees. Faith is very important,
            because with faith comes courage and hope. With complete faith and
            trust in Sai baba, the devotee will fall under the care and
            protection of Sai baba, as he will take away all the misfortunes,
            misery, grief, woe, and trouble and make life filled with happiness
            and satisfaction.
          </p>
          <p>
            It is well known among everyone that sai baba is the guru of people
            and not religion. So anyone belonging to any religion, whether they
            are Hindu, Muslim, Sikh, or Christian can chant the Sai baba mantra
            for gaining the blessings and miracles of the great sage. All one
            needs is a strong devotion.
          </p>
          <h2>How to chant Sai mantra</h2>
          <UnorderedList>
            <ListItem>
              Every mantra has special powers to it and can act as a remedy to
              any problem. So, choose the mantra that you want to chant,
              according to your desire.
            </ListItem>
            <ListItem>
              There is no specification as to which rosary to choose to chant
              Sai Mantra. It could be rudraksha mala, crystal mala, Tulsi, or
              lotus mala. What matters is the faith one puts while chanting the
              mantras.
            </ListItem>
            <ListItem>
              If you have decided which mantra to chant, start the journey of
              chanting the mantra on a Thursday or Purnima since it is the day,
              the devotees of Sai Baba are dedicated to him and claim to connect
              to him the most this day.
            </ListItem>
            <ListItem>
              Although if someone wishes to start on a different day, they can
              very well do it without any worry as there are no strict rules to
              pray to sai baba.
            </ListItem>
            <ListItem>
              Just like most of the mantras, sai baba mantras should be chanted
              108 times a day. Once the desired outcome is achieved, reduce the
              number of chanting but don’t completely abandon the practice.
            </ListItem>
          </UnorderedList>
          <h3>Important Sai Mantras</h3>
          <h4>1. Sai mantra</h4>
          <p>
            Chand Bhai was the Patel of dhupkheda, a village of Aurangabad, a
            district of Maharashtra. He lost his horse once and searched for it
            everywhere but couldn’t find it. Feeling dejected and depressed and
            traveling for fourteen koss, he came across a Fakir, a poor man,
            sitting under a mango tree. The fakir wore a cap on his head, a
            Karni, and held a staff under his arm. He asked Chand Bhai what the
            matter was and why he had a saddle in his hands. Chand Bhai
            explained his situation. After listening to him, the fakir guided
            him to a Nala. Listening to the fakir, Chand Bhai investigated the
            Nala and ultimately found his horse. He realized that the fakir was
            not a simple man but a great saint, an avalia. He then asked him to
            go with him to his house and accept his hospitality. The next day,
            the fakir went with Chand Bhai and lived there for a while.
          </p>
          <p>
            A few days later there was a marriage ceremony at Chand bBhai’shouse
            and the marriage procession went to Shirdi. He invited the fakir to
            go with him as well. Upon arriving at Shirdi, it alighted at the
            foot of a Banyan tree, which was near Khandoba’s temple. It was also
            near Mhalsapati's farm, and he encountered the incident and welcomed
            the fakir with a warm welcome saying ‘YA Sai’ which means welcome
            sai. Ever since then he came to be known as sai baba by everyone.
          </p>
          <p>The Sai mantra is:</p>
          <p className="red">॥ ॐ साईं राम ॥</p>
          <p>Om sai ram</p>
          <p>
            <strong>Meaning-</strong>We bow down to Saibaba whose divinity is OM
            and Rama personified.
          </p>
          <h4>Benefits of chanting the Sai mantra</h4>
          <UnorderedList>
            <ListItem>
              Sai baba was the guru of every human, no matter their religion. He
              always motivated people to do charity. This mantra is one of the
              most common sai baba mantras.
            </ListItem>
            <ListItem>
              Sai baba brings people together. He always taught everyone to
              spread happiness everywhere. Sai Baba devotees use this mantra to
              greet each other.
            </ListItem>
            <ListItem>
              He was a fakir, who lived a life without the material comfort that
              everyone else craved. Teaching everyone to live a simple life was
              one of Sai Baba’s blessings. Chanting this mantra brings the
              blessings of Shirdi Sai Baba.
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
                  <td>Best time to recite the Sai mantra</td>
                  <td>Thursday,Purnima</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite Sai mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North or East</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>2. Sai Shiridi Mantra</h4>
          <p>
            There once occurred an epidemic of Cholera in Shirdi, and was taking
            the lives of many. Everyone sought Sai baba’s help and blessings,
            praying for him to give them reform from the illness. Listening to
            his followers, Sai baba got up, washed his hands and face, took some
            wheat, and started grinding them in a hand mill. He asked the
            village people to take the wheat that he created and throw them on
            the outskirts of the village. After following his directions, the
            true miracle was experienced by everyone as after the incident, the
            illness which was Cholera was gone from the village and everyone
            became healthy again. The true metaphor here was that sai baba was
            grinding the illness in his hand-mill, in disguise of some wheat.
            And when he asked the villagers to throw the wheat away, he was
            guiding them to throw the illness away from the village.
          </p>
          <p>
            <strong>The Sai Shirdi Mantra is:</strong>
          </p>
          <p className="red">
            ॐ शिरडी वासय विद्महे सचिन्द धीमहि तन्नो साईं प्रचोदयात् ||
          </p>
          <p>
            Om Shirdi Vasaya Vidamahe Sachindananda Dhimahi tanno Sai
            Prachodayat
          </p>

          <p>
            <strong>Meaning-</strong>Om! We meditate on Sai who dwells in Shirdi
            embodying the inexplicable divine bliss. May he be my spiritual
            guide and illuminate my intelligence”
          </p>
          <h4>Benefits of chanting Sai Shirdi Mantra</h4>
          <UnorderedList>
            <ListItem>
              One of the stronger sai baba mantras, chanting this mantra for
              success makes the performer undefeated in all the areas of life.
            </ListItem>
            <ListItem>
              Sai baba showed many miracles throughout his life with the people
              of Shirdi. Regular chanting of this mantra makes the person
              successful in all the ventures of life.
            </ListItem>
            <ListItem>
              This mantra works magically when someone is trying to start a new
              business venture as it increases the ability of the performer to
              tackle any situation with confidence.
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
                  <td>Best time to recite the sai Shiridi mantra</td>
                  <td>Thursday,Purnima</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite Sai Shiridi mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North or east</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>3. Sai Sachidanand Mantra</h4>
          <p>
            Sai baba always kept some lamps burning in Dwarka Mai. It is
            believed that he followed the practice done by Sufis. He went to
            shopkeepers and asked them to give him some oil. This incident was
            during a time when not everyone believed said to be the great saint
            and thought of him as a mad fakir. They used to give him some oil
            just for the sake of it. But after a while, they became aggravated
            and refused to give Sai any oil at all. Sai baba returned Dwarka Mai
            with his empty oil tin dangling from his hand. Then he filled the
            tin can with some water and drank it to appease the god within him.
            After that, he filled the lamps with water and lit them. The lamps,
            to everyone’s surprise, lit up like any other oil lamp. This further
            solidified Sai baba's reputation and established him as a great
            saint.
          </p>
          <p>
            <strong>The Sai Sachidanand Mantra is:</strong>
          </p>
          <p className="red">
            || ॐ सच्चिदानंद सद्गुरु साईनाथ महाराज की जय अनंत कोटि ब्रह्माण्ड
            नायक राजाधिराज साईं बाबा की जय ||
          </p>
          <p>
            Om Sachidanand SadGuru SaiNath Maharaj Ki Jai Ananat koti Brahmaand
            Nayak RajaDhiraaj Sai Baba Ki Jai
          </p>

          <p>
            <strong>Meaning-</strong>Om! We bow down to Sai who is the truth,
            consciousness and bliss! May he who is eternally blissful be always
            victorious
          </p>
          <h4>Benefits of chanting Sai Sachidanand Mantra</h4>
          <UnorderedList>
            <ListItem>
              Baba always taught everyone to maintain harmony and unity among
              the groups. He believed that everyone on earth has one lord, and
              everyone should worship him.
            </ListItem>
            <ListItem>
              Being detached from any material and worldly things is what gives
              a person extreme happiness. This is what Sai taught his followers.
            </ListItem>
            <ListItem>
              Chanting this mantra is extremely powerful when it comes to
              leaving the material comfort behind, and stepping toward a simple
              life.
            </ListItem>
            <ListItem>
              He taught everyone to help others in need because not everything
              one has can forever be theirs. No one takes their property with
              them when they die and leave their human body. If someone comes to
              your door, help them to the best of your abilities.
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
                  <td>Best time to recite the sai Sachidanand mantra</td>
                  <td>Thursday,Purnima</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite Sai Sachidanand mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North or east</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>4. Sadguru Sai Mantra</h4>
          <p>
            The story of Rao bahadur moreshwar fardhan is also a well-known one.
            Once he visited Shirdi with his wife to get the darshan of sai baba.
            When they got up to leave, it started to heavily rain, with thunder
            and storms. This made Rao Bahadur and his wife very worried as they
            looked around in disdain. Upon seeing his guests despair, sai baba
            prayed “oh Allah, let the rain cease. My children are going home.
            Let them go peacefully”. After this, the rain slowly started to
            reduce and the thunderstorm stopped completely. This made the
            pradhans thank sai baba once again as they set for their journey.
          </p>
          <p>
            <strong>The Sadguru Sai mantra is:</strong>
          </p>
          <p className="red">
            ॐ साईं नमो नमः श्री साईं नमो नमः जय जय जय साईं नमो नमः सदगुरु साईं
            नमो नमः ||
          </p>
          <p>
            Om Sai Namo Namah Shree Sai Namo Namah Jai Jai Sai Namo Namah
            Sadguru Sai namo Namah
          </p>

          <p>
            <strong>Meaning-</strong>We bow down to sai who is the master of the
            surrendered again and again
          </p>
          <h4>Benefits of chanting Sadguru Sai mantra</h4>
          <UnorderedList>
            <ListItem>
              Shirdi sai baba mantras are very easy to use and follow. One
              simply needs devotion and faith in him to achieve what one
              desires.
            </ListItem>
            <ListItem>
              There are very few to no strict rules or laws to chant the Sai
              baba mantra. Sai baba was a simple man. And he urged everyone to
              live a life similar to him, as that would bring true happiness.
              Chanting his mantra too is fairly easy.
            </ListItem>
            <ListItem>
              These mantras create happiness and joy within the performer and
              make them comfortable with who they are.
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
                  <td>Best time to chant Sai Sadguru mantra</td>
                  <td>Thursday,Purnima</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite Sadguru Sai mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North or east</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Other Powerful Sai Mantras</h3>
          <h4>1. Sai Aparajita Mantra</h4>
          <p>
            During the time of harvesting in Shirdi, everyone had collected the
            food and grains and stored them in their yards. It was a very hot
            summer and the air was hot. One afternoon, Sai Baba summoned Kondaji
            Satar and informed him that his field was burning. Kondaji, upon
            hearing this, ran to his field and started frantically searching for
            the fire. But he couldn’t find any. He then returned to sai and
            informed him that there was no fire to be found. Sai Baba then told
            him to go back and look for it carefully. And just like he said,
            there was a small fire that had caught a pile of harvested corn.
            Because of the warm weather, the fire was slowly spreading. Kondaji,
            along with other villagers went to sai baba and asked for help. Sai
            Baba then went near the fire and sprinkled some water on it. After a
            while, the fire started to subdue and was finally extinguished
            completely. No one knows how Sai Baba managed to put out the fire,
            or how he even got to know about the fire in the first place. It all
            adds to the mystical powers of the great saint Sai Baba.
          </p>
          <p>
            <strong>The Sai Aparajit mantra is:</strong>
          </p>
          <p className="red">श्री साईँ अपराजिताय नमः ||</p>
          <p>Shri Sai Aparajitaya Namah</p>
          <h4>Benefits of chanting Sai Aparajit mantra</h4>
          <UnorderedList>
            <ListItem>
              One finds their soul and inner strength when they devote
              themselves to Sai baba. If someone is facing trouble finding a
              decent job, chanting this mantra can help them immensely to find
              the right path.
            </ListItem>
            <ListItem>
              Have faith in him. To completely trust him and his abilities is
              very important when someone is trying to build a connection with
              Shirdi Sai Baba. Chanting this mantra will help the devotees build
              trust.
            </ListItem>
            <ListItem>
              This sai baba mantra asked the saint himself to guide the
              performer in every aspect of their life. Chanting this mantra asks
              sai baba to show the right way to happiness in life.
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
                  <td>Best time to chant Sai mantra</td>
                  <td>Thursday,Purnima</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite Sai mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North or east</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>2. Sai Leela Mantra</h4>
          <p>
            There was an incident when the daughter of a poor man named Babu
            Karwandikar had fallen into a well. The news spread across the
            village that the child had drowned and everyone rushed to the place
            of the accident to possibly help the child and evaluate the
            situation. When they arrived, they witnessed that the child was
            floating just above the water, as if she was being held by an
            invisible hand, and was pulled out safely. The child was dear to Sai
            Baba, and she called herself to be Sai’s sister. After the incident,
            everyone took her at her word. “It’s all baba’s Leela” they would
            claim philosophically.
          </p>
          <p>
            <strong>The Sai Leela mantra is:</strong>
          </p>
          <p className="red">|| ह्रीम क्लीम श्रीम ओम हम फट ||</p>
          <p>Hreem Kleem Shreem Aim Hum Phat</p>
          <h4>Benefits of chanting Sai Leela mantra</h4>
          <UnorderedList>
            <ListItem>
              The mantras of sai baba have special powers. They can easily make
              the performer confident and sure of themselves.
            </ListItem>
            <ListItem>
              One of the benefits of chanting these mantras is that they bring
              positive energy to the lives of the devotees, guiding them in the
              right direction
            </ListItem>
            <ListItem>
              With the help of this mantra, one can easily tackle all the
              problems and obstacles in life without any worry.
            </ListItem>
            <ListItem>
              This mantra shapes the life of the performer in a new and better
              direction and gives them a positive direction.
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
                  <td>Best time to chant Sai Leela mantra</td>
                  <td>Thursday,Purnima</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite Sai Leela mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North or east</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall benefits of chanting the Sai mantras</h3>
          <UnorderedList>
            <ListItem>
              Sai baba always taught everyone to maintain harmony and unity
              among themselves no matter the religious group or caste or status
              they belonged to. Chanting the sai baba mantra teaches the
              devotees the true meaning of life.
            </ListItem>
            <ListItem>
              There are very few to no strict rules or laws to chant the Sai
              baba mantra. Sai baba was a simple man. And he urged everyone to
              live a life similar to him, as that would bring true happiness.
              Chanting his mantra too is fairly easy.
            </ListItem>
            <ListItem>
              One of the benefits of chanting these mantras is that they bring
              positive energy to the lives of the devotees, guiding them in the
              right direction.
            </ListItem>
            <ListItem>
              Sai baba brings people together. He always taught everyone to
              spread happiness everywhere. Sai Baba devotees use this mantra to
              greet each other.
            </ListItem>
            <ListItem>
              He was a fakir, who lived a life without the material comfort that
              everyone else craved. Teaching everyone to live a simple life was
              one of Sai Baba’s blessings. Chanting this mantra brings the
              blessings of Shirdi Sai Baba.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Sai;

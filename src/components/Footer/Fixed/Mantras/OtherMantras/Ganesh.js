import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../../../Layout/Layout";
import Breadcrumbs from "../../../../Breadcrumb";
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
const Ganesh = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Ganesh Mantra">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Ganesh Mantra</h1>
          <h2>Ganesh Mantra: Meaning, Significance and Benefits</h2>
          <p>
            Worshiped before any god in the Hindu religion, Lord Ganesh is the
            god of wisdom and knowledge, and worshiping him will aid in removing
            any obstacles with ease. Ganpati Bappa, as identified by a large
            number of people, is the patron of art and science, and is believed
            to be the most worshiped god of the Hindu religion. It is
            recommended to honor Lord Ganesh before starting any rituals
            involving other gods as it was a blessing given to him by Lord
            Shiva, seeing his love for his mother Parvati.
          </p>
          <p>
            According to Hinduism, Shree Ganesh indicates the beginning of
            everything good and positive. Once, Mata Parvati was alone and
            wanted someone to guard the entrance to their home. She created lord
            Ganesh with her own hands and powers. As she was inside, lord Shiva
            returned and had his encounter with Lord Ganesh. Since maa Parvati
            asked lord Ganesh not to let anyone in while she was inside, Lord
            Ganesh did not let lord Shiva in, and he didn’t know his actual
            identity. Getting angry at Ganesha, lord Shiva decapitated his head.
            When the news reached Devi Parvati, she got enraged and threatened
            to destroy the world if her son was not returned to her. But, since
            the decapitated head could not be used to bring Ganesha back, the
            head of an elephant was used to bring back life to lord Ganesh’s
            body. After that, lord Ganesh was also bestowed with the name,
            Gajanand.
          </p>
          <p>
            Lord Ganesh is the son of Mahadev and Devi Parvati, and the brother
            of Lord Kartikeya, goddess Lakshmi, and goddess Saraswati. Lord
            Ganesha is also the personification of the three virtues of the
            Hindu religion, Buddhi, siddhi, and Riddhi, which means knowledge,
            spirituality, and prosperity. It is believed that Lord Ganesh
            himself is the incarnation of Buddhi, and the other two
            personifications, Siddhi and Riddhi are considered goddesses. These
            two goddesses are known to be the consorts of Lord Ganesh.
          </p>
          <p>
            There is a lot of speculation regarding the marital status of lord
            Ganesh in many of the Hindu scriptures- Mudgala Purana and Shiv
            Purana, where the marital life of lord Ganesh has been talked about.
            According to Shiva Purana, which focuses on lord Shiva, it is
            mentioned that Lord Ganesh has two consorts, Riddhi and Siddhi, and
            through them, he received two sons, Shubh, from goddess Riddhi, and
            Labh, from goddess siddhi.
          </p>
          <h2>Ganesh mantras: How do they help</h2>
          <p>
            Just like any mantras dedicated to other gods, Ganesh mantras hold a
            lot of importance and every word uttered during the chanting of
            Ganesh mantras has immense power. With complete faith and devotion,
            if the mantras are recited, it is believed that the person is sure
            to be blessed in every aspect of life. Ganesh mantras are very
            useful as it helps to remove every obstacle and brings positive
            results.
          </p>
          <p>
            Lord Ganesh is the absolute power behind a successful result and is
            widely known as Ganpati. The meaning of “Gan” is group and the
            universe is made up of a group of energies and atoms. If there is no
            one to keep all these groups in check and maintain the coexistence
            of these different groups, there will be utter chaos and
            destruction. Lord Ganesha is very important as he is in charge of
            all these groups and is responsible for maintaining the peace within
            these groups. Being the supreme lord, lord Ganesh brings order to
            the universe.
          </p>
          <h2>How to chant the Ganesh mantra</h2>
          <UnorderedList>
            <ListItem>
              To get the complete benefit of chanting Ganesh mantras, one should
              maintain some rules and regulations to start their journey in a
              proper way.
            </ListItem>
            <ListItem>
              Before starting the recitation, one should begin with a clean body
              and soul. Start with taking a bath and wearing clean clothes.
            </ListItem>
            <ListItem>
              Open up the soul and mind completely to Lord Ganesh and let him
              settle in the consciousness.
            </ListItem>
            <ListItem>
              Let go of all the worries and negative thoughts while chanting,
              and sink within the energy that is being created while uttering
              all the words. A form of the force field is created when the
              mantra is being spoken. Let it take control of your body and soul.
            </ListItem>
            <ListItem>
              At the beginning of starting any ritual of worshiping lord Ganesh,
              start with chanting the mantra dedicated to a specific cause.
            </ListItem>
          </UnorderedList>
          <h3>Important Ganesh mantras</h3>
          <h4>1. Vakratunda ganesh mantra</h4>
          <p>
            There are various ways in which Lord Ganesha is represented, with
            various patterns changing over time. Every portrayal of his image
            has a story behind it and every story holds deep meaning. Lord
            Ganesha is worshiped in different forms, such as a little boy
            playing with his brother and family, him sitting on the lap of his
            father or mother, in the form of dancing, standing with his hand in
            the position of giving blessings, or heroically taking down demons.
          </p>
          <p>
            <strong>The Vakratunda Ganesh Mantra is:</strong>
          </p>
          <p className="red">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।</p>
          <p>Vakratunda Maha-Kaaya Surya-Kotti Samaprabha</p>
          <p className="red">निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥</p>
          <p>Nirvighnam Kuru Me Deva Sarva-Kaaryeshu Sarvadaa</p>
          <p>
            <strong>Meaning-</strong>Oh god with curved trunk, large body whose
            aura is like light of crores of sun, Please make my entire work
            obstacle free, forever.
          </p>
          <h4>Benefits of chanting the Vakratunda Ganesh mantra</h4>
          <UnorderedList>
            <ListItem>
              Chanting the Vakratunda Mantra is very beneficial as it is the
              most effective mantra when it comes to removing obstacles.
            </ListItem>
            <ListItem>
              Regular chanting of this mantra opens up all kinds of ways and
              opportunities, that might have been hidden for a while because of
              some certain situations,
            </ListItem>
            <ListItem>
              Lord Ganesha is known to be the lord of wisdom and knowledge.
              Hence reciting this mantra religiously with devotion provides the
              performer with a lot of knowledge and helps them understand the
              secrets of the universe.
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
                  <td>Best time to chant Vakratunda Ganesh mantra</td>
                  <td>Ganesh Chaturthi, early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite Vakratunda Ganesh mantra</td>
                  <td> Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td> Idol of Lord Ganesh, North or East</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>2. Ganesh gayatri mantra</h4>
          <p>
            Ganesh mantras are very beneficial when one is attempting to destroy
            fear. Fear is a part of being human, and there are many things in
            life that are influenced by fear. But one should not let themselves
            get ruled by fear and try their best to overcome it. The regular
            chanting of the Ganesh mantra with devotion can help greatly to
            defeat all kinds of fear, be it natural or supernatural. By
            continuous chanting of the Ganesh mantras, a kind of force field is
            created around the performer that protects them from everything that
            they fear. Ganesh Gayatri mantras is a very good mantra for regular
            chanting as it brings positivity.
          </p>
          <p>
            <strong>The Ganesh Gayatri Mantra is:</strong>
          </p>
          <p className="red">
            ॐ एकदन्ताय विद्धमहे, वक्रतुण्डाय धीमहि, तन्नो दन्ति प्रचोदयात्॥
          </p>
          <p>
            Aum Ekadantaya Viddhamahe, Vakratundaya Dhimahi, Tanno Danti
            Prachodayat
          </p>
          <p>
            <strong>Meaning-</strong>We pray to the one with the single-tusked
            elephant tooth who is omnipresent. We meditate upon and pray for
            greater intellect to the Lord with the curved, elephant-shaped
            trunk. We bow before the one with the single-tusked elephant tooth
            to illuminate our minds with wisdom.
          </p>
          <h4>Benefits of chanting the Ganesh Gayatri Mantra</h4>
          <UnorderedList>
            <ListItem>
              Chanting the Ganesh Gayatri mantra with a clean soul helps to ease
              the tension and stress.
            </ListItem>
            <ListItem>
              It is also recommended to chant this mantra regularly to those who
              are suffering from a long term illness, as it will calm their mind
              and keep their body healthy.
            </ListItem>
            <ListItem>
              With this mantra, one can expect their fear of anything, natural
              or supernatural, getting reduced and providing the performer all
              kinds of peace and calm.
            </ListItem>
            <ListItem>
              Ganesh Gayatri mantra is also widely used to evoke wealth and
              material benefits, as lord ganesha is responsible for the success
              of a being.
            </ListItem>
            <ListItem>
              Chanting this mantra also encourages modesty, righteousness and
              wisdom.
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
                  <td>Best time to recite the Ganesh Gayatri mantra</td>
                  <td>Wednesday, Ganesh Chaturthi</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Ganesh Gayatri mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of lord Ganesh, North or East</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>3. Ganesh mantra</h4>
          <p>
            The appearance of Lord Ganesha varies in many ways, but according to
            popular belief, Lord Ganesha can be seen in a mystical appearance,
            with the head of an elephant with the trunk, resting on a human
            body, and belly protruding out, and four arms. Each arm has
            different functions. The upper hands hold a noose (Pasha) and ax
            (goad). The bottom hands have different roles too. One of the hands
            is making the Abhay Mudra, while the other hand is holding a bowl
            full of modak. Lord Ganesh is shown to be accompanied by his vahan
            mushak raj, or the mouse lord.
          </p>
          <p>
            <strong>The Ganesh Mantra is:</strong>
          </p>
          <p className="red">ॐ गं गणपतये नमः |</p>
          <p>Om Gan Ganapataye Namah</p>
          <p>
            <strong>Meaning-</strong>It means bowing down to the Almighty
            Ganpati with all our existence and accepting all his great qualities
            in our self being.
          </p>
          <h4>Benefits of chanting the Ganesh Mantra</h4>
          <UnorderedList>
            <ListItem>
              Lord Ganesha is the god of positive beginnings, and is worshiped
              before starting the rituals of worshiping any other hindu god and
              goddesses.
            </ListItem>
            <ListItem>
              Before starting a new venture, it is highly recommended to start
              with chanting this mantra with devotion, as it will remove any
              negative energy.
            </ListItem>
            <ListItem>
              The continuous recitation of this mantra while doing any
              professional work is very beneficial as it wards off all the evil
              energies that could be responsible for failure.
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
                  <td>Best time to chant the Regular Ganesh Mantra</td>
                  <td>Early morning, before starting a puja</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Regular Ganesh Mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of lord Ganesh, North or East</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>4. Rinn Harta Mantra</h4>
          <p>
            The importance of mantras has been accepted by everyone for
            thousands of years, whether by the believers or the nonbelievers.
            Mantras play a very significant role in every ritual of the Hindu
            religion and can be heard in every Hindu home and temple,
            accompanied by the sound of bells and the sweet smell of incense and
            flowers. The soulful chanting of the mantras, stops everyone and
            binds them to pay respect to the gods and goddesses. The peace that
            is emitted while listening to mantras being recited is unmatched,
            and people all around the world have started to recognize their
            power.
          </p>
          <p>
            <strong>The Rinn Harta Mantra is:</strong>
          </p>
          <p className="red">ॐ गणेश ऋणं छिन्धि वरेण्यं हुं नमः फट्॥</p>
          <p>Om Ganesh Rinnam Chhindhi Varenyam Hoong Namaah Phutt</p>

          <p>
            <strong>Meaning-</strong>‘Rinn Harta’ is another name for Lord
            Ganesha, and the English meaning is ‘The giver of wealth.’ In Hindi,
            the meaning of Rinn harta or Rhinaharta is derived from the words
            ‘Rinn’ or ‘Rinnam’ meaning ‘debt’ and ‘harta’ meaning ‘remover.’
          </p>
          <h4>Benefits of chanting the Rinn Harta Mantra</h4>
          <UnorderedList>
            <ListItem>
              It is no mystery that lord Ganesha is very generous when it comes
              to providing wealth and wisdom. Worshiping lord Ganesh will make
              the person a very successful man in no time.
            </ListItem>
            <ListItem>
              If one is struggling financially, and finds it very difficult to
              make money and to save it, regular recitation of the Rinn Harta
              mantra will remove all difficulties, and benefit the person in
              great ways.
            </ListItem>
            <ListItem>
              True to its name, this mantra is great when someone is facing
              problems in terms of loan and debts. ‘Rinn’ itself means debt, and
              ‘Harta’ means remover. This means chanting this mantra can help
              the person to become debt free.
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
                  <td>Best time to chant the Rinn Harta Mantra</td>
                  <td>Early morning after bath</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times or 125000 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Rinn Harta Mantra</td>
                  <td>Everyone, those struggling with debts</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of lord Ganesh, the direction west</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>5. Siddhi Vinayak mantra</h4>
          <p>
            Most mantras that invoke lord Ganesh are called the siddhi mantra,
            which means that they are the personification of knowledge and
            wisdom. By chanting the siddhi mantra, one evokes the feeling of
            tranquility and peace. Siddhi mantras are very beneficial when it
            comes to removing negative energy and giving the soul ultimate
            satisfaction. Each Ganesh mantras are extremely powerful and full of
            energy. Worshiping Lord Ganesh any day doesn’t harm anyone, and is
            very beneficial, but during the Ganesh Chaturthi and Ganesh Jayanti,
            which is the birth anniversary of Lord Ganesh, if lord Ganesh is
            worshiped, it is extremely beneficial.
          </p>
          <p>
            <strong>The Siddhi Vinayak Mantra is:</strong>
          </p>
          <p className="red">
            ॐ नमो सिद्धि विनायकाय सर्व कार्य कर्त्रे सर्व विघ्न प्रशमनाय सर्व
            राज्य वश्यकरणाय सर्वजन सर्वस्त्री पुरुष आकर्षणाय श्रीं ॐ स्वाहा ॥
          </p>
          <p>
            Om Namo Siddhi Vinayakaya Sarva kaarya kartrey Sarva vighna
            prashamnay Sarvarjaya Vashyakarnaya Sarvajan Sarvastree Purush
            Aakarshanaya Shreeng Om Swaha.
          </p>
          <p>
            <strong>Meaning - </strong>O Lord of Wisdom and Happiness, only you
            make every endeavor and everything possible; You are the remover of
            all obstacles and you have enchanted every being in the Universe,
            you are the Lord of all women and all men, amen.
          </p>
          <h4>Benefits of chanting the Siddhi Vinayak Mantra</h4>
          <UnorderedList>
            <ListItem>
              Siddhi is believed to be a goddess and a consort of lord Ganesh.
              The sanskrit word means achievements. So chanting this mantra will
              help the person to achieve whatever they desire.
            </ListItem>
            <ListItem>
              With the regular chanting of this mantra will make the person see
              the right path and follow the same.
            </ListItem>
            <ListItem>
              This mantra makes the person spiritually enlightened and opens up
              many doors of opportunity. They can gain material satisfaction and
              social influence.
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
                  <td>Best time to chant the Siddhi Vinayak Mantra</td>
                  <td>Early morning after bath</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times or 125000 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Siddhi Vinayak Mantra</td>
                  <td>Everyone, those starting a new venture</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North or East, idol of lord Ganesh</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>6. The Shaktivinayak Mantra</h4>
          <p>
            The Ganesh Chaturthi is an annual festival that is held in many
            parts of India, but especially in Maharashtra and Telangana, where
            lord Ganesh is celebrated for ten whole days. It starts from the
            beginning of the Ganesh Chaturthi and ends at the end of the
            fourteenth day of the fortnight (Anant Chaturdashi). The auspicious
            time falls especially during late august or early September.
            Celebrations are traditionally held on the fourth day of the first
            fortnight (Shukla Chaturthi) in the month of Bhadrapada in the Hindu
            calendar.
          </p>
          <p>
            It is a very special occasion as, during this auspicious time,
            worshiping lord Ganesh can be extremely beneficial and bring the
            worshiper very good fortune and success. People celebrate this
            festival in all their living spaces and even their offices. Similar
            to Durga puja in Bengal, Ganesh Chaturthi is celebrated likewise,
            with extraordinary idols of lord Ganesh put on display in the
            pandals, and in homes, an appropriately sized idol of Lord Ganesha
            is worshiped. During the end of the Ganesh Chaturthi, the idols of
            Lord Ganesh are then submerged in the water, with the hope of
            celebrating the same next year.
          </p>
          <p>
            <strong>The Shakti Vinayak Mantra is:</strong>
          </p>
          <p className="red">|| ॐ ह्रींग ग्रींग ह्रींग ||</p>
          <p>Om Hreeng Greeng Hreeng</p>
          <p>
            <strong>Meaning - </strong>In Hindi, Shakti means power, and Vinayak
            means ‘the Supreme master.’
          </p>
          <h4>Benefits of chanting The Shaktivinayak Mantra</h4>
          <UnorderedList>
            <ListItem>
              Regular recitation of the shaktivinayal mantra will help the
              performer in many ways, including their professional life.
            </ListItem>
            <ListItem>
              Chanting this mantra will make the person very successful and
              remove all the obstacles that have been the cause of trouble all
              this time.
            </ListItem>
            <ListItem>
              This mantra is also very beneficial to keep the health in good
              position, and since reciting any ganesh mantra removes negative
              energy from around the person, it will keep the person's mind and
              body peaceful and rested, resulting in a healthy lifestyle.
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
                  <td>Best time to chant the Shaktivinayak Mantra</td>
                  <td>Early morning after bath</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Shaktivinayak Mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>North or East. Idol of lord Ganesh</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>7. Ganesh Mool Mantra</h4>
          <p>
            Magha Shukla Chaturthi, also popularly known as Ganesh Jayanti is
            the festival to celebrate the birth anniversary of Lord Ganesha, who
            is the god of wisdom and knowledge. Similar to Ganesh Chaturthi,
            this festival is equally celebrated in a grand way mostly around
            Maharashtra and goa during the Shukla Paksha Chaturthi day (fourth
            day of the bright fortnight or the waxing moon) in the month of
            Maagha (January/February) of every year. The iconic conical shape of
            lord Ganesha is made out of turmeric and sindoor and worshiped
            following the mantras.
          </p>
          <p>
            <strong>The Ganesh Mool Mantra is:</strong>
          </p>
          <p className="red">
            ॐ श्रीं ह्रीं क्लीं ग्लौं गं गणपतये वर वरद सर्वजनं मे वशमानय स्वाहा॥
          </p>
          <p>
            Om Shreem Hreem Kleem Glaum Gam Ganapataye Vara Varad Sarvajanjanmay
            Vashamanaye Swaha
          </p>
          <p className="red">
            एकदन्ताय विद्‌महे, वक्रतुण्डाय धीमहि, तन्नो दन्ती प्रचोदयात् ॥
          </p>
          <p>Ekadantaya Vidmahe Vakratundaya Dhimahi Tanno Danti Prachodayat</p>
          <p className="red">ॐ शान्तिः शान्तिः शान्तिः ॥</p>
          <p>Om Shanti Shanti Shanti</p>
          <p>
            <strong>Meaning - </strong>The Ganesh Mool mantra is the most
            succinct and powerful Lord Ganesha mantra of all. This mantra
            celebrates the unique and divine form of God Ganpati (Ganesha) and
            his powers. The Ganesha Mool (root) Mantra, beginning with the
            incantation of ‘Om’ evokes positivity, purity, energy and the
            presence of Lord Ganpati in one’s life.
          </p>
          <h4>Benefits of chanting the Ganesh Mool Mantra</h4>
          <UnorderedList>
            <ListItem>
              One of the most effective mantras, the Ganesh Mool mantra is very
              powerful and when it is chanted, it creates a force field of
              positive energy around the performer.
            </ListItem>
            <ListItem>
              The way the words are uttered and the way it sounds when recited,
              it puts the listener in a form of trance
            </ListItem>
            <ListItem>
              The Ganesh Mool mantra is widely used by the purohits during pujas
              and yagnas to please lord ganesh.
            </ListItem>
            <ListItem>
              This mantra, when recited with complete trust and devotion, will
              bring the performer success and prosperity.
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
                  <td>Best time to chant Ganesh Mool Mantra</td>
                  <td>
                    Early morning, Ganesh Chaturthi, during puja and yagyas
                  </td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Ganesh Mool Mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of lord Ganesh. North or East</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Namavali Ganesh Mantras</h3>
          <p>
            Lord Ganesha is the god of knowledge and wisdom. Worshiping him
            brings success and fulfillment and there are many mantras dedicated
            to him to evoke his blessings. These Ganesh mantras are also known
            as the Siddhi mantra, which means it has complete perfection. Lord
            Ganesha is the most popular god of the Hindu religion and worshiping
            him will ward off any trial, and will guarantee prosperity. Lord
            Ganesha is called by different names, and each word of each name has
            a specific meaning.
          </p>
          <h4>1. Ganadhyakshaya Mantra</h4>
          <p className="red">ॐ गणध्याक्षय नमः।</p>
          <p>Om Ganadhyakshaya Namah</p>
          <p>
            <strong>Meaning - </strong>Ganadhyaksay – Gana means ‘a group’ and
            ‘Adhyaksh’ means ‘one who is leader of the group.
          </p>
          <h4>Benefits of chanting Ganadhyakshaya mantra</h4>
          <UnorderedList>
            <ListItem>
              One can use this Mantra to ensure the well being of a particular
              state or a city.
            </ListItem>
            <ListItem>
              One can even chant this Mantra to improve or build upon one’s
              personal leadership characters.
            </ListItem>
          </UnorderedList>
          <h4>2. Gajananaya Mantra</h4>
          <p className="red">ॐ गजाननाय नमः।</p>
          <p>Om Ganadhyakshaya Namah</p>
          <p>
            <strong>Meaning - </strong>Gajanan here means One who carries the
            elephant head. In Sanskrit, gaj means elephant. This Mantra says
            that if God can carry the elephant’s head to survive and fulfill his
            duties, even we should put aside our ego and live our lives
            dutifully.
          </p>
          <h4>Benefits of chanting Gajananaya mantra</h4>
          <UnorderedList>
            <ListItem>
              This Mantra motivates such humble living and chanting of it helps
              one attain their inner peace and consciousness.
            </ListItem>
            <ListItem>
              Chanting this mantra will reduce anxiety and keep the soul calm.
            </ListItem>
          </UnorderedList>
          <h4>3. Vignanaashnay Mantra</h4>
          <p className="red">ॐ विघ्ननाशाय नमः।</p>
          <p>Om Vighnanashaya Namah</p>
          <p>
            <strong>Meaning - </strong>Ganpati is also worshiped to remove
            obstacles from one’s life. Here vigna means obstacles and nashnay
            means One who removes obstacles.
          </p>
          <h4>Benefits of chanting Vighnanashaya mantra</h4>
          <UnorderedList>
            <ListItem>
              If one is facing problems with his social life, at work or with
              interpersonal relationships, it can be made easier by chanting
              this mantra.
            </ListItem>
            <ListItem>
              Chanting this mantra will bring a sense of maturity to the
              performer because of which they will become more understanding.
            </ListItem>
          </UnorderedList>
          <h4>4. Lambodaraya Mantra</h4>
          <p className="red">ॐ लम्बोदराय नमः।</p>
          <p>Om Lambodaraya Namah</p>
          <p>
            <strong>Meaning - </strong>Ganesha is known to love his food, and
            has a big, round belly. ‘Lambodar’ thus refers to him as a God who
            has a big belly.
          </p>
          <h4>Benefits of chanting Lambodaraya mantra</h4>
          <UnorderedList>
            <ListItem>
              This mantra is very special as chanting this mantra will remove
              all hate and discomfort from the performer's heart.
            </ListItem>
            <ListItem>
              It also makes them love and be one with the universe.
            </ListItem>
          </UnorderedList>
          <h4>5. Sumukhaya Mantra</h4>
          <p className="red">ॐ सुमुखाय नमः।</p>
          <p>Om Sumukhaya Namah</p>
          <p>
            <strong>Meaning - </strong>Sumukh means ‘One with a pleasing face’.
            Lord Ganesha lost his head, and replaced it with that of an
            elephant’s. However, his good spirit and pure soul shone through
            even on his elephant face, and this made him look beautiful and
            calm.
          </p>
          <h4>Benefits of chanting Sumukhaya mantra</h4>
          <UnorderedList>
            <ListItem>
              Chanting this mantra regularly will remove all the self doubt from
              a person's mind and let them see their own true potential.
            </ListItem>
            <ListItem>
              With this mantra, they will look past their shortcomings and work
              on being a better person.
            </ListItem>
          </UnorderedList>
          <h4>6. Gajkarnikaya Mantra</h4>
          <p className="red">ॐ गजकर्णकाय नमः।</p>
          <p>Om Gajakarnakaya Namahh</p>
          <p>
            <strong>Meaning - </strong>Gaj means Elephant and Karnikay means
            ears. With the elephant’s head and elephant ears, Ganesh was unable
            to listen to everything from all sources.
          </p>
          <h4>Benefits of chanting Gajakarnakay mantra</h4>
          <UnorderedList>
            <ListItem>
              This Mantra allows us to be just like him, and hear and accept
              only that which is good.
            </ListItem>
            <ListItem>
              Chanting the mantra shields us from external negativity and helps
              us overcome the stress caused by it.
            </ListItem>
          </UnorderedList>
          <h4>7. Vikataya Mantra</h4>
          <p className="red">ॐ विकटाय नमः।</p>
          <p>Om Viktaya Namah</p>
          <p>
            <strong>Meaning - </strong>Here ‘Vikat’ means difficult
          </p>
          <h4>Benefits of chanting Viktaya mantra</h4>
          <UnorderedList>
            <ListItem>
              The world is full of difficult situations, and often one may find
              himself disheartened and unable to focus.
            </ListItem>
            <ListItem>
              This Mantra reminds him that his ultimate goal is salvation, and
              no matter what happens, he should not lose sight of it.
            </ListItem>
            <ListItem>
              This Ganpati Mantra will keep his eyes on this long-term goal and
              motivate him towards salvation.
            </ListItem>
          </UnorderedList>
          <h4>8. Vinayakaya Mantra</h4>
          <p className="red">ॐ विनायकाय नमः।</p>
          <p>Om Vinayakaya Namah</p>
          <p>
            <strong>Meaning - </strong>‘Vinayaka’ is the name of Ganesha in the
            golden age. Vinayaka means ‘something under control’ and also means
            ‘the Lord of resolving problems’.
          </p>
          <h4>Benefits of chanting Vinayakaya mantra</h4>
          <UnorderedList>
            <ListItem>
              Chanting this mantra regularly must be one of the healthiest
              habits since it is very beneficial when it comes to success in
              professional and personal life.
            </ListItem>
            <ListItem>
              One will never have to work under someone, and soon will become
              the boss of the office, and their own life.
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
                  <td>Best time to chant the Namavali Ganesh Mantras</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the Namavali Ganesh Mantras</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol or picture of lord Ganesh</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall benefits of chanting Ganesh Mantras</h3>
          <UnorderedList>
            <ListItem>
              With the blessing of Mata Parvati, Goddess Lakshmi was allowed to
              consider lord Ganesh as her son, and along with him, they provided
              blessings of financial success and all kinds of prosperity.
            </ListItem>
            <ListItem>
              With the association of Mata Saraswati, who is Lord Ganesha's
              sister, they bless everyone in the field of education and success.
              With the chanting of ganesh mantras, one can achieve scholarships
              and knowledge that will help them move to higher places in life.
            </ListItem>
            <ListItem>
              Lord Ganesha is blessed to be the first god to be worshiped before
              starting any ritual, and hence is the representative of successful
              beginnings. Chanting these mantras before starting any new venture
              is recommended as it will ensure the work gets successful.
            </ListItem>
            <ListItem>
              Ganesh mantras are very powerful and when recited with complete
              trust and clean mind, it can do wonders. These mantras will easily
              remove any obstacles that might have been causing troubles in the
              life of the reciter.
            </ListItem>
            <ListItem>
              Being the god of knowledge and wisdom, worshiping lord ganesh and
              chanting these mantras is very beneficial as they will open the
              doors to great knowledge and let the performer discover the
              secrets of the universe.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Ganesh;

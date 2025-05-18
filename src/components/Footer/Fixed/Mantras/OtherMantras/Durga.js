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
const Durga = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Durga Mantra">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Durga Mantra</h1>
          <h2>Durga Mantra: meaning, benefits and ways to chant</h2>
          <p>
            Maa Durga is a different form of shakti who is the other half, the
            Ardhangini, of lord shiva. Also known as the mother goddess, she is
            the protector and saviour, the true representation of female power
            and womanhood. She is believed to be the cause of the creation of
            life, sustenance, and also the annihilation of evil. Maa Durga, as
            the Hindu mythology says, represents all the divine forces and she
            was manifested when the oppression and atrocities of the demons
            became too much to bear. By the combined power of the trinity of
            Hindu gods, Brahma, Vishnu, and Mahadev, a different form of shakti
            was created with the intention of destroying the evildoers. She had
            the appearance of a warrior, with three eyes, long black flowing
            hair, and then arms, each one holding the weapons and instruments
            representing war and victory.
          </p>
          <p>
            Maa Durga’s arms hold all the things that stand for victory in war
            such as the half bloomed lotus that represents that there will be
            victory, but it is not the final thing. She holds a conch, as it is
            the symbol of “om” and is also used at the beginning of a war,
            according to Hinduism. Maa Durga also holds a sword and a bow and
            arrow, which is the representation of knowledge and energy. The
            thunderbolt, in one of maa Durga’s hands, means firmness and
            strength. It means to stand confident and not cower when facing a
            challenge. The Sudarshan chakra that spins around one of her index
            fingers, indicates that all the world is at her command and what she
            wills must happen. She destroys the evils and creates an environment
            that has a foundation of righteousness and justice. Durga’s Trishul
            represents Satwa(inactivity), Rajas(activity), and
            Tamas(non-activity). Using her Trishul, she will end all three
            miseries of the world, be it physical pain, mental or spiritual
            difficulties.
          </p>
          <p>
            Maa Durga also has three eyes, also known as Triyambake, just like
            her counterpart lord shiva. Her left eye stands for desire (the
            moon), the right eye stands for action (the sun), and the middle eye
            represents knowledge (fire).
          </p>
          <h3>Durga mantra: How do they help</h3>
          <p>
            Maa Durga is the universal mother, that cares for all and loves
            everyone fiercely just like her own child. In Sanskrit, the word
            Durga literally means “a fort” or “a place that cannot be easily
            climbed or overrun”. This represents goddess Durga’s protective
            nature and how like a mother she is standing in front of all the
            calamities, just to protect her children. Durga breaks into three
            parts, where ‘du’ stands for the four evils, poverty, famine,
            suffering, and evil habits. The ‘r’ represents the diseases, and the
            ‘ga’ means the destroyer of all negative things, like sins,
            injustice, cruelty, and laziness.
          </p>
          <p>
            Durga maa is one of the most worshiped deities of the Hindu religion
            as she is the protector and the saviour. Serving maa Durga will
            provide protection and bring prosperity. During the time of
            Navratri, maa Durga is worshipped all over the country as it is a
            very auspicious time. These mantras are a great way to appease Devi
            Durga as she is the harbinger of goodness.
          </p>
          <h3>How to chant Durga Mantra</h3>
          <UnorderedList>
            <ListItem>
              To start with the rituals of chanting Durga mantras, doing it with
              a clean body and soul is the most important aspect.
            </ListItem>
            <ListItem>
              The performer should wake up early in the morning and take a bath.
              Only with a cleansed body and wearing clean clothes, the recital
              should begin.
            </ListItem>
            <ListItem>
              An idol or a picture of maa Durga should be kept on a higher and
              clean platform or aasan, where all the rituals will take place.
            </ListItem>
            <ListItem>
              Along with chanting the Durga mantras, the performer should also
              do a Puja using Roli (red-colored rangoli or red sandal powder),
              flowers, belpatra, and vermilion (kumkum).
            </ListItem>
            <ListItem>
              The flowers that are believed to be dearest to maa Durga are red
              hibiscus, chrysanthemums (sevanti), lotus, Jasmin, marigold,
              Champa, and mogra. In West Bengal, the use of shiuli or Parijat
              flower is also popular as it marks the beginning of sharadotsava.
            </ListItem>
          </UnorderedList>
          <h3>Important Durga mantra</h3>
          <h4>1. Maa durga dhyan mantra</h4>
          <p>
            Durga mantras hold a very special place as they are extremely
            powerful. These mantras can change our life in a better way and can
            also bring positivity to our life. Chanting mantras bring peace and
            calm to the soul of the reciter and to get the most benefit, there
            are different mantras specific to every issue. Learning about each
            one and following the instructions before starting the process is
            important because only then will the performer get the most benefit.
          </p>
          <h4>The maa durga dhyan mantra is:</h4>
          <p className="red">जटा जूट समायुक्तमर्धेंन्दु कृत लक्षणाम</p>
          <p>Om jataa jut samaayuktamardhendu krit lakshnam</p>

          <p className="red">लोचनत्रय संयुक्तां पद्मेन्दुसद्यशाननाम</p>
          <p>Lochanyatra sanyuktam padmendu sadya shan naam</p>
          <p>
            <strong>Meaning - </strong> I bow down to the supreme power and urge
            you to help me concentrate on my goals and help me to achieve them.
          </p>
          <h3>Benefits of chanting the maa durga dhyan mantra</h3>
          <UnorderedList>
            <ListItem>
              The maa Durga Dhyan mantra should be chanted before any other
              mantra as it begins the rituals.
            </ListItem>
            <ListItem>
              This mantra will open up the soul and awaken our consciousness.
            </ListItem>
            <ListItem>
              A very important mantra, when it is chanted, it helps the person
              to focus and maintain concentration.
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
                  <td>Best time to chant maa durga dhyan mantra</td>
                  <td>Early morning after bath</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times in a row</td>
                </tr>
                <tr>
                  <td>Who can chant the maa durga dhyan mantra</td>
                  <td>Those facing concentration problems</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>A picture or idol of maa durga</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>2. Durga mantra</h3>
          <p>
            Maa Durga has the strength of the lord of the universe and with
            their combined power, she ends evil from the roots and makes the
            world a peaceful place. Durga pooja is a celebration that happens
            for ten days around many Indian regions but primarily in East and
            West Bengal, Assam, Tripura, Odisha, Bihar, and Jharkhand. But it is
            the main annual occasion of West Bengal, as the streets are lit up
            with pandals being set up according to different themes. It is the
            time to celebrate the victory of good over evil and also to
            celebrate the feminine energy in the form of maa durga.
          </p>
          <p className="red">सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके</p>
          <p>Sarva Mangala Mangalye Sive Sarvartha Sadhike</p>

          <p className="red">शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तुते</p>
          <p>Saranye Trayambike Gauri Narayani Namostute</p>
          <p>
            <strong>Meaning - </strong> I bow down to the Goddess Narayani, who
            makes everything auspicious as she is the most auspicious one and
            also fulfills all the desires of those who come for the shelter to
            the Three-eyed Gauri.
          </p>
          <h3>Benefits of chanting the durga mantra</h3>
          <UnorderedList>
            <ListItem>
              The durga mantra is considered the most powerful mantra that is
              dedicated to maa durga.
            </ListItem>
            <ListItem>
              Through the chanting of this mantra, the performer hails the
              powers of maa durga and receives all the strength and power that
              need to overcome an obstacles.
            </ListItem>
            <ListItem>
              Chanting this mantra will bring wisdom to the performer, opening
              up the mind and make space for new ideas.
            </ListItem>
            <ListItem>
              The continuous recitation of this powerful mantra is extremely
              helpful when someone in starting new business venture or any new
              experience since it will bring fortune and give strength to the
              person to receive a positive result.
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
                  <td>Best time to chant maa durga mantra</td>
                  <td>Early morning after bath, wearing clean clothes</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite the durga mantra</td>
                  <td>Everyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of maa durga</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h3>3. Devi stuti mantra</h3>
          <p>
            The worship of Maa Durga in Navratri is particularly fruitful.
            Navratri is the only festival in which life can be made meaningful
            by worshiping Goddess Durga, Mahakali, Mahalakshmi, and Saraswati.
            If you are troubled by fear and obstacles in life, then this mantra
            is for you. Navratri is a biannual festival of the Hindu religion
            that happens for nine nights. The first Navratri occurs during the
            month of Chaitra, and the second Navratri happens during the month
            of Sharada. Every different culture has its own way to worship Devi
            Durga, but the mantras remain static.
          </p>
          <h4>The Devi Stuti mantra is:</h4>
          <p className="red">|| या देवी सर्वभुतेषु शक्तिरूपेण संस्थिता</p>
          <p>Ya devi sarva bhuteshu, shanti rupena sangsthita</p>

          <p className="red">या देवी सर्वभुतेषु शक्तिरूपेण संस्थिता</p>
          <p>Ya devi sarva bhuteshu, shakti rupena sangsthita</p>

          <p className="red">या देवी सर्वभुतेषु मातृरूपेण संस्थिता</p>
          <p>Ya devi sarva bhuteshu, matri rupena sangsthita</p>

          <p className="red">या देवी सर्वभुतेषु बुद्धिरूपेण संस्थिता</p>
          <p>Yaa devi sarva bhuteshu, buddhi rupena sangsthita</p>

          <p className="red">नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ||</p>
          <p>Namastasyai, namastasyai, namastasyai, namo namaha</p>

          <p>
            <strong>Meaning - </strong> The goddess who is omnipresent as the
            personification of the universal mother
          </p>
          <p>The goddess who is omnipresent as the embodiment of the power</p>
          <p>The goddess who is omnipresent as the symbol of peace</p>
          <p>
            Oh, Goddess (Devi) who resides everywhere in all living beings as
            intelligence and beauty,
          </p>
          <p>I bow to her, I bow to her, I bow to her again & again.</p>
          <h3>Benefits of chanting the devi stuti mantra</h3>
          <UnorderedList>
            <ListItem>
              Devi stuti mantra is a very frequently used mantra, for maa durga
              addressing her as the mother of the universe.
            </ListItem>
            <ListItem>
              Maa durga is considered the ultimate power of the combined energy
              of the three lords, and thus is responsible for all the actions of
              the world. Worshipping her brings fortune and luck, and cancles
              out the negativity.
            </ListItem>
            <ListItem>
              Regular chanting of this mantra will bring the devotee positivity
              and creates healthy vibration around the person.
            </ListItem>
            <ListItem>
              Devi stuti mantra is also very useful as it works wonders when it
              comes to wealth and power. So the person chanting this mantra will
              have good luck when it comes to their financial situation.
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
                  <td>Best time to chant the devi stuti mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times in a row</td>
                </tr>
                <tr>
                  <td>Who can recite the devi stuti mantra</td>
                  <td>Those struggling with financial problems</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of maa durga</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h3>4. Shakti mantra</h3>
          <p>
            The shakti mantra of maa Durga is one of the most powerful mantras,
            as canting this mantra regularly will make the performer strong
            enough to fight any difficulties that have been causing distress.
            Since Shakti, who is the other half of Shiva has many forms and one
            of the forms is Maa Durga, just like the name suggests, by reciting
            this mantra with the deepest devotion, the power of maa Durga can be
            manifested itself which can be used to get through the hurdles of
            life. Mantras are the words that are spoken from our inner soul.
            Hence, it provides peace and satisfaction to the self and the one
            listening to the mantras being recited.
          </p>
          <h4>The shakti mantra is:</h4>
          <p className="red">शरणागत दीनार्तपरित्राण परायणे।</p>
          <p className="red">सर्वस्यातिहरे देवि नारायण नमोस्तुते</p>
          <p className="red">सर्वस्वरूपे सर्वेशे सर्वेशक्तिसमन्विते ।</p>
          <p className="red">भयेभ्यस्त्राहि नो देवि दुर्गे देवि नमोऽस्तु ते</p>
          <p className="red">रोगनशेषानपहंसि तुष्टा।</p>
          <p className="red">रुष्टा तु कामान् सकलानभीष्टान्</p>
          <p className="red">त्वामाश्रितानां न विपन्नराणां।</p>
          <p className="red">त्वमाश्रिता हृयश्रयतां प्रयान्ति</p>
          <p className="red">सर्वाबाधा प्रशमनं त्रैलोक्यस्याखिलेश्वरि।</p>
          <p className="red">एवमेव त्वया कार्यमस्मद्दैरिविनाशनम्</p>
          <p className="red">सर्वाबाधा विर्निर्मुक्तो धनधान्यसुतान्वित:।</p>
          <p className="red">मनुष्यो मत्प्रसादेन भविष्यति न संशय</p>
          <p className="red">जयन्ती मङ्गला काली भद्रकाली कपालिनी ।</p>
          <p className="red">
            दुर्गा शिवा क्षमा धात्री स्वाहा स्वधा नमोऽस्तु ते
          </p>

          <p>
            sharnaagat deenaart paritraan paraayaney, servasyarti harey devi
            naaraayani namostutey
          </p>
          <p>
            Sarvasvaroopey sarveshey sarvshakti samanvietey, bhayebhyah traahi
            no devi durge devi namostutey
          </p>
          <p>
            Rogaan shoshaan pahansitushtarushtatu kaamaan saklaan bhishtaan,
            tvaam aashritaanaam na vipannaraanam, tvaamaashritaahya shraytaam
            prayaanti
          </p>
          <p>
            Sarva badha prashmanan trailokya syakhileshwari, evamevmev tvayaa
            kaaryam sma dveri vinaashnam
          </p>
          <p>
            Sarvaa baadha vinirumk to dhan dhaanya sutaan vitah. Manushyo mat
            prasaaden bhavishyati na sansha yah
          </p>
          <p>Dehi saubhaagyam aarogyam dehi devi param sukham</p>
          <p>Rupam dehi jayam dehi yasho dehi dvisho jahi</p>
          <p>
            Jyanti mangalaa kaali bhadra kaali kapaalinee durgaa kshamaa shivaa
            dhaatree swaahaa svadhaa namo stutey
          </p>
          <p>
            <strong>Meaning - </strong> You who are perpetually endeavouring to
            protect the weak and the poor and remove their misery. Oh Narayani,
            I pray to you.
          </p>
          <p>
            Oh Goddess Durga, please protect us from all kinds of fear. Oh
            omnipotent Durga, I pray to you.
          </p>
          <p>
            Oh Goddess, when you are pleased, remove all ailments and when you
            are angry, destroy everything that a person desires for. However,
            those who come to you for sanctuary never have to confront any
            casastrophy. Instead, such people secure enough merit to provide
            shelter to others.
          </p>
          <p>
            Whoever listens to the story of the Goddess during the great Puja
            that is organised in the winters succeeds in overcoming all
            obstacles and is blessed wealth and progeny.
          </p>
          <p>
            Oh Goddess, bless me with good fortune, good health, good looks,
            success and fame. Oh Vaishnavi, you are the very basis for the
            world. You have mesmerized the World. When you are pleased with some
            one you ensure his salvation from the cycle of life and death.
          </p>
          <p>
            Oh Goddess, you who are known by the names of Mangala, Kali, Bhadra
            Kali, Kapalinee, Durge, Kshama, Shivaa, Dhatri, Swahaa, Swadha, I
            pray to you.
          </p>
          <h3>Benefits of chanting the shakti mantra</h3>
          <UnorderedList>
            <ListItem>
              Chanting the shakti mantra is very beneficial as it is considered
              one of the most powerful mantra out there.
            </ListItem>
            <ListItem>
              With regular recitation of this mantra will give the person
              courage and strength to fight any problems and obstacles, and make
              the person strong and wise.
            </ListItem>
            <ListItem>
              This mantra holds great power and similarly bestows the same to
              the devotees.
            </ListItem>
            <ListItem>
              The sakti mantra, that is dedicate to goddess durga praises the
              almighty power of the goddess and the devotees receives the
              blessings of maa durga.
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
                  <td>Best time to chant the shakti mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times in a row</td>
                </tr>
                <tr>
                  <td>Who can recite the shakti mantra</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Any direction</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h2>Other powerful Durga mantra</h2>
          <h3>1. Maa durga-duh-swapna-nivaaran mantra</h3>
          <p>
            Maa Durga destroys all the obstacles that are standing in the way of
            a healthy life. The mantra Maa-Durga-Swapna-Nivaaran Mantra if
            chanted regularly in a peaceful environment will remove all the bad
            thoughts or negativity that are causing the performer to lose sleep.
            This mantra keeps the mind calm and removes any restlessness if any.
            If someone is facing any problems regarding falling asleep or
            frantic mind, chanting this mantra will be very beneficial.
          </p>
          <h4>The maa durga-duh-swapna-nivaaran mantra is:</h4>
          <p className="red">शान्तिकर्मणि सर्वत्र तथा दु:स्वप्नदर्शने</p>
          <p className="red">ग्रहपीडासु चोग्रासु माहात्म्यं श्रृणुयान्मम</p>

          <p>Shanti karmani sarvatra tatha duh swapna darshane</p>
          <p>Grah pidaasu chograsu maahaatmyam srinu yaanmam</p>

          <h3>Benefits of chanting the maa durga-duh-swapna-nivaaran mantra</h3>
          <UnorderedList>
            <ListItem>
              The meaning and the benefits of this mantra is in the name itself.
              Duh swapna means bad dreams and nivaaran means relief.
            </ListItem>
            <ListItem>
              Honest to its name, chanting this mantra is very beneficial when
              it comes to someone who is facing problems with sleep
              difficulties.
            </ListItem>
            <ListItem>
              It is also recommended to recite this mantra religiously to those
              who are having regular bad dreams or negative thoughts.
            </ListItem>
            <ListItem>
              Chanting this mantra with clean body and soul will bring peace to
              those who are struggling to find peace.
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
                  <td>Best time to chant this Durga mantra</td>
                  <td>Early morning, before going to bed</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite this Durga mantra</td>
                  <td>
                    Those who face problems with sleep and have negative
                    thoughts
                  </td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of maa durga</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h3>2. Durga shatru shanti mantra</h3>
          <p>
            Goddess Durga is the mother of all life on earth and just like a
            mother, she is ready to protect her child from all the demises of
            the world. Used during the time of Dussehra, this Durga Shatru
            Shanti mantra will remove all the evil and demons from the path and
            lead the life of the performer to success. This mantra is very
            efficient to remove all the negativity and enemies from life. The
            festival of Dussehra is the celebration of life over death and the
            victory of good over evil. Maa Durga will remove the miseries and
            end all the evils so that the devotee lives a life of prosperity.
          </p>
          <h4>The Durga shatru shanti mantra is:</h4>
          <p className="red">रिपव: संक्षयम् यान्ति कल्याणम चोपपद्यते</p>
          <p className="red">नन्दते च कुलम पुंसाम माहात्म्यम मम श्रृणुयान्मम</p>

          <p>Ripavah sankshayam yaanti kalyaanam chop padyate</p>
          <p>Nandate cha kulam punsaam maahaatmyam mam srinu yaanmam</p>

          <h3>Benefits of chanting the durga shatru shanti mantra</h3>
          <UnorderedList>
            <ListItem>
              Maa durga is the protector of mankind, as she the figure of a
              mother, always ready to protect her child.
            </ListItem>
            <ListItem>
              The shatru shanti mantra is very beneficial mantra since it works
              wonders when someone is doubting themselves and are afraid of
              failing.
            </ListItem>
            <ListItem>
              This mantra is good for those who are feeling that there are
              people who are trying to harm them, as chanting this mantra
              faithfully will protect the performer from ill intensions.
            </ListItem>
            <ListItem>
              Regular chanting of this mantra will give the reciter courage and
              strength to fight against any obstacles, and remove all the
              negative energy from the person’s life.
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
                  <td>Best time to chant the Durga shatru shanti mantra</td>
                  <td>Early morning, wearing clean clothes after bath</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times in a row</td>
                </tr>
                <tr>
                  <td>Who can recite the durga shatru shanti mantra</td>
                  <td>
                    Those who doubt themselves and feel someone is trying to
                    hurt them
                  </td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of maa durga</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h3>3. Maa durga-sarv-badha-mukti mantra</h3>
          <p>
            Maa Durga is the embodiment of female energy and the creation of all
            the power of Trimurti. She is also called durgatinasini, which means
            that those who pray to her with pure intentions, their sorrows and
            sufferings will be removed by maa Durga. Since she is manifested by
            the combined power of the supreme gods, she is known to be eternal,
            the one who does not have a beginning or an end. Just like the name
            suggests, the Maa Durga-Sarv-Badha-Mukti Mantra is very beneficial
            when one is trying to remove any obstacles from their life. Anything
            that is becoming a hindrance in the way of the success will be
            removed by regular chanting of this mantra.
          </p>
          <h4>The maa durga-sarv-badha-mukti mantra is:</h4>
          <p className="red">सर्वाबाधाविनिर्मुक्तो धन धान्य सुतान्वित</p>
          <p className="red">मनुष्यो मत्प्रसादेन भविष्यती न संशय</p>

          <p>Sarvaa baadhaa vinirmukto dhan dhaanya sutaanvitah</p>
          <p>Manushyo matprasaaden bhavishyati na sanshayah</p>

          <h3>Benefits of chanting the maa durga-sarv-badha-mukti mantra</h3>
          <UnorderedList>
            <ListItem>
              The maa durga-sarv-badha-mukti mantra is a very good mantra to
              recite when someone feels that they cannot achieve success in
              life.
            </ListItem>
            <ListItem>
              This mantra is very good obstacles remover and will cancel out any
              bad energy that could be the reason behind failure.
            </ListItem>
            <ListItem>
              Chanting this mantra regularly will remove any unfortunate events
              or obstacles that could be concerning the performer.
            </ListItem>
            <ListItem>
              It is also believed that regular chanting of this mantra with
              faith and pure heart will bestow luck on the couples who are
              facing problems with having a child and gift them the joy of
              parenthood.
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
                  <td>Best time to chant this Durga mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite this Durga mantra</td>
                  <td>Those who are starting a new venture</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of goddess durga</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h3>4. Durga ashaant shishu shanti pradaayak mantra</h3>
          <p>
            Maa Durga is the universal mother, taking care of her child from all
            the evils of the world. Similarly, if there is a child who is having
            trouble calming themselves down or finding peace, this mantra will
            be very beneficial as the specialty of this mantra is to calm the
            soul of the child from within and ends all the negativity that could
            be surrounding the child.
          </p>
          <h4>The durga ashaant shishu shanti pradaayak mantra is:</h4>
          <p className="red">बालग्रहभिभूतानां बालानां शांतिकारकं</p>
          <p className="red">सङ्घातभेदे च नृणाम मैत्रीकरणमुतमम</p>

          <p>Baal grah bhibhutaanaam baalaanam shantikaarkam</p>
          <p>Sanghatbhede ch nrinaam maetri karan mutmam</p>

          <h3>
            Benefits of chanting the durga ashaant shishu shanti pradaayak
            mantra
          </h3>
          <UnorderedList>
            <ListItem>
              Parents who are struggling because of restlessness of their
              children can chant this mantra as it helps in calming the child
              and brings them wisdom.
            </ListItem>
            <ListItem>
              Chanting this mantra ensures the well-being of the children and
              protect them from any harm.
            </ListItem>
            <ListItem>
              Regular chanting of this mantra by the children will remove the
              fear of evil, ghost, darkness, or other negative things, and bring
              them wisdom and courage.
            </ListItem>
            <ListItem>
              This mantra is blessing for new parents, as they tend to struggle
              a bit with new parenthood, which is a difficult position. Chanting
              this mantra regularly will bring them strength and give them
              knowledge to build a beautiful life for their children.
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
                  <td>Best time to chant this Durga mantra</td>
                  <td>Early morning, anytime of the day</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite this Durga mantra</td>
                  <td>
                    Children struggling with bad thoughts and fear of darkness
                    and ghost, parents struggling with restless child
                  </td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol or picture of maa durga</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h3>5. Badha mukti mantra</h3>
          <p>
            Similar to the Maa Durga Sarv-Badha-Mukti mantra, this mantra is
            extremely beneficial when there is a very big obstacle standing in
            front of success. Shakti, in the form of maa Durga, is the infinite
            power, the creation, the nurture, and the destruction, she is the
            one holding the decision in her hand, and the world runs by her
            command. No matter what the person is going through, chanting the
            Badha Mukti mantra will relieve them from the problem and give them
            their desired outcome.
          </p>
          <h4>The badha mukti mantra is:</h4>
          <p className="red">सर्वाबाधाविनिर्मुक्तो धन धान्य सुतान्वित: |</p>
          <p className="red">मनुष्यो मत्प्रसादेन भविष्यती न संशय: ||</p>

          <p>Sarva badhavinirmukto dhan dhanya sutanvitah</p>
          <p>Manushyo matprasaden bhavishyati na sanshayam</p>

          <h3>Benefits of chanting the badha mukti mantra</h3>
          <UnorderedList>
            <ListItem>
              Mantras have the power to change our life, since the words that
              are used simultaneously in an order to form a syllable has been
              done consciously.
            </ListItem>
            <ListItem>
              Every word being uttered when chanting a mantra has a special
              meaning, and with every word, the situation and the course of fate
              are changing, even without us noticing.
            </ListItem>
            <ListItem>
              By continuous recitation of the Badha Mukti mantra, the performer
              is manifesting maa Durga’s power to destroy the negative energy
              that has been surrounding the person in the struggle.
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
                  <td>Best time to chant the badha mukti mantra</td>
                  <td>Early morning</td>
                </tr>
                <tr>
                  <td>Number of times to recite badha mukti mantra</td>
                  <td>108 times</td>
                </tr>
                <tr>
                  <td>Who can recite this mantra</td>
                  <td>Those who are starting a new venture</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>Idol of maa durga</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>Overall benefits of chanting the maa durga mantra</h4>
          <UnorderedList>
            <ListItem>
              Maa durga is considerd the true definition of female power.
              Chanting the mantra with devotion and correct information ensures
              fortune and protection from devi durga.
            </ListItem>
            <ListItem>
              Regular chanting of the durga mantras will open up the
              subconsciousness and fill the person with immense knowledge of the
              universe.
            </ListItem>
            <ListItem>
              Those who are facing problems with sleep due to bad dreams and
              negative thoughts can chant this mantra will fresh and clean soul.
              It will remove all the negativity and bring the person peace.
            </ListItem>
            <ListItem>
              Chanting this mantra is also very good when it comes
              concentration, if the person easily loses focus from their goals
              and ambitions.
            </ListItem>
            <ListItem>
              Maa durga is the goddess of strengt and protection, and
              worshipping her will ensure safety and protection from the evil
              eyes.
            </ListItem>
            <ListItem>
              A form of positive force field is created around the person who
              chants durga mantra regularly which protects them from any
              misfortune that the person might have had to go through.
            </ListItem>
            <ListItem>
              Parents who are facing problems with restless children and
              children who are having problems to find peace can try to recite
              the mantras themselves or encourage their children to do the same
              as it removes and negative thoughts or energy from the area and
              their mind or any fear of evil spirits or ghosts, and gives the
              performer peace.
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Durga;

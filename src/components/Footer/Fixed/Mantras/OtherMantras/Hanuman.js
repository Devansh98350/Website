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
const Hanuman = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Hanuman Mantra">
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">Hanuman Mantra</h1>
          <h2>Hanuman Mantra: Meaning, benefits and ways to chant</h2>
          <p>
            Lord Hanuman of Sankat Mochan Hanuman is one of the most popular and
            dedicated deities worshipped in Hinduism. Lord Hanuman is worshipped
            as the devotee of Lord Ram and also for his valour and kind nature.
            Lord Hanuman was the chief of the armies of Lord Ram and thus has a
            great significance in his life and across epics. It is his valour
            that has made people believe that worshipping Lord Hanuman bestows
            the native with strength and courage to fight all kinds of problems
            in life. As per astrology, there are many ways to worship Lord
            Hanuman and chanting the Hanuman mantra is one of those ways. It is
            said that chanting the Hanuman Mantra not just calms down your inner
            vibrations but also helps one to get rid of all kinds of problems,
            fears and negative energies from within and from their vicinity.
          </p>
          <p>
            Throughout history, Lord Hanuman or Hanumanji (हनुमान जी) has been
            bestowed with numerous names. As per astrologers, Hanuman ji also
            goes by the name. Anjaneya, Anjani Putra, Bajarangabali, Hanuman,
            Mahaveer, Maruti, Pavanputra etc. Hanuman Ji is also called the
            monkey God. He is the son of Vayu or the wind God. Hanuman’s mother
            is Anjani. In history, not only his interaction with Ravana and
            burning down Lanka is famous, but Hanuman ji is also well-known for
            his interaction with Lord Shani when he rescued Shani from the wrath
            of Ravana.
          </p>
          <h2>Lord Shani and Hanuman interaction</h2>
          <p>
            The Story is that Ravana had trapped Shani in a cage. When Lord
            Hanuman came to meet Sita in Lanka, he heard Shani weeping from
            inside the cage that was covered with a black cloth. It is believed
            that looking directly into the eyes of Shani brings bad luck, and
            hence the cage was covered with black cloth. However, Lord Hanuman
            decided to rescue Shani. As he opened the cage to rescue Shani, the
            Shani Drishti fell upon him. And although Shani was thankful to
            Hanuman for rescuing him, yet, was bound by his virtues to infuse
            hardships of Sade Sati or Shani Dosha in Hanuman’s life as he had
            looked at him directly.
          </p>
          <p>
            Hanuman ji being very understanding let Shani stay in his head.
            However, as Hanuman Ji was constantly at war with enemies, he would
            smash his enemies with his head or pick boulders on his head. Fed up
            with the pain that such acts would give him, Shani finally decided
            to leave Hanuman’s head, thus ending his Sade Sati. He even blessed
            Hanuman saying that he and his devotees will be the only ones who
            cannot be troubled by Sade Sati or Shani Dosha.
          </p>
          <p>
            Since then, Hanuman Ji is worshipped by people to ward off the
            effects of harmful Shani. And one way to worship Hanuman Ji is
            through Hanuman Mantras.
          </p>
          <h2>Hanuman Mantras: How do they help?</h2>
          <p>
            You may or may not believe in supernatural forces, but it is a
            belief that ghosts, devils or any kind of evil spirits never trouble
            a person who regularly recites the Hanuman Mantra. Hanuman Mantra
            recitation infuses one with unlimited energy and power. Also, as we
            have mentioned in the story above, reciting Hanuman Mantra on a
            regular basis helps you fight the harmful effects of Shani or Sade
            Sati.
          </p>
          <p>
            As Hanuman is said to be an incarnation of Lord Shiva. Reciting
            various different kinds of Hanuman mantras also helps in pleasing
            Lord Shiva. All in all, there are numerous Hanuman mantras, and they
            are said to bring the natives all kinds of benefits.
          </p>
          <h2>How to chant Shiva Mantra</h2>

          <h3>Important Hanuman Mantras</h3>
          <h4>1. Hanuman Beej Mantra</h4>
          <p>
            Mantras are Sanskrit invocations of the Supreme Being enforced by
            Jaap or meditation. There are numerous kinds of mantras in Vedic
            science and the beej mantra is one of them. Each deity has a
            specific beej mantra, restricted simply to a word. For example, “OM”
            is a beej mantra. These words or beej mantras are combined with
            other mantras to deliver extra power to that mantra.
          </p>
          <p>
            If you are able to concentrate with faith, beej mantras are a very
            powerful source that can solve various problems in your life. As per
            the Hindu tradition, chanting the Hanuman Beej mantra is a powerful
            way to invoke the blessings of Hanuman upon you.
          </p>
          <p>
            <strong>The Humana Beej Mantra is:</strong>
          </p>
          <p className="red">|| ॐ ऐं भ्रीम हनुमते,</p>
          <p>Aum Aeem Bhreem Hanumate</p>
          <p className="red">श्री राम दूताय नम: ||</p>
          <p>Shree Ram Dootaaya Namaha</p>
          <p>
            <strong>Meaning-</strong>I bow in front of Lord Hanuman, who is the
            greatest server and messenger of the Lord Sri Rama.
          </p>
          <h4>Benefits of chanting the Hanuman Beej mantra</h4>
          <UnorderedList>
            <ListItem>
              Chanting the Hanuman beej mantra is the best and the most powerful
              way to please God.
            </ListItem>
            <ListItem>
              Chanting the Hanuman beej mantra enhances your concentration power
              and fills you with positive energy.
            </ListItem>
            <ListItem>
              It also helps in fighting the harmful effects of Shani Sade Sati.
            </ListItem>
            <ListItem>
              The beej mantra helps in attaining physical strength, power and
              stamina.
            </ListItem>
            <ListItem>
              Hanuman beej Mantra is believed to dispel ghosts and spirits and
              ward off maladies such as fever and epilepsy.
            </ListItem>
            <ListItem>
              Pleasing Lord Hanuman by reciting the beej mantra blesses one with
              the qualities of courage and confidence.
            </ListItem>
            <ListItem>The mantra helps you lead an energetic life.</ListItem>
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
                  <td>Best time to recite the Hanuman beej mantra</td>
                  <td>During Sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td> 108</td>
                </tr>
                <tr>
                  <td>Who can recite the Hanuman beej mantra?</td>
                  <td> Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>East</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>2. Hanuman Moola Mantra</h4>
          <p>
            The Hanuman moola mantra is usually recited to overcome any kind of
            obstacle in life. Also, the mantra recitation is useful for couples,
            especially for the ones having a tough time making things work for
            themselves. As Lord Hanuman is one of the Boon giving deities in the
            Kaliyuga, chanting the Hanuman moola mantra is one of the best ways
            to please him.
          </p>
          <p>
            <strong>The Hanuman Moola Mantra is:</strong>
          </p>
          <p className="red">|| ॐ श्री हनुमते नमः ||</p>
          <p>Om Shri Hanumate Namah</p>

          <p>
            <strong>Meaning-</strong>I bow in front of Lord Hanuman.
          </p>
          <h4>Benefits of chanting Hanuman Moola Mantra</h4>
          <UnorderedList>
            <ListItem>
              By chanting the Hanuman Moola mantra, anyone can relieve himself
              of numerous kinds of troubles.
            </ListItem>
            <ListItem>
              Hanuman Moola mantra is also known as the Karya Siddhi mantra.
              Hence the mantra helps in overcoming delays in life.
            </ListItem>
            <ListItem>
              Job seekers, business people and students who are weak in studies
              must recite this powerful Hanuman mantra.
            </ListItem>
            <ListItem>
              Those suffering from emotional leathery or even physical distress
              must recite this mantra.
            </ListItem>
            <ListItem>
              Any married couple facing marital or domestic problems must recite
              this mantra.
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
                  <td>Best time to recite the Hanuman Moola mantra</td>
                  <td>During Sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Who can recite the Hanuman Moola mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>East</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>3. Hanuman Gayatri Mantra</h4>
          <p>
            Lord Hanuman is one of the seven Chiranjivis, meaning immortal
            beings who will walk the earth till the end of the Kaliyug. Hence
            worshipping Lord Hanuman through the Hanuman Gayatri mantra can help
            the native seek the blessings of the immortal Lord. Also, as Lord
            Hanuman is known to be the most soft-hearted deity, he is thus known
            to be the boon giving deity.
          </p>
          <p>
            <strong>The Hanuman Gayatri mantra is:</strong>
          </p>
          <p className="red">|| ॐ आञ्जनेयाय विद्महे वायुपुत्राय धीमहि।</p>
          <p>Om Anjaneyaya Vidmahe Vayuputraya Dhimahi।</p>

          <p className="red">तन्नो हनुमत् प्रचोदयात् ||</p>
          <p>Tanno Hanumat Prachodayat॥</p>
          <p>
            <strong>Meaning-</strong>We pray to the son of Goddess Anjani and
            the son of the Wind. May Lord Hanuman lead our intellect towards
            intelligence and knowing.
          </p>
          <h4>Benefits of chanting the Hanuman Gayatri mantra</h4>
          <UnorderedList>
            <ListItem>
              Married couples longing for a child but not being able to conceive
              one for themselves must chant the Hanuman Gayatri mantra.
            </ListItem>
            <ListItem>
              One suffering from the ill effects of Shani Sade Sati must chant
              this mantra.
            </ListItem>
            <ListItem>
              God Hanuman is the embodiment of strength, stamina, loyalty, and
              devotion, and hence chanting the Hanuman Gayatri mantra will help
              you develop qualities like him.
            </ListItem>
            <ListItem>
              Always make a note to chant this mantra when going out on any
              journey as it safeguards you from any kind of mishaps.
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
                  <td>Best time to recite the Hanuman Gayatri Mantra</td>
                  <td>Tuesday, Saturday during Sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>Who can recite the Hanuman Gayatri Mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>
                    {" "}
                    East while sitting in front of Hanuman idol or yantra
                  </td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>4. Anjaneya Mantra</h4>
          <p>
            Anjaneya is another name for Lord Hanuman, and there is a dedicated
            mantra associated with this name of Lord Hanuman. As per
            astrologers, chanting the Anjaneya mantra is especially useful for
            working natives as it adds creativity to their intellect. The mantra
            also helps in seeing your goals clearly and prompts you to work
            according to them.
          </p>
          <p>
            <strong>Here is the Anjaneya Mantra:</strong>
          </p>
          <p className="red">
            ॐ श्री वज्रदेहाय रामभक्ताय वायुपुत्राय नमोsस्तुते ।
          </p>
          <p>Om Shree Vajradehaya Ramabhakthaya Vayuputhraya Namosthuthe</p>

          <p>
            <strong>Meaning-</strong>I bow before Lord Hanuman who has a body
            made of the vajra, who is a devotee of Lord Ram and the son of wind
            (Vayu).
          </p>
          <h4>Benefits of chanting the Anjaneya mantra</h4>
          <UnorderedList>
            <ListItem>
              If looking for a job or going for an interview, always make sure
              you chant this mantra.
            </ListItem>
            <ListItem>
              Students who are preparing for any kind of exam must chant the
              Anjaneya mantra to increase their confidence.
            </ListItem>
            <ListItem>
              The Hanuman mantra is also useful for employees waiting for the
              long-awaited promotion.
            </ListItem>
            <ListItem>
              The mantra can also help in eradicating any kind of problem coming
              into your life through higher authority.
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
                  <td>Best time to recite the Hanuman Anjaneya Mantra</td>
                  <td>Thursday, during Sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Who can recite the Hanuman Anjaneya Mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>East while sitting in front of Hanuman idol or yantra</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>5. Manojavam Maarutatulyavegam Mantra</h4>
          <p>
            Lord Hanuman is the master of the senses and honoured for his
            creativity, wisdom and intellect. And in the competitive world we
            live in, we can surely use some of these qualities for our good.
            Hence, worshipping the Lord Hanuman through the Manojavam
            Maarutatulyavegam Mantra helps you have those qualities for
            yourself.
          </p>
          <p>
            <strong>The Manojavam Maarutatulyavegam Mantra is:</strong>
          </p>
          <p className="red">
            || मनोजवम् मारुततुल्यवेगम् जितेन्द्रियम् बुद्धिमताम् वरिष्ठम्।
          </p>
          <p>Manojavam Marutatulyavegam Jitendriyam Buddhimatam Varishtham।</p>
          <p className="red">
            वातात्मजम् वानरयूथमुख्यम् श्रीरामदूतम् शरणं प्रपद्ये ||
          </p>
          <p>Vatatmajam Vanarayuthamukhyam Shriramadutam Sharanam Prapadye॥</p>
          <p>
            <strong>Meaning - </strong>We pray to the one who is swift as
            thought (manojavam-), the one who is more powerful than the wind,
            the one who has conquered his senses, the one who is supreme among
            all intelligent beings, the son of the wind-god, the commander of
            the army of forest creatures, Let me find refuge in Lord Rama’s
            Messenger, the incomparable Lord Hanuman. Please accept me and my
            prayers at your feet.
          </p>
          <h4>Benefits of Manojavam Maarutatulyavegam Mantra</h4>
          <UnorderedList>
            <ListItem>
              Reciting the Manojavam Maarutatulyavegam Mantra inflicts wisdom in
              humans.
            </ListItem>
            <ListItem>
              The mantra is also known to help the native think maturely and not
              be self-centred or selfish about others.
            </ListItem>
            <ListItem>
              The mantra helps strike a balance between mind and heart, which
              helps in better decision making.
            </ListItem>
            <ListItem>
              The Hanuman Manojavam Marutatulyavegam Mantra prompts you to think
              well before you speak.
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
                    Best time to recite the Manojavam Marutatulyavegam Mantra
                  </td>
                  <td>Thursday, during Sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>1008, within a period of 40 days</td>
                </tr>
                <tr>
                  <td>Who can recite the Manojavam Marutatulyavegam Mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>
                    {" "}
                    East while sitting in front of Hanuman idol or yantra
                  </td>
                </tr>
              </tbody>
            </table>
          </table>
          <h4>6. Karya Siddhi Hanuman Mantra</h4>
          <p>
            The term ‘Karya’ in the Hanuman Karya Siddhi mantra means endeavour
            and ‘siddhi’ means fulfilment or success. When you wish to succeed
            in a task dear to your heart, chanting this mantra will bring you
            closer to success. If you can’t figure out a way to do something and
            any of your work is stuck and the reason is not you (like court
            cases), in such situations too, the Karya Siddhi Hanuman Mantra can
            come in handy for you. The mantra is chanted to attract wealth and
            success in life. A native can thwart any kind of delay in their life
            by chanting the Hanuman Karya Siddhi mantra.
          </p>
          <p>
            <strong>Here is the Karya Siddhi Hanuman Mantra:</strong>
          </p>
          <p className="red">त्वमस्मिन कार्य निर्योगे प्रमाणं हरिसत्तमा |</p>
          <p>Tvamasmin Kārya Niryoge Pramānam Hari Sattama।</p>
          <p className="red">हनुमान यात्नमास्ताया दु:ख क्षय करोभाव ||</p>
          <p>Hanuman Yatna Māsthāya Dukha Kshaya Karo Bhava ॥</p>
          <p>
            <strong>Meaning - </strong>O Hanuman, the best among monkeys! You
            are capable of fulfilling this task. O Hanuman! Become the one who
            can remove my misfortunes
          </p>
          <h4>Benefits of chanting the Hanuman Karya siddhi mantra</h4>
          <UnorderedList>
            <ListItem>
              The mantra is also known to inflict happiness in the life of the
              native who chants it regularly.
            </ListItem>
            <ListItem>
              When your life gets marred with delays or you feel strangled at
              any point in life, the Hanuman Karya siddhi mantra can help you in
              sailing smoothly through life.
            </ListItem>
            <ListItem>
              The best support in Daiva Bal, meaning the divine support from
              God. Chanting this mantra helps you have the support of Lord
              Hanuman.
            </ListItem>
            <ListItem>
              Also, remember that whenever you chant the Karya Siddhi mantra,
              make sure you never wish for the downfall of anyone, not even your
              enemies.
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
                  <td>Best time to recite theHanuman Karya siddhi mantra</td>
                  <td>Saturday, during Sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>1100 times for 40 days</td>
                </tr>
                <tr>
                  <td>Who can recite the Hanuman Karya siddhi mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>East while sitting in front of Hanuman idol or yantra</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>7. Bhakta Hanuman Mantra</h4>
          <p>
            If you are a pious devotee of Lord Hanuman, then the Bhakta Hanuman
            Mantra is just for you. The Mantra works best if you recite the same
            on your way to the Hanuman Temple on Saturdays. Reciting the Bhakta
            Hanuman Mantra helps in fighting mental depression and waves of
            negative thoughts. The mantra chanting brings you closer to God and
            helps you see your purpose in life in a better way.
          </p>
          <p>
            <strong>Here is the Hanuman Bhakta Mantra:</strong>
          </p>
          <p className="red">त्वमस्मिन कार्य निर्योगे प्रमाणं हरिसत्तमा |</p>
          <p className="red">हनुमान यात्नमास्ताया दु:ख क्षय करोभाव ||</p>
          <p>Anjani Garbha Sambhoota Kapeendra Sachivottama।</p>
          <p>Rama Priya Namastubhyam Hanuman Raksh Sarvadaa॥</p>
          <p>
            <strong>Meaning - </strong>I take refuge in Hanuman who was born
            from the womb of Mother Anjani, and who was the most excellent
            minister of the King of Sugriva. Who is extremely Dear to Sri Rama;
            I Bow to You, O Hanuman, Please Protect me Always.
          </p>
          <h4>Benefits of chanting the Bhakta Hanuman Mantra</h4>
          <UnorderedList>
            <ListItem>
              The Haumana Bhakta mantra is especially for the natives who are
              facing problems in life due to the harmful effects of Mangal or
              Lord Mars.
            </ListItem>
            <ListItem>
              The Lord Hanuman Bhakta Mantra chanting helps in eradicating the
              problems of the devotees of Lord Hanuman faster than any other
              mantra in astrology.
            </ListItem>
            <ListItem>
              Hanuman Mantra makes the native a learned and emotionally stable
              being.
            </ListItem>
            <ListItem>
              The Bhakta mantra brings the native closer to Lord Hanuman.
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
                  <td>Best time to recite the Bhakta Hanuman Mantra</td>
                  <td>Saturday, during Sunrise</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>8 times, daily</td>
                </tr>
                <tr>
                  <td>Who can recite the Bhakta Hanuman Mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>East while sitting in front of Hanuman idol or yantra</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h4>8. Hanuman Mantra</h4>
          <p>
            As per astrologers, the Hanuman Mantra is chanted to get instant
            results in any situation and for any aspect of your life. Be it the
            fear of something or a hindrance in success, reciting the hHanuman
            mantra can help in tackling any situation with ease.
          </p>
          <p>
            <strong>Here is the Hanuman Mantra:</strong>
          </p>
          <p className="red">ॐ नमो भगवते आंजनेयाय महाबलाय स्वाहा।</p>
          <p>Om Namo Bhagvate Aanjaneyaay Mahaabalaay Swaahaa॥</p>
          <p>
            <strong>Meaning - </strong>I bow down and surrender to Lord Hanuman,
            he who is the son of the powerful Anjana.
          </p>
          <h4>Benefits of Hanuman mantra</h4>
          <UnorderedList>
            <ListItem>
              This mantra is chanted to eradicate diseases, evil spirits, and
              other types of disturbances in life.
            </ListItem>
            <ListItem>
              The Mantra works instantly and can be recited from anywhere. It
              helps in achieving stability of mind.
            </ListItem>
            <ListItem>
              If not chanting, listening to the mantra can also help in calming
              you down and even aid good sleep.
            </ListItem>
            <ListItem>
              The mantra imparts courage and strength into the human.
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
                  <td>Best time to recite the Hanuman mantra</td>
                  <td>Anytime</td>
                </tr>
                <tr>
                  <td>Number of times to chant this mantra</td>
                  <td>108 times daily</td>
                </tr>
                <tr>
                  <td>Who can recite the Hanuman mantra?</td>
                  <td>Anyone</td>
                </tr>
                <tr>
                  <td>Chant this mantra facing</td>
                  <td>East while sitting in front of Hanuman idol or yantra</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Overall benefits of chanting Hanuman mantras</h3>
          <UnorderedList>
            <ListItem>
              As astrologers claim, Lord Hanuman is the source of power and
              courage, hence chanting the Hanuman mantra can help you attract
              both mental and physical strength to overcome your troubles and
              problems.
            </ListItem>
            <ListItem>
              Hanuman Mantras have the power to make you resilient. Hence, if
              you chant the Hanuman Mantras on a regular basis, it is more
              likely that you will overcome most of your difficulties.
            </ListItem>
            <ListItem>
              Chanting Hanuman mantras also aid health issues, especially ones
              related to depression and stress.
            </ListItem>
            <ListItem>
              Astrologers claim to have seen for themselves instances where
              people have risen from health situations such as coma just because
              their close ones were sincere about regularly chanting the Hanuman
              Mantra to them.
            </ListItem>
            <ListItem>
              It is a fact that the chanting of the Hanuman Mantra helps in
              warding off any bad spirits or the influence of ghosts from the
              surrounding of the native.
            </ListItem>
            <ListItem>
              Many sports person claim to recite Hanuman Mantra or Hanuman
              Chalisa before any competition of theirs. Hanuman Mantra provides
              them with the necessary stamina, courage, and power to do better
              in their endeavour.
            </ListItem>
            <ListItem>
              Lord Hanuman not only stands for physical strength; he also stands
              for mental strength. As per astrologers, chanting the Hanuman
              mantra can help the native in making the right decisions across
              all aspects of life.
            </ListItem>
            <ListItem>
              Lord Hanuman as a giver ensures success for the native who
              practises Hanuman Mantra with utmost sincerity and devotion.
            </ListItem>
            <ListItem>
              Problems such as debt or problems of failed marriages can also be
              removed if you chant the Hanuman mantra. Hanuman Mantra gives you
              the much needed positive energy to overcome such problems in your
              life.
            </ListItem>
            <ListItem>
              Most of the time, it is our fears that stop us from doing
              something big in life. Hanuman Mantra imparts in you the courage
              to face your fears head strong and fight any unpredictable
              situation with bravery.
            </ListItem>
            <ListItem>
              Hanuman Mantras act as a protective shield for the native and help
              you in fighting off any wrong moves from your enemies.
            </ListItem>
            <ListItem>
              Hanuman Mantras ignites your focus to ensure whatever you do, you
              do it with utmost clarity and devotion.
            </ListItem>
            <ListItem>
              Hanuman Mantras purify your body, mind, and soul from negative
              influences. It makes your life pious and free from bad influences.
            </ListItem>
            <ListItem>
              While many people wear evil eye bands to save themselves from Buri
              Nazar, meanwhile simple chanting of the Hanuman Mantra can also
              safeguard you from bad or evil-eye.
            </ListItem>
            <ListItem>
              At times when we are at our weakest and can't figure out where to
              go next, in such situations, Hanuman Mantra helps us in fighting
              our weakest.
            </ListItem>
            <ListItem>
              Hanuman Mantra improves your work efficiency. You are able to work
              for more time and usually brimming with new ideas if you chant the
              Hanuman mantra on a regular basis.
            </ListItem>
          </UnorderedList>
          <h4>How to chant the Hanuman mantra?</h4>
          <p>
            There are so many types of Hanuman mantras, and each of them has a
            dedicated time and day when you must recite them. However, the
            general do's and don't that you must consider when reciting the
            Hanuman mantra are given below.
          </p>
          <UnorderedList>
            <ListItem>
              The most suitable day for chanting the Hanuman mantra is Saturday.
              However, some Hanuman mantras can be chanted on other days as
              well.
            </ListItem>
            <ListItem>
              To start with, get up early in the morning and have a bath.
            </ListItem>
            <ListItem>
              Place the idol of Hanuman ji in front of you as you sit facing the
              East direction
            </ListItem>
            <ListItem>
              You must make sure that you use fresh flowers and incense to make
              the chanting and meditation better.
            </ListItem>
            <ListItem>
              Keeping water pot and Kumkum shall also add a plus point when
              reciting the Hanuman mantra.
            </ListItem>
            <ListItem>
              Make sure your mind is free of any thought, and you are able to
              concentrate on what you recite.
            </ListItem>
            <ListItem>
              When worshipping Hanuman ji, offer coconut, jaggery-gram prasad or
              imarti
            </ListItem>
          </UnorderedList>
        </div>
      </Container>
    </Layout>
  );
};

export default Hanuman;

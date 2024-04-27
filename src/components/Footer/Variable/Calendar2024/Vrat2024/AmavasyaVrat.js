import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";

const StyledDiv = styled.div`
  .body {
    width: 90%;
    margin: auto;
    text-align: justify;
  }

  .heading {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
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
  .inline-text {
    color: red;
    display: inline;
  }
  .inline-text:hover {
    font-weight: bold;
  }
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const AmavasyaVrat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Amavasya in 2024">
      <StyledDiv>
        <div className="body">
          <h1 className="heading">
            Amavasya in 2024: Date, Puja Muhurat, & Rituals
          </h1>
          <p>
            Amavasya, a significant lunar phase in the Hindu calendar, coincides
            with the new moon, and it holds great spiritual and religious
            significance. The term "Amavasya" is derived from Sanskrit, with
            "ama" signifying 'together' and "vasya" meaning 'to dwell,'
            symbolising the union of the sun and the moon. This phase occurs
            when the moon lies directly between the Earth and the sun, rendering
            the night sky completely devoid of moonlight.
          </p>
          <p>
            The darkness of Amavasya provides an ideal backdrop for engaging in
            spiritual practices like meditation, prayer, and fasting. It's a
            time when people also pay homage to their ancestors, seeking their
            blessings. Numerous Hindu festivals, including Diwali and Navratri,
            are observed during Amavasya, making it a focal point for cultural
            and social gatherings. Acts of charity and kindness during this
            period are believed to attract blessings and good fortune.
          </p>
          <h3>Significance of Amavasya</h3>
          <p>
            Amavasya, the day of the new moon in the Hindu calendar, holds
            significant spiritual and cultural importance.
          </p>
          <UnorderedList>
            <ListItem>
              <strong>Spiritual Practices:</strong> Amavasya is considered an
              auspicious time for various spiritual practices. The absence of
              moonlight creates a serene and conducive environment for
              meditation, prayer, and introspection. Many people use this time
              to deepen their spiritual connection and inner growth.
            </ListItem>
            <ListItem>
              <strong>Ancestral Worship:</strong> Amavasya is a day for honoring
              and remembering one's ancestors. It is believed that during this
              time, the spirits of departed loved ones are closer to the earthly
              realm. Families often perform rituals and offer prayers to seek
              the blessings of their ancestors and ensure their well-being in
              the afterlife.
            </ListItem>
            <ListItem>
              <strong>Festivals and Celebrations:</strong> Several Hindu
              festivals are celebrated on Amavasya, making it a time for joyous
              gatherings and festivities. For example, Diwali, one of the most
              significant Hindu festivals, falls on Amavasya's night. Navratri,
              a nine-night festival dedicated to the goddess Durga, also begins
              on the first day of Amavasya.
            </ListItem>
            <ListItem>
              <strong>Charity and Acts of Kindness:</strong> Amavasya is
              considered a favorable time for acts of charity and compassion.
              Many people engage in giving to the less fortunate, donating to
              temples or charities, or helping those in need. Such acts are
              believed to bring blessings and positive karma.
            </ListItem>
            <ListItem>
              <strong>Astrological Significance:</strong> In Vedic astrology,
              Amavasya is a crucial time for performing certain remedies or
              rituals to mitigate the adverse effects of malefic planetary
              positions. People consult astrologers and perform specific rituals
              to enhance their well-being.
            </ListItem>
            <ListItem>
              <strong>Cleansing and Renewal:</strong> The dark night of Amavasya
              is often associated with cleansing and renewal. It is a time to
              let go of negativity, bad habits, and impurities and start afresh.
              Many individuals observe fasting or engage in purification rituals
              to purify the body and mind.
            </ListItem>
          </UnorderedList>
          <p>
            To know about your future,{" "}
            <div className="inline-text">Talk to Astrologer</div> now!
          </p>
          <h2>List of Amavasya dates in 2024</h2>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <thead>
                <tr>
                  <th>Amavasya Vrat 2024</th>
                  <th>Amavasya tithi </th>
                  <th>Shubh Muhurat (From)</th>
                  <th>Shubh Muhurat (To)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pausha, Krishna Amavasya</td>
                  <td>January 11, 2024, Thursday</td>
                  <td>08:10 PM, Jan 10</td>
                  <td>05:26 PM, Jan 11</td>
                </tr>
                <tr>
                  <td>Magha, Krishna Amavasya</td>
                  <td> February 9, 2024, Friday</td>
                  <td>08:02 AM, Feb 09</td>
                  <td>04:28 AM, Feb 10</td>
                </tr>
                <tr>
                  <td>Phalguna, Krishna Amavasya</td>
                  <td>March 10, 2024, Sunday</td>
                  <td>06:17 PM, Mar 09</td>
                  <td>02:29 PM, Mar 10</td>
                </tr>
                <tr>
                  <td>Chaitra, Krishna Amavasya</td>
                  <td>April 8, 2024, Monday</td>
                  <td>03:21 AM, Apr 08</td>
                  <td>11:50 PM, Apr 08</td>
                </tr>
                <tr>
                  <td>Vaishakha, Krishna Amavasya</td>
                  <td>May 7, 2024, Tuesday</td>
                  <td>11:40 AM, May 07</td>
                  <td>08:51 AM, May 08</td>
                </tr>
                <tr>
                  <td>Jyeshtha, Krishna Amavasya</td>
                  <td>June 6, 2024, Thursday</td>
                  <td>07:54 PM, Jun 05</td>
                  <td>06:07 PM, Jun 06</td>
                </tr>
                <tr>
                  <td>Ashadha, Krishna Amavasya</td>
                  <td> July 5, 2024, Friday</td>
                  <td> 04:57 AM, Jul 05</td>
                  <td>04:26 AM, Jul 06</td>
                </tr>
                <tr>
                  <td>Shravana, Krishna Amavasya</td>
                  <td>August 4, 2024, Sunday</td>
                  <td>03:50 PM, Aug 03</td>
                  <td>04:42 PM, Aug 04</td>
                </tr>
                <tr>
                  <td>Bhadrapada, Krishna Amavasya</td>
                  <td>September 2, 2024, Monday</td>
                  <td>05:21 AM, Sep 02</td>
                  <td>07:24 AM, Sep 03</td>
                </tr>
                <tr>
                  <td>Ashwina, Krishna Amavasya</td>
                  <td>October 2, 2024, Wednesday</td>
                  <td>09:39 PM, Oct 01</td>
                  <td>12:18 AM, Oct 03</td>
                </tr>
                <tr>
                  <td>Kartika, Krishna Amavasya</td>
                  <td>November 1, 2024, Friday</td>
                  <td>03:52 PM, Oct 31</td>
                  <td>06:16 PM, Nov 01</td>
                </tr>
                <tr>
                  <td>Margashirsha, Krishna Amavasya</td>
                  <td>December 1, 2024, Sunday</td>
                  <td>10:29 AM, Nov 30</td>
                  <td>11:50 AM, Dec 01</td>
                </tr>
                <tr>
                  <td>Pausha, Krishna Amavasya</td>
                  <td>December 30, 2024, Monday</td>
                  <td>04:01 AM, Dec 30</td>
                  <td>03:56 AM, Dec 31</td>
                </tr>
              </tbody>
            </table>
          </table>
          <p>
            For the best advice about your life,{" "}
            <div className="inline-text">Talk to Astrologer</div> Now!
          </p>
          <h3>Amavasya Vrat</h3>
          <p>
            Amavasya Vrat, also known as Amavasya fasting, is a religious
            observance in Hinduism where individuals or devotees abstain from
            certain foods and engage in spiritual practices on the day of
            Amavasya. This fasting is observed to seek spiritual purification,
            show devotion to deities, and receive blessings.
          </p>
          <p>Here are some key aspects of Amavasya Vrat:</p>
          <UnorderedList>
            <ListItem>
              <strong>Fasting:</strong> Fasting is a central aspect of Amavasya
              Vrat. Devotees abstain from consuming solid food during the day of
              Amavasya. Some may choose to have only water or consume simple,
              vegetarian meals once during the day. The fasting period typically
              lasts from sunrise to sunset.
            </ListItem>
            <ListItem>
              <strong>Prayer and Meditation:</strong> Amavasya Vrat is an
              opportune time for devotees to engage in prayer, meditation, and
              spiritual reflection. Many people visit temples, perform pujas
              (rituals), and recite prayers and mantras dedicated to their
              chosen deities.
            </ListItem>
            <ListItem>
              <strong>Ancestral Worship:</strong> Since Amavasya is also a time
              for honoring ancestors, some individuals include rituals and
              offerings to their forefathers as part of their fasting
              observance. This can involve lighting lamps or candles, offering
              food, and performing specific rituals to seek blessings for the
              departed souls.
            </ListItem>
            <ListItem>
              <strong>Charity and Acts of Kindness:</strong> As part of their
              fasting, some people choose to perform acts of charity and
              kindness. This can include donating to the needy, helping the less
              fortunate, or participating in community service.
            </ListItem>
            <ListItem>
              <strong>Purification:</strong> Amavasya Vrat is seen as a time for
              spiritual purification and inner cleansing. Devotees aim to purify
              their minds and bodies, release negativity, and renew their
              spiritual commitment.
            </ListItem>
            <ListItem>
              <strong>Specific Deity Worship:</strong> Some individuals may
              choose to observe Amavasya Vrat with a particular deity in mind.
              For example, devotees of Lord Shiva may dedicate their fasting and
              prayers to Lord Shiva, while others may choose a different deity
              based on their personal beliefs and traditions.
            </ListItem>
            <ListItem>
              <strong>Breaking the Fast:</strong> The fast is typically broken
              after sunset or at the designated time specified for the
              observance. Devotees often break their fast with a simple meal or
              prasad (offering) received from the temple.
            </ListItem>
          </UnorderedList>
          <h3>How to keep Amavasya Vrat?</h3>
          <p>
            Keeping Amavasya Vrat, the fast observed on the day of the new moon
            in the Hindu lunar calendar, involves certain ritand uals practices
            aimed at spiritual purification and devotion.
          </p>
          <UnorderedList>
            <ListItem>
              <strong>Select a Suitable Deity:</strong> Decide if you want to
              observe the fast with a specific deity or in a more general
              spiritual context. Some people dedicate their fast to a particular
              deity, like Lord Shiva, Goddess Lakshmi, or Lord Krishna, while
              others may keep it in a more universal sense.
            </ListItem>
            <ListItem>
              <strong>Intention and Sankalp:</strong> Begin the day with a clear
              intention and sankalp (vow) to observe Amavasya Vrat for spiritual
              purification, devotion, and seeking blessings.
            </ListItem>
            <ListItem>
              <strong>Fasting:</strong> Abstain from consuming solid food during
              the day. The fasting period typically starts from sunrise and
              continues until sunset. Some people choose to consume only water
              or have a simple, vegetarian meal once during the day. The level
              of strictness can vary based on personal preferences and
              traditions.
            </ListItem>
            <ListItem>
              <strong>Prayer and Meditation:</strong> Spend time in prayer,
              meditation, and spiritual contemplation. You can visit a temple or
              perform puja (ritual worship) at home. Recite prayers, mantras, or
              bhajans (devotional songs) dedicated to your chosen deity or for
              spiritual growth.
            </ListItem>
            <ListItem>
              <strong>Ancestral Worship:</strong> If ancestral worship is part
              of your tradition, Ancestral Worship: If ancestral worship is part
              of your tradition, perform rituals and offer prayers and offerings
              to honor your ancestors. Lighting a lamp or candle in their memory
              is a common practice.
            </ListItem>
            <ListItem>
              <strong>Ancestral Worship</strong>: If ancestral worship is part
              of your tradition, Charity and Acts of Kindness: Engage in acts of
              charity and kindness during the day. This can include donating to
              the needy, helping the less fortunate, or participating in
              community service. Acts of compassion are believed to enhance the
              positive effects of the fast.
            </ListItem>
            <ListItem>
              <strong>Ancestral Worship</strong>: If ancestral worship is part
              of your tradition, Purification and Inner Cleansing: Use this day
              as an opportunity for inner purification and cleansing. Reflect on
              your thoughts, actions, and intentions, and strive to release
              negativity and attain inner peace.
            </ListItem>
            <ListItem>
              <strong>Ancestral Worship</strong>: If ancestral worship is part
              of your tradition, Breaking the Fast: The fast is typically broken
              after sunset, at the designated time for the observance to end.
              Break your fast with a simple meal or prasad (offering) that may
              have been received from the temple or prepared at home.
            </ListItem>
            <ListItem>
              <strong>Offerings:</strong> If you have a specific deity in mind,
              you can offer flowers, fruits, sweets, or other items as an
              offering during your prayers and puja.
            </ListItem>
            <ListItem>
              <strong>Continued Devotion:</strong> Continue your devotion and
              spiritual practices throughout the day, maintaining a sense of
              reverence and gratitude.
            </ListItem>
          </UnorderedList>
          <p>
            To know the future of your relationship,{" "}
            <dic className="inline-text">Chat with astrologer</dic>
          </p>
          <h3>Benefits of Keeping the Amavasya Vrat</h3>
          <p>
            Keeping the Amavasya Vrat, the fast observed on the day of the new
            moon in the Hindu lunar calendar, is believed to bring several
            spiritual and personal benefits, according to Hindu traditions and
            beliefs.
          </p>
          <UnorderedList>
            <ListItem>
              <strong>Spiritual Purification:</strong> Amavasya Vrat is seen as
              an opportunity for spiritual purification. Fasting and engaging in
              prayer and meditation on this day are believed to cleanse the mind
              and body of impurities, allowing individuals to draw closer to the
              divine.
            </ListItem>
            <ListItem>
              <strong>Enhanced Devotion:</strong> Observing the fast is a way to
              express devotion and reverence to a chosen deity or in a more
              general spiritual context. It deepens one's connection to the
              divine and strengthens their faith.
            </ListItem>
            <ListItem>
              <strong> Blessings from Deities:</strong> Many people dedicate
              their Amavasya Vrat to specific deities, such as Lord Shiva,
              Goddess Lakshmi, or Lord Krishna. It is believed that observing
              the fast with devotion can lead to the bestowal of blessings and
              divine grace from these deities.
            </ListItem>
            <ListItem>
              <strong>Inner Peace and Self-Reflection:</strong> The day of
              Amavasya encourages self-reflection and introspection. Fasting and
              spiritual practices provide an opportunity to contemplate one's
              life, thoughts, and actions, leading to greater inner peace and
              self-awareness.
            </ListItem>
            <ListItem>
              <strong>Ancestral Blessings:</strong> For those who incorporate
              ancestral worship into their observance, Amavasya Vrat is a time
              to honor and seek blessings from departed ancestors. It is
              believed that performing rituals for ancestors on this day can
              bring their blessings and ensure their well-being in the
              afterlife.
            </ListItem>
            <ListItem>
              <strong>Karma Cleansing:</strong> Some individuals view Amavasya
              Vrat as a way to cleanse past karmas (actions) and reduce the
              impact of negative karmic influences in their lives.
            </ListItem>
            <ListItem>
              <strong>Charity and Compassion:</strong> Engaging in acts of
              charity and kindness on the day of Amavasya is considered
              especially auspicious. Such acts are believed to attract positive
              karma and good fortune.
            </ListItem>
            <ListItem>
              <strong>Cultural and Community Connection:</strong> Amavasya Vrat
              is often observed collectively within families and communities. It
              strengthens cultural and community bonds, fostering a sense of
              togetherness and shared spirituality.
            </ListItem>
            <ListItem>
              <strong>Fulfillment of Desires:</strong> It is believed that
              sincere observance of Amavasya Vrat can help fulfill one's wishes
              and desires, provided they are in line with virtuous and noble
              goals.
            </ListItem>
            <ListItem>
              <strong>Renewal and Fresh Start:</strong> The fast on Amavasya can
              symbolize a fresh start and a chance to release negativity and bad
              habits. It offers an opportunity for renewal and personal growth.
            </ListItem>
          </UnorderedList>
          <h3>Astrological significance of Amavasya</h3>
          <p>
            Amavasya, the day of the new moon in the Hindu lunar calendar, holds
            astrological significance in Vedic astrology. Astrologers and
            practitioners often consider Amavasya as a time when certain
            planetary positions and energies are heightened or have specific
            effects on individuals.
          </p>
          <UnorderedList>
            <ListItem>
              <strong>Dosha or Malefic Effects:</strong> In Vedic astrology,
              Amavasya is sometimes associated with doshas or malefic effects,
              particularly when it falls on certain days of the week or in
              specific lunar months. For example, it is considered inauspicious
              if Amavasya falls on a Tuesday or Saturday.
            </ListItem>
            <ListItem>
              <strong>Pitru Dosha:</strong> Amavasya is closely linked to pitru
              dosha, which is a dosha associated with ancestral karma. It is
              believed that performing rituals and pujas on Amavasya can help
              alleviate pitru dosha and seek the blessings of ancestors.
            </ListItem>
            <ListItem>
              <strong>Astrological Remedies:</strong> Some people use Amavasya
              as a favorable time for performing astrological remedies or pujas
              to mitigate the negative effects of malefic planetary positions in
              their birth charts. Astrologers may suggest specific rituals or
              gemstone recommendations during Amavasya.
            </ListItem>
            <ListItem>
              <strong>New Moon Energies:</strong> Amavasya represents the start
              of a new lunar cycle when the moon is not visible in the night
              sky. Some astrologers believe that this phase can bring a sense of
              renewal and freshness, making it a suitable time for setting
              intentions and goals for the upcoming lunar month.
            </ListItem>
            <ListItem>
              <strong>Spiritual Growth:</strong> From an astrological
              perspective, Amavasya is seen as a time when spiritual energies
              are heightened. Fasting, meditation, and other spiritual practices
              performed on this day are thought to be more potent in aiding
              personal growth and transformation.
            </ListItem>
            <ListItem>
              <strong>Planetary Conjunctions:</strong> The positions and
              conjunctions of planets on Amavasya are closely scrutinized by
              astrologers. Certain planetary alignments during this time may
              have specific astrological implications, and astrologers may offer
              guidance accordingly.
            </ListItem>
            <ListItem>
              <strong>Auspicious Activities:</strong> While some consider
              Amavasya inauspicious for certain activities, others see it as an
              ideal time for specific spiritual or astrological practices. It is
              believed that any actions taken on Amavasya can have a lasting
              impact.
            </ListItem>
          </UnorderedList>
          <h3>List of Some Pujas to perform on Amavasya Vrat</h3>
          <UnorderedList>
            <ListItem>
              <strong>Amavasya Shiva Puja:</strong> Devotees of Lord Shiva often
              perform special pujas on Amavasya to seek the blessings of the
              divine. This may involve offering bilva leaves, water, milk, and
              other items to Lord Shiva's lingam, accompanied by the recitation
              of Shiva mantras.
            </ListItem>
            <ListItem>
              <strong>Amavasya Lakshmi Puja:</strong> For those seeking wealth
              and prosperity, Amavasya is considered an auspicious time to
              worship Goddess Lakshmi. Devotees light lamps, offer flowers,
              sweets, and incense, and chant Lakshmi mantras to invoke her
              blessings.
            </ListItem>
            <ListItem>
              <strong>Pitru Tarpana:</strong> Amavasya is closely associated
              with ancestral worship. Many people perform Pitru Tarpana, a
              ritual that involves offering water and food to honor and seek
              blessings from their ancestors. This is often done near a water
              body.
            </ListItem>
            <ListItem>
              <strong>Amavasya Krishna Puja:</strong> Devotees of Lord Krishna
              may perform special pujas dedicated to Lord Krishna on Amavasya.
              This can include offering fruits, butter, and other items
              associated with Krishna's leelas (divine activities).
            </ListItem>
            <ListItem>
              <strong>Navagraha Puja:</strong> Amavasya is a suitable time for
              performing Navagraha Puja, which is the worship of the nine
              planetary deities in Vedic astrology. This puja is done to
              mitigate the malefic effects of planets and seek their blessings.
            </ListItem>
            <ListItem>
              <strong>Ganesha Puja:</strong> Initiating any auspicious occasion
              with the worship of Lord Ganesha is a common practice in Hinduism.
              Performing a Ganesh Puja on Amavasya is believed to remove
              obstacles and ensure a smooth flow of energy.
            </ListItem>
            <ListItem>
              <strong>Vishnu Puja:</strong> Devotees of Lord Vishnu may choose
              to perform Vishnu Puja on Amavasya to seek his divine grace and
              blessings. This may involve offering flowers, Tulsi leaves, and
              reciting Vishnu mantras.
            </ListItem>
            <ListItem>
              <strong>Durga Puja:</strong> If Amavasya falls during the Navratri
              festival, devotees may perform Durga Puja to honor Goddess Durga.
              This involves reciting Durga mantras and offering prayers to seek
              her protection and blessings.
            </ListItem>
            <ListItem>
              <strong>Surya Puja:</strong> Amavasya is also associated with
              solar worship. Some individuals perform Surya Puja, offering water
              to the sun god, Surya, and chanting Surya mantras for health and
              vitality.
            </ListItem>
            <ListItem>
              <strong>Tulsi Puja:</strong> Worshipping the holy basil plant
              (Tulsi) is a common practice on Amavasya. It involves offering
              water, lighting a lamp, and chanting Tulsi mantras to seek purity
              and blessings.
            </ListItem>
          </UnorderedList>
          <h3>Benefits of Performing Puja on Amavasya</h3>
          <p>
            Performing puja (ritual worship) on Amavasya, the day of the new
            moon in the Hindu lunar calendar, is believed to bring several
            spiritual and personal benefits. The significance of performing puja
            on Amavasya varies depending on the deity or purpose of devotion.
          </p>
          <UnorderedList>
            <ListItem>
              <strong>Blessings of Deities:</strong> Performing puja on Amavasya
              is a way to seek the blessings and divine grace of the chosen
              deity. Each deity is associated with specific qualities and
              powers, and invoking their presence through puja is believed to
              bring their blessings into one's life.
            </ListItem>
            <ListItem>
              <strong>Spiritual Upliftment:</strong> Amavasya is considered an
              auspicious time to engage in spiritual practices, and performing
              puja is a means of connecting with the divine. It is believed to
              elevate one's spiritual consciousness and promote inner growth.
            </ListItem>
            <ListItem>
              <strong>Purification of Mind and Soul:</strong> Puja involves
              rituals, mantras, and meditation, which can help purify the mind
              and soul. It is seen as an opportunity to release negativity and
              attain a state of inner purity.
            </ListItem>
            <ListItem>
              <strong>Protection and Guidance:</strong> Devotees believe that
              performing puja on Amavasya can provide protection from negative
              influences and offer guidance in making important life decisions.
            </ListItem>
            <ListItem>
              <strong>Fulfillment of Desires:</strong> Many individuals perform
              puja on Amavasya to seek the fulfillment of specific desires or
              wishes, whether related to health, wealth, relationships, or
              personal goals.
            </ListItem>
            <ListItem>
              <strong>Karma Cleansing:</strong> It is believed that sincere puja
              on Amavasya can help cleanse past karmas (actions) and mitigate
              the effects of negative karma in one's life.
            </ListItem>
            <ListItem>
              <strong>Ancestral Blessings:</strong> If ancestral worship is part
              of the puja, it is believed to invoke the blessings and protection
              of one's ancestors, ensuring their well-being in the afterlife.
            </ListItem>
            <ListItem>
              <strong>Harmonizing Planetary Influences:</strong> Some
              individuals perform puja on Amavasya to harmonize the effects of
              planetary positions and astrological influences. This can help
              mitigate challenges and enhance positive aspects in one's life.
            </ListItem>
            <ListItem>
              <strong>Strengthening Faith:</strong> Regular observance of puja
              on Amavasya can strengthen one's faith and devotion, deepening
              their connection to the divine.
            </ListItem>
            <ListItem>
              <strong>Cultural and Community Bonding:</strong> Participating in
              puja rituals on Amavasya often involves family and community
              members. It fosters a sense of togetherness, cultural bonding, and
              shared spirituality.
            </ListItem>
            <ListItem>
              <strong>Inner Peace:</strong> Puja on Amavasya can lead to a sense
              of inner peace, tranquility, and well-being.
            </ListItem>
          </UnorderedList>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default AmavasyaVrat;

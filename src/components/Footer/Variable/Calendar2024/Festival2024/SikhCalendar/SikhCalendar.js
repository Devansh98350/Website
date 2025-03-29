import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";
import styled from "styled-components";
import SikhCalendarFYQ from "./SikhCalendarFyq.js";
import Breadcrumbs from "../../../../../Breadcrumb";
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

const SikhCalendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Sikh Holidays 2025" description="" keywords="">
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Sikh Holidays 2025</h1>
          <p>
            Get ready to immerse yourself in a tapestry of vibrant colours, rich
            traditions, and spiritual celebrations as we journey into the Sikh
            Holidays of 2025. The Sikh calendar is a testament to the profound
            spirituality and cultural diversity that defines the Sikh community,
            and in the upcoming year, it promises to deliver a remarkable array
            of festivities that will captivate hearts and minds alike. From the
            awe-inspiring Vaisakhi, a celebration of both the harvest and the
            birth of Khalsa, to the serene Gurpurabs honouring the lives and
            teachings of the Sikh Gurus, each holiday is a unique blend of
            faith, joy, and unity.
          </p>
          <p>
            In 2025, these Sikh holidays will not only mark significant moments
            in Sikh history but also offer a glimpse into the soul-stirring
            world of Sikhism. Whether you're a devoted follower or an eager
            explorer, these celebrations will draw you into the core of Sikh
            culture, fostering a deeper understanding of its values and customs.
            So, prepare to be enchanted by the melodious hymns, mouthwatering
            langar (community kitchen) feasts, and the infectious enthusiasm
            that defines the Sikh holidays in 2025. Join us as we embark on a
            journey through time and tradition, where spirituality meets
            festivity, and where the Sikh spirit shines brighter than ever
            before.
          </p>
          <h2>Sikh Festivals and Holidays in 2025</h2>
          <p>
            The Sikh calendar for the year 2025 in India is filled with
            occasions of deep reverence and celebration, primarily centred
            around the births and martyrdom of the ten Sikh Gurus. These special
            days, known as Gurupurabs, are marked with exuberant festivities and
            hold great significance in Sikh culture. Among these, the birth
            anniversary of Guru Nanak Dev Ji stands out prominently, drawing
            fervent participation and enthusiasm.
          </p>
          <p>
            During Guru Nanak Dev Ji's Gurupurab, the streets come alive with
            vibrant processions, ornate palkis, and melodious city kirtans. The
            air resonates with the soul-stirring sounds of hymns, and the aroma
            of langar, a community kitchen feast, wafts through the air. People
            of all ages can be seen dancing to the beats of folk tunes,
            performing the lively Giddha and Bhangra dances, and joyfully
            expressing their devotion.
          </p>
          <p>
            In addition to the public celebrations, individuals flock to
            Gurudwaras, Sikh temples, on this special day to bow their heads in
            prayer and seek spiritual guidance. The Sikh calendar for 2025 is a
            tapestry of these cultural and religious expressions, inviting all
            to partake in the rich heritage and vibrant traditions of Sikhism.
          </p>
          <p>
            To Get A Detailed Kundli Analysis,{" "}
            <div className="inline-text">Talk To Astrologer</div>
          </p>
          <table>
            <thead>
              <tr>
                <th>Tithi and Day</th>
                <th>Festivals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>13 January, Saturday</td>
                <td>Maghi Lohri</td>
              </tr>
              <tr>
                <td>17 January, Wednesday</td>
                <td>Guru Gobind Singh Ji Jayanti</td>
              </tr>
              <tr>
                <td>22 February, Thursday</td>
                <td>Guru Har Rai Jayanti</td>
              </tr>
              <tr>
                <td>24 February, Saturday</td>
                <td>Guru Ravidas Jayanti</td>
              </tr>
              <tr>
                <td>23 March, Saturday</td>
                <td>Shaheed Bhagat Singh Martyrdom Day</td>
              </tr>
              <tr>
                <td>07 April, Sunday</td>
                <td>Guru Har Rai Guruyai</td>
              </tr>
              <tr>
                <td>09 April, Tuesday</td>
                <td>Guru Amardas Guruyai</td>
              </tr>
              <tr>
                <td>13 April, Saturday</td>
                <td>Guru Hargobind Singh Jyoti Jot</td>
              </tr>
              <tr>
                <td>13 April, Saturday</td>
                <td>Baisakhi or Sikh New Year</td>
              </tr>
              <tr>
                <td>18 April, Thursday</td>
                <td>Guru Angad Dev Jyoti Jot</td>
              </tr>
              <tr>
                <td>22 April, Monday</td>
                <td>Guru Harkishan Singh Jyot Jot, Guru Teg Bahadur Gurayi</td>
              </tr>
              <tr>
                <td>29 April, Monday</td>
                <td>Guru Teg Bahadur Jayanti</td>
              </tr>
              <tr>
                <td>30 April, Tuesday</td>
                <td>Guru Arjun Dev Jayanti</td>
              </tr>
              <tr>
                <td>14 May, Saturday</td>
                <td>Baisakhi or Sikh New Year</td>
              </tr>
              <tr>
                <td>22 May, Wednesday</td>
                <td>Guru Amar Das Jayanti</td>
              </tr>
              <tr>
                <td>31 May, Friday</td>
                <td>Guru Hargobind Singh Gurayai</td>
              </tr>
              <tr>
                <td>16 June, Sunday</td>
                <td>Guru Arjun Dev Jyoti Jyot</td>
              </tr>
              <tr>
                <td>22 June, Saturday</td>
                <td>Guru Hargobind Singh Jayanti</td>
              </tr>
              <tr>
                <td>29 June, Saturday</td>
                <td>Guru Harkishan Singh Jayanti</td>
              </tr>
              <tr>
                <td>04 September, Wednesday</td>
                <td>Guru Granth Sahib Jayanti</td>
              </tr>
              <tr>
                <td>05 September, Thursday</td>
                <td>Guru Arjun Dev Gurayai</td>
              </tr>
              <tr>
                <td>06 September, Friday</td>
                <td>Guru Ramdas Jyoti Jot</td>
              </tr>
              <tr>
                <td>16 September, Monday</td>
                <td>Guru Ramdas Gurayai</td>
              </tr>
              <tr>
                <td>18 September, Wednesday</td>
                <td>Guru Amar Das Jyoti Jot</td>
              </tr>
              <tr>
                <td>22 September, Sunday</td>
                <td>Guru Angad Dev Gurayai</td>
              </tr>
              <tr>
                <td>27 September, Friday</td>
                <td>Guru Nanak Dev Jyoti Jot</td>
              </tr>
              <tr>
                <td>19 October, Saturday</td>
                <td>Guru Ram Das Jayanti</td>
              </tr>
              <tr>
                <td>25 October, Friday</td>
                <td>Guru Harkishan Singh Gurayai</td>
              </tr>
              <tr>
                <td>03 November, Sunday</td>
                <td>Guru Granth Sahib Gurayai</td>
              </tr>
              <tr>
                <td>06 November, Wednesday</td>
                <td>Guru Gobind Singh Jyoti Jot</td>
              </tr>
              <tr>
                <td>15 November, Friday</td>
                <td>Guru Nanak Dev Jayanti</td>
              </tr>
              <tr>
                <td>04 December, Wednesday</td>
                <td>Guru Gobind Singh Gurayai</td>
              </tr>
              <tr>
                <td>06 December, Friday</td>
                <td>Guru Teg Bahadur Jyoti Jot</td>
              </tr>
            </tbody>
          </table>
          <h3>Guru Nanak Jayanti</h3>
          <p>
            Guru Nanak Jayanti, also known as Gurupurab, is a globally
            celebrated occasion observed on the auspicious day of Kartik
            Purnima. This revered day is marked by a vibrant procession known as
            Nagar Kirtan, which takes place a day prior to Guru Parv. Devotees
            from all corners of the world throng to Gurdwaras on this momentous
            day. Inside these sacred sanctuaries, the divine hymns of the Guru
            Granth Sahib reverberate in harmonious kirtan, followed by the
            communal sharing of langar. Among the notable Gurudwaras, Nanak Piao
            near Gujranwala in Delhi holds a special place of reverence.
          </p>
          <h3>Lohri</h3>
          <p>
            Lohri, celebrated with great enthusiasm on the 13th of January,
            signifies the changing of seasons, particularly in northern India
            and Punjab. On this day, people gather wood and cow dung to light a
            sacred bonfire. Encircling the fire, they sing and dance, offering
            sesame, Rewari, groundnut, and more into the flames, sharing the
            bounty among those in attendance.
          </p>
          <h3>Vaisakhi</h3>
          <p>
            Vaisakhi, celebrated every year on the 13th of April, marks the
            harvest season and holds immense significance for the Sikh
            community. It commemorates the founding of the Khalsa by the tenth
            Guru, Guru Gobind Singh. Sikhs engage in various auspicious
            activities on this special day.
          </p>
          <h3>Diwali</h3>
          <p>
            Diwali, widely celebrated across India, holds dual significance for
            Sikhs. While Hindus commemorate it as the return of Lord Rama, Sikhs
            also honour it as the homecoming of their sixth Guru, Guru Gobind
            Sahib Ji, from Gwalior Fort.
          </p>
          <h3>Hola Mohalla</h3>
          <p>
            Hola Mohalla, taking place immediately after Holi, traces its origin
            to Guru Gobind Singh Ji at Anandpur Sahib. This festival, celebrated
            in 2025, features mock battles, allowing participants to hone their
            combat skills and prepare to face potential adversaries.
          </p>
          <p>
            To Read About Your Horoscope 2025 In Detail,{" "}
            <div className="inline-text">Click Here</div>
          </p>
          <h3>Sikh calendar 2025: Know all about Sikhism</h3>
          <p>
            The term "Sikh" signifies a dedicated disciple or learner, and the
            foundation of Sikhism can be traced back to the teachings of Guru
            Nanak Dev Ji in the 15th century. This faith stands apart from both
            Islam and Hinduism, emphasising unique principles. Sikhism is rooted
            in the belief of a single, omnipresent God and underscores the
            fundamental equality of all human beings. Its core tenets encompass
            the remembrance of God, honest livelihood, and the practice of
            donating one-tenth of one's income for the betterment of others.
          </p>
          <p>
            Central to Sikh worship is the Gurdwara, a place of not only
            spiritual devotion but also a refuge for visitors, offering both
            shelter and sustenance. Typically, a Gurdwara proudly displays the
            saffron-coloured triangular 'Nishan Sahib,' an emblem symbolising
            Sikhism and signifying the presence of the Gurdwara to all. Notably,
            there are no designated seating arrangements, as Gurdwaras embrace
            the ethos of treating all visitors equally, fostering a sense of
            unity among congregants.
          </p>
          <p>
            Within the Gurdwara, the air resonates with the continuous singing
            of Gurbani hymns, providing solace and joy to those who frequent its
            sacred halls. Occasional lectures expound upon the life lessons
            imparted by the Gurus. Every Gurdwara features a communal kitchen
            where langar, a meal prepared for all, is served. The distribution
            of langar is a special affair, where individuals from all walks of
            life sit side by side, eradicating distinctions of caste, creed,
            wealth, or poverty. This profound inclusivity sets Sikhism apart
            from conventional societal norms.
          </p>
          <p>
            Gurdwaras are present in numerous countries, open to all who seek
            spiritual nourishment and communal harmony. Visitors are welcomed to
            partake in langar chhak, the act of dining together in the
            courtyard, fostering a sense of unity and equality.
          </p>
          <p>
            At the heart of Sikhism lies the holy scripture, the Guru Granth
            Sahib, compiled by the fifth Guru, Arjan Dev Ji. This revered text
            comprises verses from the Gurus and teachings of like-minded saints,
            serving as a reservoir of spiritual wisdom, illuminating the path of
            enlightenment for all of humanity. Sikhs hold in profound reverence
            the ten Gurus who conveyed the timeless message of a singular God,
            now enshrined in the sacred pages of the Guru Granth Sahib.
          </p>
          <h3>2025 Sikh calendar: The ten Gurus in Sikhism</h3>
          <p>The ten Gurus' names in Sikhism are as follows -</p>
          <UnorderedList>
            <ListItem>Guru Nanak Dev Ji (1469-1539)</ListItem>
            <ListItem>Guru Angad Dev Ji (1539-1552)</ListItem>
            <ListItem>Amar Das (1552-1574)</ListItem>
            <ListItem>Guru Ram Das (1574-1581)</ListItem>
            <ListItem>Guru Arjun Dev (1581-1606)</ListItem>
            <ListItem>Guru Hargobind (1606-1644)</ListItem>
            <ListItem>Guru Har Rai (1645-1661)</ListItem>
            <ListItem>Guru Harkishan (1661-1664)</ListItem>
            <ListItem>Guru Tegh Bar (1664-1675)</ListItem>
            <ListItem>Guru Gobind Singh (1675-1699)</ListItem>
          </UnorderedList>
          <h3>Guru Nanak Dev Ji</h3>
          <p>
            Guru Nanak Dev Ji, born on the auspicious day of Kartik Purnima in
            1469 in what is now Nankana Sahib, Pakistan, was the trailblazing
            founder of Sikhism. His teachings fundamentally revolved around the
            ideals of equality and social justice, transcending distinctions of
            caste, creed, and colour. Guru Nanak emphasised the belief in a
            singular, omnipresent God—one who is genuine, fearless, and devoid
            of enmity, untouched by the cycle of birth and death.
          </p>
          <h3>Guru Ramdas Ji</h3>
          <p>
            Guru Ramdas Ji, the fourth Guru of the Sikhs, was a prolific
            composer of spiritual hymns known as Gurbani. Some of his
            compositions specifically pertain to marriage and engagement
            ceremonies. He is credited with founding the city of Amritsar,
            formerly Ramdaspur, where he warmly invited people to settle,
            prosper, and engage in trade. This city is home to the iconic
            Harimandir Sahib, also known as the Golden Temple, a revered place
            of worship for Sikhs worldwide. The temple is surrounded by a sacred
            healing lake, and its architecture symbolises the principle of
            equality with its four entrances.
          </p>
          <h3>Guru Har Krishan Ji</h3>
          <p>
            Guru Har Krishna Ji, the eighth Guru of the Sikhs, ascended to the
            spiritual throne at the tender age of five, a move met with
            scepticism by some. A Brahmin named Lal Chand challenged Guruji to
            interpret verses from the Gita. To address this challenge, Guru Ji
            asked for any person to be brought forward. Lal Chand Chhajju, an
            illiterate and mute individual, was chosen. Guru Ji placed his mace
            upon Chhajju's head, instantly enlightening him, and Chhajju recited
            the Gita, satisfying Lal Chand. Overwhelmed with shame, Lal Chand
            sought forgiveness and became a disciple of Guru Harkrishna Sahib.
            Subsequently, Guru Ji travelled to Delhi on Raja Jai Singh's
            invitation and resided at his residence, now known as Gurdwara
            Bangla Sahib. Despite Aurangzeb's desire to meet Guru Ji, the Guru
            declined.
          </p>
          <p>
            During this period, a chickenpox epidemic plagued Delhi. Guru Ji
            began treating the afflicted, eventually realising that it was
            impossible to cure everyone. He then immersed his feet in a pond,
            declaring that those who consumed its water would be healed.
            Tragically, Guru Har Krishna Ji succumbed to the epidemic at the age
            of eight.
          </p>
          <h3>Guru Gobind Singh Ji</h3>
          <p>
            Guru Gobind Singh Ji, initially known as Gobind Rai, was born in
            Patna to Guru Tegh Bahadur Sahib, the ninth Guru of the Sikhs. He
            relocated to Punjab at the age of five and established his residence
            in the city of Anandpur, founded by his father. At nine years old,
            he witnessed the plight of Kashmiri Brahmins seeking Guru Tegh
            Bahadur Sahib's assistance against the tyranny of the Mughal
            Emperor. Understanding the gravity of the situation, Guru Tegh
            Bahadur Sahib explained the forced conversions to Islam orchestrated
            by the Emperor.
          </p>
          <p>
            Gobind Rai, in response, questioned his father about the
            significance of his sacrifice. Guru Tegh Bahadur Sahib advised the
            Brahmins to inform Aurangzeb that if he could successfully convert
            Guru Tegh Bahadur, they would willingly follow suit. Convinced that
            his son could shoulder the Guru's mantle, Guru Tegh Bahadur Sahib
            departed for Delhi to face Aurangzeb. There, Aurangzeb presented
            three choices to Guru Tegh
          </p>
          <h3>Bahadur Sahib</h3>
          <p>
            Convert to Islam, perform miracles, or face execution. Guru Sahib
            chose martyrdom, laying down his life. Gurudwara Sheeshganj Sahib in
            Delhi marks this significant event. Guru Tegh Bahadur Sahib's body
            was cremated in Delhi at Gurdwara Rakab Ganj, while his head was
            carried to Anandpur Sahib by a devotee named Jaita and cremated by
            Gobind Rai, and the site came to be known as Sheeshganj.
          </p>
          <p>
            For Detailed Predictions About Your Life,{" "}
            <div className="inline-text">Talk To Astrologer</div>
          </p>
          <SikhCalendarFYQ />
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default SikhCalendar;

import React, { useEffect } from "react";
import Layout from "../../../../../Layout/Layout.js";
import styled from "styled-components";
import JainCalendarFYQ from "./JainCalendarFyq.js";

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

const JainCalendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Jain Calendar 2024">
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Jain Calendar 2024</h1>
          <p>
            The Jain Calendar, an ancient and intricate system, plays a
            significant role in the lives of millions of followers of Jainism
            worldwide. It is more than just a way to keep track of dates; it is
            a spiritual guide that aligns daily activities with celestial events
            and auspicious times. In this comprehensive guide, we will delve
            into the Jain Calendar for the year 2024, shedding light on its
            importance, key features, and the positive impact it has on the
            lives of Jain practitioners.
          </p>
          <p>
            The Jain Calendar, also known as the Vira Nirvana Samvat or Jain
            Panchang, is a lunar calendar used by the Jain community to mark
            significant religious and cultural events. It is based on the lunar
            phases and celestial positions and differs from the commonly used
            Gregorian calendar.
          </p>
          <h3>Key Features of the Jain Calendar:</h3>
          <UnorderedList>
            <ListItem>
              <strong>Lunar-Based:</strong> The Jain Calendar follows the lunar
              cycle, making it an essential tool for the precise calculation of
              festivals, fasts, and other spiritual activities.
            </ListItem>
            <ListItem>
              <strong> Tithis and Nakshatras:</strong> It is intricately
              structured, incorporating tithis (lunar days) and nakshatras
              (lunar mansions) to determine auspicious timings for various
              rituals and ceremonies.
            </ListItem>
            <ListItem>
              <strong> Jain Festivals:</strong> The calendar features an array
              of Jain festivals, including Mahavir Jayanti, Paryushana, Diwali,
              and many more. These festivals hold deep spiritual significance
              for Jains and are celebrated with great fervour.
            </ListItem>
            <ListItem>
              <strong>Fasting Days:</strong> The Jain Calendar provides a
              schedule for fasting days, an integral part of Jain religious
              practice. Fasts are observed on specific tithis and are believed
              to purify the soul and promote self-discipline.
            </ListItem>
          </UnorderedList>
          <h3>Positive Impact of the Jain Calendar:</h3>
          <UnorderedList>
            <ListItem>
              <strong>Spiritual Alignment:</strong> The Jain Calendar helps
              individuals align their daily lives with Jain principles and
              values. It ensures that daily activities and rituals are in
              harmony with the cosmos, fostering spiritual growth.
            </ListItem>
            <ListItem>
              <strong> Cultural Preservation:</strong> It serves as a vital
              instrument in preserving Jain culture and traditions. Through the
              calendar, Jains can uphold their unique way of life and pass it on
              to future generations.
            </ListItem>
            <ListItem>
              <strong> Community Unity:</strong> The Jain Calendar plays a
              pivotal role in uniting the Jain community. Festivals and fasting
              days provide an opportunity for Jains to come together, strengthen
              their bonds, and share their religious experiences.
            </ListItem>
            <ListItem>
              <strong> Personal Growth:</strong> By following the Jain Calendar,
              individuals are encouraged to lead a disciplined life, practice
              non-violence, and engage in charitable activities, fostering
              personal growth and contributing to a harmonious society.
            </ListItem>
          </UnorderedList>
          <p>
            To Read About Your Horoscope 2024 In Detail,{" "}
            <div className="inline-text">Click Here</div>
          </p>
          <h3>Jain Calendar 2024: January</h3>
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
                  <th>Day/Tithi</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7 January, Sunday</td>
                  <td>Parshwanath Jayanti</td>
                </tr>
                <tr>
                  <td>14 January, Sunday</td>
                  <td>Yatindra Sureshwar Day / Triastuti</td>
                </tr>
                <tr>
                  <td>17 January, Wednesday</td>
                  <td>Shri Rajendra Sureshwar Day</td>
                </tr>
                <tr>
                  <td>21 January, Sunday</td>
                  <td>Rohini Fast</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Jain Calendar 2024: February</h3>
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
                  <th>Day/Tithi</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7 February, Wednesday</td>
                  <td>Sheetalnath Janm Tap</td>
                </tr>
                <tr>
                  <td>8 February, Thursday</td>
                  <td>Meru Trayodashi/Adinath Nirvan Kalnayak</td>
                </tr>
                <tr>
                  <td>9 February, Friday</td>
                  <td>Rishabhdev Moksha</td>
                </tr>
                <tr>
                  <td>14 February, Wednesday</td>
                  <td>Daslakshan (3/3) Start</td>
                </tr>
                <tr>
                  <td>16 February, Friday</td>
                  <td>Maryada Mahotsav</td>
                </tr>
                <tr>
                  <td>18 February, Sunday</td>
                  <td>Rohini Fast</td>
                </tr>
                <tr>
                  <td>23 February, Friday</td>
                  <td>Shri Jitendra Rath Yatra, Daslakshan (3/3) Finish</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Jain Calendar 2024: March</h3>
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
                  <th>Day/Tithi</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>17 March, Sunday</td>
                  <td>Ashtanika (3/3) Start</td>
                </tr>
                <tr>
                  <td>25 March, Monday</td>
                  <td>Ashtanika (3/3) Finish</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Jain Calendar 2024: April</h3>
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
                  <th>Day/Tithi</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02 April, Tuesday</td>
                  <td>Yearly Tap Starts</td>
                </tr>
                <tr>
                  <td>13 April, Saturday</td>
                  <td>Daslakshan (1/3) Start</td>
                </tr>
                <tr>
                  <td>15 April, Monday</td>
                  <td>Ayambil Oli Start</td>
                </tr>
                <tr>
                  <td>21 April, Sunday</td>
                  <td>Mahavir Jayanti</td>
                </tr>
                <tr>
                  <td>22 April, Monday</td>
                  <td>Daslakshan (1/3)</td>
                </tr>
                <tr>
                  <td>23 April, Tuesday</td>
                  <td>Ayambil Oli Ends</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Jain Calendar 2024: May</h3>
          <table border="1" style={{ width: "100%", height: "auto" }}>
            <thead>
              <tr>
                <th>Day/Tithi</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>18 May, Saturday</td>
                <td>Shri Mahavir Swami Kaivalya Gyan Day</td>
              </tr>
              <tr>
                <td>24 May, Friday</td>
                <td>Jayestha Jinvar Vrat Begins</td>
              </tr>
            </tbody>
          </table>
          <h3>Jain Calendar: June</h3>
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
                  <th>Day/Tithi</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3 June, Monday</td>
                  <td>Shri Anantnath Janam Tap</td>
                </tr>
                <tr>
                  <td>6 June, Thursday</td>
                  <td>Rohini Fast</td>
                </tr>
                <tr>
                  <td>22 June, Saturday</td>
                  <td>Jyestha Jinvar Vrat</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Jain Calendar 2024: July</h3>
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
                  <th>Day/Tithi</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14 July, Sunday</td>
                  <td>Ashtanika (1/3) Start</td>
                </tr>
                <tr>
                  <td>20 July, Sunday</td>
                  <td>Chaumasi Chaudas</td>
                </tr>
                <tr>
                  <td>20 July, Sunday</td>
                  <td>Ashtanika (1/3) End</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Jain Calendar 2024: August</h3>
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
                  <th>Day/Tithi</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11 August, Sunday</td>
                  <td>Parshwanath Moksha</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Jain Calendar 2024: September</h3>
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
                  <th>Day/Tithi</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3 September, Tuesday</td>
                  <td>Samvatsari</td>
                </tr>
                <tr>
                  <td>4 September, Wednesday</td>
                  <td>Kalpasutra Paath</td>
                </tr>
                <tr>
                  <td>5 September, Thursday</td>
                  <td>Taildhar Taap</td>
                </tr>
                <tr>
                  <td>8 September, Sunday</td>
                  <td>Shrmawani Parwa / Daslakshan (2/3) Start</td>
                </tr>
                <tr>
                  <td>17 September, Tuesday</td>
                  <td>Daslakshan End</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Jain Calendar 2024: October</h3>
          <table border="1" style={{ width: "100%", height: "auto" }}>
            <thead>
              <tr>
                <th>Day/Tithi</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9 October, Wednesday</td>
                <td>Ayambil Oli Starts</td>
              </tr>
              <tr>
                <td>17 October, Thursday</td>
                <td>Ayambil Oli Ends</td>
              </tr>
              <tr>
                <td>30 October, Wednesday</td>
                <td>Shri Padma Prabhu Birth Tap</td>
              </tr>
            </tbody>
          </table>
          <h3>Jain Calendar 2024: November</h3>
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
                  <th>Day/Tithi</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 November, Friday</td>
                  <td>Mahavir Nirvan/Lakshmi Puja</td>
                </tr>
                <tr>
                  <td>2 November, Saturday</td>
                  <td>Gujarati New Year</td>
                </tr>
                <tr>
                  <td>6 November, Wednesday</td>
                  <td>Gyan Panchami/Saubhagya Panchami</td>
                </tr>
                <tr>
                  <td>8 November, Friday</td>
                  <td>
                    Ashtanika (2/3) Start/Kartik Ashtanika
                    <br />
                    Vidhan Purna/Kartik Rath Yatra
                  </td>
                </tr>
                <tr>
                  <td>14 November, Thursday</td>
                  <td>Kartik Chaumasi Chaudas</td>
                </tr>
                <tr>
                  <td>15 November, Friday</td>
                  <td>
                    Ashtanika (2/3) Ends/Ashtanika
                    <br />
                    Vidhan Purna/Kartik Rath Yatra
                  </td>
                </tr>
                <tr>
                  <td>17 November, Sunday</td>
                  <td>Rohini Fast</td>
                </tr>
                <tr>
                  <td>25 November, Monday</td>
                  <td>Mahavir Swami Diksha</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Jain Calendar 2024: December</h3>
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
                  <th>Day/Tithi</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11 December, Wednesday</td>
                  <td>Mauni Ekadashi</td>
                </tr>
                <tr>
                  <td>14 December, Saturday</td>
                  <td>Rohini Fast</td>
                </tr>
              </tbody>
            </table>
          </table>
          <p>
            For Detailed Predictions About Your Life,{" "}
            <dic className="inline-text">Talk To Astrologer</dic>
          </p>
          <h3>Lunar Calendar</h3>
          <p>
            The Lunar Calendar, a celestial roadmap rooted in ancient wisdom,
            holds a significant place in various cultures across the globe. It
            offers a unique perspective on timekeeping, astrology, and the
            interconnectedness of the cosmos. In this article, we'll delve deep
            into the Lunar Calendar, exploring its historical significance, how
            it works, and the positive impact it has on astrology.
          </p>
          <p>
            The Lunar Calendar, also known as the moon calendar, has been in use
            for millennia. It originates from the close observation of the
            moon's phases, with its roots dating back to ancient civilizations
            like the Egyptians, Chinese, and Mayans. These cultures recognized
            the moon's profound influence on Earth's tides, agriculture, and
            human behaviour. This led to the development of lunar calendars as a
            means of tracking time.
          </p>
          <p>
            Unlike the Gregorian calendar, which is solar-based, the Lunar
            Calendar is synchronised with the moon's cycles. It comprises 12 or
            13 lunar months, each corresponding to a lunation – the time it
            takes for the moon to complete one orbit around Earth. The lunar
            year is approximately 11 days shorter than the solar year, making it
            354 to 355 days.
          </p>
          <h3>The Lunar Calendar's Impact on Astrology:</h3>
          <p>
            Astrology enthusiasts find the Lunar Calendar invaluable for several
            reasons. The moon's phases, waxing and waning, play a pivotal role
            in astrological interpretations.
          </p>
          <UnorderedList>
            <ListItem>
              <strong>Emotional Rhythms:</strong> The moon's cycles are closely
              tied to our emotional states. Each lunar phase – New Moon, First
              Quarter, Full Moon, and Last Quarter – influences our feelings,
              energy levels, and creativity. Astrologers often use these phases
              to guide personal development and decision-making.
            </ListItem>
            <ListItem>
              <strong>Zodiac Compatibility:</strong> The Lunar Calendar can help
              individuals understand their compatibility with others based on
              their moon signs. By matching moon signs, astrologers can offer
              insights into potential relationships and emotional connections.
            </ListItem>
            <ListItem>
              <strong>Eclipses and Transformations:</strong> Solar and lunar
              eclipses are powerful celestial events with profound astrological
              implications. The Lunar Calendar helps astrologers predict eclipse
              patterns and their impact on individuals and society.
            </ListItem>
            <ListItem>
              <strong>Manifestation and Intention Setting:</strong> Many people
              use the New Moon as a time for intention setting and
              manifestation. It's believed that this lunar phase is conducive to
              planting the seeds of desire and watching them grow throughout the
              lunar month.
            </ListItem>
          </UnorderedList>
          <p>
            To get a detailed Kundli analysis,{" "}
            <div className="inline-text">Talk To Astrologer</div>
          </p>
          <h3>Important Festivals of Jainism 2024</h3>
          <p>
            Jainism, one of the world's oldest religions, is a way of life that
            promotes non-violence, truth, and self-discipline. Rooted in the
            teachings of revered sages and scholars, Jainism has a rich tapestry
            of festivals that hold immense significance in the lives of its
            followers. In 2024, these festivals continue to be celebrated with
            great zeal, promoting harmony, spiritual awakening, and a profound
            connection with one's inner self.
          </p>
          <h3>Mahavir Jayanti</h3>
          <p>
            Mahavir Jayanti is one of the most significant festivals in Jainism,
            commemorating the birth of Lord Mahavira, the 24th Tirthankara. It
            is a day for reflection, prayers, and meditation, with devotees
            visiting temples and participating in charitable activities. It
            promotes the principles of non-violence and compassion.
          </p>
          <h3>Paryushana</h3>
          <p>
            Paryushana is an eight-day long festival of reflection and spiritual
            self-purification. It is a time for fasting, studying sacred texts,
            and seeking forgiveness. The festival encourages Jains to strengthen
            their faith and resolve to live a life of truth and non-violence.
          </p>
          <h3>Diwali</h3>
          <p>
            Jains celebrate Diwali, the festival of lights, with reverence. For
            Jains, it marks Lord Mahavira's attainment of Nirvana. Devotees
            light lamps, visit temples, and engage in acts of charity and
            kindness. It symbolises the triumph of light over darkness and the
            victory of spiritual wisdom.
          </p>
          <h3>Kartik Purnima</h3>
          <p>
            Kartik Purnima, also known as Dev Diwali, is a celebration of Lord
            Mahavira's spiritual teachings. It is a day to reflect on one's
            spiritual journey, make donations, and offer prayers. Pilgrimages to
            holy Jain sites are common during this festival.
          </p>
          <h3>Samvatsari</h3>
          <p>
            Samvatsari, or the Day of Forgiveness, is the last day of Paryushan.
            Jains seek forgiveness from all living beings for any harm caused,
            knowingly or unknowingly. It's a day of introspection and
            reconciliation, fostering peace and harmony.
          </p>
          <h3>Akshaya Tritiya</h3>
          <p>
            Akshaya Tritiya is a festival that signifies the beginning of a
            prosperous and blessed period. Jains observe it by performing acts
            of charity, seeking spiritual growth, and initiating new projects.
            It's a time to harness positive energy and blessings.
          </p>
          <h3>Guru Purnima</h3>
          <p>
            Guru Purnima is a day of gratitude towards spiritual teachers and
            gurus. Jains express their respect and devotion to their spiritual
            guides, emphasising the importance of knowledge and wisdom in life.
          </p>
          <p>
            The festivals of Jainism are not only occasions for celebration but
            also opportunities for deep spiritual introspection and growth. In
            2024, as Jains continue to observe these festivals, they strengthen
            their commitment to non-violence, truth, and self-discipline. These
            festivals remind us all of the importance of spirituality,
            compassion, and self-improvement, contributing to a more harmonious
            and enlightened society.
          </p>
          <p>
            By sharing this positive information about the important festivals
            of Jainism in 2024, we hope to contribute to a greater understanding
            of this ancient and profound faith. May this knowledge lead to more
            tolerance, respect, and appreciation for the diversity of spiritual
            practices in our world.
          </p>
          <p></p>
          <JainCalendarFYQ />
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default JainCalendar;

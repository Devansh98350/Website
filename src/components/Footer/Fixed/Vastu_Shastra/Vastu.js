import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../Layout/Layout.js";
import styled from "styled-components";
import VastuFYQ from "./VastuFyq.js";
import Breadcrumbs from "../../../Breadcrumb.js";

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
  /*To be modified*/

  .tarot-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 30px;
  }

  .tarot-card {
    flex: 0 0 calc(20% - 12px);
    background-color: #f0e6ff; /* Light purple background */
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    transition: all 0.3s ease;
    text-decoration: none;
    color: #333;
  }

  .tarot-card:hover {
    background-color: #e0d0ff; /* Darker purple on hover */
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* Responsive styles */
  @media (max-width: 992px) {
    .tarot-card {
      flex: 0 0 calc(25% - 12px);
    }
  }

  @media (max-width: 768px) {
    .tarot-card {
      flex: 0 0 calc(33.33% - 12px);
    }
  }

  @media (max-width: 576px) {
    .tarot-card {
      flex: 0 0 calc(50% - 12px);
    }
  }
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const vastuTipsAndRemedies = [
  { name: "Vastu For Home", path: "/vastu-shastra/vastu-for-home" },
  {
    name: "Vastu For Commercial Properties",
    path: "/vastu-shastra/vastu-for-commercial-properties",
  },
  {
    name: "Vastu For Career Success",
    path: "/vastu-shastra/vastu-for-career-success",
  },
  { name: "Vastu For Health", path: "/vastu-shastra/vastu-for-health" },
  { name: "Vastu For Wealth", path: "/vastu-shastra/vastu-for-wealth" },
  {
    name: "Vastu For Love & Married Life",
    // path: "/vastu-shastra/vastu-for-love",
    path: "",
  },
  {
    name: "Vastu For Plants",
    path: "",
    // path: "/vastu-shastra/vastu-for-plants"
  },
  {
    name: "Vastu For Positive Energy",
    path: "/vastu-shastra/vastu-for-positive-energy",
  },
  {
    name: "Vastu for Love and Relationships",
    path: "/vastu-shastra/vastu-for-love-and-relationships",
  },
];

const exploreMore = [
  {
    name: "Vastu tips for daily life",
    // path: "/vastu-shastra/vastu-tips-for-daily-life",
    path: "",
  },
  {
    name: "Vastu tips for placing mirrors",
    path: "/vastu-shastra/vastu-tips-for-placing-mirrors",
  },
  {
    name: "Sleeping direction Vastu Shastra",
    path: "/vastu-shastra/sleeping-direction-vastu-shastra",
  },
  { name: "Vastu Products", path: "/vastu-shastra/vastu-products" },
];

const Vastu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Vastu Shastra" description="" keywords="">
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Vastu Shastra</h1>
          <h2>Vastu Shastra: The science of architecture</h2>
          <p>
            A well-created layout of your house could become the reason for your
            lifelong happiness. Sounds impressive, isn't it?
          </p>
          <p>
            Vastu Shastra helps us in the same. Curious architectural science
            encapsulates all forces acting on a given space via the flow of
            optimistic energy. Applying correct Vastu tips shall help you get a
            precise blueprint to attract prosperity to the natives and remove
            all negative vibes. Originated in India, it has spread worldwide,
            making people look after the directions and placements of certain
            things before construction.
          </p>
          <p>
            Vastu Shastra moreover helps boost the appropriate vibrations that
            the place possesses and wear off any wrong eye that lies upon the
            same. Any person who comes in contact with that particular place
            also gets involved with the same vibes, leading to a healthy
            inner-self, mind, body and soul. In the ancient days, Hindus and
            Buddhists believed in forming things as per Vastu. However, in the
            modern era, almost all the communities have adapted the Vastu
            science in astrology to attract positivity and well-being in their
            lives.
          </p>
          <p>
            As per Vastu, entering a place that is not made according to vastu
            makes you a victim of several issues. For example, you may feel
            suffocated, attract negative energies of the place, become
            unhealthy, feel suffocated, have emotional troubles, etc. Getting a
            Vastu-compliant house helps eliminate all these issues and provides
            you with a better experience in multiple ways.
          </p>
          <h2>How does Vastu Shastra work?</h2>
          <p>
            Vastu Shastra works on three vital principles of formations that
            envelop the whole premise. The first and the foremost one is
            Bhogadya. It illustrates that the designed premises must lend
            themselves to effortless application and be helpful. The second one
            is Sukha Darsha. In this, the organized belief should be
            aesthetically pleasing. The division of the spaces and the raw
            material used in the exteriors and interiors of the building,
            including the colours, sizes of doors and windows, rooms, and
            rhythms of depressions and projections, must be beautiful. The last
            one is Ramya. It is where the formed premises must evoke a sense of
            well-being in the native.
          </p>
          <p>
            Moreover, Vastu believes that two main forces exist equally and are
            opposite. This interaction combines and forms a bioforce— Prana,
            which a native requires to live. Out of these forces, one is fine
            and subtle, while the other is dense and dark. In other words, we
            can say that one force is positive and the other one is negative. Of
            course, the intensity of these forces forming the Vastu of the place
            might not be the same. But, the interaction of these forces is
            continuous.
          </p>
          <h2>History of Vastu Shastra</h2>
          <p>
            In Indian civilization, Vastu Shastra is one of the oldest
            practices. For ages, it has been aiding in the rich heritage of the
            people and has developed discipline using traditional knowledge and
            study of nature. People had been removing the negative energies from
            their life using the gravitational force with the magnetic one.
            During construction, people use all these elements to nourish their
            lives and make things better for them spiritually.
          </p>
          <h2>Five elements of Vastu Shastra</h2>
          <p>
            Vastu Shastra is composed of five elements. They have their specific
            meaning and role. Also, their workability in architecture is
            immense.
          </p>
          <p>
            <strong>i) Earth (Bhumi) - </strong>Bhumi or Earth has its magnetic
            force and is composed of poles of the centre of attractions— North
            and South. Formed of the landscapes, flora, fauna, and land, it also
            provides local construction raw material along with their
            workability. Bhumi poojan is, therefore, done to wear off the
            negative energies from the land construction that needs to be done.
          </p>
          <p>
            <strong>ii) Water (Jal) - </strong>It is represented by river, sea,
            rain, and other water bodies along with other forms of water.
            Moreover, it is composed of part of every animal and plant. Also,
            the physical life and habitat represent water. Therefore, it is
            valid for all the eco-cultures and life forms. The form, pattern,
            and life type depend on the water and Earth's correlation.
          </p>
          <p>
            <strong>iii) Air (Vayu) - </strong>It illustrates a life-supporting
            element. Formed of multiple elements along with dust particles,
            humidity, etc., are divided into appropriate proportions. It also
            deals with the entire body surface via the skin, blood, system, and
            respiration. Furthermore, it also signifies movement, and its purity
            is one of the most important aspects of a good brain, body, and
            blood.
          </p>
          <p>
            <strong>iv) Fire (Aag) - </strong>It illustrates heat, and Sun is
            considered the leading source of the same. Right from the concept of
            day and night to seasons, Sun is an excellent source of enthusiasm,
            vigour, and passion. It provides the natives with mental well-being
            and is a prime energy source. It also offers visual development and
            behaves as a great source of vitality. Different zones with variable
            climates have distinctive cultures, and Sun adds to their natural
            progress.
          </p>
          <p>
            <strong>v) Space (Akash) - </strong>The elements mentioned above are
            skilful makers of emotionally pleasant, intellectually determinant
            shelter and habit. These elements provide physical comfort and
            blissful space— with forces, heat, light, magnetic field, flora and
            fauna, etc. These all form an ideal habitat to live abundantly and
            evolve accordingly.
          </p>
          <p>
            As Vastu Shastra works on these following elements, a person can
            improve the effectiveness of positive energy in his life by removing
            the Vastu-related issues or Vastu Dosha.
          </p>
          <h2>Vastu directions and their effects</h2>
          <p>
            Each direction and its impact on Vastu Shastra have its significance
            and importance.
          </p>
          <p>
            <strong>i) East Direction - </strong>The Sun rules the East
            direction. Natives must remember to keep the East direction open and
            let the light sink in as it would attract affluence and prosperity.
            In case of any issue regarding the East direction, disputes arise
            between the father and son, and many other problems occur about
            health.
          </p>
          <p>
            <strong>ii) West Direction - </strong>Saturn rules the West
            direction in Vastu Shastra. If there are troubles in the West
            direction, electrical appliances won't function well. With it,
            family members would suffer from air-borne diseases and pain in the
            legs and bones.
          </p>
          <p>
            <strong>iii) North Direction - </strong>Mercury rules the North
            direction and illustrates money, wealth, and profits. If the
            direction is under negative energies, problems like financial
            troubles, nose and throat diseases, etc. Also, natives might go
            through constant hurdles.
          </p>
          <p>
            <strong>iv) South Direction - </strong>Mars rules the South
            direction. It deals with legal matters and relations. So if there
            arises any troubles or Vastu Dosha, people may go through issues
            like obstacles in legal matters and problems with elder brothers.
            There are even possibilities that family members might go through
            blood-related diseases, too.
          </p>
          <p>
            <strong>v) North-East (Ishan) Direction - </strong>Jupiter is the
            ruler of this direction. It is considered the purest and most
            untainted direction. As per Vastu Shastra, the Ishan Kon is governed
            by Gods. People must remember that they don't get their washrooms or
            keep dirty things or garbage in this direction. Any Vastu Dosha in
            this direction might lead to wealth deterioration and family
            problems. Married men and women may go through issues in their
            marriage, and other health-related problems could be there too.
          </p>
          <p>
            <strong>vi) North-West (Vayavya) Direction - </strong>Moon is the
            ruler of the North-West direction. If there are some issues, there
            are possibilities that people might suffer from disputes with
            neighbours, and the mother's health in the house shall degrade most
            of the time. There are even chances that unmarried females might
            face delays in marriage. Also, mental stress, cough, cold, etc.,
            could be there.
          </p>
          <p>
            <strong>vii) South-East (Agneya) Direction - </strong>Venus is the
            ruler of the Agneya direction and governs the fire element. Thus,
            one must remember to construct a kitchen in this direction. If there
            is Vastu Dosha in the South-East direction, constant issues shall be
            in the house. Women in the home might feel a decline in their
            health. Married couples would also feel troubles like
            misunderstanding, disputes, and conflicts. There could also be a
            misunderstanding with tenants. Other medical issues like uterus,
            diabetes, etc., could be there too.
          </p>
          <p>
            <strong>viii) South-West (Nairutya) Direction - </strong>Rahu
            governs the South-West direction. People must make their master
            bedroom in the Nairutya direction. Defects in this direction might
            lead to Pitru Dosha and problems related to the maternal and
            paternal sides. Moreover, chances of theft also increase, and family
            members become prone to accidents, diseases, brain-related issues,
            etc.
          </p>
          <h2>Brahma Sthana</h2>
          <p>
            As the name suggests, Lord Brahma rules it. The middle part of your
            house is the Brahma Sthana and must be kept spacious, accessible,
            and clean. Vastu Dosha here creates obstacles in life, and illness
            occurs too often in the family. If situations worsen, natives might
            get under the influence of paranormal issues. Therefore, the Brahma
            Sthana must be light and free.
          </p>
          <h2>Vastu Shastra and astrology</h2>
          <p>
            The connection between Vastu and astrology is eternal. Both the
            branches are interconnected and help people on a one-on-one level.
            If someone constructs their house as per Vastu and incorporates
            concepts of astrology like Shubh Muhurat, the combination attracts
            positivity and abundance. People shall be able to wear off ill vibes
            and undesirable influences from their construction place.
          </p>
          <p>
            Furthermore, Vastu says that the Northeast portion of the
            construction site is the solar half, while the Southwest is
            recognized as the lunar half. People must remember that the solar
            half must be kept lower than the lunar half of the place. It allows
            optimal division of the Sun rays, polar energy, and solar radiation
            along with joy, happiness, and pleasure if done at a proper time and
            place with the advice of an astrologer.
          </p>
          <h2>Importance of Vastu Shastra</h2>
          <p>
            Using Vastu Shastra, people can perform multiple things. Natives can
            figure out the favourable and unfavourable outcomes using the Vastu
            Vidya. Also, it would help in determining the appropriate length,
            width, direction, etc. Along with it, it also helps in the following
            ways:
          </p>
          <UnorderedList>
            <ListItem>
              It helps in driving cosmic energy to the place of living or
              working. Moreover, you can easily harmonize the five elements of
              Vastu. Also, with appropriate Vastu tips, you can succeed in
              education, career, finances, and other endeavours.
            </ListItem>
            <ListItem>
              With it, you shall achieve love in relationships and harmony in
              different areas of your life.
            </ListItem>
            <ListItem>
              Vastu is also important to trump the issues that exist in your
              life. With appropriate Vastu, you can grow spiritually and
              improvise yourself in multiple ways.
            </ListItem>
            <ListItem>
              People can maximize their warm vibes in their lives and
              construction places as Vastu Shashtra aids in doing the same.
            </ListItem>
            <ListItem>
              From household furniture to multiple décor items, you can change
              and correct the Vastu in your life.
            </ListItem>
            <ListItem>
              Appropriate Vastu also ensures a free flow of positive energy,
              abundance, and positive energy in the life of the natives.
            </ListItem>
            <ListItem>
              Vastu significance increases as it helps to convert efficiency and
              creativity into a vibrant ambience, providing an infusion of
              dynamism and goodwill.
            </ListItem>
            <ListItem>
              The appropriate approach of Vastu science combines all the natural
              energy sources and maximizes the sound effects.
            </ListItem>
            <ListItem>
              Fixing the Vastu flaws also helps thousands of people suffering
              from troubles in daily life. Moreover, it aids them in eliminating
              all the blockages and obstacles in life. It corrects their living
              space and makes people become established beings in their way.
            </ListItem>
          </UnorderedList>
          <h2>Importance of Vastu in Modern Architecture</h2>
          <p>
            The current generation has started accepting the significance of the
            ancient construction practices set by Lord Brahma, including the
            five elements of nature. Incorporating the Vastu science in today's
            construction has helped people get over the economic and
            environmental scenarios. Along with it, people have started
            incorporating contemporary ideas with ancient ones to eliminate all
            the issues and troubles people face in their daily lives.
          </p>
          <p>
            Moreover, along with basic amenities, people also look for
            Vastu-specific places so that they can attract health, wealth,
            peace, and abundance. Thus, their prime goal is to have a place that
            helps them grow in life.
          </p>
          <h3>Vastu Tips and Remedies</h3>
          <div className="tarot-grid">
            {vastuTipsAndRemedies.map((card, index) => (
              <Link key={index} to={card.path} className="tarot-card">
                {card.name}
              </Link>
            ))}
          </div>
          <h3>Explore More:</h3>
          <div className="tarot-grid">
            {exploreMore.map((card, index) => (
              <Link key={index} to={card.path} className="tarot-card">
                {card.name}
              </Link>
            ))}
          </div>
          <VastuFYQ />
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Vastu;

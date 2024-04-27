import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../../../Layout/Layout.js";
import KaalFYQ from "./KaalFyq.js";

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

const Kaalsharp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Kaalsarp Dosh">
      <Container>
        <div className="body">
          <h1 className="heading">12 Kaalsarp Doshas</h1>
          <p>
            Kaalsarp dosh in astrology is considered as one of the most
            concerning doshas. According to astrology, Kaalsarp dosh is a result
            of one's past deeds or karma. The presence of this dosh in your
            kundli may create hurdles and delays across different aspects of
            your life such as career, love, marriage, health and more. The
            Kaalsarp dosh is formed when Rahu and Ketu are present on one side
            in the horoscope and all other planets are in their midst.
          </p>
          <p>
            As per astrology, there are seven main planets (excluding Rahu and
            Ketu), each of them ruling various aspects such as Lagna, wealth,
            happiness, children, disease, household, age, fortune, karma,
            profit, love, expenditure, etc. As Kaalsarp dosh veils the planets,
            the aspects they represent may get hampered, which may lead to
            problems in the life of the native. In astrology, there are as many
            as 12 Kaalsarp doshas. Each of these forms as per the placement of
            Rahu and Ketu in the native's chart.
          </p>

          <h3>1. Anant Kaalsarp Dosh</h3>
          <p>
            The Anant Kaalsarp dosh is formed in the native's chart when the
            planet Rahu is present in the lagna or the first house of the
            Kundli, and Ketu is present in the 7th house. In this way, all the
            remaining planets come in between the two shadow planets. When the
            native has this dosh in his Kundli, he will have to struggle for
            longer to find success. Although you will work very hard in order to
            succeed, but the results will come to you after a delay. The Anant
            Kaalsarp dosh will likely test your patience by introducing you to
            constant obstacles and challenges. Due to this dosha, a person faces
            problems in all aspects of their lives, but if you don't lose hope,
            you will find success later. Also, don't indulge in ill deeds such
            as gambling, lust, etc.
          </p>
          <h4>Remedies for Anant Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>
              If a student, you should chant the 'Saraswati Mantra' and
              'Saraswatye Namah' for 10-15 minutes daily
            </ListItem>
            <ListItem>
              On Saturday, hoist the raw coal upside down 8 times; flush the
              coal into running water.
            </ListItem>
            <ListItem>
              Reading Hanuman Chalisa five times a day for 40 days will also
              help.
            </ListItem>
          </UnorderedList>

          <h3>2. Kulik Kaalsarp Dosh</h3>
          <p>
            Kulik Kaalsarp dosh is formed when Rahu is placed in the 2nd house
            and Ketu is in the 8th house of the native's kundli. This dosha is
            believed to bring economic losses, humiliation, debt and various
            other obstacles in the native's life. Hence astrologers suggest that
            you don't form bondings with people without careful scrutiny. If you
            are into business, make sure you do it with 100% honesty, especially
            during the Kulik dosh period. When it comes to married life, it is
            to remain normal for the native dealing with Kalik dosh. You,
            however, may feel that you are getting old before time, thus you
            must invest in taking care of your health. Do not use intoxicants
            such as cigarettes, tobacco, etc.
          </p>
          <h4>Remedies for Kulik Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>
              Wear an opened copper bracelet tightly fitted on the right hand on
              Tuesday.
            </ListItem>
            <ListItem>
              On Saturday, you must light a lamp of mustard oil in front of the
              Hanuman idol in the evening.
            </ListItem>
            <ListItem>Hold energised Silver Rahu Yantra on Saturday.</ListItem>
          </UnorderedList>

          <h3>3. Vasuki Kaalsarp Dosh</h3>
          <p>
            Vasuki Kaalsarp dosh is formed when Rahu is placed in the 3rd house
            in the native's chart and Ketu, on the other hand, sits in the 9th
            place. This dosha doesn't only hamper the life of the native but
            also of the ones related to him, such as his siblings, parents,
            spouse, etc. You have to face the fact that your family members may
            cheat on you. There will likely be a lack of peace in the family,
            and the peace will further shatter with inflating economic problems
            as the Vasuki Kaalsarp dosh continues. However, the good thing is
            that the person will have economic success as he continues to put in
            the hard work in making sure things work out for him.
          </p>
          <h4>Remedies for Vasuki Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>
              Read Hanuman Chalisa and Bajrang Baan 5 times for 40 days
            </ListItem>
            <ListItem>
              Hold energised the Silver Rahu Yantra on Saturday for Vasuki
              Kaalsarp Yoga.
            </ListItem>
            <ListItem>
              Every Wednesday keep a handful of Urad dal in a black cloth, and
              chant the Rahu spell mantra and flow the Urad in the water.
            </ListItem>
          </UnorderedList>

          <h3>4. Shankhapal Kaalsarp Dosh</h3>
          <p>
            The Shankphal Kaalsarp dosh is formed in the native's Kundli when
            the planet Rahu is placed in the 4th house of the Kundli and the
            planet Ketu sits in the 10th house. The formation of this yoga in
            kundli is the signal of incoming financial hardship, disease and
            disorder in the native's life. Hence, he/she should prepare for it.
            During this period, the happiness in the native's family will plunge
            to new lows. This may further hamper elements such as love, child's
            education, etc. If a youngster, the native will find it tough to
            make the right choices, due to which he or she may find it difficult
            to settle early in life. The people of this yoga have to face
            difficulties related to land and property, thus any such deals must
            be done after proper scrutiny.
          </p>
          <h4>Remedies for Shankhapal Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>
              Hang Hanuman Bahuk in red cloth on any Tuesday on the wall towards
              the south side of the house.
            </ListItem>
            <ListItem>
              Put a silver serpent or peacock feathers at the entrance of the
              house.
            </ListItem>
            <ListItem>
              On any Friday, flush the water coconut in water during the day.
            </ListItem>
          </UnorderedList>

          <h3>5. Padam Kaalsarp Dosh</h3>
          <p>
            Padam Kaalsarp dosh is formed when Rahu is placed in the 5th house
            and Ketu is in the 11th house of the kundli. This dosh is especially
            harmful to students as they may lose concentration in studies and
            indulge in detrimental deeds. Hence, parents must keep an eye on
            their children during this period. You also need to ensure you help
            your child make the right choices in education or it will simply
            cost you and him a loss of money and time. For grown-ups, the dosh
            may hamper your progress in your career. If you are looking for new
            opportunities or taking risks, you must do it with a partner. Also,
            health should be a priority as the Padam Kaalsarp dosh progresses.
          </p>
          <h4>Remedies for Padam Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>
              Wear a triangular Coral gemstone of seven and a quarter with
              copper in the middle finger of the right hand on any Tuesday.
            </ListItem>
            <ListItem>
              Keep a Peacock feather in the books on Saturday.
            </ListItem>
            <ListItem>
              On Tuesday, at the main entrance of the house, put a copper made
              Naga Nagin tied in red clothes.
            </ListItem>
          </UnorderedList>

          <h3>6. Mahapadma Kaalsarp Dosh</h3>
          <p>
            The Mahapadma Kaalsarp dosh is formed when the planet Rahu is placed
            in the 6th house of the Kundli and Ketu is placed in the 12th house.
            Although Kaalsarp doshas are known for their ill consequences, but
            when Mahapadma Kaalsarp dosh is active, the native finds himself the
            luck to win over all his enemies with ease. There is an enhancement
            in wisdom and a thrust of will to do something worthwhile and big in
            life. However, as the dosh period continues, the native tends to
            lose peace of mind and may make thoughtless choices. In the dosh
            period, the person earns profit from business from abroad.
          </p>
          <h4>Remedies for Mahapadma Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>
              It is necessary to visit the Hanuman idol in the morning on
              Tuesday.
            </ListItem>
            <ListItem>
              Recite Hanuman Chalisa once in a day for 40 days.
            </ListItem>
            <ListItem>
              Recite Sunderkand of Ramcharitmanas on Tuesday or Saturday 108
              times.
            </ListItem>
          </UnorderedList>

          <h3>7. Takshak Kaalsarp Dosh</h3>
          <p>
            The Takshak Kaalsarp dosh is formed when Rahu is placed in the 7th
            house of the Kundli and Ketu is in the lagan or the 1st house. If
            this dosh is active in the life of the native, he or she may have to
            face a delay in marriage. The marriage delay may become the reason
            for tension and stress for your parents too. If married, there may
            be disturbances due to the nature of the in-laws. There may also
            arise situations when you might think of divorce. Also, the ones
            dealing with Kaalsarp dosh must not consider love marriage during
            the dosh period. Doing so will hamper the love you share after
            marriage, and you will have to put extra effort to make things work.
          </p>
          <h4>Remedies for Takshak Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>
              Recite Sunderkand of Ramcharitmanas on Tuesday or Saturday 108
              times.
            </ListItem>
            <ListItem>Read Ganapati Atharvashirsha on every full moon</ListItem>
            <ListItem>
              Wear an energized Silver Rahu Yantra around your neck.
            </ListItem>
          </UnorderedList>

          <h3>8. Karkotak Kaalsarp dosh</h3>
          <p>
            The Karkotak Kaalsarp dosh is formed when Ketu is placed in the 2nd
            house of the native's Kundli and Rahu is placed in the 8th house.
            The Karkotak Kaalsarp dosh is responsible for causing hindrance in
            acquiring a fortune. The dosh may also hamper career progress as you
            may witness several hindrances in acquiring a job and getting a
            well-deserved promotion. People dealing with Karkotak Kaalsarp dosh
            also acquire the habit of speaking the truth. This may seem like a
            good thing, but this habit may bar the native from acquiring good
            deals for himself. This doesn't mean that you shouldn't speak the
            truth, but you must surely think before speaking to anyone.
          </p>
          <h4>Remedies for Karkotak Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>
              Wear Shiva Yantra made of silver around the neck.
            </ListItem>
            <ListItem>
              Starting from Saturday, feed Boondi Laddoos to the ants for 27
              days.
            </ListItem>
            <ListItem>
              Wear a triangular Coral gemstone in copper on the middle finger of
              the right hand.
            </ListItem>
          </UnorderedList>

          <h3>9. Shankhachur Kaalsarp Dosh</h3>
          <p>
            Shankhachur Kaalsarp dosh is formed when the planet Rahu is placed
            in the 6th house and Ketu, on the other hand, occupies the 12th
            house of the Kundli. The good thing about this dosh is that the
            desires of people born in this dosh are usually fulfilled. However,
            the bad thing is that there may be a delay in fulfilling such
            desires, which may leave you frustrated. In the family and home of
            the native dealing with Shankhachur Kaalsarp dosh, there may be a
            lot of pain and suffering. In this period, it is suggested that you
            focus on your family and don't indulge in dealings that you will
            have to regret in the near future.
          </p>
          <h4>Remedies for Shankhachur Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>Recite Hanuman Chalisa daily.</ListItem>
            <ListItem>
              Regularly recite Mahamrityunjaya Mantra and observe fasting every
              Monday.
            </ListItem>
            <ListItem>
              Wear an energised Silver Rahu Yantra around your neck on Saturday.
            </ListItem>
          </UnorderedList>

          <h3>10. Ghatak Kaalsarp Dosh</h3>
          <p>
            As per astrologers, the Ghatak Kaalsarp dosh is formed in Kundli
            when Rahu is placed in the 10th house and Ketu sits in the 4th house
            of the native's kundli. When you have this dosha in kundli, it is
            highly recommended that you serve your mother, take care of her and
            never cause her any harm. This will help in bettering your life
            conditions. However, it has been noticed that in return, you may not
            get the same kind of affection from your mother. Due to Ghatak
            Kaalsarp dosh, the person becomes arrogant even if he or she does
            not have anything to be proud of. Your ego is at the top of your
            head, which may hamper not only your personal but your professional
            bondings too.
          </p>
          <h4>Remedies for Ghatak Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>
              Always read the Hanuman Chalisa and observe fast each Tuesday.
            </ListItem>
            <ListItem>
              Read Ganapati Atharvashirsha on every full moon.
            </ListItem>
            <ListItem>
              On Friday, donate coconut, blanket etc. along with epilogue, oil,
              black cloth, and peel.
            </ListItem>
          </UnorderedList>

          <h3>11. Vishdhar Kaalsarp Dosh</h3>
          <p>
            The Vishdhar Kaalsarp dosh is formed when planet Rahu is in the 11th
            house and Ketu, on the other hand, sits in the 5th house. This dosha
            is fatal for the one trying to acquire education, especially higher
            education. There will be a lot of obstacles for such a person to get
            higher education. However, despite all odds, their patience and
            commitment will help them in moving forward. These people do better
            in their professional life if they pursue their career from abroad
            than from their own country. Their fortune trends in foreign
            countries. In the family, the person has to suffer from property
            loss even after the possibility of benefiting from grandparents.
          </p>
          <h4>Remedies for Vishdhar Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>
              Feed barley grains to the needy for 27 days on Saturday.
            </ListItem>
            <ListItem>
              On Saturday, circumambulate the raw coal anti-clockwise around
              your head 8 times, then throw the coal in the running water.
            </ListItem>
            <ListItem>Recite Hanuman Chalisa daily.</ListItem>
          </UnorderedList>

          <h3>12. Sheshnag Kaalsarp Dosh</h3>
          <p>
            The Sheshnag Kaal Sarp dosh is formed when the Rahu is present in
            the 12th house of the Kundli and the Ketu planet sits in the 6th
            house. The desires of the people born in this Sheshnag Kaalsarp Yog
            are always fulfilled, however, with a slight delay. The native under
            the presence of this dosh may develop a habit of spending more than
            his income. This is why he may usually find himself indebted. After
            42 years of age, there is a time in his life when he may find
            himself a prestigious place in society. This, however, will require
            your constant hard work and commitment.
          </p>
          <h4>Remedies for Sheshnag Kaalsarp Dosh</h4>
          <UnorderedList>
            <ListItem>
              Hang Hanuman Bahuk wrapped in red cloth on any Tuesday on the wall
              towards the south side of the house.
            </ListItem>
            <ListItem>
              Feed the raw bread of barley flour to the birds for 3 months.
            </ListItem>
            <ListItem>
              Wear an energised Shiva Yantra made of silver around the neck.
            </ListItem>
          </UnorderedList>

          <KaalFYQ />
        </div>
      </Container>
    </Layout>
  );
};

export default Kaalsharp;

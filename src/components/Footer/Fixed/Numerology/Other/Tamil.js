import React, { useEffect } from "react";
import Layout from "../../../../Layout/Layout.js";
import styled from "styled-components";
import Breadcrumbs from "../../../../Breadcrumb.js";

const StyledDiv = styled.div`
  .body {
    width: 90%;
    margin: auto;
    text-align: justify;
  }

  .heading {
    text-align: center;
    font-size: 30px;
    margin-bottom: -10px;
  }
  .heading1 {
    text-align: center;
    font-size: 18px;
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
  .inline-text a {
    color: red;
    display: inline;
    text-decoration: none;
  }
  .inline-text a:hover {
    font-weight: bold;
  }
`;

const Tamil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Tamil Numerology" description="" keywords="">
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Tamil Numerology</h1>
          <h2>Tamil Numerology: Traits and personality</h2>
          <p>
            Tamil numerology or Indian numerology holds its origin in the Tamil
            zone of Southern India. It is formed of 3 separately affiliated
            numerical digits. However, the final number is determined by the
            date of birth of the person. It furthermore reveals about their
            personality and other traits and features. The governing factor of
            Tamil Numerology is the Destiny number.
          </p>
          <p>Read in detail about each Tamil numerology number:</p>
          <h3>Tamil Numerology Number 1</h3>
          <p>
            People with Tamil numerology number 1 are known to be enthusiastic
            and energy-rich natives. These people are born with controlling
            nature. However, on the other hand, they are committed and
            assertive. Such people make the best leaders and usually believe in
            having prime positions for themselves. People with number one in
            Tamil numerology are great performers too. These people would enjoy
            their given works, regardless of the domain or stream. Moreover,
            such natives are a big fan of luxuries. Therefore, they see nothing
            to spending money on a great lifestyle.
          </p>
          <h3>Tamil Numerology Number 2</h3>
          <p>
            Those who have Tamil numerology number 2 as their destiny number
            have a beautiful aura. These natives are bright and fulfilled with
            empathy. These people possess the most variation in their moods.
            Thus, they act sometimes erratic while sometimes a giver. Because
            their emotional cycles are on constant sways, these people become
            one of the most caring people. People with the Tamil numerology
            number 3 sometimes feel dim when someone triggers their emotional
            side. However, on the other hand, they are competitive and forever
            ready to take on the world.
          </p>
          <h3>Tamil Numerology Number 3</h3>
          <p>
            People with this Tamil numerology number are full of wisdom. These
            natives are optimistic thinkers and never let anybody harm their
            intellect. People with Tamil numerology number 3 are also truthful,
            compassionate, earnest, and dignified people. They like to be gentle
            and love their self-esteem above all. They possess immense respect
            for their elders. Also, people with Tamil numerology number three
            are always hungry for knowledge and admiration. These natives also
            have great organization skills, and traditional and classics allure
            them a lot.
          </p>
          <h3>Tamil Numerology Number 4</h3>
          <p>
            Those who possess Tamil Numerology number 4 are usually
            down-to-earth people. These people usually love being into
            adventures. Thus, one can say that they are a perfect amalgamation
            of spice and sweet. They are somewhat materialistic beings and
            generally energetic and pragmatic. However, on the other hand, they
            are reliable and in need of love. Moreover, natives with Tamil
            numerology four would be full of suggestions. They shall know how
            and when to incorporate what amount of thoughts and ideas in the
            rightful place.
          </p>
          <h3>Tamil Numerology Number 5</h3>
          <p>
            Natives with Tamil numerology number 5 are zingy in nature. They
            love to uplift everybody. Mostly, they would motivate others to do
            kinds of stuff that may look impossible. Also, these people are
            highly adaptable to changes and new environments. With low spirits,
            these people are the right kind of motivation. Along with that,
            people with Tamil numerology number five also love to stay healthy
            and fit. They would be into exercising. Also, they are forever ready
            to widen their boundaries to learn new things and solve issues
            beyond their power.
          </p>

          <h3>Tamil Numerology Number 6</h3>
          <p>
            The best that describes these people is charm, unity, and stability.
            Natives with Tamil numerology number 6 possess benevolence and are
            magnificent to the core. These people are highly compassionate and
            trustworthy. Moreover, they are also sentimental and less rational
            and practical. Such natives believe in less scientific points and
            facts and love to enjoy caring for others, especially close ones and
            family. Plus, people with numerology number six are empathetic and
            social in nature. They believe in serving others and feel peace in
            doing so.
          </p>
          <h3>Tamil Numerology Number 7</h3>
          <p>
            People who have Tamil numerology number 7 are generally magical and
            intuitive. These people believe in mystical and metaphysical things.
            Also, they are more dismissive and unemotional. These natives value
            facts and possess knowledge like no other. However, on the other
            hand, these people are pretty introverted and barely love to be
            involved in conversations. To them, spirituality means a lot. Thus,
            folks with Tamil numerology number seven have an intense tilt
            towards visiting shrines and spiritual knowledge. Moreover, they
            hold the capability to draw people towards them and take their
            advice in hard situations.
          </p>
          <h3>Tamil Numerology Number 8</h3>
          <p>
            According to Tamil numerology number 8, people shall have a strange
            and stubborn nature. They shall be individualistic and eccentric
            too. These natives like to be highly competitive in nature.
            Moreover, they have a keen tilt towards materialism. Thus, wealth
            matters a lot to them. Furthermore, people who have numerology
            number eight excel in performing tasks. Also, these natives are
            highly visionary and definitive. So, they focus on realistic and
            practical things. However, on the other hand, these people are
            somewhat imaginative too.
          </p>
          <h3>Tamil Numerology Number 9</h3>
          <p>
            Folks who have Tamil numerology number 9 possess a close association
            with visual styling. It makes these natives highly transparent and
            clear image beings. These natives might take time to open up to
            people. However, their discipline is something they feel highly
            proud about. Another trait that explains their nature is sympathy,
            sensitivity, and spiritualism. So, one can say that people with
            Tamil numerology number nine are pretty challenging beings to be
            around. They may outland sometimes. But mostly these people know how
            to balance lives in the best way possible.
          </p>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Tamil;

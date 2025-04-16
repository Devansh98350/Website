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
    margin-bottom: 10px;
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

const Name = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Name Numerology" description="" keywords="">
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Name Numerology</h1>
          <h3>Name numerology: Alphabets and their meaning</h3>
          <p>
            Numerology numbers have a very special meaning as they are
            represented by how much or in what way the person belonging under
            each number is going to receive a fortune. It is the mystical
            relationship between our life and numbers. By calculating the name
            and the number of each letter, corresponding to numerology. When we
            speak of name numerology, it gives us a hint of what is in store for
            us in the future. Let’s have a look to find out.
          </p>
          <h3>How to calculate name numbers in numerology</h3>
          <p>
            Let’s take the name Shri Singh as an example. In the name Shri, the
            value of S is 1, the value of H is 8, the value of R is 9, the value
            of I is 9. The sum of all the numbers will be 27. We will add these
            two numbers, like so 2+7= 9.
          </p>
          <p>
            We do the same to the surname Singh and we get 30. Further, that
            makes 3+0= 3. Finally, we will add these two numbers like so 12.
          </p>
          <p>
            The final number that we receive, in this case, 1+2=3, is the actual
            name number.
          </p>
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
                  <td>S H R I</td>
                  <td>S I N G H</td>
                </tr>
                <tr>
                  <td>1+8+9+9 = 27</td>
                  <td>1+9+5+7+8 = 30</td>
                </tr>
                <tr>
                  <td>2+7= 9</td>
                  <td>3+0= 3</td>
                </tr>
              </tbody>
            </table>
          </table>
          <p>Adding them both, we shall get</p>
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
                  <td>3+9= 12</td>
                  <td> 1+2= 3</td>
                </tr>
              </tbody>
            </table>
          </table>
          <p>Thus, the name numerology number would be Number 3.</p>
          <h3>Alphabet value in numerology</h3>
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
                    <strong>1</strong>
                  </td>
                  <td>
                    <strong>2</strong>
                  </td>
                  <td>
                    <strong>3</strong>
                  </td>
                  <td>
                    <strong>4</strong>
                  </td>
                  <td>
                    <strong>5</strong>
                  </td>
                  <td>
                    <strong>6</strong>
                  </td>
                  <td>
                    <strong>7</strong>
                  </td>
                  <td>
                    <strong>8</strong>
                  </td>
                  <td>
                    <strong>9</strong>
                  </td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>B</td>
                  <td>C</td>
                  <td>D</td>
                  <td>E</td>
                  <td>F</td>
                  <td>G</td>
                  <td>H</td>
                  <td>I</td>
                </tr>
                <tr>
                  <td>J</td>
                  <td>K</td>
                  <td>L</td>
                  <td>M</td>
                  <td>N</td>
                  <td>O</td>
                  <td>P</td>
                  <td>Q</td>
                  <td>R</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>T</td>
                  <td>U</td>
                  <td>V</td>
                  <td>W</td>
                  <td>X</td>
                  <td>Y</td>
                  <td>Z</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </table>
          <p>
            From numbers 1 to 9 represent each alphabet in name numerology. Each
            alphabet emits positive or negative energies to the person.
          </p>
          <h3>Role of vowels in name numerology</h3>
          <p>
            Vowels play a very important role in name numerology as they are the
            signifier of what we want from our life. They represent our desire,
            our happiness, and what makes us satisfied and fulfilled in life.
            They also represent what we dislike and want to avoid at all costs.
            All of these can be identified through the vowel of our full name at
            birth. Our inner self is reflected through the vowels of our name.
            The consonants, on the other hand, reflect more the outer self.
          </p>
          <p>
            When we speak a vowel, it comes out smoothly from our tongue,
            without any restrictions, representing our inner self.
          </p>
          <p>
            Consonants always have a sort of blockage when spoken out loud, as
            we are trying to hide what’s inside us, something we cannot
            comprehend to share with someone else. Through consonants, we
            attempt to protect ourselves.
          </p>

          <h3>Alphabet A</h3>
          <p>
            People who have A in their name are considered to be very purposeful
            in life and have big ambition, according to name numerology. Usually
            the independent type, their goal is everything to them and will do
            everything to get their dreams fulfilled. Everything they do is
            original, which is usually what makes them recognized by everyone.
          </p>
          <p>
            They can also be quite straightforward and can unintentionally hurt
            your feelings. Being bold and courageous, they do not just think and
            contemplate but will act and take steps forward, to reach their
            destination. Although, their personality can be a bit rigid, as they
            find it difficult to change or adapt according to situations.
          </p>

          <h3>Alphabet B</h3>
          <p>
            Those who have B in their name are the sentimental and emotional
            type. Being reserved and calm in nature, they will always try to
            maintain harmony everywhere they go. To know what they actually mean
            when they say or do something is not very difficult as they are
            quite transparent and open about their feelings.
          </p>
          <p>
            But their fixed way of thinking, that what they do or know is
            usually right is a bit challenging for people associating with them.
            It can also be a nuisance for them as they lose opportunities when
            they do not change their way of thinking sometimes.
          </p>

          <h3>Alphabet C</h3>
          <p>
            The people who have the alphabet C in their name are the open and
            expressive ones. As per name numerology, they will not hesitate to
            share their deepest and darkest secrets and will express them with
            such seriousness that there will not be a chance to think they are
            joking. Whatever emotions they feel, they feel them more than anyone
            else, because of which they are always light and joyful.
          </p>
          <p>
            Neither do they feel depressed nor would they allow any to feel the
            same because they do not bottle up their feelings. This makes others
            around them comfortable doing the same. But in the efforts of trying
            everything, they can stick to one thought, which makes them lack
            stability.
          </p>

          <h3>Alphabet D</h3>
          <p>
            Those who have D in their name are the logical ones of the group.
            Spontaneity is not their thing as they like to analyse and calculate
            every movement and step. Because of their methodical manners, they
            rarely commit any mistakes which in turn gives them the results they
            desire. Their determination and dedication give them self-confidence
            and their courageous nature gives them a name in society.
          </p>
          <p>
            Although they have an authoritative nature and it suits them
            perfectly, they can be stubborn sometimes and will not yield to
            anyone else’s opinion. According to numerology of alphabets, their
            way of approaching a problem will be in a practical way rather than
            emotional and are not only dreamers but also doers.
          </p>

          <h3>Alphabet E</h3>
          <p>
            Those with E in their name are outgoing and spontaneous. They love
            to pursue physical activities and enjoy the passion and positives in
            life. Since they love to live life to the fullest and do not regret
            anything, there are chances that they might get married more than
            once.
          </p>
          <p>
            Their enthusiasm for everything and their wish to fulfill every
            desire is contagious in a way that people around them get inspired
            to live the same way. Even if they are very emotional and sensible,
            they are equally rational and logical, and won’t be fooled easily.
            Unlike others, it is not difficult for them to view things from a
            different perspective and accept the same.
          </p>

          <h3>Alphabet F</h3>
          <p>
            Positivity and goodness is what the people with F in their names
            spread wherever they go. Their way of living is quite inspiring.
            Always ready to help, they will never look away from someone in
            trouble. They are cheerful and sensible. These natives, according to
            name numerology, have an openness about them that makes them more
            approachable than others and helps them connect with a lot of
            people.
          </p>
          <p>
            They are somewhat of an empath, because of which they feel and
            understand others’ emotions and worries. This can be a problem for
            them because as they feel for everyone and cannot look away from
            someone suffering, they will want to sacrifice their own happiness
            and success to make their close ones happy and satisfied.
          </p>
          <h3>Alphabet G</h3>
          <p>
            Names that have a G in them are the dominating and powerful ones.
            Those who have the alphabet G in their name can be very intimidating
            as they are all business and no bluff. They are always dedicated and
            hardworking and will reach their goal at any cost. Not caring what
            others have to say, they will work on their plan with determination
            and will get success without the help of others.
          </p>
          <p>
            They are usually on the right path, and rarely make mistakes. But
            they can also be sensible and empathize. To reach their goal, they
            will not push someone down but will get everything they want along
            with lifting the other person. These people are also considered
            psychics as they can predict the future and can draw in fortune
            without effort. They also have the ability to telepath.
          </p>
          <h3>Alphabet H</h3>
          <p>
            People with the alphabet H in their name are very sure of themselves
            and know what they are doing. They trust their intuition and
            feelings and opinions. Whatever they do is different from everyone
            else as they are creative and do not fear trying something new. Even
            if they have a tendency to lose money, they can earn it back just as
            easily. But they sometimes can get caught up with their emotions and
            can get lonely.
          </p>
          <p>
            As they tend to overthink a lot, it makes them skeptical of
            everything, binding them from enjoying. They just need to give their
            mind a rest and realise that with time everything will fall into
            place and life has a way of making everything right in the end.
          </p>
          <h3>Alphabet I</h3>
          <p>
            If I is in their names, they are in general very sensitive and care
            very much about the feelings of others. They try very hard not to
            hurt anyone or to cause problems for anyone. Born to be artists,
            these alphabet people have quite a grip in the field of art and can
            get extremely creative.
          </p>
          <p>
            But they cannot function much in dire situations and lose their
            control, which leads to them falling prey to accidents. Maintaining
            a balance is very important to have stability in life. Try thinking
            about the consequences and planning things beforehand to avoid
            difficult situations.
          </p>
          <h3>Alphabet J</h3>
          <p>
            Those who have J in their name are loved by everyone as they are who
            they are and do not pretend to be someone else. Dependable and
            responsible, they will not let anyone down. They are faithful and
            honest, because of which they can be trusted easily. Along with
            everything, they are also very sensible and empathizing and connect
            with people easily. Even if they are ambitious, these people as per
            name numerology will not do anything at the expense of others.
          </p>
          <p>
            As compassionate people, they are always ready to be of help and
            support to anyone in tough situations. They are also creative in
            nature and are quite witty and resourceful which they can use to be
            successful in life. Just the right amount of motivation will push
            them to great heights.
          </p>
          <h3>Alphabet K</h3>
          <p>
            Success is not negotiable for those who have the alphabet K in their
            name. Determined to achieve everything they wish for drives them to
            work hard and be consistent. They have an intuitive way of thinking
            and will listen to everything their inner self is saying. Their
            brains are filled with tons of knowledge and ideas and can mold
            themselves to fit any situation.
          </p>
          <p>
            Being headstrong and powerful, they have all the leadership
            qualities which define their personality. But every good thing comes
            with a bad thing too. These people, although powerful and ambitious,
            can sometimes fall prey to self-doubt. They sometimes become unsure
            of their decisions and falter when taking an important step, fearing
            failure. They should avoid that and realize that failure is a part
            of life and move on with confidence.
          </p>
          <h3>Alphabet L</h3>
          <p>
            People who have L in their name are intelligent and do everything in
            an intellectual way. Making a decision is hard for them as they like
            to contemplate a lot. These people are genuine in nature and do
            everything with sincere hearts and will pretend otherwise.
          </p>
          <p>
            According to name numerology, L name alphabet people possess all
            chances that they will be in accidents as they travel a lot. So they
            should be careful of that.
          </p>

          <h3>Alphabet M</h3>
          <p>
            These people are very hardworking and do not like to sit around and
            waste time. But they should limit their working tendencies as they
            can overwork themselves. Since they like to have a domestic life,
            they work extra hard to be financially secure.
          </p>
          <p>
            Moreover, people with the alphabet M in name numerology provide
            their family with all the comfort. It is advised to people with this
            name numerology to manage their anger and solve every problem with a
            calm demeanor.
          </p>

          <h3>Alphabet N</h3>
          <p>
            These people have a very intuitive mind and their inner self hard
            sends them the wrong message. Being the creative one of the lot,
            they will not follow the conventional ways and will come up with
            unique and innovative ideas.
          </p>
          <p>
            They like to gather knowledge as much as possible, because of which
            they have an opinionated nature and believe in things they know.
            These people are also sensual, which can lead them to have many love
            affairs.
          </p>

          <h3>Alphabet O</h3>
          <p>
            People who have O in their names are believed to be religious in
            nature. They have a strong moral compass and will avoid doing wrong
            to anyone. Their patients are commendable as they act calm and
            rationally in even the most difficult situations. It is rare for
            them to ever break a law and always be careful with legal things.
          </p>
          <p>
            Even if they are disciplined and focused, this name numerology
            people sometimes get jealous about others’ success but don’t let
            that jealousy sway their morality.
          </p>

          <h3>Alphabet P</h3>
          <p>
            These people are very intelligent and resourceful. They like to read
            news articles and watch documentaries as they help them to gather
            knowledge. Even if they can become close to people easily, they
            avoid it as much as possible as they love their space and like to
            stay by themselves most of the time.
          </p>
          <p>
            They will keep their distance when necessary and can also have
            secrets they cannot reveal. Moreover, according to this name
            numerology people have attachment issues and find it hard to let go
            of things.
          </p>

          <h3>Alphabet Q</h3>
          <p>
            Fortune is high when it comes to money for those who have Q in their
            name. But be careful as with good fortune comes difficult situations
            to balance things out. Although they earn money easily, they also
            become victims of loss.
          </p>
          <p>
            Dominating in nature, they have an aura about them that influences
            others’ thoughts a lot. They do not like to open up about themselves
            a lot which gives them a mysterious form and usually become the talk
            of the town. They also have excellent communication skills.
          </p>

          <h3>Alphabet R</h3>
          <p>
            People with the alphabet R in their name are empathic in nature and
            feel the pain of others. It is hard for them to see someone in pain
            and are always ready to help with everything they have.
          </p>
          <p>
            Their warm heart and inner strength are recognized by others which
            drives them to success. Things that can be drawbacks for them are
            their impatient nature and the fact that they lose their temper
            quite easily. Working on them will help them get all the success,
            according to name numerology.
          </p>

          <h3>Alphabet S</h3>
          <p>
            People with the letter S in their names are very attractive and
            good-looking and catch the attention of everyone wherever they go.
            They have a kind and warm personality which make them very desirable
            but they feel emotions at an extreme level, which leads them to have
            mood swings quite often.
          </p>
          <p>
            While making an important decision, they tend to get overwhelmed and
            make the decision in haste, which usually backfires on them. They
            should work on their endurance and try to meditate to calm their
            nerves.
          </p>
          <h3>Alphabet T</h3>
          <p>
            These people love to have adventures and are enthusiastic to try
            different things. They try new things all the time and use them to
            have various perspectives on life. They care a lot about things that
            are dear to them and are emotions in nature.
          </p>

          <p>
            These people tend to get hurt quite easily as they are sensitive and
            care what others have to say about them. These people, as per the
            numerology of alphabets have a protective tendency and will not let
            anything hurt their loved ones. They also tend to get a bit
            aggressive when in a relationship.
          </p>
          <h3>Alphabet U</h3>
          <p>
            Fortune is always with these people as they attract good luck like
            ants to sugar. They are simply present at the right time in the
            right place which gets their job done easily. Even if they have a
            strong intuition and are creative, it is hard for them to comprehend
            difficult situations sometimes.
          </p>

          <p>
            People with letter U can also get quite lazy when it comes to hard
            work and have commitment issues. Although they are lucky when it
            comes to earning money, they also are prone to wasting the same for
            unnecessary reasons. They can also be a little selfish in certain
            circumstances.
          </p>
          <h3>Alphabet V</h3>
          <p>
            People with V in their name have an active intuition and can sense
            things before they happen. These people are highly respected in
            society because of their wisdom and way of living. As they have a
            creative way of thinking, everything they do stands out and becomes
            an inspiration to others. They have ideas and thoughts that will
            give them a lot of success and fame if they set them in motion.
          </p>

          <p>
            What makes them different from the rest is their personality which
            is humble and helpful. Even if they are better than others in
            various fields, they will not gloat about them. Although they can be
            the possessive type when in a relationship.
          </p>
          <h3>Alphabet W</h3>
          <p>
            These people know their goal and will work relentlessly towards it.
            They will use their creative ideas to help them achieve their
            dreams. They do not like to idle and waste time and can also
            multitask when needed. Working in tough situations is not very hard
            for them as they are used to doing everything themselves without the
            help of others.
          </p>

          <p>
            Their communication skills are also very good because of which
            people like to be around them at all times. Meeting new people and
            gaining experience is something they love to do because it broadens
            their horizons.
          </p>
          <h3>Alphabet X</h3>
          <p>
            People with X in their name are specifically passionate about nature
            and their creativity gives them a place wherever they go. They are
            very open about their choices and are ready to try everything
            without judgment. Their different perspectives will open new doors
            and opportunities in the field of career.
          </p>

          <p>
            Quick-witted in nature, they very easily grasp new information which
            makes achieving success easy for them. They are also believed to be
            sensual beings and will indulge in carnal activities quite often.
          </p>
          <h3>Alphabet Y</h3>
          <p>
            These people love their freedom and want to experience everything
            without any limitations. They like exploring new ideas and want to
            pave their own path. They do not appreciate it when someone tries to
            restrict their way of thinking as they want to learn about things
            without judgment.
          </p>

          <p>
            Because of this, they might indulge in questionable things which
            others may think twice before trying. As they are brave and
            self-dependent, they express themselves better than anyone and
            become noticeable even in a crowd. They have a very good fashion
            sense and carry themselves quite nicely.
          </p>
          <h3>Alphabet Z</h3>
          <p>
            A very unique letter for a name, those who have it are the confident
            and energetic type. Mediocre results are not worth their attention
            and strive to do things with excellence. Hardworking and dedicated,
            they will get things done without any sweating, but they expect the
            same from everyone around them, which tends to disappoint them in
            some instances.
          </p>

          <p>
            Their intuition is strong and is always aware of their surroundings.
            Along with being spontaneous and enthusiastic, they also carry a
            loving and kind heart and are always ready to be of service.
            Physically, they are strong and active and can do outdoor work very
            easily.
          </p>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Name;

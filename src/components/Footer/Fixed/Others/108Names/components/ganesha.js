import React, { useEffect } from "react";
import styled from "styled-components";
import Deity108ButtonGrid from "./commonGrid";
import Layout from "../../../../../Layout/Layout";
import Breadcrumbs from "../../../../../Breadcrumb";
import FAQLayout from "../../../../../Common/FaqLayout";
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
  .faq-item {
    margin-bottom: 10px;
  }
  .accordion {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    background: #eee;
    padding: 10px;
    font-weight: bold;
  }
  .accordion.open {
    background: #ddd;
  }
  .panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background: #fafafa;
    padding: 0 10px;
  }
  .panel.open {
    max-height: 100vh; /* or any big number */
    padding: 10px;
  }
`;
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;
const Ganesh108FAQ = [
  {
    id: 1,
    title: "How does chanting 108 names of Ganesha help?",
    content:
      "Reciting the Ganpati 108 names is said to gain Ganesha's blessings,removing hurdles and obstacles from one's life path. Many believe that regular chanting brings mental peace, focus, wisdom and success in all goals.",
  },
  {
    id: 2,
    title: "What is the 1st name of Ganesha?",
    content:
      "The 1st sacred name in the Ashtottara Shatanamavali is 'Gajanana', which translates to 'having the face of an elephant.' This celebrates Ganesha's distinctive elephant-headed form, a reminder of his ability to remove even the biggest of obstacles.",
  },
  {
    id: 3,
    title: "What happens when you chant Ganesha Namawali?",
    content:
      "When chanting 108 names of Ganesha with deep focus, it's said one's aura is purified and energised. The vibrations help align the body, mind and spirit. Many find it bringing a deep state of meditation and oneness with the universe.",
  },
  {
    id: 4,
    title: "How to chant Ganesha Ashtottara Shatanamavali?",
    content:
      "Start the Ganesha Ashtothram with the sacred Ganesha mantra 'Om Gajananaya Namaha', followed by reciting each of the 108 names. Use prayer Rudraksha beads to chant at a moderate rhythm to maintain focus.",
  },
  {
    id: 5,
    title: "What is the best time to chant Ganeshna Namavali?",
    content:
      "The best time to chant Ganesha Namavali is Brahma Muhurta. It begins 1.5 hours before sunrise and also brings the blessings of Lord Surya. Here, you can read Ganesh 108 names in English and Hindi.",
  },
];

const Ganesh108 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="108 Name of Lord Ganesha - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">108 Names of Lord Ganesha</h1>
          <h2>Know The Power of Ganesh Namavali</h2>
          <h3>Learn Ganesha Ashtottara Shatanamavali</h3>
          <p>
            Lord Ganesha is one of the most popular Gods in Hinduism. Pleasing
            him through various forms of prayers frees you from obstacles and
            gives you a positive energy to face challenges. But do you know one
            of the most effective ways to impress Ganesha? It is through
            learning Ganesha Ashtottara Shatanamavali, i.e. 108 names of lord
            Ganesha.
          </p>
          <h3>108 Lord Ganesha Name With Meaning</h3>
          <p>
            The beloved Ganesha, also known as Ganpati and several other names,
            is the son of Lord Shiva. Right from the story of his birth to the
            powers and qualities he possesses, there are Ganapati 108 names
            mentioned in the Hindu scriptures.
          </p>
          <p>
            Let us see the 108 Names of Lord Ganesha With meaning and associated
            mantra.
          </p>
          <Deity108ButtonGrid />
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
                  <th>No.</th>
                  <th>108 Names</th>
                  <th>Mantra</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Akhuratha</td>
                  <td>Om Akhurathaya Namaha</td>
                  <td>One with mouse as charioteer</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Alampata</td>
                  <td>Om Alampataye Namaha</td>
                  <td>Ever eternal Lord</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Amit</td>
                  <td>Om Amitaya Namaha</td>
                  <td>One who is incomparable</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Anantachidrupamayam</td>
                  <td>Om Anantachidrupamayaya Namaha</td>
                  <td>
                    One who is the personification of infinite consciousness
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Avaneesh</td>
                  <td>Om Avaneeshaya Namaha</td>
                  <td>Lord of the whole world</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Avighna</td>
                  <td>Om Avighnaya Namaha</td>
                  <td>Remover of obstacles</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Balaganapati</td>
                  <td>Om Balaganapataye Namaha</td>
                  <td>Beloved child</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Bhalchandra</td>
                  <td>Om Bhalachandraya Namaha</td>
                  <td>Moon-crested Lord</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Bheema</td>
                  <td>Om Bheemaya Namaha</td>
                  <td>Huge and Gigantic</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Bhupati</td>
                  <td>Om Bhupataye Namaha</td>
                  <td>Lord of the gods</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Bhuvanpati</td>
                  <td>Om Bhuvanpataye Namaha</td>
                  <td>God of the gods</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Buddhinath</td>
                  <td>Om Buddhinathaya Namaha</td>
                  <td>God of wisdom</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Buddhipriya</td>
                  <td>Om Buddhipriyaya Namaha</td>
                  <td>Knowledge bestower</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Buddhividhata</td>
                  <td>Om Buddhividhataye Namaha</td>
                  <td>God of knowledge</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Chaturbhuj</td>
                  <td>Om Chaturbhujaya Namaha</td>
                  <td>One who has four arms</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Devadeva</td>
                  <td>Om Devadevaya Namaha</td>
                  <td>Lord of all lords</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Devantakanashakarin</td>
                  <td>Om Devantakanashakarinaya Namaha</td>
                  <td>Destroyer of evils and asuras</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Devavrata</td>
                  <td>Om Devavrataya Namaha</td>
                  <td>One who accepts all penances</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Devendrashika</td>
                  <td>Om Devendrashikaya Namaha</td>
                  <td>Protector of all gods</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Dharmik</td>
                  <td>Om Dharmikaya Namaha</td>
                  <td>One who gives charity</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Dhoomravarna</td>
                  <td>Om Dhoomravarnaya Namaha</td>
                  <td>Smoke-Hued Lord</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Durja</td>
                  <td>Om Durjaya Namaha</td>
                  <td>Invincible Lord</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Dvaimatura</td>
                  <td>Om Dvaimaturaya Namaha</td>
                  <td>One who has two mothers</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Ekaakshara</td>
                  <td>Om Ekaaksharaya Namaha</td>
                  <td>One who is of single syllable</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Ekadanta</td>
                  <td>Om Ekadantaya Namaha</td>
                  <td>Single-Tusked Lord</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Ekadrishta</td>
                  <td>Om Ekadrishtaya Namaha</td>
                  <td>Single-Tusked Lord</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Eshanputra</td>
                  <td>Om Eshanputraya Namaha</td>
                  <td>Son of Lord Shiva</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Gadadhara</td>
                  <td>Om Gadadharaya Namaha</td>
                  <td>One who has the mace as his weapon</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Gajakarna</td>
                  <td>Om Gajakarnaya Namaha</td>
                  <td>One who has elephant ears</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Gajanana</td>
                  <td>Om Gajananaya Namaha</td>
                  <td>Elephant-Faced Lord</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Gajananeti</td>
                  <td>Om Gajananetaye Namaha</td>
                  <td>Elephant-Faced Lord</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Gajavakra</td>
                  <td>Om Gajavakrayaya Namaha</td>
                  <td>Trunk of the elephant</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Gajavaktra</td>
                  <td>Om Gajavaktraya Namaha</td>
                  <td>One who has a mouth like an elephant</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Ganadhakshya</td>
                  <td>Om Ganadhakshyaya Namaha</td>
                  <td>Lord of all Ganas (Gods)</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Ganadhyakshina</td>
                  <td>Om Ganadhyakshinaya Namaha</td>
                  <td>Leader of all the celestial bodies</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Ganapati</td>
                  <td>Om Ganapataye Namaha</td>
                  <td>Lord of all Ganas</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Gaurisuta</td>
                  <td>Om Gaurisutaya Namaha</td>
                  <td>Son of Gauri (Parvati)</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Gunina</td>
                  <td>Om Guninaya Namaha</td>
                  <td>One who is the master of all virtues</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Haridra</td>
                  <td>Om Haridraya Namaha</td>
                  <td>One who is golden coloured</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Heramba</td>
                  <td>Om Herambaya Namaha</td>
                  <td>Mother's beloved son</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Kapila</td>
                  <td>Om Kapilaya Namaha</td>
                  <td>Yellowish-Brown Lord</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Kaveesha</td>
                  <td>Om Kaveeshaya Namaha</td>
                  <td>Master of Poets</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Krti</td>
                  <td>Om Krityaya Namaha</td>
                  <td>Lord of Music</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Kripalu</td>
                  <td>Om Kripalave Namaha</td>
                  <td>Merciful Lord</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Krishapingaksha</td>
                  <td>Om Krishapingakshaya Namaha</td>
                  <td>Yellowish-Brown Eyed</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Kshamakaram</td>
                  <td>Om Kshamakaramaya Namaha</td>
                  <td>The Place of Forgiveness</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Kshipra</td>
                  <td>Om Kshipraya Namaha</td>
                  <td>One who is easy to appease</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Lambakarna</td>
                  <td>Om Lambakarnaya Namaha</td>
                  <td>Large-Eared Lord</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Lambodara</td>
                  <td>Om Lambodaraya Namaha</td>
                  <td>The Huge Bellied Lord</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Mahabala</td>
                  <td>Om Mahabalaya Namaha</td>
                  <td>Enormously Strong Lord</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Mahaganapati</td>
                  <td>Om Mahaganapataye Namaha</td>
                  <td>Omniscient and Supreme Lord</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Maheshwara</td>
                  <td>Om Maheshwaraya Namaha</td>
                  <td>Lord of the Universe</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Mangalamurti</td>
                  <td>Om Mangalamurtaye Namaha</td>
                  <td>All Auspicious Lord</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Manomay</td>
                  <td>Om Manomayaya Namaha</td>
                  <td>Winner of hearts</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Mrityuanjaya</td>
                  <td>Om Mrityuanjayaya Namaha</td>
                  <td>Conqueror of Death</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Mundakarama</td>
                  <td>Om Mundakaramaya Namaha</td>
                  <td>Abode of Happiness</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Muktidaya</td>
                  <td>Om Muktidayaya Namaha</td>
                  <td>Bestower of Eternal Bliss</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Musikvahana</td>
                  <td>Om Musikvahanaya Namaha</td>
                  <td>One who has mouse as charioteer</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Nadapratithishta</td>
                  <td>Om Nadapratithishtaya Namaha</td>
                  <td>One who appreciates and loves music</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Namasthetu</td>
                  <td>Om Namasthetave Namaha</td>
                  <td>Vanquisher of All Evils and Vices and Sins</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Nandana</td>
                  <td>Om Nandanaya Namaha</td>
                  <td>Lord Shiva's Son</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Nideeshwaram</td>
                  <td>Om Nideeshwaramaya Namaha</td>
                  <td>Giver of Wealth and Treasures</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Pashamukha</td>
                  <td>Om Pashamukhaya Namaha</td>
                  <td>One who has mouse as charioteer</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Phalahara</td>
                  <td>Om Phalaharaya Namaha</td>
                  <td>Lord of Fruit</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Rudrapriya</td>
                  <td>Om Rudrapriyaya Namaha</td>
                  <td>Beloved of Lord Shiva</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Sarvadevatman</td>
                  <td>Om Sarvadevatmanaya Namaha</td>
                  <td>Acceptor of All Celestial Offerings</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Sarvasiddhanta</td>
                  <td>Om Sarvasiddhantaya Namaha</td>
                  <td>Bestower of Skills and Wisdom</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Sarvatman</td>
                  <td>Om Sarvatmanaya Namaha</td>
                  <td>Protector of the Universe</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Shambhavi</td>
                  <td>Om Shambhavaye Namaha</td>
                  <td>The Son of Parvati</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Shashivarnam</td>
                  <td>Om Shashivarnamaya Namaha</td>
                  <td>One who has a Moon like complexion</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Shoorpakarna</td>
                  <td>Om Shoorpakarnaya Namaha</td>
                  <td>Large-Eared Lord</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Shuban</td>
                  <td>Om Shubanaya Namaha</td>
                  <td>All Auspicious Lord</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Shubhagunakanan</td>
                  <td>Om Shubhagunakanaya Namaha</td>
                  <td>One who is The Master of All Virtues</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Shweta</td>
                  <td>Om Shwetaya Namaha</td>
                  <td>One who is as pure as the White Color</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Siddhidhata</td>
                  <td>Om Siddhidhataya Namaha</td>
                  <td>Bestower of Success and Accomplishments</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Siddhipriya</td>
                  <td>Om Siddhipriyaya Namaha</td>
                  <td>Bestower of Wishes and Boons</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Siddhivinayaka</td>
                  <td>Om Siddhivinayakaya Namaha</td>
                  <td>Bestower of Success</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Skandapurvaja</td>
                  <td>Om Skandapurvajaya Namaha</td>
                  <td>Elder Brother of Skanda (Lord Kartik)</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Sumukha</td>
                  <td>Om Sumukhaya Namaha</td>
                  <td>Auspicious Face</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Sureshwaram</td>
                  <td>Om Sureshwaramaya Namaha</td>
                  <td>Lord of All Lords</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Swaroop</td>
                  <td>Om Swaroopaya Namaha</td>
                  <td>Lover of Beauty</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Tarun</td>
                  <td>Om Tarunaya Namaha</td>
                  <td>Ageless</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Uddanda</td>
                  <td>Om Uddandaya Namaha</td>
                  <td>Nemesis of Evils and Vices</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Umaputra</td>
                  <td>Om Umaputraya Namaha</td>
                  <td>The Son of Goddess Uma (Parvati)</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Vakratunda</td>
                  <td>Om Vakratundaya Namaha</td>
                  <td>Curved Trunk Lord</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Varaganapati</td>
                  <td>Om Varaganapataye Namaha</td>
                  <td>Bestower of Boons</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Varaprada</td>
                  <td>Om Varapradaya Namaha</td>
                  <td>One who grants wishes and boons</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Varadavinayaka</td>
                  <td>Om Varadavinayakaya Namaha</td>
                  <td>Bestower of Success</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Veeraganapati</td>
                  <td>Om Veeraganapataye Namaha</td>
                  <td>The Vigorous Lord</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Vidyavaridhi</td>
                  <td>Om Vidyavaridhaye Namaha</td>
                  <td>The God of Wisdom</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Vighnahara</td>
                  <td>Om Vighnaharaya Namaha</td>
                  <td>Remover of obstacles</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Vighnaharta</td>
                  <td>Om Vighnahartaya Namaha</td>
                  <td>Destroyer of All Obstacles</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Vighnaraja</td>
                  <td>Om Vighnarajaya Namaha</td>
                  <td>Lord of All Hindrances</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Vighnarajendra</td>
                  <td>Om Vighnarajendrayaya Namaha</td>
                  <td>Lord of All Obstacles</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Vighnavinashanaya</td>
                  <td>Om Vighnavinashanaya Namaha</td>
                  <td>Destroyer of All Obstacles and Impediments</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Vigneshwara</td>
                  <td>Om Vigneshwaraya Namaha</td>
                  <td>Lord of All Obstacles</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Vikat</td>
                  <td>Om Vikataya Namaha</td>
                  <td>Huge and Gigantic</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Vinayaka</td>
                  <td>Om Vinayakaya Namaha</td>
                  <td>Lord of All</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Vishwamukha</td>
                  <td>Om Vishwamukhaya Namaha</td>
                  <td>Master of The Universe</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Vishwaraja</td>
                  <td>Om Vishwarajaya Namaha</td>
                  <td>King of The World</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Yagnakaya</td>
                  <td>Om Yagnakayaya Namaha</td>
                  <td>Acceptor of All Sacred and Sacrificial Offerings</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Yashaskaram</td>
                  <td>Om Yashaskaraya Namaha</td>
                  <td>Bestower of Fame and Fortune</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Yashvasin</td>
                  <td>Om Yashvasinaya Namaha</td>
                  <td>Beloved and Ever Popular Lord</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Yogadhipa</td>
                  <td>Om Yogadhipaya Namaha</td>
                  <td>The Lord of Meditation</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Yoginampati</td>
                  <td>Om Yoginampataye Namaha</td>
                  <td>Lord of All Yogis</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Yoginashaswata</td>
                  <td>Om Yoginashaswataya Namaha</td>
                  <td>The Eternal Lord</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Vakratunda</td>
                  <td>Om Vakratundaya Namaha</td>
                  <td>One with a Curved Trunk</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Lambodara</td>
                  <td>Om Lambodaraya Namaha</td>
                  <td>The Huge-Bellied Lord</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Choosing A Lord Ganesha Name For Newborn Baby</h3>
          <p>
            In Hinduism, Naming or Naamkarann, based on Ganpati 108 names for a
            baby boy, has been a ritual since ancient times. It is believed that
            by choosing a name from the Ganesha Ashtottara Shatanamavali, one
            can please Lord Ganesha and bring his positive blessings to their
            newborn baby.
          </p>
          <p>
            But how does one decide which name from the long list of 108 God
            Ganesh names is the most suitable for their child? Let's see.
          </p>
          <UnorderedList>
            <ListItem>
              Firstly, think of a name from the list of Ganesha 108 names that
              relate to the qualities you wish to see in your child.
            </ListItem>
            <ListItem>
              Next, consult a pandit for advice on your child’s name. Also, if
              you can’t remember all the names, check on the 108 names of Lord
              Ganesha in English and Hindi here.
            </ListItem>
            <ListItem>
              Let’s take an example. If you wish to see leadership qualities in
              your boy, the name that perfectly fits the meaning can be
              “Vinayak”. Know Ganpati names in English today!
            </ListItem>
            <ListItem>
              Likewise, look at other names out of the 108 Names of Lord Ganesha
              with meaning so that you can choose a suitable Ganesha name for
              your newborn baby.
            </ListItem>
          </UnorderedList>
          <h3>Benefits of Chanting Lord Ganesh 108 Names</h3>
          <p>
            The reason why we must focus on learning the Ganesha Ashtothram
            Shatanamavali is the benefits that come from its chanting. Here’s
            why one should chant Ganpati 108 Namavali.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Get Lord Ganesha Blessings: </b>Ganesh is the lord of wisdom,
              intelligence and learning. By asking his favours through the
              chanting of his 108 names, you open yourself to receive his
              blessings of a sharp mind, excellent memory power and enhanced
              concentration skills.
            </ListItem>
            <ListItem>
              <b>Get Prosperity and Success:</b>Whether you're an entrepreneur,
              student, or professional, the Ganpati 108 Namavali has the divine
              power to bring you success, wealth, and prosperity. Chanting 'Shri
              Ganapati Ashtottara Shata Namavali' with devotion is said to
              attract abundance into your life.
            </ListItem>
            <ListItem>
              <b>Freedom From Obstacles and Challenges: </b>Chanting 108 Ganpati
              names is believed to remove all obstacles from your path - be it
              work, relationships or spiritual goals. As the lord of beginnings
              and remover of obstacles (Vighnaharta), reciting his names brings
              positivity.
            </ListItem>
            <ListItem>
              <b>Removes Fears and Phobias:</b>Many of the God Ganesh names are
              referred to as the fearless one who removes all fears and phobias.
              Regularly chanting them is believed to eliminate your deepest
              fears, anxieties and insecurities, replacing them with courage and
              self-confidence.
            </ListItem>
          </UnorderedList>

          <h3>The Ideal Way To Chant Lord Ganesh 108 Names</h3>
          <p>
            Next, the most important thing to remember is to adapt the best way
            to chant the Ganapati 108 names. This allows an individual to
            properly gain the blessings of Lord Ganesha. Below is a brief
            understanding of it.
          </p>
          <h3>Ideal Direction To Chant Ganesh Namavali</h3>
          <p>
            According to Vedic traditions, facing east or north while chanting
            Ganpati names is ideal. East represents the beginning of God’s
            blessings, while North is the direction associated with Lord Kuber -
            the deity of wealth and prosperity whom Ganesha guards.
          </p>
          <p>
            So, find a spot where you can comfortably face these sacred
            directions. But don't worry if that's not possible - having a
            devoted mindset is most important.
          </p>
          <h3>Ideal Time To Chant Ganesh Namavali</h3>
          <p>
            The best time to chant the Ganesha Ashtottara Shatanamavali is
            during the Brahma Muhurta period - about 1.5 hours before sunrise.
            This auspicious window is believed to be when the mind is most still
            and receptive.
          </p>
          <p>
            If that's not possible for you, any time works as long as you can
            find a quiet space free from distractions. Early morning or late
            evening tends to be calmer.
          </p>
          <h3>Ideal Beads To Chant Ganesh Namavali</h3>
          <p>
            While not mandatory, using Rudraksha beads can enhance your chanting
            practice. These seeds from the Rudraksha tree are sacred in Hinduism
            and thought to remove negativity and fears. Know Ganesha Ashtottara
            in English today and get started.
          </p>
          <p>
            Traditionally, Ganesha's 108 names are chanted on a mala with 108
            beads plus one for the Guru bead. Let each bead gently glide through
            your fingers as you chant with full focus.
          </p>
          <h3>Ideal Setting / Atmosphere To Chant Ganesh Namavali</h3>
          <p>
            When chanting the 108 sacred names of Lord Ganesha, it's important
            to create a peaceful and serene atmosphere. Dim the lights, burn
            some incense or light a diya - anything that helps you feel grounded
            and present.
          </p>
          <p>
            Chanting Ganesha Ashtothram must be done with great devotion. Sit in
            a comfortable cross-legged position on the floor or a cushion. Keep
            your back straight but relaxed.
          </p>
        </div>
      </Container>
      <FAQLayout faqData={Ganesh108FAQ} />
    </Layout>
  );
};
export default Ganesh108;

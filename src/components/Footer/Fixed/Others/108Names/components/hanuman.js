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
const Hanuman108FAQ = [
  {
    id: 1,
    title: "What is Hanuman Astottara Sata Namavali?",
    content:
      "The 108 names of Lord Hanuman are collectively called the Hanuman Ashtottara Sata Namavali. People believe that chanting these names offers strength, courage, and keeps away evil eyes.",
  },
  {
    id: 2,
    title: "What do the 108 names of hanuman tell?",
    content:
      "The 108 names of Hanuman Ji are inspired by the powers, qualities and strength he has displayed throughout his life. This helps us understand the divine nature of Lord Hanuman, and learning about them is a way to please all his forms.",
  },
  {
    id: 3,
    title: "How does Hanuman Ash Tottara Shatanamavali help?",
    content:
      "Chanting Hanuman Ash Tottara Shatanamavali helps avoid negative emotions, thoughts and evil spirits. It also helps us gain the courage to face every obstacle with confidence and gives us mental clarity.",
  },
  {
    id: 4,
    title: "How to chant Hanuman Ashtothram?",
    content:
      "Create an ideal setup to chant Hanuman Ashtothram, the 108 Hanuman names. Light incense sticks, and place the diya in front of the Hanuman idol and Hanuman yantra in the South direction. Next, get well-seated and start moving a Tulsi or Rudraksha mala as you pronounce each name.",
  },
  {
    id: 5,
    title: "Does chanting Hanuman ji 108 names remove Shani Doshna?",
    content:
      "Yes, chanting Hanuman ji 108 names removes Shani Dosha. Some people have noticed comfort and a decrease in difficulties faced during this period. It is also said that it speeds up the process of cleaning your karma.",
  },
  {
    id: 6,
    title: "On what occasions can we chant Hanuman 108 names?",
    content:
      "One should chant Hanuman 108 names every Tuesday and Saturday. At the same time, following this practice during Mangalvar Vrat and Hanuman Jayanti is believed to attract the powerful blessings of Hanuman Ji.",
  },
];

const Hanuman108 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="108 Name of Lord Hanuman - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">108 Names of Lord Hanuman</h1>
          <h2>Experience The Divine Power of Hanuman</h2>
          <h3>Learn Hanuman Ashtottara Shatanamavali</h3>
          <p>
            Hanuman Ashtottara Shatanamavali is a collection of 108 sacred names
            of Hanuman Ji. Chanting these names is a powerful practice to
            attract Lord Hanuman’s blessings and avoid negative energies. Lord
            Hanuman, also known as Anjaneya, is a beloved Hindu god, and hence,
            many devotees look forward to singing his praise.
          </p>
          <h3>108 Hanuman Names With Meaning</h3>
          <p>
            The 108 names of Lord Hanuman signify the qualities and powers he
            displayed throughout his life. Up next, we bring you the full list
            of Hanuman names in English with meanings and associated mantras.
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
                  <td>Anjaneya</td>
                  <td>Om Anjaneyaya Namah</td>
                  <td>Son of Anjana</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mahavira</td>
                  <td>Om Mahaviraya Namah</td>
                  <td>Most Valiant</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hanumanta</td>
                  <td>Om Hanumantaya Namah</td>
                  <td>One with Puffy Cheeks</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Marutatmaja</td>
                  <td>Om Marutatmajaya Namah</td>
                  <td>Son of Wind God</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Tatvagyanaprada</td>
                  <td>Om Tatvagyanapradaya Namah</td>
                  <td>Granter of Wisdom</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Sitadevi Mudrapradayaka</td>
                  <td>Om Sitadevi Mudrapradayakaya Namah</td>
                  <td>Deliverer of Ring to Sita</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Ashokavana Kachchhetre</td>
                  <td>Om Ashokavana Kachchhetre Namah</td>
                  <td>One Who Entered Ashoka Garden</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Sarvamaya Vibhushana</td>
                  <td>Om Sarvamaya Vibhushanaya Namah</td>
                  <td>Ornamented with all Virtues</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Sarvabandha Vimoktre</td>
                  <td>Om Sarvabandha Vimoktre Namah</td>
                  <td>Deliverer from All Bonds</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Rakshovidhvamsakaraka</td>
                  <td>Om Rakshovidhvamsakarakaya Namah</td>
                  <td>Destroyer of Demons</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Paravidya Parangataya</td>
                  <td>Om Paravidya Parangataya Namah</td>
                  <td>Expert in All Knowledge</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Kalanemi Pramathana</td>
                  <td>Om Kalanemi Pramathanaya Namah</td>
                  <td>Slayer of Kalanemi</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Harimarkata Markataya</td>
                  <td>Om Harimarkata Markataya Namah</td>
                  <td>Leader of the Monkey Army</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Dantaya</td>
                  <td>Om Dantaya Namah</td>
                  <td>Calm and Composed</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Shantaya</td>
                  <td>Om Shantaya Namah</td>
                  <td>Peaceful</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Prasannatmane</td>
                  <td>Om Prasannatmane Namah</td>
                  <td>Cheerful</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Shatakantamadapahaya</td>
                  <td>Om Shatakantamadapahaya Namah</td>
                  <td>Destroyer of Shatkantha’s Pride</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Yogine</td>
                  <td>Om Yogine Namah</td>
                  <td>Supreme Yogi</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Ramakathalolaya</td>
                  <td>Om Ramakathalolaya Namah</td>
                  <td>Interested in Ram’s Story</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Sitadevi Mudrapradayakaya</td>
                  <td>Om Sitadevi Mudrapradayakaya Namah</td>
                  <td>Giver of Sita's Ring</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Pingaksha</td>
                  <td>Om Pingakshaya Namah</td>
                  <td>Tawny-Eyed</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Vibhishana Pratishtataya</td>
                  <td>Om Vibhishana Pratishtataya Namah</td>
                  <td>Establishing Vibhishana as King</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Sarvamangala Dharaaya</td>
                  <td>Om Sarvamangala Dharaaya Namah</td>
                  <td>Bearer of All Auspiciousness</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Sarvavidya Sampattaye</td>
                  <td>Om Sarvavidya Sampattaye Namah</td>
                  <td>Possessor of All Knowledge</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Kapi Sainyaka Sarvabhauma</td>
                  <td>Om Kapi Sainyaka Sarvabhaumaya Namah</td>
                  <td>Emperor of Monkey Warriors</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Kumara Brahmacharine</td>
                  <td>Om Kumara Brahmacharine Namah</td>
                  <td>Celibate Youth</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Ratnakundala Manditaya</td>
                  <td>Om Ratnakundala Manditaya Namah</td>
                  <td>Adorned with Gem Earrings</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Chanchalataya</td>
                  <td>Om Chanchalataya Namah</td>
                  <td>Quick</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Prajnaya</td>
                  <td>Om Prajnaya Namah</td>
                  <td>Intelligent</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Ramabhakta</td>
                  <td>Om Ramabhaktaya Namah</td>
                  <td>Devotee of Lord Rama</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Pragnya</td>
                  <td>Om Pragnyaya Namah</td>
                  <td>Full of Wisdom</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Ramadhutaya</td>
                  <td>Om Ramadhutaya Namah</td>
                  <td>Ambassador of Rama</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Mahabalaya</td>
                  <td>Om Mahabalaya Namah</td>
                  <td>One with Great Strength</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Pragnya Bhakta</td>
                  <td>Om Pragnya Bhaktaya Namah</td>
                  <td>Intelligent Devotee</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Sarvasiddhiprada</td>
                  <td>Om Sarvasiddhipradaya Namah</td>
                  <td>Bestower of All Powers</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Kapisvaraya</td>
                  <td>Om Kapisvaraya Namah</td>
                  <td>Lord of Monkeys</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Lankini Bhansanaya</td>
                  <td>Om Lankini Bhansanaya Namah</td>
                  <td>Slayer of Lankini</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Bhooti Bhushana</td>
                  <td>Om Bhooti Bhushanaya Namah</td>
                  <td>Ornamented with Prosperity</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Shuddhatmane</td>
                  <td>Om Shuddhatmane Namah</td>
                  <td>Pure-Souled</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Bahu Shastra Karamukaya</td>
                  <td>Om Bahu Shastra Karamukaya Namah</td>
                  <td>Strong-Armed</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Chiranjeevine</td>
                  <td>Om Chiranjeevine Namah</td>
                  <td>Immortal</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Ramabhakta Shresthaya</td>
                  <td>Om Ramabhakta Shresthaya Namah</td>
                  <td>Foremost Devotee of Rama</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Daityakarya Vighatakaya</td>
                  <td>Om Daityakarya Vighatakaya Namah</td>
                  <td>Destroyer of Demons</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Akshahantre</td>
                  <td>Om Akshahantre Namah</td>
                  <td>Slayer of Aksha</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Kanchanabhaya</td>
                  <td>Om Kanchanabhaya Namah</td>
                  <td>Golden-Hued</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Kamaroopa</td>
                  <td>Om Kamaroopa Namah</td>
                  <td>Shape-Shifter</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Sarvagraha Haraya</td>
                  <td>Om Sarvagraha Haraya Namah</td>
                  <td>Remover of All Obstacles</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Balasiddhi</td>
                  <td>Om Balasiddhi Namah</td>
                  <td>Master of Strength</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Sarvavighna Prashamanaya</td>
                  <td>Om Sarvavighna Prashamanaya Namah</td>
                  <td>Destroyer of All Troubles</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Vidhyadhara Swaroopaya</td>
                  <td>Om Vidhyadhara Swaroopaya Namah</td>
                  <td>Possessor of Knowledge</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Harimarkata</td>
                  <td>Om Harimarkataya Namah</td>
                  <td>Lord of Monkeys</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Sita Shoka Nivarakaya</td>
                  <td>Om Sita Shoka Nivarakaya Namah</td>
                  <td>Remover of Sita’s Grief</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Ashoka Vana Kachchhetre</td>
                  <td>Om Ashoka Vana Kachchhetre Namah</td>
                  <td>One who Entered Ashoka Vana</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Akshahantre</td>
                  <td>Om Akshahantre Namah</td>
                  <td>Slayer of Aksha</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Dasagriva Kulantakaya</td>
                  <td>Om Dasagriva Kulantakaya Namah</td>
                  <td>Slayer of Ravana’s Clan</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Lankapuravidahakaya</td>
                  <td>Om Lankapuravidahakaya Namah</td>
                  <td>Incinerator of Lanka</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Sugriva Sachiva</td>
                  <td>Om Sugriva Sachivaya Namah</td>
                  <td>Minister of Sugriva</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Sita Shoka Vinashakaya</td>
                  <td>Om Sita Shoka Vinashakaya Namah</td>
                  <td>Destroyer of Sita’s Sorrow</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Sarva Vighna Prashamanaya</td>
                  <td>Om Sarva Vighna Prashamanaya Namah</td>
                  <td>Remover of All Obstacles</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Ramayukta Pradarshakaya</td>
                  <td>Om Ramayukta Pradarshakaya Namah</td>
                  <td>Revealer of Rama’s Intentions</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Ramasugriva Sandhatre</td>
                  <td>Om Ramasugriva Sandhatre Namah</td>
                  <td>Mediator between Rama and Sugriva</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Ramadhyana Tatparaya</td>
                  <td>Om Ramadhyana Tatparaya Namah</td>
                  <td>Absorbed in Rama’s Meditation</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Vajrakaya</td>
                  <td>Om Vajrakayaya Namah</td>
                  <td>Sturdy like a Diamond</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Vajrakataya</td>
                  <td>Om Vajrakataya Namah</td>
                  <td>Hard as a Diamond</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Kanchanabha</td>
                  <td>Om Kanchanabhaya Namah</td>
                  <td>Golden-Hued</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Ratna Kankana Keyuraya</td>
                  <td>Om Ratna Kankana Keyuraya Namah</td>
                  <td>Adorned with Gem Bracelets</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Kanchanabha</td>
                  <td>Om Kanchanabhaya Namah</td>
                  <td>Golden-Hued</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Pavanputra</td>
                  <td>Om Pavanputraya Namah</td>
                  <td>Son of Wind God</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Ramadhyana Tatparaya</td>
                  <td>Om Ramadhyana Tatparaya Namah</td>
                  <td>Absorbed in Rama’s Meditation</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Sugriva Sachiva</td>
                  <td>Om Sugriva Sachivaya Namah</td>
                  <td>Minister of Sugriva</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Kanchanabhaya</td>
                  <td>Om Kanchanabhaya Namah</td>
                  <td>Golden-Hued</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Kalanemi Pramathana</td>
                  <td>Om Kalanemi Pramathanaya Namah</td>
                  <td>Slayer of Kalanemi</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Ramabhakta</td>
                  <td>Om Ramabhaktaya Namah</td>
                  <td>Devotee of Rama</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Ramabhakta Shresthaya</td>
                  <td>Om Ramabhakta Shresthaya Namah</td>
                  <td>Foremost Devotee of Rama</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Chiranjeevine</td>
                  <td>Om Chiranjeevine Namah</td>
                  <td>Immortal</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Bahu Shastra Karamukaya</td>
                  <td>Om Bahu Shastra Karamukaya Namah</td>
                  <td>Strong-Armed</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Hanumanta</td>
                  <td>Om Hanumantaya Namah</td>
                  <td>One with Puffy Cheeks</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Pingaksha</td>
                  <td>Om Pingakshaya Namah</td>
                  <td>Tawny-Eyed</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Kanchanabhaya</td>
                  <td>Om Kanchanabhaya Namah</td>
                  <td>Golden-Hued</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Kanchanabha</td>
                  <td>Om Kanchanabhaya Namah</td>
                  <td>Golden-Hued</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Ratnakundala Manditaya</td>
                  <td>Om Ratnakundala Manditaya Namah</td>
                  <td>Adorned with Gem Earrings</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Bahu Shastra Karamukaya</td>
                  <td>Om Bahu Shastra Karamukaya Namah</td>
                  <td>Strong-Armed</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Kanchanabhaya</td>
                  <td>Om Kanchanabhaya Namah</td>
                  <td>Golden-Hued</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Harimarkata</td>
                  <td>Om Harimarkataya Namah</td>
                  <td>Leader of the Monkey Army</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Chiranjeevine</td>
                  <td>Om Chiranjeevine Namah</td>
                  <td>Immortal</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Sugriva Sachiva</td>
                  <td>Om Sugriva Sachivaya Namah</td>
                  <td>Minister of Sugriva</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Kanchanabhaya</td>
                  <td>Om Kanchanabhaya Namah</td>
                  <td>Golden-Hued</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Ramadhyana Tatparaya</td>
                  <td>Om Ramadhyana Tatparaya Namah</td>
                  <td>Absorbed in Rama’s Meditation</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Kanchanabha</td>
                  <td>Om Kanchanabhaya Namah</td>
                  <td>Golden-Hued</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Ramabhakta Shresthaya</td>
                  <td>Om Ramabhakta Shresthaya Namah</td>
                  <td>Foremost Devotee of Rama</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Sugriva Sachiva</td>
                  <td>Om Sugriva Sachivaya Namah</td>
                  <td>Minister of Sugriva</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Ramayukta Pradarshakaya</td>
                  <td>Om Ramayukta Pradarshakaya Namah</td>
                  <td>Revealer of Rama’s Intentions</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Kanchanabhaya</td>
                  <td>Om Kanchanabhaya Namah</td>
                  <td>Golden-Hued</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Sarva Vighna Prashamanaya</td>
                  <td>Om Sarva Vighna Prashamanaya Namah</td>
                  <td>Remover of All Obstacles</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Ramadhyana Tatparaya</td>
                  <td>Om Ramadhyana Tatparaya Namah</td>
                  <td>Absorbed in Rama’s Meditation</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Sugriva Sachiva</td>
                  <td>Om Sugriva Sachivaya Namah</td>
                  <td>Minister of Sugriva</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Ramabhakta Shresthaya</td>
                  <td>Om Ramabhakta Shresthaya Namah</td>
                  <td>Foremost Devotee of Rama</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Akshahantre</td>
                  <td>Om Akshahantre Namah</td>
                  <td>Slayer of Aksha</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Ramabhakta</td>
                  <td>Om Ramabhaktaya Namah</td>
                  <td>Devotee of Rama</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Ramabhakta Shresthaya</td>
                  <td>Om Ramabhakta Shresthaya Namah</td>
                  <td>Foremost Devotee of Rama</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Akshahantre</td>
                  <td>Om Akshahantre Namah</td>
                  <td>Slayer of Aksha</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Ramabhakta</td>
                  <td>Om Ramabhaktaya Namah</td>
                  <td>Devotee of Rama</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Ramabhakta Shresthaya</td>
                  <td>Om Ramabhakta Shresthaya Namah</td>
                  <td>Foremost Devotee of Rama</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Akshahantre</td>
                  <td>Om Akshahantre Namah</td>
                  <td>Slayer of Aksha</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Ramabhakta</td>
                  <td>Om Ramabhaktaya Namah</td>
                  <td>Devotee of Rama</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Ramabhakta Shresthaya</td>
                  <td>Om Ramabhakta Shresthaya Namah</td>
                  <td>Foremost Devotee of Rama</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Akshahantre</td>
                  <td>Om Akshahantre Namah</td>
                  <td>Slayer of Aksha</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Ramabhakta</td>
                  <td>Om Ramabhaktaya Namah</td>
                  <td>Devotee of Rama</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Choosing A Lord Hanuman Name For Newborn Baby</h3>
          <p>
            Selecting a Lord Hanuman name for a newborn baby is an ancient
            practice, and devotees find it a great way to honour the god. Below
            are some tips step-wise that one can consider while naming their
            newborn child.
          </p>
          <ol>
            <li>
              First, familiarise yourself with all 108 names of Lord Hanuman.
              For your convenience, we have provided the Hanuman Ashtothram in
              English and Hindi.
            </li>
            <li>
              Next, select a few names from the list of 108 names based on their
              meanings. That way, you can decide which name you relate to the
              most.
            </li>
            <li>
              Also, check if the names you have selected for your newborn go
              well with your family tradition.
            </li>
            <li>
              Take an example. If you wish your kid to be fearless, then the
              name Dheera could be fitting. Similarly, consider Yogi, which
              means disciplined.
            </li>
            <li>
              Share your top picks from the Hanuman ji 108 names list with your
              elders.
            </li>
            <li>
              Also, consult an astrologer to check the auspiciousness of the
              name based on the birth chart of your kid.
            </li>
          </ol>
          <h3>Benefits Of Chanting Lord Hanuman 108 Names</h3>
          <p>
            Practising the chant of Hanuman 108 names is believed to be a great
            way to ask god’s favours. Hanuman Ji, a true devotee of Lord Rama,
            appreciates when followers pay respect to him. Here are the benefits
            of chanting Hanuman 108 names.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Emotional Strength and Courage:</b>Chanting Hanuman names makes
              a person emotionally strong. Those who regularly practise it have
              seen an enhanced fearlessness and confidence to manage even the
              toughest situations smoothly.
            </ListItem>
            <ListItem>
              <b>Personal growth: </b>Regular chanting of Hanuman Ashtottara
              offers personal growth. Through this practice, devotees have
              noticed transformation within themselves in terms of handling
              their personal and professional lives, becoming better people.
            </ListItem>
            <ListItem>
              <b>Eliminates Shani Dosha/ Sade Sati: </b>Hanuman Ji is Lord
              Shani’s beloved friend. Therefore, it is said that chanting
              Hanuman names can help avoid the ill effects of Shani Dosha and
              Sade Sati. Plus, negative energies and enemies will stay away.
            </ListItem>
            <ListItem>
              <b>Spiritual Progress: </b>Chanting 108 names of lord hanuman,
              especially on a Tuesday and a Saturday, offers spiritual growth.
              Start practising it, and you yourself will see an improved
              self-awareness within yourself, feeling fully devoted to the lord.
            </ListItem>
          </UnorderedList>
          <h3>The Ideal Way To Chant Hanuman Ji 108 Names</h3>
          <p>
            We have a list of Hanuman Ashtothram in English as well as Hindi.
            But what’s next? Next, we need to keep in mind certain things to
            please Lord Hanuman properly and gain the maximum benefit from this
            experience.
          </p>
          <h3>Ideal Direction To Chant Hanuman Namavali</h3>
          <p>
            Chanting the sacred Sri Anjaneya Ashtottara Shatanamavali in the
            South direction is ideal. It is said that Lord Hanuman’s power is
            the strongest in the South. Therefore, one can focus better and gain
            maximum blessings from him if this is kept in mind.
          </p>
          <p>
            Do not worry if it is not possible for some reason. The most
            important thing is to understand the meaning of every name that you
            chant, no matter what direction you choose.
          </p>
          <h3>Ideal Time To Chant Hanuman Namavali</h3>
          <p>
            Early morning, i.e. the Brahma Muhurat, is considered an auspicious
            time to chant the names of Hanuman ji. This period occurs
            approximately 1.5 hours before sunrise and is ideal for doing the
            chant with focus and offers calming effects.
          </p>
          <p>
            But what if you miss it? It is completely fine. However, you must
            make sure that you chant Hanuman Namavali with full devotion,
            especially on Tuesdays and Saturdays.
          </p>
          <h3>Ideal Beads To Chant Hanuman Namavali</h3>
          <p>
            Tulsi mala and Kalagni Rudra beads are ideal for chanting Hanuman Ji
            Ke 108 Naam. Tulsi beads are believed to bring focus and positive
            energy, while the Kalagni bead is a type of Rudraksha that helps
            attract Lord Hanuman’s blessings.
          </p>
          <p>
            Pronounce each Hanuman name while moving your fingers through each
            bead one after the other. It helps you keep the count of names. Add
            an extra Guru bead to the mala for auspiciousness.
          </p>
          <h3>Ideal Setting/Atmosphere To Chant Hanuman Namavali</h3>
          <p>
            Create an ideal atmosphere for attracting positive vibrations during
            the chant of Lord Hanuman names. Light incense sticks, diya and
            camphor for filling up the space with a divine aroma. Next, place
            diya in front of Hanuman Ji’s idol and Hanuman Yantra.
          </p>
          <p>
            Make your experience more peaceful by setting the mood for a
            powerful chant of Hanuman Ashtottram this way. It allows you to
            align your mind and body for a proper impact.
          </p>
        </div>
      </Container>
      <FAQLayout faqData={Hanuman108FAQ} />
    </Layout>
  );
};

export default Hanuman108;

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
const Ram108FAQ = [
  {
    id: 1,
    title: "What is Rama Ashtottara Shatanamavali?",
    content:
      "Rama Ashtottrara Shatanamavali is a collection of 108 names of Lord Rama. Each name is made more auspicious by giving it a mantra form. This pleases Lord Ram and showers his blessings upon us.",
  },
  {
    id: 2,
    title: "What is the full name of Shree Ram in his namavali?",
    content:
      "The Lord Shree Ram full name is Ram Chandra, meaning a beautiful moon. It is the most powerful Lord Rama name. You can easily find it in his 108 names collection (namavali). He is given this name because his beauty is considered worth the brightest of thousands of moons.",
  },
  {
    id: 3,
    title: "Does the 108 Ram Name list conatain loard Ram surname?",
    content:
      "You can find several names of Lord Rama in ancient texts, specifically in the sacred collection of his 108 names. However, no name has a surname, as in Hinduism, keeping gods’ surnames has not been a tradition or practice.",
  },
  {
    id: 4,
    title: "How to chant Ram names?",
    content:
      "Find a calm place in the East. Also, place Lord Ram’s idol or yantra in this direction. Now, sit comfortably with a Tulsi mala and chant each Ram name while gliding one bead at a team.",
  },
  {
    id: 5,
    title: "Which time is suitable for chanting Ram 108 names?",
    content:
      "Brahma Muhurta is a suitable time for chanting Ram 108 names. It happens between 3:30 am and 5:30 am. Following this, especially on a Tuesday, pleases Lord Rama as this day belongs to his beloved devotee and friend, Hanuman Ji.",
  },
  {
    id: 6,
    title: "How to choose names of Rama for baby boy?",
    content:
      "To choose a name from 108 names of Lord Rama for baby boy, one needs to understand the meaning behind each and every Ram name. Next, pick up names suitable for the baby boy, such as Raghava, Ramachandra, etc. Finally, share it with elders and also consult an astrologer.",
  },
];

const Ram108 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="108 Name of Lord Rama - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">108 Names Of Lord Rama</h1>
          <h2>A Sacred Chant To Attract Success</h2>
          <h3>Learn Rama Ashtottara Shatanamavali</h3>
          <p>
            Do you know the most powerful way to please Shri Rama? It is through
            Shri Rama Ashtottara Shatanamavali - the list of 108 names of Lord
            Rama. Chanting these names is quite popular among devotees and is a
            powerful form of asking Ram Ji’s favours. Devotees believe that it
            brings success, wealth, prosperity, and victory over challenges.
          </p>
          <h3>108 Names Of Lord Shri Ram With Meaning</h3>
          <p>
            The destroyer of evil forces, Shri Ramchandra Ji, is believed to
            give instant rewards when devotees pray to him with all his holy
            names. Here, we provide you with the complete list of 108 names of
            Lord Rama with meaning and associated mantras. Learn them today and
            get rid of all your problems.
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
                  <td>Ramachandra</td>
                  <td>Om Ramachandraya Namah</td>
                  <td>Moon-like gentle Rama</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Raghavendra</td>
                  <td>Om Raghavendraya Namah</td>
                  <td>Lord of the Raghu clan</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sitaapati</td>
                  <td>Om Sitaapataye Namah</td>
                  <td>Husband of Sita</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Raghunatha</td>
                  <td>Om Raghunathaya Namah</td>
                  <td>Lord of the Raghu dynasty</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Raghukula Tilaka</td>
                  <td>Om Raghukula Tilakaya Namah</td>
                  <td>Ornament of the Raghu clan</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Raghava</td>
                  <td>Om Raghavaya Namah</td>
                  <td>Descendant of the Raghu dynasty</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Ramaswamin</td>
                  <td>Om Ramaswaminaya Namah</td>
                  <td>Lord of Rama</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Sita Nayaka</td>
                  <td>Om Sita Nayakaya Namah</td>
                  <td>Leader of Sita</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Sita Raman</td>
                  <td>Om Sita Ramanaya Namah</td>
                  <td>Sita’s beloved Rama</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Dasarathi</td>
                  <td>Om Dasarathaye Namah</td>
                  <td>Son of Dasaratha</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Kosalesa</td>
                  <td>Om Kosalesaya Namah</td>
                  <td>Lord of Kosala</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Kosalendra</td>
                  <td>Om Kosalendraya Namah</td>
                  <td>King of Kosala</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Janaki Vallabha</td>
                  <td>Om Janaki Vallabhaya Namah</td>
                  <td>Beloved of Janaki</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Janaki Prana Nayaka</td>
                  <td>Om Janaki Prana Nayakaya Namah</td>
                  <td>Lord of Janaki’s life</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Sugriva Priya Mitra</td>
                  <td>Om Sugriva Priya Mitraya Namah</td>
                  <td>Dear friend of Sugriva</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Hanumat Pujita</td>
                  <td>Om Hanumat Pujitaya Namah</td>
                  <td>Worshipped by Hanuman</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Setu Krit</td>
                  <td>Om Setu Krite Namah</td>
                  <td>Builder of the bridge</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Jitavarasura</td>
                  <td>Om Jitavarasuraya Namah</td>
                  <td>Conqueror of powerful demons</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Ravanaraye</td>
                  <td>Om Ravanarayaye Namah</td>
                  <td>Enemy of Ravana</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Ramabhadra</td>
                  <td>Om Ramabhadraya Namah</td>
                  <td>Auspicious Rama</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Dhanvine</td>
                  <td>Om Dhanvine Namah</td>
                  <td>Armed with a bow</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Sarvaya</td>
                  <td>Om Sarvaya Namah</td>
                  <td>The Supreme</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Vishvamitrapriya</td>
                  <td>Om Vishvamitrapriyaya Namah</td>
                  <td>Beloved of Vishvamitra</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Jayanta Rakshit</td>
                  <td>Om Jayanta Rakshitaya Namah</td>
                  <td>Protector of Jayanta</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Tatakaantaka</td>
                  <td>Om Tatakaantakaya Namah</td>
                  <td>Slayer of Tataka</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Vedantasaraya</td>
                  <td>Om Vedantasaraya Namah</td>
                  <td>Essence of Vedanta</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Vedatmane</td>
                  <td>Om Vedatmane Namah</td>
                  <td>Lord of the Vedas</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Vishvakarmane</td>
                  <td>Om Vishvakarmane Namah</td>
                  <td>Creator of the universe</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Sarvadevastuta</td>
                  <td>Om Sarvadevastutaya Namah</td>
                  <td>Worshipped by all gods</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Vrishaketu Pramodaka</td>
                  <td>Om Vrishaketu Pramodakaya Namah</td>
                  <td>Lord who delights Vrishaketu</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Sarvakalyani</td>
                  <td>Om Sarvakalyani Namah</td>
                  <td>Bestower of all good fortune</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Shubhracharaya</td>
                  <td>Om Shubhracharaya Namah</td>
                  <td>Of pure conduct</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Pushkalayudha</td>
                  <td>Om Pushkalayudhaya Namah</td>
                  <td>Armed with all weapons</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Maayaatmane</td>
                  <td>Om Maayaatmane Namah</td>
                  <td>Lord of illusion</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Mahadeva</td>
                  <td>Om Mahadevaya Namah</td>
                  <td>The great god</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Mahabhadra</td>
                  <td>Om Mahabhadraya Namah</td>
                  <td>Extremely auspicious</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Mahatejas</td>
                  <td>Om Mahatejasaya Namah</td>
                  <td>Most radiant</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Sarvalokarakshak</td>
                  <td>Om Sarvalokarakshakaya Namah</td>
                  <td>Protector of all worlds</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Trilokarakshak</td>
                  <td>Om Trilokarakshakaya Namah</td>
                  <td>Protector of the three worlds</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Sitavallabh</td>
                  <td>Om Sitavallabhaya Namah</td>
                  <td>Beloved of Sita</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Mahabal</td>
                  <td>Om Mahabalaya Namah</td>
                  <td>Strong and powerful</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Anjaneya Prabhu</td>
                  <td>Om Anjaneya Prabhave Namah</td>
                  <td>Lord of Hanuman</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Ahlad</td>
                  <td>Om Ahladaya Namah</td>
                  <td>The one who brings joy</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Pritipataye</td>
                  <td>Om Pritipataye Namah</td>
                  <td>Lord of love</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Mahavira</td>
                  <td>Om Mahaviraya Namah</td>
                  <td>The great hero</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Paratpara</td>
                  <td>Om Paratparaya Namah</td>
                  <td>The highest of the high</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Dharmadhara</td>
                  <td>Om Dharmadharaya Namah</td>
                  <td>Upholder of righteousness</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Satya</td>
                  <td>Om Satyaya Namah</td>
                  <td>The truthful</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Satyavrata</td>
                  <td>Om Satyavrataya Namah</td>
                  <td>Vowed to truth</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Satya Vikrama</td>
                  <td>Om Satya Vikramaya Namah</td>
                  <td>True hero</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Raja</td>
                  <td>Om Rajaya Namah</td>
                  <td>The king</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Mahabahu</td>
                  <td>Om Mahabahave Namah</td>
                  <td>Mighty-armed</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Rajendra</td>
                  <td>Om Rajendraya Namah</td>
                  <td>King of kings</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Rajarshi</td>
                  <td>Om Rajarshaye Namah</td>
                  <td>Sage-king</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Kausaleya</td>
                  <td>Om Kausalyaya Namah</td>
                  <td>Son of Kausalya</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Sarvadeva Vandita</td>
                  <td>Om Sarvadeva Vanditaya Namah</td>
                  <td>Worshipped by all gods</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Yajvane</td>
                  <td>Om Yajvanaya Namah</td>
                  <td>Performer of sacrifices</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Yajna Palaka</td>
                  <td>Om Yajna Palakaya Namah</td>
                  <td>Protector of sacrifices</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Yajnabhrit</td>
                  <td>Om Yajnabhritaya Namah</td>
                  <td>Supporter of sacrifices</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Yajnakrit</td>
                  <td>Om Yajnakritaya Namah</td>
                  <td>Performer of sacrifices</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Yajnapati</td>
                  <td>Om Yajnapataye Namah</td>
                  <td>Lord of sacrifices</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Vajra Danda</td>
                  <td>Om Vajra Dandaya Namah</td>
                  <td>Holder of the thunderbolt and rod</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Yajneshvara</td>
                  <td>Om Yajneshvaraya Namah</td>
                  <td>Lord of Yajna</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Yashasvin</td>
                  <td>Om Yashasvine Namah</td>
                  <td>The famous</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Maha Vishnu</td>
                  <td>Om Maha Vishnave Namah</td>
                  <td>The great preserver</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Dhanvi</td>
                  <td>Om Dhanvine Namah</td>
                  <td>Armed with a bow</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Satya Sankalpa</td>
                  <td>Om Satya Sankalpaya Namah</td>
                  <td>True of resolve</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Sugriva Priya Mitra</td>
                  <td>Om Sugriva Priya Mitraya Namah</td>
                  <td>Dear friend of Sugriva</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Ananta Guna Sampanna</td>
                  <td>Om Ananta Guna Sampannaya Namah</td>
                  <td>Endowed with endless virtues</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Sarvabhootahita</td>
                  <td>Om Sarvabhootahitaya Namah</td>
                  <td>Benefactor of all beings</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Maanita</td>
                  <td>Om Maanitaya Namah</td>
                  <td>Honored by all</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Satya Parakrama</td>
                  <td>Om Satya Parakramaya Namah</td>
                  <td>Truly valorous</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Vidyut Prabha</td>
                  <td>Om Vidyut Prabhaya Namah</td>
                  <td>Having the brilliance of lightning</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Maha Kanta</td>
                  <td>Om Maha Kantaya Namah</td>
                  <td>Extremely handsome</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Kosalendra</td>
                  <td>Om Kosalendraya Namah</td>
                  <td>King of Kosala</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Trilokarakshaka</td>
                  <td>Om Trilokarakshakaya Namah</td>
                  <td>Protector of the three worlds</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Sarvaduhkhantaka</td>
                  <td>Om Sarvaduhkhantakaya Namah</td>
                  <td>Destroyer of all sorrows</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Vritta Vikrama</td>
                  <td>Om Vritta Vikramaya Namah</td>
                  <td>Virtuous and courageous</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Sarva Saubhagya Dayaka</td>
                  <td>Om Sarva Saubhagya Dayakaya Namah</td>
                  <td>Bestower of all good fortune</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Bhakta Vatsala</td>
                  <td>Om Bhakta Vatsalaya Namah</td>
                  <td>Affectionate towards devotees</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Sarva Jnana Pradayaka</td>
                  <td>Om Sarva Jnana Pradayakaya Namah</td>
                  <td>Granter of all knowledge</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Sarva Tirtha May</td>
                  <td>Om Sarva Tirtha Mayaya Namah</td>
                  <td>Embodiment of all sacred places</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Sarva Darshana Sampanna</td>
                  <td>Om Sarva Darshana Sampannaya Namah</td>
                  <td>Endowed with all visions</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Sarvavede Stuta</td>
                  <td>Om Sarvavede Stutaya Namah</td>
                  <td>Praised in all the Vedas</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Bhakta Mitra</td>
                  <td>Om Bhakta Mitraya Namah</td>
                  <td>Friend of devotees</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Mahateja</td>
                  <td>Om Mahatejase Namah</td>
                  <td>Most radiant</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Rajarshi</td>
                  <td>Om Rajarshaye Namah</td>
                  <td>Sage-king</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Rama</td>
                  <td>Om Ramaya Namah</td>
                  <td>The charming</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Dasaratha Nandana</td>
                  <td>Om Dasaratha Nandanaya Namah</td>
                  <td>Son of Dasaratha</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Trilokya Mangala</td>
                  <td>Om Trilokya Mangalaya Namah</td>
                  <td>Auspicious for the three worlds</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Kritaanta</td>
                  <td>Om Kritaantaya Namah</td>
                  <td>The end of deeds</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Saketa Pati</td>
                  <td>Om Saketa Pataye Namah</td>
                  <td>Lord of Saketa (Ayodhya)</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Punyacharit</td>
                  <td>Om Punyacharitraya Namah</td>
                  <td>Of meritorious conduct</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Prabhu</td>
                  <td>Om Prabhave Namah</td>
                  <td>The master</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Satya Parayana</td>
                  <td>Om Satya Parayanaya Namah</td>
                  <td>Devoted to truth</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Dharmatma</td>
                  <td>Om Dharmatmane Namah</td>
                  <td>Righteous soul</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Vira</td>
                  <td>Om Viraya Namah</td>
                  <td>The brave</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Satya Vrata</td>
                  <td>Om Satya Vrataya Namah</td>
                  <td>Vowed to truth</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Mahabala</td>
                  <td>Om Mahabalaya Namah</td>
                  <td>Mighty</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Mrityunjaya</td>
                  <td>Om Mrityunjayaya Namah</td>
                  <td>Conqueror of death</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Sarvadevastuta</td>
                  <td>Om Sarvadevastutaya Namah</td>
                  <td>Worshipped by all gods</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Sarvalokarakshak</td>
                  <td>Om Sarvalokarakshakaya Namah</td>
                  <td>Protector of all worlds</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Sugrivapriya</td>
                  <td>Om Sugrivapriyaya Namah</td>
                  <td>Dear to Sugriva</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Satya Vikrama</td>
                  <td>Om Satya Vikramaya Namah</td>
                  <td>Truly valorous</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Sitapati</td>
                  <td>Om Sitapataye Namah</td>
                  <td>Lord of Sita</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Sarvadeva Vandita</td>
                  <td>Om Sarvadeva Vanditaya Namah</td>
                  <td>Worshipped by all gods</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Trilokya Rakshak</td>
                  <td>Om Trilokya Rakshakaya Namah</td>
                  <td>Protector of the three worlds</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Jaya</td>
                  <td>Om Jayaya Namah</td>
                  <td>The victorious</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Choosing A Lord Rama Name For Newborn Baby</h3>
          <p>
            Every devotee wishes to have a son like Lord Rama. But how to choose
            a Lord Rama name? Below are steps to select from the list of 108
            names of Lord Rama for baby boy or a newborn:
          </p>
          <ol>
            <li>
              First of all, learn all the 108 Lord Rama names and their
              meanings.
            </li>
            <li>
              Next, think of the qualities you wish to see in your baby. Is it
              Lord Ram’s dedication? Or Is it his kindness and honesty?
            </li>
            <li>
              Take an example. Suppose you are choosing the names of Rama for
              baby boy. You wish to see luck favour your child. You can go for
              “Shashwat”, meaning auspicious.
            </li>
            <li>
              Next, share your top picks with your elders. They can help see if
              the selected names match well with their family tradition, if any.
            </li>
            <li>
              Finally, you can consult an astrologer or a pandit, who can
              further analyse your baby’s birth chart and select the most
              suitable Ram name.
            </li>
          </ol>
          <h3>Benefits Of Chanting Lord Rama 108 Names</h3>
          <p>
            While Shree Ram full name, Shree Ramachandra, is the most powerful,
            chanting Ram other names along with it is said to provide many
            benefits. Let’s read what happens when we say Sri Ram 108 names with
            dedication.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Mental Peace:</b> Sri Ramachandra and Ram other names must be
              chanted to get mental peace, i.e., freedom from negative thoughts.
              Devotees who have regularly meditated over his sacred 108 names
              have noticed a calmer mind and a better focus.
            </ListItem>
            <ListItem>
              <b>Self-confidence and Willpower: </b>Chanting 108 Lord Rama names
              boosts confidence in the self and strengthens your will to make
              decisions. People who chant them have observed enhanced
              communication skills and fearlessness.
            </ListItem>
            <ListItem>
              <b>Prevents Diseases and illnesses: </b>Chanting of Sri Ramji 108
              names is also believed to keep away any kind of physical pain,
              illness and diseases. People who have chanted this sacred Sri Rama
              Ashtottara Shatanamavali have noticed better health.
            </ListItem>
            <ListItem>
              <b>Financial Stability: </b>Some people have also seen financial
              stability through regular chanting of 108 Ram God name. It is
              believed that this chant pleases Lord Ram greatly and offers
              freedom from long-due debts, loans or other money problems.
            </ListItem>
          </UnorderedList>
          <h3>The Ideal Way To Chant Lord Rama 108 Names</h3>
          <p>
            The 108 Ram god name list is a very sacred form of mantra. To gain
            maximum benefits, one must chant them with full dedication and
            focus. Keep the following things in mind to please Sri Ramchandra
            (Shree Ram full name).
          </p>
          <h3>Ideal Direction To Chant Ram Namavali</h3>
          <p>
            The ideal direction to chant Rama Namavali is the East. This
            direction is suitable to please Lord Rama. Devotees even believe
            that it brings good fortune and prosperity. Moreover, the Sun rises
            in the East, making the experience more auspicious.
          </p>
          <p>
            So, grab a yoga mat and find a comfortable eastern space. Take a
            deep breath and attract the positive vibrations of this side with
            each Ram god name.
          </p>
          <h3>Ideal Time To Chant Ram Namavali</h3>
          <p>
            The ideal time to chant the 108 Ram god name is the Brahma Muhurta.
            This duration starts 1.5 hours before sunrise, i.e. between 3.30
            a.m. and 5.30 a.m. In Hinduism, this time is considered most
            auspicious. Follow this strictly on a Tuesday.
          </p>
          <p>
            Moreover, to properly chant Ram names, you need a very quiet place.
            This duration is usually the calmest time of the day, as the world
            is often half asleep.
          </p>
          <h3>Ideal Beads To Chant Ram Namavali</h3>
          <p>
            The Tulsi bead is the best when worshipping Lord Ram through the
            chanting of his sacred names. The Japa mala made of Tulsi beads is
            believed to attract positive thoughts and pleases Shri Ram.
          </p>
          <p>
            Keep in mind that you need to soak the Tulsi mala in coconut water
            before exposing it to diya or incense sticks. This will prevent it
            from breaking and won’t disturb the process.
          </p>
          <h3>Ideal Setting/Atmosphere To Chant Ram Namavali</h3>
          <p>
            Find a comfortable place and sit in a relaxed position. Make sure
            there is no noise in the area so that you can chant each Lord Ram
            god name with more focus. Next, light an incense stick or diya in
            front of Lord Ram’s idol and start chanting.
          </p>
          <p>
            However, the most important thing is to put honest efforts into
            chanting Ram names. Make sure you understand the meaning of each
            word that you pronounce.
          </p>
        </div>
      </Container>
      <FAQLayout faqData={Ram108FAQ} />
    </Layout>
  );
};
export default Ram108;

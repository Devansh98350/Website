import React, { useEffect,useState } from "react";
import styled from "styled-components";
import Deity1000ButtonGrid from "./common1000grid";
import Breadcrumbs from "../../../../../Breadcrumb";
import Layout from "../../../../../Layout/Layout";
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
// const UnorderedList = styled.ul`
//   //   list-style-type: none;
// `;
// const ListItem = styled.li`
//   margin-bottom: 10px;
// `;


const faqs = [
  {
    question: "What is Shri Ram Sahasranam?",
    answer:
      "Rama Sahasranamavali is a sacred list of 1000 names of Lord Rama. It was given by the great sage Valmiki, who also wrote the Ramayana.",
  },
  {
    question: "Which are the benefits of Rama Sahasranama?",
    answer:
      "Rama Sahasranamavali is very powerful and offers Lord Rama’s great blessings when chanted with devotion and sincerity. It brings clarity of mind, calms the soul, keeps away evil eyes and also offers wealth.",
  },
  {
    question: "What happens if we chant Rama Saharanama daily?",
    answer:
      "Chanting Rama Sahasranamavali daily can transform you into a better version of yourself. Devotees who chant 1000 names of Lord Rama have noticed more kindness, better focus and enhanced personal and professional relationships.",
  },
  {
    question: "How to chant 1000 names of Lord Rama?",
    answer:
      "Chant 1000 Lord Rama other names during Brahma Muhurat, on a Ram Navami Puja Muhurat or before sleep. Sit in a relaxed position facing the deity’s idol or Ram Yantra, and start chanting the name one by one, adding “Om” and “Namah” to it.",
  },
  {
    question: "How to choose from 1000 names of Lord Rama for baby boy?",
    answer:
      "First of all, understand each Rama name meaning to decide what attributes or qualities you wish to see in your baby boy. Next, consult an astrologer who can finalise a name from 1000 names of Lord Rama for baby boy based on your kid’s kundli.",
  },
  {
    question: "How long does it takes to recite the entire Rama Saharsanamavali?",
    answer:
      "The time it takes to complete the chant of Rama Sahasranamavali depends on the pace of the devotee. However, it usually takes 30 minutes to an hour to finish the chant of 1000 names of Lord Rama.",
  },
];

const Ram1000 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout title="1000 Name of Lord Rama - AstroSwarg" description="" keywords="">
<Breadcrumbs/>
    <Container>
      <div className="body">
        <h1 className="heading">1000 Names Of Lord Rama</h1>
        <h2>Chant Rama names and gain blessings!</h2>
        <h3>Learn Shri Rama Sahasranamavali</h3>
        <p>
          Known as Rama Sahasranama, chanting the 1000 names of Shri Ram is believed to be very effective for human life. It offers peace, prosperity and improvement in your overall personality.
        </p>
        <h3>1000 Lord Rama Names</h3>
        <p>
          The 1000 names of Lord Rama are inspired by his qualities and various life incidents. Here is a complete list of Rama Sahasranama.
        </p>
        <Deity1000ButtonGrid/>

    {/* <table> */}
        <table
            border="1"
            style={{
              width: "100%",
              height: "auto",
            }}>
            <thead>
              <tr>
                <th>No.</th>
                <th>1000 Name of Rama</th>
                <th>Mantra</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Rajivalochana</td>
                <td>Om Rajivalochanaya Namah</td>
                <td>Lotus-Eyed Lord</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Shrimate</td>
                <td>Om Shrimate Namah</td>
                <td>Possessor of Wealth and Glory</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Shri Rama</td>
                <td>Om Shri Ramaya Namah</td>
                <td>Holy Lord Rama</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Raghupungava</td>
                <td>Om Raghupungavaya Namah</td>
                <td>Best of the Raghu Dynasty</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Ramabhadra</td>
                <td>Om Ramabhadraya Namah</td>
                <td>Auspicious and Noble Rama</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Sadachara</td>
                <td>Om Sadacharaya Namah</td>
                <td>Embodiment of Virtue</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Rajendra</td>
                <td>Om Rajendraya Namah</td>
                <td>King of Kings</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Janakipati</td>
                <td>Om Janakipataye Namah</td>
                <td>Consort of Sita (Janaki)</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Agraganya</td>
                <td>Om Agraganyaya Namah</td>
                <td>Foremost Leader</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Varenya</td>
                <td>Om Varenyaya Namah</td>
                <td>The Most Excellent</td>
            </tr>
            <tr>
                <td>11</td>
                <td>Varada</td>
                <td>Om Varadaya Namah</td>
                <td>Granter of Boons</td>
            </tr>
            <tr>
                <td>12</td>
                <td>Parameshwara</td>
                <td>Om Parameshwaraya Namah</td>
                <td>Supreme Lord</td>
            </tr>
            <tr>
                <td>13</td>
                <td>Janardana</td>
                <td>Om Janardanaya Namah</td>
                <td>Protector of All Beings</td>
            </tr>
            <tr>
                <td>14</td>
                <td>Jitamitra</td>
                <td>Om Jitamitraya Namah</td>
                <td>Conqueror of Enemies</td>
            </tr>
            <tr>
                <td>15</td>
                <td>Pararthaikaprayojana</td>
                <td>Om Pararthaikaprayojanaya Namah</td>
                <td>Dedicated to the Welfare of Others</td>
            </tr>
            <tr>
                <td>16</td>
                <td>Vishvamitra Priya</td>
                <td>Om Vishvamitra Priyaya Namah</td>
                <td>Beloved of Sage Vishvamitra</td>
            </tr>
            <tr>
                <td>17</td>
                <td>Danta</td>
                <td>Om Dantaya Namah</td>
                <td>Self-Controlled</td>
            </tr>
            <tr>
                <td>18</td>
                <td>Shatrujita</td>
                <td>Om Shatrujitaya Namah</td>
                <td>Conqueror of Enemies</td>
            </tr>
            <tr>
                <td>19</td>
                <td>Shatrutapana</td>
                <td>Om Shatrutapanaya Namah</td>
                <td>Scorcher of Foes</td>
            </tr>
            <tr>
                <td>20</td>
                <td>Sarvajna</td>
                <td>Om Sarvajnaya Namah</td>
                <td>Omniscient</td>
            </tr>
            <tr>
                <td>21</td>
                <td>Sarvadevadi</td>
                <td>Om Sarvadevadiya Namah</td>
                <td>Lord of All Gods</td>
            </tr>
            <tr>
                <td>22</td>
                <td>Sharanya</td>
                <td>Om Sharanyaya Namah</td>
                <td>Refuge for All</td>
            </tr>
            <tr>
                <td>23</td>
                <td>Valimardana</td>
                <td>Om Valimardanaya Namah</td>
                <td>Slayer of Vali</td>
            </tr>
            <tr>
                <td>24</td>
                <td>Jnanabhavya</td>
                <td>Om Jnanabhavyaya Namah</td>
                <td>Endowed with Knowledge</td>
            </tr>
            <tr>
                <td>25</td>
                <td>Aparicchedya</td>
                <td>Om Aparicchedyaya Namah</td>
                <td>Incomprehensible</td>
            </tr>
            <tr>
                <td>26</td>
                <td>Vagmin</td>
                <td>Om Vagminaya Namah</td>
                <td>Eloquent Speaker</td>
            </tr>
            <tr>
                <td>27</td>
                <td>Satyavrata</td>
                <td>Om Satyavrataya Namah</td>
                <td>Devoted to Truth</td>
            </tr>
            <tr>
                <td>28</td>
                <td>Shuchi</td>
                <td>Om Shuchaye Namah</td>
                <td>Pure</td>
            </tr>
            <tr>
                <td>29</td>
                <td>Jnanagamya</td>
                <td>Om Jnanagamyaya Namah</td>
                <td>Accessible through Knowledge</td>
            </tr>
            <tr>
                <td>30</td>
                <td>Dridhaprajna</td>
                <td>Om Dridhaprajnyaya Namah</td>
                <td>Resolute in Wisdom</td>
            </tr>
            <tr>
                <td>31</td>
                <td>Kharadhvamsin</td>
                <td>Om Kharadhvamsine Namah</td>
                <td>Destroyer of Khara</td>
            </tr>
            <tr>
                <td>32</td>
                <td>Pratapavat</td>
                <td>Om Pratapavate Namah</td>
                <td>Possessor of Glory</td>
            </tr>
            <tr>
                <td>33</td>
                <td>Dyutimat</td>
                <td>Om Dyutimate Namah</td>
                <td>Radiant and Effulgent</td>
            </tr>
            <tr>
                <td>34</td>
                <td>Atmavat</td>
                <td>Om Atmavate Namah</td>
                <td>Self-Controlled and Composed</td>
            </tr>
            <tr>
                <td>35</td>
                <td>Veera</td>
                <td>Om Veeraya Namah</td>
                <td>Courageous and Brave</td>
            </tr>
            <tr>
                <td>36</td>
                <td>Jitakrodha</td>
                <td>Om Jitakrodhaya Namah</td>
                <td>Conqueror of Anger</td>
            </tr>
            <tr>
                <td>37</td>
                <td>Arimardana</td>
                <td>Om Arimardanaya Namah</td>
                <td>Annihilator of Enemies</td>
            </tr>
            <tr>
                <td>38</td>
                <td>Vishvarupa</td>
                <td>Om Vishvarupaya Namah</td>
                <td>Cosmic Form</td>
            </tr>
            <tr>
                <td>39</td>
                <td>Vishalaksha</td>
                <td>Om Vishalakshaya Namah</td>
                <td>Broad-Eyed Lord</td>
            </tr>
            <tr>
                <td>40</td>
                <td>Prabhava</td>
                <td>Om Prabhavaya Namah</td>
                <td>Lord of Great Power</td>
            </tr>
            <tr>
                <td>41</td>
                <td>Parivridha</td>
                <td>Om Parivridhaya Namah</td>
                <td>Exalted One</td>
            </tr>
            <tr>
                <td>42</td>
                <td>Dridha</td>
                <td>Om Dridhaya Namah</td>
                <td>Firm and Steadfast</td>
            </tr>
            <tr>
                <td>43</td>
                <td>Ishwara</td>
                <td>Om Ishaya Namah</td>
                <td>Supreme God</td>
            </tr>
            <tr>
                <td>44</td>
                <td>Khadgadhara</td>
                <td>Om Khadgadharaya Namah</td>
                <td>Bearer of the Sword</td>
            </tr>
            <tr>
                <td>45</td>
                <td>Shrimate</td>
                <td>Om Shrimate Namah</td>
                <td>Possessor of Wealth and Glory</td>
            </tr>
            <tr>
                <td>46</td>
                <td>Kausalya Nandana</td>
                <td>Om Kausalyanandanaya Namah</td>
                <td>Son of Kausalya</td>
            </tr>
            <tr>
                <td>47</td>
                <td>Anasuya</td>
                <td>Om Anasuyakaya Namah</td>
                <td>Full of Virtue</td>
            </tr>
            <tr>
                <td>48</td>
                <td>Vipulamsa</td>
                <td>Om Vipulamsaya Namah</td>
                <td>Broad-Shouldered</td>
            </tr>
            <tr>
                <td>49</td>
                <td>Mahorasaka</td>
                <td>Om Mahorasakaya Namah</td>
                <td>Magnanimous Heart</td>
            </tr>
            <tr>
                <td>50</td>
                <td>Parameshthi</td>
                <td>Om Parameshthine Namah</td>
                <td>Supreme Being</td>
            </tr>
            <tr>
                <td>51</td>
                <td>Parayana</td>
                <td>Om Parayanaya Namah</td>
                <td>The Ultimate Refuge</td>
            </tr>
            <tr>
                <td>52</td>
                <td>Satyavrata</td>
                <td>Om Satyavrataya Namah</td>
                <td>Dedicated to Truth</td>
            </tr>
            <tr>
                <td>53</td>
                <td>Satyasandha</td>
                <td>Om Satyasandhaya Namah</td>
                <td>Devoted to Truth</td>
            </tr>
            <tr>
                <td>54</td>
                <td>Guru</td>
                <td>Om Gurave Namah</td>
                <td>The Supreme Teacher</td>
            </tr>
            <tr>
                <td>55</td>
                <td>Paramadharmika</td>
                <td>Om Paramadharmikaya Namah</td>
                <td>Embodiment of Supreme Dharma</td>
            </tr>
            <tr>
                <td>56</td>
                <td>Lokajna</td>
                <td>Om Lokajnaya Namah</td>
                <td>Knower of All Worlds</td>
            </tr>
            <tr>
                <td>57</td>
                <td>Lokavandya</td>
                <td>Om Lokavandyaya Namah</td>
                <td>Worshipped by All Worlds</td>
            </tr>
            <tr>
                <td>58</td>
                <td>Lokatma</td>
                <td>Om Lokatmane Namah</td>
                <td>Soul of the Universe</td>
            </tr>
            <tr>
                <td>59</td>
                <td>Lokakrita</td>
                <td>Om Lokakrite Namah</td>
                <td>Creator of the World</td>
            </tr>
            <tr>
                <td>60</td>
                <td>Parasmai</td>
                <td>Om Parasmai Namah</td>
                <td>Transcendental Being</td>
            </tr>
            <tr>
                <td>61</td>
                <td>Anadi</td>
                <td>Om Anadaye Namah</td>
                <td>Without Beginning</td>
            </tr>
            <tr>
                <td>62</td>
                <td>Bhagavate</td>
                <td>Om Bhagavate Namah</td>
                <td>Possessor of Divine Glory</td>
            </tr>
            <tr>
                <td>63</td>
                <td>Sevya</td>
                <td>Om Sevyaya Namah</td>
                <td>Worthy of Service</td>
            </tr>
            <tr>
                <td>64</td>
                <td>Jitamaya</td>
                <td>Om Jitamayaya Namah</td>
                <td>Conqueror of Illusion</td>
            </tr>
            <tr>
                <td>65</td>
                <td>Raghuudvaha</td>
                <td>Om Raghudvahaya Namah</td>
                <td>Uplifter of the Raghu Dynasty</td>
            </tr>
            <tr>
                <td>66</td>
                <td>Rama</td>
                <td>Om Ramaya Namah</td>
                <td>The Joyous One</td>
            </tr>
            <tr>
                <td>67</td>
                <td>Dayakara</td>
                <td>Om Dayakaraya Namah</td>
                <td>Compassionate Lord</td>
            </tr>
            <tr>
                <td>68</td>
                <td>Daksha</td>
                <td>Om Dakshaya Namah</td>
                <td>The Competent One</td>
            </tr>
            <tr>
                <td>69</td>
                <td>Sarvajna</td>
                <td>Om Sarvajnaya Namah</td>
                <td>All-Knowing Lord</td>
            </tr>
            <tr>
                <td>70</td>
                <td>Sarvapavana</td>
                <td>Om Sarvapavanaya Namah</td>
                <td>Purifier of All</td>
            </tr>
            <tr>
                <td>71</td>
                <td>Brahmanya</td>
                <td>Om Brahmanyaya Namah</td>
                <td>Protector of Brahman (Divine Knowledge)</td>
            </tr>
            <tr>
                <td>72</td>
                <td>Nitimate</td>
                <td>Om Nitimate Namah</td>
                <td>Possessor of Morality and Ethics</td>
            </tr>
            <tr>
                <td>73</td>
                <td>Goptra</td>
                <td>Om Goptraye Namah</td>
                <td>Protector of the Universe</td>
            </tr>
            <tr>
                <td>74</td>
                <td>Sarvadevamaya</td>
                <td>Om Sarvadevamayaya Namah</td>
                <td>Embodiment of All Gods</td>
            </tr>
            <tr>
                <td>75</td>
                <td>Hara</td>
                <td>Om Haraye Namah</td>
                <td>Remover of Sins</td>
            </tr>
            <tr>
                <td>76</td>
                <td>Sundara</td>
                <td>Om Sundaraya Namah</td>
                <td>The Beautiful One</td>
            </tr>
            <tr>
                <td>77</td>
                <td>Pitavasas</td>
                <td>Om Pitavasase Namah</td>
                <td>Clad in Yellow Robes</td>
            </tr>
            <tr>
                <td>78</td>
                <td>Sutrakara</td>
                <td>Om Sutrakaraya Namah</td>
                <td>Creator of the Sacred Sutras</td>
            </tr>
            <tr>
                <td>79</td>
                <td>Puratana</td>
                <td>Om Puratanaya Namah</td>
                <td>The Ancient One</td>
            </tr>
            <tr>
                <td>80</td>
                <td>Saumya</td>
                <td>Om Saumyaya Namah</td>
                <td>Gentle and Benevolent</td>
            </tr>
            <tr>
                <td>81</td>
                <td>Maharshi</td>
                <td>Om Maharshaye Namah</td>
                <td>Great Sage</td>
            </tr>
            <tr>
                <td>82</td>
                <td>Kodandine</td>
                <td>Om Kodandine Namah</td>
                <td>Wielder of the Bow (Kodanda)</td>
            </tr>
            <tr>
                <td>83</td>
                <td>Sarvajna</td>
                <td>Om Sarvajnaya Namah</td>
                <td>Knower of Everything</td>
            </tr>
            <tr>
                <td>84</td>
                <td>Sarvakovida</td>
                <td>Om Sarvakovidaya Namah</td>
                <td>All-Wise</td>
            </tr>
            <tr>
                <td>85</td>
                <td>Kavi</td>
                <td>Om Kavaye Namah</td>
                <td>The Poet</td>
            </tr>
            <tr>
                <td>86</td>
                <td>Sugrivavarada</td>
                <td>Om Sugrivavaradaya Namah</td>
                <td>Granter of Boons to Sugriva</td>
            </tr>
            <tr>
                <td>87</td>
                <td>Sarvapunyadhika Prada</td>
                <td>Om Sarvapunyadhika Pradaya Namah</td>
                <td>Bestower of Supreme Merits</td>
            </tr>
            <tr>
                <td>88</td>
                <td>Bhavya</td>
                <td>Om Bhavyaya Namah</td>
                <td>The Auspicious One</td>
            </tr>
            <tr>
                <td>89</td>
                <td>Jitarishadvarga</td>
                <td>Om Jitarishadvargaya Namah</td>
                <td>Conqueror of the Six Internal Enemies</td>
            </tr>
            <tr>
                <td>90</td>
                <td>Mahodara</td>
                <td>Om Mahodaraya Namah</td>
                <td>Magnanimous and Generous</td>
            </tr>
            <tr>
                <td>91</td>
                <td>Aghanashana</td>
                <td>Om Aghanashanaya Namah</td>
                <td>Destroyer of Sins</td>
            </tr>
            <tr>
                <td>92</td>
                <td>Sukirti</td>
                <td>Om Sukirtaye Namah</td>
                <td>Possessor of Glorious Fame</td>
            </tr>
            <tr>
                <td>93</td>
                <td>Adipurusha</td>
                <td>Om Adipurushaya Namah</td>
                <td>The Primordial Being</td>
            </tr>
            <tr>
                <td>94</td>
                <td>Kanta</td>
                <td>Om Kantaya Namah</td>
                <td>The Beloved</td>
            </tr>
            <tr>
                <td>95</td>
                <td>Punyakritagama</td>
                <td>Om Punyakritagamaya Namah</td>
                <td>Creator of Sacred Scriptures</td>
            </tr>
            <tr>
                <td>96</td>
                <td>Akalmasha</td>
                <td>Om Akalmashaya Namah</td>
                <td>The Spotless One</td>
            </tr>
            <tr>
                <td>97</td>
                <td>Chaturbahava</td>
                <td>Om Chaturbahavaya Namah</td>
                <td>Four-Armed Lord</td>
            </tr>
            <tr>
                <td>98</td>
                <td>Sarvavasa</td>
                <td>Om Sarvavasaya Namah</td>
                <td>All-Pervading</td>
            </tr>
            <tr>
                <td>99</td>
                <td>Durasada</td>
                <td>Om Durasadaya Namah</td>
                <td>Difficult to Approach</td>
            </tr>
            <tr>
                <td>100</td>
                <td>Smita Bhashin</td>
                <td>Om Smita Bhashine Namah</td>
                <td>Smiling and Soft-Spoken</td>
            </tr>
            <tr>
                <td>101</td>
                <td>Nivrittatma</td>
                <td>Om Nivrittatmane Namah</td>
                <td>Detached from Worldly Affairs</td>
            </tr>
            <tr>
                <td>102</td>
                <td>Smritimate</td>
                <td>Om Smritimate Namah</td>
                <td>Possessor of a Sharp Memory</td>
            </tr>
            <tr>
                <td>103</td>
                <td>Viryavat</td>
                <td>Om Viryavate Namah</td>
                <td>Full of Valor</td>
            </tr>
            <tr>
                <td>104</td>
                <td>Prabhava</td>
                <td>Om Prabhavaya Namah</td>
                <td>The Lord of Power</td>
            </tr>
            <tr>
                <td>105</td>
                <td>Dhira</td>
                <td>Om Dhiraya Namah</td>
                <td>The Wise and Courageous One</td>
            </tr>
            <tr>
                <td>106</td>
                <td>Danta</td>
                <td>Om Dantaya Namah</td>
                <td>Self-Controlled</td>
            </tr>
            <tr>
                <td>107</td>
                <td>Ghanashyama</td>
                <td>Om Ghanashyama Namah</td>
                <td>Dark as a Cloud</td>
            </tr>
            <tr>
                <td>108</td>
                <td>Sarvayudhavisharada</td>
                <td>Om Sarvayudhavisharadaya Namah</td>
                <td>Skilled in All Weapons</td>
            </tr>
            <tr>
                <td>109</td>
                <td>Adhyatmayo Gnilaya</td>
                <td>Om Adhyatmayoganilaya Namah</td>
                <td>Abode of Spirituality</td>
            </tr>
            <tr>
                <td>110</td>
                <td>Sumanasa</td>
                <td>Om Sumanase Namah</td>
                <td>Noble-Hearted</td>
            </tr>
            <tr>
                <td>111</td>
                <td>Lakshmanagraja</td>
                <td>Om Lakshmanagrajaya Namah</td>
                <td>Elder Brother of Lakshmana</td>
            </tr>
            <tr>
                <td>112</td>
                <td>Sarvatirthamaya</td>
                <td>Om Sarvatirthamayaya Namah</td>
                <td>Embodiment of All Pilgrimage Sites</td>
            </tr>
            <tr>
                <td>113</td>
                <td>Shura</td>
                <td>Om Shuraya Namah</td>
                <td>The Brave One</td>
            </tr>
            <tr>
                <td>114</td>
                <td>Sarvayajna Phalaprada</td>
                <td>Om Sarvayajna Phalapradaya Namah</td>
                <td>Bestower of Fruits of All Sacrifices</td>
            </tr>
            <tr>
                <td>115</td>
                <td>Yajnasvarupin</td>
                <td>Om Yajnasvarupine Namah</td>
                <td>Embodiment of Sacrifice</td>
            </tr>
            <tr>
                <td>116</td>
                <td>Yajnesha</td>
                <td>Om Yajneshaya Namah</td>
                <td>Lord of Sacrifices</td>
            </tr>
            <tr>
                <td>117</td>
                <td>Jaramarana Varjita</td>
                <td>Om Jaramarana Varjitaya Namah</td>
                <td>Free from Old Age and Death</td>
            </tr>
            <tr>
                <td>118</td>
                <td>Varnashrama Kara</td>
                <td>Om Varnashrama Karaya Namah</td>
                <td>Creator of Varnashrama Dharma</td>
            </tr>
            <tr>
                <td>119</td>
                <td>Varnin</td>
                <td>Om Varnine Namah</td>
                <td>Of All Virtues</td>
            </tr>
            <tr>
                <td>120</td>
                <td>Shatrujita</td>
                <td>Om Shatrujitaya Namah</td>
                <td>Conqueror of Enemies</td>
            </tr>
            <tr>
                <td>121</td>
                <td>Purushottama</td>
                <td>Om Purushottamaya Namah</td>
                <td>Supreme Person</td>
            </tr>
            <tr>
                <td>122</td>
                <td>Vibhishana Pratishthatr</td>
                <td>Om Vibhishana Pratishthatraye Namah</td>
                <td>Establisher of Vibhishana's Kingdom</td>
            </tr>
            <tr>
                <td>123</td>
                <td>Paramatma</td>
                <td>Om Paramatmane Namah</td>
                <td>Supreme Soul</td>
            </tr>
            <tr>
                <td>124</td>
                <td>Paratpara</td>
                <td>Om Paratparamaya Namah</td>
                <td>Greater than the Greatest</td>
            </tr>
            <tr>
                <td>125</td>
                <td>Pramanabhuta</td>
                <td>Om Pramanabhutaya Namah</td>
                <td>Embodiment of Standards</td>
            </tr>
            <tr>
                <td>126</td>
                <td>Durjneya</td>
                <td>Om Durjneyaya Namah</td>
                <td>Difficult to Know</td>
            </tr>
            <tr>
                <td>127</td>
                <td>Purna</td>
                <td>Om Purnaya Namah</td>
                <td>Complete in Himself</td>
            </tr>
            <tr>
                <td>128</td>
                <td>Parapuramjaya</td>
                <td>Om Parapuramjayaya Namah</td>
                <td>Victor of Enemy Cities</td>
            </tr>
            <tr>
                <td>129</td>
                <td>Anantadrishti</td>
                <td>Om Anantadrishtaye Namah</td>
                <td>Possessor of Infinite Vision</td>
            </tr>
            <tr>
                <td>130</td>
                <td>Ananda</td>
                <td>Om Anandaya Namah</td>
                <td>Blissful One</td>
            </tr>
            <tr>
                <td>131</td>
                <td>Dhanurveda</td>
                <td>Om Dhanurvedaya Namah</td>
                <td>Knower of Archery</td>
            </tr>
            <tr>
                <td>132</td>
                <td>Dhanurdhara</td>
                <td>Om Dhanurdharaya Namah</td>
                <td>Bearer of the Bow</td>
            </tr>
            <tr>
                <td>133</td>
                <td>Gunakara</td>
                <td>Om Gunakaraya Namah</td>
                <td>Mine of Virtues</td>
            </tr>
            <tr>
                <td>134</td>
                <td>Gunashrestha</td>
                <td>Om Gunashresthaya Namah</td>
                <td>Best among Virtuous</td>
            </tr>
            <tr>
                <td>135</td>
                <td>Satchidananda Vigraha</td>
                <td>Om Satchidananda Vigrahaya Namah</td>
                <td>Form of Eternal Bliss and Consciousness</td>
            </tr>
            <tr>
                <td>136</td>
                <td>Abhivandya</td>
                <td>Om Abhivandyaya Namah</td>
                <td>Worthy of Worship</td>
            </tr>
            <tr>
                <td>137</td>
                <td>Mahakaya</td>
                <td>Om Mahakayaya Namah</td>
                <td>Of Immense Form</td>
            </tr>
            <tr>
                <td>138</td>
                <td>Vishvakarman</td>
                <td>Om Vishvakarmane Namah</td>
                <td>Architect of the Universe</td>
            </tr>
            <tr>
                <td>139</td>
                <td>Visharada</td>
                <td>Om Visharadaya Namah</td>
                <td>Skilled in Everything</td>
            </tr>
            <tr>
                <td>140</td>
                <td>Vinitatma</td>
                <td>Om Vinitatmane Namah</td>
                <td>Humble Soul</td>
            </tr>
            <tr>
                <td>141</td>
                <td>Vitaraga</td>
                <td>Om Vitaragaya Namah</td>
                <td>Free from Desires</td>
            </tr>
            <tr>
                <td>142</td>
                <td>Tapasvisha</td>
                <td>Om Tapasvishaya Namah</td>
                <td>Supreme in Austerities</td>
            </tr>
            <tr>
                <td>143</td>
                <td>Janeshwara</td>
                <td>Om Janeshwaraya Namah</td>
                <td>Lord of All People</td>
            </tr>
            <tr>
                <td>144</td>
                <td>Kalyanaprakriti</td>
                <td>Om Kalyanaprakritaye Namah</td>
                <td>Of Auspicious Nature</td>
            </tr>
            <tr>
                <td>145</td>
                <td>Kalpa</td>
                <td>Om Kalpaya Namah</td>
                <td>Eternal</td>
            </tr>
            <tr>
                <td>146</td>
                <td>Sarvesha</td>
                <td>Om Sarveshaya Namah</td>
                <td>Lord of All</td>
            </tr>
            <tr>
                <td>147</td>
                <td>Sarvakamada</td>
                <td>Om Sarvakamadaya Namah</td>
                <td>Fulfiller of All Desires</td>
            </tr>
            <tr>
                <td>148</td>
                <td>Akshaya</td>
                <td>Om Akshaya Namah</td>
                <td>Imperishable</td>
            </tr>
            <tr>
                <td>149</td>
                <td>Purusha</td>
                <td>Om Purushaya Namah</td>
                <td>Supreme Person</td>
            </tr>
            <tr>
                <td>150</td>
                <td>Sakshi</td>
                <td>Om Sakshine Namah</td>
                <td>The Witness</td>
            </tr>
            <tr>
                <td>151</td>
                <td>Keshava</td>
                <td>Om Keshavaya Namah</td>
                <td>Lord with Beautiful Hair</td>
            </tr>
            <tr>
                <td>152</td>
                <td>Purushottama</td>
                <td>Om Purushottamaya Namah</td>
                <td>The Supreme Person</td>
            </tr>
            <tr>
                <td>153</td>
                <td>Lokadhyaksha</td>
                <td>Om Lokadhyakshaya Namah</td>
                <td>Lord of the Worlds</td>
            </tr>
            <tr>
                <td>154</td>
                <td>Mahamaya</td>
                <td>Om Mahamayaya Namah</td>
                <td>The Great Illusion</td>
            </tr>
            <tr>
                <td>155</td>
                <td>Vibhishana Varaprada</td>
                <td>Om Vibhishana Varapradaya Namah</td>
                <td>Granter of Boons to Vibhishana</td>
            </tr>
            <tr>
                <td>156</td>
                <td>Anandavigraha</td>
                <td>Om Anandavigrahaya Namah</td>
                <td>Embodiment of Bliss</td>
            </tr>
            <tr>
                <td>157</td>
                <td>Jyotish</td>
                <td>Om Jyotishe Namah</td>
                <td>Radiant and Effulgent</td>
            </tr>
            <tr>
                <td>158</td>
                <td>Hanumatprabha</td>
                <td>Om Hanumatprabhave Namah</td>
                <td>Protector of Hanuman</td>
            </tr>
            <tr>
                <td>159</td>
                <td>Avyaya</td>
                <td>Om Avyayaya Namah</td>
                <td>Imperishable</td>
            </tr>
            <tr>
                <td>160</td>
                <td>Bhrajishnava</td>
                <td>Om Bhrajishnave Namah</td>
                <td>Radiantly Glorious</td>
            </tr>
            <tr>
                <td>161</td>
                <td>Sahana</td>
                <td>Om Sahanaya Namah</td>
                <td>Endowed with Patience</td>
            </tr>
            <tr>
                <td>162</td>
                <td>Bhokta</td>
                <td>Om Bhoktre Namah</td>
                <td>The Enjoyer of All Offerings</td>
            </tr>
            <tr>
                <td>163</td>
                <td>Satyavadin</td>
                <td>Om Satyavadine Namah</td>
                <td>Speaker of Truth</td>
            </tr>
            <tr>
                <td>164</td>
                <td>Bahushruta</td>
                <td>Om Bahushrutaya Namah</td>
                <td>Learned in Scriptures</td>
            </tr>
            <tr>
                <td>165</td>
                <td>Sukhada</td>
                <td>Om Sukhadaya Namah</td>
                <td>Granter of Happiness</td>
            </tr>
            <tr>
                <td>166</td>
                <td>Karana</td>
                <td>Om Karanaya Namah</td>
                <td>The Ultimate Cause</td>
            </tr>
            <tr>
                <td>167</td>
                <td>Karta</td>
                <td>Om Kartre Namah</td>
                <td>The Creator</td>
            </tr>
            <tr>
                <td>168</td>
                <td>Bhavabandhavimocana</td>
                <td>Om Bhavabandhavimocanaya Namah</td>
                <td>Liberator from Worldly Bondage</td>
            </tr>
            <tr>
                <td>169</td>
                <td>Devachudamani</td>
                <td>Om Devachudamanaye Namah</td>
                <td>Crown Jewel of the Gods</td>
            </tr>
            <tr>
                <td>170</td>
                <td>Netra</td>
                <td>Om Netre Namah</td>
                <td>Eye of the Universe</td>
            </tr>
            <tr>
                <td>171</td>
                <td>Brahmanya</td>
                <td>Om Brahmanyaya Namah</td>
                <td>Protector of Knowledge</td>
            </tr>
            <tr>
                <td>172</td>
                <td>Brahmavardhana</td>
                <td>Om Brahmavardhanaya Namah</td>
                <td>Promoter of Divine Wisdom</td>
            </tr>
            <tr>
                <td>173</td>
                <td>Samsarottaraka</td>
                <td>Om Samsarottarakaya Namah</td>
                <td>Saviour from the Worldly Cycle</td>
            </tr>
            <tr>
                <td>174</td>
                <td>Rama</td>
                <td>Om Ramaya Namah</td>
                <td>The Joyful One</td>
            </tr>
            <tr>
                <td>175</td>
                <td>Sarvaduhkha Vimokshakrit</td>
                <td>Om Sarvaduhkha Vimokshakrite Namah</td>
                <td>Remover of All Sorrows</td>
            </tr>
            <tr>
                <td>176</td>
                <td>Vidvattama</td>
                <td>Om Vidvattamaya Namah</td>
                <td>Supreme Among the Wise</td>
            </tr>
            <tr>
                <td>177</td>
                <td>Vishvakarta</td>
                <td>Om Vishvakartre Namah</td>
                <td>Creator of the Universe</td>
            </tr>
            <tr>
                <td>178</td>
                <td>Vishvaharta</td>
                <td>Om Vishvahartre Namah</td>
                <td>Destroyer of the Universe</td>
            </tr>
            <tr>
                <td>179</td>
                <td>Vishvadhriti</td>
                <td>Om Vishvadhrite Namah</td>
                <td>Sustainer of the Universe</td>
            </tr>
            <tr>
                <td>180</td>
                <td>Nitya</td>
                <td>Om Nityaya Namah</td>
                <td>Eternal</td>
            </tr>
            <tr>
                <td>181</td>
                <td>Niyata Kalyana</td>
                <td>Om Niyata Kalyanaya Namah</td>
                <td>Always Auspicious</td>
            </tr>
            <tr>
                <td>182</td>
                <td>Sita Shoka Vinashakrit</td>
                <td>Om Sita Shoka Vinashakrite Namah</td>
                <td>Remover of Sita's Grief</td>
            </tr>
            <tr>
                <td>183</td>
                <td>Kakutstha</td>
                <td>Om Kakutsthaya Namah</td>
                <td>Descendant of Kakutstha</td>
            </tr>
            <tr>
                <td>184</td>
                <td>Pundarikaksha</td>
                <td>Om Pundarikakshaya Namah</td>
                <td>Lotus-Eyed Lord</td>
            </tr>
            <tr>
                <td>185</td>
                <td>Vishvamitra Bhayapaha</td>
                <td>Om Vishvamitra Bhayapahaya Namah</td>
                <td>Remover of Vishvamitra's Fear</td>
            </tr>
            <tr>
                <td>186</td>
                <td>Maricha Mathana</td>
                <td>Om Maricha Mathanaya Namah</td>
                <td>Slayer of Maricha</td>
            </tr>
            <tr>
                <td>187</td>
                <td>Rama</td>
                <td>Om Ramaya Namah</td>
                <td>The Delightful One</td>
            </tr>
            <tr>
                <td>188</td>
                <td>Viradha Vadha Pandita</td>
                <td>Om Viradha Vadha Panditaya Namah</td>
                <td>Expert Slayer of Viradha</td>
            </tr>
            <tr>
                <td>189</td>
                <td>Duhsvapna Nashana</td>
                <td>Om Duhsvapna Nashanaya Namah</td>
                <td>Destroyer of Bad Dreams</td>
            </tr>
            <tr>
                <td>190</td>
                <td>Ramya</td>
                <td>Om Ramyaya Namah</td>
                <td>Pleasing and Delightful</td>
            </tr>
            <tr>
                <td>191</td>
                <td>Kiriti</td>
                <td>Om Kiritine Namah</td>
                <td>Adorned with a Crown</td>
            </tr>
            <tr>
                <td>192</td>
                <td>Tridasadhipa</td>
                <td>Om Tridasadhipaya Namah</td>
                <td>Lord of the Celestials</td>
            </tr>
            <tr>
                <td>193</td>
                <td>Mahadhanusha</td>
                <td>Om Mahadhanushe Namah</td>
                <td>Bearer of a Great Bow</td>
            </tr>
            <tr>
                <td>194</td>
                <td>Mahakaya</td>
                <td>Om Mahakayaya Namah</td>
                <td>One with a Magnificent Form</td>
            </tr>
            <tr>
                <td>195</td>
                <td>Bhima</td>
                <td>Om Bhimaya Namah</td>
                <td>Fearsome</td>
            </tr>
            <tr>
                <td>196</td>
                <td>Bhima Parakrama</td>
                <td>Om Bhima Parakramaya Namah</td>
                <td>Fearsome in Valor</td>
            </tr>
            <tr>
                <td>197</td>
                <td>Tattva Svarupin</td>
                <td>Om Tattva Svarupine Namah</td>
                <td>Embodiment of Truth</td>
            </tr>
            <tr>
                <td>198</td>
                <td>Tattvajnana</td>
                <td>Om Tattvajnanaya Namah</td>
                <td>Knower of Truth</td>
            </tr>
            <tr>
                <td>199</td>
                <td>Tattvavadin</td>
                <td>Om Tattvavadine Namah</td>
                <td>Speaker of Truth</td>
            </tr>
            <tr>
                <td>200</td>
                <td>Suvikrama</td>
                <td>Om Suvikramaya Namah</td>
                <td>Possessor of Great Valor</td>
            </tr>
            <tr>
                <td>201</td>
                <td>Bhutatma</td>
                <td>Om Bhutatmane Namah</td>
                <td>Soul of All Beings</td>
            </tr>
            <tr>
                <td>202</td>
                <td>Bhutakrit</td>
                <td>Om Bhutakrite Namah</td>
                <td>Creator of All Beings</td>
            </tr>
            <tr>
                <td>203</td>
                <td>Swami</td>
                <td>Om Swamine Namah</td>
                <td>The Lord and Master</td>
            </tr>
            <tr>
                <td>204</td>
                <td>Kalajnani</td>
                <td>Om Kalajnanine Namah</td>
                <td>Knower of Time</td>
            </tr>
            <tr>
                <td>205</td>
                <td>Mahapatava</td>
                <td>Om Mahapataye Namah</td>
                <td>Possessor of Great Strength</td>
            </tr>
            <tr>
                <td>206</td>
                <td>Aniravya</td>
                <td>Om Aniravyaya Namah</td>
                <td>Free from Despair</td>
            </tr>
            <tr>
                <td>207</td>
                <td>Gunagrahin</td>
                <td>Om Gunagrahine Namah</td>
                <td>Acceptor of Virtues</td>
            </tr>
            <tr>
                <td>208</td>
                <td>Nishkalanka</td>
                <td>Om Nishkalankaya Namah</td>
                <td>Immaculate and Pure</td>
            </tr>
            <tr>
                <td>209</td>
                <td>Kalankaghna</td>
                <td>Om Kalankaghnaya Namah</td>
                <td>Destroyer of Blemishes</td>
            </tr>
            <tr>
                <td>210</td>
                <td>Swabhava Bhadra</td>
                <td>Om Swabhava Bhadradaya Namah</td>
                <td>Naturally Auspicious</td>
            </tr>
            <tr>
                <td>211</td>
                <td>Shatrughna</td>
                <td>Om Shatrughnaya Namah</td>
                <td>Destroyer of Enemies</td>
            </tr>
            <tr>
                <td>212</td>
                <td>Keshava</td>
                <td>Om Keshavaya Namah</td>
                <td>One with Beautiful Hair</td>
            </tr>
            <tr>
                <td>213</td>
                <td>Sthanu</td>
                <td>Om Sthanave Namah</td>
                <td>Immovable and Eternal</td>
            </tr>
            <tr>
                <td>214</td>
                <td>Ishvara</td>
                <td>Om Ishvaraya Namah</td>
                <td>Supreme Lord</td>
            </tr>
            <tr>
                <td>215</td>
                <td>Bhutadi</td>
                <td>Om Bhutadaye Namah</td>
                <td>Source of All Beings</td>
            </tr>
            <tr>
                <td>216</td>
                <td>Shambhu</td>
                <td>Om Shambhave Namah</td>
                <td>Source of Bliss</td>
            </tr>
            <tr>
                <td>217</td>
                <td>Aditya</td>
                <td>Om Adityaya Namah</td>
                <td>Radiant as the Sun</td>
            </tr>
            <tr>
                <td>218</td>
                <td>Sthavishtha</td>
                <td>Om Sthavishthaya Namah</td>
                <td>The Immense One</td>
            </tr>
            <tr>
                <td>219</td>
                <td>Shashvata</td>
                <td>Om Shashvataya Namah</td>
                <td>Eternal and Immutable</td>
            </tr>
            <tr>
                <td>220</td>
                <td>Dhruva</td>
                <td>Om Dhruvaya Namah</td>
                <td>Steady and Unchanging</td>
            </tr>
            <tr>
                <td>221</td>
                <td>Kavachin</td>
                <td>Om Kavachine Namah</td>
                <td>Wearer of Armor</td>
            </tr>
            <tr>
                <td>222</td>
                <td>Kundalin</td>
                <td>Om Kundaline Namah</td>
                <td>Adorned with Earrings</td>
            </tr>
            <tr>
                <td>223</td>
                <td>Chakrin</td>
                <td>Om Chakrine Namah</td>
                <td>Bearer of the Discus</td>
            </tr>
            <tr>
                <td>224</td>
                <td>Khadgin</td>
                <td>Om Khadgine Namah</td>
                <td>Wielder of the Sword</td>
            </tr>
            <tr>
                <td>225</td>
                <td>Bhaktajana Priya</td>
                <td>Om Bhaktajana Priyaya Namah</td>
                <td>Beloved of Devotees</td>
            </tr>
            <tr>
                <td>226</td>
                <td>Amritya</td>
                <td>Om Amrityaya Namah</td>
                <td>Immortal Lord</td>
            </tr>
            <tr>
                <td>227</td>
                <td>Janmarahita</td>
                <td>Om Janmarahitaya Namah</td>
                <td>Free from Birth</td>
            </tr>
            <tr>
                <td>228</td>
                <td>Sarvajit</td>
                <td>Om Sarvajite Namah</td>
                <td>Conqueror of All</td>
            </tr>
            <tr>
                <td>229</td>
                <td>Sarvagochara</td>
                <td>Om Sarvagocharaya Namah</td>
                <td>All-Pervading</td>
            </tr>
            <tr>
                <td>230</td>
                <td>Anuttama</td>
                <td>Om Anuttamaya Namah</td>
                <td>The Incomparable One</td>
            </tr>
            <tr>
                <td>231</td>
                <td>Aprameyatma</td>
                <td>Om Aprameyatmane Namah</td>
                <td>Immeasurable and Infinite Soul</td>
            </tr>
            <tr>
                <td>232</td>
                <td>Sarvada</td>
                <td>Om Sarvadaya Namah</td>
                <td>Omnipresent</td>
            </tr>
            <tr>
                <td>233</td>
                <td>Gunasagara</td>
                <td>Om Gunasagaraya Namah</td>
                <td>Ocean of Virtues</td>
            </tr>
            <tr>
                <td>234</td>
                <td>Sama</td>
                <td>Om Samaya Namah</td>
                <td>Embodiment of Equanimity</td>
            </tr>
            <tr>
                <td>235</td>
                <td>Samatma</td>
                <td>Om Samatmane Namah</td>
                <td>Equal to All</td>
            </tr>
            <tr>
                <td>236</td>
                <td>Samaga</td>
                <td>Om Samagaya Namah</td>
                <td>Singer of the Sama Hymns</td>
            </tr>
            <tr>
                <td>237</td>
                <td>Jatamukuta Mandita</td>
                <td>Om Jatamukuta Manditaya Namah</td>
                <td>Adorned with a Crown of Matted Hair</td>
            </tr>
            <tr>
                <td>238</td>
                <td>Ajeya</td>
                <td>Om Ajeyaya Namah</td>
                <td>Invincible</td>
            </tr>
            <tr>
                <td>239</td>
                <td>Sarvabhutatma</td>
                <td>Om Sarvabhutatmane Namah</td>
                <td>Soul of All Beings</td>
            </tr>
            <tr>
                <td>240</td>
                <td>Vishvaksena</td>
                <td>Om Vishvaksenaya Namah</td>
                <td>Leader of the Celestial Army</td>
            </tr>
            <tr>
                <td>241</td>
                <td>Mahatap</td>
                <td>Om Mahatapaya Namah</td>
                <td>Possessor of Great Austerity</td>
            </tr>
            <tr>
                <td>242</td>
                <td>Lokadhyaksha</td>
                <td>Om Lokadhyakshaya Namah</td>
                <td>Lord of the Worlds</td>
            </tr>
            <tr>
                <td>243</td>
                <td>Mahabahu</td>
                <td>Om Mahabahave Namah</td>
                <td>One with Strong Arms</td>
            </tr>
            <tr>
                <td>244</td>
                <td>Amrita</td>
                <td>Om Amritaya Namah</td>
                <td>Immortal and Eternal</td>
            </tr>
            <tr>
                <td>245</td>
                <td>Vedavittama</td>
                <td>Om Vedavittamaya Namah</td>
                <td>Supreme Knower of the Vedas</td>
            </tr>
            <tr>
                <td>246</td>
                <td>Sahiṣṇu</td>
                <td>Om Sahishnave Namah</td>
                <td>Patient and Enduring</td>
            </tr>
            <tr>
                <td>247</td>
                <td>Sadgata</td>
                <td>Om Sadgataye Namah</td>
                <td>The Ultimate Goal</td>
            </tr>
            <tr>
                <td>248</td>
                <td>Shastra</td>
                <td>Om Shastre Namah</td>
                <td>The Sacred Scriptures</td>
            </tr>
            <tr>
                <td>249</td>
                <td>Vishvayoni</td>
                <td>Om Vishvayonaye Namah</td>
                <td>Source of the Universe</td>
            </tr>
            <tr>
                <td>250</td>
                <td>Mahadyuti</td>
                <td>Om Mahadyutaye Namah</td>
                <td>Of Great Radiance</td>
            </tr>
            <tr>
                <td>251</td>
                <td>Atindra</td>
                <td>Om Atindraya Namah</td>
                <td>Beyond Indra</td>
            </tr>
            <tr>
                <td>252</td>
                <td>Urjita</td>
                <td>Om Urjitaya Namah</td>
                <td>Strong and Powerful</td>
            </tr>
            <tr>
                <td>253</td>
                <td>Pramshava</td>
                <td>Om Pramshave Namah</td>
                <td>Lofty and Eminent</td>
            </tr>
            <tr>
                <td>254</td>
                <td>Upendra</td>
                <td>Om Upendraya Namah</td>
                <td>Brother of Indra</td>
            </tr>
            <tr>
                <td>255</td>
                <td>Vamana</td>
                <td>Om Vamanaya Namah</td>
                <td>Incarnation as Vamana</td>
            </tr>
            <tr>
                <td>256</td>
                <td>Bali</td>
                <td>Om Baline Namah</td>
                <td>The Strong One</td>
            </tr>
            <tr>
                <td>257</td>
                <td>Dhanurveda</td>
                <td>Om Dhanurvedaya Namah</td>
                <td>Knower of Archery</td>
            </tr>
            <tr>
                <td>258</td>
                <td>Vidhatri</td>
                <td>Om Vidhatre Namah</td>
                <td>Creator and Supporter</td>
            </tr>
            <tr>
                <td>259</td>
                <td>Brahma</td>
                <td>Om Brahmane Namah</td>
                <td>Supreme Creator</td>
            </tr>
            <tr>
                <td>260</td>
                <td>Vishnu</td>
                <td>Om Vishnave Namah</td>
                <td>The Pervading Lord</td>
            </tr>
            <tr>
                <td>261</td>
                <td>Shankara</td>
                <td>Om Shankaraya Namah</td>
                <td>Auspicious One</td>
            </tr>
            <tr>
                <td>262</td>
                <td>Hamsa</td>
                <td>Om Hamsaya Namah</td>
                <td>The Divine Swan</td>
            </tr>
            <tr>
                <td>263</td>
                <td>Marichi</td>
                <td>Om Marichaye Namah</td>
                <td>Radiant as a Ray of Light</td>
            </tr>
            <tr>
                <td>264</td>
                <td>Govinda</td>
                <td>Om Govindaya Namah</td>
                <td>Protector of Cows</td>
            </tr>
            <tr>
                <td>265</td>
                <td>Ratnagarbha</td>
                <td>Om Ratnagarbhaya Namah</td>
                <td>Jewel-Wombed</td>
            </tr>
            <tr>
                <td>266</td>
                <td>Mahamata</td>
                <td>Om Mahamataye Namah</td>
                <td>Possessor of Great Intellect</td>
            </tr>
            <tr>
                <td>267</td>
                <td>Vyasa</td>
                <td>Om Vyasaya Namah</td>
                <td>Compiler of the Vedas</td>
            </tr>
            <tr>
                <td>268</td>
                <td>Vacaspati</td>
                <td>Om Vacaspataye Namah</td>
                <td>Lord of Speech</td>
            </tr>
            <tr>
                <td>269</td>
                <td>Sarvadarpita Asuramardana</td>
                <td>Om Sarvadarpita Asuramardanaya Namah</td>
                <td>Destroyer of Proud Demons</td>
            </tr>
            <tr>
                <td>270</td>
                <td>Janakivallabha</td>
                <td>Om Janakivallabhaya Namah</td>
                <td>Beloved of Sita</td>
            </tr>
            <tr>
                <td>271</td>
                <td>Pujya</td>
                <td>Om Pujyaya Namah</td>
                <td>Worthy of Worship</td>
            </tr>
            <tr>
                <td>272</td>
                <td>Prakata</td>
                <td>Om Prakataya Namah</td>
                <td>Manifest</td>
            </tr>
            <tr>
                <td>273</td>
                <td>Pritivardhana</td>
                <td>Om Pritivardhanaya Namah</td>
                <td>Increaser of Love</td>
            </tr>
            <tr>
                <td>274</td>
                <td>Sambhava</td>
                <td>Om Sambhavaya Namah</td>
                <td>One Who Manifests</td>
            </tr>
            <tr>
                <td>275</td>
                <td>Atindriya</td>
                <td>Om Atindriyaya Namah</td>
                <td>Beyond the Senses</td>
            </tr>
            <tr>
                <td>276</td>
                <td>Vedya</td>
                <td>Om Vedyaya Namah</td>
                <td>Worthy of Being Known</td>
            </tr>
            <tr>
                <td>277</td>
                <td>Anirdesha</td>
                <td>Om Anirdeshaya Namah</td>
                <td>Indescribable</td>
            </tr>
            <tr>
                <td>278</td>
                <td>Jambavatprabha</td>
                <td>Om Jambavatprabhave Namah</td>
                <td>Lord of Jambavan</td>
            </tr>
            <tr>
                <td>279</td>
                <td>Madana</td>
                <td>Om Madanaya Namah</td>
                <td>One Who Inspires Love</td>
            </tr>
            <tr>
                <td>280</td>
                <td>Mathana</td>
                <td>Om Mathanaya Namah</td>
                <td>The Churner</td>
            </tr>
            <tr>
                <td>281</td>
                <td>Vyapin</td>
                <td>Om Vyapinaya Namah</td>
                <td>All-Pervading</td>
            </tr>
            <tr>
                <td>282</td>
                <td>Vishvarupa</td>
                <td>Om Vishvarupaya Namah</td>
                <td>Cosmic Form</td>
            </tr>
            <tr>
                <td>283</td>
                <td>Niranjana</td>
                <td>Om Niranjanaya Namah</td>
                <td>Spotless and Pure</td>
            </tr>
            <tr>
                <td>284</td>
                <td>Narayana</td>
                <td>Om Narayanaya Namah</td>
                <td>Refuge of Beings</td>
            </tr>
            <tr>
                <td>285</td>
                <td>Agranya</td>
                <td>Om Agranyaya Namah</td>
                <td>Foremost</td>
            </tr>
            <tr>
                <td>286</td>
                <td>Sadhava</td>
                <td>Om Sadhave Namah</td>
                <td>Righteous</td>
            </tr>
            <tr>
                <td>287</td>
                <td>Jatayu Pritivardhana</td>
                <td>Om Jatayu Pritivardhanaya Namah</td>
                <td>Increaser of Jatayu’s Joy</td>
            </tr>
            <tr>
                <td>288</td>
                <td>Naikarupa</td>
                <td>Om Naikarupaya Namah</td>
                <td>Multiformed</td>
            </tr>
            <tr>
                <td>289</td>
                <td>Jagannatha</td>
                <td>Om Jagannathaya Namah</td>
                <td>Lord of the Universe</td>
            </tr>
            <tr>
                <td>290</td>
                <td>Surakarya Hita</td>
                <td>Om Surakarya Hitaya Namah</td>
                <td>Benefactor of Divine Causes</td>
            </tr>
            <tr>
                <td>291</td>
                <td>Svabhu</td>
                <td>Om Svabhave Namah</td>
                <td>Self-Manifested</td>
            </tr>
            <tr>
                <td>292</td>
                <td>Jitakrodha</td>
                <td>Om Jitakrodhaya Namah</td>
                <td>Conqueror of Anger</td>
            </tr>
            <tr>
                <td>293</td>
                <td>Jitarata</td>
                <td>Om Jitarataye Namah</td>
                <td>Conqueror of Enemies</td>
            </tr>
            <tr>
                <td>294</td>
                <td>Plavagadhiparajyada</td>
                <td>Om Plavagadhiparajyadaya Namah</td>
                <td>Bestower of Kingdom to Monkeys</td>
            </tr>
            <tr>
                <td>295</td>
                <td>Vasuda</td>
                <td>Om Vasudaya Namah</td>
                <td>Bestower of Wealth</td>
            </tr>
            <tr>
                <td>296</td>
                <td>Subhuja</td>
                <td>Om Subhujaya Namah</td>
                <td>One with Beautiful Arms</td>
            </tr>
            <tr>
                <td>297</td>
                <td>Naikamaya</td>
                <td>Om Naikamayaya Namah</td>
                <td>Master of Many Illusions</td>
            </tr>
            <tr>
                <td>298</td>
                <td>Bhavya Pramodana</td>
                <td>Om Bhavya Pramodanaya Namah</td>
                <td>Delighter of the Auspicious</td>
            </tr>
            <tr>
                <td>299</td>
                <td>Chandamshava</td>
                <td>Om Chandamshave Namah</td>
                <td>Radiant as the Sun</td>
            </tr>
            <tr>
                <td>300</td>
                <td>Siddhida</td>
                <td>Om Siddhidaya Namah</td>
                <td>Granter of Success</td>
            </tr>
            <tr>
                <td>301</td>
                <td>Kalpa</td>
                <td>Om Kalpaya Namah</td>
                <td>Eternal as a Wish-Granting Tree</td>
            </tr>
            <tr>
                <td>302</td>
                <td>Sharanagata Vatsala</td>
                <td>Om Sharanagata Vatsalaya Namah</td>
                <td>Protector of Those Seeking Refuge</td>
            </tr>
            <tr>
                <td>303</td>
                <td>Agada</td>
                <td>Om Agadaya Namah</td>
                <td>The Cure-All</td>
            </tr>
            <tr>
                <td>304</td>
                <td>Rogaharta</td>
                <td>Om Rogahartraye Namah</td>
                <td>Remover of Diseases</td>
            </tr>
            <tr>
                <td>305</td>
                <td>Mantrajna</td>
                <td>Om Mantrajnanaya Namah</td>
                <td>Knower of Sacred Mantras</td>
            </tr>
            <tr>
                <td>306</td>
                <td>Mantrabhavana</td>
                <td>Om Mantrabhavanaya Namah</td>
                <td>Embodiment of Mantra Practices</td>
            </tr>
            <tr>
                <td>307</td>
                <td>Saumitrivatsala</td>
                <td>Om Saumitrivatsalaya Namah</td>
                <td>Affectionate to Lakshmana</td>
            </tr>
            <tr>
                <td>308</td>
                <td>Dhurya</td>
                <td>Om Dhuryaya Namah</td>
                <td>Upholder of Dharma</td>
            </tr>
            <tr>
                <td>309</td>
                <td>Vyaktavyaktasvarupadhrita</td>
                <td>Om Vyaktavyaktasvarupadhrute Namah</td>
                <td>Manifest and Unmanifest Form Holder</td>
            </tr>
            <tr>
                <td>310</td>
                <td>Vasishtha</td>
                <td>Om Vasishthaya Namah</td>
                <td>Sacred Sage</td>
            </tr>
            <tr>
                <td>311</td>
                <td>Gramani</td>
                <td>Om Gramanye Namah</td>
                <td>Leader of the Path</td>
            </tr>
            <tr>
                <td>312</td>
                <td>Shrimate</td>
                <td>Om Shrimate Namah</td>
                <td>Possessor of Wealth and Prosperity</td>
            </tr>
            <tr>
                <td>313</td>
                <td>Anukula</td>
                <td>Om Anukulaya Namah</td>
                <td>The Favorable One</td>
            </tr>
            <tr>
                <td>314</td>
                <td>Priyamvada</td>
                <td>Om Priyamvadaya Namah</td>
                <td>Sweet-Speaker</td>
            </tr>
            <tr>
                <td>315</td>
                <td>Atula</td>
                <td>Om Atulaya Namah</td>
                <td>Incomparable</td>
            </tr>
            <tr>
                <td>316</td>
                <td>Sattvika</td>
                <td>Om Sattvikaya Namah</td>
                <td>Embodiment of Goodness</td>
            </tr>
            <tr>
                <td>317</td>
                <td>Dhira</td>
                <td>Om Dhiraya Namah</td>
                <td>Courageous and Wise</td>
            </tr>
            <tr>
                <td>318</td>
                <td>Sharasana Visharada</td>
                <td>Om Sharasana Visharadaya Namah</td>
                <td>Expert in Archery</td>
            </tr>
            <tr>
                <td>319</td>
                <td>Jyeshtha</td>
                <td>Om Jyeshthaya Namah</td>
                <td>The Eldest</td>
            </tr>
            <tr>
                <td>320</td>
                <td>Sarvagunopeta</td>
                <td>Om Sarvagunopetaya Namah</td>
                <td>Possessor of All Virtues</td>
            </tr>
            <tr>
                <td>321</td>
                <td>Shaktimatta</td>
                <td>Om Shaktimataye Namah</td>
                <td>Full of Power</td>
            </tr>
            <tr>
                <td>322</td>
                <td>Tatakantaka</td>
                <td>Om Tatakantakaya Namah</td>
                <td>Slayer of Tataka</td>
            </tr>
            <tr>
                <td>323</td>
                <td>Vaikuntha</td>
                <td>Om Vaikunthaya Namah</td>
                <td>Lord of Vaikuntha</td>
            </tr>
            <tr>
                <td>324</td>
                <td>Praninam Prana</td>
                <td>Om Praninam Pranaya Namah</td>
                <td>Life Force of All Beings</td>
            </tr>
            <tr>
                <td>325</td>
                <td>Kamatha</td>
                <td>Om Kamathaya Namah</td>
                <td>The Tortoise Incarnation</td>
            </tr>
            <tr>
                <td>326</td>
                <td>Kamalapati</td>
                <td>Om Kamalapataye Namah</td>
                <td>Lord of Lakshmi</td>
            </tr>
            <tr>
                <td>327</td>
                <td>Govardhanadhara</td>
                <td>Om Govardhanadharaya Namah</td>
                <td>Lifter of Mount Govardhana</td>
            </tr>
            <tr>
                <td>328</td>
                <td>Matsyarupa</td>
                <td>Om Matsyarupaya Namah</td>
                <td>Incarnation as a Fish</td>
            </tr>
            <tr>
                <td>329</td>
                <td>Karunya Sagara</td>
                <td>Om Karunya Sagaraya Namah</td>
                <td>Ocean of Compassion</td>
            </tr>
            <tr>
                <td>330</td>
                <td>Kumbhakarna Prabhetta</td>
                <td>Om Kumbhakarna Prabhettre Namah</td>
                <td>Slayer of Kumbhakarna</td>
            </tr>
            <tr>
                <td>331</td>
                <td>Gopigopala Samvrta</td>
                <td>Om Gopigopala Samvrataya Namah</td>
                <td>Surrounded by Gopis and Cowherds</td>
            </tr>
            <tr>
                <td>332</td>
                <td>Mayavin</td>
                <td>Om Mayavine Namah</td>
                <td>The Illusionist</td>
            </tr>
            <tr>
                <td>333</td>
                <td>Vyapaka</td>
                <td>Om Vyapakaya Namah</td>
                <td>All-Pervading</td>
            </tr>
            <tr>
                <td>334</td>
                <td>Vyapin</td>
                <td>Om Vyapinaya Namah</td>
                <td>Omnipresent</td>
            </tr>
            <tr>
                <td>335</td>
                <td>Rainukeya Balapaha</td>
                <td>Om Rainukeya Balapahaya Namah</td>
                <td>Slayer of Parashurama’s Power</td>
            </tr>
            <tr>
                <td>336</td>
                <td>Pinaka Mathana</td>
                <td>Om Pinaka Mathanaya Namah</td>
                <td>Shatterer of Shiva's Bow</td>
            </tr>
            <tr>
                <td>337</td>
                <td>Vandya</td>
                <td>Om Vandyaya Namah</td>
                <td>Worthy of Worship</td>
            </tr>
            <tr>
                <td>338</td>
                <td>Samartha</td>
                <td>Om Samarthaya Namah</td>
                <td>All-Capable</td>
            </tr>
            <tr>
                <td>339</td>
                <td>Garudadhvaja</td>
                <td>Om Garudadhvajaya Namah</td>
                <td>One with Garuda on His Banner</td>
            </tr>
            <tr>
                <td>340</td>
                <td>Lokatrayashraya</td>
                <td>Om Lokatrayashrayaya Namah</td>
                <td>Refuge of the Three Worlds</td>
            </tr>
            <tr>
                <td>341</td>
                <td>Lokacharita</td>
                <td>Om Lokacharitaya Namah</td>
                <td>Follower of the World's Conduct</td>
            </tr>
            <tr>
                <td>342</td>
                <td>Bharatagranja</td>
                <td>Om Bharatagrajaya Namah</td>
                <td>Elder Brother of Bharata</td>
            </tr>
            <tr>
                <td>343</td>
                <td>Shridhara</td>
                <td>Om Shridharaya Namah</td>
                <td>Bearer of Prosperity</td>
            </tr>
            <tr>
                <td>344</td>
                <td>Sadgata</td>
                <td>Om Sadgataye Namah</td>
                <td>One Who Leads to Salvation</td>
            </tr>
            <tr>
                <td>345</td>
                <td>Lokasakshi</td>
                <td>Om Lokasakshine Namah</td>
                <td>Witness of the World</td>
            </tr>
            <tr>
                <td>346</td>
                <td>Narayana</td>
                <td>Om Narayanaya Namah</td>
                <td>Refuge of All Beings</td>
            </tr>
            <tr>
                <td>347</td>
                <td>Budha</td>
                <td>Om Budhaya Namah</td>
                <td>The Enlightened One</td>
            </tr>
            <tr>
                <td>348</td>
                <td>Manovegin</td>
                <td>Om Manovegine Namah</td>
                <td>Swift as Thought</td>
            </tr>
            <tr>
                <td>349</td>
                <td>Manorupin</td>
                <td>Om Manorupine Namah</td>
                <td>Embodiment of the Mind</td>
            </tr>
            <tr>
                <td>350</td>
                <td>Purna</td>
                <td>Om Purnaya Namah</td>
                <td>Complete in Himself</td>
            </tr>
            <tr>
                <td>351</td>
                <td>Purushapungava</td>
                <td>Om Purushapungavaya Namah</td>
                <td>Supreme Personality</td>
            </tr>
            <tr>
                <td>352</td>
                <td>Yadushreshta</td>
                <td>Om Yadushresthaya Namah</td>
                <td>Best of the Yadus</td>
            </tr>
            <tr>
                <td>353</td>
                <td>Yaduprataya</td>
                <td>Om Yaduprataye Namah</td>
                <td>Lord of the Yadu Dynasty</td>
            </tr>
            <tr>
                <td>354</td>
                <td>Bhutavasa</td>
                <td>Om Bhutavasaya Namah</td>
                <td>Abode of All Beings</td>
            </tr>
            <tr>
                <td>355</td>
                <td>Suvikrama</td>
                <td>Om Suvikramaya Namah</td>
                <td>Possessor of Great Valor</td>
            </tr>
            <tr>
                <td>356</td>
                <td>Tejodhara</td>
                <td>Om Tejodharaya Namah</td>
                <td>Bearer of Radiance</td>
            </tr>
            <tr>
                <td>357</td>
                <td>Dharadhara</td>
                <td>Om Dharadharaya Namah</td>
                <td>Supporter of the Earth</td>
            </tr>
            <tr>
                <td>358</td>
                <td>Chaturmurti</td>
                <td>Om Chaturmurtaye Namah</td>
                <td>Four-Formed Lord</td>
            </tr>
            <tr>
                <td>359</td>
                <td>Mahanidhi</td>
                <td>Om Mahanidhaye Namah</td>
                <td>Great Repository of Virtues</td>
            </tr>
            <tr>
                <td>360</td>
                <td>Chanura Mardana</td>
                <td>Om Chanura Mardanaya Namah</td>
                <td>Slayer of Chanura</td>
            </tr>
            <tr>
                <td>361</td>
                <td>Divya</td>
                <td>Om Divyaya Namah</td>
                <td>Divine and Radiant</td>
            </tr>
            <tr>
                <td>362</td>
                <td>Shanta</td>
                <td>Om Shantaya Namah</td>
                <td>Peaceful and Serene</td>
            </tr>
            <tr>
                <td>363</td>
                <td>Bharata Vandita</td>
                <td>Om Bharata Vanditaya Namah</td>
                <td>Worshipped by Bharata</td>
            </tr>
            <tr>
                <td>364</td>
                <td>Shabdatiga</td>
                <td>Om Shabdatigaya Namah</td>
                <td>Beyond Sound</td>
            </tr>
            <tr>
                <td>365</td>
                <td>Gabhiratma</td>
                <td>Om Gabhiratmane Namah</td>
                <td>Of Profound Spirit</td>
            </tr>
            <tr>
                <td>366</td>
                <td>Komalanga</td>
                <td>Om Komalangaya Namah</td>
                <td>Of Delicate Limbs</td>
            </tr>
            <tr>
                <td>367</td>
                <td>Prajagara</td>
                <td>Om Prajagaraya Namah</td>
                <td>Ever Vigilant</td>
            </tr>
            <tr>
                <td>368</td>
                <td>Lokagarbha</td>
                <td>Om Lokagarbhaya Namah</td>
                <td>Womb of the Universe</td>
            </tr>
            <tr>
                <td>369</td>
                <td>Shesha Shayi</td>
                <td>Om Shesha Shayine Namah</td>
                <td>Reclining on Shesha</td>
            </tr>
            <tr>
                <td>370</td>
                <td>Kshirabdhi Nilaya</td>
                <td>Om Kshirabdhi Nilayaya Namah</td>
                <td>Residing in the Ocean of Milk</td>
            </tr>
            <tr>
                <td>371</td>
                <td>Amala</td>
                <td>Om Amalaya Namah</td>
                <td>Pure and Spotless</td>
            </tr>
            <tr>
                <td>372</td>
                <td>Atmayoni</td>
                <td>Om Atmayonaye Namah</td>
                <td>Self-Born</td>
            </tr>
            <tr>
                <td>373</td>
                <td>Adinatma</td>
                <td>Om Adinatmane Namah</td>
                <td>Supreme and Independent</td>
            </tr>
            <tr>
                <td>374</td>
                <td>Sahasraksha</td>
                <td>Om Sahasrakshaya Namah</td>
                <td>Thousand-Eyed Lord</td>
            </tr>
            <tr>
                <td>375</td>
                <td>Sahasrapada</td>
                <td>Om Sahasrapadaya Namah</td>
                <td>Thousand-Footed Lord</td>
            </tr>
            <tr>
                <td>376</td>
                <td>Amritamsha</td>
                <td>Om Amritamshave Namah</td>
                <td>Possessor of Immortal Rays</td>
            </tr>
            <tr>
                <td>377</td>
                <td>Mahagarbha</td>
                <td>Om Mahagarbhaya Namah</td>
                <td>Of Great Womb</td>
            </tr>
            <tr>
                <td>378</td>
                <td>Nivritta Vishaya Spriha</td>
                <td>Om Nivritta Vishaya Sprihaya Namah</td>
                <td>Detached from Material Desires</td>
            </tr>
            <tr>
                <td>379</td>
                <td>Trikalajna</td>
                <td>Om Trikalajnaya Namah</td>
                <td>Knower of Past, Present, and Future</td>
            </tr>
            <tr>
                <td>380</td>
                <td>Muni</td>
                <td>Om Munaye Namah</td>
                <td>The Sage</td>
            </tr>
            <tr>
                <td>381</td>
                <td>Sakshi</td>
                <td>Om Sakshine Namah</td>
                <td>Witness of Everything</td>
            </tr>
            <tr>
                <td>382</td>
                <td>Vihayasagata</td>
                <td>Om Vihayasagataya Namah</td>
                <td>Traveler in the Sky</td>
            </tr>
            <tr>
                <td>383</td>
                <td>Kritin</td>
                <td>Om Kritine Namah</td>
                <td>Performer of Noble Deeds</td>
            </tr>
            <tr>
                <td>384</td>
                <td>Parjanya</td>
                <td>Om Parjanyaya Namah</td>
                <td>Like Rain Clouds</td>
            </tr>
            <tr>
                <td>385</td>
                <td>Kumuda</td>
                <td>Om Kumudaya Namah</td>
                <td>Joyful and Delightful</td>
            </tr>
            <tr>
                <td>386</td>
                <td>Bhutavasa</td>
                <td>Om Bhutavasaya Namah</td>
                <td>Abode of Beings</td>
            </tr>
            <tr>
                <td>387</td>
                <td>Kamalalochana</td>
                <td>Om Kamalalochanaya Namah</td>
                <td>Lotus-Eyed Lord</td>
            </tr>
            <tr>
                <td>388</td>
                <td>Shrivatsa Vaksha</td>
                <td>Om Shrivatsa Vakshase Namah</td>
                <td>One with the Mark of Shrivatsa</td>
            </tr>
            <tr>
                <td>389</td>
                <td>Shrivasa</td>
                <td>Om Shrivasaya Namah</td>
                <td>Abode of Goddess Lakshmi</td>
            </tr>
            <tr>
                <td>390</td>
                <td>Viraghna</td>
                <td>Om Viraghne Namah</td>
                <td>Slayer of Heroes</td>
            </tr>
            <tr>
                <td>391</td>
                <td>Lakshmanagraja</td>
                <td>Om Lakshmanagrajaya Namah</td>
                <td>Elder Brother of Lakshmana</td>
            </tr>
            <tr>
                <td>392</td>
                <td>Lokabhirama</td>
                <td>Om Lokabhiramaya Namah</td>
                <td>Beloved of All Worlds</td>
            </tr>
            <tr>
                <td>393</td>
                <td>Lokari Mardana</td>
                <td>Om Lokari Mardanaya Namah</td>
                <td>Destroyer of Worldly Enemies</td>
            </tr>
            <tr>
                <td>394</td>
                <td>Sevakapriya</td>
                <td>Om Sevakapriyaya Namah</td>
                <td>Beloved of Servants</td>
            </tr>
            <tr>
                <td>395</td>
                <td>Sanatanatama</td>
                <td>Om Sanatanatamaya Namah</td>
                <td>Most Ancient and Eternal</td>
            </tr>
            <tr>
                <td>396</td>
                <td>Meghashyama</td>
                <td>Om Meghashyamalaya Namah</td>
                <td>Dark as a Rain Cloud</td>
            </tr>
            <tr>
                <td>397</td>
                <td>Rakshasantakrit</td>
                <td>Om Rakshasantakrite Namah</td>
                <td>Destroyer of Demons</td>
            </tr>
            <tr>
                <td>398</td>
                <td>Divyayudhadhara</td>
                <td>Om Divyayudhadharaya Namah</td>
                <td>Bearer of Divine Weapons</td>
            </tr>
            <tr>
                <td>399</td>
                <td>Shrimate</td>
                <td>Om Shrimate Namah</td>
                <td>Possessor of Wealth and Prosperity</td>
            </tr>
            <tr>
                <td>400</td>
                <td>Aprameya</td>
                <td>Om Aprameyaya Namah</td>
                <td>Immeasurable and Infinite</td>
            </tr>
            <tr>
                <td>401</td>
                <td>Jitendriya</td>
                <td>Om Jitendriyaya Namah</td>
                <td>Conqueror of the Senses</td>
            </tr>
            <tr>
                <td>402</td>
                <td>Bhudeva Vandya</td>
                <td>Om Bhudeva Vandyaya Namah</td>
                <td>Worshipped by Earthly Deities</td>
            </tr>
            <tr>
                <td>403</td>
                <td>Janaka Priyakrita</td>
                <td>Om Janaka Priyakrite Namah</td>
                <td>Pleaser of King Janaka</td>
            </tr>
            <tr>
                <td>404</td>
                <td>Prapitamaha</td>
                <td>Om Prapitamahaya Namah</td>
                <td>The Great Ancestor</td>
            </tr>
            <tr>
                <td>405</td>
                <td>Uttama</td>
                <td>Om Uttamaya Namah</td>
                <td>The Supreme One</td>
            </tr>
            <tr>
                <td>406</td>
                <td>Sattvika</td>
                <td>Om Sattvikaya Namah</td>
                <td>Embodiment of Goodness</td>
            </tr>
            <tr>
                <td>407</td>
                <td>Satya</td>
                <td>Om Satyaya Namah</td>
                <td>Truth Incarnate</td>
            </tr>
            <tr>
                <td>408</td>
                <td>Satyasandha</td>
                <td>Om Satyasandhaya Namah</td>
                <td>Upholder of Promises</td>
            </tr>
            <tr>
                <td>409</td>
                <td>Trivikrama</td>
                <td>Om Trivikramaya Namah</td>
                <td>Conqueror of Three Worlds</td>
            </tr>
            <tr>
                <td>410</td>
                <td>Suvrata</td>
                <td>Om Suvrataya Namah</td>
                <td>Follower of Noble Vows</td>
            </tr>
            <tr>
                <td>411</td>
                <td>Sulabha</td>
                <td>Om Sulabhaya Namah</td>
                <td>Easy to Approach</td>
            </tr>
            <tr>
                <td>412</td>
                <td>Sukshma</td>
                <td>Om Sukshmaya Namah</td>
                <td>Subtle and Delicate</td>
            </tr>
            <tr>
                <td>413</td>
                <td>Sughosha</td>
                <td>Om Sughoshaya Namah</td>
                <td>With a Melodious Voice</td>
            </tr>
            <tr>
                <td>414</td>
                <td>Sukhada</td>
                <td>Om Sukhadaya Namah</td>
                <td>Granter of Happiness</td>
            </tr>
            <tr>
                <td>415</td>
                <td>Sudhi</td>
                <td>Om Sudhaye Namah</td>
                <td>Possessor of Great Intelligence</td>
            </tr>
            <tr>
                <td>416</td>
                <td>Damodara</td>
                <td>Om Damodaraya Namah</td>
                <td>Lord with a Rope Tied Around His Waist</td>
            </tr>
            <tr>
                <td>417</td>
                <td>Achyuta</td>
                <td>Om Achyutaya Namah</td>
                <td>Infallible and Eternal</td>
            </tr>
            <tr>
                <td>418</td>
                <td>Sharngi</td>
                <td>Om Sharngine Namah</td>
                <td>Bearer of the Bow Sharnga</td>
            </tr>
            <tr>
                <td>419</td>
                <td>Vamana</td>
                <td>Om Vamanaya Namah</td>
                <td>Incarnation as a Dwarf</td>
            </tr>
            <tr>
                <td>420</td>
                <td>Madhuradhipa</td>
                <td>Om Madhuradhipaya Namah</td>
                <td>Lord of Sweetness</td>
            </tr>
            <tr>
                <td>421</td>
                <td>Devaki Nandana</td>
                <td>Om Devaki Nandanaya Namah</td>
                <td>Son of Devaki</td>
            </tr>
            <tr>
                <td>422</td>
                <td>Shauri</td>
                <td>Om Shauraye Namah</td>
                <td>Descendant of the Shura Dynasty</td>
            </tr>
            <tr>
                <td>423</td>
                <td>Shura</td>
                <td>Om Shuraya Namah</td>
                <td>The Valiant One</td>
            </tr>
            <tr>
                <td>424</td>
                <td>Kaitabha Mardana</td>
                <td>Om Kaitabha Mardanaya Namah</td>
                <td>Slayer of Demon Kaitabha</td>
            </tr>
            <tr>
                <td>425</td>
                <td>Saptatala Prabhetta</td>
                <td>Om Saptatala Prabhettre Namah</td>
                <td>Breaker of Seven Talas</td>
            </tr>
            <tr>
                <td>426</td>
                <td>Mitravansha Pravardhana</td>
                <td>Om Mitravansha Pravardhanaya Namah</td>
                <td>Enhancer of the Solar Dynasty</td>
            </tr>
            <tr>
                <td>427</td>
                <td>Kalasvarupi</td>
                <td>Om Kalasvarupine Namah</td>
                <td>Embodiment of Time</td>
            </tr>
            <tr>
                <td>428</td>
                <td>Kalatma</td>
                <td>Om Kalatmane Namah</td>
                <td>Soul of Time</td>
            </tr>
            <tr>
                <td>429</td>
                <td>Kala</td>
                <td>Om Kalaya Namah</td>
                <td>The Eternal Time</td>
            </tr>
            <tr>
                <td>430</td>
                <td>Kalyanada</td>
                <td>Om Kalyanadaya Namah</td>
                <td>Bestower of Welfare</td>
            </tr>
            <tr>
                <td>431</td>
                <td>Kavi</td>
                <td>Om Kavaye Namah</td>
                <td>The Poet</td>
            </tr>
            <tr>
                <td>432</td>
                <td>Samvatsara</td>
                <td>Om Samvatsaraya Namah</td>
                <td>Embodiment of the Year</td>
            </tr>
            <tr>
                <td>433</td>
                <td>Ritu</td>
                <td>Om Ritave Namah</td>
                <td>Embodiment of Seasons</td>
            </tr>
            <tr>
                <td>434</td>
                <td>Paksha</td>
                <td>Om Pakshaya Namah</td>
                <td>Embodiment of Lunar Phases</td>
            </tr>
            <tr>
                <td>435</td>
                <td>Ayana</td>
                <td>Om Ayanaya Namah</td>
                <td>Embodiment of Solstices</td>
            </tr>
            <tr>
                <td>436</td>
                <td>Divasa</td>
                <td>Om Divasaya Namah</td>
                <td>Embodiment of the Day</td>
            </tr>
            <tr>
                <td>437</td>
                <td>Yuga</td>
                <td>Om Yugaya Namah</td>
                <td>Embodiment of Ages</td>
            </tr>
            <tr>
                <td>438</td>
                <td>Stavya</td>
                <td>Om Stavyaya Namah</td>
                <td>Worthy of Praise</td>
            </tr>
            <tr>
                <td>439</td>
                <td>Vivikta</td>
                <td>Om Viviktaya Namah</td>
                <td>Unattached</td>
            </tr>
            <tr>
                <td>440</td>
                <td>Nirlepa</td>
                <td>Om Nirlepaya Namah</td>
                <td>Without Attachments</td>
            </tr>
            <tr>
                <td>441</td>
                <td>Sarvavyapi</td>
                <td>Om Sarvavyapinaya Namah</td>
                <td>All-Pervading</td>
            </tr>
            <tr>
                <td>442</td>
                <td>Nirakula</td>
                <td>Om Nirakulaya Namah</td>
                <td>Free from Agitation</td>
            </tr>
            <tr>
                <td>443</td>
                <td>Anadi Nidhana</td>
                <td>Om Anadi Nidhanaya Namah</td>
                <td>Without Beginning or End</td>
            </tr>
            <tr>
                <td>444</td>
                <td>Sarvalokapujya</td>
                <td>Om Sarvalokapujyaya Namah</td>
                <td>Worshipped by All Worlds</td>
            </tr>
            <tr>
                <td>445</td>
                <td>Niramaya</td>
                <td>Om Niramayaya Namah</td>
                <td>Free from Illness</td>
            </tr>
            <tr>
                <td>446</td>
                <td>Rasa</td>
                <td>Om Rasaya Namah</td>
                <td>Essence of All</td>
            </tr>
            <tr>
                <td>447</td>
                <td>Rasajna</td>
                <td>Om Rasajnaya Namah</td>
                <td>Knower of Essence</td>
            </tr>
            <tr>
                <td>448</td>
                <td>Sarajna</td>
                <td>Om Sarajnaya Namah</td>
                <td>Knower of the Core</td>
            </tr>
            <tr>
                <td>449</td>
                <td>Lokasara</td>
                <td>Om Lokasaraya Namah</td>
                <td>Essence of the Universe</td>
            </tr>
            <tr>
                <td>450</td>
                <td>Rasatmaka</td>
                <td>Om Rasatmakaya Namah</td>
                <td>Essence of Bliss</td>
            </tr>
            <tr>
                <td>451</td>
                <td>Sarvaduḥkhātiga</td>
                <td>Om Sarvaduhkhatigaya Namah</td>
                <td>Remover of All Sorrows</td>
            </tr>
            <tr>
                <td>452</td>
                <td>Vidyarashi</td>
                <td>Om Vidyarashaye Namah</td>
                <td>Treasury of Knowledge</td>
            </tr>
            <tr>
                <td>453</td>
                <td>Paramagocara</td>
                <td>Om Paramagocaraya Namah</td>
                <td>Beyond Perception</td>
            </tr>
            <tr>
                <td>454</td>
                <td>Shesha</td>
                <td>Om Sheshaya Namah</td>
                <td>Remainder or Residual Being</td>
            </tr>
            <tr>
                <td>455</td>
                <td>Vishesha</td>
                <td>Om Visheshaya Namah</td>
                <td>Distinct and Unique</td>
            </tr>
            <tr>
                <td>456</td>
                <td>Vigatakalmasa</td>
                <td>Om Vigatakalmasaya Namah</td>
                <td>Free from Impurity</td>
            </tr>
            <tr>
                <td>457</td>
                <td>Raghunayaka</td>
                <td>Om Raghunayakaya Namah</td>
                <td>Leader of the Raghu Dynasty</td>
            </tr>
            <tr>
                <td>458</td>
                <td>Varnashreshta</td>
                <td>Om Varnashresthaya Namah</td>
                <td>Supreme Among the Righteous</td>
            </tr>
            <tr>
              <td>459</td>
                <td>Varnavahya</td>
                <td>Om Varnavahyaya Namah</td>
                <td>Beyond Description</td>
            </tr>
            <tr>
                <td>460</td>
                <td>Varnya</td>
                <td>Om Varnyaya Namah</td>
                <td>Worthy of Worship</td>
            </tr>
            <tr>
                <td>461</td>
                <td>Varnya Gunojjvala</td>
                <td>Om Varnya Gunojjvalya Namah</td>
                <td>Radiant with Praiseworthy Qualities</td>
            </tr>
            <tr>
                <td>462</td>
                <td>Karmasakshi</td>
                <td>Om Karmasakshine Namah</td>
                <td>Witness of Actions</td>
            </tr>
            <tr>
                <td>463</td>
                <td>Amarashreshta</td>
                <td>Om Amarashresthaya Namah</td>
                <td>Supreme Among the Immortals</td>
            </tr>
            <tr>
                <td>464</td>
                <td>Devadeva</td>
                <td>Om Devadevaya Namah</td>
                <td>God of Gods</td>
            </tr>
            <tr>
                <td>465</td>
                <td>Sukhaprada</td>
                <td>Om Sukhapradaya Namah</td>
                <td>Granter of Happiness</td>
            </tr>
            <tr>
                <td>466</td>
                <td>Devadhideva</td>
                <td>Om Devadhidevaya Namah</td>
                <td>Supreme Lord of Gods</td>
            </tr>
            <tr>
                <td>467</td>
                <td>Devarshi</td>
                <td>Om Devarshaye Namah</td>
                <td>Divine Sage</td>
            </tr>
            <tr>
                <td>468</td>
                <td>Devasuranamaskrita</td>
                <td>Om Devasuranamaskritaya Namah</td>
                <td>Revered by Gods and Demons</td>
            </tr>
            <tr>
                <td>469</td>
                <td>Sarvadevamaya</td>
                <td>Om Sarvadevamayaya Namah</td>
                <td>Embodiment of All Gods</td>
            </tr>
            <tr>
                <td>470</td>
                <td>Chakrin</td>
                <td>Om Chakrine Namah</td>
                <td>Bearer of the Discus</td>
            </tr>
            <tr>
              bath<td>471</td>
                <td>Sharngapani</td>
                <td>Om Sharngapanaye Namah</td>
                <td>Bearer of the Bow Sharnga</td>
            </tr>
            <tr>
                <td>472</td>
                <td>Raghuttama</td>
                <td>Om Raghuttamaya Namah</td>
                <td>Best Among the Raghu Dynasty</td>
            </tr>
            <tr>
                <td>473</td>
                <td>Manasa</td>
                <td>Om Manase Namah</td>
                <td>Lord of the Mind</td>
            </tr>
            <tr>
                <td>474</td>
                <td>Buddhi</td>
                <td>Om Buddhaye Namah</td>
                <td>Embodiment of Wisdom</td>
            </tr>
            <tr>
                <td>475</td>
                <td>Ahamkara</td>
                <td>Om Ahamkaraya Namah</td>
                <td>Embodiment of Ego</td>
            </tr>
            <tr>
                <td>476</td>
                <td>Prakriti</td>
                <td>Om Prakritaye Namah</td>
                <td>The Material Cause</td>
            </tr>
            <tr>
                <td>477</td>
                <td>Purusha</td>
                <td>Om Purushaya Namah</td>
                <td>Supreme Person</td>
            </tr>
            <tr>
                <td>478</td>
                <td>Avyaya</td>
                <td>Om Avyayaya Namah</td>
                <td>Imperishable</td>
            </tr>
            <tr>
                <td>479</td>
                <td>Ahalyapavana</td>
                <td>Om Ahalyapavanaya Namah</td>
                <td>Purifier of Ahalya</td>
            </tr>
            <tr>
                <td>480</td>
                <td>Swami</td>
                <td>Om Swamine Namah</td>
                <td>The Master</td>
            </tr>
            <tr>
                <td>481</td>
                <td>Pitribhakta</td>
                <td>Om Pitribhaktaya Namah</td>
                <td>Devoted to His Parents</td>
            </tr>
            <tr>
                <td>482</td>
                <td>Varaprada</td>
                <td>Om Varapradaya Namah</td>
                <td>Granter of Boons</td>
            </tr>
            <tr>
                <td>483</td>
                <td>Nyaya</td>
                <td>Om Nyayaya Namah</td>
                <td>Embodiment of Justice</td>
            </tr>
            <tr>
                <td>484</td>
                <td>Nyayin</td>
                <td>Om Nyayine Namah</td>
                <td>Just and Fair</td>
            </tr>
            <tr>
                <td>485</td>
                <td>Nayina</td>
                <td>Om Nayinaya Namah</td>
                <td>Leader of Explorer</td>
            </tr>
            <tr>
                <td>486</td>
                <td>Shrimate</td>
                <td>Om Shrimate Namah</td>
                <td>Possessor of Wealth and Prosperity</td>
            </tr>
            <tr>
                <td>487</td>
                <td>Naya</td>
                <td>Om Nayaya Namah</td>
                <td>Embodiment of Guidance</td>
            </tr>
            <tr>
                <td>488</td>
                <td>Nagadhara</td>
                <td>Om Nagadharaya Namah</td>
                <td>Supporter of the Mountains</td>
            </tr>
            <tr>
                <td>489</td>
                <td>Dhruva</td>
                <td>Om Dhruvaya Namah</td>
                <td>Steady and Eternal</td>
            </tr>
            <tr>
                <td>490</td>
                <td>Lakshmivishvambhara Bhartra</td>
                <td>Om Lakshmivishvambhara Bhartraya Namah</td>
                <td>Protector of Goddess Lakshmi and the World</td>
            </tr>
            <tr>
                <td>491</td>
                <td>Devendra</td>
                <td>Om Devendraya Namah</td>
                <td>King of the Gods</td>
            </tr>
            <tr>
                <td>492</td>
                <td>Balimardana</td>
                <td>Om Balimardanaya Namah</td>
                <td>Slayer of Bali</td>
            </tr>
            <tr>
                <td>493</td>
                <td>Vanarimadhan</td>
                <td>Om Vanarimardanaya Namah</td>
                <td>Slayer of Monkeys</td>
            </tr>
            <tr>
                <td>494</td>
                <td>Yajvan</td>
                <td>Om Yajvane Namah</td>
                <td>Performer of Sacrifices</td>
            </tr>
            <tr>
                <td>495</td>
                <td>Anuttama</td>
                <td>Om Anuttamaya Namah</td>
                <td>Incomparable</td>
            </tr>
            <tr>
                <td>496</td>
                <td>Munisevita</td>
                <td>Om Munisevitaya Namah</td>
                <td>Revered by Sages</td>
            </tr>
            <tr>
                <td>497</td>
                <td>Devagranaya</td>
                <td>Om Devagranaya Namah</td>
                <td>Foremost Among the Gods</td>
            </tr>
            <tr>
                <td>498</td>
                <td>Shiva Dhyanatatpara</td>
                <td>Om Shiva Dhyanatatparaya Namah</td>
                <td>Devoted to Meditation on Shiva</td>
            </tr>
            <tr>
                <td>499</td>
                <td>Parama</td>
                <td>Om Paramaya Namah</td>
                <td>Supreme Being</td>
            </tr>
            <tr>
                <td>500</td>
                <td>Parasmai</td>
                <td>Om Parasmai Namah</td>
                <td>The Transcendent</td>
            </tr>
            <tr>
                <td>501</td>
                <td>Samageya</td>
                <td>Om Samageyaya Namah</td>
                <td>Worthy of Praise in Sama Chant</td>
            </tr>
            <tr>
                <td>502</td>
                <td>Priya</td>
                <td>Om Priyaya Namah</td>
                <td>Beloved</td>
            </tr>
            <tr>
                <td>503</td>
                <td>Akrura</td>
                <td>Om Akruraya Namah</td>
                <td>One Who Is Kind and Gentle</td>
            </tr>
            <tr>
                <td>504</td>
                <td>Punyakirti</td>
                <td>Om Punyakirtaye Namah</td>
                <td>Of Sacred Fame</td>
            </tr>
            <tr>
                <td>505</td>
                <td>Sulochana</td>
                <td>Om Sulochanaya Namah</td>
                <td>Of Beautiful Eyes</td>
            </tr>
            <tr>
                <td>506</td>
                <td>Punya</td>
                <td>Om Punyaya Namah</td>
                <td>Sacred and Virtuous</td>
            </tr>
            <tr>
                <td>507</td>
                <td>Punyadhika</td>
                <td>Om Punyadhikaya Namah</td>
                <td>Exceedingly Virtuous</td>
            </tr>
            <tr>
                <td>508</td>
                <td>Purvasma</td>
                <td>Om Purvasma Namah</td>
                <td>The First Cause</td>
            </tr>
            <tr>
                <td>509</td>
                <td>Purna</td>
                <td>Om Purnaya Namah</td>
                <td>Complete and Fulfilled</td>
            </tr>
            <tr>
                <td>510</td>
                <td>Purayitra</td>
                <td>Om Purayitre Namah</td>
                <td>Fulfiller of Aspirations</td>
            </tr>
            <tr>
                <td>511</td>
                <td>Rava</td>
                <td>Om Ravaya Namah</td>
                <td>Resonance</td>
            </tr>
            <tr>
                <td>512</td>
                <td>Jatila</td>
                <td>Om Jatilaya Namah</td>
                <td>With Matted Hair</td>
            </tr>
            <tr>
                <td>513</td>
                <td>Kalmasadhvanta Prabhanjana Vibhavasu</td>
                <td>Om Kalmasadhvanta Prabhanjana Vibhavasave Namah</td>
                <td>Destroyer of Sinful Darkness</td>
            </tr>
            <tr>
                <td>514</td>
                <td>Avyakta Lakshana</td>
                <td>Om Avyakta Lakshanaya Namah</td>
                <td>With Unmanifest Traits</td>
            </tr>
            <tr>
                <td>515</td>
                <td>Avyakta</td>
                <td>Om Avyaktaya Namah</td>
                <td>The Unmanifest</td>
            </tr>
            <tr>
                <td>516</td>
                <td>Dasasya Dvipakesari</td>
                <td>Om Dasasya Dvipakesarine Namah</td>
                <td>The Lion to Ravana, the Ten-Headed</td>
            </tr>
            <tr>
                <td>517</td>
                <td>Kalanidhi</td>
                <td>Om Kalanidhaye Namah</td>
                <td>Repository of Arts and Sciences</td>
            </tr>
            <tr>
                <td>518</td>
                <td>Kalanatha</td>
                <td>Om Kalanathaya Namah</td>
                <td>Lord of Arts</td>
            </tr>
            <tr>
                <td>519</td>
                <td>Kamalananda Vardhana</td>
                <td>Om Kamalananda Vardhanaya Namah</td>
                <td>Enhancer of Lakshmi's Joy</td>
            </tr>
            <tr>
                <td>520</td>
                <td>Jayi</td>
                <td>Om Jayi Namah</td>
                <td>The Victorious</td>
            </tr>
            <tr>
                <td>521</td>
                <td>Jitarati</td>
                <td>Om Jitarataye Namah</td>
                <td>Conqueror of Foes</td>
            </tr>
            <tr>
                <td>522</td>
                <td>Sarvada</td>
                <td>Om Sarvadaya Namah</td>
                <td>Ever Present</td>
            </tr>
            <tr>
                <td>523</td>
                <td>Shamana</td>
                <td>Om Shamanaya Namah</td>
                <td>The Pacifier</td>
            </tr>
            <tr>
                <td>524</td>
                <td>Bhavabhanjana</td>
                <td>Om Bhavabhanjanaya Namah</td>
                <td>Destroyer of Worldly Bondage</td>
            </tr>
            <tr>
                <td>525</td>
                <td>Alankarisna</td>
                <td>Om Alankarisnaya Namah</td>
                <td>Adorned with Ornaments</td>
            </tr>
            <tr>
                <td>526</td>
                <td>Achala</td>
                <td>Om Achalaya Namah</td>
                <td>Immovable and Steady</td>
            </tr>
            <tr>
                <td>527</td>
                <td>Rochisna</td>
                <td>Om Rochisnave Namah</td>
                <td>Shining Brightly</td>
            </tr>
            <tr>
                <td>528</td>
                <td>Vikramottama</td>
                <td>Om Vikramottamaya Namah</td>
                <td>Of Supreme Valor</td>
            </tr>
            <tr>
                <td>529</td>
                <td>Asha</td>
                <td>Om Ashave Namah</td>
                <td>Fulfillment and Hope</td>
            </tr>
            <tr>
                <td>530</td>
                <td>Shabdapati</td>
                <td>Om Shabdapataye Namah</td>
                <td>Lord of Sound</td>
            </tr>
            <tr>
                <td>531</td>
                <td>Shabdagochara</td>
                <td>Om Shabdagocharaya Namah</td>
                <td>Comprehensible through Sound</td>
            </tr>
            <tr>
                <td>532</td>
                <td>Ranjana</td>
                <td>Om Ranjanaya Namah</td>
                <td>The Pleasing One</td>
            </tr>
            <tr>
                <td>533</td>
                <td>Raghava</td>
                <td>Om Raghavaya Namah</td>
                <td>Descendant of the Raghu Dynasty</td>
            </tr>
            <tr>
                <td>534</td>
                <td>Nishabda</td>
                <td>Om Nishabdaya Namah</td>
                <td>Beyond Sound</td>
            </tr>
            <tr>
                <td>535</td>
                <td>Pranava</td>
                <td>Om Pranavaya Namah</td>
                <td>Sacred Syllable Om</td>
            </tr>
            <tr>
                <td>536</td>
                <td>Malin</td>
                <td>Om Maline Namah</td>
                <td>Adorned with Garlands</td>
            </tr>
            <tr>
                <td>537</td>
                <td>Sthula</td>
                <td>Om Sthulaya Namah</td>
                <td>The Gross Manifestation</td>
            </tr>
            <tr>
                <td>538</td>
                <td>Sukshma</td>
                <td>Om Sukshmaya Namah</td>
                <td>The Subtle Manifestation</td>
            </tr>
            <tr>
                <td>539</td>
                <td>Vilakshana</td>
                <td>Om Vilakshanaya Namah</td>
                <td>Distinguished and Unique</td>
            </tr>
            <tr>
                <td>540</td>
                <td>Atmayoni</td>
                <td>Om Atmayonaye Namah</td>
                <td>Self-Born</td>
            </tr>
            <tr>
                <td>541</td>
                <td>Ayoni</td>
                <td>Om Ayonaye Namah</td>
                <td>Without a Womb</td>
            </tr>
            <tr>
                <td>542</td>
                <td>Saptajihva</td>
                <td>Om Saptajihvaya Namah</td>
                <td>Having Seven Tongues (as Fire)</td>
            </tr>
            <tr>
                <td>543</td>
                <td>Sahasrapada</td>
                <td>Om Sahasrapadaya Namah</td>
                <td>Thousand-Footed Lord</td>
            </tr>
            <tr>
                <td>544</td>
                <td>Sanatanatama</td>
                <td>Om Sanatanatamaya Namah</td>
                <td>The Most Eternal</td>
            </tr>
            <tr>
                <td>545</td>
                <td>Sragvi</td>
                <td>Om Sragvine Namah</td>
                <td>Adorned with Garlands</td>
            </tr>
            <tr>
                <td>546</td>
                <td>Peshala</td>
                <td>Om Peshalaya Namah</td>
                <td>Of Graceful Form</td>
            </tr>
            <tr>
                <td>547</td>
                <td>Javinam Vara</td>
                <td>Om Javinam Varaya Namah</td>
                <td>Best Among the Swift</td>
            </tr>
            <tr>
                <td>548</td>
                <td>Shaktimat</td>
                <td>Om Shaktimate Namah</td>
                <td>Possessor of Power</td>
            </tr>
            <tr>
                <td>549</td>
                <td>Shankhabhrita</td>
                <td>Om Shankhabhrite Namah</td>
                <td>Bearer of the Conch</td>
            </tr>
            <tr>
                <td>550</td>
                <td>Natha</td>
                <td>Om Nathaya Namah</td>
                <td>Lord and Protector</td>
            </tr>
            <tr>
                <td>551</td>
                <td>Gada Padma Rathangabhrita</td>
                <td>Om Gada Padma Rathangabhrite Namah</td>
                <td>Bearer of Mace, Lotus, and Discus</td>
            </tr>
            <tr>
                <td>552</td>
                <td>Niriiha</td>
                <td>Om Niriihaya Namah</td>
                <td>Free from Desire</td>
            </tr>
            <tr>
                <td>553</td>
                <td>Nirvikalpa</td>
                <td>Om Nirvikalpaya Namah</td>
                <td>Without Confusion</td>
            </tr>
            <tr>
                <td>554</td>
                <td>Chidrupa</td>
                <td>Om Chidrupaya Namah</td>
                <td>Of the Nature of Pure Consciousness</td>
            </tr>
            <tr>
                <td>555</td>
                <td>Vitasadhvasa</td>
                <td>Om Vitasadhvasaya Namah</td>
                <td>Free from Fear</td>
            </tr>
            <tr>
                <td>556</td>
                <td>Shatanana</td>
                <td>Om Shatananaya Namah</td>
                <td>Hundred-Faced Lord</td>
            </tr>
            <tr>
                <td>557</td>
                <td>Sahasraksha</td>
                <td>Om Sahasrakshaya Namah</td>
                <td>Thousand-Eyed Lord</td>
            </tr>
            <tr>
                <td>558</td>
                <td>Shatamurti</td>
                <td>Om Shatamurtaye Namah</td>
                <td>Having a Hundred Forms</td>
            </tr>
            <tr>
                <td>559</td>
                <td>Ghanaprabha</td>
                <td>Om Ghanaprabhaya Namah</td>
                <td>Of Dense Radiance</td>
            </tr>
            <tr>
                <td>560</td>
                <td>Hrit Pundarika Shayana</td>
                <td>Om Hrit Pundarika Shayanaya Namah</td>
                <td>Dweller in the Lotus of the Heart</td>
            </tr>
            <tr>
                <td>561</td>
                <td>Kathina</td>
                <td>Om Kathinaya Namah</td>
                <td>Firm and Strong</td>
            </tr>
            <tr>
                <td>562</td>
                <td>Drava</td>
                <td>Om Dravaya Namah</td>
                <td>Melting with Compassion</td>
            </tr>
            <tr>
                <td>563</td>
                <td>Ugra</td>
                <td>Om Ugraya Namah</td>
                <td>Fierce and Intense</td>
            </tr>
            <tr>
                <td>564</td>
                <td>Grahapati</td>
                <td>Om Grahapataye Namah</td>
                <td>Lord of the Planets</td>
            </tr>
            <tr>
                <td>565</td>
                <td>Shrimat</td>
                <td>Om Shrimate Namah</td>
                <td>Possessor of Wealth and Prosperity</td>
            </tr>
            <tr>
                <td>566</td>
                <td>Samartha</td>
                <td>Om Samarthaya Namah</td>
                <td>Capable and Competent</td>
            </tr>
            <tr>
                <td>567</td>
                <td>Anarthanashana</td>
                <td>Om Anarthanashanaya Namah</td>
                <td>Destroyer of Misfortunes</td>
            </tr>
            <tr>
                <td>568</td>
                <td>Adharma Shatru</td>
                <td>Om Adharma Shatrave Namah</td>
                <td>Enemy of Unrighteousness</td>
            </tr>
            <tr>
                <td>569</td>
                <td>Rakshoghna</td>
                <td>Om Rakshoghnaya Namah</td>
                <td>Slayer of Demons</td>
            </tr>
            <tr>
                <td>570</td>
                <td>Puruhuta</td>
                <td>Om Puruhutaya Namah</td>
                <td>Revered by Many</td>
            </tr>
            <tr>
                <td>571</td>
                <td>Purushtuta</td>
                <td>Om Purushtutaya Namah</td>
                <td>Praised by All</td>
            </tr>
            <tr>
                <td>572</td>
                <td>Brahmagarbha</td>
                <td>Om Brahmagarbhaya Namah</td>
                <td>Womb of the Vedas</td>
            </tr>
            <tr>
                <td>573</td>
                <td>Brihadgarbha</td>
                <td>Om Brihadgarbhaya Namah</td>
                <td>Possessor of the Vast Womb</td>
            </tr>
            <tr>
                <td>574</td>
                <td>Dharmadhena</td>
                <td>Om Dharmadhena Namah</td>
                <td>Abode of Dharma</td>
            </tr>
            <tr>
                <td>575</td>
                <td>Dhanagama</td>
                <td>Om Dhanagamaya Namah</td>
                <td>Source of Wealth</td>
            </tr>
            <tr>
                <td>576</td>
                <td>Hiranyagarbha</td>
                <td>Om Hiranyagarbhaya Namah</td>
                <td>Golden-Wombed Creator</td>
            </tr>
            <tr>
                <td>577</td>
                <td>Jyotishmat</td>
                <td>Om Jyotishmate Namah</td>
                <td>Radiant and Lustrous</td>
            </tr>
            <tr>
                <td>578</td>
                <td>Sulalata</td>
                <td>Om Sulalataya Namah</td>
                <td>With a Beautiful Forehead</td>
            </tr>
            <tr>
                <td>579</td>
                <td>Suvikrama</td>
                <td>Om Suvikramaya Namah</td>
                <td>Possessor of Great Valor</td>
            </tr>
            <tr>
                <td>580</td>
                <td>Shiva Pujarata</td>
                <td>Om Shiva Pujarataya Namah</td>
                <td>Devoted to Worshipping Shiva</td>
            </tr>
            <tr>
                <td>581</td>
                <td>Shrimat</td>
                <td>Om Shrimate Namah</td>
                <td>Prosperous and Auspicious</td>
            </tr>
            <tr>
                <td>582</td>
                <td>Bhavani Priyakrita</td>
                <td>Om Bhavani Priyakrite Namah</td>
                <td>Beloved of Goddess Bhavani</td>
            </tr>
            <tr>
                <td>583</td>
                <td>Vashi</td>
                <td>Om Vashine Namah</td>
                <td>The Controller</td>
            </tr>
            <tr>
                <td>584</td>
                <td>Nara</td>
                <td>Om Naraya Namah</td>
                <td>The Primeval Man</td>
            </tr>
            <tr>
                <td>585</td>
                <td>Narayana</td>
                <td>Om Narayanaya Namah</td>
                <td>Refuge of All Beings</td>
            </tr>
            <tr>
                <td>586</td>
                <td>Shyama</td>
                <td>Om Shyamaya Namah</td>
                <td>Dark-Complexioned</td>
            </tr>
            <tr>
                <td>587</td>
                <td>Kapardin</td>
                <td>Om Kapardine Namah</td>
                <td>Wearing Matted Hair</td>
            </tr>
                    <tr>
                <td>588</td>
                <td>Nilalohita</td>
                <td>Om Nilalohitaya Namah</td>
                <td>Blue and Red-Hued Lord</td>
            </tr>
            <tr>
                <td>589</td>
                <td>Rudra</td>
                <td>Om Rudraya Namah</td>
                <td>The Fierce Lord</td>
            </tr>
            <tr>
                <td>590</td>
                <td>Pashupati</td>
                <td>Om Pashupataye Namah</td>
                <td>Lord of Beasts</td>
            </tr>
            <tr>
                <td>591</td>
                <td>Sthanu</td>
                <td>Om Sthanave Namah</td>
                <td>The Immovable</td>
            </tr>
            <tr>
                <td>592</td>
                <td>Vishvamitra</td>
                <td>Om Vishvamitraya Namah</td>
                <td>Friend of the Universe</td>
            </tr>
            <tr>
                <td>593</td>
                <td>Dvijeshvara</td>
                <td>Om Dvijeshvaraya Namah</td>
                <td>Lord of the Twice-Born (Brahmins)</td>
            </tr>
            <tr>
                <td>594</td>
                <td>Matamaha</td>
                <td>Om Matamahaya Namah</td>
                <td>Grandfather</td>
            </tr>
            <tr>
                <td>595</td>
                <td>Matarishva</td>
                <td>Om Matarishvane Namah</td>
                <td>Swift as the Wind</td>
            </tr>
            <tr>
                <td>596</td>
                <td>Virincha</td>
                <td>Om Virinchaya Namah</td>
                <td>Creator of the Universe</td>
            </tr>
            <tr>
                <td>597</td>
                <td>Vistarashrava</td>
                <td>Om Vistarashravase Namah</td>
                <td>Of Extensive Fame</td>
            </tr>
            <tr>
                <td>598</td>
                <td>Sarvabhutanamakshobhya</td>
                <td>Om Sarvabhutanamakshobhyaya Namah</td>
                <td>Unshakable by Any Being</td>
            </tr>
            <tr>
                <td>599</td>
                <td>Chanda</td>
                <td>Om Chandaya Namah</td>
                <td>Fierce and Angry</td>
            </tr>
            <tr>
                <td>600</td>
                <td>Satyaparakrama</td>
                <td>Om Satyaparakramaya Namah</td>
                <td>Of True Valor</td>
            </tr>
            <tr>
                <td>601</td>
                <td>Valakhilya</td>
                <td>Om Valakhilyaya Namah</td>
                <td>Accompanied by Sages Called Valakhilyas</td>
            </tr>
            <tr>
                <td>602</td>
                <td>Mahakalpa</td>
                <td>Om Mahakalpaya Namah</td>
                <td>Of Great Cycle of Time</td>
            </tr>
            <tr>
                <td>603</td>
                <td>Kalpavriksha</td>
                <td>Om Kalpavrikshaya Namah</td>
                <td>The Wish-Granting Tree</td>
            </tr>
            <tr>
                <td>604</td>
                <td>Kaladhara</td>
                <td>Om Kaladharaya Namah</td>
                <td>Bearer of Time</td>
            </tr>
            <tr>
                <td>605</td>
                <td>Nidagha</td>
                <td>Om Nidaghaya Namah</td>
                <td>Intense Heat</td>
            </tr>
            <tr>
                <td>606</td>
                <td>Tapana</td>
                <td>Om Tapanaya Namah</td>
                <td>The Radiant One</td>
            </tr>
            <tr>
                <td>607</td>
                <td>Amogha</td>
                <td>Om Amoghaya Namah</td>
                <td>Ever Fruitful</td>
            </tr>
            <tr>
                <td>608</td>
                <td>Shlakshna</td>
                <td>Om Shlakshnaya Namah</td>
                <td>Polished and Smooth</td>
            </tr>
            <tr>
                <td>609</td>
                <td>Parabala Apaharita</td>
                <td>Om Parabala Apaharitaya Namah</td>
                <td>Stealer of the Opponent’s Strength</td>
            </tr>
                    <tr>
                <td>610</td>
                <td>Kabandhamathana</td>
                <td>Om Kabandhamathanaya Namah</td>
                <td>Slayer of Kabandha</td>
            </tr>
            <tr>
                <td>611</td>
                <td>Divya</td>
                <td>Om Divyaya Namah</td>
                <td>Divine</td>
            </tr>
            <tr>
                <td>612</td>
                <td>Kambugriva</td>
                <td>Om Kambugrivaya Namah</td>
                <td>Having a Neck Like a Conch</td>
            </tr>
            <tr>
                <td>613</td>
                <td>Shivapriya</td>
                <td>Om Shivapriyaya Namah</td>
                <td>Beloved of Lord Shiva</td>
            </tr>
            <tr>
                <td>614</td>
                <td>Shankha</td>
                <td>Om Shankhaya Namah</td>
                <td>The Auspicious Conch</td>
            </tr>
            <tr>
                <td>615</td>
                <td>Anila</td>
                <td>Om Anilaya Namah</td>
                <td>The Air</td>
            </tr>
            <tr>
                <td>616</td>
                <td>Sunishpanna</td>
                <td>Om Sunishpannaya Namah</td>
                <td>Perfectly Accomplished</td>
            </tr>
            <tr>
                <td>617</td>
                <td>Sulabha</td>
                <td>Om Sulabhaya Namah</td>
                <td>Easily Attainable</td>
            </tr>
            <tr>
                <td>618</td>
                <td>Shishiratmaka</td>
                <td>Om Shishiratmakaya Namah</td>
                <td>Of Cooling Nature</td>
            </tr>
            <tr>
                <td>619</td>
                <td>Asamsrishta</td>
                <td>Om Asamsrishtaya Namah</td>
                <td>Untouched by Worldly Affliction</td>
            </tr>
            <tr>
                <td>620</td>
                <td>Atithi</td>
                <td>Om Atithaye Namah</td>
                <td>The Eternal Guest</td>
            </tr>
            <tr>
                <td>621</td>
                <td>Shura</td>
                <td>Om Shuraya Namah</td>
                <td>The Heroic</td>
            </tr>
            <tr>
                <td>622</td>
                <td>Pramathin</td>
                <td>Om Pramathine Namah</td>
                <td>The Destroyer</td>
            </tr>
            <tr>
                <td>623</td>
                <td>Papanasakrita</td>
                <td>Om Papanasakrite Namah</td>
                <td>Destroyer of Sins</td>
            </tr>
            <tr>
                <td>624</td>
                <td>Vasushrava</td>
                <td>Om Vasushravase Namah</td>
                <td>The Wealth-Holder</td>
            </tr>
            <tr>
                <td>625</td>
                <td>Kavyavaha</td>
                <td>Om Kavyavahaya Namah</td>
                <td>Carrier of Sacrificial Offerings</td>
            </tr>
            <tr>
                <td>626</td>
                <td>Pratapta</td>
                <td>Om Prataptaya Namah</td>
                <td>Of Fiery Power</td>
            </tr>
            <tr>
                <td>627</td>
                <td>Vishvabhojana</td>
                <td>Om Vishvabhojanaya Namah</td>
                <td>The Sustainer of the Universe</td>
            </tr>
            <tr>
                <td>628</td>
                <td>Rama</td>
                <td>Om Ramaya Namah</td>
                <td>The Charming Lord</td>
            </tr>
            <tr>
                <td>629</td>
                <td>Nilotpala Shyama</td>
                <td>Om Nilotpala Shyamaya Namah</td>
                <td>Dark as a Blue Lotus</td>
            </tr>
            <tr>
                <td>630</td>
                <td>Jnana Skandha</td>
                <td>Om Jnana Skandhaya Namah</td>
                <td>Repository of Knowledge</td>
            </tr>
            <tr>
                <td>631</td>
                <td>Mahadyuti</td>
                <td>Om Mahadyutaye Namah</td>
                <td>Of Great Brilliance</td>
            </tr>
            <tr>
                <td>632</td>
                <td>Pavitrapada</td>
                <td>Om Pavitrapadaya Namah</td>
                <td>Of Sacred Feet</td>
            </tr>
            <tr>
                <td>633</td>
                <td>Paparaya</td>
                <td>Om Paparaye Namah</td>
                <td>The Destroyer of Sins</td>
            </tr>
            <tr>
                <td>634</td>
                <td>Manipura</td>
                <td>Om Manipuraya Namah</td>
                <td>Dweller of the Navel Region</td>
            </tr>
            <tr>
                <td>635</td>
                <td>Nabhogata</td>
                <td>Om Nabhogataya Namah</td>
                <td>Moving Through Space</td>
            </tr>
            <tr>
                <td>636</td>
                <td>Uttarana</td>
                <td>Om Uttaranaya Namah</td>
                <td>Deliverer from Suffering</td>
            </tr>
            <tr>
                <td>637</td>
                <td>Dushkritighna</td>
                <td>Om Dushkritighne Namah</td>
                <td>Destroyer of Evil Actions</td>
            </tr>
            <tr>
                <td>638</td>
                <td>Durdarsha</td>
                <td>Om Durdarshaya Namah</td>
                <td>Invincible</td>
            </tr>
            <tr>
                <td>639</td>
                <td>Dussaha</td>
                <td>Om Dussahaya Namah</td>
                <td>The Unbearable</td>
            </tr>
            <tr>
                <td>640</td>
                <td>Abhaya</td>
                <td>Om Abhayaya Namah</td>
                <td>The Fearless</td>
            </tr>
            <tr>
                <td>641</td>
                <td>Amritesha</td>
                <td>Om Amritesaya Namah</td>
                <td>Lord of Immortality</td>
            </tr>
            <tr>
                <td>642</td>
                <td>Amritavapusha</td>
                <td>Om Amritavapushaya Namah</td>
                <td>Of Immortal Form</td>
            </tr>
            <tr>
                <td>643</td>
                <td>Dharmi</td>
                <td>Om Dharmine Namah</td>
                <td>Upholder of Dharma</td>
            </tr>
            <tr>
                <td>644</td>
                <td>Dharma</td>
                <td>Om Dharmaya Namah</td>
                <td>Embodiment of Righteousness</td>
            </tr>
            <tr>
                <td>645</td>
                <td>Kripakara</td>
                <td>Om Kripakaraya Namah</td>
                <td>Source of Compassion</td>
            </tr>
            <tr>
                <td>646</td>
                <td>Bharga</td>
                <td>Om Bhargaya Namah</td>
                <td>The Radiant Lord</td>
            </tr>
            <tr>
                <td>647</td>
                <td>Vivasvat</td>
                <td>Om Vivasvate Namah</td>
                <td>The Resplendent</td>
            </tr>
            <tr>
                <td>648</td>
                <td>Aditya</td>
                <td>Om Adityaya Namah</td>
                <td>Son of Aditi (Sun God)</td>
            </tr>
            <tr>
                <td>649</td>
                <td>Yogacharya</td>
                <td>Om Yogacharyaya Namah</td>
                <td>Master of Yoga</td>
            </tr>
            <tr>
                <td>650</td>
                <td>Divaspati</td>
                <td>Om Divaspataye Namah</td>
                <td>Lord of the Skies</td>
            </tr>
            <tr>
                <td>651</td>
                <td>Udara Kirti</td>
                <td>Om Udarakirtaye Namah</td>
                <td>Of Noble Fame</td>
            </tr>
            <tr>
                <td>652</td>
                <td>Udyogi</td>
                <td>Om Udyogine Namah</td>
                <td>The Industrious</td>
            </tr>
            <tr>
                <td>653</td>
                <td>Vangmaya</td>
                <td>Om Vangmayaya Namah</td>
                <td>Embodiment of Speech</td>
            </tr>
            <tr>
                <td>654</td>
                <td>Sadasanmaya</td>
                <td>Om Sadasanmayaya Namah</td>
                <td>Existence in Truth and Untruth</td>
            </tr>
            <tr>
                <td>655</td>
                <td>Nakshatramali</td>
                <td>Om Nakshatramaline Namah</td>
                <td>Adorned with Stars</td>
            </tr>
            <tr>
                <td>656</td>
                <td>Nakesha</td>
                <td>Om Nakeshaya Namah</td>
                <td>Lord of the Heavens</td>
            </tr>
            <tr>
                <td>657</td>
                <td>Svadhisthana</td>
                <td>Om Svadhisthanaya Namah</td>
                <td>Dwelling in the Self</td>
            </tr>
            <tr>
                <td>658</td>
                <td>Shadasraya</td>
                <td>Om Shadasrayaya Namah</td>
                <td>Refuge of the Six Paths</td>
            </tr>
            <tr>
                <td>659</td>
                <td>Chaturvargaphala</td>
                <td>Om Chaturvargaphalaya Namah</td>
                <td>Granter of Fourfold Blessings</td>
            </tr>
            <tr>
                <td>660</td>
                <td>Varnin</td>
                <td>Om Varnine Namah</td>
                <td>Possessor of All Virtues</td>
            </tr>
            <tr>
                <td>661</td>
                <td>Shaktitrayaphala</td>
                <td>Om Shaktitrayaphalaya Namah</td>
                <td>Granter of the Threefold Power</td>
            </tr>
            <tr>
                <td>662</td>
                <td>Nidha</td>
                <td>Om Nidhaye Namah</td>
                <td>The Treasure</td>
            </tr>
            <tr>
                <td>663</td>
                <td>Nidhanagarbha</td>
                <td>Om Nidhanagarbhaya Namah</td>
                <td>Repository of Wealth</td>
            </tr>
            <tr>
                <td>664</td>
                <td>Nirvyaja</td>
                <td>Om Nirvyajaya Namah</td>
                <td>Free from Deceit</td>
            </tr>
            <tr>
                <td>665</td>
                <td>Girisha</td>
                <td>Om Girishaya Namah</td>
                <td>Lord of the Mountains</td>
            </tr>
            <tr>
                <td>666</td>
                <td>Vyala Mardana</td>
                <td>Om Vyala Mardanaya Namah</td>
                <td>Crusher of Serpents</td>
            </tr>
            <tr>
                <td>667</td>
                <td>Shrivallabha</td>
                <td>Om Shrivallabhaya Namah</td>
                <td>Beloved of Shri (Lakshmi)</td>
            </tr>
            <tr>
                <td>668</td>
                <td>Shivarambha</td>
                <td>Om Shivarambhaya Namah</td>
                <td>Beginning of Auspiciousness</td>
            </tr>
            <tr>
                <td>669</td>
                <td>Shanta</td>
                <td>Om Shantaya Namah</td>
                <td>The Peaceful One</td>
            </tr>
            <tr>
                <td>670</td>
                <td>Bhadra</td>
                <td>Om Bhadraya Namah</td>
                <td>The Auspicious</td>
            </tr>
            <tr>
                <td>671</td>
                <td>Samanjasa</td>
                <td>Om Samanjasaya Namah</td>
                <td>The Equitable</td>
            </tr>
            <tr>
                <td>672</td>
                <td>Bhushaya</td>
                <td>Om Bhushayaya Namah</td>
                <td>Resting on Earth</td>
            </tr>
            <tr>
                <td>673</td>
                <td>Bhutikrita</td>
                <td>Om Bhutikrite Namah</td>
                <td>Creator of Prosperity</td>
            </tr>
            <tr>
                <td>674</td>
                <td>Bhutibhushana</td>
                <td>Om Bhutibhushanaya Namah</td>
                <td>Adorned with Glory</td>
            </tr>
            <tr>
                <td>675</td>
                <td>Bhutavahana</td>
                <td>Om Bhutavahanaya Namah</td>
                <td>Bearer of All Beings</td>
            </tr>
            <tr>
                <td>676</td>
                <td>Akaya</td>
                <td>Om Akayaya Namah</td>
                <td>Without a Physical Form</td>
            </tr>
            <tr>
                <td>677</td>
                <td>Bhakta Kaya Sthaya</td>
                <td>Om Bhakta Kaya Sthaya Namah</td>
                <td>Residing in Devotees' Bodies</td>
            </tr>
            <tr>
                <td>678</td>
                <td>Kalajnani</td>
                <td>Om Kalajnanine Namah</td>
                <td>Knower of Time</td>
            </tr>
            <tr>
                <td>679</td>
                <td>Mahavata</td>
                <td>Om Mahavatave Namah</td>
                <td>The Great Banyan Tree</td>
            </tr>
            <tr>
                <td>680</td>
                <td>Pararthav</td>
                <td>Om Pararthavartaye Namah</td>
                <td>Engaged in Others' Welfare</td>
            </tr>
            <tr>
                <td>681</td>
                <td>Achala</td>
                <td>Om Achalaya Namah</td>
                <td>The Immovable</td>
            </tr>
            <tr>
                <td>682</td>
                <td>Vivikta</td>
                <td>Om Viviktaya Namah</td>
                <td>The Untainted</td>
            </tr>
            <tr>
                <td>683</td>
                <td>Shrutisagara</td>
                <td>Om Shrutisagaraya Namah</td>
                <td>Ocean of Vedas</td>
            </tr>
            <tr>
                <td>684</td>
                <td>Svabhavabhadra</td>
                <td>Om Svabhavabhadraya Namah</td>
                <td>Naturally Auspicious</td>
            </tr>
            <tr>
                <td>685</td>
                <td>Madhyastha</td>
                <td>Om Madhyasthaya Namah</td>
                <td>Neutral and Impartial</td>
            </tr>
            <tr>
                <td>686</td>
                <td>Samsarabhaya Nashana</td>
                <td>Om Samsarabhaya Nashanaya Namah</td>
                <td>Destroyer of Worldly Fears</td>
            </tr>
            <tr>
                <td>687</td>
                <td>Vedya</td>
                <td>Om Vedyaya Namah</td>
                <td>The One to Be Known</td>
            </tr>
            <tr>
                <td>688</td>
                <td>Vaidya</td>
                <td>Om Vaidyaya Namah</td>
                <td>The Divine Physician</td>
            </tr>
            <tr>
                <td>689</td>
                <td>Viyadgoptri</td>
                <td>Om Viyadgoptraye Namah</td>
                <td>Protector of Space</td>
            </tr>
            <tr>
                <td>690</td>
                <td>Sarvamara Munishvara</td>
                <td>Om Sarvamara Munishvaraya Namah</td>
                <td>Lord of All Ascetics and Celestials</td>
            </tr>
            <tr>
                <td>691</td>
                <td>Surendra</td>
                <td>Om Surendraya Namah</td>
                <td>Chief of Gods</td>
            </tr>
            <tr>
                <td>692</td>
                <td>Karana</td>
                <td>Om Karanaya Namah</td>
                <td>The Cause</td>
            </tr>
            <tr>
                <td>693</td>
                <td>Karman</td>
                <td>Om Karmane Namah</td>
                <td>The Performer of Deeds</td>
            </tr>
            <tr>
                <td>694</td>
                <td>Karmakrita</td>
                <td>Om Karmakrite Namah</td>
                <td>Performer of All Actions</td>
            </tr>
            <tr>
                <td>695</td>
                <td>Karmin</td>
                <td>Om Karmine Namah</td>
                <td>The Doer</td>
            </tr>
            <tr>
                <td>696</td>
                <td>Adhokshaja</td>
                <td>Om Adhokshajaya Namah</td>
                <td>Beyond Material Perception</td>
            </tr>
            <tr>
                <td>697</td>
                <td>Dhyeya</td>
                <td>Om Dhyeyaya Namah</td>
                <td>Worthy of Meditation</td>
            </tr>
            <tr>
                <td>698</td>
                <td>Dhurya</td>
                <td>Om Dhuryaya Namah</td>
                <td>The Weight-Bearer</td>
            </tr>
            <tr>
                <td>699</td>
                <td>Dharadhisha</td>
                <td>Om Dharadhishaya Namah</td>
                <td>Lord of the Earth</td>
            </tr>
            <tr>
                <td>700</td>
                <td>Sankalpa</td>
                <td>Om Sankalpaya Namah</td>
                <td>Embodiment of Willpower</td>
            </tr>
              <tr>
                <td>701</td>
                <td>Sharvaripati</td>
                <td>Om Sharvaripataye Namah</td>
                <td>Lord of Night</td>
            </tr>
            <tr>
                <td>702</td>
                <td>Paramarthaguru</td>
                <td>Om Paramarthagurave Namah</td>
                <td>Supreme Spiritual Teacher</td>
            </tr>
            <tr>
                <td>703</td>
                <td>Vriddha</td>
                <td>Om Vriddhaya Namah</td>
                <td>The Ancient One</td>
            </tr>
            <tr>
                <td>704</td>
                <td>Shuchi</td>
                <td>Om Shuchaye Namah</td>
                <td>The Pure</td>
            </tr>
            <tr>
                <td>705</td>
                <td>Ashritavatsala</td>
                <td>Om Ashritavatsalaya Namah</td>
                <td>Protector of Devotees</td>
            </tr>
            <tr>
                <td>706</td>
                <td>Vishnu</td>
                <td>Om Vishnave Namah</td>
                <td>All-Pervading Lord</td>
            </tr>
            <tr>
                <td>707</td>
                <td>Jishnu</td>
                <td>Om Jishnave Namah</td>
                <td>The Conqueror</td>
            </tr>
            <tr>
                <td>708</td>
                <td>Vibhava</td>
                <td>Om Vibhavaya Namah</td>
                <td>Lord of Abundance</td>
            </tr>
            <tr>
                <td>709</td>
                <td>Vandya</td>
                <td>Om Vandyaya Namah</td>
                <td>The Worshipped One</td>
            </tr>
            <tr>
                <td>710</td>
                <td>Yajnesha</td>
                <td>Om Yajneshaya Namah</td>
                <td>Lord of Sacrifices</td>
            </tr>
            <tr>
                <td>711</td>
                <td>Yajnapalaka</td>
                <td>Om Yajnapalakaya Namah</td>
                <td>Protector of Sacrifices</td>
            </tr>
            <tr>
                <td>712</td>
                <td>Prabhavishnu</td>
                <td>Om Prabhavishnave Namah</td>
                <td>All-Encompassing Lord</td>
            </tr>
            <tr>
                <td>713</td>
                <td>Grasisnu</td>
                <td>Om Grasisnave Namah</td>
                <td>The Devourer</td>
            </tr>
            <tr>
                <td>714</td>
                <td>Lokatma</td>
                <td>Om Lokatmane Namah</td>
                <td>Soul of the Universe</td>
            </tr>
            <tr>
                <td>715</td>
                <td>Lokabhavana</td>
                <td>Om Lokabhavanaya Namah</td>
                <td>Creator of the Worlds</td>
            </tr>
            <tr>
                <td>716</td>
                <td>Keshava</td>
                <td>Om Keshavaya Namah</td>
                <td>Slayer of Kesi</td>
            </tr>
            <tr>
                <td>717</td>
                <td>Keshighna</td>
                <td>Om Keshighne Namah</td>
                <td>Destroyer of Kesi</td>
            </tr>
            <tr>
                <td>718</td>
                <td>Kavya</td>
                <td>Om Kavyaya Namah</td>
                <td>The Poet</td>
            </tr>
            <tr>
                <td>719</td>
                <td>Kavi</td>
                <td>Om Kavaye Namah</td>
                <td>The Wise</td>
            </tr>
            <tr>
                <td>720</td>
                <td>Karanakarana</td>
                <td>Om Karanakaranaya Namah</td>
                <td>Cause of All Causes</td>
            </tr>
            <tr>
                <td>721</td>
                <td>Kalakartre</td>
                <td>Om Kalakartraya Namah</td>
                <td>Creator of Time</td>
            </tr>
            <tr>
                <td>722</td>
                <td>Kalashesha</td>
                <td>Om Kalasheshaya Namah</td>
                <td>Beyond Time</td>
            </tr>
            <tr>
                <td>723</td>
                <td>Vasudeva</td>
                <td>Om Vasudevaya Namah</td>
                <td>Son of Vasudeva</td>
            </tr>
            <tr>
                <td>724</td>
                <td>Purushtuta</td>
                <td>Om Purushtutaya Namah</td>
                <td>Praised by All</td>
            </tr>
            <tr>
                <td>725</td>
                <td>Adikarta</td>
                <td>Om Adikartre Namah</td>
                <td>The Original Doer</td>
            </tr>
            <tr>
                <td>726</td>
                <td>Varaha</td>
                <td>Om Varahaya Namah</td>
                <td>The Great Boar Incarnation</td>
            </tr>
            <tr>
                <td>727</td>
                <td>Madhava</td>
                <td>Om Madhavaya Namah</td>
                <td>Husband of Goddess Lakshmi</td>
            </tr>
            <tr>
                <td>728</td>
                <td>Madhusudana</td>
                <td>Om Madhusudanaya Namah</td>
                <td>Slayer of Demon Madhu</td>
            </tr>
            <tr>
                <td>729</td>
                <td>Narayana</td>
                <td>Om Narayanaya Namah</td>
                <td>Refuge of All Beings</td>
            </tr>
            <tr>
                <td>730</td>
                <td>Nara</td>
                <td>Om Naraya Namah</td>
                <td>The Supreme Man</td>
            </tr>
            <tr>
                <td>731</td>
                <td>Hamsa</td>
                <td>Om Hamsaya Namah</td>
                <td>The Divine Swan</td>
            </tr>
            <tr>
                <td>732</td>
                <td>Vishwaksena</td>
                <td>Om Vishwaksenaya Namah</td>
                <td>Leader of Celestial Armies</td>
            </tr>
            <tr>
                <td>733</td>
                <td>Janardana</td>
                <td>Om Janardanaya Namah</td>
                <td>Protector of Mankind</td>
            </tr>
            <tr>
                <td>734</td>
                <td>Vishvakarta</td>
                <td>Om Vishvakartre Namah</td>
                <td>Creator of the Universe</td>
            </tr>
            <tr>
                <td>735</td>
                <td>Mahayajna</td>
                <td>Om Mahayajnaya Namah</td>
                <td>The Great Sacrifice</td>
            </tr>
            <tr>
                <td>736</td>
                <td>Jyotismat</td>
                <td>Om Jyotismate Namah</td>
                <td>The Radiant One</td>
            </tr>
            <tr>
                <td>737</td>
                <td>Purushottama</td>
                <td>Om Purushottamaya Namah</td>
                <td>Supreme Personality</td>
            </tr>
            <tr>
                <td>738</td>
                <td>Vaikuntha</td>
                <td>Om Vaikunthaya Namah</td>
                <td>Lord of the Supreme Abode</td>
            </tr>
            <tr>
                <td>739</td>
                <td>Pundarikaksha</td>
                <td>Om Pundarikakshaya Namah</td>
                <td>Lotus-Eyed Lord</td>
            </tr>
            <tr>
                <td>740</td>
                <td>Krishna</td>
                <td>Om Krishnaya Namah</td>
                <td>The Dark One</td>
            </tr>
            <tr>
                <td>741</td>
                <td>Surya</td>
                <td>Om Suryaya Namah</td>
                <td>Radiant Like the Sun</td>
            </tr>
            <tr>
                <td>742</td>
                <td>Surarchita</td>
                <td>Om Surarchitaya Namah</td>
                <td>Worshipped by the Gods</td>
            </tr>
            <tr>
                <td>743</td>
                <td>Narasimha</td>
                <td>Om Narasimhaya Namah</td>
                <td>Man-Lion Incarnation</td>
            </tr>
            <tr>
                <td>744</td>
                <td>Mahabhima</td>
                <td>Om Mahabhimaya Namah</td>
                <td>The Great and Fearful</td>
            </tr>
            <tr>
                <td>745</td>
                <td>Vakradamshtra</td>
                <td>Om Vakradamshtraya Namah</td>
                <td>Curved-Toothed</td>
            </tr>
            <tr>
                <td>746</td>
                <td>Nakhayudha</td>
                <td>Om Nakhayudhaya Namah</td>
                <td>Weaponed with Nails</td>
            </tr>
            <tr>
                <td>747</td>
                <td>Adideva</td>
                <td>Om Adidevaya Namah</td>
                <td>The Primordial God</td>
            </tr>
            <tr>
                <td>748</td>
                <td>Jagatkarta</td>
                <td>Om Jagatkartraya Namah</td>
                <td>Creator of the World</td>
            </tr>
            <tr>
                <td>749</td>
                <td>Yogisha</td>
                <td>Om Yogishaya Namah</td>
                <td>Lord of Yoga</td>
            </tr>
            <tr>
                <td>750</td>
                <td>Garudadhvaja</td>
                <td>Om Garudadhvajaya Namah</td>
                <td>One with Garuda as His Banner</td>
            </tr>
            <tr>
                <td>751</td>
                <td>Govinda</td>
                <td>Om Govindaya Namah</td>
                <td>Protector of Cows</td>
            </tr>
            <tr>
                <td>752</td>
                <td>Gopati</td>
                <td>Om Gopataye Namah</td>
                <td>Lord of the Cowherds</td>
            </tr>
            <tr>
                <td>753</td>
                <td>Goptri</td>
                <td>Om Goptre Namah</td>
                <td>The Protector</td>
            </tr>
            <tr>
                <td>754</td>
                <td>Bhupati</td>
                <td>Om Bhupataye Namah</td>
                <td>Lord of the Earth</td>
            </tr>
            <tr>
                <td>755</td>
                <td>Bhuvaneshvara</td>
                <td>Om Bhuvaneshvaraya Namah</td>
                <td>Lord of the Worlds</td>
            </tr>
            <tr>
                <td>756</td>
                <td>Padmanabha</td>
                <td>Om Padmanabhaya Namah</td>
                <td>Lord with a Lotus in His Navel</td>
            </tr>
            <tr>
                <td>757</td>
                <td>Hrishikesha</td>
                <td>Om Hrishikesaya Namah</td>
                <td>Lord of the Senses</td>
            </tr>
            <tr>
                <td>758</td>
                <td>Dhatri</td>
                <td>Om Dhatre Namah</td>
                <td>The Supporter</td>
            </tr>
            <tr>
                <td>759</td>
                <td>Damodara</td>
                <td>Om Damodaraya Namah</td>
                <td>One Tied with a Rope at the Waist</td>
            </tr>
            <tr>
                <td>760</td>
                <td>Prabhava</td>
                <td>Om Prabhavaya Namah</td>
                <td>The Creator</td>
            </tr>
            <tr>
                <td>761</td>
                <td>Trivikrama</td>
                <td>Om Trivikramaya Namah</td>
                <td>Conqueror of the Three Worlds</td>
            </tr>
            <tr>
                <td>762</td>
                <td>Trilokesha</td>
                <td>Om Trilokesaya Namah</td>
                <td>Lord of the Three Worlds</td>
            </tr>
            <tr>
                <td>763</td>
                <td>Brahmesha</td>
                <td>Om Brahmesaya Namah</td>
                <td>Lord of Brahma</td>
            </tr>
            <tr>
                <td>764</td>
                <td>Pritivardhana</td>
                <td>Om Pritivardhanaya Namah</td>
                <td>Enhancer of Joy</td>
            </tr>
            <tr>
                <td>765</td>
                <td>Vamana</td>
                <td>Om Vamanaya Namah</td>
                <td>The Dwarf Incarnation</td>
            </tr>
            <tr>
                <td>766</td>
                <td>Dushtadamana</td>
                <td>Om Dushtadamanaya Namah</td>
                <td>Subduer of the Wicked</td>
            </tr>
            <tr>
                <td>767</td>
                <td>Govinda</td>
                <td>Om Govindaya Namah</td>
                <td>Finder of Cows</td>
            </tr>
            <tr>
                <td>768</td>
                <td>Gopavallabha</td>
                <td>Om Gopavallabhaya Namah</td>
                <td>Beloved of the Cowherds</td>
            </tr>
            <tr>
                <td>769</td>
                <td>Bhaktapriya</td>
                <td>Om Bhaktapriyaya Namah</td>
                <td>Beloved of Devotees</td>
            </tr>
            <tr>
                <td>770</td>
                <td>Achyuta</td>
                <td>Om Achyutaya Namah</td>
                <td>The Infallible</td>
            </tr>
            <tr>
                <td>771</td>
                <td>Satya</td>
                <td>Om Satyaya Namah</td>
                <td>The Truthful</td>
            </tr>
            <tr>
                <td>772</td>
                <td>Satyakirti</td>
                <td>Om Satyakirtaye Namah</td>
                <td>Famous for Truth</td>
            </tr>
            <tr>
                <td>773</td>
                <td>Dhriti</td>
                <td>Om Dhritaye Namah</td>
                <td>Full of Courage</td>
            </tr>
            <tr>
                <td>774</td>
                <td>Smriti</td>
                <td>Om Smrityai Namah</td>
                <td>The Remembered</td>
            </tr>
            <tr>
                <td>775</td>
                <td>Karunya</td>
                <td>Om Karunyaya Namah</td>
                <td>The Compassionate</td>
            </tr>
            <tr>
                <td>776</td>
                <td>Karuna</td>
                <td>Om Karunaya Namah</td>
                <td>Embodiment of Mercy</td>
            </tr>
            <tr>
                <td>777</td>
    Ecclesiological   <td>Vyasa</td>
                <td>Om Vyasaya Namah</td>
                <td>Compiler of the Vedas</td>
            </tr>
            <tr>
                <td>778</td>
                <td>Papaghna</td>
                <td>Om Papaghne Namah</td>
                <td>Remover of Sins</td>
            </tr>
            <tr>
                <td>779</td>
                <td>Shantivardhana</td>
                <td>Om Shantivardhanaya Namah</td>
                <td>Enhancer of Peace</td>
            </tr>
            <tr>
                <td>780</td>
                <td>Sannyasi</td>
                <td>Om Sannyasine Namah</td>
                <td>The Renunciate</td>
            </tr>
            <tr>
                <td>781</td>
                <td>Shastratattvajna</td>
                <td>Om Shastratattvajnaya Namah</td>
                <td>Knower of Scriptural Truths</td>
            </tr>
            <tr>
                <td>782</td>
                <td>Mandaradri Niketana</td>
                <td>Om Mandaradri Niketanaya Namah</td>
                <td>Dweller of Mount Mandara</td>
            </tr>
            <tr>
                <td>783</td>
                <td>Badarinilaya</td>
                <td>Om Badarinilayaya Namah</td>
                <td>Resident of Badrinath</td>
            </tr>
            <tr>
                <td>784</td>
                <td>Shanta</td>
                <td>Om Shantaya Namah</td>
                <td>The Peaceful</td>
            </tr>
            <tr>
                <td>785</td>
                <td>Tapasvin</td>
                <td>Om Tapasvine Namah</td>
                <td>The Ascetic</td>
            </tr>
            <tr>
                <td>786</td>
                <td>Vaidyutaprabha</td>
                <td>Om Vaidyutaprabhaya Namah</td>
                <td>Radiant Like Lightning</td>
            </tr>
            <tr>
                <td>787</td>
                <td>Bhutavasa</td>
                <td>Om Bhutavasaya Namah</td>
                <td>Dwelling in All Beings</td>
            </tr>
            <tr>
                <td>788</td>
                <td>Guhavasa</td>
                <td>Om Guhavasaya Namah</td>
                <td>Residing in the Cave</td>
            </tr>
            <tr>
                <td>789</td>
                <td>Srinivasa</td>
                <td>Om Srinivasaya Namah</td>
                <td>Abode of Goddess Lakshmi</td>
            </tr>
            <tr>
                <td>790</td>
                <td>Shriyahpati</td>
                <td>Om Shriyah Pataye Namah</td>
                <td>Lord of Wealth</td>
            </tr>
            <tr>
                <td>791</td>
                <td>Tapovasa</td>
                <td>Om Tapovasaya Namah</td>
                <td>Residing in Austerity</td>
            </tr>
            <tr>
                <td>792</td>
                <td>Mudavasa</td>
                <td>Om Mudavasaya Namah</td>
                <td>Residing in Joy</td>
            </tr>
            <tr>
                <td>793</td>
                <td>Satyavasa</td>
                <td>Om Satyavasaya Namah</td>
                <td>Residing in Truth</td>
            </tr>
            <tr>
                <td>794</td>
                <td>Sanatana</td>
                <td>Om Sanatanaya Namah</td>
                <td>Eternal</td>
            </tr>
            <tr>
                <td>795</td>
                <td>Purusha</td>
                <td>Om Purushaya Namah</td>
                <td>The Cosmic Person</td>
            </tr>
            <tr>
                <td>796</td>
                <td>Pushkara</td>
                <td>Om Pushkaraya Namah</td>
                <td>Lotus-Eyed</td>
            </tr>
            <tr>
                <td>797</td>
                <td>Punya</td>
                <td>Om Punyaya Namah</td>
                <td>The Virtuous</td>
            </tr>
            <tr>
                <td>798</td>
                <td>Pushkaraksha</td>
                <td>Om Pushkarakshaya Namah</td>
                <td>Lotus-Eyed Lord</td>
            </tr>
            <tr>
                <td>799</td>
                <td>Maheshvara</td>
                <td>Om Maheshvaraya Namah</td>
                <td>The Great Lord</td>
            </tr>
            <tr>
                <td>800</td>
                <td>Purnamurti</td>
                <td>Om Purnamurtaye Namah</td>
                <td>The Complete Form</td>
            </tr>
            <tr>
                <td>801</td>
                <td>Puranajna</td>
                <td>Om Puranajnaya Namah</td>
                <td>Knower of Ancient Knowledge</td>
            </tr>
            <tr>
                <td>802</td>
                <td>Punyada</td>
                <td>Om Punyadaya Namah</td>
                <td>Bestower of Virtue</td>
            </tr>
            <tr>
                <td>803</td>
                <td>Punyavardhana</td>
                <td>Om Punyavardhanaya Namah</td>
                <td>Enhancer of Virtue</td>
            </tr>
            <tr>
                <td>804</td>
                <td>Shankhi</td>
                <td>Om Shankhine Namah</td>
                <td>Bearer of the Conch</td>
            </tr>
            <tr>
                <td>805</td>
                <td>Chakri</td>
                <td>Om Chakrine Namah</td>
                <td>Holder of the Disc</td>
            </tr>
            <tr>
                <td>806</td>
                <td>Gadi</td>
                <td>Om Gadine Namah</td>
                <td>Wielder of the Mace</td>
            </tr>
            <tr>
                <td>807</td>
                <td>Sharngi</td>
                <td>Om Sharngine Namah</td>
                <td>Holder of the Sharnga Bow</td>
            </tr>
            <tr>
                <td>808</td>
                <td>Langalini</td>
                <td>Om Langaline Namah</td>
                <td>Bearer of the Plough</td>
            </tr>
            <tr>
                <td>809</td>
                <td>Musalini</td>
                <td>Om Musaline Namah</td>
                <td>Wielder of the Club</td>
            </tr>
            <tr>
                <td>810</td>
                <td>Halini</td>
                <td>Om Haline Namah</td>
                <td>Bearer of the Ploughshare</td>
            </tr>
            <tr>
                <td>811</td>
                <td>Kiritini</td>
                <td>Om Kiritine Namah</td>
                <td>Wearer of the Crown</td>
            </tr>
            <tr>
                <td>812</td>
                <td>Kundalini</td>
                <td>Om Kundaline Namah</td>
                <td>Adorned with Earrings</td>
            </tr>
            <tr>
                <td>813</td>
                <td>Harini</td>
                <td>Om Harine Namah</td>
                <td>Wearer of Garlands</td>
            </tr>
            <tr>
                <td>814</td>
                <td>Mekhalini</td>
                <td>Om Mekhaline Namah</td>
                <td>Adorned with a Girdle</td>
            </tr>
            <tr>
                <td>815</td>
                <td>Kavachini</td>
                <td>Om Kavachine Namah</td>
                <td>Adorned with Armor</td>
            </tr>
            <tr>
                <td>816</td>
                <td>Dhvaji</td>
                <td>Om Dhvajine Namah</td>
                <td>Bearer of the Flag</td>
            </tr>
            <tr>
                <td>817</td>
                <td>Yoddha</td>
                <td>Om Yoddhre Namah</td>
                <td>The Warrior</td>
            </tr>
            <tr>
                <td>818</td>
                <td>Jeta</td>
                <td>Om Jetre Namah</td>
                <td>The Conqueror</td>
            </tr>
            <tr>
                <td>819</td>
                <td>Mahavirya</td>
                <td>Om Mahaviryaya Namah</td>
                <td>The Great Hero</td>
            </tr>
            <tr>
                <td>820</td>
                <td>Shatrujit</td>
                <td>Om Shatrujite Namah</td>
                <td>Conqueror of Enemies</td>
            </tr>
            <tr>
                <td>821</td>
                <td>Shatrutapana</td>
                <td>Om Shatrutapanaya Namah</td>
                <td>Scorcher of Enemies</td>
            </tr>
            <tr>
                <td>822</td>
                <td>Shastra</td>
                <td>Om Shastre Namah</td>
                <td>Embodiment of Scriptures</td>
            </tr>
            <tr>
                <td>823</td>
                <td>Shastrakara</td>
                <td>Om Shastrakaraya Namah</td>
                <td>Creator of Scriptures</td>
            </tr>
            <tr>
                <td>824</td>
                <td>Shastri</td>
                <td>Om Shastraya Namah</td>
                <td>Master of Scriptures</td>
            </tr>
            <tr>
                <td>825</td>
                <td>Shankara</td>
                <td>Om Shankaraya Namah</td>
                <td>The Auspicious One</td>
            </tr>
              <tr>
                <td>826</td>
                <td>Shankara Stuta</td>
                <td>Om Shankara Stutaya Namah</td>
                <td>Praised by Lord Shiva</td>
            </tr>
            <tr>
                <td>827</td>
                <td>Sarathi</td>
                <td>Om Sarathaye Namah</td>
                <td>The Charioteer</td>
            </tr>
            <tr>
                <td>828</td>
                <td>Sattvika</td>
                <td>Om Sattvikaya Namah</td>
                <td>Embodiment of Purity</td>
            </tr>
            <tr>
                <td>829</td>
                <td>Swamin</td>
                <td>Om Swamine Namah</td>
                <td>The Lord</td>
            </tr>
            <tr>
                <td>830</td>
                <td>Samaveda Priya</td>
                <td>Om Samavedapriyaya Namah</td>
                <td>Beloved of Sama Veda</td>
            </tr>
            <tr>
                <td>831</td>
                <td>Sama</td>
                <td>Om Samaya Namah</td>
                <td>Embodiment of Harmony</td>
            </tr>
            <tr>
                <td>832</td>
                <td>Pavana</td>
                <td>Om Pavanaya Namah</td>
                <td>The Purifier</td>
            </tr>
            <tr>
                <td>833</td>
                <td>Samhata</td>
                <td>Om Samhataya Namah</td>
                <td>United in Strength</td>
            </tr>
            <tr>
                <td>834</td>
                <td>Shakti</td>
                <td>Om Shaktaye Namah</td>
                <td>Embodiment of Energy</td>
            </tr>
            <tr>
                <td>835</td>
                <td>Sampurnanga</td>
                <td>Om Sampurnangaya Namah</td>
                <td>Possessor of a Perfect Body</td>
            </tr>
            <tr>
                <td>836</td>
                <td>Samriddhimat</td>
                <td>Om Samriddhimate Namah</td>
                <td>Full of Prosperity</td>
            </tr>
            <tr>
                <td>837</td>
                <td>Svargada</td>
                <td>Om Svargadaya Namah</td>
                <td>Bestower of Heaven</td>
            </tr>
            <tr>
                <td>838</td>
                <td>Kamada</td>
                <td>Om Kamadaya Namah</td>
                <td>Granter of Desires</td>
            </tr>
            <tr>
                <td>839</td>
                <td>Shrida</td>
                <td>Om Shridaya Namah</td>
                <td>Giver of Wealth</td>
            </tr>
            <tr>
                <td>840</td>
                <td>Kirtida</td>
                <td>Om Kirtidaya Namah</td>
                <td>Bestower of Fame</td>
            </tr>
            <tr>
                <td>841</td>
                <td>Akirtinashana</td>
                <td>Om Akirtinashanaya Namah</td>
                <td>Destroyer of Infamy</td>
            </tr>
            <tr>
                <td>842</td>
                <td>Mokshada</td>
                <td>Om Mokshadaya Namah</td>
                <td>Granter of Liberation</td>
            </tr>
            <tr>
                <td>843</td>
                <td>Pundarikaksha</td>
                <td>Om Pundarikakshaya Namah</td>
                <td>Lotus-Eyed Lord</td>
            </tr>
            <tr>
                <td>844</td>
                <td>Kshirabdhikritaketana</td>
                <td>Om Kshirabdhikritaketanaya Namah</td>
                <td>Dweller of the Ocean of Milk</td>
            </tr>
            <tr>
                <td>845</td>
                <td>Sarvatman</td>
                <td>Om Sarvatmane Namah</td>
                <td>The Universal Self</td>
            </tr>
            <tr>
                <td>846</td>
                <td>Sarvalokesha</td>
                <td>Om Sarvalokesaya Namah</td>
                <td>Lord of All Worlds</td>
            </tr>
            <tr>
                <td>847</td>
                <td>Preraka</td>
                <td>Om Prerakaya Namah</td>
                <td>The Inspirer</td>
            </tr>
            <tr>
                <td>848</td>
                <td>Papanashana</td>
                <td>Om Papanashanaya Namah</td>
                <td>Destroyer of Sins</td>
            </tr>
            <tr>
                <td>849</td>
                <td>Sarvavyapi</td>
                <td>Om Sarvavyapine Namah</td>
                <td>All-Pervading</td>
            </tr>
            <tr>
                <td>850</td>
                <td>Jagannatha</td>
                <td>Om Jagannathaya Namah</td>
                <td>Lord of the Universe</td>
            </tr>
            <tr>
            <td>851</td>
            <td>Sarvalokamaheshwara</td>
            <td>Om Sarvalokamaheshwaraya Namah</td>
            <td>Supreme Lord of All Realms</td>
        </tr>
        <tr>
            <td>852</td>
            <td>Sargasthityantakrit</td>
            <td>Om Sargasthityantakrite Namah</td>
            <td>Creator, Sustainer, and Destroyer</td>
        </tr>
        <tr>
            <td>853</td>
            <td>Deva</td>
            <td>Om Devaya Namah</td>
            <td>The Divine One</td>
        </tr>
        <tr>
            <td>854</td>
            <td>Sarvalokasukhavaha</td>
            <td>Om Sarvalokasukhavahaya Namah</td>
            <td>Bestower of Joy to All Worlds</td>
        </tr>
        <tr>
            <td>855</td>
            <td>Akshaya</td>
            <td>Om Akshayaya Namah</td>
            <td>The Imperishable</td>
        </tr>
        <tr>
            <td>856</td>
            <td>Shashvata</td>
            <td>Om Shashvataya Namah</td>
            <td>The Eternal</td>
        </tr>
        <tr>
            <td>857</td>
            <td>Ananta</td>
            <td>Om Anantaya Namah</td>
            <td>The Infinite</td>
        </tr>
        <tr>
            <td>858</td>
            <td>Kshayavriddhivivarjita</td>
            <td>Om Kshayavriddhivivarjitaya Namah</td>
            <td>Beyond Growth and Decay</td>
        </tr>
        <tr>
            <td>859</td>
            <td>Nirlepa</td>
            <td>Om Nirlepaya Namah</td>
            <td>The Unblemished</td>
        </tr>
        <tr>
            <td>860</td>
            <td>Nirguna</td>
            <td>Om Nirgunaya Namah</td>
            <td>Beyond All Qualities</td>
        </tr>
        <tr>
            <td>861</td>
            <td>Sukshma</td>
            <td>Om Sukshmaya Namah</td>
            <td>Subtle and Incomprehensible</td>
        </tr>
        <tr>
            <td>862</td>
            <td>Nirvikara</td>
            <td>Om Nirvikaraya Namah</td>
            <td>Unchanging</td>
        </tr>
        <tr>
            <td>863</td>
            <td>Niranjana</td>
            <td>Om Niranjanaya Namah</td>
            <td>The Pure and Spotless One</td>
        </tr>
        <tr>
            <td>864</td>
            <td>Sarvopadhivinirmukta</td>
            <td>Om Sarvopadhivinirmuktaya Namah</td>
            <td>Free from All Limitations</td>
        </tr>
        <tr>
            <td>865</td>
            <td>Sattamatra Vyavasthita</td>
            <td>Om Sattamatravyavasthitaya Namah</td>
            <td>Established in Pure Existence</td>
        </tr>
        <tr>
            <td>866</td>
            <td>Adhikari</td>
            <td>Om Adhikarine Namah</td>
            <td>The Supreme Authority</td>
        </tr>
        <tr>
            <td>867</td>
            <td>Vibhava</td>
            <td>Om Vibhavaya Namah</td>
            <td>The Glorious One</td>
        </tr>
        <tr>
            <td>868</td>
            <td>Nitya</td>
            <td>Om Nityaya Namah</td>
            <td>The Eternal</td>
        </tr>
        <tr>
            <td>869</td>
            <td>Paramatma</td>
            <td>Om Paramatmane Namah</td>
            <td>The Supreme Soul</td>
        </tr>
        <tr>
            <td>870</td>
            <td>Sanatana</td>
            <td>Om Sanatanaya Namah</td>
            <td>Eternal and Everlasting</td>
        </tr>
        <tr>
            <td>871</td>
            <td>Achala</td>
            <td>Om Achalaya Namah</td>
            <td>The Immovable One</td>
        </tr>
        <tr>
            <td>872</td>
            <td>Nirmala</td>
            <td>Om Nirmalaya Namah</td>
            <td>The Spotless and Pure</td>
        </tr>
        <tr>
            <td>873</td>
            <td>Vyapin</td>
            <td>Om Vyapine Namah</td>
            <td>All-Pervading</td>
        </tr>
        <tr>
            <td>874</td>
            <td>Nityatripta</td>
            <td>Om Nityatriptaya Namah</td>
            <td>Eternally Content</td>
        </tr>
        <tr>
            <td>875</td>
            <td>Nirasraya</td>
            <td>Om Nirasrayaya Namah</td>
            <td>Without Dependence</td>
        </tr>
        <tr>
            <td>876</td>
            <td>Shyama</td>
            <td>Om Shyamaya Namah</td>
            <td>Dark-Hued Lord</td>
        </tr>
        <tr>
            <td>877</td>
            <td>Yuva</td>
            <td>Om Yuvaya Namah</td>
            <td>The Ever Youthful</td>
        </tr>
        <tr>
            <td>878</td>
            <td>Lohitaksha</td>
            <td>Om Lohitakshaya Namah</td>
            <td>Red-Eyed One</td>
        </tr>
        <tr>
            <td>879</td>
            <td>Diptasya</td>
            <td>Om Diptasyaya Namah</td>
            <td>Radiant-Faced</td>
        </tr>
        <tr>
            <td>880</td>
            <td>Mitabhashana</td>
            <td>Om Mitabhashanaya Namah</td>
            <td>Moderate in Speech</td>
        </tr>
        <tr>
            <td>881</td>
            <td>Ajanubahava</td>
            <td>Om Ajanubahavaya Namah</td>
            <td>Long-Armed Lord</td>
        </tr>
        <tr>
            <td>882</td>
            <td>Sumukha</td>
            <td>Om Sumukhaya Namah</td>
            <td>Handsome and Auspicious</td>
        </tr>
        <tr>
            <td>883</td>
            <td>Simhaskanda</td>
            <td>Om Simhaskandhaya Namah</td>
            <td>Lion-Shouldered</td>
        </tr>
        <tr>
            <td>884</td>
            <td>Mahabhuja</td>
            <td>Om Mahabhujaya Namah</td>
            <td>Great-Armed</td>
        </tr>
        <tr>
            <td>885</td>
            <td>Satyavata</td>
            <td>Om Satyavate Namah</td>
            <td>Truthful</td>
        </tr>
        <tr>
            <td>886</td>
            <td>Gunasampanna</td>
            <td>Om Gunasampannaya Namah</td>
            <td>Full of Virtues</td>
        </tr>
        <tr>
            <td>887</td>
            <td>Svayantejas</td>
            <td>Om Svayantejase Namah</td>
            <td>Radiating Own Splendor</td>
        </tr>
        <tr>
            <td>888</td>
            <td>Sudiptimat</td>
            <td>Om Sudiptimate Namah</td>
            <td>Intensely Brilliant</td>
        </tr>
        <tr>
            <td>889</td>
            <td>Kalatman</td>
            <td>Om Kalatmane Namah</td>
            <td>The Essence of Time</td>
        </tr>
        <tr>
            <td>890</td>
            <td>Bhagavat</td>
            <td>Om Bhagavate Namah</td>
            <td>Possessor of Divine Glories</td>
        </tr>
        <tr>
            <td>891</td>
            <td>Kala</td>
            <td>Om Kalaya Namah</td>
            <td>Eternal Time</td>
        </tr>
        <tr>
            <td>892</td>
            <td>Kalachakrapravartaka</td>
            <td>Om Kalachakrapravartakaya Namah</td>
            <td>The One Who Sets Time in Motion</td>
        </tr>
        <tr>
            <td>893</td>
            <td>Narayana</td>
            <td>Om Narayanaya Namah</td>
            <td>Refuge of All</td>
        </tr>
        <tr>
            <td>894</td>
            <td>Parasmai Jyotish</td>
            <td>Om Parasmai Jyotishe Namah</td>
            <td>The Supreme Light</td>
        </tr>
        <tr>
            <td>895</td>
            <td>Paramatma</td>
            <td>Om Paramatmane Namah</td>
            <td>The Supreme Soul</td>
        </tr>
        <tr>
            <td>896</td>
            <td>Sanatana</td>
            <td>Om Sanatanaya Namah</td>
            <td>Eternal</td>
        </tr>
        <tr>
            <td>897</td>
            <td>Visvasrij</td>
            <td>Om Visvasrje Namah</td>
            <td>Creator of the Universe</td>
        </tr>
        <tr>
            <td>898</td>
            <td>Visvagoptri</td>
            <td>Om Visvagoptre Namah</td>
            <td>Protector of the Universe</td>
        </tr>
        <tr>
            <td>899</td>
            <td>Visvabhoktri</td>
            <td>Om Visvabhoktre Namah</td>
            <td>Enjoyer of the Universe</td>
        </tr>
        <tr>
            <td>900</td>
            <td>Shashvata</td>
            <td>Om Shashvataya Namah</td>
            <td>Eternal</td>
        </tr>
        <tr>
            <td>901</td>
            <td>Vishveshwara</td>
            <td>Om Vishveshwaraya Namah</td>
            <td>Lord of the Universe</td>
        </tr>
        <tr>
            <td>902</td>
            <td>Vishvamurti</td>
            <td>Om Vishvamurtaye Namah</td>
            <td>Embodiment of the Universe</td>
        </tr>
        <tr>
            <td>903</td>
            <td>Vishvatma</td>
            <td>Om Vishvatmane Namah</td>
            <td>Soul of the Universe</td>
        </tr>
        <tr>
            <td>904</td>
            <td>Vishvabhavana</td>
            <td>Om Vishvabhavanaya Namah</td>
            <td>Creator and Sustainer of the Universe</td>
        </tr>
        <tr>
            <td>905</td>
            <td>Sarvabhutasuhrid</td>
            <td>Om Sarvabhutasuhride Namah</td>
            <td>Friend of All Beings</td>
        </tr>
        <tr>
            <td>906</td>
            <td>Shanta</td>
            <td>Om Shantaya Namah</td>
            <td>Peaceful</td>
        </tr>
        <tr>
            <td>907</td>
            <td>Sarvabhutanukampana</td>
            <td>Om Sarvabhutanukampanaya Namah</td>
            <td>Compassionate Towards All Beings</td>
        </tr>
        <tr>
            <td>908</td>
            <td>Sarveshvareshvara</td>
            <td>Om Sarveshvaraya Namah</td>
            <td>Supreme Lord of All</td>
        </tr>
        <tr>
            <td>909</td>
            <td>Sarvasmai</td>
            <td>Om Sarvasmai Namah</td>
            <td>Omnipresent</td>
        </tr>
        <tr>
            <td>910</td>
            <td>Shrimat</td>
            <td>Om Shrimate Namah</td>
            <td>Possessor of Divine Wealth</td>
        </tr>
          <tr><td>911</td><td>Ashritavatsala</td><td>Om Ashritavatsalaya Namah</td><td>Protector of the Devotees</td></tr>
            <tr><td>912</td><td>Sarvaga</td><td>Om Sarvagaya Namah</td><td>All-Pervading</td></tr>
            <tr><td>913</td><td>Sarvabhutesha</td><td>Om Sarvabhuteshaya Namah</td><td>Lord of All Beings</td></tr>
            <tr><td>914</td><td>Sarvabhutashayasthita</td><td>Om Sarvabhutashayasthitaya Namah</td><td>Residing in All Hearts</td></tr>
            <tr><td>915</td><td>Abhyantarastha</td><td>Om Abhyantarasthaya Namah</td><td>Present Within Everything</td></tr>
            <tr><td>916</td><td>Tamasashchettra</td><td>Om Tamasashchettraya Namah</td><td>Destroyer of Darkness</td></tr>
            <tr><td>917</td><td>Narayana</td><td>Om Narayanaya Namah</td><td>Refuge of All</td></tr>
            <tr><td>918</td><td>Parasmai</td><td>Om Parasmai Namah</td><td>Supreme Being</td></tr>
            <tr><td>919</td><td>Anadinidhana</td><td>Om Anadinidhanaya Namah</td><td>Without Beginning or End</td></tr>
            <tr><td>920</td><td>Srashta</td><td>Om Srashtre Namah</td><td>Creator</td></tr>
            <tr><td>921</td><td>Prajapatipati</td><td>Om Prajapatipataye Namah</td><td>Lord of All Creatures</td></tr>
            <tr><td>922</td><td>Hara</td><td>Om Haraye Namah</td><td>Remover of Sins</td></tr>
            <tr><td>923</td><td>Narasimha</td><td>Om Narasimhaya Namah</td><td>The Man-Lion Incarnation</td></tr>
            <tr><td>924</td><td>Hrishikesha</td><td>Om Hrishikesaya Namah</td><td>Lord of the Senses</td></tr>
            <tr><td>925</td><td>Sarvatma</td><td>Om Sarvatmane Namah</td><td>Soul of All</td></tr>
            <tr><td>926</td><td>Sarvadrik</td><td>Om Sarvadrishe Namah</td><td>All-Seeing</td></tr>
            <tr><td>927</td><td>Vashi</td><td>Om Vashine Namah</td><td>Controller</td></tr>
            <tr><td>928</td><td>Jagatastasthusha</td><td>Om Jagatastasthushaya Namah</td><td>Stabilizer of the World</td></tr>
            <tr><td>929</td><td>Prabhava</td><td>Om Prabhavaya Namah</td><td>Originator</td></tr>
            <tr><td>930</td><td>Netra</td><td>Om Netre Namah</td><td>Leader</td></tr>
            <tr><td>931</td><td>Sanatana</td><td>Om Sanatanaya Namah</td><td>Eternal</td></tr>
            <tr><td>932</td><td>Kartri</td><td>Om Kartraya Namah</td><td>Doer</td></tr>
            <tr><td>933</td><td>Dhatri</td><td>Om Dhatraya Namah</td><td>Sustainer</td></tr>
            <tr><td>934</td><td>Vidhatri</td><td>Om Vidhatraya Namah</td><td>Supporter</td></tr>
            <tr><td>935</td><td>Sarvesham Prabhava</td><td>Om Sarvesham Prabhave Namah</td><td>Lord of All Lords</td></tr>
            <tr><td>936</td><td>Ishwara</td><td>Om Ishvaraya Namah</td><td>Supreme Controller</td></tr>
            <tr><td>937</td><td>Sahasramurti</td><td>Om Sahasramurtaye Namah</td><td>Thousand-Formed</td></tr>
            <tr><td>938</td><td>Vishvatma</td><td>Om Vishvatmane Namah</td><td>Universal Soul</td></tr>
            <tr><td>939</td><td>Vishnu</td><td>Om Vishnave Namah</td><td>All-Pervading Lord</td></tr>
            <tr><td>940</td><td>Vishvadrik</td><td>Om Vishvadrishe Namah</td><td>Observer of the Universe</td></tr>
            <tr><td>941</td><td>Avyaya</td><td>Om Avyayaya Namah</td><td>Imperishable</td></tr>
            <tr><td>942</td><td>Puranapurusha</td><td>Om Puranapurushaya Namah</td><td>Ancient Being</td></tr>
            <tr><td>943</td><td>Srashta</td><td>Om Srashtre Namah</td><td>Creator</td></tr>
            <tr><td>944</td><td>Sahasraksha</td><td>Om Sahasrakshaya Namah</td><td>Thousand-Eyed</td></tr>
            <tr><td>945</td><td>Sahasrapada</td><td>Om Sahasrapadaya Namah</td><td>Thousand-Footed</td></tr>
            <tr><td>946</td><td>Tattva</td><td>Om Tattvaya Namah</td><td>The Essence</td></tr>
            <tr><td>947</td><td>Narayana</td><td>Om Narayanaya Namah</td><td>Refuge of All</td></tr>
            <tr><td>948</td><td>Vishnu</td><td>Om Vishnave Namah</td><td>All-Pervading</td></tr>
            <tr><td>949</td><td>Vasudeva</td><td>Om Vasudevaya Namah</td><td>Son of Vasudeva</td></tr>
            <tr><td>950</td><td>Sanatana</td><td>Om Sanatanaya Namah</td><td>Eternal</td></tr>
            <tr><td>951</td><td>Paramatman</td><td>Om Paramatmane Namah</td><td>Supreme Soul</td></tr>
            <tr><td>952</td><td>Parasmai Brahmane</td><td>Om Parasmai Brahmane Namah</td><td>Supreme Absolute Brahman</td></tr>
            <tr><td>953</td><td>Saccidanandavigraha</td><td>Om Saccidanandavigrahaya Namah</td><td>Embodiment of Truth, Consciousness, and Bliss</td></tr>
            <tr><td>954</td><td>Parasmai Jyotish</td><td>Om Parasmai Jyotishe Namah</td><td>Supreme Light</td></tr>
            <tr><td>955</td><td>Parasmai Dhamne</td><td>Om Parasmai Dhamne Namah</td><td>Supreme Abode</td></tr>
            <tr><td>956</td><td>Parakasha</td><td>Om Parakasha Namah</td><td>Supreme Sky</td></tr>
            <tr><td>957</td><td>Paratpara</td><td>Om Paratparasya Namah</td><td>Beyond the Supreme</td></tr>
            <tr><td>958</td><td>Achyuta</td><td>Om Achyutaya Namah</td><td>The Infallible</td></tr>
            <tr><td>959</td><td>Purusha</td><td>Om Purushaya Namah</td><td>The Supreme Person</td></tr>
            <tr><td>960</td><td>Krishna</td><td>Om Krishnaya Namah</td><td>The All-Attractive</td></tr>
            <tr><td>961</td><td>Shashvata</td><td>Om Shashvataya Namah</td><td>Eternal</td></tr>
            <tr><td>962</td><td>Shiva</td><td>Om Shivaya Namah</td><td>The Auspicious</td></tr>
            <tr><td>963</td><td>Ishwara</td><td>Om Ishvaraya Namah</td><td>The Supreme Controller</td></tr>
            <tr><td>964</td><td>Nitya</td><td>Om Nityaya Namah</td><td>Eternal</td></tr>
            <tr><td>965</td><td>Sarvagata</td><td>Om Sarvagataya Namah</td><td>Omnipresent</td></tr>
            <tr><td>966</td><td>Sthanu</td><td>Om Sthanave Namah</td><td>The Immovable</td></tr>
            <tr><td>967</td><td>Ugra</td><td>Om Ugraya Namah</td><td>Fierce</td></tr>
            <tr><td>968</td><td>Sakshi</td><td>Om Sakshine Namah</td><td>Witness of All</td></tr>
            <tr><td>969</td><td>Prajapati</td><td>Om Prajapataye Namah</td><td>Lord of All Creatures</td></tr>
            <tr><td>970</td><td>Hiranyagarbha</td><td>Om Hiranyagarbhaya Namah</td><td>The Golden Womb</td></tr>
            <tr><td>971</td><td>Savitre</td><td>Om Savitre Namah</td><td>Lord of the Sun</td></tr>
            <tr><td>972</td><td>Lokakrit</td><td>Om Lokakrite Namah</td><td>Creator of the Universe</td></tr>
            <tr><td>973</td><td>Lokabhrit</td><td>Om Lokabhrite Namah</td><td>Sustainer of the Universe</td></tr>
            <tr><td>974</td><td>Vibhava</td><td>Om Vibhavaya Namah</td><td>One of Great Splendor</td></tr>
            <tr><td>975</td><td>Rama</td><td>Om Ramaya Namah</td><td>The Charming</td></tr>
            <tr><td>976</td><td>Shrimat</td><td>Om Shrimate Namah</td><td>Possessor of Glory</td></tr>
            <tr><td>977</td><td>Mahavishnu</td><td>Om Mahavishnave Namah</td><td>The Great Vishnu</td></tr>
            <tr><td>978</td><td>Jishnu</td><td>Om Jishnave Namah</td><td>The Triumphant</td></tr>
            <tr><td>979</td><td>Devahitavaha</td><td>Om Devahitavahaya Namah</td><td>Benefactor of the Devas</td></tr>
            <tr><td>980</td><td>Tattvatman</td><td>Om Tattvatmane Namah</td><td>Embodiment of Truth</td></tr>
            <tr><td>981</td><td>Taraka</td><td>Om Tarakaya Namah</td><td>Deliverer of Souls</td></tr>
            <tr><td>982</td><td>Brahman</td><td>Om Brahmane Namah</td><td>Supreme Reality</td></tr>
            <tr><td>983</td><td>Shashvata</td><td>Om Shashvataya Namah</td><td>Eternal</td></tr>
            <tr><td>984</td><td>Sarvasiddhida</td><td>Om Sarvasiddhidaya Namah</td><td>Bestower of All Accomplishments</td></tr>
            <tr><td>985</td><td>Akaravachya</td><td>Om Akaravachya Namah</td><td>Represented by the Letter 'A'</td></tr>
            <tr><td>986</td><td>Bhagavate</td><td>Om Bhagavate Namah</td><td>Possessor of Glory</td></tr>
            <tr><td>987</td><td>Shri</td><td>Om Shriye Namah</td><td>Embodiment of Prosperity</td></tr>
            <tr><td>988</td><td>Bhulilapataya</td><td>Om Bhulilapataye Namah</td><td>Lord of All Worlds</td></tr>
            <tr><td>989</td><td>Pumsa</td><td>Om Pumsa Namah</td><td>The Supreme Male</td></tr>
            <tr><td>990</td><td>Sarvalokeswara</td><td>Om Sarvalokeswaraya Namah</td><td>Lord of All Worlds</td></tr>
            <tr><td>991</td><td>Shrimat</td><td>Om Shrimate Namah</td><td>Possessor of Divine Wealth</td></tr>
            <tr><td>992</td><td>Sarvajna</td><td>Om Sarvajnaya Namah</td><td>All-Knowing</td></tr>
            <tr><td>993</td><td>Sarvatomukha</td><td>Om Sarvatomukhaya Namah</td><td>Facing All Directions</td></tr>
            <tr><td>994</td><td>Swami</td><td>Om Swamine Namah</td><td>Lord and Master</td></tr>
            <tr><td>995</td><td>Sushila</td><td>Om Sushilaya Namah</td><td>Gentle and Virtuous</td></tr>
            <tr><td>996</td><td>Sulabha</td><td>Om Sulabhaya Namah</td><td>Easy to Approach</td></tr>
            <tr><td>997</td><td>Sarvashaktimat</td><td>Om Sarvashaktimate Namah</td><td>Omnipotent</td></tr>
            <tr><td>998</td><td>Sarvashaktimat</td><td>Om Sarvashaktimate Namah</td><td>Omnipotent</td></tr>
            <tr><td>999</td><td>Nitya</td><td>Om Nityaya Namah</td><td>Eternal</td></tr>
            <tr><td>1000</td><td>Sampurnakama</td><td>Om Sampurnakamaya Namah</td><td>Fulfiller of All Desires</td></tr>
            </tbody>
          </table>
        {/* </table> */}

        <h3>Significance of Lord Rama 1000 Names</h3>
        <p>
          Lord Rama is an incarnation of Lord Vishnu where “<b>Ra</b>”, “<b>Ma</b>”, and “<b>A</b>” signify <b>the Sun</b>, <b>the Moon</b> and <b>Fire</b>, indicating calling the supreme light of God. Just imagine what power calling Lord Rama other names must hold. Pandits advise chanting his names, especially during <b>RamNavami Puja</b>, for peace and prosperity.
        </p>
        <p>
          Moreover, it is a perfect way for devotees to express their love and devotion towards the supreme Lord Rama. Chanting 1000 names of Lord Rama, one can attract his qualities in one’s own personality. It not only promotes spiritual growth but is a symbol of long-term protection against negative energies.
        </p>
        <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`accordion ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="accordion-icon">{openIndex === index ? "-" : "+"}</span>
            </div>
            <div className={`panel ${openIndex === index ? "open" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </Container>
    </Layout>
  );
};
export default Ram1000;
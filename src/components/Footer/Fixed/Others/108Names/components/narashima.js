import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Deity108ButtonGrid from "./commonGrid";
import Layout from "../../../../../Layout/Layout";
import Breadcrumbs from "../../../../../Breadcrumb";

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
const faqs = [
  {
    question: "What is Narasimha Shatanamavali?",
    answer:
      "Narasimha Ashtottara Shatanamavali is a collection of 108 names of Lord Narasimha. These names are very sacred and chanted to please Lord Narasimha.",
  },
  {
    question: "How does chanting Narasimha 108 names help??",
    answer:
      "Chanting the 108 names of Narasimha helps in many ways. Devotees have noticed reduced anxiety, stress and an increase in wealth by practising it. It is also said to provide success in achieving all your desires and the influence of all planets.",
  },
  {
    question: "How to chant 108 Narasimha names?",
    answer:
      "Sit in a relaxed position on the floor and place Narasimha’s idol in the East or North direction. Also, light incense sticks or diya in front of the idol. Next, glide one bead with each Narasimha name so that you make sure that you have chanted all 108 names of Narasimha.",
  },
  {
    question: "Which day to pray Narasimha?",
    answer:
      "The 108 Narasimha names are chanted on the 14th day of Vaishakh month, i.e. Vaishakha Shukla Chaturdashi. Devotees believe praying to him on his birthday, fulfils all your dreams and wishes. However, one can chant his names on other days as well.",
  },
  {
    question: "Why are Narasimha names so powerful?",
    answer:
      "Narasimha names are believed to be powerful, and that is why they are chanted by devotees with full dedication. Lord Narasimha loves his devotees immensely and would go to any extent to fulfil their wishes.",
  },
  {
    question: "Who is Lord Narasimha?",
    answer:
      "Lord Narasimha is the fourth avatar of Lord Narayana (Vishnu). He is believed to take birth in the form of a part-man, part-lion creature to save his devotee, Prahlada, from the evil plans of his father, Hiranyakashipu.",
  },
];

const Narashima108 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Layout
      title="108 Name of Lord Narasimha - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">108 Names of Lord Narasimha</h1>
          <h2>Chant Narasimha Names and Please him</h2>
          <h3>Learn Narasimha Ashtottara Shatanamavali</h3>
          <p>
            Lord Narasimha is the fourth avatar of Lord Narayana and is a highly
            regarded god in Hinduism. People celebrate his birth on the 14th day
            of Vaishakha by chanting his 108 names, also known as Narasimha
            Ashtottara Shatanamavali. Devotees look up to him as he saves his
            bhakt, Prahalada, from his father's evil plan, Hiranyakashyap.
          </p>
          <h3>108 Lord Narasimha Names With Meaning</h3>
          <p>
            Like every Hindu God, Lord Narasimha also has 108 names given to him
            based on his powers and life incidents. Chanting them is considered
            quite auspicious. Below is a complete list of Lord Narasimha names
            with meaning and associated mantras.
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
                  <td>Narasimha</td>
                  <td>Om Narasimhaya Namah</td>
                  <td>The half-man, half-lion</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mahavira</td>
                  <td>Om Mahaviraya Namah</td>
                  <td>The great hero</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mahadeva</td>
                  <td>Om Mahadevaya Namah</td>
                  <td>The great god</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Mahabalaparakrama</td>
                  <td>Om Mahabalaparakramaya Namah</td>
                  <td>The greatly powerful</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Divya-Simha-Rupa</td>
                  <td>Om Divya-Simha-Rupaya Namah</td>
                  <td>The one in a divine lion form</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Bhakta-Vatsala</td>
                  <td>Om Bhakta-Vatsalaya Namah</td>
                  <td>The one who is affectionate to devotees</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Ugra</td>
                  <td>Om Ugraya Namah</td>
                  <td>The ferocious</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Mahatma</td>
                  <td>Om Mahatmapaya Namah</td>
                  <td>The great soul</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Deva</td>
                  <td>Om Devaya Namah</td>
                  <td>The divine</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Achyuta</td>
                  <td>Om Achyutaya Namah</td>
                  <td>The infallible</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Bhava-Bhaya-Hara</td>
                  <td>Om Bhava-Bhayahara Namah</td>
                  <td>The one who removes the fear of existence</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Sarva-Pakshi-Hara</td>
                  <td>Om Sarva-Pakshi-Haraya Namah</td>
                  <td>The destroyer of all enemies</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Samagata-Suresha</td>
                  <td>Om Samagata-Sureshaya Namah</td>
                  <td>The lord of all gods assembled</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Satvata-Pataye</td>
                  <td>Om Satvata-Pataye Namah</td>
                  <td>The protector of the righteous</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Maharupa</td>
                  <td>Om Maharupaya Namah</td>
                  <td>The one with a great form</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Kamalalaya-Nivasa</td>
                  <td>Om Kamalalaya-Nivasaya Namah</td>
                  <td>The one who resides in the lotus</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Satya-Nitya-Svarupa</td>
                  <td>Om Satya-Nitya-Svarupaya Namah</td>
                  <td>The embodiment of truth and eternity</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Mahayasha</td>
                  <td>Om Mahayashase Namah</td>
                  <td>The one with great fame</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Sarva-Satva</td>
                  <td>Om Sarva-Satvaya Namah</td>
                  <td>The one who is present in all beings</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Sarva-Karta</td>
                  <td>Om Sarva-Kartre Namah</td>
                  <td>The doer of everything</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Sarva-Sampat-Pradayaka</td>
                  <td>Om Sarva-Sampat-Pradayakaya Namah</td>
                  <td>The bestower of all wealth</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Mahadeva</td>
                  <td>Om Mahadevaya Namah</td>
                  <td>The great god</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Kavi</td>
                  <td>Om Kavaye Namah</td>
                  <td>The poet</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Jagannatha</td>
                  <td>Om Jagannathaya Namah</td>
                  <td>The lord of the universe</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Hiranmaya</td>
                  <td>Om Hiranmayaya Namah</td>
                  <td>The golden one</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Sarvadeva</td>
                  <td>Om Sarvadevaya Namah</td>
                  <td>The god of all</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Shiva</td>
                  <td>Om Shivaya Namah</td>
                  <td>The auspicious</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Karala</td>
                  <td>Om Karalaya Namah</td>
                  <td>The one with a terrifying mouth</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Kamalekshana</td>
                  <td>Om Kamalekshanaya Namah</td>
                  <td>The lotus-eyed</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Vajra-Damstra</td>
                  <td>Om Vajra-Damstraya Namah</td>
                  <td>The one with teeth like thunderbolts</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Vajra-Nakha</td>
                  <td>Om Vajra-Nakhaya Namah</td>
                  <td>The one with claws like thunderbolts</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Vajra-Sringa</td>
                  <td>Om Vajra-Sringaya Namah</td>
                  <td>The one with horns like thunderbolts</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Vishvarupa</td>
                  <td>Om Vishvarupaya Namah</td>
                  <td>The one with a universal form</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Pashupata-Priya</td>
                  <td>Om Pashupata-Priyaya Namah</td>
                  <td>The one dear to the lord of animals</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Brahma</td>
                  <td>Om Brahmane Namah</td>
                  <td>The supreme brahman</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Kamalapati</td>
                  <td>Om Kamalapataye Namah</td>
                  <td>The lord of the lotus</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Hiranyakashipuh-Bhanjana</td>
                  <td>Om Hiranyakashipuh-Bhanjanaya Namah</td>
                  <td>The slayer of Hiranyakashipu</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Urugaya</td>
                  <td>Om Urugaya Namah</td>
                  <td>The one with a broad stride</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Mahashraya</td>
                  <td>Om Mahashrayaya Namah</td>
                  <td>The great refuge</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Aditya</td>
                  <td>Om Adityaya Namah</td>
                  <td>The son of Aditi</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Divakara</td>
                  <td>Om Divakaraya Namah</td>
                  <td>The creator of day</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Hiranyakashipuh-Hantre</td>
                  <td>Om Hiranyakashipuh-Hantre Namah</td>
                  <td>The killer of Hiranyakashipu</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Rakshasa-Gnaya</td>
                  <td>Om Rakshasa-Gnayaya Namah</td>
                  <td>The protector from demons</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Hiranyakashipuh-Kshitine</td>
                  <td>Om Hiranyakashipuh-Kshitine Namah</td>
                  <td>The protector of the earth</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Hunkarana</td>
                  <td>Om Hunkaranaya Namah</td>
                  <td>The creator of the primal sound 'Hun'</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Aditya-Nayana</td>
                  <td>Om Aditya-Nayanaya Namah</td>
                  <td>The son of Aditya</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Mahakala</td>
                  <td>Om Mahakalaya Namah</td>
                  <td>The great time</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Rakshakara</td>
                  <td>Om Rakshakaraya Namah</td>
                  <td>The one who takes the form of a protector</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Nishkarana</td>
                  <td>Om Nishkaranaya Namah</td>
                  <td>The remover of ignorance</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Narayana</td>
                  <td>Om Narayanaya Namah</td>
                  <td>The refuge of mankind</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Bhadrakara</td>
                  <td>Om Bhadrakaraya Namah</td>
                  <td>The one who performs auspicious deeds</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Divya-Rupa</td>
                  <td>Om Divya-Rupaya Namah</td>
                  <td>The one with a divine form</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Mahabhuta</td>
                  <td>Om Mahabhutaya Namah</td>
                  <td>The great being</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Shrinihara</td>
                  <td>Om Shriniharaya Namah</td>
                  <td>The one who brings prosperity</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Shripriya</td>
                  <td>Om Shripriyaya Namah</td>
                  <td>The beloved of Lakshmi</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Lakshmikantha</td>
                  <td>Om Lakshmikanthaya Namah</td>
                  <td>The consort of Lakshmi</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Maha-Deepa</td>
                  <td>Om Maha-Deepaya Namah</td>
                  <td>The great light</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Narasimha</td>
                  <td>Om Narasimhaya Namah</td>
                  <td>The half-man, half-lion</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Narasimha-Rupa</td>
                  <td>Om Narasimha-Rupaya Namah</td>
                  <td>The one with a half-man, half-lion form</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Ananta-Rupa</td>
                  <td>Om Ananta-Rupaya Namah</td>
                  <td>The one with infinite forms</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Nishkara</td>
                  <td>Om Nishkaraya Namah</td>
                  <td>The remover of ignorance</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Nakshatra</td>
                  <td>Om Nakshatraya Namah</td>
                  <td>The lord of the stars</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Nirantara</td>
                  <td>Om Nirantaraya Namah</td>
                  <td>The continuous</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Shankara</td>
                  <td>Om Shankaraya Namah</td>
                  <td>The benefactor</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Krishnamaya</td>
                  <td>Om Krishnamayaya Namah</td>
                  <td>The dark one</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Suvarna</td>
                  <td>Om Suvarnaya Namah</td>
                  <td>The golden</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Bhaskara</td>
                  <td>Om Bhaskaraya Namah</td>
                  <td>The radiant</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Adbhuta</td>
                  <td>Om Adbhutaya Namah</td>
                  <td>The wonderful</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Amara</td>
                  <td>Om Amaraya Namah</td>
                  <td>The immortal</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Rakshojit</td>
                  <td>Om Rakshojitaya Namah</td>
                  <td>The one who is victorious over demons</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Asuradhisha</td>
                  <td>Om Asuradhishaya Namah</td>
                  <td>The lord of demons</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Rakshasanta</td>
                  <td>Om Rakshasantaya Namah</td>
                  <td>The destroyer of demons</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Nishkriti</td>
                  <td>Om Nishkritaye Namah</td>
                  <td>The liberator</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Bhakta-Vighna-Vinashakaya</td>
                  <td>Om Bhakta-Vighna-Vinashakaya Namah</td>
                  <td>The remover of devotee's obstacles</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Narayana</td>
                  <td>Om Narayanaya Namah</td>
                  <td>The refuge of mankind</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Srikantha</td>
                  <td>Om Srikanthaya Namah</td>
                  <td>The one with a glorious throat</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Nirguna</td>
                  <td>Om Nirgunaya Namah</td>
                  <td>The one without attributes</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Raksha-Tejas</td>
                  <td>Om Raksha-Tejasaya Namah</td>
                  <td>The one who possesses the light of protection</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Nishkarana</td>
                  <td>Om Nishkaranaya Namah</td>
                  <td>The one who removes ignorance</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Niranjana</td>
                  <td>Om Niranjanaya Namah</td>
                  <td>The one who is free from impurities</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Nirakara</td>
                  <td>Om Nirakaraya Namah</td>
                  <td>The one who is formless</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Rakshasanta</td>
                  <td>Om Rakshasantaya Namah</td>
                  <td>The destroyer of demons</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Nirupama</td>
                  <td>Om Nirupamaya Namah</td>
                  <td>The incomparable</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Nirantara</td>
                  <td>Om Nirantaraya Namah</td>
                  <td>The continuous</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Nishkalanka</td>
                  <td>Om Nishkalankaya Namah</td>
                  <td>The one who is blemishless</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Nirguna</td>
                  <td>Om Nirgunaya Namah</td>
                  <td>The one without attributes</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Nirvikara</td>
                  <td>Om Nirvikaraya Namah</td>
                  <td>The unchanging</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Niravadhya</td>
                  <td>Om Niravadhyaya Namah</td>
                  <td>The flawless</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Niranjana</td>
                  <td>Om Niranjanaya Namah</td>
                  <td>The one who is free from impurities</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Nirantara</td>
                  <td>Om Nirantaraya Namah</td>
                  <td>The continuous</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Nishkalanka</td>
                  <td>Om Nishkalankaya Namah</td>
                  <td>The one who is blemishless</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Nirguna</td>
                  <td>Om Nirgunaya Namah</td>
                  <td>The one without attributes</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Nirvikara</td>
                  <td>Om Nirvikaraya Namah</td>
                  <td>The unchanging</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Niravadhya</td>
                  <td>Om Niravadhyaya Namah</td>
                  <td>The flawless</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Niranjana</td>
                  <td>Om Niranjanaya Namah</td>
                  <td>The one who is free from impurities</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Nirantara</td>
                  <td>Om Nirantaraya Namah</td>
                  <td>The continuous</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Nishkalanka</td>
                  <td>Om Nishkalankaya Namah</td>
                  <td>The one who is blemishless</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Nirguna</td>
                  <td>Om Nirgunaya Namah</td>
                  <td>The one without attributes</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Nirvikara</td>
                  <td>Om Nirvikaraya Namah</td>
                  <td>The unchanging</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Niravadhya</td>
                  <td>Om Niravadhyaya Namah</td>
                  <td>The flawless</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Niranjana</td>
                  <td>Om Niranjanaya Namah</td>
                  <td>The one who is free from impurities</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Nirantara</td>
                  <td>Om Nirantaraya Namah</td>
                  <td>The continuous</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Nishkalanka</td>
                  <td>Om Nishkalankaya Namah</td>
                  <td>The one who is blemishless</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Nirguna</td>
                  <td>Om Nirgunaya Namah</td>
                  <td>The one without attributes</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Nirvikara</td>
                  <td>Om Nirvikaraya Namah</td>
                  <td>The unchanging</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Niravadhya</td>
                  <td>Om Niravadhyaya Namah</td>
                  <td>The flawless</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Niranjana</td>
                  <td>Om Niranjanaya Namah</td>
                  <td>The one who is free from impurities</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Nirantara</td>
                  <td>Om Nirantaraya Namah</td>
                  <td>The continuous</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Choosing A Lord Narasimha Name For Newborn Baby</h3>
          <p>
            A Lord Narasimha name for a newborn baby can be a great way to
            honour the lord and attract his blessings. But how do you decide on
            a suitable name for your kid? Go through the below-suggested steps
            to name your baby boy or baby girl:
          </p>
          <ol>
            <li>
              Go through the list of 108 names of lord Narasimha and understand
              each name’s meaning carefully.
            </li>
            <li>
              Now, think of the qualities that you wish your child to relate to.
              Is it Narasimha’s loving nature? Or is it his strong will to
              protect the world?
            </li>
            <li>
              Now, select the names that best convey the meaning you desire for
              your child’s name.
            </li>
            <li>
              Take an example. Suppose you wish to see your baby girl as the
              best performer in everything she does, then you can go for
              “Akshara” from the Narasimha name list.
            </li>
            <li>
              Now, share your top-selected Narasimha names with your elders.
              They will further help you choose the ones that go with your
              family name or tradition.
            </li>
            <li>
              Lastly, consult an astrologer who can select the most auspicious
              Narasimha name for your kid based on the birth chart.
            </li>
          </ol>
          <h3>Benefits Of Chanting Lord Narasimha 108 Names</h3>
          <p>
            Chanting the 108 names of Narasimha has many benefits. Devotees
            believe that pleasing Lord Narasimha pleases Lord Narayana (Vishnu)
            and offers favours in various aspects of their personal and
            professional lives.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Eliminate Karmic Debts:</b> Chanting Narasimha 108 names is
              believed to free people from their sins and purify their karma.
              Regular practice of this chant motivates a person to follow the
              path of goodness.
            </ListItem>
            <ListItem>
              <b>Cure Diseases:</b>Devotees have seen improvement in health and
              cure from illnesses with chanting of 108 Narasimha names. It is
              believed to reduce the symptoms of fever and any other kind of
              health issues.
            </ListItem>
            <ListItem>
              <b>Remove Negative Influence of Planets:</b>In case you have the
              negative influence of any planet in your kundli, chanting
              Narasimha names can help. When Lord Narasimha is pleased, he will
              go to any extent to protect his devotees.
            </ListItem>
            <ListItem>
              <b>Achieve Dreams, Wealth and Success:</b>The one who chants 108
              names of Narasimha, especially on the lord’s birthday (14th day of
              Vaishakh), benefits greatly. It is said to fulfil your dreams,
              increase wealth and offer you success.
            </ListItem>
          </UnorderedList>
          <h3>The Ideal Way To Chant Lord Narasimha 108 Names</h3>
          <p>
            Do you wish to please Lord Narasimha? To do so, you need to follow
            certain rules while chanting 108 Narasimha names. Keeping in mind
            specific things while chanting pleases the lord. Let’s have a look
            at each thing briefly.
          </p>
          <h3>Ideal Direction To Chant Narasimha Namavali</h3>
          <p>
            The best direction to chant the 108 names of Lord Narasimha is
            either East or North. Facing these directions pleases the lord and
            also helps you attract positive vibrations of the direction. Plus,
            these directions signify bravery and strength.
          </p>
          <p>
            Remembering the right direction while chanting Narasimha names is a
            great way to pray to the lord and ask for his blessings. So, please
            keep the directions in check.
          </p>
          <h3>Ideal Time To Chant Narasimha Namavali</h3>
          <p>
            The best time to chant 108 Narasimha names is during Brahma Muhurta,
            i.e. the early mornings that exist between 3:30 am and 5:30 am. This
            duration is quite peaceful, as the world has not woken yet, thereby,
            an ideal time to please the lord.
          </p>
          <p>
            However, you can also chant the Narasimha Namavali at sunrise, in
            the evening and even before going to bed. This is most effective on
            Vaishakha Shukla Chaturdashi.
          </p>
          <h3>Ideal Beads To Chant Narasimha Namavali</h3>
          <p>
            One can use any bead to pray to Lord Narasimha. However, the highly
            recommended ones while chanting 108 names of Narasimha are Tulsi
            beads and Moira stones (Vaijayanti mala). The Tulsi seeds symbolise
            healing, while the Vaijayanti signifies win over all desires.
          </p>
          <p>
            Whatever seed you choose, make sure you bind it into a mala using an
            extra Guru bead having the face of Lord Narasimha. Next, glide one
            bead with each name to count correctly.
          </p>
          <h3>Ideal Setting/Atmospehere To Chant Narasimha Namavali</h3>
          <p>
            Take a bath and wear fresh clothes before chanting the 108 names of
            Lord Narasimha. Next, sit in a relaxed position on an asana mat on
            the floor. Place the Narasimha idol’s picture and face it with a
            lighted incense stick or diya.
          </p>
          <p>
            However, the first and foremost important thing is to understand the
            meaning behind each Narasimha name. This will indicate full devotion
            to the god.
          </p>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div
                className={`accordion ${openIndex === index ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="accordion-icon">
                  {openIndex === index ? "-" : "+"}
                </span>
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
export default Narashima108;

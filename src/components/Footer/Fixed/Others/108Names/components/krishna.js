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
    question: "What are the 108 names of Krishna?",
    answer:
      "The 108 names of Krishna are popularly known as Sri Krishna Ashtottara Shatanamavali. People chant it to ask for Lord Krishna’s blessings. Here, it is available as the list of 108 names of Lord Krishna in English and Hindi.",
  },
  {
    question: "Are the Krishna names powerful?",
    answer:
      "Krishna names are very powerful sacred names. Chanting them offers great personal growth and keeps away health issues or any kind of negative energy. It even helps the ones who have committed sins and wish to clear their karma.",
  },
  {
    question: "What does the Sri Krishna 108 names teach us?",
    answer:
      "The Krishna 108 names in English and Hindi are based on Sri Krishna's life, and hence, their meanings teach us the way of right living. They inspire us to adopt Krishna Ji’s qualities, such as compassion, kindness, justice, discipline, impartiality, control, etc.",
  },
  {
    question: "Can Krishna 108 names be a boy name?",
    answer:
      "Yes, keeping Lord Krishna names for baby boy is auspicious. It is a great way to honour Sri Krishna and inspire your kid to adopt his qualities, attitude and way of living.",
  },
  {
    question: "How to chant 108 names of Lord Krishna?",
    answer:
      "Take a comfortable position at an undisturbed place, free from unnecessary noises. This can be achieved mostly in the early mornings. Light incense sticks, palace god’s murti in the east or west and face it. Now, chant the 108 names with gliding mala.",
  },
  {
    question: "Which day should not be missed for chanting Krishna names?",
    answer:
      "Wednesday is regarded as an auspicious day to chant Krishna 108 names. So, if you are not able to chant every day, you must make sure to chant Krishna Namavali on this day to please Lord Krishna.",
  },
];

const Krishna108 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout
      title="108 Name of Lord Krishna - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">108 Names of Lord Krishna</h1>
          <h2>The Powerful Chant To Please Sri Krishna</h2>
          <h3>Learn Krishna Ashtottara Shatanamavali</h3>
          <p>
            The 108 names of Lord Krishna, also known as Sri Krishna Ashtottara
            Shatanamavali, are sacred words chanted to please him. Lord Krishna
            is one of the most celebrated deities in Hinduism. He is the teacher
            of dharma, devotion and the true realities of the world. Taking his
            blessings offers great happiness in all aspects of life.
          </p>
          <h3>108 Names Of Lord Krishna With Meaning</h3>
          <p>
            For ages, people have praised Shri Krishna with names such as
            Govind, Kanhaiya, Parth etc. Below is a complete list of 108 names
            of Lord Krishna with meaning and associated mantra. Chanting these
            names together showers his divine blessings upon us.
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
                  <td>Achala</td>
                  <td>Om Achalaya Namah</td>
                  <td>Still Lord</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Achyuta</td>
                  <td>Om Achyutaya Namah</td>
                  <td>Infallible Lord</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Adbhutah</td>
                  <td>Om Adbhutaya Namah</td>
                  <td>Wonderful God</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Adidev</td>
                  <td>Om Adidevaya Namah</td>
                  <td>The Lord of the Lords</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Aditya</td>
                  <td>Om Adityaya Namah</td>
                  <td>The Son of Aditi</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Ajanma</td>
                  <td>Om Ajanmaya Namah</td>
                  <td>One Who Is Limitless and Endless</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Ajaya</td>
                  <td>Om Ajayaya Namah</td>
                  <td>The Conqueror of Life and Death</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Amit</td>
                  <td>Om Amitaya Namah</td>
                  <td>Innumerable and Boundless</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Amogh</td>
                  <td>Om Amoghaya Namah</td>
                  <td>The Lord Who Is Invincible and Indestructible</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Ananda</td>
                  <td>Om Anandaya Namah</td>
                  <td>The Lord Who Is the Embodiment of Love</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Ananta</td>
                  <td>Om Anantaya Namah</td>
                  <td>The Eternal Lord</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Anantajit</td>
                  <td>Om Anantajitaya Namah</td>
                  <td>The Ever Victorious Lord</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Anaya</td>
                  <td>Om Anayaya Namah</td>
                  <td>One Who Has No Leader</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Aniruddha</td>
                  <td>Om Aniruddhaya Namah</td>
                  <td>The Lord Who Cannot Be Obstructed</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Aparajit</td>
                  <td>Om Aparajitaya Namah</td>
                  <td>The Lord Who Cannot Be Defeated</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Avyukta</td>
                  <td>Om Avyuktaya Namah</td>
                  <td>One Who Is As Clear As Crystal</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Balgopal</td>
                  <td>Om Balgopalaya Namah</td>
                  <td>The Child Form of Lord Krishna</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Bali</td>
                  <td>Om Baliaya Namah</td>
                  <td>The Lord Who Is All Powerful</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Chaturbhuj</td>
                  <td>Om Chaturbhujaya Namah</td>
                  <td>Four-Armed Lord</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Danavendra</td>
                  <td>Om Danavendraya Namah</td>
                  <td>Granter of Boons</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Dayalu</td>
                  <td>Om Dayalave Namah</td>
                  <td>Repositor of Compassion</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Dayanidhi</td>
                  <td>Om Dayanidhaye Namah</td>
                  <td>Compassionate Lord</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Devadidev</td>
                  <td>Om Devadidevaya Namah</td>
                  <td>The God of the Gods</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Devakinandan</td>
                  <td>Om Devakinandanaya Namah</td>
                  <td>Son of Devaki</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Devesh</td>
                  <td>Om Deveshaya Namah</td>
                  <td>Lord of the Lords</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Dharmadhyaksha</td>
                  <td>Om Dharmadhyakshaya Namah</td>
                  <td>The Lord of Dharma</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Dwarkapati</td>
                  <td>Om Dwarkapataye Namah</td>
                  <td>Lord of Dwarka</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Gopal</td>
                  <td>Om Gopalaya Namah</td>
                  <td>One Who Plays with the Cowherd Boys</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Gopalpriya</td>
                  <td>Om Gopalpriyaya Namah</td>
                  <td>Lover of Cowherds</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Govinda</td>
                  <td>Om Govindaya Namah</td>
                  <td>
                    One Who Pleases the Cows, the Land, and the Entire Nature
                  </td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Gyaneshwar</td>
                  <td>Om Gyaneshwaraya Namah</td>
                  <td>The Lord of Knowledge</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Hari</td>
                  <td>Om Haraye Namah</td>
                  <td>The Lord Who Takes Away Sins</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Hiranyagarbha</td>
                  <td>Om Hiranyagarbhaya Namah</td>
                  <td>The All Powerful Creator</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Hrishikesh</td>
                  <td>Om Hrishikeshaya Namah</td>
                  <td>The Lord of All Senses</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Jagadguru</td>
                  <td>Om Jagadgurave Namah</td>
                  <td>Preceptor of the Universe</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Jagadisha</td>
                  <td>Om Jagadishaya Namah</td>
                  <td>Protector of All</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Jagannath</td>
                  <td>Om Jagannathaya Namah</td>
                  <td>Lord of the Universe</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Janardhana</td>
                  <td>Om Janardhanaya Namah</td>
                  <td>One Who Bestows Boons on One and All</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Jayantah</td>
                  <td>Om Jayantaya Namah</td>
                  <td>Conqueror of All Enemies</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Jyotiraaditya</td>
                  <td>Om Jyotiraadityaya Namah</td>
                  <td>The Resplendence of the Sun</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Kamalnath</td>
                  <td>Om Kamalnathaya Namah</td>
                  <td>Lord of Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Kamalnayan</td>
                  <td>Om Kamalnayanaya Namah</td>
                  <td>The Lord With Lotus Shaped Eyes</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Kamsantak</td>
                  <td>Om Kamsantakaya Namah</td>
                  <td>Slayer of Kamsa</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Kanjalochana</td>
                  <td>Om Kanjalochanaya Namah</td>
                  <td>The Lord With Beautiful Lotus Shaped Eyes</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Keshava</td>
                  <td>Om Keshavaya Namah</td>
                  <td>One Who Has Long, Black Matted Locks</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Krishna</td>
                  <td>Om Krishnaya Namah</td>
                  <td>Dark-Complexioned Lord</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Lakshmikantam</td>
                  <td>Om Lakshmikantaya Namah</td>
                  <td>The Lord of Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Lokadhyaksha</td>
                  <td>Om Lokadhyakshaya Namah</td>
                  <td>Lord of All the Three Worlds</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Madan</td>
                  <td>Om Madanaya Namah</td>
                  <td>The Lord Who Is Always</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Madhava</td>
                  <td>Om Madhavaya Namah</td>
                  <td>Husband of the Goddess of Fortune</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Madhusudana</td>
                  <td>Om Madhusudanaya Namah</td>
                  <td>Killer of the Demon Madhu</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Mahendra</td>
                  <td>Om Mahendraya Namah</td>
                  <td>Lord of Indra</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Manohara</td>
                  <td>Om Manoharaya Namah</td>
                  <td>One Who Is Beautiful</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Mayur</td>
                  <td>Om Mayuraya Namah</td>
                  <td>Lord Krishna With a Peacock Feather</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Murali</td>
                  <td>Om Muraline Namah</td>
                  <td>Flute Player</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Murlidhar</td>
                  <td>Om Murlidharaya Namah</td>
                  <td>One Who Holds the Flute</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Murlimanohar</td>
                  <td>Om Murlimanoharaya Namah</td>
                  <td>The Lord With a Fascinating Flute</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Nandgopala</td>
                  <td>Om Nandgopalaya Namah</td>
                  <td>The Son of Nand</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Narayana</td>
                  <td>Om Narayanaya Namah</td>
                  <td>The Refuge of Everyone</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Niranjana</td>
                  <td>Om Niranjanaya Namah</td>
                  <td>The Unblemished Lord</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Nirguna</td>
                  <td>Om Nirgunaya Namah</td>
                  <td>Without Any Properties</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Padmahasta</td>
                  <td>Om Padmahastaya Namah</td>
                  <td>One Who Has Hands Like Lotus</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Padmanabha</td>
                  <td>Om Padmanabhaya Namah</td>
                  <td>The Lord Who Has a Lotus Shaped Navel</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Parabrahmana</td>
                  <td>Om Parabrahmanaya Namah</td>
                  <td>The Supreme Absolute Truth</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Paramatma</td>
                  <td>Om Paramatmane Namah</td>
                  <td>The Supersoul in Every Living Being's Heart</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Parameshwar</td>
                  <td>Om Parameshwaraya Namah</td>
                  <td>The Supreme Lord</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Parampurusha</td>
                  <td>Om Parampurushaya Namah</td>
                  <td>The Supreme Person</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Parthasarthi</td>
                  <td>Om Parthasarthine Namah</td>
                  <td>Charioteer of Partha (Arjuna)</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Punya</td>
                  <td>Om Punyaya Namah</td>
                  <td>The Lord Who Is Meritorious</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Purana Purusha</td>
                  <td>Om Puranapurushaya Namah</td>
                  <td>The Ancient Lord</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Purushottama</td>
                  <td>Om Purushottamaya Namah</td>
                  <td>The Supreme Personality</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Radha Vallabh</td>
                  <td>Om Radha Vallabhaya Namah</td>
                  <td>Lover of Radha</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Rajiv Lochana</td>
                  <td>Om Rajiv Lochanaya Namah</td>
                  <td>The Lotus-Eyed God</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Ramesh</td>
                  <td>Om Rameshaya Namah</td>
                  <td>The Lord of Lakshmi</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Shyam</td>
                  <td>Om Shyamaya Namah</td>
                  <td>Dark-Complexioned Lord</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Shyamsundara</td>
                  <td>Om Shyamsundaraya Namah</td>
                  <td>The Lord Who Is Black and Beautiful</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Satyavrata</td>
                  <td>Om Satyavrataya Namah</td>
                  <td>The Lord Who Has Taken Many Forms</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Shrinath</td>
                  <td>Om Shrinathaya Namah</td>
                  <td>Lord of Lakshmi</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Shrikanta</td>
                  <td>Om Shrikantaya Namah</td>
                  <td>The Beautiful Lord</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Shri Vallabh</td>
                  <td>Om Shri Vallabhaya Namah</td>
                  <td>Beloved of Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Shridhar</td>
                  <td>Om Shridharaya Namah</td>
                  <td>One Who Holds Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Shridhara</td>
                  <td>Om Shridhare Namah</td>
                  <td>The Holder of the Divine Lakshmi</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Shrivatsa</td>
                  <td>Om Shrivatsaya Namah</td>
                  <td>The Lord Who Wears the Srivatsa Mark</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Shriman</td>
                  <td>Om Shrimane Namah</td>
                  <td>The Lord Who Is Always Wealthy</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Shrinivasa</td>
                  <td>Om Shrinivasaya Namah</td>
                  <td>The Abode of Lakshmi</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Sudarshana</td>
                  <td>Om Sudarshanaya Namah</td>
                  <td>Handsome Lord</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Sumedha</td>
                  <td>Om Sumedhaya Namah</td>
                  <td>The Intelligent Lord</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Sureshwar</td>
                  <td>Om Sureshwaraya Namah</td>
                  <td>The Lord of All Demigods</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Trivikrama</td>
                  <td>Om Trivikramaya Namah</td>
                  <td>Conqueror of All the Three Worlds</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Upendra</td>
                  <td>Om Upendraya Namah</td>
                  <td>Brother of Indra</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Vaikunthanatha</td>
                  <td>Om Vaikunthanathaya Namah</td>
                  <td>Lord of Vaikuntha, the Spiritual Abode</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Vardhamana</td>
                  <td>Om Vardhamanaya Namah</td>
                  <td>The Lord Who Grows and Multiplies</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Vasudeva</td>
                  <td>Om Vasudevaya Namah</td>
                  <td>All-Pervading Lord</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Vishnu</td>
                  <td>Om Vishnave Namah</td>
                  <td>All-Pervading Lord</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Vishwaksena</td>
                  <td>Om Vishwaksenaya Namah</td>
                  <td>One Who Is Always Victorious</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Vishwatma</td>
                  <td>Om Vishwatmane Namah</td>
                  <td>Soul of the Universe</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Yadavendra</td>
                  <td>Om Yadavendraya Namah</td>
                  <td>King of the Yadavas</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Yadunandana</td>
                  <td>Om Yadunandanaya Namah</td>
                  <td>Son of the Yadava Clan</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Yamunapriya</td>
                  <td>Om Yamunapriyaya Namah</td>
                  <td>Beloved of Yamuna River</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Yashoda Nandana</td>
                  <td>Om Yashoda Nandanaya Namah</td>
                  <td>Son of Yashoda</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Yogeshwar</td>
                  <td>Om Yogeshwaraya Namah</td>
                  <td>Lord of Yogis</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Yugandhara</td>
                  <td>Om Yugandharaya Namah</td>
                  <td>The Lord Who Bears Time</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Vatsala</td>
                  <td>Om Vatsalaya Namah</td>
                  <td>Loving Lord</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Vrindavana</td>
                  <td>Om Vrindavanaya Namah</td>
                  <td>The Lord Who Is Present in Vrindavana</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Vrajapati</td>
                  <td>Om Vrajapataye Namah</td>
                  <td>Lord of Vraja</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Varshneya</td>
                  <td>Om Varshneyaya Namah</td>
                  <td>One Who Is From Vrishni Clan</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Venu Gopala</td>
                  <td>Om Venu Gopalaya Namah</td>
                  <td>The Lord Who Plays the Flute</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Vallabha</td>
                  <td>Om Vallabhaya Namah</td>
                  <td>Beloved</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Naming A Sri Krishna Name For Newborn Baby</h3>
          <p>
            Giving a Sri Krishna name to a newborn baby has been a favourite
            ritual in Indian culture. Choosing a name from the list of Sri
            Krishna 108 name is a great way to honour the god and see his
            qualities in your baby.
          </p>
          <p>
            Consider the following steps to choose Lord Krishna names for baby
            boy or a baby girl.
          </p>
          <ol>
            <li>
              First of all, learn the name and meaning of each Krishna name. For
              your ease, we have provided the 108 names of Lord Krishna in
              English and Hindi.
            </li>
            <li>
              Next, think of the qualities that you wish to see in your kid. Is
              it Krishna’s compassion, patience, and forgiveness? Or is it his
              justice and truthfulness?
            </li>
            <li>
              Take an example. Suppose you wish for a name that means supreme or
              the most powerful. Then, Anant would be good out of 108 Lord
              Krishna names for baby boy.
            </li>
            <li>
              Share your top picks out of the list with your elders. Make sure
              that the name matches your family tradition.
            </li>
            <li>
              Lastly, you can consult a pandit or astrologer who can give
              insights on the name based on your kid’s birth chart.
            </li>
          </ol>
          <h3>Benefits of Chanting Sri Krishna 108 Names</h3>
          <p>
            Our Krishna Ji is the main character of the Bhagavad Gita and the
            eighth avatar of Lord Vishnu. Chanting the 108 names of Krishna has
            powerful impacts, which is why devotees have been practising it
            since ancient times.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Control over five senses:</b>Chanting Krishna names improves
              self-awareness and offers inner strength. People who chant it
              regularly have noticed better control over their five senses
              (taste, sound, smell, sight, and touch). This clearly shows mental
              clarity and spiritual growth.
            </ListItem>
            <ListItem>
              <b>Wealth and Luck: </b>Sri Krishna is considered extremely
              powerful. Chanting 108 names of Krishna is believed to offer good
              luck and wealth in the long run. Regularly practising it makes you
              more disciplined, leading you to success.
            </ListItem>
            <ListItem>
              <b>Compassion and Kindness: </b>Our lovable lord, Krishna, is
              extremely compassionate and kind. When you understand the meaning
              of each Krishna name you chant, you get inspired by his qualities,
              especially these. You start to show it in your daily life.
            </ListItem>
            <ListItem>
              <b>Cleaning Of Karma: </b>Chanting 108 names of Krishna is also
              said to free you from the bad impacts of your past karma. It is
              believed to purify your soul and create a positive environment
              around you, motivating you to attract good things in life.
            </ListItem>
          </UnorderedList>
          <h3>The Ideal Way To Chant Sri Krishna 108 Names</h3>
          <p>
            To gain maximum benefits from chanting Krishna names, we need to
            keep certain things in mind. You can visit the list of Krishna 108
            names in English and Hindi today. Meanwhile, let us learn how to
            make the experience rewarding.
          </p>
          <h3>Ideal Direction To Chant Krishna Namavali</h3>
          <p>
            The best direction to chant Krishna Namavali (108 Krishna names) is
            either East or West. You can choose any of the two directions to
            please Lord Krishna. The Krishna’s murti, or Krishna Yantra, must
            also be kept in this direction at eye level.
          </p>
          <p>
            Remembering the ideal direction while chanting Krishna names ensures
            that your prayers are being received rightly. Alongside, you get
            positive vibrations.
          </p>
          <h3>Ideal Time To Chant Krishna Namavali</h3>
          <p>
            Early mornings, the Brahma Muhurta, are the quietest and calmest
            times of the day and, hence, ideal for chanting Krishna names. It
            starts 1.5 hours before sunrise (3.30 a.m. and 5.30 a.m.). It is
            called the time of creation and, thus, auspicious.
          </p>
          <p>
            However, there are no hard and fast rules for chanting Sri Krishna
            Ashtottara Shatanamavali at the right time. Either morning, noon,
            evening or midnight can be selected for pratising it.
          </p>
          <h3>Ideal Beads To Chant Krishna Namavali</h3>
          <p>
            Tulsi and Neem beads are considered the topmost japa mala for
            chanting Krishna Namavali. Whenever you buy or collect a new set of
            these beads, soak them in sandalwood or mustard oil for a day. This
            prevents them from breaking in the future.
          </p>
          <p>
            Apart from keeping 108 beads in the japa mala, keep one extra Guru
            bead. It ties the mala and acts as a spiritual teacher. Glide one
            bead with each Krishna name to keep the count.
          </p>
          <h3>Ideal Setting/Atmosphere To Chant Krishna Namavali</h3>
          <p>
            Sit in a relaxed position at a calm place where you won’t be
            disturbed. Light incense sticks and place Krishna’s statue in the
            ideal direction as specified. Now, pronounce each Krishna name with
            the associated mantra until the count is 108.
          </p>
          <p>
            It is very important to remember that you understand the meaning of
            each word you are chanting. It will not only attract god’s blessings
            but also teach you discipline.
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
export default Krishna108;

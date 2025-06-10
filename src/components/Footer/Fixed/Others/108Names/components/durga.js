import React, { useState } from "react";
import styled from "styled-components";
import Deity108ButtonGrid from "./commonGrid";
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
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const faqs = [
  {
    question: "What is Devi Ashtottara Shatanamavali?",
    answer:
      "Devi Ashtottara Shatanamavali is a sacred chant containing 108 names of Goddess Durga. It's like a spiritual playlist that helps you connect with the divine feminine energy. Each name represents a unique aspect of Maa Durga's power and grace.",
  },
  {
    question: "Why is chanting 108 names of Maa Durga important?",
    answer:
      "Chanting these names is believed to invoke Durga's blessings and protection. It's like sending your prayers and asking favours to the goddess. Many devotees find that this practice brings inner peace, strength, and spiritual growth.",
  },
  {
    question: "How to chant 108 names of Durga?",
    answer:
      "Start by finding a comfortable spot and setting a peaceful mood. You can use a mala (prayer beads), either Rudraksha, Shuddha Sphatika or Kamal bija to keep count. Or simply recite the names from the list. The key is to chant Devi 108 Namavali with focus and devotion.",
  },
  {
    question: "What is the mythology behind the Devi 108 Namavali?",
    answer:
      "According to Hindu mythology, Lord Shiva is the son of Maa Durga. Once, he paid respect and displayed his love towards her mother by reciting the 108 names of Goddess Durga.",
  },
  {
    question: "Should we chant Devi Ashtottara Shatanamavali during Navaratri?",
    answer:
      "Absolutely. In fact, chanting Devi 108 Namavali during Navaratri is considered extremely auspicious. It is the best way to honour and pray to the nine forms of Goddess Durga.",
  },
  {
    question: "Can we chant 108 names of Durga at night?",
    answer:
      "Yes, you can. But it is advisable to chant 108 names of Maa Durga during Brahma Muhurta. This period occurs 1.5 hours before the sunrise. Chanting during this time is believed to be most effective.",
  },
];

const Duurga108 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Layout
      title="108 Name of Goddess Durga - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1>108 Names of Goddess Durga</h1>
          <h2>Chant Devi Namavali To Please Maa Durga!</h2>
          <h3>Learn Devi Ashtottara Shatanamavali</h3>
          <p>
            Maa Durga is a popular God in Hinduism. People believe that pleasing
            her can bring peace, wealth and happiness.But, do you know there is
            a special way to pray to her? By chanting Devi Ashtottara
            Shatanamavali i.e. the 108 names of powerful goddess Durga. Here, we
            will learn how to add these names to our daily lives and get
            blessings.
          </p>
          <h3>108 Names of Maa Durga With Meaning</h3>
          <p>
            In Hindu mythology, it is believed that Lord Shiva was the first to
            recite the 108 names of Maa Durga, her mother. Since then, these 108
            names have a special importance. Below is the list of names 108
            names of Durga in English with meaning and mantra.
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
                  <td>Durga</td>
                  <td>Om Durga Devyai Namah</td>
                  <td>The Invincible</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Durgati Nashini</td>
                  <td>Om Durgati Nashinyai Namah</td>
                  <td>The One who eliminates suffering</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Durgeshwari</td>
                  <td>Om Durgeshwaryai Namah</td>
                  <td>Goddess of the Fort</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Shailaputri</td>
                  <td>Om Shailaputriyai Namah</td>
                  <td>Daughter of the Himalayas</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Brahmacharini</td>
                  <td>Om Brahmacharinyai Namah</td>
                  <td>The One who observes penance</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Chandraghanta</td>
                  <td>Om Chandraghantayai Namah</td>
                  <td>One who has a half moon on her forehead</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Kushmanda</td>
                  <td>Om Kushmandayai Namah</td>
                  <td>The Creator of the Universe</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Skandamata</td>
                  <td>Om Skandamatayai Namah</td>
                  <td>Mother of Skanda (Kartikeya)</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Katyayani</td>
                  <td>Om Katyayanyai Namah</td>
                  <td>The One who was born to sage Katya</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Kaalratri</td>
                  <td>Om Kaalratryai Namah</td>
                  <td>The Dark Night</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Mahagauri</td>
                  <td>Om Mahagauryai Namah</td>
                  <td>The One who is extremely fair</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Siddhidatri</td>
                  <td>Om Siddhidatryai Namah</td>
                  <td>Bestower of Supernatural Powers</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Bhavani</td>
                  <td>Om Bhavanayai Namah</td>
                  <td>Giver of Life</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Chandika</td>
                  <td>Om Chandikayai Namah</td>
                  <td>The Violent One</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Lalita</td>
                  <td>Om Lalitayai Namah</td>
                  <td>Playful</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Bhadrakali</td>
                  <td>Om Bhadrakalyai Namah</td>
                  <td>Fierce form of Kali</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Jaya</td>
                  <td>Om Jayayai Namah</td>
                  <td>Victorious</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Bhavani</td>
                  <td>Om Bhavanaye Namah</td>
                  <td>Source of All</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Tara</td>
                  <td>Om Tarayai Namah</td>
                  <td>Star</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Kali</td>
                  <td>Om Kalikayai Namah</td>
                  <td>The Black One</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Kamala</td>
                  <td>Om Kamalayai Namah</td>
                  <td>Lotus</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Shashvati</td>
                  <td>Om Shashvatyai Namah</td>
                  <td>Eternal</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Shambhavi</td>
                  <td>Om Shambhavyai Namah</td>
                  <td>Consort of Shambhu (Shiva)</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Annapurna</td>
                  <td>Om Annapurnayai Namah</td>
                  <td>Goddess of Nourishment</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Bhairavi</td>
                  <td>Om Bhairavyai Namah</td>
                  <td>Terrifying</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Amba</td>
                  <td>Om Ambayai Namah</td>
                  <td>Mother</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Narayani</td>
                  <td>Om Narayaniyai Namah</td>
                  <td>Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Parvati</td>
                  <td>Om Parvatyai Namah</td>
                  <td>Daughter of the Mountains</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Ambika</td>
                  <td>Om Ambikayai Namah</td>
                  <td>Mother</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Sarvamangala</td>
                  <td>Om Sarvamangalayai Namah</td>
                  <td>The One who gives all auspiciousness</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Bhavini</td>
                  <td>Om Bhavinyai Namah</td>
                  <td>The Beautiful One</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Rudrani</td>
                  <td>Om Rudranyai Namah</td>
                  <td>Consort of Rudra (Shiva)</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Bhargavi</td>
                  <td>Om Bhargavyai Namah</td>
                  <td>Consort of Bhargava (Shiva)</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Mookambika</td>
                  <td>Om Mookambikayai Namah</td>
                  <td>Goddess who blesses the dumb with speech</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Uma</td>
                  <td>Om Umayai Namah</td>
                  <td>Light</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Shakti</td>
                  <td>Om Shaktayai Namah</td>
                  <td>Power</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Arya</td>
                  <td>Om Aryayai Namah</td>
                  <td>Noble</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Dakshayani</td>
                  <td>Om Dakshayanai Namah</td>
                  <td>Daughter of Daksha</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Girija</td>
                  <td>Om Girijayai Namah</td>
                  <td>Born of the Himalayas</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Narayani</td>
                  <td>Om Narayaniyai Namah</td>
                  <td>Consort of Narayana (Vishnu)</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Vijaya</td>
                  <td>Om Vijayayai Namah</td>
                  <td>Victorious</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Jayanti</td>
                  <td>Om Jayantyai Namah</td>
                  <td>Bestower of victory</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Bhairavi</td>
                  <td>Om Bhairavyai Namah</td>
                  <td>Fierce</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Kaushiki</td>
                  <td>Om Kaushikyai Namah</td>
                  <td>The One who came from the cosmic sheath</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Lalitambika</td>
                  <td>Om Lalitambikayai Namah</td>
                  <td>The Playful Goddess</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Chandika</td>
                  <td>Om Chandikayai Namah</td>
                  <td>The Fierce One</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Gauri</td>
                  <td>Om Gauryai Namah</td>
                  <td>Fair Complexioned</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Aparna</td>
                  <td>Om Aparnayai Namah</td>
                  <td>The One who doesn't eat even a leaf</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Haimavati</td>
                  <td>Om Haimavatyai Namah</td>
                  <td>Daughter of Himalaya</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Jagadamba</td>
                  <td>Om Jagadambayai Namah</td>
                  <td>Mother of the World</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Jyotsna</td>
                  <td>Om Jyotsnayai Namah</td>
                  <td>Radiant like Flames</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Bhargavi</td>
                  <td>Om Bhargavyai Namah</td>
                  <td>Goddess of Fortune</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Trinetra</td>
                  <td>Om Trinetrayai Namah</td>
                  <td>Three-eyed</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Subhaga</td>
                  <td>Om Subhagayai Namah</td>
                  <td>One who is fortunate</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Shulini</td>
                  <td>Om Shulinyai Namah</td>
                  <td>Bearer of Trident</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Durgashiva</td>
                  <td>Om Durgashivayai Namah</td>
                  <td>Goddess of Protection</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Shivakanta</td>
                  <td>Om Shivakantayai Namah</td>
                  <td>Beloved of Shiva</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Atirasa</td>
                  <td>Om Atirasayai Namah</td>
                  <td>Exceedingly Pleasing</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Kausalya</td>
                  <td>Om Kausalyayai Namah</td>
                  <td>Mother of Rama</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Mangalya</td>
                  <td>Om Mangalayai Namah</td>
                  <td>Giver of All Goodness</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Vikranta</td>
                  <td>Om Vikrantayai Namah</td>
                  <td>Courageous</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Virya</td>
                  <td>Om Viryayai Namah</td>
                  <td>Full of Valour</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Siddha</td>
                  <td>Om Siddhayai Namah</td>
                  <td>Accomplished</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Gandharva</td>
                  <td>Om Gandharvayai Namah</td>
                  <td>Celestial Musician</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Gaganakriti</td>
                  <td>Om Gaganakritaye Namah</td>
                  <td>Form of Sky</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Madhu</td>
                  <td>Om Madhayai Namah</td>
                  <td>Sweetness</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Mangala</td>
                  <td>Om Mangalayai Namah</td>
                  <td>Auspicious</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Chandika</td>
                  <td>Om Chandikayai Namah</td>
                  <td>Fierce Goddess</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Kaushiki</td>
                  <td>Om Kaushikyai Namah</td>
                  <td>She who came from the sheath</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Lalita</td>
                  <td>Om Lalitayai Namah</td>
                  <td>The Playful One</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Bhadrakali</td>
                  <td>Om Bhadrakalyai Namah</td>
                  <td>Fierce form of Kali</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Jaya</td>
                  <td>Om Jayayai Namah</td>
                  <td>Victorious</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Bhavani</td>
                  <td>Om Bhavanayai Namah</td>
                  <td>Giver of Life</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Tara</td>
                  <td>Om Tarayai Namah</td>
                  <td>Star</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Kali</td>
                  <td>Om Kalikayai Namah</td>
                  <td>The Black One</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Kamala</td>
                  <td>Om Kamalayai Namah</td>
                  <td>Lotus</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Shashvati</td>
                  <td>Om Shashvatyai Namah</td>
                  <td>Eternal</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Shambhavi</td>
                  <td>Om Shambhavyai Namah</td>
                  <td>Consort of Shambhu (Shiva)</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Annapurna</td>
                  <td>Om Annapurnayai Namah</td>
                  <td>Goddess of Nourishment</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Bhairavi</td>
                  <td>Om Bhairavyai Namah</td>
                  <td>Terrifying</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Amba</td>
                  <td>Om Ambayai Namah</td>
                  <td>Mother</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Narayani</td>
                  <td>Om Narayaniyai Namah</td>
                  <td>Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Parvati</td>
                  <td>Om Parvatyai Namah</td>
                  <td>Daughter of the Mountains</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Ambika</td>
                  <td>Om Ambikayai Namah</td>
                  <td>Mother</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Sarvamangala</td>
                  <td>Om Sarvamangalayai Namah</td>
                  <td>The One who gives all auspiciousness</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Bhavini</td>
                  <td>Om Bhavinyai Namah</td>
                  <td>The Beautiful One</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Rudrani</td>
                  <td>Om Rudranyai Namah</td>
                  <td>Consort of Rudra (Shiva)</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Bhargavi</td>
                  <td>Om Bhargavyai Namah</td>
                  <td>Consort of Bhargava (Shiva)</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Mookambika</td>
                  <td>Om Mookambikayai Namah</td>
                  <td>Goddess who blesses the dumb with speech</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Uma</td>
                  <td>Om Umayai Namah</td>
                  <td>Light</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Shakti</td>
                  <td>Om Shaktayai Namah</td>
                  <td>Power</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Arya</td>
                  <td>Om Aryayai Namah</td>
                  <td>Noble</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Dakshayani</td>
                  <td>Om Dakshayanai Namah</td>
                  <td>Daughter of Daksha</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Girija</td>
                  <td>Om Girijayai Namah</td>
                  <td>Born of the Himalayas</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Narayani</td>
                  <td>Om Narayaniyai Namah</td>
                  <td>Consort of Narayana (Vishnu)</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Vijaya</td>
                  <td>Om Vijayayai Namah</td>
                  <td>Victorious</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Jayanti</td>
                  <td>Om Jayantyai Namah</td>
                  <td>Bestower of victory</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Bhairavi</td>
                  <td>Om Bhairavyai Namah</td>
                  <td>Fierce</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Kaushiki</td>
                  <td>Om Kaushikyai Namah</td>
                  <td>The One who came from the cosmic sheath</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Lalitambika</td>
                  <td>Om Lalitambikayai Namah</td>
                  <td>The Playful Goddess</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Chandika</td>
                  <td>Om Chandikayai Namah</td>
                  <td>The Fierce One</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Gauri</td>
                  <td>Om Gauryai Namah</td>
                  <td>Fair Complexioned</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Aparna</td>
                  <td>Om Aparnayai Namah</td>
                  <td>The One who doesn't eat even a leaf</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Haimavati</td>
                  <td>Om Haimavatyai Namah</td>
                  <td>Daughter of Himalaya</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Jagadamba</td>
                  <td>Om Jagadambayai Namah</td>
                  <td>Mother of the World</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Jyotsna</td>
                  <td>Om Jyotsnayai Namah</td>
                  <td>Radiant like Flames</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Bhargavi</td>
                  <td>Om Bhargavyai Namah</td>
                  <td>Goddess of Fortune</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Trinetra</td>
                  <td>Om Trinetrayai Namah</td>
                  <td>Three-eyed</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Choosing A Maa Durga Name For Newborn Baby</h3>
          <p>
            Choosing a Maa Durga name for a newborn baby has been a special
            ritual since old times. This is the best way to bring Maa Durga’s
            blessings to your child and honour the goddess. Let’s see a few
            steps or tips for naming a baby, a Maa Durga name.
          </p>
          <ol>
            <li>
              Learn Durga 108 names and familiarise yourself with it. This will
              give you a solid foundation from which to work.
            </li>
            <li>
              Think of which aspect of Devi Durga you want to see in your
              newborn. Ask questions: Is it her strength, wisdom or protective
              nature?
            </li>
            <li>
              Take an example. Bhavani (giver of life) would be a suitable name
              if you wish to see selflessness in your baby. Similarly, consider
              Katyayani, which means pure.
            </li>
            <li>
              Say potential names aloud. How do they flow with your last name?
              Is it easy to pronounce?
            </li>
            <li>
              Share your top picks with loved ones, and you can also consult a
              pandit.
            </li>
          </ol>
          <h3>Benefits of Chanting Maa Durga 108 Names</h3>
          <p>
            Chanting 108 names of Durga is an ancient practice and is believed
            to attract powerful divine blessings since Lord Shiva first recited
            them before her mother, Durga. Let us see its benefits in brief.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Maa Durga Blessings:</b> Reciting Devi Durga 108 names creates
              a direct connection to the divine. It's a way to feel closer to
              Maa Durga and feel her strength and wisdom. Plus, it's a great way
              to show your devotion and thankfulness.
            </ListItem>
            <ListItem>
              <b>Boosted Positive Energy:</b> When you chant Devi 108 Namavali,
              you're not just saying words - you're attracting positive vibes.
              Each name carries its unique energy, and as you recite them,
              you're giving yourself spiritual growth, clarity and focus.
            </ListItem>
            <ListItem>
              <b>Inner Peace: </b> Chanting Durga names can help calm your mind
              and reduce anxiety. It's like a mini-meditation session that
              leaves you feeling centred and at peace. Chanting 108 names of
              Goddess Durga is a calming experience.
            </ListItem>
            <ListItem>
              <b>Feel Protection: </b>Durga's names are believed to carry
              powerful vibrations. As you chant them, you're surrounding
              yourself with protective energy and gathering the goddess's
              protection. It's like creating an invisible shield to avoid
              negative energies.
            </ListItem>
          </UnorderedList>
          <h3>The Ideal Way To Chant Maa Durga 108 Names</h3>
          <p>
            Chanting 108 names of Durga is a spiritual practice that needs to be
            done in an ideal way in order to attract Maa Durga’s blessings. It
            can be done daily or on special occasions. Here, we bring you the
            best way to chant Maa Durga 108 names.
          </p>
          <h3>Ideal Direction To Chant Durga Namavali</h3>
          <p>
            When you're ready to chant Maa Durga 108 names, face East or North
            for the best spiritual connection. These directions are believed to
            align you with positive energies, helping your prayers reach the
            Goddess more effectively. Don't worry if you can't face these
            directions, though - your devotion matters more than perfect
            positioning.
          </p>
          <h3>Ideal Time To Chant Durga Namavali</h3>
          <p>
            Early morning, just as the sun rises over the horizon, is ideal for
            chanting the 108 names of Goddess Durga. This time, known as Brahma
            Muhurta, is thought to be supercharged with spiritual vibes. But if
            you're not a morning person, no worries! Choose a time when you're
            most alert and can focus without interruptions.
          </p>
          <h3>Ideal Beads To Chant Durga Namavali</h3>
          <p>
            Rudraksha mala, Shuddha Sphatika mala, and Kamal bija mala are ideal
            bead types for reciting Durga's 108 names. These sacred seeds are
            said to have a special connection to Shiva and Shakti. Moreover, it
            helps you chant the names with full focus and can impress Goddess
            Durga. Choose the ideal beads today and engage in the divine
            experience.
          </p>
          <h3>Ideal Setting/Atmosphere To Chant Durga Namavali</h3>
          <p>
            Create a calm, clutter-free space for chanting the 108 names of
            Durga. Light incense or a diya (oil lamp) to set the mood. If you
            have a Durga image or statue, place it in front of you for focus.
            Keep it simple and comfortable. The most important thing is to
            approach chanting with an open heart and a clear mind.
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

export default Duurga108;

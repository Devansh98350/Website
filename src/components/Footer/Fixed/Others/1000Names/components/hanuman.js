import React, { useEffect, useState } from "react";
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
    question: "What are the benefits of Hanuman Sahasranamam?",
    answer:
      "Chanting the Hanuman Sahasranamam has many benefits, including protection from evil energies, inner peace, strength, and courage. Devotees who chant these names with purity also receive the blessings of Lord Rama.",
  },
  {
    question: "Who recited Hanuman Sahasranamam?",
    answer:
      "Maharishi Valmiki recited Hanuman ji all name for the first time. The collection of 1000 names of Bajrangbali describes his infinite powers and is dedicated to Lord Rama.",
  },
  {
    question: "How to chant Hanuman Sahasranamavali effectively?",
    answer:
      "Chanting Hanuman Sahasranamavali regularly is the most effective way to get Lord Hanuman’s blessings. Devotees can continuously chant the powerful Hanuman 1000 names for 41 days to eliminate their problems and bring prosperity to life.",
  },
  {
    question: "When to chant Hanuman ji all name?",
    answer:
      "There is no specific time to chant Hanuman Sahasranamavali. However, the devotees can chant all 1000 names of Lord Hanuman during the Brahma Muhurat (3:30-4:30 AM). If not possible, then the sahasranamavali can also be chanted in the evening.",
  },
  {
    question:
      "Which is the ideal direction to chant the 1000 Hanuman name list?",
    answer:
      "The south direction is ideal for chanting the 1000 Hanuman name list. However, devotees can chant the Hanuman Sahasranama in the northeast direction, sitting in the sukhasana position.",
  },
  {
    question: "Which day is lucky to chant the 1000 names of Lord Hanuman?",
    answer:
      "Tuesdays and Saturdays are the lucky days to chant the 1000 names of Lord Hanuman. According to astrological beliefs, worshipping and chanting the Sahasranama these days will give devotees maximum results.",
  },
];

const Hanuman1000 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout
      title="1000 Name of Lord Hanuman - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">1000 Names Of Lord Hanuman</h1>
          <h2>Feel Fearless with Hanuman Sahasranamavali</h2>
          <h3>Find Protection in 1000 Names of Lord Hanuman</h3>
          <p>
            Hanuman Sahasranama is a collection of Lord Hanuman’s 1000 names and
            describes his powerful qualities, powers and blessings. Chanting
            these names regularly removes obstacles and brings inner strength
            and protection. Read the Lord Hanuman 1000 names, meanings and
            significance below.
          </p>
          <h3>1000 Hanuman Name List</h3>
          <p>
            All of Lord Hanuman’s powers and qualities get transferred to the
            devotees, who recite the 1000 names with full devotion. Recite all
            1000 names listed below and connect with the divine.
          </p>
          <Deity1000ButtonGrid />
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
                  <th>1000 Name of Hanuman</th>
                  <th>Mantra</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Hanumān</td>
                  <td>Om Hanumate Namah</td>
                  <td>One with a prominent jaw</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Śrīprada</td>
                  <td>Om Śrīpradāya Namah</td>
                  <td>Bestower of prosperity</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Vāyuputra</td>
                  <td>Om Vāyuputrāya Namah</td>
                  <td>Son of the Wind God</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Rudra</td>
                  <td>Om Rudrāya Namah</td>
                  <td>Manifestation of Rudra</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Anagha</td>
                  <td>Om Anaghāya Namah</td>
                  <td>Sinless</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Ajara</td>
                  <td>Om Ajarāya Namah</td>
                  <td>Without old age</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Amṛtyu</td>
                  <td>Om Amṛtyave Namah</td>
                  <td>Immortal</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Vīravīra</td>
                  <td>Om Vīravīrāya Namah</td>
                  <td>Hero among heroes</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Grāmavāsa</td>
                  <td>Om Grāmavāsāya Namah</td>
                  <td>Dweller in villages</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Janāśraya</td>
                  <td>Om Janāśrayāya Namah</td>
                  <td>Refuge of people</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Dhanada</td>
                  <td>Om Dhanadāya Namah</td>
                  <td>Bestower of wealth</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Nirguṇa</td>
                  <td>Om Nirguṇāya Namah</td>
                  <td>Beyond the three qualities</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Akāya</td>
                  <td>Om Akāyāya Namah</td>
                  <td>Without physical body</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Vīra</td>
                  <td>Om Vīrāya Namah</td>
                  <td>Brave</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Nidhipati</td>
                  <td>Om Nidhipataye Namah</td>
                  <td>Lord of treasures</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Muni</td>
                  <td>Om Munaye Namah</td>
                  <td>Sage</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Piṅgākṣa</td>
                  <td>Om Piṅgākṣāya Namah</td>
                  <td>Tawny-eyed</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Varada</td>
                  <td>Om Varadāya Namah</td>
                  <td>Granter of boons</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Vāgmī</td>
                  <td>Om Vāgmine Namah</td>
                  <td>Eloquent</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Sītāśokavināśana</td>
                  <td>Om Sītāśokavināśanāya Namah</td>
                  <td>Remover of Sita's sorrow</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Śiva</td>
                  <td>Om Śivāya Namah</td>
                  <td>Auspicious</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Sarva</td>
                  <td>Om Sarvāya Namah</td>
                  <td>All-encompassing</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Para</td>
                  <td>Om Parāya Namah</td>
                  <td>Transcendent</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Avyakta</td>
                  <td>Om Avyaktāya Namah</td>
                  <td>Unmanifest</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Vyaktāvyakta</td>
                  <td>Om Vyaktāvyaktāya Namah</td>
                  <td>Manifest and unmanifest</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Rasādhara</td>
                  <td>Om Rasādharāya Namah</td>
                  <td>Supporter of the earth</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Piṅgaroma</td>
                  <td>Om Piṅgaromṇe Namah</td>
                  <td>Having tawny body hair</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Piṅgakeśa</td>
                  <td>Om Piṅgakeśāya Namah</td>
                  <td>Having tawny hair</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Śrutigamya</td>
                  <td>Om Śrutigamyāya Namah</td>
                  <td>Accessible through scriptures</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Sanātana</td>
                  <td>Om Sanātanāya Namah</td>
                  <td>Eternal</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Anādi</td>
                  <td>Om Anādaye Namah</td>
                  <td>Without beginning</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Bhagavān</td>
                  <td>Om Bhagavate Namah</td>
                  <td>Possessor of opulence</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Deva</td>
                  <td>Om Devāya Namah</td>
                  <td>Divine</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Viśvahetu</td>
                  <td>Om Viśvahetave Namah</td>
                  <td>Cause of the universe</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Nirāmaya</td>
                  <td>Om Nirāmayāya Namah</td>
                  <td>Free from illness</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Ārogyakartā</td>
                  <td>Om Ārogyakartre Namah</td>
                  <td>Bestower of health</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Viśveśa</td>
                  <td>Om Viśveśāya Namah</td>
                  <td>Lord of the universe</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Viśvanātha</td>
                  <td>Om Viśvanāthāya Namah</td>
                  <td>Master of the universe</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Hariśvara</td>
                  <td>Om Hariśvarāya Namah</td>
                  <td>Lord of monkeys</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Bharga</td>
                  <td>Om Bhargāya Namah</td>
                  <td>Radiant</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Rāma</td>
                  <td>Om Rāmāya Namah</td>
                  <td>Pleasing</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Rāmabhakta</td>
                  <td>Om Rāmabhaktāya Namah</td>
                  <td>Devotee of Rama</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Kalyāṇaprakṛti</td>
                  <td>Om Kalyāṇaprakṛtaye Namah</td>
                  <td>Naturally auspicious</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Sthira</td>
                  <td>Om Sthirāya Namah</td>
                  <td>Steadfast</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Viśvambhara</td>
                  <td>Om Viśvambharāya Namah</td>
                  <td>Sustainer of the universe</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Viśvamūrti</td>
                  <td>Om Viśvamūrtaye Namah</td>
                  <td>Embodiment of the universe</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Viśvākāra</td>
                  <td>Om Viśvākārāya Namah</td>
                  <td>Form of the universe</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Viśvapa</td>
                  <td>Om Viśvapāya Namah</td>
                  <td>Protector of the universe</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Viśvātma</td>
                  <td>Om Viśvātmanāya Namah</td>
                  <td>Soul of the universe</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Viśvasevya</td>
                  <td>Om Viśvasevyāya Namah</td>
                  <td>Served by the universe</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Viśva</td>
                  <td>Om Viśvāya Namah</td>
                  <td>Universe</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Viśvahara</td>
                  <td>Om Viśvaharāya Namah</td>
                  <td>Remover of the universe's sorrows</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Ravi</td>
                  <td>Om Ravaye Namah</td>
                  <td>Sun-like</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Viśvaceṣṭa</td>
                  <td>Om Viśvaceṣṭāya Namah</td>
                  <td>Active in the world's welfare</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Viśvagamya</td>
                  <td>Om Viśvagamyāya Namah</td>
                  <td>Accessible to all</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Viśvadhyeya</td>
                  <td>Om Viśvadhyeyāya Namah</td>
                  <td>Meditated upon by all</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Kalādhara</td>
                  <td>Om Kalādharāya Namah</td>
                  <td>Bearer of arts</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Plavaṅgama</td>
                  <td>Om Plavaṅgamāya Namah</td>
                  <td>Mover like the wind</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Kapiśreṣṭha</td>
                  <td>Om Kapiśreṣṭhāya Namah</td>
                  <td>Best among monkeys</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Jyeṣṭha</td>
                  <td>Om Jyeṣṭhāya Namah</td>
                  <td>Eldest</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Vaidya</td>
                  <td>Om Vaidyāya Namah</td>
                  <td>Physician</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Vanechara</td>
                  <td>Om Vanecharāya Namah</td>
                  <td>Wanderer in forests</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Bāla</td>
                  <td>Om Bālāya Namah</td>
                  <td>Child-like</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Vṛddha</td>
                  <td>Om Vṛddhāya Namah</td>
                  <td>Elder</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Yuvā</td>
                  <td>Om Yuvāya Namah</td>
                  <td>Youthful</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Tattvam</td>
                  <td>Om Tattvāya Namah</td>
                  <td>Essence</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Tattvagamya</td>
                  <td>Om Tattvagamyāya Namah</td>
                  <td>Comprehensible essence</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Sakhā</td>
                  <td>Om Sakhāya Namah</td>
                  <td>Friend</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Aja</td>
                  <td>Om Ajāya Namah</td>
                  <td>Unborn</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Añjanāsūnu</td>
                  <td>Om Añjanāsūnave Namah</td>
                  <td>Son of Anjana</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Avyagra</td>
                  <td>Om Avyagraya Namah</td>
                  <td>Calm and unperturbed</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Gramakhyata</td>
                  <td>Om Gramakhyataya Namah</td>
                  <td>Famous in villages</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Dharadhara</td>
                  <td>Om Dharadharaya Namah</td>
                  <td>Supporter of the Earth</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Bhurloka</td>
                  <td>Om Bhurlokaya Namah</td>
                  <td>Lord of the Earthly realm</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Bhuvarloka</td>
                  <td>Om Bhuvarlokaya Namah</td>
                  <td>Lord of the Atmospheric realm</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Swarloka</td>
                  <td>Om Swarlokaya Namah</td>
                  <td>Lord of the Celestial realm</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Maharloka</td>
                  <td>Om Maharlokaya Namah</td>
                  <td>Lord of the Great realm</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Janaloka</td>
                  <td>Om Janalokaya Namah</td>
                  <td>Lord of the Knowledge realm</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Tapoloka</td>
                  <td>Om Tapolokaya Namah</td>
                  <td>Lord of the Meditation realm</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Avyaya</td>
                  <td>Om Avyayaya Namah</td>
                  <td>Imperishable</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Satya</td>
                  <td>Om Satyaya Namah</td>
                  <td>Embodiment of truth</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Omkaragamya</td>
                  <td>Om Omkaragamyaya Namah</td>
                  <td>Accessible through Om</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Pranava</td>
                  <td>Om Pranavaya Namah</td>
                  <td>Sacred syllable</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Vyapaka</td>
                  <td>Om Vyapakaya Namah</td>
                  <td>Omnipresent</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Amala</td>
                  <td>Om Amalaya Namah</td>
                  <td>Spotless</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Shivadharma Pratishthata</td>
                  <td>Om Shivadharmapratishthatre Namah</td>
                  <td>Establisher of Shiva's dharma</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Rameshta</td>
                  <td>Om Rameshtaya Namah</td>
                  <td>Beloved of Rama</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Phalgunapriya</td>
                  <td>Om Phalgunapriyaya Namah</td>
                  <td>Dear to Arjuna</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Goshpadikritavarisha</td>
                  <td>Om Goshpadikritavarishaya Namah</td>
                  <td>Reducer of the ocean's vastness</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Purnakama</td>
                  <td>Om Purnakamaya Namah</td>
                  <td>Fulfiller of desires</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Dharapati</td>
                  <td>Om Dharapataye Namah</td>
                  <td>Lord of Earth</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Rakshoghna</td>
                  <td>Om Rakshoghnaya Namah</td>
                  <td>Destroyer of demons</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Pundarikaksha</td>
                  <td>Om Pundarikakshaya Namah</td>
                  <td>Lotus-eyed</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Sharanagatavatsala</td>
                  <td>Om Sharanagatavatsalaya Namah</td>
                  <td>Protector of the surrendered</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Janakipranadata</td>
                  <td>Om Janakipranadatre Namah</td>
                  <td>Giver of life to Sita</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Rakshahpranapaharaka</td>
                  <td>Om Rakshahpranapaharakaya Namah</td>
                  <td>Stealer of demons' life force</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Purna</td>
                  <td>Om Purnaya Namah</td>
                  <td>Complete and whole</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Satya</td>
                  <td>Om Satyaya Namah</td>
                  <td>Eternal truth</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Pitavasas</td>
                  <td>Om Pitavasase Namah</td>
                  <td>Clad in yellow garments</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Diwakarasamaprabha</td>
                  <td>Om Diwakarasamaprabhaya Namah</td>
                  <td>Radiant like the sun</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Devodyanavihari</td>
                  <td>Om Devodyanaviharine Namah</td>
                  <td>Roamer of divine gardens</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Devatabhayabhanjana</td>
                  <td>Om Devatabhayabhanjanaya Namah</td>
                  <td>Remover of gods' fears</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Bhaktodaya</td>
                  <td>Om Bhaktodayaya Namah</td>
                  <td>Uplifter of devotees</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Bhaktalabdha</td>
                  <td>Om Bhaktalabdhaya Namah</td>
                  <td>Accessible to devotees</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Bhaktapalanatatpara</td>
                  <td>Om Bhaktapalanatatparaya Namah</td>
                  <td>Protector of devotees</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Dronaharta</td>
                  <td>Om Dronahartre Namah</td>
                  <td>Slayer of Drona</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Shaktinetra</td>
                  <td>Om Shaktinetre Namah</td>
                  <td>Possessor of powerful vision</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Shaktirakshasamara</td>
                  <td>Om Shaktirakshasamarakaya Namah</td>
                  <td>Slayer of demon armies</td>
                </tr>
                <tr>
                  <td>109</td>
                  <td>Akshaghna</td>
                  <td>Om Akshaghnaya Namah</td>
                  <td>Destroyer of Akshaya demon</td>
                </tr>
                <tr>
                  <td>110</td>
                  <td>Ramaduta</td>
                  <td>Om Ramadutaya Namah</td>
                  <td>Messenger of Lord Rama</td>
                </tr>
                <tr>
                  <td>111</td>
                  <td>Shakinijivaharaka</td>
                  <td>Om Shakinijivaharakaya Namah</td>
                  <td>Destroyer of evil spirits</td>
                </tr>
                <tr>
                  <td>112</td>
                  <td>Bubukarahatarata</td>
                  <td>Om Bubukarahatarataye Namah</td>
                  <td>Eater of earthly desires</td>
                </tr>
                <tr>
                  <td>113</td>
                  <td>Garvaparvatamardana</td>
                  <td>Om Garvaparvatamardanaya Namah</td>
                  <td>Destroyer of pride mountains</td>
                </tr>
                <tr>
                  <td>114</td>
                  <td>Hetu</td>
                  <td>Om Hetave Namah</td>
                  <td>The cause of creation</td>
                </tr>
                <tr>
                  <td>115</td>
                  <td>Ahetu</td>
                  <td>Om Ahetave Namah</td>
                  <td>Causeless</td>
                </tr>
                <tr>
                  <td>116</td>
                  <td>Pranshava</td>
                  <td>Om Pranshave Namah</td>
                  <td>Lofty and tall</td>
                </tr>
                <tr>
                  <td>117</td>
                  <td>Vishvabharta</td>
                  <td>Om Vishvabhartre Namah</td>
                  <td>Sustainer of the universe</td>
                </tr>
                <tr>
                  <td>118</td>
                  <td>Jagadguru</td>
                  <td>Om Jagadgurave Namah</td>
                  <td>Universal teacher</td>
                </tr>
                <tr>
                  <td>119</td>
                  <td>Jagannetra</td>
                  <td>Om Jagannetre Namah</td>
                  <td>Eye of the Universe</td>
                </tr>
                <tr>
                  <td>120</td>
                  <td>Jagannatha</td>
                  <td>Om Jagannathaya Namah</td>
                  <td>Lord of the Universe</td>
                </tr>
                <tr>
                  <td>121</td>
                  <td>Jagadisha</td>
                  <td>Om Jagadishaya Namah</td>
                  <td>Ruler of the Universe</td>
                </tr>
                <tr>
                  <td>122</td>
                  <td>Janeshwara</td>
                  <td>Om Janeshwaraya Namah</td>
                  <td>Lord of the People</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Jagaddhita</td>
                  <td>Om Jagaddhitaya Namah</td>
                  <td>Benefactor of the Universe</td>
                </tr>
                <tr>
                  <td>124</td>
                  <td>Hara</td>
                  <td>Om Haraye Namah</td>
                  <td>Remover of Sorrows</td>
                </tr>
                <tr>
                  <td>125</td>
                  <td>Shrisha</td>
                  <td>Om Shrishaya Namah</td>
                  <td>Lord of Prosperity</td>
                </tr>
                <tr>
                  <td>126</td>
                  <td>Garudasmayabhanjana</td>
                  <td>Om Garudasmayabhanjanaya Namah</td>
                  <td>Destroyer of Garuda’s pride</td>
                </tr>
                <tr>
                  <td>127</td>
                  <td>Parthadhwaja</td>
                  <td>Om Parthadhwajaya Namah</td>
                  <td>Banner of Arjuna</td>
                </tr>
                <tr>
                  <td>128</td>
                  <td>Vayuputra</td>
                  <td>Om Vayuputraya Namah</td>
                  <td>Son of the Wind God</td>
                </tr>
                <tr>
                  <td>129</td>
                  <td>Amitapuchchha</td>
                  <td>Om Amitapuchchhaya Namah</td>
                  <td>Having immense tail</td>
                </tr>
                <tr>
                  <td>130</td>
                  <td>Amitavikrama</td>
                  <td>Om Amitavikramaya Namah</td>
                  <td>Of immense prowess</td>
                </tr>
                <tr>
                  <td>131</td>
                  <td>Brahmapuchchha</td>
                  <td>Om Brahmapuchchhaya Namah</td>
                  <td>Bearer of Brahma’s tail</td>
                </tr>
                <tr>
                  <td>132</td>
                  <td>Parabrahmapuchchha</td>
                  <td>Om Parabrahmapuchchhaya Namah</td>
                  <td>Bearer of Supreme Brahma’s tail</td>
                </tr>
                <tr>
                  <td>133</td>
                  <td>Rameshtakaraka</td>
                  <td>Om Rameshtakarakaya Namah</td>
                  <td>Performer of Rama’s tasks</td>
                </tr>
                <tr>
                  <td>134</td>
                  <td>Sugrivadiyuta</td>
                  <td>Om Sugrivadiyutaya Namah</td>
                  <td>Allied with Sugriva</td>
                </tr>
                <tr>
                  <td>135</td>
                  <td>Jnani</td>
                  <td>Om Jnanine Namah</td>
                  <td>Knower of all</td>
                </tr>
                <tr>
                  <td>136</td>
                  <td>Vanara</td>
                  <td>Om Vanaraya Namah</td>
                  <td>Monkey</td>
                </tr>
                <tr>
                  <td>137</td>
                  <td>Vanareshwara</td>
                  <td>Om Vanareshvaraya Namah</td>
                  <td>Lord of the Monkeys</td>
                </tr>
                <tr>
                  <td>138</td>
                  <td>Kalpasthayi</td>
                  <td>Om Kalpasthayine Namah</td>
                  <td>Eternal</td>
                </tr>
                <tr>
                  <td>139</td>
                  <td>Chiranjivi</td>
                  <td>Om Chiranjivine Namah</td>
                  <td>Immortal</td>
                </tr>
                <tr>
                  <td>140</td>
                  <td>Tapana</td>
                  <td>Om Tapanaya Namah</td>
                  <td>Radiant</td>
                </tr>
                <tr>
                  <td>141</td>
                  <td>Sadashiva</td>
                  <td>Om Sadashivaya Namah</td>
                  <td>Ever-auspicious</td>
                </tr>
                <tr>
                  <td>142</td>
                  <td>Sannata</td>
                  <td>Om Sannataye Namah</td>
                  <td>Humble</td>
                </tr>
                <tr>
                  <td>143</td>
                  <td>Sadgata</td>
                  <td>Om Sadgataye Namah</td>
                  <td>Provider of a righteous path</td>
                </tr>
                <tr>
                  <td>144</td>
                  <td>Bhuktimuktidaya</td>
                  <td>Om Bhuktimuktidaya Namah</td>
                  <td>Bestower of enjoyment and liberation</td>
                </tr>
                <tr>
                  <td>145</td>
                  <td>Kirtidayaka</td>
                  <td>Om Kirtidayakaya Namah</td>
                  <td>Bestower of fame</td>
                </tr>
                <tr>
                  <td>146</td>
                  <td>Kirti</td>
                  <td>Om Kirtaye Namah</td>
                  <td>Renowned</td>
                </tr>
                <tr>
                  <td>147</td>
                  <td>Kirtiprada</td>
                  <td>Om Kirtipradaya Namah</td>
                  <td>Giver of glory</td>
                </tr>
                <tr>
                  <td>148</td>
                  <td>Samudra</td>
                  <td>Om Samudraya Namah</td>
                  <td>Oceanic</td>
                </tr>
                <tr>
                  <td>149</td>
                  <td>Shriprada</td>
                  <td>Om Shripradaya Namah</td>
                  <td>Giver of wealth</td>
                </tr>
                <tr>
                  <td>150</td>
                  <td>Shiva</td>
                  <td>Om Shivaya Namah</td>
                  <td>Auspicious</td>
                </tr>
                <tr>
                  <td>151</td>
                  <td>Bhaktodaya</td>
                  <td>Om Bhaktodayaya Namah</td>
                  <td>Uplifter of devotees</td>
                </tr>
                <tr>
                  <td>152</td>
                  <td>Bhaktagamya</td>
                  <td>Om Bhaktagamyaya Namah</td>
                  <td>Accessible to devotees</td>
                </tr>
                <tr>
                  <td>153</td>
                  <td>Bhaktabhagyaprada</td>
                  <td>Om Bhaktabhagyapradayakaya Namah</td>
                  <td>Bestower of fortune to devotees</td>
                </tr>
                <tr>
                  <td>154</td>
                  <td>Udadhikramana</td>
                  <td>Om Udadhikramanaya Namah</td>
                  <td>Crosser of the ocean</td>
                </tr>
                <tr>
                  <td>155</td>
                  <td>Deva</td>
                  <td>Om Devaya Namah</td>
                  <td>Divine</td>
                </tr>
                <tr>
                  <td>156</td>
                  <td>Samsarabhayanashana</td>
                  <td>Om Samsarabhayanashanaya Namah</td>
                  <td>Destroyer of worldly fears</td>
                </tr>
                <tr>
                  <td>157</td>
                  <td>Vardhibandhanakrita</td>
                  <td>Om Vardhibandhanakrite Namah</td>
                  <td>Creator of ocean barriers</td>
                </tr>
                <tr>
                  <td>158</td>
                  <td>Vishvajetra</td>
                  <td>Om Vishvajetre Namah</td>
                  <td>Victor of the Universe</td>
                </tr>
                <tr>
                  <td>159</td>
                  <td>Vishvapratishthita</td>
                  <td>Om Vishvapratishthitaya Namah</td>
                  <td>Established in the Universe</td>
                </tr>
                <tr>
                  <td>160</td>
                  <td>Lankara</td>
                  <td>Om Lankaraye Namah</td>
                  <td>Hero of Lanka</td>
                </tr>
                <tr>
                  <td>161</td>
                  <td>Kalapurusha</td>
                  <td>Om Kalapurushaya Namah</td>
                  <td>Lord of Time</td>
                </tr>
                <tr>
                  <td>162</td>
                  <td>Lankeshagrihabhanjana</td>
                  <td>Om Lankeshagrihabhanjanaya Namah</td>
                  <td>Destroyer of Ravana’s palace</td>
                </tr>
                <tr>
                  <td>163</td>
                  <td>Bhutavasa</td>
                  <td>Om Bhutavasaya Namah</td>
                  <td>Dweller among beings</td>
                </tr>
                <tr>
                  <td>164</td>
                  <td>Vasudeva</td>
                  <td>Om Vasudevaya Namah</td>
                  <td>Lord of all</td>
                </tr>
                <tr>
                  <td>165</td>
                  <td>Vasava</td>
                  <td>Om Vasave Namah</td>
                  <td>Indra-like</td>
                </tr>
                <tr>
                  <td>166</td>
                  <td>Tribhuvaneshwara</td>
                  <td>Om Tribhuvaneshwaraya Namah</td>
                  <td>Lord of the three worlds</td>
                </tr>
                <tr>
                  <td>167</td>
                  <td>Shriramarupa</td>
                  <td>Om Shriramarupaya Namah</td>
                  <td>Form of Lord Rama</td>
                </tr>
                <tr>
                  <td>168</td>
                  <td>Krishna</td>
                  <td>Om Krishnaya Namah</td>
                  <td>Lord Krishna</td>
                </tr>
                <tr>
                  <td>169</td>
                  <td>Lankaprasadabhanjaka</td>
                  <td>Om Lankaprasadabhanjakaya Namah</td>
                  <td>Destroyer of Lanka’s pride</td>
                </tr>
                <tr>
                  <td>170</td>
                  <td>Krishna</td>
                  <td>Om Krishnaya Namah</td>
                  <td>Lord Krishna</td>
                </tr>
                <tr>
                  <td>171</td>
                  <td>Krishnastuta</td>
                  <td>Om Krishnastutaya Namah</td>
                  <td>Praised by Lord Krishna</td>
                </tr>
                <tr>
                  <td>172</td>
                  <td>Shanta</td>
                  <td>Om Shantaya Namah</td>
                  <td>Calm and peaceful</td>
                </tr>
                <tr>
                  <td>173</td>
                  <td>Shantidaya</td>
                  <td>Om Shantidaya Namah</td>
                  <td>Bestower of peace</td>
                </tr>
                <tr>
                  <td>174</td>
                  <td>Vishvapavana</td>
                  <td>Om Vishvapavanaya Namah</td>
                  <td>Purifier of the Universe</td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>Vishvabhokta</td>
                  <td>Om Vishvabhoktre Namah</td>
                  <td>Sustainer of the Universe</td>
                </tr>
                <tr>
                  <td>176</td>
                  <td>Maraghna</td>
                  <td>Om Maraghnaya Namah</td>
                  <td>Destroyer of enemies</td>
                </tr>
                <tr>
                  <td>177</td>
                  <td>Brahmachari</td>
                  <td>Om Brahmacharine Namah</td>
                  <td>Celibate</td>
                </tr>
                <tr>
                  <td>178</td>
                  <td>Jitendriya</td>
                  <td>Om Jitendriyaya Namah</td>
                  <td>Controller of senses</td>
                </tr>
                <tr>
                  <td>179</td>
                  <td>Urdhvaga</td>
                  <td>Om Urdhvagaya Namah</td>
                  <td>Ascending</td>
                </tr>
                <tr>
                  <td>180</td>
                  <td>Languline</td>
                  <td>Om Languline Namah</td>
                  <td>Holder of a long tail</td>
                </tr>
                <tr>
                  <td>181</td>
                  <td>Maline</td>
                  <td>Om Maline Namah</td>
                  <td>Wearing a garland</td>
                </tr>
                <tr>
                  <td>182</td>
                  <td>Langulahatarakshasa</td>
                  <td>Om Langulahatarakshasaya Namah</td>
                  <td>Slayer of demons with his tail</td>
                </tr>
                <tr>
                  <td>183</td>
                  <td>Samiratanuja</td>
                  <td>Om Samiratanujaya Namah</td>
                  <td>Son of the Wind God</td>
                </tr>
                <tr>
                  <td>184</td>
                  <td>Vira</td>
                  <td>Om Viraya Namah</td>
                  <td>Brave</td>
                </tr>
                <tr>
                  <td>185</td>
                  <td>Viratara</td>
                  <td>Om Virataraya Namah</td>
                  <td>Supreme among heroes</td>
                </tr>
                <tr>
                  <td>186</td>
                  <td>Jayaprada</td>
                  <td>Om Jayapradaya Namah</td>
                  <td>Bestower of victory</td>
                </tr>
                <tr>
                  <td>187</td>
                  <td>Jaganmangaladaya</td>
                  <td>Om Jaganmangaladaya Namah</td>
                  <td>Creator of universal auspiciousness</td>
                </tr>
                <tr>
                  <td>188</td>
                  <td>Punya</td>
                  <td>Om Punyaya Namah</td>
                  <td>Holy and virtuous</td>
                </tr>
                <tr>
                  <td>189</td>
                  <td>Punyashravanakirtana</td>
                  <td>Om Punyashravanakirtanaya Namah</td>
                  <td>Holy to hear and chant</td>
                </tr>
                <tr>
                  <td>190</td>
                  <td>Punyakirti</td>
                  <td>Om Punyakirtaye Namah</td>
                  <td>Famed for virtue</td>
                </tr>
                <tr>
                  <td>191</td>
                  <td>Punyagati</td>
                  <td>Om Punyagataye Namah</td>
                  <td>Path of virtue</td>
                </tr>
                <tr>
                  <td>192</td>
                  <td>Jagatpavanapavana</td>
                  <td>Om Jagatpavanapavanaya Namah</td>
                  <td>Purifier of the world</td>
                </tr>
                <tr>
                  <td>193</td>
                  <td>Devesha</td>
                  <td>Om Deveshaya Namah</td>
                  <td>Lord of the gods</td>
                </tr>
                <tr>
                  <td>194</td>
                  <td>Jitamara</td>
                  <td>Om Jitamaraya Namah</td>
                  <td>Conqueror of death</td>
                </tr>
                <tr>
                  <td>195</td>
                  <td>Ramabhaktividhayaka</td>
                  <td>Om Ramabhaktividhayakaya Namah</td>
                  <td>Bestower of devotion to Rama</td>
                </tr>
                <tr>
                  <td>196</td>
                  <td>Dhyatra</td>
                  <td>Om Dhyatre Namah</td>
                  <td>Meditator</td>
                </tr>
                <tr>
                  <td>197</td>
                  <td>Dhyeya</td>
                  <td>Om Dhyeyaya Namah</td>
                  <td>Worthy of meditation</td>
                </tr>
                <tr>
                  <td>198</td>
                  <td>Laya</td>
                  <td>Om Layaya Namah</td>
                  <td>Absorber of the Universe</td>
                </tr>
                <tr>
                  <td>199</td>
                  <td>Sakshi</td>
                  <td>Om Sakshine Namah</td>
                  <td>Witness of all</td>
                </tr>
                <tr>
                  <td>200</td>
                  <td>Chetasa</td>
                  <td>Om Chetase Namah</td>
                  <td>Consciousness</td>
                </tr>
                <tr>
                  <td>201</td>
                  <td>Chaitanyavigraha</td>
                  <td>Om Chaitanyavigrahaya Namah</td>
                  <td>Embodiment of consciousness</td>
                </tr>
                <tr>
                  <td>202</td>
                  <td>Jnanada</td>
                  <td>Om Jnanadaya Namah</td>
                  <td>Bestower of knowledge</td>
                </tr>
                <tr>
                  <td>203</td>
                  <td>Pranada</td>
                  <td>Om Pranadaya Namah</td>
                  <td>Giver of life</td>
                </tr>
                <tr>
                  <td>204</td>
                  <td>Prana</td>
                  <td>Om Pranaya Namah</td>
                  <td>Life force</td>
                </tr>
                <tr>
                  <td>205</td>
                  <td>Jagatprana</td>
                  <td>Om Jagatpranaya Namah</td>
                  <td>Life force of the universe</td>
                </tr>
                <tr>
                  <td>206</td>
                  <td>Samirana</td>
                  <td>Om Samiranaya Namah</td>
                  <td>Wind or breeze</td>
                </tr>
                <tr>
                  <td>207</td>
                  <td>Vibhishanapriya</td>
                  <td>Om Vibhishanapriyaya Namah</td>
                  <td>Beloved of Vibhishana</td>
                </tr>
                <tr>
                  <td>208</td>
                  <td>Shura</td>
                  <td>Om Shuraya Namah</td>
                  <td>Courageous</td>
                </tr>
                <tr>
                  <td>209</td>
                  <td>Pippalashrayasiddhida</td>
                  <td>Om Pippalashrayasiddhidaya Namah</td>
                  <td>Giver of success under the Pippala tree</td>
                </tr>
                <tr>
                  <td>210</td>
                  <td>Siddha</td>
                  <td>Om Siddhaya Namah</td>
                  <td>Perfected one</td>
                </tr>
                <tr>
                  <td>211</td>
                  <td>Siddhashraya</td>
                  <td>Om Siddhashrayaya Namah</td>
                  <td>Refuge of the perfected</td>
                </tr>
                <tr>
                  <td>212</td>
                  <td>Kala</td>
                  <td>Om Kalaya Namah</td>
                  <td>Time</td>
                </tr>
                <tr>
                  <td>213</td>
                  <td>Mahoksha</td>
                  <td>Om Mahokshaya Namah</td>
                  <td>One with great vision</td>
                </tr>
                <tr>
                  <td>214</td>
                  <td>Kalajantaka</td>
                  <td>Om Kalajantakaya Namah</td>
                  <td>Destroyer of time</td>
                </tr>
                <tr>
                  <td>215</td>
                  <td>Lankeshanidhana</td>
                  <td>Om Lankeshanidhanaya Namah</td>
                  <td>Slayer of the king of Lanka</td>
                </tr>
                <tr>
                  <td>216</td>
                  <td>Sthayi</td>
                  <td>Om Sthayine Namah</td>
                  <td>Eternal</td>
                </tr>
                <tr>
                  <td>217</td>
                  <td>Lankadahaka</td>
                  <td>Om Lankadahakaya Namah</td>
                  <td>Burner of Lanka</td>
                </tr>
                <tr>
                  <td>218</td>
                  <td>Ishwara</td>
                  <td>Om Ishwaraya Namah</td>
                  <td>Supreme Lord</td>
                </tr>
                <tr>
                  <td>219</td>
                  <td>Chandrasuryagninetra</td>
                  <td>Om Chandrasuryagninetraya Namah</td>
                  <td>Eyes like the moon, sun, and fire</td>
                </tr>
                <tr>
                  <td>220</td>
                  <td>Kalagni</td>
                  <td>Om Kalagnaye Namah</td>
                  <td>Fire of destruction</td>
                </tr>
                <tr>
                  <td>221</td>
                  <td>Pralayantaka</td>
                  <td>Om Pralayantakaya Namah</td>
                  <td>Ender of the world</td>
                </tr>
                <tr>
                  <td>222</td>
                  <td>Kapila</td>
                  <td>Om Kapilaya Namah</td>
                  <td>Golden or tawny</td>
                </tr>
                <tr>
                  <td>223</td>
                  <td>Kapisha</td>
                  <td>Om Kapishaya Namah</td>
                  <td>Lord of monkeys</td>
                </tr>
                <tr>
                  <td>224</td>
                  <td>Punyarashi</td>
                  <td>Om Punyarashaye Namah</td>
                  <td>Abode of virtue</td>
                </tr>
                <tr>
                  <td>225</td>
                  <td>Dwadasharashiga</td>
                  <td>Om Dwadasharashigaya Namah</td>
                  <td>Traveler of the 12 zodiac signs</td>
                </tr>
                <tr>
                  <td>226</td>
                  <td>Sarvashraya</td>
                  <td>Om Sarvashrayaya Namah</td>
                  <td>Shelter of all</td>
                </tr>
                <tr>
                  <td>227</td>
                  <td>Aprameyatma</td>
                  <td>Om Aprameyatmane Namah</td>
                  <td>Incomprehensible soul</td>
                </tr>
                <tr>
                  <td>228</td>
                  <td>Revatyadinivaraka</td>
                  <td>Om Revatyadinivarakaya Namah</td>
                  <td>Remover of inauspiciousness</td>
                </tr>
                <tr>
                  <td>229</td>
                  <td>Lakshmanapranadata</td>
                  <td>Om Lakshamanapranadatre Namah</td>
                  <td>Giver of life to Lakshmana</td>
                </tr>
                <tr>
                  <td>230</td>
                  <td>Sitajivanahetuka</td>
                  <td>Om Sitajivanahetukaya Namah</td>
                  <td>Cause of Sita’s survival</td>
                </tr>
                <tr>
                  <td>231</td>
                  <td>Ramadhyeya</td>
                  <td>Om Ramadhyeyaya Namah</td>
                  <td>Focused on Lord Rama</td>
                </tr>
                <tr>
                  <td>232</td>
                  <td>Hrishikesha</td>
                  <td>Om Hrishikeshaya Namah</td>
                  <td>Lord of the senses</td>
                </tr>
                <tr>
                  <td>233</td>
                  <td>Vishnubhakta</td>
                  <td>Om Vishnubhaktaya Namah</td>
                  <td>Devotee of Lord Vishnu</td>
                </tr>
                <tr>
                  <td>234</td>
                  <td>Jatine</td>
                  <td>Om Jatine Namah</td>
                  <td>Ascetic with matted hair</td>
                </tr>
                <tr>
                  <td>235</td>
                  <td>Baline</td>
                  <td>Om Baline Namah</td>
                  <td>Strong</td>
                </tr>
                <tr>
                  <td>236</td>
                  <td>Devaridarpaghna</td>
                  <td>Om Devaridarpaghne Namah</td>
                  <td>Destroyer of demons' pride</td>
                </tr>
                <tr>
                  <td>237</td>
                  <td>Hotra</td>
                  <td>Om Hotre Namah</td>
                  <td>Offerer of oblations</td>
                </tr>
                <tr>
                  <td>238</td>
                  <td>Dhatra</td>
                  <td>Om Dhatre Namah</td>
                  <td>Creator</td>
                </tr>
                <tr>
                  <td>239</td>
                  <td>Kartra</td>
                  <td>Om Kartre Namah</td>
                  <td>Doer</td>
                </tr>
                <tr>
                  <td>240</td>
                  <td>Jagatprabhu</td>
                  <td>Om Jagatprabhave Namah</td>
                  <td>Lord of the universe</td>
                </tr>
                <tr>
                  <td>241</td>
                  <td>Nagaragramapala</td>
                  <td>Om Nagaragramapalaya Namah</td>
                  <td>Protector of villages and towns</td>
                </tr>
                <tr>
                  <td>242</td>
                  <td>Shuddha</td>
                  <td>Om Shuddhaya Namah</td>
                  <td>Pure</td>
                </tr>
                <tr>
                  <td>243</td>
                  <td>Buddha</td>
                  <td>Om Buddhaya Namah</td>
                  <td>Enlightened</td>
                </tr>
                <tr>
                  <td>244</td>
                  <td>Niratrapa</td>
                  <td>Om Niratrapaya Namah</td>
                  <td>Fearless</td>
                </tr>
                <tr>
                  <td>245</td>
                  <td>Niranjana</td>
                  <td>Om Niranjanaya Namah</td>
                  <td>Unblemished</td>
                </tr>
                <tr>
                  <td>246</td>
                  <td>Nirvikalpa</td>
                  <td>Om Nirvikalpaya Namah</td>
                  <td>Beyond distinctions</td>
                </tr>
                <tr>
                  <td>247</td>
                  <td>Gunatita</td>
                  <td>Om Gunatitaya Namah</td>
                  <td>Beyond qualities</td>
                </tr>
                <tr>
                  <td>248</td>
                  <td>Bhayankara</td>
                  <td>Om Bhayankaraya Namah</td>
                  <td>Fearsome</td>
                </tr>
                <tr>
                  <td>249</td>
                  <td>Hanumata</td>
                  <td>Om Hanumate Namah</td>
                  <td>The mighty one</td>
                </tr>
                <tr>
                  <td>250</td>
                  <td>Duraradhya</td>
                  <td>Om Duraradhyaya Namah</td>
                  <td>Difficult to attain</td>
                </tr>
                <tr>
                  <td>251</td>
                  <td>Tapahsadhya</td>
                  <td>Om Tapahsadhyaya Namah</td>
                  <td>Achieved through penance</td>
                </tr>
                <tr>
                  <td>252</td>
                  <td>Maheshwara</td>
                  <td>Om Maheshwaraya Namah</td>
                  <td>Great Lord</td>
                </tr>
                <tr>
                  <td>253</td>
                  <td>Janakidhanashokotthatapahartre</td>
                  <td>Om Janakidhanashokotthatapahartre Namah</td>
                  <td>Remover of Sita's sorrow</td>
                </tr>
                <tr>
                  <td>254</td>
                  <td>Paratparas</td>
                  <td>Om Paratparasmai Namah</td>
                  <td>Supreme among the supreme</td>
                </tr>
                <tr>
                  <td>255</td>
                  <td>Vanmaya</td>
                  <td>Om Vanmayaya Namah</td>
                  <td>Embodiment of speech</td>
                </tr>
                <tr>
                  <td>256</td>
                  <td>Sadasadrupa</td>
                  <td>Om Sadasadrupaya Namah</td>
                  <td>Form of truth and untruth</td>
                </tr>
                <tr>
                  <td>257</td>
                  <td>Karana</td>
                  <td>Om Karanaya Namah</td>
                  <td>The cause</td>
                </tr>
                <tr>
                  <td>258</td>
                  <td>Prakriteh Paras</td>
                  <td>Om Prakriteh Parasmai Namah</td>
                  <td>Beyond nature</td>
                </tr>
                <tr>
                  <td>259</td>
                  <td>Bhagyada</td>
                  <td>Om Bhagyadaya Namah</td>
                  <td>Giver of fortune</td>
                </tr>
                <tr>
                  <td>260</td>
                  <td>Nirmala</td>
                  <td>Om Nirmalaya Namah</td>
                  <td>Spotless</td>
                </tr>
                <tr>
                  <td>261</td>
                  <td>Netra</td>
                  <td>Om Netre Namah</td>
                  <td>Eye of the Universe</td>
                </tr>
                <tr>
                  <td>262</td>
                  <td>Puchchhalankavidahaka</td>
                  <td>Om Puchchhalankavidahakaya Namah</td>
                  <td>Burner of Lanka with his tail</td>
                </tr>
                <tr>
                  <td>263</td>
                  <td>Puchchhabaddhayatudhana</td>
                  <td>Om Puchchhabaddhayatudhanaya Namah</td>
                  <td>Bound demons with his tail</td>
                </tr>
                <tr>
                  <td>264</td>
                  <td>Yatudhanaripupriya</td>
                  <td>Om Yatudhanaripupriyaya Namah</td>
                  <td>Beloved of enemies of demons</td>
                </tr>
                <tr>
                  <td>265</td>
                  <td>Chhayapaharina</td>
                  <td>Om Chhayapaharine Namah</td>
                  <td>Remover of shadows</td>
                </tr>
                <tr>
                  <td>266</td>
                  <td>Bhutesha</td>
                  <td>Om Bhuteshaya Namah</td>
                  <td>Lord of beings</td>
                </tr>
                <tr>
                  <td>267</td>
                  <td>Lokesha</td>
                  <td>Om Lokeshaya Namah</td>
                  <td>Lord of the worlds</td>
                </tr>
                <tr>
                  <td>268</td>
                  <td>Sadgatiprada</td>
                  <td>Om Sadgatipradaya Namah</td>
                  <td>Bestower of the righteous path</td>
                </tr>
                <tr>
                  <td>269</td>
                  <td>Plavangameshwara</td>
                  <td>Om Plavangameshwaraya Namah</td>
                  <td>Lord of monkey warriors</td>
                </tr>
                <tr>
                  <td>270</td>
                  <td>Krodha</td>
                  <td>Om Krodhaya Namah</td>
                  <td>Embodiment of anger</td>
                </tr>
                <tr>
                  <td>271</td>
                  <td>Krodhasanraktalochana</td>
                  <td>Om Krodhasanraktalochanaya Namah</td>
                  <td>Eyes reddened with anger</td>
                </tr>
                <tr>
                  <td>272</td>
                  <td>Saumya</td>
                  <td>Om Saumyaya Namah</td>
                  <td>Gentle and peaceful</td>
                </tr>
                <tr>
                  <td>273</td>
                  <td>Guru</td>
                  <td>Om Gurave Namah</td>
                  <td>Teacher</td>
                </tr>
                <tr>
                  <td>274</td>
                  <td>Kavyakarta</td>
                  <td>Om Kavyakartre Namah</td>
                  <td>Creator of poetry</td>
                </tr>
                <tr>
                  <td>275</td>
                  <td>Bhaktanam Varaprada</td>
                  <td>Om Bhaktanam Varapradaya Namah</td>
                  <td>Bestower of boons to devotees</td>
                </tr>
                <tr>
                  <td>276</td>
                  <td>Bhaktanukampi</td>
                  <td>Om Bhaktanukampine Namah</td>
                  <td>Compassionate towards devotees</td>
                </tr>
                <tr>
                  <td>277</td>
                  <td>Vishvesha</td>
                  <td>Om Vishveshaya Namah</td>
                  <td>Lord of the Universe</td>
                </tr>
                <tr>
                  <td>278</td>
                  <td>Puruhuta</td>
                  <td>Om Puruhutaya Namah</td>
                  <td>Invoked by many</td>
                </tr>
                <tr>
                  <td>279</td>
                  <td>Purandara</td>
                  <td>Om Purandaraya Namah</td>
                  <td>Destroyer of cities</td>
                </tr>
                <tr>
                  <td>280</td>
                  <td>Krodhaharta</td>
                  <td>Om Krodhahartre Namah</td>
                  <td>Remover of anger</td>
                </tr>
                <tr>
                  <td>281</td>
                  <td>Tamoharta</td>
                  <td>Om Tamohartre Namah</td>
                  <td>Destroyer of darkness</td>
                </tr>
                <tr>
                  <td>282</td>
                  <td>Bhaktabhayavaraprada</td>
                  <td>Om Bhaktabhayavarapradaya Namah</td>
                  <td>Giver of fearlessness to devotees</td>
                </tr>
                <tr>
                  <td>283</td>
                  <td>Agni</td>
                  <td>Om Agnaye Namah</td>
                  <td>Fire</td>
                </tr>
                <tr>
                  <td>284</td>
                  <td>Vibhavasu</td>
                  <td>Om Vibhavasave Namah</td>
                  <td>Radiant one</td>
                </tr>
                <tr>
                  <td>285</td>
                  <td>Bhaswa</td>
                  <td>Om Bhaswate Namah</td>
                  <td>Lustrous</td>
                </tr>
                <tr>
                  <td>286</td>
                  <td>Yama</td>
                  <td>Om Yamaya Namah</td>
                  <td>Lord of death</td>
                </tr>
                <tr>
                  <td>287</td>
                  <td>Nirriti</td>
                  <td>Om Nirritaye Namah</td>
                  <td>Lord of dissolution</td>
                </tr>
                <tr>
                  <td>288</td>
                  <td>Varuna</td>
                  <td>Om Varunaya Namah</td>
                  <td>Lord of waters</td>
                </tr>
                <tr>
                  <td>289</td>
                  <td>Vayugatimate</td>
                  <td>Om Vayugatimate Namah</td>
                  <td>Swift as the wind</td>
                </tr>
                <tr>
                  <td>290</td>
                  <td>Vayu</td>
                  <td>Om Vayave Namah</td>
                  <td>Lord of the wind</td>
                </tr>
                <tr>
                  <td>291</td>
                  <td>Kaubera</td>
                  <td>Om Kauberaya Namah</td>
                  <td>Treasurer of the gods</td>
                </tr>
                <tr>
                  <td>292</td>
                  <td>Ishwara</td>
                  <td>Om Ishwaraya Namah</td>
                  <td>Supreme Lord</td>
                </tr>
                <tr>
                  <td>293</td>
                  <td>Ravi</td>
                  <td>Om Ravaye Namah</td>
                  <td>Sun</td>
                </tr>
                <tr>
                  <td>294</td>
                  <td>Chandra</td>
                  <td>Om Chandraya Namah</td>
                  <td>Moon</td>
                </tr>
                <tr>
                  <td>295</td>
                  <td>Kuja</td>
                  <td>Om Kujaya Namah</td>
                  <td>Mars</td>
                </tr>
                <tr>
                  <td>296</td>
                  <td>Saumya</td>
                  <td>Om Saumyaya Namah</td>
                  <td>Peaceful</td>
                </tr>
                <tr>
                  <td>297</td>
                  <td>Guru</td>
                  <td>Om Gurave Namah</td>
                  <td>Teacher</td>
                </tr>
                <tr>
                  <td>298</td>
                  <td>Kavya</td>
                  <td>Om Kavyaya Namah</td>
                  <td>Poetry</td>
                </tr>
                <tr>
                  <td>299</td>
                  <td>Shanaishchara</td>
                  <td>Om Shanaishcharaya Namah</td>
                  <td>Saturn</td>
                </tr>
                <tr>
                  <td>300</td>
                  <td>Rahu</td>
                  <td>Om Rahave Namah</td>
                  <td>Lunar eclipse-causing node</td>
                </tr>
                <tr>
                  <td>301</td>
                  <td>Ketu</td>
                  <td>Om Ketave Namah</td>
                  <td>Celestial body (South Node)</td>
                </tr>
                <tr>
                  <td>302</td>
                  <td>Maruta</td>
                  <td>Om Marute Namah</td>
                  <td>Son of the Wind</td>
                </tr>
                <tr>
                  <td>303</td>
                  <td>Hotra</td>
                  <td>Om Hotre Namah</td>
                  <td>Offerer of oblations</td>
                </tr>
                <tr>
                  <td>304</td>
                  <td>Datra</td>
                  <td>Om Datre Namah</td>
                  <td>Giver</td>
                </tr>
                <tr>
                  <td>305</td>
                  <td>Hartra</td>
                  <td>Om Hartre Namah</td>
                  <td>Remover</td>
                </tr>
                <tr>
                  <td>306</td>
                  <td>Samiraja</td>
                  <td>Om Samirajaya Namah</td>
                  <td>Son of the Wind God</td>
                </tr>
                <tr>
                  <td>307</td>
                  <td>Mashakikritadevara</td>
                  <td>Om Mashakikritadevaraye Namah</td>
                  <td>One who humbled the gods</td>
                </tr>
                <tr>
                  <td>308</td>
                  <td>Daityara</td>
                  <td>Om Daityaraye Namah</td>
                  <td>Enemy of demons</td>
                </tr>
                <tr>
                  <td>309</td>
                  <td>Madhusudana</td>
                  <td>Om Madhusudanaya Namah</td>
                  <td>Slayer of demon Madhu</td>
                </tr>
                <tr>
                  <td>310</td>
                  <td>Kama</td>
                  <td>Om Kamaya Namah</td>
                  <td>Desire</td>
                </tr>
                <tr>
                  <td>311</td>
                  <td>Kapi</td>
                  <td>Om Kapaye Namah</td>
                  <td>Monkey</td>
                </tr>
                <tr>
                  <td>312</td>
                  <td>Kamapala</td>
                  <td>Om Kamapalaya Namah</td>
                  <td>Protector of desires</td>
                </tr>
                <tr>
                  <td>313</td>
                  <td>Kapila</td>
                  <td>Om Kapilaya Namah</td>
                  <td>Golden or tawny</td>
                </tr>
                <tr>
                  <td>314</td>
                  <td>Vishvajivana</td>
                  <td>Om Vishvajivanaya Namah</td>
                  <td>Life of the Universe</td>
                </tr>
                <tr>
                  <td>315</td>
                  <td>Bhagirathipadambhoja</td>
                  <td>Om Bhagirathipadambhojaya Namah</td>
                  <td>At the feet of Bhagiratha</td>
                </tr>
                <tr>
                  <td>316</td>
                  <td>Setubandhavisharada</td>
                  <td>Om Setubandhavisharadaya Namah</td>
                  <td>Expert in building bridges</td>
                </tr>
                <tr>
                  <td>317</td>
                  <td>Swaha</td>
                  <td>Om Swahayai Namah</td>
                  <td>Oblation</td>
                </tr>
                <tr>
                  <td>318</td>
                  <td>Swadha</td>
                  <td>Om Swadhayai Namah</td>
                  <td>Oblation</td>
                </tr>
                <tr>
                  <td>319</td>
                  <td>Havisha</td>
                  <td>Om Havishe Namah</td>
                  <td>Sacrificial offering</td>
                </tr>
                <tr>
                  <td>320</td>
                  <td>Kavya</td>
                  <td>Om Kavyaya Namah</td>
                  <td>Poetry</td>
                </tr>
                <tr>
                  <td>321</td>
                  <td>Havyavahaprakashaka</td>
                  <td>Om Havyavahaprakashakaya Namah</td>
                  <td>Illuminator of sacrifices</td>
                </tr>
                <tr>
                  <td>322</td>
                  <td>Swaprakasha</td>
                  <td>Om Swaprakashaya Namah</td>
                  <td>Self-illuminated</td>
                </tr>
                <tr>
                  <td>323</td>
                  <td>Mahavira</td>
                  <td>Om Mahaviraya Namah</td>
                  <td>Great hero</td>
                </tr>
                <tr>
                  <td>324</td>
                  <td>Laghava</td>
                  <td>Om Laghave Namah</td>
                  <td>Quickness</td>
                </tr>
                <tr>
                  <td>325</td>
                  <td>Urjitavikrama</td>
                  <td>Om Urjitavikramaya Namah</td>
                  <td>Possessor of great strength</td>
                </tr>
                <tr>
                  <td>326</td>
                  <td>Uddinoddinagatimate</td>
                  <td>Om Uddinoddinagatimate Namah</td>
                  <td>Master of leaping and flying</td>
                </tr>
                <tr>
                  <td>327</td>
                  <td>Sadgata</td>
                  <td>Om Sadgataye Namah</td>
                  <td>Bestower of the right path</td>
                </tr>
                <tr>
                  <td>328</td>
                  <td>Purushottama</td>
                  <td>Om Purushottamaya Namah</td>
                  <td>Supreme among beings</td>
                </tr>
                <tr>
                  <td>329</td>
                  <td>Jagadatma</td>
                  <td>Om Jagadatmane Namah</td>
                  <td>Soul of the Universe</td>
                </tr>
                <tr>
                  <td>330</td>
                  <td>Jagadyoni</td>
                  <td>Om Jagadyonaye Namah</td>
                  <td>Origin of the Universe</td>
                </tr>
                <tr>
                  <td>331</td>
                  <td>Jagadanta</td>
                  <td>Om Jagadantaya Namah</td>
                  <td>End of the Universe</td>
                </tr>
                <tr>
                  <td>332</td>
                  <td>Anantaka</td>
                  <td>Om Anantakaya Namah</td>
                  <td>Infinite</td>
                </tr>
                <tr>
                  <td>333</td>
                  <td>Vipapma</td>
                  <td>Om Vipapmane Namah</td>
                  <td>Free from sin</td>
                </tr>
                <tr>
                  <td>334</td>
                  <td>Nishkalanka</td>
                  <td>Om Nishkalankaya Namah</td>
                  <td>Spotless</td>
                </tr>
                <tr>
                  <td>335</td>
                  <td>Mahate</td>
                  <td>Om Mahate Namah</td>
                  <td>Great</td>
                </tr>
                <tr>
                  <td>336</td>
                  <td>Mahadahankrita</td>
                  <td>Om Mahadahankritaye Namah</td>
                  <td>Creator of great ego</td>
                </tr>
                <tr>
                  <td>337</td>
                  <td>Khaya</td>
                  <td>Om Khaya Namah</td>
                  <td>Sky</td>
                </tr>
                <tr>
                  <td>338</td>
                  <td>Vayu</td>
                  <td>Om Vayave Namah</td>
                  <td>Wind</td>
                </tr>
                <tr>
                  <td>339</td>
                  <td>Prithivya</td>
                  <td>Om Prithivyai Namah</td>
                  <td>Earth</td>
                </tr>
                <tr>
                  <td>340</td>
                  <td>Adbhya</td>
                  <td>Om Adbhyo Namah</td>
                  <td>Water</td>
                </tr>
                <tr>
                  <td>341</td>
                  <td>Vahni</td>
                  <td>Om Vahnaye Namah</td>
                  <td>Fire</td>
                </tr>
                <tr>
                  <td>342</td>
                  <td>Dikpala</td>
                  <td>Om Dikpalaya Namah</td>
                  <td>Protector of directions</td>
                </tr>
                <tr>
                  <td>343</td>
                  <td>Kshetrajna</td>
                  <td>Om Kshetrajnaya Namah</td>
                  <td>Knower of the field</td>
                </tr>
                <tr>
                  <td>344</td>
                  <td>Kshetrahartra</td>
                  <td>Om Kshetrahartre Namah</td>
                  <td>Destroyer of the field</td>
                </tr>
                <tr>
                  <td>345</td>
                  <td>Palvalikritasagara</td>
                  <td>Om Palvalikritasagaraya Namah</td>
                  <td>One who dried the oceans</td>
                </tr>
                <tr>
                  <td>346</td>
                  <td>Hiranmaya</td>
                  <td>Om Hiranmayaya Namah</td>
                  <td>Golden</td>
                </tr>
                <tr>
                  <td>347</td>
                  <td>Purana</td>
                  <td>Om Puranaya Namah</td>
                  <td>Ancient</td>
                </tr>
                <tr>
                  <td>348</td>
                  <td>Khechara</td>
                  <td>Om Khecharaya Namah</td>
                  <td>Traveler in the sky</td>
                </tr>
                <tr>
                  <td>349</td>
                  <td>Bhuchara</td>
                  <td>Om Bhucharaya Namah</td>
                  <td>Traveler on Earth</td>
                </tr>
                <tr>
                  <td>350</td>
                  <td>Amara</td>
                  <td>Om Amaraya Namah</td>
                  <td>Immortal</td>
                </tr>
                <tr>
                  <td>351</td>
                  <td>Hiranyagarbha</td>
                  <td>Om Hiranyagarbhaya Namah</td>
                  <td>Golden womb; Creator</td>
                </tr>
                <tr>
                  <td>352</td>
                  <td>Sutratma</td>
                  <td>Om Sutratmane Namah</td>
                  <td>Thread soul; Cosmic connection</td>
                </tr>
                <tr>
                  <td>353</td>
                  <td>Rajaraja</td>
                  <td>Om Rajarajaya Namah</td>
                  <td>King of kings</td>
                </tr>
                <tr>
                  <td>354</td>
                  <td>Vishampati</td>
                  <td>Om Vishampataye Namah</td>
                  <td>Lord of the world</td>
                </tr>
                <tr>
                  <td>355</td>
                  <td>Vedantavedya</td>
                  <td>Om Vedantavedyaya Namah</td>
                  <td>Knower of Vedanta</td>
                </tr>
                <tr>
                  <td>356</td>
                  <td>Udgitha</td>
                  <td>Om Udgithaya Namah</td>
                  <td>Chant of Om</td>
                </tr>
                <tr>
                  <td>357</td>
                  <td>Vedavedangapara</td>
                  <td>Om Vedavedangaparagaya Namah</td>
                  <td>Master of Vedas and Vedangas</td>
                </tr>
                <tr>
                  <td>358</td>
                  <td>Pratigramasthita</td>
                  <td>Om Pratigramasthitaye Namah</td>
                  <td>Residing in villages</td>
                </tr>
                <tr>
                  <td>359</td>
                  <td>Sadyah Sphurtidata</td>
                  <td>Om Sadyah Sphurtidatre Namah</td>
                  <td>Giver of immediate inspiration</td>
                </tr>
                <tr>
                  <td>360</td>
                  <td>Gunakara</td>
                  <td>Om Gunakaraya Namah</td>
                  <td>Repository of virtues</td>
                </tr>
                <tr>
                  <td>361</td>
                  <td>Nakshatramali</td>
                  <td>Om Nakshatramaline Namah</td>
                  <td>Adorned with stars</td>
                </tr>
                <tr>
                  <td>362</td>
                  <td>Bhutatma</td>
                  <td>Om Bhutatmane Namah</td>
                  <td>Soul of all beings</td>
                </tr>
                <tr>
                  <td>363</td>
                  <td>Surabhi</td>
                  <td>Om Surabhaye Namah</td>
                  <td>Fragrant</td>
                </tr>
                <tr>
                  <td>364</td>
                  <td>Kalpapadapa</td>
                  <td>Om Kalpapadapaya Namah</td>
                  <td>Wish-fulfilling tree</td>
                </tr>
                <tr>
                  <td>365</td>
                  <td>Chintamani</td>
                  <td>Om Chintamanaye Namah</td>
                  <td>Gem that fulfills desires</td>
                </tr>
                <tr>
                  <td>366</td>
                  <td>Gunanidhi</td>
                  <td>Om Gunanidhaye Namah</td>
                  <td>Treasury of virtues</td>
                </tr>
                <tr>
                  <td>367</td>
                  <td>Prajadhara</td>
                  <td>Om Prajadharaya Namah</td>
                  <td>Supporter of creation</td>
                </tr>
                <tr>
                  <td>368</td>
                  <td>Anuttama</td>
                  <td>Om Anuttamaya Namah</td>
                  <td>Unsurpassed</td>
                </tr>
                <tr>
                  <td>369</td>
                  <td>Punyashloka</td>
                  <td>Om Punyashlokaya Namah</td>
                  <td>Of pure fame</td>
                </tr>
                <tr>
                  <td>370</td>
                  <td>Purarata</td>
                  <td>Om Purarataye Namah</td>
                  <td>Enemy of cities</td>
                </tr>
                <tr>
                  <td>371</td>
                  <td>Jyotishmat</td>
                  <td>Om Jyotishmate Namah</td>
                  <td>Illuminated</td>
                </tr>
                <tr>
                  <td>372</td>
                  <td>Sharvaripati</td>
                  <td>Om Sharvaripataye Namah</td>
                  <td>Lord of the night</td>
                </tr>
                <tr>
                  <td>373</td>
                  <td>Kilkilaravasantrastabhutapretapishachaka</td>
                  <td>Om Kilkilaravasantrastabhutapretapishachakaya Namah</td>
                  <td>Terrifier of demons and ghosts</td>
                </tr>
                <tr>
                  <td>374</td>
                  <td>Rinatrayahara</td>
                  <td>Om Rinatrayaharaya Namah</td>
                  <td>Remover of three debts</td>
                </tr>
                <tr>
                  <td>375</td>
                  <td>Sukshma</td>
                  <td>Om Sukshmaya Namah</td>
                  <td>Subtle</td>
                </tr>
                <tr>
                  <td>376</td>
                  <td>Sthula</td>
                  <td>Om Sthulaya Namah</td>
                  <td>Gross</td>
                </tr>
                <tr>
                  <td>377</td>
                  <td>Sarvagata</td>
                  <td>Om Sarvagataye Namah</td>
                  <td>All-pervading</td>
                </tr>
                <tr>
                  <td>378</td>
                  <td>Pumsa</td>
                  <td>Om Pumse Namah</td>
                  <td>Supreme Purusha</td>
                </tr>
                <tr>
                  <td>379</td>
                  <td>Apasmarahara</td>
                  <td>Om Apasmaraharaya Namah</td>
                  <td>Destroyer of epilepsy</td>
                </tr>
                <tr>
                  <td>380</td>
                  <td>Smarta</td>
                  <td>Om Smartre Namah</td>
                  <td>Remembrancer</td>
                </tr>
                <tr>
                  <td>381</td>
                  <td>Shruta</td>
                  <td>Om Shrutaye Namah</td>
                  <td>Well-heard</td>
                </tr>
                <tr>
                  <td>382</td>
                  <td>Gatha</td>
                  <td>Om Gathayai Namah</td>
                  <td>Divine song</td>
                </tr>
                <tr>
                  <td>383</td>
                  <td>Smrita</td>
                  <td>Om Smritaye Namah</td>
                  <td>Remembered</td>
                </tr>
                <tr>
                  <td>384</td>
                  <td>Mana</td>
                  <td>Om Manave Namah</td>
                  <td>Cosmic mind</td>
                </tr>
                <tr>
                  <td>385</td>
                  <td>Swargadwara</td>
                  <td>Om Swargadwaraya Namah</td>
                  <td>Gate to heaven</td>
                </tr>
                <tr>
                  <td>386</td>
                  <td>Prajadwara</td>
                  <td>Om Prajadwaraya Namah</td>
                  <td>Gate to creation</td>
                </tr>
                <tr>
                  <td>387</td>
                  <td>Mokshadwara</td>
                  <td>Om Mokshadwaraya Namah</td>
                  <td>Gate to liberation</td>
                </tr>
                <tr>
                  <td>388</td>
                  <td>Yatishwara</td>
                  <td>Om Yatishwaraya Namah</td>
                  <td>Lord of ascetics</td>
                </tr>
                <tr>
                  <td>389</td>
                  <td>Nadarupa</td>
                  <td>Om Nadarupaya Namah</td>
                  <td>Embodiment of sound</td>
                </tr>
                <tr>
                  <td>390</td>
                  <td>Parasmai Brahma</td>
                  <td>Om Parasmai Brahmane Namah</td>
                  <td>Supreme Brahman</td>
                </tr>
                <tr>
                  <td>391</td>
                  <td>Brahma</td>
                  <td>Om Brahmane Namah</td>
                  <td>The Absolute</td>
                </tr>
                <tr>
                  <td>392</td>
                  <td>Brahmapuratana</td>
                  <td>Om Brahmapuratanaya Namah</td>
                  <td>Ancient Brahman</td>
                </tr>
                <tr>
                  <td>393</td>
                  <td>Ekasma</td>
                  <td>Om Ekasmai Namah</td>
                  <td>The One</td>
                </tr>
                <tr>
                  <td>394</td>
                  <td>Anekaya</td>
                  <td>Om Anekaya Namah</td>
                  <td>The Many</td>
                </tr>
                <tr>
                  <td>395</td>
                  <td>Jana</td>
                  <td>Om Janaya Namah</td>
                  <td>Creator of beings</td>
                </tr>
                <tr>
                  <td>396</td>
                  <td>Shukla</td>
                  <td>Om Shuklaya Namah</td>
                  <td>Pure white</td>
                </tr>
                <tr>
                  <td>397</td>
                  <td>Swayamjyoti</td>
                  <td>Om Swayamjyotishe Namah</td>
                  <td>Self-illuminated</td>
                </tr>
                <tr>
                  <td>398</td>
                  <td>Anakula</td>
                  <td>Om Anakulaya Namah</td>
                  <td>Free from confusion</td>
                </tr>
                <tr>
                  <td>399</td>
                  <td>Jyotirjyotisha</td>
                  <td>Om Jyotirjyotishe Namah</td>
                  <td>Light of lights</td>
                </tr>
                <tr>
                  <td>400</td>
                  <td>Anada</td>
                  <td>Om Anadaye Namah</td>
                  <td>Without beginning</td>
                </tr>
                <tr>
                  <td>401</td>
                  <td>Sattvika</td>
                  <td>Om Sattvikaya Namah</td>
                  <td>Pure and virtuous</td>
                </tr>
                <tr>
                  <td>402</td>
                  <td>Rajasa</td>
                  <td>Om Rajasaya Namah</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>403</td>
                  <td>Tama</td>
                  <td>Om Tamaya Namah</td>
                  <td>Darkness</td>
                </tr>
                <tr>
                  <td>404</td>
                  <td>Tamoharta</td>
                  <td>Om Tamohartre Namah</td>
                  <td>Destroyer of darkness</td>
                </tr>
                <tr>
                  <td>405</td>
                  <td>Niralamba</td>
                  <td>Om Niralambaya Namah</td>
                  <td>Without support</td>
                </tr>
                <tr>
                  <td>406</td>
                  <td>Nirakara</td>
                  <td>Om Nirakaraya Namah</td>
                  <td>Formless</td>
                </tr>
                <tr>
                  <td>407</td>
                  <td>Gunakara</td>
                  <td>Om Gunakaraya Namah</td>
                  <td>Source of qualities</td>
                </tr>
                <tr>
                  <td>408</td>
                  <td>Gunashraya</td>
                  <td>Om Gunashrayaya Namah</td>
                  <td>Supporter of qualities</td>
                </tr>
                <tr>
                  <td>409</td>
                  <td>Gunamaya</td>
                  <td>Om Gunamayaya Namah</td>
                  <td>Filled with qualities</td>
                </tr>
                <tr>
                  <td>410</td>
                  <td>Brihatkarma</td>
                  <td>Om Brihatkarmane Namah</td>
                  <td>Performer of great deeds</td>
                </tr>
                <tr>
                  <td>411</td>
                  <td>Brihadyasha</td>
                  <td>Om Brihadyashase Namah</td>
                  <td>Of great fame</td>
                </tr>
                <tr>
                  <td>412</td>
                  <td>Brihaddhana</td>
                  <td>Om Brihaddhanave Namah</td>
                  <td>Possessor of great wealth</td>
                </tr>
                <tr>
                  <td>413</td>
                  <td>Brihatpada</td>
                  <td>Om Brihatpadaya Namah</td>
                  <td>Having large feet</td>
                </tr>
                <tr>
                  <td>414</td>
                  <td>Brihanmurdhni</td>
                  <td>Om Brihanmurdhne Namah</td>
                  <td>Having a large head</td>
                </tr>
                <tr>
                  <td>415</td>
                  <td>Brihatsvana</td>
                  <td>Om Brihatsvanaya Namah</td>
                  <td>Loud-voiced</td>
                </tr>
                <tr>
                  <td>416</td>
                  <td>Brihatkarna</td>
                  <td>Om Brihatkarnaya Namah</td>
                  <td>Having large ears</td>
                </tr>
                <tr>
                  <td>417</td>
                  <td>Brihannasa</td>
                  <td>Om Brihannasaya Namah</td>
                  <td>Having a large nose</td>
                </tr>
                <tr>
                  <td>418</td>
                  <td>Brihadbahu</td>
                  <td>Om Brihadbahave Namah</td>
                  <td>Having large arms</td>
                </tr>
                <tr>
                  <td>419</td>
                  <td>Brihattanva</td>
                  <td>Om Brihattanave Namah</td>
                  <td>Having a large body</td>
                </tr>
                <tr>
                  <td>420</td>
                  <td>Brihajjana</td>
                  <td>Om Brihajjanave Namah</td>
                  <td>Having large knees</td>
                </tr>
                <tr>
                  <td>421</td>
                  <td>Brihatkarya</td>
                  <td>Om Brihatkaryaya Namah</td>
                  <td>Performer of great deeds</td>
                </tr>
                <tr>
                  <td>422</td>
                  <td>Brihatpuchchha</td>
                  <td>Om Brihatpuchchhaya Namah</td>
                  <td>Having a large tail</td>
                </tr>
                <tr>
                  <td>423</td>
                  <td>Brihatkara</td>
                  <td>Om Brihatkaraya Namah</td>
                  <td>Having large hands</td>
                </tr>
                <tr>
                  <td>424</td>
                  <td>Brihadgata</td>
                  <td>Om Brihadgataye Namah</td>
                  <td>Going to great places</td>
                </tr>
                <tr>
                  <td>425</td>
                  <td>Brihatsevya</td>
                  <td>Om Brihatsevyaya Namah</td>
                  <td>Served by many</td>
                </tr>
                <tr>
                  <td>426</td>
                  <td>Brihallokaphalaprada</td>
                  <td>Om Brihallokaphalapradaya Namah</td>
                  <td>Giver of fruits in the great world</td>
                </tr>
                <tr>
                  <td>427</td>
                  <td>Brihachchhakta</td>
                  <td>Om Brihachchhaktaye Namah</td>
                  <td>Possessor of great power</td>
                </tr>
                <tr>
                  <td>428</td>
                  <td>Brihadvanchhaphalada</td>
                  <td>Om Brihadvanchhaphaladaya Namah</td>
                  <td>Fulfiller of great desires</td>
                </tr>
                <tr>
                  <td>429</td>
                  <td>Brihadishwara</td>
                  <td>Om Brihadishwaraya Namah</td>
                  <td>Great Lord</td>
                </tr>
                <tr>
                  <td>430</td>
                  <td>Brihallokanut</td>
                  <td>Om Brihallokanutaya Namah</td>
                  <td>Praised in the great world</td>
                </tr>
                <tr>
                  <td>431</td>
                  <td>Drashta</td>
                  <td>Om Drashtre Namah</td>
                  <td>Seer of all</td>
                </tr>
                <tr>
                  <td>432</td>
                  <td>Vidyadata</td>
                  <td>Om Vidyadatre Namah</td>
                  <td>Giver of knowledge</td>
                </tr>
                <tr>
                  <td>433</td>
                  <td>Jagadguru</td>
                  <td>Om Jagadgurave Namah</td>
                  <td>Teacher of the world</td>
                </tr>
                <tr>
                  <td>434</td>
                  <td>Devacharya</td>
                  <td>Om Devacharyaya Namah</td>
                  <td>Teacher of the gods</td>
                </tr>
                <tr>
                  <td>435</td>
                  <td>Satyavadi</td>
                  <td>Om Satyavadine Namah</td>
                  <td>Speaker of truth</td>
                </tr>
                <tr>
                  <td>436</td>
                  <td>Brahmavadi</td>
                  <td>Om Brahmavadine Namah</td>
                  <td>Speaker of divine knowledge</td>
                </tr>
                <tr>
                  <td>437</td>
                  <td>Kaladhara</td>
                  <td>Om Kaladharaya Namah</td>
                  <td>Bearer of time</td>
                </tr>
                <tr>
                  <td>438</td>
                  <td>Saptapatalagami</td>
                  <td>Om Saptapatalagamine Namah</td>
                  <td>Traveler of the seven netherworlds</td>
                </tr>
                <tr>
                  <td>439</td>
                  <td>Malayachalasamshraya</td>
                  <td>Om Malayachalasamshrayaya Namah</td>
                  <td>Resider on the Malaya mountain</td>
                </tr>
                <tr>
                  <td>440</td>
                  <td>Uttarashasthita</td>
                  <td>Om Uttarashasthitaya Namah</td>
                  <td>Residing in the northern direction</td>
                </tr>
                <tr>
                  <td>441</td>
                  <td>Shrida</td>
                  <td>Om Shridaya Namah</td>
                  <td>Giver of prosperity</td>
                </tr>
                <tr>
                  <td>442</td>
                  <td>Divyaushadhivasha</td>
                  <td>Om Divyaushadhivashaya Namah</td>
                  <td>Lord of divine herbs</td>
                </tr>
                <tr>
                  <td>443</td>
                  <td>Khaga</td>
                  <td>Om Khagaya Namah</td>
                  <td>Sky-dweller</td>
                </tr>
                <tr>
                  <td>444</td>
                  <td>Shakhamriga</td>
                  <td>Om Shakhamrigaya Namah</td>
                  <td>Monkey-like</td>
                </tr>
                <tr>
                  <td>445</td>
                  <td>Kapindra</td>
                  <td>Om Kapindraya Namah</td>
                  <td>Lord of monkeys</td>
                </tr>
                <tr>
                  <td>446</td>
                  <td>Puranashrutichanchura</td>
                  <td>Om Puranashrutichanchuraya Namah</td>
                  <td>Active listener of ancient scriptures</td>
                </tr>
                <tr>
                  <td>447</td>
                  <td>Chaturabrahmana</td>
                  <td>Om Chaturabrahmanaya Namah</td>
                  <td>Master of the four Vedas</td>
                </tr>
                <tr>
                  <td>448</td>
                  <td>Yogi</td>
                  <td>Om Yogine Namah</td>
                  <td>One in union</td>
                </tr>
                <tr>
                  <td>449</td>
                  <td>Yogagamya</td>
                  <td>Om Yogagamyaya Namah</td>
                  <td>Attainable through yoga</td>
                </tr>
                <tr>
                  <td>450</td>
                  <td>Parasmai</td>
                  <td>Om Parasmai Namah</td>
                  <td>Supreme being</td>
                </tr>
                <tr>
                  <td>451</td>
                  <td>Avarasmai</td>
                  <td>Om Avarasmai Namah</td>
                  <td>For the lower realm</td>
                </tr>
                <tr>
                  <td>452</td>
                  <td>Anadinidhana</td>
                  <td>Om Anadinidhanaya Namah</td>
                  <td>Without beginning or end</td>
                </tr>
                <tr>
                  <td>453</td>
                  <td>Vyasa</td>
                  <td>Om Vyasaya Namah</td>
                  <td>Sage and compiler of scriptures</td>
                </tr>
                <tr>
                  <td>454</td>
                  <td>Vaikuntha</td>
                  <td>Om Vaikunthaya Namah</td>
                  <td>Lord of Vaikuntha (heavenly abode)</td>
                </tr>
                <tr>
                  <td>455</td>
                  <td>Prithivipati</td>
                  <td>Om Prithivipataye Namah</td>
                  <td>Lord of the Earth</td>
                </tr>
                <tr>
                  <td>456</td>
                  <td>Aparajita</td>
                  <td>Om Aparajitaya Namah</td>
                  <td>Invincible</td>
                </tr>
                <tr>
                  <td>457</td>
                  <td>Jitarata</td>
                  <td>Om Jitarataye Namah</td>
                  <td>Conqueror of enemies</td>
                </tr>
                <tr>
                  <td>458</td>
                  <td>Sadananda</td>
                  <td>Om Sadanandaya Namah</td>
                  <td>Ever blissful</td>
                </tr>
                <tr>
                  <td>459</td>
                  <td>Dayayuta</td>
                  <td>Om Dayayutaya Namah</td>
                  <td>Full of compassion</td>
                </tr>
                <tr>
                  <td>460</td>
                  <td>Gopala</td>
                  <td>Om Gopalaya Namah</td>
                  <td>Protector of cows</td>
                </tr>
                <tr>
                  <td>461</td>
                  <td>Gopati</td>
                  <td>Om Gopataye Namah</td>
                  <td>Master of cows</td>
                </tr>
                <tr>
                  <td>462</td>
                  <td>Gopta</td>
                  <td>Om Goptre Namah</td>
                  <td>Guardian</td>
                </tr>
                <tr>
                  <td>463</td>
                  <td>Kalikalaparashara</td>
                  <td>Om Kalikalaparasharaya Namah</td>
                  <td>Destroyer of Kali Yuga’s calamities</td>
                </tr>
                <tr>
                  <td>464</td>
                  <td>Manovegin</td>
                  <td>Om Manovegine Namah</td>
                  <td>Swift as the mind</td>
                </tr>
                <tr>
                  <td>465</td>
                  <td>Sadayogi</td>
                  <td>Om Sadayogine Namah</td>
                  <td>Eternal yogi</td>
                </tr>
                <tr>
                  <td>466</td>
                  <td>Samsarabhayanashana</td>
                  <td>Om Samsarabhayanashanaya Namah</td>
                  <td>Remover of worldly fears</td>
                </tr>
                <tr>
                  <td>467</td>
                  <td>Tattvadata</td>
                  <td>Om Tattvadatre Namah</td>
                  <td>Giver of truth</td>
                </tr>
                <tr>
                  <td>468</td>
                  <td>Tattvajna</td>
                  <td>Om Tattvajnaya Namah</td>
                  <td>Knower of truth</td>
                </tr>
                <tr>
                  <td>469</td>
                  <td>Tattva</td>
                  <td>Om Tattvaya Namah</td>
                  <td>Truth</td>
                </tr>
                <tr>
                  <td>470</td>
                  <td>Tattvaprakashaka</td>
                  <td>Om Tattvaprakashakaya Namah</td>
                  <td>Illuminator of truth</td>
                </tr>
                <tr>
                  <td>471</td>
                  <td>Shuddha</td>
                  <td>Om Shuddhaya Namah</td>
                  <td>Pure</td>
                </tr>
                <tr>
                  <td>472</td>
                  <td>Buddha</td>
                  <td>Om Buddhaya Namah</td>
                  <td>Enlightened</td>
                </tr>
                <tr>
                  <td>473</td>
                  <td>Nityamukta</td>
                  <td>Om Nityamuktaya Namah</td>
                  <td>Eternally free</td>
                </tr>
                <tr>
                  <td>474</td>
                  <td>Bhaktaraja</td>
                  <td>Om Bhaktarajaya Namah</td>
                  <td>King of devotees</td>
                </tr>
                <tr>
                  <td>475</td>
                  <td>Jayadratha</td>
                  <td>Om Jayadrathaya Namah</td>
                  <td>Victorious warrior</td>
                </tr>
                <tr>
                  <td>476</td>
                  <td>Pralaya</td>
                  <td>Om Pralayaya Namah</td>
                  <td>End of the world</td>
                </tr>
                <tr>
                  <td>477</td>
                  <td>Amitamaya</td>
                  <td>Om Amitamayaya Namah</td>
                  <td>Of boundless illusion</td>
                </tr>
                <tr>
                  <td>478</td>
                  <td>Mayatita</td>
                  <td>Om Mayatitaya Namah</td>
                  <td>Beyond illusion</td>
                </tr>
                <tr>
                  <td>479</td>
                  <td>Vimatsara</td>
                  <td>Om Vimatsaraya Namah</td>
                  <td>Free from jealousy</td>
                </tr>
                <tr>
                  <td>480</td>
                  <td>Mayabharjitaraksha</td>
                  <td>Om Mayabharjitarakshase Namah</td>
                  <td>Destroyer of illusion-protected beings</td>
                </tr>
                <tr>
                  <td>481</td>
                  <td>Mayanirmitavishtapa</td>
                  <td>Om Mayanirmitavishtapaya Namah</td>
                  <td>Creator of illusory worlds</td>
                </tr>
                <tr>
                  <td>482</td>
                  <td>Mayashraya</td>
                  <td>Om Mayashrayaya Namah</td>
                  <td>Supporter of illusion</td>
                </tr>
                <tr>
                  <td>483</td>
                  <td>Nirlepa</td>
                  <td>Om Nirlepaya Namah</td>
                  <td>Unattached</td>
                </tr>
                <tr>
                  <td>484</td>
                  <td>Mayanirvartaka</td>
                  <td>Om Mayanirvartakaya Namah</td>
                  <td>Destroyer of illusion</td>
                </tr>
                <tr>
                  <td>485</td>
                  <td>Sukha</td>
                  <td>Om Sukhaya Namah</td>
                  <td>Joy</td>
                </tr>
                <tr>
                  <td>486</td>
                  <td>Sukhina</td>
                  <td>Om Sukhine Namah</td>
                  <td>Happy</td>
                </tr>
                <tr>
                  <td>487</td>
                  <td>Sukhaprada</td>
                  <td>Om Sukhapradaya Namah</td>
                  <td>Giver of happiness</td>
                </tr>
                <tr>
                  <td>488</td>
                  <td>Naga</td>
                  <td>Om Nagaya Namah</td>
                  <td>Serpent</td>
                </tr>
                <tr>
                  <td>489</td>
                  <td>Maheshakritasamstava</td>
                  <td>Om Maheshakritasamstavaya Namah</td>
                  <td>Praised by Mahesha</td>
                </tr>
                <tr>
                  <td>490</td>
                  <td>Maheshwara</td>
                  <td>Om Maheshwaraya Namah</td>
                  <td>Great Lord</td>
                </tr>
                <tr>
                  <td>491</td>
                  <td>Satyasandha</td>
                  <td>Om Satyasandhaya Namah</td>
                  <td>One steadfast in truth</td>
                </tr>
                <tr>
                  <td>492</td>
                  <td>Sharabha</td>
                  <td>Om Sharabhaya Namah</td>
                  <td>Mighty beast</td>
                </tr>
                <tr>
                  <td>493</td>
                  <td>Kalipavana</td>
                  <td>Om Kalipavanaya Namah</td>
                  <td>Purifier of the Kali age</td>
                </tr>
                <tr>
                  <td>494</td>
                  <td>Sahasrakandharabala-vidhvamsanavichakshana</td>
                  <td>Om Sahasrakandharabala-vidhvamsanavichakshanaya Namah</td>
                  <td>Destroyer of Ravana's thousand arms</td>
                </tr>
                <tr>
                  <td>495</td>
                  <td>Sahasrabahu</td>
                  <td>Om Sahasrabahave Namah</td>
                  <td>Thousand-armed</td>
                </tr>
                <tr>
                  <td>496</td>
                  <td>Sahaja</td>
                  <td>Om Sahajaya Namah</td>
                  <td>Natural</td>
                </tr>
                <tr>
                  <td>497</td>
                  <td>Dwibahu</td>
                  <td>Om Dwibahave Namah</td>
                  <td>Two-armed</td>
                </tr>
                <tr>
                  <td>498</td>
                  <td>Dwibhuj</td>
                  <td>Om Dwibhujaya Namah</td>
                  <td>Two-armed</td>
                </tr>
                <tr>
                  <td>499</td>
                  <td>Amara</td>
                  <td>Om Amaraya Namah</td>
                  <td>Immortal</td>
                </tr>
                <tr>
                  <td>500</td>
                  <td>Chaturbhuja</td>
                  <td>Om Chaturbhujaya Namah</td>
                  <td>Four-armed</td>
                </tr>
                <tr>
                  <td>501</td>
                  <td>Dashabhuja</td>
                  <td>Om Dashabhujaya Namah</td>
                  <td>Ten-armed</td>
                </tr>
                <tr>
                  <td>502</td>
                  <td>Hayagriva</td>
                  <td>Om Hayagrivaya Namah</td>
                  <td>Horse-faced</td>
                </tr>
                <tr>
                  <td>503</td>
                  <td>Khaganana</td>
                  <td>Om Khagananaya Namah</td>
                  <td>Bird-faced</td>
                </tr>
                <tr>
                  <td>504</td>
                  <td>Kapivaktra</td>
                  <td>Om Kapivaktraya Namah</td>
                  <td>Monkey-faced</td>
                </tr>
                <tr>
                  <td>505</td>
                  <td>Kapipati</td>
                  <td>Om Kapipataye Namah</td>
                  <td>Lord of monkeys</td>
                </tr>
                <tr>
                  <td>506</td>
                  <td>Narasimha</td>
                  <td>Om Narasimhaya Namah</td>
                  <td>Man-lion incarnation</td>
                </tr>
                <tr>
                  <td>507</td>
                  <td>Mahadyuti</td>
                  <td>Om Mahadyutaye Namah</td>
                  <td>Of great radiance</td>
                </tr>
                <tr>
                  <td>508</td>
                  <td>Bhishana</td>
                  <td>Om Bhishanaya Namah</td>
                  <td>Fearsome</td>
                </tr>
                <tr>
                  <td>509</td>
                  <td>Bhavaga</td>
                  <td>Om Bhavagaya Namah</td>
                  <td>Understander of feelings</td>
                </tr>
                <tr>
                  <td>510</td>
                  <td>Vandya</td>
                  <td>Om Vandyaya Namah</td>
                  <td>Worthy of worship</td>
                </tr>
                <tr>
                  <td>511</td>
                  <td>Varaha</td>
                  <td>Om Varahaya Namah</td>
                  <td>Boar incarnation</td>
                </tr>
                <tr>
                  <td>512</td>
                  <td>Vayurupadhrishta</td>
                  <td>Om Vayurupadhrishe Namah</td>
                  <td>Form assumed by wind</td>
                </tr>
                <tr>
                  <td>513</td>
                  <td>Lakshmanapranadata</td>
                  <td>Om Lakshmanapranadatre Namah</td>
                  <td>Giver of life to Lakshmana</td>
                </tr>
                <tr>
                  <td>514</td>
                  <td>Parajitadashanana</td>
                  <td>Om Parajitadashananaya Namah</td>
                  <td>Conqueror of Ravana</td>
                </tr>
                <tr>
                  <td>515</td>
                  <td>Parijatanivasi</td>
                  <td>Om Parijatanivasine Namah</td>
                  <td>Dweller in Parijata tree</td>
                </tr>
                <tr>
                  <td>516</td>
                  <td>Vata</td>
                  <td>Om Vatave Namah</td>
                  <td>Banyan tree</td>
                </tr>
                <tr>
                  <td>517</td>
                  <td>Vachanakovida</td>
                  <td>Om Vachanakovidaya Namah</td>
                  <td>Skilled in speech</td>
                </tr>
                <tr>
                  <td>518</td>
                  <td>Surasasyavinirmukta</td>
                  <td>Om Surasasyavinirmuktaya Namah</td>
                  <td>Escaped Surasa's mouth</td>
                </tr>
                <tr>
                  <td>519</td>
                  <td>Simhikapranahara</td>
                  <td>Om Simhikapranaharakaya Namah</td>
                  <td>Slayer of demoness Simhika</td>
                </tr>
                <tr>
                  <td>520</td>
                  <td>Lankalankaravidhvamsa</td>
                  <td>Om Lankalankaravidhvamsine Namah</td>
                  <td>Destroyer of Lanka's glory</td>
                </tr>
                <tr>
                  <td>521</td>
                  <td>Vrishadamshakarupadhrishta</td>
                  <td>Om Vrishadamshakarupadhrishe Namah</td>
                  <td>Assumed form of a bull</td>
                </tr>
                <tr>
                  <td>522</td>
                  <td>Ratrisancharakushala</td>
                  <td>Om Ratrisancharakushalaya Namah</td>
                  <td>Skilled at night travel</td>
                </tr>
                <tr>
                  <td>523</td>
                  <td>Ratrimcharagrihagnida</td>
                  <td>Om Ratrimcharagrihagnidaya Namah</td>
                  <td>Burner of night-dwelling demons</td>
                </tr>
                <tr>
                  <td>524</td>
                  <td>Kinkarantakara</td>
                  <td>Om Kinkarantakaraya Namah</td>
                  <td>Destroyer of servants</td>
                </tr>
                <tr>
                  <td>525</td>
                  <td>Jambumalihanta</td>
                  <td>Om Jambumalihantre Namah</td>
                  <td>Slayer of Jambumali</td>
                </tr>
                <tr>
                  <td>526</td>
                  <td>Ugrarupadhrishta</td>
                  <td>Om Ugrarupadhrishe Namah</td>
                  <td>Assumed a fierce form</td>
                </tr>
                <tr>
                  <td>527</td>
                  <td>Akashachari</td>
                  <td>Om Akashacharine Namah</td>
                  <td>Traveler in the sky</td>
                </tr>
                <tr>
                  <td>528</td>
                  <td>Hariga</td>
                  <td>Om Harigaya Namah</td>
                  <td>Follower of Lord Vishnu</td>
                </tr>
                <tr>
                  <td>529</td>
                  <td>Meghanadaranotsuka</td>
                  <td>Om Meghanadaranotsukaya Namah</td>
                  <td>Eager to defeat Indrajit</td>
                </tr>
                <tr>
                  <td>530</td>
                  <td>Meghagambhiraninada</td>
                  <td>Om Meghagambhiraninadaya Namah</td>
                  <td>Thunderous voice like a cloud</td>
                </tr>
                <tr>
                  <td>531</td>
                  <td>Maharavanakulantaka</td>
                  <td>Om Maharavanakulantakaya Namah</td>
                  <td>Destroyer of Ravana's lineage</td>
                </tr>
                <tr>
                  <td>532</td>
                  <td>Kalanemipranahara</td>
                  <td>Om Kalanemipranaharine Namah</td>
                  <td>Slayer of Kalanemi</td>
                </tr>
                <tr>
                  <td>533</td>
                  <td>Makarishapamokshada</td>
                  <td>Om Makarishapamokshadaya Namah</td>
                  <td>Liberator of the crocodile's curse</td>
                </tr>
                <tr>
                  <td>534</td>
                  <td>Rasa</td>
                  <td>Om Rasaya Namah</td>
                  <td>Essence</td>
                </tr>
                <tr>
                  <td>535</td>
                  <td>Rasajna</td>
                  <td>Om Rasajnaya Namah</td>
                  <td>Knower of essence</td>
                </tr>
                <tr>
                  <td>536</td>
                  <td>Samman</td>
                  <td>Om Sammanaya Namah</td>
                  <td>Respectful</td>
                </tr>
                <tr>
                  <td>537</td>
                  <td>Rupa</td>
                  <td>Om Rupaya Namah</td>
                  <td>Form</td>
                </tr>
                <tr>
                  <td>538</td>
                  <td>Chakshus</td>
                  <td>Om Chakshushe Namah</td>
                  <td>Vision</td>
                </tr>
                <tr>
                  <td>539</td>
                  <td>Shruta</td>
                  <td>Om Shrutaye Namah</td>
                  <td>Well-heard</td>
                </tr>
                <tr>
                  <td>540</td>
                  <td>Vacha</td>
                  <td>Om Vachase Namah</td>
                  <td>Speech</td>
                </tr>
                <tr>
                  <td>541</td>
                  <td>Ghrana</td>
                  <td>Om Ghranaya Namah</td>
                  <td>Smell</td>
                </tr>
                <tr>
                  <td>542</td>
                  <td>Gandha</td>
                  <td>Om Gandhaya Namah</td>
                  <td>Fragrance</td>
                </tr>
                <tr>
                  <td>543</td>
                  <td>Sparshana</td>
                  <td>Om Sparshanaya Namah</td>
                  <td>Touch</td>
                </tr>
                <tr>
                  <td>544</td>
                  <td>Sparsha</td>
                  <td>Om Sparshaya Namah</td>
                  <td>Touch</td>
                </tr>
                <tr>
                  <td>545</td>
                  <td>Ahankaramanaga</td>
                  <td>Om Ahankaramanagaya Namah</td>
                  <td>Beyond ego and pride</td>
                </tr>
                <tr>
                  <td>546</td>
                  <td>Netinetitigamya</td>
                  <td>Om Netinetitigamyaya Namah</td>
                  <td>Comprehensible through negation</td>
                </tr>
                <tr>
                  <td>547</td>
                  <td>Vaikunthabhajanapriya</td>
                  <td>Om Vaikunthabhajanapriyaya Namah</td>
                  <td>Lover of Vaikuntha’s songs</td>
                </tr>
                <tr>
                  <td>548</td>
                  <td>Girisha</td>
                  <td>Om Girishaya Namah</td>
                  <td>Lord of mountains</td>
                </tr>
                <tr>
                  <td>549</td>
                  <td>Girijakanta</td>
                  <td>Om Girijakantaya Namah</td>
                  <td>Beloved of Goddess Parvati</td>
                </tr>
                <tr>
                  <td>550</td>
                  <td>Durvasa</td>
                  <td>Om Durvasase Namah</td>
                  <td>Sage Durvasa</td>
                </tr>
                <tr>
                  <td>551</td>
                  <td>Kavi</td>
                  <td>Om Kavaye Namah</td>
                  <td>Poet</td>
                </tr>
                <tr>
                  <td>552</td>
                  <td>Angirasa</td>
                  <td>Om Angirase Namah</td>
                  <td>Sage Angiras</td>
                </tr>
                <tr>
                  <td>553</td>
                  <td>Bhrigu</td>
                  <td>Om Bhrigave Namah</td>
                  <td>Sage Bhrigu</td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>Vasishtha</td>
                  <td>Om Vasishthaya Namah</td>
                  <td>Sage Vasishtha</td>
                </tr>
                <tr>
                  <td>555</td>
                  <td>Chyavana</td>
                  <td>Om Chyavanaya Namah</td>
                  <td>Sage Chyavana</td>
                </tr>
                <tr>
                  <td>556</td>
                  <td>Narada</td>
                  <td>Om Naradaya Namah</td>
                  <td>Sage Narada</td>
                </tr>
                <tr>
                  <td>557</td>
                  <td>Tumbara</td>
                  <td>Om Tumbaraya Namah</td>
                  <td>Sage Tumbara</td>
                </tr>
                <tr>
                  <td>558</td>
                  <td>Amala</td>
                  <td>Om Amalaya Namah</td>
                  <td>Pure</td>
                </tr>
                <tr>
                  <td>559</td>
                  <td>Vishvakshetra</td>
                  <td>Om Vishvakshetraya Namah</td>
                  <td>Universal field</td>
                </tr>
                <tr>
                  <td>560</td>
                  <td>Vishvabija</td>
                  <td>Om Vishvabijaya Namah</td>
                  <td>Universal seed</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td>Vishvanetra</td>
                  <td>Om Vishvanetraya Namah</td>
                  <td>Eye of the Universe</td>
                </tr>
                <tr>
                  <td>562</td>
                  <td>Vishvapa</td>
                  <td>Om Vishvapaya Namah</td>
                  <td>Protector of the Universe</td>
                </tr>
                <tr>
                  <td>563</td>
                  <td>Yajaka</td>
                  <td>Om Yajakaya Namah</td>
                  <td>Worshipper</td>
                </tr>
                <tr>
                  <td>564</td>
                  <td>Yajamana</td>
                  <td>Om Yajamanaya Namah</td>
                  <td>Worshipped</td>
                </tr>
                <tr>
                  <td>565</td>
                  <td>Pavaka</td>
                  <td>Om Pavakaya Namah</td>
                  <td>Pure</td>
                </tr>
                <tr>
                  <td>566</td>
                  <td>Pitribhya</td>
                  <td>Om Pitribhyo Namah</td>
                  <td>Ancestors</td>
                </tr>
                <tr>
                  <td>567</td>
                  <td>Shraddha</td>
                  <td>Om Shraddhayai Namah</td>
                  <td>Faith</td>
                </tr>
                <tr>
                  <td>568</td>
                  <td>Buddhi</td>
                  <td>Om Buddhayai Namah</td>
                  <td>Intelligence</td>
                </tr>
                <tr>
                  <td>569</td>
                  <td>Kshama</td>
                  <td>Om Kshamayai Namah</td>
                  <td>Forgiveness</td>
                </tr>
                <tr>
                  <td>570</td>
                  <td>Tandra</td>
                  <td>Om Tandrayai Namah</td>
                  <td>Drowsiness</td>
                </tr>
                <tr>
                  <td>571</td>
                  <td>Mantra</td>
                  <td>Om Mantraya Namah</td>
                  <td>Sacred chant</td>
                </tr>
                <tr>
                  <td>572</td>
                  <td>Mantrayitri</td>
                  <td>Om Mantrayitre Namah</td>
                  <td>Creator of mantras</td>
                </tr>
                <tr>
                  <td>573</td>
                  <td>Svara</td>
                  <td>Om Svaraya Namah</td>
                  <td>Sound</td>
                </tr>
                <tr>
                  <td>574</td>
                  <td>Rajendra</td>
                  <td>Om Rajendraya Namah</td>
                  <td>King of kings</td>
                </tr>
                <tr>
                  <td>575</td>
                  <td>Bhupati</td>
                  <td>Om Bhupataye Namah</td>
                  <td>Lord of the Earth</td>
                </tr>
                <tr>
                  <td>576</td>
                  <td>Rundamalin</td>
                  <td>Om Rundamaline Namah</td>
                  <td>Adorned with skulls</td>
                </tr>
                <tr>
                  <td>577</td>
                  <td>Samsarasarathi</td>
                  <td>Om Samsarasarathaye Namah</td>
                  <td>Charioteer of life</td>
                </tr>
                <tr>
                  <td>578</td>
                  <td>Nityasampurnakama</td>
                  <td>Om Nityasampurnakamaya Namah</td>
                  <td>Ever-fulfilled desires</td>
                </tr>
                <tr>
                  <td>579</td>
                  <td>Bhaktakamadukha</td>
                  <td>Om Bhaktakamaduhe Namah</td>
                  <td>Giver of devotees’ wishes</td>
                </tr>
                <tr>
                  <td>580</td>
                  <td>Uttama</td>
                  <td>Om Uttamaya Namah</td>
                  <td>Supreme</td>
                </tr>
                <tr>
                  <td>581</td>
                  <td>Ganapa</td>
                  <td>Om Ganapaya Namah</td>
                  <td>Lord of the Ganas</td>
                </tr>
                <tr>
                  <td>582</td>
                  <td>Keshava</td>
                  <td>Om Keshavaya Namah</td>
                  <td>Lord Vishnu</td>
                </tr>
                <tr>
                  <td>583</td>
                  <td>Bhratra</td>
                  <td>Om Bhratre Namah</td>
                  <td>Brother</td>
                </tr>
                <tr>
                  <td>584</td>
                  <td>Pitra</td>
                  <td>Om Pitre Namah</td>
                  <td>Father</td>
                </tr>
                <tr>
                  <td>585</td>
                  <td>Matra</td>
                  <td>Om Matre Namah</td>
                  <td>Mother</td>
                </tr>
                <tr>
                  <td>586</td>
                  <td>Maruta</td>
                  <td>Om Marutaye Namah</td>
                  <td>Wind God</td>
                </tr>
                <tr>
                  <td>587</td>
                  <td>Sahasramurdhna</td>
                  <td>Om Sahasramurdhne Namah</td>
                  <td>Thousand-headed</td>
                </tr>
                <tr>
                  <td>588</td>
                  <td>Anekasya</td>
                  <td>Om Anekasyaya Namah</td>
                  <td>Many-faced</td>
                </tr>
                <tr>
                  <td>589</td>
                  <td>Sahasraksha</td>
                  <td>Om Sahasrakshaya Namah</td>
                  <td>Thousand-eyed</td>
                </tr>
                <tr>
                  <td>590</td>
                  <td>Sahastrapada</td>
                  <td>Om Sahastrapade Namah</td>
                  <td>Thousand-footed</td>
                </tr>
                <tr>
                  <td>591</td>
                  <td>Kamajita</td>
                  <td>Om Kamajite Namah</td>
                  <td>Conqueror of desires</td>
                </tr>
                <tr>
                  <td>592</td>
                  <td>Kamadahana</td>
                  <td>Om Kamadahanaya Namah</td>
                  <td>Destroyer of desires</td>
                </tr>
                <tr>
                  <td>593</td>
                  <td>Kama</td>
                  <td>Om Kamaya Namah</td>
                  <td>Desire</td>
                </tr>
                <tr>
                  <td>594</td>
                  <td>Kamaphalaprada</td>
                  <td>Om Kamaphalapradaya Namah</td>
                  <td>Giver of fruits of desires</td>
                </tr>
                <tr>
                  <td>595</td>
                  <td>Mudrapahari</td>
                  <td>Om Mudrapaharine Namah</td>
                  <td>Stealer of seals</td>
                </tr>
                <tr>
                  <td>596</td>
                  <td>Rakshoghna</td>
                  <td>Om Rakshoghnaya Namah</td>
                  <td>Destroyer of demons</td>
                </tr>
                <tr>
                  <td>597</td>
                  <td>Kshitibharahara</td>
                  <td>Om Kshitibharaharaya Namah</td>
                  <td>Remover of Earth’s burdens</td>
                </tr>
                <tr>
                  <td>598</td>
                  <td>Bala</td>
                  <td>Om Balaya Namah</td>
                  <td>Strength</td>
                </tr>
                <tr>
                  <td>599</td>
                  <td>Nakhadamshtrayudha</td>
                  <td>Om Nakhadamshtrayudhaya Namah</td>
                  <td>Weaponed with nails and teeth</td>
                </tr>
                <tr>
                  <td>600</td>
                  <td>Vishnu</td>
                  <td>Om Vishnave Namah</td>
                  <td>Lord Vishnu</td>
                </tr>
                <tr>
                  <td>601</td>
                  <td>Bhaktabhayava</td>
                  <td>Om Bhaktabhayavarapradaya Namah</td>
                  <td>Giver of fearlessness and boons to devotees</td>
                </tr>
                <tr>
                  <td>602</td>
                  <td>Darpaghna</td>
                  <td>Om Darpaghne Namah</td>
                  <td>Destroyer of pride</td>
                </tr>
                <tr>
                  <td>603</td>
                  <td>Darpada</td>
                  <td>Om Darpadaya Namah</td>
                  <td>Giver of pride</td>
                </tr>
                <tr>
                  <td>604</td>
                  <td>Damshtrashatamurti</td>
                  <td>Om Damshtrashatamurtaye Namah</td>
                  <td>Formed with a hundred teeth</td>
                </tr>
                <tr>
                  <td>605</td>
                  <td>Amurti</td>
                  <td>Om Amurtimate Namah</td>
                  <td>Formless</td>
                </tr>
                <tr>
                  <td>606</td>
                  <td>Mahanidhi</td>
                  <td>Om Mahanidhaye Namah</td>
                  <td>Great treasure</td>
                </tr>
                <tr>
                  <td>607</td>
                  <td>Mahabhaga</td>
                  <td>Om Mahabhagaya Namah</td>
                  <td>Great fortune</td>
                </tr>
                <tr>
                  <td>608</td>
                  <td>Mahabharga</td>
                  <td>Om Mahabhargaya Namah</td>
                  <td>Radiant brilliance</td>
                </tr>
                <tr>
                  <td>609</td>
                  <td>Maharddhi</td>
                  <td>Om Maharddhidaya Namah</td>
                  <td>Giver of great prosperity</td>
                </tr>
                <tr>
                  <td>610</td>
                  <td>Mahakara</td>
                  <td>Om Mahakaraya Namah</td>
                  <td>Great creator</td>
                </tr>
                <tr>
                  <td>611</td>
                  <td>Mahayogi</td>
                  <td>Om Mahayogine Namah</td>
                  <td>Great ascetic</td>
                </tr>
                <tr>
                  <td>612</td>
                  <td>Mahatejas</td>
                  <td>Om Mahatejase Namah</td>
                  <td>Of great radiance</td>
                </tr>
                <tr>
                  <td>613</td>
                  <td>Mahadyuti</td>
                  <td>Om Mahadyutaye Namah</td>
                  <td>Of great splendor</td>
                </tr>
                <tr>
                  <td>614</td>
                  <td>Mahasana</td>
                  <td>Om Mahasanaya Namah</td>
                  <td>Of great seat or position</td>
                </tr>
                <tr>
                  <td>615</td>
                  <td>Mahanada</td>
                  <td>Om Mahanadaya Namah</td>
                  <td>Of great sound</td>
                </tr>
                <tr>
                  <td>616</td>
                  <td>Mahamantra</td>
                  <td>Om Mahamantraya Namah</td>
                  <td>Great mantra</td>
                </tr>
                <tr>
                  <td>617</td>
                  <td>Mahamata</td>
                  <td>Om Mahamataye Namah</td>
                  <td>Of great intellect</td>
                </tr>
                <tr>
                  <td>618</td>
                  <td>Mahagama</td>
                  <td>Om Mahagamaya Namah</td>
                  <td>Of great reach</td>
                </tr>
                <tr>
                  <td>619</td>
                  <td>Mahodara</td>
                  <td>Om Mahodaraya Namah</td>
                  <td>Possessor of a great belly</td>
                </tr>
                <tr>
                  <td>620</td>
                  <td>Mahadevatmaka</td>
                  <td>Om Mahadevatmakaya Namah</td>
                  <td>Of divine essence</td>
                </tr>
                <tr>
                  <td>621</td>
                  <td>Vibhava</td>
                  <td>Om Vibhave Namah</td>
                  <td>Splendid</td>
                </tr>
                <tr>
                  <td>622</td>
                  <td>Raudrakarma</td>
                  <td>Om Raudrakarmane Namah</td>
                  <td>Fierce in deeds</td>
                </tr>
                <tr>
                  <td>623</td>
                  <td>Krurakarma</td>
                  <td>Om Krurakarmane Namah</td>
                  <td>Of cruel deeds</td>
                </tr>
                <tr>
                  <td>624</td>
                  <td>Ratnabha</td>
                  <td>Om Ratnabhaya Namah</td>
                  <td>Radiant like a jewel</td>
                </tr>
                <tr>
                  <td>625</td>
                  <td>Kritagama</td>
                  <td>Om Kritagamaya Namah</td>
                  <td>Author of scriptures</td>
                </tr>
                <tr>
                  <td>626</td>
                  <td>Ambhodhilanghana</td>
                  <td>Om Ambhodhilanghanaya Namah</td>
                  <td>Crosser of the ocean</td>
                </tr>
                <tr>
                  <td>627</td>
                  <td>Simha</td>
                  <td>Om Simhaya Namah</td>
                  <td>Lion</td>
                </tr>
                <tr>
                  <td>628</td>
                  <td>Satyadharmapramodana</td>
                  <td>Om Satyadharmapramodanaya Namah</td>
                  <td>Delighted in true dharma</td>
                </tr>
                <tr>
                  <td>629</td>
                  <td>Jitamitra</td>
                  <td>Om Jitamitraya Namah</td>
                  <td>Conqueror of enemies</td>
                </tr>
                <tr>
                  <td>630</td>
                  <td>Jaya</td>
                  <td>Om Jayaya Namah</td>
                  <td>Victory</td>
                </tr>
                <tr>
                  <td>631</td>
                  <td>Soma</td>
                  <td>Om Somaya Namah</td>
                  <td>Cool like the moon</td>
                </tr>
                <tr>
                  <td>632</td>
                  <td>Vijaya</td>
                  <td>Om Vijayaya Namah</td>
                  <td>Triumph</td>
                </tr>
                <tr>
                  <td>633</td>
                  <td>Vayunandana</td>
                  <td>Om Vayunandanaya Namah</td>
                  <td>Son of the Wind</td>
                </tr>
                <tr>
                  <td>634</td>
                  <td>Jivadatra</td>
                  <td>Om Jivadatre Namah</td>
                  <td>Giver of life</td>
                </tr>
                <tr>
                  <td>635</td>
                  <td>Sahasramsha</td>
                  <td>Om Sahasramshave Namah</td>
                  <td>Thousand-rayed</td>
                </tr>
                <tr>
                  <td>636</td>
                  <td>Mukunda</td>
                  <td>Om Mukundaya Namah</td>
                  <td>Giver of liberation</td>
                </tr>
                <tr>
                  <td>637</td>
                  <td>Bhuridakshina</td>
                  <td>Om Bhuridakshinaya Namah</td>
                  <td>Generous with gifts</td>
                </tr>
                <tr>
                  <td>638</td>
                  <td>Siddhartha</td>
                  <td>Om Siddharthaya Namah</td>
                  <td>One who achieves goals</td>
                </tr>
                <tr>
                  <td>639</td>
                  <td>Siddhida</td>
                  <td>Om Siddhidaya Namah</td>
                  <td>Giver of success</td>
                </tr>
                <tr>
                  <td>640</td>
                  <td>Siddhasankalpa</td>
                  <td>Om Siddhasankalpaya Namah</td>
                  <td>One whose resolve is always fulfilled</td>
                </tr>
                <tr>
                  <td>641</td>
                  <td>Siddhihetuka</td>
                  <td>Om Siddhihetukaya Namah</td>
                  <td>Cause of success</td>
                </tr>
                <tr>
                  <td>642</td>
                  <td>Saptapatalacharana</td>
                  <td>Om Saptapatalacharanaya Namah</td>
                  <td>Traveler of the seven netherworlds</td>
                </tr>
                <tr>
                  <td>643</td>
                  <td>Saptarshiganavandita</td>
                  <td>Om Saptarshiganavanditaya Namah</td>
                  <td>Worshipped by seven sages</td>
                </tr>
                <tr>
                  <td>644</td>
                  <td>Saptabdhilanghana</td>
                  <td>Om Saptabdhilanghanaya Namah</td>
                  <td>Crosser of the seven oceans</td>
                </tr>
                <tr>
                  <td>645</td>
                  <td>Vira</td>
                  <td>Om Viraya Namah</td>
                  <td>Hero</td>
                </tr>
                <tr>
                  <td>646</td>
                  <td>Saptadwiporumandala</td>
                  <td>Om Saptadwiporumandalaya Namah</td>
                  <td>Ruler of the seven continents</td>
                </tr>
                <tr>
                  <td>647</td>
                  <td>Saptangarajyasukhada</td>
                  <td>Om Saptangarajyasukhadaya Namah</td>
                  <td>Giver of happiness in seven realms</td>
                </tr>
                <tr>
                  <td>648</td>
                  <td>Saptamatrinishevita</td>
                  <td>Om Saptamatrinishevitaya Namah</td>
                  <td>Servedpublished by seven mothers</td>
                </tr>
                <tr>
                  <td>649</td>
                  <td>Saptasvarlokamukuta</td>
                  <td>Om Saptasvarlokamukutaya Namah</td>
                  <td>Crown of the seven heavenly worlds</td>
                </tr>
                <tr>
                  <td>650</td>
                  <td>Saptahotra</td>
                  <td>Om Saptahotre Namah</td>
                  <td>Performer of seven sacrifices</td>
                </tr>
                <tr>
                  <td>651</td>
                  <td>Svarashraya</td>
                  <td>Om Svarashrayaya Namah</td>
                  <td>Supporter of sound</td>
                </tr>
                <tr>
                  <td>652</td>
                  <td>Saptachchhandonidhi</td>
                  <td>Om Saptachchhandonidhaye Namah</td>
                  <td>Repository of the seven meters</td>
                </tr>
                <tr>
                  <td>653</td>
                  <td>Saptachchhanda</td>
                  <td>Om Saptachchhandase Namah</td>
                  <td>Knower of seven meters</td>
                </tr>
                <tr>
                  <td>654</td>
                  <td>Saptajanashraya</td>
                  <td>Om Saptajanashrayaya Namah</td>
                  <td>Refuge of seven peoples</td>
                </tr>
                <tr>
                  <td>655</td>
                  <td>Saptasamopagita</td>
                  <td>Om Saptasamopagitaya Namah</td>
                  <td>Praised by the seven Sama Vedas</td>
                </tr>
                <tr>
                  <td>656</td>
                  <td>Saptapatalasamshraya</td>
                  <td>Om Saptapatalasamshrayaya Namah</td>
                  <td>Resider of seven netherworlds</td>
                </tr>
                <tr>
                  <td>657</td>
                  <td>Medhada</td>
                  <td>Om Medhadaya Namah</td>
                  <td>Giver of intellect</td>
                </tr>
                <tr>
                  <td>658</td>
                  <td>Kirtida</td>
                  <td>Om Kirtidaya Namah</td>
                  <td>Giver of fame</td>
                </tr>
                <tr>
                  <td>659</td>
                  <td>Shokaharini</td>
                  <td>Om Shokaharine Namah</td>
                  <td>Remover of sorrow</td>
                </tr>
                <tr>
                  <td>660</td>
                  <td>Daurbhagyanashana</td>
                  <td>Om Daurbhagyanashanaya Namah</td>
                  <td>Destroyer of misfortune</td>
                </tr>
                <tr>
                  <td>661</td>
                  <td>Sarvarakshakara</td>
                  <td>Om Sarvarakshakaraya Namah</td>
                  <td>Protector of all</td>
                </tr>
                <tr>
                  <td>662</td>
                  <td>Garbhadoshaghna</td>
                  <td>Om Garbhadoshaghne Namah</td>
                  <td>Destroyer of womb defects</td>
                </tr>
                <tr>
                  <td>663</td>
                  <td>Putrapautrada</td>
                  <td>Om Putrapautradaya Namah</td>
                  <td>Giver of children and grandchildren</td>
                </tr>
                <tr>
                  <td>664</td>
                  <td>Prativadimukhastambha</td>
                  <td>Om Prativadimukhastambhaya Namah</td>
                  <td>Stunner of opponents</td>
                </tr>
                <tr>
                  <td>665</td>
                  <td>Rushtachittaprasadana</td>
                  <td>Om Rushtachittaprasadanaya Namah</td>
                  <td>Calmer of angry hearts</td>
                </tr>
                <tr>
                  <td>666</td>
                  <td>Parabhicharashamana</td>
                  <td>Om Parabhicharashamanaya Namah</td>
                  <td>Destroyer of black magic</td>
                </tr>
                <tr>
                  <td>667</td>
                  <td>Dukhaghna</td>
                  <td>Om Dukhaghne Namah</td>
                  <td>Remover of sorrows</td>
                </tr>
                <tr>
                  <td>668</td>
                  <td>Bandhamokshada</td>
                  <td>Om Bandhamokshadaya Namah</td>
                  <td>Liberator from bondage</td>
                </tr>
                <tr>
                  <td>669</td>
                  <td>Navadvarapuradhara</td>
                  <td>Om Navadvarapuradharaya Namah</td>
                  <td>Holder of the city of nine gates</td>
                </tr>
                <tr>
                  <td>670</td>
                  <td>Navadvaraniketana</td>
                  <td>Om Navadvaraniketanaya Namah</td>
                  <td>Dweller in the city of nine gates</td>
                </tr>
                <tr>
                  <td>671</td>
                  <td>Naranarayanastutya</td>
                  <td>Om Naranarayanastutyaya Namah</td>
                  <td>Praised by sages Nara and Narayana</td>
                </tr>
                <tr>
                  <td>672</td>
                  <td>Navanathamaheshwara</td>
                  <td>Om Navanathamaheshwaraya Namah</td>
                  <td>Supreme among the nine Nathas</td>
                </tr>
                <tr>
                  <td>673</td>
                  <td>Mekhali</td>
                  <td>Om Mekhaline Namah</td>
                  <td>Girded with a belt</td>
                </tr>
                <tr>
                  <td>674</td>
                  <td>Kavachi</td>
                  <td>Om Kavachine Namah</td>
                  <td>Wearing armor</td>
                </tr>
                <tr>
                  <td>675</td>
                  <td>Khadgi</td>
                  <td>Om Khadgine Namah</td>
                  <td>Wielding a sword</td>
                </tr>
                <tr>
                  <td>676</td>
                  <td>Bhrajishnu</td>
                  <td>Om Bhrajishnave Namah</td>
                  <td>Brilliant</td>
                </tr>
                <tr>
                  <td>677</td>
                  <td>Jishnusarathi</td>
                  <td>Om Jishnusarathaye Namah</td>
                  <td>Charioteer of the victorious</td>
                </tr>
                <tr>
                  <td>678</td>
                  <td>Bahuyojanavistirnapuchchha</td>
                  <td>Om Bahuyojanavistirnapuchchhaya Namah</td>
                  <td>Having a tail spanning many leagues</td>
                </tr>
                <tr>
                  <td>679</td>
                  <td>Puchchhahatasura</td>
                  <td>Om Puchchhahatasuraya Namah</td>
                  <td>Destroyer of demons with his tail</td>
                </tr>
                <tr>
                  <td>680</td>
                  <td>Dushtagrahanihanta</td>
                  <td>Om Dushtagrahanihantre Namah</td>
                  <td>Destroyer of malicious planets</td>
                </tr>
                <tr>
                  <td>681</td>
                  <td>Pishachagrahaghata</td>
                  <td>Om Pishachagrahaghatakaya Namah</td>
                  <td>Destroyer of demonic forces</td>
                </tr>
                <tr>
                  <td>682</td>
                  <td>Balagrahavinashi</td>
                  <td>Om Balagrahavinashine Namah</td>
                  <td>Destroyer of harmful spirits affecting children</td>
                </tr>
                <tr>
                  <td>683</td>
                  <td>Dharmanetra</td>
                  <td>Om Dharmanetre Namah</td>
                  <td>Protector of righteousness</td>
                </tr>
                <tr>
                  <td>684</td>
                  <td>Kripakara</td>
                  <td>Om Kripakaraya Namah</td>
                  <td>Compassionate</td>
                </tr>
                <tr>
                  <td>685</td>
                  <td>Ugrakritya</td>
                  <td>Om Ugrakrityaya Namah</td>
                  <td>Fierce in actions</td>
                </tr>
                <tr>
                  <td>686</td>
                  <td>Ugravega</td>
                  <td>Om Ugravegaya Namah</td>
                  <td>Of great speed</td>
                </tr>
                <tr>
                  <td>687</td>
                  <td>Ugranetra</td>
                  <td>Om Ugranetraya Namah</td>
                  <td>Fierce-eyed</td>
                </tr>
                <tr>
                  <td>688</td>
                  <td>Shatakratu</td>
                  <td>Om Shatakratave Namah</td>
                  <td>Hundred-sacrificed</td>
                </tr>
                <tr>
                  <td>689</td>
                  <td>Shatamanyunuta</td>
                  <td>Om Shatamanyunutaya Namah</td>
                  <td>Praised by the hundred-eyed one (Indra)</td>
                </tr>
                <tr>
                  <td>690</td>
                  <td>Stutya</td>
                  <td>Om Stutyaya Namah</td>
                  <td>Worthy of praise</td>
                </tr>
                <tr>
                  <td>691</td>
                  <td>Stuta</td>
                  <td>Om Stutaye Namah</td>
                  <td>Praised</td>
                </tr>
                <tr>
                  <td>692</td>
                  <td>Stotra</td>
                  <td>Om Stotre Namah</td>
                  <td>Hymn</td>
                </tr>
                <tr>
                  <td>693</td>
                  <td>Mahabala</td>
                  <td>Om Mahabalaya Namah</td>
                  <td>Of immense strength</td>
                </tr>
                <tr>
                  <td>694</td>
                  <td>Samagragunashali</td>
                  <td>Om Samagragunashaline Namah</td>
                  <td>Possessing all virtues</td>
                </tr>
                <tr>
                  <td>695</td>
                  <td>Vyagra</td>
                  <td>Om Vyagraya Namah</td>
                  <td>Vigorous</td>
                </tr>
                <tr>
                  <td>696</td>
                  <td>Rakshovinashaka</td>
                  <td>Om Rakshovinashakaya Namah</td>
                  <td>Destroyer of demons</td>
                </tr>
                <tr>
                  <td>697</td>
                  <td>Rakshoagnidaha</td>
                  <td>Om Rakshoagnidahaya Namah</td>
                  <td>Burner of demons</td>
                </tr>
                <tr>
                  <td>698</td>
                  <td>Brahmesha</td>
                  <td>Om Brahmeshaya Namah</td>
                  <td>Lord of Brahma</td>
                </tr>
                <tr>
                  <td>699</td>
                  <td>Shridhar</td>
                  <td>Om Shridharaya Namah</td>
                  <td>Bearer of fortune</td>
                </tr>
                <tr>
                  <td>700</td>
                  <td>Bhaktavatsala</td>
                  <td>Om Bhaktavatsalaya Namah</td>
                  <td>Affectionate towards devotees</td>
                </tr>
                <tr>
                  <td>701</td>
                  <td>Meghanada</td>
                  <td>Om Meghanadaya Namah</td>
                  <td>Thunderous</td>
                </tr>
                <tr>
                  <td>702</td>
                  <td>Megharupa</td>
                  <td>Om Megharupaya Namah</td>
                  <td>Cloud-formed</td>
                </tr>
                <tr>
                  <td>703</td>
                  <td>Meghavrishtinivara</td>
                  <td>Om Meghavrishtinivarakaya Namah</td>
                  <td>Controller of rainstorms</td>
                </tr>
                <tr>
                  <td>704</td>
                  <td>Meghajivanaheta</td>
                  <td>Om Meghajivanahetave Namah</td>
                  <td>Cause of life-giving rains</td>
                </tr>
                <tr>
                  <td>705</td>
                  <td>Meghashyama</td>
                  <td>Om Meghashyamaya Namah</td>
                  <td>Dark as a thundercloud</td>
                </tr>
                <tr>
                  <td>706</td>
                  <td>Paratmaka</td>
                  <td>Om Paratmakaya Namah</td>
                  <td>Supreme soul</td>
                </tr>
                <tr>
                  <td>707</td>
                  <td>Samiratanaya</td>
                  <td>Om Samiratanayaya Namah</td>
                  <td>Son of the Wind God</td>
                </tr>
                <tr>
                  <td>708</td>
                  <td>Yoddha</td>
                  <td>Om Yoddhre Namah</td>
                  <td>Warrior</td>
                </tr>
                <tr>
                  <td>709</td>
                  <td>Nrityavidyavisharada</td>
                  <td>Om Nrityavidyavisharadaya Namah</td>
                  <td>Expert in the art of dance</td>
                </tr>
                <tr>
                  <td>710</td>
                  <td>Amogha</td>
                  <td>Om Amoghaya Namah</td>
                  <td>Unfailing</td>
                </tr>
                <tr>
                  <td>711</td>
                  <td>Amoghadrishti</td>
                  <td>Om Amoghadrishtaye Namah</td>
                  <td>Having an infallible vision</td>
                </tr>
                <tr>
                  <td>712</td>
                  <td>Ishtada</td>
                  <td>Om Ishtadaya Namah</td>
                  <td>Giver of desires</td>
                </tr>
                <tr>
                  <td>713</td>
                  <td>Arishtanashana</td>
                  <td>Om Arishtanashanaya Namah</td>
                  <td>Destroyer of misfortunes</td>
                </tr>
                <tr>
                  <td>714</td>
                  <td>Artha</td>
                  <td>Om Arthaya Namah</td>
                  <td>Purpose</td>
                </tr>
                <tr>
                  <td>715</td>
                  <td>Anarthapahari</td>
                  <td>Om Anarthapaharine Namah</td>
                  <td>Remover of calamities</td>
                </tr>
                <tr>
                  <td>716</td>
                  <td>Samartha</td>
                  <td>Om Samarthaya Namah</td>
                  <td>Competent</td>
                </tr>
                <tr>
                  <td>717</td>
                  <td>Ramasevaka</td>
                  <td>Om Ramasevakaya Namah</td>
                  <td>Servant of Lord Rama</td>
                </tr>
                <tr>
                  <td>718</td>
                  <td>Arthivandya</td>
                  <td>Om Arthivandyaya Namah</td>
                  <td>Worshipped by seekers</td>
                </tr>
                <tr>
                  <td>719</td>
                  <td>Asurarat</td>
                  <td>Om Asurarataye Namah</td>
                  <td>Enemy of demons</td>
                </tr>
                <tr>
                  <td>720</td>
                  <td>Pundarikaksha</td>
                  <td>Om Pundarikakshaya Namah</td>
                  <td>Lotus-eyed</td>
                </tr>
                <tr>
                  <td>721</td>
                  <td>Atmabhu</td>
                  <td>Om Atmabhuve Namah</td>
                  <td>Self-born</td>
                </tr>
                <tr>
                  <td>722</td>
                  <td>Sankarshana</td>
                  <td>Om Sankarshanaya Namah</td>
                  <td>Attractor</td>
                </tr>
                <tr>
                  <td>723</td>
                  <td>Vishuddhatma</td>
                  <td>Om Vishuddhatmane Namah</td>
                  <td>Pure soul</td>
                </tr>
                <tr>
                  <td>724</td>
                  <td>Vidyarashi</td>
                  <td>Om Vidyarashaye Namah</td>
                  <td>Treasury of knowledge</td>
                </tr>
                <tr>
                  <td>725</td>
                  <td>Sureshwara</td>
                  <td>Om Sureshwaraya Namah</td>
                  <td>Lord of gods</td>
                </tr>
                <tr>
                  <td>726</td>
                  <td>Achaloddharaka</td>
                  <td>Om Achaloddharakaya Namah</td>
                  <td>Lifter of mountains</td>
                </tr>
                <tr>
                  <td>727</td>
                  <td>Nitya</td>
                  <td>Om Nityaya Namah</td>
                  <td>Eternal</td>
                </tr>
                <tr>
                  <td>728</td>
                  <td>Setukrita</td>
                  <td>Om Setukrite Namah</td>
                  <td>Bridge-builder</td>
                </tr>
                <tr>
                  <td>729</td>
                  <td>Ramasarathi</td>
                  <td>Om Ramasarathaye Namah</td>
                  <td>Charioteer of Rama</td>
                </tr>
                <tr>
                  <td>730</td>
                  <td>Ananda</td>
                  <td>Om Anandaya Namah</td>
                  <td>Bliss</td>
                </tr>
                <tr>
                  <td>731</td>
                  <td>Paramananda</td>
                  <td>Om Paramanandaya Namah</td>
                  <td>Supreme bliss</td>
                </tr>
                <tr>
                  <td>732</td>
                  <td>Matsya</td>
                  <td>Om Matsyaya Namah</td>
                  <td>Fish incarnation</td>
                </tr>
                <tr>
                  <td>733</td>
                  <td>Kurma</td>
                  <td>Om Kurmaya Namah</td>
                  <td>Tortoise incarnation</td>
                </tr>
                <tr>
                  <td>734</td>
                  <td>Nirashraya</td>
                  <td>Om Nirashrayaya Namah</td>
                  <td>Independent</td>
                </tr>
                <tr>
                  <td>735</td>
                  <td>Varaha</td>
                  <td>Om Varahaya Namah</td>
                  <td>Boar incarnation</td>
                </tr>
                <tr>
                  <td>736</td>
                  <td>Narasimha</td>
                  <td>Om Narasimhaya Namah</td>
                  <td>Man-lion incarnation</td>
                </tr>
                <tr>
                  <td>737</td>
                  <td>Vamana</td>
                  <td>Om Vamanaya Namah</td>
                  <td>Dwarf incarnation</td>
                </tr>
                <tr>
                  <td>738</td>
                  <td>Jamadagnija</td>
                  <td>Om Jamadagnijaya Namah</td>
                  <td>Born of Jamadagni</td>
                </tr>
                <tr>
                  <td>739</td>
                  <td>Rama</td>
                  <td>Om Ramaya Namah</td>
                  <td>Lord Rama</td>
                </tr>
                <tr>
                  <td>740</td>
                  <td>Krishna</td>
                  <td>Om Krishnaya Namah</td>
                  <td>Lord Krishna</td>
                </tr>
                <tr>
                  <td>741</td>
                  <td>Shiva</td>
                  <td>Om Shivaya Namah</td>
                  <td>Lord Shiva</td>
                </tr>
                <tr>
                  <td>742</td>
                  <td>Buddha</td>
                  <td>Om Buddhaya Namah</td>
                  <td>Enlightened one</td>
                </tr>
                <tr>
                  <td>743</td>
                  <td>Kalkin</td>
                  <td>Om Kalkine Namah</td>
                  <td>Future avatar</td>
                </tr>
                <tr>
                  <td>744</td>
                  <td>Ramashraya</td>
                  <td>Om Ramashrayaya Namah</td>
                  <td>Refuge of Rama</td>
                </tr>
                <tr>
                  <td>745</td>
                  <td>Hari</td>
                  <td>Om Haraye Namah</td>
                  <td>Remover of sins</td>
                </tr>
                <tr>
                  <td>746</td>
                  <td>Nandi</td>
                  <td>Om Nandine Namah</td>
                  <td>Sacred bull of Shiva</td>
                </tr>
                <tr>
                  <td>747</td>
                  <td>Bhringi</td>
                  <td>Om Bhringine Namah</td>
                  <td>Devotee of Shiva</td>
                </tr>
                <tr>
                  <td>748</td>
                  <td>Chandi</td>
                  <td>Om Chandine Namah</td>
                  <td>Fierce protector</td>
                </tr>
                <tr>
                  <td>749</td>
                  <td>Ganesha</td>
                  <td>Om Ganeshaya Namah</td>
                  <td>Lord Ganesha</td>
                </tr>
                <tr>
                  <td>750</td>
                  <td>Ganasevita</td>
                  <td>Om Ganasevitaya Namah</td>
                  <td>Attended by Ganas</td>
                </tr>
                <tr>
                  <td>751</td>
                  <td>Karmadhyaksha</td>
                  <td>Om Karmadhyakshaya Namah</td>
                  <td>Supervisor of actions</td>
                </tr>
                <tr>
                  <td>752</td>
                  <td>Suradhyaksha</td>
                  <td>Om Suradhyakshaya Namah</td>
                  <td>Supervisor of gods</td>
                </tr>
                <tr>
                  <td>753</td>
                  <td>Vishrama</td>
                  <td>Om Vishramaya Namah</td>
                  <td>Rest</td>
                </tr>
                <tr>
                  <td>754</td>
                  <td>Jagatipati</td>
                  <td>Om Jagatipataye Namah</td>
                  <td>Lord of the universe</td>
                </tr>
                <tr>
                  <td>755</td>
                  <td>Jagannatha</td>
                  <td>Om Jagannathaya Namah</td>
                  <td>Master of the world</td>
                </tr>
                <tr>
                  <td>756</td>
                  <td>Kapisha</td>
                  <td>Om Kapishaya Namah</td>
                  <td>Lord of monkeys</td>
                </tr>
                <tr>
                  <td>757</td>
                  <td>Sarvavasa</td>
                  <td>Om Sarvavasaya Namah</td>
                  <td>Dweller in all</td>
                </tr>
                <tr>
                  <td>758</td>
                  <td>Sadashraya</td>
                  <td>Om Sadashrayaya Namah</td>
                  <td>Eternal refuge</td>
                </tr>
                <tr>
                  <td>759</td>
                  <td>Sugrivadistuta</td>
                  <td>Om Sugrivadistutaya Namah</td>
                  <td>Praised by Sugriva</td>
                </tr>
                <tr>
                  <td>760</td>
                  <td>Danta</td>
                  <td>Om Dantaya Namah</td>
                  <td>Self-controlled</td>
                </tr>
                <tr>
                  <td>761</td>
                  <td>Sarvakarma</td>
                  <td>Om Sarvakarmane Namah</td>
                  <td>Performer of all deeds</td>
                </tr>
                <tr>
                  <td>762</td>
                  <td>Plavangama</td>
                  <td>Om Plavangamaya Namah</td>
                  <td>Traveler</td>
                </tr>
                <tr>
                  <td>763</td>
                  <td>Nakhadaritarksha</td>
                  <td>Om Nakhadaritarakshase Namah</td>
                  <td>Slayer of demons with nails</td>
                </tr>
                <tr>
                  <td>764</td>
                  <td>Nakhayuddhavisharada</td>
                  <td>Om Nakhayuddhavisharadaya Namah</td>
                  <td>Skilled in fighting with nails</td>
                </tr>
                <tr>
                  <td>765</td>
                  <td>Kushala</td>
                  <td>Om Kushalaya Namah</td>
                  <td>Expert</td>
                </tr>
                <tr>
                  <td>766</td>
                  <td>Sudhana</td>
                  <td>Om Sudhanaya Namah</td>
                  <td>Charitable</td>
                </tr>
                <tr>
                  <td>767</td>
                  <td>Shesha</td>
                  <td>Om Sheshaya Namah</td>
                  <td>Divine serpent</td>
                </tr>
                <tr>
                  <td>768</td>
                  <td>Vasuki</td>
                  <td>Om Vasukaye Namah</td>
                  <td>King of serpents</td>
                </tr>
                <tr>
                  <td>769</td>
                  <td>Takshaka</td>
                  <td>Om Takshakaya Namah</td>
                  <td>Serpent king</td>
                </tr>
                <tr>
                  <td>770</td>
                  <td>Swarnavarna</td>
                  <td>Om Swarnavarnaya Namah</td>
                  <td>Golden-colored</td>
                </tr>
                <tr>
                  <td>771</td>
                  <td>Baladhya</td>
                  <td>Om Baladhyaya Namah</td>
                  <td>Full of strength</td>
                </tr>
                <tr>
                  <td>772</td>
                  <td>Purujet</td>
                  <td>Om Purujetre Namah</td>
                  <td>Victor in battles</td>
                </tr>
                <tr>
                  <td>773</td>
                  <td>Aghanashana</td>
                  <td>Om Aghanashanaya Namah</td>
                  <td>Destroyer of sins</td>
                </tr>
                <tr>
                  <td>774</td>
                  <td>Kaivalyarupa</td>
                  <td>Om Kaivalyarupaya Namah</td>
                  <td>Embodiment of liberation</td>
                </tr>
                <tr>
                  <td>775</td>
                  <td>Kaivalya</td>
                  <td>Om Kaivalyaya Namah</td>
                  <td>Liberation</td>
                </tr>
                <tr>
                  <td>776</td>
                  <td>Garuda</td>
                  <td>Om Garudaya Namah</td>
                  <td>Divine eagle</td>
                </tr>
                <tr>
                  <td>777</td>
                  <td>Pannagoraga</td>
                  <td>Om Pannagoragaya Namah</td>
                  <td>King of serpents</td>
                </tr>
                <tr>
                  <td>778</td>
                  <td>Kilkil Ravahatarata</td>
                  <td>Om Kilkil Ravahatarataye Namah</td>
                  <td>Destroyer of evil cries</td>
                </tr>
                <tr>
                  <td>779</td>
                  <td>Garvaparvatabhedana</td>
                  <td>Om Garvaparvatabhedanaya Namah</td>
                  <td>Splitter of arrogant mountains</td>
                </tr>
                <tr>
                  <td>780</td>
                  <td>Vajranga</td>
                  <td>Om Vajrangaya Namah</td>
                  <td>Diamond-bodied</td>
                </tr>
                <tr>
                  <td>781</td>
                  <td>Vajradamshtra</td>
                  <td>Om Vajradamshtraya Namah</td>
                  <td>Diamond-toothed</td>
                </tr>
                <tr>
                  <td>782</td>
                  <td>Bhaktavajranivara</td>
                  <td>Om Bhaktavajranivarakaya Namah</td>
                  <td>Protector of devotees</td>
                </tr>
                <tr>
                  <td>783</td>
                  <td>Nakhayudha</td>
                  <td>Om Nakhayudhaya Namah</td>
                  <td>Armed with nails</td>
                </tr>
                <tr>
                  <td>784</td>
                  <td>Manigriva</td>
                  <td>Om Manigrivaya Namah</td>
                  <td>Bejeweled</td>
                </tr>
                <tr>
                  <td>785</td>
                  <td>Jwalamalini</td>
                  <td>Om Jwalamaline Namah</td>
                  <td>Adorned with flames</td>
                </tr>
                <tr>
                  <td>786</td>
                  <td>Bhaskara</td>
                  <td>Om Bhaskaraya Namah</td>
                  <td>Radiant</td>
                </tr>
                <tr>
                  <td>787</td>
                  <td>Praudhapratapa</td>
                  <td>Om Praudhapratapaya Namah</td>
                  <td>Bold and glorious</td>
                </tr>
                <tr>
                  <td>788</td>
                  <td>Tapana</td>
                  <td>Om Tapanaya Namah</td>
                  <td>Hot as the sun</td>
                </tr>
                <tr>
                  <td>789</td>
                  <td>Bhaktatapanivara</td>
                  <td>Om Bhaktatapanivarakaya Namah</td>
                  <td>Remover of devotees' heat</td>
                </tr>
                <tr>
                  <td>790</td>
                  <td>Sharana</td>
                  <td>Om Sharanaya Namah</td>
                  <td>Refuge</td>
                </tr>
                <tr>
                  <td>791</td>
                  <td>Jivana</td>
                  <td>Om Jivanaya Namah</td>
                  <td>Life-giving</td>
                </tr>
                <tr>
                  <td>792</td>
                  <td>Bhokta</td>
                  <td>Om Bhoktre Namah</td>
                  <td>Enjoyer</td>
                </tr>
                <tr>
                  <td>793</td>
                  <td>Nanacheshta</td>
                  <td>Om Nanacheshtaya Namah</td>
                  <td>Performer of various actions</td>
                </tr>
                <tr>
                  <td>794</td>
                  <td>Achanchala</td>
                  <td>Om Achanchalaya Namah</td>
                  <td>Steadfast</td>
                </tr>
                <tr>
                  <td>795</td>
                  <td>Swastimata</td>
                  <td>Om Swastimate Namah</td>
                  <td>Auspicious-minded</td>
                </tr>
                <tr>
                  <td>796</td>
                  <td>Swastidaya</td>
                  <td>Om Swastidaya Namah</td>
                  <td>Giver of auspiciousness</td>
                </tr>
                <tr>
                  <td>797</td>
                  <td>Dukhashatana</td>
                  <td>Om Dukhashatanaya Namah</td>
                  <td>Remover of sorrow</td>
                </tr>
                <tr>
                  <td>798</td>
                  <td>Pavanatmaja</td>
                  <td>Om Pavanatmajaya Namah</td>
                  <td>Son of the Wind</td>
                </tr>
                <tr>
                  <td>799</td>
                  <td>Pavana</td>
                  <td>Om Pavanaya Namah</td>
                  <td>Pure</td>
                </tr>
                <tr>
                  <td>800</td>
                  <td>Pavana</td>
                  <td>Om Pavanaya Namah</td>
                  <td>Wind</td>
                </tr>
                <tr>
                  <td>801</td>
                  <td>Kant</td>
                  <td>Om Kantaya Namah</td>
                  <td>Beloved</td>
                </tr>
                <tr>
                  <td>802</td>
                  <td>Bhaktagahsahana</td>
                  <td>Om Bhaktagahsahanaya Namah</td>
                  <td>Bearer of devotees' burdens</td>
                </tr>
                <tr>
                  <td>803</td>
                  <td>Bali</td>
                  <td>Om Baline Namah</td>
                  <td>Mighty</td>
                </tr>
                <tr>
                  <td>804</td>
                  <td>Meghanadaripa</td>
                  <td>Om Meghanadaripave Namah</td>
                  <td>Enemy of Meghanada</td>
                </tr>
                <tr>
                  <td>805</td>
                  <td>Meghanadasamhatarakshasa</td>
                  <td>Om Meghanadasamhatarakshasaya Namah</td>
                  <td>Destroyer of Meghanada</td>
                </tr>
                <tr>
                  <td>806</td>
                  <td>Kshara</td>
                  <td>Om Ksharaya Namah</td>
                  <td>Decaying</td>
                </tr>
                <tr>
                  <td>807</td>
                  <td>Akshara</td>
                  <td>Om Aksharaya Namah</td>
                  <td>Imperishable</td>
                </tr>
                <tr>
                  <td>808</td>
                  <td>Vinitat</td>
                  <td>Om Vinitatmane Namah</td>
                  <td>Humble</td>
                </tr>
                <tr>
                  <td>809</td>
                  <td>Vanaresha</td>
                  <td>Om Vanareshaya Namah</td>
                  <td>Lord of monkeys</td>
                </tr>
                <tr>
                  <td>810</td>
                  <td>Satangata</td>
                  <td>Om Satangataye Namah</td>
                  <td>Attainer of truth</td>
                </tr>
                <tr>
                  <td>811</td>
                  <td>Shrikantha</td>
                  <td>Om Shrikanthaya Namah</td>
                  <td>Beautiful-necked</td>
                </tr>
                <tr>
                  <td>812</td>
                  <td>Shitikantha</td>
                  <td>Om Shitikanthaya Namah</td>
                  <td>Blue-throated</td>
                </tr>
                <tr>
                  <td>813</td>
                  <td>Sahaya</td>
                  <td>Om Sahayaya Namah</td>
                  <td>Helper</td>
                </tr>
                <tr>
                  <td>814</td>
                  <td>Sahanayaka</td>
                  <td>Om Sahanayakaya Namah</td>
                  <td>Leader</td>
                </tr>
                <tr>
                  <td>815</td>
                  <td>Asthula</td>
                  <td>Om Asthulaya Namah</td>
                  <td>Subtle</td>
                </tr>
                <tr>
                  <td>816</td>
                  <td>Anana</td>
                  <td>Om Ananave Namah</td>
                  <td>Endless</td>
                </tr>
                <tr>
                  <td>817</td>
                  <td>Bharga</td>
                  <td>Om Bhargaya Namah</td>
                  <td>Radiant</td>
                </tr>
                <tr>
                  <td>818</td>
                  <td>Divya</td>
                  <td>Om Divyaya Namah</td>
                  <td>Divine</td>
                </tr>
                <tr>
                  <td>819</td>
                  <td>Samsritinashana</td>
                  <td>Om Namah</td>
                  <td>Destroyer of worldly ties</td>
                </tr>
                <tr>
                  <td>820</td>
                  <td>Adhyatmavidyasara</td>
                  <td>Om Adhyatmavidyasaraya Namah</td>
                  <td>Essence of spiritual knowledge</td>
                </tr>
                <tr>
                  <td>821</td>
                  <td>Adhyatmakushala</td>
                  <td>Om Adhyatmakushalaya Namah</td>
                  <td>Skilled in spirituality</td>
                </tr>
                <tr>
                  <td>822</td>
                  <td>Sudhi</td>
                  <td>Om Sudhiye Namah</td>
                  <td>Intelligent</td>
                </tr>
                <tr>
                  <td>823</td>
                  <td>Akalmasha</td>
                  <td>Om Akalamashaya Namah</td>
                  <td>Sinless</td>
                </tr>
                <tr>
                  <td>824</td>
                  <td>Satyaheta</td>
                  <td>OOm Satyahetave Namah</td>
                  <td>Cause of truth</td>
                </tr>
                <tr>
                  <td>825</td>
                  <td>Satyada</td>
                  <td>OOm Satyadaya Namah</td>
                  <td>Giver of truth</td>
                </tr>
                <tr>
                  <td>826</td>
                  <td>Satyagochara</td>
                  <td>Om Satyagocharaya Namah</td>
                  <td>Perceiver of truth</td>
                </tr>
                <tr>
                  <td>827</td>
                  <td>Satyagarbha</td>
                  <td>SO Om Satyagarbhaya Namah</td>
                  <td>Embodiment of truth</td>
                </tr>
                <tr>
                  <td>828</td>
                  <td>Satyarupa</td>
                  <td>Om Satyarupaya Namah</td>
                  <td>Form of truth</td>
                </tr>
                <tr>
                  <td>829</td>
                  <td>Satya</td>
                  <td>Om Satyaya Namah</td>
                  <td>TRUE</td>
                </tr>
                <tr>
                  <td>830</td>
                  <td>Satyaparakrama</td>
                  <td>Om Satyaparakramaya Namah</td>
                  <td>Truthful and valorous</td>
                </tr>
                <tr>
                  <td>831</td>
                  <td>Anjanapranalinga</td>
                  <td>Om Anjanapranalingaya Namah</td>
                  <td>Essence of Anjanaha’s life</td>
                </tr>
                <tr>
                  <td>832</td>
                  <td>Vayuvanshodbhava</td>
                  <td>OO Vayuvanshodbhavaya Namaha</td>
                  <td>Born of the Wind God’s lineage</td>
                </tr>
                <tr>
                  <td>833</td>
                  <td>Shubha</td>
                  <td>Om Shubhaya Namah</td>
                  <td>Auspicious</td>
                </tr>
                <tr>
                  <td>834</td>
                  <td>Bhadrarupa</td>
                  <td>BOm Bhadrarupaya Namah</td>
                  <td>Graceful form</td>
                </tr>
                <tr>
                  <td>835</td>
                  <td>Rudrarupa</td>
                  <td>Om Rudrarupaya Namah</td>
                  <td>Form of Rudra</td>
                </tr>
                <tr>
                  <td>836</td>
                  <td>Surupa</td>
                  <td>Om Surupaya Namah</td>
                  <td>Handsome</td>
                </tr>
                <tr>
                  <td>837</td>
                  <td>Chitrarupadhris</td>
                  <td>Om Chitrarupadhrishe Namah</td>
                  <td>Master of vivid forms</td>
                </tr>
                <tr>
                  <td>838</td>
                  <td>Mainakavandita</td>
                  <td>Om Mainakavanditaya Namah</td>
                  <td>Praised by Mainaka</td>
                </tr>
                <tr>
                  <td>839</td>
                  <td>Sukshmadarshana</td>
                  <td>Om Sukshmadarshanaya Namah</td>
                  <td>Subtle observer</td>
                </tr>
                <tr>
                  <td>840</td>
                  <td>Vijaya</td>
                  <td>Om Vijayaya Namah</td>
                  <td>Victorious</td>
                </tr>
                <tr>
                  <td>841</td>
                  <td>Jaya</td>
                  <td>Om Jayaya Namah</td>
                  <td>Triumph</td>
                </tr>
                <tr>
                  <td>842</td>
                  <td>Krantadinmandala</td>
                  <td>Om Krantadinmandalaya Namah</td>
                  <td>Conqueror of regions</td>
                </tr>
                <tr>
                  <td>843</td>
                  <td>Rudra</td>
                  <td>Om Rudraya Namah</td>
                  <td>Fierce</td>
                </tr>
                <tr>
                  <td>844</td>
                  <td>Prakatikritavikrama</td>
                  <td>Om Prakatikritavikramaya Namah</td>
                  <td>Revealer of valor</td>
                </tr>
                <tr>
                  <td>845</td>
                  <td>Kambukantha</td>
                  <td>Om Kambukanthaya Namah</td>
                  <td>Conch-necked</td>
                </tr>
                <tr>
                  <td>846</td>
                  <td>Prasannatma</td>
                  <td>Om Prasannatmane Namah</td>
                  <td>Pleasant-souled</td>
                </tr>
                <tr>
                  <td>847</td>
                  <td>Hrasvanasa</td>
                  <td>Om Hrasvanasaya Namah</td>
                  <td>Small-nosed</td>
                </tr>
                <tr>
                  <td>848</td>
                  <td>Vrikodara</td>
                  <td>Om Vrikodaraya Namah</td>
                  <td>Large-bellied</td>
                </tr>
                <tr>
                  <td>849</td>
                  <td>Lambaushtha</td>
                  <td>Om Lambaushthaya Namah</td>
                  <td>Thick-lipped</td>
                </tr>
                <tr>
                  <td>850</td>
                  <td>Kundali</td>
                  <td>Om Kundaline Namah</td>
                  <td>Coiled</td>
                </tr>
                <tr>
                  <td>851</td>
                  <td>Chitramali</td>
                  <td>Om Chitramaline Namah</td>
                  <td>Adorned with ornaments</td>
                </tr>
                <tr>
                  <td>852</td>
                  <td>Yogavidam Vara</td>
                  <td>Om Yogavidam Varaya Namah</td>
                  <td>Best among yogis</td>
                </tr>
                <tr>
                  <td>853</td>
                  <td>Vipashchit</td>
                  <td>Om Vipashchite Namah</td>
                  <td>Learned</td>
                </tr>
                <tr>
                  <td>854</td>
                  <td>Kavi</td>
                  <td>Om Kavaye Namah</td>
                  <td>Poet</td>
                </tr>
                <tr>
                  <td>855</td>
                  <td>Anandavigraha</td>
                  <td>Om Anandavigrahaya Namah</td>
                  <td>Embodiment of bliss</td>
                </tr>
                <tr>
                  <td>856</td>
                  <td>Analpashasana</td>
                  <td>Om Analpashasanaya Namah</td>
                  <td>Just ruler</td>
                </tr>
                <tr>
                  <td>857</td>
                  <td>Phalgunisuna</td>
                  <td>Om Phalgunisunave Namah</td>
                  <td>Arjuna's comrade</td>
                </tr>
                <tr>
                  <td>858</td>
                  <td>Avyagra</td>
                  <td>Om Avyagraya Namah</td>
                  <td>Steady</td>
                </tr>
                <tr>
                  <td>859</td>
                  <td>Yogatma</td>
                  <td>Om Yogatmane Namah</td>
                  <td>Essence of yoga</td>
                </tr>
                <tr>
                  <td>860</td>
                  <td>Yogatatpara</td>
                  <td>Om Yogatatparaya Namah</td>
                  <td>Dedicated to yoga</td>
                </tr>
                <tr>
                  <td>861</td>
                  <td>Yogavid</td>
                  <td>Om Yogavide Namah</td>
                  <td>Knower of yoga</td>
                </tr>
                <tr>
                  <td>862</td>
                  <td>Yogakart</td>
                  <td>Om Yogakartre Namah</td>
                  <td>Performer of yoga</td>
                </tr>
                <tr>
                  <td>863</td>
                  <td>Yogayoni</td>
                  <td>Om Yogayonaye Namah</td>
                  <td>Origin of yoga</td>
                </tr>
                <tr>
                  <td>864</td>
                  <td>Digambara</td>
                  <td>Om Digambaraya Namah</td>
                  <td>Sky-clad</td>
                </tr>
                <tr>
                  <td>865</td>
                  <td>Akaradihakarantavarnanirmitavigrah</td>
                  <td>Om Akaradihakarantavarnanirmitavigrahaya Namah</td>
                  <td>Formed of all sounds</td>
                </tr>
                <tr>
                  <td>866</td>
                  <td>Ulukhalamukha</td>
                  <td>Om Ulukhalamukhaya Namah</td>
                  <td>Mortar-faced</td>
                </tr>
                <tr>
                  <td>867</td>
                  <td>Siddhasamstuta</td>
                  <td>Om Siddhasamstutaya Namah</td>
                  <td>Praised by Siddhas</td>
                </tr>
                <tr>
                  <td>868</td>
                  <td>Pramatheshwara</td>
                  <td>Om Pramatheshwaraya Namah</td>
                  <td>Lord of Pramathas</td>
                </tr>
                <tr>
                  <td>869</td>
                  <td>Shlishtajangha</td>
                  <td>Om Shlishtajanghaya Namah</td>
                  <td>FFirm-thighed</td>
                </tr>
                <tr>
                  <td>870</td>
                  <td>Shlishtajana</td>
                  <td>Om Shlishtajanave Namah</td>
                  <td>FFirm-kneed</td>
                </tr>
                <tr>
                  <td>871</td>
                  <td>Shlishtapani</td>
                  <td>Om Shlishtapanaye Namah</td>
                  <td>FFirm-handed</td>
                </tr>
                <tr>
                  <td>872</td>
                  <td>Shikhadhara</td>
                  <td>Om Shikhadharaya Namah</td>
                  <td>Crest-wearing</td>
                </tr>
                <tr>
                  <td>873</td>
                  <td>Susharma</td>
                  <td>Om Susharmane Namah</td>
                  <td>Well-protected</td>
                </tr>
                <tr>
                  <td>874</td>
                  <td>Amitasharma</td>
                  <td>Om Amitasharmane Namah</td>
                  <td>Immense protector</td>
                </tr>
                <tr>
                  <td>875</td>
                  <td>Narayanaparayana</td>
                  <td>Om Narayanaparayanaya Namah</td>
                  <td>Devotee of Narayana</td>
                </tr>
                <tr>
                  <td>876</td>
                  <td>Jishnu</td>
                  <td>Om Jishnave Namah</td>
                  <td>Conqueror</td>
                </tr>
                <tr>
                  <td>877</td>
                  <td>Bhavishnu</td>
                  <td>Om Bhavishnave Namah</td>
                  <td>Future-seer</td>
                </tr>
                <tr>
                  <td>878</td>
                  <td>Rochishnu</td>
                  <td>Om Rochishnave Namah</td>
                  <td>Illuminating</td>
                </tr>
                <tr>
                  <td>879</td>
                  <td>Grasishnu</td>
                  <td>Om Grasishnave Namah</td>
                  <td>Engulfing</td>
                </tr>
                <tr>
                  <td>880</td>
                  <td>Sthanu</td>
                  <td>Om Sthanave Namah</td>
                  <td>Immovable</td>
                </tr>
                <tr>
                  <td>881</td>
                  <td>Harirudranuseka</td>
                  <td>Om Harirudranusekaya Namah</td>
                  <td>Blessing of Hari and Rudra</td>
                </tr>
                <tr>
                  <td>882</td>
                  <td>Kampana</td>
                  <td>Om Kampanaya Namah</td>
                  <td>Trembling</td>
                </tr>
                <tr>
                  <td>883</td>
                  <td>Bhumikampana</td>
                  <td>Om Bhumikampanaya Namah</td>
                  <td>Earth-shaking</td>
                </tr>
                <tr>
                  <td>884</td>
                  <td>Gunapravaha</td>
                  <td>Om Gunapravahaya Namah</td>
                  <td>Stream of virtues</td>
                </tr>
                <tr>
                  <td>885</td>
                  <td>Sutratma</td>
                  <td>Om Sutratmane Namah</td>
                  <td>Cosmic thread</td>
                </tr>
                <tr>
                  <td>886</td>
                  <td>Vitaragastutipriya</td>
                  <td>Om Vitaragastutipriyaya Namah</td>
                  <td>Loved by detached sages</td>
                </tr>
                <tr>
                  <td>887</td>
                  <td>Nagakanyabhayadhvamsa</td>
                  <td>Om Nagakanyabhayadhvamsine Namah</td>
                  <td>Remover of serpent maidens' fear</td>
                </tr>
                <tr>
                  <td>888</td>
                  <td>Rukmavarna</td>
                  <td>Om Rukmavarnaya Namah</td>
                  <td>Golden-hued</td>
                </tr>
                <tr>
                  <td>889</td>
                  <td>Kapalabhrit</td>
                  <td>Om Kapalabhrite Namah</td>
                  <td>Skull-bearer</td>
                </tr>
                <tr>
                  <td>890</td>
                  <td>Anakula</td>
                  <td>Om Anakulaya Namah</td>
                  <td>Calm and unperturbed</td>
                </tr>
                <tr>
                  <td>891</td>
                  <td>Bhavopaya</td>
                  <td>Om Bhavopayaya Namah</td>
                  <td>Solution to worldly life</td>
                </tr>
                <tr>
                  <td>892</td>
                  <td>Anapaya</td>
                  <td>Om Anapayaya Namah</td>
                  <td>Imperishable</td>
                </tr>
                <tr>
                  <td>893</td>
                  <td>Vedaparaga</td>
                  <td>Om Vedaparagaya Namah</td>
                  <td>Knower of Vedas</td>
                </tr>
                <tr>
                  <td>894</td>
                  <td>Akshara</td>
                  <td>Om Aksharaya Namah</td>
                  <td>Eternal</td>
                </tr>
                <tr>
                  <td>895</td>
                  <td>Purusha</td>
                  <td>Om Purushaya Namah</td>
                  <td>Cosmic being</td>
                </tr>
                <tr>
                  <td>896</td>
                  <td>Lokanatha</td>
                  <td>Om Lokanathaya Namah</td>
                  <td>Lord of the world</td>
                </tr>
                <tr>
                  <td>897</td>
                  <td>Rikshahprabhu</td>
                  <td>Om Rikshahprabhave Namah</td>
                  <td>Lord of Rikshas (Bears)</td>
                </tr>
                <tr>
                  <td>898</td>
                  <td>Dridha</td>
                  <td>Om Dridhaya Namah</td>
                  <td>Steadfast</td>
                </tr>
                <tr>
                  <td>899</td>
                  <td>Ashtangayoga Phalabhu</td>
                  <td>Om Ashtangayoga Phalabhuje Namah</td>
                  <td>Bearer of Yoga's fruits</td>
                </tr>
                <tr>
                  <td>900</td>
                  <td>Satyasandha</td>
                  <td>Om Satyasandhaya Namah</td>
                  <td>Truthful</td>
                </tr>
                <tr>
                  <td>901</td>
                  <td>Purushtuta</td>
                  <td>Om Purushtutaya Namah</td>
                  <td>Praised by the wise</td>
                </tr>
                <tr>
                  <td>902</td>
                  <td>Shmashanasthananilaya</td>
                  <td>Om Shmashanasthananilayaya Namah</td>
                  <td>Dweller of cremation grounds</td>
                </tr>
                <tr>
                  <td>903</td>
                  <td>Pretavidravanakshama</td>
                  <td>Om Pretavidravanakshamaya Namah</td>
                  <td>Scares away evil spirits</td>
                </tr>
                <tr>
                  <td>904</td>
                  <td>Panchaksharapar</td>
                  <td>Om Panchaksharaparaya Namah</td>
                  <td>Master of the five sacred syllables</td>
                </tr>
                <tr>
                  <td>905</td>
                  <td>Panchamatrika</td>
                  <td>Om Panchamatrikaya Namah</td>
                  <td>Associated with the five mothers</td>
                </tr>
                <tr>
                  <td>906</td>
                  <td>Ranjanadhwaja</td>
                  <td>Om Ranjanadhwajaya Namah</td>
                  <td>Joyous flag bearer</td>
                </tr>
                <tr>
                  <td>907</td>
                  <td>Yoginivrindavandyashri</td>
                  <td>Om Yoginivrindavandyashriyai Namah</td>
                  <td>Revered by groups of yoginis</td>
                </tr>
                <tr>
                  <td>908</td>
                  <td>Shatrughna</td>
                  <td>Om Shatrughnaya Namah</td>
                  <td>Destroyer of enemies</td>
                </tr>
                <tr>
                  <td>909</td>
                  <td>Anantavikrama</td>
                  <td>Om Anantavikramaya Namah</td>
                  <td>Infinite valor</td>
                </tr>
                <tr>
                  <td>910</td>
                  <td>Brahmachari</td>
                  <td>Om Brahmacharine Namah</td>
                  <td>Celibate</td>
                </tr>
                <tr>
                  <td>911</td>
                  <td>Indriyaripa</td>
                  <td>Om Indriyaripave Namah</td>
                  <td>Enemy of senses</td>
                </tr>
                <tr>
                  <td>912</td>
                  <td>Dhritadanda</td>
                  <td>Om Dhritadandaya Namah</td>
                  <td>Holder of the staff</td>
                </tr>
                <tr>
                  <td>913</td>
                  <td>Dashatmak</td>
                  <td>Om Dashatmakaya Namah</td>
                  <td>Possessing ten forms</td>
                </tr>
                <tr>
                  <td>914</td>
                  <td>Aprapancha</td>
                  <td>Om Aprapanchaya Namah</td>
                  <td>Beyond material world</td>
                </tr>
                <tr>
                  <td>915</td>
                  <td>Sadachara</td>
                  <td>Om Sadacharaya Namah</td>
                  <td>Embodiment of righteous conduct</td>
                </tr>
                <tr>
                  <td>916</td>
                  <td>Shurasenavidaraka</td>
                  <td>Om Shurasenavidarakaya Namah</td>
                  <td>Vanquisher of Shurasena's army</td>
                </tr>
                <tr>
                  <td>917</td>
                  <td>Vriddha</td>
                  <td>Om Vriddhaya Namah</td>
                  <td>Elderly</td>
                </tr>
                <tr>
                  <td>918</td>
                  <td>Pramoda</td>
                  <td>Om Pramodaya Namah</td>
                  <td>Joyful</td>
                </tr>
                <tr>
                  <td>919</td>
                  <td>Ananda</td>
                  <td>Om Anandaya Namah</td>
                  <td>Blissful</td>
                </tr>
                <tr>
                  <td>920</td>
                  <td>Saptadwipapatindhara</td>
                  <td>Om Saptadwipapatindharaya Namah</td>
                  <td>Supporter of seven islands</td>
                </tr>
                <tr>
                  <td>921</td>
                  <td>Navadwarapuradhara</td>
                  <td>Om Navadwarapuradharaya Namah</td>
                  <td>Protector of the nine-gated city</td>
                </tr>
                <tr>
                  <td>922</td>
                  <td>Pratyagra</td>
                  <td>Om Pratyagraya Namah</td>
                  <td>Always fresh</td>
                </tr>
                <tr>
                  <td>923</td>
                  <td>Samagayaka</td>
                  <td>Om Samagayakaya Namah</td>
                  <td>Singer of Sama Veda</td>
                </tr>
                <tr>
                  <td>924</td>
                  <td>Shatchakradhanme</td>
                  <td>Om Shatchakradhanme Namah</td>
                  <td>Possessor of six energy centers</td>
                </tr>
                <tr>
                  <td>925</td>
                  <td>Swarlokabhayakrita</td>
                  <td>Om Swarlokabhayakrite Namah</td>
                  <td>Provider of safety to heaven</td>
                </tr>
                <tr>
                  <td>926</td>
                  <td>Manada</td>
                  <td>Om Manadaya Namah</td>
                  <td>Giver of honor</td>
                </tr>
                <tr>
                  <td>927</td>
                  <td>Mada</td>
                  <td>Om Madaya Namah</td>
                  <td>Intoxicating</td>
                </tr>
                <tr>
                  <td>928</td>
                  <td>Sarvavashyakar</td>
                  <td>Om Sarvavashyakaraya Namah</td>
                  <td>Controller of all</td>
                </tr>
                <tr>
                  <td>929</td>
                  <td>Shakti</td>
                  <td>Om Shaktaye Namah</td>
                  <td>Powerful</td>
                </tr>
                <tr>
                  <td>930</td>
                  <td>Ananta</td>
                  <td>Om Anantaya Namah</td>
                  <td>Infinite</td>
                </tr>
                <tr>
                  <td>931</td>
                  <td>Anantamangala</td>
                  <td>Om Anantamangalaya Namah</td>
                  <td>Infinite auspiciousness</td>
                </tr>
                <tr>
                  <td>932</td>
                  <td>Ashtamurti</td>
                  <td>Om Ashtamurtaye Namah</td>
                  <td>Manifested in eight forms</td>
                </tr>
                <tr>
                  <td>933</td>
                  <td>Nayopeta</td>
                  <td>Om Nayopetaya Namah</td>
                  <td>Embodiment of good conduct</td>
                </tr>
                <tr>
                  <td>934</td>
                  <td>Virupa</td>
                  <td>Om Virupaya Namah</td>
                  <td>With diverse forms</td>
                </tr>
                <tr>
                  <td>935</td>
                  <td>Susundara</td>
                  <td>Om Susundaraya Namah</td>
                  <td>Extremely beautiful</td>
                </tr>
                <tr>
                  <td>936</td>
                  <td>Dhumaketu</td>
                  <td>Om Dhumaketave Namah</td>
                  <td>Comet-like</td>
                </tr>
                <tr>
                  <td>937</td>
                  <td>Mahaketu</td>
                  <td>Om Mahaketave Namah</td>
                  <td>Great banner</td>
                </tr>
                <tr>
                  <td>938</td>
                  <td>Satyaketu</td>
                  <td>Om Satyaketave Namah</td>
                  <td>Banner of truth</td>
                </tr>
                <tr>
                  <td>939</td>
                  <td>Maharatha</td>
                  <td>Om Maharathaya Namah</td>
                  <td>Great charioteer</td>
                </tr>
                <tr>
                  <td>940</td>
                  <td>Nandipriya</td>
                  <td>Om Nandipriyaya Namah</td>
                  <td>Beloved of Nandi</td>
                </tr>
                <tr>
                  <td>941</td>
                  <td>Swatantra</td>
                  <td>Om Swatantraya Namah</td>
                  <td>Independent</td>
                </tr>
                <tr>
                  <td>942</td>
                  <td>Mekhali</td>
                  <td>Om Mekhaline Namah</td>
                  <td>Adorned with a girdle</td>
                </tr>
                <tr>
                  <td>943</td>
                  <td>Damarupriya</td>
                  <td>Om Damarupriyaya Namah</td>
                  <td>Lover of the drum</td>
                </tr>
                <tr>
                  <td>944</td>
                  <td>Lauhanga</td>
                  <td>Om Lauhangaya Namah</td>
                  <td>Iron-bodied</td>
                </tr>
                <tr>
                  <td>945</td>
                  <td>Sarvavid</td>
                  <td>Om Sarvavide Namah</td>
                  <td>Omniscient</td>
                </tr>
                <tr>
                  <td>946</td>
                  <td>Dhanvin</td>
                  <td>Om Dhanvine Namah</td>
                  <td>Armed with a bow</td>
                </tr>
                <tr>
                  <td>947</td>
                  <td>Khandala</td>
                  <td>Om Khandalaya Namah</td>
                  <td>Destroyer</td>
                </tr>
                <tr>
                  <td>948</td>
                  <td>Sharva</td>
                  <td>Om Sharvaya Namah</td>
                  <td>Lord Shiva</td>
                </tr>
                <tr>
                  <td>949</td>
                  <td>Ishwara</td>
                  <td>Om Ishwaraya Namah</td>
                  <td>Supreme Lord</td>
                </tr>
                <tr>
                  <td>950</td>
                  <td>Phalabhuje</td>
                  <td>Om Phalabhuje Namah</td>
                  <td>Fruit-bearer</td>
                </tr>
                <tr>
                  <td>951</td>
                  <td>Phalahasta</td>
                  <td>Om Phalahastaya Namah</td>
                  <td>Bearing fruits in hand</td>
                </tr>
                <tr>
                  <td>952</td>
                  <td>Sarvakarmaphalaprada</td>
                  <td>Om Sarvakarmaphalapradaya Namah</td>
                  <td>Bestower of results for all deeds</td>
                </tr>
                <tr>
                  <td>953</td>
                  <td>Dharmadhyaksha</td>
                  <td>Om Dharmadhyakshaya Namah</td>
                  <td>Supervisor of Dharma</td>
                </tr>
                <tr>
                  <td>954</td>
                  <td>Dharmapala</td>
                  <td>Om Dharmapalaya Namah</td>
                  <td>Protector of Dharma</td>
                </tr>
                <tr>
                  <td>955</td>
                  <td>Dharma</td>
                  <td>Om Dharmaya Namah</td>
                  <td>Embodiment of Dharma</td>
                </tr>
                <tr>
                  <td>956</td>
                  <td>Dharmaprada</td>
                  <td>Om Dharmapradaya Namah</td>
                  <td>Giver of Dharma</td>
                </tr>
                <tr>
                  <td>957</td>
                  <td>Arthada</td>
                  <td>Om Arthadaya Namah</td>
                  <td>Giver of wealth</td>
                </tr>
                <tr>
                  <td>958</td>
                  <td>Panchavimshatitattvajna</td>
                  <td>Om Panchavimshatitattvajnaya Namah</td>
                  <td>Knower of 25 principles</td>
                </tr>
                <tr>
                  <td>959</td>
                  <td>Taraka</td>
                  <td>Om Tarakaya Namah</td>
                  <td>Deliverer</td>
                </tr>
                <tr>
                  <td>960</td>
                  <td>Brahmatatpara</td>
                  <td>Om Brahmatatparaya Namah</td>
                  <td>Focused on the supreme reality</td>
                </tr>
                <tr>
                  <td>961</td>
                  <td>Trimargavasata</td>
                  <td>Om Trimargavasataye Namah</td>
                  <td>Dweller of three paths</td>
                </tr>
                <tr>
                  <td>962</td>
                  <td>Bhima</td>
                  <td>Om Bhimaya Namah</td>
                  <td>Fearsome</td>
                </tr>
                <tr>
                  <td>963</td>
                  <td>Sarvadukhanibarhana</td>
                  <td>Om Sarvadukhanibarhanaya Namah</td>
                  <td>Remover of all suffering</td>
                </tr>
                <tr>
                  <td>964</td>
                  <td>Urjaswati</td>
                  <td>Om Urjaswate Namah</td>
                  <td>Vigorous</td>
                </tr>
                <tr>
                  <td>965</td>
                  <td>Nishkala</td>
                  <td>Om Nishkalaya Namah</td>
                  <td>Free of parts</td>
                </tr>
                <tr>
                  <td>966</td>
                  <td>Shuline</td>
                  <td>Om Shuline Namah</td>
                  <td>Armed with a trident</td>
                </tr>
                <tr>
                  <td>967</td>
                  <td>Mauline</td>
                  <td>Om Mauline Namah</td>
                  <td>Crowned</td>
                </tr>
                <tr>
                  <td>968</td>
                  <td>Garjannishachara</td>
                  <td>Om Garjannishacharaya Namah</td>
                  <td>Roaring over evil beings</td>
                </tr>
                <tr>
                  <td>969</td>
                  <td>Raktambaradhara</td>
                  <td>Om Raktambaradharaya Namah</td>
                  <td>Wearing red garments</td>
                </tr>
                <tr>
                  <td>970</td>
                  <td>Rakta</td>
                  <td>Om Raktaya Namah</td>
                  <td>Red-colored</td>
                </tr>
                <tr>
                  <td>971</td>
                  <td>Raktamalya</td>
                  <td>Om Raktamalyaya Namah</td>
                  <td>Wearing red garlands</td>
                </tr>
                <tr>
                  <td>972</td>
                  <td>Vibhushana</td>
                  <td>Om Vibhushanaya Namah</td>
                  <td>Ornamented</td>
                </tr>
                <tr>
                  <td>973</td>
                  <td>Vanamali</td>
                  <td>Om Vanamaline Namah</td>
                  <td>Wearing forest garlands</td>
                </tr>
                <tr>
                  <td>974</td>
                  <td>Shubhanga</td>
                  <td>Om Shubhangaya Namah</td>
                  <td>Auspicious-bodied</td>
                </tr>
                <tr>
                  <td>975</td>
                  <td>Shweta</td>
                  <td>Om Shwetaya Namah</td>
                  <td>White-colored</td>
                </tr>
                <tr>
                  <td>976</td>
                  <td>Shwetambara</td>
                  <td>Om Shwetambaraya Namah</td>
                  <td>Clad in white</td>
                </tr>
                <tr>
                  <td>977</td>
                  <td>Yuna</td>
                  <td>Om Yune Namah</td>
                  <td>Youthful</td>
                </tr>
                <tr>
                  <td>978</td>
                  <td>Jaya</td>
                  <td>Om Jayaya Namah</td>
                  <td>Victorious</td>
                </tr>
                <tr>
                  <td>979</td>
                  <td>Ajayapariwara</td>
                  <td>Om Ajayapariwaraya Namah</td>
                  <td>Surrounded by the invincible</td>
                </tr>
                <tr>
                  <td>980</td>
                  <td>Sahasravadana</td>
                  <td>Om Sahasravadanaya Namah</td>
                  <td>Thousand-faced</td>
                </tr>
                <tr>
                  <td>981</td>
                  <td>Kapaye</td>
                  <td>Om Kapaye Namah</td>
                  <td>Lord of monkeys</td>
                </tr>
                <tr>
                  <td>982</td>
                  <td>Shakinidakiniyaksharakshobhutaprabhanjakaya</td>
                  <td>Om Shakinidakiniyaksharakshobhutaprabhanjakaya Namah</td>
                  <td>Destroyer of evil spirits and beings</td>
                </tr>
                <tr>
                  <td>983</td>
                  <td>Sadyojata</td>
                  <td>Om Sadyojataya Namah</td>
                  <td>Born instantly</td>
                </tr>
                <tr>
                  <td>984</td>
                  <td>Kamagata</td>
                  <td>Om Kamagataye Namah</td>
                  <td>Focused on desires</td>
                </tr>
                <tr>
                  <td>985</td>
                  <td>Jnanamurti</td>
                  <td>Om Jnanamurtaye Namah</td>
                  <td>Embodiment of knowledge</td>
                </tr>
                <tr>
                  <td>986</td>
                  <td>Yashaskara</td>
                  <td>Om Yashaskaraya Namah</td>
                  <td>Bestower of fame</td>
                </tr>
                <tr>
                  <td>987</td>
                  <td>Shambhutejas</td>
                  <td>Om Shambhutejase Namah</td>
                  <td>Radiance of Lord Shambhu (Shiva)</td>
                </tr>
                <tr>
                  <td>988</td>
                  <td>Sarvabhauma</td>
                  <td>Om Sarvabhaumaya Namah</td>
                  <td>Lord of all</td>
                </tr>
                <tr>
                  <td>989</td>
                  <td>Vishnubhakta</td>
                  <td>Om Vishnubhaktaya Namah</td>
                  <td>Devotee of Lord Vishnu</td>
                </tr>
                <tr>
                  <td>990</td>
                  <td>Plavangama</td>
                  <td>Om Plavangamaya Namah</td>
                  <td>One who leaps</td>
                </tr>
                <tr>
                  <td>991</td>
                  <td>Chaturnavatimantrajna</td>
                  <td>Om Chaturnavatimantrajnaya Namah</td>
                  <td>Knower of ninety-four mantras</td>
                </tr>
                <tr>
                  <td>992</td>
                  <td>Paulastyabaladarpaghna</td>
                  <td>Om Paulastyabaladarpaghne Namah</td>
                  <td>Destroyer of Ravana’s pride</td>
                </tr>
                <tr>
                  <td>993</td>
                  <td>Sarvalakshmiprada</td>
                  <td>Om Sarvalakshmipradaya Namah</td>
                  <td>Giver of all prosperity</td>
                </tr>
                <tr>
                  <td>994</td>
                  <td>Shrimate</td>
                  <td>Om Shrimate Namah</td>
                  <td>Possessor of splendor</td>
                </tr>
                <tr>
                  <td>995</td>
                  <td>Angadapriya</td>
                  <td>Om Angadapriyaya Namah</td>
                  <td>Beloved of Angada</td>
                </tr>
                <tr>
                  <td>996</td>
                  <td>Idita</td>
                  <td>Om Iditaya Namah</td>
                  <td>Praised by all</td>
                </tr>
                <tr>
                  <td>997</td>
                  <td>Smritibija</td>
                  <td>Om Smritibijaya Namah</td>
                  <td>Seed of memory</td>
                </tr>
                <tr>
                  <td>998</td>
                  <td>Sureshana</td>
                  <td>Om Sureshanaya Namah</td>
                  <td>Lord of the gods</td>
                </tr>
                <tr>
                  <td>999</td>
                  <td>Sansarabhayanashana</td>
                  <td>Om Sansarabhayanashanaya Namah</td>
                  <td>Remover of worldly fears</td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>Uttama</td>
                  <td>Om Uttamaya Namah</td>
                  <td>The best</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Significance of Lord Hanuman Sahasranama Names</h3>
          <p>
            Also known as ‘’<b>Anjaneya Sahasranama</b>’’, Hanuman Sahasranama
            was first recited by Maharishi Valmiki. It is a powerful prayer that
            talks about the infinite powers of Lord Hanuman. Chanting these 1000
            names is said to awaken the blessings of Lord Hanuman.
          </p>
          <p>
            Once his divine powers and qualities are invoked, devotees get
            protection from negative energies as well as from the ill effects of
            planets Mars, Saturn, Ketu and Rahu. Lord Hanuman was a devoted
            disciple of Lord Rama. If you chant Hanuman ji all name with the
            same devotion, Lord Hanuman will bless you with prosperity, fortune,
            good luck and courage.
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
export default Hanuman1000;

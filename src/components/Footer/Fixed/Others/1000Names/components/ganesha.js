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
    question: "What is the name of Ganesha in Kalyug?",
    answer:
      "Lord Ganesha is known by various names like Ganapati, Gajanan and more. However, in the Kali Yuga, he is called the Dhumraketu (Dhūmraketu).",
  },
  {
    question: "What name di Parvati gave toGanesha?",
    answer:
      "Goddess Parvati named him Ganapati and Vinayaka. Ganapati means the conductor of celestial armies, and Vinayaka means the lord of all beings.",
  },
  {
    question: "What are the benefits of chanting 1000 names of Ganesha?",
    answer:
      "Chanting 1000 names od Lord Ganesha can help a person gain peace and calm in their lives. It is also associated with removing struggles of the devotee and filling their life with luck, wealth, and fortune.",
  },
  {
    question: "What are the important 12 names of Ganesh ji?",
    answer:
      "The 12 names of Lord Ganesha are Sumukh, Ekdanta, Kapila, Gajakarnaka, Lambodar, Vikata, Vighnaraja, Dhumravarna, Balchandra, Vinayaka, Ganadhipa, and Gajanana.",
  },
  {
    question: "Which direction is good for chanting 1000 names of Ganesha?",
    answer:
      "The East direction is considered to be suitable for individuals who want to chant the 1000 names of Lord Ganesha.",
  },
  {
    question: "What is the best time to chant 1000 names of Ganesha?",
    answer:
      "The best time to chant Lord Ganesha 1000 names is during the Brahma muhurta or early morning. However, you can chant the names anytime.",
  },
];

const Ganesha1000 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout
      title="1000 Name of Goddess Durga - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">1000 Names Of Lord Ganesha</h1>
          <h2>Knowing The Ganesh Sahastra Namavali!</h2>
          <h3>About The 1000 Names Of Lord Ganesha</h3>
          <p>
            Did you know there are 1000 names for Lord Ganesha? Chanting the
            1000 Lord Ganesha names is said to benefit people by bringing
            prosperity, wealth, love, and luck into their lives. Read more to
            know more.
          </p>
          <h3>The 1000 Ganpati Name List</h3>
          <p>
            Mentioned below are the 1000 names of lord ganesha. Chant these
            names every day to fill your life with divine blessings. These 1000
            names of ganesha with meaning are as follows:
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
                  <th>1000 Name of Ganesha</th>
                  <th>Mantra</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Gajanana</td>
                  <td>Om Gajananaya Namah</td>
                  <td>Elephant-Faced Lord</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Vighneshwara</td>
                  <td>Om Vighneshwaraya Namah</td>
                  <td>Lord of Obstacles</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ekadanta</td>
                  <td>Om Ekadantaya Namah</td>
                  <td>One-Tusked Lord</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Lambodara</td>
                  <td>Om Lambodaraya Namah</td>
                  <td>Large-Bellied Lord</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Vakratunda</td>
                  <td>Om Vakratundaya Namah</td>
                  <td>Curved Trunk Lord</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Dhoomravarna</td>
                  <td>Om Dhoomravarnaya Namah</td>
                  <td>Smoke-Colored Lord</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Ganapati</td>
                  <td>Om Ganapataye Namah</td>
                  <td>Leader of Ganas (Divine Hosts)</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Siddhivinayaka</td>
                  <td>Om Siddhivinayakaya Namah</td>
                  <td>Bestower of Success</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Heramba</td>
                  <td>Om Herambaya Namah</td>
                  <td>Protector of the Weak</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Vinayaka</td>
                  <td>Om Vinayakaya Namah</td>
                  <td>Supreme Leader</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Sumukha</td>
                  <td>Om Sumukhaya Namah</td>
                  <td>Beautiful-Faced Lord</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Krishnapingaksha</td>
                  <td>Om Krishnapingakshaya Namah</td>
                  <td>Black and Brown-Eyed Lord</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Kapila</td>
                  <td>Om Kapilaya Namah</td>
                  <td>Lord of Tawny Complexion</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Chaturbhuja</td>
                  <td>Om Chaturbhujaya Namah</td>
                  <td>Four-Armed Lord</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Shubhankar</td>
                  <td>Om Shubhankaraya Namah</td>
                  <td>Bestower of Auspiciousness</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Avaneesha</td>
                  <td>Om Avaneeshaya Namah</td>
                  <td>Lord of the Earth</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Nandana</td>
                  <td>Om Nandanaya Namah</td>
                  <td>Son of Lord Shiva</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Surpakarna</td>
                  <td>Om Surpakarnaya Namah</td>
                  <td>Large-Eared Lord</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Bhalachandra</td>
                  <td>Om Bhalachandraya Namah</td>
                  <td>Moon-Crested Lord</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Bhaktavatsala</td>
                  <td>Om Bhaktavatsalaya Namah</td>
                  <td>Lover of Devotees</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Mahaganapati</td>
                  <td>Om Mahaganapataye Namah</td>
                  <td>Supreme Lord of Ganas</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Rudra</td>
                  <td>Om Rudraya Namah</td>
                  <td>Fierce Lord</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Ganadhyaksha</td>
                  <td>Om Ganadhyakshaya Namah</td>
                  <td>Leader of Ganas</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Shrikant</td>
                  <td>Om Shrikantaya Namah</td>
                  <td>Of Divine Beauty</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Gajavakra</td>
                  <td>Om Gajavakrayaya Namah</td>
                  <td>Elephant-Tusked Lord</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Dineshwar</td>
                  <td>Om Dineshwaraya Namah</td>
                  <td>Lord of the Day</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Maheshwara</td>
                  <td>Om Maheshwaraya Namah</td>
                  <td>Supreme Lord</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Kshipra</td>
                  <td>Om Kshipraya Namah</td>
                  <td>Quick-Acting Lord</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Parvatiraja</td>
                  <td>Om Parvatirajaya Namah</td>
                  <td>Son of Parvati</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Bhavyananda</td>
                  <td>Om Bhavyanandaya Namah</td>
                  <td>Giver of Bliss</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Girivaradhara</td>
                  <td>Om Girivaradharaya Namah</td>
                  <td>Holder of the Mountain</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Ganesha</td>
                  <td>Om Ganeshaya Namah</td>
                  <td>Remover of Obstacles</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Vighnaharta</td>
                  <td>Om Vighnahartaya Namah</td>
                  <td>Remover of Obstacles</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Karthikeya</td>
                  <td>Om Karthikeyaya Namah</td>
                  <td>Brother of Kartikeya</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Bhairava</td>
                  <td>Om Bhairavaya Namah</td>
                  <td>Fearsome Protector</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Janardhana</td>
                  <td>Om Janardhanaya Namah</td>
                  <td>Protector of Mankind</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Vishwajeet</td>
                  <td>Om Vishwajeetaya Namah</td>
                  <td>Conqueror of the World</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Jagannatha</td>
                  <td>Om Jagannathaya Namah</td>
                  <td>Lord of the Universe</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Mangala</td>
                  <td>Om Mangalaya Namah</td>
                  <td>Auspicious One</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Sarasvati</td>
                  <td>Om Sarasvatyai Namah</td>
                  <td>Lord of Knowledge</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Parameshwara</td>
                  <td>Om Parameshwaraya Namah</td>
                  <td>Supreme God</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Bhuvaneshwar</td>
                  <td>Om Bhuvaneshwaraya Namah</td>
                  <td>Lord of All Worlds</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Shantidhara</td>
                  <td>Om Shantidharayai Namah</td>
                  <td>Bestower of Peace</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Mahalakshmi</td>
                  <td>Om Mahalakshmyai Namah</td>
                  <td>Giver of Wealth</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Padmapani</td>
                  <td>Om Padmapanaye Namah</td>
                  <td>Holder of the Lotus</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Bhavapriya</td>
                  <td>Om Bhavapriyaya Namah</td>
                  <td>Beloved of the Universe</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Bhavani</td>
                  <td>Om Bhavanaye Namah</td>
                  <td>Consort of Shiva</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Svargapati</td>
                  <td>Om Svargapataye Namah</td>
                  <td>Lord of Heaven</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Rudrasuta</td>
                  <td>Om Rudrasutaya Namah</td>
                  <td>Son of Rudra (Shiva)</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Trishul</td>
                  <td>Om Trishulaya Namah</td>
                  <td>Holder of the Trident</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Raktapushpa</td>
                  <td>Om Raktapushpaya Namah</td>
                  <td>Adorned with Red Flowers</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Mahaakaya</td>
                  <td>Om Mahaakayaya Namah</td>
                  <td>One with a Gigantic Form</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Gajamukha</td>
                  <td>Om Gajamukhaya Namah</td>
                  <td>Elephant-Faced Lord</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Prajapati</td>
                  <td>Om Prajapataye Namah</td>
                  <td>Lord of Creatures</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Ayyappa</td>
                  <td>Om Ayyappaya Namah</td>
                  <td>Lord of Austerity</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Tripurari</td>
                  <td>Om Tripuraraye Namah</td>
                  <td>Slayer of Tripuras</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Dwajadhara</td>
                  <td>Om Dwajadharaya Namah</td>
                  <td>Bearer of the Flag</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Manomay</td>
                  <td>Om Manomayaya Namah</td>
                  <td>Controller of the Mind</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Surendra</td>
                  <td>Om Surendrayai Namah</td>
                  <td>Lord of Gods</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Akhila</td>
                  <td>Om Akhilayai Namah</td>
                  <td>The Whole Universe</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Annamalai</td>
                  <td>Om Annamalayai Namah</td>
                  <td>Lord of the Annamalai Hills</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Vinayagan</td>
                  <td>Om Vinayaganaya Namah</td>
                  <td>Form of Ganesha Worshipped in Tamil Nadu</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Narasimha</td>
                  <td>Om Narasimhaya Namah</td>
                  <td>Half-Lion Half-Man Form of Lord Vishnu</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Chintamani</td>
                  <td>Om Chintamanaye Namah</td>
                  <td>Bestower of Desired Wishes</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Suktimaya</td>
                  <td>Om Suktimayaya Namah</td>
                  <td>Embodiment of Hymns</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Chaitanyadeva</td>
                  <td>Om Chaitanyadevaya Namah</td>
                  <td>Lord of Consciousness</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Mahadeva</td>
                  <td>Om Mahadevaya Namah</td>
                  <td>The Great God</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Adidev</td>
                  <td>Om Adidevaya Namah</td>
                  <td>The Primordial God</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Gurudeva</td>
                  <td>Om Gurudevaya Namah</td>
                  <td>Supreme Teacher</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Omkara</td>
                  <td>Om Omkaraya Namah</td>
                  <td>Embodiment of the Sacred Om</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Gandhakarna</td>
                  <td>Om Gandhakarnaya Namah</td>
                  <td>Lord with Fragrant Ears</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Mahatman</td>
                  <td>Om Mahatmanaya Namah</td>
                  <td>The Great Soul</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Sankata</td>
                  <td>Om Sankataya Namah</td>
                  <td>Remover of Difficulties</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Svarupa</td>
                  <td>Om Svarupaya Namah</td>
                  <td>Of Divine Form</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Bhairavi</td>
                  <td>Om Bhairavyai Namah</td>
                  <td>Fierce and Fearsome</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Prasannavakra</td>
                  <td>Om Prasannavakraya Namah</td>
                  <td>Of a Pleasant Curve</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Shrishtigraha</td>
                  <td>Om Shrishtigrahaya Namah</td>
                  <td>Creator and Sustainer</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Sarvadhara</td>
                  <td>Om Sarvadharaya Namah</td>
                  <td>Supporter of All</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Mangalavara</td>
                  <td>Om Mangalavaraya Namah</td>
                  <td>Presiding Over Tuesday</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Agnidev</td>
                  <td>Om Agnidevaya Namah</td>
                  <td>Lord of Fire</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Kalpavriksha</td>
                  <td>Om Kalpavrikshaya Namah</td>
                  <td>Wish-Fulfilling Tree</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Ashraya</td>
                  <td>Om Ashrayaya Namah</td>
                  <td>The Shelter</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Sudhakar</td>
                  <td>Om Sudhakaraya Namah</td>
                  <td>Bestower of Nectar</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Bhairavishwar</td>
                  <td>Om Bhairavishwaraya Namah</td>
                  <td>Fierce Lord</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Siddhartha</td>
                  <td>Om Siddharthaya Namah</td>
                  <td>Lord of Fulfillment</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Mahaprabhu</td>
                  <td>Om Mahaprabhave Namah</td>
                  <td>Supreme Lord</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Nityananda</td>
                  <td>Om Nityanandaya Namah</td>
                  <td>Eternal Bliss</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Ratnagarbha</td>
                  <td>Om Ratnagarbhaya Namah</td>
                  <td>Jewel-Wombed One</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Bhairavendra</td>
                  <td>Om Bhairavendrayai Namah</td>
                  <td>Lord of Bhairavas</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Pujanapriya</td>
                  <td>Om Pujanapriyaya Namah</td>
                  <td>Lover of Worship</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Aparameshwara</td>
                  <td>Om Aparameshwaraya Namah</td>
                  <td>The Infinite Lord</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Prathamavakra</td>
                  <td>Om Prathamavakraya Namah</td>
                  <td>Of the Foremost Curve</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Omnishwar</td>
                  <td>Om Omnishwaraya Namah</td>
                  <td>Lord of All Universes</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Jayant</td>
                  <td>Om Jayantaya Namah</td>
                  <td>Ever-Victorious</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Mahamaya</td>
                  <td>Om Mahamayayai Namah</td>
                  <td>Of Great Illusion</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Dharmadhara</td>
                  <td>Om Dharmadharaya Namah</td>
                  <td>Upholder of Dharma</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Chidambara</td>
                  <td>Om Chidambaraya Namah</td>
                  <td>The Conscious Sky</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Gurumukh</td>
                  <td>Om Gurumukhaya Namah</td>
                  <td>Teacher’s Mouthpiece</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Shaktigraha</td>
                  <td>Om Shaktigrahaya Namah</td>
                  <td>One who holds or controls energy/power</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Trinayan</td>
                  <td>Om Trinayanaya Namah</td>
                  <td>One with three eyes, symbolizing enlightenment</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Rudrapriya</td>
                  <td>Om Rudrapriyaya Namah</td>
                  <td>One who is beloved of Rudra (Lord Shiva)</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Sridhar</td>
                  <td>Om Sridharaya Namah</td>
                  <td>One who holds the goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Jagadish</td>
                  <td>Om Jagadishaya Namah</td>
                  <td>Lord of the universe</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Vighnakarta</td>
                  <td>Om Vighnakartre Namah</td>
                  <td>The one who removes obstacles</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Vinayakacharya</td>
                  <td>Om Vinayakacharyaya Namah</td>
                  <td>
                    The leader or master of all beings, one who is the lord of
                    wisdom
                  </td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Prashant</td>
                  <td>Om Prashantaya Namah</td>
                  <td>The calm or serene one</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Shashvat</td>
                  <td>Om Shashvataya Namah</td>
                  <td>The eternal one, one who is constant</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Bhaktishvara</td>
                  <td>Om Bhaktishvaraya Namah</td>
                  <td>The lord of all devotees</td>
                </tr>
                <tr>
                  <td>109</td>
                  <td>Amogh</td>
                  <td>Om Amoghaya Namah</td>
                  <td>
                    The one who is infallible and whose blessings are certain
                  </td>
                </tr>
                <tr>
                  <td>110</td>
                  <td>Shubham</td>
                  <td>Om Shubhamurti Namah</td>
                  <td>The auspicious one</td>
                </tr>
                <tr>
                  <td>111</td>
                  <td>Mahamati</td>
                  <td>Om Mahamataye Namah</td>
                  <td>One with great intelligence</td>
                </tr>
                <tr>
                  <td>112</td>
                  <td>Suryaputra</td>
                  <td>Om Suryaputraya Namah</td>
                  <td>
                    The son of the Sun (symbolizing light, energy, and vitality)
                  </td>
                </tr>
                <tr>
                  <td>113</td>
                  <td>Kripadhara</td>
                  <td>Om Kripadharayai Namah</td>
                  <td>One who is the holder of grace</td>
                </tr>
                <tr>
                  <td>114</td>
                  <td>Kamadhenu</td>
                  <td>Om Kamadhenuvahana Namah</td>
                  <td>The divine cow who fulfills all desires</td>
                </tr>
                <tr>
                  <td>115</td>
                  <td>Narayan</td>
                  <td>Om Narayanaya Namah</td>
                  <td>The supreme deity, the protector and sustainer</td>
                </tr>
                <tr>
                  <td>116</td>
                  <td>Gajabrahma</td>
                  <td>Om Gajabrahmane Namah</td>
                  <td>
                    The elephant-headed Brahma, one who creates auspiciousness
                  </td>
                </tr>
                <tr>
                  <td>117</td>
                  <td>Pranav</td>
                  <td>Om Pranavaya Namah</td>
                  <td>
                    The sacred syllable 'Om,' representing the supreme reality
                  </td>
                </tr>
                <tr>
                  <td>118</td>
                  <td>Laxmiwahana</td>
                  <td>Om Laxmiwahanaya Namah</td>
                  <td>The vehicle of Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>119</td>
                  <td>Mahakaya</td>
                  <td>Om Mahakaya Namah</td>
                  <td>The one with a colossal form</td>
                </tr>
                <tr>
                  <td>120</td>
                  <td>Vidhyadhar</td>
                  <td>Om Vidhyadharayai Namah</td>
                  <td>One who holds the knowledge</td>
                </tr>
                <tr>
                  <td>121</td>
                  <td>Rajagopala</td>
                  <td>Om Rajagopalaya Namah</td>
                  <td>The king of the world</td>
                </tr>
                <tr>
                  <td>122</td>
                  <td>Nityashree</td>
                  <td>Om Nityashreya Namah</td>
                  <td>One who is ever prosperous, eternal beauty</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Vyaghra</td>
                  <td>Om Vyaghravahana Namah</td>
                  <td>The tiger, symbolizing strength and power</td>
                </tr>
                <tr>
                  <td>124</td>
                  <td>Vishwarupa</td>
                  <td>Om Vishwarupaya Namah</td>
                  <td>The universal form</td>
                </tr>
                <tr>
                  <td>125</td>
                  <td>Mahasiddhi</td>
                  <td>Om Mahasiddhaye Namah</td>
                  <td>One who has attained great spiritual accomplishment</td>
                </tr>
                <tr>
                  <td>126</td>
                  <td>Chaturvarga</td>
                  <td>Om Chaturvargapradaya Namah</td>
                  <td>
                    The one who leads towards the four pursuits of life: Dharma,
                    Artha, Kama, and Moksha
                  </td>
                </tr>
                <tr>
                  <td>127</td>
                  <td>Kalyanakari</td>
                  <td>Om Kalyanakarye Namah</td>
                  <td>One who brings welfare and auspiciousness</td>
                </tr>
                <tr>
                  <td>128</td>
                  <td>Vishnupriya</td>
                  <td>Om Vishnupriyayai Namah</td>
                  <td>
                    The beloved of Vishnu, symbolizing the divine relationship
                    with the supreme deity
                  </td>
                </tr>
                <tr>
                  <td>129</td>
                  <td>Jaya Ganapati</td>
                  <td>Om Jaya Ganapataye Namah</td>
                  <td>
                    The victorious Ganesha who is the embodiment of victory
                  </td>
                </tr>
                <tr>
                  <td>130</td>
                  <td>Bhavapujita</td>
                  <td>Om Bhavapujitaya Namah</td>
                  <td>The one who is worshipped by the divine beings</td>
                </tr>
                <tr>
                  <td>131</td>
                  <td>Yajnabhukta</td>
                  <td>Om Yajnabhuktaya Namah</td>
                  <td>The one who partakes in the offerings of the Yajnas</td>
                </tr>
                <tr>
                  <td>132</td>
                  <td>Nabhah</td>
                  <td>Om Nabhasaya Namah</td>
                  <td>The one who resides in the sky or heavens</td>
                </tr>
                <tr>
                  <td>133</td>
                  <td>Manishvar</td>
                  <td>Om Manishvaraya Namah</td>
                  <td>The lord of the great sages and wise people</td>
                </tr>
                <tr>
                  <td>134</td>
                  <td>Ekadantadhara</td>
                  <td>Om Ekadantadhara Namah</td>
                  <td>
                    One who holds the single tusk, symbolizing simplicity and
                    strength
                  </td>
                </tr>
                <tr>
                  <td>135</td>
                  <td>Kaladhara</td>
                  <td>Om Kaladharayai Namah</td>
                  <td>The one who carries the time and its endless flow</td>
                </tr>
                <tr>
                  <td>136</td>
                  <td>Parvati Suta</td>
                  <td>Om Parvati Sutaya Namah</td>
                  <td>The son of Goddess Parvati, showing his divine birth</td>
                </tr>
                <tr>
                  <td>137</td>
                  <td>Dakshina</td>
                  <td>Om Dakshinaya Namah</td>
                  <td>
                    The one who is auspicious and whose presence brings
                    prosperity
                  </td>
                </tr>
                <tr>
                  <td>138</td>
                  <td>Sadhguru</td>
                  <td>Om Sadhgurave Namah</td>
                  <td>
                    The supreme teacher who guides souls toward enlightenment
                  </td>
                </tr>
                <tr>
                  <td>139</td>
                  <td>Gajavandana</td>
                  <td>Om Gajavandanaya Namah</td>
                  <td>The one who is saluted by the elephant-headed beings</td>
                </tr>
                <tr>
                  <td>140</td>
                  <td>Vaktavya</td>
                  <td>Om Vaktavya Namah</td>
                  <td>The one who speaks or the lord of divine speech</td>
                </tr>
                <tr>
                  <td>141</td>
                  <td>Ganeshwar</td>
                  <td>Om Ganeshwaraya Namah</td>
                  <td>The Lord of all Ganesha devotees, the supreme deity</td>
                </tr>
                <tr>
                  <td>142</td>
                  <td>Rameshwar</td>
                  <td>Om Rameshwaraya Namah</td>
                  <td>The one who is the lord of all</td>
                </tr>
                <tr>
                  <td>143</td>
                  <td>Sankarshana</td>
                  <td>Om Sankarshanaya Namah</td>
                  <td>
                    The one who is ever attractive and pulls all beings to
                    himself
                  </td>
                </tr>
                <tr>
                  <td>144</td>
                  <td>Pratiksha</td>
                  <td>Om Pratikshaya Namah</td>
                  <td>The one who grants all wishes and fulfills desires</td>
                </tr>
                <tr>
                  <td>145</td>
                  <td>Guhyaksha</td>
                  <td>Om Guhyakshayai Namah</td>
                  <td>The one who is the Lord of the secret or the hidden</td>
                </tr>
                <tr>
                  <td>146</td>
                  <td>Rudraja</td>
                  <td>Om Rudrajaya Namah</td>
                  <td>
                    The son of Rudra, signifying his divine origin from Lord
                    Shiva
                  </td>
                </tr>
                <tr>
                  <td>147</td>
                  <td>Adityavardhan</td>
                  <td>Om Adityavardhanaya Namah</td>
                  <td>One who increases or nourishes the sun</td>
                </tr>
                <tr>
                  <td>148</td>
                  <td>Svamika</td>
                  <td>Om Svamikaya Namah</td>
                  <td>The one who is the master of all</td>
                </tr>
                <tr>
                  <td>149</td>
                  <td>Akhandananda</td>
                  <td>Om Akhandanandayai Namah</td>
                  <td>The one who is an eternal source of bliss</td>
                </tr>
                <tr>
                  <td>150</td>
                  <td>Dharmavardhana</td>
                  <td>Om Dharmavardhanaya Namah</td>
                  <td>One who enhances the principles of righteousness</td>
                </tr>
                <tr>
                  <td>151</td>
                  <td>Sankarsha</td>
                  <td>Om Sankarshanaya Namah</td>
                  <td>One who attracts or pulls</td>
                </tr>
                <tr>
                  <td>152</td>
                  <td>Laddheshwara</td>
                  <td>Om Laddheshwaraya Namah</td>
                  <td>The one who grants all desires and wishes</td>
                </tr>
                <tr>
                  <td>153</td>
                  <td>Lokanatha</td>
                  <td>Om Lokanathaya Namah</td>
                  <td>
                    The Lord of the world, signifying the ruler of all existence
                  </td>
                </tr>
                <tr>
                  <td>154</td>
                  <td>Mahabala</td>
                  <td>Om Mahabala Namah</td>
                  <td>One with immense strength or power</td>
                </tr>
                <tr>
                  <td>155</td>
                  <td>Pushpavati</td>
                  <td>Om Pushpavatyai Namah</td>
                  <td>One who is adorned with flowers</td>
                </tr>
                <tr>
                  <td>156</td>
                  <td>Chaturatma</td>
                  <td>Om Chaturatmaya Namah</td>
                  <td>The one who has four supreme qualities</td>
                </tr>
                <tr>
                  <td>157</td>
                  <td>Adinatha</td>
                  <td>Om Adinathaya Namah</td>
                  <td>The primal lord, the source of all creation</td>
                </tr>
                <tr>
                  <td>158</td>
                  <td>Shaktimaya</td>
                  <td>Om Shaktimaya Namah</td>
                  <td>One who embodies all the divine energy (Shakti)</td>
                </tr>
                <tr>
                  <td>159</td>
                  <td>Vishvakarman</td>
                  <td>Om Vishvakarmane Namah</td>
                  <td>The universal architect, the creator of the universe</td>
                </tr>
                <tr>
                  <td>160</td>
                  <td>Vishnuprabha</td>
                  <td>Om Vishnuprabhaya Namah</td>
                  <td>The divine light or radiance of Vishnu</td>
                </tr>
                <tr>
                  <td>161</td>
                  <td>Raghunatha</td>
                  <td>Om Raghunathaya Namah</td>
                  <td>Lord of the Raghu dynasty (a name for Lord Rama)</td>
                </tr>
                <tr>
                  <td>162</td>
                  <td>Keshava</td>
                  <td>Om Keshavaya Namah</td>
                  <td>
                    The one with beautiful hair, another name for Lord Vishnu
                  </td>
                </tr>
                <tr>
                  <td>163</td>
                  <td>Ganapriya</td>
                  <td>Om Ganapriyaya Namah</td>
                  <td>The one who is beloved by all</td>
                </tr>
                <tr>
                  <td>164</td>
                  <td>Jagannath</td>
                  <td>Om Jagannathaya Namah</td>
                  <td>The Lord of the universe</td>
                </tr>
                <tr>
                  <td>165</td>
                  <td>Vyavasayi</td>
                  <td>Om Vyavasayine Namah</td>
                  <td>The one who is resolute, focused, and determined</td>
                </tr>
                <tr>
                  <td>166</td>
                  <td>Kavi</td>
                  <td>Om Kavaye Namah</td>
                  <td>One who has divine wisdom and knowledge</td>
                </tr>
                <tr>
                  <td>167</td>
                  <td>Chandresh</td>
                  <td>Om Chandreshaya Namah</td>
                  <td>The one who possesses the moon-like qualities</td>
                </tr>
                <tr>
                  <td>168</td>
                  <td>Mooladhara</td>
                  <td>Om Mooladharayai Namah</td>
                  <td>
                    The root chakra, the foundation of energy in the human body
                  </td>
                </tr>
                <tr>
                  <td>169</td>
                  <td>Padmanabha</td>
                  <td>Om Padmanabhaya Namah</td>
                  <td>One who has a lotus-shaped navel</td>
                </tr>
                <tr>
                  <td>170</td>
                  <td>Bhavavatara</td>
                  <td>Om Bhavavataraya Namah</td>
                  <td>The one who is the origin of existence</td>
                </tr>
                <tr>
                  <td>171</td>
                  <td>Satvavahan</td>
                  <td>Om Satvavahanaya Namah</td>
                  <td>
                    The one who is the carrier of purity and goodness (Satva)
                  </td>
                </tr>
                <tr>
                  <td>172</td>
                  <td>Madhusudana</td>
                  <td>Om Madhusudanaya Namah</td>
                  <td>The killer of the demon Madhu</td>
                </tr>
                <tr>
                  <td>173</td>
                  <td>Anantasaya</td>
                  <td>Om Anantasayaya Namah</td>
                  <td>The one who lies on the infinite serpent</td>
                </tr>
                <tr>
                  <td>174</td>
                  <td>Shaktivardhan</td>
                  <td>Om Shaktivardhanaya Namah</td>
                  <td>The one who increases and nourishes the divine energy</td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>Vachaspati</td>
                  <td>Om Vachaspate Namah</td>
                  <td>The lord of speech, the god of words</td>
                </tr>
                <tr>
                  <td>176</td>
                  <td>Tanmay</td>
                  <td>Om Tanmayaya Namah</td>
                  <td>The one who is absorbed or immersed in divine bliss</td>
                </tr>
                <tr>
                  <td>177</td>
                  <td>Mayuresh</td>
                  <td>Om Mayureshaya Namah</td>
                  <td>Symbolizing grace and beauty</td>
                </tr>
                <tr>
                  <td>178</td>
                  <td>Swayambhu</td>
                  <td>Om Swayambho Namah</td>
                  <td>
                    The one who is not created by anyone but exists by itself
                  </td>
                </tr>
                <tr>
                  <td>179</td>
                  <td>Tribhuvaneshwar</td>
                  <td>Om Tribhuvaneshwaraya Namah</td>
                  <td>
                    The Lord of the three worlds (earth, heaven, and hell)
                  </td>
                </tr>
                <tr>
                  <td>180</td>
                  <td>Adinath</td>
                  <td>Om Adinathaya Namah</td>
                  <td>The primal Lord, the original source of creation</td>
                </tr>
                <tr>
                  <td>181</td>
                  <td>Shrivatsav</td>
                  <td>Om Shrivatsavaya Namah</td>
                  <td>The one who has the divine mark on his chest</td>
                </tr>
                <tr>
                  <td>182</td>
                  <td>Shubhamukhi</td>
                  <td>Om Shubhamukhaye Namah</td>
                  <td>
                    The one with an auspicious face, signifying good fortune
                  </td>
                </tr>
                <tr>
                  <td>183</td>
                  <td>Rishabh</td>
                  <td>Om Rishabhaya Namah</td>
                  <td>The bull, symbolizing strength and stability</td>
                </tr>
                <tr>
                  <td>184</td>
                  <td>Chintan</td>
                  <td>Om Chintanaya Namah</td>
                  <td>
                    The one who is in constant meditation or contemplation
                  </td>
                </tr>
                <tr>
                  <td>185</td>
                  <td>Madhuravani</td>
                  <td>Om Madhuravani Namah</td>
                  <td>The one who has a sweet and melodious voice</td>
                </tr>
                <tr>
                  <td>186</td>
                  <td>Atmalinga</td>
                  <td>Om Atmalingaya Namah</td>
                  <td>
                    The sacred linga of the soul, representing divine
                    consciousness
                  </td>
                </tr>
                <tr>
                  <td>187</td>
                  <td>Kamalnayan</td>
                  <td>Om Kamalnayanaya Namah</td>
                  <td>
                    One who has lotus-like eyes, symbolizing purity and beauty
                  </td>
                </tr>
                <tr>
                  <td>188</td>
                  <td>Satyavishnu</td>
                  <td>Om Satyavishnave Namah</td>
                  <td>The truth incarnate, symbolizing eternal truth</td>
                </tr>
                <tr>
                  <td>189</td>
                  <td>Mahadhipa</td>
                  <td>Om Mahadhipaya Namah</td>
                  <td>The great lord, the supreme ruler of the universe</td>
                </tr>
                <tr>
                  <td>190</td>
                  <td>Bhanumati</td>
                  <td>Om Bhanumati Namah</td>
                  <td>One who is radiant like the sun</td>
                </tr>
                <tr>
                  <td>191</td>
                  <td>Mahapurusha</td>
                  <td>Om Mahapurushaya Namah</td>
                  <td>The great person, symbolizing the divine soul</td>
                </tr>
                <tr>
                  <td>192</td>
                  <td>Satyapriya</td>
                  <td>Om Satyapriye Namah</td>
                  <td>The one who loves truth</td>
                </tr>
                <tr>
                  <td>193</td>
                  <td>Rudradhar</td>
                  <td>Om Rudradharaya Namah</td>
                  <td>
                    The one who holds the Rudra, symbolizing a connection with
                    Shiva
                  </td>
                </tr>
                <tr>
                  <td>194</td>
                  <td>Purushottama</td>
                  <td>Om Purushottamaya Namah</td>
                  <td>The supreme person, the most exalted being</td>
                </tr>
                <tr>
                  <td>195</td>
                  <td>Shubhaprada</td>
                  <td>Om Shubhapradaya Namah</td>
                  <td>The one who grants auspiciousness</td>
                </tr>
                <tr>
                  <td>196</td>
                  <td>Vishwapati</td>
                  <td>Om Vishwapati Namah</td>
                  <td>The lord of the universe, the ruler of all creation</td>
                </tr>
                <tr>
                  <td>197</td>
                  <td>Shubhayogin</td>
                  <td>Om Shubhayogine Namah</td>
                  <td>
                    The one who brings auspicious union or connection,
                    symbolizing harmony
                  </td>
                </tr>
                <tr>
                  <td>198</td>
                  <td>Bhadrakali</td>
                  <td>Om Bhadrakalaye Namah</td>
                  <td>
                    The one who is auspicious and fierce, a powerful form of the
                    Goddess Kali
                  </td>
                </tr>
                <tr>
                  <td>199</td>
                  <td>Siddhivinayak</td>
                  <td>Om Siddhivinayakaya Namah</td>
                  <td>
                    The one who grants success, and a remover of obstacles
                  </td>
                </tr>
                <tr>
                  <td>200</td>
                  <td>Durgapriya</td>
                  <td>Om Durgapriye Namah</td>
                  <td>The beloved of Goddess Durga</td>
                </tr>
                <tr>
                  <td>201</td>
                  <td>Subrahmanya</td>
                  <td>Om Subrahmanyaya Namah</td>
                  <td>The son of Lord Shiva and Parvati</td>
                </tr>
                <tr>
                  <td>202</td>
                  <td>Mahavir</td>
                  <td>Om Mahavire Namah</td>
                  <td>The great hero, symbolizing power and bravery</td>
                </tr>
                <tr>
                  <td>203</td>
                  <td>Achyut</td>
                  <td>Om Achyutaya Namah</td>
                  <td>The infallible one</td>
                </tr>
                <tr>
                  <td>204</td>
                  <td>Ashta Vinayaka</td>
                  <td>Om Ashtavinayakaya Namah</td>
                  <td>
                    The eight forms of Lord Ganesha, worshiped at eight temples
                  </td>
                </tr>
                <tr>
                  <td>205</td>
                  <td>Ganeshanath</td>
                  <td>Om Ganeshanathaya Namah</td>
                  <td>
                    The lord of Ganesha, referring to Lord Ganesha as the leader
                    of all deities
                  </td>
                </tr>
                <tr>
                  <td>206</td>
                  <td>Shailendra</td>
                  <td>Om Shailendraya Namah</td>
                  <td>
                    The lord of the mountain, symbolizing connection with Lord
                    Shiva's mountain abode
                  </td>
                </tr>
                <tr>
                  <td>207</td>
                  <td>Padmanabhan</td>
                  <td>Om Padmanabhaya Namah</td>
                  <td>The one with a lotus-shaped navel</td>
                </tr>
                <tr>
                  <td>208</td>
                  <td>Balachandra</td>
                  <td>Om Balachandraya Namah</td>
                  <td>
                    The young moon, signifying the gentle aspect of Lord Ganesha
                  </td>
                </tr>
                <tr>
                  <td>209</td>
                  <td>Gajavaktra</td>
                  <td>Om Gajavaktraya Namah</td>
                  <td>The one with the face of an elephant</td>
                </tr>
                <tr>
                  <td>210</td>
                  <td>Ganeshan</td>
                  <td>Om Ganeshanaya Namah</td>
                  <td>The one who is the lord</td>
                </tr>
                <tr>
                  <td>211</td>
                  <td>Bhava</td>
                  <td>Om Bhavaya Namah</td>
                  <td>The one who is the source of all emotions</td>
                </tr>
                <tr>
                  <td>212</td>
                  <td>Shubhaveda</td>
                  <td>Om Shubhaveda Namah</td>
                  <td>The one who brings auspicious knowledge</td>
                </tr>
                <tr>
                  <td>213</td>
                  <td>Anandamaya</td>
                  <td>Om Anandamaye Namah</td>
                  <td>The one who is the embodiment of bliss</td>
                </tr>
                <tr>
                  <td>214</td>
                  <td>Vinayakendra</td>
                  <td>Om Vinayakendra Namah</td>
                  <td>The center or source of all Vinayaka</td>
                </tr>
                <tr>
                  <td>215</td>
                  <td>Brahmavidya</td>
                  <td>Om Brahmavidhaya Namah</td>
                  <td>The knowledge of the absolute</td>
                </tr>
                <tr>
                  <td>216</td>
                  <td>Krishnan</td>
                  <td>Om Krishnaya Namah</td>
                  <td>
                    One who is Krishna, referring to Lord Krishna's presence in
                    Ganesha
                  </td>
                </tr>
                <tr>
                  <td>217</td>
                  <td>Gajasyama</td>
                  <td>Om Gajasyamaya Namah</td>
                  <td>The one with the mighty elephant-like features</td>
                </tr>
                <tr>
                  <td>218</td>
                  <td>Vikram</td>
                  <td>Om Vikramaya Namah</td>
                  <td>The one who is mighty and valiant</td>
                </tr>
                <tr>
                  <td>219</td>
                  <td>Prabhakar</td>
                  <td>Om Prabhakaraya Namah</td>
                  <td>The one who is radiant or shining like the sun</td>
                </tr>
                <tr>
                  <td>220</td>
                  <td>Gajavandana</td>
                  <td>Om Gajavandana Namah</td>
                  <td>The one who is saluted or praised by elephants</td>
                </tr>
                <tr>
                  <td>221</td>
                  <td>Kripa</td>
                  <td>Om Kripaya Namah</td>
                  <td>The one who is full of grace, mercy, and kindness</td>
                </tr>
                <tr>
                  <td>222</td>
                  <td>Kapila</td>
                  <td>Om Kapilaya Namah</td>
                  <td>The sage with deep wisdom and knowledge</td>
                </tr>
                <tr>
                  <td>223</td>
                  <td>Samarth</td>
                  <td>Om Samarthaya Namah</td>
                  <td>The one who is capable or powerful</td>
                </tr>
                <tr>
                  <td>224</td>
                  <td>Mahakumbha</td>
                  <td>Om Mahakumbhaya Namah</td>
                  <td>
                    The great pot, symbolizing the container of all spiritual
                    knowledge
                  </td>
                </tr>
                <tr>
                  <td>225</td>
                  <td>Mantraraja</td>
                  <td>Om Mantrarajaya Namah</td>
                  <td>The king of all mantras</td>
                </tr>
                <tr>
                  <td>226</td>
                  <td>Ganapatiya</td>
                  <td>Om Ganapatiya Namah</td>
                  <td>The one who is the essence of all forms</td>
                </tr>
                <tr>
                  <td>227</td>
                  <td>Bhavana</td>
                  <td>Om Bhavanaya Namah</td>
                  <td>The one who gives rise to consciousness of the mind</td>
                </tr>
                <tr>
                  <td>228</td>
                  <td>Anantavakra</td>
                  <td>Om Anantavakra Namah</td>
                  <td>The one who has twisted trunk</td>
                </tr>
                <tr>
                  <td>229</td>
                  <td>Kirtivardhana</td>
                  <td>Om Kirtivardhanaya Namah</td>
                  <td>The one who enhances glory, fame, and reputation</td>
                </tr>
                <tr>
                  <td>230</td>
                  <td>Jagadguru</td>
                  <td>Om Jagadgurave Namah</td>
                  <td>The teacher of the world</td>
                </tr>
                <tr>
                  <td>231</td>
                  <td>Mangalakari</td>
                  <td>Om Mangalakarine Namah</td>
                  <td>The one who brings auspiciousness</td>
                </tr>
                <tr>
                  <td>232</td>
                  <td>Siddheshwar</td>
                  <td>Om Siddheshwaraya Namah</td>
                  <td>The lord of the accomplished ones</td>
                </tr>
                <tr>
                  <td>233</td>
                  <td>Divyavakra</td>
                  <td>Om Divyavakrayai Namah</td>
                  <td>The one with a divine trunk</td>
                </tr>
                <tr>
                  <td>234</td>
                  <td>Ganaprasad</td>
                  <td>Om Ganaprasadaya Namah</td>
                  <td>The one who blesses with success and blessings</td>
                </tr>
                <tr>
                  <td>235</td>
                  <td>Gajapratiksha</td>
                  <td>Om Gajapratikshaya Namah</td>
                  <td>
                    The one who waits for the elephant, symbolizing patience
                  </td>
                </tr>
                <tr>
                  <td>236</td>
                  <td>Kalpavriksha</td>
                  <td>Om Kalpavrikshaya Namah</td>
                  <td>
                    The wish-fulfilling tree, symbolizing his ability to fulfill
                    all desires
                  </td>
                </tr>
                <tr>
                  <td>237</td>
                  <td>Jagadambheshwar</td>
                  <td>Om Jagadambheshwaraya Namah</td>
                  <td>The lord of the universe</td>
                </tr>
                <tr>
                  <td>238</td>
                  <td>Mahadevan</td>
                  <td>Om Mahadevaya Namah</td>
                  <td>The great Lord</td>
                </tr>
                <tr>
                  <td>239</td>
                  <td>Saptarshi</td>
                  <td>Om Saptarshaye Namah</td>
                  <td>The seven great sages</td>
                </tr>
                <tr>
                  <td>240</td>
                  <td>Pranavadhara</td>
                  <td>Om Pranavadhara Namah</td>
                  <td>
                    The one who is the support of the sacred syllable 'Om'
                  </td>
                </tr>
                <tr>
                  <td>241</td>
                  <td>Mahashakti</td>
                  <td>Om Mahashaktaye Namah</td>
                  <td>The supreme power or divine energy</td>
                </tr>
                <tr>
                  <td>242</td>
                  <td>Bhavabhushan</td>
                  <td>Om Bhavabhushanaya Namah</td>
                  <td>The ornament of the world</td>
                </tr>
                <tr>
                  <td>243</td>
                  <td>Adhyatmika</td>
                  <td>Om Adhyatmikaya Namah</td>
                  <td>The spiritual, relating to the soul or inner being</td>
                </tr>
                <tr>
                  <td>244</td>
                  <td>Shubharambha</td>
                  <td>Om Shubharambhaya Namah</td>
                  <td>The auspicious beginning, referring to good starts</td>
                </tr>
                <tr>
                  <td>245</td>
                  <td>Lakshminarayana</td>
                  <td>Om Lakshminarayanaya Namah</td>
                  <td>Symbolizing prosperity and wealth</td>
                </tr>
                <tr>
                  <td>246</td>
                  <td>Gajavishnu</td>
                  <td>Om Gajavishnave Namah</td>
                  <td>
                    The elephant-faced Vishnu, representing strength and
                    divinity
                  </td>
                </tr>
                <tr>
                  <td>247</td>
                  <td>Naman</td>
                  <td>Om Namanaya Namah</td>
                  <td>Salutation or obeisance</td>
                </tr>
                <tr>
                  <td>248</td>
                  <td>Shreevinayaka</td>
                  <td>Om Shreevinayakaya Namah</td>
                  <td>The auspicious Ganesha, the giver of prosperity</td>
                </tr>
                <tr>
                  <td>249</td>
                  <td>Sarvadeva</td>
                  <td>Om Sarvadevaya Namah</td>
                  <td>The lord of all gods, signifying the universal deity</td>
                </tr>
                <tr>
                  <td>250</td>
                  <td>Gajendra</td>
                  <td>Om Gajendraya Namah</td>
                  <td>The elephant king, a symbol of strength</td>
                </tr>
                <tr>
                  <td>251</td>
                  <td>Bhavantaraksha</td>
                  <td>Om Bhavantarakshaya Namah</td>
                  <td>The protector of creation</td>
                </tr>
                <tr>
                  <td>252</td>
                  <td>Mangalacharan</td>
                  <td>Om Mangalacharanaya Namah</td>
                  <td>The beginning of an auspicious act</td>
                </tr>
                <tr>
                  <td>253</td>
                  <td>Mahavighna</td>
                  <td>Om Mahavighnaya Namah</td>
                  <td>The remover of major obstacles</td>
                </tr>
                <tr>
                  <td>254</td>
                  <td>Kalyana</td>
                  <td>Om Kalyanaya Namah</td>
                  <td>The one who brings well-being</td>
                </tr>
                <tr>
                  <td>255</td>
                  <td>Shridhar</td>
                  <td>Om Shridharaya Namah</td>
                  <td>
                    The bearer of Goddess Lakshmi, symbolizing wealth and
                    prosperity
                  </td>
                </tr>
                <tr>
                  <td>256</td>
                  <td>Agnishwar</td>
                  <td>Om Agnishwaraya Namah</td>
                  <td>The lord of purity and transformation</td>
                </tr>
                <tr>
                  <td>257</td>
                  <td>Vishnuvallabha</td>
                  <td>Om Vishnuvallabhaya Namah</td>
                  <td>
                    The beloved of Lord Vishnu, symbolizing Love and devotion
                  </td>
                </tr>
                <tr>
                  <td>258</td>
                  <td>Arohini</td>
                  <td>Om Arohinaye Namah</td>
                  <td>
                    The one who rises, symbolizing progress and spiritual ascent
                  </td>
                </tr>
                <tr>
                  <td>259</td>
                  <td>Kanakadhvaja</td>
                  <td>Om Kanakadhvajaya Namah</td>
                  <td>
                    The one with the golden banner, symbolizing supreme victory
                  </td>
                </tr>
                <tr>
                  <td>260</td>
                  <td>Parashakti</td>
                  <td>Om Parashaktaye Namah</td>
                  <td>
                    The supreme divine power, the ultimate source of energy
                  </td>
                </tr>
                <tr>
                  <td>261</td>
                  <td>Ganadhipa</td>
                  <td>Om Ganadhipaya Namah</td>
                  <td>The leader of the Ganas</td>
                </tr>
                <tr>
                  <td>262</td>
                  <td>Pratyaksha</td>
                  <td>Om Pratyakshaya Namah</td>
                  <td>The one who is visible, manifest</td>
                </tr>
                <tr>
                  <td>263</td>
                  <td>Babhruvahana</td>
                  <td>Om Babhruvahanaya Namah</td>
                  <td>The one with the elephant-shaped weapon</td>
                </tr>
                <tr>
                  <td>264</td>
                  <td>Shubhendra</td>
                  <td>Om Shubhendre Namah</td>
                  <td>The one who brings auspiciousness</td>
                </tr>
                <tr>
                  <td>265</td>
                  <td>Dhyana</td>
                  <td>Om Dhyana Namah</td>
                  <td>
                    The one who is the embodiment of meditation and spiritual
                    focus
                  </td>
                </tr>
                <tr>
                  <td>266</td>
                  <td>Satyadev</td>
                  <td>Om Satyadevaya Namah</td>
                  <td>The true God, symbolizing the eternal truth</td>
                </tr>
                <tr>
                  <td>267</td>
                  <td>Bhaskar</td>
                  <td>Om Bhaskaraya Namah</td>
                  <td>
                    The one who shines like the sun, representing brilliance and
                    illumination
                  </td>
                </tr>
                <tr>
                  <td>268</td>
                  <td>Nirvan</td>
                  <td>Om Nirvanaya Namah</td>
                  <td>
                    The state of liberation, freedom from the cycle of birth and
                    death
                  </td>
                </tr>
                <tr>
                  <td>269</td>
                  <td>Shubhakarna</td>
                  <td>Om Shubhakarne Namah</td>
                  <td>
                    The one with auspicious ears, symbolizing divine hearing and
                    wisdom
                  </td>
                </tr>
                <tr>
                  <td>270</td>
                  <td>Jagadvinayaka</td>
                  <td>Om Jagadvinayakaya Namah</td>
                  <td>The remover of obstacles in the universe</td>
                </tr>
                <tr>
                  <td>271</td>
                  <td>Lokavandana</td>
                  <td>Om Lokavandanaya Namah</td>
                  <td>The one who is worshiped by all beings in the world</td>
                </tr>
                <tr>
                  <td>272</td>
                  <td>Mahakrishna</td>
                  <td>Om Mahakrishnaya Namah</td>
                  <td>Symbolizing divine love and power</td>
                </tr>
                <tr>
                  <td>273</td>
                  <td>Gajaputra</td>
                  <td>Om Gajaputraya Namah</td>
                  <td>The son of an elephant, symbolizing Lord Ganesha</td>
                </tr>
                <tr>
                  <td>274</td>
                  <td>Siddhadhara</td>
                  <td>Om Siddhadharaya Namah</td>
                  <td>The one who holds the accomplishments of all Siddhis</td>
                </tr>
                <tr>
                  <td>275</td>
                  <td>Shubhavidya</td>
                  <td>Om Shubhavidyaya Namah</td>
                  <td>The auspicious knowledge, representing divine wisdom</td>
                </tr>
                <tr>
                  <td>276</td>
                  <td>Svargadeep</td>
                  <td>Om Svargadeepaya Namah</td>
                  <td>The light or lamp of heaven</td>
                </tr>
                <tr>
                  <td>277</td>
                  <td>Yajneshwara</td>
                  <td>Om Yajneshwaraya Namah</td>
                  <td>The lord of sacrifices</td>
                </tr>
                <tr>
                  <td>278</td>
                  <td>Tattvavishnu</td>
                  <td>Om Tattvavishnave Namah</td>
                  <td>The essence of the truth and the divine</td>
                </tr>
                <tr>
                  <td>279</td>
                  <td>Dhruvendra</td>
                  <td>Om Dhruvendraya Namah</td>
                  <td>The lord of the pole star</td>
                </tr>
                <tr>
                  <td>280</td>
                  <td>Gajavidhara</td>
                  <td>Om Gajavidhara Namah</td>
                  <td>The one who holds the elephant</td>
                </tr>
                <tr>
                  <td>281</td>
                  <td>Dhanvantar</td>
                  <td>Om Dhanvantaryai Namah</td>
                  <td>The god of medicine and health</td>
                </tr>
                <tr>
                  <td>282</td>
                  <td>Mahaguna</td>
                  <td>Om Mahagunaya Namah</td>
                  <td>The one with great virtues</td>
                </tr>
                <tr>
                  <td>283</td>
                  <td>Anantha</td>
                  <td>Om Ananthaya Namah</td>
                  <td>The infinite one, symbolizing eternity</td>
                </tr>
                <tr>
                  <td>284</td>
                  <td>Ganeshpriya</td>
                  <td>Om Ganeshpriyaya Namah</td>
                  <td>The beloved Lord Ganesha</td>
                </tr>
                <tr>
                  <td>285</td>
                  <td>Gajaguru</td>
                  <td>Om Gajagurave Namah</td>
                  <td>The teacher of elephants</td>
                </tr>
                <tr>
                  <td>286</td>
                  <td>Suraksha</td>
                  <td>Om Surakshaya Namah</td>
                  <td>The one who brings protection and safety</td>
                </tr>
                <tr>
                  <td>287</td>
                  <td>Gajendra</td>
                  <td>Om Gajendraya Namah</td>
                  <td>The elephant king</td>
                </tr>
                <tr>
                  <td>288</td>
                  <td>Mahasundara</td>
                  <td>Om Mahasundaraya Namah</td>
                  <td>The one who is extremely beautiful</td>
                </tr>
                <tr>
                  <td>289</td>
                  <td>Anandachandra</td>
                  <td>Om Anandachandraya Namah</td>
                  <td>The moon of bliss</td>
                </tr>
                <tr>
                  <td>290</td>
                  <td>Rajagopalan</td>
                  <td>Om Rajagopalanaya Namah</td>
                  <td>The king and protector of the world</td>
                </tr>
                <tr>
                  <td>291</td>
                  <td>Amarnath</td>
                  <td>Om Amarnathaya Namah</td>
                  <td>The immortal god</td>
                </tr>
                <tr>
                  <td>292</td>
                  <td>Ashvin</td>
                  <td>Om Ashvinaya Namah</td>
                  <td>The divine twin physicians</td>
                </tr>
                <tr>
                  <td>293</td>
                  <td>Bhairavaputra</td>
                  <td>Om Bhairavaputraya Namah</td>
                  <td>The son of Lord Bhairava</td>
                </tr>
                <tr>
                  <td>294</td>
                  <td>Nityananda</td>
                  <td>Om Nityanandaya Namah</td>
                  <td>The one who is always blissful</td>
                </tr>
                <tr>
                  <td>295</td>
                  <td>Sukhadya</td>
                  <td>Om Sukadhyaya Namah</td>
                  <td>The one who gives joy</td>
                </tr>
                <tr>
                  <td>296</td>
                  <td>Chintaneshwar</td>
                  <td>Om Chintaneshwaraya Namah</td>
                  <td>The one who is the lord of meditation</td>
                </tr>
                <tr>
                  <td>297</td>
                  <td>Puranadhara</td>
                  <td>Om Puranadharaya Namah</td>
                  <td>The support of the ancient scriptures and wisdom</td>
                </tr>
                <tr>
                  <td>298</td>
                  <td>Dattaguru</td>
                  <td>Om Dattagurave Namah</td>
                  <td>The teacher of all</td>
                </tr>
                <tr>
                  <td>299</td>
                  <td>Bhaktavighna</td>
                  <td>Om Bhaktavighnaya Namah</td>
                  <td>The remover of obstacles for devotees</td>
                </tr>
                <tr>
                  <td>300</td>
                  <td>Vishveshwar</td>
                  <td>Om Vishveshwara Namah</td>
                  <td>The lord of the universe</td>
                </tr>
                <tr>
                  <td>301</td>
                  <td>Ganeshprabhu</td>
                  <td>Om Ganeshprabhave Namah</td>
                  <td>The supreme Ganesha</td>
                </tr>
                <tr>
                  <td>302</td>
                  <td>Manmatha</td>
                  <td>Om Manmathaya Namah</td>
                  <td>The god of love</td>
                </tr>
                <tr>
                  <td>303</td>
                  <td>Ganeshareshwar</td>
                  <td>Om Ganeshareshwaraya Namah</td>
                  <td>Supreme authority and power</td>
                </tr>
                <tr>
                  <td>304</td>
                  <td>Ganadheeshwar</td>
                  <td>Om Ganadheeshwaraya Namah</td>
                  <td>The lord of the Ganas</td>
                </tr>
                <tr>
                  <td>305</td>
                  <td>Gajamukhi</td>
                  <td>Om Gajamukhaye Namah</td>
                  <td>The one with the elephant face</td>
                </tr>
                <tr>
                  <td>306</td>
                  <td>Shatrunashan</td>
                  <td>Om Shatrunashanaya Namah</td>
                  <td>The destroyer of enemies</td>
                </tr>
                <tr>
                  <td>307</td>
                  <td>Vighneshaputra</td>
                  <td>Om Vighneshaputraya Namah</td>
                  <td>The son of Vighnesha</td>
                </tr>
                <tr>
                  <td>308</td>
                  <td>Gajavadan</td>
                  <td>Om Gajavadanaya Namah</td>
                  <td>The one with the elephant face</td>
                </tr>
                <tr>
                  <td>309</td>
                  <td>Shubhapath</td>
                  <td>Om Shubhapathaya Namah</td>
                  <td>The one who provides an auspicious path</td>
                </tr>
                <tr>
                  <td>310</td>
                  <td>Vikatananda</td>
                  <td>Om Vikatanandaya Namah</td>
                  <td>The one who gives bliss through devotion</td>
                </tr>
                <tr>
                  <td>311</td>
                  <td>Rathyatra</td>
                  <td>Om Rathyatraya Namah</td>
                  <td>Signifying the journey towards divine realization</td>
                </tr>
                <tr>
                  <td>312</td>
                  <td>Manthra</td>
                  <td>Om Manthraya Namah</td>
                  <td>The divine sound or sacred prayer</td>
                </tr>
                <tr>
                  <td>313</td>
                  <td>Mahashakti</td>
                  <td>Om Mahashaktaye Namah</td>
                  <td>The supreme power or divine energy</td>
                </tr>
                <tr>
                  <td>314</td>
                  <td>Hara</td>
                  <td>Om Haraya Namah</td>
                  <td>The destroyer of evil</td>
                </tr>
                <tr>
                  <td>315</td>
                  <td>Ekadantaksha</td>
                  <td>Om Ekadantakshaya Namah</td>
                  <td>The one with a single tusk and eye</td>
                </tr>
                <tr>
                  <td>316</td>
                  <td>Parabhaktavatsala</td>
                  <td>Om Parabhaktavatsalaya Namah</td>
                  <td>The protector and supporter of supreme devotees</td>
                </tr>
                <tr>
                  <td>317</td>
                  <td>Lakshminarayana</td>
                  <td>Om Lakshminarayanaya Namah</td>
                  <td>Symbolizing prosperity and wealth</td>
                </tr>
                <tr>
                  <td>318</td>
                  <td>Ashtavinayaka</td>
                  <td>Om Ashtavinayakaya Namah</td>
                  <td>The eight-fold Ganesha</td>
                </tr>
                <tr>
                  <td>319</td>
                  <td>Ganavishnu</td>
                  <td>Om Ganavishnu Namah</td>
                  <td>The elephant-faced</td>
                </tr>
                <tr>
                  <td>320</td>
                  <td>Sureshwara</td>
                  <td>Om Sureshwaraya Namah</td>
                  <td>The lord of the gods</td>
                </tr>
                <tr>
                  <td>321</td>
                  <td>Adhishwar</td>
                  <td>Om Adhishwaraya Namah</td>
                  <td>The supreme lord</td>
                </tr>
                <tr>
                  <td>322</td>
                  <td>Kamalnayan</td>
                  <td>Om Kamalnayanaya Namah</td>
                  <td>The one with lotus-shaped eyes</td>
                </tr>
                <tr>
                  <td>323</td>
                  <td>Bhagwan</td>
                  <td>Om Bhagwanaya Namah</td>
                  <td>The Supreme Lord</td>
                </tr>
                <tr>
                  <td>324</td>
                  <td>Siddhiprada</td>
                  <td>Om Siddhipradaya Namah</td>
                  <td>The one who grants all accomplishments</td>
                </tr>
                <tr>
                  <td>325</td>
                  <td>Chidananda</td>
                  <td>Om Chidanandaya Namah</td>
                  <td>The one who is consciousness and bliss</td>
                </tr>
                <tr>
                  <td>326</td>
                  <td>Chaturvarga</td>
                  <td>Om Chaturvarga</td>
                  <td>
                    The fourfold path of life (Dharma, Artha, Kama, Moksha)
                  </td>
                </tr>
                <tr>
                  <td>327</td>
                  <td>Kamyadaya</td>
                  <td>Om Kamyadaya Namah</td>
                  <td>The one who grants desires</td>
                </tr>
                <tr>
                  <td>328</td>
                  <td>Bhagavan</td>
                  <td>Om Bhagavannamaya Namah</td>
                  <td>Representing divinity in all forms</td>
                </tr>
                <tr>
                  <td>329</td>
                  <td>Akshayaprajna</td>
                  <td>Om Akshayaprajnaya Namah</td>
                  <td>Symbolizing eternal intelligence</td>
                </tr>
                <tr>
                  <td>330</td>
                  <td>Shantinayaka</td>
                  <td>Om Shantinayak</td>
                  <td>The leader of peace and calmness</td>
                </tr>
                <tr>
                  <td>331</td>
                  <td>Bhagavandhara</td>
                  <td>Om Bhagavandharaya Namah</td>
                  <td>The holder of the supreme essence</td>
                </tr>
                <tr>
                  <td>332</td>
                  <td>Chamatkari</td>
                  <td>Om Chamatkari</td>
                  <td>The miraculous one</td>
                </tr>
                <tr>
                  <td>333</td>
                  <td>Ganapati Baba</td>
                  <td>Om Ganapati Babaya Namah</td>
                  <td>The revered father of all</td>
                </tr>
                <tr>
                  <td>334</td>
                  <td>Sarvagnya</td>
                  <td>Om Sarvagnaya Namah</td>
                  <td>The omniscient one</td>
                </tr>
                <tr>
                  <td>335</td>
                  <td>Vidhyasena</td>
                  <td>Om Vidhyasenaya Namah</td>
                  <td>The one who commands wisdom</td>
                </tr>
                <tr>
                  <td>336</td>
                  <td>Jayavigneshwar</td>
                  <td>Om Jayavigneshwaraya Namah</td>
                  <td>The victorious remover of obstacles</td>
                </tr>
                <tr>
                  <td>337</td>
                  <td>Vighnavinashaka</td>
                  <td>Om Vighnavinashakaya Namah</td>
                  <td>The remover of all hindrances in life</td>
                </tr>
                <tr>
                  <td>338</td>
                  <td>Lokareshwar</td>
                  <td>Om Lokareshwaraya Namah</td>
                  <td>Symbolizing the controller of all realms</td>
                </tr>
                <tr>
                  <td>339</td>
                  <td>Aniruddha</td>
                  <td>Om Aniruddhaya Namah</td>
                  <td>The one who cannot be stopped</td>
                </tr>
                <tr>
                  <td>340</td>
                  <td>Bhavapranashana</td>
                  <td>Om Bhavapranashanaya Namah</td>
                  <td>The destroyer of the universe’s causes of suffering</td>
                </tr>
                <tr>
                  <td>341</td>
                  <td>Lokapati</td>
                  <td>Om Lokapataye Namah</td>
                  <td>The lord of the universe</td>
                </tr>
                <tr>
                  <td>342</td>
                  <td>Kumudavah</td>
                  <td>Om Kumudavahaya Namah</td>
                  <td>The one who is accompanied by lotuses</td>
                </tr>
                <tr>
                  <td>343</td>
                  <td>Bhavyasiddhi</td>
                  <td>Om Bhavyasiddhaye Namah</td>
                  <td>The one who brings great success</td>
                </tr>
                <tr>
                  <td>344</td>
                  <td>Rishivandana</td>
                  <td>Om Rishivandanaya Namah</td>
                  <td>The one who is worshipped by sages</td>
                </tr>
                <tr>
                  <td>345</td>
                  <td>Parabrahma</td>
                  <td>Om Parabrahmane Namah</td>
                  <td>The supreme absolute</td>
                </tr>
                <tr>
                  <td>346</td>
                  <td>Sumedha</td>
                  <td>Om Sumedhaya Namah</td>
                  <td>The one who has a good intellect</td>
                </tr>
                <tr>
                  <td>347</td>
                  <td>Nandavadhana</td>
                  <td>Om Nandavadhanaya Namah</td>
                  <td>The one who causes happiness and celebration</td>
                </tr>
                <tr>
                  <td>348</td>
                  <td>Datta</td>
                  <td>Om Dattaya Namah</td>
                  <td>The source of wisdom and knowledge</td>
                </tr>
                <tr>
                  <td>349</td>
                  <td>Jayantavijaya</td>
                  <td>Om Jayantavijayaya Namah</td>
                  <td>The victorious one</td>
                </tr>
                <tr>
                  <td>350</td>
                  <td>Bodhisattva</td>
                  <td>Om Bodhisattvaya Namah</td>
                  <td>The enlightened being</td>
                </tr>
                <tr>
                  <td>351</td>
                  <td>Jaganmohan</td>
                  <td>Om Jaganmohanaya Namah</td>
                  <td>The one who fascinates the entire universe</td>
                </tr>
                <tr>
                  <td>352</td>
                  <td>Mahapradayaka</td>
                  <td>Om Mahapradayakaya Namah</td>
                  <td>The great giver</td>
                </tr>
                <tr>
                  <td>353</td>
                  <td>Avighna</td>
                  <td>Om Avighnaya Namah</td>
                  <td>The one who removes obstacles</td>
                </tr>
                <tr>
                  <td>354</td>
                  <td>Ratnagarbha</td>
                  <td>Om Ratnagarbhaya Namah</td>
                  <td>The one with the treasure of gems</td>
                </tr>
                <tr>
                  <td>355</td>
                  <td>Akhileshwara</td>
                  <td>Om Akhileshwaraya Namah</td>
                  <td>The one who rules over all the worlds and realms</td>
                </tr>
                <tr>
                  <td>356</td>
                  <td>Gajamanthra</td>
                  <td>Om Gajamanthrayai Namah</td>
                  <td>Symbolizing the divine chant to invoke his blessings</td>
                </tr>
                <tr>
                  <td>357</td>
                  <td>Svayambhu</td>
                  <td>Om Svayambhuya Namah</td>
                  <td>The self-manifested</td>
                </tr>
                <tr>
                  <td>358</td>
                  <td>Paramesht</td>
                  <td>Om Parameshtaya Namah</td>
                  <td>The supreme ruler</td>
                </tr>
                <tr>
                  <td>359</td>
                  <td>Bhavajaya</td>
                  <td>Om Bhavajayaya Namah</td>
                  <td>The conqueror of emotions</td>
                </tr>
                <tr>
                  <td>360</td>
                  <td>Nirmaladhara</td>
                  <td>Om Nirmaladhara Namah</td>
                  <td>The purifier of all</td>
                </tr>
                <tr>
                  <td>361</td>
                  <td>Jayamangala</td>
                  <td>Om Jayamangalaya Namah</td>
                  <td>The auspicious victory</td>
                </tr>
                <tr>
                  <td>362</td>
                  <td>Gajamurti</td>
                  <td>Om Gajamurtaye Namah</td>
                  <td>The elephant-headed form</td>
                </tr>
                <tr>
                  <td>363</td>
                  <td>Kshantishwar</td>
                  <td>Om Kshantishwaraya Namah</td>
                  <td>The Lord of patience</td>
                </tr>
                <tr>
                  <td>364</td>
                  <td>Bhaktaraja</td>
                  <td>Om Bhaktarajaya Namah</td>
                  <td>The king of devotees</td>
                </tr>
                <tr>
                  <td>365</td>
                  <td>Dharmik</td>
                  <td>Om Dharmikaya Namah</td>
                  <td>The righteous one</td>
                </tr>
                <tr>
                  <td>366</td>
                  <td>Siddhiprada</td>
                  <td>Om Siddhipradaya Namah</td>
                  <td>The bestower of accomplishments</td>
                </tr>
                <tr>
                  <td>367</td>
                  <td>Avinash</td>
                  <td>Om Avinashaya Namah</td>
                  <td>The imperishable one</td>
                </tr>
                <tr>
                  <td>368</td>
                  <td>Shubhashraya</td>
                  <td>Om Shubhashrayaya Namah</td>
                  <td>The source of auspiciousness</td>
                </tr>
                <tr>
                  <td>369</td>
                  <td>Yogavishnu</td>
                  <td>Om Yogavishnu Namah</td>
                  <td>Who embodies divine peace and power</td>
                </tr>
                <tr>
                  <td>370</td>
                  <td>Sarvashakti</td>
                  <td>Om Sarvashaktaye Namah</td>
                  <td>The one with all powers</td>
                </tr>
                <tr>
                  <td>371</td>
                  <td>Asurashra</td>
                  <td>Om Asurashrayaya Namah</td>
                  <td>The destroyer of demons</td>
                </tr>
                <tr>
                  <td>372</td>
                  <td>Chidambara</td>
                  <td>Om Chidambaramaya Namah</td>
                  <td>Symbolizing divine presence in space</td>
                </tr>
                <tr>
                  <td>373</td>
                  <td>Akshaya</td>
                  <td>Om Akshayaya Namah</td>
                  <td>The inexhaustible one</td>
                </tr>
                <tr>
                  <td>374</td>
                  <td>Nirmalavakra</td>
                  <td>Om Nirmalavakrayai Namah</td>
                  <td>The one with pure and spotless form</td>
                </tr>
                <tr>
                  <td>375</td>
                  <td>Sankarshana</td>
                  <td>Om Sankarshanaya Namah</td>
                  <td>Symbolizing the divine force of attraction</td>
                </tr>
                <tr>
                  <td>376</td>
                  <td>Sudhanva</td>
                  <td>Om Sudhanvaya Namah</td>
                  <td>The one with the divine bow</td>
                </tr>
                <tr>
                  <td>377</td>
                  <td>Lalitapadma</td>
                  <td>Om Lalitapadmaya Namah</td>
                  <td>The one with lotus feet</td>
                </tr>
                <tr>
                  <td>378</td>
                  <td>Bhadrapriya</td>
                  <td>Om Bhadrapriyaya Namah</td>
                  <td>The one who is dear to the auspicious</td>
                </tr>
                <tr>
                  <td>379</td>
                  <td>Ganeshwar</td>
                  <td>Om Ganeshwaraya Namah</td>
                  <td>The Lord of Ganesha</td>
                </tr>
                <tr>
                  <td>380</td>
                  <td>Vishwavidya</td>
                  <td>Om Vishwavidyaya Namah</td>
                  <td>The knowledge of the universe</td>
                </tr>
                <tr>
                  <td>381</td>
                  <td>Bhavayoga</td>
                  <td>Om Bhavayogaya Namah</td>
                  <td>The yoga of emotions and experiences</td>
                </tr>
                <tr>
                  <td>382</td>
                  <td>Dakshinavakra</td>
                  <td>Om Dakshinavakrayai Namah</td>
                  <td>Symbolizing direction and guidance</td>
                </tr>
                <tr>
                  <td>383</td>
                  <td>Pratidhvani</td>
                  <td>Om Pratidhvani Namah</td>
                  <td>The echo of sound</td>
                </tr>
                <tr>
                  <td>384</td>
                  <td>Tripuravandita</td>
                  <td>Om Tripuravanditaya Namah</td>
                  <td>The worshiped by the three worlds</td>
                </tr>
                <tr>
                  <td>385</td>
                  <td>Svargadipa</td>
                  <td>Om Svargadipaya Namah</td>
                  <td>The one who resides in the heavenly abode</td>
                </tr>
                <tr>
                  <td>386</td>
                  <td>Mahabhuvaneshwar</td>
                  <td>Om Mahabhuvaneshwaraya Namah</td>
                  <td>The Lord of the great world</td>
                </tr>
                <tr>
                  <td>387</td>
                  <td>Vignaraja</td>
                  <td>Om Vignarajaya Namah</td>
                  <td>The King of obstacles</td>
                </tr>
                <tr>
                  <td>388</td>
                  <td>Bhavaneshwar</td>
                  <td>Om Bhavaneshwaraya Namah</td>
                  <td>The Lord of creation</td>
                </tr>
                <tr>
                  <td>389</td>
                  <td>Aniruddha</td>
                  <td>Om Aniruddhaya Namah</td>
                  <td>The one who cannot be restrained</td>
                </tr>
                <tr>
                  <td>390</td>
                  <td>Apsaravandan</td>
                  <td>Om Apsaravanditaya Namah</td>
                  <td>The one who is worshiped by celestial nymphs</td>
                </tr>
                <tr>
                  <td>391</td>
                  <td>Bhaktamadhava</td>
                  <td>Om Bhaktamadhavaya Namah</td>
                  <td>The Lord who is dear to the devotees</td>
                </tr>
                <tr>
                  <td>392</td>
                  <td>Prashantavakra</td>
                  <td>Om Prashantavakrayai Namah</td>
                  <td>The one with serene bent</td>
                </tr>
                <tr>
                  <td>393</td>
                  <td>Vighnakarta</td>
                  <td>Om Vighnakartre Namah</td>
                  <td>The creator of obstacles</td>
                </tr>
                <tr>
                  <td>394</td>
                  <td>Kuberpriya</td>
                  <td>Om Kuberpriyaya Namah</td>
                  <td>The one who is dear to Lord Kubera</td>
                </tr>
                <tr>
                  <td>395</td>
                  <td>Datta Ganesh</td>
                  <td>Om Datta Ganeshaya Namah</td>
                  <td>The one who is full of knowledge and blessings</td>
                </tr>
                <tr>
                  <td>396</td>
                  <td>Vighnarajendra</td>
                  <td>Om Vighnarajendrayai Namah</td>
                  <td>The King of obstacles</td>
                </tr>
                <tr>
                  <td>397</td>
                  <td>Siddhi Dhan</td>
                  <td>Om Siddhidhanaya Namah</td>
                  <td>The giver of accomplishments</td>
                </tr>
                <tr>
                  <td>398</td>
                  <td>Sureshwar</td>
                  <td>Om Sureshwaraya Namah</td>
                  <td>The Lord of the gods</td>
                </tr>
                <tr>
                  <td>399</td>
                  <td>Ganeshvandan</td>
                  <td>Om Ganeshvandanaya Namah</td>
                  <td>The worship of Lord Ganesha</td>
                </tr>
                <tr>
                  <td>400</td>
                  <td>Sankatmochan</td>
                  <td>Om Sankatmochanaya Namah</td>
                  <td>The remover of troubles</td>
                </tr>
                <tr>
                  <td>401</td>
                  <td>Sundar Ganapati</td>
                  <td>Om Sundar Ganapataye Namah</td>
                  <td>The beautiful form of Lord Ganesha</td>
                </tr>
                <tr>
                  <td>402</td>
                  <td>Hithendra</td>
                  <td>Om Hithendraya Namah</td>
                  <td>The one who brings benevolence and welfare</td>
                </tr>
                <tr>
                  <td>403</td>
                  <td>Bhavapujit</td>
                  <td>Om Bhavapujitaya Namah</td>
                  <td>The one who is worshipped by all beings</td>
                </tr>
                <tr>
                  <td>404</td>
                  <td>Bhavodhara</td>
                  <td>Om Bhavodharaya Namah</td>
                  <td>The supporter of the universe</td>
                </tr>
                <tr>
                  <td>405</td>
                  <td>Supratik</td>
                  <td>Om Supratikaya Namah</td>
                  <td>The one who is the symbol of good omen</td>
                </tr>
                <tr>
                  <td>406</td>
                  <td>Vighnavinaash</td>
                  <td>Om Vighnavinaashayai Namah</td>
                  <td>The destroyer of obstacles</td>
                </tr>
                <tr>
                  <td>407</td>
                  <td>Dhanvantari</td>
                  <td>Om Dhanvantari Namah</td>
                  <td>The divine physician</td>
                </tr>
                <tr>
                  <td>408</td>
                  <td>Ganavardhan</td>
                  <td>Om Ganavardhanaya Namah</td>
                  <td>The one who increases devotion towards Ganesha</td>
                </tr>
                <tr>
                  <td>409</td>
                  <td>Sarvamangala</td>
                  <td>Om Sarvamangala Namah</td>
                  <td>The source of all auspiciousness</td>
                </tr>
                <tr>
                  <td>410</td>
                  <td>Pujanashree</td>
                  <td>Om Pujanashre Namah</td>
                  <td>The one who is the source of sacred worship</td>
                </tr>
                <tr>
                  <td>411</td>
                  <td>Lokavallabha</td>
                  <td>Om Lokavallabhaya Namah</td>
                  <td>The beloved of the world</td>
                </tr>
                <tr>
                  <td>412</td>
                  <td>Kumbhakarna</td>
                  <td>Om Kumbhakarna Namah</td>
                  <td>The giant who awakens after long slumber</td>
                </tr>
                <tr>
                  <td>413</td>
                  <td>Shatrughna</td>
                  <td>Om Shatrughnaya Namah</td>
                  <td>The slayer of enemies</td>
                </tr>
                <tr>
                  <td>414</td>
                  <td>Vashishta</td>
                  <td>Om Vashishtaya Namah</td>
                  <td>A revered sage</td>
                </tr>
                <tr>
                  <td>415</td>
                  <td>Vishwamitran</td>
                  <td>Om Vishwamitranaya Namah</td>
                  <td>A sage who was the protector of all worlds</td>
                </tr>
                <tr>
                  <td>416</td>
                  <td>Rajadhiraj</td>
                  <td>Om Rajadhirajaya Namah</td>
                  <td>The king of kings</td>
                </tr>
                <tr>
                  <td>417</td>
                  <td>Shriman Ganapati</td>
                  <td>Om Shriman Ganapataye Namah</td>
                  <td>The auspicious Lord Ganesha</td>
                </tr>
                <tr>
                  <td>418</td>
                  <td>Shubhaprada</td>
                  <td>Om Shubhapradaya Namah</td>
                  <td>The giver of auspiciousness</td>
                </tr>
                <tr>
                  <td>419</td>
                  <td>Lokanandana</td>
                  <td>Om Lokanandanaya Namah</td>
                  <td>The son of the world</td>
                </tr>
                <tr>
                  <td>420</td>
                  <td>Mahasukhadayaka</td>
                  <td>Om Mahasukhadayakaya Namah</td>
                  <td>The giver of great happiness</td>
                </tr>
                <tr>
                  <td>421</td>
                  <td>Darpaneshwar</td>
                  <td>Om Darpaneshwaraya Namah</td>
                  <td>The Lord of mirrors</td>
                </tr>
                <tr>
                  <td>422</td>
                  <td>Shantiman</td>
                  <td>Om Shantimanaya Namah</td>
                  <td>The peaceful one</td>
                </tr>
                <tr>
                  <td>423</td>
                  <td>Yashodhan</td>
                  <td>Om Yashodhanaya Namah</td>
                  <td>The one who holds glory</td>
                </tr>
                <tr>
                  <td>424</td>
                  <td>Ekadanta Sree</td>
                  <td>Om Ekadanta Sree Namah</td>
                  <td>The one with a single tusk</td>
                </tr>
                <tr>
                  <td>425</td>
                  <td>Ganapatishwar</td>
                  <td>Om Ganapatishwaraya Namah</td>
                  <td>The Lord of Ganesha</td>
                </tr>
                <tr>
                  <td>426</td>
                  <td>Paramshakti</td>
                  <td>Om Paramshakti Namah</td>
                  <td>The supreme power</td>
                </tr>
                <tr>
                  <td>427</td>
                  <td>Vishwadeva</td>
                  <td>Om Vishwadevaya Namah</td>
                  <td>The deity of the world</td>
                </tr>
                <tr>
                  <td>428</td>
                  <td>Pradhanavakra</td>
                  <td>Om Pradhanavakrayai Namah</td>
                  <td>The supreme form with a bent</td>
                </tr>
                <tr>
                  <td>429</td>
                  <td>Prajnapurush</td>
                  <td>Om Prajnapurushaya Namah</td>
                  <td>The divine embodiment of wisdom</td>
                </tr>
                <tr>
                  <td>430</td>
                  <td>Ganapathy</td>
                  <td>Om Ganapathaye Namah</td>
                  <td>The lord of all Ganas</td>
                </tr>
                <tr>
                  <td>431</td>
                  <td>Chaturvahan</td>
                  <td>Om Chaturvahanaya Namah</td>
                  <td>The one who has four vehicles</td>
                </tr>
                <tr>
                  <td>432</td>
                  <td>Triguneshwar</td>
                  <td>Om Triguneshwaraya Namah</td>
                  <td>The Lord of the three Gunas</td>
                </tr>
                <tr>
                  <td>433</td>
                  <td>Bhakti Vardhan</td>
                  <td>Om Bhakti Vardhanaya Namah</td>
                  <td>The one who enhances devotion</td>
                </tr>
                <tr>
                  <td>434</td>
                  <td>Yajnavarpriya</td>
                  <td>Om Yajnavarpriyaya Namah</td>
                  <td>The beloved of the sacrificial rites</td>
                </tr>
                <tr>
                  <td>435</td>
                  <td>Siddhartha</td>
                  <td>Om Siddharthaya Namah</td>
                  <td>The one who has achieved perfection</td>
                </tr>
                <tr>
                  <td>436</td>
                  <td>Vishwabhushana</td>
                  <td>Om Vishwabhushanaya Namah</td>
                  <td>The adornment of the universe</td>
                </tr>
                <tr>
                  <td>437</td>
                  <td>Gajachudamani</td>
                  <td>Om Gajachudamani Namah</td>
                  <td>The crown jewel of elephants</td>
                </tr>
                <tr>
                  <td>438</td>
                  <td>Ganeshavatsala</td>
                  <td>Om Ganeshavatsalaya Namah</td>
                  <td>The one who loves Ganesha</td>
                </tr>
                <tr>
                  <td>439</td>
                  <td>Vikram</td>
                  <td>Om Vikramaya Namah</td>
                  <td>The one of great valor</td>
                </tr>
                <tr>
                  <td>440</td>
                  <td>Swayamprabhu</td>
                  <td>Om Swayamprabhave Namah</td>
                  <td>The self-manifested one</td>
                </tr>
                <tr>
                  <td>441</td>
                  <td>Trigunadhar</td>
                  <td>Om Trigunadharaya Namah</td>
                  <td>The bearer of the three Gunas</td>
                </tr>
                <tr>
                  <td>442</td>
                  <td>Kamalaksha</td>
                  <td>Om Kamalakshaya Namah</td>
                  <td>The one with lotus-like eyes</td>
                </tr>
                <tr>
                  <td>443</td>
                  <td>Gajmukha</td>
                  <td>Om Gajamukhaya Namah</td>
                  <td>The elephant-faced one</td>
                </tr>
                <tr>
                  <td>444</td>
                  <td>Vidyaavadhara</td>
                  <td>Om Vidyaavadharaya Namah</td>
                  <td>The sustainer of knowledge</td>
                </tr>
                <tr>
                  <td>445</td>
                  <td>Gananayaka</td>
                  <td>Om Gananayakaya Namah</td>
                  <td>The leader of the Ganas</td>
                </tr>
                <tr>
                  <td>446</td>
                  <td>Bhavaneshwar</td>
                  <td>Om Bhavaneshwaraya Namah</td>
                  <td>The Lord of creation</td>
                </tr>
                <tr>
                  <td>447</td>
                  <td>Sahasrara</td>
                  <td>Om Sahasrara Namah</td>
                  <td>The thousand-petaled lotus</td>
                </tr>
                <tr>
                  <td>448</td>
                  <td>Siddhigraha</td>
                  <td>Om Siddhigrahaya Namah</td>
                  <td>The one who holds all accomplishments</td>
                </tr>
                <tr>
                  <td>449</td>
                  <td>Dharmachakra</td>
                  <td>Om Dharmachakraya Namah</td>
                  <td>The wheel of dharma</td>
                </tr>
                <tr>
                  <td>450</td>
                  <td>Vividha</td>
                  <td>Om Vividhaya Namah</td>
                  <td>The one who encompasses all</td>
                </tr>
                <tr>
                  <td>451</td>
                  <td>Shubhakara</td>
                  <td>Om Shubhakara Namah</td>
                  <td>The one who brings auspiciousness</td>
                </tr>
                <tr>
                  <td>452</td>
                  <td>Gajendravadha</td>
                  <td>Om Gajendravadha Namah</td>
                  <td>The slayer of Gajendra</td>
                </tr>
                <tr>
                  <td>453</td>
                  <td>Sankalpa</td>
                  <td>Om Sankalpayai Namah</td>
                  <td>The divine will or intention</td>
                </tr>
                <tr>
                  <td>454</td>
                  <td>Adhyatmika</td>
                  <td>Om Adhyatmikaya Namah</td>
                  <td>The one who is spiritual</td>
                </tr>
                <tr>
                  <td>455</td>
                  <td>Trishuladhara</td>
                  <td>Om Trishuladharaya Namah</td>
                  <td>Bearer of the trident</td>
                </tr>
                <tr>
                  <td>456</td>
                  <td>Swarnapriya</td>
                  <td>Om Swarnapriyaya Namah</td>
                  <td>Lover of gold</td>
                </tr>
                <tr>
                  <td>457</td>
                  <td>Saraswateshwar</td>
                  <td>Om Saraswateshwaraya Namah</td>
                  <td>Lord of knowledge</td>
                </tr>
                <tr>
                  <td>458</td>
                  <td>Sundarvinayaka</td>
                  <td>Om Sundarvinayakaya Namah</td>
                  <td>Beautiful Lord Ganesh</td>
                </tr>
                <tr>
                  <td>459</td>
                  <td>Mahadeva</td>
                  <td>Om Mahadevaya Namah</td>
                  <td>The great god</td>
                </tr>
                <tr>
                  <td>460</td>
                  <td>Parashaktidev</td>
                  <td>Om Parashaktidevaya Namah</td>
                  <td>Supreme energy deity</td>
                </tr>
                <tr>
                  <td>461</td>
                  <td>Vighnasana</td>
                  <td>Om Vighnasanaya Namah</td>
                  <td>Remover of obstacles</td>
                </tr>
                <tr>
                  <td>462</td>
                  <td>Bhalasurendra</td>
                  <td>Om Bhalasurendraya Namah</td>
                  <td>Foremost among the auspicious</td>
                </tr>
                <tr>
                  <td>463</td>
                  <td>Bhadrakali</td>
                  <td>Om Bhadrakalaye Namah</td>
                  <td>Fierce and auspicious</td>
                </tr>
                <tr>
                  <td>464</td>
                  <td>Nirmalyavakra</td>
                  <td>Om Nirmalyavakraya Namah</td>
                  <td>Pure and spotless</td>
                </tr>
                <tr>
                  <td>465</td>
                  <td>Sureshwara</td>
                  <td>Om Sureshwaraya Namah</td>
                  <td>Lord of the gods</td>
                </tr>
                <tr>
                  <td>466</td>
                  <td>Guneshwar</td>
                  <td>Om Guneshwaraya Namah</td>
                  <td>Lord of qualities</td>
                </tr>
                <tr>
                  <td>467</td>
                  <td>Paramdev</td>
                  <td>Om Paramdevaya Namah</td>
                  <td>Supreme deity</td>
                </tr>
                <tr>
                  <td>468</td>
                  <td>Shubharoopa</td>
                  <td>Om Shubharoopaya Namah</td>
                  <td>Embodiment of auspiciousness</td>
                </tr>
                <tr>
                  <td>469</td>
                  <td>Ganaditya</td>
                  <td>Om Ganadityaya Namah</td>
                  <td>Sun among the ganas</td>
                </tr>
                <tr>
                  <td>470</td>
                  <td>Kalpana</td>
                  <td>Om Kalpanaya Namah</td>
                  <td>Manifestation of imagination</td>
                </tr>
                <tr>
                  <td>471</td>
                  <td>Vighnavinashini</td>
                  <td>Om Vighnavinashinaye Namah</td>
                  <td>Destroyer of obstacles</td>
                </tr>
                <tr>
                  <td>472</td>
                  <td>Gandharvendra</td>
                  <td>Om Gandharvendraya Namah</td>
                  <td>Lord of celestial beings</td>
                </tr>
                <tr>
                  <td>473</td>
                  <td>Praneshwar</td>
                  <td>Om Praneshwaraya Namah</td>
                  <td>Lord of life</td>
                </tr>
                <tr>
                  <td>474</td>
                  <td>Shastraswaroopa</td>
                  <td>Om Shastraswaroopaya Namah</td>
                  <td>Embodiment of scriptures</td>
                </tr>
                <tr>
                  <td>475</td>
                  <td>Mahashaktishwar</td>
                  <td>Om Mahashaktishwaraya Namah</td>
                  <td>Lord of supreme power</td>
                </tr>
                <tr>
                  <td>476</td>
                  <td>Pratishthapana</td>
                  <td>Om Pratishthapanaya Namah</td>
                  <td>One who establishes</td>
                </tr>
                <tr>
                  <td>477</td>
                  <td>Abhaya</td>
                  <td>Om Abhayaya Namah</td>
                  <td>Giver of fearlessness</td>
                </tr>
                <tr>
                  <td>478</td>
                  <td>Manvendra</td>
                  <td>Om Manvendraya Namah</td>
                  <td>Lord of mankind</td>
                </tr>
                <tr>
                  <td>479</td>
                  <td>Rishivar</td>
                  <td>Om Rishivaraya Namah</td>
                  <td>Foremost among sages</td>
                </tr>
                <tr>
                  <td>480</td>
                  <td>Vaidehishwar</td>
                  <td>Om Vaidehishwaraya Namah</td>
                  <td>Lord of Vaidehi</td>
                </tr>
                <tr>
                  <td>481</td>
                  <td>Kartavya</td>
                  <td>Om Kartavyaya Namah</td>
                  <td>Embodiment of duty</td>
                </tr>
                <tr>
                  <td>482</td>
                  <td>Vastupriya</td>
                  <td>Om Vastupriyaya Namah</td>
                  <td>Lover of sacred architecture</td>
                </tr>
                <tr>
                  <td>483</td>
                  <td>Dhanavakra</td>
                  <td>Om Dhanavakraya Namah</td>
                  <td>Wealthy and prosperous</td>
                </tr>
                <tr>
                  <td>484</td>
                  <td>Vishvakarman</td>
                  <td>Om Vishvakarmanaya Namah</td>
                  <td>Universal creator</td>
                </tr>
                <tr>
                  <td>485</td>
                  <td>Bhagvatswar</td>
                  <td>Om Bhagvatswaraya Namah</td>
                  <td>Form of the divine</td>
                </tr>
                <tr>
                  <td>486</td>
                  <td>Saraswat</td>
                  <td>Om Saraswataya Namah</td>
                  <td>Embodiment of learning</td>
                </tr>
                <tr>
                  <td>487</td>
                  <td>Kalyanasundar</td>
                  <td>Om Kalyanasundaraya Namah</td>
                  <td>Auspicious and beautiful</td>
                </tr>
                <tr>
                  <td>488</td>
                  <td>Bhaktavatsala</td>
                  <td>Om Bhaktavatsalaya Namah</td>
                  <td>Protector of devotees</td>
                </tr>
                <tr>
                  <td>489</td>
                  <td>Shilpadhipa</td>
                  <td>Om Shilpadhipaya Namah</td>
                  <td>Lord of arts and crafts</td>
                </tr>
                <tr>
                  <td>490</td>
                  <td>Gandheshwar</td>
                  <td>Om Gandheshwaraya Namah</td>
                  <td>Lord of fragrances</td>
                </tr>
                <tr>
                  <td>491</td>
                  <td>Varadaraj</td>
                  <td>Om Varadarajaya Namah</td>
                  <td>Bestower of boons</td>
                </tr>
                <tr>
                  <td>492</td>
                  <td>Mangalapradeep</td>
                  <td>Om Mangalapradeepaya Namah</td>
                  <td>Light of auspiciousness</td>
                </tr>
                <tr>
                  <td>493</td>
                  <td>Vishal</td>
                  <td>Om Vishalaya Namah</td>
                  <td>Infinite and vast</td>
                </tr>
                <tr>
                  <td>494</td>
                  <td>Satyapriya</td>
                  <td>Om Satyapriyaya Namah</td>
                  <td>Lover of truth</td>
                </tr>
                <tr>
                  <td>495</td>
                  <td>Ganapathya</td>
                  <td>Om Ganapathyaya Namah</td>
                  <td>Devotee of Lord Ganesha</td>
                </tr>
                <tr>
                  <td>496</td>
                  <td>Padmanabhan</td>
                  <td>Om Padmanabhaya Namah</td>
                  <td>One with a lotus in his navel (Lord Vishnu)</td>
                </tr>
                <tr>
                  <td>497</td>
                  <td>Bhavasagar</td>
                  <td>Om Bhavasagaraya Namah</td>
                  <td>One who helps cross the ocean of life</td>
                </tr>
                <tr>
                  <td>498</td>
                  <td>Pujakari</td>
                  <td>Om Pujakariye Namah</td>
                  <td>One who performs worship</td>
                </tr>
                <tr>
                  <td>499</td>
                  <td>Amogha</td>
                  <td>Om Amoghaya Namah</td>
                  <td>Unfailing, flawless</td>
                </tr>
                <tr>
                  <td>500</td>
                  <td>Mandara</td>
                  <td>Om Mandaraya Namah</td>
                  <td>The name of a mountain in Hindu mythology</td>
                </tr>
                <tr>
                  <td>501</td>
                  <td>Adithyavandana</td>
                  <td>Om Adithyavandanaya Namah</td>
                  <td>One who is praised by the Sun</td>
                </tr>
                <tr>
                  <td>502</td>
                  <td>Raksheeshwar</td>
                  <td>Om Raksheeshwaraya Namah</td>
                  <td>Lord of protection</td>
                </tr>
                <tr>
                  <td>503</td>
                  <td>Rajagovinda</td>
                  <td>Om Rajagovindaya Namah</td>
                  <td>Lord of the kings</td>
                </tr>
                <tr>
                  <td>504</td>
                  <td>Sahasrapati</td>
                  <td>Om Sahasrapatiye Namah</td>
                  <td>Lord with a thousand hands</td>
                </tr>
                <tr>
                  <td>505</td>
                  <td>Siddheshwar</td>
                  <td>Om Siddheshwaraya Namah</td>
                  <td>Lord of all siddhis (perfection)</td>
                </tr>
                <tr>
                  <td>506</td>
                  <td>Shubhavivaha</td>
                  <td>Om Shubhavivahaya Namah</td>
                  <td>One who brings auspicious marriage</td>
                </tr>
                <tr>
                  <td>507</td>
                  <td>Jaya Ganesh</td>
                  <td>Om Jaya Ganeshaya Namah</td>
                  <td>Victorious Lord Ganesha</td>
                </tr>
                <tr>
                  <td>508</td>
                  <td>Lokeshwar</td>
                  <td>Om Lokeshwaraya Namah</td>
                  <td>Lord of the world</td>
                </tr>
                <tr>
                  <td>509</td>
                  <td>Shubhadrishta</td>
                  <td>Om Shubhadrishtaya Namah</td>
                  <td>One with an auspicious vision</td>
                </tr>
                <tr>
                  <td>510</td>
                  <td>Atyantapriya</td>
                  <td>Om Atyantapriyaya Namah</td>
                  <td>Very dear to all</td>
                </tr>
                <tr>
                  <td>511</td>
                  <td>Vikranta</td>
                  <td>Om Vikrantaya Namah</td>
                  <td>Mighty, fearless</td>
                </tr>
                <tr>
                  <td>512</td>
                  <td>Sarvatrik</td>
                  <td>Om Sarvatrikaya Namah</td>
                  <td>One who is everywhere</td>
                </tr>
                <tr>
                  <td>513</td>
                  <td>Ganapati Bhakti</td>
                  <td>Om Ganapathibhaktaya Namah</td>
                  <td>Devotion to Lord Ganesha</td>
                </tr>
                <tr>
                  <td>514</td>
                  <td>Purnachandra</td>
                  <td>Om Purnachandray Namah</td>
                  <td>Full moon, one who is as beautiful as the moon</td>
                </tr>
                <tr>
                  <td>515</td>
                  <td>Vishwajeet</td>
                  <td>Om Vishwajeetaya Namah</td>
                  <td>Conqueror of the world</td>
                </tr>
                <tr>
                  <td>516</td>
                  <td>Dwarakadhisha</td>
                  <td>Om Dwarakadhishaya Namah</td>
                  <td>Lord of Dwaraka, Lord Krishna</td>
                </tr>
                <tr>
                  <td>517</td>
                  <td>Vedicvighna</td>
                  <td>Om Vedicvighnaya Namah</td>
                  <td>Lord who removes obstacles in Vedic rituals</td>
                </tr>
                <tr>
                  <td>518</td>
                  <td>Satyavighna</td>
                  <td>Om Satyavighnaya Namah</td>
                  <td>The truth, who removes obstacles</td>
                </tr>
                <tr>
                  <td>519</td>
                  <td>Vinayakendra</td>
                  <td>Om Vinayakendray Namah</td>
                  <td>Center of all Vinayakas</td>
                </tr>
                <tr>
                  <td>520</td>
                  <td>Trikalandhara</td>
                  <td>Om Trikalandharaya Namah</td>
                  <td>One who holds the three worlds</td>
                </tr>
                <tr>
                  <td>521</td>
                  <td>Mahavishnu</td>
                  <td>Om Mahavishnuaya Namah</td>
                  <td>Great Vishnu</td>
                </tr>
                <tr>
                  <td>522</td>
                  <td>Gajendraprasad</td>
                  <td>Om Gajendraprasadaya Namah</td>
                  <td>Blessing of the elephant-headed king</td>
                </tr>
                <tr>
                  <td>523</td>
                  <td>Ashvamedh</td>
                  <td>Om Ashvamedhaya Namah</td>
                  <td>One who is associated with the Ashvamedha sacrifice</td>
                </tr>
                <tr>
                  <td>524</td>
                  <td>Akhileshwar</td>
                  <td>Om Akhileshwaraya Namah</td>
                  <td>Lord of all the worlds</td>
                </tr>
                <tr>
                  <td>525</td>
                  <td>Sarvashreshtha</td>
                  <td>Om Sarvashreshthaya Namah</td>
                  <td>The best of all</td>
                </tr>
                <tr>
                  <td>526</td>
                  <td>Nithyashree</td>
                  <td>Om Nithyashree Namah</td>
                  <td>Eternal goddess, ever auspicious</td>
                </tr>
                <tr>
                  <td>527</td>
                  <td>Balavikram</td>
                  <td>Om Balavikramaya Namah</td>
                  <td>Mighty and powerful</td>
                </tr>
                <tr>
                  <td>528</td>
                  <td>Mahashakti</td>
                  <td>Om Mahashakti Namah</td>
                  <td>The great power</td>
                </tr>
                <tr>
                  <td>529</td>
                  <td>Aadhavan</td>
                  <td>Om Aadhavaya Namah</td>
                  <td>One who is the source of all light, the Sun</td>
                </tr>
                <tr>
                  <td>530</td>
                  <td>Vigneshwara</td>
                  <td>Om Vigneshwaraya Namah</td>
                  <td>Lord of obstacles, another name for Ganesha</td>
                </tr>
                <tr>
                  <td>531</td>
                  <td>Mahavadhana</td>
                  <td>Om Mahavadhanaya Namah</td>
                  <td>
                    One who is the great source of all knowledge and wisdom
                  </td>
                </tr>
                <tr>
                  <td>532</td>
                  <td>Ganeshnath</td>
                  <td>Om Ganeshnathaya Namah</td>
                  <td>Lord of Ganesha</td>
                </tr>
                <tr>
                  <td>533</td>
                  <td>Pratibha</td>
                  <td>Om Pratibhaya Namah</td>
                  <td>One who is brilliant, shining</td>
                </tr>
                <tr>
                  <td>534</td>
                  <td>Bhavanaputra</td>
                  <td>Om Bhavanaputraya Namah</td>
                  <td>Son of Bhavani (Parvati)</td>
                </tr>
                <tr>
                  <td>535</td>
                  <td>Ketanavadhara</td>
                  <td>Om Ketanavadharaya Namah</td>
                  <td>One who holds the flag (symbol of victory)</td>
                </tr>
                <tr>
                  <td>536</td>
                  <td>Siddhigrahi</td>
                  <td>Om Siddhigrahaya Namah</td>
                  <td>One who grants perfection</td>
                </tr>
                <tr>
                  <td>537</td>
                  <td>Brahmavishnu</td>
                  <td>Om Brahmavishnuaya Namah</td>
                  <td>The combined form of Brahma and Vishnu</td>
                </tr>
                <tr>
                  <td>538</td>
                  <td>Ameyaprasad</td>
                  <td>Om Ameyaprasadaya Namah</td>
                  <td>One who gives immeasurable blessings</td>
                </tr>
                <tr>
                  <td>539</td>
                  <td>Mahavishweshwar</td>
                  <td>Om Mahavishweshwaraya Namah</td>
                  <td>The great ruler of the universe</td>
                </tr>
                <tr>
                  <td>540</td>
                  <td>Trikaldarshi</td>
                  <td>Om Trikaldarshaya Namah</td>
                  <td>
                    One who sees all three periods of time: past, present,
                    future
                  </td>
                </tr>
                <tr>
                  <td>541</td>
                  <td>Vishwakarmapriya</td>
                  <td>Om Vishwakarmapriya Namah</td>
                  <td>
                    One who is dear to Vishwakarma, the architect of the gods
                  </td>
                </tr>
                <tr>
                  <td>542</td>
                  <td>Vyomavandana</td>
                  <td>Om Vyomavandanaya Namah</td>
                  <td>One who is worshiped in the sky</td>
                </tr>
                <tr>
                  <td>543</td>
                  <td>Jayanthakara</td>
                  <td>Om Jayanthakaraya Namah</td>
                  <td>One who creates victory</td>
                </tr>
                <tr>
                  <td>544</td>
                  <td>Satyaputra</td>
                  <td>Om Satyaputraya Namah</td>
                  <td>
                    Son of truth (reference to Lord Ganesha as the son of truth)
                  </td>
                </tr>
                <tr>
                  <td>545</td>
                  <td>Shubhakanti</td>
                  <td>Om Shubhakantaya Namah</td>
                  <td>One with an auspicious face</td>
                </tr>
                <tr>
                  <td>546</td>
                  <td>Padmapada</td>
                  <td>Om Padmapadaya Namah</td>
                  <td>One with a lotus-like feet</td>
                </tr>
                <tr>
                  <td>547</td>
                  <td>Bhavavadha</td>
                  <td>Om Bhavavadhaya Namah</td>
                  <td>One who destroys all evils</td>
                </tr>
                <tr>
                  <td>548</td>
                  <td>Bhaktiyaksha</td>
                  <td>Om Bhaktiyaksaya Namah</td>
                  <td>The deity of devotion</td>
                </tr>
                <tr>
                  <td>549</td>
                  <td>Mahapathakari</td>
                  <td>Om Mahapathakaraya Namah</td>
                  <td>One who removes the greatest sins</td>
                </tr>
                <tr>
                  <td>550</td>
                  <td>Ranganatha</td>
                  <td>Om Ranganathaya Namah</td>
                  <td>Lord of Ranga (Vishnu)</td>
                </tr>
                <tr>
                  <td>551</td>
                  <td>Parvateshwar</td>
                  <td>Om Parvateshwaraya Namah</td>
                  <td>Lord of the mountains (Parvati's consort)</td>
                </tr>
                <tr>
                  <td>552</td>
                  <td>Surajaputra</td>
                  <td>Om Surajaputraya Namah</td>
                  <td>Son of the Sun</td>
                </tr>
                <tr>
                  <td>553</td>
                  <td>Vikramsur</td>
                  <td>Om Vikramsuraya Namah</td>
                  <td>Mighty lord</td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>Lokajiva</td>
                  <td>Om Lokajivaya Namah</td>
                  <td>The soul of the universe</td>
                </tr>
                <tr>
                  <td>555</td>
                  <td>Shrivinayaka</td>
                  <td>Om Shrivinayakaya Namah</td>
                  <td>Lord Ganesha with wealth and prosperity</td>
                </tr>
                <tr>
                  <td>556</td>
                  <td>Shubhamadhava</td>
                  <td>Om Shubhamadhavaya Namah</td>
                  <td>One who brings auspiciousness and prosperity</td>
                </tr>
                <tr>
                  <td>557</td>
                  <td>Acharyavandya</td>
                  <td>Om Acharyavandyaya Namah</td>
                  <td>Worthy of being worshipped by the guru</td>
                </tr>
                <tr>
                  <td>558</td>
                  <td>Ganapathiswara</td>
                  <td>Om Ganapathiswaraya Namah</td>
                  <td>Lord of all Ganeshas</td>
                </tr>
                <tr>
                  <td>559</td>
                  <td>Dhanvantarin</td>
                  <td>Om Dhanvantaraya Namah</td>
                  <td>Lord of health and healing</td>
                </tr>
                <tr>
                  <td>560</td>
                  <td>Sidhavatara</td>
                  <td>Om Sidhavatara Namah</td>
                  <td>The incarnation of Siddhi (perfection)</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td>Dakshadhara</td>
                  <td>Om Dakshadharaya Namah</td>
                  <td>The holder of the sacred thread (sacredness)</td>
                </tr>
                <tr>
                  <td>562</td>
                  <td>Suryaputra</td>
                  <td>Om Suryaputraya Namah</td>
                  <td>Son of the Sun</td>
                </tr>
                <tr>
                  <td>563</td>
                  <td>Kamalavakra</td>
                  <td>Om Kamalavakraya Namah</td>
                  <td>
                    One who has a lotus-like trunk (symbol of Lord Ganesha)
                  </td>
                </tr>
                <tr>
                  <td>564</td>
                  <td>Mangalapradip</td>
                  <td>Om Mangalapradipaya Namah</td>
                  <td>Light of auspiciousness</td>
                </tr>
                <tr>
                  <td>565</td>
                  <td>Kamalakshmi</td>
                  <td>Om Kamalakshmiyai Namah</td>
                  <td>Goddess of wealth and prosperity</td>
                </tr>
                <tr>
                  <td>566</td>
                  <td>Satyaketu</td>
                  <td>Om Satyaketum Namah</td>
                  <td>One with the banner of truth</td>
                </tr>
                <tr>
                  <td>567</td>
                  <td>Rudrakshetra</td>
                  <td>Om Rudrakshetray Namah</td>
                  <td>One who has the place of Rudra (Lord Shiva)</td>
                </tr>
                <tr>
                  <td>568</td>
                  <td>Lakshmiprasad</td>
                  <td>Om Lakshmiprasadaya Namah</td>
                  <td>Blessings of Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>569</td>
                  <td>Gajavaktra</td>
                  <td>Om Gajavaktraya Namah</td>
                  <td>Elephant-faced Lord</td>
                </tr>
                <tr>
                  <td>570</td>
                  <td>Brahmananda</td>
                  <td>Om Brahmanandaya Namah</td>
                  <td>The bliss of Brahman</td>
                </tr>
                <tr>
                  <td>571</td>
                  <td>Shaktikarma</td>
                  <td>Om Shaktikarmaya Namah</td>
                  <td>One who has powerful actions</td>
                </tr>
                <tr>
                  <td>572</td>
                  <td>Ganapatiyogi</td>
                  <td>Om Ganapatiyogaya Namah</td>
                  <td>Yogi who is devoted to Lord Ganesha</td>
                </tr>
                <tr>
                  <td>573</td>
                  <td>Bhayakari</td>
                  <td>Om Bhayakari Namah</td>
                  <td>One who is fierce, destroys fear</td>
                </tr>
                <tr>
                  <td>574</td>
                  <td>Parajayee</td>
                  <td>Om Parajayee Namah</td>
                  <td>One who brings victory over enemies</td>
                </tr>
                <tr>
                  <td>575</td>
                  <td>Ganaprasanna</td>
                  <td>Om Ganaprasannaya Namah</td>
                  <td>One who is pleased by the devotion of his devotees</td>
                </tr>
                <tr>
                  <td>576</td>
                  <td>Balaganesha</td>
                  <td>Om Balaganeshaya Namah</td>
                  <td>The child-like Ganesha</td>
                </tr>
                <tr>
                  <td>577</td>
                  <td>Rajeshwar</td>
                  <td>Om Rajeshwaraya Namah</td>
                  <td>Lord of the kings</td>
                </tr>
                <tr>
                  <td>578</td>
                  <td>Parambrahma</td>
                  <td>Om Parambrahmayan Namah</td>
                  <td>The Supreme Soul</td>
                </tr>
                <tr>
                  <td>579</td>
                  <td>Vidhata</td>
                  <td>Om Vidhataya Namah</td>
                  <td>The Creator, the one who writes fate</td>
                </tr>
                <tr>
                  <td>580</td>
                  <td>Rakshananda</td>
                  <td>Om Rakshanandaya Namah</td>
                  <td>One who brings protection and bliss</td>
                </tr>
                <tr>
                  <td>581</td>
                  <td>Vishwadham</td>
                  <td>Om Vishwadhamaya Namah</td>
                  <td>The ultimate realm of the universe</td>
                </tr>
                <tr>
                  <td>582</td>
                  <td>Balabhadra</td>
                  <td>Om Balabhradaya Namah</td>
                  <td>One with great strength</td>
                </tr>
                <tr>
                  <td>583</td>
                  <td>Mahadveshi</td>
                  <td>Om Mahadveshiyai Namah</td>
                  <td>One who is free of desires and attachments</td>
                </tr>
                <tr>
                  <td>584</td>
                  <td>Shubhamukhi</td>
                  <td>Om Shubhamukhiyai Namah</td>
                  <td>One with an auspicious face</td>
                </tr>
                <tr>
                  <td>585</td>
                  <td>Varnashree</td>
                  <td>Om Varnashreyi Namah</td>
                  <td>One who is of the highest qualities</td>
                </tr>
                <tr>
                  <td>586</td>
                  <td>Kalyanadisha</td>
                  <td>Om Kalyanadishaya Namah</td>
                  <td>One who brings blessings and prosperity</td>
                </tr>
                <tr>
                  <td>587</td>
                  <td>Gajakulendra</td>
                  <td>Om Gajakulendray Namah</td>
                  <td>Leader of the elephant tribe</td>
                </tr>
                <tr>
                  <td>588</td>
                  <td>Devapujita</td>
                  <td>Om Devapujitaya Namah</td>
                  <td>Worshiped by the Gods</td>
                </tr>
                <tr>
                  <td>589</td>
                  <td>Rukmini</td>
                  <td>Om Rukminiyai Namah</td>
                  <td>Goddess Rukmini, consort of Lord Krishna</td>
                </tr>
                <tr>
                  <td>590</td>
                  <td>Puranavidhya</td>
                  <td>Om Puranavidhyaya Namah</td>
                  <td>One who possesses ancient knowledge</td>
                </tr>
                <tr>
                  <td>591</td>
                  <td>Hasyapriya</td>
                  <td>Om Hasyapriyaya Namah</td>
                  <td>One who is fond of laughter</td>
                </tr>
                <tr>
                  <td>592</td>
                  <td>Ashramadhvaja</td>
                  <td>Om Ashramadhvajaya Namah</td>
                  <td>Flag of the ashram</td>
                </tr>
                <tr>
                  <td>593</td>
                  <td>Ganapathiraja</td>
                  <td>Om Ganapathirajaya Namah</td>
                  <td>King of all Ganas (Lord Ganesha's supremacy)</td>
                </tr>
                <tr>
                  <td>594</td>
                  <td>Brahmapujita</td>
                  <td>Om Brahmapujitaya Namah</td>
                  <td>Worshipped by Lord Brahma</td>
                </tr>
                <tr>
                  <td>595</td>
                  <td>Vishwadhara</td>
                  <td>Om Vishwadharaya Namah</td>
                  <td>Supporter of the universe</td>
                </tr>
                <tr>
                  <td>596</td>
                  <td>Narayanamurti</td>
                  <td>Om Narayanamurti Namah</td>
                  <td>The form of Lord Narayana</td>
                </tr>
                <tr>
                  <td>597</td>
                  <td>Surarajendra</td>
                  <td>Om Surarajendray Namah</td>
                  <td>King of the Devas</td>
                </tr>
                <tr>
                  <td>598</td>
                  <td>Adiraksha</td>
                  <td>Om Adirakshaya Namah</td>
                  <td>Protector of the devotees</td>
                </tr>
                <tr>
                  <td>599</td>
                  <td>Mantradhara</td>
                  <td>Om Mantradharaya Namah</td>
                  <td>Holder of mantras</td>
                </tr>
                <tr>
                  <td>600</td>
                  <td>Krutajna</td>
                  <td>Om Krutajnaaya Namah</td>
                  <td>One who is grateful</td>
                </tr>
                <tr>
                  <td>601</td>
                  <td>Prashantadhara</td>
                  <td>Om Prashantadharaya Namah</td>
                  <td>Holder of peaceful energy</td>
                </tr>
                <tr>
                  <td>602</td>
                  <td>Bhagavathy</td>
                  <td>Om Bhagavathyai Namah</td>
                  <td>Goddess, associated with the divine or divine energy</td>
                </tr>
                <tr>
                  <td>603</td>
                  <td>Saraswatiprasad</td>
                  <td>Om Saraswatiprasadaya Namah</td>
                  <td>Blessed by Goddess Saraswati (goddess of knowledge)</td>
                </tr>
                <tr>
                  <td>604</td>
                  <td>Gajendrahar</td>
                  <td>Om Gajendraharaya Namah</td>
                  <td>One who rescued Gajendra (the elephant king)</td>
                </tr>
                <tr>
                  <td>605</td>
                  <td>Lokapriya</td>
                  <td>Om Lokapriyaya Namah</td>
                  <td>One who is beloved by the world</td>
                </tr>
                <tr>
                  <td>606</td>
                  <td>Mahabuddhi</td>
                  <td>Om Mahabuddhaye Namah</td>
                  <td>Great intellect or wisdom</td>
                </tr>
                <tr>
                  <td>607</td>
                  <td>Divyaganesh</td>
                  <td>Om Divyaganeshaya Namah</td>
                  <td>Divine Ganesha, one with divine blessings</td>
                </tr>
                <tr>
                  <td>608</td>
                  <td>Bhagwatishwar</td>
                  <td>Om Bhagwatishwaraya Namah</td>
                  <td>Lord of the Bhagavata (divine scripture)</td>
                </tr>
                <tr>
                  <td>609</td>
                  <td>Ganapathihar</td>
                  <td>Om Ganapathiharaya Namah</td>
                  <td>One who removes obstacles</td>
                </tr>
                <tr>
                  <td>610</td>
                  <td>Bhavyakarya</td>
                  <td>Om Bhavyakaryaya Namah</td>
                  <td>One who undertakes great actions</td>
                </tr>
                <tr>
                  <td>611</td>
                  <td>Vasudevapriya</td>
                  <td>Om Vasudevapriya Namah</td>
                  <td>
                    One who is dear to Lord Vasudeva (another name for Krishna)
                  </td>
                </tr>
                <tr>
                  <td>612</td>
                  <td>Shreyas</td>
                  <td>Om Shreyas Namah</td>
                  <td>One who brings prosperity or auspiciousness</td>
                </tr>
                <tr>
                  <td>613</td>
                  <td>Surapriya</td>
                  <td>Om Surapriyaya Namah</td>
                  <td>One who is beloved by the Devas</td>
                </tr>
                <tr>
                  <td>614</td>
                  <td>Shantananda</td>
                  <td>Om Shantanandaya Namah</td>
                  <td>One who brings eternal bliss</td>
                </tr>
                <tr>
                  <td>615</td>
                  <td>Rudrasuta</td>
                  <td>Om Rudrasutaya Namah</td>
                  <td>Son of Rudra (another name for Lord Shiva)</td>
                </tr>
                <tr>
                  <td>616</td>
                  <td>Yogadhipa</td>
                  <td>Om Yogadhipaya Namah</td>
                  <td>Lord of Yoga</td>
                </tr>
                <tr>
                  <td>617</td>
                  <td>Agnivakra</td>
                  <td>Om Agnivakra Namah</td>
                  <td>One who has the fiery energy</td>
                </tr>
                <tr>
                  <td>618</td>
                  <td>Ganeshashakti</td>
                  <td>Om Ganeshashakti Namah</td>
                  <td>The power of Lord Ganesha</td>
                </tr>
                <tr>
                  <td>619</td>
                  <td>Mahaveda</td>
                  <td>Om Mahaveda Namah</td>
                  <td>The supreme knowledge</td>
                </tr>
                <tr>
                  <td>620</td>
                  <td>Vighnaaripa</td>
                  <td>Om Vighnaaripaya Namah</td>
                  <td>One who destroys obstacles</td>
                </tr>
                <tr>
                  <td>621</td>
                  <td>Mahendrasuta</td>
                  <td>Om Mahendrasutaya Namah</td>
                  <td>Son of Mahendra (Lord Indra)</td>
                </tr>
                <tr>
                  <td>622</td>
                  <td>Sreeganeshwara</td>
                  <td>Om Sreeganeshwara Namah</td>
                  <td>Lord Ganesha, the deity of prosperity</td>
                </tr>
                <tr>
                  <td>623</td>
                  <td>Mahavishnu</td>
                  <td>Om Mahavishnu Namah</td>
                  <td>The supreme Lord Vishnu</td>
                </tr>
                <tr>
                  <td>624</td>
                  <td>Vaishnavapriya</td>
                  <td>Om Vaishnavapriya Namah</td>
                  <td>One who is dear to Lord Vishnu</td>
                </tr>
                <tr>
                  <td>625</td>
                  <td>Ganaraja</td>
                  <td>Om Ganarajaya Namah</td>
                  <td>King of Ganas (Lord Ganesha)</td>
                </tr>
                <tr>
                  <td>626</td>
                  <td>Dakshaputra</td>
                  <td>Om Dakshaputraya Namah</td>
                  <td>Son of Daksha</td>
                </tr>
                <tr>
                  <td>627</td>
                  <td>Vighnanaayaka</td>
                  <td>Om Vighnanaayakaya Namah</td>
                  <td>Leader of all obstacles</td>
                </tr>
                <tr>
                  <td>628</td>
                  <td>Ganadhipati</td>
                  <td>Om Ganadhipataye Namah</td>
                  <td>Lord of the Ganas (Ganesha's leadership)</td>
                </tr>
                <tr>
                  <td>629</td>
                  <td>Karmapalaka</td>
                  <td>Om Karmapalakaya Namah</td>
                  <td>One who governs the actions of the world</td>
                </tr>
                <tr>
                  <td>630</td>
                  <td>Satvavighna</td>
                  <td>Om Satvavighnaya Namah</td>
                  <td>Destroyer of all obstacles with pure goodness</td>
                </tr>
                <tr>
                  <td>631</td>
                  <td>Satyansh</td>
                  <td>Om Satyanshaya Namah</td>
                  <td>Part of the truth, truth's essence</td>
                </tr>
                <tr>
                  <td>632</td>
                  <td>Jaganmatha</td>
                  <td>Om Jaganmathaye Namah</td>
                  <td>Mother of the universe</td>
                </tr>
                <tr>
                  <td>633</td>
                  <td>Dattavighna</td>
                  <td>Om Dattavighnaya Namah</td>
                  <td>One who removes obstacles associated with knowledge</td>
                </tr>
                <tr>
                  <td>634</td>
                  <td>Sriganapathi</td>
                  <td>Om Sriganapathaye Namah</td>
                  <td>Lord Ganesha, the divine leader</td>
                </tr>
                <tr>
                  <td>635</td>
                  <td>Panchavakra</td>
                  <td>Om Panchavakray Namah</td>
                  <td>
                    One with five faces (symbolizing multi-dimensional nature)
                  </td>
                </tr>
                <tr>
                  <td>636</td>
                  <td>Devavandita</td>
                  <td>Om Devavanditaya Namah</td>
                  <td>Worshipped by the Devas</td>
                </tr>
                <tr>
                  <td>637</td>
                  <td>Vishwavasu</td>
                  <td>Om Vishwavasu Namah</td>
                  <td>One who is revered by the entire world</td>
                </tr>
                <tr>
                  <td>638</td>
                  <td>Shriraksha</td>
                  <td>Om Shriraksha Namah</td>
                  <td>Divine protection</td>
                </tr>
                <tr>
                  <td>639</td>
                  <td>Ganeshanayaka</td>
                  <td>Om Ganeshanayakaya Namah</td>
                  <td>Leader of Ganesha</td>
                </tr>
                <tr>
                  <td>640</td>
                  <td>Shreemannarayana</td>
                  <td>Om Shreemannarayana Namah</td>
                  <td>Lord Narayana, the supreme deity</td>
                </tr>
                <tr>
                  <td>641</td>
                  <td>Pratyaksha</td>
                  <td>Om Pratyakshaya Namah</td>
                  <td>One who is directly perceivable</td>
                </tr>
                <tr>
                  <td>642</td>
                  <td>Gajewara</td>
                  <td>Om Gajewaraya Namah</td>
                  <td>One who protects like an elephant</td>
                </tr>
                <tr>
                  <td>643</td>
                  <td>Siddhimantra</td>
                  <td>Om Siddhimantraya Namah</td>
                  <td>Holder of perfect mantras</td>
                </tr>
                <tr>
                  <td>644</td>
                  <td>Panchayajna</td>
                  <td>Om Panchayajna Namah</td>
                  <td>Performer of the five sacrifices</td>
                </tr>
                <tr>
                  <td>645</td>
                  <td>Vidyakaraka</td>
                  <td>Om Vidyakarakaya Namah</td>
                  <td>The giver of knowledge</td>
                </tr>
                <tr>
                  <td>646</td>
                  <td>Suprabhata</td>
                  <td>Om Suprabhata Namah</td>
                  <td>Auspicious morning, one who is worshipped at dawn</td>
                </tr>
                <tr>
                  <td>647</td>
                  <td>Manmatya</td>
                  <td>Om Manmatyaya Namah</td>
                  <td>One who captivates the mind</td>
                </tr>
                <tr>
                  <td>648</td>
                  <td>Vighnakarta</td>
                  <td>Om Vighnakartaya Namah</td>
                  <td>One who causes obstacles to be removed</td>
                </tr>
                <tr>
                  <td>649</td>
                  <td>Shaktipriya</td>
                  <td>Om Shaktipriyaya Namah</td>
                  <td>One who is dear to Shakti (divine power)</td>
                </tr>
                <tr>
                  <td>650</td>
                  <td>Vishvapujita</td>
                  <td>Om Vishvapujitaya Namah</td>
                  <td>Worshipped by the entire world</td>
                </tr>
                <tr>
                  <td>651</td>
                  <td>Gajavighna</td>
                  <td>Om Gajavighnaya Namah</td>
                  <td>One who removes obstacles like the elephant</td>
                </tr>
                <tr>
                  <td>652</td>
                  <td>Mahamudra</td>
                  <td>Om Mahamudraya Namah</td>
                  <td>Great symbol or cosmic sign</td>
                </tr>
                <tr>
                  <td>653</td>
                  <td>Baladev</td>
                  <td>Om Baladevaya Namah</td>
                  <td>Lord Balarama, the elder brother of Krishna</td>
                </tr>
                <tr>
                  <td>654</td>
                  <td>Shubhamani</td>
                  <td>Om Shubhamaniya Namah</td>
                  <td>One who brings auspiciousness</td>
                </tr>
                <tr>
                  <td>655</td>
                  <td>Jagadvandita</td>
                  <td>Om Jagadvanditaya Namah</td>
                  <td>Worshipped by the universe</td>
                </tr>
                <tr>
                  <td>656</td>
                  <td>Gyanavardhana</td>
                  <td>Om Gyanavardhanaya Namah</td>
                  <td>One who enhances knowledge</td>
                </tr>
                <tr>
                  <td>657</td>
                  <td>Ekadantavata</td>
                  <td>Om Ekadantavata Namah</td>
                  <td>One with a single tusk</td>
                </tr>
                <tr>
                  <td>658</td>
                  <td>Kamadhenu</td>
                  <td>Om Kamadhenu Namah</td>
                  <td>A divine cow that fulfills all desires</td>
                </tr>
                <tr>
                  <td>659</td>
                  <td>Sadhvashakti</td>
                  <td>Om Sadhvashakti Namah</td>
                  <td>The power of purity</td>
                </tr>
                <tr>
                  <td>660</td>
                  <td>Adhyatma</td>
                  <td>Om Adhyatmavandaya Namah</td>
                  <td>Spiritual knowledge or realization</td>
                </tr>
                <tr>
                  <td>661</td>
                  <td>Divyaketu</td>
                  <td>Om Divyaketu Namah</td>
                  <td>Divine flag, symbol of celestial victory</td>
                </tr>
                <tr>
                  <td>662</td>
                  <td>Mangalavihari</td>
                  <td>Om Mangalaviharaya Namah</td>
                  <td>One who brings auspiciousness and removes obstacles</td>
                </tr>
                <tr>
                  <td>663</td>
                  <td>Jagadgururaj</td>
                  <td>Om Jagadgururajaya Namah</td>
                  <td>King of the world’s teachers (spiritual teacher)</td>
                </tr>
                <tr>
                  <td>664</td>
                  <td>Shubhakala</td>
                  <td>Om Shubhakalaya Namah</td>
                  <td>One who brings auspicious time</td>
                </tr>
                <tr>
                  <td>665</td>
                  <td>Akruti</td>
                  <td>Om Akruti Namah</td>
                  <td>Shape, form</td>
                </tr>
                <tr>
                  <td>666</td>
                  <td>Ganapathisree</td>
                  <td>Om Ganapathisree Namah</td>
                  <td>The wealth and prosperity of Lord Ganesha</td>
                </tr>
                <tr>
                  <td>667</td>
                  <td>Mahakundalini</td>
                  <td>Om Mahakundalini Namah</td>
                  <td>The great cosmic energy</td>
                </tr>
                <tr>
                  <td>668</td>
                  <td>Laxminarayana</td>
                  <td>Om Laxminarayanaya Namah</td>
                  <td>Lord Vishnu with Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>669</td>
                  <td>Ganeshaveda</td>
                  <td>Om Ganeshavedaya Namah</td>
                  <td>Ganesha as the embodiment of Vedic knowledge</td>
                </tr>
                <tr>
                  <td>670</td>
                  <td>Shrutisamudra</td>
                  <td>Om Shrutisamudraya Namah</td>
                  <td>The ocean of sacred knowledge</td>
                </tr>
                <tr>
                  <td>671</td>
                  <td>Lakshmiashraya</td>
                  <td>Om Lakshmiashraya Namah</td>
                  <td>Shelter of Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>672</td>
                  <td>Siddhartheshwar</td>
                  <td>Om Siddhartheshwara Namah</td>
                  <td>Lord of spiritual accomplishment</td>
                </tr>
                <tr>
                  <td>673</td>
                  <td>Vasantanayana</td>
                  <td>Om Vasantanayanaya Namah</td>
                  <td>One who resides in the spring season</td>
                </tr>
                <tr>
                  <td>674</td>
                  <td>Vighnasvarupa</td>
                  <td>Om Vighnasvarupaya Namah</td>
                  <td>The form of obstacles</td>
                </tr>
                <tr>
                  <td>675</td>
                  <td>Parvataraja</td>
                  <td>Om Parvatarajaya Namah</td>
                  <td>King of mountains (Lord Ganesha)</td>
                </tr>
                <tr>
                  <td>676</td>
                  <td>Samudravati</td>
                  <td>Om Samudravataya Namah</td>
                  <td>One who is associated with the ocean</td>
                </tr>
                <tr>
                  <td>677</td>
                  <td>Satyavada</td>
                  <td>Om Satyavaday Namah</td>
                  <td>One who speaks the truth</td>
                </tr>
                <tr>
                  <td>678</td>
                  <td>Kamadheenu</td>
                  <td>Om Kamadhenu Namah</td>
                  <td>The wish-fulfilling divine cow</td>
                </tr>
                <tr>
                  <td>679</td>
                  <td>Anantavighna</td>
                  <td>Om Anantavighnaya Namah</td>
                  <td>One who removes infinite obstacles</td>
                </tr>
                <tr>
                  <td>680</td>
                  <td>Annamaya</td>
                  <td>Om Annamayaya Namah</td>
                  <td>One who is made of food or sustenance</td>
                </tr>
                <tr>
                  <td>681</td>
                  <td>Gunavardhana</td>
                  <td>Om Gunavardhanaya Namah</td>
                  <td>One who enhances virtues</td>
                </tr>
                <tr>
                  <td>682</td>
                  <td>Vidhayaka</td>
                  <td>Om Vidhayakaya Namah</td>
                  <td>One who creates or shapes</td>
                </tr>
                <tr>
                  <td>683</td>
                  <td>Surashakti</td>
                  <td>Om Surashakti Namah</td>
                  <td>Power of the Devas</td>
                </tr>
                <tr>
                  <td>684</td>
                  <td>Ganeshtattva</td>
                  <td>Om Ganeshtattvaya Namah</td>
                  <td>The essence of Lord Ganesha</td>
                </tr>
                <tr>
                  <td>685</td>
                  <td>Shubhakarana</td>
                  <td>Om Shubhakarana Namah</td>
                  <td>One who brings auspicious beginnings</td>
                </tr>
                <tr>
                  <td>686</td>
                  <td>Swargadeep</td>
                  <td>Om Swargadeepaya Namah</td>
                  <td>The light or lamp of heaven</td>
                </tr>
                <tr>
                  <td>687</td>
                  <td>Laxmanapriya</td>
                  <td>Om Laxmanapriya Namah</td>
                  <td>Beloved of Lord Lakshmana (brother of Lord Rama)</td>
                </tr>
                <tr>
                  <td>688</td>
                  <td>Jayanthakara</td>
                  <td>Om Jayanthakaraya Namah</td>
                  <td>Creator of victory</td>
                </tr>
                <tr>
                  <td>689</td>
                  <td>Vairagya</td>
                  <td>Om Vairagyaya Namah</td>
                  <td>Renunciation or detachment</td>
                </tr>
                <tr>
                  <td>690</td>
                  <td>Bhavapriya</td>
                  <td>Om Bhavapriya Namah</td>
                  <td>One who is dear to the world of emotions</td>
                </tr>
                <tr>
                  <td>691</td>
                  <td>Raksaka</td>
                  <td>Om Rakshaka Namah</td>
                  <td>The protector</td>
                </tr>
                <tr>
                  <td>692</td>
                  <td>Bhavajaya</td>
                  <td>Om Bhavajaya Namah</td>
                  <td>One who conquers the mind's moods</td>
                </tr>
                <tr>
                  <td>693</td>
                  <td>Padmasundara</td>
                  <td>Om Padmasundaraya Namah</td>
                  <td>Beautiful as a lotus</td>
                </tr>
                <tr>
                  <td>694</td>
                  <td>Rudravadhana</td>
                  <td>Om Rudravadhi Namah</td>
                  <td>One who holds the Rudra (Shiva) form</td>
                </tr>
                <tr>
                  <td>695</td>
                  <td>Bhaktavatsala</td>
                  <td>Om Bhaktavatsalaya Namah</td>
                  <td>The one who is kind to devotees</td>
                </tr>
                <tr>
                  <td>696</td>
                  <td>Ganapathinayanaka</td>
                  <td>Om Ganapathinayakaya Namah</td>
                  <td>Leader of the Ganas (Lord Ganesha’s devotees)</td>
                </tr>
                <tr>
                  <td>697</td>
                  <td>Vinayakacharan</td>
                  <td>Om Vinayakacharanaya Namah</td>
                  <td>One who has the feet of Lord Vinayaka (Ganesha)</td>
                </tr>
                <tr>
                  <td>698</td>
                  <td>Tripurari</td>
                  <td>Om Tripurari Namah</td>
                  <td>Destroyer of the three worlds (a name of Lord Shiva)</td>
                </tr>
                <tr>
                  <td>699</td>
                  <td>Shubhravaktra</td>
                  <td>Om Shubhravaktraya Namah</td>
                  <td>One who has a pure and brilliant tusk</td>
                </tr>
                <tr>
                  <td>700</td>
                  <td>Sukhabhojan</td>
                  <td>Om Sukhabhojanaya Namah</td>
                  <td>One who provides delightful food</td>
                </tr>
                <tr>
                  <td>701</td>
                  <td>Jagadvandan</td>
                  <td>Om Jagadvandana Namah</td>
                  <td>Worshipped by the entire world</td>
                </tr>
                <tr>
                  <td>702</td>
                  <td>Chintanashree</td>
                  <td>Om Chintanashree Namah</td>
                  <td>Goddess who brings peace of mind</td>
                </tr>
                <tr>
                  <td>703</td>
                  <td>Mahabrahman</td>
                  <td>Om Mahabrahmana Namah</td>
                  <td>The great soul or supreme being</td>
                </tr>
                <tr>
                  <td>704</td>
                  <td>Sukritapada</td>
                  <td>Om Sukritapada Namah</td>
                  <td>One who has a noble path</td>
                </tr>
                <tr>
                  <td>705</td>
                  <td>Ujjwala</td>
                  <td>Om Ujjwala Namah</td>
                  <td>One who shines brightly</td>
                </tr>
                <tr>
                  <td>706</td>
                  <td>Nityavighna</td>
                  <td>Om Nityavighna Namah</td>
                  <td>One who is the eternal remover of obstacles</td>
                </tr>
                <tr>
                  <td>707</td>
                  <td>Ganapatiyasya</td>
                  <td>Om Ganapatiyasya Namah</td>
                  <td>The one belonging to Lord Ganesha</td>
                </tr>
                <tr>
                  <td>708</td>
                  <td>Manohar</td>
                  <td>Om Manohara Namah</td>
                  <td>One who is charming and enchanting</td>
                </tr>
                <tr>
                  <td>709</td>
                  <td>Tripuravandita</td>
                  <td>Om Tripuravandita Namah</td>
                  <td>Worshipped by the three worlds (a name of Lord Shiva)</td>
                </tr>
                <tr>
                  <td>710</td>
                  <td>Lokachudamani</td>
                  <td>Om Lokachudamani Namah</td>
                  <td>Jewel of the world, one who is revered by all</td>
                </tr>
                <tr>
                  <td>711</td>
                  <td>Raghunatha</td>
                  <td>Om Raghunathaya Namah</td>
                  <td>Lord Rama (descendant of the Raghu dynasty)</td>
                </tr>
                <tr>
                  <td>712</td>
                  <td>Kamalendrapriya</td>
                  <td>Om Kamalendrapriya Namah</td>
                  <td>Beloved of Lord Kamalendra (another name for Vishnu)</td>
                </tr>
                <tr>
                  <td>713</td>
                  <td>Shankarapriya</td>
                  <td>Om Shankarapriya Namah</td>
                  <td>Beloved of Lord Shiva (Shankara)</td>
                </tr>
                <tr>
                  <td>714</td>
                  <td>Vighnanivara</td>
                  <td>Om Vighnanivara Namah</td>
                  <td>One who removes all obstacles</td>
                </tr>
                <tr>
                  <td>715</td>
                  <td>Mahaganapathi</td>
                  <td>Om Mahaganapathaye Namah</td>
                  <td>Great Lord Ganesha</td>
                </tr>
                <tr>
                  <td>716</td>
                  <td>Yogalakshmi</td>
                  <td>Om Yogalakshmaye Namah</td>
                  <td>
                    Goddess Lakshmi, associated with yoga and spiritual wealth
                  </td>
                </tr>
                <tr>
                  <td>717</td>
                  <td>Sumukhavakra</td>
                  <td>Om Sumukhavakra Namah</td>
                  <td>One with an auspicious face</td>
                </tr>
                <tr>
                  <td>718</td>
                  <td>Karmani</td>
                  <td>Om Karmanaye Namah</td>
                  <td>One who is the doer of all actions</td>
                </tr>
                <tr>
                  <td>719</td>
                  <td>Gunayogya</td>
                  <td>Om Gunayogyaya Namah</td>
                  <td>One who is worthy of virtues</td>
                </tr>
                <tr>
                  <td>720</td>
                  <td>Tripuravijaya</td>
                  <td>Om Tripuravijaya Namah</td>
                  <td>Victorious in the three worlds (a name of Lord Shiva)</td>
                </tr>
                <tr>
                  <td>721</td>
                  <td>Sarasvatiprada</td>
                  <td>Om Sarasvatiprada Namah</td>
                  <td>
                    Bestower of knowledge (associated with Goddess Saraswati)
                  </td>
                </tr>
                <tr>
                  <td>722</td>
                  <td>Dakshina Ganesh</td>
                  <td>Om Dakshina Ganeshaya Namah</td>
                  <td>Ganesha of the South direction</td>
                </tr>
                <tr>
                  <td>723</td>
                  <td>Durvasa</td>
                  <td>Om Durvasaya Namah</td>
                  <td>Sage Durvasa, known for his anger and blessings</td>
                </tr>
                <tr>
                  <td>724</td>
                  <td>Kamalasana</td>
                  <td>Om Kamalasana Namah</td>
                  <td>One who sits on a lotus, a name of Lord Vishnu</td>
                </tr>
                <tr>
                  <td>725</td>
                  <td>Rajyadhiswara</td>
                  <td>Om Rajyadhiswaraya Namah</td>
                  <td>Lord of the kingdom</td>
                </tr>
                <tr>
                  <td>726</td>
                  <td>Vijayanayana</td>
                  <td>Om Vijayanayanaya Namah</td>
                  <td>One with the victorious eyes</td>
                </tr>
                <tr>
                  <td>727</td>
                  <td>Sumukhi</td>
                  <td>Om Sumukhye Namah</td>
                  <td>One who has a pleasant face</td>
                </tr>
                <tr>
                  <td>728</td>
                  <td>Vishwanayaka</td>
                  <td>Om Vishwanayakaya Namah</td>
                  <td>Lord of the world (referring to Ganesha)</td>
                </tr>
                <tr>
                  <td>729</td>
                  <td>Sankatrana</td>
                  <td>Om Sankatrana Namah</td>
                  <td>One who saves from troubles</td>
                </tr>
                <tr>
                  <td>730</td>
                  <td>Paramtattva</td>
                  <td>Om Paramtattvaya Namah</td>
                  <td>The supreme reality</td>
                </tr>
                <tr>
                  <td>731</td>
                  <td>Ananyaprasada</td>
                  <td>Om Ananyaprasadaya Namah</td>
                  <td>Bestower of unparalleled grace</td>
                </tr>
                <tr>
                  <td>732</td>
                  <td>Ganeshaksha</td>
                  <td>Om Ganeshaksha Namah</td>
                  <td>Protector in the form of Ganesha</td>
                </tr>
                <tr>
                  <td>733</td>
                  <td>Chaturvedi</td>
                  <td>Om Chaturvedi Namah</td>
                  <td>One who knows the four Vedas</td>
                </tr>
                <tr>
                  <td>734</td>
                  <td>Sankranti</td>
                  <td>Om Sankranti Namah</td>
                  <td>The change of seasons or transition</td>
                </tr>
                <tr>
                  <td>735</td>
                  <td>Karagavan</td>
                  <td>Om Karagavan Namah</td>
                  <td>One who lives in the palm of the hand</td>
                </tr>
                <tr>
                  <td>736</td>
                  <td>Ganakrit</td>
                  <td>Om Ganakritaya Namah</td>
                  <td>Creator of Ganas</td>
                </tr>
                <tr>
                  <td>737</td>
                  <td>Rishisweta</td>
                  <td>Om Rishiswetaya Namah</td>
                  <td>One who is associated with the great sages</td>
                </tr>
                <tr>
                  <td>738</td>
                  <td>Mantrasiddhi</td>
                  <td>Om Mantrasiddhi Namah</td>
                  <td>One who has mastery over mantras</td>
                </tr>
                <tr>
                  <td>739</td>
                  <td>Ganeshavatar</td>
                  <td>Om Ganeshavatar Namah</td>
                  <td>The divine incarnation of Ganesha</td>
                </tr>
                <tr>
                  <td>740</td>
                  <td>Shrinivasa</td>
                  <td>Om Shrinivasaya Namah</td>
                  <td>Lord Vishnu, the eternal consort of Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>741</td>
                  <td>Durgadaya</td>
                  <td>Om Durgadaya Namah</td>
                  <td>One who is the giver of Durga's blessings</td>
                </tr>
                <tr>
                  <td>742</td>
                  <td>Vyapti</td>
                  <td>Om Vyaptaya Namah</td>
                  <td>One who pervades all, omnipresent</td>
                </tr>
                <tr>
                  <td>743</td>
                  <td>Paramapujya</td>
                  <td>Om Paramapujya Namah</td>
                  <td>One who is supremely worshipped</td>
                </tr>
                <tr>
                  <td>744</td>
                  <td>Ganachuda</td>
                  <td>Om Ganachudaya Namah</td>
                  <td>One who is the crown of all Ganas</td>
                </tr>
                <tr>
                  <td>745</td>
                  <td>Suryaditya</td>
                  <td>Om Suryaditya Namah</td>
                  <td>The radiant sun</td>
                </tr>
                <tr>
                  <td>746</td>
                  <td>Mahakaladhara</td>
                  <td>Om Mahakaladhara Namah</td>
                  <td>One who holds the great time (Lord Shiva)</td>
                </tr>
                <tr>
                  <td>747</td>
                  <td>Chidganesh</td>
                  <td>Om Chidganesha Namah</td>
                  <td>The Ganesha who is consciousness</td>
                </tr>
                <tr>
                  <td>748</td>
                  <td>Gajendrajaya</td>
                  <td>Om Gajendrajaya Namah</td>
                  <td>Victor over the elephant king (Gajendra)</td>
                </tr>
                <tr>
                  <td>749</td>
                  <td>Sharvani</td>
                  <td>Om Sharvani Namah</td>
                  <td>Goddess Durga or the universal energy</td>
                </tr>
                <tr>
                  <td>750</td>
                  <td>Vathapada</td>
                  <td>Om Vathapada Namah</td>
                  <td>The one who holds the earth beneath his feet</td>
                </tr>
                <tr>
                  <td>751</td>
                  <td>Virendra</td>
                  <td>Om Virendra Namah</td>
                  <td>Heroic or the supreme of heroes</td>
                </tr>
                <tr>
                  <td>752</td>
                  <td>Mahavishvakarma</td>
                  <td>Om Mahavishvakarmaya Namah</td>
                  <td>The great architect of the universe</td>
                </tr>
                <tr>
                  <td>753</td>
                  <td>Bhavanjaya</td>
                  <td>Om Bhavanjaya Namah</td>
                  <td>One who conquers the world of emotions</td>
                </tr>
                <tr>
                  <td>754</td>
                  <td>Suryaputra</td>
                  <td>Om Suryaputraya Namah</td>
                  <td>Son of the sun (referring to Lord Ganesha)</td>
                </tr>
                <tr>
                  <td>755</td>
                  <td>Rukminishvara</td>
                  <td>Om Rukminishvara Namah</td>
                  <td>Lord Rukmini’s supreme form, related to Lord Krishna</td>
                </tr>
                <tr>
                  <td>756</td>
                  <td>Shubhananda</td>
                  <td>Om Shubhananda Namah</td>
                  <td>One who brings auspicious joy</td>
                </tr>
                <tr>
                  <td>757</td>
                  <td>Durvasa</td>
                  <td>Om Durvasaya Namah</td>
                  <td>The sage Durvasa known for both blessings and curses</td>
                </tr>
                <tr>
                  <td>758</td>
                  <td>Ganapal</td>
                  <td>Om Ganapala Namah</td>
                  <td>Protector and leader of the Ganas</td>
                </tr>
                <tr>
                  <td>759</td>
                  <td>Vinayakendra</td>
                  <td>Om Vinayakendra Namah</td>
                  <td>Center of Lord Vinayaka</td>
                </tr>
                <tr>
                  <td>760</td>
                  <td>Vyagravahana</td>
                  <td>Om Vyagravahanaya Namah</td>
                  <td>One who rides the tiger or lion</td>
                </tr>
                <tr>
                  <td>761</td>
                  <td>Chandrajyoti</td>
                  <td>Om Chandrajyoti Namah</td>
                  <td>Light of the moon</td>
                </tr>
                <tr>
                  <td>762</td>
                  <td>Yathakarya</td>
                  <td>Om Yathakarya Namah</td>
                  <td>One who fulfills all undertakings</td>
                </tr>
                <tr>
                  <td>763</td>
                  <td>Bhaktavighna</td>
                  <td>Om Bhaktavighna Namah</td>
                  <td>One who removes obstacles for devotees</td>
                </tr>
                <tr>
                  <td>764</td>
                  <td>Ganapadma</td>
                  <td>Om Ganapadma Namah</td>
                  <td>One who is like the lotus of Ganesha</td>
                </tr>
                <tr>
                  <td>765</td>
                  <td>Rajadhiraja</td>
                  <td>Om Rajadhirajaya Namah</td>
                  <td>King of kings</td>
                </tr>
                <tr>
                  <td>766</td>
                  <td>Mahabuddhi</td>
                  <td>Om Mahabuddhaye Namah</td>
                  <td>Great intellect or wisdom</td>
                </tr>
                <tr>
                  <td>767</td>
                  <td>Rajivaksha</td>
                  <td>Om Rajivaksha Namah</td>
                  <td>One with a lotus-shaped eye</td>
                </tr>
                <tr>
                  <td>768</td>
                  <td>Lakshminarayana</td>
                  <td>Om Lakshminarayanaya Namah</td>
                  <td>Lord Vishnu with Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>769</td>
                  <td>Gajapuran</td>
                  <td>Om Gajapurana Namah</td>
                  <td>A name of Lord Ganesha related to Gajendra’s story</td>
                </tr>
                <tr>
                  <td>770</td>
                  <td>Siddhivara</td>
                  <td>Om Siddhivara Namah</td>
                  <td>Giver of perfection or accomplishment</td>
                </tr>
                <tr>
                  <td>771</td>
                  <td>Bhattaraka</td>
                  <td>Om Bhattaraka Namah</td>
                  <td>Lord of the community of Brahmins</td>
                </tr>
                <tr>
                  <td>772</td>
                  <td>Mahakarma</td>
                  <td>Om Mahakarma Namah</td>
                  <td>One who performs great deeds</td>
                </tr>
                <tr>
                  <td>773</td>
                  <td>Chandrachuda</td>
                  <td>Om Chandrachudaya Namah</td>
                  <td>One who has the moon-like crown</td>
                </tr>
                <tr>
                  <td>774</td>
                  <td>Indradwaja</td>
                  <td>Om Indradwajaya Namah</td>
                  <td>The flag of Indra</td>
                </tr>
                <tr>
                  <td>775</td>
                  <td>Sahastradhara</td>
                  <td>Om Sahastradhara Namah</td>
                  <td>One who holds thousands of streams (of power)</td>
                </tr>
                <tr>
                  <td>776</td>
                  <td>Prashantha</td>
                  <td>Om Prashantha Namah</td>
                  <td>The one who is at peace</td>
                </tr>
                <tr>
                  <td>777</td>
                  <td>Laxmi Ganesh</td>
                  <td>Om Laxmi Ganeshaya Namah</td>
                  <td>Ganesha associated with Goddess Lakshmi</td>
                </tr>
                <tr>
                  <td>778</td>
                  <td>Sarvadevan</td>
                  <td>Om Sarvadevaya Namah</td>
                  <td>One who is revered by all the Devas</td>
                </tr>
                <tr>
                  <td>779</td>
                  <td>Vatsalganesh</td>
                  <td>Om Vatsalganeshaya Namah</td>
                  <td>
                    Ganesha, the one who is affectionate like a father to his
                    devotees
                  </td>
                </tr>
                <tr>
                  <td>780</td>
                  <td>Bhagvansh</td>
                  <td>Om Bhagvanshaya Namah</td>
                  <td>The divine part of the Lord</td>
                </tr>
                <tr>
                  <td>781</td>
                  <td>Kumudapriya</td>
                  <td>Om Kumudapriya Namah</td>
                  <td>
                    One who is loved by the lotus (symbolizing beauty and
                    purity)
                  </td>
                </tr>
                <tr>
                  <td>782</td>
                  <td>Purushaputra</td>
                  <td>Om Purushaputraya Namah</td>
                  <td>Son of the eternal spirit (Lord Vishnu or Shiva)</td>
                </tr>
                <tr>
                  <td>783</td>
                  <td>Swatantra</td>
                  <td>Om Swatantra Namah</td>
                  <td>Independent, free-willed</td>
                </tr>
                <tr>
                  <td>784</td>
                  <td>Radhavallabha</td>
                  <td>Om Radhavallabhaya Namah</td>
                  <td>The beloved of Goddess Radha (Lord Krishna)</td>
                </tr>
                <tr>
                  <td>785</td>
                  <td>Mahaveer</td>
                  <td>Om Mahaveera Namah</td>
                  <td>The great warrior (a name of Lord Hanuman)</td>
                </tr>
                <tr>
                  <td>786</td>
                  <td>Brahmavidhata</td>
                  <td>Om Brahmavidhata Namah</td>
                  <td>One who bestows the knowledge of Brahman</td>
                </tr>
                <tr>
                  <td>787</td>
                  <td>Chandrasekhara</td>
                  <td>Om Chandrasekhara Namah</td>
                  <td>One who holds the moon in his hair (Lord Shiva)</td>
                </tr>
                <tr>
                  <td>788</td>
                  <td>Suryabala</td>
                  <td>Om Suryabala Namah</td>
                  <td>One who has the strength of the Sun</td>
                </tr>
                <tr>
                  <td>789</td>
                  <td>Virasena</td>
                  <td>Om Virasena Namah</td>
                  <td>One who is heroic and a leader</td>
                </tr>
                <tr>
                  <td>790</td>
                  <td>Vedavishnu</td>
                  <td>Om Vedavishnu Namah</td>
                  <td>Vishnu, as the essence of the Vedas</td>
                </tr>
                <tr>
                  <td>791</td>
                  <td>Sudarshan</td>
                  <td>Om Sudarshan Namah</td>
                  <td>One with the beautiful discus</td>
                </tr>
                <tr>
                  <td>792</td>
                  <td>Bhishma</td>
                  <td>Om Bhishma Namah</td>
                  <td>
                    The great warrior, one of the eight immortals (Chiranjivi)
                  </td>
                </tr>
                <tr>
                  <td>793</td>
                  <td>Nityavakra</td>
                  <td>Om Nityavakra Namah</td>
                  <td>One who has an eternal tusk</td>
                </tr>
                <tr>
                  <td>794</td>
                  <td>Sadhvavakra</td>
                  <td>Om Sadhvavakra Namah</td>
                  <td>One who has a pure and virtuous tusk</td>
                </tr>
                <tr>
                  <td>795</td>
                  <td>Vaitalika</td>
                  <td>Om Vaitalikaya Namah</td>
                  <td>One who is associated with spirits (Vaitala)</td>
                </tr>
                <tr>
                  <td>796</td>
                  <td>Labheshwar</td>
                  <td>Om Labheshwaraya Namah</td>
                  <td>Lord of gains and wealth</td>
                </tr>
                <tr>
                  <td>797</td>
                  <td>Sanatkumara</td>
                  <td>Om Sanatkumara Namah</td>
                  <td>The eternal youth (a name of Lord Kartikeya)</td>
                </tr>
                <tr>
                  <td>798</td>
                  <td>Vijayanandak</td>
                  <td>Om Vijayanandaya Namah</td>
                  <td>Source of victorious joy</td>
                </tr>
                <tr>
                  <td>799</td>
                  <td>Siddhivadana</td>
                  <td>Om Siddhivadanaya Namah</td>
                  <td>One who gives perfection or accomplishment</td>
                </tr>
                <tr>
                  <td>800</td>
                  <td>Prabhodana</td>
                  <td>Om Prabhodaya Namah</td>
                  <td>One who awakens or enlightens</td>
                </tr>
                <tr>
                  <td>801</td>
                  <td>Mantraputra</td>
                  <td>Om Mantraputraya Namah</td>
                  <td>Son of the mantras (one who is born from mantras)</td>
                </tr>
                <tr>
                  <td>802</td>
                  <td>Chidkrida</td>
                  <td>Om Chidkridaya Namah</td>
                  <td>One who plays the game of consciousness</td>
                </tr>
                <tr>
                  <td>803</td>
                  <td>Vighnanivarna</td>
                  <td>Om Vighnanivarnaya Namah</td>
                  <td>One who removes obstacles</td>
                </tr>
                <tr>
                  <td>804</td>
                  <td>Gajeshwara</td>
                  <td>Om Gajeshwaraya Namah</td>
                  <td>Lord of the elephants, Ganesha</td>
                </tr>
                <tr>
                  <td>805</td>
                  <td>Mahapandita</td>
                  <td>Om Mahapanditaya Namah</td>
                  <td>The great scholar or wise one</td>
                </tr>
                <tr>
                  <td>806</td>
                  <td>Bhagwan Raj</td>
                  <td>Om Bhagwan Rajaya Namah</td>
                  <td>Lord of kings, the supreme ruler</td>
                </tr>
                <tr>
                  <td>807</td>
                  <td>Puranmukhi</td>
                  <td>Om Puranmukhya Namah</td>
                  <td>One with the face of ancient texts (Puranas)</td>
                </tr>
                <tr>
                  <td>808</td>
                  <td>Dattavighna</td>
                  <td>Om Dattavighnaya Namah</td>
                  <td>
                    Remover of obstacles for devotees, related to Dattatreya
                  </td>
                </tr>
                <tr>
                  <td>809</td>
                  <td>Tantrika</td>
                  <td>Om Tantrikaya Namah</td>
                  <td>One associated with tantra (esoteric practices)</td>
                </tr>
                <tr>
                  <td>810</td>
                  <td>Mahaganapati</td>
                  <td>Om Mahaganapathaye Namah</td>
                  <td>The great Lord Ganesha</td>
                </tr>
                <tr>
                  <td>811</td>
                  <td>Vasundhara</td>
                  <td>Om Vasundharaya Namah</td>
                  <td>Earth, the goddess of wealth</td>
                </tr>
                <tr>
                  <td>812</td>
                  <td>Karmapalaka</td>
                  <td>Om Karmapalakaya Namah</td>
                  <td>One who protects or oversees actions</td>
                </tr>
                <tr>
                  <td>813</td>
                  <td>Chandrabimba</td>
                  <td>Om Chandrabimbaya Namah</td>
                  <td>Moon-like form or symbol</td>
                </tr>
                <tr>
                  <td>814</td>
                  <td>Bhavapriya</td>
                  <td>Om Bhavapriya Namah</td>
                  <td>One who is beloved by the world of emotions</td>
                </tr>
                <tr>
                  <td>815</td>
                  <td>Rajalakshmi</td>
                  <td>Om Rajalakshmaye Namah</td>
                  <td>Goddess Lakshmi, the queen of wealth and fortune</td>
                </tr>
                <tr>
                  <td>816</td>
                  <td>Bhadrakali</td>
                  <td>Om Bhadrakali Namah</td>
                  <td>The auspicious Kali, a form of Goddess Kali</td>
                </tr>
                <tr>
                  <td>817</td>
                  <td>Ganeshavallabha</td>
                  <td>Om Ganeshavallabhaya Namah</td>
                  <td>The beloved of Ganesha</td>
                </tr>
                <tr>
                  <td>818</td>
                  <td>Rajganesha</td>
                  <td>Om Rajganeshaya Namah</td>
                  <td>The kingly form of Ganesha</td>
                </tr>
                <tr>
                  <td>819</td>
                  <td>Kalyana Sundara</td>
                  <td>Om Kalyana Sundaraya Namah</td>
                  <td>Beautiful and auspicious, one who brings good fortune</td>
                </tr>
                <tr>
                  <td>820</td>
                  <td>Ganeshaprasad</td>
                  <td>Om Ganeshaprasadaya Namah</td>
                  <td>The divine blessing of Lord Ganesha</td>
                </tr>
                <tr>
                  <td>821</td>
                  <td>Yogeshwara</td>
                  <td>Om Yogeshwaraya Namah</td>
                  <td>
                    The Lord of yoga (referring to Ganesha as the source of
                    spiritual wisdom)
                  </td>
                </tr>
                <tr>
                  <td>822</td>
                  <td>Vighnaraj</td>
                  <td>Om Vighnarajaya Namah</td>
                  <td>King of obstacles, another name for Ganesha</td>
                </tr>
                <tr>
                  <td>823</td>
                  <td>Shubhaprada</td>
                  <td>Om Shubhapradaya Namah</td>
                  <td>One who gives auspiciousness</td>
                </tr>
                <tr>
                  <td>824</td>
                  <td>Durjanvighna</td>
                  <td>Om Durjanvighnaya Namah</td>
                  <td>One who removes obstacles caused by evil persons</td>
                </tr>
                <tr>
                  <td>825</td>
                  <td>Ganesha Prabhu</td>
                  <td>Om Ganeshaprabhu Namah</td>
                  <td>The supreme Lord Ganesha</td>
                </tr>
                <tr>
                  <td>826</td>
                  <td>Gajachidra</td>
                  <td>Om Gajachidraya Namah</td>
                  <td>One who has the form of the elephant's trunk</td>
                </tr>
                <tr>
                  <td>827</td>
                  <td>Sakalashubha</td>
                  <td>Om Sakalashubhaya Namah</td>
                  <td>One who is the embodiment of all auspiciousness</td>
                </tr>
                <tr>
                  <td>828</td>
                  <td>Somavighna</td>
                  <td>Om Somavighnaya Namah</td>
                  <td>The obstacle remover associated with the moon</td>
                </tr>
                <tr>
                  <td>829</td>
                  <td>Pradhyumna</td>
                  <td>Om Pradhyumnaya Namah</td>
                  <td>Son of Lord Krishna, one who brings great joy</td>
                </tr>
                <tr>
                  <td>830</td>
                  <td>Rajanandak</td>
                  <td>Om Rajanandaka Namah</td>
                  <td>One who brings joy to kings</td>
                </tr>
                <tr>
                  <td>831</td>
                  <td>Vighnesh</td>
                  <td>Om Vighneshaya Namah</td>
                  <td>Lord of obstacles (another name of Ganesha)</td>
                </tr>
                <tr>
                  <td>832</td>
                  <td>Vardanayaka</td>
                  <td>Om Vardanayakaya Namah</td>
                  <td>One who bestows blessings</td>
                </tr>
                <tr>
                  <td>833</td>
                  <td>Shubhasvara</td>
                  <td>Om Shubhasvaraya Namah</td>
                  <td>One who is the sound or vibration of auspiciousness</td>
                </tr>
                <tr>
                  <td>834</td>
                  <td>Ganeshana</td>
                  <td>Om Ganeshanaya Namah</td>
                  <td>The one who belongs to Ganesha</td>
                </tr>
                <tr>
                  <td>835</td>
                  <td>Bhagavanswar</td>
                  <td>Om Bhagavanswarya Namah</td>
                  <td>The divine essence or supreme form of God</td>
                </tr>
                <tr>
                  <td>836</td>
                  <td>Padmavadhana</td>
                  <td>Om Padmavadhana Namah</td>
                  <td>One who holds a lotus (symbol of purity and beauty)</td>
                </tr>
                <tr>
                  <td>837</td>
                  <td>Siddhimantra</td>
                  <td>Om Siddhimantraya Namah</td>
                  <td>One who has a perfected mantra</td>
                </tr>
                <tr>
                  <td>838</td>
                  <td>Adbhutavakra</td>
                  <td>Om Adbhutavakra Namah</td>
                  <td>One who has a wondrous tusk</td>
                </tr>
                <tr>
                  <td>839</td>
                  <td>Mangalanayaka</td>
                  <td>Om Mangalanayakaya Namah</td>
                  <td>Leader of auspiciousness</td>
                </tr>
                <tr>
                  <td>840</td>
                  <td>Vidhavakra</td>
                  <td>Om Vidhavakra Namah</td>
                  <td>One whose tusk brings auspiciousness</td>
                </tr>
                <tr>
                  <td>841</td>
                  <td>Rajganapathi</td>
                  <td>Om Rajganapathaye Namah</td>
                  <td>Lord of the royal Ganas</td>
                </tr>
                <tr>
                  <td>842</td>
                  <td>Shubhaloka</td>
                  <td>Om Shubhalokaya Namah</td>
                  <td>One who grants auspicious realms</td>
                </tr>
                <tr>
                  <td>843</td>
                  <td>Chintanadip</td>
                  <td>Om Chintanadipaya Namah</td>
                  <td>The light of thought or meditation</td>
                </tr>
                <tr>
                  <td>844</td>
                  <td>Guruvandita</td>
                  <td>Om Guruvanditaya Namah</td>
                  <td>One who is revered by the guru or teacher</td>
                </tr>
                <tr>
                  <td>845</td>
                  <td>Shubhamasa</td>
                  <td>Om Shubhamasaya Namah</td>
                  <td>One who brings auspicious months</td>
                </tr>
                <tr>
                  <td>846</td>
                  <td>Vighnakrit</td>
                  <td>Om Vighnakritaya Namah</td>
                  <td>One who remove obstacles</td>
                </tr>
                <tr>
                  <td>847</td>
                  <td>Aksara</td>
                  <td>Om Aksaraya Namah</td>
                  <td>One who is eternal and indestructible</td>
                </tr>
                <tr>
                  <td>848</td>
                  <td>Siddhakarya</td>
                  <td>Om Siddhakaryaya Namah</td>
                  <td>One who accomplishes all tasks and is successful</td>
                </tr>
                <tr>
                  <td>849</td>
                  <td>Ganaprasanna</td>
                  <td>Om Ganaprasannaya Namah</td>
                  <td>One who is pleased with devotees</td>
                </tr>
                <tr>
                  <td>850</td>
                  <td>Jagatpati</td>
                  <td>Om Jagatpati Namah</td>
                  <td>Lord of the universe</td>
                </tr>
                <tr>
                  <td>851</td>
                  <td>Mahodaya</td>
                  <td>Om Mahodaya Namah</td>
                  <td>One who brings great dawn or enlightenment</td>
                </tr>
                <tr>
                  <td>852</td>
                  <td>Satkaryava</td>
                  <td>Om Satkaryavaya Namah</td>
                  <td>One who is the source of good actions</td>
                </tr>
                <tr>
                  <td>853</td>
                  <td>Patanjali</td>
                  <td>Om Patanjali Namah</td>
                  <td>Sage Patanjali, the founder of yoga and grammar</td>
                </tr>
                <tr>
                  <td>854</td>
                  <td>Vidhatri</td>
                  <td>Om Vidhatraye Namah</td>
                  <td>The creator or one who gives life</td>
                </tr>
                <tr>
                  <td>855</td>
                  <td>Shubhanavighna</td>
                  <td>Om Shubhanavighnaya Namah</td>
                  <td>One who removes the new obstacles</td>
                </tr>
                <tr>
                  <td>856</td>
                  <td>Shubhaprasada</td>
                  <td>Om Shubhaprasadaya Namah</td>
                  <td>One who gives auspicious blessings</td>
                </tr>
                <tr>
                  <td>857</td>
                  <td>Gajamukha</td>
                  <td>Om Gajamukhaya Namah</td>
                  <td>One with the face of an elephant</td>
                </tr>
                <tr>
                  <td>858</td>
                  <td>Surendravandita</td>
                  <td>Om Surendravanditaya Namah</td>
                  <td>Revered by Lord Indra</td>
                </tr>
                <tr>
                  <td>859</td>
                  <td>Ganapathisvara</td>
                  <td>Om Ganapathisvaraya Namah</td>
                  <td>The supreme Lord of Ganesha</td>
                </tr>
                <tr>
                  <td>860</td>
                  <td>Siddhiveda</td>
                  <td>Om Siddhivedaya Namah</td>
                  <td>One who is the embodiment of knowledge</td>
                </tr>
                <tr>
                  <td>861</td>
                  <td>Svayambhu</td>
                  <td>Om Svayambhu Namah</td>
                  <td>The self-manifested, the one who is self-created</td>
                </tr>
                <tr>
                  <td>862</td>
                  <td>Mahaprasad</td>
                  <td>Om Mahaprasadaya Namah</td>
                  <td>One who is the great giver of blessings</td>
                </tr>
                <tr>
                  <td>863</td>
                  <td>Laksminayaka</td>
                  <td>Om Laksminayakaya Namah</td>
                  <td>
                    Lord of Lakshmi, associated with wealth and prosperity
                  </td>
                </tr>
                <tr>
                  <td>864</td>
                  <td>Chintamani</td>
                  <td>Om Chintamanaya Namah</td>
                  <td>The wish-fulfilling gem or stone</td>
                </tr>
                <tr>
                  <td>865</td>
                  <td>Rakshasamkara</td>
                  <td>Om Rakshasamkaraya Namah</td>
                  <td>One who destroys evil or demons</td>
                </tr>
                <tr>
                  <td>866</td>
                  <td>Mantratantra</td>
                  <td>Om Mantratantraya Namah</td>
                  <td>One who is associated with mantras and tantra</td>
                </tr>
                <tr>
                  <td>867</td>
                  <td>Kaliyugavighna</td>
                  <td>Om Kaliyugavighnaya Namah</td>
                  <td>Remover of obstacles in the age of Kaliyuga</td>
                </tr>
                <tr>
                  <td>868</td>
                  <td>Vedavyasa</td>
                  <td>Om Vedavyasaya Namah</td>
                  <td>The sage Vyasa, author of the Vedas</td>
                </tr>
                <tr>
                  <td>869</td>
                  <td>Tattvavishnu</td>
                  <td>Om Tattvavishnave Namah</td>
                  <td>The essence of Vishnu, the supreme truth</td>
                </tr>
                <tr>
                  <td>870</td>
                  <td>Bhagwatvahan</td>
                  <td>Om Bhagwatvahanaya Namah</td>
                  <td>The one who carries the Lord's message</td>
                </tr>
                <tr>
                  <td>871</td>
                  <td>Siddhavatara</td>
                  <td>Om Siddhavatara Namah</td>
                  <td>The incarnation who embodies perfection</td>
                </tr>
                <tr>
                  <td>872</td>
                  <td>Ganapathilok</td>
                  <td>Om Ganapathilokaya Namah</td>
                  <td>The world of Lord Ganesha</td>
                </tr>
                <tr>
                  <td>873</td>
                  <td>Prathamanayaka</td>
                  <td>Om Prathamanayakaya Namah</td>
                  <td>The first leader or ruler</td>
                </tr>
                <tr>
                  <td>874</td>
                  <td>Sankalpavighna</td>
                  <td>Om Sankalpavighnaya Namah</td>
                  <td>
                    Remover of obstacles caused by intentions or resolutions
                  </td>
                </tr>
                <tr>
                  <td>875</td>
                  <td>Gajabrahman</td>
                  <td>Om Gajabrahmanaya Namah</td>
                  <td>Elephant-headed form of Lord Brahma</td>
                </tr>
                <tr>
                  <td>876</td>
                  <td>Rudraswarupa</td>
                  <td>Om Rudraswarupaya Namah</td>
                  <td>The form of Lord Shiva, the Rudra aspect</td>
                </tr>
                <tr>
                  <td>877</td>
                  <td>Rajvigna</td>
                  <td>Om Rajvignaya Namah</td>
                  <td>The king of obstacles, Lord Ganesha</td>
                </tr>
                <tr>
                  <td>878</td>
                  <td>Ganapati Prabhu</td>
                  <td>Om Ganapati Prabhave Namah</td>
                  <td>The supreme Lord Ganesha</td>
                </tr>
                <tr>
                  <td>879</td>
                  <td>Vishwajeet</td>
                  <td>Om Vishwajeetaya Namah</td>
                  <td>Conqueror of the universe</td>
                </tr>
                <tr>
                  <td>880</td>
                  <td>Satyabhakta</td>
                  <td>Om Satyabhaktaya Namah</td>
                  <td>The devotee of truth, one who is devoted to truth</td>
                </tr>
                <tr>
                  <td>881</td>
                  <td>Mahasukha</td>
                  <td>Om Mahasukha Namah</td>
                  <td>The source of great happiness</td>
                </tr>
                <tr>
                  <td>882</td>
                  <td>Jayeshwar</td>
                  <td>Om Jayeshwaraya Namah</td>
                  <td>The Lord of victory</td>
                </tr>
                <tr>
                  <td>883</td>
                  <td>Aditya Ganesh</td>
                  <td>Om Aditya Ganeshaya Namah</td>
                  <td>The sun-god aspect of Ganesha</td>
                </tr>
                <tr>
                  <td>884</td>
                  <td>Rajvinayaka</td>
                  <td>Om Rajvinayakaya Namah</td>
                  <td>The king of the Vinayakas</td>
                </tr>
                <tr>
                  <td>885</td>
                  <td>Siddhivasheshwar</td>
                  <td>Om Siddhivasheshwaraya Namah</td>
                  <td>Lord who controls or grants perfection</td>
                </tr>
                <tr>
                  <td>886</td>
                  <td>Kalyaneshwar</td>
                  <td>Om Kalyaneshwaraya Namah</td>
                  <td>The Lord of auspiciousness and welfare</td>
                </tr>
                <tr>
                  <td>887</td>
                  <td>Bhavaneshwar</td>
                  <td>Om Bhavaneshwaraya Namah</td>
                  <td>The Lord of existence and creation</td>
                </tr>
                <tr>
                  <td>888</td>
                  <td>Gajendra Vinayak</td>
                  <td>Om Gajendra Vinayakaya Namah</td>
                  <td>The elephant-headed Lord who rescues Gajendra</td>
                </tr>
                <tr>
                  <td>889</td>
                  <td>Ganapathijaya</td>
                  <td>Om Ganapathijaya Namah</td>
                  <td>The victory of Ganesha</td>
                </tr>
                <tr>
                  <td>890</td>
                  <td>Bhudharvansh</td>
                  <td>Om Bhudharvanshaya Namah</td>
                  <td>Descendant of the earth</td>
                </tr>
                <tr>
                  <td>891</td>
                  <td>Ganeshakripa</td>
                  <td>Om Ganeshakripaya Namah</td>
                  <td>The divine grace of Ganesha</td>
                </tr>
                <tr>
                  <td>892</td>
                  <td>Mahapujit</td>
                  <td>Om Mahapujitaya Namah</td>
                  <td>One who is greatly worshipped</td>
                </tr>
                <tr>
                  <td>893</td>
                  <td>Vishwakarmapriya</td>
                  <td>Om Vishwakarmapriya Namah</td>
                  <td>Beloved of Lord Vishwakarma, the divine architect</td>
                </tr>
                <tr>
                  <td>894</td>
                  <td>Aadi Ganesh</td>
                  <td>Om Aadi Ganeshaya Namah</td>
                  <td>The primordial Ganesha, the first Lord</td>
                </tr>
                <tr>
                  <td>895</td>
                  <td>Akshaya Ganesha</td>
                  <td>Om Akshaya Ganeshaya Namah</td>
                  <td>The never-ending Lord Ganesha</td>
                </tr>
                <tr>
                  <td>896</td>
                  <td>Anandashree</td>
                  <td>Om Anandashreya Namah</td>
                  <td>The one who bestows supreme joy</td>
                </tr>
                <tr>
                  <td>897</td>
                  <td>Bhaktavigneshwar</td>
                  <td>Om Bhaktavigneshwaraya Namah</td>
                  <td>The remover of obstacles for devotees</td>
                </tr>
                <tr>
                  <td>898</td>
                  <td>Chidananda</td>
                  <td>Om Chidanandaya Namah</td>
                  <td>The bliss of consciousness</td>
                </tr>
                <tr>
                  <td>899</td>
                  <td>Chintan Ganesha</td>
                  <td>Om Chintan Ganeshaya Namah</td>
                  <td>The Ganesha who is meditated upon</td>
                </tr>
                <tr>
                  <td>900</td>
                  <td>Dhanvantarini</td>
                  <td>Om Dhanvantarini Namah</td>
                  <td>The goddess of medicine, associated with healing</td>
                </tr>
                <tr>
                  <td>901</td>
                  <td>Ekadantaya</td>
                  <td>Om Ekadantaya Namah</td>
                  <td>One with a single tusk</td>
                </tr>
                <tr>
                  <td>902</td>
                  <td>Gajakarna</td>
                  <td>Om Gajakarna Namah</td>
                  <td>One with elephant-like ears</td>
                </tr>
                <tr>
                  <td>903</td>
                  <td>Ganapati Rashtra</td>
                  <td>Om Ganapati Rashtra Namah</td>
                  <td>The Lord of all countries or realms</td>
                </tr>
                <tr>
                  <td>904</td>
                  <td>Ganeshvarayoga</td>
                  <td>Om Ganeshvarayogaya Namah</td>
                  <td>The union or connection with Lord Ganesha</td>
                </tr>
                <tr>
                  <td>905</td>
                  <td>Gajendra Ganesha</td>
                  <td>Om Gajendra Ganeshaya Namah</td>
                  <td>Ganesha who rescued Gajendra</td>
                </tr>
                <tr>
                  <td>906</td>
                  <td>Jagatguru Ganesh</td>
                  <td>Om Jagatguru Ganeshaya Namah</td>
                  <td>The world teacher, Lord Ganesha</td>
                </tr>
                <tr>
                  <td>907</td>
                  <td>Jayavighna</td>
                  <td>Om Jayavighnaya Namah</td>
                  <td>The victorious remover of obstacles</td>
                </tr>
                <tr>
                  <td>908</td>
                  <td>Kshipra Ganesh</td>
                  <td>Om Kshipra Ganeshaya Namah</td>
                  <td>The swift or quick Ganesha</td>
                </tr>
                <tr>
                  <td>909</td>
                  <td>Lakshmikantha</td>
                  <td>Om Lakshmikanthaya Namah</td>
                  <td>The Lord who is the consort of Lakshmi</td>
                </tr>
                <tr>
                  <td>910</td>
                  <td>Lumbakarna</td>
                  <td>Om Lumbakarnaya Namah</td>
                  <td>One with a large ear</td>
                </tr>
                <tr>
                  <td>911</td>
                  <td>Mahavishnu Ganesh</td>
                  <td>Om Mahavishnu Ganeshaya Namah</td>
                  <td>The Ganesha associated with Lord Vishnu</td>
                </tr>
                <tr>
                  <td>912</td>
                  <td>Manasavikra</td>
                  <td>Om Manasavikray Namah</td>
                  <td>One who has the power to affect the mind</td>
                </tr>
                <tr>
                  <td>913</td>
                  <td>Mangalnath</td>
                  <td>Om Mangalnathaya Namah</td>
                  <td>The auspicious Lord, the son of the earth</td>
                </tr>
                <tr>
                  <td>914</td>
                  <td>Modakpriya</td>
                  <td>Om Modakpriyay Namah</td>
                  <td>The one who loves modaks (sweet offerings)</td>
                </tr>
                <tr>
                  <td>915</td>
                  <td>Nityananda</td>
                  <td>Om Nityanandaya Namah</td>
                  <td>The eternal bliss</td>
                </tr>
                <tr>
                  <td>916</td>
                  <td>Omkar Ganesha</td>
                  <td>Om Omkar Ganeshaya Namah</td>
                  <td>The Ganesha associated with Om, the primordial sound</td>
                </tr>
                <tr>
                  <td>917</td>
                  <td>Padhmanabhan</td>
                  <td>Om Padhmanabhaya Namah</td>
                  <td>One with a lotus-shaped navel</td>
                </tr>
                <tr>
                  <td>918</td>
                  <td>Puranavishnu</td>
                  <td>Om Puranavishnu Namah</td>
                  <td>The ancient Vishnu, associated with the Puranas</td>
                </tr>
                <tr>
                  <td>919</td>
                  <td>Raksogana</td>
                  <td>Om Raksogana Namah</td>
                  <td>One who protects against demons</td>
                </tr>
                <tr>
                  <td>920</td>
                  <td>Rudra Vinayak</td>
                  <td>Om Rudra Vinayakaya Namah</td>
                  <td>The Rudra aspect of Lord Ganesha</td>
                </tr>
                <tr>
                  <td>921</td>
                  <td>Satyavrat</td>
                  <td>Om Satyavrataya Namah</td>
                  <td>One who is devoted to truth</td>
                </tr>
                <tr>
                  <td>922</td>
                  <td>Shaktikaya</td>
                  <td>Om Shaktikaya Namah</td>
                  <td>One who is the embodiment of power</td>
                </tr>
                <tr>
                  <td>923</td>
                  <td>Shubhamugra</td>
                  <td>Om Shubhamugraya Namah</td>
                  <td>The auspicious and fierce Ganesha</td>
                </tr>
                <tr>
                  <td>924</td>
                  <td>Siddhant Ganesha</td>
                  <td>Om Siddhant Ganeshaya Namah</td>
                  <td>The Ganesha of supreme knowledge or philosophy</td>
                </tr>
                <tr>
                  <td>925</td>
                  <td>Subheshwar</td>
                  <td>Om Subheshwaraya Namah</td>
                  <td>The auspicious Lord</td>
                </tr>
                <tr>
                  <td>926</td>
                  <td>Shubhamukhi</td>
                  <td>Om Shubhamukhaya Namah</td>
                  <td>One with an auspicious face</td>
                </tr>
                <tr>
                  <td>927</td>
                  <td>Shreshtha Ganesh</td>
                  <td>Om Shreshtha Ganeshaya Namah</td>
                  <td>The greatest Ganesha</td>
                </tr>
                <tr>
                  <td>928</td>
                  <td>Sushumna Ganesh</td>
                  <td>Om Sushumna Ganeshaya Namah</td>
                  <td>
                    The Ganesha associated with the Sushumna (spinal energy)
                  </td>
                </tr>
                <tr>
                  <td>929</td>
                  <td>Swarna Vinayak</td>
                  <td>Om Swarna Vinayakaya Namah</td>
                  <td>The golden Ganesha</td>
                </tr>
                <tr>
                  <td>930</td>
                  <td>Tamraputra</td>
                  <td>Om Tamraputraya Namah</td>
                  <td>
                    The son of copper, referring to the deity's reddish hue
                  </td>
                </tr>
                <tr>
                  <td>931</td>
                  <td>Tirthayatra</td>
                  <td>Om Tirthayatray Namah</td>
                  <td>One who is associated with pilgrimages</td>
                </tr>
                <tr>
                  <td>932</td>
                  <td>Tripurari Ganesh</td>
                  <td>Om Tripurari Ganeshaya Namah</td>
                  <td>
                    The Ganesha who is the destroyer of the three cities
                    (Tripura)
                  </td>
                </tr>
                <tr>
                  <td>933</td>
                  <td>Uchishth Ganesh</td>
                  <td>Om Uchishtha Ganeshaya Namah</td>
                  <td>The Ganesha associated with leftovers or offerings</td>
                </tr>
                <tr>
                  <td>934</td>
                  <td>Ujjwala Ganesh</td>
                  <td>Om Ujjwala Ganeshaya Namah</td>
                  <td>The radiant Ganesha</td>
                </tr>
                <tr>
                  <td>935</td>
                  <td>Vaksiddha</td>
                  <td>Om Vaksiddhaya Namah</td>
                  <td>The one who grants speech and eloquence</td>
                </tr>
                <tr>
                  <td>936</td>
                  <td>Vardanayak</td>
                  <td>Om Vardanayakaya Namah</td>
                  <td>The giver of boons</td>
                </tr>
                <tr>
                  <td>937</td>
                  <td>Varaprada</td>
                  <td>Om Varapradaya Namah</td>
                  <td>The one who grants wishes or boons</td>
                </tr>
                <tr>
                  <td>938</td>
                  <td>Vighnashakari</td>
                  <td>Om Vighnashakaraya Namah</td>
                  <td>The remover of obstacles</td>
                </tr>
                <tr>
                  <td>939</td>
                  <td>Vighnanayak</td>
                  <td>Om Vighnanayakaya Namah</td>
                  <td>The leader of obstacles</td>
                </tr>
                <tr>
                  <td>940</td>
                  <td>Vishweshwaran</td>
                  <td>Om Vishweshwaranaya Namah</td>
                  <td>The Lord of the universe</td>
                </tr>
                <tr>
                  <td>941</td>
                  <td>Vishwakarma Ganesh</td>
                  <td>Om Vishwakarma Ganeshaya Namah</td>
                  <td>
                    The Ganesha worshipped by Vishwakarma (the divine architect)
                  </td>
                </tr>
                <tr>
                  <td>942</td>
                  <td>Vismayak</td>
                  <td>Om Vismayakara Namah</td>
                  <td>The one who astonishes and amazes</td>
                </tr>
                <tr>
                  <td>943</td>
                  <td>Vyaghravahan</td>
                  <td>Om Vyaghravahanaya Namah</td>
                  <td>One who rides a tiger</td>
                </tr>
                <tr>
                  <td>944</td>
                  <td>Vidhata</td>
                  <td>Om Vidhataya Namah</td>
                  <td>The creator, the one who determines fate</td>
                </tr>
                <tr>
                  <td>945</td>
                  <td>Vyasa Ganesh</td>
                  <td>Om Vyasa Ganeshaya Namah</td>
                  <td>The Ganesha associated with sage Vyasa</td>
                </tr>
                <tr>
                  <td>946</td>
                  <td>Vrishabhvahana</td>
                  <td>Om Vrishabhvahanaya Namah</td>
                  <td>One who rides a bull</td>
                </tr>
                <tr>
                  <td>947</td>
                  <td>Yashodhan</td>
                  <td>Om Yashodhanaya Namah</td>
                  <td>One who has a victorious or auspicious wealth</td>
                </tr>
                <tr>
                  <td>948</td>
                  <td>Yogeshwar Ganesh</td>
                  <td>Om Yogeshwar Ganeshaya Namah</td>
                  <td>The Lord Ganesha who is the master of yoga</td>
                </tr>
                <tr>
                  <td>949</td>
                  <td>Yajna Ganesh</td>
                  <td>Om Yajna Ganeshaya Namah</td>
                  <td>The Ganesha associated with sacrifices or yajnas</td>
                </tr>
                <tr>
                  <td>950</td>
                  <td>Vaidyavigneshwar</td>
                  <td>Om Vaidyavigneshwaraya Namah</td>
                  <td>The healer and remover of obstacles related to health</td>
                </tr>
                <tr>
                  <td>951</td>
                  <td>Sharvani</td>
                  <td>Om Sharvani Namah</td>
                  <td>The Goddess Parvati, the consort of Lord Shiva</td>
                </tr>
                <tr>
                  <td>952</td>
                  <td>Sangatahara</td>
                  <td>Om Sangataharaya Namah</td>
                  <td>One who removes all difficulties and obstacles</td>
                </tr>
                <tr>
                  <td>953</td>
                  <td>Sankshipta Ganesh</td>
                  <td>Om Sankshipta Ganeshaya Namah</td>
                  <td>The compact or condensed form of Ganesha</td>
                </tr>
                <tr>
                  <td>954</td>
                  <td>Shrivatsa Ganesh</td>
                  <td>Om Shrivatsa Ganeshaya Namah</td>
                  <td>
                    The Ganesha associated with the mark of Lakshmi (Shrivatsa)
                  </td>
                </tr>
                <tr>
                  <td>955</td>
                  <td>Yashvendra</td>
                  <td>Om Yashvendra Namah</td>
                  <td>One who is victorious, the Lord of glory</td>
                </tr>
                <tr>
                  <td>956</td>
                  <td>Bhuvneshwar</td>
                  <td>Om Bhuvneshwaraya Namah</td>
                  <td>The Lord of the earth</td>
                </tr>
                <tr>
                  <td>957</td>
                  <td>Anantavighna</td>
                  <td>Om Anantavighnaya Namah</td>
                  <td>The eternal remover of obstacles</td>
                </tr>
                <tr>
                  <td>958</td>
                  <td>Ganapati Rupa</td>
                  <td>Om Ganapati Rupaya Namah</td>
                  <td>The form or shape of Lord Ganesha</td>
                </tr>
                <tr>
                  <td>959</td>
                  <td>Chaitanya Ganesh</td>
                  <td>Om Chaitanya Ganeshaya Namah</td>
                  <td>The Ganesha of consciousness or divine awareness</td>
                </tr>
                <tr>
                  <td>960</td>
                  <td>Purushadana</td>
                  <td>Om Purushadanaya Namah</td>
                  <td>The one who is the giver of human virtues</td>
                </tr>
                <tr>
                  <td>961</td>
                  <td>Keshavashwar</td>
                  <td>Om Keshavashwaraya Namah</td>
                  <td>The supreme Lord, a name of Vishnu</td>
                </tr>
                <tr>
                  <td>962</td>
                  <td>Bhavaneshwar</td>
                  <td>Om Bhavaneshwaraya Namah</td>
                  <td>The Lord of existence and creation</td>
                </tr>
                <tr>
                  <td>963</td>
                  <td>Gajendrahara</td>
                  <td>Om Gajendrahara Namah</td>
                  <td>The one who saved Gajendra, the elephant king</td>
                </tr>
                <tr>
                  <td>964</td>
                  <td>Mangalavighna</td>
                  <td>Om Mangalavighnaya Namah</td>
                  <td>The auspicious remover of obstacles</td>
                </tr>
                <tr>
                  <td>965</td>
                  <td>Ganapathihara</td>
                  <td>Om Ganapathiharaya Namah</td>
                  <td>The remover of all obstacles of Ganesha’s devotees</td>
                </tr>
                <tr>
                  <td>966</td>
                  <td>Vasantaketu</td>
                  <td>Om Vasantaketu Namah</td>
                  <td>
                    The one associated with the spring season or the name of a
                    star
                  </td>
                </tr>
                <tr>
                  <td>967</td>
                  <td>Narayanavandita</td>
                  <td>Om Narayanavanditaya Namah</td>
                  <td>The one who is praised by Lord Narayana</td>
                </tr>
                <tr>
                  <td>968</td>
                  <td>Gokarneshwar</td>
                  <td>Om Gokarneshwaraya Namah</td>
                  <td>
                    The Lord of the sacred Gokarna, a temple of Lord Shiva
                  </td>
                </tr>
                <tr>
                  <td>969</td>
                  <td>Ganeshaditya</td>
                  <td>Om Ganeshadityaya Namah</td>
                  <td>The Sun-God aspect of Ganesh</td>
                </tr>
                <tr>
                  <td>970</td>
                  <td>Mahakanti</td>
                  <td>Om Mahakantaya Namah</td>
                  <td>The one who is supremely radiant</td>
                </tr>
                <tr>
                  <td>971</td>
                  <td>Adyashakti</td>
                  <td>Om Adyashakti Namah</td>
                  <td>The primal force of the universe</td>
                </tr>
                <tr>
                  <td>972</td>
                  <td>Dakshaganesh</td>
                  <td>Om Dakshaganeshaya Namah</td>
                  <td>The Ganesha who is invoked for auspiciousness</td>
                </tr>
                <tr>
                  <td>973</td>
                  <td>Bhandarbhadra</td>
                  <td>Om Bhandarbhadraya Namah</td>
                  <td>The Ganesha who protects wealth and prosperity</td>
                </tr>
                <tr>
                  <td>974</td>
                  <td>Ekadantapada</td>
                  <td>Om Ekadantapadaya Namah</td>
                  <td>The one with a single tusk, symbolizing perseverance</td>
                </tr>
                <tr>
                  <td>975</td>
                  <td>Bhakti Ganesh</td>
                  <td>Om Bhakti Ganeshaya Namah</td>
                  <td>The Ganesha worshipped with devotion</td>
                </tr>
                <tr>
                  <td>976</td>
                  <td>Aakashvani</td>
                  <td>Om Aakashvani Namah</td>
                  <td>The divine voice from the sky</td>
                </tr>
                <tr>
                  <td>977</td>
                  <td>Padmanabheshwar</td>
                  <td>Om Padmanabheshwaraya Namah</td>
                  <td>The Lord who has a lotus-shaped navel</td>
                </tr>
                <tr>
                  <td>978</td>
                  <td>Nirvan Ganesh</td>
                  <td>Om Nirvan Ganeshaya Namah</td>
                  <td>The Ganesha associated with liberation or Moksha</td>
                </tr>
                <tr>
                  <td>979</td>
                  <td>Kshirabdi</td>
                  <td>Om Kshirabdiye Namah</td>
                  <td>The one associated with the ocean of milk</td>
                </tr>
                <tr>
                  <td>980</td>
                  <td>Shaktiputreshwar</td>
                  <td>Om Shaktiputreshwaraya Namah</td>
                  <td>The powerful son of Lord Shiva</td>
                </tr>
                <tr>
                  <td>981</td>
                  <td>Dnyaneshwar</td>
                  <td>Om Dnyaneshwaraya Namah</td>
                  <td>The Lord of knowledge and wisdom</td>
                </tr>
                <tr>
                  <td>982</td>
                  <td>Ratnagarbha</td>
                  <td>Om Ratnagarbhaya Namah</td>
                  <td>The one who holds all gems</td>
                </tr>
                <tr>
                  <td>983</td>
                  <td>Bhagavatsarvashakti</td>
                  <td>Om Bhagavatsarvashaktaye Namah</td>
                  <td>The power of the Lord present in everything</td>
                </tr>
                <tr>
                  <td>984</td>
                  <td>Bhavaprasad</td>
                  <td>Om Bhavaprasadaya Namah</td>
                  <td>The one who bestows prosperity and happiness</td>
                </tr>
                <tr>
                  <td>985</td>
                  <td>Pratyakshadev</td>
                  <td>Om Pratyakshadevaya Namah</td>
                  <td>The deity who is directly perceived</td>
                </tr>
                <tr>
                  <td>986</td>
                  <td>Samruddheshwar</td>
                  <td>Om Samruddheshwaraya Namah</td>
                  <td>The Lord who brings prosperity and growth</td>
                </tr>
                <tr>
                  <td>987</td>
                  <td>Bhavadhara</td>
                  <td>Om Bhavadharaya Namah</td>
                  <td>The support of the universe, the bearer of creation</td>
                </tr>
                <tr>
                  <td>988</td>
                  <td>Chidvilasa</td>
                  <td>Om Chidvilasaya Namah</td>
                  <td>The one who delights in divine consciousness</td>
                </tr>
                <tr>
                  <td>989</td>
                  <td>Vakratundeshwar</td>
                  <td>Om Vakratundeshwaraya Namah</td>
                  <td>Supreme deity with a curved trunk</td>
                </tr>
                <tr>
                  <td>990</td>
                  <td>Anantamaya</td>
                  <td>Om Anantamayaya Namah</td>
                  <td>The infinite and boundless Lord</td>
                </tr>
                <tr>
                  <td>991</td>
                  <td>Shubhanetra</td>
                  <td>Om Shubhanetraya Namah</td>
                  <td>One with auspicious and protective vision</td>
                </tr>
                <tr>
                  <td>992</td>
                  <td>Vishwadhyaksha</td>
                  <td>Om Vishwadhyakshaya Namah</td>
                  <td>Overseer and protector of the universe</td>
                </tr>
                <tr>
                  <td>993</td>
                  <td>Hridayavasi</td>
                  <td>Om Hridayavasine Namah</td>
                  <td>The one who resides in every heart</td>
                </tr>
                <tr>
                  <td>994</td>
                  <td>Pranavakar</td>
                  <td>Om Pranavakaraya Namah</td>
                  <td>Embodiment of the sacred sound 'Om'</td>
                </tr>
                <tr>
                  <td>995</td>
                  <td>Kaladhyaksha</td>
                  <td>Om Kaladhyakshaya Namah</td>
                  <td>Master of time and arts</td>
                </tr>
                <tr>
                  <td>996</td>
                  <td>Srishtikarta</td>
                  <td>Om Srishtikartre Namah</td>
                  <td>Creator and sustainer of the cosmos</td>
                </tr>
                <tr>
                  <td>997</td>
                  <td>Mahojwala</td>
                  <td>Om Mahojwalaya Namah</td>
                  <td>One with a radiant and dazzling aura</td>
                </tr>
                <tr>
                  <td>998</td>
                  <td>Akhiladhipati</td>
                  <td>Om Akhiladhipataye Namah</td>
                  <td>Supreme ruler of everything</td>
                </tr>
                <tr>
                  <td>999</td>
                  <td>Ganesha Vidya</td>
                  <td>Om Ganesha Vidyaya Namah</td>
                  <td>The wisdom and essence of Lord Ganesha</td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>SrishtiKartaa</td>
                  <td>Om SrishtiKartaaya Namah</td>
                  <td>Creator of the universe</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Significance Of Chanting Ganpati Sahasranamavali</h3>
          <p>
            Lord Ganesha, known to be the remover of obstacles, is one of the
            most worshipped deities in Hinduism. He is known to be the deity of
            wisdom, knowledge, and prosperity. He is also the first deity to be
            worshipped in any pooja or ritual.
          </p>
          <p>
            Ganesh Sahastra Namavali is the dedicated 1000 names of Lord
            Ganesha. These 1000 names hold a lot of significance as it is
            believed that if a person chants these names with devotion, they can
            seek Ganesha’s divine blessings.
          </p>
          <p>
            However, this is not all. The significance of the 1000 Ganesha name
            list is also associated with removing obstacles from one’s life.
            Each of the 100 names tends to represent different qualities and
            aspects of Lord Ganesha. Chanting the 1000 names of lord ganesha for
            baby boy or the 1000 names of lord Ganesha for baby girl is said to
            promote overall well-being in a person’s life.
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
export default Ganesha1000;

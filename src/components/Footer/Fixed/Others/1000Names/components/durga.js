import React, { useEffect } from "react";
import styled from "styled-components";
import Deity1000ButtonGrid from "./common1000grid";
import Breadcrumbs from "../../../../../Breadcrumb";
import Layout from "../../../../../Layout/Layout";
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
// const UnorderedList = styled.ul`
//   //   list-style-type: none;
// `;
// const ListItem = styled.li`
//   margin-bottom: 10px;
// `;
const Durga1000FAQ = [
  {
    id: 1,
    title: "What is Durga Sahasranamavali?",
    content:
      "Durga Sahastra Namavali is a list of 1000 sacred names of the goddess Durga based on her life and qualities. It is a powerful hymn to call Maa Durga and ask for her blessings.",
  },
  {
    id: 2,
    title: "What are the benefits of reading Durga Sahasranamam",
    content:
      "It is said that reading or chanting the 1000 names of goddess Durga with meaning knowledge offers peace, prosperity and protection against evil eyes. At the same time, it makes a person attain Siddhi (the greatest awareness) and moksha at life end.",
  },
  {
    id: 3,
    title: "How to chant Durga Sahastra Namavali?",
    content:
      "Sit in a quiet place in front of Maa Durga’s idol or Durga yantra or a betel nut facing the East or NorthEast direction. Now, start chanting each name and make offerings such as Bilvapatra, rice coloured with turmeric, saffron, cardamom, cloves, cashew nuts etc.",
  },
  {
    id: 4,
    title: "How to choose from 1000 names of Durga for a baby girl?",
    content:
      "Learn the 1000 names of goddess durga with meaning. Now, based on the qualities you wish to see in your baby girl, choose a name from the list. Furthermore, you can consult an astrologer for an auspicious name from the selected name based on your kid’s kundli.",
  },
  {
    id: 5,
    title: "Who has to recite Durga Sahasranamam?",
    content:
      "Durga sahasranamam 1000 names must be recited by someone who has a chronic disease or illness. It should also be recited by people who are constantly facing rivalry or has enemies. Besides, it can also stop untimely deaths and clear financial debts.",
  },
  {
    id: 6,
    title: "On What occasion can we chant Durga Sahasranamam 1000 names?",
    content:
      "The best occasion to sing the 1000 names of Durga is Navaratri. It is a 9-day celebration dedicated to Durga different forms and hence, chanting her names is said to give a boon and major blessings from the deity.",
  },
];

const Durga1000 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="1000 Name of Goddess Durga - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">1000 Names Of Goddess Durga</h1>
          <h2>Learn Maa Durga Names and Attract Strength!</h2>
          <h3>Learn Maa Durga Sahastra Namavali</h3>
          <p>
            Also known as Durga Sahasranamam 1000 names, the names of Maa Durga
            are chanted to please the goddess and fulfil all your wishes. Make
            offerings to Maa Durga idol while saying these names today, and
            notice the benefits yourself!
          </p>
          <h3>1000 Maa Durga Names</h3>
          <p>
            Goddess Durga is the most powerful and offers the greatest mercy.
            Praise her through the 1000 names of goddess Durga with meaning and
            mantra presented below.
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
                  <th>1000 Name of Durga</th>
                  <th>Mantra</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mahavidya</td>
                  <td>Om Mahavidyayai Namah</td>
                  <td>The Supreme Knowledge</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jaganmata</td>
                  <td>Om Jaganmatayai Namah</td>
                  <td>Mother of the Universe</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mahalakshmi</td>
                  <td>Om Mahalakshmyai Namah</td>
                  <td>Goddess of Wealth and Prosperity</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Shivapriya</td>
                  <td>Om Shivapriyayai Namah</td>
                  <td>Beloved of Lord Shiva</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Vishnumaya</td>
                  <td>Om Vishnumayai Namah</td>
                  <td>The Illusive Power of Lord Vishnu</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Shubha</td>
                  <td>Om Shubhayai Namah</td>
                  <td>The Auspicious One</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Shanta</td>
                  <td>Om Shantayai Namah</td>
                  <td>The Peaceful One</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Siddha</td>
                  <td>Om Siddhayai Namah</td>
                  <td>The Perfected One</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Siddhasaraswati</td>
                  <td>Om Siddhasaraswatyai Namah</td>
                  <td>Goddess of Perfect Knowledge</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Kshama</td>
                  <td>Om Kshamayai Namah</td>
                  <td>Embodiment of Forgiveness</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Kanti</td>
                  <td>Om Kantyai Namah</td>
                  <td>Radiance and Beauty</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Prabha</td>
                  <td>Om Prabhayai Namah</td>
                  <td>The Glorious One</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Jyotsna</td>
                  <td>Om Jyotsnayai Namah</td>
                  <td>Goddess Radiating Moonlight</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Parvati</td>
                  <td>Om Parvatyai Namah</td>
                  <td>Daughter of the Mountain</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Sarvamangala</td>
                  <td>Om Sarvamangalyai Namah</td>
                  <td>Bestower of Auspiciousness</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Hingula</td>
                  <td>Om Hingulayai Namah</td>
                  <td>The Fiery Goddess</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Chandika</td>
                  <td>Om Chandikayai Namah</td>
                  <td>Fierce Form of Goddess Durga</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Danta</td>
                  <td>Om Dantayai Namah</td>
                  <td>The Calm and Patient One</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Padma</td>
                  <td>Om Padmayai Namah</td>
                  <td>Lotus Goddess</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Lakshmi</td>
                  <td>Om Lakshmyai Namah</td>
                  <td>Goddess of Wealth and Fortune</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Haripriya</td>
                  <td>Om Haripriyayai Namah</td>
                  <td>Beloved of Lord Vishnu</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Tripura</td>
                  <td>Om Tripurayai Namah</td>
                  <td>Goddess of the Three Cities</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Nandini</td>
                  <td>Om Nandinyai Namah</td>
                  <td>Daughter of Happiness</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Nanda</td>
                  <td>Om Nandayai Namah</td>
                  <td>The Joyful One</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Sunanda</td>
                  <td>Om Sunandayai Namah</td>
                  <td>The Very Blissful One</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Suravandita</td>
                  <td>Om Suravanditayai Namah</td>
                  <td>Worshipped by the Celestials</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Yajnavidya</td>
                  <td>Om Yajnavidyayai Namah</td>
                  <td>Knowledge of Rituals</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Mahamaya</td>
                  <td>Om Mahamayai Namah</td>
                  <td>The Great Enchantress</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Vedamata</td>
                  <td>Om Vedamatayai Namah</td>
                  <td>Mother of the Vedas</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Sudha</td>
                  <td>Om Sudhayai Namah</td>
                  <td>The Divine Nectar</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Dhriti</td>
                  <td>Om Dhritayai Namah</td>
                  <td>Embodiment of Steadfastness</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Priti</td>
                  <td>Om Pritiyai Namah</td>
                  <td>Goddess of Love and Affection</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Pratha</td>
                  <td>Om Prathayai Namah</td>
                  <td>The Goddess Spread Across</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Prasiddha</td>
                  <td>Om Prasiddhayai Namah</td>
                  <td>The Famous and Renowned One</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Mridani</td>
                  <td>Om Mridanyai Namah</td>
                  <td>The Soft and Gentle One</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Vindhyavasini</td>
                  <td>Om Vindhyavasinyai Namah</td>
                  <td>Goddess Residing in Vindhya Mountains</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Siddhavidya</td>
                  <td>Om Siddhavidyayai Namah</td>
                  <td>Granter of Perfect Knowledge</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Mahashakti</td>
                  <td>Om Mahashaktyai Namah</td>
                  <td>The Supreme Power</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Prithvi</td>
                  <td>Om Prithvyai Namah</td>
                  <td>The Earth Goddess</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Naradasevita</td>
                  <td>Om Naradasevitayai Namah</td>
                  <td>Served by Sage Narada</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Puruhutpriya</td>
                  <td>Om Puruhutpriyayai Namah</td>
                  <td>Beloved of Indra</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Kanta</td>
                  <td>Om Kantayai Namah</td>
                  <td>The Beautiful One</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Kamini</td>
                  <td>Om Kaminyai Namah</td>
                  <td>The Desirable One</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Padmalochana</td>
                  <td>Om Padmalochanayai Namah</td>
                  <td>Goddess with Lotus Eyes</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Prahladini</td>
                  <td>Om Prahladinayai Namah</td>
                  <td>Granter of Joy</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Mahamata</td>
                  <td>Om Mahamatayai Namah</td>
                  <td>The Great Mother</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Durga</td>
                  <td>Om Durgayai Namah</td>
                  <td>The Invincible One</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Durgatinashini</td>
                  <td>Om Durgatinashinyai Namah</td>
                  <td>Destroyer of Suffering</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Jvalamukhi</td>
                  <td>Om Jvalamukhiyai Namah</td>
                  <td>Goddess with a Fiery Mouth</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Sugotra</td>
                  <td>Om Sugotrayai Namah</td>
                  <td>Of Noble Lineage</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Jyoti</td>
                  <td>Om Jyotiyai Namah</td>
                  <td>Goddess of Light</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Kumudavasini</td>
                  <td>Om Kumudavasinyai Namah</td>
                  <td>Residing in Lotus</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Durgama</td>
                  <td>Om Durgamayai Namah</td>
                  <td>Difficult to Overcome</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Durlabha</td>
                  <td>Om Durlabhayai Namah</td>
                  <td>Rare and Precious</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Vidya</td>
                  <td>Om Vidyayai Namah</td>
                  <td>Embodiment of Knowledge</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Svargatih</td>
                  <td>Om Svargataye Namah</td>
                  <td>Pathway to Heaven</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Puravasini</td>
                  <td>Om Puravasinyai Namah</td>
                  <td>Residing in the City</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Aparna</td>
                  <td>Om Aparnayai Namah</td>
                  <td>Goddess Who Performs Severe Austerities</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Shambarimaya</td>
                  <td>Om Shambarimayayai Namah</td>
                  <td>Goddess of Mystical Power</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Madira</td>
                  <td>Om Madirayai Namah</td>
                  <td>Divine Nectar</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Mriduhasini</td>
                  <td>Om Mriduhasinyai Namah</td>
                  <td>Gentle Smiling One</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Kulavagishwari</td>
                  <td>Om Kulavagishwaryai Namah</td>
                  <td>Mistress of Lineage and Speech</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Nitya</td>
                  <td>Om Nityayai Namah</td>
                  <td>The Eternal One</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Nityaklinna</td>
                  <td>Om Nityaklinayai Namah</td>
                  <td>Always Compassionate</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Krishodari</td>
                  <td>Om Krishodarinyai Namah</td>
                  <td>Black-Bellied Goddess</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Kameshwari</td>
                  <td>Om Kameshwaryai Namah</td>
                  <td>Goddess of Desire</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Nila</td>
                  <td>Om Nilayai Namah</td>
                  <td>The Blue-Hued Goddess</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Bhirunda</td>
                  <td>Om Bhirundayai Namah</td>
                  <td>Terrifying and Fierce Form</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Vahnivasini</td>
                  <td>Om Vahnivasinyai Namah</td>
                  <td>Residing in Fire</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Lambodari</td>
                  <td>Om Lambodaryai Namah</td>
                  <td>Goddess with a Large Belly</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Mahakali</td>
                  <td>Om Mahakalyai Namah</td>
                  <td>The Great Goddess Kali</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Vidyavidyeshvari</td>
                  <td>Om Vidyavidyeshwaryai Namah</td>
                  <td>Mistress of All Knowledge</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Nareshvari</td>
                  <td>Om Nareshwaryai Namah</td>
                  <td>Queen of the Kings</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Satya</td>
                  <td>Om Satyayai Namah</td>
                  <td>The Truthful One</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Sarvasaubhagyavardhini</td>
                  <td>Om Sarvasaubhagyavardhinyai Namah</td>
                  <td>Enhancer of All Fortunes</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Sankarshani</td>
                  <td>Om Sankarshanyai Namah</td>
                  <td>Attractor of Devotees</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Narasimhi</td>
                  <td>Om Narasimhyai Namah</td>
                  <td>Power of Narasimha Avatar</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Vaishnavi</td>
                  <td>Om Vaishnavyai Namah</td>
                  <td>Embodiment of Lord Vishnu’s Power</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Mahodari</td>
                  <td>Om Mahodaryai Namah</td>
                  <td>Goddess with a Large Belly</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Katyayani</td>
                  <td>Om Katyayanyai Namah</td>
                  <td>Daughter of Sage Katyayana</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Champa</td>
                  <td>Om Champayai Namah</td>
                  <td>The Fragrant One</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Sarvasampattikarini</td>
                  <td>Om Sarvasampattikarinai Namah</td>
                  <td>Bestower of All Wealth</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Narayani</td>
                  <td>Om Narayanyai Namah</td>
                  <td>Goddess Narayani</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Mahanidra</td>
                  <td>Om Mahanidrayai Namah</td>
                  <td>Goddess of Great Sleep</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Yoganidra</td>
                  <td>Om Yoganidrayai Namah</td>
                  <td>Goddess of Yogic Sleep</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Prabhavati</td>
                  <td>Om Prabhavatyai Namah</td>
                  <td>The Glorious One</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Prajnaparamita</td>
                  <td>Om Prajnaparamitayai Namah</td>
                  <td>Embodiment of Wisdom</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Prajna</td>
                  <td>Om Prajnayai Namah</td>
                  <td>The Wise One</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Tara</td>
                  <td>Om Tarayai Namah</td>
                  <td>The Star Goddess</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Madhumati</td>
                  <td>Om Madhumatayai Namah</td>
                  <td>Sweet Like Honey</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Madhu</td>
                  <td>Om Madhuyai Namah</td>
                  <td>Sweetness</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Kshirarnavasudhahara</td>
                  <td>Om Kshirarnavasudhaharayai Namah</td>
                  <td>Bearer of Oceanic Nectar</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Kalika</td>
                  <td>Om Kalikayai Namah</td>
                  <td>The Dark Goddess</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Sinhavahana</td>
                  <td>Om Sinhavahanayai Namah</td>
                  <td>Rider of the Lion</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Omkara</td>
                  <td>Om Omkarayai Namah</td>
                  <td>The Sacred Syllable</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Vasudhakara</td>
                  <td>Om Vasudhakaryai Namah</td>
                  <td>Granter of Earthly Riches</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Chetana</td>
                  <td>Om Chetanayai Namah</td>
                  <td>The Conscious One</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Kopanakrtih</td>
                  <td>Om Kopanakrityai Namah</td>
                  <td>The Wrathful One</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Ardhabindudhara</td>
                  <td>Om Ardhabindudharayai Namah</td>
                  <td>Bearer of the Crescent Moon</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Dhara</td>
                  <td>Om Dharayai Namah</td>
                  <td>Earth Goddess</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Vishvamata</td>
                  <td>Om Vishvamatayai Namah</td>
                  <td>Mother of the Universe</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Kalavati</td>
                  <td>Om Kalavatayai Namah</td>
                  <td>Possessor of Arts</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Padmavati</td>
                  <td>Om Padmavatayai Namah</td>
                  <td>Goddess Residing in Lotus</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Suvastra</td>
                  <td>Om Suvastrayai Namah</td>
                  <td>Goddess in Auspicious Attire</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Prabuddha</td>
                  <td>Om Prabuddhayai Namah</td>
                  <td>The Enlightened One</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Saraswati</td>
                  <td>Om Saraswatyai Namah</td>
                  <td>Goddess of Learning and Knowledge</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Kundasana</td>
                  <td>Om Kundasanayai Namah</td>
                  <td>Residing in Kundalini</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Jagaddhatri</td>
                  <td>Om Jagaddhatryai Namah</td>
                  <td>Supporter of the Universe</td>
                </tr>
                <tr>
                  <td>109</td>
                  <td>Buddhamata</td>
                  <td>Om Buddhamatayai Namah</td>
                  <td>Mother of Enlightenment</td>
                </tr>
                <tr>
                  <td>110</td>
                  <td>Jineshwari</td>
                  <td>Om Jineshwaryai Namah</td>
                  <td>Goddess of Conquerors</td>
                </tr>
                <tr>
                  <td>111</td>
                  <td>Jinamata</td>
                  <td>Om Jinamatayai Namah</td>
                  <td>Mother of Victors</td>
                </tr>
                <tr>
                  <td>112</td>
                  <td>Jinendra</td>
                  <td>Om Jinendrayai Namah</td>
                  <td>Lord of Wisdom</td>
                </tr>
                <tr>
                  <td>113</td>
                  <td>Sharda</td>
                  <td>Om Shardayai Namah</td>
                  <td>Goddess of Learning</td>
                </tr>
                <tr>
                  <td>114</td>
                  <td>Hansavahana</td>
                  <td>Om Hansavahanayai Namah</td>
                  <td>Mounted on a Swan</td>
                </tr>
                <tr>
                  <td>115</td>
                  <td>Rajyalakshmi</td>
                  <td>Om Rajyalakshmyai Namah</td>
                  <td>Goddess of Royal Prosperity</td>
                </tr>
                <tr>
                  <td>116</td>
                  <td>Vashatkara</td>
                  <td>Om Vashatkarayai Namah</td>
                  <td>Goddess of Sacred Mantras</td>
                </tr>
                <tr>
                  <td>117</td>
                  <td>Sudhakara</td>
                  <td>Om Sudhakarayai Namah</td>
                  <td>Bearer of Nectar</td>
                </tr>
                <tr>
                  <td>118</td>
                  <td>Sudhatmika</td>
                  <td>Om Sudhatmikayai Namah</td>
                  <td>Essence of Nectar</td>
                </tr>
                <tr>
                  <td>119</td>
                  <td>Rajanitih</td>
                  <td>Om Rajanithyai Namah</td>
                  <td>Embodiment of Political Ethics</td>
                </tr>
                <tr>
                  <td>120</td>
                  <td>Trayi</td>
                  <td>Om Trayai Namah</td>
                  <td>Goddess of the Three Vedas</td>
                </tr>
                <tr>
                  <td>121</td>
                  <td>Varta</td>
                  <td>Om Vartayai Namah</td>
                  <td>Goddess of Commerce</td>
                </tr>
                <tr>
                  <td>122</td>
                  <td>Dandaniti</td>
                  <td>Om Dandanityai Namah</td>
                  <td>Embodiment of Justice</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Kriyavati</td>
                  <td>Om Kriyavatyai Namah</td>
                  <td>Goddess of Action</td>
                </tr>
                <tr>
                  <td>124</td>
                  <td>Sadbhuti</td>
                  <td>Om Sadbhutyai Namah</td>
                  <td>Embodiment of Virtuous Existence</td>
                </tr>
                <tr>
                  <td>125</td>
                  <td>Tarini</td>
                  <td>Om Tarinyai Namah</td>
                  <td>The Savior</td>
                </tr>
                <tr>
                  <td>126</td>
                  <td>Shraddha</td>
                  <td>Om Shraddhayai Namah</td>
                  <td>Goddess of Faith</td>
                </tr>
                <tr>
                  <td>127</td>
                  <td>Sadgati</td>
                  <td>Om Sadgatyai Namah</td>
                  <td>Granter of Ultimate Salvation</td>
                </tr>
                <tr>
                  <td>128</td>
                  <td>Satparayana</td>
                  <td>Om Satparayanayai Namah</td>
                  <td>Focused on the Truth</td>
                </tr>
                <tr>
                  <td>129</td>
                  <td>Sindhu</td>
                  <td>Om Sindhuyai Namah</td>
                  <td>Oceanic Goddess</td>
                </tr>
                <tr>
                  <td>130</td>
                  <td>Mandakini</td>
                  <td>Om Mandakinyai Namah</td>
                  <td>Sacred River</td>
                </tr>
                <tr>
                  <td>131</td>
                  <td>Ganga</td>
                  <td>Om Gangayai Namah</td>
                  <td>Holy River Ganga</td>
                </tr>
                <tr>
                  <td>132</td>
                  <td>Yamuna</td>
                  <td>Om Yamunayai Namah</td>
                  <td>River Yamuna</td>
                </tr>
                <tr>
                  <td>133</td>
                  <td>Saraswati</td>
                  <td>Om Saraswatyai Namah</td>
                  <td>Sacred River Saraswati</td>
                </tr>
                <tr>
                  <td>134</td>
                  <td>Godavari</td>
                  <td>Om Godavaryai Namah</td>
                  <td>Sacred River Godavari</td>
                </tr>
                <tr>
                  <td>135</td>
                  <td>Vipasha</td>
                  <td>Om Vipashayai Namah</td>
                  <td>River Vipasha</td>
                </tr>
                <tr>
                  <td>136</td>
                  <td>Kaveri</td>
                  <td>Om Kaveryai Namah</td>
                  <td>River Kaveri</td>
                </tr>
                <tr>
                  <td>137</td>
                  <td>Shatadruka</td>
                  <td>Om Shatadrukayai Namah</td>
                  <td>Sacred River Shatadruka</td>
                </tr>
                <tr>
                  <td>138</td>
                  <td>Sarayuh</td>
                  <td>Om Sarayuhayai Namah</td>
                  <td>Sacred River Sarayu</td>
                </tr>
                <tr>
                  <td>139</td>
                  <td>Chandrabhaga</td>
                  <td>Om Chandrabhagayai Namah</td>
                  <td>Moonlit River</td>
                </tr>
                <tr>
                  <td>140</td>
                  <td>Kaushiki</td>
                  <td>Om Kaushikyai Namah</td>
                  <td>Residing in River Koshi</td>
                </tr>
                <tr>
                  <td>141</td>
                  <td>Gandaki</td>
                  <td>Om Gandakyai Namah</td>
                  <td>Sacred River Gandaki</td>
                </tr>
                <tr>
                  <td>142</td>
                  <td>Shuchi</td>
                  <td>Om Shuchyai Namah</td>
                  <td>The Pure One</td>
                </tr>
                <tr>
                  <td>143</td>
                  <td>Narmada</td>
                  <td>Om Narmadayai Namah</td>
                  <td>Sacred River Narmada</td>
                </tr>
                <tr>
                  <td>144</td>
                  <td>Karmanasha</td>
                  <td>Om Karmanashayai Namah</td>
                  <td>River Karmanasha</td>
                </tr>
                <tr>
                  <td>145</td>
                  <td>Charmanvati</td>
                  <td>Om Charmanvatyai Namah</td>
                  <td>Sacred River Charmanvati</td>
                </tr>
                <tr>
                  <td>146</td>
                  <td>Devika</td>
                  <td>Om Devikayai Namah</td>
                  <td>The Divine River</td>
                </tr>
                <tr>
                  <td>147</td>
                  <td>Vetravati</td>
                  <td>Om Vetravatyai Namah</td>
                  <td>River Betwa</td>
                </tr>
                <tr>
                  <td>148</td>
                  <td>Vitasta</td>
                  <td>Om Vitastayai Namah</td>
                  <td>River Jhelum</td>
                </tr>
                <tr>
                  <td>149</td>
                  <td>Varada</td>
                  <td>Om Varadayai Namah</td>
                  <td>The Granter of Boons</td>
                </tr>
                <tr>
                  <td>150</td>
                  <td>Naravahana</td>
                  <td>Om Naravahanayai Namah</td>
                  <td>Mounted on a Human Carrier</td>
                </tr>
                <tr>
                  <td>151</td>
                  <td>Sati</td>
                  <td>Om Satyai Namah</td>
                  <td>The Virtuous One</td>
                </tr>
                <tr>
                  <td>152</td>
                  <td>Pativrata</td>
                  <td>Om Pativratayai Namah</td>
                  <td>The Devoted Wife</td>
                </tr>
                <tr>
                  <td>153</td>
                  <td>Sadhvi</td>
                  <td>Om Sadhvyai Namah</td>
                  <td>The Virtuous and Pure One</td>
                </tr>
                <tr>
                  <td>154</td>
                  <td>Suchakshuh</td>
                  <td>Om Suchakshuyai Namah</td>
                  <td>The All-Seeing One</td>
                </tr>
                <tr>
                  <td>155</td>
                  <td>Kundavasini</td>
                  <td>Om Kundavasinyai Namah</td>
                  <td>Residing in the Kund</td>
                </tr>
                <tr>
                  <td>156</td>
                  <td>Ekachaksu</td>
                  <td>Om Ekachakshuyai Namah</td>
                  <td>The One-Eyed Goddess</td>
                </tr>
                <tr>
                  <td>157</td>
                  <td>Sahastrakshi</td>
                  <td>Om Sahastrakshyai Namah</td>
                  <td>Goddess with a Thousand Eyes</td>
                </tr>
                <tr>
                  <td>158</td>
                  <td>Sushronih</td>
                  <td>Om Sushronyai Namah</td>
                  <td>Goddess with Beautiful Ears</td>
                </tr>
                <tr>
                  <td>159</td>
                  <td>Bhagamalini</td>
                  <td>Om Bhagamalinyai Namah</td>
                  <td>The Garlanded Goddess</td>
                </tr>
                <tr>
                  <td>160</td>
                  <td>Sena</td>
                  <td>Om Senayai Namah</td>
                  <td>The Leader of Divine Army</td>
                </tr>
                <tr>
                  <td>161</td>
                  <td>Srenih</td>
                  <td>Om Srenihyai Namah</td>
                  <td>Goddess of Ranks</td>
                </tr>
                <tr>
                  <td>162</td>
                  <td>Pataka</td>
                  <td>Om Patakayai Namah</td>
                  <td>The Banner Goddess</td>
                </tr>
                <tr>
                  <td>163</td>
                  <td>Suvyuha</td>
                  <td>Om Suvyuhayai Namah</td>
                  <td>Goddess of Well-Ordered Army</td>
                </tr>
                <tr>
                  <td>164</td>
                  <td>Yuddhakankshini</td>
                  <td>Om Yuddhakankshinyai Namah</td>
                  <td>Longing for Battle</td>
                </tr>
                <tr>
                  <td>165</td>
                  <td>Patakini</td>
                  <td>Om Patakinyai Namah</td>
                  <td>Bearer of the Flag</td>
                </tr>
                <tr>
                  <td>166</td>
                  <td>Dayarambha</td>
                  <td>Om Dayarambhayai Namah</td>
                  <td>Embodiment of Compassion</td>
                </tr>
                <tr>
                  <td>167</td>
                  <td>Vipanchipanchamapriya</td>
                  <td>Om Vipanchipanchamapriyayai Namah</td>
                  <td>Lover of Musical Harmony</td>
                </tr>
                <tr>
                  <td>168</td>
                  <td>Paraparakalakanta</td>
                  <td>Om Paraparakalakantayai Namah</td>
                  <td>Beyond Space and Time</td>
                </tr>
                <tr>
                  <td>169</td>
                  <td>Trishakti</td>
                  <td>Om Trishaktyai Namah</td>
                  <td>Embodiment of Three Powers</td>
                </tr>
                <tr>
                  <td>170</td>
                  <td>Mokshadayini</td>
                  <td>Om Mokshadayinyai Namah</td>
                  <td>Granter of Liberation</td>
                </tr>
                <tr>
                  <td>171</td>
                  <td>Aindri</td>
                  <td>Om Aindryai Namah</td>
                  <td>Goddess of Indra’s Power</td>
                </tr>
                <tr>
                  <td>172</td>
                  <td>Maheshwari</td>
                  <td>Om Maheshwaryai Namah</td>
                  <td>Supreme Power of Lord Shiva</td>
                </tr>
                <tr>
                  <td>173</td>
                  <td>Brahmi</td>
                  <td>Om Brahmyai Namah</td>
                  <td>Power of Lord Brahma</td>
                </tr>
                <tr>
                  <td>174</td>
                  <td>Kaumari</td>
                  <td>Om Kaumaryai Namah</td>
                  <td>Power of Lord Kartikeya</td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>Kulavasini</td>
                  <td>Om Kulavasinyai Namah</td>
                  <td>Residing in the Family</td>
                </tr>
                <tr>
                  <td>176</td>
                  <td>Ichchha</td>
                  <td>Om Ichchhayai Namah</td>
                  <td>Embodiment of Desire</td>
                </tr>
                <tr>
                  <td>177</td>
                  <td>Bhagawati</td>
                  <td>Om Bhagawatyai Namah</td>
                  <td>The Divine Goddess</td>
                </tr>
                <tr>
                  <td>178</td>
                  <td>Shakti</td>
                  <td>Om Shaktyai Namah</td>
                  <td>Embodiment of Power</td>
                </tr>
                <tr>
                  <td>179</td>
                  <td>Kamadhenuh</td>
                  <td>Om Kamadhenuhaye Namah</td>
                  <td>Wish-Fulfilling Cow</td>
                </tr>
                <tr>
                  <td>180</td>
                  <td>Kripavati</td>
                  <td>Om Kripavatyai Namah</td>
                  <td>Full of Compassion</td>
                </tr>
                <tr>
                  <td>181</td>
                  <td>Vajrayudha</td>
                  <td>Om Vajrayudhayai Namah</td>
                  <td>Wielder of the Thunderbolt</td>
                </tr>
                <tr>
                  <td>182</td>
                  <td>Vajrahasta</td>
                  <td>Om Vajrahastayai Namah</td>
                  <td>Bearer of the Thunderbolt</td>
                </tr>
                <tr>
                  <td>183</td>
                  <td>Chandi</td>
                  <td>Om Chandayai Namah</td>
                  <td>Fierce Form of the Goddess</td>
                </tr>
                <tr>
                  <td>184</td>
                  <td>Chandaparakrama</td>
                  <td>Om Chandaparakramayai Namah</td>
                  <td>Embodiment of Supreme Valor</td>
                </tr>
                <tr>
                  <td>185</td>
                  <td>Gauri</td>
                  <td>Om Gauryai Namah</td>
                  <td>Radiant and Pure Goddess</td>
                </tr>
                <tr>
                  <td>186</td>
                  <td>Suvarnavarna</td>
                  <td>Om Suvarnavarnayai Namah</td>
                  <td>Golden-Hued Goddess</td>
                </tr>
                <tr>
                  <td>187</td>
                  <td>Sthitisamharakarini</td>
                  <td>Om Sthitisamharakarinai Namah</td>
                  <td>Creator and Destroyer</td>
                </tr>
                <tr>
                  <td>188</td>
                  <td>Eka</td>
                  <td>Om Ekayai Namah</td>
                  <td>The One</td>
                </tr>
                <tr>
                  <td>189</td>
                  <td>Aneka</td>
                  <td>Om Anekayai Namah</td>
                  <td>The Many</td>
                </tr>
                <tr>
                  <td>190</td>
                  <td>Mahejya</td>
                  <td>Om Mahejyayai Namah</td>
                  <td>Worthy of Worship</td>
                </tr>
                <tr>
                  <td>191</td>
                  <td>Shatabahuh</td>
                  <td>Om Shatabahuyai Namah</td>
                  <td>Goddess with Hundred Arms</td>
                </tr>
                <tr>
                  <td>192</td>
                  <td>Mahabhuja</td>
                  <td>Om Mahabhujayai Namah</td>
                  <td>Goddess with Mighty Arms</td>
                </tr>
                <tr>
                  <td>193</td>
                  <td>Bhujangabhushana</td>
                  <td>Om Bhujangabhushanayai Namah</td>
                  <td>Adorned with Serpents</td>
                </tr>
                <tr>
                  <td>194</td>
                  <td>Bhusha</td>
                  <td>Om Bhushayai Namah</td>
                  <td>Embellished with Ornaments</td>
                </tr>
                <tr>
                  <td>195</td>
                  <td>Shatchakrakramavasini</td>
                  <td>Om Shatchakrakramavasinyai Namah</td>
                  <td>Residing in Six Chakras</td>
                </tr>
                <tr>
                  <td>196</td>
                  <td>Shatchakrabhedini</td>
                  <td>Om Shatchakrabhedinyai Namah</td>
                  <td>Piercer of Six Chakras</td>
                </tr>
                <tr>
                  <td>197</td>
                  <td>Shyama</td>
                  <td>Om Shyamayai Namah</td>
                  <td>Dark-Hued Goddess</td>
                </tr>
                <tr>
                  <td>198</td>
                  <td>Kayastha</td>
                  <td>Om Kayasthayai Namah</td>
                  <td>Embodiment of Physical Form</td>
                </tr>
                <tr>
                  <td>199</td>
                  <td>Kayavarjita</td>
                  <td>Om Kayavarjitayai Namah</td>
                  <td>Transcending Physical Form</td>
                </tr>
                <tr>
                  <td>200</td>
                  <td>Susmita</td>
                  <td>Om Susmitayai Namah</td>
                  <td>Goddess with a Gentle Smile</td>
                </tr>
                <tr>
                  <td>201</td>
                  <td>Sumukhi</td>
                  <td>Om Sumukhyai Namah</td>
                  <td>Goddess with a Beautiful Face</td>
                </tr>
                <tr>
                  <td>202</td>
                  <td>Kshama</td>
                  <td>Om Kshamayai Namah</td>
                  <td>Embodiment of Forgiveness</td>
                </tr>
                <tr>
                  <td>203</td>
                  <td>Mulaprakritih</td>
                  <td>Om Mulaprakrityai Namah</td>
                  <td>The Primordial Nature</td>
                </tr>
                <tr>
                  <td>204</td>
                  <td>Ishvari</td>
                  <td>Om Ishvaryai Namah</td>
                  <td>Supreme Goddess</td>
                </tr>
                <tr>
                  <td>205</td>
                  <td>Aja</td>
                  <td>Om Ajayai Namah</td>
                  <td>The Unborn</td>
                </tr>
                <tr>
                  <td>206</td>
                  <td>Bahuvarna</td>
                  <td>Om Bahuvarnayai Namah</td>
                  <td>Of Many Colors</td>
                </tr>
                <tr>
                  <td>207</td>
                  <td>Purusharthapravartini</td>
                  <td>Om Purusharthapravartinyai Namah</td>
                  <td>Promoter of Righteous Goals</td>
                </tr>
                <tr>
                  <td>208</td>
                  <td>Rakta</td>
                  <td>Om Raktayai Namah</td>
                  <td>The Red-Hued Goddess</td>
                </tr>
                <tr>
                  <td>209</td>
                  <td>Nila</td>
                  <td>Om Nilayai Namah</td>
                  <td>The Blue-Hued Goddess</td>
                </tr>
                <tr>
                  <td>210</td>
                  <td>Sita</td>
                  <td>Om Sitayai Namah</td>
                  <td>The Pure Goddess</td>
                </tr>
                <tr>
                  <td>211</td>
                  <td>Shyama</td>
                  <td>Om Shyamayai Namah</td>
                  <td>Dark-Hued Goddess</td>
                </tr>
                <tr>
                  <td>212</td>
                  <td>Krishna</td>
                  <td>Om Krishnayai Namah</td>
                  <td>Dark-Skinned Goddess</td>
                </tr>
                <tr>
                  <td>213</td>
                  <td>Pita</td>
                  <td>Om Pitayai Namah</td>
                  <td>Yellow-Hued Goddess</td>
                </tr>
                <tr>
                  <td>214</td>
                  <td>Karbura</td>
                  <td>Om Karburayai Namah</td>
                  <td>Multicolored Goddess</td>
                </tr>
                <tr>
                  <td>215</td>
                  <td>Kshudha</td>
                  <td>Om Kshudhayai Namah</td>
                  <td>Embodiment of Hunger</td>
                </tr>
                <tr>
                  <td>216</td>
                  <td>Trishna</td>
                  <td>Om Trishnayai Namah</td>
                  <td>Embodiment of Thirst</td>
                </tr>
                <tr>
                  <td>217</td>
                  <td>Jaravriddha</td>
                  <td>Om Jaravriddhayai Namah</td>
                  <td>The Aged and Wise</td>
                </tr>
                <tr>
                  <td>218</td>
                  <td>Taruni</td>
                  <td>Om Tarunyai Namah</td>
                  <td>The Young Maiden</td>
                </tr>
                <tr>
                  <td>219</td>
                  <td>Karunalaya</td>
                  <td>Om Karunalayayai Namah</td>
                  <td>Abode of Compassion</td>
                </tr>
                <tr>
                  <td>220</td>
                  <td>Kala</td>
                  <td>Om Kalayai Namah</td>
                  <td>Embodiment of Time</td>
                </tr>
                <tr>
                  <td>221</td>
                  <td>Kashta</td>
                  <td>Om Kashtayai Namah</td>
                  <td>The Subtle Form</td>
                </tr>
                <tr>
                  <td>222</td>
                  <td>Muhurta</td>
                  <td>Om Muhurtayai Namah</td>
                  <td>Embodiment of Moments</td>
                </tr>
                <tr>
                  <td>223</td>
                  <td>Nimesha</td>
                  <td>Om Nimeshayai Namah</td>
                  <td>Embodiment of a Blink</td>
                </tr>
                <tr>
                  <td>224</td>
                  <td>Kalarupini</td>
                  <td>Om Kalarupinyai Namah</td>
                  <td>Form of Time</td>
                </tr>
                <tr>
                  <td>225</td>
                  <td>Sukarnarasana</td>
                  <td>Om Sukarnarasanayai Namah</td>
                  <td>Lover of Sweet Sounds</td>
                </tr>
                <tr>
                  <td>226</td>
                  <td>Nasa</td>
                  <td>Om Nasayai Namah</td>
                  <td>Embodiment of Breath</td>
                </tr>
                <tr>
                  <td>227</td>
                  <td>Chakshuh</td>
                  <td>Om Chakshuyai Namah</td>
                  <td>Embodiment of Vision</td>
                </tr>
                <tr>
                  <td>228</td>
                  <td>Sparshavati</td>
                  <td>Om Sparshavatyai Namah</td>
                  <td>The Sensitive One</td>
                </tr>
                <tr>
                  <td>229</td>
                  <td>Rasa</td>
                  <td>Om Rasayai Namah</td>
                  <td>Embodiment of Taste</td>
                </tr>
                <tr>
                  <td>230</td>
                  <td>Gandhapriya</td>
                  <td>Om Gandhapriyayi Namah</td>
                  <td>Lover of Fragrance</td>
                </tr>
                <tr>
                  <td>231</td>
                  <td>Sugandha</td>
                  <td>Om Sugandhayai Namah</td>
                  <td>The Fragrant One</td>
                </tr>
                <tr>
                  <td>232</td>
                  <td>Susparsha</td>
                  <td>Om Susparshayai Namah</td>
                  <td>Embodiment of Gentle Touch</td>
                </tr>
                <tr>
                  <td>233</td>
                  <td>Manogatih</td>
                  <td>Om Manogataye Namah</td>
                  <td>Pervading the Mind</td>
                </tr>
                <tr>
                  <td>234</td>
                  <td>Mriganabhih</td>
                  <td>Om Mriganabhaye Namah</td>
                  <td>Fragrance of Musk</td>
                </tr>
                <tr>
                  <td>235</td>
                  <td>Mrigakshi</td>
                  <td>Om Mrigakshyai Namah</td>
                  <td>Doe-Eyed Goddess</td>
                </tr>
                <tr>
                  <td>236</td>
                  <td>Karpuramodadharini</td>
                  <td>Om Karpuramodadharinyai Namah</td>
                  <td>Bearer of Camphor Fragrance</td>
                </tr>
                <tr>
                  <td>237</td>
                  <td>Padmayonih</td>
                  <td>Om Padmayonaye Namah</td>
                  <td>Born of the Lotus</td>
                </tr>
                <tr>
                  <td>238</td>
                  <td>Sukeshi</td>
                  <td>Om Sukeshyai Namah</td>
                  <td>The Beautiful-Haired Goddess</td>
                </tr>
                <tr>
                  <td>239</td>
                  <td>sugarcoat</td> <td>Sulinga</td>
                  <td>Om Sulingayai Namah</td>
                  <td>The Goddess of Fire Sparks</td>
                </tr>
                <tr>
                  <td>240</td>
                  <td>Bhagarupini</td>
                  <td>Om Bhagarupinyai Namah</td>
                  <td>Embodiment of Splendor</td>
                </tr>
                <tr>
                  <td>241</td>
                  <td>Yonimudra</td>
                  <td>Om Yonimudrayai Namah</td>
                  <td>Keeper of the Sacred Feminine Energy</td>
                </tr>
                <tr>
                  <td>242</td>
                  <td>Mahamudra</td>
                  <td>Om Mahamudrayai Namah</td>
                  <td>Bearer of the Great Gesture</td>
                </tr>
                <tr>
                  <td>243</td>
                  <td>Khechari</td>
                  <td>Om Khecharayai Namah</td>
                  <td>Moving Through the Sky</td>
                </tr>
                <tr>
                  <td>244</td>
                  <td>Khagagamini</td>
                  <td>Om Khagagaminayai Namah</td>
                  <td>Goddess Moving Swiftly Like a Bird</td>
                </tr>
                <tr>
                  <td>245</td>
                  <td>Madhushri</td>
                  <td>Om Madhushryai Namah</td>
                  <td>Sweet and Auspicious</td>
                </tr>
                <tr>
                  <td>246</td>
                  <td>Madhavivalli</td>
                  <td>Om Madhavivalliyai Namah</td>
                  <td>Creeper of Sweetness</td>
                </tr>
                <tr>
                  <td>247</td>
                  <td>Madhumatta</td>
                  <td>Om Madhumattayai Namah</td>
                  <td>Intoxicated by Sweetness</td>
                </tr>
                <tr>
                  <td>248</td>
                  <td>Madoddhata</td>
                  <td>Om Madoddhatayai Namah</td>
                  <td>Overflowing with Sweetness</td>
                </tr>
                <tr>
                  <td>249</td>
                  <td>Matangi</td>
                  <td>Om Matangyai Namah</td>
                  <td>Goddess of Inner Thought</td>
                </tr>
                <tr>
                  <td>250</td>
                  <td>Shukahasta</td>
                  <td>Om Shukahastayai Namah</td>
                  <td>Holding a Parrot in Her Hand</td>
                </tr>
                <tr>
                  <td>251</td>
                  <td>Pushpabana</td>
                  <td>Om Pushpabanayai Namah</td>
                  <td>Goddess with a Flower Arrow</td>
                </tr>
                <tr>
                  <td>252</td>
                  <td>Ikshuchapini</td>
                  <td>Om Ikshuchapinyai Namah</td>
                  <td>Holder of a Sugarcane Bow</td>
                </tr>
                <tr>
                  <td>253</td>
                  <td>Raktambaradhara</td>
                  <td>Om Raktambaradharinyai Namah</td>
                  <td>Wearing Red Attire</td>
                </tr>
                <tr>
                  <td>254</td>
                  <td>Kshiva</td>
                  <td>Om Kshivayai Namah</td>
                  <td>The Auspicious One</td>
                </tr>
                <tr>
                  <td>255</td>
                  <td>Raktapushpavatamsini</td>
                  <td>Om Raktapushpavatamsinyai Namah</td>
                  <td>Adorned with Red Flowers</td>
                </tr>
                <tr>
                  <td>256</td>
                  <td>Shubhrambaradhara</td>
                  <td>Om Shubhrambaradharinyai Namah</td>
                  <td>Wearing White Attire</td>
                </tr>
                <tr>
                  <td>257</td>
                  <td>Dhira</td>
                  <td>Om Dhirayai Namah</td>
                  <td>The Courageous One</td>
                </tr>
                <tr>
                  <td>258</td>
                  <td>Mahashveta</td>
                  <td>Om Mahashvetayai Namah</td>
                  <td>The Great White Goddess</td>
                </tr>
                <tr>
                  <td>259</td>
                  <td>Vasupriya</td>
                  <td>Om Vasupriyayai Namah</td>
                  <td>Beloved of Wealth</td>
                </tr>
                <tr>
                  <td>260</td>
                  <td>Suvenih</td>
                  <td>Om Suveninyai Namah</td>
                  <td>The Beautiful-Haired Goddess</td>
                </tr>
                <tr>
                  <td>261</td>
                  <td>Padmahasta</td>
                  <td>Om Padmahastayai Namah</td>
                  <td>Holding a Lotus in Hand</td>
                </tr>
                <tr>
                  <td>262</td>
                  <td>Muktaharavibhushana</td>
                  <td>Om Muktaharavibhushanayai Namah</td>
                  <td>Adorned with a Pearl Necklace</td>
                </tr>
                <tr>
                  <td>263</td>
                  <td>Karpuramodanihshvasa</td>
                  <td>Om Karpuramodanihshvasyai Namah</td>
                  <td>Exhaling the Fragrance of Camphor</td>
                </tr>
                <tr>
                  <td>264</td>
                  <td>Padmini</td>
                  <td>Om Padminyai Namah</td>
                  <td>Goddess Residing in a Lotus</td>
                </tr>
                <tr>
                  <td>265</td>
                  <td>Padmamandira</td>
                  <td>Om Padmamandirayai Namah</td>
                  <td>Residing in a Lotus Temple</td>
                </tr>
                <tr>
                  <td>266</td>
                  <td>Khadgini</td>
                  <td>Om Khadginyai Namah</td>
                  <td>Wielder of the Sword</td>
                </tr>
                <tr>
                  <td>267</td>
                  <td>Chakrahasta</td>
                  <td>Om Chakrahastayai Namah</td>
                  <td>Holding a Discus</td>
                </tr>
                <tr>
                  <td>268</td>
                  <td>Bhusundi</td>
                  <td>Om Bhusundinyai Namah</td>
                  <td>Wielder of the Bhusundi Weapon</td>
                </tr>
                <tr>
                  <td>269</td>
                  <td>Parighayudha</td>
                  <td>Om Parighayudhayai Namah</td>
                  <td>Armed with a Mace</td>
                </tr>
                <tr>
                  <td>270</td>
                  <td>Chapini</td>
                  <td>Om Chapinyai Namah</td>
                  <td>Holder of a Bow</td>
                </tr>
                <tr>
                  <td>271</td>
                  <td>Pashahasta</td>
                  <td>Om Pashahastayai Namah</td>
                  <td>Holding a Noose</td>
                </tr>
                <tr>
                  <td>272</td>
                  <td>Trishulavaradharini</td>
                  <td>Om Trishulavaradharinyai Namah</td>
                  <td>Holder of the Sacred Trident</td>
                </tr>
                <tr>
                  <td>273</td>
                  <td>Subana</td>
                  <td>Om Subanayai Namah</td>
                  <td>Goddess with Beautiful Arms</td>
                </tr>
                <tr>
                  <td>274</td>
                  <td>Shaktihasta</td>
                  <td>Om Shaktihastayai Namah</td>
                  <td>Holder of Power Weapons</td>
                </tr>
                <tr>
                  <td>275</td>
                  <td>Mayuravaravahana</td>
                  <td>Om Mayuravaravahanayai Namah</td>
                  <td>Riding a Magnificent Peacock</td>
                </tr>
                <tr>
                  <td>276</td>
                  <td>Varayudhadhara</td>
                  <td>Om Varayudhadharinyai Namah</td>
                  <td>Wielding a Supreme Weapon</td>
                </tr>
                <tr>
                  <td>277</td>
                  <td>Vira</td>
                  <td>Om Virayai Namah</td>
                  <td>The Heroic One</td>
                </tr>
                <tr>
                  <td>278</td>
                  <td>Virapanamadotkata</td>
                  <td>Om Virapanamadotkatayai Namah</td>
                  <td>Fierce Among Heroes</td>
                </tr>
                <tr>
                  <td>279</td>
                  <td>Vasudha</td>
                  <td>Om Vasudhayai Namah</td>
                  <td>The Earth Goddess</td>
                </tr>
                <tr>
                  <td>280</td>
                  <td>Vasudhara</td>
                  <td>Om Vasudharyai Namah</td>
                  <td>Supporter of the Earth</td>
                </tr>
                <tr>
                  <td>281</td>
                  <td>Jaya</td>
                  <td>Om Jayayai Namah</td>
                  <td>The Victorious One</td>
                </tr>
                <tr>
                  <td>282</td>
                  <td>Shakambhari</td>
                  <td>Om Shakambharyai Namah</td>
                  <td>Goddess Who Nourishes the World</td>
                </tr>
                <tr>
                  <td>283</td>
                  <td>Shiva</td>
                  <td>Om Shivayai Namah</td>
                  <td>The Benevolent One</td>
                </tr>
                <tr>
                  <td>284</td>
                  <td>Vijaya</td>
                  <td>Om Vijayayai Namah</td>
                  <td>The Conqueror</td>
                </tr>
                <tr>
                  <td>285</td>
                  <td>Jayanti</td>
                  <td>Om Jayantyai Namah</td>
                  <td>The Triumphant One</td>
                </tr>
                <tr>
                  <td>286</td>
                  <td>Sustani</td>
                  <td>Om Sustanyai Namah</td>
                  <td>The Well-Endowed Goddess</td>
                </tr>
                <tr>
                  <td>287</td>
                  <td>Shatrunashini</td>
                  <td>Om Shatrunashinyai Namah</td>
                  <td>Destroyer of Enemies</td>
                </tr>
                <tr>
                  <td>288</td>
                  <td>Antarvatni</td>
                  <td>Om Antarvatnyai Namah</td>
                  <td>The Inner Power</td>
                </tr>
                <tr>
                  <td>289</td>
                  <td>Vedashaktih</td>
                  <td>Om Vedashaktyai Namah</td>
                  <td>Embodiment of Vedic Power</td>
                </tr>
                <tr>
                  <td>290</td>
                  <td>Varada</td>
                  <td>Om Varadayai Namah</td>
                  <td>The Granter of Boons</td>
                </tr>
                <tr>
                  <td>291</td>
                  <td>Varadharini</td>
                  <td>Om Varadharinyai Namah</td>
                  <td>Bearer of Boons</td>
                </tr>
                <tr>
                  <td>292</td>
                  <td>Shitala</td>
                  <td>Om Shitalayai Namah</td>
                  <td>The Cooling and Soothing One</td>
                </tr>
                <tr>
                  <td>293</td>
                  <td>Sushila</td>
                  <td>Om Sushilayai Namah</td>
                  <td>The Virtuous and Gentle One</td>
                </tr>
                <tr>
                  <td>294</td>
                  <td>Balagrahavinashini</td>
                  <td>Om Balagrahavinashinyai Namah</td>
                  <td>Destroyer of Child-Seizing Demons</td>
                </tr>
                <tr>
                  <td>295</td>
                  <td>Kumari</td>
                  <td>Om Kumaryai Namah</td>
                  <td>The Eternal Maiden</td>
                </tr>
                <tr>
                  <td>296</td>
                  <td>Suparva</td>
                  <td>Om Suparvayai Namah</td>
                  <td>The Auspicious Goddess</td>
                </tr>
                <tr>
                  <td>297</td>
                  <td>Kamakhya</td>
                  <td>Om Kamakhyayai Namah</td>
                  <td>Fulfiller of Desires</td>
                </tr>
                <tr>
                  <td>298</td>
                  <td>Kamavandita</td>
                  <td>Om Kamavanditayai Namah</td>
                  <td>Worshipped for Desires</td>
                </tr>
                <tr>
                  <td>299</td>
                  <td>Jalandharadhara</td>
                  <td>Om Jalandharadharinyai Namah</td>
                  <td>Bearer of Sacred Waters</td>
                </tr>
                <tr>
                  <td>300</td>
                  <td>Ananta</td>
                  <td>Om Anantayai Namah</td>
                  <td>The Infinite Goddess</td>
                </tr>
                <tr>
                  <td>301</td>
                  <td>Kamarupanivasini</td>
                  <td>Om Kamarupanivasinyai Namah</td>
                  <td>Residing in the Form of Desire</td>
                </tr>
                <tr>
                  <td>302</td>
                  <td>Kamabijavati</td>
                  <td>Om Kamabijavatyai Namah</td>
                  <td>Holder of the Seed of Desire</td>
                </tr>
                <tr>
                  <td>303</td>
                  <td>Satya</td>
                  <td>Om Satyayai Namah</td>
                  <td>The Truthful One</td>
                </tr>
                <tr>
                  <td>304</td>
                  <td>Satyadharmaparayana</td>
                  <td>Om Satyadharmaparayanayai Namah</td>
                  <td>Devoted to Truth and Righteousness</td>
                </tr>
                <tr>
                  <td>305</td>
                  <td>Sthulamargasthita</td>
                  <td>Om Sthulamargasthitayai Namah</td>
                  <td>Residing in the Gross Path</td>
                </tr>
                <tr>
                  <td>306</td>
                  <td>Sukshma</td>
                  <td>Om Sukshmayai Namah</td>
                  <td>The Subtle One</td>
                </tr>
                <tr>
                  <td>307</td>
                  <td>Sukshmabuddhi-prabodhini</td>
                  <td>Om Sukshmabuddhiprabodhinyai Namah</td>
                  <td>Awakener of Subtle Intellect</td>
                </tr>
                <tr>
                  <td>308</td>
                  <td>Shatkona</td>
                  <td>Om Shatkonayai Namah</td>
                  <td>Residing in the Six-Pointed Star</td>
                </tr>
                <tr>
                  <td>309</td>
                  <td>Trikona</td>
                  <td>Om Trikonayai Namah</td>
                  <td>Residing in the Triangle</td>
                </tr>
                <tr>
                  <td>310</td>
                  <td>Trinetra</td>
                  <td>Om Trinetrayai Namah</td>
                  <td>Goddess with Three Eyes</td>
                </tr>
                <tr>
                  <td>311</td>
                  <td>Tripurasundari</td>
                  <td>Om Tripurasundaryai Namah</td>
                  <td>The Beautiful One of Three Worlds</td>
                </tr>
                <tr>
                  <td>312</td>
                  <td>Vrishapriya</td>
                  <td>Om Vrishapriyayi Namah</td>
                  <td>Beloved of the Bull</td>
                </tr>
                <tr>
                  <td>313</td>
                  <td>Vrisharudha</td>
                  <td>Om Vrisharudhayi Namah</td>
                  <td>Mounted on a Bull</td>
                </tr>
                <tr>
                  <td>314</td>
                  <td>Mahishasuraghatini</td>
                  <td>Om Mahishasuraghatinyai Namah</td>
                  <td>Slayer of Mahishasura</td>
                </tr>
                <tr>
                  <td>315</td>
                  <td>Shumbhadarpahara</td>
                  <td>Om Shumbhadarpaharayai Namah</td>
                  <td>Destroyer of Shumbha's Pride</td>
                </tr>
                <tr>
                  <td>316</td>
                  <td>Dipta</td>
                  <td>Om Diptayai Namah</td>
                  <td>The Radiant One</td>
                </tr>
                <tr>
                  <td>317</td>
                  <td>Diptapavakasannibha</td>
                  <td>Om Diptapavakasannibhayai Namah</td>
                  <td>Shining Like Sacred Fire</td>
                </tr>
                <tr>
                  <td>318</td>
                  <td>Kapalabhushana</td>
                  <td>Om Kapalabhushanayai Namah</td>
                  <td>Adorned with Skulls</td>
                </tr>
                <tr>
                  <td>319</td>
                  <td>Kali</td>
                  <td>Om Kalyai Namah</td>
                  <td>The Dark Goddess</td>
                </tr>
                <tr>
                  <td>320</td>
                  <td>Kapalamalyadharini</td>
                  <td>Om Kapalamalyadharinyai Namah</td>
                  <td>Wearing a Garland of Skulls</td>
                </tr>
                <tr>
                  <td>321</td>
                  <td>Kapalakundala</td>
                  <td>Om Kapalakundalayai Namah</td>
                  <td>Wearing Skull Earrings</td>
                </tr>
                <tr>
                  <td>322</td>
                  <td>Dirgha</td>
                  <td>Om Dirghayai Namah</td>
                  <td>The Tall and Majestic One</td>
                </tr>
                <tr>
                  <td>323</td>
                  <td>Shiva Duti</td>
                  <td>Om ShivaDutiyai Namah</td>
                  <td>Messenger of Lord Shiva</td>
                </tr>
                <tr>
                  <td>324</td>
                  <td>Ghanadhvanih</td>
                  <td>Om Ghanadhvanyai Namah</td>
                  <td>Producing Resonant Sounds</td>
                </tr>
                <tr>
                  <td>325</td>
                  <td>Siddhida</td>
                  <td>Om Siddhidayai Namah</td>
                  <td>Granter of Accomplishments</td>
                </tr>
                <tr>
                  <td>326</td>
                  <td>Buddhida</td>
                  <td>Om Buddhidayai Namah</td>
                  <td>Granter of Wisdom</td>
                </tr>
                <tr>
                  <td>327</td>
                  <td>Nitya</td>
                  <td>Om Nityayai Namah</td>
                  <td>The Eternal One</td>
                </tr>
                <tr>
                  <td>328</td>
                  <td>Satyamargaprabodhini</td>
                  <td>Om Satyamargaprabodhinyai Namah</td>
                  <td>Illuminator of the Path of Truth</td>
                </tr>
                <tr>
                  <td>329</td>
                  <td>Kambugriva</td>
                  <td>Om Kambugrivayai Namah</td>
                  <td>Goddess with a Neck Like a Conch</td>
                </tr>
                <tr>
                  <td>330</td>
                  <td>Vasumati</td>
                  <td>Om Vasumatyai Namah</td>
                  <td>Possessor of Wealth</td>
                </tr>
                <tr>
                  <td>331</td>
                  <td>Chhatrachchhaya-kritalaya</td>
                  <td>Om Chhatrachchhayakritalayayai Namah</td>
                  <td>Residing Under a Parasol's Shade</td>
                </tr>
                <tr>
                  <td>332</td>
                  <td>Jagadgarbha</td>
                  <td>Om Jagadgarbhayai Namah</td>
                  <td>Womb of the Universe</td>
                </tr>
                <tr>
                  <td>333</td>
                  <td>Kundalini</td>
                  <td>Om Kundalinyai Namah</td>
                  <td>Coiled Energy</td>
                </tr>
                <tr>
                  <td>334</td>
                  <td>Bhujagakarashayani</td>
                  <td>Om Bhujagakarashayanayai Namah</td>
                  <td>Reclining Like a Serpent</td>
                </tr>
                <tr>
                  <td>335</td>
                  <td>Prollasatsaptapadma</td>
                  <td>Om Prollasatsaptapadmaye Namah</td>
                  <td>Blossoming into Seven Lotus Forms</td>
                </tr>
                <tr>
                  <td>336</td>
                  <td>Nabhinalamrinalini</td>
                  <td>Om Nabhinalamrinalinyai Namah</td>
                  <td>Lotus-Stem of the Navel</td>
                </tr>
                <tr>
                  <td>337</td>
                  <td>Muladhara</td>
                  <td>Om Muladharayai Namah</td>
                  <td>Root Chakra Goddess</td>
                </tr>
                <tr>
                  <td>338</td>
                  <td>Nirakara</td>
                  <td>Om Nirakarayai Namah</td>
                  <td>Formless One</td>
                </tr>
                <tr>
                  <td>339</td>
                  <td>Vahnikundakritalaya</td>
                  <td>Om Vahnikundakritalayayai Namah</td>
                  <td>Residing in the Fire Pit</td>
                </tr>
                <tr>
                  <td>340</td>
                  <td>Vayukundasukhasina</td>
                  <td>Om Vayukundasukhasinayai Namah</td>
                  <td>Comfortably Seated in the Air Element</td>
                </tr>
                <tr>
                  <td>341</td>
                  <td>Niradhara</td>
                  <td>Om Niradharayai Namah</td>
                  <td>The Unsupported One</td>
                </tr>
                <tr>
                  <td>342</td>
                  <td>Nirashraya</td>
                  <td>Om Nirashrayayai Namah</td>
                  <td>Without Any Refuge</td>
                </tr>
                <tr>
                  <td>343</td>
                  <td>Shvasochchhvasagatih</td>
                  <td>Om Shvasochchhvasagataye Namah</td>
                  <td>The Controller of Breath</td>
                </tr>
                <tr>
                  <td>344</td>
                  <td>Jiva</td>
                  <td>Om Jivayai Namah</td>
                  <td>The Life Force</td>
                </tr>
                <tr>
                  <td>345</td>
                  <td>Grahini</td>
                  <td>Om Grahinyai Namah</td>
                  <td>The Absorber of Energy</td>
                </tr>
                <tr>
                  <td>346</td>
                  <td>Vahnisamshraya</td>
                  <td>Om Vahnisamshrayayai Namah</td>
                  <td>Residing in Fire</td>
                </tr>
                <tr>
                  <td>347</td>
                  <td>Vahnitantusamutthana</td>
                  <td>Om Vahnitantusamutthanayai Namah</td>
                  <td>Arising from Fire Threads</td>
                </tr>
                <tr>
                  <td>348</td>
                  <td>Shadrasasvadalolupa</td>
                  <td>Om Shadrasasvadalolupayai Namah</td>
                  <td>Enjoyer of Six Tastes</td>
                </tr>
                <tr>
                  <td>349</td>
                  <td>Tapasvini</td>
                  <td>Om Tapasvinyai Namah</td>
                  <td>The Ascetic One</td>
                </tr>
                <tr>
                  <td>350</td>
                  <td>Tapah Siddhih</td>
                  <td>Om Tapah Siddhyai Namah</td>
                  <td>Perfection Through Austerity</td>
                </tr>
                <tr>
                  <td>351</td>
                  <td>Tapasi</td>
                  <td>Om Tapasyai Namah</td>
                  <td>The Ascetic Goddess</td>
                </tr>
                <tr>
                  <td>352</td>
                  <td>Tapah Priya</td>
                  <td>Om Tapah Priyayai Namah</td>
                  <td>Lover of Austerity</td>
                </tr>
                <tr>
                  <td>353</td>
                  <td>Taponishtha</td>
                  <td>Om Taponishthayai Namah</td>
                  <td>Devoted to Austerities</td>
                </tr>
                <tr>
                  <td>354</td>
                  <td>Tapoyukta</td>
                  <td>Om Tapoyuktayai Namah</td>
                  <td>Engaged in Austerities</td>
                </tr>
                <tr>
                  <td>355</td>
                  <td>Tapasah Siddhidayini</td>
                  <td>Om Tapasah Siddhidayinyai Namah</td>
                  <td>Granter of Perfection Through Austerity</td>
                </tr>
                <tr>
                  <td>356</td>
                  <td>Saptadhatumayi Murtih</td>
                  <td>Om Saptadhatumayi Murtyai Namah</td>
                  <td>Embodiment of the Seven Elements</td>
                </tr>
                <tr>
                  <td>357</td>
                  <td>Saptadhatvantarashraya</td>
                  <td>Om Saptadhatvantarashrayayai Namah</td>
                  <td>Residing Within the Seven Elements</td>
                </tr>
                <tr>
                  <td>358</td>
                  <td>Dehapushtih</td>
                  <td>Om Dehapushtaye Namah</td>
                  <td>Giver of Physical Strength</td>
                </tr>
                <tr>
                  <td>359</td>
                  <td>Manastushtih</td>
                  <td>Om Manastushtaye Namah</td>
                  <td>Giver of Mental Satisfaction</td>
                </tr>
                <tr>
                  <td>360</td>
                  <td>Annapushtih</td>
                  <td>Om Annapushtaye Namah</td>
                  <td>Granter of Nourishment</td>
                </tr>
                <tr>
                  <td>361</td>
                  <td>Baloddhata</td>
                  <td>Om Baloddhatayai Namah</td>
                  <td>Granter of Strength</td>
                </tr>
                <tr>
                  <td>362</td>
                  <td>Oshadhih</td>
                  <td>Om Oshadhyai Namah</td>
                  <td>Embodiment of Medicinal Herbs</td>
                </tr>
                <tr>
                  <td>363</td>
                  <td>Vaidyamata</td>
                  <td>Om Vaidyamatayai Namah</td>
                  <td>Mother of Healing</td>
                </tr>
                <tr>
                  <td>364</td>
                  <td>Dravyashakti</td>
                  <td>Om Dravyashaktyai Namah</td>
                  <td>Power of Materials</td>
                </tr>
                <tr>
                  <td>365</td>
                  <td>Prabhavini</td>
                  <td>Om Prabhavinyai Namah</td>
                  <td>All-Pervading Goddess</td>
                </tr>
                <tr>
                  <td>366</td>
                  <td>Vaidya</td>
                  <td>Om Vaidyayai Namah</td>
                  <td>The Divine Physician</td>
                </tr>
                <tr>
                  <td>367</td>
                  <td>Vaidyachikitsa</td>
                  <td>Om Vaidyachikitsayai Namah</td>
                  <td>Expert in Medical Treatment</td>
                </tr>
                <tr>
                  <td>368</td>
                  <td>Supathya</td>
                  <td>Om Supathyayai Namah</td>
                  <td>Granter of Good Health</td>
                </tr>
                <tr>
                  <td>369</td>
                  <td>Roganashini</td>
                  <td>Om Roganashinyai Namah</td>
                  <td>Destroyer of Diseases</td>
                </tr>
                <tr>
                  <td>370</td>
                  <td>Mrigaya</td>
                  <td>Om Mrigayayai Namah</td>
                  <td>Goddess of the Hunt</td>
                </tr>
                <tr>
                  <td>371</td>
                  <td>Mrigamamsada</td>
                  <td>Om Mrigamamsadayai Namah</td>
                  <td>Partaker of Animal Flesh</td>
                </tr>
                <tr>
                  <td>372</td>
                  <td>Mrigatvak</td>
                  <td>Om Mrigatvakayai Namah</td>
                  <td>Wearing Animal Skin</td>
                </tr>
                <tr>
                  <td>373</td>
                  <td>Mrigalochana</td>
                  <td>Om Mrigalochanayai Namah</td>
                  <td>Doe-Eyed Goddess</td>
                </tr>
                <tr>
                  <td>374</td>
                  <td>Vagura</td>
                  <td>Om Vagurayai Namah</td>
                  <td>Goddess of Nets</td>
                </tr>
                <tr>
                  <td>375</td>
                  <td>Bandharupa</td>
                  <td>Om Bandharupayai Namah</td>
                  <td>Embodiment of Binding</td>
                </tr>
                <tr>
                  <td>376</td>
                  <td>Vadharupa</td>
                  <td>Om Vadharupayai Namah</td>
                  <td>Embodiment of Killing</td>
                </tr>
                <tr>
                  <td>377</td>
                  <td>Vadhoddhata</td>
                  <td>Om Vadhoddhatayai Namah</td>
                  <td>Destroyer of Evil</td>
                </tr>
                <tr>
                  <td>378</td>
                  <td>Bandi</td>
                  <td>Om Bandiyai Namah</td>
                  <td>The Captive Goddess</td>
                </tr>
                <tr>
                  <td>379</td>
                  <td>Vandistutakara</td>
                  <td>Om Vandistutakarayai Namah</td>
                  <td>Praised by All</td>
                </tr>
                <tr>
                  <td>380</td>
                  <td>Karabandhavimochni</td>
                  <td>Om Karabandhavimochnyai Namah</td>
                  <td>Liberator from Shackles</td>
                </tr>
                <tr>
                  <td>381</td>
                  <td>Shrinkhala</td>
                  <td>Om Shrinkhalayai Namah</td>
                  <td>The Chain Goddess</td>
                </tr>
                <tr>
                  <td>382</td>
                  <td>Khalaha</td>
                  <td>Om Khalahayai Namah</td>
                  <td>Destroyer of Wickedness</td>
                </tr>
                <tr>
                  <td>383</td>
                  <td>Vidyuta</td>
                  <td>Om Vidyutayai Namah</td>
                  <td>Radiant Like Lightning</td>
                </tr>
                <tr>
                  <td>384</td>
                  <td>Dridhabandhavimochani</td>
                  <td>Om Dridhabandhavimochnyai Namah</td>
                  <td>Breaker of Strong Bonds</td>
                </tr>
                <tr>
                  <td>385</td>
                  <td>Ambika</td>
                  <td>Om Ambikayai Namah</td>
                  <td>Mother of the Universe</td>
                </tr>
                <tr>
                  <td>386</td>
                  <td>Ambalika</td>
                  <td>Om Ambalikayai Namah</td>
                  <td>The Gentle Mother</td>
                </tr>
                <tr>
                  <td>387</td>
                  <td>Amba</td>
                  <td>Om Ambayai Namah</td>
                  <td>The Mother Goddess</td>
                </tr>
                <tr>
                  <td>388</td>
                  <td>Svaksha</td>
                  <td>Om Svakshayai Namah</td>
                  <td>Possessing Beautiful Eyes</td>
                </tr>
                <tr>
                  <td>389</td>
                  <td>Sadhujanarchita</td>
                  <td>Om Sadhujanarchitayai Namah</td>
                  <td>Worshipped by the Virtuous</td>
                </tr>
                <tr>
                  <td>390</td>
                  <td>Kauliki</td>
                  <td>Om Kaulikyai Namah</td>
                  <td>Keeper of Secret Knowledge</td>
                </tr>
                <tr>
                  <td>391</td>
                  <td>Kulavidya</td>
                  <td>Om Kulavidyayai Namah</td>
                  <td>Preserver of Lineage Knowledge</td>
                </tr>
                <tr>
                  <td>392</td>
                  <td>Sukula</td>
                  <td>Om Sukulayai Namah</td>
                  <td>Of Noble Lineage</td>
                </tr>
                <tr>
                  <td>393</td>
                  <td>Kulapujita</td>
                  <td>Om Kulapujitayai Namah</td>
                  <td>Worshipped by the Family</td>
                </tr>
                <tr>
                  <td>394</td>
                  <td>Kalachakrabhrama</td>
                  <td>Om Kalachakrabhramayai Namah</td>
                  <td>Rotating the Wheel of Time</td>
                </tr>
                <tr>
                  <td>395</td>
                  <td>Bhranta</td>
                  <td>Om Bhrantayai Namah</td>
                  <td>Wanderer of the World</td>
                </tr>
                <tr>
                  <td>396</td>
                  <td>Vibhrama</td>
                  <td>Om Vibhramayai Namah</td>
                  <td>Embodiment of Delusion</td>
                </tr>
                <tr>
                  <td>397</td>
                  <td>Bhramanashini</td>
                  <td>Om Bhramanashinyai Namah</td>
                  <td>Destroyer of Delusion</td>
                </tr>
                <tr>
                  <td>398</td>
                  <td>Vatyali</td>
                  <td>Om Vatyalayai Namah</td>
                  <td>Goddess of Storms</td>
                </tr>
                <tr>
                  <td>399</td>
                  <td>Meghamala</td>
                  <td>Om Meghamalayai Namah</td>
                  <td>Adorned with Clouds</td>
                </tr>
                <tr>
                  <td>400</td>
                  <td>Suvrishtih</td>
                  <td>Om Suvrishtyai Namah</td>
                  <td>Granter of Good Rain</td>
                </tr>
                <tr>
                  <td>401</td>
                  <td>Sasyavardhini</td>
                  <td>Om Sasyavardhinyai Namah</td>
                  <td>Granter of Agricultural Prosperity</td>
                </tr>
                <tr>
                  <td>402</td>
                  <td>Akara</td>
                  <td>Om Akarayai Namah</td>
                  <td>The Letter 'A'</td>
                </tr>
                <tr>
                  <td>403</td>
                  <td>Ikara</td>
                  <td>Om Ikarayai Namah</td>
                  <td>The Letter 'I'</td>
                </tr>
                <tr>
                  <td>404</td>
                  <td>Ukara</td>
                  <td>Om Ukarayai Namah</td>
                  <td>The Letter 'U'</td>
                </tr>
                <tr>
                  <td>405</td>
                  <td>Aikararupini</td>
                  <td>Om Aikararupinyai Namah</td>
                  <td>The Form of 'Ai' Sound</td>
                </tr>
                <tr>
                  <td>406</td>
                  <td>Hrimkari</td>
                  <td>Om Hrimkaryai Namah</td>
                  <td>Creator of the Hrim Sound</td>
                </tr>
                <tr>
                  <td>407</td>
                  <td>Bijarupa</td>
                  <td>Om Bijarupayai Namah</td>
                  <td>Embodiment of Seed Mantras</td>
                </tr>
                <tr>
                  <td>408</td>
                  <td>Klimkara</td>
                  <td>Om Klimkaryai Namah</td>
                  <td>Creator of the Klim Sound</td>
                </tr>
                <tr>
                  <td>409</td>
                  <td>Ambaravasini</td>
                  <td>Om Ambaravasinyai Namah</td>
                  <td>Residing in the Sky</td>
                </tr>
                <tr>
                  <td>410</td>
                  <td>Sarvaksharamayi Shakti</td>
                  <td>Om Sarvaksharamayi Shaktyai Namah</td>
                  <td>Power Containing All Letters</td>
                </tr>
                <tr>
                  <td>411</td>
                  <td>Akshara</td>
                  <td>Om Aksharayai Namah</td>
                  <td>The Imperishable One</td>
                </tr>
                <tr>
                  <td>412</td>
                  <td>Varnamalini</td>
                  <td>Om Varnamalinyai Namah</td>
                  <td>Adorned with Alphabets</td>
                </tr>
                <tr>
                  <td>413</td>
                  <td>Sindurarunavaktra</td>
                  <td>Om Sindurarunavaktrayai Namah</td>
                  <td>With a Face as Red as Vermilion</td>
                </tr>
                <tr>
                  <td>414</td>
                  <td>Sinduratilakapriya</td>
                  <td>Om Sinduratilakapriyayi Namah</td>
                  <td>Fond of Vermilion Markings</td>
                </tr>
                <tr>
                  <td>415</td>
                  <td>Vashya</td>
                  <td>Om Vashyayai Namah</td>
                  <td>The Enchanting One</td>
                </tr>
                <tr>
                  <td>416</td>
                  <td>Vashyabija</td>
                  <td>Om Vashyabijayai Namah</td>
                  <td>Essence of Enchantment Seed Mantra</td>
                </tr>
                <tr>
                  <td>417</td>
                  <td>Lokavashyavibhavini</td>
                  <td>Om Lokavashyavibhavinyai Namah</td>
                  <td>Enchantress of All Worlds</td>
                </tr>
                <tr>
                  <td>418</td>
                  <td>Nripavashya</td>
                  <td>Om Nripavashyayai Namah</td>
                  <td>Enchantress of Kings</td>
                </tr>
                <tr>
                  <td>419</td>
                  <td>Nripaih Sevya</td>
                  <td>Om Nripaih Sevyayai Namah</td>
                  <td>Worshipped by Kings</td>
                </tr>
                <tr>
                  <td>420</td>
                  <td>Nripavashyakari</td>
                  <td>Om Nripavashyakaryai Namah</td>
                  <td>Controller of Kings</td>
                </tr>
                <tr>
                  <td>421</td>
                  <td>Priya</td>
                  <td>Om Priyayai Namah</td>
                  <td>The Beloved One</td>
                </tr>
                <tr>
                  <td>422</td>
                  <td>Mahishi</td>
                  <td>Om Mahishyai Namah</td>
                  <td>The Sovereign Goddess</td>
                </tr>
                <tr>
                  <td>423</td>
                  <td>Nripamanya</td>
                  <td>Om Nripamanyayai Namah</td>
                  <td>Esteemed by Kings</td>
                </tr>
                <tr>
                  <td>424</td>
                  <td>Nrimanya</td>
                  <td>Om Nrimanyayai Namah</td>
                  <td>Respected by Noble Men</td>
                </tr>
                <tr>
                  <td>425</td>
                  <td>Nripanandini</td>
                  <td>Om Nripanandinyai Namah</td>
                  <td>Bestower of Joy to Kings</td>
                </tr>
                <tr>
                  <td>426</td>
                  <td>Nripadharmamayi</td>
                  <td>Om Nripadharmamayai Namah</td>
                  <td>Upholder of Kings’ Duties</td>
                </tr>
                <tr>
                  <td>427</td>
                  <td>Dhanya</td>
                  <td>Om Dhanyayai Namah</td>
                  <td>The Blessed One</td>
                </tr>
                <tr>
                  <td>428</td>
                  <td>Dhanadhanyavivardhini</td>
                  <td>Om Dhanadhanyavivardhinyai Namah</td>
                  <td>Enhancer of Wealth and Food Grains</td>
                </tr>
                <tr>
                  <td>429</td>
                  <td>Chaturvarnamayi Murtih</td>
                  <td>Om Chaturvarnamayi Murtyai Namah</td>
                  <td>Embodiment of Four Social Classes</td>
                </tr>
                <tr>
                  <td>430</td>
                  <td>Chaturvarnaishcha Pujita</td>
                  <td>Om Chaturvarnaishcha Pujitayai Namah</td>
                  <td>Worshipped by the Four Social Classes</td>
                </tr>
                <tr>
                  <td>431</td>
                  <td>Sarvadharmamayi Siddhi</td>
                  <td>Om Sarvadharmamayi Siddhyai Namah</td>
                  <td>Essence of All Righteousness</td>
                </tr>
                <tr>
                  <td>432</td>
                  <td>Chaturashramavasini</td>
                  <td>Om Chaturashramavasinyai Namah</td>
                  <td>Residing in Four Stages of Life</td>
                </tr>
                <tr>
                  <td>433</td>
                  <td>Brahmani</td>
                  <td>Om Brahmanyai Namah</td>
                  <td>Goddess of Knowledge</td>
                </tr>
                <tr>
                  <td>434</td>
                  <td>Kshatriya</td>
                  <td>Om Kshatriyayai Namah</td>
                  <td>Goddess of Warriors</td>
                </tr>
                <tr>
                  <td>435</td>
                  <td>Vaishya</td>
                  <td>Om Vaishyayai Namah</td>
                  <td>Protector of Merchants</td>
                </tr>
                <tr>
                  <td>436</td>
                  <td>Shudra</td>
                  <td>Om Shudrayai Namah</td>
                  <td>Protector of Laborers</td>
                </tr>
                <tr>
                  <td>437</td>
                  <td>Avaravarnaja</td>
                  <td>Om Avaravarnajayai Namah</td>
                  <td>Born of Lower Classes</td>
                </tr>
                <tr>
                  <td>438</td>
                  <td>Vedamargarata</td>
                  <td>Om Vedamargaratayai Namah</td>
                  <td>Follower of the Vedic Path</td>
                </tr>
                <tr>
                  <td>439</td>
                  <td>Yajna</td>
                  <td>Om Yajnayai Namah</td>
                  <td>Embodiment of Sacrifice</td>
                </tr>
                <tr>
                  <td>440</td>
                  <td>Vedavishvavibhavini</td>
                  <td>Om Vedavishvavibhavinyai Namah</td>
                  <td>Knower of All Vedas and Worlds</td>
                </tr>
                <tr>
                  <td>441</td>
                  <td>Astrashastramayi Vidya</td>
                  <td>Om Astrashastramayi Vidyayai Namah</td>
                  <td>Knowledge of Weapons and Scriptures</td>
                </tr>
                <tr>
                  <td>442</td>
                  <td>Varashastrastradharini</td>
                  <td>Om Varashastrastradharinyai Namah</td>
                  <td>Wielder of Divine Weapons</td>
                </tr>
                <tr>
                  <td>443</td>
                  <td>Sumedha</td>
                  <td>Om Sumedhayai Namah</td>
                  <td>The Wise One</td>
                </tr>
                <tr>
                  <td>444</td>
                  <td>Satyamedha</td>
                  <td>Om Satyamedhayai Namah</td>
                  <td>Truthful and Wise</td>
                </tr>
                <tr>
                  <td>445</td>
                  <td>Bhadrakali</td>
                  <td>Om Bhadrakalyai Namah</td>
                  <td>The Fierce and Auspicious One</td>
                </tr>
                <tr>
                  <td>446</td>
                  <td>Aparajita</td>
                  <td>Om Aparajitayai Namah</td>
                  <td>The Undefeated One</td>
                </tr>
                <tr>
                  <td>447</td>
                  <td>Gayatri</td>
                  <td>Om Gayatryai Namah</td>
                  <td>Protector of the Gayatri Mantra</td>
                </tr>
                <tr>
                  <td>448</td>
                  <td>Satkritih</td>
                  <td>Om Satkrityai Namah</td>
                  <td>The Honored One</td>
                </tr>
                <tr>
                  <td>449</td>
                  <td>Sandhya</td>
                  <td>Om Sandhyayai Namah</td>
                  <td>Goddess of Twilight</td>
                </tr>
                <tr>
                  <td>450</td>
                  <td>Savitri</td>
                  <td>Om Savitryai Namah</td>
                  <td>Mother of the Sun</td>
                </tr>
                <tr>
                  <td>451</td>
                  <td>Tripadashraya</td>
                  <td>Om Tripadashrayayai Namah</td>
                  <td>Abode of the Three Worlds</td>
                </tr>
                <tr>
                  <td>452</td>
                  <td>Trisandhya</td>
                  <td>Om Trisandhyayai Namah</td>
                  <td>Goddess of the Three Junctions of Time</td>
                </tr>
                <tr>
                  <td>453</td>
                  <td>Tripadi</td>
                  <td>Om Tripadyai Namah</td>
                  <td>Embodiment of the Three Steps</td>
                </tr>
                <tr>
                  <td>454</td>
                  <td>Dhatri</td>
                  <td>Om Dhatryai Namah</td>
                  <td>The Supporter of the World</td>
                </tr>
                <tr>
                  <td>455</td>
                  <td>Suparva</td>
                  <td>Om Suparvayai Namah</td>
                  <td>The Auspicious Goddess</td>
                </tr>
                <tr>
                  <td>456</td>
                  <td>Samagayani</td>
                  <td>Om Samagayanyai Namah</td>
                  <td>Goddess of Vedic Chants</td>
                </tr>
                <tr>
                  <td>457</td>
                  <td>Panchali</td>
                  <td>Om Panchalyai Namah</td>
                  <td>One Who Resides in Five Elements</td>
                </tr>
                <tr>
                  <td>458</td>
                  <td>Balika</td>
                  <td>Om Balikayai Namah</td>
                  <td>The Eternal Young Girl</td>
                </tr>
                Stanadhara Om Stanadharinyai Namah Holder of Nourishment
                <tr>
                  <td>459</td>
                  <td>Bala</td>
                  <td>Om Balayai Namah</td>
                  <td>Embodiment of Strength</td>
                </tr>
                <tr>
                  <td>460</td>
                  <td>Balakrida</td>
                  <td>Om Balakridayai Namah</td>
                  <td>One Who Plays Like a Child</td>
                </tr>
                <tr>
                  <td>461</td>
                  <td>Sanatani</td>
                  <td>Om Sanatanyai Namah</td>
                  <td>The Eternal One</td>
                </tr>
                <tr>
                  <td>462</td>
                  <td>Grarbhadharadhara</td>
                  <td>Om Grarbhadharadharinyai Namah</td>
                  <td>Supporter of Pregnancy</td>
                </tr>
                <tr>
                  <td>463</td>
                  <td>Shunya</td>
                  <td>Om Shunyayai Namah</td>
                  <td>The Void or Emptiness</td>
                </tr>
                <tr>
                  <td>464</td>
                  <td>Garbhashayanivasini</td>
                  <td>Om Garbhashayanivasinyai Namah</td>
                  <td>Residing in the Womb</td>
                </tr>
                <tr>
                  <td>465</td>
                  <td>Surarighatini Kritya</td>
                  <td>Om Surarighatinyai Namah</td>
                  <td>Destroyer of the Enemy of Gods</td>
                </tr>
                <tr>
                  <td>466</td>
                  <td>Putana</td>
                  <td>Om Putanayai Namah</td>
                  <td>Destroyer of the Demon Putana</td>
                </tr>
                <tr>
                  <td>467</td>
                  <td>Tilottama</td>
                  <td>Om Tilottamayai Namah</td>
                  <td>The Most Beautiful One</td>
                </tr>
                <tr>
                  <td>468</td>
                  <td>Lajja</td>
                  <td>Om Lajjayai Namah</td>
                  <td>Embodiment of Modesty</td>
                </tr>
                <tr>
                  <td>469</td>
                  <td>Rasavati</td>
                  <td>Om Rasavatyai Namah</td>
                  <td>Full of Essence</td>
                </tr>
                <tr>
                  <td>470</td>
                  <td>Nanda</td>
                  <td>Om Nandayai Namah</td>
                  <td>The Blissful One</td>
                </tr>
                <tr>
                  <td>471</td>
                  <td>Bhavani</td>
                  <td>Om Bhavanyai Namah</td>
                  <td>Goddess of Existence</td>
                </tr>
                <tr>
                  <td>472</td>
                  <td>Papanashini</td>
                  <td>Om Papanashinyai Namah</td>
                  <td>Destroyer of Sins</td>
                </tr>
                <tr>
                  <td>473</td>
                  <td>Pattambaradhara</td>
                  <td>Om Pattambaradharinyai Namah</td>
                  <td>Clad in Silken Garments</td>
                </tr>
                <tr>
                  <td>474</td>
                  <td>Gitih</td>
                  <td>Om Gitiyai Namah</td>
                  <td>Goddess of Song</td>
                </tr>
                <tr>
                  <td>475</td>
                  <td>Sugitih</td>
                  <td>Om Sugitayai Namah</td>
                  <td>Embodiment of Beautiful Songs</td>
                </tr>
                <tr>
                  <td>476</td>
                  <td>Jnanalochana</td>
                  <td>Om Jnanalochanayai Namah</td>
                  <td>One with Eyes of Knowledge</td>
                </tr>
                <tr>
                  <td>477</td>
                  <td>Saptasvaramayi Tantri</td>
                  <td>Om Saptasvaramayi Tantryai Namah</td>
                  <td>Goddess of Seven Musical Notes</td>
                </tr>
                <tr>
                  <td>478</td>
                  <td>Shadjamadhya-madhaivata</td>
                  <td>Om Shadjamadhya-madhaivatayai Namah</td>
                  <td>Embodiment of Musical Scales</td>
                </tr>
                <tr>
                  <td>479</td>
                  <td>Murchchhanagrama-samsthana</td>
                  <td>Om Murchchhanagrama-samsthanayai Namah</td>
                  <td>Controller of Musical Tones</td>
                </tr>
                <tr>
                  <td>480</td>
                  <td>Svastha</td>
                  <td>Om Svasthayai Namah</td>
                  <td>The Self-Existing One</td>
                </tr>
                <tr>
                  <td>481</td>
                  <td>Svasthanavasini</td>
                  <td>Om Svasthanavasinyai Namah</td>
                  <td>Residing in Her Own Place</td>
                </tr>
                <tr>
                  <td>482</td>
                  <td>Attatahasini</td>
                  <td>Om Attatahasinyai Namah</td>
                  <td>The Goddess of Loud Laughter</td>
                </tr>
                <tr>
                  <td>483</td>
                  <td>Preta</td>
                  <td>Om Pretayai Namah</td>
                  <td>Controller of Spirits</td>
                </tr>
                <tr>
                  <td>484</td>
                  <td>Pretasananivasini</td>
                  <td>Om Pretasananivasinyai Namah</td>
                  <td>Residing Among Spirits</td>
                </tr>
                <tr>
                  <td>485</td>
                  <td>Gitanrityapriya</td>
                  <td>Om Gitanrityapriyayi Namah</td>
                  <td>Lover of Music and Dance</td>
                </tr>
                <tr>
                  <td>486</td>
                  <td>Akama</td>
                  <td>Om Akamayai Namah</td>
                  <td>The Desireless One</td>
                </tr>
                <tr>
                  <td>487</td>
                  <td>Tushtida</td>
                  <td>Om Tushtidayai Namah</td>
                  <td>Granter of Contentment</td>
                </tr>
                <tr>
                  <td>488</td>
                  <td>Pushtida</td>
                  <td>Om Pushtidayai Namah</td>
                  <td>Granter of Nourishment</td>
                </tr>
                <tr>
                  <td>489</td>
                  <td>Akshaya</td>
                  <td>Om Akshayayai Namah</td>
                  <td>The Imperishable One</td>
                </tr>
                <tr>
                  <td>490</td>
                  <td>Nishtha</td>
                  <td>Om Nishthayai Namah</td>
                  <td>The Ultimate Abode</td>
                </tr>
                <tr>
                  <td>491</td>
                  <td>Satyapriya</td>
                  <td>Om Satyapriyayi Namah</td>
                  <td>Lover of Truth</td>
                </tr>
                <tr>
                  <td>492</td>
                  <td>Prajna</td>
                  <td>Om Prajnayai Namah</td>
                  <td>Embodiment of Wisdom</td>
                </tr>
                <tr>
                  <td>493</td>
                  <td>Lokeshi</td>
                  <td>Om Lokeshyai Namah</td>
                  <td>Ruler of the World</td>
                </tr>
                <tr>
                  <td>494</td>
                  <td>Surottama</td>
                  <td>Om Surottamayai Namah</td>
                  <td>The Best Among the Divine</td>
                </tr>
                <tr>
                  <td>495</td>
                  <td>Savisha</td>
                  <td>Om Savishayai Namah</td>
                  <td>The Poison Bearer</td>
                </tr>
                <tr>
                  <td>496</td>
                  <td>Jwalini</td>
                  <td>Om Jwalinyai Namah</td>
                  <td>The Radiant and Fiery One</td>
                </tr>
                <tr>
                  <td>497</td>
                  <td>Jwala</td>
                  <td>Om Jwalayai Namah</td>
                  <td>The Flaming One</td>
                </tr>
                <tr>
                  <td>498</td>
                  <td>Vishamohartinashini</td>
                  <td>Om Vishamohartinashinyai Namah</td>
                  <td>Destroyer of Poisonous Delusion</td>
                </tr>
                <tr>
                  <td>499</td>
                  <td>Visharih</td>
                  <td>Om Visharihyai Namah</td>
                  <td>Destroyer of Venom</td>
                </tr>
                <tr>
                  <td>500</td>
                  <td>Nagadamani</td>
                  <td>Om Nagadamanayai Namah</td>
                  <td>Adorned with Serpents</td>
                </tr>
                <tr>
                  <td>501</td>
                  <td>Kurukulla</td>
                  <td>Om Kurukullayai Namah</td>
                  <td>The Enchanting One</td>
                </tr>
                <tr>
                  <td>502</td>
                  <td>Amritodbhava</td>
                  <td>Om Amritodbhavayai Namah</td>
                  <td>Born of Nectar</td>
                </tr>
                <tr>
                  <td>503</td>
                  <td>Bhutabhitihara Raksha</td>
                  <td>Om Bhutabhitihara Rakshayai Namah</td>
                  <td>Protector from Ghostly Fears</td>
                </tr>
                <tr>
                  <td>504</td>
                  <td>Bhutaveshavinashini</td>
                  <td>Om Bhutaveshavinashinyai Namah</td>
                  <td>Destroyer of Ghostly Possessions</td>
                </tr>
                <tr>
                  <td>505</td>
                  <td>Rakshoghni</td>
                  <td>Om Rakshoghnai Namah</td>
                  <td>Slayer of Demons</td>
                </tr>
                <tr>
                  <td>506</td>
                  <td>Rakshasi</td>
                  <td>Om Rakshasyai Namah</td>
                  <td>The Powerful One</td>
                </tr>
                <tr>
                  <td>507</td>
                  <td>Ratrih</td>
                  <td>Om Ratriyai Namah</td>
                  <td>Goddess of Night</td>
                </tr>
                <tr>
                  <td>508</td>
                  <td>Dirghanidra</td>
                  <td>Om Dirghanidrayai Namah</td>
                  <td>Granter of Deep Sleep</td>
                </tr>
                <tr>
                  <td>509</td>
                  <td>Divagatih</td>
                  <td>Om Divagataye Namah</td>
                  <td>Controller of Celestial Paths</td>
                </tr>
                <tr>
                  <td>510</td>
                  <td>Chandrika</td>
                  <td>Om Chandrikayai Namah</td>
                  <td>Radiant Like the Moon</td>
                </tr>
                <tr>
                  <td>511</td>
                  <td>Chandrakanti</td>
                  <td>Om Chandrakantyai Namah</td>
                  <td>Moonlit Glow</td>
                </tr>
                <tr>
                  <td>512</td>
                  <td>Suryakanti</td>
                  <td>Om Suryakantyai Namah</td>
                  <td>Radiant Like the Sun</td>
                </tr>
                <tr>
                  <td>513</td>
                  <td>Nishachari</td>
                  <td>Om Nishacharyai Namah</td>
                  <td>Wanderer of the Night</td>
                </tr>
                <tr>
                  <td>514</td>
                  <td>Dakini</td>
                  <td>Om Dakinyai Namah</td>
                  <td>Fierce Protector Goddess</td>
                </tr>
                <tr>
                  <td>515</td>
                  <td>Shakini</td>
                  <td>Om Shakinyai Namah</td>
                  <td>Embodiment of Energy</td>
                </tr>
                <tr>
                  <td>516</td>
                  <td>Shishya</td>
                  <td>Om Shishyayai Namah</td>
                  <td>Guide and Teacher</td>
                </tr>
                <tr>
                  <td>517</td>
                  <td>Hakini</td>
                  <td>Om Hakinyai Namah</td>
                  <td>Controller of the Mind</td>
                </tr>
                <tr>
                  <td>518</td>
                  <td>Chakravakini</td>
                  <td>Om Chakravakinyai Namah</td>
                  <td>Residing in the Chakras</td>
                </tr>
                <tr>
                  <td>519</td>
                  <td>Sitasitapriya</td>
                  <td>Om Sitasitapriyayi Namah</td>
                  <td>Fond of Both White and Black</td>
                </tr>
                <tr>
                  <td>520</td>
                  <td>Svanga</td>
                  <td>Om Svangayai Namah</td>
                  <td>The Perfectly Formed One</td>
                </tr>
                <tr>
                  <td>521</td>
                  <td>Sakala</td>
                  <td>Om Sakalayai Namah</td>
                  <td>The Complete One</td>
                </tr>
                <tr>
                  <td>522</td>
                  <td>Vanadevata</td>
                  <td>Om Vanadevatyai Namah</td>
                  <td>Goddess of Forests</td>
                </tr>
                <tr>
                  <td>523</td>
                  <td>Gururupadhara</td>
                  <td>Om Gururupadharinyai Namah</td>
                  <td>Assuming the Form of a Teacher</td>
                </tr>
                <tr>
                  <td>524</td>
                  <td>Gurvi</td>
                  <td>Om Gurvyai Namah</td>
                  <td>The Revered Teacher</td>
                </tr>
                <tr>
                  <td>525</td>
                  <td>Mrityuh</td>
                  <td>Om Mrityave Namah</td>
                  <td>Embodiment of Death</td>
                </tr>
                <tr>
                  <td>526</td>
                  <td>Mari</td>
                  <td>Om Maraye Namah</td>
                  <td>The Crushing Force</td>
                </tr>
                <tr>
                  <td>527</td>
                  <td>Visharada</td>
                  <td>Om Visharadayai Namah</td>
                  <td>The Skilled and Wise</td>
                </tr>
                <tr>
                  <td>528</td>
                  <td>Mahamari</td>
                  <td>Om Mahamarinyai Namah</td>
                  <td>The Great Destroyer</td>
                </tr>
                <tr>
                  <td>529</td>
                  <td>Vinidra</td>
                  <td>Om Vinidrayai Namah</td>
                  <td>The Sleepless One</td>
                </tr>
                <tr>
                  <td>530</td>
                  <td>Tandra</td>
                  <td>Om Tandrayai Namah</td>
                  <td>The Slumbering One</td>
                </tr>
                <tr>
                  <td>531</td>
                  <td>Mrityuvinashini</td>
                  <td>Om Mrityuvinashinyai Namah</td>
                  <td>Destroyer of Death</td>
                </tr>
                <tr>
                  <td>532</td>
                  <td>Chandramandala-sankasha</td>
                  <td>Om Chandramandala-sankashayai Namah</td>
                  <td>Radiant Like the Lunar Circle</td>
                </tr>
                <tr>
                  <td>533</td>
                  <td>Chandramandalavasini</td>
                  <td>Om Chandramandalavasinyai Namah</td>
                  <td>Residing in the Lunar Circle</td>
                </tr>
                <tr>
                  <td>534</td>
                  <td>Animadigunopeta</td>
                  <td>Om Animadigunopetayai Namah</td>
                  <td>Possessor of the Eight Siddhis</td>
                </tr>
                <tr>
                  <td>535</td>
                  <td>Suspriha</td>
                  <td>Om Susprihayai Namah</td>
                  <td>The Most Desirable One</td>
                </tr>
                <tr>
                  <td>536</td>
                  <td>Kamarupini</td>
                  <td>Om Kamarupinyai Namah</td>
                  <td>One Who Assumes Desired Forms</td>
                </tr>
                <tr>
                  <td>537</td>
                  <td>Ashtasiddhiprada</td>
                  <td>Om Ashtasiddhipradayai Namah</td>
                  <td>Granter of Eight Siddhis</td>
                </tr>
                <tr>
                  <td>538</td>
                  <td>Praudha</td>
                  <td>Om Praudhayai Namah</td>
                  <td>The Majestic One</td>
                </tr>
                <tr>
                  <td>539</td>
                  <td>Dushtadanavaghatini</td>
                  <td>Om Dushtadanavaghatinyai Namah</td>
                  <td>Destroyer of Evil Demons</td>
                </tr>
                <tr>
                  <td>540</td>
                  <td>Anadinidhana Pushti</td>
                  <td>Om Anadinidhana Pushtaye Namah</td>
                  <td>Eternal Source of Nourishment</td>
                </tr>
                <tr>
                  <td>541</td>
                  <td>Chaturbahuh</td>
                  <td>Om Chaturbahave Namah</td>
                  <td>The Four-Armed Goddess</td>
                </tr>
                <tr>
                  <td>542</td>
                  <td>Chaturmukhi</td>
                  <td>Om Chaturmukhyai Namah</td>
                  <td>Goddess with Four Faces</td>
                </tr>
                <tr>
                  <td>543</td>
                  <td>Chatuhsamudrashayana</td>
                  <td>Om Chatuhsamudrashayanayai Namah</td>
                  <td>Residing Over Four Oceans</td>
                </tr>
                <tr>
                  <td>544</td>
                  <td>Chaturvargaphalaprada</td>
                  <td>Om Chaturvargaphalapradayai Namah</td>
                  <td>Granter of Fourfold Rewards</td>
                </tr>
                <tr>
                  <td>545</td>
                  <td>Kashapushpapratikasha</td>
                  <td>Om Kashapushpapratikashayai Namah</td>
                  <td>Radiant Like Kasha Flowers</td>
                </tr>
                <tr>
                  <td>546</td>
                  <td>Sharatkumudalochana</td>
                  <td>Om Sharatkumudalochanayai Namah</td>
                  <td>Eyes Like Autumn Lotuses</td>
                </tr>
                <tr>
                  <td>547</td>
                  <td>Bhuta</td>
                  <td>Om Bhutayai Namah</td>
                  <td>Goddess of All Beings</td>
                </tr>
                <tr>
                  <td>548</td>
                  <td>Bhavya</td>
                  <td>Om Bhavyayai Namah</td>
                  <td>Goddess of the Present</td>
                </tr>
                <tr>
                  <td>549</td>
                  <td>Bhavishya</td>
                  <td>Om Bhavishyayai Namah</td>
                  <td>Goddess of the Future</td>
                </tr>
                <tr>
                  <td>550</td>
                  <td>Shailaja</td>
                  <td>Om Shailajayai Namah</td>
                  <td>Daughter of the Mountain</td>
                </tr>
                <tr>
                  <td>551</td>
                  <td>Shailavasini</td>
                  <td>Om Shailavasinyai Namah</td>
                  <td>Residing in the Mountains</td>
                </tr>
                <tr>
                  <td>552</td>
                  <td>Vamamargarata</td>
                  <td>Om Vamamargaratayai Namah</td>
                  <td>Follower of the Left-Hand Path</td>
                </tr>
                <tr>
                  <td>553</td>
                  <td>Vama</td>
                  <td>Om Vamayai Namah</td>
                  <td>The Graceful One</td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>Shivavamangavasini</td>
                  <td>Om Shivavamangavasinyai Namah</td>
                  <td>Residing on Lord Shiva’s Left Side</td>
                </tr>
                <tr>
                  <td>555</td>
                  <td>Vamacharapriya</td>
                  <td>Om Vamacharapriyayi Namah</td>
                  <td>Lover of Left-Hand Practices</td>
                </tr>
                <tr>
                  <td>556</td>
                  <td>Tushta</td>
                  <td>Om Tushtayai Namah</td>
                  <td>The Contented One</td>
                </tr>
                <tr>
                  <td>557</td>
                  <td>Lopamudra</td>
                  <td>Om Lopamudrayai Namah</td>
                  <td>Goddess of the Vedic Tradition</td>
                </tr>
                <tr>
                  <td>558</td>
                  <td>Prabodhini</td>
                  <td>Om Prabodhinyai Namah</td>
                  <td>The Enlightening One</td>
                </tr>
                <tr>
                  <td>559</td>
                  <td>Bhutatma</td>
                  <td>Om Bhutatmayai Namah</td>
                  <td>Soul of All Beings</td>
                </tr>
                <tr>
                  <td>560</td>
                  <td>Paramatma</td>
                  <td>Om Paramatmayai Namah</td>
                  <td>The Supreme Soul</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td>Bhutabhavivibhavini</td>
                  <td>Om Bhutabhavivibhavinyai Namah</td>
                  <td>Mistress of Past, Present, and Future</td>
                </tr>
                <tr>
                  <td>562</td>
                  <td>Mangala</td>
                  <td>Om Mangalayai Namah</td>
                  <td>The Auspicious One</td>
                </tr>
                <tr>
                  <td>563</td>
                  <td>Sushila</td>
                  <td>Om Sushilayai Namah</td>
                  <td>The Virtuous and Gentle One</td>
                </tr>
                <tr>
                  <td>564</td>
                  <td>Paramarthaprabodhini</td>
                  <td>Om Paramarthaprabodhinyai Namah</td>
                  <td>Enlightener of Supreme Goals</td>
                </tr>
                <tr>
                  <td>565</td>
                  <td>Dakshina</td>
                  <td>Om Dakshinayai Namah</td>
                  <td>The South-Facing Goddess</td>
                </tr>
                <tr>
                  <td>566</td>
                  <td>Dakshinamurti</td>
                  <td>Om Dakshinamurtyai Namah</td>
                  <td>The South-Facing Teacher</td>
                </tr>
                <tr>
                  <td>567</td>
                  <td>Sudakshina</td>
                  <td>Om Sudakshinyai Namah</td>
                  <td>The Well-Graced One</td>
                </tr>
                <tr>
                  <td>568</td>
                  <td>Haripriya</td>
                  <td>Om Haripriyayi Namah</td>
                  <td>Beloved of Lord Vishnu</td>
                </tr>
                <tr>
                  <td>569</td>
                  <td>Yogini</td>
                  <td>Om Yoginyai Namah</td>
                  <td>Practitioner of Yoga</td>
                </tr>
                <tr>
                  <td>570</td>
                  <td>Yogayukta</td>
                  <td>Om Yogayuktayai Namah</td>
                  <td>United with Yoga</td>
                </tr>
                <tr>
                  <td>571</td>
                  <td>Yoganga</td>
                  <td>Om Yogangayai Namah</td>
                  <td>The Limbs of Yoga</td>
                </tr>
                <tr>
                  <td>572</td>
                  <td>Dhyanashalini</td>
                  <td>Om Dhyanashalinyai Namah</td>
                  <td>The Meditative One</td>
                </tr>
                <tr>
                  <td>573</td>
                  <td>Yogapattadhara</td>
                  <td>Om Yogapattadharayai Namah</td>
                  <td>Wearing the Yoga Belt</td>
                </tr>
                <tr>
                  <td>574</td>
                  <td>Mukta</td>
                  <td>Om Muktayai Namah</td>
                  <td>The Liberated One</td>
                </tr>
                <tr>
                  <td>575</td>
                  <td>Muktanamparamagati</td>
                  <td>Om Muktanamparamagataye Namah</td>
                  <td>Ultimate Goal of the Liberated</td>
                </tr>
                <tr>
                  <td>576</td>
                  <td>Narasimhi</td>
                  <td>Om Narasimhyai Namah</td>
                  <td>Energy of Narasimha Avatar</td>
                </tr>
                <tr>
                  <td>577</td>
                  <td>Sujanma</td>
                  <td>Om Sujanmayai Namah</td>
                  <td>Possessor of Noble Birth</td>
                </tr>
                <tr>
                  <td>578</td>
                  <td>Trivargaphaladayini</td>
                  <td>Om Trivargaphaladayinyai Namah</td>
                  <td>Granter of Threefold Goals</td>
                </tr>
                <tr>
                  <td>579</td>
                  <td>Dharmada</td>
                  <td>Om Dharmadayai Namah</td>
                  <td>Granter of Righteousness</td>
                </tr>
                <tr>
                  <td>580</td>
                  <td>Dhanada</td>
                  <td>Om Dhanadayai Namah</td>
                  <td>Granter of Wealth</td>
                </tr>
                <tr>
                  <td>581</td>
                  <td>Kamada</td>
                  <td>Om Kamadayai Namah</td>
                  <td>Fulfiller of Desires</td>
                </tr>
                <tr>
                  <td>582</td>
                  <td>Mokshada</td>
                  <td>Om Mokshadayai Namah</td>
                  <td>Granter of Liberation</td>
                </tr>
                <tr>
                  <td>583</td>
                  <td>Dyuti</td>
                  <td>Om Dyutaye Namah</td>
                  <td>The Radiant One</td>
                </tr>
                <tr>
                  <td>584</td>
                  <td>Sakshini</td>
                  <td>Om Sakshinyai Namah</td>
                  <td>The Witness</td>
                </tr>
                <tr>
                  <td>585</td>
                  <td>Kshanada</td>
                  <td>Om Kshanadayai Namah</td>
                  <td>The Night Goddess</td>
                </tr>
                <tr>
                  <td>586</td>
                  <td>Daksha</td>
                  <td>Om Dakshayai Namah</td>
                  <td>The Skilful One</td>
                </tr>
                <tr>
                  <td>587</td>
                  <td>Dakshaja</td>
                  <td>Om Dakshajayai Namah</td>
                  <td>Daughter of Daksha</td>
                </tr>
                <tr>
                  <td>588</td>
                  <td>Kotirupini</td>
                  <td>Om Kotirupinyai Namah</td>
                  <td>Goddess with Countless Forms</td>
                </tr>
                <tr>
                  <td>589</td>
                  <td>Kratuh</td>
                  <td>Om Kratave Namah</td>
                  <td>Embodiment of Sacrificial Rituals</td>
                </tr>
                <tr>
                  <td>590</td>
                  <td>Katyayani</td>
                  <td>Om Katyayanyai Namah</td>
                  <td>Daughter of Sage Katyayana</td>
                </tr>
                <tr>
                  <td>591</td>
                  <td>Svachchha</td>
                  <td>Om Svachchhayai Namah</td>
                  <td>The Transparent One</td>
                </tr>
                <tr>
                  <td>592</td>
                  <td>Svachchhanda</td>
                  <td>Om Svachchhandayai Namah</td>
                  <td>The Free-Willed Goddess</td>
                </tr>
                <tr>
                  <td>593</td>
                  <td>Kavipriya</td>
                  <td>Om Kavipriyayi Namah</td>
                  <td>Beloved of Poets</td>
                </tr>
                <tr>
                  <td>594</td>
                  <td>Satyagama</td>
                  <td>Om Satyagamayai Namah</td>
                  <td>Devoted to Truth</td>
                </tr>
                <tr>
                  <td>595</td>
                  <td>Bahihstha</td>
                  <td>Om Bahihsthayai Namah</td>
                  <td>Residing Outside</td>
                </tr>
                <tr>
                  <td>596</td>
                  <td>Kavyashakti</td>
                  <td>Om Kavyashaktyai Namah</td>
                  <td>Embodiment of Poetic Power</td>
                </tr>
                <tr>
                  <td>597</td>
                  <td>Kavitvada</td>
                  <td>Om Kavitvadayai Namah</td>
                  <td>Bestower of Poetic Skills</td>
                </tr>
                <tr>
                  <td>598</td>
                  <td>Menaputri</td>
                  <td>Om Menaputryai Namah</td>
                  <td>Daughter of Menaka</td>
                </tr>
                <tr>
                  <td>599</td>
                  <td>Satimata</td>
                  <td>Om Satimatayai Namah</td>
                  <td>Mother of Truth</td>
                </tr>
                <tr>
                  <td>600</td>
                  <td>Mainakabhagini</td>
                  <td>Om Mainakabhaginyai Namah</td>
                  <td>Sister of Mainaka</td>
                </tr>
                <tr>
                  <td>601</td>
                  <td>Tadit</td>
                  <td>Om Tadityai Namah</td>
                  <td>The Flashing One</td>
                </tr>
                <tr>
                  <td>602</td>
                  <td>Saudamini</td>
                  <td>Om Saudaminyai Namah</td>
                  <td>The Lightning-Like One</td>
                </tr>
                <tr>
                  <td>603</td>
                  <td>Svadhama</td>
                  <td>Om Svadhamayai Namah</td>
                  <td>The Self-Illuminating One</td>
                </tr>
                <tr>
                  <td>604</td>
                  <td>Sudhama</td>
                  <td>Om Sudhamayai Namah</td>
                  <td>Residing in Bliss</td>
                </tr>
                <tr>
                  <td>605</td>
                  <td>Dhamashalini</td>
                  <td>Om Dhamashalinyai Namah</td>
                  <td>Abode of Virtue</td>
                </tr>
                <tr>
                  <td>606</td>
                  <td>Saubhagyadayini</td>
                  <td>Om Saubhagyadayinyai Namah</td>
                  <td>Granter of Good Fortune</td>
                </tr>
                <tr>
                  <td>607</td>
                  <td>Dyauh</td>
                  <td>Om Dyuhyai Namah</td>
                  <td>The Celestial Goddess</td>
                </tr>
                <tr>
                  <td>608</td>
                  <td>Subhaga</td>
                  <td>Om Subhagayai Namah</td>
                  <td>The Auspicious One</td>
                </tr>
                <tr>
                  <td>609</td>
                  <td>Dyutivardhini</td>
                  <td>Om Dyutivardhinyai Namah</td>
                  <td>Enhancer of Radiance</td>
                </tr>
                <tr>
                  <td>610</td>
                  <td>Shrih</td>
                  <td>Om Shriyayi Namah</td>
                  <td>Goddess of Prosperity</td>
                </tr>
                <tr>
                  <td>611</td>
                  <td>Krittivasana</td>
                  <td>Om Krittivasanayai Namah</td>
                  <td>Wearing a Tiger Skin</td>
                </tr>
                <tr>
                  <td>612</td>
                  <td>Kankali</td>
                  <td>Om Kankalyai Namah</td>
                  <td>Wearing a Skeleton</td>
                </tr>
                <tr>
                  <td>613</td>
                  <td>Kalinashini</td>
                  <td>Om Kalinashinyai Namah</td>
                  <td>Destroyer of Time</td>
                </tr>
                <tr>
                  <td>614</td>
                  <td>Raktabijavadhoddripta</td>
                  <td>Om Raktabijavadhoddriptayai Namah</td>
                  <td>Slayer of Raktabija</td>
                </tr>
                <tr>
                  <td>615</td>
                  <td>Sutantuh</td>
                  <td>Om Sutantave Namah</td>
                  <td>Thread of Continuity</td>
                </tr>
                <tr>
                  <td>616</td>
                  <td>Bijasantati</td>
                  <td>Om Bijasantatyai Namah</td>
                  <td>Seed of Progeny</td>
                </tr>
                <tr>
                  <td>617</td>
                  <td>Jagajjiva</td>
                  <td>Om Jagajjivayai Namah</td>
                  <td>Life Force of the Universe</td>
                </tr>
                <tr>
                  <td>618</td>
                  <td>Jagadbija</td>
                  <td>Om Jagadbiyayai Namah</td>
                  <td>Seed of the Universe</td>
                </tr>
                <tr>
                  <td>619</td>
                  <td>Jagattrayahitaishini</td>
                  <td>Om Jagattrayahitaishinyai Namah</td>
                  <td>Benefactor of the Three Worlds</td>
                </tr>
                <tr>
                  <td>620</td>
                  <td>Chamikararuchih</td>
                  <td>Om Chamikararuchyai Namah</td>
                  <td>Radiant Like Gold</td>
                </tr>
                <tr>
                  <td>621</td>
                  <td>Chandrisakshaya-shodashikala</td>
                  <td>Om Chandrisakshaya-shodashikalayai Namah</td>
                  <td>Having Sixteen Phases Like the Moon</td>
                </tr>
                <tr>
                  <td>622</td>
                  <td>Yattatpadanubandha</td>
                  <td>Om Yattatpadanubandhayai Namah</td>
                  <td>Attached to Divine Feet</td>
                </tr>
                <tr>
                  <td>623</td>
                  <td>Yakshini</td>
                  <td>Om Yakshinyai Namah</td>
                  <td>Celestial Spirit</td>
                </tr>
                <tr>
                  <td>624</td>
                  <td>Dhanadarchita</td>
                  <td>Om Dhanadarchitayai Namah</td>
                  <td>Worshipped by Kubera</td>
                </tr>
                <tr>
                  <td>625</td>
                  <td>Chitrini</td>
                  <td>Om Chitrinyai Namah</td>
                  <td>The Multicolored Goddess</td>
                </tr>
                <tr>
                  <td>626</td>
                  <td>Chitramaya</td>
                  <td>Om Chitramayayai Namah</td>
                  <td>Creator of Illusions</td>
                </tr>
                <tr>
                  <td>627</td>
                  <td>Vichitra</td>
                  <td>Om Vichitrayai Namah</td>
                  <td>The Wondrous One</td>
                </tr>
                <tr>
                  <td>628</td>
                  <td>Bhuvaneshwari</td>
                  <td>Om Bhuvaneshwaryai Namah</td>
                  <td>Queen of the Universe</td>
                </tr>
                <tr>
                  <td>629</td>
                  <td>Chamunda</td>
                  <td>Om Chamundayai Namah</td>
                  <td>Slayer of Chanda and Munda</td>
                </tr>
                <tr>
                  <td>630</td>
                  <td>Mundahasta</td>
                  <td>Om Mundahastayai Namah</td>
                  <td>Holding Munda's Head</td>
                </tr>
                <tr>
                  <td>631</td>
                  <td>Chandamunda-vadhoddhura</td>
                  <td>Om Chandamunda-vadhoddhurayai Namah</td>
                  <td>Uplifted by Slaying Chanda and Munda</td>
                </tr>
                <tr>
                  <td>632</td>
                  <td>Ashtami</td>
                  <td>Om Ashtamyai Namah</td>
                  <td>Eighth Day Goddess</td>
                </tr>
                <tr>
                  <td>633</td>
                  <td>Ekadashi</td>
                  <td>Om Ekadashyai Namah</td>
                  <td>Eleventh Day Goddess</td>
                </tr>
                <tr>
                  <td>634</td>
                  <td>Purna</td>
                  <td>Om Purnayai Namah</td>
                  <td>The Complete One</td>
                </tr>
                <tr>
                  <td>635</td>
                  <td>Navami</td>
                  <td>Om Navamyai Namah</td>
                  <td>Ninth Day Goddess</td>
                </tr>
                <tr>
                  <td>636</td>
                  <td>Chaturdashi</td>
                  <td>Om Chaturdashyai Namah</td>
                  <td>Fourteenth Day Goddess</td>
                </tr>
                <tr>
                  <td>637</td>
                  <td>Ama</td>
                  <td>Om Amayai Namah</td>
                  <td>New Moon Goddess</td>
                </tr>
                <tr>
                  <td>638</td>
                  <td>Kalashahasta</td>
                  <td>Om Kalashahastayai Namah</td>
                  <td>Holding a Water Pitcher</td>
                </tr>
                <tr>
                  <td>639</td>
                  <td>Purnakumbhadhara</td>
                  <td>Om Purnakumbhadharinyai Namah</td>
                  <td>Bearer of the Full Pitcher</td>
                </tr>
                <tr>
                  <td>640</td>
                  <td>Dhara</td>
                  <td>Om Dharayai Namah</td>
                  <td>The Supporter</td>
                </tr>
                <tr>
                  <td>641</td>
                  <td>Abhiruh</td>
                  <td>Om Abhiruhyai Namah</td>
                  <td>The Ascending One</td>
                </tr>
                <tr>
                  <td>642</td>
                  <td>Bhairavi</td>
                  <td>Om Bhairavyai Namah</td>
                  <td>The Terrifying Goddess</td>
                </tr>
                <tr>
                  <td>643</td>
                  <td>Bhira</td>
                  <td>Om Bhirayai Namah</td>
                  <td>The Fearless One</td>
                </tr>
                <tr>
                  <td>644</td>
                  <td>Bhima</td>
                  <td>Om Bhimayai Namah</td>
                  <td>The Terrible One</td>
                </tr>
                <tr>
                  <td>645</td>
                  <td>Tripurabhairavi</td>
                  <td>Om Tripurabhairavyai Namah</td>
                  <td>Terrifying Ruler of the Three Worlds</td>
                </tr>
                <tr>
                  <td>646</td>
                  <td>Maharunda</td>
                  <td>Om Maharundayai Namah</td>
                  <td>The Great Destroyer</td>
                </tr>
                <tr>
                  <td>647</td>
                  <td>Raudri</td>
                  <td>Om Raudryai Namah</td>
                  <td>The Fierce One</td>
                </tr>
                <tr>
                  <td>648</td>
                  <td>Mahabhairavapujita</td>
                  <td>Om Mahabhairavapujitayai Namah</td>
                  <td>Worshipped by Great Bhairava</td>
                </tr>
                <tr>
                  <td>649</td>
                  <td>Nirmunda</td>
                  <td>Om Nirmundayai Namah</td>
                  <td>Without a Head</td>
                </tr>
                <tr>
                  <td>650</td>
                  <td>Hastini</td>
                  <td>Om Hastinyai Namah</td>
                  <td>The Elephant Goddess</td>
                </tr>
                <tr>
                  <td>651</td>
                  <td>Chanda</td>
                  <td>Om Chandayai Namah</td>
                  <td>Fierce Warrior Goddess</td>
                </tr>
                <tr>
                  <td>652</td>
                  <td>Karaladashananana</td>
                  <td>Om Karaladashanananayai Namah</td>
                  <td>Fierce with Ten Faces</td>
                </tr>
                <tr>
                  <td>653</td>
                  <td>Karala</td>
                  <td>Om Karalayai Namah</td>
                  <td>The Formidable One</td>
                </tr>
                <tr>
                  <td>654</td>
                  <td>Vikarala</td>
                  <td>Om Vikaralayai Namah</td>
                  <td>The Terrifying One</td>
                </tr>
                <tr>
                  <td>655</td>
                  <td>Ghoraghurghuranadini</td>
                  <td>Om Ghoraghurghuranadinyai Namah</td>
                  <td>Roaring Fiercely</td>
                </tr>
                <tr>
                  <td>656</td>
                  <td>Raktadanta</td>
                  <td>Om Raktadantayai Namah</td>
                  <td>With Blood-Red Teeth</td>
                </tr>
                <tr>
                  <td>657</td>
                  <td>Urdhvakeshi</td>
                  <td>Om Urdhvakeshyai Namah</td>
                  <td>With Hair Standing on End</td>
                </tr>
                <tr>
                  <td>658</td>
                  <td>Bandhukakusumaruna</td>
                  <td>Om Bandhukakusumarunayai Namah</td>
                  <td>Red Like the Bandhuka Flower</td>
                </tr>
                <tr>
                  <td>659</td>
                  <td>Kadambari</td>
                  <td>Om Kadambarinyai Namah</td>
                  <td>Resembling Kadamba Flowers</td>
                </tr>
                <tr>
                  <td>660</td>
                  <td>Patasa</td>
                  <td>Om Patasayai Namah</td>
                  <td>Swift as the Wind</td>
                </tr>
                <tr>
                  <td>661</td>
                  <td>Kashmiri</td>
                  <td>Om Kashmiriyai Namah</td>
                  <td>Radiant Like Saffron</td>
                </tr>
                <tr>
                  <td>662</td>
                  <td>Kumkumapriya</td>
                  <td>Om Kumkumapriyayi Namah</td>
                  <td>Fond of Vermilion</td>
                </tr>
                <tr>
                  <td>663</td>
                  <td>Kshanti</td>
                  <td>Om Kshantyai Namah</td>
                  <td>Embodiment of Patience</td>
                </tr>
                <tr>
                  <td>664</td>
                  <td>Bahusuvarna</td>
                  <td>Om Bahusuvarnayai Namah</td>
                  <td>Possessing Many Golds</td>
                </tr>
                <tr>
                  <td>665</td>
                  <td>Ratih</td>
                  <td>Om Ratayai Namah</td>
                  <td>Embodiment of Love</td>
                </tr>
                <tr>
                  <td>666</td>
                  <td>Bahusuvarnada</td>
                  <td>Om Bahusuvarnadayai Namah</td>
                  <td>Giver of Much Gold</td>
                </tr>
                <tr>
                  <td>667</td>
                  <td>Matangini</td>
                  <td>Om Matanginyai Namah</td>
                  <td>Resembling a Female Elephant</td>
                </tr>
                <tr>
                  <td>668</td>
                  <td>Vararoha</td>
                  <td>Om Vararohayai Namah</td>
                  <td>Mounting on the Best</td>
                </tr>
                <tr>
                  <td>669</td>
                  <td>Mattamatangagamini</td>
                  <td>Om Mattamatangagaminyai Namah</td>
                  <td>Graceful as an Intoxicated Elephant</td>
                </tr>
                <tr>
                  <td>670</td>
                  <td>Himsa</td>
                  <td>Om Himsayai Namah</td>
                  <td>Embodiment of Violence</td>
                </tr>
                <tr>
                  <td>671</td>
                  <td>Hansagati</td>
                  <td>Om Hansagataye Namah</td>
                  <td>Moving Like a Swan</td>
                </tr>
                <tr>
                  <td>672</td>
                  <td>Hansi</td>
                  <td>Om Hansyai Namah</td>
                  <td>The Swan Goddess</td>
                </tr>
                <tr>
                  <td>673</td>
                  <td>Hansojjvalashiroruha</td>
                  <td>Om Hansojjvalashiroruhayai Namah</td>
                  <td>With Radiant Swan-Like Hair</td>
                </tr>
                <tr>
                  <td>674</td>
                  <td>Purnachandramukhi</td>
                  <td>Om Purnachandramukhiyai Namah</td>
                  <td>Face Like the Full Moon</td>
                </tr>
                <tr>
                  <td>675</td>
                  <td>Shyama</td>
                  <td>Om Shyamayai Namah</td>
                  <td>The Dark-Hued One</td>
                </tr>
                <tr>
                  <td>676</td>
                  <td>Smitasya</td>
                  <td>Om Smitsyayai Namah</td>
                  <td>With a Beautiful Smile</td>
                </tr>
                <tr>
                  <td>677</td>
                  <td>Shyamakundala</td>
                  <td>Om Shyamakundalayai Namah</td>
                  <td>Wearing Dark Earrings</td>
                </tr>
                <tr>
                  <td>678</td>
                  <td>Mashi</td>
                  <td>Om Mashiyai Namah</td>
                  <td>The Ink Goddess</td>
                </tr>
                <tr>
                  <td>679</td>
                  <td>Lekhini</td>
                  <td>Om Lekhinyai Namah</td>
                  <td>The Writing Goddess</td>
                </tr>
                <tr>
                  <td>680</td>
                  <td>Lekhya</td>
                  <td>Om Lekhyayai Namah</td>
                  <td>Embodiment of Writing</td>
                </tr>
                <tr>
                  <td>681</td>
                  <td>Sulekha</td>
                  <td>Om Sulekhayai Namah</td>
                  <td>The Beautifully Written One</td>
                </tr>
                <tr>
                  <td>682</td>
                  <td>Lekhakapriya</td>
                  <td>Om Lekhakapriyayi Namah</td>
                  <td>Beloved of Writers</td>
                </tr>
                <tr>
                  <td>683</td>
                  <td>Shankhini</td>
                  <td>Om Shankhinyai Namah</td>
                  <td>The Conch Goddess</td>
                </tr>
                <tr>
                  <td>684</td>
                  <td>Shankhahasta</td>
                  <td>Om Shankhahastayai Namah</td>
                  <td>Holding a Conch in Hand</td>
                </tr>
                <tr>
                  <td>685</td>
                  <td>Jalastha</td>
                  <td>Om Jalasthayai Namah</td>
                  <td>Residing in Water</td>
                </tr>
                <tr>
                  <td>686</td>
                  <td>Jaladevata</td>
                  <td>Om Jaladevatyai Namah</td>
                  <td>Goddess of Water</td>
                </tr>
                <tr>
                  <td>687</td>
                  <td>Kurukshetravani</td>
                  <td>Om Kurukshetravaninyai Namah</td>
                  <td>Goddess of Kurukshetra</td>
                </tr>
                <tr>
                  <td>688</td>
                  <td>Kashi</td>
                  <td>Om Kashyai Namah</td>
                  <td>Goddess of Kashi</td>
                </tr>
                <tr>
                  <td>689</td>
                  <td>Mathura</td>
                  <td>Om Mathurayai Namah</td>
                  <td>Goddess of Mathura</td>
                </tr>
                <tr>
                  <td>690</td>
                  <td>Kanchi</td>
                  <td>Om Kanchyai Namah</td>
                  <td>Goddess of Kanchi</td>
                </tr>
                <tr>
                  <td>691</td>
                  <td>Avantika</td>
                  <td>Om Avantikayai Namah</td>
                  <td>Goddess of Avantika</td>
                </tr>
                <tr>
                  <td>692</td>
                  <td>Ayodhya</td>
                  <td>Om Ayodhyayai Namah</td>
                  <td>Goddess of Ayodhya</td>
                </tr>
                <tr>
                  <td>693</td>
                  <td>Dwaraka</td>
                  <td>Om Dwarakayai Namah</td>
                  <td>Goddess of Dwaraka</td>
                </tr>
                <tr>
                  <td>694</td>
                  <td>Maya</td>
                  <td>Om Mayayai Namah</td>
                  <td>Goddess of Illusion</td>
                </tr>
                <tr>
                  <td>695</td>
                  <td>Tirtha</td>
                  <td>Om Tirthayai Namah</td>
                  <td>Goddess of Pilgrimage</td>
                </tr>
                <tr>
                  <td>696</td>
                  <td>Tirthakarapriya</td>
                  <td>Om Tirthakarapriyayi Namah</td>
                  <td>Loved by the Tirthankaras</td>
                </tr>
                <tr>
                  <td>697</td>
                  <td>Tripushkara</td>
                  <td>Om Tripushkarayai Namah</td>
                  <td>Goddess of Three Holy Rivers</td>
                </tr>
                <tr>
                  <td>698</td>
                  <td>Aprameya</td>
                  <td>Om Aprameyayai Namah</td>
                  <td>The Immeasurable One</td>
                </tr>
                <tr>
                  <td>699</td>
                  <td>Koshastha</td>
                  <td>Om Koshasthayai Namah</td>
                  <td>Residing in Treasures</td>
                </tr>
                <tr>
                  <td>700</td>
                  <td>Koshavasini</td>
                  <td>Om Koshavasinyai Namah</td>
                  <td>Residing Within Vaults</td>
                </tr>
                <tr>
                  <td>701</td>
                  <td>Kaushiki</td>
                  <td>Om Kaushikyai Namah</td>
                  <td>Goddess Created from Cosmic Energy</td>
                </tr>
                <tr>
                  <td>702</td>
                  <td>Kushavarta</td>
                  <td>Om Kushavartayai Namah</td>
                  <td>Goddess of Sacred Pools</td>
                </tr>
                <tr>
                  <td>703</td>
                  <td>Kaushambi</td>
                  <td>Om Kaushambyai Namah</td>
                  <td>Residing in Kaushambi</td>
                </tr>
                <tr>
                  <td>704</td>
                  <td>Koshavardhini</td>
                  <td>Om Koshavardhinyai Namah</td>
                  <td>Enhancer of Treasures</td>
                </tr>
                <tr>
                  <td>705</td>
                  <td>Koshada</td>
                  <td>Om Koshadayai Namah</td>
                  <td>Giver of Treasures</td>
                </tr>
                <tr>
                  <td>706</td>
                  <td>Padmakoshakshi</td>
                  <td>Om Padmakoshakshyai Namah</td>
                  <td>Lotus-Eyed Goddess</td>
                </tr>
                <tr>
                  <td>707</td>
                  <td>Kusuma</td>
                  <td>Om Kusumayai Namah</td>
                  <td>Blossoming Like Flowers</td>
                </tr>
                <tr>
                  <td>708</td>
                  <td>Kusumapriya</td>
                  <td>Om Kusumapriyayi Namah</td>
                  <td>Lover of Flowers</td>
                </tr>
                <tr>
                  <td>709</td>
                  <td>Totula</td>
                  <td>Om Totulayai Namah</td>
                  <td>Swift and Active</td>
                </tr>
                <tr>
                  <td>710</td>
                  <td>Tulakotih</td>
                  <td>Om Tulakotyai Namah</td>
                  <td>Balancer of the Universe</td>
                </tr>
                <tr>
                  <td>711</td>
                  <td>Kutastha</td>
                  <td>Om Kutasthayai Namah</td>
                  <td>Immoveable and Steadfast</td>
                </tr>
                <tr>
                  <td>712</td>
                  <td>Kotarashraya</td>
                  <td>Om Kotarashrayayai Namah</td>
                  <td>Residing in Caves</td>
                </tr>
                <tr>
                  <td>713</td>
                  <td>Svayambhuh</td>
                  <td>Om Svayambhuyai Namah</td>
                  <td>Self-Created</td>
                </tr>
                <tr>
                  <td>714</td>
                  <td>Surupa</td>
                  <td>Om Surupayai Namah</td>
                  <td>The Beautiful One</td>
                </tr>
                <tr>
                  <td>715</td>
                  <td>Svarupa</td>
                  <td>Om Svarupayai Namah</td>
                  <td>Of True Form</td>
                </tr>
                <tr>
                  <td>716</td>
                  <td>Rupavardhini</td>
                  <td>Om Rupavardhinyai Namah</td>
                  <td>Enhancer of Beauty</td>
                </tr>
                <tr>
                  <td>717</td>
                  <td>Tejasvini</td>
                  <td>Om Tejasvinyai Namah</td>
                  <td>Radiant and Powerful</td>
                </tr>
                <tr>
                  <td>718</td>
                  <td>Subhiksha</td>
                  <td>Om Subhikshayai Namah</td>
                  <td>Granter of Abundance</td>
                </tr>
                <tr>
                  <td>719</td>
                  <td>Balada</td>
                  <td>Om Baladayai Namah</td>
                  <td>Giver of Strength</td>
                </tr>
                <tr>
                  <td>720</td>
                  <td>Baladayini</td>
                  <td>Om Baladayinyai Namah</td>
                  <td>Granter of Vitality</td>
                </tr>
                <tr>
                  <td>721</td>
                  <td>Mahakoshi</td>
                  <td>Om Mahakoshyai Namah</td>
                  <td>The Great Treasure</td>
                </tr>
                <tr>
                  <td>722</td>
                  <td>Mahavarta</td>
                  <td>Om Mahavartayai Namah</td>
                  <td>Of Great Turning Cycles</td>
                </tr>
                <tr>
                  <td>723</td>
                  <td>Buddhi Sadasadatmikayai</td>
                  <td>Om Buddhi Sadasadatmikayai Namah</td>
                  <td>Embodiment of Right and Wrong Wisdom</td>
                </tr>
                <tr>
                  <td>724</td>
                  <td>Mahagrahahara</td>
                  <td>Om Mahagrahaharayai Namah</td>
                  <td>Destroyer of Great Obstacles</td>
                </tr>
                <tr>
                  <td>725</td>
                  <td>Saumya</td>
                  <td>Om Saumyayai Namah</td>
                  <td>The Gentle and Peaceful One</td>
                </tr>
                <tr>
                  <td>726</td>
                  <td>Vishoka</td>
                  <td>Om Vishokayai Namah</td>
                  <td>Free from Sorrow</td>
                </tr>
                <tr>
                  <td>727</td>
                  <td>Shokanashini</td>
                  <td>Om Shokanashinyai Namah</td>
                  <td>Destroyer of Grief</td>
                </tr>
                <tr>
                  <td>728</td>
                  <td>Sattviki</td>
                  <td>Om Sattvikyai Namah</td>
                  <td>Embodiment of Purity</td>
                </tr>
                <tr>
                  <td>729</td>
                  <td>Sattvasamstha</td>
                  <td>Om Sattvasamsthayai Namah</td>
                  <td>Established in Purity</td>
                </tr>
                <tr>
                  <td>730</td>
                  <td>Rajasi</td>
                  <td>Om Rajasiyai Namah</td>
                  <td>Embodiment of Passion</td>
                </tr>
                <tr>
                  <td>731</td>
                  <td>Rajovrita</td>
                  <td>Om Rajovritayai Namah</td>
                  <td>Surrounded by Passion</td>
                </tr>
                <tr>
                  <td>732</td>
                  <td>Tamasi</td>
                  <td>Om Tamasyai Namah</td>
                  <td>Embodiment of Darkness</td>
                </tr>
                <tr>
                  <td>733</td>
                  <td>Tamoyukta</td>
                  <td>Om Tamoyuktayai Namah</td>
                  <td>Filled with Darkness</td>
                </tr>
                <tr>
                  <td>734</td>
                  <td>Gunatrayavibhavini</td>
                  <td>Om Gunatrayavibhavinyai Namah</td>
                  <td>Master of the Three Gunas</td>
                </tr>
                <tr>
                  <td>735</td>
                  <td>Avyakta</td>
                  <td>Om Avyaktayai Namah</td>
                  <td>The Unmanifested One</td>
                </tr>
                <tr>
                  <td>736</td>
                  <td>Vyaktarupa</td>
                  <td>Om Vyaktarupayai Namah</td>
                  <td>With a Manifested Form</td>
                </tr>
                <tr>
                  <td>737</td>
                  <td>Vedavidya</td>
                  <td>Om Vedavidyayai Namah</td>
                  <td>Knower of Vedic Knowledge</td>
                </tr>
                <tr>
                  <td>738</td>
                  <td>Shambhavi</td>
                  <td>Om Shambhavyai Namah</td>
                  <td>Consort of Lord Shiva</td>
                </tr>
                <tr>
                  <td>739</td>
                  <td>Shankarakalpini Kalpa</td>
                  <td>Om Shankarakalpini Kalpayai Namah</td>
                  <td>Inspirer of Shiva's Will and Time Cycles</td>
                </tr>
                <tr>
                  <td>740</td>
                  <td>Manah Sankalpasantati</td>
                  <td>Om Manah Sankalpasantatyai Namah</td>
                  <td>Generator of Thought Continuity</td>
                </tr>
                <tr>
                  <td>741</td>
                  <td>Sarvalokamayi Shakti</td>
                  <td>Om Sarvalokamayi Shaktyai Namah</td>
                  <td>Power Pervading All Worlds</td>
                </tr>
                <tr>
                  <td>742</td>
                  <td>Sarvashravanagochara</td>
                  <td>Om Sarvashravanagocharayai Namah</td>
                  <td>Audible to All</td>
                </tr>
                <tr>
                  <td>743</td>
                  <td>Sarvajnanavativanchha</td>
                  <td>Om Sarvajnanavativanchhayai Namah</td>
                  <td>Wielder of All Knowledge</td>
                </tr>
                <tr>
                  <td>744</td>
                  <td>Sarvatattvanubodhini</td>
                  <td>Om Sarvatattvanubodhinyai Namah</td>
                  <td>Illuminator of All Principles</td>
                </tr>
                <tr>
                  <td>745</td>
                  <td>Jagriti</td>
                  <td>Om Jagrityai Namah</td>
                  <td>The Awakening One</td>
                </tr>
                <tr>
                  <td>746</td>
                  <td>Sushupti</td>
                  <td>Om Sushuptyai Namah</td>
                  <td>Goddess of Deep Sleep</td>
                </tr>
                <tr>
                  <td>747</td>
                  <td>Svapnavastha</td>
                  <td>Om Svapnavasthayai Namah</td>
                  <td>Controller of Dream State</td>
                </tr>
                <tr>
                  <td>748</td>
                  <td>Turiyaka</td>
                  <td>Om Turiyakayai Namah</td>
                  <td>Beyond the Three States</td>
                </tr>
                <tr>
                  <td>749</td>
                  <td>Tvara</td>
                  <td>Om Tvarayai Namah</td>
                  <td>The Swift One</td>
                </tr>
                <tr>
                  <td>750</td>
                  <td>Mandagati</td>
                  <td>Om Mandagataye Namah</td>
                  <td>The Slow-Moving One</td>
                </tr>
                <tr>
                  <td>751</td>
                  <td>Manda</td>
                  <td>Om Mandayai Namah</td>
                  <td>The Gentle One</td>
                </tr>
                <tr>
                  <td>752</td>
                  <td>Mandiramodadharini</td>
                  <td>Om Mandiramodadharinyai Namah</td>
                  <td>Bearer of Temple Fragrance</td>
                </tr>
                <tr>
                  <td>753</td>
                  <td>Panabhumi</td>
                  <td>Om Panabhumyai Namah</td>
                  <td>The Land of Offerings</td>
                </tr>
                <tr>
                  <td>754</td>
                  <td>Panapatra</td>
                  <td>Om Panapatrayai Namah</td>
                  <td>Holder of the Offering Bowl</td>
                </tr>
                <tr>
                  <td>755</td>
                  <td>Panadanakarodyata</td>
                  <td>Om Panadanakarodyatayai Namah</td>
                  <td>Ready to Give Offerings</td>
                </tr>
                <tr>
                  <td>756</td>
                  <td>Aghurnarunanetra</td>
                  <td>Om Aghurnarunanetrayai Namah</td>
                  <td>With Rotating Red Eyes</td>
                </tr>
                <tr>
                  <td>757</td>
                  <td>Kinchidavyaktabhashini</td>
                  <td>Om Kinchidavyaktabhashinyai Namah</td>
                  <td>Speaks in Slightly Obscure Language</td>
                </tr>
                <tr>
                  <td>758</td>
                  <td>Ashapura</td>
                  <td>Om Ashapurayai Namah</td>
                  <td>Granter of Immediate Wishes</td>
                </tr>
                <tr>
                  <td>759</td>
                  <td>Diksha</td>
                  <td>Om Dikshayai Namah</td>
                  <td>Initiator of Spiritual Knowledge</td>
                </tr>
                <tr>
                  <td>760</td>
                  <td>Daksha</td>
                  <td>Om Dakshayai Namah</td>
                  <td>The Skillful One</td>
                </tr>
                <tr>
                  <td>761</td>
                  <td>Dikshitapujita</td>
                  <td>Om Dikshitapujitayai Namah</td>
                  <td>Worshipped by the Initiated</td>
                </tr>
                <tr>
                  <td>762</td>
                  <td>Nagavalli</td>
                  <td>Om Nagavallyai Namah</td>
                  <td>Resembling a Serpent Vine</td>
                </tr>
                <tr>
                  <td>763</td>
                  <td>Nagakanya</td>
                  <td>Om Nagakanyayai Namah</td>
                  <td>Serpent Maiden</td>
                </tr>
                <tr>
                  <td>764</td>
                  <td>Bhogini</td>
                  <td>Om Bhoginyai Namah</td>
                  <td>Bestower of Enjoyment</td>
                </tr>
                <tr>
                  <td>765</td>
                  <td>Bhogavallabha</td>
                  <td>Om Bhogavallabhayai Namah</td>
                  <td>Beloved of Luxuries</td>
                </tr>
                <tr>
                  <td>766</td>
                  <td>Sarvashastravatividya</td>
                  <td>Om Sarvashastravatividyayai Namah</td>
                  <td>Possessor of All Knowledge of Scriptures</td>
                </tr>
                <tr>
                  <td>767</td>
                  <td>Susmritih</td>
                  <td>Om Susmritaye Namah</td>
                  <td>Possessor of Good Memory</td>
                </tr>
                <tr>
                  <td>768</td>
                  <td>Dharmavadini</td>
                  <td>Om Dharmavadinyai Namah</td>
                  <td>Upholder of Righteousness</td>
                </tr>
                <tr>
                  <td>769</td>
                  <td>Shruti</td>
                  <td>Om Shrutayai Namah</td>
                  <td>Embodiment of the Vedas</td>
                </tr>
                <tr>
                  <td>770</td>
                  <td>Shrutidhara</td>
                  <td>Om Shrutidharayai Namah</td>
                  <td>Preserver of Vedic Knowledge</td>
                </tr>
                <tr>
                  <td>771</td>
                  <td>Jyeshtha</td>
                  <td>Om Jyeshthayai Namah</td>
                  <td>The Elder Goddess</td>
                </tr>
                <tr>
                  <td>772</td>
                  <td>Shreshtha</td>
                  <td>Om Shreshthayai Namah</td>
                  <td>The Excellent One</td>
                </tr>
                <tr>
                  <td>773</td>
                  <td>Patalavasini</td>
                  <td>Om Patalavasinyai Namah</td>
                  <td>Residing in the Underworld</td>
                </tr>
                <tr>
                  <td>774</td>
                  <td>Mimamsa</td>
                  <td>Om Mimamsayai Namah</td>
                  <td>Goddess of Reflection and Inquiry</td>
                </tr>
                <tr>
                  <td>775</td>
                  <td>Tarkavidya</td>
                  <td>Om Tarkavidyayai Namah</td>
                  <td>Mistress of Logic</td>
                </tr>
                <tr>
                  <td>776</td>
                  <td>Subhakti</td>
                  <td>Om Subhaktaye Namah</td>
                  <td>Bestower of Good Devotion</td>
                </tr>
                <tr>
                  <td>777</td>
                  <td>Bhaktavatsala</td>
                  <td>Om Bhaktavatsalayai Namah</td>
                  <td>Lover of Devotees</td>
                </tr>
                <tr>
                  <td>778</td>
                  <td>Sunabhih</td>
                  <td>Om Sunabhaye Namah</td>
                  <td>The Goddess of Good Speech</td>
                </tr>
                <tr>
                  <td>779</td>
                  <td>Yatana</td>
                  <td>Om Yatanayai Namah</td>
                  <td>Giver of Justice</td>
                </tr>
                <tr>
                  <td>780</td>
                  <td>Jati</td>
                  <td>Om Jatyai Namah</td>
                  <td>Embodiment of Caste or Birth</td>
                </tr>
                <tr>
                  <td>781</td>
                  <td>Gambhira</td>
                  <td>Om Gambhirayai Namah</td>
                  <td>Deep and Profound</td>
                </tr>
                <tr>
                  <td>782</td>
                  <td>Bhavavarjita</td>
                  <td>Om Bhavavarjitayai Namah</td>
                  <td>Free from Worldly Attachments</td>
                </tr>
                <tr>
                  <td>783</td>
                  <td>Nagapashadhara Murti</td>
                  <td>Om Nagapashadhara Murtyai Namah</td>
                  <td>Goddess Holding the Serpent Noose</td>
                </tr>
                <tr>
                  <td>784</td>
                  <td>Agadha</td>
                  <td>Om Agadhayai Namah</td>
                  <td>The Unfathomable One</td>
                </tr>
                <tr>
                  <td>785</td>
                  <td>Nagakundala</td>
                  <td>Om Nagakundalayai Namah</td>
                  <td>Adorned with Serpent Earrings</td>
                </tr>
                <tr>
                  <td>786</td>
                  <td>Suchakra</td>
                  <td>Om Suchakrayai Namah</td>
                  <td>Residing in the Chakra</td>
                </tr>
                <tr>
                  <td>787</td>
                  <td>Chakramadhyastha</td>
                  <td>Om Chakramadhyasthayai Namah</td>
                  <td>Residing in the Center of the Chakra</td>
                </tr>
                <tr>
                  <td>788</td>
                  <td>Chakrakonanivasini</td>
                  <td>Om Chakrakonanivasinyai Namah</td>
                  <td>Residing in the Angles of the Chakra</td>
                </tr>
                <tr>
                  <td>789</td>
                  <td>Sarvamantramayi Vidya</td>
                  <td>Om Sarvamantramayi Vidyayai Namah</td>
                  <td>Embodiment of All Mantras</td>
                </tr>
                <tr>
                  <td>790</td>
                  <td>Sarvamantraksharavali</td>
                  <td>Om Sarvamantraksharavalayai Namah</td>
                  <td>Possessor of All Mystic Sounds</td>
                </tr>
                <tr>
                  <td>791</td>
                  <td>Madhusrava</td>
                  <td>Om Madhusravayai Namah</td>
                  <td>Sweet Voice</td>
                </tr>
                <tr>
                  <td>792</td>
                  <td>Sravanti</td>
                  <td>Om Sravantyai Namah</td>
                  <td>Ever-Flowing</td>
                </tr>
                <tr>
                  <td>793</td>
                  <td>Bhramari</td>
                  <td>Om Bhramaryai Namah</td>
                  <td>Goddess of Bees</td>
                </tr>
                <tr>
                  <td>794</td>
                  <td>Bhramaralaka</td>
                  <td>Om Bhramaralakayai Namah</td>
                  <td>Adorned with Bee-Like Hair</td>
                </tr>
                <tr>
                  <td>795</td>
                  <td>Matrimandala-madhyastha</td>
                  <td>Om Matrimandala-madhyasthayai Namah</td>
                  <td>Residing in the Center of the Mother’s Circle</td>
                </tr>
                <tr>
                  <td>796</td>
                  <td>Matrimandalavasini</td>
                  <td>Om Matrimandalavasinyai Namah</td>
                  <td>Residing in the Mother’s Circle</td>
                </tr>
                <tr>
                  <td>797</td>
                  <td>Kumarajanani</td>
                  <td>Om Kumarajananyai Namah</td>
                  <td>Mother of Kumara (Kartikeya)</td>
                </tr>
                <tr>
                  <td>798</td>
                  <td>Krura</td>
                  <td>Om Krurayai Namah</td>
                  <td>The Fierce One</td>
                </tr>
                <tr>
                  <td>799</td>
                  <td>Sumukhi</td>
                  <td>Om Sumukhyai Namah</td>
                  <td>The Beautiful-Faced One</td>
                </tr>
                <tr>
                  <td>800</td>
                  <td>Jvaranashini</td>
                  <td>Om Jvaranashinyai Namah</td>
                  <td>Destroyer of Fevers</td>
                </tr>
                <tr>
                  <td>801</td>
                  <td>Atita</td>
                  <td>Om Atitayai Namah</td>
                  <td>Beyond All</td>
                </tr>
                <tr>
                  <td>802</td>
                  <td>Vidyamana</td>
                  <td>Om Vidyamanayai Namah</td>
                  <td>The Ever-Present One</td>
                </tr>
                <tr>
                  <td>803</td>
                  <td>Bhavini</td>
                  <td>Om Bhavinyai Namah</td>
                  <td>The Living Goddess</td>
                </tr>
                <tr>
                  <td>804</td>
                  <td>Pritimanjari</td>
                  <td>Om Pritimanjaryai Namah</td>
                  <td>Cluster of Love</td>
                </tr>
                <tr>
                  <td>805</td>
                  <td>Sarvasaukhyavati Yukti</td>
                  <td>Om Sarvasaukhyavati Yuktyai Namah</td>
                  <td>Bestower of All Happiness</td>
                </tr>
                <tr>
                  <td>806</td>
                  <td>Aharaparinamini</td>
                  <td>Om Aharaparinaminyai Namah</td>
                  <td>Transforming Nourishment</td>
                </tr>
                <tr>
                  <td>807</td>
                  <td>Nidanam Panchabhutanam</td>
                  <td>Om Nidanam Panchabhutanam Namah</td>
                  <td>Cause of the Five Elements</td>
                </tr>
                <tr>
                  <td>808</td>
                  <td>Bhavasagaratarini</td>
                  <td>Om Bhavasagaratarinyai Namah</td>
                  <td>Ferrywoman Across the Ocean of Existence</td>
                </tr>
                <tr>
                  <td>809</td>
                  <td>Akrura</td>
                  <td>Om Akrurayai Namah</td>
                  <td>The Fierce Warrior</td>
                </tr>
                <tr>
                  <td>810</td>
                  <td>Grahavati</td>
                  <td>Om Grahavatayai Namah</td>
                  <td>Goddess of Planets</td>
                </tr>
                <tr>
                  <td>811</td>
                  <td>Vigraha</td>
                  <td>Om Vigrahayai Namah</td>
                  <td>The Manifested Form</td>
                </tr>
                <tr>
                  <td>812</td>
                  <td>Grahavarjita</td>
                  <td>Om Grahavarjitayai Namah</td>
                  <td>Beyond the Influence of Planets</td>
                </tr>
                <tr>
                  <td>813</td>
                  <td>Rohini</td>
                  <td>Om Rohinyai Namah</td>
                  <td>Goddess of the Rohini Nakshatra</td>
                </tr>
                <tr>
                  <td>814</td>
                  <td>Bhumigarbha</td>
                  <td>Om Bhumigarbhayai Namah</td>
                  <td>Goddess of Earth’s Womb</td>
                </tr>
                <tr>
                  <td>815</td>
                  <td>Kalabhu</td>
                  <td>Om Kalabhuyai Namah</td>
                  <td>Creator of Time</td>
                </tr>
                <tr>
                  <td>816</td>
                  <td>Kalavartini</td>
                  <td>Om Kalavartinyai Namah</td>
                  <td>Revolver of Time</td>
                </tr>
                <tr>
                  <td>817</td>
                  <td>Kalankarahita Nari</td>
                  <td>Om Kalankarahita Nariyai Namah</td>
                  <td>The Stain-Free Goddess</td>
                </tr>
                <tr>
                  <td>818</td>
                  <td>Chatushshashtyabhi-dhavati</td>
                  <td>Om Chatushshashtyabhi-dhavatayai Namah</td>
                  <td>Goddess Adorned with 64 Ornaments</td>
                </tr>
                <tr>
                  <td>819</td>
                  <td>Jirna</td>
                  <td>Om Jirnayai Namah</td>
                  <td>The Ancient One</td>
                </tr>
                <tr>
                  <td>820</td>
                  <td>Jirnavastra</td>
                  <td>Om Jirnavastrayai Namah</td>
                  <td>Wearing Old Garments</td>
                </tr>
                <tr>
                  <td>821</td>
                  <td>Nutana</td>
                  <td>Om Nutanayai Namah</td>
                  <td>The Fresh and New</td>
                </tr>
                <tr>
                  <td>822</td>
                  <td>Navavallabha</td>
                  <td>Om Navavallabhayai Namah</td>
                  <td>Ever-New Beloved</td>
                </tr>
                <tr>
                  <td>823</td>
                  <td>Araja</td>
                  <td>Om Arajayai Namah</td>
                  <td>The Unaging One</td>
                </tr>
                <tr>
                  <td>824</td>
                  <td>Rati</td>
                  <td>Om Ratayai Namah</td>
                  <td>Embodiment of Passion</td>
                </tr>
                <tr>
                  <td>825</td>
                  <td>Priti</td>
                  <td>Om Pritayai Namah</td>
                  <td>Embodiment of Affection</td>
                </tr>
                <tr>
                  <td>826</td>
                  <td>Ratiragavivardhini</td>
                  <td>Om Ratiragavivardhinyai Namah</td>
                  <td>Enhancer of Passion</td>
                </tr>
                <tr>
                  <td>827</td>
                  <td>Panchavatagatirbhinna</td>
                  <td>Om Panchavatagatirbhinnayai Namah</td>
                  <td>Controller of the Five Vital Winds</td>
                </tr>
                <tr>
                  <td>828</td>
                  <td>Panchashleshma-shayadhara</td>
                  <td>Om Panchashleshma-shayadharinyai Namah</td>
                  <td>Holder of the Five Vital Fluids</td>
                </tr>
                <tr>
                  <td>829</td>
                  <td>Panchapittavatishakti</td>
                  <td>Om Panchapittavatishaktyai Namah</td>
                  <td>Controller of the Five Vital Energies</td>
                </tr>
                <tr>
                  <td>830</td>
                  <td>Panchasthanavibodhini</td>
                  <td>Om Panchasthanavibodhinyai Namah</td>
                  <td>Awakener of Five States of Consciousness</td>
                </tr>
                <tr>
                  <td>831</td>
                  <td>Udakya</td>
                  <td>Om Udakyai Namah</td>
                  <td>Goddess of Water</td>
                </tr>
                <tr>
                  <td>832</td>
                  <td>Vrishasyanti</td>
                  <td>Om Vrishasyantyai Namah</td>
                  <td>Protector of Bulls</td>
                </tr>
                <tr>
                  <td>833</td>
                  <td>Bahih Prasravini Tryaham</td>
                  <td>Om Bahih Prasravini Tryahamyai Namah</td>
                  <td>Flowing Freely in Three Days</td>
                </tr>
                <tr>
                  <td>834</td>
                  <td>Rajahshukradharashakti</td>
                  <td>Om Rajahshukradharashaktyai Namah</td>
                  <td>Holder of Vital Essences</td>
                </tr>
                <tr>
                  <td>835</td>
                  <td>Jarayuh</td>
                  <td>Om Jarayuhyai Namah</td>
                  <td>Goddess of Vital Energy</td>
                </tr>
                <tr>
                  <td>836</td>
                  <td>Garbhadharini</td>
                  <td>Om Garbhadharinyai Namah</td>
                  <td>Holder of the Womb</td>
                </tr>
                <tr>
                  <td>837</td>
                  <td>Trikalajna</td>
                  <td>Om Trikalajnayai Namah</td>
                  <td>Knower of the Three Times</td>
                </tr>
                <tr>
                  <td>838</td>
                  <td>Trilinga</td>
                  <td>Om Trilingayai Namah</td>
                  <td>Goddess of the Three Sacred Regions</td>
                </tr>
                <tr>
                  <td>839</td>
                  <td>Trimurti</td>
                  <td>Om Trimurtyai Namah</td>
                  <td>Embodiment of the Trinity</td>
                </tr>
                <tr>
                  <td>840</td>
                  <td>Tripuravasini</td>
                  <td>Om Tripuravasinyai Namah</td>
                  <td>Residing in the Three Cities</td>
                </tr>
                <tr>
                  <td>841</td>
                  <td>Araga</td>
                  <td>Om Aragayai Namah</td>
                  <td>Free from Attachment</td>
                </tr>
                <tr>
                  <td>842</td>
                  <td>Shivatattva</td>
                  <td>Om Shivatattvayai Namah</td>
                  <td>Embodiment of Shiva’s Principles</td>
                </tr>
                <tr>
                  <td>843</td>
                  <td>Kamatattvanuragini</td>
                  <td>Om Kamatattvanuraginyai Namah</td>
                  <td>Attached to the Principles of Desire</td>
                </tr>
                <tr>
                  <td>844</td>
                  <td>Prachi</td>
                  <td>Om Prachayai Namah</td>
                  <td>Facing the East</td>
                </tr>
                <tr>
                  <td>845</td>
                  <td>Avachi</td>
                  <td>Om Avachyai Namah</td>
                  <td>Facing the South</td>
                </tr>
                <tr>
                  <td>846</td>
                  <td>Pratichi</td>
                  <td>Om Pratichyai Namah</td>
                  <td>Facing the West</td>
                </tr>
                <tr>
                  <td>847</td>
                  <td>Udichi</td>
                  <td>Om Udichyai Namah</td>
                  <td>Facing the North</td>
                </tr>
                <tr>
                  <td>848</td>
                  <td>Vidigdisha</td>
                  <td>Om Vidigdishayai Namah</td>
                  <td>Directionless</td>
                </tr>
                <tr>
                  <td>849</td>
                  <td>Ahankriti</td>
                  <td>Om Ahankrityai Namah</td>
                  <td>Embodiment of Ego</td>
                </tr>
                <tr>
                  <td>850</td>
                  <td>Ahankara</td>
                  <td>Om Ahankarayai Namah</td>
                  <td>Creator of Ego</td>
                </tr>
                <tr>
                  <td>851</td>
                  <td>Balimaya</td>
                  <td>Om Balimayayai Namah</td>
                  <td>Goddess of Sacrifices</td>
                </tr>
                <tr>
                  <td>852</td>
                  <td>Balipriya</td>
                  <td>Om Balipriyayi Namah</td>
                  <td>Lover of Offerings</td>
                </tr>
                <tr>
                  <td>853</td>
                  <td>Sruk</td>
                  <td>Om Srukyai Namah</td>
                  <td>Goddess of the Offering Spoon</td>
                </tr>
                <tr>
                  <td>854</td>
                  <td>Sruva</td>
                  <td>Om Sruvayai Namah</td>
                  <td>Goddess of the Oblation Ladle</td>
                </tr>
                <tr>
                  <td>855</td>
                  <td>Samidheni</td>
                  <td>Om Samidhenyai Namah</td>
                  <td>Granter of Sacred Fuel</td>
                </tr>
                <tr>
                  <td>856</td>
                  <td>Sashraddha</td>
                  <td>Om Sashraddhayai Namah</td>
                  <td>Full of Faith</td>
                </tr>
                <tr>
                  <td>857</td>
                  <td>Shraddhadevata</td>
                  <td>Om Shraddhadevatayai Namah</td>
                  <td>Goddess of Faith</td>
                </tr>
                <tr>
                  <td>858</td>
                  <td>Mata</td>
                  <td>Om Matre Namah</td>
                  <td>The Divine Mother</td>
                </tr>
                <tr>
                  <td>859</td>
                  <td>Matamahi</td>
                  <td>Om Matamahyai Namah</td>
                  <td>Grandmother of the Universe</td>
                </tr>
                <tr>
                  <td>860</td>
                  <td>Tripti</td>
                  <td>Om Triptyai Namah</td>
                  <td>Embodiment of Satisfaction</td>
                </tr>
                <tr>
                  <td>861</td>
                  <td>Pitrimata</td>
                  <td>Om Pitrimatrayai Namah</td>
                  <td>Mother of Ancestors</td>
                </tr>
                <tr>
                  <td>862</td>
                  <td>Pitamahi</td>
                  <td>Om Pitamahyai Namah</td>
                  <td>Grandmother of Ancestors</td>
                </tr>
                <tr>
                  <td>863</td>
                  <td>Snusha</td>
                  <td>Om Snushayai Namah</td>
                  <td>Daughter-in-Law of the Universe</td>
                </tr>
                <tr>
                  <td>864</td>
                  <td>Dauhitrini</td>
                  <td>Om Dauhitrinyai Namah</td>
                  <td>Granddaughter of the Universe</td>
                </tr>
                <tr>
                  <td>865</td>
                  <td>Putri</td>
                  <td>Om Putryai Namah</td>
                  <td>Daughter of the Universe</td>
                </tr>
                <tr>
                  <td>866</td>
                  <td>Pautri</td>
                  <td>Om Pautryai Namah</td>
                  <td>Granddaughter of the Universe</td>
                </tr>
                <tr>
                  <td>867</td>
                  <td>Naptri</td>
                  <td>Om Naptryai Namah</td>
                  <td>Great-Granddaughter of the Universe</td>
                </tr>
                <tr>
                  <td>868</td>
                  <td>Shishupriya</td>
                  <td>Om Shishupriyayai Namah</td>
                  <td>Beloved of Children</td>
                </tr>
                <tr>
                  <td>869</td>
                  <td>Stanada</td>
                  <td>Om Stanadayai Namah</td>
                  <td>Giver of Nourishment</td>
                </tr>
                <tr>
                  <td>870</td>
                  <td>Stanadhara</td>
                  <td>Om Stanadharinyai Namah</td>
                  <td>Holder of Nourishment</td>
                </tr>
                <tr>
                  <td>871</td>
                  <td>Vishvayoni</td>
                  <td>Om Vishvayonaye Namah</td>
                  <td>Source of the Universe</td>
                </tr>
                <tr>
                  <td>872</td>
                  <td>Stanandhayi</td>
                  <td>Om Stanandhayyai Namah</td>
                  <td>One Who Feeds the Universe</td>
                </tr>
                <tr>
                  <td>873</td>
                  <td>Shishutsangadhara</td>
                  <td>Om Shishutsangadharinyai Namah</td>
                  <td>Holder of Infants</td>
                </tr>
                <tr>
                  <td>874</td>
                  <td>Dola</td>
                  <td>Om Dolayai Namah</td>
                  <td>Goddess of the Swing</td>
                </tr>
                <tr>
                  <td>875</td>
                  <td>Dolakridabhinandini</td>
                  <td>Om Dolakridabhinandinyai Namah</td>
                  <td>Delighted in Swing Games</td>
                </tr>
                <tr>
                  <td>876</td>
                  <td>Urvashi</td>
                  <td>Om Urvashyai Namah</td>
                  <td>The Celestial Nymph</td>
                </tr>
                <tr>
                  <td>877</td>
                  <td>Kadali</td>
                  <td>Om Kadalyai Namah</td>
                  <td>Goddess of the Banana Plant</td>
                </tr>
                <tr>
                  <td>878</td>
                  <td>Keka</td>
                  <td>Om Kekayai Namah</td>
                  <td>The Beautiful One</td>
                </tr>
                <tr>
                  <td>879</td>
                  <td>Vishikha</td>
                  <td>Om Vishikhayai Namah</td>
                  <td>Armed with Arrows</td>
                </tr>
                <tr>
                  <td>880</td>
                  <td>Shikhivartini</td>
                  <td>Om Shikhivartinyai Namah</td>
                  <td>Riding a Peacock</td>
                </tr>
                <tr>
                  <td>881</td>
                  <td>Khatvangadharini</td>
                  <td>Om Khatvangadharinyai Namah</td>
                  <td>Holder of the Khatvanga</td>
                </tr>
                <tr>
                  <td>882</td>
                  <td>Khatva</td>
                  <td>Om Khatvayai Namah</td>
                  <td>Goddess of the Sacred Bed</td>
                </tr>
                <tr>
                  <td>883</td>
                  <td>Banapunkhanuvartini</td>
                  <td>Om Banapunkhanuvartinyai Namah</td>
                  <td>Following Arrow Feathers</td>
                </tr>
                <tr>
                  <td>884</td>
                  <td>Lakshyaprapti</td>
                  <td>Om Lakshyapraptyai Namah</td>
                  <td>Achiever of Goals</td>
                </tr>
                <tr>
                  <td>885</td>
                  <td>Kala</td>
                  <td>Om Kalayai Namah</td>
                  <td>Goddess of Time</td>
                </tr>
                <tr>
                  <td>886</td>
                  <td>Alakshya</td>
                  <td>Om Alakshyayai Namah</td>
                  <td>The Incomprehensible One</td>
                </tr>
                <tr>
                  <td>887</td>
                  <td>Lakshya</td>
                  <td>Om Lakshyayai Namah</td>
                  <td>That Can be Seen</td>
                </tr>
                <tr>
                  <td>888</td>
                  <td>Shubhalakshana</td>
                  <td>Om Shubhalakshanayai Namah</td>
                  <td>Auspicious Appearance</td>
                </tr>
                <tr>
                  <td>889</td>
                  <td>Vartin</td>
                  <td>Om Vartinyai Namah</td>
                  <td>Ever Active</td>
                </tr>
                <tr>
                  <td>890</td>
                  <td>Supathachara</td>
                  <td>Om Supathacharayai Namah</td>
                  <td>One Who Walks the Right Path</td>
                </tr>
                <tr>
                  <td>891</td>
                  <td>Parikha</td>
                  <td>Om Parikhayai Namah</td>
                  <td>Guardian of the Boundary</td>
                </tr>
                <tr>
                  <td>892</td>
                  <td>Khani</td>
                  <td>Om Khanyai Namah</td>
                  <td>Residing in Mines</td>
                </tr>
                <tr>
                  <td>893</td>
                  <td>Vriti</td>
                  <td>Om Vritayai Namah</td>
                  <td>Goddess of the Circle</td>
                </tr>
                <tr>
                  <td>894</td>
                  <td>Prakaravalaya</td>
                  <td>Om Prakaravalayayai Namah</td>
                  <td>Encircling the Fortress</td>
                </tr>
                <tr>
                  <td>895</td>
                  <td>Vela</td>
                  <td>Om Velayai Namah</td>
                  <td>Goddess of the Shore</td>
                </tr>
                <tr>
                  <td>896</td>
                  <td>Maryada Cha Mahodadhau</td>
                  <td>Om Maryada Cha Mahodadhayai Namah</td>
                  <td>Boundary of the Great Ocean</td>
                </tr>
                <tr>
                  <td>897</td>
                  <td>Poshani Shakti</td>
                  <td>Om Poshani Shaktyai Namah</td>
                  <td>Nourishing Power</td>
                </tr>
                <tr>
                  <td>898</td>
                  <td>Shoshani Shakti</td>
                  <td>Om Shoshani Shaktyai Namah</td>
                  <td>Draining Power</td>
                </tr>
                <tr>
                  <td>899</td>
                  <td>Dirghakeshi</td>
                  <td>Om Dirghakeshyai Namah</td>
                  <td>Long-Haired Goddess</td>
                </tr>
                <tr>
                  <td>900</td>
                  <td>Sulomasha</td>
                  <td>Om Sulomashayai Namah</td>
                  <td>Beautiful-Haired One</td>
                </tr>
                <tr>
                  <td>901</td>
                  <td>Lalita</td>
                  <td>Om Lalitayai Namah</td>
                  <td>The Playful One</td>
                </tr>
                <tr>
                  <td>902</td>
                  <td>Mamsala</td>
                  <td>Om Mamsalayai Namah</td>
                  <td>Embodiment of Flesh</td>
                </tr>
                <tr>
                  <td>903</td>
                  <td>Tanvi</td>
                  <td>Om Tanvyai Namah</td>
                  <td>The Delicate One</td>
                </tr>
                <tr>
                  <td>904</td>
                  <td>Vedavedangadharini</td>
                  <td>Om Vedavedangadharinyai Namah</td>
                  <td>Protector of Vedas and Its Limbs</td>
                </tr>
                <tr>
                  <td>905</td>
                  <td>Narasrikpanamatta</td>
                  <td>Om Narasrikpanamattayai Namah</td>
                  <td>Delighted in the Essence of Mankind</td>
                </tr>
                <tr>
                  <td>906</td>
                  <td>Naramundasthi-bhushana</td>
                  <td>Om Naramundasthi-bhushanayai Namah</td>
                  <td>Adorned with Human Skulls and Bones</td>
                </tr>
                <tr>
                  <td>907</td>
                  <td>Akshakridarati</td>
                  <td>Om Akshakridaratayai Namah</td>
                  <td>Delighted in Dice Games</td>
                </tr>
                <tr>
                  <td>908</td>
                  <td>Shari</td>
                  <td>Om Sharyai Namah</td>
                  <td>The Divine Arrow</td>
                </tr>
                <tr>
                  <td>909</td>
                  <td>Sharika Shukabhashini</td>
                  <td>Om Sharika Shukabhashinyai Namah</td>
                  <td>Protector of Arrows and Sweet Speaker Like a Parrot</td>
                </tr>
                <tr>
                  <td>910</td>
                  <td>Shambari</td>
                  <td>Om Shambarinyai Namah</td>
                  <td>Slayer of Demons</td>
                </tr>
                <tr>
                  <td>911</td>
                  <td>Garudi Vidya</td>
                  <td>Om Garudi Vidyayai Namah</td>
                  <td>Possessor of Garuda’s Knowledge</td>
                </tr>
                <tr>
                  <td>912</td>
                  <td>Varuni</td>
                  <td>Om Varunyai Namah</td>
                  <td>Goddess of Wine</td>
                </tr>
                <tr>
                  <td>913</td>
                  <td>Varunarchita</td>
                  <td>Om Varunarchitayai Namah</td>
                  <td>Worshipped by Varuna</td>
                </tr>
                <tr>
                  <td>914</td>
                  <td>Varahi</td>
                  <td>Om Varahyai Namah</td>
                  <td>The Boar-Form Goddess</td>
                </tr>
                <tr>
                  <td>915</td>
                  <td>Mundahasta</td>
                  <td>Om Mundahastayai Namah</td>
                  <td>Holding a Severed Head in Hand</td>
                </tr>
                <tr>
                  <td>916</td>
                  <td>Damshtroddhrita-vasundhara</td>
                  <td>Om Damshtroddhrita-vasundharayai Namah</td>
                  <td>Lifting the Earth with Her Tusks</td>
                </tr>
                <tr>
                  <td>917</td>
                  <td>Minamurtidhara</td>
                  <td>Om Minamurtidharayai Namah</td>
                  <td>Bearer of Fish Form</td>
                </tr>
                <tr>
                  <td>918</td>
                  <td>Murta</td>
                  <td>Om Murtayai Namah</td>
                  <td>The Manifested One</td>
                </tr>
                <tr>
                  <td>919</td>
                  <td>Vadanya</td>
                  <td>Om Vadanyayai Namah</td>
                  <td>The Generous One</td>
                </tr>
                <tr>
                  <td>920</td>
                  <td>Pratimashraya</td>
                  <td>Om Pratimashrayayai Namah</td>
                  <td>Dwelling in Idols</td>
                </tr>
                <tr>
                  <td>921</td>
                  <td>Amurta</td>
                  <td>Om Amurtayai Namah</td>
                  <td>The Unmanifested One</td>
                </tr>
                <tr>
                  <td>922</td>
                  <td>Nidhirupa</td>
                  <td>Om Nidhirupayai Namah</td>
                  <td>Embodiment of Treasure</td>
                </tr>
                <tr>
                  <td>923</td>
                  <td>Shalagramashilashuchi</td>
                  <td>Om Shalagramashilashuchyai Namah</td>
                  <td>The Pure One Residing in Sacred Stones</td>
                </tr>
                <tr>
                  <td>924</td>
                  <td>Smriti</td>
                  <td>Om Smrityai Namah</td>
                  <td>Embodiment of Memory</td>
                </tr>
                <tr>
                  <td>925</td>
                  <td>Samskararupa</td>
                  <td>Om Samskararupayai Namah</td>
                  <td>Embodiment of Sacred Rites</td>
                </tr>
                <tr>
                  <td>926</td>
                  <td>Susamskara</td>
                  <td>Om Susamskarayai Namah</td>
                  <td>Well-Refined Goddess</td>
                </tr>
                <tr>
                  <td>927</td>
                  <td>Sanskriti</td>
                  <td>Om Sanskrityai Namah</td>
                  <td>Embodiment of Culture</td>
                </tr>
                <tr>
                  <td>928</td>
                  <td>Prakrita</td>
                  <td>Om Prakritayai Namah</td>
                  <td>The Natural One</td>
                </tr>
                <tr>
                  <td>929</td>
                  <td>Deshabhasha</td>
                  <td>Om Deshabhashayai Namah</td>
                  <td>Embodiment of Regional Languages</td>
                </tr>
                <tr>
                  <td>930</td>
                  <td>Gatha</td>
                  <td>Om Gathayai Namah</td>
                  <td>Goddess of Songs</td>
                </tr>
                <tr>
                  <td>931</td>
                  <td>Giti</td>
                  <td>Om Gityai Namah</td>
                  <td>Embodiment of Music</td>
                </tr>
                <tr>
                  <td>932</td>
                  <td>Prahelika</td>
                  <td>Om Prahelikayai Namah</td>
                  <td>The Riddler</td>
                </tr>
                <tr>
                  <td>933</td>
                  <td>Ida</td>
                  <td>Om Idayai Namah</td>
                  <td>The Channel of Mental Energy</td>
                </tr>
                <tr>
                  <td>934</td>
                  <td>Pingala</td>
                  <td>Om Pingalayai Namah</td>
                  <td>The Channel of Vital Energy</td>
                </tr>
                <tr>
                  <td>935</td>
                  <td>Pinga</td>
                  <td>Om Pingayai Namah</td>
                  <td>The Yellowish One</td>
                </tr>
                <tr>
                  <td>936</td>
                  <td>Sushumna</td>
                  <td>Om Sushumnayai Namah</td>
                  <td>The Central Energy Channel</td>
                </tr>
                <tr>
                  <td>937</td>
                  <td>Suryavahini</td>
                  <td>Om Suryavahinyai Namah</td>
                  <td>Carrier of Solar Energy</td>
                </tr>
                <tr>
                  <td>938</td>
                  <td>Shashisrava</td>
                  <td>Om Shashisravayai Namah</td>
                  <td>Resembling the Moon’s Radiance</td>
                </tr>
                <tr>
                  <td>939</td>
                  <td>Talustha</td>
                  <td>Om Talusthayai Namah</td>
                  <td>Residing in the Palate</td>
                </tr>
                <tr>
                  <td>940</td>
                  <td>Kakini</td>
                  <td>Om Kakininyai Namah</td>
                  <td>Goddess of Power</td>
                </tr>
                <tr>
                  <td>941</td>
                  <td>Amritajivini</td>
                  <td>Om Amritajivinyai Namah</td>
                  <td>Giver of Eternal Life</td>
                </tr>
                <tr>
                  <td>942</td>
                  <td>Anurupa</td>
                  <td>Om Anurupayai Namah</td>
                  <td>The Appropriate One</td>
                </tr>
                <tr>
                  <td>943</td>
                  <td>Brihadrupa</td>
                  <td>Om Brihadrupayai Namah</td>
                  <td>Of Immense Form</td>
                </tr>
                <tr>
                  <td>944</td>
                  <td>Laghurupa</td>
                  <td>Om Laghurupayai Namah</td>
                  <td>Of Small Form</td>
                </tr>
                <tr>
                  <td>945</td>
                  <td>Gurusthira</td>
                  <td>Om Gurusthirayai Namah</td>
                  <td>Stable and Steady</td>
                </tr>
                <tr>
                  <td>946</td>
                  <td>Sthavara</td>
                  <td>Om Sthavarayai Namah</td>
                  <td>Immovable and Steadfast</td>
                </tr>
                <tr>
                  <td>947</td>
                  <td>Jangama</td>
                  <td>Om Jangamayai Namah</td>
                  <td>Moving and Dynamic</td>
                </tr>
                <tr>
                  <td>948</td>
                  <td>Devi</td>
                  <td>Om Devyai Namah</td>
                  <td>The Divine Goddess</td>
                </tr>
                <tr>
                  <td>949</td>
                  <td>Kritakarmaphalaprada</td>
                  <td>Om Kritakarmaphalapradayai Namah</td>
                  <td>Giver of Results of Actions</td>
                </tr>
                <tr>
                  <td>950</td>
                  <td>Vishayakrantadeha</td>
                  <td>Om Vishayakrantadehayai Namah</td>
                  <td>Beyond Sensory Experiences</td>
                </tr>
                <tr>
                  <td>951</td>
                  <td>Nirvishesha</td>
                  <td>Om Nirvisheshayai Namah</td>
                  <td>Without Distinctions</td>
                </tr>
                <tr>
                  <td>952</td>
                  <td>Jitendriya</td>
                  <td>Om Jitendriyayai Namah</td>
                  <td>Conqueror of the Senses</td>
                </tr>
                <tr>
                  <td>953</td>
                  <td>Vishvarupa</td>
                  <td>Om Vishvarupayai Namah</td>
                  <td>Cosmic Form</td>
                </tr>
                <tr>
                  <td>954</td>
                  <td>Chidananda</td>
                  <td>Om Chidanandayai Namah</td>
                  <td>Embodiment of Consciousness and Bliss</td>
                </tr>
                <tr>
                  <td>955</td>
                  <td>Parabrahmaprabodhini</td>
                  <td>Om Parabrahmaprabodhinyai Namah</td>
                  <td>Awakener of Supreme Reality</td>
                </tr>
                <tr>
                  <td>956</td>
                  <td>Nirvikara</td>
                  <td>Om Nirvikarayai Namah</td>
                  <td>Without Change</td>
                </tr>
                <tr>
                  <td>957</td>
                  <td>Nirvaira</td>
                  <td>Om Nirvairayai Namah</td>
                  <td>Without Enmity</td>
                </tr>
                <tr>
                  <td>958</td>
                  <td>Virati</td>
                  <td>Om Viratyai Namah</td>
                  <td>Detached from the World</td>
                </tr>
                <tr>
                  <td>959</td>
                  <td>Satyavardhini</td>
                  <td>Om Satyavardhinyai Namah</td>
                  <td>Enhancer of Truth</td>
                </tr>
                <tr>
                  <td>960</td>
                  <td>Purushajna</td>
                  <td>Om Purushajnayai Namah</td>
                  <td>Knower of the Supreme Being</td>
                </tr>
                <tr>
                  <td>961</td>
                  <td>Bhinna</td>
                  <td>Om Bhinnayai Namah</td>
                  <td>Beyond Duality</td>
                </tr>
                <tr>
                  <td>962</td>
                  <td>Kshantih Kaivalyadayini</td>
                  <td>Om Kshantih Kaivalyadayinyai Namah</td>
                  <td>Peace Giver Leading to Liberation</td>
                </tr>
                <tr>
                  <td>963</td>
                  <td>Viviktasevini</td>
                  <td>Om Viviktasevinyai Namah</td>
                  <td>Dweller of Solitude</td>
                </tr>
                <tr>
                  <td>964</td>
                  <td>Prajnajanayitri</td>
                  <td>Om Prajnajanayitryai Namah</td>
                  <td>Generator of Supreme Knowledge</td>
                </tr>
                <tr>
                  <td>965</td>
                  <td>Bahushruti</td>
                  <td>Om Bahushrutyai Namah</td>
                  <td>Knower of Various Scriptures</td>
                </tr>
                <tr>
                  <td>966</td>
                  <td>Niriha</td>
                  <td>Om Nirihayai Namah</td>
                  <td>Without Desire</td>
                </tr>
                <tr>
                  <td>967</td>
                  <td>Samastaika</td>
                  <td>Om Samastaikayai Namah</td>
                  <td>Embodiment of Unity</td>
                </tr>
                <tr>
                  <td>968</td>
                  <td>Sarvalokaikasevita</td>
                  <td>Om Sarvalokaikasevitayai Namah</td>
                  <td>Worshipped by All Worlds</td>
                </tr>
                <tr>
                  <td>969</td>
                  <td>Seva</td>
                  <td>Om Sevayai Namah</td>
                  <td>Devoted to Service</td>
                </tr>
                <tr>
                  <td>970</td>
                  <td>Sevapriya</td>
                  <td>Om Sevapriyayi Namah</td>
                  <td>Lover of Service</td>
                </tr>
                <tr>
                  <td>971</td>
                  <td>Sevya</td>
                  <td>Om Sevyayai Namah</td>
                  <td>Worthy of Service</td>
                </tr>
                <tr>
                  <td>972</td>
                  <td>Sevaphalavivardhini</td>
                  <td>Om Sevaphalavivardhinyai Namah</td>
                  <td>Enhancer of the Fruits of Service</td>
                </tr>
                <tr>
                  <td>973</td>
                  <td>Kalau Kalkipriyakali</td>
                  <td>Om Kalau Kalkipriyakalayai Namah</td>
                  <td>Beloved of Kalki in the Age of Kali</td>
                </tr>
                <tr>
                  <td>974</td>
                  <td>Dushtamlechchha-vinashini</td>
                  <td>Om Dushtamlechchha-vinashinyai Namah</td>
                  <td>Destroyer of Evil and Impurity</td>
                </tr>
                <tr>
                  <td>975</td>
                  <td>Pratyancha</td>
                  <td>Om Pratyanjayai Namah</td>
                  <td>The Resilient One</td>
                </tr>
                <tr>
                  <td>976</td>
                  <td>Dhanuryashti</td>
                  <td>Om Dhanuryashtyai Namah</td>
                  <td>Holder of the Bow and Staff</td>
                </tr>
                <tr>
                  <td>977</td>
                  <td>Khadgadhara</td>
                  <td>Om Khadgadharinyai Namah</td>
                  <td>Wielder of the Sword</td>
                </tr>
                <tr>
                  <td>978</td>
                  <td>Duranati</td>
                  <td>Om Duranatyai Namah</td>
                  <td>Unconquerable</td>
                </tr>
                <tr>
                  <td>979</td>
                  <td>Ashvaplutih</td>
                  <td>Om Ashvaplutaye Namah</td>
                  <td>Mounted on a Horse</td>
                </tr>
                <tr>
                  <td>980</td>
                  <td>Valga</td>
                  <td>Om Valgayai Namah</td>
                  <td>Holder of the Reins</td>
                </tr>
                <tr>
                  <td>981</td>
                  <td>Srini</td>
                  <td>Om Srinaye Namah</td>
                  <td>Controller of the Path</td>
                </tr>
                <tr>
                  <td>982</td>
                  <td>Sanmattavarana</td>
                  <td>Om Sanmattavaranayai Namah</td>
                  <td>Protector from Delusion</td>
                </tr>
                <tr>
                  <td>983</td>
                  <td>Virabhu</td>
                  <td>Om Virabhave Namah</td>
                  <td>Creator of Heroes</td>
                </tr>
                <tr>
                  <td>984</td>
                  <td>Viramata</td>
                  <td>Om Viramatayai Namah</td>
                  <td>Mother of Heroes</td>
                </tr>
                <tr>
                  <td>985</td>
                  <td>Virasuh</td>
                  <td>Om Virasuhyai Namah</td>
                  <td>Giver of Heroic Offspring</td>
                </tr>
                <tr>
                  <td>986</td>
                  <td>Viranandini</td>
                  <td>Om Viranandinyai Namah</td>
                  <td>Delighter of Heroes</td>
                </tr>
                <tr>
                  <td>987</td>
                  <td>Jayashri</td>
                  <td>Om Jayashryai Namah</td>
                  <td>Embodiment of Victory</td>
                </tr>
                <tr>
                  <td>988</td>
                  <td>Jayadiksha</td>
                  <td>Om Jayadikshayai Namah</td>
                  <td>Initiator of Victory</td>
                </tr>
                <tr>
                  <td>989</td>
                  <td>Jayada</td>
                  <td>Om Jayadayai Namah</td>
                  <td>Giver of Victory</td>
                </tr>
                <tr>
                  <td>990</td>
                  <td>Jayavardhini</td>
                  <td>Om Jayavardhinyai Namah</td>
                  <td>Enhancer of Victory</td>
                </tr>
                <tr>
                  <td>991</td>
                  <td>Saubhagya-subhagakara</td>
                  <td>Om Saubhagya-subhagakarayai Namah</td>
                  <td>Granter of Auspicious Fortune</td>
                </tr>
                <tr>
                  <td>992</td>
                  <td>Sarvasaubhagya-vardhini</td>
                  <td>Om Sarvasaubhagya-vardhinyai Namah</td>
                  <td>Enhancer of All Good Fortunes</td>
                </tr>
                <tr>
                  <td>993</td>
                  <td>Kshemankari</td>
                  <td>Om Kshemankarinyai Namah</td>
                  <td>Granter of Well-Being</td>
                </tr>
                <tr>
                  <td>994</td>
                  <td>Siddhirupa</td>
                  <td>Om Siddhirupayai Namah</td>
                  <td>Embodiment of Fulfillment</td>
                </tr>
                <tr>
                  <td>995</td>
                  <td>Satkirti</td>
                  <td>Om Satkirtyai Namah</td>
                  <td>Of Eternal Glory</td>
                </tr>
                <tr>
                  <td>996</td>
                  <td>Pathidevata</td>
                  <td>Om Pathidevatayai Namah</td>
                  <td>Goddess of the Path</td>
                </tr>
                <tr>
                  <td>997</td>
                  <td>Sarvatirthamayimurti</td>
                  <td>Om Sarvatirthamayimurtaye Namah</td>
                  <td>Embodiment of All Sacred Places</td>
                </tr>
                <tr>
                  <td>998</td>
                  <td>Sarvadevamayiprabha</td>
                  <td>Om Sarvadevamayiprabhayai Namah</td>
                  <td>Radiance of All Gods</td>
                </tr>
                <tr>
                  <td>999</td>
                  <td>Sarvasiddhipradashakti</td>
                  <td>Om Sarvasiddhipradashaktyai Namah</td>
                  <td>Power Bestowing All Accomplishments</td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>Sarvamangalamangala</td>
                  <td>Om Sarvamangalamangalayai Namah</td>
                  <td>Auspicious Among All Auspiciousness</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Significance of Maa Durga 1000 Names</h3>
          <p>
            Chanting Durga Sahastra Namavali is quite effective in attaining the
            highest form of awareness (Siddhi Prapti) and being a powerful
            personality. Since ancient times, her 1000 names have been
            pronounced for various purposes such as prosperity, wish fulfilment
            and good health.
          </p>
          <p>
            Pandits especially recommend chanting the 1000 names of Durga during
            Navaratri. She is the consort of Lord Shiva, the daughter of the
            mountains and the remover of obstacles. She is the most powerful
            goddess, and pleasing her via her names puts all your worries to
            rest. Attain complete peace with Sahastra Namavali today!
          </p>
        </div>
      </Container>
      <FAQLayout faqData={Durga1000FAQ} />
    </Layout>
  );
};
export default Durga1000;

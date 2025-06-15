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

const Shiva1000FAQ = [
  {
    id: 1,
    title: "How many Shiva Sahasranama are there?",
    content:
      "The 1000 names of Lord Shiva are known as Shiva Sahasranama. According to Hindu mythology, there are eight versions of Shiva Sahasranama names, such as Anushasana Parva, Shanti Parva (Mahabharata), Linga Purana, and Shiva Purana.",
  },
  {
    id: 2,
    title: "What are the benefits od Shiva Sahasranama?",
    content:
      "Devotees who chant the Shiv 1000 name with full devotion are believed to get Lord Shiva’s blessings. Chanting Shiva Sahasranama also helps devotees attract peace, clarity, and inner strength.",
  },
  {
    id: 3,
    title: "Who wrote Shiva Sahasranama?",
    content:
      "According to the Linga Purana, Lord Vishnu was the first to recite all 1000 names of Lord Shiva. Pleased with his devotion, Lord Shiba gifted Lord Vishnu the Sudarshan Chakra.",
  },
  {
    id: 4,
    title: "How to chant Shiva Sahasranamavali effectively?",
    content:
      "To chant the Shiva Sahasranamavali effectively, one must first create a peaceful and calm atmosphere. Then, focus on reciting Lord Shiva's name with correct pronunciation and no pause or break in between. Using a rosary (mala) can also be effective.",
  },
  {
    id: 5,
    title: "When to chant Shiv 1000 name?",
    content:
      "There is no specific time to chant Shiv 1000 names. One can chant these powerful names at their convenience. But chanting the names during Pradosh Kaal (morning time) on Monday and Shivratri gives devotees more effective results.",
  },
  {
    id: 6,
    title: "Which is the ideal direction to chant 1000 names of Shiva?",
    content:
      "The northeast direction is ideal for chanting the 1000 names of Shiva. According to Vastu Shastra, Lord Shiva is the owner of the northeast direction. So, chanting the names in this direction will please him and get his blessings sooner.",
  },
];

const Shiva1000 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="1000 Name of Lord Shiva - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">1000 Names of Lord Shiva</h1>
          <h2>Bringing Peace Through Shiva Sahasranamavali</h2>
          <h3>Chanting Shiva Sahasranama Names for Blessingsi</h3>
          <p>
            The Shiva Sahasranama is a collection of 1000 names of Lord Shiva.
            Chanting these powerful names can help devotees overcome their
            miseries and enjoy happiness, peace and prosperity. Read the Shiv
            1000 names meaning and significance below:
          </p>
          <h3>1000 Names of Lord Shiva</h3>
          <p>
            Founded in the Shiva Mahapurana, each name in Shiva Sahasranavali is
            dedicated to Lord Shiva's different qualities and powers. Recite all
            1000 names of Lord Shiva listed below to bring peace and prosperity
            to your life.
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
                  <th>1000 Name of Rama</th>
                  <th>Mantra</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Siva</td>
                  <td>Om Sivaya Namah</td>
                  <td>The Auspicious One</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hara</td>
                  <td>Om Haraye Namah</td>
                  <td>The Remover of Sins</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mrida</td>
                  <td>Om Mridaye Namah</td>
                  <td>The Compassionate One</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Rudra</td>
                  <td>Om Rudraye Namah</td>
                  <td>The Fierce One</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Pushkara</td>
                  <td>Om Pushkaraye Namah</td>
                  <td>The Benevolent One</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Pushpalochana</td>
                  <td>Om Pushpalochanaye Namah</td>
                  <td>The One with Flower-like Eyes</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Arthigamya</td>
                  <td>Om Arthigamyaye Namah</td>
                  <td>The One Whose Worship is Prosperous</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Sadachara</td>
                  <td>Om Sadacharaye Namah</td>
                  <td>The One Who Follows Right Conduct</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Sharva</td>
                  <td>Om Sharvaye Namah</td>
                  <td>The Destroyer</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Shambhu</td>
                  <td>Om Shambhaye Namah</td>
                  <td>The Source of All Joy</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Maheshvara</td>
                  <td>Om Maheshvaraye Namah</td>
                  <td>The Supreme Lord</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Chandrapida</td>
                  <td>Om Chandrapidaye Namah</td>
                  <td>The One Who Wears Moon on Head</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Chandramouli</td>
                  <td>Om Chandramouliye Namah</td>
                  <td>The One Who Has Moon on Head</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Vishva</td>
                  <td>Om Vishvaye Namah</td>
                  <td>The Universe</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Vishvamareshvara</td>
                  <td>Om Vishvamareshvaraye Namah</td>
                  <td>Lord of the Universe and the Gods</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Vedantasarasandoha</td>
                  <td>Om Vedantasarasandohaye Namah</td>
                  <td>Essence of the Vedantic teachings</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Kapali</td>
                  <td>Om Kapaliye Namah</td>
                  <td>The One Who Has a Skull</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Nilalohita</td>
                  <td>Om Nilalohitaye Namah</td>
                  <td>The One Who Has a Blue Neck</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Dhyanadhara</td>
                  <td>Om Dhyanadharaye Namah</td>
                  <td>The Support of Meditation</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Aparicchedya</td>
                  <td>Om Aparicchedyaye Namah</td>
                  <td>The Infinite, Unbounded One</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Gauribharata</td>
                  <td>Om Gauribharataye Namah</td>
                  <td>The Beloved of Goddess Gauri</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Ganeshvara</td>
                  <td>Om Ganeshvaraye Namah</td>
                  <td>Lord of Ganesha</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Ashtamurti</td>
                  <td>Om Ashtamurtiye Namah</td>
                  <td>The One Who Has Eight Forms</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Vishvamurti</td>
                  <td>Om Vishvamurtiye Namah</td>
                  <td>The One Who Embodies the Universe</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Trivargasvargasadhana</td>
                  <td>Om Trivargasvargasadhanaye Namah</td>
                  <td>The One Who Provides the Threefold Goal</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Jnanagamya</td>
                  <td>Om Jnanagamyaye Namah</td>
                  <td>The One Who is Attained through Knowledge</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Dridaprajna</td>
                  <td>Om Dridaprajnaye Namah</td>
                  <td>The One with Steadfast Wisdom</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Devadeva</td>
                  <td>Om Devadevaye Namah</td>
                  <td>The God of Gods</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Trilochana</td>
                  <td>Om Trilochanaye Namah</td>
                  <td>The One with Three Eyes</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Vamadeva</td>
                  <td>Om Vamadevaye Namah</td>
                  <td>The One Who is Beautiful, Blissful</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Mahadeva</td>
                  <td>Om Mahadevaye Namah</td>
                  <td>The Great God</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Patu</td>
                  <td>Om Patuye Namah</td>
                  <td>The Protector</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Parivrida</td>
                  <td>Om Parivridaye Namah</td>
                  <td>The One Who is Complete and Full</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Drida</td>
                  <td>Om Dridaye Namah</td>
                  <td>The Unshakable One</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Vishvarupa</td>
                  <td>Om Vishvarupaye Namah</td>
                  <td>The One Who Has All Forms</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Virupaksha</td>
                  <td>Om Virupaksha Om Virupakshaye Namah</td>
                  <td>The One with a Twisted Eye</td>{" "}
                </tr>
                <tr>
                  <td>37</td>
                  <td>Vagisha</td>
                  <td>Om Vagishaye Namah</td>
                  <td>The Lord of Speech and Knowledge</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Shuchisattama</td>
                  <td>Om Shuchisattamaye Namah</td>
                  <td>The Purest and Highest</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Sarvapramanasamvadi</td>
                  <td>Om Sarvapramanasamvadaye Namah</td>
                  <td>The One Who is the Source of All Evidence</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Vrishanka</td>
                  <td>Om Vrishankaye Namah</td>
                  <td>The One Who has the Bull as His Emblem</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Vrishavahana</td>
                  <td>Om Vrishavahanaye Namah</td>
                  <td>The One Who Rides the Bull</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Isha</td>
                  <td>Om Ishaye Namah</td>
                  <td>The Lord of All</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Pinaki</td>
                  <td>Om Pinakiye Namah</td>
                  <td>The Bearer of the Pinaka Bow</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Khatvanga</td>
                  <td>Om Khatvangaye Namah</td>
                  <td>The One Who Holds the Khatvanga Weapon</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Chitravesha</td>
                  <td>Om Chitraveshaye Namah</td>
                  <td>The One with a Beautiful Appearance</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Chirantana</td>
                  <td>Om Chirantanaye Namah</td>
                  <td>The Eternal One</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Tamohara</td>
                  <td>Om Tamoharaye Namah</td>
                  <td>The Remover of Darkness</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Mahayogi</td>
                  <td>Om Mahayogaye Namah</td>
                  <td>The Supreme Yogi</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Gupta</td>
                  <td>Om Guptaye Namah</td>
                  <td>The Hidden One</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Brahma</td>
                  <td>Om Brahmaye Namah</td>
                  <td>The Creator</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Dhurjati</td>
                  <td>Om Dhurjataye Namah</td>
                  <td>The One Who Has the Blemish of Ashes</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Kalakala</td>
                  <td>Om Kalakalaye Namah</td>
                  <td>The Time of All Times</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Krittivasah</td>
                  <td>Om Krittivasahaye Namah</td>
                  <td>The One Who Wears the Skin of Kritti (sage)</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Subhaga</td>
                  <td>Om Subhagaye Namah</td>
                  <td>The Auspicious One</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Pranavatmaka</td>
                  <td>Om Pranavatmakaye Namah</td>
                  <td>The One Who is Symbolized by Om</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Unnadhra</td>
                  <td>Om Unnadhraye Namah</td>
                  <td>The One Who Raises and Uplifts</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Purusha</td>
                  <td>Om Purushaye Namah</td>
                  <td>The Supreme Being</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Jushya</td>
                  <td>Om Jushyay Namah</td>
                  <td>The One Who is Worshipped</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Durvasa</td>
                  <td>Om Durvasaye Namah</td>
                  <td>The Sage Known for His Anger</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Purashasana</td>
                  <td>Om Purashasanaye Namah</td>
                  <td>The One Who Has Authority Over All Creation</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Divyayudha</td>
                  <td>Om Divyayudhaye Namah</td>
                  <td>The One Who Wields Divine Weapons</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Skandaguru</td>
                  <td>Om Skandaguraye Namah</td>
                  <td>The Teacher of Skanda (Lord Kartikeya)</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Parameshthi</td>
                  <td>Om Parameshtaye Namah</td>
                  <td>The Supreme Lord, Master of the Universe</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Paratpara</td>
                  <td>Om Paratparaye Namah</td>
                  <td>The Supreme, Beyond All</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Anadimadhyanidhana</td>
                  <td>Om Anadimadhyanidhanaye Namah</td>
                  <td>The One Who is Beginning, Middle, and End</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Girisha</td>
                  <td>Om Girishaye Namah</td>
                  <td>The Lord of the Mountains</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Girijadhava</td>
                  <td>Om Girijadhavaye Namah</td>
                  <td>The Husband of Goddess Parvati (Giri means Mountain)</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Kuverabandhu</td>
                  <td>Om Kuverabandhoye Namah</td>
                  <td>The Relative of Kubera (God of Wealth)</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Shrikantha</td>
                  <td>Om Shrikanthaye Namah</td>
                  <td>The One Who has Goddess Lakshmi as His Consort</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Lokavarnottama</td>
                  <td>Om Lokavarnottamaye Namah</td>
                  <td>The One Who is the Supreme among all beings</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Mridu</td>
                  <td>Om Mriduye Namah</td>
                  <td>The Gentle One</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Samadhivedya</td>
                  <td>Om Samadhivedyaye Namah</td>
                  <td>The One Who is Experienced in Meditation</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Kodandi</td>
                  <td>Om Kodandaye Namah</td>
                  <td>The One Who Holds the Bow</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Nilakantha</td>
                  <td>Om Nilakanthaye Namah</td>
                  <td>The One with the Blue Throat</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Parashvadhi</td>
                  <td>Om Parashvadhaye Namah</td>
                  <td>The One Who Holds the Axe</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Vishalaksha</td>
                  <td>Om Vishalakshaye Namah</td>
                  <td>The One Who has Vast Eyes</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Mrigavyadha</td>
                  <td>Om Mrigavyadhaye Namah</td>
                  <td>The One Who is the Hunter of Deer</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Suresha</td>
                  <td>Om Sureshaye Namah</td>
                  <td>The Lord of the Gods</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Suryatapana</td>
                  <td>Om Suryatapanaye Namah</td>
                  <td>The One Who is the Sun’s Heat</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Dharmadhama</td>
                  <td>Om Dharmadhamaye Namah</td>
                  <td>The One Who is the Abode of Dharma (Righteousness)</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Kshamakshetra</td>
                  <td>Om Kshamakshetraye Namah</td>
                  <td>The Field of Patience</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Bhagavana</td>
                  <td>Om Bhagavanaye Namah</td>
                  <td>The Blessed One, the Supreme Lord</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Bhaganetrabhida</td>
                  <td>Om Bhaganetrabhidaye Namah</td>
                  <td>The One Who has the Eye of the Lord of the World</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Ugra</td>
                  <td>Om Ugraye Namah</td>
                  <td>The Terrible One</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Pashupati</td>
                  <td>Om Pashupataye Namah</td>
                  <td>The Lord of All Living Beings (Master of Animals)</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Tarkshya</td>
                  <td>Om Tarkshyaye Namah</td>
                  <td>The One Who is the Eagle, Symbol of Lord Vishnu</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Priyabhakta</td>
                  <td>Om Priyabhaktaye Namah</td>
                  <td>The One Who is Loved by Devotees</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Parantapa</td>
                  <td>Om Parantapaye Namah</td>
                  <td>The One Who is the Destroyer of Enemies</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Datta</td>
                  <td>Om Dattaye Namah</td>
                  <td>The One Who is Given or Donated</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Dayakara</td>
                  <td>Om Dayakaraye Namah</td>
                  <td>The Compassionate One</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Daksha</td>
                  <td>Om Dakshaye Namah</td>
                  <td>The One Who is Skilled or Capable</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Karmandi</td>
                  <td>Om Karmandaye Namah</td>
                  <td>The One Who Performs All Actions</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Kamashasana</td>
                  <td>Om Kamashasanaye Namah</td>
                  <td>The One Who Controls Desires</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Shmashananilaya</td>
                  <td>Om Shmashananilayaye Namah</td>
                  <td>The One Who Dwells in Cremation Grounds</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Suksha</td>
                  <td>Om Sukshe Namah</td>
                  <td>The One Who is Subtle</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Shmashanastha</td>
                  <td>Om Shmashanasthaye Namah</td>
                  <td>The One Who Resides in the Cremation Grounds</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Maheshvara</td>
                  <td>Om Maheshvaraye Namah</td>
                  <td>The Supreme Lord, Lord of the Universe</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Lokakarta</td>
                  <td>Om Lokakartaye Namah</td>
                  <td>The Creator of the World</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Mrigapati</td>
                  <td>Om Mrigapataye Namah</td>
                  <td>The Lord of the Deer</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Mahakarta</td>
                  <td>Om Mahakartaye Namah</td>
                  <td>The Great Creator</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Mahaushadhi</td>
                  <td>Om Mahaushadhaye Namah</td>
                  <td>The Supreme Medicine (Healer)</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Uttara</td>
                  <td>Om Uttaraye Namah</td>
                  <td>The Ultimate, the Final One</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Gopati</td>
                  <td>Om Gopataye Namah</td>
                  <td>The Lord of the Cows (Protector of Cattle)</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Gopta</td>
                  <td>Om Goptaye Namah</td>
                  <td>The Protector of the Universe</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Jnanagamya</td>
                  <td>Om Jnanagamyaye Namah</td>
                  <td>The One Who is Attained by Knowledge</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Puratana</td>
                  <td>Om Puratanaye Namah</td>
                  <td>The Ancient One</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Niti</td>
                  <td>Om Nitiye Namah</td>
                  <td>The Lord of Righteousness and Discipline</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Suniti</td>
                  <td>Om Sunitaye Namah</td>
                  <td>The One Who has Good Conduct</td>
                </tr>
                <tr>
                  <td>109</td>
                  <td>Shuddhatma</td>
                  <td>Om Shuddhatmaye Namah</td>
                  <td>The One with a Pure Soul</td>
                </tr>
                <tr>
                  <td>110</td>
                  <td>Soma</td>
                  <td>Om Somaye Namah</td>
                  <td>The Moon, the Nectar</td>
                </tr>
                <tr>
                  <td>111</td>
                  <td>Somarata</td>
                  <td>Om Somarataye Namah</td>
                  <td>The One Who is Devoted to Soma (Moon)</td>
                </tr>
                <tr>
                  <td>112</td>
                  <td>Sukhi</td>
                  <td>Om Sukhiye Namah</td>
                  <td>The One Who Brings Happiness</td>
                </tr>
                <tr>
                  <td>113</td>
                  <td>Somapa</td>
                  <td>Om Somapaye Namah</td>
                  <td>The One Who Drinks the Nectar of the Moon</td>
                </tr>
                <tr>
                  <td>114</td>
                  <td>Amritapa</td>
                  <td>Om Amritapaye Namah</td>
                  <td>The One Who Drinks Nectar (Immortality)</td>
                </tr>
                <tr>
                  <td>115</td>
                  <td>Sunya</td>
                  <td>Om Sunyaye Namah</td>
                  <td>The Void, the Empty One</td>
                </tr>
                <tr>
                  <td>116</td>
                  <td>Mahatejah</td>
                  <td>Om Mahatejaye Namah</td>
                  <td>The One with Great Radiance</td>
                </tr>
                <tr>
                  <td>117</td>
                  <td>Mahadyuti</td>
                  <td>Om Mahadyutaye Namah</td>
                  <td>The One with Supreme Brilliance</td>
                </tr>
                <tr>
                  <td>118</td>
                  <td>Tejomaya</td>
                  <td>Om Tejomayaye Namah</td>
                  <td>The One Who is Made of Radiance</td>
                </tr>
                <tr>
                  <td>119</td>
                  <td>Amritamaya</td>
                  <td>Om Amritamayaye Namah</td>
                  <td>The One Who is Made of Nectar</td>
                </tr>
                <tr>
                  <td>120</td>
                  <td>Annamaya</td>
                  <td>Om Annamayaye Namah</td>
                  <td>The One Who is Made of Food (Sustainer)</td>
                </tr>
                <tr>
                  <td>121</td>
                  <td>Sudhapati</td>
                  <td>Om Sudhapatiye Namah</td>
                  <td>Lord of Nectar, the Divine One</td>
                </tr>
                <tr>
                  <td>122</td>
                  <td>Ajatashatru</td>
                  <td>Om Ajatashatraye Namah</td>
                  <td>The One Who has No Enemies (One who is invincible)</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Aloka</td>
                  <td>Om Alokayee Namah</td>
                  <td>The One Who is Beyond Darkness (Light)</td>
                </tr>
                <tr>
                  <td>124</td>
                  <td>Sambhavya</td>
                  <td>Om Sambhavyaye Namah</td>
                  <td>The One Who is the Source of All</td>
                </tr>
                <tr>
                  <td>125</td>
                  <td>Havyavahana</td>
                  <td>Om Havyavahanaye Namah</td>
                  <td>The One Who Carries Offerings (Fire)</td>
                </tr>
                <tr>
                  <td>126</td>
                  <td>Lokakara</td>
                  <td>Om Lokakaraye Namah</td>
                  <td>The Creator of the World</td>
                </tr>
                <tr>
                  <td>127</td>
                  <td>Vedakara</td>
                  <td>Om Vedakaraye Namah</td>
                  <td>The Creator of the Vedas</td>
                </tr>
                <tr>
                  <td>128</td>
                  <td>Sutrakara</td>
                  <td>Om Sutakaraye Namah</td>
                  <td>The One Who Holds the Thread of Creation</td>
                </tr>
                <tr>
                  <td>129</td>
                  <td>Sanatana</td>
                  <td>Om Sanatanaye Namah</td>
                  <td>The Eternal One</td>
                </tr>
                <tr>
                  <td>130</td>
                  <td>Maharishi</td>
                  <td>Om Maharishaye Namah</td>
                  <td>The Great Sage</td>
                </tr>
                <tr>
                  <td>131</td>
                  <td>Kapilacharya</td>
                  <td>Om Kapilacharyaye Namah</td>
                  <td>The Teacher Kapila (One of the ancient sages)</td>
                </tr>
                <tr>
                  <td>132</td>
                  <td>Vishvadipti</td>
                  <td>Om Vishvadiptaye Namah</td>
                  <td>The One Who is the Light of the Universe</td>
                </tr>
                <tr>
                  <td>133</td>
                  <td>Vilochana</td>
                  <td>Om Vilochanaye Namah</td>
                  <td>The One Who Has Eyes Everywhere</td>
                </tr>
                <tr>
                  <td>134</td>
                  <td>Pinakapani</td>
                  <td>Om Pinakapaniye Namah</td>
                  <td>The One Who Holds the Pinaka Bow</td>
                </tr>
                <tr>
                  <td>135</td>
                  <td>Bhudeva</td>
                  <td>Om Bhudevaye Namah</td>
                  <td>The God of Earth</td>
                </tr>
                <tr>
                  <td>136</td>
                  <td>Svastida</td>
                  <td>Om Svastidaye Namah</td>
                  <td>The One Who Brings Auspiciousness</td>
                </tr>
                <tr>
                  <td>137</td>
                  <td>Svastikrita</td>
                  <td>Om Svastikritaye Namah</td>
                  <td>The One Who Makes Things Auspicious</td>
                </tr>
                <tr>
                  <td>138</td>
                  <td>Sudhi</td>
                  <td>Om Sudhiye Namah</td>
                  <td>The One Who is Pure</td>
                </tr>
                <tr>
                  <td>139</td>
                  <td>Dhatridhama</td>
                  <td>Om Dhatridhamaye Namah</td>
                  <td>The One Who is the Abode of the Creator (Dharma)</td>
                </tr>
                <tr>
                  <td>140</td>
                  <td>Dhamakara</td>
                  <td>Om Dhamakaraye Namah</td>
                  <td>The One Who Causes the Universe to Move</td>
                </tr>
                <tr>
                  <td>141</td>
                  <td>Sarvaga</td>
                  <td>Om Sarvagaye Namah</td>
                  <td>The One Who is Present Everywhere</td>
                </tr>
                <tr>
                  <td>142</td>
                  <td>Sarvagochara</td>
                  <td>Om Sarvagocharaye Namah</td>
                  <td>The One Who is Beyond Reach</td>
                </tr>
                <tr>
                  <td>143</td>
                  <td>Brahmasrika</td>
                  <td>Om Brahmasrikaye Namah</td>
                  <td>The One Who is the Source of Brahma's Essence</td>
                </tr>
                <tr>
                  <td>144</td>
                  <td>Vishvasrika</td>
                  <td>Om Vishvasrikaye Namah</td>
                  <td>The One Who is the Source of All Things</td>
                </tr>
                <tr>
                  <td>145</td>
                  <td>Sarga</td>
                  <td>Om Sargaye Namah</td>
                  <td>The Creator of the Universe</td>
                </tr>
                <tr>
                  <td>146</td>
                  <td>Karnikara</td>
                  <td>Om Karnikaraye Namah</td>
                  <td>The One Who Holds the Lotus in His Hand</td>
                </tr>
                <tr>
                  <td>147</td>
                  <td>Priya</td>
                  <td>Om Priyaye Namah</td>
                  <td>The Beloved One</td>
                </tr>
                <tr>
                  <td>148</td>
                  <td>Kavi</td>
                  <td>Om Kavaye Namah</td>
                  <td>The Sage, the Poet</td>
                </tr>
                <tr>
                  <td>149</td>
                  <td>Shakha</td>
                  <td>Om Shakhaye Namah</td>
                  <td>
                    The One Who is the Branch of the Universe (Tree of Life)
                  </td>
                </tr>
                <tr>
                  <td>150</td>
                  <td>Vishakha</td>
                  <td>Om Vishakhaye Namah</td>
                  <td>The One Who has Numerous Branches</td>
                </tr>
                <tr>
                  <td>151</td>
                  <td>Goshakha</td>
                  <td>Om Goshakhaye Namah</td>
                  <td>The One Who Holds the Branch of the Cow</td>
                </tr>
                <tr>
                  <td>152</td>
                  <td>Siva</td>
                  <td>Om Sivate Namah</td>
                  <td>The Auspicious One</td>
                </tr>
                <tr>
                  <td>153</td>
                  <td>Bhishaka</td>
                  <td>Om Bhishakaye Namah</td>
                  <td>The One Who is the Physician of the World</td>
                </tr>
                <tr>
                  <td>154</td>
                  <td>Anuttama</td>
                  <td>Om Anuttamaye Namah</td>
                  <td>The One Who is Supreme</td>
                </tr>
                <tr>
                  <td>155</td>
                  <td>Gangaplavodaka</td>
                  <td>Om Gangaplavodakaye Namah</td>
                  <td>The One Who is Immersed in the Water of the Ganga</td>
                </tr>
                <tr>
                  <td>156</td>
                  <td>Bhavya</td>
                  <td>Om Bhavyaye Namah</td>
                  <td>The One Who is Auspicious and Grand</td>
                </tr>
                <tr>
                  <td>157</td>
                  <td>Pushkala</td>
                  <td>Om Pushkalaye Namah</td>
                  <td>The One Who is Full of Beauty and Purity</td>
                </tr>
                <tr>
                  <td>158</td>
                  <td>Sthapati</td>
                  <td>Om Sthapataye Namah</td>
                  <td>The Creator of Form (Architect)</td>
                </tr>
                <tr>
                  <td>159</td>
                  <td>Sthira</td>
                  <td>Om Sthiraye Namah</td>
                  <td>The Steady One</td>
                </tr>
                <tr>
                  <td>160</td>
                  <td>Vijitatma</td>
                  <td>Om Vijitatmaye Namah</td>
                  <td>The One Who Conquers His Soul</td>
                </tr>
                <tr>
                  <td>161</td>
                  <td>Vishayatma</td>
                  <td>Om Vishayatmaye Namah</td>
                  <td>The One Who is the Soul of All Beings</td>
                </tr>
                <tr>
                  <td>162</td>
                  <td>Bhutavahana</td>
                  <td>Om Bhutavahanaye Namah</td>
                  <td>The One Who Carries All Living Beings</td>
                </tr>
                <tr>
                  <td>163</td>
                  <td>Sarathi</td>
                  <td>Om Sarathaye Namah</td>
                  <td>The Charioteer (Guide)</td>
                </tr>
                <tr>
                  <td>164</td>
                  <td>Sagana</td>
                  <td>Om Saganaye Namah</td>
                  <td>The One Who is Accompanied by All</td>
                </tr>
                <tr>
                  <td>165</td>
                  <td>Ganakaya</td>
                  <td>Om Ganakayaye Namah</td>
                  <td>The One Who is the Teacher of Music</td>
                </tr>
                <tr>
                  <td>166</td>
                  <td>Sukirti</td>
                  <td>Om Sukirtaye Namah</td>
                  <td>The One Who is Renowned for Good Deeds</td>
                </tr>
                <tr>
                  <td>167</td>
                  <td>Chinnasamshaya</td>
                  <td>Om Chinnasamshayaye Namah</td>
                  <td>The One Who is Free from Doubt</td>
                </tr>
                <tr>
                  <td>168</td>
                  <td>Kamadeva</td>
                  <td>Om Kamadevaye Namah</td>
                  <td>The God of Love</td>
                </tr>
                <tr>
                  <td>169</td>
                  <td>Kamapala</td>
                  <td>Om Kamapalaye Namah</td>
                  <td>The One Who Protects Desires</td>
                </tr>
                <tr>
                  <td>170</td>
                  <td>Bhasmoddhulita-vigraha</td>
                  <td>Om Bhasmoddhulita-vigrahaye Namah</td>
                  <td>The One Whose Body is Covered with Ashes</td>
                </tr>
                <tr>
                  <td>171</td>
                  <td>Bhasmapriya</td>
                  <td>Om Bhasmapriyay Namah</td>
                  <td>The One Who Loves Ashes</td>
                </tr>
                <tr>
                  <td>172</td>
                  <td>Bhasmashayi</td>
                  <td>Om Bhasmashayaye Namah</td>
                  <td>The One Who Sits on Ashes</td>
                </tr>
                <tr>
                  <td>173</td>
                  <td>Kami</td>
                  <td>Om Kamaye Namah</td>
                  <td>The One Who is Desired by All</td>
                </tr>
                <tr>
                  <td>174</td>
                  <td>Kanta</td>
                  <td>Om Kantaye Namah</td>
                  <td>The Beloved One</td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>Kritagama</td>
                  <td>Om Kritagamaye Namah</td>
                  <td>The One Who is the Source of Sacred Knowledge</td>
                </tr>
                <tr>
                  <td>176</td>
                  <td>Samavarta</td>
                  <td>Om Samavartaye Namah</td>
                  <td>The One Who is the Source of the Cycle of Creation</td>
                </tr>
                <tr>
                  <td>177</td>
                  <td>Nivritatma</td>
                  <td>Om Nivritatmaye Namah</td>
                  <td>The One Who is Free from Attachments</td>
                </tr>
                <tr>
                  <td>178</td>
                  <td>Dharmapunja</td>
                  <td>Om Dharmapunjaye Namah</td>
                  <td>The One Who is the Honor of Dharma</td>
                </tr>
                <tr>
                  <td>179</td>
                  <td>Sadashiva</td>
                  <td>Om Sadashivaye Namah</td>
                  <td>The Ever Auspicious One</td>
                </tr>
                <tr>
                  <td>180</td>
                  <td>Akalmasha</td>
                  <td>Om Akalmashay Namah</td>
                  <td>The One Who is Without any Defects</td>
                </tr>
                <tr>
                  <td>181</td>
                  <td>Chaturvahu</td>
                  <td>Om Chaturvahuye Namah</td>
                  <td>The One Who has Four Arms</td>
                </tr>
                <tr>
                  <td>182</td>
                  <td>Durvasa</td>
                  <td>Om Durvasaye Namah</td>
                  <td>The One Who is Invincible and Fierce</td>
                </tr>
                <tr>
                  <td>183</td>
                  <td>Durasada</td>
                  <td>Om Durasadaye Namah</td>
                  <td>The One Who is the One Beyond Reach</td>
                </tr>
                <tr>
                  <td>184</td>
                  <td>Durlabha</td>
                  <td>Om Durlabhaye Namah</td>
                  <td>The One Who is Hard to Find</td>
                </tr>
                <tr>
                  <td>185</td>
                  <td>Durgama</td>
                  <td>Om Durgamaye Namah</td>
                  <td>The One Who is Difficult to Reach</td>
                </tr>
                <tr>
                  <td>186</td>
                  <td>Durga</td>
                  <td>Om Durgaye Namah</td>
                  <td>The Invincible, the Protector</td>
                </tr>
                <tr>
                  <td>187</td>
                  <td>Sarvayudhavisharada</td>
                  <td>Om Sarvayudhavisharadaye Namah</td>
                  <td>The One Who is Master of All Weapons</td>
                </tr>
                <tr>
                  <td>188</td>
                  <td>Adhyatmayoganilaya</td>
                  <td>Om Adhyatmayoganilayaye Namah</td>
                  <td>
                    The One Who Dwells in the Practice of Spiritual Meditation
                  </td>
                </tr>
                <tr>
                  <td>189</td>
                  <td>Sutantu</td>
                  <td>Om Sutantaye Namah</td>
                  <td>The One Who is the Thread of Creation</td>
                </tr>
                <tr>
                  <td>190</td>
                  <td>Tantuvardhana</td>
                  <td>Om Tantuvardhanaye Namah</td>
                  <td>The One Who Expands the Threads of Creation</td>
                </tr>
                <tr>
                  <td>191</td>
                  <td>Shubhanga</td>
                  <td>Om Shubhangaye Namah</td>
                  <td>The One Who is Auspicious and Radiant</td>
                </tr>
                <tr>
                  <td>192</td>
                  <td>Lokasaranga</td>
                  <td>Om Lokasarangaye Namah</td>
                  <td>The One Who is the Creator of the Universe</td>
                </tr>
                <tr>
                  <td>193</td>
                  <td>Jagadisha</td>
                  <td>Om Jagadishaye Namah</td>
                  <td>The Lord of the Universe</td>
                </tr>
                <tr>
                  <td>194</td>
                  <td>Janardana</td>
                  <td>Om Janardanaye Namah</td>
                  <td>The One Who Helps the People (Destroyer of Evil)</td>
                </tr>
                <tr>
                  <td>195</td>
                  <td>Bhasmashuddhikara</td>
                  <td>Om Bhasmashuddhikaraye Namah</td>
                  <td>The One Who Purifies with Ashes</td>
                </tr>
                <tr>
                  <td>196</td>
                  <td>Meru</td>
                  <td>Om Meruye Namah</td>
                  <td>The One Who is the Mountain of Knowledge</td>
                </tr>
                <tr>
                  <td>197</td>
                  <td>Ojasvi</td>
                  <td>Om Ojasviye Namah</td>
                  <td>The One Who is Full of Vital Energy</td>
                </tr>
                <tr>
                  <td>198</td>
                  <td>Shuddhavigraha</td>
                  <td>Om Shuddhavigrahaye Namah</td>
                  <td>The One Who has a Pure Form</td>
                </tr>
                <tr>
                  <td>199</td>
                  <td>Asadhya</td>
                  <td>Om Asadhyaye Namah</td>
                  <td>The One Who Cannot Be Conquered</td>
                </tr>
                <tr>
                  <td>200</td>
                  <td>Sadhusadhya</td>
                  <td>Om Sadhusadhyaye Namah</td>
                  <td>The One Who is the Goal of the Sadhus (Saints)</td>
                </tr>
                <tr>
                  <td>201</td>
                  <td>Bhrityamarkatarupadhrika</td>
                  <td>Om Bhrityamarkatarupadhriyaye Namah</td>
                  <td>The One Who is the Form of the Monkey God (Hanuman)</td>
                </tr>
                <tr>
                  <td>202</td>
                  <td>Hiranyareta</td>
                  <td>Om Hiranyaretaye Namah</td>
                  <td>The One Who has Golden Semen (Creator)</td>
                </tr>
                <tr>
                  <td>203</td>
                  <td>Purana</td>
                  <td>Om Puranaye Namah</td>
                  <td>The Ancient One, the Source of All</td>
                </tr>
                <tr>
                  <td>204</td>
                  <td>Ripujivahara</td>
                  <td>Om Ripujivaharaye Namah</td>
                  <td>The One Who Destroys Enemies and Brings Life</td>
                </tr>
                <tr>
                  <td>205</td>
                  <td>Bala</td>
                  <td>Om Balaye Namah</td>
                  <td>The Young One, the Child God</td>
                </tr>
                <tr>
                  <td>206</td>
                  <td>Mahahrada</td>
                  <td>Om Mahahradaye Namah</td>
                  <td>The One Who Dwells in the Great Ocean</td>
                </tr>
                <tr>
                  <td>207</td>
                  <td>Mahagarta</td>
                  <td>Om Mahagartaye Namah</td>
                  <td>The One Who Dwells in the Great Pit (Cemetery)</td>
                </tr>
                <tr>
                  <td>208</td>
                  <td>Vyali</td>
                  <td>Om Vyalaye Namah</td>
                  <td>The Terrible, Fierce One</td>
                </tr>
                <tr>
                  <td>209</td>
                  <td>Siddhavrindaravandita</td>
                  <td>Om Siddhavrindaravanditaye Namah</td>
                  <td>The One Who is Adored by the Assembly of Siddhas</td>
                </tr>
                <tr>
                  <td>210</td>
                  <td>Vyaghracharmambara</td>
                  <td>Om Vyaghracharmambaraye Namah</td>
                  <td>The One Who Wears Tiger Skin</td>
                </tr>
                <tr>
                  <td>211</td>
                  <td>Mahabhuta</td>
                  <td>Om Mahabhutaye Namah</td>
                  <td>The One Who is the Great Element</td>
                </tr>
                <tr>
                  <td>212</td>
                  <td>Mahanidhi</td>
                  <td>Om Mahanidhaye Namah</td>
                  <td>The One Who is the Great Treasure</td>
                </tr>
                <tr>
                  <td>213</td>
                  <td>Amritasha</td>
                  <td>Om Amritashaye Namah</td>
                  <td>The One Who has the Nectar of Immortality</td>
                </tr>
                <tr>
                  <td>214</td>
                  <td>Amritavapu</td>
                  <td>Om Amritavapaye Namah</td>
                  <td>The One Who has the Form of Nectar</td>
                </tr>
                <tr>
                  <td>215</td>
                  <td>Panchajanya</td>
                  <td>Om Panchajanyaye Namah</td>
                  <td>The One Who Holds the Conch (Symbol of Vishnu)</td>
                </tr>
                <tr>
                  <td>216</td>
                  <td>Prabhanjana</td>
                  <td>Om Prabhanjanaye Namah</td>
                  <td>The One Who is the Source of Light</td>
                </tr>
                <tr>
                  <td>217</td>
                  <td>Panchavimshatitattvastha</td>
                  <td>Om Panchavimshatitattvasthaye Namah</td>
                  <td>The One Who Contains the 25 Principles</td>
                </tr>
                <tr>
                  <td>218</td>
                  <td>Parijata</td>
                  <td>Om Parijatay Namah</td>
                  <td>The One Who is the Lord of the Celestial Tree</td>
                </tr>
                <tr>
                  <td>219</td>
                  <td>Paravara</td>
                  <td>Om Paravaraaye Namah</td>
                  <td>The One Who is Beyond All Worlds</td>
                </tr>
                <tr>
                  <td>220</td>
                  <td>Sulabha</td>
                  <td>Om Sulabhaye Namah</td>
                  <td>The Easy One, the One Who is Easily Attained</td>
                </tr>
                <tr>
                  <td>221</td>
                  <td>Suvrata</td>
                  <td>Om Suvrataye Namah</td>
                  <td>The One Who Has Pure Vows</td>
                </tr>
                <tr>
                  <td>222</td>
                  <td>Shura</td>
                  <td>Om Shuraye Namah</td>
                  <td>The Hero, the Mighty One</td>
                </tr>
                <tr>
                  <td>223</td>
                  <td>Brahmavedanidhi</td>
                  <td>Om Brahmavedanidhaye Namah</td>
                  <td>The One Who is the Source of Brahma's Knowledge</td>
                </tr>
                <tr>
                  <td>224</td>
                  <td>Nidhi</td>
                  <td>Om Nidhaye Namah</td>
                  <td>The Treasure, the Repository of All Wealth</td>
                </tr>
                <tr>
                  <td>225</td>
                  <td>Varnashramaguru</td>
                  <td>Om Varnashramaguraye Namah</td>
                  <td>The Teacher of the Four Orders (Varna and Ashrama)</td>
                </tr>
                <tr>
                  <td>226</td>
                  <td>Varni</td>
                  <td>Om Varnaye Namah</td>
                  <td>The One Who is a Brahmin, the Creator</td>
                </tr>
                <tr>
                  <td>227</td>
                  <td>Shatrujita</td>
                  <td>Om Shatrujitaye Namah</td>
                  <td>The One Who Defeats Enemies</td>
                </tr>
                <tr>
                  <td>228</td>
                  <td>Shatrutapana</td>
                  <td>Om Shatrutapanaye Namah</td>
                  <td>The One Who Destroys Enemies</td>
                </tr>
                <tr>
                  <td>229</td>
                  <td>Ashrama</td>
                  <td>Om Ashramaye Namah</td>
                  <td>The One Who Dwells in the Hermitage</td>
                </tr>
                <tr>
                  <td>230</td>
                  <td>Kshapana</td>
                  <td>Om Kshapanaye Namah</td>
                  <td>The One Who Destroys Evil</td>
                </tr>
                <tr>
                  <td>231</td>
                  <td>Kshama</td>
                  <td>Om Kshamaye Namah</td>
                  <td>The One Who is Forgiving and Patient</td>
                </tr>
                <tr>
                  <td>232</td>
                  <td>Jnanavana</td>
                  <td>Om Jnanavanaye Namah</td>
                  <td>The One Who is the Essence of Knowledge</td>
                </tr>
                <tr>
                  <td>233</td>
                  <td>Achaleshvara</td>
                  <td>Om Achaleshvaraye Namah</td>
                  <td>The Immovable Lord, the One Who Cannot Be Shaken</td>
                </tr>
                <tr>
                  <td>234</td>
                  <td>Pramanabhuta</td>
                  <td>Om Pramanabhutaye Namah</td>
                  <td>The One Who is the Source of All Truth</td>
                </tr>
                <tr>
                  <td>235</td>
                  <td>Durjneya</td>
                  <td>Om Durjneyaye Namah</td>
                  <td>The One Who is Difficult to Conquer</td>
                </tr>
                <tr>
                  <td>236</td>
                  <td>Suparna</td>
                  <td>Om Suparnaye Namah</td>
                  <td>The One Who is the Best of Birds (Garuda)</td>
                </tr>
                <tr>
                  <td>237</td>
                  <td>Vayuvahana</td>
                  <td>Om Vayuvahanaye Namah</td>
                  <td>The One Who is Carried by the Wind (Vayu)</td>
                </tr>
                <tr>
                  <td>238</td>
                  <td>Dhanurdhara</td>
                  <td>Om Dhanurdharaaye Namah</td>
                  <td>The One Who Holds the Bow</td>
                </tr>
                <tr>
                  <td>239</td>
                  <td>Dhanurveda</td>
                  <td>Om Dhanurvedaye Namah</td>
                  <td>The One Who is the Master of Archery</td>
                </tr>
                <tr>
                  <td>240</td>
                  <td>Gunarishi</td>
                  <td>Om Gunarishaye Namah</td>
                  <td>The Sage of Virtue</td>
                </tr>
                <tr>
                  <td>241</td>
                  <td>Gunakara</td>
                  <td>Om Gunakaraye Namah</td>
                  <td>The One Who Creates Virtue</td>
                </tr>
                <tr>
                  <td>242</td>
                  <td>Satyasatyapara</td>
                  <td>Om Satyasatyaparaaye Namah</td>
                  <td>The One Who is the Ultimate Truth</td>
                </tr>
                <tr>
                  <td>243</td>
                  <td>Dina</td>
                  <td>Om Dinaye Namah</td>
                  <td>The One Who is the Savior of the Poor</td>
                </tr>
                <tr>
                  <td>244</td>
                  <td>Dharmaga</td>
                  <td>Om Dharmagaye Namah</td>
                  <td>The One Who is the Path of Dharma</td>
                </tr>
                <tr>
                  <td>245</td>
                  <td>Ananda</td>
                  <td>Om Anandaye Namah</td>
                  <td>The One Who is Supreme Bliss</td>
                </tr>
                <tr>
                  <td>246</td>
                  <td>Dharmasadhana</td>
                  <td>Om Dharmasadhanaye Namah</td>
                  <td>The One Who is the Source of the Practice of Dharma</td>
                </tr>
                <tr>
                  <td>247</td>
                  <td>Anantadrishti</td>
                  <td>Om Anantadrishtaye Namah</td>
                  <td>The One Who has Infinite Vision</td>
                </tr>
                <tr>
                  <td>248</td>
                  <td>Danda</td>
                  <td>Om Danday Namah</td>
                  <td>The One Who Wields the Rod of Discipline</td>
                </tr>
                <tr>
                  <td>249</td>
                  <td>Damayita</td>
                  <td>Om Damayitaye Namah</td>
                  <td>The One Who Controls and Subdues</td>
                </tr>
                <tr>
                  <td>250</td>
                  <td>Dama</td>
                  <td>Om Damaye Namah</td>
                  <td>The One Who is Self-Controlled</td>
                </tr>
                <tr>
                  <td>251</td>
                  <td>Abhivadya</td>
                  <td>Om Abhivadyaye Namah</td>
                  <td>The One Who is Worshiped by All</td>
                </tr>
                <tr>
                  <td>252</td>
                  <td>Mahamaya</td>
                  <td>Om Mahamayay Namah</td>
                  <td>The One Who is the Great Illusion (Maya)</td>
                </tr>
                <tr>
                  <td>253</td>
                  <td>Vishvakarma</td>
                  <td>Om Vishvakarmaye Namah</td>
                  <td>The Universal Architect</td>
                </tr>
                <tr>
                  <td>254</td>
                  <td>Visharada</td>
                  <td>Om Visharadaye Namah</td>
                  <td>The One Who is Knowledgeable in All Arts</td>
                </tr>
                <tr>
                  <td>255</td>
                  <td>Vitaraga</td>
                  <td>Om Vitaragaye Namah</td>
                  <td>The One Who is Free from Attachment</td>
                </tr>
                <tr>
                  <td>256</td>
                  <td>Vinitatma</td>
                  <td>Om Vinitatmaye Namah</td>
                  <td>The One Who is Humble</td>
                </tr>
                <tr>
                  <td>257</td>
                  <td>Tapasvi</td>
                  <td>Om Tapasviye Namah</td>
                  <td>The One Who is a Master of Austerities</td>
                </tr>
                <tr>
                  <td>258</td>
                  <td>Bhutabhavana</td>
                  <td>Om Bhutabhavanaye Namah</td>
                  <td>The One Who is the Lord of All Beings</td>
                </tr>
                <tr>
                  <td>259</td>
                  <td>Unmattavesha</td>
                  <td>Om Unmattaveshaye Namah</td>
                  <td>The One Who is in an Ecstatic State</td>
                </tr>
                <tr>
                  <td>260</td>
                  <td>Pracchanna</td>
                  <td>Om Pracchannaye Namah</td>
                  <td>The One Who is Hidden or Secret</td>
                </tr>
                <tr>
                  <td>261</td>
                  <td>Jitakama</td>
                  <td>Om Jitakamaye Namah</td>
                  <td>The One Who Conquers All Desires</td>
                </tr>
                <tr>
                  <td>262</td>
                  <td>Ajitapriya</td>
                  <td>Om Ajitapriyay Namah</td>
                  <td>The One Who is Loved by the Unconquered</td>
                </tr>
                <tr>
                  <td>263</td>
                  <td>Kalyanaprakriti</td>
                  <td>Om Kalyanaprakritaye Namah</td>
                  <td>The One Who is the Source of Auspicious Nature</td>
                </tr>
                <tr>
                  <td>264</td>
                  <td>Kalpa</td>
                  <td>Om Kalpay Namah</td>
                  <td>The One Who is the Creator of Cycles of Time</td>
                </tr>
                <tr>
                  <td>265</td>
                  <td>Sarvalokaprajapati</td>
                  <td>Om Sarvalokaprajapataye Namah</td>
                  <td>The Lord of All Beings and Worlds</td>
                </tr>
                <tr>
                  <td>266</td>
                  <td>Tarasvi</td>
                  <td>Om Tarasviye Namah</td>
                  <td>The One Who is Quick to Help</td>
                </tr>
                <tr>
                  <td>267</td>
                  <td>Tavaka</td>
                  <td>Om Tavakaye Namah</td>
                  <td>The One Who is of Great Strength</td>
                </tr>
                <tr>
                  <td>268</td>
                  <td>Dhimana</td>
                  <td>Om Dhimanaye Namah</td>
                  <td>The One Who is of Steady Mind and Understanding</td>
                </tr>
                <tr>
                  <td>269</td>
                  <td>Pradhanaprabhu</td>
                  <td>Om Pradhanaprabhuve Namah</td>
                  <td>The Supreme Lord, the Principal Deity</td>
                </tr>
                <tr>
                  <td>270</td>
                  <td>Avyaya</td>
                  <td>Om Avyayaye Namah</td>
                  <td>The Imperishable One, the Everlasting</td>
                </tr>
                <tr>
                  <td>271</td>
                  <td>Lokapala</td>
                  <td>Om Lokapalaye Namah</td>
                  <td>The Lord of All Worlds</td>
                </tr>
                <tr>
                  <td>272</td>
                  <td>Antarhitatma</td>
                  <td>Om Antarhitatmaye Namah</td>
                  <td>The One Who Resides in the Hearts of All</td>
                </tr>
                <tr>
                  <td>273</td>
                  <td>Kalpadi</td>
                  <td>Om Kalpadaye Namah</td>
                  <td>The One Who is the Creator of the Universe</td>
                </tr>
                <tr>
                  <td>274</td>
                  <td>Kamalakshana</td>
                  <td>Om Kamalakshanaye Namah</td>
                  <td>The One Who Has Lotus-like Eyes</td>
                </tr>
                <tr>
                  <td>275</td>
                  <td>Vedashastrarthatattvajna</td>
                  <td>Om Vedashastrarthatattvajnaaye Namah</td>
                  <td>
                    The One Who Knows the Essence of the Vedas and Scriptures
                  </td>
                </tr>
                <tr>
                  <td>276</td>
                  <td>Aniyama</td>
                  <td>Om Aniyamaye Namah</td>
                  <td>The One Who is Without Restraint or Limitation</td>
                </tr>
                <tr>
                  <td>277</td>
                  <td>Niyatashraya</td>
                  <td>Om Niyatashrayaye Namah</td>
                  <td>The One Who is the Refuge of the Disciplined</td>
                </tr>
                <tr>
                  <td>278</td>
                  <td>Chandra</td>
                  <td>Om Chandraye Namah</td>
                  <td>The Moon, the One Who is the Lord of Time and Light</td>
                </tr>
                <tr>
                  <td>279</td>
                  <td>Surya</td>
                  <td>Om Suryaye Namah</td>
                  <td>The Sun, the Source of Light and Energy</td>
                </tr>
                <tr>
                  <td>280</td>
                  <td>Shani</td>
                  <td>Om Shanaye Namah</td>
                  <td>The Planet Saturn, the One Who is the Lord of Karma</td>
                </tr>
                <tr>
                  <td>281</td>
                  <td>Ketu</td>
                  <td>Om Ketave Namah</td>
                  <td>The Ascending Node of the Moon</td>
                </tr>
                <tr>
                  <td>282</td>
                  <td>Varanga</td>
                  <td>Om Varangaye Namah</td>
                  <td>The One Who is Radiant and Beautiful</td>
                </tr>
                <tr>
                  <td>283</td>
                  <td>Vidrumacchavi</td>
                  <td>Om Vidrumacchavaye Namah</td>
                  <td>The One Who Has the Appearance of Coral</td>
                </tr>
                <tr>
                  <td>284</td>
                  <td>Bhaktivashya</td>
                  <td>Om Bhaktivashaye Namah</td>
                  <td>The One Who is Controlled by Devotion</td>
                </tr>
                <tr>
                  <td>285</td>
                  <td>Anagha</td>
                  <td>Om Anaghaye Namah</td>
                  <td>The One Who is Sinless and Pure</td>
                </tr>
                <tr>
                  <td>286</td>
                  <td>Parabrahmamrigavanarpana</td>
                  <td>Om Parabrahmamrigavanarpanaye Namah</td>
                  <td>The One Who is the Ultimate Supreme Being</td>
                </tr>
                <tr>
                  <td>287</td>
                  <td>Adri</td>
                  <td>Om Adriye Namah</td>
                  <td>The Mountain, the One Who is Firm and Steady</td>
                </tr>
                <tr>
                  <td>288</td>
                  <td>Adryalaya</td>
                  <td>Om Adryalayaye Namah</td>
                  <td>The One Who Dwells in the Mountain</td>
                </tr>
                <tr>
                  <td>289</td>
                  <td>Kanta</td>
                  <td>Om Kantaye Namah</td>
                  <td>The Beloved, the One Who is Desired by All</td>
                </tr>
                <tr>
                  <td>290</td>
                  <td>Paramatma</td>
                  <td>Om Paramataye Namah</td>
                  <td>The Supreme Soul, the Absolute Reality</td>
                </tr>
                <tr>
                  <td>291</td>
                  <td>Jagadguru</td>
                  <td>Om Jagadgurave Namah</td>
                  <td>The Guru of the Universe, the Supreme Teacher</td>
                </tr>
                <tr>
                  <td>292</td>
                  <td>Sarvakarmalaya</td>
                  <td>Om Sarvakarmalayaye Namah</td>
                  <td>The One Who is the Source of All Actions</td>
                </tr>
                <tr>
                  <td>293</td>
                  <td>Tushta</td>
                  <td>Om Tushtaye Namah</td>
                  <td>The One Who is Satisfied and Content</td>
                </tr>
                <tr>
                  <td>294</td>
                  <td>Mangalya</td>
                  <td>Om Mangalyaye Namah</td>
                  <td>The One Who Brings Auspiciousness and Welfare</td>
                </tr>
                <tr>
                  <td>295</td>
                  <td>Mangalavrita</td>
                  <td>Om Mangalavritaye Namah</td>
                  <td>The One Who is Surrounded by Auspiciousness</td>
                </tr>
                <tr>
                  <td>296</td>
                  <td>Mahatapa</td>
                  <td>Om Mahatapaye Namah</td>
                  <td>The One Who Has Great Penances and Austerities</td>
                </tr>
                <tr>
                  <td>297</td>
                  <td>Drighatapa</td>
                  <td>Om Drighatapaye Namah</td>
                  <td>The One Who Has Long and Great Penances</td>
                </tr>
                <tr>
                  <td>298</td>
                  <td>Sthavishtha</td>
                  <td>Om Sthavishthaye Namah</td>
                  <td>The One Who is Immovable and Firm</td>
                </tr>
                <tr>
                  <td>299</td>
                  <td>Sthavira</td>
                  <td>Om Sthaviraye Namah</td>
                  <td>The One Who is Ancient, the Everlasting</td>
                </tr>
                <tr>
                  <td>300</td>
                  <td>Dhruva</td>
                  <td>Om Dhruvaye Namah</td>
                  <td>The Immovable One, the Eternal Star</td>
                </tr>
                <tr>
                  <td>301</td>
                  <td>Aha</td>
                  <td>Om Ahaye Namah</td>
                  <td>The One Who is the Source of Creation</td>
                </tr>
                <tr>
                  <td>302</td>
                  <td>Samvatsara</td>
                  <td>Om Samvatsaraye Namah</td>
                  <td>The One Who is the Source of the Year</td>
                </tr>
                <tr>
                  <td>303</td>
                  <td>Vyapti</td>
                  <td>Om Vyaptaye Namah</td>
                  <td>The One Who Permeates All</td>
                </tr>
                <tr>
                  <td>304</td>
                  <td>Pramana</td>
                  <td>Om Pramanaye Namah</td>
                  <td>The One Who is the Source of Truth</td>
                </tr>
                <tr>
                  <td>305</td>
                  <td>Paramatapa</td>
                  <td>Om Paramatapay Namah</td>
                  <td>The One Who Has Supreme Austerity</td>
                </tr>
                <tr>
                  <td>306</td>
                  <td>Samvatsarakara</td>
                  <td>Om Samvatsarakaraye Namah</td>
                  <td>The One Who is the Creator of the Year</td>
                </tr>
                <tr>
                  <td>307</td>
                  <td>Mantrapratyayakara</td>
                  <td>Om Mantrapratyayakaraye Namah</td>
                  <td>The One Who Instills Faith in the Mantras</td>
                </tr>
                <tr>
                  <td>308</td>
                  <td>Sarvadarshana</td>
                  <td>Om Sarvadarshanaye Namah</td>
                  <td>The One Who has All-encompassing Vision</td>
                </tr>
                <tr>
                  <td>309</td>
                  <td>Aja</td>
                  <td>Om Ajaye Namah</td>
                  <td>The Unborn, the One Who is Eternal</td>
                </tr>
                <tr>
                  <td>310</td>
                  <td>Sarveshvara</td>
                  <td>Om Sarveshvaraye Namah</td>
                  <td>The Lord of All, the Supreme God</td>
                </tr>
                <tr>
                  <td>311</td>
                  <td>Siddha</td>
                  <td>Om Siddhaye Namah</td>
                  <td>The Perfected Being, the Accomplished One</td>
                </tr>
                <tr>
                  <td>312</td>
                  <td>Mahareta</td>
                  <td>Om Maharetaye Namah</td>
                  <td>The One Who Has Great Wisdom</td>
                </tr>
                <tr>
                  <td>313</td>
                  <td>Mahabala</td>
                  <td>Om Mahabalaye Namah</td>
                  <td>The One Who Has Supreme Strength</td>
                </tr>
                <tr>
                  <td>314</td>
                  <td>Yogi</td>
                  <td>Om Yogaye Namah</td>
                  <td>The One Who is the Master of Yoga</td>
                </tr>
                <tr>
                  <td>315</td>
                  <td>Yogya</td>
                  <td>Om Yogya Namah</td>
                  <td>The One Who is Worthy and Deserving</td>
                </tr>
                <tr>
                  <td>316</td>
                  <td>Siddhi</td>
                  <td>Om Siddhaye Namah</td>
                  <td>The One Who is the Source of Perfection</td>
                </tr>
                <tr>
                  <td>317</td>
                  <td>Mahateja</td>
                  <td>Om Mahatejaye Namah</td>
                  <td>The One Who has Supreme Radiance</td>
                </tr>
                <tr>
                  <td>318</td>
                  <td>Sarvadi</td>
                  <td>Om Sarvadaye Namah</td>
                  <td>The Source of All Things</td>
                </tr>
                <tr>
                  <td>319</td>
                  <td>Agraha</td>
                  <td>Om Agrahaye Namah</td>
                  <td>The One Who is Unstoppable, the Unshakable</td>
                </tr>
                <tr>
                  <td>320</td>
                  <td>Vasu</td>
                  <td>Om Vasave Namah</td>
                  <td>The One Who is the Dweller of All, the Divine One</td>
                </tr>
                <tr>
                  <td>321</td>
                  <td>Vasumana</td>
                  <td>Om Vasumanaye Namah</td>
                  <td>The One Who is Full of Goodness</td>
                </tr>
                <tr>
                  <td>322</td>
                  <td>Satya</td>
                  <td>Om Satyaye Namah</td>
                  <td>The Truth, the Eternal Reality</td>
                </tr>
                <tr>
                  <td>323</td>
                  <td>Sarvapapahara</td>
                  <td>Om Sarvapapaharaye Namah</td>
                  <td>The One Who Removes All Sins</td>
                </tr>
                <tr>
                  <td>324</td>
                  <td>Sukirti</td>
                  <td>Om Sukirtaye Namah</td>
                  <td>The One Who is of Good Reputation</td>
                </tr>
                <tr>
                  <td>325</td>
                  <td>Shobhana</td>
                  <td>Om Shobhanaye Namah</td>
                  <td>The One Who is Auspicious and Beautiful</td>
                </tr>
                <tr>
                  <td>326</td>
                  <td>Shrimana</td>
                  <td>Om Shrimanaye Namah</td>
                  <td>The One Who is the Lord of the Universe</td>
                </tr>
                <tr>
                  <td>327</td>
                  <td>Avanmanasagochara</td>
                  <td>Om Avanmanasagocharaye Namah</td>
                  <td>The One Who is Beyond the Reach of Speech and Mind</td>
                </tr>
                <tr>
                  <td>328</td>
                  <td>Amritashashvata</td>
                  <td>Om Amritashashvataye Namah</td>
                  <td>The One Who is Eternal, the Source of Immortality</td>
                </tr>
                <tr>
                  <td>329</td>
                  <td>Shanta</td>
                  <td>Om Shantaye Namah</td>
                  <td>The Peaceful One, the Calm</td>
                </tr>
                <tr>
                  <td>330</td>
                  <td>Vanahasta</td>
                  <td>Om Vanahastaye Namah</td>
                  <td>The One Who Holds a Branch</td>
                </tr>
                <tr>
                  <td>331</td>
                  <td>Pratapavana</td>
                  <td>Om Pratapavanaye Namah</td>
                  <td>The One Who is the Wind of Glory</td>
                </tr>
                <tr>
                  <td>332</td>
                  <td>Kamandalundhara</td>
                  <td>Om Kamandalundharaye Namah</td>
                  <td>The One Who Holds the Water Pot (Kamandalu)</td>
                </tr>
                <tr>
                  <td>333</td>
                  <td>Dhanvi</td>
                  <td>Om Dhanvaye Namah</td>
                  <td>The One Who is the Bowbearer</td>
                </tr>
                <tr>
                  <td>334</td>
                  <td>Vedanga</td>
                  <td>Om Vedangaye Namah</td>
                  <td>The One Who is the Master of the Vedas</td>
                </tr>
                <tr>
                  <td>335</td>
                  <td>Vedavita</td>
                  <td>Om Vedavitaye Namah</td>
                  <td>The One Who Knows the Vedas</td>
                </tr>
                <tr>
                  <td>336</td>
                  <td>Muni</td>
                  <td>Om Munaye Namah</td>
                  <td>The Sage, the Silent One</td>
                </tr>
                <tr>
                  <td>337</td>
                  <td>Bhrajishnu</td>
                  <td>Om Bhrajishnu Namah</td>
                  <td>The One Who Shines Brightly</td>
                </tr>
                <tr>
                  <td>338</td>
                  <td>Bhojana</td>
                  <td>Om Bhojanaye Namah</td>
                  <td>The One Who is the Lord of All Foods</td>
                </tr>
                <tr>
                  <td>339</td>
                  <td>Bhokta</td>
                  <td>Om Bhoktaye Namah</td>
                  <td>The Enjoyer, the One Who Enjoys the Offerings</td>
                </tr>
                <tr>
                  <td>340</td>
                  <td>Lokanatha</td>
                  <td>Om Lokanathaye Namah</td>
                  <td>The Lord of the World</td>
                </tr>
                <tr>
                  <td>341</td>
                  <td>Duradhara</td>
                  <td>Om Duradharaye Namah</td>
                  <td>
                    The One Who is the Holder of the Difficult or Tough (Tasks)
                  </td>
                </tr>
                <tr>
                  <td>342</td>
                  <td>Atindriya</td>
                  <td>Om Atindriyaye Namah</td>
                  <td>The One Who is Beyond the Senses</td>
                </tr>
                <tr>
                  <td>343</td>
                  <td>Mahamaya</td>
                  <td>Om Mahamayay Namah</td>
                  <td>The Great Illusion, the Supreme Power</td>
                </tr>
                <tr>
                  <td>344</td>
                  <td>Sarvavasa</td>
                  <td>Om Sarvavasaye Namah</td>
                  <td>The One Who Dwells Everywhere</td>
                </tr>
                <tr>
                  <td>345</td>
                  <td>Chatushpatha</td>
                  <td>Om Chatushpathaye Namah</td>
                  <td>The One Who is the Master of the Four Paths</td>
                </tr>
                <tr>
                  <td>346</td>
                  <td>Kalayogi</td>
                  <td>Om Kalayogaye Namah</td>
                  <td>The Yogi of Time, the One Who Masters Time</td>
                </tr>
                <tr>
                  <td>347</td>
                  <td>Mahanada</td>
                  <td>Om Mahanadaye Namah</td>
                  <td>The One Who Has Great Sound or Vibration</td>
                </tr>
                <tr>
                  <td>348</td>
                  <td>Mahatsaha</td>
                  <td>Om Mahatsahaye Namah</td>
                  <td>The One Who Has Great Strength</td>
                </tr>
                <tr>
                  <td>349</td>
                  <td>Mahabala</td>
                  <td>Om Mahabalaye Namah</td>
                  <td>The One Who is Very Powerful</td>
                </tr>
                <tr>
                  <td>350</td>
                  <td>Mahabuddhi</td>
                  <td>Om Mahabuddhaye Namah</td>
                  <td>The One Who is of Supreme Intelligence</td>
                </tr>
                <tr>
                  <td>351</td>
                  <td>Mahavirya</td>
                  <td>Om Mahaviryaye Namah</td>
                  <td>The One Who is Full of Courage and Energy</td>
                </tr>
                <tr>
                  <td>352</td>
                  <td>Bhutachari</td>
                  <td>Om Bhutacharaye Namah</td>
                  <td>The One Who Controls the Spirits</td>
                </tr>
                <tr>
                  <td>353</td>
                  <td>Purandara</td>
                  <td>Om Purandaraye Namah</td>
                  <td>The One Who Destroys the World</td>
                </tr>
                <tr>
                  <td>354</td>
                  <td>Nishachara</td>
                  <td>Om Nishacharaye Namah程</td>
                  <td>The One Who is the Controller of the Night</td>
                </tr>
                <tr>
                  <td>355</td>
                  <td>Pretachari</td>
                  <td>Om Pretacharay Namah</td>
                  <td>The One Who is the Leader of the Spirits</td>
                </tr>
                <tr>
                  <td>356</td>
                  <td>Mahashakti</td>
                  <td>Om Mahashaktaye Namah</td>
                  <td>The One Who Has Great Power</td>
                </tr>
                <tr>
                  <td>357</td>
                  <td>Mahadyuti</td>
                  <td>Om Mahadyutaye Namah</td>
                  <td>The One Who is of Supreme Radiance</td>
                </tr>
                <tr>
                  <td>358</td>
                  <td>Ahirdeshyavapu</td>
                  <td>Om Ahirdeshyavapaye Namah</td>
                  <td>The One Who has a Unique, Subtle Form</td>
                </tr>
                <tr>
                  <td>359</td>
                  <td>Shrimana</td>
                  <td>Om Shrimanaye Namah</td>
                  <td>The One Who is the Supreme Lord</td>
                </tr>
                <tr>
                  <td>360</td>
                  <td>Sarvacharyamanogati</td>
                  <td>Om Sarvacharyamanogataye Namah</td>
                  <td>The One Who Leads All in Their Paths</td>
                </tr>
                <tr>
                  <td>361</td>
                  <td>Vahushruta</td>
                  <td>Om Vahushrutaye Namah</td>
                  <td>The One Who is Known Through Many Names</td>
                </tr>
                <tr>
                  <td>362</td>
                  <td>Niyatatma</td>
                  <td>Om Niyatatmay Namah</td>
                  <td>The One Who is Self-controlled</td>
                </tr>
                <tr>
                  <td>363</td>
                  <td>Dhruva</td>
                  <td>Om Dhruvaye Namah</td>
                  <td>The Unmovable One, the Steady One</td>
                </tr>
                <tr>
                  <td>364</td>
                  <td>Adhruva</td>
                  <td>Om Adhruvaye Namah</td>
                  <td>The One Who is Imperishable, Undying</td>
                </tr>
                <tr>
                  <td>365</td>
                  <td>Sarvashaska</td>
                  <td>Om Sarvashaskaye Namah</td>
                  <td>The One Who is the Master of All Knowledge</td>
                </tr>
                <tr>
                  <td>366</td>
                  <td>Ojastejodyutidhara</td>
                  <td>Om Ojastejodyutidharaaye Namah</td>
                  <td>The One Who Holds the Energy of Light and Radiance</td>
                </tr>
                <tr>
                  <td>367</td>
                  <td>Nartaka</td>
                  <td>Om Nartakaye Namah</td>
                  <td>The Dancer, the One Who Performs Divine Dance</td>
                </tr>
                <tr>
                  <td>368</td>
                  <td>Nrityapriya</td>
                  <td>Om Nrityapriyaye Namah</td>
                  <td>The One Who Loves Dance</td>
                </tr>
                <tr>
                  <td>369</td>
                  <td>Nrityanitya</td>
                  <td>Om Nrityanityaye Namah</td>
                  <td>The Eternal Dancer, the One Who Dances Forever</td>
                </tr>
                <tr>
                  <td>370</td>
                  <td>Prakashatma</td>
                  <td>Om Prakashatmaye Namah</td>
                  <td>The One Who is the Light of the Soul</td>
                </tr>
                <tr>
                  <td>371</td>
                  <td>Prakashaka</td>
                  <td>Om Prakashakaye Namah</td>
                  <td>The Illuminator, the Light-Bringer</td>
                </tr>
                <tr>
                  <td>372</td>
                  <td>Spashtakshara</td>
                  <td>Om Spashtaksharaye Namah</td>
                  <td>The One with Clear Sounds (Mantras)</td>
                </tr>
                <tr>
                  <td>373</td>
                  <td>Budha</td>
                  <td>Om Budhaye Namah</td>
                  <td>The Wise One, the Intelligent</td>
                </tr>
                <tr>
                  <td>374</td>
                  <td>Mantra</td>
                  <td>Om Mantraye Namah</td>
                  <td>The One Who is the Source of Sacred Verses</td>
                </tr>
                <tr>
                  <td>375</td>
                  <td>Samana</td>
                  <td>Om Samanaye Namah</td>
                  <td>The Equalizer, the One Who Brings Harmony</td>
                </tr>
                <tr>
                  <td>376</td>
                  <td>Sarasamplava</td>
                  <td>Om Sarasamplavaye Namah</td>
                  <td>The One Who is the Essence of All Creation</td>
                </tr>
                <tr>
                  <td>377</td>
                  <td>Yugadikrida</td>
                  <td>Om Yugadikridaye Namah</td>
                  <td>The One Who is the Creator of Time Periods</td>
                </tr>
                <tr>
                  <td>378</td>
                  <td>Yugavarta</td>
                  <td>Om Yugavartaye Namah</td>
                  <td>The One Who Brings the Turn of Eras</td>
                </tr>
                <tr>
                  <td>379</td>
                  <td>Gambhira</td>
                  <td>Om Gambhiraye Namah</td>
                  <td>The Profound One, the Deep</td>
                </tr>
                <tr>
                  <td>380</td>
                  <td>Vrishavahana</td>
                  <td>Om Vrishavahanaye Namah</td>
                  <td>The One Who Rides the Bull</td>
                </tr>
                <tr>
                  <td>381</td>
                  <td>Ishta</td>
                  <td>Om Ishtaye Namah</td>
                  <td>The Desired One, the Beloved</td>
                </tr>
                <tr>
                  <td>382</td>
                  <td>Vishishta</td>
                  <td>Om Vishishtaye Namah</td>
                  <td>The Special One, the Distinguished</td>
                </tr>
                <tr>
                  <td>383</td>
                  <td>Shishteshta</td>
                  <td>Om Shishteshtaye Namah</td>
                  <td>The One Who is the Most Esteemed by the Virtuous</td>
                </tr>
                <tr>
                  <td>384</td>
                  <td>Shalabha</td>
                  <td>Om Shalabhaye Namah</td>
                  <td>The One Who is Like a Moth</td>
                </tr>
                <tr>
                  <td>385</td>
                  <td>Sharabha</td>
                  <td>Om Sharabhaye Namah</td>
                  <td>The One Who Appears as a Powerful Creature</td>
                </tr>
                <tr>
                  <td>386</td>
                  <td>Dhanu</td>
                  <td>Om Dhanvaye Namah</td>
                  <td>The Bow-Bearer, the Archer</td>
                </tr>
                <tr>
                  <td>387</td>
                  <td>Tirtharupa</td>
                  <td>Om Tirtharupaye Namah</td>
                  <td>The One Who Appears in Sacred Places</td>
                </tr>
                <tr>
                  <td>388</td>
                  <td>Tirthanama</td>
                  <td>Om Tirthanamaye Namah</td>
                  <td>The One Who is the Name of Pilgrimages</td>
                </tr>
                <tr>
                  <td>389</td>
                  <td>Tirthadrishya</td>
                  <td>Om Tirthadrishyaye Namah</td>
                  <td>The One Who is Seen in Sacred Sites</td>
                </tr>
                <tr>
                  <td>390</td>
                  <td>Stuta</td>
                  <td>Om Stutaye Namah</td>
                  <td>The One Who is Praised and Adored</td>
                </tr>
                <tr>
                  <td>391</td>
                  <td>Arthada</td>
                  <td>Om Arthadaye Namah</td>
                  <td>The One Who Bestows Meaning and Wealth</td>
                </tr>
                <tr>
                  <td>392</td>
                  <td>Apamnidhi</td>
                  <td>Om Apamidhaye Namah</td>
                  <td>The One Who is the Reservoir of All Knowledge</td>
                </tr>
                <tr>
                  <td>393</td>
                  <td>Adhishthana</td>
                  <td>Om Adhishthanaye Namah</td>
                  <td>
                    The One Who is the Foundation and Support of Everything
                  </td>
                </tr>
                <tr>
                  <td>394</td>
                  <td>Vijaya</td>
                  <td>Om Vijayaye Namah</td>
                  <td>The Victorious One, the Conqueror</td>
                </tr>
                <tr>
                  <td>395</td>
                  <td>Jayakalavita</td>
                  <td>Om Jayakalavitaye Namah</td>
                  <td>The One Who is Full of Victory</td>
                </tr>
                <tr>
                  <td>396</td>
                  <td>Pratishthita</td>
                  <td>Om Pratishthitaye Namah</td>
                  <td>The One Who is Established and Stable</td>
                </tr>
                <tr>
                  <td>397</td>
                  <td>Pramanajna</td>
                  <td>Om Pramanajna Namah</td>
                  <td>The One Who Knows the True Source of Authority</td>
                </tr>
                <tr>
                  <td>398</td>
                  <td>Hiranyakavacha</td>
                  <td>Om Hiranyakavachaye Namah</td>
                  <td>The One Who Wears the Golden Armor</td>
                </tr>
                <tr>
                  <td>399</td>
                  <td>Hari</td>
                  <td>Om Haraye Namah</td>
                  <td>The One Who Removes Sins, the Protector</td>
                </tr>
                <tr>
                  <td>400</td>
                  <td>Vimlochana</td>
                  <td>Om Vimlochanaye Namah</td>
                  <td>The One Who Removes the Ignorance of the World</td>
                </tr>
                <tr>
                  <td>401</td>
                  <td>Suragana</td>
                  <td>Om Suraganaye Namah</td>
                  <td>The One Who is the Leader of Gods</td>
                </tr>
                <tr>
                  <td>402</td>
                  <td>Vidyesha</td>
                  <td>Om Videshaye Namah</td>
                  <td>The One Who is the Master of Knowledge</td>
                </tr>
                <tr>
                  <td>403</td>
                  <td>Vindusamshraya</td>
                  <td>Om Vindusamshraye Namah</td>
                  <td>The One Who is the Source of All Stars</td>
                </tr>
                <tr>
                  <td>404</td>
                  <td>Balarupa</td>
                  <td>Om Balarupaye Namah</td>
                  <td>The Child-like Form, the Young One</td>
                </tr>
                <tr>
                  <td>405</td>
                  <td>Vikarta</td>
                  <td>Om Vikartaye Namah</td>
                  <td>The One Who is the Creator of All</td>
                </tr>
                <tr>
                  <td>406</td>
                  <td>Balaunmatta</td>
                  <td>Om Balaunmatta Namah</td>
                  <td>The One Who is the Supreme Strength of a Child</td>
                </tr>
                <tr>
                  <td>407</td>
                  <td>Gahana</td>
                  <td>Om Gahanaye Namah</td>
                  <td>The One Who is Unfathomable, Deep</td>
                </tr>
                <tr>
                  <td>408</td>
                  <td>Guha</td>
                  <td>Om Guhaye Namah</td>
                  <td>The One Who is the Cave or Hidden Form</td>
                </tr>
                <tr>
                  <td>409</td>
                  <td>Karana</td>
                  <td>Om Karanaye Namah</td>
                  <td>The Cause of All Causes</td>
                </tr>
                <tr>
                  <td>410</td>
                  <td>Karta</td>
                  <td>Om Kartaye Namah</td>
                  <td>The Creator, the Doer of All</td>
                </tr>
                <tr>
                  <td>411</td>
                  <td>Sarvabandhavimochana</td>
                  <td>Om Sarvabandhavimochanaye Namah</td>
                  <td>The One Who Frees from All Bonds and Shackles</td>
                </tr>
                <tr>
                  <td>412</td>
                  <td>Vyavasaya</td>
                  <td>Om Vyavasayaye Namah</td>
                  <td>The One Who is the One True Purpose</td>
                </tr>
                <tr>
                  <td>413</td>
                  <td>Vyavasthana</td>
                  <td>Om Vyavasthanaye Namah</td>
                  <td>The One Who Brings Order and Organization</td>
                </tr>
                <tr>
                  <td>414</td>
                  <td>Sthanada</td>
                  <td>Om Sthanadaye Namah</td>
                  <td>The One Who is the Permanent Abode</td>
                </tr>
                <tr>
                  <td>415</td>
                  <td>Jagadadija</td>
                  <td>Om Jagadadijaye Namah</td>
                  <td>The One Who Creates the Universe</td>
                </tr>
                <tr>
                  <td>416</td>
                  <td>Garuda</td>
                  <td>Om Garudaye Namah</td>
                  <td>The One Who is the Mount of Vishnu (Garuda)</td>
                </tr>
                <tr>
                  <td>417</td>
                  <td>Lalita</td>
                  <td>Om Lalitaye Namah</td>
                  <td>The One Who is Playful and Charming</td>
                </tr>
                <tr>
                  <td>418</td>
                  <td>Abheda</td>
                  <td>Om Abhedaye Namah</td>
                  <td>The One Who is Non-Dual, Without Separation</td>
                </tr>
                <tr>
                  <td>419</td>
                  <td>Bhavatmatmasamsthita</td>
                  <td>Om Bhavatmatmasamsthitaye Namah</td>
                  <td>
                    The One Who is Established in the Essence of All Souls
                  </td>
                </tr>
                <tr>
                  <td>420</td>
                  <td>Vireshvara</td>
                  <td>Om Vireshvaraye Namah</td>
                  <td>The Lord of All Heroes</td>
                </tr>
                <tr>
                  <td>421</td>
                  <td>Virabhadra</td>
                  <td>Om Virabhadraye Namah</td>
                  <td>The One Who is the Supreme Warrior</td>
                </tr>
                <tr>
                  <td>422</td>
                  <td>Virasanavidhi</td>
                  <td>Om Virasanavidhaye Namah</td>
                  <td>The One Who is the Leader of All Warriors</td>
                </tr>
                <tr>
                  <td>423</td>
                  <td>Virata</td>
                  <td>Om Virataye Namah</td>
                  <td>The One Who is All-Embracing, the Cosmic Form</td>
                </tr>
                <tr>
                  <td>424</td>
                  <td>Virachudamani</td>
                  <td>Om Virachudamanaye Namah</td>
                  <td>The One Who Wears the Gem of Valor</td>
                </tr>
                <tr>
                  <td>425</td>
                  <td>Vetta</td>
                  <td>Om Vettaye Namah</td>
                  <td>The One Who Knows Everything</td>
                </tr>
                <tr>
                  <td>426</td>
                  <td>Tivrananda</td>
                  <td>Om Tivranandaye Namah</td>
                  <td>The One Who is Immensely Blissful</td>
                </tr>
                <tr>
                  <td>427</td>
                  <td>Nadidhara</td>
                  <td>Om Nadidharaye Namah</td>
                  <td>The One Who Holds the Sound or Vibration</td>
                </tr>
                <tr>
                  <td>428</td>
                  <td>Ajnadhara</td>
                  <td>Om Ajnadharaye Namah</td>
                  <td>The One Who Holds the Knowledge of the Unknown</td>
                </tr>
                <tr>
                  <td>429</td>
                  <td>Trishuli</td>
                  <td>Om Trishulaye Namah</td>
                  <td>The One Who Holds the Trident</td>
                </tr>
                <tr>
                  <td>430</td>
                  <td>Shipivishta</td>
                  <td>Om Shipivishtaye Namah</td>
                  <td>The One Who is Permeated with the Essence of Creation</td>
                </tr>
                <tr>
                  <td>431</td>
                  <td>Sivalaya</td>
                  <td>Om Sivalayaye Namah</td>
                  <td>The Abode of Lord Shiva</td>
                </tr>
                <tr>
                  <td>432</td>
                  <td>Balakhilya</td>
                  <td>Om Balakhilyaye Namah</td>
                  <td>The One Who is Surrounded by Tiny Ascetics</td>
                </tr>
                <tr>
                  <td>433</td>
                  <td>Mahachapa</td>
                  <td>Om Mahachapaye Namah</td>
                  <td>The One Who Wields the Great Bow</td>
                </tr>
                <tr>
                  <td>434</td>
                  <td>Tigmamshu</td>
                  <td>Om Tigmamshuye Namah</td>
                  <td>The One with Sharp Rays</td>
                </tr>
                <tr>
                  <td>435</td>
                  <td>Badhira</td>
                  <td>Om Badhiraye Namah</td>
                  <td>The One Who is Free from Deafness and Ignorance</td>
                </tr>
                <tr>
                  <td>436</td>
                  <td>Khaga</td>
                  <td>Om Khagaye Namah</td>
                  <td>The One Who is Winged, the Sky Dweller</td>
                </tr>
                <tr>
                  <td>437</td>
                  <td>Adhirama</td>
                  <td>Om Adhiramaye Namah</td>
                  <td>The One Who is the Supreme Ram, the Ultimate Vehicle</td>
                </tr>
                <tr>
                  <td>438</td>
                  <td>Susharana</td>
                  <td>Om Susharanaye Namah</td>
                  <td>The One Who is the Guardian and Protector</td>
                </tr>
                <tr>
                  <td>439</td>
                  <td>Subrahmanya</td>
                  <td>Om Subrahmanyaye Namah</td>
                  <td>The One Who is the Younger Brother of Lord Murugan</td>
                </tr>
                <tr>
                  <td>440</td>
                  <td>Sudhapati</td>
                  <td>Om Sudhapatiye Namah</td>
                  <td>The Lord of the Nectar, the Bestower of Immortality</td>
                </tr>
                <tr>
                  <td>441</td>
                  <td>Maghavana</td>
                  <td>Om Maghavanaye Namah</td>
                  <td>The One Who is the Lord of the Magha Nakshatra</td>
                </tr>
                <tr>
                  <td>442</td>
                  <td>Kushika</td>
                  <td>Om Kushikaye Namah</td>
                  <td>The One Who is the Descendant of Kushika</td>
                </tr>
                <tr>
                  <td>443</td>
                  <td>Gaumana</td>
                  <td>Om Gaumanaye Namah</td>
                  <td>The One Who is the Lord of All Creatures</td>
                </tr>
                <tr>
                  <td>444</td>
                  <td>Virama</td>
                  <td>Om Viramaye Namah</td>
                  <td>The One Who is the Stopping, the End</td>
                </tr>
                <tr>
                  <td>445</td>
                  <td>Sarvasadhana</td>
                  <td>Om Sarvasadhanaye Namah</td>
                  <td>The One Who is the Cause of All Accomplishments</td>
                </tr>
                <tr>
                  <td>446</td>
                  <td>Lalataksha</td>
                  <td>Om Lalatakshaye Namah</td>
                  <td>The One Who Has Beautiful Eyes</td>
                </tr>
                <tr>
                  <td>447</td>
                  <td>Vishvadeha</td>
                  <td>Om Vishvadehaye Namah</td>
                  <td>The One Who is the Body of the Universe</td>
                </tr>
                <tr>
                  <td>448</td>
                  <td>Sara</td>
                  <td>Om Saraye Namah</td>
                  <td>The Essence, the Core</td>
                </tr>
                <tr>
                  <td>449</td>
                  <td>Samsarachakrabhrita</td>
                  <td>Om Samsarachakrabhritaye Namah</td>
                  <td>The One Who Holds the Cycle of Birth and Death</td>
                </tr>
                <tr>
                  <td>450</td>
                  <td>Amoghadanda</td>
                  <td>Om Amoghadandaye Namah</td>
                  <td>The One Who Holds the Unfailing Weapon</td>
                </tr>
                <tr>
                  <td>451</td>
                  <td>Madhyastha</td>
                  <td>Om Madhyastaye Namah</td>
                  <td>The One Who is the Mediator</td>
                </tr>
                <tr>
                  <td>452</td>
                  <td>Hiranya</td>
                  <td>Om Hiranyaye Namah</td>
                  <td>The Golden One, the Lord of Prosperity</td>
                </tr>
                <tr>
                  <td>453</td>
                  <td>Brahmavarchasi</td>
                  <td>Om Brahmavarchasaye Namah</td>
                  <td>The One Who Bestows Divine Glory</td>
                </tr>
                <tr>
                  <td>454</td>
                  <td>Paramartha</td>
                  <td>Om Paramarthaye Namah</td>
                  <td>The One Who is the Supreme Goal</td>
                </tr>
                <tr>
                  <td>455</td>
                  <td>Para</td>
                  <td>Om Paraye Namah</td>
                  <td>The Supreme One, the Highest Entity</td>
                </tr>
                <tr>
                  <td>456</td>
                  <td>Mayi</td>
                  <td>Om Mayaye Namah</td>
                  <td>The One Who is Me, the All-Pervading</td>
                </tr>
                <tr>
                  <td>457</td>
                  <td>Shambara</td>
                  <td>Om Shambaraye Namah</td>
                  <td>The One Who Killed the Demon Shambara</td>
                </tr>
                <tr>
                  <td>458</td>
                  <td>Vyaghralochana</td>
                  <td>Om Vyaghralochanaye Namah</td>
                  <td>The One Who Has Tiger-Eyes</td>
                </tr>
                <tr>
                  <td>459</td>
                  <td>Ruchi</td>
                  <td>Om Ruchaye Namah</td>
                  <td>The One Who is the Source of Taste and Delight</td>
                </tr>
                <tr>
                  <td>460</td>
                  <td>Virinchi</td>
                  <td>Om Virinchaye Namah</td>
                  <td>The One Who is the Creator, Lord Brahma</td>
                </tr>
                <tr>
                  <td>461</td>
                  <td>Svarbandhu</td>
                  <td>Om Svarbandhaye Namah</td>
                  <td>The One Who is the Source of Sound</td>
                </tr>
                <tr>
                  <td>462</td>
                  <td>Vachaspati</td>
                  <td>Om Vachaspatiye Namah</td>
                  <td>The Lord of Speech and Wisdom</td>
                </tr>
                <tr>
                  <td>463</td>
                  <td>Aharpati</td>
                  <td>Om Aharpataye Namah</td>
                  <td>The Lord of All Offerings and Sacrifices</td>
                </tr>
                <tr>
                  <td>464</td>
                  <td>Ravi</td>
                  <td>Om Ravaye Namah</td>
                  <td>The Sun, the One Who is the Light of the Universe</td>
                </tr>
                <tr>
                  <td>465</td>
                  <td>Virochana</td>
                  <td>Om Virochanaye Namah</td>
                  <td>The One Who is the Son of Prahlada</td>
                </tr>
                <tr>
                  <td>466</td>
                  <td>Skanda</td>
                  <td>Om Skandaye Namah</td>
                  <td>The Commander of the Army of Gods</td>
                </tr>
                <tr>
                  <td>467</td>
                  <td>Shasta</td>
                  <td>Om Shastaye Namah</td>
                  <td>The One Who is the Teacher and Protector</td>
                </tr>
                <tr>
                  <td>468</td>
                  <td>Vaivasvata</td>
                  <td>Om Vaivasvataye Namah</td>
                  <td>The Son of Vivasvat, the Sun God</td>
                </tr>
                <tr>
                  <td>469</td>
                  <td>Yama</td>
                  <td>Om Yamaye Namah</td>
                  <td>The God of Death and Justice</td>
                </tr>
                <tr>
                  <td>470</td>
                  <td>Yukti</td>
                  <td>Om Yuktaye Namah</td>
                  <td>The One Who is the Source of Wisdom and Discernment</td>
                </tr>
                <tr>
                  <td>471</td>
                  <td>Unnatakirti</td>
                  <td>Om Unnatakirtaye Namah</td>
                  <td>The One Who is the Bestower of Fame and Glory</td>
                </tr>
                <tr>
                  <td>472</td>
                  <td>Sanuraga</td>
                  <td>Om Sanuragaye Namah</td>
                  <td>The One Who is the Lord of Affection</td>
                </tr>
                <tr>
                  <td>473</td>
                  <td>Paranjaya</td>
                  <td>Om Paranjayaye Namah</td>
                  <td>The One Who is the Conqueror of All</td>
                </tr>
                <tr>
                  <td>474</td>
                  <td>Kailashadhipati</td>
                  <td>Om Kailashadhipataye Namah</td>
                  <td>The Lord of Mount Kailash</td>
                </tr>
                <tr>
                  <td>475</td>
                  <td>Kanta</td>
                  <td>Om Kantaye Namah</td>
                  <td>The Beloved One, the Most Loved</td>
                </tr>
                <tr>
                  <td>476</td>
                  <td>Savita</td>
                  <td>Om Savitaye Namah</td>
                  <td>The Sun, the One Who Gives Light</td>
                </tr>
                <tr>
                  <td>477</td>
                  <td>Ravilochana</td>
                  <td>Om Ravilochanaye Namah</td>
                  <td>The One Who Has the Sun in His Eyes</td>
                </tr>
                <tr>
                  <td>478</td>
                  <td>Vidvattama</td>
                  <td>Om Vidvattamaye Namah</td>
                  <td>The One Who is the Most Knowledgeable</td>
                </tr>
                <tr>
                  <td>479</td>
                  <td>Vitabhaya</td>
                  <td>Om Vitabhayaye Namah</td>
                  <td>The One Who is Fearless</td>
                </tr>
                <tr>
                  <td>480</td>
                  <td>Vishvabharata</td>
                  <td>Om Vishvabharataye Namah</td>
                  <td>The One Who Holds the World</td>
                </tr>
                <tr>
                  <td>481</td>
                  <td>Anivarita</td>
                  <td>Om Anivaritaye Namah</td>
                  <td>The One Who Cannot be Stopped</td>
                </tr>
                <tr>
                  <td>482</td>
                  <td>Nitya</td>
                  <td>Om Nityaye Namah</td>
                  <td>The Eternal One, the One Who is Timeless</td>
                </tr>
                <tr>
                  <td>483</td>
                  <td>Niyatakalyana</td>
                  <td>Om Niyatakalyanaye Namah</td>
                  <td>The One Who is Always Auspicious</td>
                </tr>
                <tr>
                  <td>484</td>
                  <td>Punyashravanakirtana</td>
                  <td>Om Punyashravanakirtanaye Namah</td>
                  <td>The One Who is Praised by Listening to His Glory</td>
                </tr>
                <tr>
                  <td>485</td>
                  <td>Durashrava</td>
                  <td>Om Durashrava Namah</td>
                  <td>The One Who is Not Heard in the Distance</td>
                </tr>
                <tr>
                  <td>486</td>
                  <td>Vishvasaha</td>
                  <td>Om Vishvasahaye Namah</td>
                  <td>The One Who Supports All Worlds</td>
                </tr>
                <tr>
                  <td>487</td>
                  <td>Dhyeya</td>
                  <td>Om Dhyeyaye Namah</td>
                  <td>The One Who is to Be Meditated Upon</td>
                </tr>
                <tr>
                  <td>488</td>
                  <td>Duhsvapnanashana</td>
                  <td>Om Duhsvapnanashanaye Namah</td>
                  <td>The One Who Eliminates Bad Dreams</td>
                </tr>
                <tr>
                  <td>489</td>
                  <td>Uttarana</td>
                  <td>Om Uttaranaye Namah</td>
                  <td>The One Who is the Ultimate Ascension</td>
                </tr>
                <tr>
                  <td>490</td>
                  <td>Dushkritiha</td>
                  <td>Om Dushkritihaye Namah</td>
                  <td>The One Who Destroys Evil Deeds</td>
                </tr>
                <tr>
                  <td>491</td>
                  <td>Vijneya</td>
                  <td>Om Vijneyaye Namah</td>
                  <td>The One Who is the Knowable</td>
                </tr>
                <tr>
                  <td>492</td>
                  <td>Duhsaha</td>
                  <td>Om Duhsahaye Namah</td>
                  <td>The One Who Overcomes Suffering</td>
                </tr>
                <tr>
                  <td>493</td>
                  <td>Bhava</td>
                  <td>Om Bhavaye Namah</td>
                  <td>The One Who is the Source of Creation</td>
                </tr>
                <tr>
                  <td>494</td>
                  <td>Anadi</td>
                  <td>Om Anadiye Namah</td>
                  <td>The One Who is Without Beginning</td>
                </tr>
                <tr>
                  <td>495</td>
                  <td>Bhurbhuvakshi</td>
                  <td>Om Bhurbhuvakshaye Namah</td>
                  <td>The One Who is the Source of All Realms</td>
                </tr>
                <tr>
                  <td>496</td>
                  <td>Kiriti</td>
                  <td>Om Kiritye Namah</td>
                  <td>The One Who Wears the Crown</td>
                </tr>
                <tr>
                  <td>497</td>
                  <td>Ruchirangada</td>
                  <td>Om Ruchirangadaye Namah</td>
                  <td>The One Who Has Beautiful Arms and Looks</td>
                </tr>
                <tr>
                  <td>498</td>
                  <td>Janana</td>
                  <td>Om Jananaye Namah</td>
                  <td>The One Who is the Source of Birth</td>
                </tr>
                <tr>
                  <td>499</td>
                  <td>Janajanmadi</td>
                  <td>Om Janajanmadaye Namah</td>
                  <td>The One Who is the Source of All Births</td>
                </tr>
                <tr>
                  <td>500</td>
                  <td>Pritimana</td>
                  <td>Om Pritimanaye Namah</td>
                  <td>The One Who is the Bestower of Love</td>
                </tr>
                <tr>
                  <td>501</td>
                  <td>Nitimana</td>
                  <td>Om Nitimanaye Namah</td>
                  <td>The One Who is the Embodiment of Righteousness</td>
                </tr>
                <tr>
                  <td>502</td>
                  <td>Dhava</td>
                  <td>Om Dhavaye Namah</td>
                  <td>The Lord, the One Who Protects and Supports</td>
                </tr>
                <tr>
                  <td>503</td>
                  <td>Vasishtha</td>
                  <td>Om Vasishthaye Namah</td>
                  <td>The One Who is the Sage Vasishtha</td>
                </tr>
                <tr>
                  <td>504</td>
                  <td>Kashyapa</td>
                  <td>Om Kashyapaye Namah</td>
                  <td>The One Who is the Sage Kashyapa</td>
                </tr>
                <tr>
                  <td>505</td>
                  <td>Bhanu</td>
                  <td>Om Bhanuve Namah</td>
                  <td>The Sun, the One Who Radiates Light</td>
                </tr>
                <tr>
                  <td>506</td>
                  <td>Bhima</td>
                  <td>Om Bhimaye Namah</td>
                  <td>The One Who is Powerful and Mighty</td>
                </tr>
                <tr>
                  <td>507</td>
                  <td>Bhimaparakrama</td>
                  <td>Om Bhimaparakramaye Namah</td>
                  <td>The One Who Possesses Fearsome Strength</td>
                </tr>
                <tr>
                  <td>508</td>
                  <td>Pranava</td>
                  <td>Om Pranavaye Namah</td>
                  <td>The Omkara, the Pranava Mantra, the Supreme Sound</td>
                </tr>
                <tr>
                  <td>509</td>
                  <td>Satpatchachara</td>
                  <td>Om Satpatchacharaye Namah</td>
                  <td>The One Who Practices True Conduct</td>
                </tr>
                <tr>
                  <td>510</td>
                  <td>Mahakasha</td>
                  <td>Om Mahakashaye Namah</td>
                  <td>The One Who is the Great Sky or Ether</td>
                </tr>
                <tr>
                  <td>511</td>
                  <td>Mahaghana</td>
                  <td>Om Mahaghanaye Namah</td>
                  <td>The One Who is the Great Cloud</td>
                </tr>
                <tr>
                  <td>512</td>
                  <td>Janmadhipa</td>
                  <td>Om Janmadhipaye Namah</td>
                  <td>The One Who is the Lord of Birth</td>
                </tr>
                <tr>
                  <td>513</td>
                  <td>Mahadeva</td>
                  <td>Om Mahadevaye Namah</td>
                  <td>The Great God, the Supreme Deity</td>
                </tr>
                <tr>
                  <td>514</td>
                  <td>Sakalagamaparaga</td>
                  <td>Om Sakalagamaparagaye Namah</td>
                  <td>The One Who is the Source of All Forces</td>
                </tr>
                <tr>
                  <td>515</td>
                  <td>Tattva</td>
                  <td>Om Tattvaye Namah</td>
                  <td>The One Who is the Ultimate Reality</td>
                </tr>
                <tr>
                  <td>516</td>
                  <td>Tattavit</td>
                  <td>Om Tattavitaye Namah</td>
                  <td>The One Who Knows the Truth of Reality</td>
                </tr>
                <tr>
                  <td>517</td>
                  <td>Ekatma</td>
                  <td>Om Ekatmaye Namah</td>
                  <td>The One Who is the Sole Soul</td>
                </tr>
                <tr>
                  <td>518</td>
                  <td>Vibhu</td>
                  <td>Om Vibhuyaye Namah</td>
                  <td>The One Who is All-Pervading and Vast</td>
                </tr>
                <tr>
                  <td>519</td>
                  <td>Vishvavibhushana</td>
                  <td>Om Vishvavibhushanaye Namah</td>
                  <td>The One Who Adorns the Universe</td>
                </tr>
                <tr>
                  <td>520</td>
                  <td>Rishi</td>
                  <td>Om Rishaye Namah</td>
                  <td>The Sage, the One Who is the Source of Knowledge</td>
                </tr>
                <tr>
                  <td>521</td>
                  <td>Brahmana</td>
                  <td>Om Brahmanaye Namah</td>
                  <td>The One Who is the Source of All Knowledge</td>
                </tr>
                <tr>
                  <td>522</td>
                  <td>Aishvaryajanmamrityujaratiga</td>
                  <td>Om Aishvaryajanmamrityujaratigaye Namah</td>
                  <td>The One Who Grants Wealth and Saves from Death</td>
                </tr>
                <tr>
                  <td>523</td>
                  <td>Panchayajnasamutpatti</td>
                  <td>Om Panchayajnasamutpattaye Namah</td>
                  <td>The One Who is the Source of the Five Sacrifices</td>
                </tr>
                <tr>
                  <td>524</td>
                  <td>Vishvesha</td>
                  <td>Om Vishveshaye Namah</td>
                  <td>The One Who is the Lord of All Worlds</td>
                </tr>
                <tr>
                  <td>525</td>
                  <td>Vimalodaya</td>
                  <td>Om Vimalodayaye Namah</td>
                  <td>The One Who is the Source of Purity</td>
                </tr>
                <tr>
                  <td>526</td>
                  <td>Atmayoni</td>
                  <td>Om Atmayonaye Namah</td>
                  <td>The One Who is the Source of the Soul</td>
                </tr>
                <tr>
                  <td>527</td>
                  <td>Anadyanta</td>
                  <td>Om Anadyantaye Namah</td>
                  <td>The One Who has no Beginning or End</td>
                </tr>
                <tr>
                  <td>528</td>
                  <td>Vatsala</td>
                  <td>Om Vatsalaye Namah</td>
                  <td>The One Who is Affectionate like a Mother</td>
                </tr>
                <tr>
                  <td>529</td>
                  <td>Bhaktalokadhrika</td>
                  <td>Om Bhaktalokadhikraye Namah</td>
                  <td>The One Who Supports the Devotees' World</td>
                </tr>
                <tr>
                  <td>530</td>
                  <td>Gayatrivallabha</td>
                  <td>Om Gayatrivallabhaye Namah</td>
                  <td>The One Who is the Beloved of the Gayatri Mantra</td>
                </tr>
                <tr>
                  <td>531</td>
                  <td>Pramshu</td>
                  <td>Om Pramshuye Namah</td>
                  <td>The One Who is the Essence of Knowledge</td>
                </tr>
                <tr>
                  <td>532</td>
                  <td>Vishvavasa</td>
                  <td>Om Vishvavasaye Namah</td>
                  <td>The One Who is the Dwelling Place of the Universe</td>
                </tr>
                <tr>
                  <td>533</td>
                  <td>Prabhakara</td>
                  <td>Om Prabhakaraye Namah</td>
                  <td>The One Who is the Illuminator</td>
                </tr>
                <tr>
                  <td>534</td>
                  <td>Shishu</td>
                  <td>Om Shishuye Namah</td>
                  <td>The Child, the One Who is Innocent</td>
                </tr>
                <tr>
                  <td>535</td>
                  <td>Girirata</td>
                  <td>Om Girirataye Namah</td>
                  <td>The One Who is the Lord of the Mountains</td>
                </tr>
                <tr>
                  <td>536</td>
                  <td>Samrata</td>
                  <td>Om Samrataye Namah</td>
                  <td>The One Who is the Supreme Ruler</td>
                </tr>
                <tr>
                  <td>537</td>
                  <td>Sushena</td>
                  <td>Om Sushenaye Namah</td>
                  <td>The One Who is Beautiful and Healthy</td>
                </tr>
                <tr>
                  <td>538</td>
                  <td>Surashatruha</td>
                  <td>Om Surashatruhayye Namah</td>
                  <td>The One Who Defeats the Enemies of the Gods</td>
                </tr>
                <tr>
                  <td>539</td>
                  <td>Amogha</td>
                  <td>Om Amoghaye Namah</td>
                  <td>The One Who is Unfailing, Infallible</td>
                </tr>
                <tr>
                  <td>540</td>
                  <td>Arishtanemi</td>
                  <td>Om Arishtanemiyye Namah</td>
                  <td>The One Who is the End of All Suffering</td>
                </tr>
                <tr>
                  <td>541</td>
                  <td>Kumuda</td>
                  <td>Om Kumudaye Namah</td>
                  <td>The One Who is the Lotus, the Beautiful One</td>
                </tr>
                <tr>
                  <td>542</td>
                  <td>Vigatajvara</td>
                  <td>Om Vigatajvaraye Namah</td>
                  <td>The One Who Overcomes Fever and Illness</td>
                </tr>
                <tr>
                  <td>543</td>
                  <td>Svayamjyoti</td>
                  <td>Om Svayamjyotaye Namah</td>
                  <td>The One Who is the Light of Himself</td>
                </tr>
                <tr>
                  <td>544</td>
                  <td>Tanujyoti</td>
                  <td>Om Tanujyotaye Namah</td>
                  <td>The One Who is the Light of His Own Body</td>
                </tr>
                <tr>
                  <td>545</td>
                  <td>Achanchala</td>
                  <td>Om Achanchalaye Namah</td>
                  <td>The Unshakable One, the Firm and Steady</td>
                </tr>
                <tr>
                  <td>546</td>
                  <td>Atmajyoti</td>
                  <td>Om Atmajyotaye Namah</td>
                  <td>The Light of the Soul</td>
                </tr>
                <tr>
                  <td>547</td>
                  <td>Pingala</td>
                  <td>Om Pingalaye Namah</td>
                  <td>
                    The One Who has the Brown Complexion, the Diligent One
                  </td>
                </tr>
                <tr>
                  <td>548</td>
                  <td>Kapilashmashru</td>
                  <td>Om Kapilashmashruye Namah</td>
                  <td>The One Who has Golden Hair, the Sage Kapila</td>
                </tr>
                <tr>
                  <td>549</td>
                  <td>Bhalanetra</td>
                  <td>Om Bhalanetre Namah</td>
                  <td>The One Who has the Eye on His Forehead</td>
                </tr>
                <tr>
                  <td>550</td>
                  <td>Trayitanu</td>
                  <td>Om Trayitanuyye Namah</td>
                  <td>The One Who is the Threefold Soul</td>
                </tr>
                <tr>
                  <td>551</td>
                  <td>Jnanaskandamahaniti</td>
                  <td>Om Jnanaskandamahanitaye Namah</td>
                  <td>
                    The One Who is the Source of Knowledge and Great Wisdom
                  </td>
                </tr>
                <tr>
                  <td>552</td>
                  <td>Vishvutpatti</td>
                  <td>Om Vishvutpattaye Namah</td>
                  <td>The One Who Creates the Universe</td>
                </tr>
                <tr>
                  <td>553</td>
                  <td>Upaplava</td>
                  <td>Om Upaplavaye Namah</td>
                  <td>The One Who is Free from Suffering</td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>Bhaga</td>
                  <td>Om Bhagaye Namah</td>
                  <td>The One Who is Auspicious and Fortunate</td>
                </tr>
                <tr>
                  <td>555</td>
                  <td>Vivasvana</td>
                  <td>Om Vivasvanaye Namah</td>
                  <td>The Sun, the One Who is Radiant</td>
                </tr>
                <tr>
                  <td>556</td>
                  <td>Aditya</td>
                  <td>Om Adityaye Namah</td>
                  <td>The Sun, the One Who is the Son of Aditi</td>
                </tr>
                <tr>
                  <td>557</td>
                  <td>Yogapara</td>
                  <td>Om Yogaparaye Namah</td>
                  <td>The One Who is Beyond the Path of Yoga</td>
                </tr>
                <tr>
                  <td>558</td>
                  <td>Divaspati</td>
                  <td>Om Divaspatiye Namah</td>
                  <td>The Lord of the Day, the Sun</td>
                </tr>
                <tr>
                  <td>559</td>
                  <td>Kalyanagunanama</td>
                  <td>Om Kalyanagunanamaye Namah</td>
                  <td>The One Who is the Name of All Auspicious Qualities</td>
                </tr>
                <tr>
                  <td>560</td>
                  <td>Papaha</td>
                  <td>Om Papahaye Namah</td>
                  <td>The One Who Destroys Sins</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td>Punyadarshana</td>
                  <td>Om Punyadarshanaye Namah</td>
                  <td>The One Who is the Auspicious Vision</td>
                </tr>
                <tr>
                  <td>562</td>
                  <td>Udarakirti</td>
                  <td>Om Udarakiritye Namah</td>
                  <td>The One Who is the Source of Noble Fame</td>
                </tr>
                <tr>
                  <td>563</td>
                  <td>Udyogi</td>
                  <td>Om Udyogiye Namah</td>
                  <td>The One Who is Always Engaged in Yoga</td>
                </tr>
                <tr>
                  <td>564</td>
                  <td>Sadyogi</td>
                  <td>Om Sadyogiye Namah</td>
                  <td>The One Who Attains Yogic Perfection Quickly</td>
                </tr>
                <tr>
                  <td>565</td>
                  <td>Sadasanmaya</td>
                  <td>Om Sadasanmaye Namah</td>
                  <td>
                    The One Who is Always Engaged in the Highest State of
                    Consciousness
                  </td>
                </tr>
                <tr>
                  <td>566</td>
                  <td>Nakshatramali</td>
                  <td>Om Nakshatramaliye Namah</td>
                  <td>The One Who Wears the Garlands of Stars</td>
                </tr>
                <tr>
                  <td>567</td>
                  <td>Nakesha</td>
                  <td>Om Nakeshaye Namah</td>
                  <td>The One Who is the Lord of the Naaks (stars)</td>
                </tr>
                <tr>
                  <td>568</td>
                  <td>Svadhishthanapadashraya</td>
                  <td>Om Svadhishthanapadashrayaye Namah</td>
                  <td>
                    The One Who Resides in the Sacred Svadhishthana Chakra
                  </td>
                </tr>
                <tr>
                  <td>569</td>
                  <td>Pavitra</td>
                  <td>Om Pavitraye Namah</td>
                  <td>The Pure One, the One Who Purifies</td>
                </tr>
                <tr>
                  <td>570</td>
                  <td>Papahari</td>
                  <td>Om Papahariye Namah</td>
                  <td>The One Who Destroys All Sins</td>
                </tr>
                <tr>
                  <td>571</td>
                  <td>Manipura</td>
                  <td>Om Manipuraye Namah</td>
                  <td>The One Who is the Source of Power and Strength</td>
                </tr>
                <tr>
                  <td>572</td>
                  <td>Nabhogati</td>
                  <td>Om Nabhogataye Namah</td>
                  <td>
                    The One Who is the Sustainer of All Wealth and Prosperity
                  </td>
                </tr>
                <tr>
                  <td>573</td>
                  <td>Hrit</td>
                  <td>Om Hritaye Namah</td>
                  <td>The One Who Resides in the Heart</td>
                </tr>
                <tr>
                  <td>574</td>
                  <td>Pundarikasina</td>
                  <td>Om Pundarikasinaye Namah</td>
                  <td>The One Who is the Lord of the Lotus (Heart)</td>
                </tr>
                <tr>
                  <td>575</td>
                  <td>Shatru</td>
                  <td>Om Shatraye Namah</td>
                  <td>The One Who Destroys Enemies</td>
                </tr>
                <tr>
                  <td>576</td>
                  <td>Shranta</td>
                  <td>Om Shrantaye Namah</td>
                  <td>The One Who is Free from Weariness</td>
                </tr>
                <tr>
                  <td>577</td>
                  <td>Vrishakapi</td>
                  <td>Om Vrishakapaye Namah</td>
                  <td>The One Who Rides the Divine Bull (Nandi)</td>
                </tr>
                <tr>
                  <td>578</td>
                  <td>Ushna</td>
                  <td>Om Ushanaye Namah</td>
                  <td>The One Who is the Hot and Fiery One</td>
                </tr>
                <tr>
                  <td>579</td>
                  <td>Grihapati</td>
                  <td>Om Grihapatiye Namah</td>
                  <td>The Lord of the Home and Household</td>
                </tr>
                <tr>
                  <td>580</td>
                  <td>Krishna</td>
                  <td>Om Krishnaye Namah</td>
                  <td>The Dark One, the One Who is the Source of All Life</td>
                </tr>
                <tr>
                  <td>581</td>
                  <td>Paramartha</td>
                  <td>Om Paramarthaye Namah</td>
                  <td>The One Who is the Ultimate Truth</td>
                </tr>
                <tr>
                  <td>582</td>
                  <td>Anarthanashana</td>
                  <td>Om Anarthanashanaye Namah</td>
                  <td>The One Who Eradicates All Troubles and Misfortunes</td>
                </tr>
                <tr>
                  <td>583</td>
                  <td>Adharmashatru</td>
                  <td>Om Adharmashatraye Namah</td>
                  <td>The One Who Defeats Adharma (Unrighteousness)</td>
                </tr>
                <tr>
                  <td>584</td>
                  <td>Ajneya</td>
                  <td>Om Ajnayaye Namah</td>
                  <td>The One Who is Unknowable, Beyond the Perception</td>
                </tr>
                <tr>
                  <td>585</td>
                  <td>Purohita</td>
                  <td>Om Purohitaye Namah</td>
                  <td>
                    The Chief Priest, the One Who is the Guardian of Dharma
                  </td>
                </tr>
                <tr>
                  <td>586</td>
                  <td>Purushrita</td>
                  <td>Om Purushritaye Namah</td>
                  <td>The One Who is the Embodiment of Purusha (Soul)</td>
                </tr>
                <tr>
                  <td>587</td>
                  <td>Brahmagarbha</td>
                  <td>Om Brahmagarbhaye Namah</td>
                  <td>The One Who is the Womb of Brahma</td>
                </tr>
                <tr>
                  <td>588</td>
                  <td>Vrihadgarbha</td>
                  <td>Om Vrihadgarbhaye Namah</td>
                  <td>The One Who is the Vast Womb of Creation</td>
                </tr>
                <tr>
                  <td>589</td>
                  <td>Dharmadhenu</td>
                  <td>Om Dharmadhenuye Namah</td>
                  <td>The One Who is the Cow of Dharma</td>
                </tr>
                <tr>
                  <td>590</td>
                  <td>Dhanagama</td>
                  <td>Om Dhanagamaye Namah</td>
                  <td>The One Who Grants Wealth and Prosperity</td>
                </tr>
                <tr>
                  <td>591</td>
                  <td>Jagaddhitaishi</td>
                  <td>Om Jagaddhitaishaye Namah</td>
                  <td>The One Who is the Welfare of the Universe</td>
                </tr>
                <tr>
                  <td>592</td>
                  <td>Sugata</td>
                  <td>Om Sugutaye Namah</td>
                  <td>The One Who is the One with Good Qualities</td>
                </tr>
                <tr>
                  <td>593</td>
                  <td>Kumara</td>
                  <td>Om Kumaraye Namah</td>
                  <td>The Divine Child, the Son of Lord Shiva</td>
                </tr>
                <tr>
                  <td>594</td>
                  <td>Kushalagama</td>
                  <td>Om Kushalagamaye Namah</td>
                  <td>The One Who is the Source of All Prosperous Paths</td>
                </tr>
                <tr>
                  <td>595</td>
                  <td>Hiranyavarna</td>
                  <td>Om Hiranyavarnaye Namah</td>
                  <td>The One Who is of Golden Hue</td>
                </tr>
                <tr>
                  <td>596</td>
                  <td>Jyotishmana</td>
                  <td>Om Jyotishmanaye Namah</td>
                  <td>The One Who is the Source of Light</td>
                </tr>
                <tr>
                  <td>597</td>
                  <td>Nanabhutarata</td>
                  <td>Om Nanabhutarataye Namah</td>
                  <td>The One Who Enjoys the Diversity of Creation</td>
                </tr>
                <tr>
                  <td>598</td>
                  <td>Dhvani</td>
                  <td>Om Dhvaniye Namah</td>
                  <td>The One Who is the Sound or Resonance</td>
                </tr>
                <tr>
                  <td>599</td>
                  <td>Araga</td>
                  <td>Om Aragaye Namah</td>
                  <td>The One Who is the Unmoving, Steady</td>
                </tr>
                <tr>
                  <td>600</td>
                  <td>Niyamadhyaksha</td>
                  <td>Om Niyamadhyakshaye Namah</td>
                  <td>The One Who Oversees the Rules and Regulations</td>
                </tr>
                <tr>
                  <td>601</td>
                  <td>Vishvamitra</td>
                  <td>Om Vishvamitriye Namah</td>
                  <td>The Sage Who Protects the Universe</td>
                </tr>
                <tr>
                  <td>602</td>
                  <td>Dhaneshvara</td>
                  <td>Om Dhaneshvaraye Namah</td>
                  <td>The Lord of Wealth and Prosperity</td>
                </tr>
                <tr>
                  <td>603</td>
                  <td>Brahmajyoti</td>
                  <td>Om Brahmajyotaye Namah</td>
                  <td>The Divine Light of Brahma</td>
                </tr>
                <tr>
                  <td>604</td>
                  <td>Vasudhama</td>
                  <td>Om Vasudhamaye Namah</td>
                  <td>The One Who is the Supporter of the Earth</td>
                </tr>
                <tr>
                  <td>605</td>
                  <td>Mahajyotianuttama</td>
                  <td>Om Mahajyotianuttamaye Namah</td>
                  <td>The Supreme Light of the Universe</td>
                </tr>
                <tr>
                  <td>606</td>
                  <td>Matamaha</td>
                  <td>Om Matamahaye Namah</td>
                  <td>The Grandfather, the Father of the Universe</td>
                </tr>
                <tr>
                  <td>607</td>
                  <td>Matarishva</td>
                  <td>Om Matarishvaye Namah</td>
                  <td>The One Who Moves in the Atmosphere</td>
                </tr>
                <tr>
                  <td>608</td>
                  <td>Nabhasvana</td>
                  <td>Om Nabhasvanaye Namah</td>
                  <td>The One Who Shines in the Sky</td>
                </tr>
                <tr>
                  <td>609</td>
                  <td>Nagaharadhrika</td>
                  <td>Om Nagaharadhrikaye Namah</td>
                  <td>The One Who Holds the Serpent (Naga)</td>
                </tr>
                <tr>
                  <td>610</td>
                  <td>Pulastya</td>
                  <td>Om Pulastyaye Namah</td>
                  <td>The Sage, the One Who is Immense in Knowledge</td>
                </tr>
                <tr>
                  <td>611</td>
                  <td>Pulaha</td>
                  <td>Om Pulahaye Namah</td>
                  <td>The One Who is a Great Sage</td>
                </tr>
                <tr>
                  <td>612</td>
                  <td>Agastya</td>
                  <td>Om Agastyaye Namah</td>
                  <td>The Sage, the Son of Lord Brahma</td>
                </tr>
                <tr>
                  <td>613</td>
                  <td>Jatukarnya</td>
                  <td>Om Jatukarnaye Namah</td>
                  <td>The One Who has a Long, Curled Hair</td>
                </tr>
                <tr>
                  <td>614</td>
                  <td>Parashara</td>
                  <td>Om Parasharaye Namah</td>
                  <td>The One Who is the Father of Vyasa</td>
                </tr>
                <tr>
                  <td>615</td>
                  <td>Niravarananirvara</td>
                  <td>Om Niravarananirvaraye Namah</td>
                  <td>The One Who is Free from All Obstacles</td>
                </tr>
                <tr>
                  <td>616</td>
                  <td>Vairanchya</td>
                  <td>Om Vairanchyaye Namah</td>
                  <td>The One Who is the Source of Destruction (Lord Shiva)</td>
                </tr>
                <tr>
                  <td>617</td>
                  <td>Vishtarashrava</td>
                  <td>Om Vishtarashravaye Namah</td>
                  <td>The One Who is Expansive in Hearing</td>
                </tr>
                <tr>
                  <td>618</td>
                  <td>Atmabhu</td>
                  <td>Om Atmabhuye Namah</td>
                  <td>The One Who is Born of Himself</td>
                </tr>
                <tr>
                  <td>619</td>
                  <td>Aniruddha</td>
                  <td>Om Aniruddhaye Namah</td>
                  <td>The One Who is Unstoppable, The Supreme God</td>
                </tr>
                <tr>
                  <td>620</td>
                  <td>Atri</td>
                  <td>Om Atriye Namah</td>
                  <td>The Sage, the One Who Possesses Knowledge</td>
                </tr>
                <tr>
                  <td>621</td>
                  <td>Jnanamurti</td>
                  <td>Om Jnanamurtiye Namah</td>
                  <td>The One Who is the Embodiment of Knowledge</td>
                </tr>
                <tr>
                  <td>622</td>
                  <td>Mahayasha</td>
                  <td>Om Mahayashaye Namah</td>
                  <td>The One Who is Known by All</td>
                </tr>
                <tr>
                  <td>623</td>
                  <td>Lokaviragrani</td>
                  <td>Om Lokaviragraniye Namah</td>
                  <td>The Leader of All the Worlds</td>
                </tr>
                <tr>
                  <td>624</td>
                  <td>Vira</td>
                  <td>Om Viraye Namah</td>
                  <td>The Brave One, The Hero</td>
                </tr>
                <tr>
                  <td>625</td>
                  <td>Chanda</td>
                  <td>Om Chandaye Namah</td>
                  <td>The One Who is Fierce and Mighty</td>
                </tr>
                <tr>
                  <td>626</td>
                  <td>Satyaparakrama</td>
                  <td>Om Satyaparakramaye Namah</td>
                  <td>The One Who is True to His Words and Actions</td>
                </tr>
                <tr>
                  <td>627</td>
                  <td>Vyalakalpa</td>
                  <td>Om Vyalakalpaye Namah</td>
                  <td>
                    The One Who is Skilled in the Art of Creating and Destroying
                  </td>
                </tr>
                <tr>
                  <td>628</td>
                  <td>Mahakalpa</td>
                  <td>Om Mahakalpaye Namah</td>
                  <td>The One Who Controls the Great Cycles of Time</td>
                </tr>
                <tr>
                  <td>629</td>
                  <td>Kalpavriksha</td>
                  <td>Om Kalpavrikshaye Namah</td>
                  <td>The One Who is the Tree of Wishes</td>
                </tr>
                <tr>
                  <td>630</td>
                  <td>Kaladhara</td>
                  <td>Om Kaladharaye Namah</td>
                  <td>The One Who Holds Time (Kala)</td>
                </tr>
                <tr>
                  <td>631</td>
                  <td>Alankarishnu</td>
                  <td>Om Alankarishnuye Namah</td>
                  <td>The One Who is Ornamented with Divine Qualities</td>
                </tr>
                <tr>
                  <td>632</td>
                  <td>Achala</td>
                  <td>Om Achalaye Namah</td>
                  <td>The Unshakable One, the One Who is Steady</td>
                </tr>
                <tr>
                  <td>633</td>
                  <td>Ruchishnu</td>
                  <td>Om Ruchishnuye Namah</td>
                  <td>The One Who is Adorned with Lustrous Qualities</td>
                </tr>
                <tr>
                  <td>634</td>
                  <td>Vikramonnata</td>
                  <td>Om Vikramonnataye Namah</td>
                  <td>The One Who is Proud of His Heroic Deeds</td>
                </tr>
                <tr>
                  <td>635</td>
                  <td>Ayuhshabdapati</td>
                  <td>Om Ayuhshabdapatiye Namah</td>
                  <td>The One Who is the Lord of Lifespan and Word</td>
                </tr>
                <tr>
                  <td>636</td>
                  <td>Vegi</td>
                  <td>Om Vegiye Namah</td>
                  <td>The One Who Moves with Speed</td>
                </tr>
                <tr>
                  <td>637</td>
                  <td>Plavana</td>
                  <td>Om Plavanaye Namah</td>
                  <td>The One Who is the Boat for All Souls</td>
                </tr>
                <tr>
                  <td>638</td>
                  <td>Shikhisarathi</td>
                  <td>Om Shikhisarathaye Namah</td>
                  <td>The One Who is the Rider of the Flame</td>
                </tr>
                <tr>
                  <td>639</td>
                  <td>Asamsrishta</td>
                  <td>Om Asamsrishtaye Namah</td>
                  <td>The One Who is Free from Worldly Desires</td>
                </tr>
                <tr>
                  <td>640</td>
                  <td>Atithi</td>
                  <td>Om Atithaye Namah</td>
                  <td>
                    The One Who is the Guest (Being in the form of a guest)
                  </td>
                </tr>
                <tr>
                  <td>641</td>
                  <td>Shatrupreamathi</td>
                  <td>Om Shatrupreamathaye Namah</td>
                  <td>The One Who is Dear to His Enemies</td>
                </tr>
                <tr>
                  <td>642</td>
                  <td>Padapashana</td>
                  <td>Om Padapashanaye Namah</td>
                  <td>The One Who Holds the Chain of Feet</td>
                </tr>
                <tr>
                  <td>643</td>
                  <td>Vasushrava</td>
                  <td>Om Vasushravaye Namah</td>
                  <td>The One Who is Known for His Wealth</td>
                </tr>
                <tr>
                  <td>644</td>
                  <td>Pratapa</td>
                  <td>Om Pratapaye Namah</td>
                  <td>The One Who is the Source of Glory and Brilliance</td>
                </tr>
                <tr>
                  <td>645</td>
                  <td>Havyavaha</td>
                  <td>Om Havyavahaye Namah</td>
                  <td>The One Who Receives the Sacred Offerings</td>
                </tr>
                <tr>
                  <td>646</td>
                  <td>Vishvabhojana</td>
                  <td>Om Vishvabhojanaye Namah</td>
                  <td>The One Who is the Provider for All in the Universe</td>
                </tr>
                <tr>
                  <td>647</td>
                  <td>Japaya</td>
                  <td>Om Japayaye Namah</td>
                  <td>The One Who is Meditated Upon by All</td>
                </tr>
                <tr>
                  <td>648</td>
                  <td>Jaradishamana</td>
                  <td>Om Jaradishamanaye Namah</td>
                  <td>The One Who Removes the Curse of Old Age</td>
                </tr>
                <tr>
                  <td>649</td>
                  <td>Lohitatma</td>
                  <td>Om Lohitatmaye Namah</td>
                  <td>The One Who has a Red-Hued Soul</td>
                </tr>
                <tr>
                  <td>650</td>
                  <td>Tanunapata</td>
                  <td>Om Tanunapataye Namah</td>
                  <td>The One Who is the Source of All Elements</td>
                </tr>
                <tr>
                  <td>651</td>
                  <td>Vrihadashva</td>
                  <td>Om Vrihadashvaye Namah</td>
                  <td>The One Who is Great in Form and Steed</td>
                </tr>
                <tr>
                  <td>652</td>
                  <td>Nabhoyoni</td>
                  <td>Om Nabhoyonaye Namah</td>
                  <td>The One Who has the Sky as His Womb</td>
                </tr>
                <tr>
                  <td>653</td>
                  <td>Supratika</td>
                  <td>Om Supratikaye Namah</td>
                  <td>The One Who is the Source of All Auspiciousness</td>
                </tr>
                <tr>
                  <td>654</td>
                  <td>Tamasraha</td>
                  <td>Om Tamasrahaye Namah</td>
                  <td>The One Who Removes Darkness</td>
                </tr>
                <tr>
                  <td>655</td>
                  <td>Nidagha</td>
                  <td>Om Nidaghaye Namah</td>
                  <td>The One Who is the Destroyer of All Weaknesses</td>
                </tr>
                <tr>
                  <td>656</td>
                  <td>Tapana</td>
                  <td>Om Tapanaye Namah</td>
                  <td>The One Who is the Source of Heat</td>
                </tr>
                <tr>
                  <td>657</td>
                  <td>Megha</td>
                  <td>Om Meghaye Namah</td>
                  <td>The One Who is the Cloud, the One Who Brings Rain</td>
                </tr>
                <tr>
                  <td>658</td>
                  <td>Svaksha</td>
                  <td>Om Svakshaye Namah</td>
                  <td>The One Who is Pure and Clean</td>
                </tr>
                <tr>
                  <td>659</td>
                  <td>Parapuranjaya</td>
                  <td>Om Parapuranjayaye Namah</td>
                  <td>The One Who is the Conqueror of the Supreme Truth</td>
                </tr>
                <tr>
                  <td>660</td>
                  <td>Sukhanila</td>
                  <td>Om Sukhanilaye Namah</td>
                  <td>The One Who Brings Peace and Happiness</td>
                </tr>
                <tr>
                  <td>661</td>
                  <td>Sunishpanna</td>
                  <td>Om Sunishpannaye Namah</td>
                  <td>The One Who is Ever-Fixed and Steady</td>
                </tr>
                <tr>
                  <td>662</td>
                  <td>Surabhi</td>
                  <td>Om Surabhaye Namah</td>
                  <td>
                    The One Who is the Divine Cow, Bestower of All Blessings
                  </td>
                </tr>
                <tr>
                  <td>663</td>
                  <td>Shishiratmaka</td>
                  <td>Om Shishiratmakaye Namah</td>
                  <td>
                    The One Who is the Embodiment of Winter and the Coolness
                  </td>
                </tr>
                <tr>
                  <td>664</td>
                  <td>Vasanta</td>
                  <td>Om Vasantaye Namah</td>
                  <td>
                    The One Who is the Spring season, the Beginning of New Life
                  </td>
                </tr>
                <tr>
                  <td>665</td>
                  <td>Madhava</td>
                  <td>Om Madhavaye Namah</td>
                  <td>The One Who is the Lord of Sweetness (like honey)</td>
                </tr>
                <tr>
                  <td>666</td>
                  <td>Grishma</td>
                  <td>Om Grishmaye Namah</td>
                  <td>The One Who is the Summer season</td>
                </tr>
                <tr>
                  <td>667</td>
                  <td>Nabhasya</td>
                  <td>Om Nabhasyaye Namah</td>
                  <td>The One Who is the Sky and the Atmosphere</td>
                </tr>
                <tr>
                  <td>668</td>
                  <td>Vijavahana</td>
                  <td>Om Vijavahanaye Namah</td>
                  <td>The One Who Rides the Victorious Horse</td>
                </tr>
                <tr>
                  <td>669</td>
                  <td>Angira</td>
                  <td>Om Angiraye Namah</td>
                  <td>The Sage Angira, a Vedic Sage</td>
                </tr>
                <tr>
                  <td>670</td>
                  <td>Guru</td>
                  <td>Om Gurave Namah</td>
                  <td>The Supreme Teacher and Guide</td>
                </tr>
                <tr>
                  <td>671</td>
                  <td>Atreya</td>
                  <td>Om Atreyaye Namah</td>
                  <td>The One Who Belongs to the Sage Atreya</td>
                </tr>
                <tr>
                  <td>672</td>
                  <td>Vimala</td>
                  <td>Om Vimalaye Namah</td>
                  <td>The Pure One, the One Who is Immaculate</td>
                </tr>
                <tr>
                  <td>673</td>
                  <td>Vishvavahana</td>
                  <td>Om Vishvavahanaye Namah</td>
                  <td>The One Who Bears the Universe</td>
                </tr>
                <tr>
                  <td>674</td>
                  <td>Pavana</td>
                  <td>Om Pavanaye Namah</td>
                  <td>The One Who Purifies, the Wind</td>
                </tr>
                <tr>
                  <td>675</td>
                  <td>Sumati</td>
                  <td>Om Sumataye Namah</td>
                  <td>The One Who is of Good Disposition and Thoughtfulness</td>
                </tr>
                <tr>
                  <td>676</td>
                  <td>Vidvana</td>
                  <td>Om Vidvanaye Namah</td>
                  <td>The One Who is Full of Knowledge</td>
                </tr>
                <tr>
                  <td>677</td>
                  <td>Travidya</td>
                  <td>Om Travidyaye Namah</td>
                  <td>The One Who Knows the Three Vedas</td>
                </tr>
                <tr>
                  <td>678</td>
                  <td>Naravahana</td>
                  <td>Om Naravahanaye Namah</td>
                  <td>The One Who is the Vehicle of Man</td>
                </tr>
                <tr>
                  <td>679</td>
                  <td>Manobuddhi</td>
                  <td>Om Manobuddhiye Namah</td>
                  <td>The One Who is the Master of Mind and Intellect</td>
                </tr>
                <tr>
                  <td>680</td>
                  <td>Ahamkara</td>
                  <td>Om Ahamkaraye Namah</td>
                  <td>The One Who is the Ego (the sense of 'I')</td>
                </tr>
                <tr>
                  <td>681</td>
                  <td>Kshetrajna</td>
                  <td>Om Kshetrajnyaye Namah</td>
                  <td>The One Who Knows the Field of Life (the body)</td>
                </tr>
                <tr>
                  <td>682</td>
                  <td>Kshetrapalaka</td>
                  <td>Om Kshetrapalakaye Namah</td>
                  <td>The One Who is the Protector of the Field</td>
                </tr>
                <tr>
                  <td>683</td>
                  <td>Jamadagni</td>
                  <td>Om Jamadagnaye Namah</td>
                  <td>The One Who is the Son of Sage Jamadagni</td>
                </tr>
                <tr>
                  <td>684</td>
                  <td>Balanidhi</td>
                  <td>Om Balanidhaye Namah</td>
                  <td>The One Who is the Treasure of Youth</td>
                </tr>
                <tr>
                  <td>685</td>
                  <td>Vigala</td>
                  <td>Om Vigalaye Namah</td>
                  <td>The One Who is Fierce and Powerful</td>
                </tr>
                <tr>
                  <td>686</td>
                  <td>Vishvagalava</td>
                  <td>Om Vishvagalavaye Namah</td>
                  <td>The One Who is the Destroyer of the Whole Universe</td>
                </tr>
                <tr>
                  <td>687</td>
                  <td>Aghora</td>
                  <td>Om Aghoraye Namah</td>
                  <td>The One Who is Fierce and Terrifying</td>
                </tr>
                <tr>
                  <td>688</td>
                  <td>Anuttara</td>
                  <td>Om Anuttaraye Namah</td>
                  <td>The One Who is Supreme and Beyond Comparison</td>
                </tr>
                <tr>
                  <td>689</td>
                  <td>Yajna</td>
                  <td>Om Yajnaye Namah</td>
                  <td>The One Who is the Sacrifice, the Ritual</td>
                </tr>
                <tr>
                  <td>690</td>
                  <td>Shreya</td>
                  <td>Om Shreyaye Namah</td>
                  <td>The One Who is Supreme in Goodness</td>
                </tr>
                <tr>
                  <td>691</td>
                  <td>Nihshreyahpatha</td>
                  <td>Om Nihshreyahpathaye Namah</td>
                  <td>The One Who is the Path to the Supreme Good</td>
                </tr>
                <tr>
                  <td>692</td>
                  <td>Shaila</td>
                  <td>Om Shailaye Namah</td>
                  <td>The One Who is the Mountain-like and Strong</td>
                </tr>
                <tr>
                  <td>693</td>
                  <td>Gaganakundabha</td>
                  <td>Om Gaganakundabhaye Namah</td>
                  <td>The One Who is the Lord of the Sky and Stars</td>
                </tr>
                <tr>
                  <td>694</td>
                  <td>Danavari</td>
                  <td>Om Danavariye Namah</td>
                  <td>The One Who is the Destroyer of the Demons</td>
                </tr>
                <tr>
                  <td>695</td>
                  <td>Arindama</td>
                  <td>Om Arindamaye Namah</td>
                  <td>The One Who is the Slayer of Enemies</td>
                </tr>
                <tr>
                  <td>696</td>
                  <td>Rajanijanaka</td>
                  <td>Om Rajanijanakaye Namah</td>
                  <td>
                    The One Who is the Father of the King (Ruler of the
                    Universe)
                  </td>
                </tr>
                <tr>
                  <td>697</td>
                  <td>Charuvishaiya</td>
                  <td>Om Charuvishaiyaye Namah</td>
                  <td>The One Who is the Embodiment of Charm and Beauty</td>
                </tr>
                <tr>
                  <td>698</td>
                  <td>Lokakalpadhrika</td>
                  <td>Om Lokakalpadhrikaye Namah</td>
                  <td>The One Who is the Creator of the World</td>
                </tr>
                <tr>
                  <td>699</td>
                  <td>Chaturveda</td>
                  <td>Om Chaturvedaye Namah</td>
                  <td>The One Who is the Four Vedas</td>
                </tr>
                <tr>
                  <td>700</td>
                  <td>Chaturbhava</td>
                  <td>Om Chaturbhavaye Namah</td>
                  <td>The One Who is the Creator of the Four Worlds</td>
                </tr>
                <tr>
                  <td>701</td>
                  <td>Chatura</td>
                  <td>Om Chaturaye Namah</td>
                  <td>The One Who is Smart and Clever</td>
                </tr>
                <tr>
                  <td>702</td>
                  <td>Chaturapriya</td>
                  <td>Om Chaturapriyaye Namah</td>
                  <td>The One Who is Loved by All</td>
                </tr>
                <tr>
                  <td>703</td>
                  <td>Amlaya</td>
                  <td>Om Amlayaye Namah</td>
                  <td>The One Who is Free from Contamination</td>
                </tr>
                <tr>
                  <td>704</td>
                  <td>Samamlaya</td>
                  <td>Om Samamlayaye Namah</td>
                  <td>The One Who is the Origin of All</td>
                </tr>
                <tr>
                  <td>705</td>
                  <td>Tirthavedashivalaya</td>
                  <td>Om Tirthavedashivalayaye Namah</td>
                  <td>The One Who is the Sacred Abode of All Pilgrimages</td>
                </tr>
                <tr>
                  <td>706</td>
                  <td>Vahurupa</td>
                  <td>Om Vahurupaye Namah</td>
                  <td>The One Who Assumes Various Forms</td>
                </tr>
                <tr>
                  <td>707</td>
                  <td>Maharupa</td>
                  <td>Om Maharupaye Namah</td>
                  <td>The One Who Has Many Glorious Forms</td>
                </tr>
                <tr>
                  <td>708</td>
                  <td>Sarvarupa</td>
                  <td>Om Sarvarupaye Namah</td>
                  <td>The One Who Has All Forms</td>
                </tr>
                <tr>
                  <td>709</td>
                  <td>Charachara</td>
                  <td>Om Characharaye Namah</td>
                  <td>
                    The One Who Exists in All Living Beings and Non-Living
                    Things
                  </td>
                </tr>
                <tr>
                  <td>710</td>
                  <td>Nyayanirmayaka</td>
                  <td>Om Nyayanirmayakaye Namah</td>
                  <td>
                    The One Who is the Creator of All Philosophical Schools
                  </td>
                </tr>
                <tr>
                  <td>711</td>
                  <td>Nyayi</td>
                  <td>Om Nyayaye Namah</td>
                  <td>The One Who is the Judge and Lawgiver</td>
                </tr>
                <tr>
                  <td>712</td>
                  <td>Nyayagamya</td>
                  <td>Om Nyayagamyaye Namah</td>
                  <td>The One Who Can Be Attained through Justice</td>
                </tr>
                <tr>
                  <td>713</td>
                  <td>Nirantara</td>
                  <td>Om Nirantaraye Namah</td>
                  <td>The One Who is Continuous and Ever-Present</td>
                </tr>
                <tr>
                  <td>714</td>
                  <td>Sahasramariddha</td>
                  <td>Om Sahasramariddhaye Namah</td>
                  <td>The One Who is the Destroyer of Thousands of Enemies</td>
                </tr>
                <tr>
                  <td>715</td>
                  <td>Devendra</td>
                  <td>Om Devendraye Namah</td>
                  <td>The Lord of the Devas (Gods)</td>
                </tr>
                <tr>
                  <td>716</td>
                  <td>Sarvashastraprabhanjana</td>
                  <td>Om Sarvashastraprabhanjanaye Namah</td>
                  <td>The One Who Destroys All Weapons</td>
                </tr>
                <tr>
                  <td>717</td>
                  <td>Munda</td>
                  <td>Om Mundaye Namah</td>
                  <td>The One Who Has the Munda (A Headgear or Skull)</td>
                </tr>
                <tr>
                  <td>718</td>
                  <td>Virupa</td>
                  <td>Om Virupaye Namah</td>
                  <td>The One Who Has an Ugly Form</td>
                </tr>
                <tr>
                  <td>719</td>
                  <td>Vikranta</td>
                  <td>Om Vikrantaye Namah</td>
                  <td>The One Who is Fierce and Mighty</td>
                </tr>
                <tr>
                  <td>720</td>
                  <td>Dandi</td>
                  <td>Om Dandaye Namah</td>
                  <td>The One Who Holds the Staff</td>
                </tr>
                <tr>
                  <td>721</td>
                  <td>Danta</td>
                  <td>Om Dantaye Namah</td>
                  <td>
                    The One Who Has Tusk-Like Teeth (or the One Who is
                    Righteous)
                  </td>
                </tr>
                <tr>
                  <td>722</td>
                  <td>Gunottama</td>
                  <td>Om Gunottamaye Namah</td>
                  <td>The One Who is the Supreme in Qualities</td>
                </tr>
                <tr>
                  <td>723</td>
                  <td>Pingalaksha</td>
                  <td>Om Pingalakshaye Namah</td>
                  <td>The One Who Has Beautiful Eyes</td>
                </tr>
                <tr>
                  <td>724</td>
                  <td>Janadhyaksha</td>
                  <td>Om Janadhyakshaye Namah</td>
                  <td>The One Who is the Master of the People</td>
                </tr>
                <tr>
                  <td>725</td>
                  <td>Nilagriva</td>
                  <td>Om Nilagrivaye Namah</td>
                  <td>The One Who Has a Blue Neck</td>
                </tr>
                <tr>
                  <td>726</td>
                  <td>Niramaya</td>
                  <td>Om Niramayaye Namah</td>
                  <td>The One Who is Free from All Disease</td>
                </tr>
                <tr>
                  <td>727</td>
                  <td>Sahasravahu</td>
                  <td>Om Sahasravahaye Namah</td>
                  <td>The One Who Has Thousand Arms</td>
                </tr>
                <tr>
                  <td>728</td>
                  <td>Sarvesha</td>
                  <td>Om Sarveshaye Namah</td>
                  <td>The One Who is the Lord of All</td>
                </tr>
                <tr>
                  <td>729</td>
                  <td>Sharanya</td>
                  <td>Om Sharanyaye Namah</td>
                  <td>The One Who is the Refuge of All</td>
                </tr>
                <tr>
                  <td>730</td>
                  <td>Sarvalokadhrika</td>
                  <td>Om Sarvalokadhrikaye Namah</td>
                  <td>The One Who is the Supporter of All Worlds</td>
                </tr>
                <tr>
                  <td>731</td>
                  <td>Padmasana</td>
                  <td>Om Padmasanaye Namah</td>
                  <td>The One Who Sits on the Lotus Seat</td>
                </tr>
                <tr>
                  <td>732</td>
                  <td>Paramjyoti</td>
                  <td>Om Paramjyotaye Namah</td>
                  <td>The One Who is the Supreme Light</td>
                </tr>
                <tr>
                  <td>733</td>
                  <td>Parampara</td>
                  <td>Om Paramparaye Namah</td>
                  <td>The One Who is the Ultimate Tradition</td>
                </tr>
                <tr>
                  <td>734</td>
                  <td>Paramsala</td>
                  <td>Om Paramsalaye Namah</td>
                  <td>The One Who is the Supreme Goal</td>
                </tr>
                <tr>
                  <td>735</td>
                  <td>Padmagarbha</td>
                  <td>Om Padmagarbhaye Namah</td>
                  <td>The One Who is the Womb of the Lotus</td>
                </tr>
                <tr>
                  <td>736</td>
                  <td>Mahagarbha</td>
                  <td>Om Mahagarbhaye Namah</td>
                  <td>The One Who is the Great Womb</td>
                </tr>
                <tr>
                  <td>737</td>
                  <td>Vishvagarbha</td>
                  <td>Om Vishvagarbhaye Namah</td>
                  <td>The One Who is the Universe's Womb</td>
                </tr>
                <tr>
                  <td>738</td>
                  <td>Vichakshana</td>
                  <td>Om Vichakshanaye Namah</td>
                  <td>The One Who is All-Seeing</td>
                </tr>
                <tr>
                  <td>739</td>
                  <td>Characharajna</td>
                  <td>Om Characharajnaye Namah</td>
                  <td>The One Who Knows All Living Beings</td>
                </tr>
                <tr>
                  <td>740</td>
                  <td>Varada</td>
                  <td>Om Varadaye Namah</td>
                  <td>The One Who Grants Boons</td>
                </tr>
                <tr>
                  <td>741</td>
                  <td>Varesha</td>
                  <td>Om Vareshaye Namah</td>
                  <td>The One Who is the Lord of All</td>
                </tr>
                <tr>
                  <td>742</td>
                  <td>Mahabala</td>
                  <td>Om Mahabalaye Namah</td>
                  <td>The One Who is Extremely Powerful</td>
                </tr>
                <tr>
                  <td>743</td>
                  <td>Devasuraguru</td>
                  <td>Om Devasuraguraye Namah</td>
                  <td>The Guru of the Devas and Asuras</td>
                </tr>
                <tr>
                  <td>744</td>
                  <td>Deva</td>
                  <td>Om Devaye Namah</td>
                  <td>The Divine One, the God</td>
                </tr>
                <tr>
                  <td>745</td>
                  <td>Devasuramahashraya</td>
                  <td>Om Devasuramahashrayaye Namah</td>
                  <td>The One Who is the Shelter of Gods and Demons</td>
                </tr>
                <tr>
                  <td>746</td>
                  <td>Devadideva</td>
                  <td>Om Devadidevaye Namah</td>
                  <td>The One Who is the God of All Gods</td>
                </tr>
                <tr>
                  <td>747</td>
                  <td>Devagni</td>
                  <td>Om Devagnaye Namah</td>
                  <td>The One Who is the Fire of the Gods</td>
                </tr>
                <tr>
                  <td>748</td>
                  <td>Devagnisukhada</td>
                  <td>Om Devagnisukhadaye Namah</td>
                  <td>The One Who Brings Joy to the Fire of the Gods</td>
                </tr>
                <tr>
                  <td>749</td>
                  <td>Prabhu</td>
                  <td>Om Prabhaye Namah</td>
                  <td>The Supreme Lord, the Master of All</td>
                </tr>
                <tr>
                  <td>750</td>
                  <td>Devasureshvara</td>
                  <td>Om Devasureshvaraye Namah</td>
                  <td>The Lord of the Gods and Asuras</td>
                </tr>
                <tr>
                  <td>751</td>
                  <td>Divya</td>
                  <td>Om Divyaye Namah</td>
                  <td>The Divine One, the One Who is Pure</td>
                </tr>
                <tr>
                  <td>752</td>
                  <td>Devasuramaheshvara</td>
                  <td>Om Devasuramaheshvaraye Namah</td>
                  <td>The One Who is the Supreme Lord of Gods and Asuras</td>
                </tr>
                <tr>
                  <td>753</td>
                  <td>Devadevamaya</td>
                  <td>Om Devadevamayaye Namah</td>
                  <td>The One Who is the Embodiment of All Gods</td>
                </tr>
                <tr>
                  <td>754</td>
                  <td>Achintya</td>
                  <td>Om Achintaye Namah</td>
                  <td>The One Who is Beyond Comprehension</td>
                </tr>
                <tr>
                  <td>755</td>
                  <td>Devadevatmasambhava</td>
                  <td>Om Devadevatmasambhavaye Namah</td>
                  <td>The One Who is Born of the Divine Soul</td>
                </tr>
                <tr>
                  <td>756</td>
                  <td>Sadyoni</td>
                  <td>Om Sadyonaye Namah</td>
                  <td>The One Who is the Immediate Birthgiver</td>
                </tr>
                <tr>
                  <td>757</td>
                  <td>Asuravyaghra</td>
                  <td>Om Asuravyaghraye Namah</td>
                  <td>The One Who is the Tiger of the Demons</td>
                </tr>
                <tr>
                  <td>758</td>
                  <td>Devasimha</td>
                  <td>Om Devasimhaye Namah</td>
                  <td>The Lion of the Gods</td>
                </tr>
                <tr>
                  <td>759</td>
                  <td>Divakara</td>
                  <td>Om Divakaraye Namah</td>
                  <td>The One Who is the Sun of the Divine</td>
                </tr>
                <tr>
                  <td>760</td>
                  <td>Vibudhagravara</td>
                  <td>Om Vibudhagravaraye Namah</td>
                  <td>The One Who is the Supreme in Knowledge</td>
                </tr>
                <tr>
                  <td>761</td>
                  <td>Shreshtha</td>
                  <td>Om Shreshthaye Namah</td>
                  <td>The Supreme, the Best</td>
                </tr>
                <tr>
                  <td>762</td>
                  <td>Sarvadevottamottama</td>
                  <td>Om Sarvadevottamottamaye Namah</td>
                  <td>The One Who is the Best Among All Gods</td>
                </tr>
                <tr>
                  <td>763</td>
                  <td>Sivajnanarata</td>
                  <td>Om Sivajnanarataye Namah</td>
                  <td>The One Who is Devoted to the Knowledge of Shiva</td>
                </tr>
                <tr>
                  <td>764</td>
                  <td>Shrimana</td>
                  <td>Om Shrimanaye Namah</td>
                  <td>The One Who is Auspicious and Wealthy</td>
                </tr>
                <tr>
                  <td>765</td>
                  <td>Shikhi-shriparvatapriya</td>
                  <td>Om Shikhishriparvatapriyaye Namah</td>
                  <td>
                    The One Who Loves the Mountain of the Peacock (Mount Meru)
                  </td>
                </tr>
                <tr>
                  <td>766</td>
                  <td>Vajrahasta</td>
                  <td>Om Vajrahastaye Namah</td>
                  <td>The One Who Holds the Thunderbolt</td>
                </tr>
                <tr>
                  <td>767</td>
                  <td>Siddhakhadgi</td>
                  <td>Om Siddhakhadgaye Namah</td>
                  <td>The One Who Holds the Sword of Siddhas</td>
                </tr>
                <tr>
                  <td>768</td>
                  <td>Narasimhanipatana</td>
                  <td>Om Narasimhanipatanaye Namah</td>
                  <td>The One Who has the Power of the Lion's Avatar</td>
                </tr>
                <tr>
                  <td>769</td>
                  <td>Brahmachari</td>
                  <td>Om Brahmacharaye Namah</td>
                  <td>The One Who Practices Celibacy and Purity</td>
                </tr>
                <tr>
                  <td>770</td>
                  <td>Lokachari</td>
                  <td>Om Lokacharaye Namah</td>
                  <td>The One Who is the Teacher of the World</td>
                </tr>
                <tr>
                  <td>771</td>
                  <td>Dharmachari</td>
                  <td>Om Dharmacharaye Namah</td>
                  <td>The One Who is the Follower of Dharma (Righteousness)</td>
                </tr>
                <tr>
                  <td>772</td>
                  <td>Dhanadhipa</td>
                  <td>Om Dhanadhipaye Namah</td>
                  <td>The Lord of Wealth</td>
                </tr>
                <tr>
                  <td>773</td>
                  <td>Nandi</td>
                  <td>Om Nandaye Namah</td>
                  <td>The Bull, the Vehicle of Lord Shiva</td>
                </tr>
                <tr>
                  <td>774</td>
                  <td>Nandishvara</td>
                  <td>Om Nandishvaraye Namah</td>
                  <td>The Lord of Nandi (the Bull)</td>
                </tr>
                <tr>
                  <td>775</td>
                  <td>Ananta</td>
                  <td>Om Anantaye Namah</td>
                  <td>The Infinite</td>
                </tr>
                <tr>
                  <td>776</td>
                  <td>Nagnavratadhara</td>
                  <td>Om Nagnavratadharaye Namah</td>
                  <td>The One Who Wears the Clothing of Renunciation</td>
                </tr>
                <tr>
                  <td>777</td>
                  <td>Shuchi</td>
                  <td>Om Shuchaye Namah</td>
                  <td>The Pure, the Clean</td>
                </tr>
                <tr>
                  <td>778</td>
                  <td>Lingadhyaksha</td>
                  <td>Om Lingadhyakshaye Namah</td>
                  <td>The One Who is the Lord of the Lingam (Shiva's form)</td>
                </tr>
                <tr>
                  <td>779</td>
                  <td>Suradhyaksha</td>
                  <td>Om Suradhyakshaye Namah</td>
                  <td>The One Who is the Lord of the Devas (Gods)</td>
                </tr>
                <tr>
                  <td>780</td>
                  <td>Yogadhyaksha</td>
                  <td>Om Yogadhyakshaye Namah</td>
                  <td>The One Who is the Lord of Yoga</td>
                </tr>
                <tr>
                  <td>781</td>
                  <td>Yugavaha</td>
                  <td>Om Yugavahaye Namah</td>
                  <td>The One Who Bears the Age or Era</td>
                </tr>
                <tr>
                  <td>782</td>
                  <td>Svadharma</td>
                  <td>Om Svadharmaye Namah</td>
                  <td>The One Who is the Upholder of One’s Duty</td>
                </tr>
                <tr>
                  <td>783</td>
                  <td>Svargata</td>
                  <td>Om Svargataye Namah</td>
                  <td>The One Who Grants Access to Heaven</td>
                </tr>
                <tr>
                  <td>784</td>
                  <td>Svargakhara</td>
                  <td>Om Svargakharaye Namah</td>
                  <td>The One Who Creates Heaven</td>
                </tr>
                <tr>
                  <td>785</td>
                  <td>Svaramayasvana</td>
                  <td>Om Svaramayasvanaye Namah</td>
                  <td>
                    The One Who is the Sound of Music or Voice of All Creation
                  </td>
                </tr>
                <tr>
                  <td>786</td>
                  <td>Vanadhyaksha</td>
                  <td>Om Vanadhyakshaye Namah</td>
                  <td>The One Who is the Lord of the Forests</td>
                </tr>
                <tr>
                  <td>787</td>
                  <td>Vijakarta</td>
                  <td>Om Vijakartaye Namah</td>
                  <td>The One Who is the Creator of All</td>
                </tr>
                <tr>
                  <td>788</td>
                  <td>Dharmakrita</td>
                  <td>Om Dharmakritaye Namah</td>
                  <td>The One Who Creates Dharma (Righteousness)</td>
                </tr>
                <tr>
                  <td>789</td>
                  <td>Dharmasambhava</td>
                  <td>Om Dharmasambhavaye Namah</td>
                  <td>The One Who is the Source of Dharma</td>
                </tr>
                <tr>
                  <td>790</td>
                  <td>Dambha</td>
                  <td>Om Dambhaye Namah</td>
                  <td>The One Who is Devoid of Hypocrisy</td>
                </tr>
                <tr>
                  <td>791</td>
                  <td>Alobha</td>
                  <td>Om Alobhaye Namah</td>
                  <td>The One Who is Free from Greed</td>
                </tr>
                <tr>
                  <td>792</td>
                  <td>Arthavita</td>
                  <td>Om Arthavitaye Namah</td>
                  <td>The One Who is the Master of Wealth and Actions</td>
                </tr>
                <tr>
                  <td>793</td>
                  <td>Shambhu</td>
                  <td>Om Shambhaye Namah</td>
                  <td>The Beneficent, the One Who Brings Goodness</td>
                </tr>
                <tr>
                  <td>794</td>
                  <td>Sarvabhutamaheshvara</td>
                  <td>Om Sarvabhutamaheshvaraye Namah</td>
                  <td>The Supreme Lord of All Beings</td>
                </tr>
                <tr>
                  <td>795</td>
                  <td>Shmashananilaya</td>
                  <td>Om Shmashananilayaye Namah</td>
                  <td>The One Who Dwells in the Cremation Grounds</td>
                </tr>
                <tr>
                  <td>796</td>
                  <td>Tryksha</td>
                  <td>Om Trykshaye Namah</td>
                  <td>The One Who Has Three Eyes</td>
                </tr>
                <tr>
                  <td>797</td>
                  <td>Setu</td>
                  <td>Om Setaye Namah</td>
                  <td>The One Who is the Bridge (Reference to Lord Rama)</td>
                </tr>
                <tr>
                  <td>798</td>
                  <td>Apratimakriti</td>
                  <td>Om Apratimakritaye Namah</td>
                  <td>The One Who Has an Incomparable Form</td>
                </tr>
                <tr>
                  <td>799</td>
                  <td>Lokottaras-putaloka</td>
                  <td>Om Lokottarasputalokaye Namah</td>
                  <td>The One Who is Beyond the Reach of All Worlds</td>
                </tr>
                <tr>
                  <td>800</td>
                  <td>Trymbaka</td>
                  <td>Om Trymbakaye Namah</td>
                  <td>The Three-Eyed One (a Reference to Lord Shiva)</td>
                </tr>
                <tr>
                  <td>801</td>
                  <td>Nagabhushana</td>
                  <td>Om Nagabhushanaye Namah</td>
                  <td>The One Who is Adorned with Serpents</td>
                </tr>
                <tr>
                  <td>802</td>
                  <td>Andhakari</td>
                  <td>Om Andhakaraye Namah</td>
                  <td>The One Who is the Destroyer of Darkness</td>
                </tr>
                <tr>
                  <td>803</td>
                  <td>Makhadveshi</td>
                  <td>Om Makhadveshaye Namah</td>
                  <td>The One Who is the Enemy of the Demons</td>
                </tr>
                <tr>
                  <td>804</td>
                  <td>Vishnukandharapatana</td>
                  <td>Om Vishnukandharapatanaye Namah</td>
                  <td>The One Who Brings Down the Shoulder of Lord Vishnu</td>
                </tr>
                <tr>
                  <td>805</td>
                  <td>Hinadosha</td>
                  <td>Om Hinadoshaye Namah</td>
                  <td>The One Who is Free from All Faults</td>
                </tr>
                <tr>
                  <td>806</td>
                  <td>Akshayaguna</td>
                  <td>Om Akshayagunaye Namah</td>
                  <td>The One Who has Infinite Virtues</td>
                </tr>
                <tr>
                  <td>807</td>
                  <td>Dakshari</td>
                  <td>Om Daksharaye Namah</td>
                  <td>The One Who is the Master of Daksha's actions</td>
                </tr>
                <tr>
                  <td>808</td>
                  <td>Pushadantabhit</td>
                  <td>Om Pushadantabhite Namah</td>
                  <td>The One Who is the Ultimate in Power</td>
                </tr>
                <tr>
                  <td>809</td>
                  <td>Dhurjati</td>
                  <td>Om Dhurjataye Namah</td>
                  <td>The One Who is the Master of Meditation</td>
                </tr>
                <tr>
                  <td>810</td>
                  <td>Khandaparashu</td>
                  <td>Om Khandaparashaye Namah</td>
                  <td>The One Who Wields the Axe (Parashu)</td>
                </tr>
                <tr>
                  <td>811</td>
                  <td>Sakala</td>
                  <td>Om Sakalaye Namah</td>
                  <td>The One Who is Complete, All-encompassing</td>
                </tr>
                <tr>
                  <td>812</td>
                  <td>Nishkala</td>
                  <td>Om Nishkalaye Namah</td>
                  <td>The One Who is Without Parts or Attributes</td>
                </tr>
                <tr>
                  <td>813</td>
                  <td>Anagha</td>
                  <td>Om Anaghaye Namah</td>
                  <td>The Sinless, the Pure, the Infallible</td>
                </tr>
                <tr>
                  <td>814</td>
                  <td>Akala</td>
                  <td>Om Akalaye Namah</td>
                  <td>The Timeless, the One Who Transcends Time</td>
                </tr>
                <tr>
                  <td>815</td>
                  <td>Sakaladhara</td>
                  <td>Om Sakaladharaye Namah</td>
                  <td>The One Who Holds Everything Together</td>
                </tr>
                <tr>
                  <td>816</td>
                  <td>Pandurabha</td>
                  <td>Om Pandurabhaye Namah</td>
                  <td>The One Who Has a Pale or White Color</td>
                </tr>
                <tr>
                  <td>817</td>
                  <td>Mrida</td>
                  <td>Om Mridaye Namah</td>
                  <td>The Soft or Gentle One, the Kind-hearted</td>
                </tr>
                <tr>
                  <td>818</td>
                  <td>Nata</td>
                  <td>Om Nataye Namah</td>
                  <td>The Dancer, the One Who Performs Dance</td>
                </tr>
                <tr>
                  <td>819</td>
                  <td>Purna</td>
                  <td>Om Purnaye Namah</td>
                  <td>The Complete, the Fulfilled</td>
                </tr>
                <tr>
                  <td>820</td>
                  <td>Purayita</td>
                  <td>Om Purayitaye Namah</td>
                  <td>The One Who Fulfills or Completes</td>
                </tr>
                <tr>
                  <td>821</td>
                  <td>Punya</td>
                  <td>Om Punyaye Namah</td>
                  <td>The One Who is Full of Virtue and Goodness</td>
                </tr>
                <tr>
                  <td>822</td>
                  <td>Sukumara</td>
                  <td>Om Sukumaraye Namah</td>
                  <td>The Delicate, the Gentle</td>
                </tr>
                <tr>
                  <td>823</td>
                  <td>Sulochana</td>
                  <td>Om Sulochanaye Namah</td>
                  <td>The One with Beautiful Eyes</td>
                </tr>
                <tr>
                  <td>824</td>
                  <td>Samagayapriya</td>
                  <td>Om Samagayapriyaye Namah</td>
                  <td>The One Who is Fond of Songs and Music</td>
                </tr>
                <tr>
                  <td>825</td>
                  <td>Akrura</td>
                  <td>Om Akruraye Namah</td>
                  <td>The One Who is Untroubled or Calm</td>
                </tr>
                <tr>
                  <td>826</td>
                  <td>Punyakirti</td>
                  <td>Om Punyakirtiye Namah</td>
                  <td>The One Who is Known for His Virtue and Good Deeds</td>
                </tr>
                <tr>
                  <td>827</td>
                  <td>Anamaya</td>
                  <td>Om Anamayaye Namah</td>
                  <td>The One Who is Free from Disease</td>
                </tr>
                <tr>
                  <td>828</td>
                  <td>Manojava</td>
                  <td>Om Manojavaye Namah</td>
                  <td>The One Who Moves Swiftly Like the Mind</td>
                </tr>
                <tr>
                  <td>829</td>
                  <td>Tirthakara</td>
                  <td>Om Tirthakaraye Namah</td>
                  <td>The One Who is the Creator of Sacred Places</td>
                </tr>
                <tr>
                  <td>830</td>
                  <td>Jatila</td>
                  <td>Om Jatilaye Namah</td>
                  <td>The One Who Has Matted Hair</td>
                </tr>
                <tr>
                  <td>831</td>
                  <td>Jiviteshvara</td>
                  <td>Om Jiviteshvaraye Namah</td>
                  <td>The Lord of Life, the Sustainer of All Life</td>
                </tr>
                <tr>
                  <td>832</td>
                  <td>Jivitantakara</td>
                  <td>Om Jivitantakaraye Namah</td>
                  <td>The One Who Ends the Life of All Beings</td>
                </tr>
                <tr>
                  <td>833</td>
                  <td>Nitya</td>
                  <td>Om Nityaye Namah</td>
                  <td>The Eternal, the Everlasting</td>
                </tr>
                <tr>
                  <td>834</td>
                  <td>Vasureta</td>
                  <td>Om Vasuretaye Namah</td>
                  <td>The One Who is the Source of All Wealth</td>
                </tr>
                <tr>
                  <td>835</td>
                  <td>Vasuprada</td>
                  <td>Om Vasupradaye Namah</td>
                  <td>The One Who Grants All Wealth</td>
                </tr>
                <tr>
                  <td>836</td>
                  <td>Sadgati</td>
                  <td>Om Sadgataye Namah</td>
                  <td>The One Who Leads to Liberation</td>
                </tr>
                <tr>
                  <td>837</td>
                  <td>Satkriti</td>
                  <td>Om Satkritaye Namah</td>
                  <td>The One Who Performs Great Deeds of Virtue</td>
                </tr>
                <tr>
                  <td>838</td>
                  <td>Siddhi</td>
                  <td>Om Siddhaye Namah</td>
                  <td>The One Who is Perfection or Accomplishment</td>
                </tr>
                <tr>
                  <td>839</td>
                  <td>Sajjati</td>
                  <td>Om Sajjatiye Namah</td>
                  <td>The One Who is Consistent in Nature</td>
                </tr>
                <tr>
                  <td>840</td>
                  <td>Kalakantaka</td>
                  <td>Om Kalakantakaye Namah</td>
                  <td>The One Who Destroys Time</td>
                </tr>
                <tr>
                  <td>841</td>
                  <td>Kaladhara</td>
                  <td>Om Kaladharaye Namah</td>
                  <td>The One Who Holds Time</td>
                </tr>
                <tr>
                  <td>842</td>
                  <td>Mahakala</td>
                  <td>Om Mahakalaye Namah</td>
                  <td>The Great Time, the Destroyer of Time</td>
                </tr>
                <tr>
                  <td>843</td>
                  <td>Bhutasatyaparayana</td>
                  <td>Om Bhutasatyaparayanaye Namah</td>
                  <td>The One Who is the Truth of All Beings</td>
                </tr>
                <tr>
                  <td>844</td>
                  <td>Lokalavanyakarta</td>
                  <td>Om Lokalavanyakartaye Namah</td>
                  <td>The Creator of the Universe and All Worlds</td>
                </tr>
                <tr>
                  <td>845</td>
                  <td>Lokottarasukhalaya</td>
                  <td>Om Lokottarasukhalayaye Namah</td>
                  <td>The One Who is the Source of Supreme Happiness</td>
                </tr>
                <tr>
                  <td>846</td>
                  <td>Chandrasanjivana</td>
                  <td>Om Chandrasanjivanaye Namah</td>
                  <td>The One Who Revives the Moon</td>
                </tr>
                <tr>
                  <td>847</td>
                  <td>Shasta</td>
                  <td>Om Shastaye Namah</td>
                  <td>The One Who is the Teacher or Instructor</td>
                </tr>
                <tr>
                  <td>848</td>
                  <td>Lokaguda</td>
                  <td>Om Lokagudaye Namah</td>
                  <td>The One Who is the Dweller of All Worlds</td>
                </tr>
                <tr>
                  <td>849</td>
                  <td>Mahadhipa</td>
                  <td>Om Mahadhipaye Namah</td>
                  <td>The One Who is the Supreme Ruler of the Universe</td>
                </tr>
                <tr>
                  <td>850</td>
                  <td>Lokabandhu</td>
                  <td>Om Lokabandhaye Namah</td>
                  <td>The One Who is the Protector of All Beings</td>
                </tr>
                <tr>
                  <td>851</td>
                  <td>Lokanatha</td>
                  <td>Om Lokanathaye Namah</td>
                  <td>The One Who is the Lord of the Universe</td>
                </tr>
                <tr>
                  <td>852</td>
                  <td>Kritajna</td>
                  <td>Om Kritajnaye Namah</td>
                  <td>The One Who is Grateful, the One Who Knows All</td>
                </tr>
                <tr>
                  <td>853</td>
                  <td>Krittibhushana</td>
                  <td>Om Krittibhushanaye Namah</td>
                  <td>The One Who is Adorned with the Marks of the Earth</td>
                </tr>
                <tr>
                  <td>854</td>
                  <td>Anapaya</td>
                  <td>Om Anapaye Namah</td>
                  <td>The One Who is Beyond the Reach of Pain and Suffering</td>
                </tr>
                <tr>
                  <td>855</td>
                  <td>Akshara</td>
                  <td>Om Aksharaye Namah</td>
                  <td>The Imperishable, the One Who is Unchanging</td>
                </tr>
                <tr>
                  <td>856</td>
                  <td>Kantha</td>
                  <td>Om Kanthaye Namah</td>
                  <td>The Neck or the One Who has a Beautiful Neck</td>
                </tr>
                <tr>
                  <td>857</td>
                  <td>Sarvashastrabhudvara</td>
                  <td>Om Sarvashastrabhudvaraye Namah</td>
                  <td>The One Who is the Master of All Sciences</td>
                </tr>
                <tr>
                  <td>858</td>
                  <td>Tejomaya</td>
                  <td>Om Tejomayaye Namah</td>
                  <td>The One Who is Full of Light and Radiance</td>
                </tr>
                <tr>
                  <td>859</td>
                  <td>Dyutidhara</td>
                  <td>Om Dyutidharaye Namah</td>
                  <td>The One Who Holds the Light or Radiance</td>
                </tr>
                <tr>
                  <td>860</td>
                  <td>Lokagrani</td>
                  <td>Om Lokagraniye Namah</td>
                  <td>The One Who is the Head of All the Worlds</td>
                </tr>
                <tr>
                  <td>861</td>
                  <td>Anu</td>
                  <td>Om Anuye Namah</td>
                  <td>The Smallest, the Subtle</td>
                </tr>
                <tr>
                  <td>862</td>
                  <td>Shuchismita</td>
                  <td>Om Shuchismitaye Namah</td>
                  <td>The One Who is Always Smiling and Radiant</td>
                </tr>
                <tr>
                  <td>863</td>
                  <td>Prasamnyatma</td>
                  <td>Om Prasamnyatmaye Namah</td>
                  <td>The One Who is Calm and Content</td>
                </tr>
                <tr>
                  <td>864</td>
                  <td>Durjjeya</td>
                  <td>Om Durjjeyaye Namah</td>
                  <td>The One Who is Invincible or Impossible to Defeat</td>
                </tr>
                <tr>
                  <td>865</td>
                  <td>Duratikrama</td>
                  <td>Om Duratikramaye Namah</td>
                  <td>The One Who Cannot Be Overcome</td>
                </tr>
                <tr>
                  <td>866</td>
                  <td>Jyotirmaya</td>
                  <td>Om Jyotirmayaye Namah</td>
                  <td>The One Who is Full of Light</td>
                </tr>
                <tr>
                  <td>867</td>
                  <td>Jagannatha</td>
                  <td>Om Jagannathaye Namah</td>
                  <td>The Lord of the Universe</td>
                </tr>
                <tr>
                  <td>868</td>
                  <td>Nirakara</td>
                  <td>Om Nirakaraye Namah</td>
                  <td>
                    The One Who is Formless and Beyond the Comprehension of the
                    Senses
                  </td>
                </tr>
                <tr>
                  <td>869</td>
                  <td>Jaleshvara</td>
                  <td>Om Jaleshvaraye Namah</td>
                  <td>The Lord of the Waters</td>
                </tr>
                <tr>
                  <td>870</td>
                  <td>Tumbavina</td>
                  <td>Om Tumbavinaye Namah</td>
                  <td>The One Who is the Source of Music</td>
                </tr>
                <tr>
                  <td>871</td>
                  <td>Mahakopa</td>
                  <td>Om Mahakopaye Namah</td>
                  <td>The One Who is the Great Wrathful</td>
                </tr>
                <tr>
                  <td>872</td>
                  <td>Vishoka</td>
                  <td>Om Vishokaye Namah</td>
                  <td>The One Who is Beyond Sorrow</td>
                </tr>
                <tr>
                  <td>873</td>
                  <td>Shokanashana</td>
                  <td>Om Shokanashanaye Namah</td>
                  <td>The One Who Removes Sorrow</td>
                </tr>
                <tr>
                  <td>874</td>
                  <td>Trilokapa</td>
                  <td>Om Trilokapaye Namah</td>
                  <td>The One Who Holds the Three Worlds</td>
                </tr>
                <tr>
                  <td>875</td>
                  <td>Trilokesha</td>
                  <td>Om Trilokeshaye Namah</td>
                  <td>The One Who is the Lord of the Three Worlds</td>
                </tr>
                <tr>
                  <td>876</td>
                  <td>Sarvashuddhi</td>
                  <td>Om Sarvashuddhaye Namah</td>
                  <td>The One Who is the Purity of All Things</td>
                </tr>
                <tr>
                  <td>877</td>
                  <td>Adhokshaja</td>
                  <td>Om Adhokshajaye Namah</td>
                  <td>The One Who is Beyond the Reach of the Senses</td>
                </tr>
                <tr>
                  <td>878</td>
                  <td>Avyaktalakshana</td>
                  <td>Om Avyaktalakshanaye Namah</td>
                  <td>
                    The One Who is Beyond Manifestation or the Unmanifested
                  </td>
                </tr>
                <tr>
                  <td>879</td>
                  <td>Deva</td>
                  <td>Om Devaye Namah</td>
                  <td>The Divine, the God</td>
                </tr>
                <tr>
                  <td>880</td>
                  <td>Vyaktavyakta</td>
                  <td>Om Vyaktavyaktaye Namah</td>
                  <td>The One Who is Both Manifest and Unmanifest</td>
                </tr>
                <tr>
                  <td>881</td>
                  <td>Vishampati</td>
                  <td>Om Vishampataye Namah</td>
                  <td>The Lord of the Universe, the Master of All</td>
                </tr>
                <tr>
                  <td>882</td>
                  <td>Varashila</td>
                  <td>Om Varashilaye Namah</td>
                  <td>The One Who Holds the Supreme Strength</td>
                </tr>
                <tr>
                  <td>883</td>
                  <td>Varaguna</td>
                  <td>Om Varagunaye Namah</td>
                  <td>The One Who is Full of Virtue and Good Qualities</td>
                </tr>
                <tr>
                  <td>884</td>
                  <td>Saramanadhana</td>
                  <td>Om Saramanadhanaye Namah</td>
                  <td>The One Who Supports All Animals and Beings</td>
                </tr>
                <tr>
                  <td>885</td>
                  <td>Maya</td>
                  <td>Om Mayaye Namah</td>
                  <td>
                    The One Who is the Illusion or the Creator of Illusion
                  </td>
                </tr>
                <tr>
                  <td>886</td>
                  <td>Brahma</td>
                  <td>Om Brahmaye Namah</td>
                  <td>The Creator, the One Who Originates All</td>
                </tr>
                <tr>
                  <td>887</td>
                  <td>Vishnu</td>
                  <td>Om Vishnave Namah</td>
                  <td>The Preserver, the Protector of the Universe</td>
                </tr>
                <tr>
                  <td>888</td>
                  <td>Prajapati</td>
                  <td>Om Prajapataye Namah</td>
                  <td>The Lord of Creation, the Father of All Living Beings</td>
                </tr>
                <tr>
                  <td>889</td>
                  <td>Hamsa</td>
                  <td>Om Hamsaye Namah</td>
                  <td>
                    The Swan, the One Who is the Embodiment of Spiritual
                    Knowledge
                  </td>
                </tr>
                <tr>
                  <td>890</td>
                  <td>Hamsagati</td>
                  <td>Om Hamsagataye Namah</td>
                  <td>The One Who Moves Like a Swan, the Eternal Traveler</td>
                </tr>
                <tr>
                  <td>891</td>
                  <td>Vaya</td>
                  <td>Om Vayaye Namah</td>
                  <td>The Wind, the Breath of Life</td>
                </tr>
                <tr>
                  <td>892</td>
                  <td>Vedha</td>
                  <td>Om Vedhaye Namah</td>
                  <td>
                    The Knowledge, the One Who is the Essence of the Vedas
                  </td>
                </tr>
                <tr>
                  <td>893</td>
                  <td>Vidhata</td>
                  <td>Om Vidhataye Namah</td>
                  <td>The Creator, the One Who Determines Destiny</td>
                </tr>
                <tr>
                  <td>894</td>
                  <td>Dhata</td>
                  <td>Om Dhataye Namah</td>
                  <td>The Sustainer, the One Who Holds Everything Together</td>
                </tr>
                <tr>
                  <td>895</td>
                  <td>Srashta</td>
                  <td>Om Srashtaye Namah</td>
                  <td>The One Who Creates, the Creator of the Universe</td>
                </tr>
                <tr>
                  <td>896</td>
                  <td>Harta</td>
                  <td>Om Hartaye Namah</td>
                  <td>
                    The Destroyer, the One Who Removes All Obstacles and
                    Suffering
                  </td>
                </tr>
                <tr>
                  <td>897</td>
                  <td>Chaturmukha</td>
                  <td>Om Chaturmukhaye Namah</td>
                  <td>The One Who has Four Faces</td>
                </tr>
                <tr>
                  <td>898</td>
                  <td>Kailasashikharavasi</td>
                  <td>Om Kailasashikharavasaye Namah</td>
                  <td>The One Who Dwells on Mount Kailash</td>
                </tr>
                <tr>
                  <td>899</td>
                  <td>Sarvavasi</td>
                  <td>Om Sarvavasaye Namah</td>
                  <td>The One Who is Present Everywhere</td>
                </tr>
                <tr>
                  <td>900</td>
                  <td>Sadagati</td>
                  <td>Om Sadagataye Namah</td>
                  <td>The One Who Leads to Liberation</td>
                </tr>
                <tr>
                  <td>901</td>
                  <td>Hiranyagarbha</td>
                  <td>Om Hiranyagarbhaye Namah</td>
                  <td>The Golden Womb, the Source of Creation</td>
                </tr>
                <tr>
                  <td>902</td>
                  <td>Druhina</td>
                  <td>Om Druhinaye Namah</td>
                  <td>The One Who is Free from Enmity</td>
                </tr>
                <tr>
                  <td>903</td>
                  <td>Bhutapala</td>
                  <td>Om Bhutapalaye Namah</td>
                  <td>The Protector of All Beings</td>
                </tr>
                <tr>
                  <td>904</td>
                  <td>Bhupati</td>
                  <td>Om Bhupataye Namah</td>
                  <td>The Lord of the Earth, the King of the Universe</td>
                </tr>
                <tr>
                  <td>905</td>
                  <td>Sadyogi</td>
                  <td>Om Sadyogaye Namah</td>
                  <td>The One Who is Always in Union with the Divine</td>
                </tr>
                <tr>
                  <td>906</td>
                  <td>Yogavit</td>
                  <td>Om Yogavitaye Namah</td>
                  <td>The Master of Yoga, the One Who Knows Yoga</td>
                </tr>
                <tr>
                  <td>907</td>
                  <td>Yaga</td>
                  <td>Om Yogaye Namah</td>
                  <td>The One Who Practices Yoga, the Ascetic</td>
                </tr>
                <tr>
                  <td>908</td>
                  <td>Varada</td>
                  <td>Om Varadaye Namah</td>
                  <td>The One Who Grants Boons and Blessings</td>
                </tr>
                <tr>
                  <td>909</td>
                  <td>Brahmanapriya</td>
                  <td>Om Brahmanapriyaye Namah</td>
                  <td>The One Who is Beloved of Brahma</td>
                </tr>
                <tr>
                  <td>910</td>
                  <td>Devapriya</td>
                  <td>Om Devapriyaye Namah</td>
                  <td>The One Who is Loved by the Gods</td>
                </tr>
                <tr>
                  <td>911</td>
                  <td>Devanatha</td>
                  <td>Om Devanathaye Namah</td>
                  <td>
                    The Lord of the Gods, the King of the Celestial Beings
                  </td>
                </tr>
                <tr>
                  <td>912</td>
                  <td>Devajna</td>
                  <td>Om Devajnaye Namah</td>
                  <td>The One Who is Worshiped by the Gods</td>
                </tr>
                <tr>
                  <td>913</td>
                  <td>Devachintaka</td>
                  <td>Om Devachintakaye Namah</td>
                  <td>The One Who is the Source of the Gods’ Desires</td>
                </tr>
                <tr>
                  <td>914</td>
                  <td>Vishamaksha</td>
                  <td>Om Vishamakshaye Namah</td>
                  <td>The One Who has Unequaled Eyes, the All-seeing</td>
                </tr>
                <tr>
                  <td>915</td>
                  <td>Vishalaksha</td>
                  <td>Om Vishalakshaye Namah</td>
                  <td>The One Who has Large, All-seeing Eyes</td>
                </tr>
                <tr>
                  <td>916</td>
                  <td>Vrishada</td>
                  <td>Om Vrishadaye Namah</td>
                  <td>The One Who is the Upholder of Righteousness</td>
                </tr>
                <tr>
                  <td>917</td>
                  <td>Vrishavardhana</td>
                  <td>Om Vrishavardhanaye Namah</td>
                  <td>The One Who Increases Righteousness</td>
                </tr>
                <tr>
                  <td>918</td>
                  <td>Nirmama</td>
                  <td>Om Nirmamaye Namah</td>
                  <td>The One Who is Free from Attachment</td>
                </tr>
                <tr>
                  <td>919</td>
                  <td>Nirahamkara</td>
                  <td>Om Nirahamkaraye Namah</td>
                  <td>The One Who is Free from Ego</td>
                </tr>
                <tr>
                  <td>920</td>
                  <td>Nirmoha</td>
                  <td>Om Nirmohaye Namah</td>
                  <td>The One Who is Free from Delusion</td>
                </tr>
                <tr>
                  <td>921</td>
                  <td>Nirupadrava</td>
                  <td>Om Nirupadravaye Namah</td>
                  <td>The One Who is Free from Obstacles</td>
                </tr>
                <tr>
                  <td>922</td>
                  <td>Darpaha</td>
                  <td>Om Darpahaye Namah</td>
                  <td>The One Who Removes Arrogance</td>
                </tr>
                <tr>
                  <td>923</td>
                  <td>Darpada</td>
                  <td>Om Darpadaye Namah</td>
                  <td>The One Who Destroys Arrogance</td>
                </tr>
                <tr>
                  <td>924</td>
                  <td>Dripta</td>
                  <td>Om Driptaye Namah</td>
                  <td>The One Who is Proud and Resplendent</td>
                </tr>
                <tr>
                  <td>925</td>
                  <td>Sarvabhutaparivartaka</td>
                  <td>Om Sarvabhutaparivartakaye Namah</td>
                  <td>The One Who Transforms All Beings</td>
                </tr>
                <tr>
                  <td>926</td>
                  <td>Sahasrajit</td>
                  <td>Om Sahasrajite Namah</td>
                  <td>The One Who Conquers Thousands</td>
                </tr>
                <tr>
                  <td>927</td>
                  <td>Sahasrarchi</td>
                  <td>Om Sahasrarchaye Namah</td>
                  <td>The One Who is the Source of Thousand Rays</td>
                </tr>
                <tr>
                  <td>928</td>
                  <td>Prabhava</td>
                  <td>Om Prabhavaye Namah</td>
                  <td>The One Who is the Source of All Things</td>
                </tr>
                <tr>
                  <td>929</td>
                  <td>Snigdha</td>
                  <td>Om Snigdhaprakritidakshaye Namah</td>
                  <td>The One Who is Kind and Has a Gentle Nature</td>
                </tr>
                <tr>
                  <td>930</td>
                  <td>Bhutabhavyabhavanatha</td>
                  <td>Om Bhutabhavyabhavanathaye Namah</td>
                  <td>The Lord of Past, Present, and Future</td>
                </tr>
                <tr>
                  <td>931</td>
                  <td>Bhutinashana</td>
                  <td>Om Bhutinashanaye Namah</td>
                  <td>The One Who Destroys All Misery</td>
                </tr>
                <tr>
                  <td>932</td>
                  <td>Artha</td>
                  <td>Om Arthaye Namah</td>
                  <td>The One Who is the Embodiment of Meaning</td>
                </tr>
                <tr>
                  <td>933</td>
                  <td>Anartha</td>
                  <td>Om Anarthaye Namah</td>
                  <td>The One Who Removes Misfortune</td>
                </tr>
                <tr>
                  <td>934</td>
                  <td>Mahakosha</td>
                  <td>Om Mahakoshaye Namah</td>
                  <td>The One Who is the Great Treasure</td>
                </tr>
                <tr>
                  <td>935</td>
                  <td>Parakaya</td>
                  <td>Om Parakayaikapanditaye Namah</td>
                  <td>The Supreme Scholar of Knowledge</td>
                </tr>
                <tr>
                  <td>936</td>
                  <td>Nishkantaka</td>
                  <td>Om Nishkantakaye Namah</td>
                  <td>The One Who is Free from Bondage</td>
                </tr>
                <tr>
                  <td>937</td>
                  <td>Kritananda</td>
                  <td>Om Kritanandaye Namah</td>
                  <td>The One Who Brings Supreme Bliss</td>
                </tr>
                <tr>
                  <td>938</td>
                  <td>Nirvyaja</td>
                  <td>Om Nirvyajaye Namah</td>
                  <td>The One Who is Without Deception</td>
                </tr>
                <tr>
                  <td>939</td>
                  <td>Vyajamardana</td>
                  <td>Om Vyajamardanaye Namah</td>
                  <td>The One Who Destroys Deception</td>
                </tr>
                <tr>
                  <td>940</td>
                  <td>Sattvavana</td>
                  <td>Om Sattvavanaye Namah</td>
                  <td>The One Who is the Embodiment of Goodness</td>
                </tr>
                <tr>
                  <td>941</td>
                  <td>Sattvika</td>
                  <td>Om Sattvikaye Namah</td>
                  <td>The One Who is Pure and Righteous</td>
                </tr>
                <tr>
                  <td>942</td>
                  <td>Satyakirti</td>
                  <td>Om Satyakirtiye Namah</td>
                  <td>The One Who is Renowned for Truth</td>
                </tr>
                <tr>
                  <td>943</td>
                  <td>Snehakritagama</td>
                  <td>Om Snehakritagamaye Namah</td>
                  <td>The One Who is the Creator of Affection</td>
                </tr>
                <tr>
                  <td>944</td>
                  <td>Akampita</td>
                  <td>Om Akampitaye Namah</td>
                  <td>The One Who is Unshaken and Steady</td>
                </tr>
                <tr>
                  <td>945</td>
                  <td>Gunagrahi</td>
                  <td>Om Gunagrahaye Namah</td>
                  <td>The One Who Appreciates Virtue</td>
                </tr>
                <tr>
                  <td>946</td>
                  <td>Naikatma</td>
                  <td>Om Naikatmaye Namah</td>
                  <td>The One Who is the Sole Soul</td>
                </tr>
                <tr>
                  <td>947</td>
                  <td>Naikakarmakrita</td>
                  <td>Om Naikakarmakritaye Namah</td>
                  <td>The One Who Performs Diverse Actions</td>
                </tr>
                <tr>
                  <td>948</td>
                  <td>Suprita</td>
                  <td>Om Supritaye Namah</td>
                  <td>The One Who is Well-pleased</td>
                </tr>
                <tr>
                  <td>949</td>
                  <td>Sumukha</td>
                  <td>Om Sumukhaye Namah</td>
                  <td>The One Who Has a Pleasant Face</td>
                </tr>
                <tr>
                  <td>950</td>
                  <td>Suksha</td>
                  <td>Om Sukshaye Namah</td>
                  <td>The One Who is Subtle and Small</td>
                </tr>
                <tr>
                  <td>951</td>
                  <td>Sukara</td>
                  <td>Om Sukaraye Namah</td>
                  <td>The One Who is Auspicious</td>
                </tr>
                <tr>
                  <td>952</td>
                  <td>Dakshinanila</td>
                  <td>Om Dakshinanilaye Namah</td>
                  <td>The One Who Has the Southern Wind</td>
                </tr>
                <tr>
                  <td>953</td>
                  <td>Nandiskandhadhara</td>
                  <td>Om Nandiskandhadharaye Namah</td>
                  <td>The One Who Holds Nandi’s Staff</td>
                </tr>
                <tr>
                  <td>954</td>
                  <td>Dhurya</td>
                  <td>Om Dhuryaye Namah</td>
                  <td>The One Who is Resplendent</td>
                </tr>
                <tr>
                  <td>955</td>
                  <td>Prakata</td>
                  <td>Om Prakataye Namah</td>
                  <td>The One Who is Manifest</td>
                </tr>
                <tr>
                  <td>956</td>
                  <td>Pritivardhana</td>
                  <td>Om Pritivardhanaye Namah</td>
                  <td>The One Who Increases the Earth’s Prosperity</td>
                </tr>
                <tr>
                  <td>957</td>
                  <td>Aparajita</td>
                  <td>Om Aparajitaye Namah</td>
                  <td>The One Who is Invincible and Unconquerable</td>
                </tr>
                <tr>
                  <td>958</td>
                  <td>Sarvasattva</td>
                  <td>Om Sarvasattvaye Namah</td>
                  <td>The One Who is the Soul of All Beings</td>
                </tr>
                <tr>
                  <td>959</td>
                  <td>Govinda</td>
                  <td>Om Govindaye Namah</td>
                  <td>The One Who Protects the Universe, the Lord of Cows</td>
                </tr>
                <tr>
                  <td>960</td>
                  <td>Adhrita</td>
                  <td>Om Adhritaye Namah</td>
                  <td>The One Who Sustains and Supports All</td>
                </tr>
                <tr>
                  <td>961</td>
                  <td>Sattvavahana</td>
                  <td>Om Sattvavahanaye Namah</td>
                  <td>The One Who Bears the Essence of Goodness</td>
                </tr>
                <tr>
                  <td>962</td>
                  <td>Svadhrita</td>
                  <td>Om Svadhritaye Namah</td>
                  <td>The One Who is Self-sustained</td>
                </tr>
                <tr>
                  <td>963</td>
                  <td>Siddha</td>
                  <td>Om Siddhaye Namah</td>
                  <td>The One Who is Perfected and Accomplished</td>
                </tr>
                <tr>
                  <td>964</td>
                  <td>Putamurti</td>
                  <td>Om Putamurtiye Namah</td>
                  <td>The One Who is the Pure and Holy Form</td>
                </tr>
                <tr>
                  <td>965</td>
                  <td>Yashodhana</td>
                  <td>Om Yashodhanaye Namah</td>
                  <td>The One Who Increases Fame and Glory</td>
                </tr>
                <tr>
                  <td>966</td>
                  <td>Varahabhringadhrika</td>
                  <td>Om Varahabhringadhrikaye Namah</td>
                  <td>The One Who Holds the Boar’s Horn</td>
                </tr>
                <tr>
                  <td>967</td>
                  <td>Bhringi</td>
                  <td>Om Bhringaye Namah</td>
                  <td>The One Who is the Ascetic and Devotee</td>
                </tr>
                <tr>
                  <td>968</td>
                  <td>Balavana</td>
                  <td>Om Balavanaye Namah</td>
                  <td>The One Who is Possessed of Supreme Strength</td>
                </tr>
                <tr>
                  <td>969</td>
                  <td>Ekanayaka</td>
                  <td>Om Ekanayakaye Namah</td>
                  <td>The One Who is the Only Leader</td>
                </tr>
                <tr>
                  <td>970</td>
                  <td>Shrutiprakasha</td>
                  <td>Om Shrutiprakashaye Namah</td>
                  <td>The One Who Illuminates the Vedas and Scriptures</td>
                </tr>
                <tr>
                  <td>971</td>
                  <td>Shrutimana</td>
                  <td>Om Shrutimanaye Namah</td>
                  <td>The One Who is Knowledgeable in the Vedas</td>
                </tr>
                <tr>
                  <td>972</td>
                  <td>Ekabandhu</td>
                  <td>Om Ekabandhave Namah</td>
                  <td>The One Who is the Sole Companion</td>
                </tr>
                <tr>
                  <td>973</td>
                  <td>Anekakrita</td>
                  <td>Om Anekakritaye Namah</td>
                  <td>The One Who has Performed Many Actions</td>
                </tr>
                <tr>
                  <td>974</td>
                  <td>Shrivatsalashivarambha</td>
                  <td>Om Shrivatsalashivarambhaye Namah</td>
                  <td>The One Who Bears the Shrivatsa Symbol</td>
                </tr>
                <tr>
                  <td>975</td>
                  <td>Shantabhadra</td>
                  <td>Om Shantabhadraye Namah</td>
                  <td>The One Who is the Embodiment of Peace and Goodness</td>
                </tr>
                <tr>
                  <td>976</td>
                  <td>Sama</td>
                  <td>Om Samaye Namah</td>
                  <td>The One Who is Calm and Peaceful</td>
                </tr>
                <tr>
                  <td>977</td>
                  <td>Yasha</td>
                  <td>Om Yashaye Namah</td>
                  <td>The One Who is Glorious and Famous</td>
                </tr>
                <tr>
                  <td>978</td>
                  <td>Bhushaya</td>
                  <td>Om Bhushayaye Namah</td>
                  <td>The One Who is the Lord of the Earth</td>
                </tr>
                <tr>
                  <td>979</td>
                  <td>Bhushana</td>
                  <td>Om Bhushanaye Namah</td>
                  <td>The One Who is the Adorner of All</td>
                </tr>
                <tr>
                  <td>980</td>
                  <td>Bhuti</td>
                  <td>Om Bhutaye Namah</td>
                  <td>The One Who is the Source of Bliss and Wealth</td>
                </tr>
                <tr>
                  <td>981</td>
                  <td>Bhutakrita</td>
                  <td>Om Bhutakritaye Namah</td>
                  <td>The One Who Creates All Beings</td>
                </tr>
                <tr>
                  <td>982</td>
                  <td>Bhutabhavana</td>
                  <td>Om Bhutabhavanaye Namah</td>
                  <td>The One Who Sustains All Beings</td>
                </tr>
                <tr>
                  <td>983</td>
                  <td>Akampa</td>
                  <td>Om Akampaye Namah</td>
                  <td>The One Who is Unshaken and Steady</td>
                </tr>
                <tr>
                  <td>984</td>
                  <td>Bhaktikaya</td>
                  <td>Om Bhaktikayaye Namah</td>
                  <td>The One Who is the Embodiment of Devotion</td>
                </tr>
                <tr>
                  <td>985</td>
                  <td>Kalaha</td>
                  <td>Om Kalahaye Namah</td>
                  <td>The One Who is the Master of Disputes and Fights</td>
                </tr>
                <tr>
                  <td>986</td>
                  <td>Nilalohita</td>
                  <td>Om Nilalohitaye Namah</td>
                  <td>The One Who is Blue in Color</td>
                </tr>
                <tr>
                  <td>987</td>
                  <td>Satyavrata</td>
                  <td>Om Satyavrataye Namah</td>
                  <td>The One Who is the Upholder of Truth and Oath</td>
                </tr>
                <tr>
                  <td>988</td>
                  <td>Mahatyagi</td>
                  <td>Om Mahatyagaye Namah</td>
                  <td>The One Who is the Greatest Renunciant</td>
                </tr>
                <tr>
                  <td>989</td>
                  <td>Nityashantiparayana</td>
                  <td>Om Nityashantiparayanaye Namah</td>
                  <td>The One Who is the Eternal Source of Peace</td>
                </tr>
                <tr>
                  <td>990</td>
                  <td>Pararthavritti</td>
                  <td>Om Pararthavrittiye Namah</td>
                  <td>The One Who Works for the Welfare of Others</td>
                </tr>
                <tr>
                  <td>991</td>
                  <td>Vibikshu</td>
                  <td>Om Vibikshave Namah</td>
                  <td>The One Who is a Renunciant or Ascetic</td>
                </tr>
                <tr>
                  <td>992</td>
                  <td>Visharada</td>
                  <td>Om Visharadaye Namah</td>
                  <td>The One Who is Well-versed in Knowledge and Wisdom</td>
                </tr>
                <tr>
                  <td>993</td>
                  <td>Shubhada</td>
                  <td>Om Shubhadaye Namah</td>
                  <td>The One Who is the Giver of Auspiciousness</td>
                </tr>
                <tr>
                  <td>994</td>
                  <td>Shubhakarta</td>
                  <td>Om Shubhakartaye Namah</td>
                  <td>The One Who is the Doer of Good and Auspicious Deeds</td>
                </tr>
                <tr>
                  <td>995</td>
                  <td>Shubhanama</td>
                  <td>Om Shubhanamaye Namah</td>
                  <td>The One Who has an Auspicious Name</td>
                </tr>
                <tr>
                  <td>996</td>
                  <td>Shubha</td>
                  <td>Om Shubhaye Namah</td>
                  <td>The One Who is Auspicious and Virtuous</td>
                </tr>
                <tr>
                  <td>997</td>
                  <td>Anarthita</td>
                  <td>Om Anarthitaye Namah</td>
                  <td>The One Who Removes All Misery and Woe</td>
                </tr>
                <tr>
                  <td>998</td>
                  <td>Aguna</td>
                  <td>Om Agunaye Namah</td>
                  <td>The One Who is Without Defects</td>
                </tr>
                <tr>
                  <td>999</td>
                  <td>Sakshi</td>
                  <td>Om Sakshaye Namah</td>
                  <td>The One Who is the Witness to All</td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>Akarta</td>
                  <td>Om Akartaye Namah</td>
                  <td>The One Who is the Doer of No Action</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Significance of Lord Shiva Sahasranama Names</h3>
          <p>
            The <b>Shiva Sahasranama</b>, which means ‘
            <b>the thousand names of Lord Shiva</b>,’ holds great significance
            in Hinduism. Whoever chants these powerful Shiv 1000 names with pure
            devotion gets Lord Shiva’s blessings, and no problem can ever touch
            him. For example, when Lord Vishnu recited all the thousand names of
            Lord Shiva, he received the ‘Sudarshan chakra’ as a token of
            appreciation.
          </p>
          <p>
            Chanting the 1000 various names of Radha is said to help a person in
            many ways. It provides one with calm and peace within themselves,
            keeping their stress levels low. Along with this, it is also
            believed that chanting 1000 names of radha helps one attain moksha.
          </p>
          <p>
            Mahadeva, the ‘<b>lord of spirits</b>,’ protects his devotees from
            negative energies, misfortune, and bad omens. Even Lord Krishna
            recited the importance of Shiva Sahasranamavali in the 17th chapter,{" "}
            <b>Anushasana Parva of Mahabharata</b>. He mentioned chanting all
            the Shiva 1000 names with purity, devotion, and no interruption
            equals performing Ashavamedha Yagna.
          </p>
        </div>
      </Container>
      <FAQLayout faqData={Shiva1000FAQ} />
    </Layout>
  );
};
export default Shiva1000;

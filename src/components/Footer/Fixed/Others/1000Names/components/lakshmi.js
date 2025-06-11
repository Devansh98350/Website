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
    question: "What are the benefits of chanting Lakshmi Sahasranamavali?",
    answer:
      "Chanting The Laxmi Sahastra Namavali brings, peace, prosperity and wealth in one’s life. Chanitng her 1000 names are said to protect the individual from evil and ill energies.",
  },
  {
    question: "Which direction is ideal to chant 1000 names of Lakshmi?",
    answer:
      "The east direction is said to be the ideal direction to chant the 1000 names of Lakshmi. This direction, according to vastu shastra, is said to be auspicious and can help one connect with the divine energies.",
  },
  {
    question: "What is Lakshmi's most chanted name?",
    answer:
      "The most chanted name of Goddess Lakshmi is Mahalakshmi. People also chant the Mahalakshmi mantra or the Lakshmi beej mantra to seek her blessings.",
  },
  {
    question: "What do the 1000 names of Lakshmi represent?",
    answer:
      "The 1000 names of Goddess Lakshmi represent her different qualities, actions, and associations. These names depict the many forms of the goddess.",
  },
  {
    question: "What are the 12 powerful names of Lakshmi?",
    answer:
      "The 12 powerful names of Laxmi include Sridevi, Amrutodbhavaa, Kamalaa, Lokasundari, Vishnupatni, Vaishnavee, Varaarohaa, Harivallabhaa, Shaarnghinee, Devadevikaa, Lakshmi, and Sri Hari Priyaa.",
  },
  {
    question: "What are some easy Lakshmi Sahasranamam names for baby girl?",
    answer:
      "Some easy names for baby girl from the Lakshmi Sahasranamama include,Sthita, Devi, Lakshmi, Vaidiki, Devika, and Dhriti.",
  },
];

const Lakshmi1000 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout title="1000 Name of Goddess Lakshmi - AstroSwarg" description="" keywords="">
<Breadcrumbs/>
    <Container>
      <div className="body">
        <h1 className="heading">1000 Names Of Lakshmi</h1>
        <h2>The Benefits Of Chanting 1000 Lakshmi Names</h2>
        <h3>About the 1000 Names Of Lakshmi</h3>
        <p>
          The Laxmi Sahastra Namavali, also known as Lakshmi 1000 names, are a
          collection of 1000 different names of the Goddess. Chanting these
          names is considered highly auspicious as they tend to depict several
          qualities, actions, and associated of the Goddess.
        </p>
        <h3>Lakshmi 1000 Name List</h3>
        <p>
          Mentioned below are the 1000 names of goddess Lakshmi with meaning.
          Each of these names is said to represent different qualities and
          attributes of the Goddess.
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
                <th>1000 Name of Lakshmi</th>
                <th>Mantra</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nityagata</td>
                <td>Om Nityagatayai Namah</td>
                <td>The Goddess Who keeps on Traveling</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Anantanitya</td>
                <td>Om Anantanityayai Namah</td>
                <td>The Goddess Who is Endless and is Forever</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Nandini</td>
                <td>Om Nandinyai Namah</td>
                <td>The Goddess Who was the Daughter of Nandagopa</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Janaranjani</td>
                <td>Om Janaranjanyai Namah</td>
                <td>The Goddess Who Makes People Happy</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Nitya Prakashini</td>
                <td>Om Nityaprakashinyai Namah</td>
                <td>The Goddess Who Shines Permanently</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Swaprakasha Swaroopini</td>
                <td>Om Swaprakasha Swaroopinyai Namah</td>
                <td>The Goddess Who is Naturally Shining</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Maha Lakshmi</td>
                <td>Om Mahalakshmyai Namah</td>
                <td>The Goddess Who is the Great Lakshmi</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Mahakanya</td>
                <td>Om Mahakanyayai Namah</td>
                <td>The Goddess Who is the Great Virgin</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Bhoga-vaibhava-sandhatri</td>
                <td>Om Bhogavaibhavasandhatryai Namah</td>
                <td>The Goddess Who Gives Pleasure and Wealth</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Bhaktanugrahakarini</td>
                <td>Om Bhaktanugrahakarinyai Namah</td>
                <td>The Goddess Who Blesses her Devotees</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Eeshavasya</td>
                <td>Om Eeshavasyai Namah</td>
                <td>The Goddess Who is Everywhere</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Mahamaya</td>
                <td>Om Mahamayayai Namah</td>
                <td>The Goddess Who is the Great Enchantress</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Mahadevi</td>
                <td>Om Mahadeviyai Namah</td>
                <td>The One Who is the Great Goddess</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Maheshwari</td>
                <td>Om Maheshwaryai Namah</td>
                <td>The Goddess Who is the Wife of Great Shiva</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Hrullekha</td>
                <td>Om Hrullekhyai Namah</td>
                <td>The Goddess Who is in Letter Hreem</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Paramaa</td>
                <td>Om Paramaayai Namah</td>
                <td>The Goddess Who is the Greatest</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Shakti</td>
                <td>Om Shaktyai Namah</td>
                <td>The Goddess Who is the Power</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Matruka-beeja-roopini</td>
                <td>Om Matruka-beeja-roopinyai Namah</td>
                <td>The Goddess Who is Model Root Letter</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Nithayananda</td>
                <td>Om Nithayanandayai Namah</td>
                <td>The Goddess Who is Forever Happy</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Nityabodha</td>
                <td>Om Nityabodhayai Namah</td>
                <td>The Goddess Who has Permanent Wisdom</td>
              </tr>
              <tr>
                <td>21</td>
                <td>Naadini</td>
                <td>Om Naadinyai Namah</td>
                <td>The Goddess Who Makes Musical Note</td>
              </tr>
              <tr>
                <td>22</td>
                <td>Janamodini</td>
                <td>Om Janamodinyai Namah</td>
                <td>The Goddess Who Entertains People</td>
              </tr>
              <tr>
                <td>23</td>
                <td>Satya-pratyayani</td>
                <td>Om Satya-pratyayaniyai Namah</td>
                <td>The Goddess Who Believes in Truth</td>
              </tr>
              <tr>
                <td>24</td>
                <td>Swaprakashatma-roopini</td>
                <td>Om Swaprakashatma-roopinyai Namah</td>
                <td>The Goddess Who Herself has a Shining Form</td>
              </tr>
              <tr>
                <td>25</td>
                <td>Tripura</td>
                <td>Om Tripurayai Namah</td>
                <td>
                  The Goddess Who is the Wife of Shiva Who Destroyed the Three
                  Cities
                </td>
              </tr>
              <tr>
                <td>26</td>
                <td>Bhairavi</td>
                <td>Om Bhairavyai Namah</td>
                <td>The Goddess Who has a Fearful Form</td>
              </tr>
              <tr>
                <td>27</td>
                <td>Vidyaa</td>
                <td>Om Vidyayai Namah</td>
                <td>The Goddess Who is Knowledge</td>
              </tr>
              <tr>
                <td>28</td>
                <td>Hamsaa</td>
                <td>Om Hamsayai Namah</td>
                <td>The Goddess Who is the 'Hamsa' chant</td>
              </tr>
              <tr>
                <td>29</td>
                <td>Vagishwari</td>
                <td>Om Vagishwaryai Namah</td>
                <td>The Goddess Who is the Goddess of Words</td>
              </tr>
              <tr>
                <td>30</td>
                <td>Shivaa</td>
                <td>Om Shivayai Namah</td>
                <td>The Goddess Who is the Consort of Lord Shiva</td>
              </tr>
              <tr>
                <td>31</td>
                <td>Vagdevi</td>
                <td>Om Vagdevi Namah</td>
                <td>The One Who is the Goddess of Words</td>
              </tr>
              <tr>
                <td>32</td>
                <td>Maharatri</td>
                <td>Om Maharatrayai Namah</td>
                <td>The Goddess Who is the Night Before the Deluge</td>
              </tr>
              <tr>
                <td>33</td>
                <td>Kalaratri</td>
                <td>Om Kalaratrayai Namah</td>
                <td>The Goddess Who is the Night Before Death</td>
              </tr>
              <tr>
                <td>34</td>
                <td>Trilochana</td>
                <td>Om Trilochanayai Namah</td>
                <td>The Goddess Who has Three Eyes</td>
              </tr>
              <tr>
                <td>35</td>
                <td>Bhadrakali</td>
                <td>Om Bhadrakalyai Namah</td>
                <td>The Goddess Who is the Kali Who Protects</td>
              </tr>
              <tr>
                <td>36</td>
                <td>Karali</td>
                <td>Om Karalyai Namah</td>
                <td>The Goddess Who is Fearsome</td>
              </tr>
              <tr>
                <td>37</td>
                <td>Mahakali</td>
                <td>Om Mahakalyai Namah</td>
                <td>The Goddess Who Swallows Time</td>
              </tr>
              <tr>
                <td>38</td>
                <td>Tilottama</td>
                <td>Om Tilottamayai Namah</td>
                <td>The Goddess Whose Every Atom is Pretty</td>
              </tr>
              <tr>
                <td>39</td>
                <td>Kali</td>
                <td>Om Kalyai Namah</td>
                <td>The Goddess Who is Fearless</td>
              </tr>
              <tr>
                <td>40</td>
                <td>Karalavaktranta</td>
                <td>Om Karalavaktrantayai Namah</td>
                <td>The Goddess Who has a Horrifying Mouth</td>
              </tr>
              <tr>
                <td>41</td>
                <td>Kamakshi</td>
                <td>Om Kamakshyai Namah</td>
                <td>The Goddess Who Fulfills Desires by Her Eyes</td>
              </tr>
              <tr>
                <td>42</td>
                <td>Kamada</td>
                <td>Om Kamadayai Namah</td>
                <td>The Goddess Who Fulfills Desires</td>
              </tr>
              <tr>
                <td>43</td>
                <td>Shubha</td>
                <td>Om Shubhayai Namah</td>
                <td>The Goddess Who is Auspicious</td>
              </tr>
              <tr>
                <td>44</td>
                <td>Chandika</td>
                <td>Om Chandikayai Namah</td>
                <td>The Goddess Who has Great Anger (or) Killed Mahishasura</td>
              </tr>
              <tr>
                <td>45</td>
                <td>Chandarupesha</td>
                <td>Om Chandarupeshayai Namah</td>
                <td>The Goddess Who has a Fearsome Form</td>
              </tr>
              <tr>
                <td>46</td>
                <td>Chamunda</td>
                <td>Om Chamundayai Namah</td>
                <td>The Goddess Who Killed Chanda and Munda</td>
              </tr>
              <tr>
                <td>47</td>
                <td>Chakradharini</td>
                <td>Om Chakradharinyai Namah</td>
                <td>The Goddess Who is Armed with a Wheel</td>
              </tr>
              <tr>
                <td>48</td>
                <td>Trailokyajanani</td>
                <td>Om Trailokyajananyai Namah</td>
                <td>The Goddess Who has Won Over the Three Worlds</td>
              </tr>
              <tr>
                <td>49</td>
                <td>Devi</td>
                <td>Om Devyai Namah</td>
                <td>The Goddess Who Makes Things Move</td>
              </tr>
              <tr>
                <td>50</td>
                <td>Trailokya vijayottama</td>
                <td>Om Trailokyavijayottamayai Namah</td>
                <td>
                  The Goddess Who is the First Among Those Who Won Over the
                  Three Worlds
                </td>
              </tr>
              <tr>
                <td>51</td>
                <td>Siddhalakshmi</td>
                <td>Om Siddhalakshmyai Namah</td>
                <td>The Goddess Who Grants Occult Powers</td>
              </tr>
              <tr>
                <td>52</td>
                <td>Kriyalakshmi</td>
                <td>Om Kriyalakshmyai Namah</td>
                <td>The Goddess Who is Behind All Actions</td>
              </tr>
              <tr>
                <td>53</td>
                <td>Moksha lakshmi</td>
                <td>Om Mokshalakshmyai Namah</td>
                <td>The Goddess Who is the Lakshmi Giving Salvation</td>
              </tr>
              <tr>
                <td>54</td>
                <td>Prasadini</td>
                <td>Om Prasadinayai Namah</td>
                <td>The Goddess Who Becomes Pleased with Devotees</td>
              </tr>
              <tr>
                <td>55</td>
                <td>Uma</td>
                <td>Om Umayai Namah</td>
                <td>The Goddess Who is the Daughter of Himavan</td>
              </tr>
              <tr>
                <td>56</td>
                <td>Bhagawati</td>
                <td>Om Bhagawatyai Namah</td>
                <td>The Goddess Who is the Goddess with All Types of Wealth</td>
              </tr>
              <tr>
                <td>57</td>
                <td>Durga</td>
                <td>Om Durgayai Namah</td>
                <td>The Goddess Who Killed Durgamasura</td>
              </tr>
              <tr>
                <td>58</td>
                <td>Chaandri</td>
                <td>Om Chaandrayai Namah</td>
                <td>The Goddess Who Shines Like the Moon</td>
              </tr>
              <tr>
                <td>59</td>
                <td>Dakshayani</td>
                <td>Om Dakshayanayai Namah</td>
                <td>The Goddess Who is the Daughter of Daksha</td>
              </tr>
              <tr>
                <td>60</td>
                <td>Pratyangira</td>
                <td>Om Pratyangirayai Namah</td>
                <td>
                  The Goddess Who Took the Form of the Fearsome Atharvana
                  Bhadrakali
                </td>
              </tr>
              <tr>
                <td>61</td>
                <td>Dharaa</td>
                <td>Om Dharaayai Namah</td>
                <td>The Goddess Who Carries (or) Who is Earth</td>
              </tr>
              <tr>
                <td>62</td>
                <td>Velaa</td>
                <td>Om Velayai Namah</td>
                <td>The Goddess Who is in the Edge of Time</td>
              </tr>
              <tr>
                <td>63</td>
                <td>Lokamata</td>
                <td>Om Lokamatayai Namah</td>
                <td>The Goddess Who is the Mother of the World</td>
              </tr>
              <tr>
                <td>64</td>
                <td>Haripriya</td>
                <td>Om Haripriyayi Namah</td>
                <td>The Goddess Who is Loved by Vishnu</td>
              </tr>
              <tr>
                <td>65</td>
                <td>Parvati</td>
                <td>Om Parvatyai Namah</td>
                <td>The Goddess Who is the Daughter of the Mountain</td>
              </tr>
              <tr>
                <td>66</td>
                <td>Brahmavidya-pradayini</td>
                <td>Om Brahmavidya-pradayinyai Namah</td>
                <td>The Goddess Who Grants Knowledge of God</td>
              </tr>
              <tr>
                <td>67</td>
                <td>Aroopa</td>
                <td>Om Aroopayai Namah</td>
                <td>The Goddess Who does Not have Any Form</td>
              </tr>
              <tr>
                <td>68</td>
                <td>Bahuroopa</td>
                <td>Om Bahuroopayai Namah</td>
                <td>The Goddess Who has Several Forms</td>
              </tr>
              <tr>
                <td>69</td>
                <td>Viroopa</td>
                <td>Om Viroopayai Namah</td>
                <td>The Goddess Who has a Horrible Form of Durga</td>
              </tr>
              <tr>
                <td>70</td>
                <td>Viswaroopini</td>
                <td>Om Viswaroopinyai Namah</td>
                <td>The Goddess Whose Form is the Universe</td>
              </tr>
              <tr>
                <td>71</td>
                <td>Panchabhootatmika</td>
                <td>Om Panchabhootatmikyai Namah</td>
                <td>The Goddess Who is the Soul of the Five Elements</td>
              </tr>
              <tr>
                <td>72</td>
                <td>Vani</td>
                <td>Om Vanyai Namah</td>
                <td>The Goddess Who Plays Veena</td>
              </tr>
              <tr>
                <td>73</td>
                <td>Paraa</td>
                <td>Om Parayai Namah</td>
                <td>The Goddess Who is Above the Five Elements</td>
              </tr>
              <tr>
                <td>74</td>
                <td>Kalika</td>
                <td>Om Kalikayai Namah</td>
                <td>The One Who is the Goddess of Time</td>
              </tr>
              <tr>
                <td>75</td>
                <td>Panchika</td>
                <td>Om Panchikayai Namah</td>
                <td>
                  The Goddess Who is the World Spread Through the Five Elements
                </td>
              </tr>
              <tr>
                <td>76</td>
                <td>Vagmi</td>
                <td>Om Vagmiyai Namah</td>
                <td>The Goddess Who Controls Words</td>
              </tr>
              <tr>
                <td>77</td>
                <td>Havi</td>
                <td>Om Haviyai Namah</td>
                <td>
                  The Goddess Who is Cooked Rice and Ghee to be Offered in the
                  Fire
                </td>
              </tr>
              <tr>
                <td>78</td>
                <td>Pratyadhidevata</td>
                <td>Om Pratyadhidevatayai Namah</td>
                <td>The One Who Makes the Mind and Body Work as its Goddess</td>
              </tr>
              <tr>
                <td>79</td>
                <td>Devamata</td>
                <td>Om Devamatayai Namah</td>
                <td>The Goddess Who is the Mother of Devas</td>
              </tr>
              <tr>
                <td>80</td>
                <td>Sureshana</td>
                <td>Om Sureshanayai Namah</td>
                <td>The Goddess of the Devas</td>
              </tr>
              <tr>
                <td>81</td>
                <td>Vedagarbha</td>
                <td>Om Vedagarbhayai Namah</td>
                <td>The Goddess Who is the origin of the Vedas</td>
              </tr>
              <tr>
                <td>82</td>
                <td>Ambika</td>
                <td>Om Ambikayai Namah</td>
                <td>The Goddess Who is the Mother</td>
              </tr>
              <tr>
                <td>83</td>
                <td>Dhriti</td>
                <td>Om Dhritiyai Namah</td>
                <td>The Goddess Who is the Courage</td>
              </tr>
              <tr>
                <td>84</td>
                <td>Sankhya</td>
                <td>Om Sankhyayai Namah</td>
                <td>The Goddess Who is the Numbers</td>
              </tr>
              <tr>
                <td>85</td>
                <td>Jaati</td>
                <td>Om Jaatyai Namah</td>
                <td>The Goddess Who Lives as All Castes and Creeds</td>
              </tr>
              <tr>
                <td>86</td>
                <td>Kriyashakti</td>
                <td>Om Kriyashaktyai Namah</td>
                <td>The Goddess Who is the Power Behind Action</td>
              </tr>
              <tr>
                <td>87</td>
                <td>Prakruti</td>
                <td>Om Prakrutayai Namah</td>
                <td>The Goddess Who is the Nature</td>
              </tr>
              <tr>
                <td>88</td>
                <td>Mohini</td>
                <td>Om Mohinyai Namah</td>
                <td>The Goddess Who Bewitches</td>
              </tr>
              <tr>
                <td>89</td>
                <td>Mahi</td>
                <td>Om Mahyai Namah</td>
                <td>The Goddess Who is the Earth</td>
              </tr>
              <tr>
                <td>90</td>
                <td>Yajnavidya</td>
                <td>Om Yajnavidyayai Namah</td>
                <td>The Goddess Who is the Science of Yajna</td>
              </tr>
              <tr>
                <td>91</td>
                <td>Mahavidya</td>
                <td>Om Mahavidyayai Namah</td>
                <td>The Goddess Who is the Greatest Knowledge</td>
              </tr>
              <tr>
                <td>92</td>
                <td>Guhyavidya</td>
                <td>Om Guhyavidyayai Namah</td>
                <td>The Goddess Who is the Secret Knowledge</td>
              </tr>
              <tr>
                <td>93</td>
                <td>Vibhavari</td>
                <td>Om Vibhavarayai Namah</td>
                <td>The Goddess Who Drives Away Darkness</td>
              </tr>
              <tr>
                <td>94</td>
                <td>Jyotishmati</td>
                <td>Om Jyotishmatyai Namah</td>
                <td>The Goddess Who Possesses Light</td>
              </tr>
              <tr>
                <td>95</td>
                <td>Mahamata</td>
                <td>Om Mahamatayai Namah</td>
                <td>The Goddess Who is the Great Mother</td>
              </tr>
              <tr>
                <td>96</td>
                <td>Sarva-mantra-phalaprada</td>
                <td>Om Sarvamantraphalapradayai Namah</td>
                <td>The Goddess Who Makes All Mantras Yield Results</td>
              </tr>
              <tr>
                <td>97</td>
                <td>Daridrya dhvamsini</td>
                <td>Om Daridryadhvamsinyai Namah</td>
                <td>The Goddess Who Destroys Poverty</td>
              </tr>
              <tr>
                <td>98</td>
                <td>Hridaya-granthi-bhedini</td>
                <td>Om Hridayagranthibhedinyai Namah</td>
                <td>The Goddess Who Breaks the Knot of Heart</td>
              </tr>
              <tr>
                <td>99</td>
                <td>Sahasraditya-sankasha</td>
                <td>Om Sahasradityasankashayai Namah</td>
                <td>The Goddess Who is Like One Thousand Suns</td>
              </tr>
              <tr>
                <td>100</td>
                <td>Chandrika</td>
                <td>Om Chandrikayai Namah</td>
                <td>The Goddess Who is Like the Light of Moon</td>
              </tr>
              <tr>
                <td>101</td>
                <td>Chandra roopini</td>
                <td>Om Chandraroopinyai Namah</td>
                <td>The Goddess Who has the Form of Moon</td>
              </tr>
              <tr>
                <td>102</td>
                <td>Gayatri</td>
                <td>Om Gayatryai Namah</td>
                <td>The Goddess Who is Gayathri Mantra</td>
              </tr>
              <tr>
                <td>103</td>
                <td>Soma sambhuti</td>
                <td>Om Somasambhutayai Namah</td>
                <td>The Goddess Who Wears the Crescent</td>
              </tr>
              <tr>
                <td>104</td>
                <td>Savitri</td>
                <td>Om Savitryai Namah</td>
                <td>The Goddess Who Gave Birth to Vedas</td>
              </tr>
              <tr>
                <td>105</td>
                <td>Pranavatmika</td>
                <td>Om Pranavatmikayai Namah</td>
                <td>The Goddess Who is the Soul of Pranava</td>
              </tr>
              <tr>
                <td>106</td>
                <td>Shaankari</td>
                <td>Om Shaankaryai Namah</td>
                <td>The Goddess Who is the Consort of Shiva</td>
              </tr>
              <tr>
                <td>107</td>
                <td>Vaishnavi</td>
                <td>Om Vaishnavyai Namah</td>
                <td>The Goddess Who is the Consort of Vishnu</td>
              </tr>
              <tr>
                <td>108</td>
                <td>Brahmi</td>
                <td>Om Brahmyai Namah</td>
                <td>The Goddess Who is the Aspect of Brahma</td>
              </tr>
              <tr>
                <td>109</td>
                <td>Sarvadeva-namaskrita</td>
                <td>Om Sarvadevanamaskritayai Namah</td>
                <td>The Goddess Who is Saluted by All Devas</td>
              </tr>
              <tr>
                <td>110</td>
                <td>Sevyadurga</td>
                <td>Om Sevyadurgayai Namah</td>
                <td>The Goddess Who is Durga Who Should be Saluted</td>
              </tr>
              <tr>
                <td>111</td>
                <td>Kuberakshi</td>
                <td>Om Kuberakshyai Namah</td>
                <td>The Goddess Who by Her Mere Glance can Make a Man Rich</td>
              </tr>
              <tr>
                <td>112</td>
                <td>Karaveera nivasini</td>
                <td>Om Karaveeranivasinyai Namah</td>
                <td>
                  The Goddess Who Lives in Nerium Oleander (Kaner) Flowers
                </td>
              </tr>
              <tr>
                <td>113</td>
                <td>Jaya</td>
                <td>Om Jayayai Namah</td>
                <td>The Goddess Who is Victorious</td>
              </tr>
              <tr>
                <td>114</td>
                <td>Vijaya</td>
                <td>Om Vijayayai Namah</td>
                <td>The Goddess Who is Ever Victorious</td>
              </tr>
              <tr>
                <td>115</td>
                <td>Jayanti</td>
                <td>Om Jayantyai Namah</td>
                <td>The Goddess Who Always Wins Everywhere</td>
              </tr>
              <tr>
                <td>116</td>
                <td>Aparajita</td>
                <td>Om Aparajitayai Namah</td>
                <td>The Goddess Who Cannot be Defeated</td>
              </tr>
              <tr>
                <td>117</td>
                <td>Kubjika</td>
                <td>Om Kubjikayai Namah</td>
                <td>The Goddess Who is Curled up and Sleeping</td>
              </tr>
              <tr>
                <td>118</td>
                <td>Shastri</td>
                <td>Om Shastryai Namah</td>
                <td>The Goddess Who Rules Over Knowledge</td>
              </tr>
              <tr>
                <td>119</td>
                <td>Veenapustaka dharini</td>
                <td>Om Veenapustakadharinyai Namah</td>
                <td>The Goddess Who Carried a Book and a Veena</td>
              </tr>
              <tr>
                <td>120</td>
                <td>Sarvagya shakti</td>
                <td>Om Sarvagyashaktyai Namah</td>
                <td>The Goddess Who Knows Everything</td>
              </tr>
              <tr>
                <td>121</td>
                <td>Sri Shakti</td>
                <td>Om Srishaktyai Namah</td>
                <td>The Goddess Who is Powerful</td>
              </tr>
              <tr>
                <td>122</td>
                <td>Brahma Vishnu Shivatmika</td>
                <td>Om BrahmaVishnuShivatmikayai Namah</td>
                <td>
                  The Goddess Who is the Essence of Brahma, Vishnu, and Shiva
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td>Ida-pingalika-madhya-mrinali-tanturoopini</td>
                <td>Om Tanturoopinyai Namah</td>
                <td>The Goddess Who goes in Between Ida and Pingala</td>
              </tr>
              <tr>
                <td>124</td>
                <td>Yagyeshaani</td>
                <td>Om Yagyeshanayai Namah</td>
                <td>The Goddess Who Rules Over Yajnas</td>
              </tr>
              <tr>
                <td>125</td>
                <td>Pratha</td>
                <td>Om Prathayai Namah</td>
                <td>The Goddess Who is Famous</td>
              </tr>
              <tr>
                <td>126</td>
                <td>Diksha</td>
                <td>Om Dikshayai Namah</td>
                <td>The Goddess Who Gives You License to do Yajna</td>
              </tr>
              <tr>
                <td>127</td>
                <td>Dakshina</td>
                <td>Om Dakshinayai Namah</td>
                <td>The Goddess Who is an Expert</td>
              </tr>
              <tr>
                <td>128</td>
                <td>Sarva Mohini</td>
                <td>Om SarvaMohinyai Namah</td>
                <td>The Goddess Who is Prettier than All</td>
              </tr>
              <tr>
                <td>129</td>
                <td>Ashtanga yogini</td>
                <td>Om AshtangaYoginyai Namah</td>
                <td>The Goddess Who can be Seen by Eight Fold Yoga</td>
              </tr>
              <tr>
                <td>130</td>
                <td>Nirbeeja-dhyana-gocharaa</td>
                <td>Om Nirbeejadhyanagocharayai Namah</td>
                <td>
                  The Goddess Who is Visible to Those Who Meditate Using Yoga
                </td>
              </tr>
              <tr>
                <td>131</td>
                <td>Sarvatirtha-sthitaa</td>
                <td>Om Sarvatirthasthitayai Namah</td>
                <td>The Goddess Who is in All Sacred Waters</td>
              </tr>
              <tr>
                <td>132</td>
                <td>Shuddha</td>
                <td>Om Shuddhayai Namah</td>
                <td>The Goddess Who is Eternally Pure</td>
              </tr>
              <tr>
                <td>133</td>
                <td>Sarva parvata vasini</td>
                <td>Om SarvaParvataVasinyai Namah</td>
                <td>The Goddess Who Lives on All Mountains</td>
              </tr>
              <tr>
                <td>134</td>
                <td>Veda Shashtraprama</td>
                <td>Om VedaShashtrapramayai Namah</td>
                <td>The Goddess Who Throws Light on Vedas and Sasthras</td>
              </tr>
              <tr>
                <td>135</td>
                <td>Shadangadi pada krama</td>
                <td>Om ShadangadiPadaKramayai Namah</td>
                <td>The Goddess Who Codifies the Six Branches of Vedas</td>
              </tr>
              <tr>
                <td>136</td>
                <td>Dhatri</td>
                <td>Om Dhatryai Namah</td>
                <td>The Goddess Who Gives</td>
              </tr>
              <tr>
                <td>137</td>
                <td>Shubhananda</td>
                <td>Om Shubhanandayai Namah</td>
                <td>The Goddess Who is Auspiciously Happy</td>
              </tr>
              <tr>
                <td>138</td>
                <td>Yajnakarma svaroopini</td>
                <td>Om YajnakarmaSvaroopyai Namah</td>
                <td>
                  The Goddess Who is the Form of Carrying Out Fire Sacrifices
                </td>
              </tr>
              <tr>
                <td>139</td>
                <td>Vratini</td>
                <td>Om Vratinyai Namah</td>
                <td>The Goddess Who does Penance</td>
              </tr>
              <tr>
                <td>140</td>
                <td>Menaka</td>
                <td>Om Menakayai Namah</td>
                <td>The Goddess Who is the Daughter of Mena</td>
              </tr>
              <tr>
                <td>141</td>
                <td>Brahmani</td>
                <td>Om Brahmanyai Namah</td>
                <td>The Goddess Who is the Power of Brahma</td>
              </tr>
              <tr>
                <td>142</td>
                <td>Sarvatirtha</td>
                <td>Om Sarvatirthayai Namah</td>
                <td>The Goddess Who Meditates on Brahman</td>
              </tr>
              <tr>
                <td>143</td>
                <td>Ekaksharapara</td>
                <td>Om Ekaksharaparayai Namah</td>
                <td>The Goddess Who Likes Om</td>
              </tr>
              <tr>
                <td>144</td>
                <td>Tara</td>
                <td>Om Tarayai Namah</td>
                <td>The Goddess Who Helps to Cross the Sea of Misery</td>
              </tr>
              <tr>
                <td>145</td>
                <td>Bhava bandha vinashini</td>
                <td>Om BhavabandhaVinashinyai Namah</td>
                <td>The Goddess Who Destroys Attachment to Domestic Life</td>
              </tr>
              <tr>
                <td>146</td>
                <td>Vishwambhara</td>
                <td>Om Vishwambharayai Namah</td>
                <td>The Goddess Who Supports the Universe</td>
              </tr>
              <tr>
                <td>147</td>
                <td>Dharaadhaaraa</td>
                <td>Om Dharaadhaarayai Namah</td>
                <td>The Goddess Who Supports the Earth</td>
              </tr>
              <tr>
                <td>148</td>
                <td>Niradhara</td>
                <td>Om Niradharayai Namah</td>
                <td>The Goddess Who does not Have Any Support</td>
              </tr>
              <tr>
                <td>149</td>
                <td>Adhikasvaraa</td>
                <td>Om Adhikasvarayai Namah</td>
                <td>The Goddess Who is Beyond Description</td>
              </tr>
              <tr>
                <td>150</td>
                <td>Raka</td>
                <td>Om Rakayai Namah</td>
                <td>The Goddess Who is Like the Full Moon</td>
              </tr>
              <tr>
                <td>151</td>
                <td>Kuhu</td>
                <td>Om Kuhuyai Namah</td>
                <td>The One Who is the Goddess of New Moon Day</td>
              </tr>
              <tr>
                <td>152</td>
                <td>Amavasya</td>
                <td>Om Amavasyayai Namah</td>
                <td>The Goddess Who is the New Moon Day</td>
              </tr>
              <tr>
                <td>153</td>
                <td>Poornima</td>
                <td>Om Poornimayai Namah</td>
                <td>The Goddess Who is the Full Moon Day</td>
              </tr>
              <tr>
                <td>154</td>
                <td>Anumati</td>
                <td>Om Anumatayai Namah</td>
                <td>The Goddess Who Permits</td>
              </tr>
              <tr>
                <td>155</td>
                <td>Dyuti</td>
                <td>Om Dyutiyai Namah</td>
                <td>The Goddess Who is the Form of Light</td>
              </tr>
              <tr>
                <td>156</td>
                <td>Sinivali</td>
                <td>Om Sinivalyai Namah</td>
                <td>The Goddess Who is One Day Previous to New Moon Day</td>
              </tr>
              <tr>
                <td>157</td>
                <td>Avashyaa</td>
                <td>Om Avashyayai Namah</td>
                <td>The Goddess Who Attracts</td>
              </tr>
              <tr>
                <td>158</td>
                <td>Vaishvadevi</td>
                <td>Om Vaishvadeviyai Namah</td>
                <td>The Goddess Who is the Form of Vishva Devas</td>
              </tr>
              <tr>
                <td>159</td>
                <td>Pishangila</td>
                <td>Om Pishangilayai Namah</td>
                <td>The Goddess Who has a Very Soft Body</td>
              </tr>
              <tr>
                <td>160</td>
                <td>Pippalaa</td>
                <td>Om Pippalayai Namah</td>
                <td>The Goddess Who is the Form of Banyan Tree</td>
              </tr>
              <tr>
                <td>161</td>
                <td>Vishalakshi</td>
                <td>Om Vishalakshyai Namah</td>
                <td>The Goddess Who has Broad Eyes</td>
              </tr>
              <tr>
                <td>162</td>
                <td>Rakshoghni</td>
                <td>Om Rakshoghnayai Namah</td>
                <td>The Goddess Who is the Fire that Protects</td>
              </tr>
              <tr>
                <td>163</td>
                <td>Vrishti kaarini</td>
                <td>Om Vrishtikaarinyai Namah</td>
                <td>The Goddess Who is the Reason of Rain</td>
              </tr>
              <tr>
                <td>164</td>
                <td>Dushta vidravini</td>
                <td>Om Dushtavidravinyai Namah</td>
                <td>The Goddess Who Drives Away Bad People</td>
              </tr>
              <tr>
                <td>165</td>
                <td>Sarvopadrava nashini</td>
                <td>Om SarvopadravaNashinyai Namah</td>
                <td>The Goddess Who Destroys All Type of Troubles</td>
              </tr>
              <tr>
                <td>166</td>
                <td>Sharada</td>
                <td>Om Sharadayai Namah</td>
                <td>The Goddess Who Gives Wisdom</td>
              </tr>
              <tr>
                <td>167</td>
                <td>Sharasandhaana</td>
                <td>Om Sharasandhaanayai Namah</td>
                <td>
                  The Goddess Who is the Power of Sending Arrows Using the Bow
                </td>
              </tr>
              <tr>
                <td>168</td>
                <td>Sarva Shastra svaroopini</td>
                <td>Om SarvaShastraSvaroopyai Namah</td>
                <td>The Goddess Who is the Form of All Weapons</td>
              </tr>
              <tr>
                <td>169</td>
                <td>Yuddha madhya sthita</td>
                <td>Om YuddhaMadhyaSthitayai Namah</td>
                <td>The Goddess Who is in the Middle of the Battle</td>
              </tr>
              <tr>
                <td>170</td>
                <td>Sarva bhoota bhanjani</td>
                <td>Om SarvaBhootaBhanjinyai Namah</td>
                <td>The Goddess Who Destroys All Evil Spirits</td>
              </tr>
              <tr>
                <td>171</td>
                <td>Ayuddha</td>
                <td>Om Ayuddhayai Namah</td>
                <td>The Goddess Who does not Participate in a War</td>
              </tr>
              <tr>
                <td>172</td>
                <td>Yuddharoopa</td>
                <td>Om Yuddharoopayai Namah</td>
                <td>The Goddess Who is the Form of Battle</td>
              </tr>
              <tr>
                <td>173</td>
                <td>Shanta</td>
                <td>Om Shantayai Namah</td>
                <td>The Goddess Who is Peaceful</td>
              </tr>
              <tr>
                <td>174</td>
                <td>Shanti svaroopini</td>
                <td>Om ShantiSvaroopyai Namah</td>
                <td>The Goddess Who is the Personification of Peace</td>
              </tr>
              <tr>
                <td>175</td>
                <td>Ganga</td>
                <td>Om Gangayai Namah</td>
                <td>The Goddess Who is in the Form of Ganges</td>
              </tr>
              <tr>
                <td>176</td>
                <td>Veni</td>
                <td>Om Venyai Namah</td>
                <td>The Goddess Who is the Braid</td>
              </tr>
              <tr>
                <td>177</td>
                <td>Yamuna</td>
                <td>Om Yamunayai Namah</td>
                <td>The Goddess Who is the River Yamuna</td>
              </tr>
              <tr>
                <td>178</td>
                <td>Narmada</td>
                <td>Om Narmadayai Namah</td>
                <td>The Goddess Who is the River Narmada</td>
              </tr>
              <tr>
                <td>179</td>
                <td>Aapaga</td>
                <td>Om Aapagayai Namah</td>
                <td>The Goddess Who was Once a River</td>
              </tr>
              <tr>
                <td>180</td>
                <td>Samudravasanaa vaasaa</td>
                <td>Om SamudravasanaaVaasayai Namah</td>
                <td>The Goddess Who Lives in Between the Seas</td>
              </tr>
              <tr>
                <td>181</td>
                <td>Brahmanda shreni mekhala</td>
                <td>Om BrahmandashreniMekhalayai Namah</td>
                <td>The Goddess Who Wears the Universe as Hip Belt</td>
              </tr>
              <tr>
                <td>182</td>
                <td>Panchavaktra</td>
                <td>Om Panchavaktrayai Namah</td>
                <td>The Goddess Who has Five Faces</td>
              </tr>
              <tr>
                <td>183</td>
                <td>Dasabhuja</td>
                <td>Om Dasabhujayai Namah</td>
                <td>The Goddess Who has Ten Hands</td>
              </tr>
              <tr>
                <td>184</td>
                <td>Shuddha sphatika sannibha</td>
                <td>Om ShuddhaSphatikaSannibhayai Namah</td>
                <td>The Goddess Who is Like a Clear Crystal</td>
              </tr>
              <tr>
                <td>185</td>
                <td>Rakta</td>
                <td>Om Raktayai Namah</td>
                <td>The Goddess Who is of Blood Red Colour</td>
              </tr>
              <tr>
                <td>186</td>
                <td>Krishna</td>
                <td>Om Krishnayai Namah</td>
                <td>The Goddess Who is of Black Colour</td>
              </tr>
              <tr>
                <td>187</td>
                <td>Sita</td>
                <td>Om Sitayai Namah</td>
                <td>The Goddess Who is of White Colour</td>
              </tr>
              <tr>
                <td>188</td>
                <td>Pita</td>
                <td>Om Pitayai Namah</td>
                <td>The Goddess Who is of Yellow Colour</td>
              </tr>
              <tr>
                <td>189</td>
                <td>Sarvavarna</td>
                <td>Om Sarvavarnayai Namah</td>
                <td>The Goddess Who is of All Colours</td>
              </tr>
              <tr>
                <td>190</td>
                <td>Nireeshwari</td>
                <td>Om Nireeshwaryai Namah</td>
                <td>The One Who does not have Any Other Goddess</td>
              </tr>
              <tr>
                <td>191</td>
                <td>Chakrika</td>
                <td>Om Chakrikayai Namah</td>
                <td>The Goddess Who is in Sri Chakra</td>
              </tr>
              <tr>
                <td>192</td>
                <td>Satya</td>
                <td>Om Satyayai Namah</td>
                <td>The Goddess Who is Truth</td>
              </tr>
              <tr>
                <td>193</td>
                <td>Vatuka</td>
                <td>Om Vatukayai Namah</td>
                <td>The Goddess Who is Always a Lass</td>
              </tr>
              <tr>
                <td>194</td>
                <td>Sthita</td>
                <td>Om Sthitayai Namah</td>
                <td>The Goddess Who is Stable</td>
              </tr>
              <tr>
                <td>195</td>
                <td>Taruni</td>
                <td>Om Taruniyai Namah</td>
                <td>The Goddess Who is a Lass</td>
              </tr>
              <tr>
                <td>196</td>
                <td>Vaaruni</td>
                <td>Om Vaaruniyai Namah</td>
                <td>The Goddess Who is the Power of Varuna</td>
              </tr>
              <tr>
                <td>197</td>
                <td>Nari</td>
                <td>Om Nariyai Namah</td>
                <td>The One Who is a Woman</td>
              </tr>
              <tr>
                <td>198</td>
                <td>Jyeshtha-devi</td>
                <td>Om JyeshthaDeviyai Namah</td>
                <td>The One Who is Elder Goddess</td>
              </tr>
              <tr>
                <td>199</td>
                <td>Sureshwari</td>
                <td>Om Sureshwaryai Namah</td>
                <td>The One Who is the Goddess of Devas</td>
              </tr>
              <tr>
                <td>200</td>
                <td>Vishwambhara</td>
                <td>Om Vishwambharayai Namah</td>
                <td>The Goddess Who Wears the Universe as Cloth</td>
              </tr>
              <tr>
                <td>201</td>
                <td>Dhara</td>
                <td>Om Dharayai Namah</td>
                <td>The Goddess Who is Earth</td>
              </tr>
              <tr>
                <td>202</td>
                <td>Kartri</td>
                <td>Om Kartriyai Namah</td>
                <td>The Goddess Who is the Doer</td>
              </tr>
              <tr>
                <td>203</td>
                <td>Galargala Vibhanjini</td>
                <td>Om GalargalaVibhanjinyai Namah</td>
                <td>The Goddess Who Breaks Problems</td>
              </tr>
              <tr>
                <td>204</td>
                <td>Sandhya</td>
                <td>Om Sandhyayai Namah</td>
                <td>The Goddess Who is Dawn, Dusk and Noon</td>
              </tr>
              <tr>
                <td>205</td>
                <td>Ratri</td>
                <td>Om Ratryai Namah</td>
                <td>The Goddess Who is Night</td>
              </tr>
              <tr>
                <td>206</td>
                <td>Diva</td>
                <td>Om Divayai Namah</td>
                <td>The Goddess Who is Day Time</td>
              </tr>
              <tr>
                <td>207</td>
                <td>Jyotsna</td>
                <td>Om Jyotsnayai Namah</td>
                <td>The Goddess Who is the Night Lit by Full Moon</td>
              </tr>
              <tr>
                <td>208</td>
                <td>Kala</td>
                <td>Om Kalayai Namah</td>
                <td>The Goddess Who is the Crescent</td>
              </tr>
              <tr>
                <td>209</td>
                <td>Kashtha</td>
                <td>Om Kashthayai Namah</td>
                <td>The Goddess Who is Quarter of the World</td>
              </tr>
              <tr>
                <td>210</td>
                <td>Nimeshika</td>
                <td>Om Nimeshikayai Namah</td>
                <td>The Goddess Who does Everything in a Nimisha</td>
              </tr>
              <tr>
                <td>211</td>
                <td>Urvi</td>
                <td>Om Urviyai Namah</td>
                <td>The Goddess Who is in the Form of Earth</td>
              </tr>
              <tr>
                <td>212</td>
                <td>Katyayani</td>
                <td>Om Katyayanyai Namah</td>
                <td>The Goddess Who is the Daughter of Sage Katyayana</td>
              </tr>
              <tr>
                <td>213</td>
                <td>Shubhra</td>
                <td>Om Shubhrayai Namah</td>
                <td>The Goddess Who is White and Clean</td>
              </tr>
              <tr>
                <td>214</td>
                <td>Samsararna-vatarini</td>
                <td>Om Samsararnavatarinyai Namah</td>
                <td>
                  The Goddess Who Makes Us Cross the Forest of Domestic Life
                </td>
              </tr>
              <tr>
                <td>215</td>
                <td>Kapilaa</td>
                <td>Om Kapilayai Namah</td>
                <td>The Goddess Who is the Wife of Sage Kapila</td>
              </tr>
              <tr>
                <td>216</td>
                <td>Kilika</td>
                <td>Om Kilikayai Namah</td>
                <td>The Goddess Who is the Axis of Everything</td>
              </tr>
              <tr>
                <td>217</td>
                <td>Ahsoka</td>
                <td>Om Ahsokayai Namah</td>
                <td>The Goddess Who is Never Sad</td>
              </tr>
              <tr>
                <td>218</td>
                <td>Mallika-navamalika</td>
                <td>Om MallikaNavamalikayai Namah</td>
                <td>The Goddess Who is Jasmine Flower</td>
              </tr>
              <tr>
                <td>219</td>
                <td>Devika</td>
                <td>Om Devikayai Namah</td>
                <td>The One Who is the Goddess with a Form of a Child</td>
              </tr>
              <tr>
                <td>220</td>
                <td>Nandika</td>
                <td>Om Nandikayai Namah</td>
                <td>The Goddess Who is the Daughter</td>
              </tr>
              <tr>
                <td>221</td>
                <td>Shanta</td>
                <td>Om Shantayai Namah</td>
                <td>The Goddess Who is Patient</td>
              </tr>
              <tr>
                <td>222</td>
                <td>Bhanjika</td>
                <td>Om Bhanjikayai Namah</td>
                <td>The Goddess Who Breaks</td>
              </tr>
              <tr>
                <td>223</td>
                <td>Bhayabhanjika</td>
                <td>Om Bhayabhanjikayai Namah</td>
                <td>The Goddess Who Breaks Fear</td>
              </tr>
              <tr>
                <td>224</td>
                <td>Kaushiki</td>
                <td>Om Kaushikayai Namah</td>
                <td>The Goddess Who Came Out of the Hair of Parvati</td>
              </tr>
              <tr>
                <td>225</td>
                <td>Vaidiki</td>
                <td>Om Vaidikyai Namah</td>
                <td>The Goddess Who is Vedic in Form</td>
              </tr>
              <tr>
                <td>226</td>
                <td>Sauri</td>
                <td>Om Sauryai Namah</td>
                <td>The Goddess Who is the Power of Sun</td>
              </tr>
              <tr>
                <td>227</td>
                <td>Roopadhika</td>
                <td>Om Roopadhikayai Namah</td>
                <td>The Goddess Who Transcends the Form</td>
              </tr>
              <tr>
                <td>228</td>
                <td>Atibha</td>
                <td>Om Atibhayai Namah</td>
                <td>The Goddess Who has Relatively More Light</td>
              </tr>
              <tr>
                <td>229</td>
                <td>Digvastra</td>
                <td>Om Digvastrayai Namah</td>
                <td>The Goddess Who Wears the Directions as Cloth</td>
              </tr>
              <tr>
                <td>230</td>
                <td>Navavastra</td>
                <td>Om Navavastrayai Namah</td>
                <td>The Goddess Who Wears New Cloths</td>
              </tr>
              <tr>
                <td>231</td>
                <td>Kanyaka</td>
                <td>Om Kanyakayai Namah</td>
                <td>The Goddess Who is An Unmarried Girl</td>
              </tr>
              <tr>
                <td>232</td>
                <td>Kamalodbhava</td>
                <td>Om Kamalodbhavayai Namah</td>
                <td>The Goddess Who Was Born Out of Lotus</td>
              </tr>
              <tr>
                <td>233</td>
                <td>Sri</td>
                <td>Om Sriyai Namah</td>
                <td>The One Who is Goddess Lakshmi</td>
              </tr>
              <tr>
                <td>234</td>
                <td>Saumyalakshana</td>
                <td>Om Saumyalakshanayai Namah</td>
                <td>The Goddess Who has Calm Look</td>
              </tr>
              <tr>
                <td>235</td>
                <td>Ateeta-Durga</td>
                <td>Om AteetaDurgayai Namah</td>
                <td>The Goddess Who is Unapproachable in the Fort</td>
              </tr>
              <tr>
                <td>236</td>
                <td>Sutra-prabodhika</td>
                <td>Om SutraPrabodhikayai Namah</td>
                <td>The Goddess Who Teaches Vedic Sutras</td>
              </tr>
              <tr>
                <td>237</td>
                <td>Shraddhaa</td>
                <td>Om Shraddhayai Namah</td>
                <td>The Goddess Who is Attentive</td>
              </tr>
              <tr>
                <td>238</td>
                <td>Medha</td>
                <td>Om Medhayai Namah</td>
                <td>The Goddess Who is the Intelligence</td>
              </tr>
              <tr>
                <td>239</td>
                <td>Kriti</td>
                <td>Om Krityai Namah</td>
                <td>The Goddess Who is the Composition</td>
              </tr>
              <tr>
                <td>240</td>
                <td>Pragya</td>
                <td>Om Pragyayai Namah</td>
                <td>The Goddess Who is the Conscience</td>
              </tr>
              <tr>
                <td>241</td>
                <td>Dharana</td>
                <td>Om Dharanayai Namah</td>
                <td>The Goddess Who is Understanding</td>
              </tr>
              <tr>
                <td>242</td>
                <td>Kanti</td>
                <td>Om Kantiyai Namah</td>
                <td>The Goddess Who is the Light</td>
              </tr>
              <tr>
                <td>243</td>
                <td>Shruti</td>
                <td>Om Shrutiyai Namah</td>
                <td>The Goddess Who is Vedas</td>
              </tr>
              <tr>
                <td>244</td>
                <td>Smriti</td>
                <td>Om Smritiyai Namah</td>
                <td>The Goddess Who is the Guide to Vedas</td>
              </tr>
              <tr>
                <td>245</td>
                <td>Dhriti</td>
                <td>Om Dhritiyai Namah</td>
                <td>The Goddess Who is the Personification of Courage</td>
              </tr>
              <tr>
                <td>246</td>
                <td>Dhanya</td>
                <td>Om Dhanyayai Namah</td>
                <td>The Goddess Who has All Sort of Wealth</td>
              </tr>
              <tr>
                <td>247</td>
                <td>Bhooti</td>
                <td>Om Bhootiayai Namah</td>
                <td>The Goddess Who is the Cause of All Wealth</td>
              </tr>
              <tr>
                <td>248</td>
                <td>Ishti</td>
                <td>Om Ishtiyai Namah</td>
                <td>The Goddess Who is the Fire Sacrifice</td>
              </tr>
              <tr>
                <td>249</td>
                <td>Manishini</td>
                <td>Om Manishiniyai Namah</td>
                <td>The Goddess Who Gives Wisdom</td>
              </tr>
              <tr>
                <td>250</td>
                <td>Virakti</td>
                <td>Om Viraktiyai Namah</td>
                <td>The Goddess Who is Detached</td>
              </tr>
              <tr>
                <td>251</td>
                <td>Vyapini</td>
                <td>Om Vyapiniyai Namah</td>
                <td>The Goddess Who is Spread Everywhere</td>
              </tr>
              <tr>
                <td>252</td>
                <td>Maya</td>
                <td>Om Mayayai Namah</td>
                <td>The Goddess Who is Illusion</td>
              </tr>
              <tr>
                <td>253</td>
                <td>Sarvamaya prabhanjani</td>
                <td>Om SarvamayaPrabhanjinyai Namah</td>
                <td>The Goddess Who Breaks All Illusion</td>
              </tr>
              <tr>
                <td>254</td>
                <td>Mahendri</td>
                <td>Om Mahendriyai Namah</td>
                <td>The Goddess Who is Greater Than Indra</td>
              </tr>
              <tr>
                <td>255</td>
                <td>Mantrini</td>
                <td>Om Mantriniyai Namah</td>
                <td>The One Who is the Goddess of All Chants</td>
              </tr>
              <tr>
                <td>256</td>
                <td>Simhi</td>
                <td>Om Simhiyai Namah</td>
                <td>The Goddess Who Assumes the Form of a Lion</td>
              </tr>
              <tr>
                <td>257</td>
                <td>Indrajala svaroopini</td>
                <td>Om IndrajalaSvaroopyai Namah</td>
                <td>The Goddess Who is the Personification of Magic</td>
              </tr>
              <tr>
                <td>258</td>
                <td>Avasthatraya-nirmukta</td>
                <td>Om AvasthatrayaNirmuktayai Namah</td>
                <td>The Goddess Who is not Subject to Three Activities</td>
              </tr>
              <tr>
                <td>259</td>
                <td>Gunatraya-vivarjita</td>
                <td>Om GunatrayaVivarjitaayai Namah</td>
                <td>The Goddess Who is Beyond Three Qualities</td>
              </tr>
              <tr>
                <td>260</td>
                <td>Eeshanatraya-nirmukta</td>
                <td>Om EeshanatrayaNirmuktayai Namah</td>
                <td>The Goddess Who does not Have the Three Desires</td>
              </tr>
              <tr>
                <td>261</td>
                <td>Sarvaroga-vivarjita</td>
                <td>Om SarvarogaVivarjitayai Namah</td>
                <td>The Goddess Who Cures All Diseases</td>
              </tr>
              <tr>
                <td>262</td>
                <td>Yogi-dhyananta-gamya</td>
                <td>Om YogiDhyanantaGamyayai Namah</td>
                <td>The Goddess Who is the Aim at the End of Yoga</td>
              </tr>
              <tr>
                <td>263</td>
                <td>Sarvaroga</td>
                <td>Om Sarvarogayai Namah</td>
                <td>The Goddess Who Cures All Diseases</td>
              </tr>
              <tr>
                <td>264</td>
                <td>Trayi-shikha-visheshagya</td>
                <td>Om TrayiShikhaVisheshagyayai Namah</td>
                <td>The Goddess Who is an Expert in Three Vedas</td>
              </tr>
              <tr>
                <td>265</td>
                <td>Vedanta-gyana-roopini</td>
                <td>Om VedantaGyanaRoopinyai Namah</td>
                <td>The Goddess Who is the Form of the Experts in Vedanta</td>
              </tr>
              <tr>
                <td>266</td>
                <td>Bharati</td>
                <td>Om Bharatyai Namah</td>
                <td>
                  The Goddess Who Gives Form of Letter and Words to Knowledge
                </td>
              </tr>
              <tr>
                <td>267</td>
                <td>Kamala</td>
                <td>Om Kamalayai Namah</td>
                <td>The Goddess Who is as Pretty as a Lotus</td>
              </tr>
              <tr>
                <td>268</td>
                <td>Bhasha</td>
                <td>Om Bhashayai Namah</td>
                <td>The Goddess Who is the Language</td>
              </tr>
              <tr>
                <td>269</td>
                <td>Padma</td>
                <td>Om Padmayai Namah</td>
                <td>The Goddess Who was Born Out of a Lotus</td>
              </tr>
              <tr>
                <td>270</td>
                <td>Padmavati</td>
                <td>Om Padmavatyyai Namah</td>
                <td>The Goddess Who Sits on a Lotus</td>
              </tr>
              <tr>
                <td>271</td>
                <td>Kriti</td>
                <td>Om Krityai Namah</td>
                <td>The Goddess Who is the Result of Action</td>
              </tr>
              <tr>
                <td>272</td>
                <td>Gautami</td>
                <td>Om Gautamiyai Namah</td>
                <td>The Goddess Who was Born as a Daughter of Sage Gautama</td>
              </tr>
              <tr>
                <td>273</td>
                <td>Gomati</td>
                <td>Om Gomatyai Namah</td>
                <td>The One Who is the River Gomati</td>
              </tr>
              <tr>
                <td>274</td>
                <td>Gauri</td>
                <td>Om Gauriyai Namah</td>
                <td>The One Who is the Goddess Parvati</td>
              </tr>
              <tr>
                <td>275</td>
                <td>Ishaani</td>
                <td>Om Ishaaniyai Namah</td>
                <td>The Goddess Who is Consort of Ishwara</td>
              </tr>
              <tr>
                <td>276</td>
                <td>Hamsavahini</td>
                <td>Om Hamsavahinyai Namah</td>
                <td>The Goddess Who Rides on a Swan</td>
              </tr>
              <tr>
                <td>277</td>
                <td>Narayani</td>
                <td>Om Narayaniyai Namah</td>
                <td>The Goddess Who is the Refuge of Humans</td>
              </tr>
              <tr>
                <td>278</td>
                <td>Prabhadhara</td>
                <td>Om Prabhadharanyai Namah</td>
                <td>The Goddess Who is the Continuous Shower of Light</td>
              </tr>
              <tr>
                <td>279</td>
                <td>Jahnavi</td>
                <td>Om Jahnaviyai Namah</td>
                <td>The Goddess Who is the Daughter of Sage Jahnu</td>
              </tr>
              <tr>
                <td>280</td>
                <td>Shankaratmaja</td>
                <td>Om Shankaratmajayai Namah</td>
                <td>The Goddess Who has Shiva as Son</td>
              </tr>
              <tr>
                <td>281</td>
                <td>Chitraghanta</td>
                <td>Om Chitraghantayai Namah</td>
                <td>The Goddess Who has Picturesque Neck</td>
              </tr>
              <tr>
                <td>282</td>
                <td>Sunanda</td>
                <td>Om Sunandayai Namah</td>
                <td>The Goddess Who is with Happiness</td>
              </tr>
              <tr>
                <td>283</td>
                <td>Sri</td>
                <td>Om Sriyai Namah</td>
                <td>The Goddess Who Gives All Type of Wealth</td>
              </tr>
              <tr>
                <td>284</td>
                <td>Manavi</td>
                <td>Om Manaviyai Namah</td>
                <td>The Goddess Who is Daughter of Manu</td>
              </tr>
              <tr>
                <td>285</td>
                <td>Manusambhava</td>
                <td>Om Manusambhavayai Namah</td>
                <td>The Goddess Who was Born to Manu</td>
              </tr>
              <tr>
                <td>286</td>
                <td>Stambhini</td>
                <td>Om Stambhiniyai Namah</td>
                <td>The Goddess Who is Very Stable</td>
              </tr>
              <tr>
                <td>287</td>
                <td>Kshobhini</td>
                <td>Om Kshobhiniyai Namah</td>
                <td>The Goddess Who Gets Agitated</td>
              </tr>
              <tr>
                <td>288</td>
                <td>Maari</td>
                <td>Om Maariyai Namah</td>
                <td>The Goddess Who Kills Asuras</td>
              </tr>
              <tr>
                <td>289</td>
                <td>Bhramini</td>
                <td>Om Bhraminiyai Namah</td>
                <td>The Goddess Who Makes the World Rotate</td>
              </tr>
              <tr>
                <td>290</td>
                <td>Shatrumarini</td>
                <td>Om Shatrumarinyai Namah</td>
                <td>The Goddess Who is the Killer of Her Enemies</td>
              </tr>
              <tr>
                <td>291</td>
                <td>Dweshini</td>
                <td>Om Dweshinyai Namah</td>
                <td>The Goddess Who is the Power Behind Hating</td>
              </tr>
              <tr>
                <td>292</td>
                <td>Veera</td>
                <td>Om Veerayai Namah</td>
                <td>The Goddess Who has Valour</td>
              </tr>
              <tr>
                <td>293</td>
                <td>Aghoraa</td>
                <td>Om Aghorayai Namah</td>
                <td>The Goddess Who is Not Horrible</td>
              </tr>
              <tr>
                <td>294</td>
                <td>Rudraroopini</td>
                <td>Om Rudraroopinyai Namah</td>
                <td>The Goddess Who has an Angry Form</td>
              </tr>
              <tr>
                <td>295</td>
                <td>Rudraikadashini</td>
                <td>Om Rudraikadashinyai Namah</td>
                <td>The Goddess Who is in the Form of Eleven Rudras</td>
              </tr>
              <tr>
                <td>296</td>
                <td>Punyaa</td>
                <td>Om Puniyayai Namah</td>
                <td>The Goddess Who Appreciates Good Deeds</td>
              </tr>
              <tr>
                <td>297</td>
                <td>Kalyani</td>
                <td>Om Kalyaniyai Namah</td>
                <td>The Goddess Who is Auspicious</td>
              </tr>
              <tr>
                <td>298</td>
                <td>Labhakarini</td>
                <td>Om Labhakarinyai Namah</td>
                <td>The Goddess Who Causes Profit</td>
              </tr>
              <tr>
                <td>299</td>
                <td>Devadurga</td>
                <td>Om Devadurgayai Namah</td>
                <td>The Durga in the State of Wakefulness</td>
              </tr>
              <tr>
                <td>300</td>
                <td>Maha Durga</td>
                <td>Om MahaDurgayai Namah</td>
                <td>The Durga Who is Sleeping</td>
              </tr>
              <tr>
                <td>301</td>
                <td>Swapnadurga</td>
                <td>Om Swapnadurgayai Namah</td>
                <td>The Goddess Who is in the Dream State</td>
              </tr>
              <tr>
                <td>302</td>
                <td>Ashtabhairavi</td>
                <td>Om Ashtabhairavyai Namah</td>
                <td>The Goddess Who is Eight Bhairavis</td>
              </tr>
              <tr>
                <td>303</td>
                <td>Suryachadragni-roopa</td>
                <td>Om SuryachadragniRoopayai Namah</td>
                <td>The Goddess Who has Sun, Moon, and Fire as eyes</td>
              </tr>
              <tr>
                <td>304</td>
                <td>Grahanakshatra roopini</td>
                <td>Om GrahanakshatraRoopinyai Namah</td>
                <td>The Goddess Who is the Form of Stars and Planets</td>
              </tr>
              <tr>
                <td>305</td>
                <td>Bindunada kalatita</td>
                <td>Om BindunadaKalatitayai Namah</td>
                <td>The Goddess Who is in the Form of Dot and Sound</td>
              </tr>
              <tr>
                <td>306</td>
                <td>Bindunada kalatmika</td>
                <td>Om BindunadaKalatmikayai Namah</td>
                <td>The Goddess Who is the Soul of Dot, Sound, and Crescent</td>
              </tr>
              <tr>
                <td>307</td>
                <td>Dashavayu jayakara</td>
                <td>Om DashavayuJayakarayai Namah</td>
                <td>The Goddess Who Wins as the Ten Vayus</td>
              </tr>
              <tr>
                <td>308</td>
                <td>Kala shodasha samyuta</td>
                <td>Om KalaShodashaSamyutayai Namah</td>
                <td>The Goddess Who is with Sixteen Crescents of the Moon</td>
              </tr>
              <tr>
                <td>309</td>
                <td>Kashyapi</td>
                <td>Om Kashyapiyai Namah</td>
                <td>The Goddess Who is the Daughter of Sage Kasyapa</td>
              </tr>
              <tr>
                <td>310</td>
                <td>Kamala</td>
                <td>Om Kamalayai Namah</td>
                <td>The Goddess of Lotus</td>
              </tr>
              <tr>
                <td>311</td>
                <td>Nadachakra nivasini</td>
                <td>Om NadachakraNivasinyai Namah</td>
                <td>The Goddess Who Lives in Srichakra as well as in Sound</td>
              </tr>
              <tr>
                <td>312</td>
                <td>Mridadhara</td>
                <td>Om Mridadharayai Namah</td>
                <td>The Goddess Who is the Foundation for Lord Shiva</td>
              </tr>
              <tr>
                <td>313</td>
                <td>Sthiraa</td>
                <td>Om Sthirayai Namah</td>
                <td>The Goddess Who is Permanent</td>
              </tr>
              <tr>
                <td>314</td>
                <td>Guhya</td>
                <td>Om Guhyayai Namah</td>
                <td>The Goddess Who is Secret</td>
              </tr>
              <tr>
                <td>315</td>
                <td>Maha</td>
                <td>Om Mahayai Namah</td>
                <td>The One Who is Like the Goddess</td>
              </tr>
              <tr>
                <td>316</td>
                <td>Chakraroopini</td>
                <td>Om Chakraroopinyai Namah</td>
                <td>The Goddess Who is the Form of Sri Chakra</td>
              </tr>
              <tr>
                <td>317</td>
                <td>Avidyaa</td>
                <td>Om Avidyayai Namah</td>
                <td>The Goddess Who is The Power Behind Ignorance</td>
              </tr>
              <tr>
                <td>318</td>
                <td>Sharvaree</td>
                <td>Om Sharvareeyai Namah</td>
                <td>The Goddess Who is the Form of Night</td>
              </tr>
              <tr>
                <td>319</td>
                <td>Bhunjaa</td>
                <td>Om Bhunjaayai Namah</td>
                <td>The Goddess Who has Undergone All Pleasures</td>
              </tr>
              <tr>
                <td>320</td>
                <td>Jambhasura nibarhini</td>
                <td>Om JambhasuraNibarhinyai Namah</td>
                <td>The Goddess Who Destroyed the Demon Jambhasura</td>
              </tr>
              <tr>
                <td>321</td>
                <td>Srikaya</td>
                <td>Om Srikayayai Namah</td>
                <td>The Goddess Who was Born as Wealth</td>
              </tr>
              <tr>
                <td>322</td>
                <td>Srikala</td>
                <td>Om Srikalayai Namah</td>
                <td>The Goddess Who Knows Auspicious Art Forms</td>
              </tr>
              <tr>
                <td>323</td>
                <td>Karma-nirmoola-karini</td>
                <td>Om KarmaNirmoolaKarininyai Namah</td>
                <td>The Goddess Who Destroys All Accumulated Sins</td>
              </tr>
              <tr>
                <td>324</td>
                <td>Aadilakshmi</td>
                <td>Om Aadilakshmyai Namah</td>
                <td>The Goddess Who is the Primeval Lakshmi</td>
              </tr>
              <tr>
                <td>325</td>
                <td>Gunaadharaa</td>
                <td>Om Gunaadharanyai Namah</td>
                <td>The Goddess Who is the Stream of Good Qualities</td>
              </tr>
              <tr>
                <td>326</td>
                <td>Panchabrahmathmika</td>
                <td>Om Panchabrahmathmikayai Namah</td>
                <td>The Goddess Who has the Five Gods within Herself</td>
              </tr>
              <tr>
                <td>327</td>
                <td>Paraa</td>
                <td>Om Parayai Namah</td>
                <td>The Goddess Who is Above Everything</td>
              </tr>
              <tr>
                <td>328</td>
                <td>Brahmamukhaavasaa</td>
                <td>Om Brahmamukhaavasaayai Namah</td>
                <td>
                  The Goddess Who is Saraswati Who Lives in the Face of Brahma
                </td>
              </tr>
              <tr>
                <td>329</td>
                <td>Sarvasampatti roopini</td>
                <td>Om SarvasampattiRoopinyai Namah</td>
                <td>The Goddess Who is the Form of All Wealth</td>
              </tr>
              <tr>
                <td>330</td>
                <td>Mritasanjeevini</td>
                <td>Om Mritasanjeevinyai Namah</td>
                <td>The Goddess Who Makes the Dead Alive</td>
              </tr>
              <tr>
                <td>331</td>
                <td>Maitree</td>
                <td>Om Maitreyai Namah</td>
                <td>The Goddess Who has Friendship</td>
              </tr>
              <tr>
                <td>332</td>
                <td>Kaamini</td>
                <td>Om Kaaminiyai Namah</td>
                <td>The Goddess Who has Passion</td>
              </tr>
              <tr>
                <td>333</td>
                <td>Kamavarjita</td>
                <td>Om Kamavarjitayai Namah</td>
                <td>The Goddess Who is Detached From Passion</td>
              </tr>
              <tr>
                <td>334</td>
                <td>Nirvana margada</td>
                <td>Om NirvanaMargadayai Namah</td>
                <td>The Goddess Who Shows the Way to Salvation</td>
              </tr>
              <tr>
                <td>335</td>
                <td>Hamsini</td>
                <td>Om Hamsinyai Namah</td>
                <td>The Goddess Who is in the State of Hamsa</td>
              </tr>
              <tr>
                <td>336</td>
                <td>Kashikaa</td>
                <td>Om Kashikayai Namah</td>
                <td>The Goddess Who is Luminous</td>
              </tr>
              <tr>
                <td>337</td>
                <td>Kshama</td>
                <td>Om Kshamayai Namah</td>
                <td>The Goddess Who is Patience</td>
              </tr>
              <tr>
                <td>338</td>
                <td>Saparya</td>
                <td>Om Saparyayai Namah</td>
                <td>The Goddess Who is Fit to be Worshipped</td>
              </tr>
              <tr>
                <td>339</td>
                <td>Gunini</td>
                <td>Om Guninyai Namah</td>
                <td>The Goddess Who is the Treasure of Good Qualities</td>
              </tr>
              <tr>
                <td>340</td>
                <td>Bhinna</td>
                <td>Om Bhinnayai Namah</td>
                <td>The Goddess Who is Different</td>
              </tr>
              <tr>
                <td>341</td>
                <td>Nirgunaa</td>
                <td>Om Nirgunaayai Namah</td>
                <td>The Goddess Who is Devoid of Any Characteristics</td>
              </tr>
              <tr>
                <td>342</td>
                <td>Akhandita</td>
                <td>Om Akhanditayai Namah</td>
                <td>The Goddess Who has not been Split</td>
              </tr>
              <tr>
                <td>343</td>
                <td>Shubha</td>
                <td>Om Shubhayai Namah</td>
                <td>The Goddess Who is Auspicious</td>
              </tr>
              <tr>
                <td>344</td>
                <td>Swamini</td>
                <td>Om Swaminyai Namah</td>
                <td>The Goddess Who is the Master</td>
              </tr>
              <tr>
                <td>345</td>
                <td>Vedini</td>
                <td>Om Vedinyai Namah</td>
                <td>The Goddess Who Should be Understood</td>
              </tr>
              <tr>
                <td>346</td>
                <td>Shakyaa</td>
                <td>Om Shakyaayai Namah</td>
                <td>The Goddess Who can be Understood</td>
              </tr>
              <tr>
                <td>347</td>
                <td>Shaambari</td>
                <td>Om Shaambaryai Namah</td>
                <td>The Goddess Who is the Great Illusion</td>
              </tr>
              <tr>
                <td>348</td>
                <td>Chakradharini</td>
                <td>Om Chakradharinyai Namah</td>
                <td>The Goddess Who Holds the Wheel</td>
              </tr>
              <tr>
                <td>349</td>
                <td>Dandini</td>
                <td>Om Dandininyai Namah</td>
                <td>The Goddess Who Punishes</td>
              </tr>
              <tr>
                <td>350</td>
                <td>Mundini</td>
                <td>Om Mundinyai Namah</td>
                <td>The Goddess Who Wears Garland of Cut Heads</td>
              </tr>
              <tr>
                <td>351</td>
                <td>Vyaghri</td>
                <td>Om Vyaghriyai Namah</td>
                <td>The Goddess Who is the Tigress</td>
              </tr>
              <tr>
                <td>352</td>
                <td>Shikhini</td>
                <td>Om Shikhinyai Namah</td>
                <td>The Goddess Who is the Peahen</td>
              </tr>
              <tr>
                <td>353</td>
                <td>Somasamhati</td>
                <td>Om Somasamhatiyai Namah</td>
                <td>The Goddess Who is the Sister of Moon</td>
              </tr>
              <tr>
                <td>354</td>
                <td>Chintamani</td>
                <td>Om Chintamaniyai Namah</td>
                <td>The Goddess Who Gives All that is Thought Off</td>
              </tr>
              <tr>
                <td>355</td>
                <td>Chidananda</td>
                <td>Om Chidanandayi Namah</td>
                <td>The Goddess Who is in the State of Divine Joy</td>
              </tr>
              <tr>
                <td>356</td>
                <td>Panchabana prabodhini</td>
                <td>Om PanchabanaPrabodhinyai Namah</td>
                <td>
                  The Goddess Who Makes God of Love with Five Flower Arrows Work
                </td>
              </tr>
              <tr>
                <td>357</td>
                <td>Banashreni</td>
                <td>Om Banashreniyai Namah</td>
                <td>The Goddess Who has a Sequence of Arrows</td>
              </tr>
              <tr>
                <td>358</td>
                <td>Sahasrakshi</td>
                <td>Om Sahasrakshyai Namah</td>
                <td>The Goddess Who has Thousand Eyes</td>
              </tr>
              <tr>
                <td>359</td>
                <td>Sahasra-bhuja-paduka</td>
                <td>Om SahasraBhujaPadukayai Namah</td>
                <td>The Goddess Who has Thousand Hands and Legs</td>
              </tr>
              <tr>
                <td>360</td>
                <td>Sandhyabali</td>
                <td>Om Sandhyabaliyai Namah</td>
                <td>The Goddess Who is Twilight Oblation</td>
              </tr>
              <tr>
                <td>361</td>
                <td>Trisandhyakhya</td>
                <td>Om Trisandhyakhyayai Namah</td>
                <td>The Goddess Who can be Understood</td>
              </tr>
              <tr>
                <td>362</td>
                <td>Brahmandamani bhushana</td>
                <td>Om BrahmandamaniBhushanayai Namah</td>
                <td>The Goddess Who is the Ornament for the Universe</td>
              </tr>
              <tr>
                <td>363</td>
                <td>Vasavi</td>
                <td>Om Vasaviyai Namah</td>
                <td>The Goddess Who is the Power of Indra</td>
              </tr>
              <tr>
                <td>364</td>
                <td>Vaarunisena</td>
                <td>Om Vaarunisenayai Namah</td>
                <td>The Goddess Who has a Dreadful Army</td>
              </tr>
              <tr>
                <td>365</td>
                <td>Kulika</td>
                <td>Om Kulikayai Namah</td>
                <td>The Goddess Who Belongs to a Good Lineage</td>
              </tr>
              <tr>
                <td>366</td>
                <td>Mantra-ranjini</td>
                <td>Om MantraRanjinyai Namah</td>
                <td>The Goddess Who Becomes Happy with Prayers (Mantras)</td>
              </tr>
              <tr>
                <td>367</td>
                <td>Jitaprana svaroopa</td>
                <td>Om JitapranaSvaroopyai Namah</td>
                <td>The Goddess Who has the Form Which has Won the Soul</td>
              </tr>
              <tr>
                <td>368</td>
                <td>Kanta</td>
                <td>Om Kantayai Namah</td>
                <td>The Goddess Who is Liked by Everyone</td>
              </tr>
              <tr>
                <td>369</td>
                <td>Kamyavaraprada</td>
                <td>Om Kamyavarapradayai Namah</td>
                <td>The Goddess Who Grants Desired Boons</td>
              </tr>
              <tr>
                <td>370</td>
                <td>Mantra brahmana vidyartha</td>
                <td>Om MantraBrahmanaVidyarthayai Namah</td>
                <td>The Goddess Who Would Like to Know the Brahma Mantra</td>
              </tr>
              <tr>
                <td>371</td>
                <td>Nadaroopa</td>
                <td>Om Nadaroopayai Namah</td>
                <td>The Goddess Who is the Form of Sound</td>
              </tr>
              <tr>
                <td>372</td>
                <td>Havishmati</td>
                <td>Om Havishmatyai Namah</td>
                <td>The Goddess Who Offers Offerings in Fire</td>
              </tr>
              <tr>
                <td>373</td>
                <td>Atharvani shruti</td>
                <td>Om AtharvaniShrutiyai Namah</td>
                <td>The Goddess Who is Atharva Veda</td>
              </tr>
              <tr>
                <td>374</td>
                <td>Shoonyaa</td>
                <td>Om Shoonayayai Namah</td>
                <td>The Goddess Who is Without Beginning or End</td>
              </tr>
              <tr>
                <td>375</td>
                <td>Kalpana varjita</td>
                <td>Om KalpanaVarjitayai Namah</td>
                <td>The Goddess Who Does Not have Any Expectation</td>
              </tr>
              <tr>
                <td>376</td>
                <td>Sattajati</td>
                <td>Om Sattajatayai Namah</td>
                <td>The Goddess Who Belongs to a Noble Family</td>
              </tr>
              <tr>
                <td>377</td>
                <td>Pramaa</td>
                <td>Om Pramaayai Namah</td>
                <td>
                  The Goddess Who can Estimate Devotees Through Her Intelligence
                </td>
              </tr>
              <tr>
                <td>378</td>
                <td>Ameyaa</td>
                <td>Om Ameyaayai Namah</td>
                <td>The Goddess Who does not Have Any Boundaries</td>
              </tr>
              <tr>
                <td>379</td>
                <td>Apramiti</td>
                <td>Om Apramitayai Namah</td>
                <td>The Goddess Who could be Known by Axioms of Vedas</td>
              </tr>
              <tr>
                <td>380</td>
                <td>Pranadaa</td>
                <td>Om Pranadayai Namah</td>
                <td>The Goddess Who Gives Life</td>
              </tr>
              <tr>
                <td>381</td>
                <td>Gati</td>
                <td>Om Gatiyai Namah</td>
                <td>The Goddess Who is the Destination</td>
              </tr>
              <tr>
                <td>382</td>
                <td>Aparnaa</td>
                <td>Om Aparnaayai Namah</td>
                <td>The Goddess Who does not Have Colours</td>
              </tr>
              <tr>
                <td>383</td>
                <td>Panchavarna</td>
                <td>Om Panchavarnayai Namah</td>
                <td>The Goddess Who has Five Colours</td>
              </tr>
              <tr>
                <td>384</td>
                <td>Sarvada</td>
                <td>Om Sarvadaayai Namah</td>
                <td>The Goddess Who Gives Everything Always</td>
              </tr>
              <tr>
                <td>385</td>
                <td>Bhuvaneshwari</td>
                <td>Om Bhuvaneshwaryai Namah</td>
                <td>The Goddess of the Universe</td>
              </tr>
              <tr>
                <td>386</td>
                <td>Trailokyamohini</td>
                <td>Om Trailokyamohinyai Namah</td>
                <td>The Goddess Who Bewitches the Three Worlds</td>
              </tr>
              <tr>
                <td>387</td>
                <td>Vidya</td>
                <td>Om Vidyayai Namah</td>
                <td>The Goddess Who is Knowledge</td>
              </tr>
              <tr>
                <td>388</td>
                <td>Sarvabharti</td>
                <td>Om Sarvabhartyai Namah</td>
                <td>The Goddess Who Administers Everyone</td>
              </tr>
              <tr>
                <td>389</td>
                <td>Ksharaa</td>
                <td>Om Ksharayai Namah</td>
                <td>The Goddess Who has a Form that can be Destroyed</td>
              </tr>
              <tr>
                <td>390</td>
                <td>Aksharaa</td>
                <td>Om Aksharayai Namah</td>
                <td>The Goddess Who cannot be Destroyed</td>
              </tr>
              <tr>
                <td>391</td>
                <td>Hiranyavarna</td>
                <td>Om Hiranyavarnayai Namah</td>
                <td>The Goddess Who is of the Colour of Gold</td>
              </tr>
              <tr>
                <td>392</td>
                <td>Harini</td>
                <td>Om Harinyai Namah</td>
                <td>The Goddess Who Destroys Sorrows</td>
              </tr>
              <tr>
                <td>393</td>
                <td>Sarvopadrava nashini</td>
                <td>Om SarvopadravaNashinyai Namah</td>
                <td>The Goddess Who Destroys All Painful Problems</td>
              </tr>
              <tr>
                <td>394</td>
                <td>Kaivalya padavi rekha</td>
                <td>Om KaivalyaPadaviRekhaayai Namah</td>
                <td>The Goddess Who is the Way to Attain Salvation</td>
              </tr>
              <tr>
                <td>395</td>
                <td>Surya mandala samsthita</td>
                <td>Om SuryaMandalaSamsthitayai Namah</td>
                <td>The Goddess Who is in the Solar System</td>
              </tr>
              <tr>
                <td>396</td>
                <td>Soma mandala madhyastha</td>
                <td>Om SomaMandalaMadhyasthayai Namah</td>
                <td>The Goddess Who is in the Middle of Moon</td>
              </tr>
              <tr>
                <td>397</td>
                <td>Vahni mandala samsthita</td>
                <td>Om VahniMandalaSamsthitayai Namah</td>
                <td>The Goddess Who is in Between Fire</td>
              </tr>
              <tr>
                <td>398</td>
                <td>Vayu mandala madhyastha</td>
                <td>Om VayuMandalaMadhyasthayai Namah</td>
                <td>The Goddess Who is in the Midst of Wind</td>
              </tr>
              <tr>
                <td>399</td>
                <td>Vyoma mandala samsthita</td>
                <td>Om VyomaMandalaSamsthitayai Namah</td>
                <td>The Goddess Who Stays in the Sky</td>
              </tr>
              <tr>
                <td>400</td>
                <td>Chakra madhyastha</td>
                <td>Om ChakraMadhyasthayai Namah</td>
                <td>The Goddess Who is in the Middle of Sri Chakra</td>
              </tr>
              <tr>
                <td>401</td>
                <td>Chakra marga pravartini</td>
                <td>Om ChakraMargaPravartinyai Namah</td>
                <td>
                  The Goddess Who Travels in the Path of Wheels of the Body
                </td>
              </tr>
              <tr>
                <td>402</td>
                <td>Kokila kula chakresha</td>
                <td>Om KokilaKulaChakreshayai Namah</td>
                <td>The One Who is the King of the Universe of Koels</td>
              </tr>
              <tr>
                <td>403</td>
                <td>Pakshati</td>
                <td>Om Pakshatiyai Namah</td>
                <td>The Beginning of the Phases of Moon</td>
              </tr>
              <tr>
                <td>404</td>
                <td>Panktipaavani</td>
                <td>Om Panktipaavanyai Namah</td>
                <td>The Goddess Who Purifies the World</td>
              </tr>
              <tr>
                <td>405</td>
                <td>Sarva siddhanta margastha</td>
                <td>Om SarvaSiddhantaMargasthayai Namah</td>
                <td>The Goddess Who is the Way to All Knowledge</td>
              </tr>
              <tr>
                <td>406</td>
                <td>Shadvarna</td>
                <td>Om Shadvarnayai Namah</td>
                <td>The Goddess Who has Six Colours</td>
              </tr>
              <tr>
                <td>407</td>
                <td>Varnavarjita</td>
                <td>Om Varnavarjitayai Namah</td>
                <td>The Goddess Who does not Need Any Boons</td>
              </tr>
              <tr>
                <td>408</td>
                <td>Shatarudrahara</td>
                <td>Om Shatarudraharaayai Namah</td>
                <td>The Goddess Who Cures Pain Caused by Arrows</td>
              </tr>
              <tr>
                <td>409</td>
                <td>Hantri</td>
                <td>Om Hantriyai Namah</td>
                <td>The Goddess Who Kills</td>
              </tr>
              <tr>
                <td>410</td>
                <td>Sarvasamhara kaarini</td>
                <td>Om SarvasamharaKaarinyai Namah</td>
                <td>The Goddess Who is the Cause of All Destruction</td>
              </tr>
              <tr>
                <td>411</td>
                <td>Purushaa</td>
                <td>Om Purushaayai Namah</td>
                <td>The Goddess Who is Ancient</td>
              </tr>
              <tr>
                <td>412</td>
                <td>Paurushee</td>
                <td>Om Paurushaayai Namah</td>
                <td>The Goddess Who is Masculine</td>
              </tr>
              <tr>
                <td>413</td>
                <td>Tushti</td>
                <td>Om Tushtiyai Namah</td>
                <td>The Goddess Who is Satisfaction</td>
              </tr>
              <tr>
                <td>414</td>
                <td>Sarvatantra prasootikaa</td>
                <td>Om SarvatantraPrasootikaayai Namah</td>
                <td>The Goddess Who Gave Birth to All Tantras</td>
              </tr>
              <tr>
                <td>415</td>
                <td>Ardhanareeswari</td>
                <td>Om Ardhanareeswaryai Namah</td>
                <td>The Goddess Who has Occupied Left Side of Shiva</td>
              </tr>
              <tr>
                <td>416</td>
                <td>Sarvavidya pradayini</td>
                <td>Om SarvavidyaPradayinyai Namah</td>
                <td>The Goddess Who Gives All Types of Knowledge</td>
              </tr>
              <tr>
                <td>417</td>
                <td>Bhargavi</td>
                <td>Om Bhargaviyai Namah</td>
                <td>The Goddess Who is Daughter of Sage Bhrigu</td>
              </tr>
              <tr>
                <td>418</td>
                <td>Bhujushividya</td>
                <td>Om Bhujushividyayai Namah</td>
                <td>
                  The Goddess Who is the Knowledge that Protects the Earth
                </td>
              </tr>
              <tr>
                <td>419</td>
                <td>Sarvopanishadaa sthitaa</td>
                <td>Om SarvopanishadaaSthitaayai Namah</td>
                <td>The Goddess Who is in All Upanishads</td>
              </tr>
              <tr>
                <td>420</td>
                <td>Vyomakesa</td>
                <td>Om Vyomakesaayai Namah</td>
                <td>The Goddess Who has Sky as Hair</td>
              </tr>
              <tr>
                <td>421</td>
                <td>Akhilapraana</td>
                <td>Om Akhilapraanayai Namah</td>
                <td>The Goddess Who is the Soul of All Beings</td>
              </tr>
              <tr>
                <td>422</td>
                <td>Panchakosha vilakshanaa</td>
                <td>Om PanchakoshaVilakshanayai Namah</td>
                <td>The Goddess Who is not Affected by the Five Koshas</td>
              </tr>
              <tr>
                <td>423</td>
                <td>Panchakoshatmika</td>
                <td>Om Panchakoshatmikayai Namah</td>
                <td>The Goddess Who Lives in the Five Koshas of the Body</td>
              </tr>
              <tr>
                <td>424</td>
                <td>Pratyak</td>
                <td>Om Pratyakyai Namah</td>
                <td>The Goddess Who can be Seen Inside</td>
              </tr>
              <tr>
                <td>425</td>
                <td>Pancha Brahmatmika</td>
                <td>Om PanchaBrahmatmikayai Namah</td>
                <td>The Goddess Who is the Form of Five Brahmas</td>
              </tr>
              <tr>
                <td>426</td>
                <td>Jagajjara janitri</td>
                <td>Om JagajjaraJanitryai Namah</td>
                <td>
                  The Goddess Who Creates the World When it is Affected by Old
                  Age
                </td>
              </tr>
              <tr>
                <td>427</td>
                <td>Panchakarma prasootika</td>
                <td>Om PanchakarmaPrasootikayai Namah</td>
                <td>The Goddess Who Gave Birth to Five Types of Actions</td>
              </tr>
              <tr>
                <td>428</td>
                <td>Aabharanakara</td>
                <td>Om Aabharanakaraayai Namah</td>
                <td>The Goddess Who Wears Ornaments</td>
              </tr>
              <tr>
                <td>429</td>
                <td>Sarvakamya sthita</td>
                <td>Om SarvakamyaSthitayai Namah</td>
                <td>The Goddess Who is in All Desires</td>
              </tr>
              <tr>
                <td>430</td>
                <td>Sthiti</td>
                <td>Om Sthitiyai Namah</td>
                <td>The Goddess Who is Stable</td>
              </tr>
              <tr>
                <td>431</td>
                <td>Ashtadasha chatushshashti peethikaa</td>
                <td>Om Peethikayai Namah</td>
                <td>The Goddess Who has Eighteen or Sixty-Four peethas</td>
              </tr>
              <tr>
                <td>432</td>
                <td>Vidyayutaa</td>
                <td>Om Vidyayutayai Namah</td>
                <td>The Goddess Who is with Knowledge</td>
              </tr>
              <tr>
                <td>433</td>
                <td>Aakarshani</td>
                <td>Om Aakarshaniyai Namah</td>
                <td>The Goddess Who Attracts</td>
              </tr>
              <tr>
                <td>434</td>
                <td>Shyama</td>
                <td>Om Shyamaayai Namah</td>
                <td>The Goddess Who is Black</td>
              </tr>
              <tr>
                <td>435</td>
                <td>Yakshini</td>
                <td>Om Yakshiniyai Namah</td>
                <td>The Goddess Who is a Yaksha woman</td>
              </tr>
              <tr>
                <td>436</td>
                <td>Kinnareswari</td>
                <td>Om Kinnareswaryai Namah</td>
                <td>The One Who is the Goddess of Kinnaras</td>
              </tr>
              <tr>
                <td>437</td>
                <td>Ketaki</td>
                <td>Om Ketakiyai Namah</td>
                <td>The Goddess Who Likes Screw Pine Flower</td>
              </tr>
              <tr>
                <td>438</td>
                <td>Mallika</td>
                <td>Om Mallikayai Namah</td>
                <td>The Goddess Who Likes Jasmine Flowers</td>
              </tr>
              <tr>
                <td>439</td>
                <td>Ashoka</td>
                <td>Om Ashokayai Namah</td>
                <td>The Goddess Who does not Have Sorrow</td>
              </tr>
              <tr>
                <td>440</td>
                <td>Varahi</td>
                <td>Om Varahiyai Namah</td>
                <td>The Goddess Who is the Power of Boar</td>
              </tr>
              <tr>
                <td>441</td>
                <td>Dharani</td>
                <td>Om Dharaniyai Namah</td>
                <td>The Goddess Who is Earth</td>
              </tr>
              <tr>
                <td>442</td>
                <td>Dhruvaa</td>
                <td>Om Dhruvaayai Namah</td>
                <td>The Goddess Who is Very Stable</td>
              </tr>
              <tr>
                <td>443</td>
                <td>Narasimhi</td>
                <td>Om Narasimhiayai Namah</td>
                <td>The Goddess Who is the Power of Man Lion</td>
              </tr>
              <tr>
                <td>444</td>
                <td>Mahograsya</td>
                <td>Om Mahograsyaayai Namah</td>
                <td>The Goddess Who Swallows Great Quantities</td>
              </tr>
              <tr>
                <td>445</td>
                <td>Bhaktanamarti nashini</td>
                <td>Om BhaktanamartiNashinyai Namah</td>
                <td>The Goddess Who Destroys the Sorrows of Devotees</td>
              </tr>
              <tr>
                <td>446</td>
                <td>Antarbalaa</td>
                <td>Om AntarBalaayai Namah</td>
                <td>The Goddess Who is Mentally Strong</td>
              </tr>
              <tr>
                <td>447</td>
                <td>Lakshmi</td>
                <td>Om Lakshmyai Namah</td>
                <td>The Goddess of Wealth</td>
              </tr>
              <tr>
                <td>448</td>
                <td>Jaramarana nashini</td>
                <td>Om JaramaranaNashinyai Namah</td>
                <td>The Goddess Who Prevents Old Age and Death</td>
              </tr>
              <tr>
                <td>449</td>
                <td>Sri Ranjitaa</td>
                <td>Om SriRanjitayai Namah</td>
                <td>The Goddess Who Shines Because of Wealth</td>
              </tr>
              <tr>
                <td>450</td>
                <td>Mahamaya</td>
                <td>Om Mahamayayai Namah</td>
                <td>The Goddess Who is the Great Illusion</td>
              </tr>
              <tr>
                <td>451</td>
                <td>Soma suryagni lochana</td>
                <td>Om SomaSuryagniLochanayai Namah</td>
                <td>The Goddess Who has Moon, Sun and Fire as Eyes</td>
              </tr>
              <tr>
                <td>452</td>
                <td>Aditi</td>
                <td>Om Aditiyai Namah</td>
                <td>The One Who is a Sky Goddess</td>
              </tr>
              <tr>
                <td>453</td>
                <td>Devamata</td>
                <td>Om Devamatayai Namah</td>
                <td>The Goddess Who is the Mother of All Devas</td>
              </tr>
              <tr>
                <td>454</td>
                <td>Ashtaputra</td>
                <td>Om Ashtaputrayai Namah</td>
                <td>The Goddess Who is Devaki with Eight Sons</td>
              </tr>
              <tr>
                <td>455</td>
                <td>Ashtayogini</td>
                <td>Om Ashtayoginyai Namah</td>
                <td>The Goddess Who is an Expert in Eight Yogas</td>
              </tr>
              <tr>
                <td>456</td>
                <td>Ashtaprakriti</td>
                <td>Om Ashtaprakritiyai Namah</td>
                <td>The Goddess Who has Eight Types of Nature</td>
              </tr>
              <tr>
                <td>457</td>
                <td>Ashtashta vibhrajadvikrita kriti</td>
                <td>Om AshtashtaVibhrajadvikritayai Namah</td>
                <td>The Goddess Who Shines in All Sixty-Four Arts</td>
              </tr>
              <tr>
                <td>458</td>
                <td>Durbiksha dhvamsini</td>
                <td>Om DurbikshaDhvamsinyai Namah</td>
                <td>The Goddess Who is Destroyer of Scarcity</td>
              </tr>
              <tr>
                <td>459</td>
                <td>Sita</td>
                <td>Om Sitayai Namah</td>
                <td>The Goddess Who is Sita, the Wife of Lord Rama</td>
              </tr>
              <tr>
                <td>460</td>
                <td>Satya</td>
                <td>Om Satyayai Namah</td>
                <td>The Goddess Who is the Truth</td>
              </tr>
              <tr>
                <td>461</td>
                <td>Rukmini</td>
                <td>Om Rukminiyai Namah</td>
                <td>The Goddess Who is Rukmini, the Wife of Lord Krishna</td>
              </tr>
              <tr>
                <td>462</td>
                <td>Khyathija</td>
                <td>Om Khyathijayai Namah</td>
                <td>The Goddess Who was Born with Fame</td>
              </tr>
              <tr>
                <td>463</td>
                <td>Bhargavi</td>
                <td>Om Bhargaviyai Namah</td>
                <td>The Goddess Who is the Daughter of Sage Bhrigu</td>
              </tr>
              <tr>
                <td>464</td>
                <td>Devayoni</td>
                <td>Om Devayonyai Namah</td>
                <td>The Goddess Who Gave Birth to All Devas</td>
              </tr>
              <tr>
                <td>465</td>
                <td>Thapaswini</td>
                <td>Om Thapaswinyai Namah</td>
                <td>The Goddess Who does Penance</td>
              </tr>
              <tr>
                <td>466</td>
                <td>Shakambhari</td>
                <td>Om Shakambharyai Namah</td>
                <td>
                  The Goddess Who Produced Several Vegetables From Her Body
                </td>
              </tr>
              <tr>
                <td>467</td>
                <td>Mahashona</td>
                <td>Om Mahashonayai Namah</td>
                <td>The Goddess Who is Dark Red</td>
              </tr>
              <tr>
                <td>468</td>
                <td>Garudopari samsthita</td>
                <td>Om GarudopariSamsthitayai Namah</td>
                <td>The Goddess Who is Situated Above Garuda</td>
              </tr>
              <tr>
                <td>469</td>
                <td>Simhaga</td>
                <td>Om Simhagayai Namah</td>
                <td>The Goddess Who Sits on the Lion</td>
              </tr>
              <tr>
                <td>470</td>
                <td>Vyagraga</td>
                <td>Om Vyagragayai Namah</td>
                <td>The Goddess Who Sits on a Tiger</td>
              </tr>
              <tr>
                <td>471</td>
                <td>Vayuga</td>
                <td>Om Vayugayai Namah</td>
                <td>The Goddess Who Makes Wind Move</td>
              </tr>
              <tr>
                <td>472</td>
                <td>Mahadriga</td>
                <td>Om Mahadrigayai Namah</td>
                <td>The Goddess Who Sits on a Big Mountain</td>
              </tr>
              <tr>
                <td>473</td>
                <td>Akaradi kshakaranta</td>
                <td>Om AkaradiKshakarantayai Namah</td>
                <td>The Goddess Who is Alphabets From Aa to Ksha</td>
              </tr>
              <tr>
                <td>474</td>
                <td>Sarvavidyadhi devata</td>
                <td>Om SarvavidyadhiDevatayai Namah</td>
                <td>The Goddess of All Learning</td>
              </tr>
              <tr>
                <td>475</td>
                <td>Mantra vyakhyana nipuna</td>
                <td>Om MantraVyakhyanaNipunayai Namah</td>
                <td>The Goddess Who is an Expert in Explaining Mantras</td>
              </tr>
              <tr>
                <td>476</td>
                <td>Jyotishshastraika lochana</td>
                <td>Om JyotishshastraikaLochanayai Namah</td>
                <td>The Goddess Who Makes Us See the Science of Astronomy</td>
              </tr>
              <tr>
                <td>477</td>
                <td>Ida pingalika madhya sushumna</td>
                <td>Om IdaPingalikaMadhyaSushumnayai Namah</td>
                <td>
                  The Goddess Who is the Sushumna Nadi Between Ida and Pingala
                </td>
              </tr>
              <tr>
                <td>478</td>
                <td>Granthi bhedini</td>
                <td>Om GranthiBhedinyai Namah</td>
                <td>The Goddess Who Breaks All Knots</td>
              </tr>
              <tr>
                <td>479</td>
                <td>Kalachakra shrayopeta</td>
                <td>Om KalachakraShrayopetayai Namah</td>
                <td>The Goddess Who Makes the Wheel of Time Work</td>
              </tr>
              <tr>
                <td>480</td>
                <td>Kalachakra svaroopini</td>
                <td>Om KalachakraSvaroopyai Namah</td>
                <td>The Goddess Who is the Wheel of Time</td>
              </tr>
              <tr>
                <td>481</td>
                <td>Vaisharadi</td>
                <td>Om Vaisharadyai Namah</td>
                <td>The Goddess Who is Expert in Every Knowledge</td>
              </tr>
              <tr>
                <td>482</td>
                <td>Matishreshtha</td>
                <td>Om Matishreshthayai Namah</td>
                <td>The Goddess Who is the Most Intelligent</td>
              </tr>
              <tr>
                <td>483</td>
                <td>Varishtaa</td>
                <td>Om Varishtayai Namah</td>
                <td>The Goddess Who is the Best</td>
              </tr>
              <tr>
                <td>484</td>
                <td>Sarvadeepika</td>
                <td>Om Sarvadeepikayai Namah</td>
                <td>The Goddess Who is the Light to Everyone</td>
              </tr>
              <tr>
                <td>485</td>
                <td>Vainayaki</td>
                <td>Om Vainayikayai Namah</td>
                <td>The Goddess Who is the Power of Lord Ganesha</td>
              </tr>
              <tr>
                <td>486</td>
                <td>Vararoha</td>
                <td>Om Vararohayai Namah</td>
                <td>The Goddess Who is the Ultimate Refuge</td>
              </tr>
              <tr>
                <td>487</td>
                <td>Shrenivelaa</td>
                <td>Om Shrenivelaayai Namah</td>
                <td>The Goddess Who is Surrounded by Vedas</td>
              </tr>
              <tr>
                <td>488</td>
                <td>Bahirvali</td>
                <td>Om Bahirvaliyai Namah</td>
                <td>The Goddess Who Gives Strength to the Body</td>
              </tr>
              <tr>
                <td>489</td>
                <td>Jambhni</td>
                <td>Om Jambhinyai Namah</td>
                <td>The Goddess Who is Very Proud of Her Beauty</td>
              </tr>
              <tr>
                <td>490</td>
                <td>Jrimbhini</td>
                <td>Om Jrimbhinyai Namah</td>
                <td>The Goddess Who is Spread All Over the World</td>
              </tr>
              <tr>
                <td>491</td>
                <td>Jrimbhakarini</td>
                <td>Om Jrimbhakarinyai Namah</td>
                <td>The Goddess Who is the Cause of Opening of Flower</td>
              </tr>
              <tr>
                <td>492</td>
                <td>Ganakarika</td>
                <td>Om Ganakarikayai Namah</td>
                <td>The Goddess Who was Responsible for Making Ganesha</td>
              </tr>
              <tr>
                <td>493</td>
                <td>Sharini</td>
                <td>Om Sharinyai Namah</td>
                <td>The Goddess Who has Arrows</td>
              </tr>
              <tr>
                <td>494</td>
                <td>Ananta</td>
                <td>Om Anantayai Namah</td>
                <td>The Goddess Who does not Have an End</td>
              </tr>
              <tr>
                <td>495</td>
                <td>Vararoha</td>
                <td>Om Vararohayai Namah</td>
                <td>The Goddess Who Treats All Diseases</td>
              </tr>
              <tr>
                <td>496</td>
                <td>Devaki</td>
                <td>Om Devakiyai Namah</td>
                <td>The Goddess Who is the Mother of Lord Krishna</td>
              </tr>
              <tr>
                <td>497</td>
                <td>Devasankaasha</td>
                <td>Om Devasankaashayai Namah</td>
                <td>The Goddess Who is Like the Devas</td>
              </tr>
              <tr>
                <td>498</td>
                <td>Vaaridhi</td>
                <td>Om Vaaridhiyai Namah</td>
                <td>The Goddess Who is the Ocean</td>
              </tr>
              <tr>
                <td>499</td>
                <td>Karunakara</td>
                <td>Om Karunakarayai Namah</td>
                <td>The Goddess Who is the Form of Mercy</td>
              </tr>
              <tr>
                <td>500</td>
                <td>Sharvari</td>
                <td>Om Sharvaryai Namah</td>
                <td>The Goddess Who Removes Darkness from People</td>
              </tr>
              <tr>
                <td>501</td>
                <td>Sarva sampanna</td>
                <td>Om SarvaSampannayai Namah</td>
                <td>The Goddess Who has Every Sort of Wealth</td>
              </tr>
              <tr>
                <td>502</td>
                <td>Sarvapaapa prabhanjani</td>
                <td>Om SarvapaapaPrabhanjinyai Namah</td>
                <td>The Goddess Who Breaks All Sort of Sins</td>
              </tr>
              <tr>
                <td>503</td>
                <td>Ekamatra</td>
                <td>Om Ekamatrayai Namah</td>
                <td>The Goddess Who is One Syllable-OM (Waking Up State)</td>
              </tr>
              <tr>
                <td>504</td>
                <td>Dvimatra</td>
                <td>Om Dvimatrayai Namah</td>
                <td>
                  The Goddess Who is Two 'OM's, One After Another (Dream State)
                </td>
              </tr>
              <tr>
                <td>505</td>
                <td>Trimatra</td>
                <td>Om Trimatrayai Namah</td>
                <td>The Goddess Who is Three Syllables (Sleep State)</td>
              </tr>
              <tr>
                <td>506</td>
                <td>Aparaa</td>
                <td>Om Aparaayai Namah</td>
                <td>The Goddess Who is Outside There (Turiya State)</td>
              </tr>
              <tr>
                <td>507</td>
                <td>Ardhamatra</td>
                <td>Om Ardhamatrayai Namah</td>
                <td>The Goddess Who is Half Syllable (Anusvara)</td>
              </tr>
              <tr>
                <td>508</td>
                <td>Sukshmaa</td>
                <td>Om Sukshmayai Namah</td>
                <td>The Goddess Who has Micro Form</td>
              </tr>
              <tr>
                <td>509</td>
                <td>Sukshmaartharthaparaa</td>
                <td>Om Sukshmaartharthaparaayai Namah</td>
                <td>The Goddess Who is Micro in Micro</td>
              </tr>
              <tr>
                <td>510</td>
                <td>Aparaa</td>
                <td>Om Aparaayai Namah</td>
                <td>The Goddess Who is Incomparable</td>
              </tr>
              <tr>
                <td>511</td>
                <td>Ekaveera</td>
                <td>Om Ekaveerayai Namah</td>
                <td>The Goddess Who is Alone Valorous</td>
              </tr>
              <tr>
                <td>512</td>
                <td>Viseshakhyaa</td>
                <td>Om Viseshakhyaayai Namah</td>
                <td>The Goddess Who has a Special Activity</td>
              </tr>
              <tr>
                <td>513</td>
                <td>Shashthi</td>
                <td>Om Shashthiyai Namah</td>
                <td>The Goddess Who is Mahalakshmi with Six Forms</td>
              </tr>
              <tr>
                <td>514</td>
                <td>Manasvini</td>
                <td>Om Manasvinyai Namah</td>
                <td>The Goddess Who is in the Mind of Everyone</td>
              </tr>
              <tr>
                <td>515</td>
                <td>Naishkarmya</td>
                <td>Om Naishkarmyayi Namah</td>
                <td>The Goddess Who does not Do Any Action</td>
              </tr>
              <tr>
                <td>516</td>
                <td>Nishkalaloka</td>
                <td>Om Nishkalalokayi Namah</td>
                <td>The Goddess Who cannot be Found Fault by People</td>
              </tr>
              <tr>
                <td>517</td>
                <td>Gyana karmadhika</td>
                <td>Om GyanaKarmadhikayai Namah</td>
                <td>The Goddess Who can be Realized by Gyana</td>
              </tr>
              <tr>
                <td>518</td>
                <td>Gunaa</td>
                <td>Om Gunayai Namah</td>
                <td>The Goddess Who has All Characters</td>
              </tr>
              <tr>
                <td>519</td>
                <td>Sabandhvananda sandohaa</td>
                <td>Om SabandhvanandaSandohaayai Namah</td>
                <td>
                  The Goddess Who Gives Happiness to People and Stays with Them
                </td>
              </tr>
              <tr>
                <td>520</td>
                <td>Vyomakara</td>
                <td>Om Vyomakarayai Namah</td>
                <td>The Goddess Who is in the Form of Sky</td>
              </tr>
              <tr>
                <td>521</td>
                <td>Niroopita</td>
                <td>Om Niroopitayai Namah</td>
                <td>The Goddess Whose Form cannot be Described</td>
              </tr>
              <tr>
                <td>522</td>
                <td>Gadyapadyatmika</td>
                <td>Om Gadyapadyatmikayai Namah</td>
                <td>The Goddess Who is the Soul of Prose and Poem</td>
              </tr>
              <tr>
                <td>523</td>
                <td>Sarvalankara samyuta</td>
                <td>Om SarvalankaraSamyutayai Namah</td>
                <td>The Goddess Who is Well Made Up with All Ornaments</td>
              </tr>
              <tr>
                <td>524</td>
                <td>Sadhubandha padanyasa</td>
                <td>Om SadhubandhaPadanyasayai Namah</td>
                <td>The Goddess Who is with Good People and Guides Them</td>
              </tr>
              <tr>
                <td>525</td>
                <td>Sarvauka</td>
                <td>Om Sarvaukayai Namah</td>
                <td>The Goddess Who is the Home of Everything</td>
              </tr>
              <tr>
                <td>526</td>
                <td>Ghatikavali</td>
                <td>Om Ghatikavalyai Namah</td>
                <td>The Goddess Who Measures Time</td>
              </tr>
              <tr>
                <td>527</td>
                <td>Shatkarmi</td>
                <td>Om Shatkarmyai Namah</td>
                <td>
                  The Goddess Who does Six Acts viz Teaching, Learning,
                  Sacrificing, Requesting, Giving, and Taking
                </td>
              </tr>
              <tr>
                <td>528</td>
                <td>Karkashakara</td>
                <td>Om Karkashakarayai Namah</td>
                <td>The Goddess Who is Like Stone Towards Asuras</td>
              </tr>
              <tr>
                <td>529</td>
                <td>Sarvakarma vivarjita</td>
                <td>Om SarvakarmaVivarjitayai Namah</td>
                <td>The Goddess Who has no Need to do Karmas</td>
              </tr>
              <tr>
                <td>530</td>
                <td>Adityavarna</td>
                <td>Om Adityavarnayai Namah</td>
                <td>The Goddess Who is Red Colored Like the Sun</td>
              </tr>
              <tr>
                <td>531</td>
                <td>Aparna</td>
                <td>Om Aparnayai Namah</td>
                <td>The Goddess Who did not Eat Even Leaves</td>
              </tr>
              <tr>
                <td>532</td>
                <td>Kamini</td>
                <td>Om Kaminyai Namah</td>
                <td>The Goddess Who is the Lover</td>
              </tr>
              <tr>
                <td>533</td>
                <td>Vararoopini</td>
                <td>Om Vararoopinyai Namah</td>
                <td>The Goddess Who has the Chosen Form</td>
              </tr>
              <tr>
                <td>534</td>
                <td>Brahmaani</td>
                <td>Om Brahmaanyai Namah</td>
                <td>The Goddess Who is the Power of Lord Brahma</td>
              </tr>
              <tr>
                <td>535</td>
                <td>Brahma santana</td>
                <td>Om BrahmaSantanayai Namah</td>
                <td>The Goddess Whose Son is Brahma</td>
              </tr>
              <tr>
                <td>536</td>
                <td>Vedavagi</td>
                <td>Om Vedavagiyai Namah</td>
                <td>The Goddess Who is Praised by Vedic Words</td>
              </tr>
              <tr>
                <td>537</td>
                <td>Ishwari</td>
                <td>Om Ishwaryai Namah</td>
                <td>The Goddess Who is the Consort of Ishwara</td>
              </tr>
              <tr>
                <td>538</td>
                <td>Purana nyayamimamsa dharmashastraagama shrutaa</td>
                <td>Om PurananyayaShrutayai Namah</td>
                <td>
                  The Goddess Who is Described in Puranas, Nyaya, Mimamsa,
                  Dharma Shastras, and Agamas
                </td>
              </tr>
              <tr>
                <td>539</td>
                <td>Sadyovedavati</td>
                <td>Om Sadyovedavatayai Namah</td>
                <td>The Goddess Who Knows Vedas</td>
              </tr>
              <tr>
                <td>540</td>
                <td>Sarvaa</td>
                <td>Om Sarvaayai Namah</td>
                <td>The Goddess Who is Everywhere</td>
              </tr>
              <tr>
                <td>541</td>
                <td>Hamsi</td>
                <td>Om Hamsyai Namah</td>
                <td>The Goddess Who is in the Form of a Swan</td>
              </tr>
              <tr>
                <td>542</td>
                <td>Vidyadhidevata</td>
                <td>Om Vidyadhidevatayai Namah</td>
                <td>The One Who is the Goddess of Learning</td>
              </tr>
              <tr>
                <td>543</td>
                <td>Vishveshwari</td>
                <td>Om Vishweshwaryai Namah</td>
                <td>The One Who is the Goddess of the Universe</td>
              </tr>
              <tr>
                <td>544</td>
                <td>Jagaddhatri</td>
                <td>Om Jagaddhatryai Namah</td>
                <td>The Goddess Who is the Mother of the Universe</td>
              </tr>
              <tr>
                <td>545</td>
                <td>Vishwanirmana karini</td>
                <td>Om VishwanirmanaKarininyai Namah</td>
                <td>The Goddess Who was the Cause of Creating the World</td>
              </tr>
              <tr>
                <td>546</td>
                <td>Vaidiki</td>
                <td>Om Vaidikyai Namah</td>
                <td>The Goddess Who is in the Form of Vedas</td>
              </tr>
              <tr>
                <td>547</td>
                <td>Vedaroopa</td>
                <td>Om Vedaroopayai Namah</td>
                <td>The Goddess Who is the Personification of Vedas</td>
              </tr>
              <tr>
                <td>548</td>
                <td>Kalaroopini</td>
                <td>Om Kalaroopinyai Namah</td>
                <td>The Goddess Who is the Personification of Time</td>
              </tr>
              <tr>
                <td>549</td>
                <td>Narayani</td>
                <td>Om Narayaniyai Namah</td>
                <td>The Goddess Who is the Power of Lord Narayana</td>
              </tr>
              <tr>
                <td>550</td>
                <td>Sarvatattva pravartini</td>
                <td>Om SarvatattvaPravartinyai Namah</td>
                <td>The Goddess Who Makes All Principles Work</td>
              </tr>
              <tr>
                <td>551</td>
                <td>Hiranya varna roopa</td>
                <td>Om HiranyavarnaRoopayai Namah</td>
                <td>The Goddess Who has a Golden-Colored Form</td>
              </tr>
              <tr>
                <td>552</td>
                <td>Hiranyapada sambhava</td>
                <td>Om HiranyapadaSambhavayai Namah</td>
                <td>The Goddess Who is the Form of Virat Purusha</td>
              </tr>
              <tr>
                <td>553</td>
                <td>Kaivalyapadavi</td>
                <td>Om Kaivalyapadaviyai Namah</td>
                <td>The Goddess Who Leads You to Oneness with God</td>
              </tr>
              <tr>
                <td>554</td>
                <td>Punyaa</td>
                <td>Om Puniyayai Namah</td>
                <td>The Goddess Who is Auspicious Deeds</td>
              </tr>
              <tr>
                <td>555</td>
                <td>Kaivalyagyana lakshitaa</td>
                <td>Om KaivalyagyanaLakshitayai Namah</td>
                <td>
                  The Goddess Who is Known by People Who Try to Become One with
                  God
                </td>
              </tr>
              <tr>
                <td>556</td>
                <td>Brahma sampatti roopa</td>
                <td>Om BrahmaSampattiRoopayai Namah</td>
                <td>The Goddess Who is the Wealth of Brahma</td>
              </tr>
              <tr>
                <td>557</td>
                <td>Brahma sampatti karini</td>
                <td>Om BrahmaSampattiKarininyai Namah</td>
                <td>The Goddess Who is the Cause of Wealth of Brahma</td>
              </tr>
              <tr>
                <td>558</td>
                <td>Vaaruni</td>
                <td>Om Vaaruniyai Namah</td>
                <td>The Goddess Who is the Power of Varuna</td>
              </tr>
              <tr>
                <td>559</td>
                <td>Varunaradhyaa</td>
                <td>Om Varunaradhyayai Namah</td>
                <td>
                  The Goddess Who is Worshipped by the Son of Varuna – Sage
                  Bhrigu
                </td>
              </tr>
              <tr>
                <td>560</td>
                <td>Sarvakarma pravartini</td>
                <td>Om SarvakarmaPravartinyai Namah</td>
                <td>The Goddess Who Makes Us do All Actions</td>
              </tr>
              <tr>
                <td>561</td>
                <td>Ekaksharapara</td>
                <td>Om Ekaksharaparaayai Namah</td>
                <td>The Goddess Who is Indicated by OM</td>
              </tr>
              <tr>
                <td>562</td>
                <td>Yukta</td>
                <td>Om Yuktayai Namah</td>
                <td>The Goddess Who is in Alphabets</td>
              </tr>
              <tr>
                <td>563</td>
                <td>Sarva daridrya bhanjini</td>
                <td>Om SarvaDaridryaBhanjinyai Namah</td>
                <td>The Goddess Who Breaks All Types of Poverty</td>
              </tr>
              <tr>
                <td>564</td>
                <td>Pashankushanvitaa</td>
                <td>Om Pashankushanvitayai Namah</td>
                <td>The Goddess Who Holds the Rope and the Goad</td>
              </tr>
              <tr>
                <td>565</td>
                <td>Divya</td>
                <td>Om Divyayai Namah</td>
                <td>The Goddess Who is Divine</td>
              </tr>
              <tr>
                <td>566</td>
                <td>Veenavyakhyaksha sutrabhrit</td>
                <td>Om VeenavyakhyakshaSutrabhritayai Namah</td>
                <td>The Goddess Who Holds Veena, Book, and the Rosary</td>
              </tr>
              <tr>
                <td>567</td>
                <td>Ekamoorti</td>
                <td>Om Ekamoortyai Namah</td>
                <td>The Goddess Who has One Form</td>
              </tr>
              <tr>
                <td>568</td>
                <td>Trayimoorti</td>
                <td>Om Trayimoortyai Namah</td>
                <td>
                  The Goddess Who has Three Forms of Lakshmi, Parvati, and
                  Saraswati
                </td>
              </tr>
              <tr>
                <td>569</td>
                <td>Madhukaitabha bhanjini</td>
                <td>Om MadhukaitabhaBhanjinyai Namah</td>
                <td>The Goddess Who Killed Madhu and Kaitabha</td>
              </tr>
              <tr>
                <td>570</td>
                <td>Sankhyaa</td>
                <td>Om Sankhyaayai Namah</td>
                <td>The Goddess Who is the Form of Numerals</td>
              </tr>
              <tr>
                <td>571</td>
                <td>Sankhyavati</td>
                <td>Om Sankhyavatayai Namah</td>
                <td>The Goddess Who is Described by Numerals</td>
              </tr>
              <tr>
                <td>572</td>
                <td>Jwalaa</td>
                <td>Om Jwalaayai Namah</td>
                <td>The Goddess Who is the Flame</td>
              </tr>
              <tr>
                <td>573</td>
                <td>Jwalanti</td>
                <td>Om Jwalantyai Namah</td>
                <td>The Goddess Who Shines</td>
              </tr>
              <tr>
                <td>574</td>
                <td>Kamaroopini</td>
                <td>Om Kamaroopinyai Namah</td>
                <td>The Goddess Who can Take Any Form She Likes</td>
              </tr>
              <tr>
                <td>575</td>
                <td>Jagrati</td>
                <td>Om Jagratyai Namah</td>
                <td>The Goddess Who is Always Awake</td>
              </tr>
              <tr>
                <td>576</td>
                <td>Sarvasampatti</td>
                <td>Om Sarvasampattiyai Namah</td>
                <td>The Goddess Who is All Types of Wealth</td>
              </tr>
              <tr>
                <td>577</td>
                <td>Sushupta</td>
                <td>Om Sushuptayai Namah</td>
                <td>The Goddess Who is in Deep Sleep</td>
              </tr>
              <tr>
                <td>578</td>
                <td>Sveshta dayini</td>
                <td>Om SveshtaDayinyai Namah</td>
                <td>The Goddess Who Fulfills One's Desires</td>
              </tr>
              <tr>
                <td>579</td>
                <td>Kapalini</td>
                <td>Om Kapalinyai Namah</td>
                <td>The Goddess Who Holds a Skull</td>
              </tr>
              <tr>
                <td>580</td>
                <td>Mahadamshtraa</td>
                <td>Om Mahadamshtrayai Namah</td>
                <td>The Goddess Who has Big Teeth</td>
              </tr>
              <tr>
                <td>581</td>
                <td>Bhrukuti kutilananaa</td>
                <td>Om BhrukutiKutilananyai Namah</td>
                <td>The Goddess Who has Bent and Dense Eyebrows</td>
              </tr>
              <tr>
                <td>582</td>
                <td>Sarva vasa</td>
                <td>Om SarvaVasayai Namah</td>
                <td>The Goddess Who Lives in Everything</td>
              </tr>
              <tr>
                <td>583</td>
                <td>Suvasa</td>
                <td>Om Suvasayai Namah</td>
                <td>The Goddess Who Lives with Good People</td>
              </tr>
              <tr>
                <td>584</td>
                <td>Brihati</td>
                <td>Om Brihatyai Namah</td>
                <td>The Goddess Who has a Macro Form</td>
              </tr>
              <tr>
                <td>585</td>
                <td>Ashti</td>
                <td>Om Ashtyai Namah</td>
                <td>The Goddess Who has Eight Forms</td>
              </tr>
              <tr>
                <td>586</td>
                <td>Shakvari</td>
                <td>Om Shakvaryai Namah</td>
                <td>The Goddess Who Rides on the Bull</td>
              </tr>
              <tr>
                <td>587</td>
                <td>Chandhogana pratikasha</td>
                <td>Om ChandhoganaPratikashayai Namah</td>
                <td>The Goddess Who is Merged with the Vedas</td>
              </tr>
              <tr>
                <td>588</td>
                <td>Kalmashi</td>
                <td>Om Kalmashyai Namah</td>
                <td>The Goddess Who has Several Colours</td>
              </tr>
              <tr>
                <td>589</td>
                <td>Karunatmika</td>
                <td>Om Karunatmikayai Namah</td>
                <td>The Goddess Who is Merciful</td>
              </tr>
              <tr>
                <td>590</td>
                <td>Chakshushmati</td>
                <td>Om Chakshushmatyai Namah</td>
                <td>The Goddess Who is the Eye Sight</td>
              </tr>
              <tr>
                <td>591</td>
                <td>Mahaghosha</td>
                <td>Om Mahaghoshayai Namah</td>
                <td>The Goddess Who is the Chanting of Vedas</td>
              </tr>
              <tr>
                <td>592</td>
                <td>Khangacharmadharaa</td>
                <td>Om Khangacharmadharayai Namah</td>
                <td>The Goddess Who Wears a Sword and a Shield</td>
              </tr>
              <tr>
                <td>593</td>
                <td>Ashani</td>
                <td>Om Ashanyai Namah</td>
                <td>The Goddess Who is the Vajrayudha of Indra</td>
              </tr>
              <tr>
                <td>594</td>
                <td>Shilpa vaichitrya vidyotaa</td>
                <td>Om ShilpaVaichitryaVidyotayai Namah</td>
                <td>The Goddess Who is the Knowledge of Sculpture Making</td>
              </tr>
              <tr>
                <td>595</td>
                <td>Sarvato bhadra vasini</td>
                <td>Om SarvatoBhadraVasinyai Namah</td>
                <td>The Goddess Who is Safe in All Places</td>
              </tr>
              <tr>
                <td>596</td>
                <td>Achintya lakhshanaa kara</td>
                <td>Om AchintyaLakshanaaKarayai Namah</td>
                <td>The Goddess Who has Unimaginable Good Properties</td>
              </tr>
              <tr>
                <td>597</td>
                <td>Sutra bhashya nibandhanaa</td>
                <td>Om SutraBhashyaNibandhanayai Namah</td>
                <td>
                  The Goddess Who is in the Form of People Writing Explanations
                  to Vedas
                </td>
              </tr>
              <tr>
                <td>598</td>
                <td>Sarvavedanta sampatti</td>
                <td>Om SarvavedantaSampattiyai Namah</td>
                <td>The Goddess Who is the Import of All Vedas</td>
              </tr>
              <tr>
                <td>599</td>
                <td>Sarva shastrartha matrukaa</td>
                <td>Om SarvaShastrarthaMatrukayai Namah</td>
                <td>The Goddess Who is the Model Meaning of All Shastras</td>
              </tr>
              <tr>
                <td>600</td>
                <td>Aakaradikshakaranta sarvavarna kritasthalaa</td>
                <td>Om SarvavarnaKritasthalayai Namah</td>
                <td>
                  The Goddess Who is the Form of All Alphabets from Aa to Ksha
                </td>
              </tr>
              <tr>
                <td>601</td>
                <td>Sarva Lakshmi</td>
                <td>Om SarvaLakshmyai Namah</td>
                <td>The Goddess Who is All Forms of Lakshmi</td>
              </tr>
              <tr>
                <td>602</td>
                <td>Sadananda</td>
                <td>Om Sadanandayai Namah</td>
                <td>The Goddess Who is Always Happy</td>
              </tr>
              <tr>
                <td>603</td>
                <td>Saravidya</td>
                <td>Om Saravidyayai Namah</td>
                <td>The Goddess Who is the Essence of Wisdom</td>
              </tr>
              <tr>
                <td>604</td>
                <td>Sada Shivaa</td>
                <td>Om SadaShivayai Namah</td>
                <td>The Goddess Who is the Consort of Lord Sadashiva</td>
              </tr>
              <tr>
                <td>605</td>
                <td>Sarvagyaa</td>
                <td>Om Sarvagyaayai Namah</td>
                <td>The Goddess Who Knows Everything</td>
              </tr>
              <tr>
                <td>606</td>
                <td>Sarva Shakti</td>
                <td>Om SarvaShaktyai Namah</td>
                <td>The Goddess Who is All Powers</td>
              </tr>
              <tr>
                <td>607</td>
                <td>Khechariroopa</td>
                <td>Om Khechariroopayai Namah</td>
                <td>The Goddess Who is in the Form of All Beings Who Fly</td>
              </tr>
              <tr>
                <td>608</td>
                <td>Uchchitaa</td>
                <td>Om Uchchitaayai Namah</td>
                <td>The Goddess Who is Great</td>
              </tr>
              <tr>
                <td>609</td>
                <td>Animadi gunopetaa</td>
                <td>Om AnimadiGunopetayai Namah</td>
                <td>
                  The Goddess Who is Surrounded by Occult Powers Like Anima
                </td>
              </tr>
              <tr>
                <td>610</td>
                <td>Paraa</td>
                <td>Om Paraayai Namah</td>
                <td>The Goddess Who is Divine</td>
              </tr>
              <tr>
                <td>611</td>
                <td>Kashtha</td>
                <td>Om Kashthayai Namah</td>
                <td>The Goddess Who is at the End</td>
              </tr>
              <tr>
                <td>612</td>
                <td>Paraagati</td>
                <td>Om Paraagatiyai Namah</td>
                <td>The Goddess Who is the Divine Destination</td>
              </tr>
              <tr>
                <td>613</td>
                <td>Hamsayukta vimanasthaa</td>
                <td>Om HamsayuktaVimanasthayai Namah</td>
                <td>The Goddess Who Drives a Chariot Drawn by Swans</td>
              </tr>
              <tr>
                <td>614</td>
                <td>Hamsaroodha</td>
                <td>Om Hamsaroodhayai Namah</td>
                <td>The Goddess Who Travels on a Swan</td>
              </tr>
              <tr>
                <td>615</td>
                <td>Shashiprabhaa</td>
                <td>Om Shashiprabhaayai Namah</td>
                <td>The Goddess Who is the Model</td>
              </tr>
              <tr>
                <td>616</td>
                <td>Bhavani</td>
                <td>Om Bhavanyai Namah</td>
                <td>The Goddess Who is the Giver of Life</td>
              </tr>
              <tr>
                <td>617</td>
                <td>Vasanashakti</td>
                <td>Om Vasanashaktiyai Namah</td>
                <td>The Goddess Who is in Born Talents</td>
              </tr>
              <tr>
                <td>618</td>
                <td>Aakritisthaa</td>
                <td>Om Aakritisthayai Namah</td>
                <td>The Goddess Who can Take a Form</td>
              </tr>
              <tr>
                <td>619</td>
                <td>Khilaa</td>
                <td>Om Khilayai Namah</td>
                <td>The Goddess Who is All Living Beings</td>
              </tr>
              <tr>
                <td>620</td>
                <td>Akhilaa</td>
                <td>Om Akhilayai Namah</td>
                <td>The Goddess Who is Everywhere</td>
              </tr>
              <tr>
                <td>621</td>
                <td>Tantrahetu</td>
                <td>Om Tantrahetuyai Namah</td>
                <td>The Goddess Who is the Cause of All 64 Tantras</td>
              </tr>
              <tr>
                <td>622</td>
                <td>Vichitraangi</td>
                <td>Om Vichitraangyai Namah</td>
                <td>The Goddess Who has Wonderful Limbs</td>
              </tr>
              <tr>
                <td>623</td>
                <td>Vyomaganga vinodini</td>
                <td>Om VyomagangaVinodinyai Namah</td>
                <td>The Goddess Who Plays in the Akasha Ganga</td>
              </tr>
              <tr>
                <td>624</td>
                <td>Varshaa</td>
                <td>Om Varshaayai Namah</td>
                <td>The Goddess Who is Rain</td>
              </tr>
              <tr>
                <td>625</td>
                <td>Varshikaa</td>
                <td>Om Varshikayai Namah</td>
                <td>The Goddess Who Rains Mercy on Devotees</td>
              </tr>
              <tr>
                <td>626</td>
                <td>Rigyajussama roopini</td>
                <td>Om RigyajussamaRoopinyai Namah</td>
                <td>
                  The Goddess Who is the Form of Rig, Yajur, and Sama Vedas
                </td>
              </tr>
              <tr>
                <td>627</td>
                <td>Mahanadi</td>
                <td>Om Mahanadyai Namah</td>
                <td>The Goddess Who is the Great River Ganga</td>
              </tr>
              <tr>
                <td>628</td>
                <td>Nadipunyaa</td>
                <td>Om Nadipunyaayai Namah</td>
                <td>The Goddess Who is the Sacred River</td>
              </tr>
              <tr>
                <td>629</td>
                <td>Aganya punya guna kriyaa</td>
                <td>Om AganyaPunyaGunaKriyayai Namah</td>
                <td>
                  The Goddess by Serving Her We Will Get Innumerable Blessings
                </td>
              </tr>
              <tr>
                <td>630</td>
                <td>Samadhigata labhyaa</td>
                <td>Om SamadhigataLabhyayai Namah</td>
                <td>The Goddess Who can be Got by Samadhi</td>
              </tr>
              <tr>
                <td>631</td>
                <td>Arthaa</td>
                <td>Om Arthaayai Namah</td>
                <td>The Goddess Who is the Meaning</td>
              </tr>
              <tr>
                <td>632</td>
                <td>Shrotavya</td>
                <td>Om Shrotavyayai Namah</td>
                <td>The Goddess Who Should be Heard About</td>
              </tr>
              <tr>
                <td>633</td>
                <td>Swapriyaa</td>
                <td>Om Swapriyayai Namah</td>
                <td>The Goddess Who Likes Herself</td>
              </tr>
              <tr>
                <td>634</td>
                <td>Aghrinaa</td>
                <td>Om Aghrinayai Namah</td>
                <td>The Goddess Who does not Hate</td>
              </tr>
              <tr>
                <td>635</td>
                <td>Namaksharaparaa</td>
                <td>Om Namaksharaparaayai Namah</td>
                <td>The Goddess Who is Above Her Names</td>
              </tr>
              <tr>
                <td>636</td>
                <td>Upasarga nakhanchita</td>
                <td>Om UpasargaNakhanchitayai Namah</td>
                <td>The Goddess Who Shines With Her Long Nails</td>
              </tr>
              <tr>
                <td>637</td>
                <td>Nipatorudvayee</td>
                <td>Om Nipatorudvayeeyai Namah</td>
                <td>The Goddess Who Symbolizes Duality</td>
              </tr>
              <tr>
                <td>638</td>
                <td>Janghaa Matrukaa</td>
                <td>Om JanghaaMatrukayai Namah</td>
                <td>The Goddess Who Supports the World Like Legs</td>
              </tr>
              <tr>
                <td>639</td>
                <td>Mantraroopini</td>
                <td>Om Mantraroopinyai Namah</td>
                <td>The Goddess Who is the Form of Mantras</td>
              </tr>
              <tr>
                <td>640</td>
                <td>Aseenaa</td>
                <td>Om Aseenaayai Namah</td>
                <td>The Goddess Who is Sitting</td>
              </tr>
              <tr>
                <td>641</td>
                <td>Shayanaa</td>
                <td>Om Shayanaayai Namah</td>
                <td>The Goddess Who is Lying Down</td>
              </tr>
              <tr>
                <td>642</td>
                <td>Tishthanti</td>
                <td>Om Tishthantyai Namah</td>
                <td>The Goddess Who is Standing</td>
              </tr>
              <tr>
                <td>643</td>
                <td>Dhavanadhikaa</td>
                <td>Om Dhavanadhikayai Namah</td>
                <td>The Goddess Who is Stable Without Movement</td>
              </tr>
              <tr>
                <td>644</td>
                <td>Lakshya Lakshana yogaadyaa</td>
                <td>Om LakshyaLakshanaYogaadyaayai Namah</td>
                <td>
                  The Goddess Who is Worshipped as a Form and Without Form
                </td>
              </tr>
              <tr>
                <td>645</td>
                <td>Thaadroopa gananaakruti</td>
                <td>Om ThaadroopaGananaaKrutiyai Namah</td>
                <td>The Goddess Who has Several Forms Which are Different</td>
              </tr>
              <tr>
                <td>646</td>
                <td>Ekaroopa</td>
                <td>Om Ekaroopayai Namah</td>
                <td>The Goddess Who is an Example</td>
              </tr>
              <tr>
                <td>647</td>
                <td>Anaikaroopaa</td>
                <td>Om Anaikaroopayai Namah</td>
                <td>The Goddess Who does not Have Only One Form</td>
              </tr>
              <tr>
                <td>648</td>
                <td>Tasyai</td>
                <td>Om Tasyayai Namah</td>
                <td>The Goddess Who is You</td>
              </tr>
              <tr>
                <td>649</td>
                <td>Induroopa</td>
                <td>Om Induroopayai Namah</td>
                <td>The Goddess Who has the Form of Moon</td>
              </tr>
              <tr>
                <td>650</td>
                <td>Tadakruti</td>
                <td>Om Tadakrutiyai Namah</td>
                <td>The Goddess Who is in God's Form</td>
              </tr>
              <tr>
                <td>651</td>
                <td>Samasataddhitaakara</td>
                <td>Om Samasataddhitaakaraayai Namah</td>
                <td>
                  The Goddess Who has the Form of the World that is Pointed to
                </td>
              </tr>
              <tr>
                <td>652</td>
                <td>Vibhakti vachanatmikaa</td>
                <td>Om VibhaktiVachanatmikayai Namah</td>
                <td>The Goddess of knowledge and communication</td>
              </tr>
              <tr>
                <td>653</td>
                <td>Swahakaraa</td>
                <td>Om Swahakaraayai Namah</td>
                <td>
                  The Goddess Who is in the Form of Swaha Who is the Wife of
                  Fire
                </td>
              </tr>
              <tr>
                <td>654</td>
                <td>Swadhakara</td>
                <td>Om Swadhakarayai Namah</td>
                <td>The Goddess Who is in the Form of Offering to the Manes</td>
              </tr>
              <tr>
                <td>655</td>
                <td>Sri patyardhanga nandini</td>
                <td>Om SriPatyardhangaNandinyai Namah</td>
                <td>
                  The Goddess Who Occupies Half the Body of Lord Vishnu as
                  Srivatsa
                </td>
              </tr>
              <tr>
                <td>656</td>
                <td>Gambheera</td>
                <td>Om Gambheerayai Namah</td>
                <td>The Goddess Who is Serious</td>
              </tr>
              <tr>
                <td>657</td>
                <td>Gahanaa</td>
                <td>Om Gahanaayai Namah</td>
                <td>The Goddess Who is Deep</td>
              </tr>
              <tr>
                <td>658</td>
                <td>Guhyaa</td>
                <td>Om Guhyayai Namah</td>
                <td>The Goddess Who is Secretive</td>
              </tr>
              <tr>
                <td>659</td>
                <td>Yoni lingardha dharini</td>
                <td>Om YoniLingardhaDharinyai Namah</td>
                <td>
                  The Goddess Who has Half Male and Half Female Organ as Ardha
                  Nareeswari
                </td>
              </tr>
              <tr>
                <td>660</td>
                <td>Shesha vasuki samsevyaa</td>
                <td>Om SheshaVasukiSamsevyayai Namah</td>
                <td>The Goddess Who is Served by Adi Shesha and Vasuki</td>
              </tr>
              <tr>
                <td>661</td>
                <td>Chapalaa</td>
                <td>Om Chapalayai Namah</td>
                <td>The Goddess Who does not Stay Permanently in One Place</td>
              </tr>
              <tr>
                <td>662</td>
                <td>Varavarnini</td>
                <td>Om Varavarninyai Namah</td>
                <td>The Goddess Who Belongs to the Blessed Category</td>
              </tr>
              <tr>
                <td>663</td>
                <td>Karunyakara sampatti</td>
                <td>Om KarunyakaraSampattiyai Namah</td>
                <td>The Goddess Who has Wealth of Mercy</td>
              </tr>
              <tr>
                <td>664</td>
                <td>Keelakrit</td>
                <td>Om Keelakritayai Namah</td>
                <td>The Goddess Who Shuts Illusion from Devotees</td>
              </tr>
              <tr>
                <td>665</td>
                <td>Mantrakeelikaa</td>
                <td>Om Mantrakeelikayai Namah</td>
                <td>The Goddess Who is Being Worshipped by Mantras</td>
              </tr>
              <tr>
                <td>666</td>
                <td>Shakti beejatmikaa</td>
                <td>Om ShaktiBeejatmikayai Namah</td>
                <td>
                  The Goddess Who is the Soul of Seed Chants Like Iym, Hreem,
                  Sreem
                </td>
              </tr>
              <tr>
                <td>667</td>
                <td>Sarva mantreshtaa</td>
                <td>Om SarvaMantreshtayai Namah</td>
                <td>The Goddess Who Likes All Mantras</td>
              </tr>
              <tr>
                <td>668</td>
                <td>Akshaya kamanaa</td>
                <td>Om AkshayaKamanayai Namah</td>
                <td>The Goddess Who has Desires Which Never Decrease</td>
              </tr>
              <tr>
                <td>669</td>
                <td>Aagneyai</td>
                <td>Om Aagneyai Namah</td>
                <td>The Goddess Who is Fire</td>
              </tr>
              <tr>
                <td>670</td>
                <td>Parthivaa</td>
                <td>Om Parthivayai Namah</td>
                <td>The Goddess Who is Earth</td>
              </tr>
              <tr>
                <td>671</td>
                <td>Aapyaa</td>
                <td>Om Aapyaayai Namah</td>
                <td>The Goddess Who is Water</td>
              </tr>
              <tr>
                <td>672</td>
                <td>Vayavyaa</td>
                <td>Om Vayavyayai Namah</td>
                <td>The Goddess Who is Secretive</td>
              </tr>
              <tr>
                <td>673</td>
                <td>Vyomaketanaa</td>
                <td>Om Vyomaketanaayai Namah</td>
                <td>The Goddess Who has Sky as Flag</td>
              </tr>
              <tr>
                <td>674</td>
                <td>Satya Gyanatmikaa</td>
                <td>Om SatyaGyanatmikayai Namah</td>
                <td>The Goddess Whose Soul is Truth and Wisdom</td>
              </tr>
              <tr>
                <td>675</td>
                <td>Nandaa</td>
                <td>Om Nandaayai Namah</td>
                <td>The Goddess Who Makes One Happy</td>
              </tr>
              <tr>
                <td>676</td>
                <td>Brahmee</td>
                <td>Om Brahmeeyai Namah</td>
                <td>The Goddess Who is the Power of Brahma</td>
              </tr>
              <tr>
                <td>677</td>
                <td>Brahma</td>
                <td>Om Brahmayai Namah</td>
                <td>The Goddess Who is the Brahman</td>
              </tr>
              <tr>
                <td>678</td>
                <td>Sanatani</td>
                <td>Om Sanatanayai Namah</td>
                <td>The Goddess Who does not Have Any Origin</td>
              </tr>
              <tr>
                <td>679</td>
                <td>Avidya vasanaa</td>
                <td>Om AvidyaVasanaayai Namah</td>
                <td>The Goddess Who has Habit of Ignorance</td>
              </tr>
              <tr>
                <td>680</td>
                <td>Prakruti</td>
                <td>Om Prakrutiyai Namah</td>
                <td>The Goddess Who is the Nature</td>
              </tr>
              <tr>
                <td>681</td>
                <td>Sarvamohini</td>
                <td>Om Sarvamohinyai Namah</td>
                <td>The Goddess Who Attracts Everyone</td>
              </tr>
              <tr>
                <td>682</td>
                <td>Shakti</td>
                <td>Om Shaktyai Namah</td>
                <td>The Goddess Who is the Power</td>
              </tr>
              <tr>
                <td>683</td>
                <td>Dhaarana shakthi yogini</td>
                <td>Om DharanaShakthiYoginyai Namah</td>
                <td>The Goddess Who is the Strength of Understanding</td>
              </tr>
              <tr>
                <td>684</td>
                <td>Chidachichchakti</td>
                <td>Om Chidachichchaktyai Namah</td>
                <td>
                  The Goddess Who is an Expert in Yoga with Wisdom and Ignorance
                </td>
              </tr>
              <tr>
                <td>685</td>
                <td>Vaktraa</td>
                <td>Om Vaktrayai Namah</td>
                <td>The Goddess Who has a Red Face</td>
              </tr>
              <tr>
                <td>686</td>
                <td>Arunaa</td>
                <td>Om Arunayai Namah</td>
                <td>The Goddess Who is Dawn</td>
              </tr>
              <tr>
                <td>687</td>
                <td>Mahamaya</td>
                <td>Om Mahamayayai Namah</td>
                <td>The Goddess Who is a Great Illusion</td>
              </tr>
              <tr>
                <td>688</td>
                <td>Mareechi</td>
                <td>Om Mareechyai Namah</td>
                <td>The Goddess Who is Hiding</td>
              </tr>
              <tr>
                <td>689</td>
                <td>Madamardhini</td>
                <td>Om Madamardhinyai Namah</td>
                <td>The Goddess Who Kills Unnecessary Exuberance</td>
              </tr>
              <tr>
                <td>690</td>
                <td>Viraat</td>
                <td>Om Viraatyai Namah</td>
                <td>The Goddess Who is the Supreme</td>
              </tr>
              <tr>
                <td>691</td>
                <td>Swaha</td>
                <td>Om Swahaayai Namah</td>
                <td>
                  The Goddess Who Takes the Form of Swaha, Wife of Fire God
                </td>
              </tr>
              <tr>
                <td>692</td>
                <td>Swadha</td>
                <td>Om Swadhayai Namah</td>
                <td>
                  The Goddess Who is the Form of Swadha, Offering for Manes
                </td>
              </tr>
              <tr>
                <td>693</td>
                <td>Niroopasti</td>
                <td>Om Niroopastiyayai Namah</td>
                <td>The Goddess Who is Fit to be Worshipped</td>
              </tr>
              <tr>
                <td>694</td>
                <td>Subhaktigaa</td>
                <td>Om Subhaktigayai Namah</td>
                <td>The Goddess Who Likes People with Good Devotion</td>
              </tr>
              <tr>
                <td>695</td>
                <td>Nirupitadwayi</td>
                <td>Om Nirupitadwayai Namah</td>
                <td>The Goddess Who Proves Knowledge and Ignorance</td>
              </tr>
              <tr>
                <td>696</td>
                <td>Vidya</td>
                <td>Om Vidyayai Namah</td>
                <td>The Goddess Who is Knowledge</td>
              </tr>
              <tr>
                <td>697</td>
                <td>Nityaanitya svaroopini</td>
                <td>Om NityaanityaSvaroopyai Namah</td>
                <td>The Goddess Who is Permanent as Well as Temporary</td>
              </tr>
              <tr>
                <td>698</td>
                <td>Vairajamarga sanchaaraa</td>
                <td>Om VairajamargaSanchaaraayai Namah</td>
                <td>The Goddess Who Travels in Path of Detachment</td>
              </tr>
              <tr>
                <td>699</td>
                <td>Sarvasatpatha darshini</td>
                <td>Om SarvasatpathaDarshinyai Namah</td>
                <td>The Goddess Who Shows the Right Path</td>
              </tr>
              <tr>
                <td>700</td>
                <td>Jalandhari</td>
                <td>Om Jalandharyai Namah</td>
                <td>The Goddess Who Keeps the Net Called Illusion</td>
              </tr>
              <tr>
                <td>701</td>
                <td>Mridaani</td>
                <td>Om Mridanyai Namah</td>
                <td>The Wife of Lord Shiva</td>
              </tr>
              <tr>
                <td>702</td>
                <td>Bhavani</td>
                <td>Om Bhavanyai Namah</td>
                <td>The Goddess Who is the Wife of Lord Shiva</td>
              </tr>
              <tr>
                <td>703</td>
                <td>Bhava bhanjini</td>
                <td>Om BhavaBhanjinyai Namah</td>
                <td>The Goddess Who Breaks the Misery of Birth</td>
              </tr>
              <tr>
                <td>704</td>
                <td>Traikalika Gyanatantu</td>
                <td>Om TraikalikaGyanatantuyai Namah</td>
                <td>
                  The Goddess Who Gives Wisdom in All Three Periods of Time
                </td>
              </tr>
              <tr>
                <td>705</td>
                <td>Trikala Gyanadayini</td>
                <td>Om TrikalaGyanadayinyai Namah</td>
                <td>
                  The Goddess Who Gives Knowledge of the Past, Present, and
                  Future
                </td>
              </tr>
              <tr>
                <td>706</td>
                <td>Nadateetaa</td>
                <td>Om Nadateetayai Namah</td>
                <td>The Goddess Who is Beyond Sound</td>
              </tr>
              <tr>
                <td>707</td>
                <td>Pragyaa</td>
                <td>Om Pragyaayai Namah</td>
                <td>The Goddess Who is Intuitiveness</td>
              </tr>
              <tr>
                <td>708</td>
                <td>Dhatriroopa</td>
                <td>Om Dhatriroopayai Namah</td>
                <td>The Goddess Who has a Form Carrying the World</td>
              </tr>
              <tr>
                <td>709</td>
                <td>Tripushkaraa</td>
                <td>Om Tripushkaraayai Namah</td>
                <td>The Goddess Who Looks After Body, Mind, and Wisdom</td>
              </tr>
              <tr>
                <td>710</td>
                <td>Parajitaa</td>
                <td>Om Parajitaayai Namah</td>
                <td>The Goddess Who is Defeated by Devotees</td>
              </tr>
              <tr>
                <td>711</td>
                <td>Vidhanagyaa</td>
                <td>Om Vidhanagyaayai Namah</td>
                <td>The Goddess Who Knows How to Arrange for Things</td>
              </tr>
              <tr>
                <td>712</td>
                <td>Visheshita gunatmikaa</td>
                <td>Om VisheshitaGunatmikayai Namah</td>
                <td>The Goddess Who has Special Auspicious Qualities</td>
              </tr>
              <tr>
                <td>713</td>
                <td>Hiranyakeshini</td>
                <td>Om Hiranyakeshinyai Namah</td>
                <td>The Goddess Who has Golden Hair</td>
              </tr>
              <tr>
                <td>714</td>
                <td>Hemabrahmasutra vichakshanaa</td>
                <td>Om HemabrahmasutraVichakshanayai Namah</td>
                <td>
                  The Goddess Who Knows the Golden Book Called Brahma Sutra
                </td>
              </tr>
              <tr>
                <td>715</td>
                <td>Asankhyeya parardhanta swara vyanjanavaikharee</td>
                <td>Om AsankhyeyaParardhantaSwaraVyanjanavaikharyai Namah</td>
                <td>
                  The Goddess Who is the Birthplace of Innumerable Alphabets,
                  Consonants, and Vowels
                </td>
              </tr>
              <tr>
                <td>716</td>
                <td>Madhujihwa</td>
                <td>Om Madhujihwayai Namah</td>
                <td>The Goddess Who has a Sweet Tongue</td>
              </tr>
              <tr>
                <td>717</td>
                <td>Madhumati</td>
                <td>Om Madhumatyai Namah</td>
                <td>The Goddess Who is Birth</td>
              </tr>
              <tr>
                <td>718</td>
                <td>Madhumasodayaa</td>
                <td>Om Madhumasodayayai Namah</td>
                <td>The Goddess Who is the Beginning of Pleasurable Months</td>
              </tr>
              <tr>
                <td>719</td>
                <td>Madhu</td>
                <td>Om Madhuyai Namah</td>
                <td>The Goddess Who is Like Honey</td>
              </tr>
              <tr>
                <td>720</td>
                <td>Madhavi</td>
                <td>Om Madhaviyai Namah</td>
                <td>The Goddess Who is the Wife of Madhava</td>
              </tr>
              <tr>
                <td>721</td>
                <td>Mahabhaga</td>
                <td>Om Mahabhagayai Namah</td>
                <td>The Goddess Who has a Lot of Wealth/Luck/Fame</td>
              </tr>
              <tr>
                <td>722</td>
                <td>Megha gambheera niswanaa</td>
                <td>Om MeghaGambheeraNiswanayai Namah</td>
                <td>The Goddess Whose Voice is Like Thunder</td>
              </tr>
              <tr>
                <td>723</td>
                <td>Brahma-Vishnu-Maheshadi gyatavyartha visheshagaa</td>
                <td>
                  Om BrahmaVishnuMaheshadiGyaatavyarthaVisheshagaayai Namah
                </td>
                <td>
                  The Goddess Whose Greatness is Known to Brahma, Vishnu, and
                  Shiva
                </td>
              </tr>
              <tr>
                <td>724</td>
                <td>Nabhauvahni shikhakara</td>
                <td>Om NabhauvahniShikhakarayai Namah</td>
                <td>The Goddess Who Keeps Fire in Her Belly</td>
              </tr>
              <tr>
                <td>725</td>
                <td>Lalaate</td>
                <td>Om Lalaatayai Namah</td>
                <td>The Goddess Who has a Crescent</td>
              </tr>
              <tr>
                <td>726</td>
                <td>Bhroomadhye bhaskaraakara</td>
                <td>Om BhroomadhyeBhaskaraakarayai Namah</td>
                <td>
                  The Goddess Who has Sun-Like Light in the Middle of Her
                  Eyebrows
                </td>
              </tr>
              <tr>
                <td>727</td>
                <td>Hridisarvatara kruti</td>
                <td>Om HridisarvataraKrutiyai Namah</td>
                <td>The Goddess Who Keeps Stars in Her Heart</td>
              </tr>
              <tr>
                <td>728</td>
                <td>Kruttikadi bharanyanta nakshatreshtyaarchitodayaa</td>
                <td>
                  Om KruttikadiBharanyantaNakshatreshtyaarchitodayayai Namah
                </td>
                <td>The Goddess Who is Worshipped During All the 27 Stars</td>
              </tr>
              <tr>
                <td>729</td>
                <td>Grahavidyatmika</td>
                <td>Om Grahavidyatmikayai Namah</td>
                <td>The Goddess Who Knows All About the Planets</td>
              </tr>
              <tr>
                <td>730</td>
                <td>Jyoti</td>
                <td>Om Jyotiyai Namah</td>
                <td>The Goddess Who is the Light of a Flame</td>
              </tr>
              <tr>
                <td>731</td>
                <td>Jyotirvide</td>
                <td>Om Jyotirvidayai Namah</td>
                <td>The Goddess Who is the Place for Light</td>
              </tr>
              <tr>
                <td>732</td>
                <td>Matijeevikaa</td>
                <td>Om Matijeevikayai Namah</td>
                <td>The Goddess Who Helps All Beings to Lead Their Life</td>
              </tr>
              <tr>
                <td>733</td>
                <td>Brahmanda garbhini</td>
                <td>Om BrahmandaGarbhinyai Namah</td>
                <td>The Goddess Who Keeps the Universe in Her Womb</td>
              </tr>
              <tr>
                <td>734</td>
                <td>Balaa</td>
                <td>Om Balaayai Namah</td>
                <td>The Goddess Who is a Lass</td>
              </tr>
              <tr>
                <td>735</td>
                <td>Saptavarana devata</td>
                <td>Om SaptavaranaDevatayai Namah</td>
                <td>
                  The Goddess Who is the Form of the Gods of the Seven Avaranas
                  of Sri Chakra
                </td>
              </tr>
              <tr>
                <td>736</td>
                <td>Vairarjottama samraajyaa</td>
                <td>Om VairarjottamaSamraajyaayai Namah</td>
                <td>The Goddess Who Rules the World</td>
              </tr>
              <tr>
                <td>737</td>
                <td>Kumara kushalodayaa</td>
                <td>Om KumaraKushalodayayai Namah</td>
                <td>
                  The Goddess Who is the Reason for Greatness of Her Son
                  Subrahmanya
                </td>
              </tr>
              <tr>
                <td>738</td>
                <td>Bagalaa</td>
                <td>Om Bagalaayai Namah</td>
                <td>The Goddess Who is the World That Cannot Be Measured</td>
              </tr>
              <tr>
                <td>739</td>
                <td>Bhramarambaa</td>
                <td>Om Bhramarambaayai Namah</td>
                <td>The Goddess Who has Curly Hair on the Forehead</td>
              </tr>
              <tr>
                <td>740</td>
                <td>Shiva dooti</td>
                <td>Om ShivaDootiyai Namah</td>
                <td>The Goddess Who Sent Lord Shiva as Her Emissary</td>
              </tr>
              <tr>
                <td>741</td>
                <td>Shivatmikaa</td>
                <td>Om Shivatmikayai Namah</td>
                <td>The Goddess Who is the Soul of Lord Shiva</td>
              </tr>
              <tr>
                <td>742</td>
                <td>Meruvindhyanta samsthaanaa</td>
                <td>Om MeruvindhyantaSamsthanaayai Namah</td>
                <td>
                  The Goddess Who Stays in Mountains Like Meru and Vindhyaa
                </td>
              </tr>
              <tr>
                <td>743</td>
                <td>Kahsmira pura vasini</td>
                <td>Om KahsmiraPuraVasinyai Namah</td>
                <td>The Goddess Who Lives in Kashmir</td>
              </tr>
              <tr>
                <td>744</td>
                <td>Yoganidraa</td>
                <td>Om Yoganidrayai Namah</td>
                <td>The Goddess Who is in Yogic Sleep</td>
              </tr>
              <tr>
                <td>745</td>
                <td>Mahanidraa</td>
                <td>Om Mahanidrayai Namah</td>
                <td>The Goddess Who is in Great Sleep</td>
              </tr>
              <tr>
                <td>746</td>
                <td>Vinidraa</td>
                <td>Om Vinidrayai Namah</td>
                <td>The Goddess Who Never Sleeps</td>
              </tr>
              <tr>
                <td>747</td>
                <td>Rakshasashritaa</td>
                <td>Om Rakshasashritayai Namah</td>
                <td>The Goddess Who Made Rakshasas Surrender</td>
              </tr>
              <tr>
                <td>748</td>
                <td>Suvarnadaa</td>
                <td>Om Suvarnadayai Namah</td>
                <td>The Goddess Who is Golden</td>
              </tr>
              <tr>
                <td>749</td>
                <td>Maha Ganga</td>
                <td>Om MahaGangayai Namah</td>
                <td>The Goddess Who is the Great Ganges</td>
              </tr>
              <tr>
                <td>750</td>
                <td>Panchaakhyaa</td>
                <td>Om Panchaakhyayai Namah</td>
                <td>The Goddess Who is the Five Elements</td>
              </tr>
              <tr>
                <td>751</td>
                <td>Pancha Samhati</td>
                <td>Om PanchaSamhatiyai Namah</td>
                <td>The Goddess Who is Made of Five Elements</td>
              </tr>
              <tr>
                <td>752</td>
                <td>Suprajaataa</td>
                <td>Om Suprajaataayai Namah</td>
                <td>The Goddess Who was Born in a Good Family</td>
              </tr>
              <tr>
                <td>753</td>
                <td>Suveeraa</td>
                <td>Om Suveeraayai Namah</td>
                <td>The Goddess Who has Great Valour</td>
              </tr>
              <tr>
                <td>754</td>
                <td>Suposhaa</td>
                <td>Om Suposhaayai Namah</td>
                <td>The Goddess Who Grants Good Health</td>
              </tr>
              <tr>
                <td>755</td>
                <td>Supati</td>
                <td>Om Supatiyai Namah</td>
                <td>The Goddess Who has a Good Husband</td>
              </tr>
              <tr>
                <td>756</td>
                <td>Sugrahaa</td>
                <td>Om Sugrahaayai Namah</td>
                <td>The Goddess Who has a Home Without Sorrow</td>
              </tr>
              <tr>
                <td>757</td>
                <td>Rakta bijantaa</td>
                <td>Om RaktaBijantaayai Namah</td>
                <td>The Goddess Who Killed Raktabija</td>
              </tr>
              <tr>
                <td>758</td>
                <td>Hatakandarpa jeevika</td>
                <td>Om HatakandarpaJeevikayai Namah</td>
                <td>
                  The Goddess Who Gave Life to the God of Love Who Was Killed
                </td>
              </tr>
              <tr>
                <td>759</td>
                <td>Samudra vyoma madhyasthaa</td>
                <td>Om SamudraVyomaMadhyasthayai Namah</td>
                <td>The Goddess Who is in Between Sky and Ocean</td>
              </tr>
              <tr>
                <td>760</td>
                <td>Samabindu samashrayaa</td>
                <td>Om SamabinduSamashrayaayai Namah</td>
                <td>The Goddess Who Lives in the Dot in the Sri Chakra</td>
              </tr>
              <tr>
                <td>761</td>
                <td>Saubhagyarasa jeevatu</td>
                <td>Om SaubhagyarasaJeevatuyai Namah</td>
                <td>
                  The Goddess Who Lives with Different Forms of Wealth and Luck
                </td>
              </tr>
              <tr>
                <td>762</td>
                <td>Saarasaara vivekadrik</td>
                <td>Om SaarasaaraVivekadrekayai Namah</td>
                <td>The Goddess Who has Wisdom to Classify Knowledge</td>
              </tr>
              <tr>
                <td>763</td>
                <td>Trivalyadi supushtaangaa</td>
                <td>Om TrivalyadiSupushtaangaayai Namah</td>
                <td>
                  The Goddess Who has a Healthy Body with Three Folds in Her Hip
                </td>
              </tr>
              <tr>
                <td>764</td>
                <td>Bharataashritaa</td>
                <td>Om Bharataashritayai Namah</td>
                <td>The Goddess Who is Sita Worshipped by Bharata</td>
              </tr>
              <tr>
                <td>765</td>
                <td>Nadabrahma mayi vidyaa</td>
                <td>Om NadabrahmaMayiVidyaayai Namah</td>
                <td>
                  The Knowledge of the God of Sound Which Pervades Everywhere
                </td>
              </tr>
              <tr>
                <td>766</td>
                <td>Gyanabrahma mayi paraa</td>
                <td>Om GyanabrahmaMayiParaayai Namah</td>
                <td>The Goddess Who is the Divine Knowledge of Brahman</td>
              </tr>
              <tr>
                <td>767</td>
                <td>Brahmanadi</td>
                <td>Om Brahmanadiyai Namah</td>
                <td>The Goddess Who is the Sushumna</td>
              </tr>
              <tr>
                <td>768</td>
                <td>Nirukti</td>
                <td>Om Niruktyai Namah</td>
                <td>The Goddess Who Cannot be Explained</td>
              </tr>
              <tr>
                <td>769</td>
                <td>Brahma kaivalya saadhanaa</td>
                <td>Om BrahmaKaivalyaSaadhanaayai Namah</td>
                <td>The Goddess Who is the Way to Salvation</td>
              </tr>
              <tr>
                <td>770</td>
                <td>Kalikeya Mahodhaara veerya Vikrama roopini</td>
                <td>Om KalikeyaMahodhaaraVeeryaVikramaRoopinyai Namah</td>
                <td>
                  The Goddess Who is Responsible for the Great Strength of the
                  Snake Called Kalikeya
                </td>
              </tr>
              <tr>
                <td>771</td>
                <td>Vadavagni shikha vaktraa</td>
                <td>Om VadavagniShikhaVaktrayai Namah</td>
                <td>
                  The Goddess Who has Vadavagni (Fire Underneath Ocean) as Her
                  Face
                </td>
              </tr>
              <tr>
                <td>772</td>
                <td>Mahakabala tarpanaa</td>
                <td>Om MahakabalaTarpanaayai Namah</td>
                <td>
                  The Goddess Who Swallows All at Deluge and Gets Satisfied
                </td>
              </tr>
              <tr>
                <td>773</td>
                <td>Mahabhootaa</td>
                <td>Om Mahabhootayai Namah</td>
                <td>The Goddess Who has a Big Body</td>
              </tr>
              <tr>
                <td>774</td>
                <td>Mahadarpaa</td>
                <td>Om Mahadarpaayai Namah</td>
                <td>The Goddess Who is Very Proud</td>
              </tr>
              <tr>
                <td>775</td>
                <td>Mahasara</td>
                <td>Om Mahasaraayai Namah</td>
                <td>The Goddess Who is the Ultimate Meaning</td>
              </tr>
              <tr>
                <td>776</td>
                <td>Mahakratu</td>
                <td>Om Mahakratuayai Namah</td>
                <td>The Goddess Who is Worshipped by Big Yaga</td>
              </tr>
              <tr>
                <td>777</td>
                <td>Panchabhoota mahagrasa</td>
                <td>Om PanchabhootaMahagrasaayai Namah</td>
                <td>The Goddess Who Swallows Five Elements During Deluge</td>
              </tr>
              <tr>
                <td>778</td>
                <td>Panchabhootadhi devata</td>
                <td>Om PanchabhootadhiDevatayai Namah</td>
                <td>The God Controlling the Five Elements</td>
              </tr>
              <tr>
                <td>779</td>
                <td>Sarva pramaanaa</td>
                <td>Om SarvaPramaanaayai Namah</td>
                <td>The Goddess Who is the Cause of Everything</td>
              </tr>
              <tr>
                <td>780</td>
                <td>Sampatti</td>
                <td>Om Sampattiyai Namah</td>
                <td>The Goddess Who is Wealth</td>
              </tr>
              <tr>
                <td>781</td>
                <td>Sarvaroga pratikriya</td>
                <td>Om SarvarogaPratikriyayai Namah</td>
                <td>The Goddess Who has Cures for All Diseases</td>
              </tr>
              <tr>
                <td>782</td>
                <td>Brahmandantar bahivyaptaa</td>
                <td>Om BrahmandantarBahivyaptaayai Namah</td>
                <td>
                  The Goddess Who is Spread Inside and Outside the Brahmanda
                </td>
              </tr>
              <tr>
                <td>783</td>
                <td>Vishnu vaksho vibhooshini</td>
                <td>Om VishnuVakshoVibhooshinyai Namah</td>
                <td>The Goddess Who Decorates the Chest of Lord Vishnu</td>
              </tr>
              <tr>
                <td>784</td>
                <td>Shaankari</td>
                <td>Om Shaankaryai Namah</td>
                <td>The Goddess Who is the Power of Shankara</td>
              </tr>
              <tr>
                <td>785</td>
                <td>Vidhi vaktrastha</td>
                <td>Om VidhiVaktrasthayai Namah</td>
                <td>The Goddess Who is on the Face of Brahma-Saraswati</td>
              </tr>
              <tr>
                <td>786</td>
                <td>Pravaraa</td>
                <td>Om Pravaraayai Namah</td>
                <td>The Goddess Who is Superior</td>
              </tr>
              <tr>
                <td>787</td>
                <td>Vara hetuki</td>
                <td>Om VaraHetukiyai Namah</td>
                <td>The Goddess Who is the Cause of All Boons</td>
              </tr>
              <tr>
                <td>788</td>
                <td>Hema mala</td>
                <td>Om HemaMalaayai Namah</td>
                <td>The Goddess Who Wears a Golden Necklace</td>
              </tr>
              <tr>
                <td>789</td>
                <td>Shikha mala</td>
                <td>Om ShikhaMalaayai Namah</td>
                <td>The Goddess Who Wears a Garland of Heads</td>
              </tr>
              <tr>
                <td>790</td>
                <td>Trishikha</td>
                <td>Om Trishikhayai Namah</td>
                <td>The Goddess Who is the Three Vedas</td>
              </tr>
              <tr>
                <td>791</td>
                <td>Panchalochanaa</td>
                <td>Om Panchalochanayai Namah</td>
                <td>The Goddess Who has Five Eyes</td>
              </tr>
              <tr>
                <td>792</td>
                <td>Sarvagama sadachara maryada</td>
                <td>Om SarvagamaSadacharaMaryadayai Namah</td>
                <td>The Goddess Who Observes All the Rituals in Scriptures</td>
              </tr>
              <tr>
                <td>793</td>
                <td>Yatubhanjani</td>
                <td>Om Yatubhanjanyai Namah</td>
                <td>The Goddess Who Destroys All Asuras</td>
              </tr>
              <tr>
                <td>794</td>
                <td>Punyashloka prabhandhadyaa</td>
                <td>Om PunyashlokaPrabhandhadyai Namah</td>
                <td>The Goddess Who is in the Form of Auspicious Verses</td>
              </tr>
              <tr>
                <td>795</td>
                <td>Sarvantaryami roopini</td>
                <td>Om SarvantaryamiRoopinyai Namah</td>
                <td>The Goddess Who is Inside Every Being</td>
              </tr>
              <tr>
                <td>796</td>
                <td>Samagana samaradhya</td>
                <td>Om SamaganaSamaradhyayai Namah</td>
                <td>The Goddess Who is Worshipped by Singing Sama Veda</td>
              </tr>
              <tr>
                <td>797</td>
                <td>Shrotrukarna rasayana</td>
                <td>Om ShrotrukarnaRasayanaayai Namah</td>
                <td>
                  The Goddess Who Gives Pleasure to All Who Hear About Her
                </td>
              </tr>
              <tr>
                <td>798</td>
                <td>Jeevalokaika jeevatu</td>
                <td>Om JeevalokaikaJeevatuyai Namah</td>
                <td>The Goddess Who Takes Care of All Lives in the World</td>
              </tr>
              <tr>
                <td>799</td>
                <td>Bhadrodara vilokanaa</td>
                <td>Om BhadrodaraVilokanayai Namah</td>
                <td>The Goddess Who has a Glance that Grants Auspiciousness</td>
              </tr>
              <tr>
                <td>800</td>
                <td>Taditkoti lasatkanti</td>
                <td>Om TaditkotiLasatkantiayai Namah</td>
                <td>The Goddess Who is as Pretty as Billions of Lightning</td>
              </tr>
              <tr>
                <td>801</td>
                <td>Hari sundari</td>
                <td>Om HariSundaryai Namah</td>
                <td>The Goddess Who is Pretty to Lord Vishnu</td>
              </tr>
              <tr>
                <td>802</td>
                <td>Meena netraa</td>
                <td>Om MeenaNetraayai Namah</td>
                <td>The Goddess Who has Fish-Like Eyes</td>
              </tr>
              <tr>
                <td>803</td>
                <td>Indrakshi</td>
                <td>Om Indrakshyai Namah</td>
                <td>The Goddess Who has 1000 Eyes Like Indra</td>
              </tr>
              <tr>
                <td>804</td>
                <td>Vishalakshi</td>
                <td>Om Vishalakshyai Namah</td>
                <td>The Goddess Who has Wide Eyes</td>
              </tr>
              <tr>
                <td>805</td>
                <td>Sumangalaa</td>
                <td>Om Sumangalaayai Namah</td>
                <td>The Goddess Who has All Auspiciousness</td>
              </tr>
              <tr>
                <td>806</td>
                <td>Sarvamangala sampanna</td>
                <td>Om SarvamangalaSampannayai Namah</td>
                <td>The Goddess Who is Full of All Auspiciousness</td>
              </tr>
              <tr>
                <td>807</td>
                <td>Sakshanmangala devata</td>
                <td>Om SakshanMangalaDevatayai Namah</td>
                <td>The Goddess Who is the Real God of Auspiciousness</td>
              </tr>
              <tr>
                <td>808</td>
                <td>Dehahriddeepikaa</td>
                <td>Om Dehahriddeepikayai Namah</td>
                <td>The Goddess Who is the Light of Body and the Heart</td>
              </tr>
              <tr>
                <td>809</td>
                <td>Deepti</td>
                <td>Om Deeptiyai Namah</td>
                <td>The Goddess Who is Glowing with Light</td>
              </tr>
              <tr>
                <td>810</td>
                <td>Jihwa paapa pranashini</td>
                <td>Om JihwaPaapaPranashinyai Namah</td>
                <td>The Goddess Who Destroys Sins Done by the Tongue</td>
              </tr>
              <tr>
                <td>811</td>
                <td>Ardha chandrolla saddhamshtra</td>
                <td>Om ArdhaChandrollaSaddhamshtrayai Namah</td>
                <td>The Goddess Who has Glowing Teeth Like the Half Moon</td>
              </tr>
              <tr>
                <td>812</td>
                <td>Yajnavaati vilasini</td>
                <td>Om YajnavaatiVilasinyai Namah</td>
                <td>The Goddess Who Makes the Hall of Fire Sacrifice Glow</td>
              </tr>
              <tr>
                <td>813</td>
                <td>Maha Durga</td>
                <td>Om MahaDurgaayai Namah</td>
                <td>The Great Goddess Who Removes Intense Sorrows</td>
              </tr>
              <tr>
                <td>814</td>
                <td>Mahotsaha</td>
                <td>Om Mahotsahaayai Namah</td>
                <td>The Goddess Who has Great Enthusiasm</td>
              </tr>
              <tr>
                <td>815</td>
                <td>Mahadeva balodaya</td>
                <td>Om MahadevaBalodayayai Namah</td>
                <td>
                  The Goddess Who is Responsible for the Strength of Lord Shiva
                </td>
              </tr>
              <tr>
                <td>816</td>
                <td>Dakineedyaa</td>
                <td>Om Dakineedyaayai Namah</td>
                <td>
                  The Goddess Who is Worshipped by Dakini, Goddess of Vishudhi
                  Chakra
                </td>
              </tr>
              <tr>
                <td>817</td>
                <td>Shakineedyaa</td>
                <td>Om Shakineedyaayai Namah</td>
                <td>
                  The Goddess Who is Praised by Shakini, Goddess of Mooladhara
                </td>
              </tr>
              <tr>
                <td>818</td>
                <td>Saakineedyaa</td>
                <td>Om Saakineedyaayai Namah</td>
                <td>The Goddess Who is Praised by Saakini</td>
              </tr>
              <tr>
                <td>819</td>
                <td>Samastajut</td>
                <td>Om Samastajutayai Namah</td>
                <td>The Goddess Who is Worshipped Everywhere by Everybody</td>
              </tr>
              <tr>
                <td>820</td>
                <td>Nirankushaa</td>
                <td>Om Nirankushaayai Namah</td>
                <td>The Goddess Who does not Have a Goad</td>
              </tr>
              <tr>
                <td>821</td>
                <td>Nakivandyaa</td>
                <td>Om Nakivandyaayai Namah</td>
                <td>The Goddess Who is Worshipped by All Devas</td>
              </tr>
              <tr>
                <td>822</td>
                <td>Shadadharadhi devata</td>
                <td>Om ShadadharadhiDevatayai Namah</td>
                <td>The Goddess of the Six Chakras</td>
              </tr>
              <tr>
                <td>823</td>
                <td>Bhuvana gyanani shreni</td>
                <td>Om BhuvanaGyananiShreniyai Namah</td>
                <td>
                  The Goddess Who is the Staircase of Wise People of Earth
                </td>
              </tr>
              <tr>
                <td>824</td>
                <td>Bhuvanakara vallari</td>
                <td>Om BhuvanakaraVallariyai Namah</td>
                <td>The Goddess Who is the Flag of Earth</td>
              </tr>
              <tr>
                <td>825</td>
                <td>Shashvati</td>
                <td>Om Shashvatyai Namah</td>
                <td>The Goddess Who Will Always be There</td>
              </tr>
              <tr>
                <td>826</td>
                <td>Shashvataakara</td>
                <td>Om Shashvataakarayai Namah</td>
                <td>The Goddess Who is Working Always</td>
              </tr>
              <tr>
                <td>827</td>
                <td>Lokanugraha karini</td>
                <td>Om LokanugrahaKarinyai Namah</td>
                <td>The Goddess Who Blesses People</td>
              </tr>
              <tr>
                <td>828</td>
                <td>Saarasi</td>
                <td>Om Saarasyai Namah</td>
                <td>The Goddess Who Lives in the Sea</td>
              </tr>
              <tr>
                <td>829</td>
                <td>Maanasi</td>
                <td>Om Maanasyai Namah</td>
                <td>The Goddess Who Lives in the Mind</td>
              </tr>
              <tr>
                <td>830</td>
                <td>Hamsi</td>
                <td>Om Hamsyai Namah</td>
                <td>The Goddess Who Lives in the Form of a Swan</td>
              </tr>
              <tr>
                <td>831</td>
                <td>Hamsaloka pradayini</td>
                <td>Om HamsalokaPradayinyai Namah</td>
                <td>The Goddess Who Blesses with Hamsa Loka</td>
              </tr>
              <tr>
                <td>832</td>
                <td>Chinmudra lankritakara</td>
                <td>Om ChinmudraLankritakarayai Namah</td>
                <td>The Goddess Whose Hand is Decorated by Divine Seal</td>
              </tr>
              <tr>
                <td>833</td>
                <td>Koti-surya-sama-prabha</td>
                <td>Om KotiSuryaSamaPrabhayai Namah</td>
                <td>The Goddess Who Shines Like a Billion Suns</td>
              </tr>
              <tr>
                <td>834</td>
                <td>Sukhaprani shirorekhaa</td>
                <td>Om SukhapraniShirorekhayai Namah</td>
                <td>The Goddess Who Determines Fate of Living Happily</td>
              </tr>
              <tr>
                <td>835</td>
                <td>Sada drishta pradayini</td>
                <td>Om SadaDrishtaPradayinyai Namah</td>
                <td>The Goddess Who Gives the Divine Sight</td>
              </tr>
              <tr>
                <td>836</td>
                <td>Sarva saankarya doshaghni</td>
                <td>Om SarvaSaankaryaDoshaghninyai Namah</td>
                <td>The Goddess Who Removes All Defects</td>
              </tr>
              <tr>
                <td>837</td>
                <td>Grahopadrava nashini</td>
                <td>Om GrahopadravaNashinyai Namah</td>
                <td>The Goddess Who Removes Problems Created by Planets</td>
              </tr>
              <tr>
                <td>838</td>
                <td>Kshudra jantu bhayaghni</td>
                <td>Om KshudraJantuBhayaghninyai Namah</td>
                <td>The Goddess Who Removes Fear Caused by Evil Animals</td>
              </tr>
              <tr>
                <td>839</td>
                <td>Visha-rogaadi bhanjani</td>
                <td>Om VishaRogaadiBhanjanyai Namah</td>
                <td>The Goddess Who Removes Diseases Caused by Poison</td>
              </tr>
              <tr>
                <td>840</td>
                <td>Sada Shaantaa</td>
                <td>Om SadaShaantaayai Namah</td>
                <td>The Goddess Who is Always Peaceful</td>
              </tr>
              <tr>
                <td>841</td>
                <td>Sada Shuddhaa</td>
                <td>Om SadaShuddhaayai Namah</td>
                <td>The Goddess Who is Always Pure</td>
              </tr>
              <tr>
                <td>842</td>
                <td>Griha chchidra nivarini</td>
                <td>Om GrihaChchidraNivarininyai Namah</td>
                <td>
                  The Goddess Who Removes the Shortcomings Caused by Planets
                </td>
              </tr>
              <tr>
                <td>843</td>
                <td>Kalidosha prashamani</td>
                <td>Om KalidoshaPrashamanyai Namah</td>
                <td>The Goddess Who Solves Problems During the Kali Age</td>
              </tr>
              <tr>
                <td>844</td>
                <td>Kolahalapura sthitaa</td>
                <td>Om KolahalapuraSthitayai Namah</td>
                <td>The Goddess Who Stays in Kolhapur</td>
              </tr>
              <tr>
                <td>845</td>
                <td>Gauri</td>
                <td>Om Gauryai Namah</td>
                <td>The Goddess Who is White</td>
              </tr>
              <tr>
                <td>846</td>
                <td>Laakshaniki</td>
                <td>Om Laakshanikyai Namah</td>
                <td>The Goddess Who has Special Properties</td>
              </tr>
              <tr>
                <td>847</td>
                <td>Mukhyaa</td>
                <td>Om Mukhyaayai Namah</td>
                <td>The Goddess Who is the Chief</td>
              </tr>
              <tr>
                <td>848</td>
                <td>Jaghanyaa krita varjitaa</td>
                <td>Om JaghanyaaKritaVarjitayai Namah</td>
                <td>
                  The Goddess Who does not Have Body Subject to Birth and Death
                </td>
              </tr>
              <tr>
                <td>849</td>
                <td>Vidya</td>
                <td>Om Vidyayai Namah</td>
                <td>The Goddess Who is Knowledge</td>
              </tr>
              <tr>
                <td>850</td>
                <td>Mulabhutaa</td>
                <td>Om Mulabhutaayai Namah</td>
                <td>The Goddess Who is the Basis of All Life</td>
              </tr>
              <tr>
                <td>851</td>
                <td>Vasavi</td>
                <td>Om Vasaviyai Namah</td>
                <td>The Goddess Who is the Power of Indra</td>
              </tr>
              <tr>
                <td>852</td>
                <td>Vishnu chetanaa</td>
                <td>Om VishnuChetanayai Namah</td>
                <td>The Goddess Who is the Power of Lord Vishnu</td>
              </tr>
              <tr>
                <td>853</td>
                <td>Vaadini</td>
                <td>Om Vaadiniyai Namah</td>
                <td>The Goddess Who is the Power of Indra</td>
              </tr>
              <tr>
                <td>854</td>
                <td>Vasurupa</td>
                <td>Om Vasurupaayai Namah</td>
                <td>The Goddess Who is Wealth</td>
              </tr>
              <tr>
                <td>855</td>
                <td>Vasuratna paricchada</td>
                <td>Om VasuratnaParicchadayai Namah</td>
                <td>The Goddess Who has All the Jewels of Happiness</td>
              </tr>
              <tr>
                <td>856</td>
                <td>Cchamdasi</td>
                <td>Om Chhmdasiyai Namah</td>
                <td>The Goddess Who Knows the Meter of Vedas</td>
              </tr>
              <tr>
                <td>857</td>
                <td>Chandra hridayaa</td>
                <td>Om ChandraHridayayai Namah</td>
                <td>The Goddess Who has a Heart Like the Moon</td>
              </tr>
              <tr>
                <td>858</td>
                <td>Mantra svacchanda bhairavi</td>
                <td>Om MantraSvacchandaBhairavyai Namah</td>
                <td>The Goddess Who is the Meter of the Mantras</td>
              </tr>
              <tr>
                <td>859</td>
                <td>Vanamala</td>
                <td>Om Vanamalayai Namah</td>
                <td>
                  The Goddess Who Wears Garlands Made Out of Forest Flowers
                </td>
              </tr>
              <tr>
                <td>860</td>
                <td>Vaijayanti</td>
                <td>Om Vaijayantyai Namah</td>
                <td>The Goddess Who Wears Vaijayanti Garland of Lord Vishnu</td>
              </tr>
              <tr>
                <td>861</td>
                <td>Pancha divya yudhatmikaa</td>
                <td>Om PanchaDivyaYudhatmikayai Namah</td>
                <td>The Goddess Who is Armed with Five Divine Weapons</td>
              </tr>
              <tr>
                <td>862</td>
                <td>Pitambaramayi</td>
                <td>Om Pitambaramayi Namah</td>
                <td>The Goddess Who is Dressed in Yellow Silk</td>
              </tr>
              <tr>
                <td>863</td>
                <td>Chanchat kaustubhaa</td>
                <td>Om ChanchatKaustubhaayai Namah</td>
                <td>The Goddess Who Wears the Moving Kaustubha Gem</td>
              </tr>
              <tr>
                <td>864</td>
                <td>Hari kaamini</td>
                <td>Om HariKaaminiyai Namah</td>
                <td>The Goddess Who is the Sweetheart of Hari</td>
              </tr>
              <tr>
                <td>865</td>
                <td>Nityaa</td>
                <td>Om Nityayai Namah</td>
                <td>The Goddess Who is Always There</td>
              </tr>
              <tr>
                <td>866</td>
                <td>Tathyaa</td>
                <td>Om Tathyaayai Namah</td>
                <td>The Goddess Who is Truth</td>
              </tr>
              <tr>
                <td>867</td>
                <td>Ramaa</td>
                <td>Om Ramaayai Namah</td>
                <td>The Goddess Who Attracts</td>
              </tr>
              <tr>
                <td>868</td>
                <td>Raamaa</td>
                <td>Om Ramaayai Namah</td>
                <td>The Goddess Who is the Consort of Rama</td>
              </tr>
              <tr>
                <td>869</td>
                <td>Ramani</td>
                <td>Om Ramanayai Namah</td>
                <td>The Goddess Who Makes Devotees Enjoy</td>
              </tr>
              <tr>
                <td>870</td>
                <td>Mrityu bhanjani</td>
                <td>Om MrityuBhanjinyai Namah</td>
                <td>The Goddess Who Destroys Death</td>
              </tr>
              <tr>
                <td>871</td>
                <td>Jyeshthaa</td>
                <td>Om Jyeshthayai Namah</td>
                <td>The Goddess Who is Elder</td>
              </tr>
              <tr>
                <td>872</td>
                <td>Kashthaa</td>
                <td>Om Kashthaayai Namah</td>
                <td>The Goddess Who is Superior</td>
              </tr>
              <tr>
                <td>873</td>
                <td>Dhanishthantaa</td>
                <td>Om Dhanishthantaayai Namah</td>
                <td>The Goddess Who is Inside the Cloud</td>
              </tr>
              <tr>
                <td>874</td>
                <td>Sharangi</td>
                <td>Om Sharangyai Namah</td>
                <td>The Goddess Who Holds Sharanga, the Bow of Vishnu</td>
              </tr>
              <tr>
                <td>875</td>
                <td>Nirgunapriyaa</td>
                <td>Om Nirgunapriyayai Namah</td>
                <td>
                  The Goddess Who Likes People Who are Beyond the Three Gunas
                </td>
              </tr>
              <tr>
                <td>876</td>
                <td>Maitreyaa</td>
                <td>Om Maitreyayai Namah</td>
                <td>The Goddess Who is Friendly</td>
              </tr>
              <tr>
                <td>877</td>
                <td>Mitravinda</td>
                <td>Om Mitravindayai Namah</td>
                <td>The Goddess Who is Mitravinda, Wife of Krishna</td>
              </tr>
              <tr>
                <td>878</td>
                <td>Seshyasesha kalashaya</td>
                <td>Om SeshyaseshaKalashayai Namah</td>
                <td>The Goddess Who can Take Independence with Her Devotees</td>
              </tr>
              <tr>
                <td>879</td>
                <td>Varanasi vaasalabhyaa</td>
                <td>Om VaranasiVaasalabhyaayai Namah</td>
                <td>
                  The Goddess Who can be Attained by People Living in Kashi
                </td>
              </tr>
              <tr>
                <td>880</td>
                <td>Aryavarta janastutaa</td>
                <td>Om AryavartaJanastutayai Namah</td>
                <td>The Goddess Who is Prayed by People of Aryavarta</td>
              </tr>
              <tr>
                <td>881</td>
                <td>Jagadutpatti samsthaana samhara trayakaranaa</td>
                <td>Om JagadutpattiSamsthaanaSamharaTrayakaranaayai Namah</td>
                <td>
                  Who is the Cause of Creation, Upkeep, and Destruction of the
                  Universe
                </td>
              </tr>
              <tr>
                <td>882</td>
                <td>Tvam</td>
                <td>Om Tvamayai Namah</td>
                <td>The Goddess Who is You</td>
              </tr>
              <tr>
                <td>883</td>
                <td>Amba</td>
                <td>Om Ambayai Namah</td>
                <td>The Goddess Who is Mother</td>
              </tr>
              <tr>
                <td>884</td>
                <td>Vishnu sarvaswam</td>
                <td>Om VishnuSarvaswamayai Namah</td>
                <td>The Goddess Who is Everything to Vishnu</td>
              </tr>
              <tr>
                <td>885</td>
                <td>Maheswari</td>
                <td>Om Maheshwaryai Namah</td>
                <td>The Goddess Who is the Greatest Goddess</td>
              </tr>
              <tr>
                <td>886</td>
                <td>Sarvlokanaam janani</td>
                <td>Om SarvlokanaamJananyai Namah</td>
                <td>The Goddess Who is the Mother of All Worlds</td>
              </tr>
              <tr>
                <td>887</td>
                <td>Punyamurti</td>
                <td>Om Punyamurtayai Namah</td>
                <td>The Goddess Who is Auspiciousness Personified</td>
              </tr>
              <tr>
                <td>888</td>
                <td>Maha Lakshmi</td>
                <td>Om MahaLakshmiyai Namah</td>
                <td>The Goddess Who is the Great Lakshmi</td>
              </tr>
              <tr>
                <td>889</td>
                <td>Sadyojaataadi Panchaagni roopa</td>
                <td>Om SadyojaataadiPanchaagniRoopayai Namah</td>
                <td>
                  The Goddess Who is the Five Faces of Shiva and Who Did Penance
                  in the Middle of Five Fires
                </td>
              </tr>
              <tr>
                <td>890</td>
                <td>Panchaka panchakaa</td>
                <td>Om PanchakaPanchakaayai Namah</td>
                <td>The Goddess Who is the Five Times Five</td>
              </tr>
              <tr>
                <td>891</td>
                <td>Yantra Lakshmi</td>
                <td>Om YantraLakshmiyai Namah</td>
                <td>The Goddess Who is Lakshmi of Yantras</td>
              </tr>
              <tr>
                <td>892</td>
                <td>Bhavatya</td>
                <td>Om Bhavatyayai Namah</td>
                <td>The Goddess Who is the Past</td>
              </tr>
              <tr>
                <td>893</td>
                <td>Aadi</td>
                <td>Om Aadiyai Namah</td>
                <td>The Goddess Who is Primeval</td>
              </tr>
              <tr>
                <td>894</td>
                <td>Aadyadye</td>
                <td>Om Aadyadyeayai Namah</td>
                <td>The Goddess Who is First Among the First</td>
              </tr>
              <tr>
                <td>895</td>
                <td>Srushtyaadi karanakara vitate</td>
                <td>Om SrushtyaadiKaranakaraVitateyai Namah</td>
                <td>The Goddess Who is the Cause of Acts Like Creation</td>
              </tr>
              <tr>
                <td>896</td>
                <td>Dosha varjitaa</td>
                <td>Om DoshaVarjitayai Namah</td>
                <td>The Goddess Who does not Have Any Flaws</td>
              </tr>
              <tr>
                <td>897</td>
                <td>Jagallakshmi</td>
                <td>Om Jagallakshmiyai Namah</td>
                <td>The Goddess Who is Lakshmi of the Universe</td>
              </tr>
              <tr>
                <td>898</td>
                <td>Jaganmata</td>
                <td>Om Jaganmatayai Namah</td>
                <td>The Goddess Who is the Mother of the Universe</td>
              </tr>
              <tr>
                <td>899</td>
                <td>Vishnu Patni</td>
                <td>Om VishnuPatnyai Namah</td>
                <td>The Goddess Who is the Wife of Vishnu</td>
              </tr>
              <tr>
                <td>900</td>
                <td>Navakoti mahashakti samupasya padambhuja</td>
                <td>Om NavakotiMahashaktiSamupasyaPadambhujayai Namah</td>
                <td>
                  The Goddess Whose Lotus-Like Feet are Worshipped by 90 Million
                  Great Shaktis
                </td>
              </tr>
              <tr>
                <td>901</td>
                <td>Kanatsauvarna ratnadya</td>
                <td>Om KanatsauvarnaRatnadyayai Namah</td>
                <td>The Goddess Who Wears Gem Studded Gold Ornaments</td>
              </tr>
              <tr>
                <td>902</td>
                <td>Sarvabharana bhooshita</td>
                <td>Om SarvabharanaBhooshitayai Namah</td>
                <td>The Goddess Who Shines with All Sort of Ornaments</td>
              </tr>
              <tr>
                <td>903</td>
                <td>Anantanitya mahishi</td>
                <td>Om AnantanityaMahishyai Namah</td>
                <td>The Goddess Who is the Endless and Everlasting Queen</td>
              </tr>
              <tr>
                <td>904</td>
                <td>Prapancheshwara nayaki</td>
                <td>Om PrapancheshwaraNayakyai Namah</td>
                <td>The Goddess Who is the Leader for All Gods of the World</td>
              </tr>
              <tr>
                <td>905</td>
                <td>Atyucchrita padantastha</td>
                <td>Om AtyucchritaPadantasthayai Namah</td>
                <td>The Goddess Who is in Vaikuntha</td>
              </tr>
              <tr>
                <td>906</td>
                <td>Paramavyoma nayaki</td>
                <td>Om ParamavyomaNayakyai Namah</td>
                <td>
                  The Goddess Who is the Leader of All Divine Beings of the Sky
                </td>
              </tr>
              <tr>
                <td>907</td>
                <td>Nakaprushtha gataaraadhyaa</td>
                <td>Om NakaprushthaGataaraadhyayai Namah</td>
                <td>
                  The Goddess Who is Worshipped by All Who Have Reached Heaven
                </td>
              </tr>
              <tr>
                <td>908</td>
                <td>Vishnuloka vilasini</td>
                <td>Om VishnulokaVilasinyai Namah</td>
                <td>The Goddess Who Makes the World of Vishnu Shine</td>
              </tr>
              <tr>
                <td>909</td>
                <td>Vaikuntharaaja mahishi</td>
                <td>Om VaikuntharaajaMahishyai Namah</td>
                <td>The Goddess Who is the Queen of the King of Vaikuntha</td>
              </tr>
              <tr>
                <td>910</td>
                <td>Sriranga nagaraashrita</td>
                <td>Om SrirangaNagaraashritayai Namah</td>
                <td>The Goddess Who Lives in the Town of Sri Ranga</td>
              </tr>
              <tr>
                <td>911</td>
                <td>Ranga nayaki</td>
                <td>Om RangaNayakyai Namah</td>
                <td>The Goddess Who is the Chief of the Stage of Life</td>
              </tr>
              <tr>
                <td>912</td>
                <td>Bhooputri</td>
                <td>Om Bhooputrayai Namah</td>
                <td>The Goddess Who is the Daughter of Earth (Sita)</td>
              </tr>
              <tr>
                <td>913</td>
                <td>Krishne</td>
                <td>Om Krishnayai Namah</td>
                <td>The Goddess Who is the Wife of Krishna</td>
              </tr>
              <tr>
                <td>914</td>
                <td>Varada vallabhe</td>
                <td>Om VaradaVallabhayai Namah</td>
                <td>The Goddess Who is the Consort of Lord Varadaraja</td>
              </tr>
              <tr>
                <td>915</td>
                <td>Koti brahmadi samsevye</td>
                <td>Om KotiBrahmadiSamsevyayai Namah</td>
                <td>The Goddess Who is Served by Billions of Brahmas</td>
              </tr>
              <tr>
                <td>916</td>
                <td>Koti rudradi keertite</td>
                <td>Om KotiRudradiKeertitayai Namah</td>
                <td>The Goddess Who is Sung About by Billions of Rudras</td>
              </tr>
              <tr>
                <td>917</td>
                <td>Matulungamayam khetam bibhrati</td>
                <td>Om MatulungamayamKhetamBibhratiyai Namah</td>
                <td>The Goddess Who Holds the Shield Made by Pomegranate</td>
              </tr>
              <tr>
                <td>918</td>
                <td>Sauvarna chashakam bibhrati</td>
                <td>Om SauvarnaChashakamBibhratiyai Namah</td>
                <td>The Goddess Who Holds the Golden Goblet in Her Hands</td>
              </tr>
              <tr>
                <td>919</td>
                <td>Padmadvayam dadhana</td>
                <td>Om PadmadvayamDadhanaayai Namah</td>
                <td>The Goddess Who Holds Two Lotus Flowers</td>
              </tr>
              <tr>
                <td>920</td>
                <td>Poornakumbham bibhrati</td>
                <td>Om PoornakumbhamBibhratiyai Namah</td>
                <td>The Goddess Who Holds a Full Pot</td>
              </tr>
              <tr>
                <td>921</td>
                <td>Keeram dadhana</td>
                <td>Om KeeramDadhanaayai Namah</td>
                <td>The Goddess Who Holds a Parrot</td>
              </tr>
              <tr>
                <td>922</td>
                <td>Varadhabhaye dadhana</td>
                <td>Om VaradhabhayeDadhanaayai Namah</td>
                <td>The Goddess Who Protects and Blesses</td>
              </tr>
              <tr>
                <td>923</td>
                <td>Pasham bibhrati</td>
                <td>Om PashamBibhratiyai Namah</td>
                <td>The Goddess Who Holds a Rope</td>
              </tr>
              <tr>
                <td>924</td>
                <td>Ankusham bibhrati</td>
                <td>Om AnkushamBibhratiyai Namah</td>
                <td>The Goddess Who Holds a Goad</td>
              </tr>
              <tr>
                <td>925</td>
                <td>Shankam vahanti</td>
                <td>Om ShankamVahantiyai Namah</td>
                <td>The Goddess Who Holds a Shell</td>
              </tr>
              <tr>
                <td>926</td>
                <td>Chakram vahanti</td>
                <td>Om ChakramVahantiyai Namah</td>
                <td>The Goddess Who Holds a Wheel</td>
              </tr>
              <tr>
                <td>927</td>
                <td>Shoolam vahanti</td>
                <td>Om ShoolamVahantiyai Namah</td>
                <td>The Goddess Who Holds a Trident</td>
              </tr>
              <tr>
                <td>928</td>
                <td>Kripanikaam vahanti</td>
                <td>Om KripanikaamVahantiyai Namah</td>
                <td>The Goddess Who Holds a Sword</td>
              </tr>
              <tr>
                <td>929</td>
                <td>Dhanurbanau bibhrati</td>
                <td>Om DhanurbanauBibhratiyai Namah</td>
                <td>The Goddess Who Holds a Bow and Arrow</td>
              </tr>
              <tr>
                <td>930</td>
                <td>Akshamalam dadhana</td>
                <td>Om AkshamalamDadhanaayai Namah</td>
                <td>The Goddess Who Holds a Rosary of Rudraksha</td>
              </tr>
              <tr>
                <td>931</td>
                <td>Chinmudram bibhrati</td>
                <td>Om ChinmudramBibhratiyai Namah</td>
                <td>The Goddess Who Holds a Divine Symbol</td>
              </tr>
              <tr>
                <td>932</td>
                <td>Ashtaadashabhuje</td>
                <td>Om Ashtaadashabhujayai Namah</td>
                <td>The Goddess Who has Eighteen Hands</td>
              </tr>
              <tr>
                <td>933</td>
                <td>Maha astaadasha peethage</td>
                <td>Om MahaAshtaadashaPeethagayai Namah</td>
                <td>The Goddess Who has Eighteen Great Temples</td>
              </tr>
              <tr>
                <td>934</td>
                <td>Bhoomi niladi samsevye</td>
                <td>Om BhoomiNiladiSamsevyayai Namah</td>
                <td>The Goddess Who is Served by Earth and Nila Devi</td>
              </tr>
              <tr>
                <td>935</td>
                <td>Swami chittanuvartini</td>
                <td>Om SwamiChittanuvartinyai Namah</td>
                <td>
                  The Goddess Who Acts According to the Wishes of Her Husband
                </td>
              </tr>
              <tr>
                <td>936</td>
                <td>Padmalayaa</td>
                <td>Om Padmalayaayai Namah</td>
                <td>The Goddess Who Lives in a Lotus</td>
              </tr>
              <tr>
                <td>937</td>
                <td>Padmini</td>
                <td>Om Padminyai Namah</td>
                <td>The Goddess Who is as Pretty as Lotus</td>
              </tr>
              <tr>
                <td>938</td>
                <td>Poorna kumbhabhishe chite</td>
                <td>Om PoornaKumbhabhisheChiteyai Namah</td>
                <td>The Goddess Who is Anointed by a Pot Full of Water</td>
              </tr>
              <tr>
                <td>939</td>
                <td>Indiraa</td>
                <td>Om Indiraayai Namah</td>
                <td>The Goddess Who is of the Form Of Indra</td>
              </tr>
              <tr>
                <td>940</td>
                <td>Indirabhakshi</td>
                <td>Om Indirabhakshyai Namah</td>
                <td>The Goddess Who has Shine Like Moon</td>
              </tr>
              <tr>
                <td>941</td>
                <td>Ksheera sagara Kanyakaa</td>
                <td>Om KsheeraSagaraKanyakayai Namah</td>
                <td>The Goddess Who is the Lass of the Ocean of Milk</td>
              </tr>
              <tr>
                <td>942</td>
                <td>Bhargavi</td>
                <td>Om Bhargavyai Namah</td>
                <td>The Goddess Who is the Daughter of Sage Bhrigu</td>
              </tr>
              <tr>
                <td>943</td>
                <td>Svatantrecchaa</td>
                <td>Om Svatantrecchaayai Namah</td>
                <td>The Goddess Who does Acts Independently from Her Lord</td>
              </tr>
              <tr>
                <td>944</td>
                <td>Vashikrita jagatpati</td>
                <td>Om VashikritaJagatpatyai Namah</td>
                <td>The Goddess Who Attracted the Lord of the Universe</td>
              </tr>
              <tr>
                <td>945</td>
                <td>Mangalaanaam mangalaa</td>
                <td>Om MangalaanaamMangalaayai Namah</td>
                <td>
                  The Goddess Who is the Auspicious Among the Auspicious Ones
                </td>
              </tr>
              <tr>
                <td>946</td>
                <td>Devataanaam devataa</td>
                <td>Om DevataanaamDevataayai Namah</td>
                <td>The Goddess Who Holds a Bow</td>
              </tr>
              <tr>
                <td>947</td>
                <td>Uttamanamuttamaa</td>
                <td>Om UttamanamUttamaayai Namah</td>
                <td>The Goddess Who is Best Among the Best</td>
              </tr>
              <tr>
                <td>948</td>
                <td>Shreya</td>
                <td>Om Shreyayai Namah</td>
                <td>The Goddess Who has Great Fame</td>
              </tr>
              <tr>
                <td>949</td>
                <td>Parmamritaa</td>
                <td>Om Parmamritaayai Namah</td>
                <td>The Goddess Who is Best Among the Best</td>
              </tr>
              <tr>
                <td>950</td>
                <td>Dhandhanyaabhi vriddhi</td>
                <td>Om DhandhanyaabhiVriddhiyai Namah</td>
                <td>The Goddess Who Blesses with Increased Wealth</td>
              </tr>
              <tr>
                <td>951</td>
                <td>Sarvabhauma sukhechaya</td>
                <td>Om SarvabhaumaSukhechayayai Namah</td>
                <td>The Goddess Who Blesses a Happy Life of an Emperor</td>
              </tr>
              <tr>
                <td>952</td>
                <td>Aandolikadi Saubhagyaa</td>
                <td>Om AandolikadiSaubhagyaayai Namah</td>
                <td>
                  The Goddess Who Grants the Luck to Travel in a Palanquin
                </td>
              </tr>
              <tr>
                <td>953</td>
                <td>Mattebhadi mahodaya</td>
                <td>Om MattebhadiMahodayayai Namah</td>
                <td>The Goddess Who Possesses Exuberant Elephants</td>
              </tr>
              <tr>
                <td>954</td>
                <td>Putrapautrabhi vridhi</td>
                <td>Om PutrapautrabhiVriddhiyai Namah</td>
                <td>The Goddess Who Grants Increase in Sons and Grandsons</td>
              </tr>
              <tr>
                <td>955</td>
                <td>Vidya bhoga baladhikam</td>
                <td>Om VidyaBhogaBaladhikayai Namah</td>
                <td>
                  The Goddess Who Grants Increase in Knowledge and Pleasure
                </td>
              </tr>
              <tr>
                <td>956</td>
                <td>Ayurarogya sampatti</td>
                <td>Om AyurarogyaSampattiyai Namah</td>
                <td>The Goddess Who Grants Long Life, Health, and Wealth</td>
              </tr>
              <tr>
                <td>957</td>
                <td>Ashataishwarya</td>
                <td>Om Ashataishwaryayai Namah</td>
                <td>The Goddess Who Grants Eight Types of Wealth</td>
              </tr>
              <tr>
                <td>958</td>
                <td>Paramesha vibhooti</td>
                <td>Om ParameshaVibhootiayai Namah</td>
                <td>The Goddess Who is the Power of Parameshwara</td>
              </tr>
              <tr>
                <td>959</td>
                <td>Sookshmaat sookshma taraagati</td>
                <td>Om SookshmaatSookshmaTaraagatiyai Namah</td>
                <td>The Goddess Who is Smaller than the Smallest</td>
              </tr>
              <tr>
                <td>960</td>
                <td>Sadayapanga sandatta brahmendradi padasthiti</td>
                <td>Om SadayapangaSandattaBrahmendradiPadaSthitayai Namah</td>
                <td>
                  The Goddess Whose Mercy Grants Stable Positions to Brahma,
                  Indra, and Others
                </td>
              </tr>
              <tr>
                <td>961</td>
                <td>Avyaahata Mahabhagyaa</td>
                <td>Om AvyaahataMahabhagyaayai Namah</td>
                <td>The Goddess Who is Luck Without Any Breaks</td>
              </tr>
              <tr>
                <td>962</td>
                <td>Akshobhya vikramaa</td>
                <td>Om AkshobhyaVikramaayai Namah</td>
                <td>The Goddess Who has a Valour that Never Diminishes</td>
              </tr>
              <tr>
                <td>963</td>
                <td>Vedanaam samanvaya</td>
                <td>Om VedanaamSamanvayayai Namah</td>
                <td>The Goddess Who is the Meaning of Vedas</td>
              </tr>
              <tr>
                <td>964</td>
                <td>Vedanaama virodha</td>
                <td>Om VedanaamaVirodhayai Namah</td>
                <td>The Goddess Who is not the Enemy of Vedas</td>
              </tr>
              <tr>
                <td>965</td>
                <td>Nishreyasa padaprapti sadhana</td>
                <td>Om NishreyasaPadapraptiSaadhanayai Namah</td>
                <td>The Goddess Who is the Way and End to Salvation</td>
              </tr>
              <tr>
                <td>966</td>
                <td>Phala</td>
                <td>Om Phalayai Namah</td>
                <td>The Goddess Who Grants Results</td>
              </tr>
              <tr>
                <td>967</td>
                <td>Sri mantra rajaragyi</td>
                <td>Om SriMantraRajaragyai Namah</td>
                <td>The Goddess Who is the Queen of Sri Vidya</td>
              </tr>
              <tr>
                <td>968</td>
                <td>Srividya</td>
                <td>Om Srividyayai Namah</td>
                <td>The Goddess Who is Sri Vidya</td>
              </tr>
              <tr>
                <td>969</td>
                <td>Kshemakarini</td>
                <td>Om Kshemakarinyai Namah</td>
                <td>The Goddess Who is the Queen of Sri Vidya</td>
              </tr>
              <tr>
                <td>970</td>
                <td>Sreem bheeja japa santushtaa</td>
                <td>Om SreemBheejaJapaSantushtayai Namah</td>
                <td>
                  The Goddess Who Becomes Happy by the Chanting of the Root
                  Sreem
                </td>
              </tr>
              <tr>
                <td>971</td>
                <td>Aim Hreem Sreem Beeja palika</td>
                <td>Om AimHreemSreemBeejaPalikayai Namah</td>
                <td>
                  The Goddess Who is Worshipped by Chanting Aim, Hreem, Sreem
                </td>
              </tr>
              <tr>
                <td>972</td>
                <td>Prapatti marga sulabha</td>
                <td>Om PrapattiMargaSulabhayai Namah</td>
                <td>The Goddess Whom Following is Easy</td>
              </tr>
              <tr>
                <td>973</td>
                <td>Vishnuprathamakinkari</td>
                <td>Om VishnuprathamaKinkariyai Namah</td>
                <td>The Goddess Who is the First Servant of Lord Vishnu</td>
              </tr>
              <tr>
                <td>974</td>
                <td>Kleemkarartha savitri</td>
                <td>Om KleemkararthaSavitryai Namah</td>
                <td>The Goddess Who Made the Sound Kleem</td>
              </tr>
              <tr>
                <td>975</td>
                <td>Saumangalyaadhi devata</td>
                <td>Om SaumangalyaadhiDevatayai Namah</td>
                <td>The Goddess of Good Luck</td>
              </tr>
              <tr>
                <td>976</td>
                <td>Sri Shodashaakshari vidyaa</td>
                <td>Om SriShodashaakshariVidyaayai Namah</td>
                <td>The Goddess Who is the Knowledge of Sixteen Letters</td>
              </tr>
              <tr>
                <td>977</td>
                <td>Sri Yantra pura vasini</td>
                <td>Om SriYantraPuraVasinyai Namah</td>
                <td>The Goddess Who Lives in Sri Chakra</td>
              </tr>
              <tr>
                <td>978</td>
                <td>Sarva mangala maangalya</td>
                <td>Om SarvaMangalaMaangalyaayai Namah</td>
                <td>The Goddess Who is the Giver of Auspicious Things</td>
              </tr>
              <tr>
                <td>979</td>
                <td>Shive</td>
                <td>Om Shivayai Namah</td>
                <td>The Goddess Who is the Consort of Shiva</td>
              </tr>
              <tr>
                <td>980</td>
                <td>Sarvartha sadhike</td>
                <td>Om SarvarthaSadhikayai Namah</td>
                <td>The Goddess Who is the Fulfiller of All Wishes</td>
              </tr>
              <tr>
                <td>981</td>
                <td>Sharanye</td>
                <td>Om Sharanyayai Namah</td>
                <td>The Goddess Who is Fit to Be Surrendered To</td>
              </tr>
              <tr>
                <td>982</td>
                <td>Tryambake</td>
                <td>Om Tryambakayai Namah</td>
                <td>The Goddess Who is the Mother with Three Eyes</td>
              </tr>
              <tr>
                <td>983</td>
                <td>Narayani</td>
                <td>Om Narayaniyai Namah</td>
                <td>The Goddess Who is Narayani</td>
              </tr>
              <tr>
                <td>984</td>
                <td>Amala Lakshmi</td>
                <td>Om ShuddhaSattvaya Namah</td>
                <td>The Pure and Spotless Goddess of Wealth and Prosperity</td>
              </tr>
              <tr>
                <td>985</td>
                <td>Sadhana Lakshmi</td>
                <td>Om SiddhiDayinyai Namah</td>
                <td>The Goddess Who Grants Success in All Endeavors</td>
              </tr>
              <tr>
                <td>986</td>
                <td>Karunya Lakshmi</td>
                <td>Om Karunamayi Namah</td>
                <td>The Compassionate and Merciful Goddess</td>
              </tr>
              <tr>
                <td>987</td>
                <td>Sukhada Lakshmi</td>
                <td>Om SukhaPradayai Namah</td>
                <td>The Goddess Who Bestows Happiness and Comfort</td>
              </tr>
              <tr>
                <td>988</td>
                <td>Bhavya Lakshmi</td>
                <td>Om BhavyaSwarupinyai Namah</td>
                <td>The Goddess Who is Auspicious and Majestic</td>
              </tr>
              <tr>
                <td>989</td>
                <td>Ratnapriya Lakshmi</td>
                <td>Om Ratnapriyai Namah</td>
                <td>The Goddess Who Loves Gems and Bestows Riches</td>
              </tr>
              <tr>
                <td>990</td>
                <td>Chandralekha Lakshmi</td>
                <td>Om ChandralekhaRupinyai Namah</td>
                <td>The Goddess Who Shines Like the Crescent Moon</td>
              </tr>
              <tr>
                <td>991</td>
                <td>Harivallabha Lakshmi</td>
                <td>Om Harivallabhayai Namah</td>
                <td>The Beloved Consort of Lord Hari (Vishnu)</td>
              </tr>
              <tr>
                <td>992</td>
                <td>Pushkara Lakshmi</td>
                <td>Om Pushkaradayai Namah</td>
                <td>The Goddess Who Nourishes and Provides Abundance</td>
              </tr>
              <tr>
                <td>993</td>
                <td>Dharmadhara Lakshmi</td>
                <td>Om DharmaDharyai Namah</td>
                <td>The Goddess Who Upholds Dharma and Righteousness</td>
              </tr>
              <tr>
                <td>994</td>
                <td>Chitralekha Lakshmi</td>
                <td>Om ChitralekhaRupinyai Namah</td>
                <td>The Goddess Who is Artistic and Beautiful</td>
              </tr>
              <tr>
                <td>995</td>
                <td>Anugraha Lakshmi</td>
                <td>Om AnugrahaPradayai Namah</td>
                <td>The Goddess Who Blesses with Divine Grace</td>
              </tr>
              <tr>
                <td>996</td>
                <td>Samriddhi Lakshmi</td>
                <td>Om SamriddhiRupinyai Namah</td>
                <td>The Goddess Who is Prosperity and Growth</td>
              </tr>
              <tr>
                <td>997</td>
                <td>Taruni Lakshmi</td>
                <td>Om TaruniRupinyai Namah</td>
                <td>The Goddess Who is Youthful and Ever-Vibrant</td>
              </tr>
              <tr>
                <td>998</td>
                <td>Abhaya Lakshmi</td>
                <td>Om AbhayaPradayai Namah</td>
                <td>The Fearless Goddess Who Grants Protection</td>
              </tr>
              <tr>
                <td>999</td>
                <td>Mokshada Lakshmi</td>
                <td>Om MokshaPradayayai Namah</td>
                <td>The Goddess Who Bestows Liberation and Enlightenment</td>
              </tr>
              <tr>
                <td>1000</td>
                <td>Sudha Lakshmi</td>
                <td>Om SudhaSwarupinyai Namah</td>
                <td>
                  The Nectar-Like Goddess Who is the Essence of Immortality
                </td>
              </tr>
            </tbody>
          </table>
        </table>
        <h3>Significance Of Chanting Laxmi Sahastra Namavali</h3>
        <p>
          Goddess Lakshmi, known to be the Goddess of Wealth & Fortune, is one
          of the most worshipped deities in Hinduism. Her blessings are said to
          help people gain monetary and financial benefits.
        </p>
        <p>
          The Laxmi Sahastra Namavali list the 1000 different names associated
          with the Goddess. Chanting these names while facing the east direction
          is said to bring prosperity and wealth in one’s life.
        </p>
        <p>
          Along with this, the devotees gain Lakshmi’s divine blessings which
          also promotes peace and overall well being in the native’s life. The
          Lakshmi Sahasranamavali is an ideal way for one to seek Lakshmi’’s
          guidance, protection and also a spiritual connect witht he Goddess.
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
export default Lakshmi1000;

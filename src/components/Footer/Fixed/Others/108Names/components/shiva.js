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
const Shiva108FAQ = [
  {
    id: 1,
    title: "What is Devi Ashtottara Shatanamavali?",
    content:
      "Devi Ashtottara Shatanamavali is a sacred chant containing 108 names of Goddess Durga. It's like a spiritual playlist that helps you connect with the divine feminine energy. Each name represents a unique aspect of Maa Durga's power and grace.",
  },
  {
    id: 2,
    title: "Why is chanting 108 names of Maa Durga important?",
    content:
      "Chanting these names is believed to invoke Durga's blessings and protection. It's like sending your prayers and asking favours to the goddess. Many devotees find that this practice brings inner peace, strength, and spiritual growth.",
  },
  {
    id: 3,
    title: "How to chant 108 names of Durga?",
    content:
      "Start by finding a comfortable spot and setting a peaceful mood. You can use a mala (prayer beads), either Rudraksha, Shuddha Sphatika or Kamal bija to keep count. Or simply recite the names from the list. The key is to chant Devi 108 Namavali with focus and devotion.",
  },
  {
    id: 4,
    title: "What is the mythology behind the Devi 108 Namavali?",
    content:
      "According to Hindu mythology, Lord Shiva is the son of Maa Durga. Once, he paid respect and displayed his love towards her mother by reciting the 108 names of Goddess Durga.",
  },
  {
    id: 5,
    title: "Should we chant Devi Ashtottara Shatanamavali during Navaratri?",
    content:
      "Absolutely. In fact, chanting Devi 108 Namavali during Navaratri is considered extremely auspicious. It is the best way to honour and pray to the nine forms of Goddess Durga.",
  },
  {
    id: 6,
    title: "Can we chant 108 names of Durga at night?",
    content:
      "Yes, you can. But it is advisable to chant 108 names of Maa Durga during Brahma Muhurta. This period occurs 1.5 hours before the sunrise. Chanting during this time is believed to be most effective.",
  },
];

const Shiva108 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="108 Name of Lord Shiva - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1>108 Names of Lord Shiva</h1>
          <h2>Chant Shiv Namavali For Blessings</h2>
          <h3>Learn Shiva Ashtottara Shatanamavali</h3>
          <p>
            We sing prayers for blessings and inner peace, right? Well, one of
            the most powerful words to chant is the 108 names of Lord Shiva.
            Known as the Shiva Ashtottara Shatanamavali, chanting these sacred
            names can calm your heart, remove obstacles, and help you get the
            blessings of Lord Shiva - the destroyer of evil. Let’s read in
            detail to know more.
          </p>
          <h3>108 Lord Shiva Name With Meaning</h3>
          <p>
            The different names of Lord Shiva are included in powerful mantras
            that can bring immense spiritual benefits when chanted with
            devotion. Let's explore 108 names of Lord Shiva in english, along
            with associated mantra and meaning.
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
                  <th>Names</th>
                  <th>Mantra</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Shiva</td>
                  <td>Om Shivaya Namah।</td>
                  <td>Who is most holy</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Maheshwar</td>
                  <td>Om Maheshwaraya Namah।</td>
                  <td>God of Gods</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Shambhu</td>
                  <td>Om Shambhave Namah।</td>
                  <td>Giver of happiness and wealth</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Pinakin</td>
                  <td>Om Pinakine Namah।</td>
                  <td>One who wields the pinaka bow</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Shashishekhar</td>
                  <td>Om Shashishekharaya Namah।</td>
                  <td>Moon bearer</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Vamdevaaya</td>
                  <td>Om Vamadevaya Namah।</td>
                  <td>Which is auspicious and beautiful in every way.</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Virupaksha</td>
                  <td>Om Virupakshaya Namah।</td>
                  <td>Lord Shiva with slanted eyes</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Kapardi</td>
                  <td>Om Kapardine Namah।</td>
                  <td>Those who wear matted hair</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Neellohit</td>
                  <td>Om Nilalohitaya Namah।</td>
                  <td>Blue coloured</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Shankar</td>
                  <td>Om Shankaraya Namah।</td>
                  <td>Giver of happiness and wealth</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Shulpani</td>
                  <td>Om Shulapanine Namah।</td>
                  <td>Trident bearer</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Khatwangi</td>
                  <td>Om Khatvangine Namah।﻿namespace</td>
                  <td>Those who bear the weapon called Khatwang</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Vishnuvallabha</td>
                  <td>Om Vishnuvallabhaya Namah।</td>
                  <td>Which is very dear to Lord Vishnu.</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Shipivistha</td>
                  <td>Om Shipivishtaya Namah।</td>
                  <td>Permeated with rays</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Ambikanath</td>
                  <td>Om Ambikanathaya Namah।</td>
                  <td>Who is the husband of Goddess Ambika (Parvati)</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Srikanth</td>
                  <td>Om Shrikanthaya Namah।</td>
                  <td>Beautiful voiced</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Bhaktavatsal</td>
                  <td>Om Bhaktavatsalaya Namah।</td>
                  <td>One who showers love and compassion on devotees</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Bhav</td>
                  <td>Om Bhavaya Namah।</td>
                  <td>Self manifest</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Sharva</td>
                  <td>Om Sharvaya Namah।</td>
                  <td>Destroyer of all troubles and sins</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Trilokesh</td>
                  <td>Om Trilokeshaya Namah।</td>
                  <td>Lord and ruler of the three worlds</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Shitikantha</td>
                  <td>Om Shitikanthaya Namah।</td>
                  <td>White-throated</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Shivapriya</td>
                  <td>Om Shiva-Priyaya Namah।</td>
                  <td>Who is dear to Mother Parvati.</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Ugra</td>
                  <td>Om Ugraya Namah।</td>
                  <td>Extremely aggressive</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Kapali</td>
                  <td>Om Kapaline Namah।</td>
                  <td>The wearer of the skull garland</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Kamari</td>
                  <td>Om Kamaraye Namah।</td>
                  <td>Destroyer of cupid</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Andhakarsura Soodan</td>
                  <td>Om Andhakasurasudanaya Namah।</td>
                  <td>Slayer of Andhakasura</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Gangadhar</td>
                  <td>Om Gangadharaya Namah।</td>
                  <td>Those who wear Goddess Ganga in their hair</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Lalaataksha</td>
                  <td>Om Lalatakshaya Namah।</td>
                  <td>Who has a third eye on his forehead.</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Kaalkaal</td>
                  <td>Om Kalakalaya Namah।</td>
                  <td>Which is also the period of time.</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Kripanidhi</td>
                  <td>Om Kripanidhaye Namah।</td>
                  <td>
                    The one who is kind to the devotees, the ocean of grace
                  </td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Bhim</td>
                  <td>Om Bhimaya Namah।</td>
                  <td>Having a huge body</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Parashuhasta</td>
                  <td>Om Parashuhastaya Namah।</td>
                  <td>Those who wield weapons called Parshu</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Mrigpaani</td>
                  <td>Om Mrigapanaye Namah।</td>
                  <td>One holding a male deer in his hand</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Jatadhar</td>
                  <td>Om Jatadharaya Namah।</td>
                  <td>Those who wear matted hair</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Kailasvasi</td>
                  <td>Om Kailasavasine Namah।</td>
                  <td>Those who live on Mount Kailash</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Kavachi</td>
                  <td>Om Kawachine Namah।</td>
                  <td>Bearers of various types of weapons</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Kathor</td>
                  <td>Om Kathoraya Namah।</td>
                  <td>Extremely strong and extremely strong</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Tripurantaka</td>
                  <td>Om Tripurantakaya Namah।</td>
                  <td>The one who destroyed Tripurasura</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Vrishanka</td>
                  <td>Om Vrishankaya Namah।</td>
                  <td>
                    Whose flag has the symbol of Taurus (Nandi) inscribed on it.
                  </td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Vrishabharudh</td>
                  <td>Om Vrishabharudhaya Namah।</td>
                  <td>Who is riding on Nandi.</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Bhasmodhulitavigraha</td>
                  <td>Om Bhasmodhulitavigrahaya Namah।</td>
                  <td>Those who wear ashes all over their bodies</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Samapriya</td>
                  <td>Om Samapriyaya Namah।</td>
                  <td>Those who love equality.</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Swaramayi</td>
                  <td>Om Swaramayaya Namah।</td>
                  <td>Those who are proficient in music.</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Trimurti</td>
                  <td>Om Trayimurtaye Namah।</td>
                  <td>Which is one of the Trimurti (Brahma, Vishnu, Mahesh)</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Anishwara</td>
                  <td>Om Anishwaraya Namah।</td>
                  <td>Those who have no owner</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Sarvagya</td>
                  <td>Om Sarvajnaya Namah।</td>
                  <td>Who is omniscient.</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Parmatma</td>
                  <td>Om Paramatmane Namah।</td>
                  <td>Who is the best among all souls.</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Somsuryagnilochan</td>
                  <td>Om Somasuryagnilochanaya Namah।</td>
                  <td>Who has the moon, sun and fire as his three eyes</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Havi</td>
                  <td>Om Havishe Namah।</td>
                  <td>
                    Which is the form of Havi (the liquid given as offering in
                    Havan)
                  </td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Yajnamaya</td>
                  <td>Om Yajnamayaya Namah।</td>
                  <td>Who himself is a form of Yagya</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Som</td>
                  <td>Om Somaya Namah।</td>
                  <td>Which is as cool and pure as the moon.</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Panchavaktra</td>
                  <td>Om Panchavaktraya Namah।</td>
                  <td>Five headed</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Sadashiv</td>
                  <td>Om Sadashivaya Namah।</td>
                  <td>Which is always auspicious.</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Visvesvaraya</td>
                  <td>Om Vishveshwaraya Namah।</td>
                  <td>Lord of the entire universe</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Veerbhadra</td>
                  <td>Om Virabhadraya Namah।</td>
                  <td>Who is both furious and calm</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Gannath</td>
                  <td>Om Gananathaya Namah।</td>
                  <td>
                    Who is the ruler of all the Ganas (Gods, humans and demons)
                  </td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Prajapati</td>
                  <td>Om Prajapataye Namah।</td>
                  <td>Lord of all beings</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Hiranyareta</td>
                  <td>Om Hiranyaretase Namah।</td>
                  <td>One who possesses the brightness of a thousand suns</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Durdharsha</td>
                  <td>Om Durdharshaya Namah।</td>
                  <td>Those who cannot be defeated</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Girish</td>
                  <td>Om Girishaya Namah।</td>
                  <td>Who is the lord of the mountains.</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Girish</td>
                  <td>Om Girishaya Namah।</td>
                  <td>Those who sleep on Mount Kailash</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Anagh</td>
                  <td>Om Anaghaya Namah।</td>
                  <td>Who are free from vices and faults.</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Bhujangabhushan</td>
                  <td>Om Bujangabhushanaya Namah।</td>
                  <td>Those who wear snakes as jewellery</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Bharg</td>
                  <td>Om Bhargaya Namah।</td>
                  <td>Destroyer of all sins</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Giridhanva</td>
                  <td>Om Giridhanvane Namah।</td>
                  <td>One who holds Mount Meru as his bow</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Giripriya</td>
                  <td>Om Giripriyaya Namah।</td>
                  <td>Those who love mountains very much</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Krittivasa</td>
                  <td>Om Krittivasase Namah।</td>
                  <td>Baghambar bearer</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Purarati</td>
                  <td>Om Purarataye Namah।</td>
                  <td>Destroyer of Tripurasura and his Tripuras (worlds)</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Bhagwaan</td>
                  <td>Om Bhagawate Namah।</td>
                  <td>Who is the Almighty God</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Pramathadhipa</td>
                  <td>Om Pramathadhipaya Namah।</td>
                  <td>Lord of Pramathganas (Shivganas)</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Mrityunjaya</td>
                  <td>Om Mrityunjayaya Namah।</td>
                  <td>Conqueror of death</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Sukshmatanu</td>
                  <td>Om Sukshmatanave Namah।</td>
                  <td>Having a subtle body</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Jagadvyapi</td>
                  <td>Om Jagadvyapine Namah।</td>
                  <td>Present in the entire universe</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Jagadguru</td>
                  <td>Om Jagadguruve Namah।</td>
                  <td>Who is the Guru of all the worlds</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Vyomkesh</td>
                  <td>Om Vyomakeshaya Namah।</td>
                  <td>Whose hair is spread over the entire sky</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Mahasenajanaka</td>
                  <td>Om Mahasenajanakaya Namah।</td>
                  <td>Who is the father of Lord Kartikeya.</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Charuvikram</td>
                  <td>Om Charuvikramaya Namah।</td>
                  <td>Conqueror of beauty</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Rudra</td>
                  <td>Om Rudraya Namah।</td>
                  <td>
                    Those who are moved by the sufferings of the devotees.
                  </td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Bhutapati</td>
                  <td>Om Bhutapataye Namah।</td>
                  <td>
                    Who is the lord of the five elements (fire, air, water,
                    earth, sky)
                  </td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Sthanave</td>
                  <td>Om Sthanave Namah।</td>
                  <td>Who are firm and steadfast.</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Ahirbudhnya</td>
                  <td>Om Ahirbudhnyaya Namah।</td>
                  <td>Those who are the basis of the entire creation</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Digambar</td>
                  <td>Om Digambaraya Namah।</td>
                  <td>One who wears the universe as a garment</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Ashtamurti</td>
                  <td>Om Ashtamurtaye Namah।</td>
                  <td>Having eight forms</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Anekatma</td>
                  <td>Om Anekatmane Namah।</td>
                  <td>Taking many forms</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Sattvic</td>
                  <td>Om Sattvikaya Namah।</td>
                  <td>Lord of unlimited energy</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Shuddhavigraha</td>
                  <td>Om Shuddhavigrahaya Namah।</td>
                  <td>Which is completely pure and clean.</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Shashvat</td>
                  <td>Om Shashvataya Namah।</td>
                  <td>Which is eternal and indestructible.</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Khandaparashu</td>
                  <td>Om Khandaparashave Namah।</td>
                  <td>Bearers of broken halberds</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Ajj</td>
                  <td>Om Ajaya Namah।</td>
                  <td>Who is unborn, unlimited and invincible</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Pashavimochana</td>
                  <td>Om Pashavimochakaya Namah।</td>
                  <td>Liberating from all worldly bonds</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Mrid</td>
                  <td>Om Mridaya Namah।</td>
                  <td>Bringer of happiness and good fortune</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Pashupati</td>
                  <td>Om Pashupataye Namah।</td>
                  <td>Lord of all animals/creatures</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Dev</td>
                  <td>Om Devaya Namah।</td>
                  <td>Who is the almighty omnipresent God</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Mahadev</td>
                  <td>Om Mahadevaya Namah।</td>
                  <td>Who is the God of Gods also</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Avyaya</td>
                  <td>Om Avyayaya Namah।</td>
                  <td>Which are irreversible.</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Hari</td>
                  <td>Om Haraye Namah।</td>
                  <td>Destroyer of all sins</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Bhaganetrabhid</td>
                  <td>Om Bhaganetrabhide Namah।</td>
                  <td>Vulva eye damage</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Avyakt</td>
                  <td>Om Avyaktaya Namah।</td>
                  <td>Which are indirect.</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Dakshadhvarahara</td>
                  <td>Om Dakshadhwaraharaya Namah।</td>
                  <td>Those who destroy the Yagya of Daksh Prajapati</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Harr</td>
                  <td>Om Haraya Namah।</td>
                  <td>Destroyer of all sinful bonds</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Pooshadantabhit</td>
                  <td>Om Pushadantabhide Namah।</td>
                  <td>Those who break the teeth of God named Pushan</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Avyagra</td>
                  <td>Om Avyagraya Namah।</td>
                  <td>Stable and steadfast</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Sahasraksha</td>
                  <td>Om Sahasrakshaya Namah।</td>
                  <td>The one with a thousand eyes</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Sahasrapada</td>
                  <td>Om Sahasrapade Namah।</td>
                  <td>Having thousands of legs that are present everywhere.</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Apvargprad</td>
                  <td>Om Apavargapradaya Namah।</td>
                  <td>Giver of salvation</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Anant</td>
                  <td>Om Anantaya Namah।</td>
                  <td>Which is immortal and endless.</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Tarak</td>
                  <td>Om Tarakaya Namah।</td>
                  <td>Those who provide salvation to living beings</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Parmeshwar</td>
                  <td>Om Parameshwaraya Namah।</td>
                  <td>
                    The supreme ruling God who creates and destroys the entire
                    universe.
                  </td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Choosing A Lord Shiva Name For Newborn Baby</h3>
          <p>
            Since ancient times in Hinduism, people have kept different names of
            Lord Shiva for their baby boy. When it comes to naming your newborn,
            choosing a name inspired by Lord Shiva can be a beautiful way to
            honour the God and seek blessings.
          </p>
          <p>
            But with the powerful Shiv 108 name to choose from, how do you find
            the perfect fit? Let’s see.
          </p>
          <UnorderedList>
            <ListItem>
              Firstly, think deeply about the qualities you hope your child will
              display. Maybe chanting Shiva Ashtottara Shatanamavali can help
              you decide.
            </ListItem>
            <ListItem>
              Ask questions and let the meaning you connect with, guide your
              choice. Such as, Is it Shiva's determined strength and leadership?
              His deep wisdom? Or his role as the dancer and destroyer of evil?
            </ListItem>
            <ListItem>
              For example, if you conceive after years of struggle,
              ‘Veerabhadra’ could be fitting. Or if you seek protection,
              ‘Sharvanabhava’ may be suitable.
            </ListItem>
            <ListItem>Likewise, look for other names of Lord Shiva.</ListItem>
          </UnorderedList>
          <h3>Benefits of Chanting Lord Shiva 108 Names</h3>
          <p>
            Chanting the sacred 108 names of Lord Shiva can bring deep spiritual
            benefits into your life. This devotional practice, known as the
            Shiva Ashtottara Shatanamavali, gathers the qualities of the supreme
            being, Shiva, through powerful mantras, speaking of his divine
            glory.
          </p>
          <p>
            Let us see the benefits of chanting Lord Shiva name with meaning and
            faith.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Get Lord Shiva's Blessings:</b> By chanting different names of
              Lord Shiva, you open yourself to his holy attention. Ask for the
              blessings you desire, be it spiritual growth, good health, or
              freedom from obstacles. The Lord of Consciousness will guide you.
            </ListItem>
            <ListItem>
              <b>Opens Your Heart to Devotion:</b> As you recite each melodious
              name, you open your heart to high devotion (bhakti). This holy
              love helps dissolve the ego and bring you self-awareness.
            </ListItem>
            <ListItem>
              <b>Purifies Your Karma: </b> The sacred Mahadev 108 name acts as a
              powerful cleansing agent, burning away past karmic patterns and
              negative tendencies. Chanting them with sincerity frees you of
              gathered toxins - both physical and mental.
            </ListItem>
            <ListItem>
              <b>Gain Peace and Clarity:</b>The rhythmic chanting calms the
              disturbed mind and grants mental clarity. As you submit to the
              sacred sound vibrations, you gather determination and strength.
              This state brings calmness, focus and inner peace.
            </ListItem>
          </UnorderedList>
          <h3>The Ideal Way To Chant Lord Shiva 108 Names</h3>
          <p>
            With the proper direction, timing, beads and environment - chanting
            Shiva 108 names will leave you spiritually uplifted and blessed by
            the Lord's boundless blessings. Hence, it is important to find the
            perfect way to chant Mahadev 108 name. Let us see how.
          </p>
          <h3>Ideal Direction To Chant Shiv Namavali</h3>
          <p>
            Facing East while chanting the Shiv 108 name is considered
            auspicious. The rising sun signifies new beginnings and positivity -
            perfect for inviting Shiva's divine attention into your life.
          </p>
          <p>
            Sit cross-legged on the floor or a yoga mat. Look towards the
            Eastern side as you chant each sacred name with reverence.
          </p>
          <h3>Ideal Time To Chant Shiv Namavali</h3>
          <p>
            The best time to perform this powerful chant is during the sacred
            Brahma Muhurta period - about 1-2 hours before sunrise. This
            auspicious duration is believed to have boosted spiritual energy,
            making your prayers more powerful.
          </p>
          <p>
            If that's not possible, any time before noon works beautifully. The
            morning hours are relatively calm and peaceful, allowing you to
            concentrate fully.
          </p>
          <h3>Ideal Beads To Chant Shiv Namavali</h3>
          <p>
            Rudraksha beads are powerfully symbolic and deeply connected to Lord
            Shiva. It is believed to have originated as Lord Shiva Ashru (
            tears). Therefore, using a string of 108 Rudraksha beads enhances
            the spiritual vibrations as you chant and please the God.
          </p>
          <p>
            If unavailable, use a regular mala of sandalwood, tulsi or lotus
            seeds. The key is to have 108 beads plus the Guru bead to track your
            recitations accurately.
          </p>
          <h3>Ideal Setting / Atmosphere To Chant Shiv Namavali</h3>
          <p>
            Create a quiet atmosphere to help you stay focused. Burn a few
            sticks of incense like camphor or nag champa. You can also play
            devotional Shiva bhajans softly in the background.
          </p>
          <p>
            Sit in front of a Shiva lingam idol or picture to visualise his form
            clearly. Having fresh flowers like marigolds to offer at the end
            adds to the holiness.
          </p>
        </div>
      </Container>
      <FAQLayout faqData={Shiva108FAQ} />
    </Layout>
  );
};

export default Shiva108;

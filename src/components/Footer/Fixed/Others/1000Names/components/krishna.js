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
    question: "What is the meaning of Shree Krishna Sahasranamastotram?",
    answer:
      "Shree Krishna Sahasranamam is a prayer containing 1000 names of Krishna. This is said to have immense divine powers when chanted with great devotion in one go. Now, learn all 1000 Lord Krishna name list in English.",
  },
  {
    question: "What are the h=benefits of Krishna Sahasranamam?",
    answer:
      "Krishna Sahasranamam, the 1000 Lord Krishna name list, benefits you with mental peace, financial stability, professional growth, and Karma cleansing. It also removes life difficulties and enhances health and well-being. It also helps you achieve moksha.",
  },
  {
    question: "How to chant Shree Krishna Sahasranamam??",
    answer:
      "During Brahma Muhurat ( between 3:30 and 5:30 am), chant Shree Krishna Sahasranamam facing east or west. Use a Tulsi rosary bead to keep track of 1000 names of Krishna. End it with chanting - ॥ Iti Shri Krishna Sahasranamavalih Sampurna ॥.",
  },
  {
    question: "How to choose from 1000 names Lord Krishna for baby boy?",
    answer:
      "First of all, keep a 1000 Lord Krishna name list in front of you. Understand its meaning. Next, consult an astrologer or pandit who can then help you decide the most auspicious name from 1000 names Lord Krishna for baby boy.",
  },
  {
    question: "What happens when we chant Shree Krishna Sahasranamam daily?",
    answer:
      "Chanting Shree Krishna Sahasranamam daily requires dedication as it is Krishna Ji’s 1000 names. Someone who does it gains great focus and spiritual progress in his life.",
  },
  {
    question:
      "If not dail, on what occasions can we chant Krishna Sahasranamavali?",
    answer:
      "The most prominent festival to chant the Krishna Sahasranamavali is Janmashtami, which celebrates the birth of Lord Krishna. It is considered a highly auspicious time to recite his thousand names with devotion. Else, any Ekadashi days will be beneficial.",
  },
];

const Krishna1000 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout title="1000 Name of Lord Krishna- AstroSwarg" description="" keywords="">
<Breadcrumbs/>
    <Container>
      <div className="body">
        <h1 className="heading">1000 Names Of Lord Krishna</h1>
        <h2>Chant Shri Krishna Names and Get Blessings!</h2>
        <h3>Learn Shri Krishna Sahasranamavali</h3>
        <p>
          Shri Krishna Sahasranamavali is the list of 1000 names of Lord
          Krishna. Chanting them is one of the most powerful spiritual practices
          in Hinduism. Ahead, learn all Krishna’s names and gain his blessings.
        </p>
        <h3>1000 Lord Krishna Names</h3>
        <p>
          The 1000 Krishna names are inspired by his qualities and incidents in
          life, and hence, their chanting is powerful. We bring you a complete
          1000 Lord Krishna name list below.
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
                <th>1000 Name of Krishna</th>
                <th>Mantra</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Krishna</td>
                <td>Om Krishnaya Namah</td>
                <td>Lord Krishna</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Shrivallabha</td>
                <td>Om Shrivallabhaya Namah</td>
                <td>Beloved of Goddess Lakshmi</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sharngi</td>
                <td>Om Sharngine Namah</td>
                <td>Holder of the Bow</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Vishvaksena</td>
                <td>Om Vishvaksenaya Namah</td>
                <td>Protector of the Universe</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Svasiddhida</td>
                <td>Om Svasiddhidaya Namah</td>
                <td>Bestower of Success</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Kshirodadham</td>
                <td>Om Kshirodadhamne Namah</td>
                <td>One Who Resides in the Milk Ocean</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Vyuhesha</td>
                <td>Om Vyuheshaya Namah</td>
                <td>Lord of Formations</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Sheshashayi</td>
                <td>Om Sheshashayine Namah</td>
                <td>Recliner on Shesha</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Jaganmaya</td>
                <td>Om Jaganmayaya Namah</td>
                <td>Creator of the Universe</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Bhaktigamya</td>
                <td>Om Bhaktigamyaya Namah</td>
                <td>Accessible Through Devotion</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Trayimurti</td>
                <td>Om Trayimurtaye Namah</td>
                <td>Embodiment of the Three Gods</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Bharartavasudha</td>
                <td>Om Bharartavasudhastutaya Namah</td>
                <td>Praised by the Earth</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Devadeva</td>
                <td>Om Devadevaya Namah</td>
                <td>God of Gods</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Dayasindhu</td>
                <td>Om Dayasindhave Namah</td>
                <td>Ocean of Compassion</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Deva</td>
                <td>Om Devaya Namah</td>
                <td>The Divine</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Devashikhamana</td>
                <td>Om Devashikhamanaye Namah</td>
                <td>Crown Jewel of the Gods</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Sukhabhava</td>
                <td>Om Sukhabhavaya Namah</td>
                <td>Source of Joy</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Sukhadha</td>
                <td>Om Sukhadharaya Namah</td>
                <td>Bestower of Happiness</td>
              </tr>
              <tr>
                <td>19</td>
                <td>Mukunda</td>
                <td>Om Mukundaya Namah</td>
                <td>Giver of Liberation</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Mudita</td>
                <td>Om Muditashayaya Namah</td>
                <td>Blissful and Joyful</td>
              </tr>
              <tr>
                <td>21</td>
                <td>Avikriya</td>
                <td>Om Avikriyaya Namah</td>
                <td>Unchanging One</td>
              </tr>
              <tr>
                <td>22</td>
                <td>Kriyamurti</td>
                <td>Om Kriyamurtaye Namah</td>
                <td>Embodiment of Action</td>
              </tr>
              <tr>
                <td>23</td>
                <td>Adhyatma</td>
                <td>Om Adhyatmasvasvarupavate Namah</td>
                <td>Knower of the Spirit</td>
              </tr>
              <tr>
                <td>24</td>
                <td>Shishtabhilakshya</td>
                <td>Om Shishtabhilakshyaya Namah</td>
                <td>One Who Upholds Discipline</td>
              </tr>
              <tr>
                <td>25</td>
                <td>Bhutatma</td>
                <td>Om Bhutatmane Namah</td>
                <td>Soul of All Beings</td>
              </tr>
              <tr>
                <td>26</td>
                <td>Dharmatrana</td>
                <td>Om Dharmatranarthacheshtitaya Namah</td>
                <td>Protector of Dharma</td>
              </tr>
              <tr>
                <td>27</td>
                <td>Antaryami</td>
                <td>Om Antaryamine Namah</td>
                <td>The Inner Witness</td>
              </tr>
              <tr>
                <td>28</td>
                <td>Kalarupa</td>
                <td>Om Kalarupaya Namah</td>
                <td>Form of Time</td>
              </tr>
              <tr>
                <td>29</td>
                <td>Kalavayava</td>
                <td>Om Kalavayavasakshikaya Namah</td>
                <td>Witness of Time's Divisions</td>
              </tr>
              <tr>
                <td>30</td>
                <td>Vasudhahara</td>
                <td>Om Vasudhayasaharanaya Namah</td>
                <td>Bearer of the Earth</td>
              </tr>
              <tr>
                <td>31</td>
                <td>Naradaprerana</td>
                <td>Om Naradapreranonmukhaya Namah</td>
                <td>Inspirer of Narada</td>
              </tr>
              <tr>
                <td>32</td>
                <td>Prabhushna</td>
                <td>Om Prabhushnave Namah</td>
                <td>Master of Strength</td>
              </tr>
              <tr>
                <td>33</td>
                <td>Naradodgita</td>
                <td>Om Naradodgitaya Namah</td>
                <td>Praised by Narada</td>
              </tr>
              <tr>
                <td>34</td>
                <td>Lokaraksha</td>
                <td>Om Lokarakshaparayanaya Namah</td>
                <td>Protector of the World</td>
              </tr>
              <tr>
                <td>35</td>
                <td>Rauhineya</td>
                <td>Om Rauhineyakritanandaya Namah</td>
                <td>Son of Rohini</td>
              </tr>
              <tr>
                <td>36</td>
                <td>Yogajnana</td>
                <td>Om Yogajnananiyojakaya Namah</td>
                <td>Bestower of Knowledge of Yoga</td>
              </tr>
              <tr>
                <td>37</td>
                <td>Mahaguha</td>
                <td>Om Mahaguhantarnikshiptaya Namah</td>
                <td>Supreme Hidden Lord</td>
              </tr>
              <tr>
                <td>38</td>
                <td>Puranavapu</td>
                <td>Om Puranavapushe Namah</td>
                <td>Ancient and Eternal Form</td>
              </tr>
              <tr>
                <td>39</td>
                <td>Atmavan</td>
                <td>Om Atmavate Namah</td>
                <td>Self-Realized One</td>
              </tr>
              <tr>
                <td>40</td>
                <td>Shuravansha</td>
                <td>Om Shuravanshaikadhiye Namah</td>
                <td>Head of the Shura Dynasty</td>
              </tr>
              <tr>
                <td>41</td>
                <td>Shaura</td>
                <td>Om Shauraye Namah</td>
                <td>Brave and Valiant</td>
              </tr>
              <tr>
                <td>42</td>
                <td>Kansashanka</td>
                <td>Om Kansashankavishadakrite Namah</td>
                <td>Creator of Fear in Kansa</td>
              </tr>
              <tr>
                <td>43</td>
                <td>Vasudevollasa</td>
                <td>Om Vasudevollasachchhaktaye Namah</td>
                <td>One Who Radiates as Vasudeva</td>
              </tr>
              <tr>
                <td>44</td>
                <td>Devakyashtama</td>
                <td>Om Devakyashtamagarbhagaya Namah</td>
                <td>Eighth Son of Devaki</td>
              </tr>
              <tr>
                <td>45</td>
                <td>Vasudevastuta</td>
                <td>Om Vasudevastutaya Namah</td>
                <td>Praised by Vasudeva</td>
              </tr>
              <tr>
                <td>46</td>
                <td>Shrimat</td>
                <td>Om Shrimate Namah</td>
                <td>Possessor of Wealth and Glory</td>
              </tr>
              <tr>
                <td>47</td>
                <td>Devakinandana</td>
                <td>Om Devakinandanaya Namah</td>
                <td>Son of Devaki</td>
              </tr>
              <tr>
                <td>48</td>
                <td>Hara</td>
                <td>Om Haraye Namah</td>
                <td>Remover of Sins</td>
              </tr>
              <tr>
                <td>49</td>
                <td>Ashcharyabala</td>
                <td>Om Ashcharyabalaya Namah</td>
                <td>One with Astonishing Strength</td>
              </tr>
              <tr>
                <td>50</td>
                <td>Shrivatsalakshma</td>
                <td>Om Shrivatsalakshmavakshase Namah</td>
                <td>Bearer of the Shrivatsa Mark</td>
              </tr>
              <tr>
                <td>51</td>
                <td>Chaturbhuja</td>
                <td>Om Chaturbhujaya Namah</td>
                <td>The Four-Armed Lord</td>
              </tr>
              <tr>
                <td>52</td>
                <td>Svabhavotkrishtasadbhava</td>
                <td>Om Svabhavotkrishtasadbhavaya Namah</td>
                <td>One Whose Nature is Exalted and Pure</td>
              </tr>
              <tr>
                <td>53</td>
                <td>Krishnashtamyanta</td>
                <td>Om Krishnashtamyantasambhavaya Namah</td>
                <td>Born on the Ashtami (Eighth Day)</td>
              </tr>
              <tr>
                <td>54</td>
                <td>Prajapatyarkshasambhuta</td>
                <td>Om Prajapatyarkshasambhutaya Namah</td>
                <td>Born Under Rohini Nakshatra</td>
              </tr>
              <tr>
                <td>55</td>
                <td>Nishithasamayodita</td>
                <td>Om Nishithasamayoditaya Namah</td>
                <td>Born at Midnight</td>
              </tr>
              <tr>
                <td>56</td>
                <td>Shankhachakragada</td>
                <td>Om Shankhachakragada Namah</td>
                <td>Bearer of Conch, Discus, and Mace</td>
              </tr>
              <tr>
                <td>57</td>
                <td>Padmapani</td>
                <td>Om Padmapanaye Namah</td>
                <td>Holder of a Lotus</td>
              </tr>
              <tr>
                <td>58</td>
                <td>Padmanibhekshana</td>
                <td>Om Padmanibhekshanaya Namah</td>
                <td>Lotus-Eyed Lord</td>
              </tr>
              <tr>
                <td>59</td>
                <td>Kiriti</td>
                <td>Om Kiritine Namah</td>
                <td>Crowned Lord</td>
              </tr>
              <tr>
                <td>60</td>
                <td>Kaustubhoraska</td>
                <td>Om Kaustubhoraskaya Namah</td>
                <td>Adorned with the Kaustubha Gem</td>
              </tr>
              <tr>
                <td>61</td>
                <td>Sphuranmakarakundala</td>
                <td>Om Sphuranmakarakundalaya Namah</td>
                <td>Wearing Shining Crocodile-Shaped Earrings</td>
              </tr>
              <tr>
                <td>62</td>
                <td>Pitavasasa</td>
                <td>Om Pitavasase Namah</td>
                <td>Dressed in Yellow Clothes</td>
              </tr>
              <tr>
                <td>63</td>
                <td>Ghanashyama</td>
                <td>Om Ghanashyamaya Namah</td>
                <td>Dark as a Rain-Laden Cloud</td>
              </tr>
              <tr>
                <td>64</td>
                <td>Kunchitakuntala</td>
                <td>Om Kunchitanchitakuntalaya Namah</td>
                <td>With Curly Hair</td>
              </tr>
              <tr>
                <td>65</td>
                <td>Suvyaktavyakta</td>
                <td>Om Suvyaktavyaktabharanaya Namah</td>
                <td>Distinctly Adorned</td>
              </tr>
              <tr>
                <td>66</td>
                <td>Sutikagrihabhushana</td>
                <td>Om Sutikagrihabhushanaya Namah</td>
                <td>Adorning the Maternity Room</td>
              </tr>
              <tr>
                <td>67</td>
                <td>Karagarandhakaraghna</td>
                <td>Om Karagarandhakaraghnaya Namah</td>
                <td>Remover of Darkness from the Prison</td>
              </tr>
              <tr>
                <td>68</td>
                <td>Pitripragjanmasuchaka</td>
                <td>Om Pitripragjanmasuchakaya Namah</td>
                <td>Announcer of His Birth to His Father</td>
              </tr>
              <tr>
                <td>69</td>
                <td>Vasudevastuta</td>
                <td>Om Vasudevastutaya Namah</td>
                <td>Praised by Vasudeva</td>
              </tr>
              <tr>
                <td>70</td>
                <td>Stotra</td>
                <td>Om Stotraya Namah</td>
                <td>Worthy of Praise</td>
              </tr>
              <tr>
                <td>71</td>
                <td>Tapatrayanivarana</td>
                <td>Om Tapatrayanivaranaya Namah</td>
                <td>Remover of All Suffering</td>
              </tr>
              <tr>
                <td>72</td>
                <td>Niravadya</td>
                <td>Om Niravadyaya Namah</td>
                <td>Flawless and Pure</td>
              </tr>
              <tr>
                <td>73</td>
                <td>Kriyamurti</td>
                <td>Om Kriyamurtaye Namah</td>
                <td>Embodiment of Action</td>
              </tr>
              <tr>
                <td>74</td>
                <td>Nyayavakya</td>
                <td>Om Nyayavakyaniyojakaya Namah</td>
                <td>Upholder of Justice</td>
              </tr>
              <tr>
                <td>75</td>
                <td>Adrishtacheshta</td>
                <td>Om Adrishtacheshtaya Namah</td>
                <td>Performer of Unseen Deeds</td>
              </tr>
              <tr>
                <td>76</td>
                <td>Kutastha</td>
                <td>Om Kutasthaya Namah</td>
                <td>Immutable and Eternal</td>
              </tr>
              <tr>
                <td>77</td>
                <td>Dhritalaukikavigraha</td>
                <td>Om Dhritalaukikavigrahaya Namah</td>
                <td>Holder of a Divine Form</td>
              </tr>
              <tr>
                <td>78</td>
                <td>Maharshimanasollasa</td>
                <td>Om Maharshimanasollasaya Namah</td>
                <td>Delighter of Great Sages' Minds</td>
              </tr>
              <tr>
                <td>79</td>
                <td>Mahimangaladayaka</td>
                <td>Om Mahimangaladayakaya Namah</td>
                <td>Giver of Great Auspiciousness</td>
              </tr>
              <tr>
                <td>80</td>
                <td>Santoshitasuravrata</td>
                <td>Om Santoshitasuravrataya Namah</td>
                <td>Satisfier of the Vows of Gods</td>
              </tr>
              <tr>
                <td>81</td>
                <td>Sadhuchittaprasadaka</td>
                <td>Om Sadhuchittaprasadakaya Namah</td>
                <td>Pleaser of the Minds of the Pious</td>
              </tr>
              <tr>
                <td>82</td>
                <td>Janakopayanirdeshtri</td>
                <td>Om Janakopayanirdeshtre Namah</td>
                <td>Giver of Gifts to Janaka</td>
              </tr>
              <tr>
                <td>83</td>
                <td>Devakinayanotsava</td>
                <td>Om Devakinayanotsavaya Namah</td>
                <td>Delighter of Devaki's Eyes</td>
              </tr>
              <tr>
                <td>84</td>
                <td>Pitripaniparishkara</td>
                <td>Om Pitripaniparishkaraya Namah</td>
                <td>Enhancer of His Parents' Glory</td>
              </tr>
              <tr>
                <td>85</td>
                <td>Mohitagararakshaka</td>
                <td>Om Mohitagararakshakaya Namah</td>
                <td>Protector of the Bewildered</td>
              </tr>
              <tr>
                <td>86</td>
                <td>Svashaktyuddhatita</td>
                <td>Om Svashaktyuddhatitasheshakavataya Namah</td>
                <td>Uplifter with His Own Power</td>
              </tr>
              <tr>
                <td>87</td>
                <td>Pitrivahaka</td>
                <td>Om Pitrivahakaya Namah</td>
                <td>Bearer of His Parents</td>
              </tr>
              <tr>
                <td>88</td>
                <td>Sheshoragaphanachchatra</td>
                <td>Om Sheshoragaphanachchhatraya Namah</td>
                <td>Sheltered by the Serpent Shesha</td>
              </tr>
              <tr>
                <td>89</td>
                <td>Sheshoktakhyasahasra</td>
                <td>Om Sheshoktakhyasahasrakaya Namah</td>
                <td>Praised by Shesha in Thousands of Words</td>
              </tr>
              <tr>
                <td>90</td>
                <td>Yamunapuravidhvamsi</td>
                <td>Om Yamunapuravidhvansine Namah</td>
                <td>Destroyer of Yamuna's Troubles</td>
              </tr>
              <tr>
                <td>91</td>
                <td>Svabhasodbhasita</td>
                <td>Om Svabhasodbhasitavrajaya Namah</td>
                <td>Illuminator of Vraja with His Radiance</td>
              </tr>
              <tr>
                <td>92</td>
                <td>Kritatmavidya</td>
                <td>Om Kritatmavidyavinyasaya Namah</td>
                <td>Teacher of True Knowledge</td>
              </tr>
              <tr>
                <td>93</td>
                <td>Yogamaya</td>
                <td>Om Yogamayagrasambhavaya Namah</td>
                <td>Born from Yogamaya</td>
              </tr>
              <tr>
                <td>94</td>
                <td>Durganivedita</td>
                <td>Om Durganiveditodbhavaya Namah</td>
                <td>Offered to Durga</td>
              </tr>
              <tr>
                <td>95</td>
                <td>Yashodatalpashaya</td>
                <td>Om Yashodatalpashayakaya Namah</td>
                <td>Resting on Yashoda's Lap</td>
              </tr>
              <tr>
                <td>96</td>
                <td>Nandagopotsava</td>
                <td>Om Nandagopotsavasphurtaye Namah</td>
                <td>Delight of Nanda and the Cowherds</td>
              </tr>
              <tr>
                <td>97</td>
                <td>Vrajanandakarodaya</td>
                <td>Om Vrajanandakarodayaya Namah</td>
                <td>Giver of Joy to Vraja</td>
              </tr>
              <tr>
                <td>98</td>
                <td>Sujatajatakarmashri</td>
                <td>Om Sujatajatakarmashriye Namah</td>
                <td>Embodiment of the Auspicious Birth Rituals</td>
              </tr>
              <tr>
                <td>99</td>
                <td>Gopibhadrokti</td>
                <td>Om Gopibhadroktinirvritaya Namah</td>
                <td>Blessed by the Words of Gopis</td>
              </tr>
              <tr>
                <td>100</td>
                <td>Alikanidropagama</td>
                <td>Om Alikanidropagamaya Namah</td>
                <td>Feigner of Sleep</td>
              </tr>
              <tr>
                <td>101</td>
                <td>Putanastanapida</td>
                <td>Om Putanastanapidanaya Namah</td>
                <td>Slayer of Demoness Putana</td>
              </tr>
              <tr>
                <td>102</td>
                <td>Stanyattaputana</td>
                <td>Om Stanyattaputanapranaya Namah</td>
                <td>Drinker of Putana's Poisonous Milk</td>
              </tr>
              <tr>
                <td>103</td>
                <td>Putanakroshakara</td>
                <td>Om Putanakroshakarakaya Namah</td>
                <td>Giver of Salvation to Putana</td>
              </tr>
              <tr>
                <td>104</td>
                <td>Vinyastarakshagodhuli</td>
                <td>Om Vinyastarakshagodhulaye Namah</td>
                <td>Covered in Dust from Cow Herds</td>
              </tr>
              <tr>
                <td>105</td>
                <td>Yashodakaralalita</td>
                <td>Om Yashodakaralalitaya Namah</td>
                <td>Cared for Lovingly by Yashoda</td>
              </tr>
              <tr>
                <td>106</td>
                <td>Nandaghratashiromadhya</td>
                <td>Om Nandaghratashiromadhyaya Namah</td>
                <td>Center of Nanda’s Joy</td>
              </tr>
              <tr>
                <td>107</td>
                <td>Putanasugatiprada</td>
                <td>Om Putanasugatipradaya Namah</td>
                <td>Granter of Liberation to Putana</td>
              </tr>
              <tr>
                <td>108</td>
                <td>Bala</td>
                <td>Om Balaya Namah</td>
                <td>The Divine Child</td>
              </tr>
              <tr>
                <td>109</td>
                <td>Paryankanidralava</td>
                <td>Om Paryankanidralave Namah</td>
                <td>Feigner of Sleep in the Cradle</td>
              </tr>
              <tr>
                <td>110</td>
                <td>Mukharpitapadangula</td>
                <td>Om Mukharpitapadangulaye Namah</td>
                <td>Playing with His Toes in His Mouth</td>
              </tr>
              <tr>
                <td>111</td>
                <td>Anjanasnigdhanayana</td>
                <td>Om Anjanasnigdhanayanaya Namah</td>
                <td>Eyes Glowing Like Anjana (Collyrium)</td>
              </tr>
              <tr>
                <td>112</td>
                <td>Paryayankuritasmita</td>
                <td>Om Paryayankuritasmitaya Namah</td>
                <td>Smiling While Crawling</td>
              </tr>
              <tr>
                <td>113</td>
                <td>Lilaksha</td>
                <td>Om Lilakshaya Namah</td>
                <td>Full of Playful Glances</td>
              </tr>
              <tr>
                <td>114</td>
                <td>Taralaloka</td>
                <td>Om Taralalokaya Namah</td>
                <td>With Moving and Enchanting Eyes</td>
              </tr>
              <tr>
                <td>115</td>
                <td>Shakatasurabhanjana</td>
                <td>Om Shakatasurabhanjanaya Namah</td>
                <td>Destroyer of Demon Shakata</td>
              </tr>
              <tr>
                <td>116</td>
                <td>Dvijoditasvastyayana</td>
                <td>Om Dvijoditasvastyayanaya Namah</td>
                <td>Blessed by Brahmins</td>
              </tr>
              <tr>
                <td>117</td>
                <td>Mantraputajalapluta</td>
                <td>Om Mantraputajalaplutaya Namah</td>
                <td>Bathed with Sacred Chant Water</td>
              </tr>
              <tr>
                <td>118</td>
                <td>Yashodotsangaparyanka</td>
                <td>Om Yashodotsangaparyankaya Namah</td>
                <td>Resting on Yashoda’s Lap</td>
              </tr>
              <tr>
                <td>119</td>
                <td>Yashodamukhavikshaka</td>
                <td>Om Yashodamukhavikshakaya Namah</td>
                <td>Gazing at Yashoda’s Face</td>
              </tr>
              <tr>
                <td>120</td>
                <td>Yashodastanyamudita</td>
                <td>Om Yashodastanyamuditaya Namah</td>
                <td>Joyful from Yashoda’s Milk</td>
              </tr>
              <tr>
                <td>121</td>
                <td>Trinavartadidussaha</td>
                <td>Om Trinavartadidussahaya Namah</td>
                <td>Endurer of the Demon Trinavarta’s Wrath</td>
              </tr>
              <tr>
                <td>122</td>
                <td>Trinavartasuradhvansi</td>
                <td>Om Trinavartasuradhvansine Namah</td>
                <td>Destroyer of Trinavarta</td>
              </tr>
              <tr>
                <td>123</td>
                <td>Matrivismayakara</td>
                <td>Om Matrivismayakarakaya Namah</td>
                <td>Amazer of His Mother</td>
              </tr>
              <tr>
                <td>124</td>
                <td>Prashastanamakara</td>
                <td>Om Prashastanamakaranaya Namah</td>
                <td>Creator of Praise-Worthy Deeds</td>
              </tr>
              <tr>
                <td>125</td>
                <td>Januchankramanotsuka</td>
                <td>Om Januchankramanotsukaya Namah</td>
                <td>Eager to Crawl on His Knees</td>
              </tr>
              <tr>
                <td>126</td>
                <td>Vyalambichulikaratna</td>
                <td>Om Vyalambichulikaratnaya Namah</td>
                <td>Hair Decorated with Gems</td>
              </tr>
              <tr>
                <td>127</td>
                <td>Ghoshagopapraharshana</td>
                <td>Om Ghoshagopapraharshanaya Namah</td>
                <td>Delighter of the Cowherd Community</td>
              </tr>
              <tr>
                <td>128</td>
                <td>Svamukhapratibimbartha</td>
                <td>Om Svamukhapratibimbarthine Namah</td>
                <td>Playing with His Reflection</td>
              </tr>
              <tr>
                <td>129</td>
                <td>Grivavyaghranakhojjvala</td>
                <td>Om Grivavyaghranakhojjvalaya Namah</td>
                <td>Neck Radiant with Tiger-Like Nails</td>
              </tr>
              <tr>
                <td>130</td>
                <td>Pankanuleparuchira</td>
                <td>Om Pankanuleparuchiraya Namah</td>
                <td>Decorated with Mud</td>
              </tr>
              <tr>
                <td>131</td>
                <td>Mansalorukatita</td>
                <td>Om Mansalorukatitataya Namah</td>
                <td>With Sturdy Thighs and Hips</td>
              </tr>
              <tr>
                <td>132</td>
                <td>Ghrishtajanukaradvandva</td>
                <td>Om Ghrishtajanukaradvandvaya Namah</td>
                <td>With Strong Knees and Hands</td>
              </tr>
              <tr>
                <td>133</td>
                <td>Pratibimbanukarakriti</td>
                <td>Om Pratibimbanukarakrite Namah</td>
                <td>Copying His Own Reflection</td>
              </tr>
              <tr>
                <td>134</td>
                <td>Avyaktavarnavagvritti</td>
                <td>Om Avyaktavarnavagvrittaye Namah</td>
                <td>Speech That Cannot Be Understood</td>
              </tr>
              <tr>
                <td>135</td>
                <td>Chankrama</td>
                <td>Om Chankramaya Namah</td>
                <td>The Crawler</td>
              </tr>
              <tr>
                <td>136</td>
                <td>Anurupavayasya</td>
                <td>Om Anurupavayasyadhyaya Namah</td>
                <td>Suitable Playmate</td>
              </tr>
              <tr>
                <td>137</td>
                <td>Charukaumarachapala</td>
                <td>Om Charukaumarachapalaya Namah</td>
                <td>Beautiful and Playful Child</td>
              </tr>
              <tr>
                <td>138</td>
                <td>Vatsapuchchhasamakrishta</td>
                <td>Om Vatsapuchchhasamakrishtaya Namah</td>
                <td>Puller of Calf’s Tails</td>
              </tr>
              <tr>
                <td>139</td>
                <td>Vatsapuchchhavikarsana</td>
                <td>Om Vatsapuchchhavikarshanaya Namah</td>
                <td>Twister of Calf’s Tails</td>
              </tr>
              <tr>
                <td>140</td>
                <td>Vismaritanyavyapara</td>
                <td>Om Vismaritanyavyaparaya Namah</td>
                <td>Forgetful of Daily Activities</td>
              </tr>
              <tr>
                <td>141</td>
                <td>Gopagopimudavaha</td>
                <td>Om Gopagopimudavahaya Namah</td>
                <td>Bringer of Joy to Gopas and Gopis</td>
              </tr>
              <tr>
                <td>142</td>
                <td>Akalavatsanirmoktri</td>
                <td>Om Akalavatsanirmoktre Namah</td>
                <td>Liberator of Calves</td>
              </tr>
              <tr>
                <td>143</td>
                <td>Vajravyakroshasusmita</td>
                <td>Om Vajravyakroshasusmitaya Namah</td>
                <td>Smiling in the Face of Hardship</td>
              </tr>
              <tr>
                <td>144</td>
                <td>Navanitamahachora</td>
                <td>Om Navanitamahachoraya Namah</td>
                <td>Great Butter Thief</td>
              </tr>
              <tr>
                <td>145</td>
                <td>Darakaharahada</td>
                <td>Om Darakaharadayakaya Namah</td>
                <td>Destroyer of Distress in Children</td>
              </tr>
              <tr>
                <td>146</td>
                <td>Pitholukhalasopana</td>
                <td>Om Pitholukhalasopanaya Namah</td>
                <td>Climber of the Mortar</td>
              </tr>
              <tr>
                <td>147</td>
                <td>Kshirabhandavibhedana</td>
                <td>Om Kshirabhandavibhedanaya Namah</td>
                <td>Breaker of Milk Pots</td>
              </tr>
              <tr>
                <td>148</td>
                <td>Shikyabhandasamakarshana</td>
                <td>Om Shikyabhandasamakarshine Namah</td>
                <td>Puller of Hanging Pots</td>
              </tr>
              <tr>
                <td>149</td>
                <td>Dhvantagarapraveshaka</td>
                <td>Om Dhvantagarapraveshakrite Namah</td>
                <td>Enterer into Darkness</td>
              </tr>
              <tr>
                <td>150</td>
                <td>Bhusharatnaprakasha</td>
                <td>Om Bhusharatnaprakashadhyaya Namah</td>
                <td>Radiant as the Jewels of the Earth</td>
              </tr>
              <tr>
                <td>151</td>
                <td>Gopyupalambhabhartsita</td>
                <td>Om Gopyupalambhabhartsitaya Namah</td>
                <td>Reprimanded by the Gopis</td>
              </tr>
              <tr>
                <td>152</td>
                <td>Paragadhusaraka</td>
                <td>Om Paragadhusarakaraya Namah</td>
                <td>Covered in Dust</td>
              </tr>
              <tr>
                <td>153</td>
                <td>Mridbhakshanakrita</td>
                <td>Om Mridbhakshanakritekshanaya Namah</td>
                <td>Eater of Mud</td>
              </tr>
              <tr>
                <td>154</td>
                <td>Baloktamritkatharambha</td>
                <td>Om Baloktamritkatharambhaya Namah</td>
                <td>Inspirer of Nectar-like Stories</td>
              </tr>
              <tr>
                <td>155</td>
                <td>Mitrantargudhavigraha</td>
                <td>Om Mitrantargudhavigrahaya Namah</td>
                <td>Hidden Form Among Friends</td>
              </tr>
              <tr>
                <td>156</td>
                <td>Kritasantrasalolaksha</td>
                <td>Om Kritasantrasalolakshaya Namah</td>
                <td>Frightened and Trembling Eyes</td>
              </tr>
              <tr>
                <td>157</td>
                <td>Jananipratyayava</td>
                <td>Om Jananipratyayavahaya Namah</td>
                <td>Convincer of His Mother</td>
              </tr>
              <tr>
                <td>158</td>
                <td>Matridrishyattavadana</td>
                <td>Om Matridrishyattavadanaya Namah</td>
                <td>One Seen by His Mother</td>
              </tr>
              <tr>
                <td>159</td>
                <td>Vaktralakshyacharachara</td>
                <td>Om Vaktralakshyacharacharaya Namah</td>
                <td>Universe Seen in His Mouth</td>
              </tr>
              <tr>
                <td>160</td>
                <td>Yashodalalitasvata</td>
                <td>Om Yashodalalitasvatmane Namah</td>
                <td>Adored by Yashoda</td>
              </tr>
              <tr>
                <td>161</td>
                <td>Svayam Svachchhandya</td>
                <td>Om Svayam Svachchhandyamohanaya Namah</td>
                <td>Independent and Playful</td>
              </tr>
              <tr>
                <td>162</td>
                <td>Savitrisnehasanshlishta</td>
                <td>Om Savitrisnehasanshlishtaya Namah</td>
                <td>Hugged Lovingly by Savitri</td>
              </tr>
              <tr>
                <td>163</td>
                <td>Savitristanalopa</td>
                <td>Om Savitristanalopaya Namah</td>
                <td>Eager to Drink Savitri’s Milk</td>
              </tr>
              <tr>
                <td>164</td>
                <td>Navanitarthanaprahva</td>
                <td>Om Navanitarthanaprahvaya Namah</td>
                <td>Seeker of Fresh Butter</td>
              </tr>
              <tr>
                <td>165</td>
                <td>Navanitamahashana</td>
                <td>Om Navanitamahashanaya Namah</td>
                <td>Great Eater of Butter</td>
              </tr>
              <tr>
                <td>166</td>
                <td>Mrishakopaprakamposhta</td>
                <td>Om Mrishakopaprakamposhtaya Namah</td>
                <td>Pouting with Feigned Anger</td>
              </tr>
              <tr>
                <td>167</td>
                <td>Goshthanganavilokana</td>
                <td>Om Goshthanganavilokanaya Namah</td>
                <td>Observer of Goshtha Grounds</td>
              </tr>
              <tr>
                <td>168</td>
                <td>Dadhimanthaghatibhetta</td>
                <td>Om Dadhimanthaghatibhettre Namah</td>
                <td>Breaker of Churning Pots</td>
              </tr>
              <tr>
                <td>169</td>
                <td>Kinkinikvanasuchita</td>
                <td>Om Kinkinikvanasuchitaya Namah</td>
                <td>Signaled by Tinkling Anklets</td>
              </tr>
              <tr>
                <td>170</td>
                <td>Haiyangavinasika</td>
                <td>Om Haiyangavinasikaya Namah</td>
                <td>Destroyer of Butter Vessels</td>
              </tr>
              <tr>
                <td>171</td>
                <td>Mrishashrava</td>
                <td>Om Mrishashrave Namah</td>
                <td>Known for False Complaints</td>
              </tr>
              <tr>
                <td>172</td>
                <td>Chauryashankita</td>
                <td>Om Chauryashankitaya Namah</td>
                <td>Feared for His Theft</td>
              </tr>
              <tr>
                <td>173</td>
                <td>Jananishramavijnatra</td>
                <td>Om Jananishramavijnatre Namah</td>
                <td>Knower of His Mother’s Fatigue</td>
              </tr>
              <tr>
                <td>174</td>
                <td>Damabandhaniyantrita</td>
                <td>Om Damabandhaniyantritaya Namah</td>
                <td>Bound with Ropes</td>
              </tr>
              <tr>
                <td>175</td>
                <td>Damakalpa</td>
                <td>Om Damakalpaya Namah</td>
                <td>Playful While Bound</td>
              </tr>
              <tr>
                <td>176</td>
                <td>Chalapanga</td>
                <td>Om Chalapangaya Namah</td>
                <td>With Restless and Mischievous Glances</td>
              </tr>
              <tr>
                <td>177</td>
                <td>Gadholukhalabandhana</td>
                <td>Om Gadholukhalabandhanaya Namah</td>
                <td>Tied Firmly to the Mortar</td>
              </tr>
              <tr>
                <td>178</td>
                <td>Akrishtolukhal</td>
                <td>Om Akrishtolukhalaya Namah</td>
                <td>Puller of the Mortar</td>
              </tr>
              <tr>
                <td>179</td>
                <td>Ananta</td>
                <td>Om Anantaya Namah</td>
                <td>Infinite</td>
              </tr>
              <tr>
                <td>180</td>
                <td>Kuberasutashapavid</td>
                <td>Om Kuberasutashapavide Namah</td>
                <td>Remover of Kubera’s Sons’ Curse</td>
              </tr>
              <tr>
                <td>181</td>
                <td>Naradoktiparamarshi</td>
                <td>Om Naradoktiparamarshine Namah</td>
                <td>Understood Narada’s Words</td>
              </tr>
              <tr>
                <td>182</td>
                <td>Yamalarjunabhanjana</td>
                <td>Om Yamalarjunabhanjanaya Namah</td>
                <td>Uprooter of Yamalarjuna Trees</td>
              </tr>
              <tr>
                <td>183</td>
                <td>Dhanadatmajasanghushta</td>
                <td>Om Dhanadatmajasanghushtaya Namah</td>
                <td>Freed Kubera’s Sons</td>
              </tr>
              <tr>
                <td>184</td>
                <td>Nandamochitabandhana</td>
                <td>Om Nandamochitabandhanaya Namah</td>
                <td>Freed by Nanda</td>
              </tr>
              <tr>
                <td>185</td>
                <td>Balakodgitanirata</td>
                <td>Om Balakodgitanirataya Namah</td>
                <td>Engaged in Children’s Songs</td>
              </tr>
              <tr>
                <td>186</td>
                <td>Bahukshepoditapriya</td>
                <td>Om Bahukshepoditapriyaya Namah</td>
                <td>Delighting in Various Gestures</td>
              </tr>
              <tr>
                <td>187</td>
                <td>Atmajna</td>
                <td>Om Atmajnaya Namah</td>
                <td>Knower of the Self</td>
              </tr>
              <tr>
                <td>188</td>
                <td>Mitravata</td>
                <td>Om Mitravashyaya Namah</td>
                <td>Submissive to Friends</td>
              </tr>
              <tr>
                <td>189</td>
                <td>Gopigitagunodaya</td>
                <td>Om Gopigitagunodayaya Namah</td>
                <td>Singer of Glorious Songs</td>
              </tr>
              <tr>
                <td>190</td>
                <td>Prasthanashakata</td>
                <td>Om Prasthanashakatarudhaya Namah</td>
                <td>Traveler with Cowherds</td>
              </tr>
              <tr>
                <td>191</td>
                <td>Vrindavanakritalaya</td>
                <td>Om Vrindavanakritalayaya Namah</td>
                <td>Dweller of Vrindavana</td>
              </tr>
              <tr>
                <td>192</td>
                <td>Govatsapalanaikagra</td>
                <td>Om Govatsapalanaikagraya Namah</td>
                <td>Protector of Cow Calves</td>
              </tr>
              <tr>
                <td>193</td>
                <td>Nanakridaparichchhada</td>
                <td>Om Nanakridaparichchhadaya Namah</td>
                <td>Master of Diverse Games</td>
              </tr>
              <tr>
                <td>194</td>
                <td>Kshepanikshepanaprita</td>
                <td>Om Kshepanikshepanapritaya Namah</td>
                <td>Delighted in Throwing Games</td>
              </tr>
              <tr>
                <td>195</td>
                <td>Venuvadyavisharada</td>
                <td>Om Venuvadyavisharadaya Namah</td>
                <td>Expert Flute Player</td>
              </tr>
              <tr>
                <td>196</td>
                <td>Vrishavatsanukarana</td>
                <td>Om Vrishavatsanukaranaya Namah</td>
                <td>Imitator of Bull-Calves</td>
              </tr>
              <tr>
                <td>197</td>
                <td>Vrishadhvanavidambana</td>
                <td>Om Vrishadhvanavidambanaya Namah</td>
                <td>Mimicker of Bull-Calves’ Sounds</td>
              </tr>
              <tr>
                <td>198</td>
                <td>Niyuddhalilasanhrishta</td>
                <td>Om Niyuddhalilasanhrishta Namah</td>
                <td>Joyful in Wrestling Games</td>
              </tr>
              <tr>
                <td>199</td>
                <td>Kujanukritakokila</td>
                <td>Om Kujanukritakokilaya Namah</td>
                <td>Imitator of Cuckoo Birds</td>
              </tr>
              <tr>
                <td>200</td>
                <td>Upattahansagaman</td>
                <td>Om Upattahansagamanaya Namah</td>
                <td>Walker Like a Swan</td>
              </tr>
              <tr>
                <td>201</td>
                <td>Sarvajanturutanukrita</td>
                <td>Om Sarvajanturutanukrite Namah</td>
                <td>Imitator of All Beings</td>
              </tr>
              <tr>
                <td>202</td>
                <td>Bhringanukarina</td>
                <td>Om Bhringanukarine Namah</td>
                <td>Imitator of Bees</td>
              </tr>
              <tr>
                <td>203</td>
                <td>Dadhyannachora</td>
                <td>Om Dadhyannachoraya Namah</td>
                <td>Stealer of Curd Rice</td>
              </tr>
              <tr>
                <td>204</td>
                <td>Vatsapurassara</td>
                <td>Om Vatsapurassaraya Namah</td>
                <td>Leader of Calves</td>
              </tr>
              <tr>
                <td>205</td>
                <td>Bali</td>
                <td>Om Baline Namah</td>
                <td>Mighty One</td>
              </tr>
              <tr>
                <td>206</td>
                <td>Bakasuragrahi</td>
                <td>Om Bakasuragrahine Namah</td>
                <td>Slayer of Bakasura</td>
              </tr>
              <tr>
                <td>207</td>
                <td>Bakatalupradahaka</td>
                <td>Om Bakatalupradahakaya Namah</td>
                <td>Burner of Bakasura’s Body</td>
              </tr>
              <tr>
                <td>208</td>
                <td>Bhitagoparbhakahuta</td>
                <td>Om Bhitagoparbhakahutaya Namah</td>
                <td>Protector of Frightened Cowherds</td>
              </tr>
              <tr>
                <td>209</td>
                <td>Bakachanchuvidarana</td>
                <td>Om Bakachanchuvidaranaya Namah</td>
                <td>Splitter of Bakasura’s Beak</td>
              </tr>
              <tr>
                <td>210</td>
                <td>Bakasurara</td>
                <td>Om Bakasuraraye Namah</td>
                <td>Enemy of Bakasura</td>
              </tr>
              <tr>
                <td>211</td>
                <td>Gopala</td>
                <td>Om Gopalaya Namah</td>
                <td>Protector of Cows</td>
              </tr>
              <tr>
                <td>212</td>
                <td>Bala</td>
                <td>Om Balaya Namah</td>
                <td>The Divine Child</td>
              </tr>
              <tr>
                <td>213</td>
                <td>Baladbhutavaha</td>
                <td>Om Baladbhutavahaya Namah</td>
                <td>Performer of Miracles as a Child</td>
              </tr>
              <tr>
                <td>214</td>
                <td>Balabhadrasamashlishta</td>
                <td>Om Balabhadrasamashlishtaya Namah</td>
                <td>Embraced by Balabhadra</td>
              </tr>
              <tr>
                <td>215</td>
                <td>Kritakridanilayana</td>
                <td>Om Kritakridanilayanaya Namah</td>
                <td>Creator of Playful Spots</td>
              </tr>
              <tr>
                <td>216</td>
                <td>Kridasetuvidhanajna</td>
                <td>Om Kridasetuvidhanajnaya Namah</td>
                <td>Builder of Playful Bridges</td>
              </tr>
              <tr>
                <td>217</td>
                <td>Plavangotplavana</td>
                <td>Om Plavangotplavanaya Namah</td>
                <td>Leaper Like a Monkey</td>
              </tr>
              <tr>
                <td>218</td>
                <td>Adbhuta</td>
                <td>Om Adbhutaya Namah</td>
                <td>Wonderful and Marvelous</td>
              </tr>
              <tr>
                <td>219</td>
                <td>Kandukakrida</td>
                <td>Om Kandukakridanaya Namah</td>
                <td>Player of Ball Games</td>
              </tr>
              <tr>
                <td>220</td>
                <td>Luptanandadibhavaveda</td>
                <td>Om Luptanandadibhavavedanaya Namah</td>
                <td>Knower of Hidden Joys</td>
              </tr>
              <tr>
                <td>221</td>
                <td>Sumanolankrita</td>
                <td>Om Sumano’lankritashirase Namah</td>
                <td>Adorned with Garland</td>
              </tr>
              <tr>
                <td>222</td>
                <td>Svadusnigdhannashika</td>
                <td>Om Svadusnigdhannashikyabhrite Namah</td>
                <td>Carrier of Delicious Food</td>
              </tr>
              <tr>
                <td>223</td>
                <td>Gunjapralambana</td>
                <td>Om Gunjapralambanacharacharaya Namah</td>
                <td>Decorated with Gunjamalas</td>
              </tr>
              <tr>
                <td>224</td>
                <td>Pinchhairalakavesha</td>
                <td>Om Pinchhairalakaveshakrite Namah</td>
                <td>Decorated with Peacock Feathers</td>
              </tr>
              <tr>
                <td>225</td>
                <td>Vanyashanapriya</td>
                <td>Om Vanyashanapriyaya Namah</td>
                <td>Lover of Forest Food</td>
              </tr>
              <tr>
                <td>226</td>
                <td>Shringaravakaritavatsa</td>
                <td>Om Shringaravakaritavatsakaya Namah</td>
                <td>Decorated Calves</td>
              </tr>
              <tr>
                <td>227</td>
                <td>Manojnapallavottansa</td>
                <td>
                  Om Manojnapallavottansapushpasvechchhattashatpadaya Namah
                </td>
                <td>Adorned with Beautiful Leaves</td>
              </tr>
              <tr>
                <td>228</td>
                <td>Manjushinjitamanjira</td>
                <td>Om Manjushinjitamanjiracharanaya Namah</td>
                <td>Anklets Tinkling Sweetly</td>
              </tr>
              <tr>
                <td>229</td>
                <td>Karakankana</td>
                <td>Om Karakankanaya Namah</td>
                <td>Adorned with Bracelets</td>
              </tr>
              <tr>
                <td>230</td>
                <td>Anyonyashasana</td>
                <td>Om Anyonyashasanaya Namah</td>
                <td>Playful Instruction with Friends</td>
              </tr>
              <tr>
                <td>231</td>
                <td>Kridapata</td>
                <td>Om Kridapatave Namah</td>
                <td>Supreme in Playfulness</td>
              </tr>
              <tr>
                <td>232</td>
                <td>Paramakaitava</td>
                <td>Om Paramakaitavaya Namah</td>
                <td>Supreme Trickster</td>
              </tr>
              <tr>
                <td>233</td>
                <td>Pratidhvanapramudita</td>
                <td>Om Pratidhvanapramuditaya Namah</td>
                <td>Delighted by Echoes</td>
              </tr>
              <tr>
                <td>234</td>
                <td>Shakhachaturachankrama</td>
                <td>Om Shakhachaturachankramaya Namah</td>
                <td>Skillful Tree Climber</td>
              </tr>
              <tr>
                <td>235</td>
                <td>Aghadanavasanharta</td>
                <td>Om Aghadanavasanhartre Namah</td>
                <td>Slayer of the Demon Agha</td>
              </tr>
              <tr>
                <td>236</td>
                <td>Vajravighnavinashana</td>
                <td>Om Vajravighnavinashanaya Namah</td>
                <td>Destroyer of Immovable Obstacles</td>
              </tr>
              <tr>
                <td>237</td>
                <td>Vrajasanjivana</td>
                <td>Om Vrajasanjivanaya Namah</td>
                <td>Giver of Life to Vraja</td>
              </tr>
              <tr>
                <td>238</td>
                <td>Shreyonidhi</td>
                <td>Om Shreyonidhaye Namah</td>
                <td>Treasure of Excellence</td>
              </tr>
              <tr>
                <td>239</td>
                <td>Danavamuktida</td>
                <td>Om Danavamuktidaya Namah</td>
                <td>Liberator from Demonic Forces</td>
              </tr>
              <tr>
                <td>240</td>
                <td>Kalindipulina</td>
                <td>Om Kalindipulinasinaya Namah</td>
                <td>Dweller on Yamuna’s Banks</td>
              </tr>
              <tr>
                <td>241</td>
                <td>Sahabhuktavrajarbhaka</td>
                <td>Om Sahabhuktavrajarbhakaya Namah</td>
                <td>Eater with the Cowherd Boys</td>
              </tr>
              <tr>
                <td>242</td>
                <td>Kakshajatharavinyasta</td>
                <td>Om Kakshajatharavinyastavenave Namah</td>
                <td>Holder of Bamboo Stick</td>
              </tr>
              <tr>
                <td>243</td>
                <td>Vallavacheshtita</td>
                <td>Om Vallavacheshtitaya Namah</td>
                <td>Performer of Deeds for Cowherds</td>
              </tr>
              <tr>
                <td>244</td>
                <td>Bhujasandhyantara</td>
                <td>Om Bhujasandhyantaranyastashringavetraya Namah</td>
                <td>Resting His Staff on His Shoulder</td>
              </tr>
              <tr>
                <td>245</td>
                <td>Shuchismita</td>
                <td>Om Shuchismitaya Namah</td>
                <td>One with a Pure Smile</td>
              </tr>
              <tr>
                <td>246</td>
                <td>Vamapanisthadadhyanna</td>
                <td>Om Vamapanisthadadhyannakabalaya Namah</td>
                <td>Holding Butter in His Left Hand</td>
              </tr>
              <tr>
                <td>247</td>
                <td>Kalabhashana</td>
                <td>Om Kalabhashanaya Namah</td>
                <td>Eloquent Speaker</td>
              </tr>
              <tr>
                <td>248</td>
                <td>Angulyantaravinyasta</td>
                <td>Om Angulyantaravinyastaphalaya Namah</td>
                <td>Balancing Fruit Between Fingers</td>
              </tr>
              <tr>
                <td>249</td>
                <td>Paramapavana</td>
                <td>Om Paramapavanaya Namah</td>
                <td>Supreme Purifier</td>
              </tr>
              <tr>
                <td>250</td>
                <td>Adrishyatarnakanveshin</td>
                <td>Om Adrishyatarnakanveshine Namah</td>
                <td>Seeker of the Hidden Calf</td>
              </tr>
              <tr>
                <td>251</td>
                <td>Vallavarbhakabhitighna</td>
                <td>Om Vallavarbhakabhitighne Namah</td>
                <td>Remover of the Fear of Cowherd Boys</td>
              </tr>
              <tr>
                <td>252</td>
                <td>Adrishtavatsapavrata</td>
                <td>Om Adrishtavatsapavrataya Namah</td>
                <td>Knower of the Hidden Calves</td>
              </tr>
              <tr>
                <td>253</td>
                <td>Brahmavijnatavaibhava</td>
                <td>Om Brahmavijnatavaibhavaya Namah</td>
                <td>One Whose Glories Are Known to Brahma</td>
              </tr>
              <tr>
                <td>254</td>
                <td>Govatsavatsapanveshi</td>
                <td>Om Govatsavatsapanveshine Namah</td>
                <td>Seeker of Cow-Calves</td>
              </tr>
              <tr>
                <td>255</td>
                <td>Viratpurushavigraha</td>
                <td>Om Viratpurushavigrahaya Namah</td>
                <td>One Who Embodies the Cosmic Form</td>
              </tr>
              <tr>
                <td>256</td>
                <td>Svasankalpanurupartha</td>
                <td>Om Svasankalpanuruparthavatsavatsaparupadhrite Namah</td>
                <td>Creator of the Perfect Forms of Calves</td>
              </tr>
              <tr>
                <td>257</td>
                <td>Yathavatsakriyarupa</td>
                <td>Om Yathavatsakriyarupaya Namah</td>
                <td>Performer of Actions Befitting His Role</td>
              </tr>
              <tr>
                <td>258</td>
                <td>Yathasthananiveshana</td>
                <td>Om Yathasthananiveshanaya Namah</td>
                <td>One Who Restores Things to Their Places</td>
              </tr>
              <tr>
                <td>259</td>
                <td>Yathavrajarbhakakara</td>
                <td>Om Yathavrajarbhakakaraya Namah</td>
                <td>Caretaker of the Cowherd Boys</td>
              </tr>
              <tr>
                <td>260</td>
                <td>Gogopistanyapa</td>
                <td>Om Gogopistanyapaya Namah</td>
                <td>Giver of Milk to Cows and Cowherds</td>
              </tr>
              <tr>
                <td>261</td>
                <td>Sukhi</td>
                <td>Om Sukhine Namah</td>
                <td>Bestower of Happiness</td>
              </tr>
              <tr>
                <td>262</td>
                <td>Chiradbalohita</td>
                <td>Om Chiradbalohitaya Namah</td>
                <td>Eternal Protector of Children</td>
              </tr>
              <tr>
                <td>263</td>
                <td>Danta</td>
                <td>Om Dantaya Namah</td>
                <td>The Calm and Composed One</td>
              </tr>
              <tr>
                <td>264</td>
                <td>Brahmavijnatavaibhava</td>
                <td>Om Brahmavijnatavaibhavaya Namah</td>
                <td>Known to the Creator, Brahma</td>
              </tr>
              <tr>
                <td>265</td>
                <td>Vichitrashakti</td>
                <td>Om Vichitrashaktaye Namah</td>
                <td>Possessor of Marvelous Powers</td>
              </tr>
              <tr>
                <td>266</td>
                <td>Vyalinasrishtagovatsa</td>
                <td>Om Vyalinasrishtagovatsavatsapaya Namah</td>
                <td>Creator of Calves Among Serpents</td>
              </tr>
              <tr>
                <td>267</td>
                <td>Dhatristuta</td>
                <td>Om Dhatristutaya Namah</td>
                <td>Praised by Nurses and Guardians</td>
              </tr>
              <tr>
                <td>268</td>
                <td>Sarvarthasadhaka</td>
                <td>Om Sarvarthasadhakaya Namah</td>
                <td>Fulfill-er of All Purposes</td>
              </tr>
              <tr>
                <td>269</td>
                <td>Brahma</td>
                <td>Om Brahmane Namah</td>
                <td>The Absolute Creator</td>
              </tr>
              <tr>
                <td>270</td>
                <td>Brahmamaya</td>
                <td>Om Brahmamayaya Namah</td>
                <td>Embodiment of Brahman</td>
              </tr>
              <tr>
                <td>271</td>
                <td>Avyakta</td>
                <td>Om Avyaktaya Namah</td>
                <td>Unmanifested</td>
              </tr>
              <tr>
                <td>272</td>
                <td>Tejorupa</td>
                <td>Om Tejorupaya Namah</td>
                <td>Embodiment of Radiance</td>
              </tr>
              <tr>
                <td>273</td>
                <td>Sukhatmaka</td>
                <td>Om Sukhatmakaya Namah</td>
                <td>The Blissful Soul</td>
              </tr>
              <tr>
                <td>274</td>
                <td>Nirukta</td>
                <td>Om Niruktaya Namah</td>
                <td>Beyond Description</td>
              </tr>
              <tr>
                <td>275</td>
                <td>Vyakrita</td>
                <td>Om Vyakritaye Namah</td>
                <td>The Manifest One</td>
              </tr>
              <tr>
                <td>276</td>
                <td>Vyakta</td>
                <td>Om Vyaktaya Namah</td>
                <td>The Revealed One</td>
              </tr>
              <tr>
                <td>277</td>
                <td>Niralambanabhavana</td>
                <td>Om Niralambanabhavanaya Namah</td>
                <td>Supporter Without Dependency</td>
              </tr>
              <tr>
                <td>278</td>
                <td>Prabhavishnu</td>
                <td>Om Prabhavishnave Namah</td>
                <td>The Powerful Lord</td>
              </tr>
              <tr>
                <td>279</td>
                <td>Atantrika</td>
                <td>Om Atantrikaya Namah</td>
                <td>Free from Bondage</td>
              </tr>
              <tr>
                <td>280</td>
                <td>Devapakshartharupa</td>
                <td>Om Devapakshartharupadhrite Namah</td>
                <td>Protector of the Gods</td>
              </tr>
              <tr>
                <td>281</td>
                <td>Akama</td>
                <td>Om Akamaya Namah</td>
                <td>Desireless</td>
              </tr>
              <tr>
                <td>282</td>
                <td>Sarvavedada</td>
                <td>Om Sarvavedadaye Namah</td>
                <td>Knower of All Scriptures</td>
              </tr>
              <tr>
                <td>283</td>
                <td>Aniya</td>
                <td>Om Aniyase Namah</td>
                <td>The Smallest</td>
              </tr>
              <tr>
                <td>284</td>
                <td>Sthularupa</td>
                <td>Om Sthularupavate Namah</td>
                <td>The Gross Form</td>
              </tr>
              <tr>
                <td>285</td>
                <td>Vyapi</td>
                <td>Om Vyapine Namah</td>
                <td>The All-Pervading One</td>
              </tr>
              <tr>
                <td>286</td>
                <td>Vyapya</td>
                <td>Om Vyapyaya Namah</td>
                <td>The One Who Encompasses All</td>
              </tr>
              <tr>
                <td>287</td>
                <td>Kripakartre</td>
                <td>Om Kripakartre Namah</td>
                <td>Creator of Compassion</td>
              </tr>
              <tr>
                <td>288</td>
                <td>Vichitrachara</td>
                <td>Om Vichitracharasammataya Namah</td>
                <td>Performer of Unique Actions</td>
              </tr>
              <tr>
                <td>289</td>
                <td>Chhandomaya</td>
                <td>Om Chhandomayaya Namah</td>
                <td>The One Who is Rhythmic</td>
              </tr>
              <tr>
                <td>290</td>
                <td>Pradhanatma</td>
                <td>Om Pradhanatmane Namah</td>
                <td>The Supreme Soul</td>
              </tr>
              <tr>
                <td>291</td>
                <td>Murtamurtadvayakrita</td>
                <td>Om Murtamurtadvayakritaye Namah</td>
                <td>Creator of Both Formed and Formless</td>
              </tr>
              <tr>
                <td>292</td>
                <td>Anekamurti</td>
                <td>Om Anekamurtaye Namah</td>
                <td>The One with Infinite Forms</td>
              </tr>
              <tr>
                <td>293</td>
                <td>Akrodha</td>
                <td>Om Akrodhaya Namah</td>
                <td>Free from Anger</td>
              </tr>
              <tr>
                <td>294</td>
                <td>Parasman</td>
                <td>Om Parasmai Namah</td>
                <td>The Supreme Transcendent</td>
              </tr>
              <tr>
                <td>295</td>
                <td>Prakriti</td>
                <td>Om Prakritaye Namah</td>
                <td>The Nature</td>
              </tr>
              <tr>
                <td>296</td>
                <td>Akrama</td>
                <td>Om Akramaya Namah</td>
                <td>The Unconquerable</td>
              </tr>
              <tr>
                <td>297</td>
                <td>Sakalavaranopeta</td>
                <td>Om Sakalavaranopetaya Namah</td>
                <td>Free from All Coverings</td>
              </tr>
              <tr>
                <td>298</td>
                <td>Sarvadeva</td>
                <td>Om Sarvadevaya Namah</td>
                <td>The Lord of All Gods</td>
              </tr>
              <tr>
                <td>299</td>
                <td>Maheshvara</td>
                <td>Om Maheshvaraya Namah</td>
                <td>The Great God</td>
              </tr>
              <tr>
                <td>300</td>
                <td>Mahaprabhavana</td>
                <td>Om Mahaprabhavanaya Namah</td>
                <td>One of Great Influence</td>
              </tr>
              <tr>
                <td>301</td>
                <td>Purvavatsavatsapadarshaka</td>
                <td>Om Purvavatsavatsapadarshakaya Namah</td>
                <td>Revealer of Calves Previously Hidden</td>
              </tr>
              <tr>
                <td>302</td>
                <td>Krishnayadavagopala</td>
                <td>Om Krishnayadavagopalaya Namah</td>
                <td>Protector of Yadavas</td>
              </tr>
              <tr>
                <td>303</td>
                <td>Gopalokanaharshita</td>
                <td>Om Gopalokanaharshitaya Namah</td>
                <td>Delighter of Cowherds</td>
              </tr>
              <tr>
                <td>304</td>
                <td>Smiling ekshaharshitabrahma</td>
                <td>Om Smitekshaharshitabrahmane Namah</td>
                <td>Gladdener of Brahma with His Smile</td>
              </tr>
              <tr>
                <td>305</td>
                <td>Bhaktavatsalavakpriya</td>
                <td>Om Bhaktavatsalavakpriyaya Namah</td>
                <td>Lover of Devotees and Their Words</td>
              </tr>
              <tr>
                <td>306</td>
                <td>Brahmanandashrudhautanghra</td>
                <td>Om Brahmanandashrudhautanghraye Namah</td>
                <td>Worshipped by Tears of Brahma’s Joy</td>
              </tr>
              <tr>
                <td>307</td>
                <td>Lilavaichitryakovida</td>
                <td>Om Lilavaichitryakovidaya Namah</td>
                <td>Master of Diverse Playful Acts</td>
              </tr>
              <tr>
                <td>308</td>
                <td>Balabhadraikahridaya</td>
                <td>Om Balabhadraikahridayaya Namah</td>
                <td>Closely Attached to Balabhadra</td>
              </tr>
              <tr>
                <td>309</td>
                <td>Namakaritagokula</td>
                <td>Om Namakaritagokulaya Namah</td>
                <td>Namely Associated with Gokula</td>
              </tr>
              <tr>
                <td>310</td>
                <td>Gopalabalaka</td>
                <td>Om Gopalabalakaya Namah</td>
                <td>Young Cowherd</td>
              </tr>
              <tr>
                <td>311</td>
                <td>Bhavya</td>
                <td>Om Bhavyaya Namah</td>
                <td>The Graceful One</td>
              </tr>
              <tr>
                <td>312</td>
                <td>Rajjuyajnepavitavata</td>
                <td>Om Rajjuyajnepavitavate Namah</td>
                <td>Sacred Thread Worn at the Right Age</td>
              </tr>
              <tr>
                <td>313</td>
                <td>Vrikshachchhayahata</td>
                <td>Om Vrikshachchhayahatashantaye Namah</td>
                <td>Resting Under Tree Shade</td>
              </tr>
              <tr>
                <td>314</td>
                <td>Gopotsangopabarhina</td>
                <td>Om Gopotsangopabarhinaya Namah</td>
                <td>Provider of Shelter to Cowherds</td>
              </tr>
              <tr>
                <td>315</td>
                <td>Gopasamvahitapada</td>
                <td>Om Gopasamvahitapadaya Namah</td>
                <td>Revered Feet by Cowherds</td>
              </tr>
              <tr>
                <td>316</td>
                <td>Gopavyajanavijita</td>
                <td>Om Gopavyajanavijitaya Namah</td>
                <td>Fanned by Cowherds</td>
              </tr>
              <tr>
                <td>317</td>
                <td>Gopaganasukhonnidra</td>
                <td>Om Gopaganasukhonnidraya Namah</td>
                <td>Rejoicer of Cowherds While Sleeping</td>
              </tr>
              <tr>
                <td>318</td>
                <td>Shridamarjitasauhrida</td>
                <td>Om Shridamarjitasauhridaya Namah</td>
                <td>Friend of Shridama</td>
              </tr>
              <tr>
                <td>319</td>
                <td>Sunandasuhrida</td>
                <td>Om Sunandasuhride Namah</td>
                <td>Affectionate to Sunanda</td>
              </tr>
              <tr>
                <td>320</td>
                <td>Ekatma</td>
                <td>Om Ekatmane Namah</td>
                <td>Embodiment of Unity</td>
              </tr>
              <tr>
                <td>321</td>
                <td>Subalapranaranjana</td>
                <td>Om Subalapranaranjanaya Namah</td>
                <td>Delighter of Subala</td>
              </tr>
              <tr>
                <td>322</td>
                <td>Talivanakritakrida</td>
                <td>Om Talivanakritakridaya Namah</td>
                <td>Player in Talavana Forest</td>
              </tr>
              <tr>
                <td>323</td>
                <td>Balapatitadhenuka</td>
                <td>Om Balapatitadhenukaya Namah</td>
                <td>Slayer of Demon Dhenuka</td>
              </tr>
              <tr>
                <td>324</td>
                <td>Gopisaubhagyasambhavya</td>
                <td>Om Gopisaubhagyasambhavyaya Namah</td>
                <td>Source of Fortune for Gopis</td>
              </tr>
              <tr>
                <td>325</td>
                <td>Godhulichchhuritala</td>
                <td>Om Godhulichchhuritalakaya Namah</td>
                <td>Covered with Dust Raised by Cattle</td>
              </tr>
              <tr>
                <td>326</td>
                <td>Gopivirahasantapta</td>
                <td>Om Gopivirahasantaptaya Namah</td>
                <td>Distressed by Separation from Cowherds</td>
              </tr>
              <tr>
                <td>327</td>
                <td>Gopikakritamajjana</td>
                <td>Om Gopikakritamajjanaya Namah</td>
                <td>Bather with Gopis</td>
              </tr>
              <tr>
                <td>328</td>
                <td>Pralambabahu</td>
                <td>Om Pralambabahave Namah</td>
                <td>Long-Armed Warrior</td>
              </tr>
              <tr>
                <td>329</td>
                <td>Utphullapundarika</td>
                <td>Om Utphullapundarikavatansakaya Namah</td>
                <td>Adorned with Blooming Lotus Flowers</td>
              </tr>
              <tr>
                <td>330</td>
                <td>Vilasalalitasmera</td>
                <td>Om Vilasalalitasmeragarbhalilavalokanaya Namah</td>
                <td>Smiling with Playful Glances</td>
              </tr>
              <tr>
                <td>331</td>
                <td>Sragbhushananulepadhya</td>
                <td>Om Sragbhushananulepadhyaya Namah</td>
                <td>Decorated with Garland and Sandalwood</td>
              </tr>
              <tr>
                <td>332</td>
                <td>Jananyupahritannabhuja</td>
                <td>Om Jananyupahritannabhuje Namah</td>
                <td>Feeder of Food Offered by His Mother</td>
              </tr>
              <tr>
                <td>333</td>
                <td>Varashayyashaya</td>
                <td>Om Varashayyashayaya Namah</td>
                <td>Sleeper on a Comfortable Bed</td>
              </tr>
              <tr>
                <td>334</td>
                <td>Radhapremasallapa</td>
                <td>Om Radhapremasallapanirvritaya Namah</td>
                <td>Converser with Radha in Love</td>
              </tr>
              <tr>
                <td>335</td>
                <td>Yamunatatasanchari</td>
                <td>Om Yamunatatasancharine Namah</td>
                <td>Wanderer Along Yamuna’s Banks</td>
              </tr>
              <tr>
                <td>336</td>
                <td>Vishartavrajaharshada</td>
                <td>Om Vishartavrajaharshadaya Namah</td>
                <td>Delighter of Vraja’s Distressed People</td>
              </tr>
              <tr>
                <td>337</td>
                <td>Kaliyakrodhajanaka</td>
                <td>Om Kaliyakrodhajanakaya Namah</td>
                <td>Enrager of the Serpent Kaliya</td>
              </tr>
              <tr>
                <td>338</td>
                <td>Vriddhahikulaveshti</td>
                <td>Om Vriddhahikulaveshtitaya Namah</td>
                <td>Surrounded by Elders of His Clan</td>
              </tr>
              <tr>
                <td>339</td>
                <td>Kaliyahiphanarangana</td>
                <td>Om Kaliyahiphanaranganataya Namah</td>
                <td>Dancer on Kaliya’s Serpent Hoods</td>
              </tr>
              <tr>
                <td>340</td>
                <td>Kaliyamardana</td>
                <td>Om Kaliyamardanaya Namah</td>
                <td>Subduer of Kaliya</td>
              </tr>
              <tr>
                <td>341</td>
                <td>Nagapatnistutiprita</td>
                <td>Om Nagapatnistutipritaya Namah</td>
                <td>Pleased by the Praise of Kaliya’s Wives</td>
              </tr>
              <tr>
                <td>342</td>
                <td>Nanaveshasanriddhi</td>
                <td>Om Nanaveshasanriddhikrite Namah</td>
                <td>Possessor of Various Magnificent Forms</td>
              </tr>
              <tr>
                <td>343</td>
                <td>Avishvaktadrishta</td>
                <td>Om Avishvaktadrishe Namah</td>
                <td>Beyond Visible Perception</td>
              </tr>
              <tr>
                <td>344</td>
                <td>Atmesha</td>
                <td>Om Atmeshaya Namah</td>
                <td>Lord of the Self</td>
              </tr>
              <tr>
                <td>345</td>
                <td>Svadrishta</td>
                <td>Om Svadrishe Namah</td>
                <td>Seen by the Wise</td>
              </tr>
              <tr>
                <td>346</td>
                <td>Atmastutipriya</td>
                <td>Om Atmastutipriyaya Namah</td>
                <td>Lover of Self-Praise</td>
              </tr>
              <tr>
                <td>347</td>
                <td>Sarveshvara</td>
                <td>Om Sarveshvaraya Namah</td>
                <td>Lord of All</td>
              </tr>
              <tr>
                <td>348</td>
                <td>Sarvaguna</td>
                <td>Om Sarvagunaya Namah</td>
                <td>Possessor of All Virtues</td>
              </tr>
              <tr>
                <td>349</td>
                <td>Prasiddha</td>
                <td>Om Prasiddhaya Namah</td>
                <td>Widely Celebrated</td>
              </tr>
              <tr>
                <td>350</td>
                <td>Sarvasatvata</td>
                <td>Om Sarvasatvataya Namah</td>
                <td>Essence of All Existence</td>
              </tr>
              <tr>
                <td>351</td>
                <td>Akunthadhamna</td>
                <td>Om Akunthadhamne Namah</td>
                <td>One with an Undiminished Abode</td>
              </tr>
              <tr>
                <td>352</td>
                <td>Chandrarkadrishta</td>
                <td>Om Chandrarkadrishtaye Namah</td>
                <td>As Radiant as the Sun and Moon</td>
              </tr>
              <tr>
                <td>353</td>
                <td>Akashanirmala</td>
                <td>Om Akashanirmalaya Namah</td>
                <td>Pure as the Sky</td>
              </tr>
              <tr>
                <td>354</td>
                <td>Anirdeshyagata</td>
                <td>Om Anirdeshyagataye Namah</td>
                <td>Of Indescribable Movements</td>
              </tr>
              <tr>
                <td>355</td>
                <td>Nagavanitapatibhaikshada</td>
                <td>Om Nagavanitapatibhaikshadaya Namah</td>
                <td>Beggar of Butter in the Land of Serpents</td>
              </tr>
              <tr>
                <td>356</td>
                <td>Svanghrimudrankanagendra</td>
                <td>Om Svanghrimudrankanagendramurdhne Namah</td>
                <td>Imprinter of Feet on Serpent's Heads</td>
              </tr>
              <tr>
                <td>357</td>
                <td>Kaliyasanstuta</td>
                <td>Om Kaliyasanstutaya Namah</td>
                <td>Praised in the Abode of Kaliya</td>
              </tr>
              <tr>
                <td>358</td>
                <td>Abhaya</td>
                <td>Om Abhayaya Namah</td>
                <td>Bestower of Fearlessness</td>
              </tr>
              <tr>
                <td>359</td>
                <td>Vishvatashchakshus</td>
                <td>Om Vishvatashchakshushe Namah</td>
                <td>All-Seeing</td>
              </tr>
              <tr>
                <td>360</td>
                <td>Stutottamaguna</td>
                <td>Om Stutottamagunaya Namah</td>
                <td>Possessor of Supreme Virtues</td>
              </tr>
              <tr>
                <td>361</td>
                <td>Prabhava</td>
                <td>Om Prabhave Namah</td>
                <td>The Almighty Lord</td>
              </tr>
              <tr>
                <td>362</td>
                <td>Mahya</td>
                <td>Om Mahyam Namah</td>
                <td>The Incomparable One</td>
              </tr>
              <tr>
                <td>363</td>
                <td>Atma</td>
                <td>Om Atmane Namah</td>
                <td>The Supreme Self</td>
              </tr>
              <tr>
                <td>364</td>
                <td>Maruta</td>
                <td>Om Marute Namah</td>
                <td>Of the Wind God</td>
              </tr>
              <tr>
                <td>365</td>
                <td>Prana</td>
                <td>Om Pranaya Namah</td>
                <td>The Life Force</td>
              </tr>
              <tr>
                <td>366</td>
                <td>Paramatma</td>
                <td>Om Paramatmane Namah</td>
                <td>The Supreme Soul</td>
              </tr>
              <tr>
                <td>367</td>
                <td>Dyushirshava</td>
                <td>Om Dyushirshavate Namah</td>
                <td>The Lord of Heaven</td>
              </tr>
              <tr>
                <td>368</td>
                <td>Nagopayanahrishta</td>
                <td>Om Nagopayanahrishtatmane Namah</td>
                <td>Delighter of Serpents</td>
              </tr>
              <tr>
                <td>369</td>
                <td>Hridotsaritakaliya</td>
                <td>Om Hridotsaritakaliyaya Namah</td>
                <td>Expeller of Kaliya from the Heart</td>
              </tr>
              <tr>
                <td>370</td>
                <td>Balabhadrasukhalapa</td>
                <td>Om Balabhadrasukhalapaya Namah</td>
                <td>Delighter of Balabhadra</td>
              </tr>
              <tr>
                <td>371</td>
                <td>Gopalingananirvrita</td>
                <td>Om Gopalingananirvritaya Namah</td>
                <td>Delighter of Cowherd Women</td>
              </tr>
              <tr>
                <td>372</td>
                <td>Davagnibhitagopalagopta</td>
                <td>Om Davagnibhitagopalagoptre Namah</td>
                <td>Protector of Cowherds from Forest Fires</td>
              </tr>
              <tr>
                <td>373</td>
                <td>Davagninashana</td>
                <td>Om Davagninashanaya Namah</td>
                <td>Extinguisher of Forest Fires</td>
              </tr>
              <tr>
                <td>374</td>
                <td>Nayanachchhadanakrida</td>
                <td>Om Nayanachchhadanakridalampataya Namah</td>
                <td>Player of Eye-Covering Games</td>
              </tr>
              <tr>
                <td>375</td>
                <td>Nripacheshtita</td>
                <td>Om Nripacheshtitaya Namah</td>
                <td>Performer of Royal Deeds</td>
              </tr>
              <tr>
                <td>376</td>
                <td>Kakapakshadhara</td>
                <td>Om Kakapakshadharaya Namah</td>
                <td>Wearer of Crow Feathers</td>
              </tr>
              <tr>
                <td>377</td>
                <td>Saumya</td>
                <td>Om Saumyaya Namah</td>
                <td>The Gentle and Graceful</td>
              </tr>
              <tr>
                <td>378</td>
                <td>Balavahakakeli</td>
                <td>Om Balavahakakelimate Namah</td>
                <td>Delighter of Children</td>
              </tr>
              <tr>
                <td>379</td>
                <td>Balaghatitadurdharsha</td>
                <td>Om Balaghatitadurdharshapralambaya Namah</td>
                <td>Slayer of the Mighty Pralamba</td>
              </tr>
              <tr>
                <td>380</td>
                <td>Balavatsala</td>
                <td>Om Balavatsalaya Namah</td>
                <td>Loving Toward Children</td>
              </tr>
              <tr>
                <td>381</td>
                <td>Munjatavyagnishamana</td>
                <td>Om Munjatavyagnishamanaya Namah</td>
                <td>Extinguisher of Forest Fires in Munja</td>
              </tr>
              <tr>
                <td>382</td>
                <td>Pravritkalavinoda</td>
                <td>Om Pravritkalavinodavate Namah</td>
                <td>Delighter of Seasonal Changes</td>
              </tr>
              <tr>
                <td>383</td>
                <td>Shilanyastanna</td>
                <td>Om Shilanyastannabhrite Namah</td>
                <td>Resting on Rocks</td>
              </tr>
              <tr>
                <td>384</td>
                <td>Daityasanhartra</td>
                <td>Om Daityasanhartre Namah</td>
                <td>Slayer of Demons</td>
              </tr>
              <tr>
                <td>385</td>
                <td>Shadvalasana</td>
                <td>Om Shadvalasanaya Namah</td>
                <td>Seated on Grass</td>
              </tr>
              <tr>
                <td>386</td>
                <td>Sadaptagopikodgita</td>
                <td>Om Sadaptagopikodgitaya Namah</td>
                <td>Eulogized by Singing Gopis</td>
              </tr>
              <tr>
                <td>387</td>
                <td>Karnikaravatansaka</td>
                <td>Om Karnikaravatansakaya Namah</td>
                <td>Decorated with Karnikara Flowers</td>
              </tr>
              <tr>
                <td>388</td>
                <td>Nataveshadhara</td>
                <td>Om Nataveshadharaya Namah</td>
                <td>Wearing a Dancer’s Attire</td>
              </tr>
              <tr>
                <td>389</td>
                <td>Padmamalanka</td>
                <td>Om Padmamalankaya Namah</td>
                <td>Adorned with Lotus Garland</td>
              </tr>
              <tr>
                <td>390</td>
                <td>Gopikavrita</td>
                <td>Om Gopikavritaya Namah</td>
                <td>Surrounded by Gopis</td>
              </tr>
              <tr>
                <td>391</td>
                <td>Gopimanoharapanga</td>
                <td>Om Gopimanoharapangaya Namah</td>
                <td>Captivating with His Glance</td>
              </tr>
              <tr>
                <td>392</td>
                <td>Venuvadanatatpara</td>
                <td>Om Venuvadanatatparaya Namah</td>
                <td>Enthusiastic Flute Player</td>
              </tr>
              <tr>
                <td>393</td>
                <td>Vinyastavadanambhoja</td>
                <td>Om Vinyastavadanambhojaya Namah</td>
                <td>Beautiful Lotus-Like Face</td>
              </tr>
              <tr>
                <td>394</td>
                <td>Charushabdakritanana</td>
                <td>Om Charushabdakritananaya Namah</td>
                <td>Creator of Sweet Melodic Sounds</td>
              </tr>
              <tr>
                <td>395</td>
                <td>Bimbadhararpitodara</td>
                <td>Om Bimbadhararpitodaravenave Namah</td>
                <td>Resting His Flute on His Lips</td>
              </tr>
              <tr>
                <td>396</td>
                <td>Vishvavimohana</td>
                <td>Om Vishvavimohanaya Namah</td>
                <td>Enchanter of the Universe</td>
              </tr>
              <tr>
                <td>397</td>
                <td>Vrajasamvarnita</td>
                <td>Om Vrajasamvarnitaya Namah</td>
                <td>Praised in Vraja</td>
              </tr>
              <tr>
                <td>398</td>
                <td>Shravyavenunada</td>
                <td>Om Shravyavenunadaya Namah</td>
                <td>Producing Melodious Flute Notes</td>
              </tr>
              <tr>
                <td>399</td>
                <td>Shrutipriya</td>
                <td>Om Shrutipriyaya Namah</td>
                <td>Beloved by the Scriptures</td>
              </tr>
              <tr>
                <td>400</td>
                <td>Gogopagopijanmepsu</td>
                <td>Om Gogopagopijanmepsu Brahmendradyabhivanditaya Namah</td>
                <td>Desired by Cows, Cowherds, and Women</td>
              </tr>
              <tr>
                <td>401</td>
                <td>Gitasrutisaritpura</td>
                <td>Om Gitasrutisaritpuraya Namah</td>
                <td>Creator of a River of Song Nectar</td>
              </tr>
              <tr>
                <td>402</td>
                <td>Nadanartitabarhina</td>
                <td>Om Nadanartitabarhinaya Namah</td>
                <td>Peacock Dancer Enthralled by Music</td>
              </tr>
              <tr>
                <td>403</td>
                <td>Ragapallavitasthana</td>
                <td>Om Ragapallavitasthanave Namah</td>
                <td>Stationed in Musical Notes</td>
              </tr>
              <tr>
                <td>404</td>
                <td>Gitanamitapadapa</td>
                <td>Om Gitanamitapadapaya Namah</td>
                <td>Knower of Infinite Musical Words</td>
              </tr>
              <tr>
                <td>405</td>
                <td>Vismaritatrinagrasanriga</td>
                <td>Om Vismaritatrinagrasanrigaya Namah</td>
                <td>One Who Forgot the Tiger Hunt</td>
              </tr>
              <tr>
                <td>406</td>
                <td>Nrigavilobhita</td>
                <td>Om Nrigavilobhitaya Namah</td>
                <td>One Who Entranced the Deer</td>
              </tr>
              <tr>
                <td>407</td>
                <td>Vyaghradihinsrasahajavairaharta</td>
                <td>Om Vyaghradihinsrasahajavairahartre Namah</td>
                <td>Remover of Natural Enmity Between Animals</td>
              </tr>
              <tr>
                <td>408</td>
                <td>Sugayana</td>
                <td>Om Sugayanaya Namah</td>
                <td>The Sweet Singer</td>
              </tr>
              <tr>
                <td>409</td>
                <td>Gadhodiritagovrinda</td>
                <td>Om Gadhodiritagovrinda Namah</td>
                <td>Delightful Master of Cowherds</td>
              </tr>
              <tr>
                <td>410</td>
                <td>Premotkarnitatarnaka</td>
                <td>Om Premotkarnitatarnakaya Namah</td>
                <td>Stirrer of Love</td>
              </tr>
              <tr>
                <td>411</td>
                <td>Nishpandayanabrahmadivikshita</td>
                <td>Om Nishpandayanabrahmadivikshitaya Namah</td>
                <td>Unmoving Yet Seen by Brahma</td>
              </tr>
              <tr>
                <td>412</td>
                <td>Vishvavandita</td>
                <td>Om Vishvavanditaya Namah</td>
                <td>Revered by the Universe</td>
              </tr>
              <tr>
                <td>413</td>
                <td>Shakhotkarnashakuntaugha</td>
                <td>Om Shakhotkarnashakuntaughaya Namah</td>
                <td>Gatherer of Birds on Branches</td>
              </tr>
              <tr>
                <td>414</td>
                <td>Chhatrayitabalahaka</td>
                <td>Om Chhatrayitabalahakaya Namah</td>
                <td>Shelterer of Cowherds Under a Cloud</td>
              </tr>
              <tr>
                <td>415</td>
                <td>Prasanna</td>
                <td>Om Prasannaya Namah</td>
                <td>The Cheerful One</td>
              </tr>
              <tr>
                <td>416</td>
                <td>Paramananda</td>
                <td>Om Paramanandaya Namah</td>
                <td>The Supreme Bliss</td>
              </tr>
              <tr>
                <td>417</td>
                <td>Chitrayitacharachara</td>
                <td>Om Chitrayitacharacharaya Namah</td>
                <td>Creator of the Animated and the Still</td>
              </tr>
              <tr>
                <td>418</td>
                <td>Gopikamadan</td>
                <td>Om Gopikamadanaya Namah</td>
                <td>Enchanter of Gopis</td>
              </tr>
              <tr>
                <td>419</td>
                <td>Gopikuchakunkumamudrita</td>
                <td>Om Gopikuchakunkumamudritaya Namah</td>
                <td>Imprinted with Gopi’s Kunkuma</td>
              </tr>
              <tr>
                <td>420</td>
                <td>Gopakanyajalakrida</td>
                <td>Om Gopakanyajalakridahrishtaya Namah</td>
                <td>Player of Water Sports with Gopis</td>
              </tr>
              <tr>
                <td>421</td>
                <td>Gopyanshukapahrita</td>
                <td>Om Gopyanshukapahrite Namah</td>
                <td>Stealer of Gopi’s Cloths</td>
              </tr>
              <tr>
                <td>422</td>
                <td>Skandharopitagopastri</td>
                <td>Om Skandharopitagopastrivasase Namah</td>
                <td>Carrier of Gopi’s Clothes on His Shoulder</td>
              </tr>
              <tr>
                <td>423</td>
                <td>Kundanibhasmita</td>
                <td>Om Kundanibhasmitaya Namah</td>
                <td>Smiling Radiantly Like Jasmine</td>
              </tr>
              <tr>
                <td>424</td>
                <td>Gopinetrotpalashashi</td>
                <td>Om Gopinetrotpalashashine Namah</td>
                <td>Moonlight to Gopi’s Lotus Eyes</td>
              </tr>
              <tr>
                <td>425</td>
                <td>Gopikayachitanshuka</td>
                <td>Om Gopikayachitanshukaya Namah</td>
                <td>Recipient of Gopi’s Requests</td>
              </tr>
              <tr>
                <td>426</td>
                <td>Gopinamaskirayadeshta</td>
                <td>Om Gopinamaskirayadeshtre Namah</td>
                <td>Giver of Directions to Bowing Gopis</td>
              </tr>
              <tr>
                <td>427</td>
                <td>Gopyekakaravandita</td>
                <td>Om Gopyekakaravanditaya Namah</td>
                <td>Worshiped Together by All Gopis</td>
              </tr>
              <tr>
                <td>428</td>
                <td>Gopyanjalivishesharthi</td>
                <td>Om Gopyanjalivishesharthine Namah</td>
                <td>Granter of Gopis’ Wishes</td>
              </tr>
              <tr>
                <td>429</td>
                <td>Gopikridavilobhita</td>
                <td>Om Gopikridavilobhitaya Namah</td>
                <td>Fascinated by Gopis’ Play</td>
              </tr>
              <tr>
                <td>430</td>
                <td>Shantavasasphuradgopikrita</td>
                <td>Om Shantavasasphuradgopikritanjalaye Namah</td>
                <td>Worshipped by Gopis with Folded Hands</td>
              </tr>
              <tr>
                <td>431</td>
                <td>Aghapaha</td>
                <td>Om Aghapahaya Namah</td>
                <td>Remover of Sin</td>
              </tr>
              <tr>
                <td>432</td>
                <td>Gopikelivilasarthi</td>
                <td>Om Gopikelivilasarthine Namah</td>
                <td>Desirer of Playful Acts with Gopis</td>
              </tr>
              <tr>
                <td>433</td>
                <td>Gopisampurnakamada</td>
                <td>Om Gopisampurnakamadaya Namah</td>
                <td>Fulfiller of All Gopis’ Desires</td>
              </tr>
              <tr>
                <td>434</td>
                <td>Gopastrivastrada</td>
                <td>Om Gopastrivastradaya Namah</td>
                <td>Returner of Gopis’ Clothes</td>
              </tr>
              <tr>
                <td>435</td>
                <td>Gopichittachora</td>
                <td>Om Gopichittachoraya Namah</td>
                <td>Stealer of Gopis’ Hearts</td>
              </tr>
              <tr>
                <td>436</td>
                <td>Kutuhala</td>
                <td>Om Kutuhaline Namah</td>
                <td>Enthusiastic</td>
              </tr>
              <tr>
                <td>437</td>
                <td>Vrindavanapriya</td>
                <td>Om Vrindavanapriyaya Namah</td>
                <td>Beloved of Vrindavana</td>
              </tr>
              <tr>
                <td>438</td>
                <td>Gopabandhava</td>
                <td>Om Gopabandhave Namah</td>
                <td>Friend of Cowherds</td>
              </tr>
              <tr>
                <td>439</td>
                <td>Yajvannayachitra</td>
                <td>Om Yajvannayachitre Namah</td>
                <td>Fascinator During Sacrifices</td>
              </tr>
              <tr>
                <td>440</td>
                <td>Yajnesha</td>
                <td>Om Yajneshaya Namah</td>
                <td>Lord of Sacrifices</td>
              </tr>
              <tr>
                <td>441</td>
                <td>Yajnabhavajna</td>
                <td>Om Yajnabhavajnaya Namah</td>
                <td>Knower of the Essence of Sacrifices</td>
              </tr>
              <tr>
                <td>442</td>
                <td>Yajnapatnyabhivanchhita</td>
                <td>Om Yajnapatnyabhivanchhitaya Namah</td>
                <td>Desired by the Wives of Ritual Priests</td>
              </tr>
              <tr>
                <td>443</td>
                <td>Munipatnivitirnannatripta</td>
                <td>Om Munipatnivitirnannatriptaya Namah</td>
                <td>Contented with Food Offered by Sages’ Wives</td>
              </tr>
              <tr>
                <td>444</td>
                <td>Munivadhupriya</td>
                <td>Om Munivadhupriyaya Namah</td>
                <td>Beloved of Sage’s Wives</td>
              </tr>
              <tr>
                <td>445</td>
                <td>Dvijapatnyabhibhavajna</td>
                <td>Om Dvijapatnyabhibhavajnaya Namah</td>
                <td>Knower of the Love of Priests’ Wives</td>
              </tr>
              <tr>
                <td>446</td>
                <td>Dvijapatnivaraprada</td>
                <td>Om Dvijapatnivarapradaya Namah</td>
                <td>Granter of Boons to Priests’ Wives</td>
              </tr>
              <tr>
                <td>447</td>
                <td>Pratiruddhasatimoksha</td>
                <td>Om Pratiruddhasatimokshapradaya Namah</td>
                <td>Liberator of Restrained Women</td>
              </tr>
              <tr>
                <td>448</td>
                <td>Dvijavimohita</td>
                <td>Om Dvijavimohitre Namah</td>
                <td>Enchanter of Twice-Born Priests</td>
              </tr>
              <tr>
                <td>449</td>
                <td>Munijnanaprada</td>
                <td>Om Munijnanapradaya Namah</td>
                <td>Giver of Knowledge to Sages</td>
              </tr>
              <tr>
                <td>450</td>
                <td>Yajvastuta</td>
                <td>Om Yajvastutaya Namah</td>
                <td>Praised in Sacrificial Hymns</td>
              </tr>
              <tr>
                <td>451</td>
                <td>Vasavayagavida</td>
                <td>Om Vasavayagavide Namah</td>
                <td>Knower of Indra’s Sacrifices</td>
              </tr>
              <tr>
                <td>452</td>
                <td>Pitriproktakriyarupa</td>
                <td>Om Pitriproktakriyarupashakrayaganivaranaya Namah</td>
                <td>Performer of Duties as Prescribed by Ancestors</td>
              </tr>
              <tr>
                <td>453</td>
                <td>Shakramarshakara</td>
                <td>Om Shakramarshakaraya Namah</td>
                <td>Causer of Indra’s Anger</td>
              </tr>
              <tr>
                <td>454</td>
                <td>Shakravrishtiprashamana</td>
                <td>Om Shakravrishtiprashamanonmukhaya Namah</td>
                <td>Pacifier of Indra’s Rains</td>
              </tr>
              <tr>
                <td>455</td>
                <td>Govardhanadhara</td>
                <td>Om Govardhanadharaya Namah</td>
                <td>Holder of Mount Govardhana</td>
              </tr>
              <tr>
                <td>456</td>
                <td>Gopagovrindatranatatpara</td>
                <td>Om Gopagovrindatranatatparaya Namah</td>
                <td>Protector of Cowherds and Herds</td>
              </tr>
              <tr>
                <td>457</td>
                <td>Govardhanagirichchatra</td>
                <td>Om Govardhanagirichchhatrachandadandabhujargalaya Namah</td>
                <td>Umbrella Maker of Govardhana Hill</td>
              </tr>
              <tr>
                <td>458</td>
                <td>Saptahavidhritadrindra</td>
                <td>Om Saptahavidhritadrindraya Namah</td>
                <td>Holder of the Mountain for Seven Days</td>
              </tr>
              <tr>
                <td>459</td>
                <td>Meghavahanagarvaghna</td>
                <td>Om Meghavahanagarvaghne Namah</td>
                <td>Destroyer of Pride of Cloud-Bearer Indra</td>
              </tr>
              <tr>
                <td>460</td>
                <td>Bhujagroparivinyasta</td>
                <td>Om Bhujagroparivinyastakshmadharakshmabhrite Namah</td>
                <td>Resting Earth on Serpent’s Hood</td>
              </tr>
              <tr>
                <td>461</td>
                <td>Achyuta</td>
                <td>Om Achyutaya Namah</td>
                <td>The Imperishable</td>
              </tr>
              <tr>
                <td>462</td>
                <td>Svasthanasthapitagira</td>
                <td>Om Svasthanasthapitagiraye Namah</td>
                <td>One Who Restored the Mountain to Its Place</td>
              </tr>
              <tr>
                <td>463</td>
                <td>Gopidadhyakshatarchita</td>
                <td>Om Gopidadhyakshatarchitaya Namah</td>
                <td>Worshipped by Cowherds</td>
              </tr>
              <tr>
                <td>464</td>
                <td>Sumanasa</td>
                <td>Om Sumanase Namah</td>
                <td>Gentle-Hearted</td>
              </tr>
              <tr>
                <td>465</td>
                <td>Sumanovrishtihrishta</td>
                <td>Om Sumanovrishtihrishtaya Namah</td>
                <td>Rejoiced by the Showers of Flowers</td>
              </tr>
              <tr>
                <td>466</td>
                <td>Vasavavandita</td>
                <td>Om Vasavavanditaya Namah</td>
                <td>Praised by Indra</td>
              </tr>
              <tr>
                <td>467</td>
                <td>Kamadhenupayahpura</td>
                <td>Om Kamadhenupayahpurabhishiktaya Namah</td>
                <td>Benefactor Like Kamadhenu</td>
              </tr>
              <tr>
                <td>468</td>
                <td>Surabhistuta</td>
                <td>Om Surabhistutaya Namah</td>
                <td>Worshipped by the Celestial Cow</td>
              </tr>
              <tr>
                <td>469</td>
                <td>Dharanghra</td>
                <td>Om Dharanghraye Namah</td>
                <td>Supporter of Earth</td>
              </tr>
              <tr>
                <td>470</td>
                <td>Oshadhiroma</td>
                <td>Om Oshadhiromne Namah</td>
                <td>Provider of Medicinal Plants</td>
              </tr>
              <tr>
                <td>471</td>
                <td>Dharmagopta</td>
                <td>Om Dharmagoptre Namah</td>
                <td>Protector of Dharma</td>
              </tr>
              <tr>
                <td>472</td>
                <td>Manomaya</td>
                <td>Om Manomayaya Namah</td>
                <td>Controller of the Mind</td>
              </tr>
              <tr>
                <td>473</td>
                <td>Jnanayajnapriya</td>
                <td>Om Jnanayajnapriyaya Namah</td>
                <td>Lover of Knowledge Sacrifices</td>
              </tr>
              <tr>
                <td>474</td>
                <td>Shastranetra</td>
                <td>Om Shastranetraya Namah</td>
                <td>The Guide Through Scriptures</td>
              </tr>
              <tr>
                <td>475</td>
                <td>Sarvarthasaratha</td>
                <td>Om Sarvarthasarathaye Namah</td>
                <td>Charioteer of All Needs</td>
              </tr>
              <tr>
                <td>476</td>
                <td>Airavatakaranitaviya</td>
                <td>Om Airavatakaranitaviyadgangaplutaya Namah</td>
                <td>Purifier by Celestial Waters</td>
              </tr>
              <tr>
                <td>477</td>
                <td>Vibhava</td>
                <td>Om Vibhave Namah</td>
                <td>The Omnipotent</td>
              </tr>
              <tr>
                <td>478</td>
                <td>Brahmabhishikta</td>
                <td>Om Brahmabhishiktaya Namah</td>
                <td>Consecrated by Brahma</td>
              </tr>
              <tr>
                <td>479</td>
                <td>Gogopta</td>
                <td>Om Gogoptre Namah</td>
                <td>Protector of Cows</td>
              </tr>
              <tr>
                <td>480</td>
                <td>Sarvalokashubhankara</td>
                <td>Om Sarvalokashubhankaraya Namah</td>
                <td>Benefactor of All Worlds</td>
              </tr>
              <tr>
                <td>481</td>
                <td>Sarvavedamaya</td>
                <td>Om Sarvavedamayaya Namah</td>
                <td>Embodiment of All Knowledge</td>
              </tr>
              <tr>
                <td>482</td>
                <td>Magnanandanveshi</td>
                <td>Om Magnanandanveshine Namah</td>
                <td>Seeker of Devotee’s Joy</td>
              </tr>
              <tr>
                <td>483</td>
                <td>Pitripriya</td>
                <td>Om Pitripriyaya Namah</td>
                <td>Beloved of Ancestors</td>
              </tr>
              <tr>
                <td>484</td>
                <td>Varunodiritatmekshakautuka</td>
                <td>Om Varunodiritatmekshakautukaya Namah</td>
                <td>Creator of Varuna’s Curiosity</td>
              </tr>
              <tr>
                <td>485</td>
                <td>Varunarchita</td>
                <td>Om Varunarchitaya Namah</td>
                <td>Worshipped by Varuna</td>
              </tr>
              <tr>
                <td>486</td>
                <td>Varunanitajanaka</td>
                <td>Om Varunanitajanakaya Namah</td>
                <td>Father of Those Honored by Varuna</td>
              </tr>
              <tr>
                <td>487</td>
                <td>Gopajnatatmavaibhava</td>
                <td>Om Gopajnatatmavaibhavaya Namah</td>
                <td>Known for Glory Among Cowherds</td>
              </tr>
              <tr>
                <td>488</td>
                <td>Svarlokalokasanhrishta</td>
                <td>Om Svarlokalokasanhrishtagopavargaya Namah</td>
                <td>Rejoiced in Heavenly Worlds</td>
              </tr>
              <tr>
                <td>489</td>
                <td>Trivargada</td>
                <td>Om Trivargadaya Namah</td>
                <td>Giver of Three Goals (Dharma, Artha, Kama)</td>
              </tr>
              <tr>
                <td>490</td>
                <td>Brahmahridgopita</td>
                <td>Om Brahmahridgopitaya Namah</td>
                <td>Protected in Brahma’s Heart</td>
              </tr>
              <tr>
                <td>491</td>
                <td>Gopadrashtra</td>
                <td>Om Gopadrashtre Namah</td>
                <td>Observer of Cowherds</td>
              </tr>
              <tr>
                <td>492</td>
                <td>Brahmapadaprada</td>
                <td>Om Brahmapadapradaya Namah</td>
                <td>Giver of Liberation</td>
              </tr>
              <tr>
                <td>493</td>
                <td>Sharachchandravihara</td>
                <td>Om Sharachchandraviharotkaya Namah</td>
                <td>Enjoyer of Autumn Moon</td>
              </tr>
              <tr>
                <td>494</td>
                <td>Shripati</td>
                <td>Om Shripataye Namah</td>
                <td>Consort of Lakshmi</td>
              </tr>
              <tr>
                <td>495</td>
                <td>Vashaka</td>
                <td>Om Vashakaya Namah</td>
                <td>Lord of All</td>
              </tr>
              <tr>
                <td>496</td>
                <td>Kshama</td>
                <td>Om Kshamaya Namah</td>
                <td>Embodiment of Forgiveness</td>
              </tr>
              <tr>
                <td>497</td>
                <td>Bhayapaha</td>
                <td>Om Bhayapahaya Namah</td>
                <td>Remover of Fear</td>
              </tr>
              <tr>
                <td>498</td>
                <td>Bhartriruddhagopika</td>
                <td>Om Bhartriruddhagopikadhyanagocharaya Namah</td>
                <td>Meditated Upon by Distressed Gopis</td>
              </tr>
              <tr>
                <td>499</td>
                <td>Gopikanayanasvadi</td>
                <td>Om Gopikanayanasvadyaya Namah</td>
                <td>Enjoyer of Gopis’ Glances</td>
              </tr>
              <tr>
                <td>500</td>
                <td>Gopinarmoktinivrita</td>
                <td>Om Gopinarmoktinivritaya Namah</td>
                <td>Bestower of Freedom to Gopis</td>
              </tr>
              <tr>
                <td>501</td>
                <td>Gopikamanaharana</td>
                <td>Om Gopikamanaharanaya Namah</td>
                <td>Stealer of Gopis’ Minds</td>
              </tr>
              <tr>
                <td>502</td>
                <td>Gopikashatayuthapa</td>
                <td>Om Gopikashatayuthapaya Namah</td>
                <td>Leader of Hundreds of Gopis</td>
              </tr>
              <tr>
                <td>503</td>
                <td>Vaijayantisragakalpa</td>
                <td>Om Vaijayantisragakalpaya Namah</td>
                <td>Adorned with the Vaijayanti Garland</td>
              </tr>
              <tr>
                <td>504</td>
                <td>Gopikamanavardhana</td>
                <td>Om Gopikamanavardhanaya Namah</td>
                <td>Enhancer of Gopis’ Love</td>
              </tr>
              <tr>
                <td>505</td>
                <td>Gopakantasunirdeshtra</td>
                <td>Om Gopakantasunirdeshtre Namah</td>
                <td>Guide of Gopis’ Desires</td>
              </tr>
              <tr>
                <td>506</td>
                <td>Kanta</td>
                <td>Om Kantaya Namah</td>
                <td>The Beloved</td>
              </tr>
              <tr>
                <td>507</td>
                <td>Manmathamanmatha</td>
                <td>Om Manmathamanmathaya Namah</td>
                <td>Enchanter of Cupid</td>
              </tr>
              <tr>
                <td>508</td>
                <td>Svatmasyadattatambula</td>
                <td>Om Svatmasyadattatambulaya Namah</td>
                <td>Enjoyer of Betel Leaves Offered by Gopis</td>
              </tr>
              <tr>
                <td>509</td>
                <td>Phalitotkrishtayauvana</td>
                <td>Om Phalitotkrishtayauvanaya Namah</td>
                <td>Blossomed in Full Youth</td>
              </tr>
              <tr>
                <td>510</td>
                <td>Vallabhistanasaktaksha</td>
                <td>Om Vallabhistanasaktakshaya Namah</td>
                <td>Fixer of Gaze on Beloved Gopis</td>
              </tr>
              <tr>
                <td>511</td>
                <td>Vallabipremachalita</td>
                <td>Om Vallabipremachalitaya Namah</td>
                <td>Moved by Beloved Gopis’ Love</td>
              </tr>
              <tr>
                <td>512</td>
                <td>Gopichelanchalasina</td>
                <td>Om Gopichelanchalasinaya Namah</td>
                <td>Dweller Among Gopis’ Flowing Garments</td>
              </tr>
              <tr>
                <td>513</td>
                <td>Gopinetrabjashatpada</td>
                <td>Om Gopinetrabjashatpadaya Namah</td>
                <td>Bee of the Gopis’ Lotus Eyes</td>
              </tr>
              <tr>
                <td>514</td>
                <td>Rasakridasamasakta</td>
                <td>Om Rasakridasamasaktaya Namah</td>
                <td>Immersed in the Divine Dance</td>
              </tr>
              <tr>
                <td>515</td>
                <td>Gopimandalamandana</td>
                <td>Om Gopimandalamandanaya Namah</td>
                <td>Adorner of Gopi Assemblies</td>
              </tr>
              <tr>
                <td>516</td>
                <td>Gopihemamanishrenimadhyendra</td>
                <td>Om Gopihemamanishrenimadhyendramanaye Namah</td>
                <td>Jewel in the Garland of Gopis</td>
              </tr>
              <tr>
                <td>517</td>
                <td>Ujjvala</td>
                <td>Om Ujjvalaya Namah</td>
                <td>Radiant and Splendid</td>
              </tr>
              <tr>
                <td>518</td>
                <td>Vidyadharendushapaghnaya</td>
                <td>Om Vidyadharendushapaghnaya Namah</td>
                <td>Destroyer of Demons Like Vidyadhara</td>
              </tr>
              <tr>
                <td>519</td>
                <td>Shankhachudashirohara</td>
                <td>Om Shankhachudashiroharaya Namah</td>
                <td>Remover of Shankhachuda’s Head</td>
              </tr>
              <tr>
                <td>520</td>
                <td>Shankhachudashiroratna</td>
                <td>Om Shankhachudashiroratnasamprinitabalaya Namah</td>
                <td>Giver of Shankhachuda’s Jewel to Beloved</td>
              </tr>
              <tr>
                <td>521</td>
                <td>Anagha</td>
                <td>Om Anaghaya Namah</td>
                <td>The Sinless One</td>
              </tr>
              <tr>
                <td>522</td>
                <td>Arishtarishtakrita</td>
                <td>Om Arishtarishtakrite Namah</td>
                <td>Destroyer of Arishta Demon</td>
              </tr>
              <tr>
                <td>523</td>
                <td>Dushtakeshidaityanishudana</td>
                <td>Om Dushtakeshidaityanishudanaya Namah</td>
                <td>Slayer of Wicked Keshi Demon</td>
              </tr>
              <tr>
                <td>524</td>
                <td>Sarasa</td>
                <td>Om Sarasaya Namah</td>
                <td>Full of Essence</td>
              </tr>
              <tr>
                <td>525</td>
                <td>Sasmitamukha</td>
                <td>Om Sasmitamukhaya Namah</td>
                <td>One with a Smiling Face</td>
              </tr>
              <tr>
                <td>526</td>
                <td>Susthira</td>
                <td>Om Susthiraya Namah</td>
                <td>The Steady One</td>
              </tr>
              <tr>
                <td>527</td>
                <td>Virahakula</td>
                <td>Om Virahakulaya Namah</td>
                <td>Overwhelmed by Separation</td>
              </tr>
              <tr>
                <td>528</td>
                <td>Sankarshanarpitaprita</td>
                <td>Om Sankarshanarpitapritaye Namah</td>
                <td>Loved by Sankarshana</td>
              </tr>
              <tr>
                <td>529</td>
                <td>Akruradhyanagochara</td>
                <td>Om Akruradhyanagocharaya Namah</td>
                <td>Comprehensible to Akrura’s Meditation</td>
              </tr>
              <tr>
                <td>530</td>
                <td>Akrurasanstuta</td>
                <td>Om Akrurasanstutaya Namah</td>
                <td>Praised by Akrura</td>
              </tr>
              <tr>
                <td>531</td>
                <td>Gudha</td>
                <td>Om Gudhaya Namah</td>
                <td>The Mysterious One</td>
              </tr>
              <tr>
                <td>532</td>
                <td>Gunavrittyupalakshita</td>
                <td>Om Gunavrittyupalakshitaya Namah</td>
                <td>Recognized by Qualities and Actions</td>
              </tr>
              <tr>
                <td>533</td>
                <td>Pramanagamya</td>
                <td>Om Pramanagamyaya Namah</td>
                <td>Incomprehensible to Mere Logic</td>
              </tr>
              <tr>
                <td>534</td>
                <td>Tanmatravayavi</td>
                <td>Om Tanmatravayavine Namah</td>
                <td>Embodiment of Pure Essence</td>
              </tr>
              <tr>
                <td>535</td>
                <td>Buddhitatpara</td>
                <td>Om Buddhitatparaya Namah</td>
                <td>Devoted to Wisdom</td>
              </tr>
              <tr>
                <td>536</td>
                <td>Sarvapramanapramathi</td>
                <td>Om Sarvapramanapramathine Namah</td>
                <td>Surpassing All Authorities</td>
              </tr>
              <tr>
                <td>537</td>
                <td>Sarvapratyayasadhaka</td>
                <td>Om Sarvapratyayasadhakaya Namah</td>
                <td>Fulfiller of All Beliefs</td>
              </tr>
              <tr>
                <td>538</td>
                <td>Purusha</td>
                <td>Om Purushaya Namah</td>
                <td>The Supreme Being</td>
              </tr>
              <tr>
                <td>539</td>
                <td>Pradhanatma</td>
                <td>Om Pradhanatmane Namah</td>
                <td>Soul of Primal Nature</td>
              </tr>
              <tr>
                <td>540</td>
                <td>Viparyasavilochana</td>
                <td>Om Viparyasavilochanaya Namah</td>
                <td>Seer of Reverse Perception</td>
              </tr>
              <tr>
                <td>541</td>
                <td>Madhurajanasamvikshya</td>
                <td>Om Madhurajanasamvikshyaya Namah</td>
                <td>Observer of Sweet Devotees</td>
              </tr>
              <tr>
                <td>542</td>
                <td>Rajakapratighataka</td>
                <td>Om Rajakapratighatakaya Namah</td>
                <td>Defier of Oppressive Kings</td>
              </tr>
              <tr>
                <td>543</td>
                <td>Vichitrambarasamvita</td>
                <td>Om Vichitrambarasamvitaya Namah</td>
                <td>Adorned in Unique Attire</td>
              </tr>
              <tr>
                <td>544</td>
                <td>Malakaravaraprada</td>
                <td>Om Malakaravarapradaya Namah</td>
                <td>Giver of Boons to Garland Makers</td>
              </tr>
              <tr>
                <td>545</td>
                <td>Kubjavakratvanirmoktra</td>
                <td>Om Kubjavakratvanirmoktre Namah</td>
                <td>Liberator of Kubja’s Deformity</td>
              </tr>
              <tr>
                <td>546</td>
                <td>Kubjayauvanadaya</td>
                <td>Om Kubjayauvanadayakaya Namah</td>
                <td>Giver of Youth to Kubja</td>
              </tr>
              <tr>
                <td>547</td>
                <td>Kubjangaragasurabha</td>
                <td>Om Kubjangaragasurabhaye Namah</td>
                <td>Bestower of Fragrance to Kubja’s Body</td>
              </tr>
              <tr>
                <td>548</td>
                <td>Kansakodandakhandana</td>
                <td>Om Kansakodandakhandanaya Namah</td>
                <td>Breaker of Kansa’s Bow</td>
              </tr>
              <tr>
                <td>549</td>
                <td>Dhira</td>
                <td>Om Dhiraya Namah</td>
                <td>The Courageous One</td>
              </tr>
              <tr>
                <td>550</td>
                <td>Kuvalayapidamardana</td>
                <td>Om Kuvalayapidamardanaya Namah</td>
                <td>Subduer of Kuvalayapida Elephant</td>
              </tr>
              <tr>
                <td>551</td>
                <td>Kansabhitikrita</td>
                <td>Om Kansabhitikrite Namah</td>
                <td>Creator of Fear in Kansa</td>
              </tr>
              <tr>
                <td>552</td>
                <td>Dantidantayudha</td>
                <td>Om Dantidantayudhaya Namah</td>
                <td>Wielder of Teeth as Weapons</td>
              </tr>
              <tr>
                <td>553</td>
                <td>Rangatrasaka</td>
                <td>Om Rangatrasakaya Namah</td>
                <td>Savior in the Arena</td>
              </tr>
              <tr>
                <td>554</td>
                <td>Mallayuddhavida</td>
                <td>Om Mallayuddhavide Namah</td>
                <td>Knower of Wrestling</td>
              </tr>
              <tr>
                <td>555</td>
                <td>Chanurahantre</td>
                <td>Om Chanurahantre Namah</td>
                <td>Slayer of Chanura</td>
              </tr>
              <tr>
                <td>556</td>
                <td>Kansaraya</td>
                <td>Om Kansaraye Namah</td>
                <td>Enemy of Kansa</td>
              </tr>
              <tr>
                <td>557</td>
                <td>Devakiharshadayaka</td>
                <td>Om Devakiharshadayakaya Namah</td>
                <td>Giver of Joy to Devaki</td>
              </tr>
              <tr>
                <td>558</td>
                <td>Vasudevapadanamra</td>
                <td>Om Vasudevapadanamraya Namah</td>
                <td>Revered by Vasudeva</td>
              </tr>
              <tr>
                <td>559</td>
                <td>Pitribandhavimochana</td>
                <td>Om Pitribandhavimochanaya Namah</td>
                <td>Liberator of Parents from Bondage</td>
              </tr>
              <tr>
                <td>560</td>
                <td>Urvibhayapaha</td>
                <td>Om Urvibhayapahaya Namah</td>
                <td>Remover of Earth’s Fears</td>
              </tr>
              <tr>
                <td>561</td>
                <td>Bhupa</td>
                <td>Om Bhupaya Namah</td>
                <td>The King</td>
              </tr>
              <tr>
                <td>562</td>
                <td>Ugrasenadhipatyada</td>
                <td>Om Ugrasenadhipatyadaya Namah</td>
                <td>Giver of Authority to Ugrasena</td>
              </tr>
              <tr>
                <td>563</td>
                <td>Ajnasthitashachinatha</td>
                <td>Om Ajnasthitashachinathaya Namah</td>
                <td>Obeyer of Indra’s Command</td>
              </tr>
              <tr>
                <td>564</td>
                <td>Sudharmanayanakshama</td>
                <td>Om Sudharmanayanakshamaya Namah</td>
                <td>Restorer of Sudharma Assembly</td>
              </tr>
              <tr>
                <td>565</td>
                <td>Adya</td>
                <td>Om Adyaya Namah</td>
                <td>The Primordial One</td>
              </tr>
              <tr>
                <td>566</td>
                <td>Dvijatisatkarta</td>
                <td>Om Dvijatisatkartre Namah</td>
                <td>Respecter of the Twice-Born (Brahmins)</td>
              </tr>
              <tr>
                <td>567</td>
                <td>Shishtacharapradarshaka</td>
                <td>Om Shishtacharapradarshakaya Namah</td>
                <td>Teacher of Good Conduct</td>
              </tr>
              <tr>
                <td>568</td>
                <td>Sandipanikritabhyasta</td>
                <td>Om Sandipanikritabhyastavidyabhyasaikadhiye Namah</td>
                <td>Practitioner of Knowledge Learned from Sandipani</td>
              </tr>
              <tr>
                <td>569</td>
                <td>Sudha</td>
                <td>Om Sudhaye Namah</td>
                <td>The Nectar</td>
              </tr>
              <tr>
                <td>570</td>
                <td>Gurvabhishtakriyadaksha</td>
                <td>Om Gurvabhishtakriyadakshaya Namah</td>
                <td>Skilled in Fulfilling Teacher’s Wishes</td>
              </tr>
              <tr>
                <td>571</td>
                <td>Pashchimodadhipujita</td>
                <td>Om Pashchimodadhipujitaya Namah</td>
                <td>Worshipped in Western Regions</td>
              </tr>
              <tr>
                <td>572</td>
                <td>Hatapanchajanaprapta</td>
                <td>Om Hatapanchajanapraptapanchajanyaya Namah</td>
                <td>Possessor of Panchajanya Conch</td>
              </tr>
              <tr>
                <td>573</td>
                <td>Yamarchita</td>
                <td>Om Yamarchitaya Namah</td>
                <td>Worshipped by Yama</td>
              </tr>
              <tr>
                <td>574</td>
                <td>Dharmarajajayanitaguruputra</td>
                <td>Om Dharmarajajayanitaguruputraya Namah</td>
                <td>Victor in Reviving Guru’s Son</td>
              </tr>
              <tr>
                <td>575</td>
                <td>Urukrama</td>
                <td>Om Urukramaya Namah</td>
                <td>Performer of Great Deeds</td>
              </tr>
              <tr>
                <td>576</td>
                <td>Guruputraprada</td>
                <td>Om Guruputrapradaya Namah</td>
                <td>Bestower of Guru’s Son</td>
              </tr>
              <tr>
                <td>577</td>
                <td>Shastra</td>
                <td>Om Shastre Namah</td>
                <td>The Sacred Scripture</td>
              </tr>
              <tr>
                <td>578</td>
                <td>Madhurajanamana</td>
                <td>Om Madhurajanamanadaya Namah</td>
                <td>Esteemed in Madhura</td>
              </tr>
              <tr>
                <td>579</td>
                <td>Jamadagnyasamabhyarcha</td>
                <td>Om Jamadagnyasamabhyarchyaya Namah</td>
                <td>Worshipped by Parashurama</td>
              </tr>
              <tr>
                <td>580</td>
                <td>Gomantagirisancharaya</td>
                <td>Om Gomantagirisancharaya Namah</td>
                <td>Traveler on Mount Gomanta</td>
              </tr>
              <tr>
                <td>581</td>
                <td>Gomantadavashamana</td>
                <td>Om Gomantadavashamanaya Namah</td>
                <td>Pacifier at Gomanta</td>
              </tr>
              <tr>
                <td>582</td>
                <td>Garudanitabhushana</td>
                <td>Om Garudanitabhushanaya Namah</td>
                <td>Adorned with Garuda as Ornament</td>
              </tr>
              <tr>
                <td>583</td>
                <td>Chakradyayudhasanshobhi</td>
                <td>Om Chakradyayudhasanshobhine Namah</td>
                <td>Glorified with Discus and Other Weapons</td>
              </tr>
              <tr>
                <td>584</td>
                <td>Jarasandhamadapaha</td>
                <td>Om Jarasandhamadapahaya Namah</td>
                <td>Destroyer of Jarasandha’s Pride</td>
              </tr>
              <tr>
                <td>585</td>
                <td>Srigalavanipalaghna</td>
                <td>Om Srigalavanipalaghnaya Namah</td>
                <td>Slayer of Srigalavani</td>
              </tr>
              <tr>
                <td>586</td>
                <td>Srigalatmajarajyada</td>
                <td>Om Srigalatmajarajyadaya Namah</td>
                <td>Giver of Kingdom to Srigala’s Son</td>
              </tr>
              <tr>
                <td>587</td>
                <td>Vidhvastakalayavana</td>
                <td>Om Vidhvastakalayavanaya Namah</td>
                <td>Destroyer of Kalayavana</td>
              </tr>
              <tr>
                <td>588</td>
                <td>Muchukundavaraprada</td>
                <td>Om Muchukundavarapradaya Namah</td>
                <td>Giver of Boon to Muchukunda</td>
              </tr>
              <tr>
                <td>589</td>
                <td>Ajnapitamahambhodhi</td>
                <td>Om Ajnapitamahambhodhaye Namah</td>
                <td>Creator of the Great Ocean</td>
              </tr>
              <tr>
                <td>590</td>
                <td>Dvarakapurakalpana</td>
                <td>Om Dvarakapurakalpanaya Namah</td>
                <td>Architect of Dwaraka</td>
              </tr>
              <tr>
                <td>591</td>
                <td>Dvarakanilaya</td>
                <td>Om Dvarakanilayaya Namah</td>
                <td>Dweller of Dwaraka</td>
              </tr>
              <tr>
                <td>592</td>
                <td>Rukmimanahanta</td>
                <td>Om Rukmimanahantre Namah</td>
                <td>Slayer of Rukmiman</td>
              </tr>
              <tr>
                <td>593</td>
                <td>Yadudvaha</td>
                <td>Om Yadudvahaya Namah</td>
                <td>Carrier of Yadu Clan</td>
              </tr>
              <tr>
                <td>594</td>
                <td>Ruchira</td>
                <td>Om Ruchiraya Namah</td>
                <td>The Splendid One</td>
              </tr>
              <tr>
                <td>595</td>
                <td>Rukminijana</td>
                <td>Om Rukminijanaye Namah</td>
                <td>Husband of Rukmini</td>
              </tr>
              <tr>
                <td>596</td>
                <td>Pradyumnajana</td>
                <td>Om Pradyumnajanakaya Namah</td>
                <td>Father of Pradyumna</td>
              </tr>
              <tr>
                <td>597</td>
                <td>Prabhava</td>
                <td>Om Prabhave Namah</td>
                <td>The Supreme Power</td>
              </tr>
              <tr>
                <td>598</td>
                <td>Apakritatrilokarta</td>
                <td>Om Apakritatrilokartaye Namah</td>
                <td>Remover of Sorrow from Three Worlds</td>
              </tr>
              <tr>
                <td>599</td>
                <td>Aniruddhapitamaha</td>
                <td>Om Aniruddhapitamahaya Namah</td>
                <td>Grandfather of Aniruddha</td>
              </tr>
              <tr>
                <td>600</td>
                <td>Aniruddhapadanveshi</td>
                <td>Om Aniruddhapadanveshine Namah</td>
                <td>Seeker of Aniruddha’s Feet</td>
              </tr>
              <tr>
                <td>601</td>
                <td>Chakrine</td>
                <td>Om Chakrine Namah</td>
                <td>Bearer of the Discus</td>
              </tr>
              <tr>
                <td>602</td>
                <td>Garudavahana</td>
                <td>Om Garudavahanaya Namah</td>
                <td>One who rides Garuda</td>
              </tr>
              <tr>
                <td>603</td>
                <td>Banasurapuriroddhra</td>
                <td>Om Banasurapuriroddhre Namah</td>
                <td>Liberator of Banasura’s City</td>
              </tr>
              <tr>
                <td>604</td>
                <td>Rakshajvalanayantrajita</td>
                <td>Om Rakshajvalanayantrajite Namah</td>
                <td>Subduer of Demonic Fire</td>
              </tr>
              <tr>
                <td>605</td>
                <td>Dhutapramathasanrambha</td>
                <td>Om Dhutapramathasanrambhaya Namah</td>
                <td>Destroyer of Furious Pramatha Demons</td>
              </tr>
              <tr>
                <td>606</td>
                <td>Jitamaheshvarajvara</td>
                <td>Om Jitamaheshvarajvaraya Namah</td>
                <td>Conqueror of Maheshvara’s Heat</td>
              </tr>
              <tr>
                <td>607</td>
                <td>Shatchakrashaktinirjetra</td>
                <td>Om Shatchakrashaktinirjetre Namah</td>
                <td>Subjugator of the Six Energy Centers</td>
              </tr>
              <tr>
                <td>608</td>
                <td>Bhutabhetalamohakrita</td>
                <td>Om Bhutabhetalamohakrite Namah</td>
                <td>Enchanter of Beings and Spirits</td>
              </tr>
              <tr>
                <td>609</td>
                <td>Shambhutrishulajita</td>
                <td>Om Shambhutrishulajite Namah</td>
                <td>Victor over Shambhu’s Trident</td>
              </tr>
              <tr>
                <td>610</td>
                <td>Shambhujrimbhana</td>
                <td>Om Shambhujrimbhanaya Namah</td>
                <td>Stimulator of Shambhu</td>
              </tr>
              <tr>
                <td>611</td>
                <td>Shambhusanstuta</td>
                <td>Om Shambhusanstutaya Namah</td>
                <td>Praised by Lord Shiva</td>
              </tr>
              <tr>
                <td>612</td>
                <td>Indirayatma</td>
                <td>Om Indirayatmane Namah</td>
                <td>Soul of Lakshmi</td>
              </tr>
              <tr>
                <td>613</td>
                <td>Induhridaya</td>
                <td>Om Induhridayaya Namah</td>
                <td>Moon-hearted</td>
              </tr>
              <tr>
                <td>614</td>
                <td>Sarvayogeshvareshvara</td>
                <td>Om Sarvayogeshvareshvaraya Namah</td>
                <td>Lord of All Yogis</td>
              </tr>
              <tr>
                <td>615</td>
                <td>Hiranyagarbhahridaya</td>
                <td>Om Hiranyagarbhahridayaya Namah</td>
                <td>Heart of the Cosmic Womb</td>
              </tr>
              <tr>
                <td>616</td>
                <td>Mohavartanivartana</td>
                <td>Om Mohavartanivartanaya Namah</td>
                <td>Remover of Delusion’s Cycles</td>
              </tr>
              <tr>
                <td>617</td>
                <td>Atmajnananidhi</td>
                <td>Om Atmajnananidhaye Namah</td>
                <td>Treasure of Self-Knowledge</td>
              </tr>
              <tr>
                <td>618</td>
                <td>Medhakosha</td>
                <td>Om Medhakoshaya Namah</td>
                <td>Repository of Intelligence</td>
              </tr>
              <tr>
                <td>619</td>
                <td>Tanmatrarupa</td>
                <td>Om Tanmatrarupavate Namah</td>
                <td>Embodiment of Subtle Elements</td>
              </tr>
              <tr>
                <td>620</td>
                <td>Indra</td>
                <td>Om Indraya Namah</td>
                <td>King of the Gods</td>
              </tr>
              <tr>
                <td>621</td>
                <td>Agnivadana</td>
                <td>Om Agnivadanaya Namah</td>
                <td>Fire-faced</td>
              </tr>
              <tr>
                <td>622</td>
                <td>Kalanabha</td>
                <td>Om Kalanabhaya Namah</td>
                <td>Lord of Time</td>
              </tr>
              <tr>
                <td>623</td>
                <td>Sarvagamadhvaga</td>
                <td>Om Sarvagamadhvagaya Namah</td>
                <td>Knower of All Paths</td>
              </tr>
              <tr>
                <td>624</td>
                <td>Turiya</td>
                <td>Om Turiyaya Namah</td>
                <td>Beyond the Three States of Consciousness</td>
              </tr>
              <tr>
                <td>625</td>
                <td>Sarvadhisakshi</td>
                <td>Om Sarvadhisakshine Namah</td>
                <td>Witness of All</td>
              </tr>
              <tr>
                <td>626</td>
                <td>Dvandvaramatmaduraga</td>
                <td>Om Dvandvaramatmaduragaya Namah</td>
                <td>Beyond Duality</td>
              </tr>
              <tr>
                <td>627</td>
                <td>Ajnatapara</td>
                <td>Om Ajnataparaya Namah</td>
                <td>The Unknown Supreme</td>
              </tr>
              <tr>
                <td>628</td>
                <td>Vashyashri</td>
                <td>Om Vashyashriyai Namah</td>
                <td>Possessor of Commanding Prosperity</td>
              </tr>
              <tr>
                <td>629</td>
                <td>Avyakritaviharava</td>
                <td>Om Avyakritaviharavate Namah</td>
                <td>Moving in the Unmanifest</td>
              </tr>
              <tr>
                <td>630</td>
                <td>Atmapradipa</td>
                <td>Om Atmapradipaya Namah</td>
                <td>Light of the Soul</td>
              </tr>
              <tr>
                <td>631</td>
                <td>Vijnanamatratma</td>
                <td>Om Vijnanamatratmane Namah</td>
                <td>Pure Consciousness</td>
              </tr>
              <tr>
                <td>632</td>
                <td>Shriniketana</td>
                <td>Om Shriniketanaya Namah</td>
                <td>Abode of Lakshmi</td>
              </tr>
              <tr>
                <td>633</td>
                <td>Banabahuvanachchhetra</td>
                <td>Om Banabahuvanachchhetre Namah</td>
                <td>Cutter of Bana’s Many Arms</td>
              </tr>
              <tr>
                <td>634</td>
                <td>Mahendrapritivardhana</td>
                <td>Om Mahendrapritivardhanaya Namah</td>
                <td>Enhancer of Indra’s Joy</td>
              </tr>
              <tr>
                <td>635</td>
                <td>Aniruddhanirodhajna</td>
                <td>Om Aniruddhanirodhajnaya Namah</td>
                <td>Knower of Aniruddha’s Restraint</td>
              </tr>
              <tr>
                <td>636</td>
                <td>Jaleshahritagokula</td>
                <td>Om Jaleshahritagokulaya Namah</td>
                <td>Savior of Gokula from Jalesha</td>
              </tr>
              <tr>
                <td>637</td>
                <td>Jaleshavijayi</td>
                <td>Om Jaleshavijayine Namah</td>
                <td>Victor over Jalesha</td>
              </tr>
              <tr>
                <td>638</td>
                <td>Vira</td>
                <td>Om Viraya Namah</td>
                <td>The Hero</td>
              </tr>
              <tr>
                <td>639</td>
                <td>Satrajidratnayachaka</td>
                <td>Om Satrajidratnayachakaya Namah</td>
                <td>Bestower of Jewel to Satrajit</td>
              </tr>
              <tr>
                <td>640</td>
                <td>Prasenanveshanodyukta</td>
                <td>Om Prasenanveshanodyuktaya Namah</td>
                <td>Seeker of Prasena</td>
              </tr>
              <tr>
                <td>641</td>
                <td>Jambavaddhritaratnada</td>
                <td>Om Jambavaddhritaratnadaya Namah</td>
                <td>Giver of Jewel Retrieved from Jambavan</td>
              </tr>
              <tr>
                <td>642</td>
                <td>Jitarksharajatanayaharta</td>
                <td>Om Jitarksharajatanayahartre Namah</td>
                <td>Slayer of King of Bears’ Son</td>
              </tr>
              <tr>
                <td>643</td>
                <td>Jambavatipriya</td>
                <td>Om Jambavatipriyaya Namah</td>
                <td>Beloved of Jambavati</td>
              </tr>
              <tr>
                <td>644</td>
                <td>Satyabhamapriya</td>
                <td>Om Satyabhamapriyaya Namah</td>
                <td>Beloved of Satyabhama</td>
              </tr>
              <tr>
                <td>645</td>
                <td>Kama</td>
                <td>Om Kamaya Namah</td>
                <td>Embodiment of Desire</td>
              </tr>
              <tr>
                <td>646</td>
                <td>Shatadhanvashirohara</td>
                <td>Om Shatadhanvashiroharaya Namah</td>
                <td>Slayer of Shatadhanva</td>
              </tr>
              <tr>
                <td>647</td>
                <td>Kalindipati</td>
                <td>Om Kalindipataye Namah</td>
                <td>Lord of Kalindi</td>
              </tr>
              <tr>
                <td>648</td>
                <td>Akrurabandhava</td>
                <td>Om Akrurabandhave Namah</td>
                <td>Friend of Akrura</td>
              </tr>
              <tr>
                <td>649</td>
                <td>Akruraratnada</td>
                <td>Om Akruraratnadaya Namah</td>
                <td>Giver of Jewel to Akrura</td>
              </tr>
              <tr>
                <td>650</td>
                <td>Kaikayiramana</td>
                <td>Om Kaikayiramanaya Namah</td>
                <td>Beloved of Kaikeyi</td>
              </tr>
              <tr>
                <td>651</td>
                <td>Bhadrabharta</td>
                <td>Om Bhadrabhartre Namah</td>
                <td>Protector of Bhadra</td>
              </tr>
              <tr>
                <td>652</td>
                <td>Nagnajitidhava</td>
                <td>Om Nagnajitidhavaya Namah</td>
                <td>Husband of Nagnajiti</td>
              </tr>
              <tr>
                <td>653</td>
                <td>Madrimanohara</td>
                <td>Om Madrimanoharaya Namah</td>
                <td>Enchanter of Madri</td>
              </tr>
              <tr>
                <td>654</td>
                <td>Shabyapranabandhava</td>
                <td>Om Shabyapranabandhave Namah</td>
                <td>Friend of Shabya</td>
              </tr>
              <tr>
                <td>655</td>
                <td>Urukrama</td>
                <td>Om Urukramaya Namah</td>
                <td>Performer of Great Deeds</td>
              </tr>
              <tr>
                <td>656</td>
                <td>Sushiladayita</td>
                <td>Om Sushiladayitaya Namah</td>
                <td>Beloved of the Gentle</td>
              </tr>
              <tr>
                <td>657</td>
                <td>Mitravindanetramahotsava</td>
                <td>Om Mitravindanetramahotsavaya Namah</td>
                <td>Delight of Mitravinda’s Eyes</td>
              </tr>
              <tr>
                <td>658</td>
                <td>Lakshmanavallabha</td>
                <td>Om Lakshmanavallabhaya Namah</td>
                <td>Beloved of Lakshmana</td>
              </tr>
              <tr>
                <td>659</td>
                <td>Ruddhapragjyotishamapura</td>
                <td>Om Ruddhapragjyotishamahapuraya Namah</td>
                <td>Destroyer of Pragjyotisha’s Fort</td>
              </tr>
              <tr>
                <td>660</td>
                <td>Surapashavritichchhedi</td>
                <td>Om Surapashavritichchhedine Namah</td>
                <td>Breaker of the Bonds of Suras</td>
              </tr>
              <tr>
                <td>661</td>
                <td>Murari</td>
                <td>Om Muraraye Namah</td>
                <td>Enemy of Mura</td>
              </tr>
              <tr>
                <td>662</td>
                <td>Krurayuddhavida</td>
                <td>Om Krurayuddhavide Namah</td>
                <td>Knower of Fierce Battles</td>
              </tr>
              <tr>
                <td>663</td>
                <td>Hayagrivashiroharta</td>
                <td>Om Hayagrivashirohartre Namah</td>
                <td>Slayer of Hayagriva</td>
              </tr>
              <tr>
                <td>664</td>
                <td>Sarvatma</td>
                <td>Om Sarvatmane Namah</td>
                <td>Soul of All</td>
              </tr>
              <tr>
                <td>665</td>
                <td>Sarvadarshana</td>
                <td>Om Sarvadarshanaya Namah</td>
                <td>Omniscient</td>
              </tr>
              <tr>
                <td>666</td>
                <td>Narakasuravichchhetra</td>
                <td>Om Narakasuravichchhetre Namah</td>
                <td>Destroyer of Narakasura</td>
              </tr>
              <tr>
                <td>667</td>
                <td>Narakatmajarajyada</td>
                <td>Om Narakatmajarajyadaya Namah</td>
                <td>Giver of Kingdom to Narakasura’s Son</td>
              </tr>
              <tr>
                <td>668</td>
                <td>Prithvistuta</td>
                <td>Om Prithvistutaya Namah</td>
                <td>Praised by the Earth</td>
              </tr>
              <tr>
                <td>669</td>
                <td>Prakashatma</td>
                <td>Om Prakashatmane Namah</td>
                <td>The Radiant One</td>
              </tr>
              <tr>
                <td>670</td>
                <td>Hridaya</td>
                <td>Om Hridyaya Namah</td>
                <td>Heart-Captivating</td>
              </tr>
              <tr>
                <td>671</td>
                <td>Yajnaphalaprada</td>
                <td>Om Yajnaphalapradaya Namah</td>
                <td>Bestower of Sacrificial Fruits</td>
              </tr>
              <tr>
                <td>672</td>
                <td>Gunagrahi</td>
                <td>Om Gunagrahine Namah</td>
                <td>Acceptor of Virtues</td>
              </tr>
              <tr>
                <td>673</td>
                <td>Gunadrashta</td>
                <td>Om Gunadrashtre Namah</td>
                <td>Observer of Virtues</td>
              </tr>
              <tr>
                <td>674</td>
                <td>Gudhasvatma</td>
                <td>Om Gudhasvatmane Namah</td>
                <td>The Hidden Soul</td>
              </tr>
              <tr>
                <td>675</td>
                <td>Vibhutimata</td>
                <td>Om Vibhutimate Namah</td>
                <td>Possessor of Splendor</td>
              </tr>
              <tr>
                <td>676</td>
                <td>Kavi</td>
                <td>Om Kavaye Namah</td>
                <td>The Poet</td>
              </tr>
              <tr>
                <td>677</td>
                <td>Jagadupadrashta</td>
                <td>Om Jagadupadrashtre Namah</td>
                <td>Observer of the Universe</td>
              </tr>
              <tr>
                <td>678</td>
                <td>Paramaksharavigraha</td>
                <td>Om Paramaksharavigrahaya Namah</td>
                <td>Supreme Immutable Form</td>
              </tr>
              <tr>
                <td>679</td>
                <td>Prapannapalana</td>
                <td>Om Prapannapalanaya Namah</td>
                <td>Protector of the Surrendered</td>
              </tr>
              <tr>
                <td>680</td>
                <td>Mali</td>
                <td>Om Maline Namah</td>
                <td>The Wreath-Bearer</td>
              </tr>
              <tr>
                <td>681</td>
                <td>Maha</td>
                <td>Om Mahate Namah</td>
                <td>The Great One</td>
              </tr>
              <tr>
                <td>682</td>
                <td>Brahmavivardhana</td>
                <td>Om Brahmavivardhanaya Namah</td>
                <td>Enhancer of Brahman</td>
              </tr>
              <tr>
                <td>683</td>
                <td>Vachyavachakashaktyartha</td>
                <td>Om Vachyavachakashaktyarthaya Namah</td>
                <td>Essence of Word and Meaning</td>
              </tr>
              <tr>
                <td>684</td>
                <td>Sarvavyakritasiddhida</td>
                <td>Om Sarvavyakritasiddhidaya Namah</td>
                <td>Bestower of All Forms of Perfection</td>
              </tr>
              <tr>
                <td>685</td>
                <td>Svayamprabha</td>
                <td>Om Svayamprabhave Namah</td>
                <td>Self-Illuminated</td>
              </tr>
              <tr>
                <td>686</td>
                <td>Anirvedya</td>
                <td>Om Anirvedyaya Namah</td>
                <td>Beyond Despair</td>
              </tr>
              <tr>
                <td>687</td>
                <td>Svaprakasha</td>
                <td>Om Svaprakashaya Namah</td>
                <td>Self-Revealing</td>
              </tr>
              <tr>
                <td>688</td>
                <td>Chirantana</td>
                <td>Om Chirantanaya Namah</td>
                <td>Eternal</td>
              </tr>
              <tr>
                <td>689</td>
                <td>Nadatma</td>
                <td>Om Nadatmane Namah</td>
                <td>Embodiment of Sound</td>
              </tr>
              <tr>
                <td>690</td>
                <td>Mantrakotisha</td>
                <td>Om Mantrakotishaya Namah</td>
                <td>Lord of Millions of Mantras</td>
              </tr>
              <tr>
                <td>691</td>
                <td>Nanavadanirodhaka</td>
                <td>Om Nanavadanirodhakaya Namah</td>
                <td>Remover of Speech Obstacles</td>
              </tr>
              <tr>
                <td>692</td>
                <td>Kandarpakotilavanya</td>
                <td>Om Kandarpakotilavanyaya Namah</td>
                <td>More Beautiful Than Millions of Cupids</td>
              </tr>
              <tr>
                <td>693</td>
                <td>Pararthaikaprayojaka</td>
                <td>Om Pararthaikaprayojakaya Namah</td>
                <td>Sole Doer for Others’ Benefit</td>
              </tr>
              <tr>
                <td>694</td>
                <td>Amarikritadevaugha</td>
                <td>Om Amarikritadevaughaya Namah</td>
                <td>Creator of Devas’ Army</td>
              </tr>
              <tr>
                <td>695</td>
                <td>Kanyakabandhamochana</td>
                <td>Om Kanyakabandhamochanaya Namah</td>
                <td>Liberator of Kanya’s Bonds</td>
              </tr>
              <tr>
                <td>696</td>
                <td>Shodashastrisahasreshaya</td>
                <td>Om Shodashastrisahasreshaya Namah</td>
                <td>Lord of Sixteen Thousand Women</td>
              </tr>
              <tr>
                <td>697</td>
                <td>Kanta</td>
                <td>Om Kantaya Namah</td>
                <td>The Handsome One</td>
              </tr>
              <tr>
                <td>698</td>
                <td>Kantamanobhava</td>
                <td>Om Kantamanobhavaya Namah</td>
                <td>Love Incarnate</td>
              </tr>
              <tr>
                <td>699</td>
                <td>Kridaratnachalaharta</td>
                <td>Om Kridaratnachalahartre Namah</td>
                <td>Seizer of Playful Jewels</td>
              </tr>
              <tr>
                <td>700</td>
                <td>Varunachchhatrashobhita</td>
                <td>Om Varunachchhatrashobhitaya Namah</td>
                <td>Adorned with Varuna’s Parasol</td>
              </tr>
              <tr>
                <td>701</td>
                <td>Shakrabhivandita</td>
                <td>Om Shakrabhivanditaya Namah</td>
                <td>Worshiped by Indra</td>
              </tr>
              <tr>
                <td>702</td>
                <td>Shakrajananikundalaprada</td>
                <td>Om Shakrajananikundalapradaya Namah</td>
                <td>Giver of Earrings to Indra’s Mother</td>
              </tr>
              <tr>
                <td>703</td>
                <td>Aditiprastutastotra</td>
                <td>Om Aditiprastutastotraya Namah</td>
                <td>Praised by Aditi</td>
              </tr>
              <tr>
                <td>704</td>
                <td>Brahmanodghushtacheshtana</td>
                <td>Om Brahmanodghushtacheshtanaya Namah</td>
                <td>Proclaimed by the Brahmanas</td>
              </tr>
              <tr>
                <td>705</td>
                <td>Purana</td>
                <td>Om Puranaya Namah</td>
                <td>Ancient and Eternal</td>
              </tr>
              <tr>
                <td>706</td>
                <td>Sanyamin</td>
                <td>Om Sanyamine Namah</td>
                <td>Controller of Senses</td>
              </tr>
              <tr>
                <td>707</td>
                <td>Janmalipta</td>
                <td>Om Janmaliptaya Namah</td>
                <td>Beyond Birth</td>
              </tr>
              <tr>
                <td>708</td>
                <td>Shadvinshaka</td>
                <td>Om Shadvinshakaya Namah</td>
                <td>The 26th Form</td>
              </tr>
              <tr>
                <td>709</td>
                <td>Arthada</td>
                <td>Om Arthadaya Namah</td>
                <td>Giver of Wealth</td>
              </tr>
              <tr>
                <td>710</td>
                <td>Yashasyaniti</td>
                <td>Om Yashasyanitaye Namah</td>
                <td>Bestower of Fame</td>
              </tr>
              <tr>
                <td>711</td>
                <td>Adyantarahita</td>
                <td>Om Adyantarahitaya Namah</td>
                <td>Without Beginning or End</td>
              </tr>
              <tr>
                <td>712</td>
                <td>Satkathapriya</td>
                <td>Om Satkathapriyaya Namah</td>
                <td>Lover of Noble Stories</td>
              </tr>
              <tr>
                <td>713</td>
                <td>Brahmabodha</td>
                <td>Om Brahmabodhaya Namah</td>
                <td>Enlightener of Knowledge</td>
              </tr>
              <tr>
                <td>714</td>
                <td>Parananda</td>
                <td>Om Paranandaya Namah</td>
                <td>Supreme Bliss</td>
              </tr>
              <tr>
                <td>715</td>
                <td>Parijatapaharaka</td>
                <td>Om Parijatapaharakaya Namah</td>
                <td>Stealer of Parijata Flower</td>
              </tr>
              <tr>
                <td>716</td>
                <td>Paundrakapranahara</td>
                <td>Om Paundrakapranaharanaya Namah</td>
                <td>Destroyer of Paundraka</td>
              </tr>
              <tr>
                <td>717</td>
                <td>Kashirajanisudana</td>
                <td>Om Kashirajanishudanaya Namah</td>
                <td>Slayer of King of Kashi</td>
              </tr>
              <tr>
                <td>718</td>
                <td>Krityagarvaprashamana</td>
                <td>Om Krityagarvaprashamanaya Namah</td>
                <td>Humiliator of Arrogant Acts</td>
              </tr>
              <tr>
                <td>719</td>
                <td>Vichakravadhadikshita</td>
                <td>Om Vichakravadhadikshitaya Namah</td>
                <td>Slayer of Vichakra</td>
              </tr>
              <tr>
                <td>720</td>
                <td>Hansavidhvansana</td>
                <td>Om Hansavidhvansanaya Namah</td>
                <td>Destroyer of Hansa</td>
              </tr>
              <tr>
                <td>721</td>
                <td>Sambajanaka</td>
                <td>Om Sambajanakaya Namah</td>
                <td>Father of Samba</td>
              </tr>
              <tr>
                <td>722</td>
                <td>Dimbhakardana</td>
                <td>Om Dimbhakardanaya Namah</td>
                <td>Devourer of Dimba</td>
              </tr>
              <tr>
                <td>723</td>
                <td>Muni</td>
                <td>Om Munaye Namah</td>
                <td>The Sage</td>
              </tr>
              <tr>
                <td>724</td>
                <td>Gopta</td>
                <td>Om Goptre Namah</td>
                <td>Protector</td>
              </tr>
              <tr>
                <td>725</td>
                <td>Pitrivaraprada</td>
                <td>Om Pitrivarapradaya Namah</td>
                <td>Bestower of Boons to Ancestors</td>
              </tr>
              <tr>
                <td>726</td>
                <td>Savanadikshita</td>
                <td>Om Savanadikshitaya Namah</td>
                <td>Initiated into Sacred Rites</td>
              </tr>
              <tr>
                <td>727</td>
                <td>Rathi</td>
                <td>Om Rathine Namah</td>
                <td>The Charioteer</td>
              </tr>
              <tr>
                <td>728</td>
                <td>Sarathyanirdeshtra</td>
                <td>Om Sarathyanirdeshtre Namah</td>
                <td>Guide of Charioteer</td>
              </tr>
              <tr>
                <td>729</td>
                <td>Phalguni</td>
                <td>Om Phalgunaya Namah</td>
                <td>Associated with Arjuna</td>
              </tr>
              <tr>
                <td>730</td>
                <td>Phalgunipriya</td>
                <td>Om Phalgunipriyaya Namah</td>
                <td>Beloved of Phalguni (Arjuna)</td>
              </tr>
              <tr>
                <td>731</td>
                <td>Saptabdhistambhanodbhuta</td>
                <td>Om Saptabdhistambhanodbhutaya Namah</td>
                <td>Emanated by Halting Seven Oceans</td>
              </tr>
              <tr>
                <td>732</td>
                <td>Hara</td>
                <td>Om Haraye Namah</td>
                <td>Remover of Sins</td>
              </tr>
              <tr>
                <td>733</td>
                <td>Saptabdhibhedana</td>
                <td>Om Saptabdhibhedanaya Namah</td>
                <td>Divider of Seven Oceans</td>
              </tr>
              <tr>
                <td>734</td>
                <td>Atmaprakasha</td>
                <td>Om Atmaprakashaya Namah</td>
                <td>Self-Illuminating</td>
              </tr>
              <tr>
                <td>735</td>
                <td>Purnashri</td>
                <td>Om Purnashriye Namah</td>
                <td>Embodiment of Complete Prosperity</td>
              </tr>
              <tr>
                <td>736</td>
                <td>Adinarayanekshita</td>
                <td>Om Adinarayanekshitaya Namah</td>
                <td>Seen by Adi Narayana</td>
              </tr>
              <tr>
                <td>737</td>
                <td>Vipraputraprada</td>
                <td>Om Vipraputrapradaya Namah</td>
                <td>Giver of Sons to Brahmanas</td>
              </tr>
              <tr>
                <td>738</td>
                <td>Sarvamatrisutaprada</td>
                <td>Om Sarvamatrisutapradaya Namah</td>
                <td>Bestower of Sons to All Mothers</td>
              </tr>
              <tr>
                <td>739</td>
                <td>Parthavismayakrita</td>
                <td>Om Parthavismayakrite Namah</td>
                <td>Creator of Wonder in Arjuna</td>
              </tr>
              <tr>
                <td>740</td>
                <td>Parthapranavarthaprabodha</td>
                <td>Om Parthapranavarthaprabodhanaya Namah</td>
                <td>Enlightener of Arjuna in the Gita</td>
              </tr>
              <tr>
                <td>741</td>
                <td>Kailasayatra</td>
                <td>Om Kailasayatrasumukhaya Namah</td>
                <td>Traveler to Kailasa</td>
              </tr>
              <tr>
                <td>742</td>
                <td>Badaryashramabhushana</td>
                <td>Om Badaryashramabhushanaya Namah</td>
                <td>Ornament of Badaryashrama</td>
              </tr>
              <tr>
                <td>743</td>
                <td>Ghantakarnakriyaishita</td>
                <td>Om Ghantakarnakriyamaudhyatteshitaya Namah</td>
                <td>Controller of Ghantakarna’s Actions</td>
              </tr>
              <tr>
                <td>744</td>
                <td>Bhaktavatsala</td>
                <td>Om Bhaktavatsalaya Namah</td>
                <td>Protector of Devotees</td>
              </tr>
              <tr>
                <td>745</td>
                <td>Munivrindadibhirdhyeya</td>
                <td>Om Munivrindadibhirdhyeyaya Namah</td>
                <td>Meditated Upon by Groups of Sages</td>
              </tr>
              <tr>
                <td>746</td>
                <td>Ghantakarnavaraprada</td>
                <td>Om Ghantakarnavarapradaya Namah</td>
                <td>Giver of Boons to Ghantakarna</td>
              </tr>
              <tr>
                <td>747</td>
                <td>Tapashcharyapara</td>
                <td>Om Tapashcharyaparaya Namah</td>
                <td>Engaged in Austerities</td>
              </tr>
              <tr>
                <td>748</td>
                <td>Chiravasin</td>
                <td>Om Chiravasase Namah</td>
                <td>Dweller in Ancient Times</td>
              </tr>
              <tr>
                <td>749</td>
                <td>Pingajatadhara</td>
                <td>Om Pingajatadharaya Namah</td>
                <td>Bearer of Yellow Clothes</td>
              </tr>
              <tr>
                <td>750</td>
                <td>Pratyakshikritabhutesha</td>
                <td>Om Pratyakshikritabhuteshaya Namah</td>
                <td>Made Bhutesha Visible</td>
              </tr>
              <tr>
                <td>751</td>
                <td>Shivastotra</td>
                <td>Om Shivastotre Namah</td>
                <td>Praised by Lord Shiva</td>
              </tr>
              <tr>
                <td>752</td>
                <td>Shivastuta</td>
                <td>Om Shivastutaya Namah</td>
                <td>Worshipped by Shiva</td>
              </tr>
              <tr>
                <td>753</td>
                <td>Krishnasvayamvaralokakautuki</td>
                <td>Om Krishnasvayamvaralokakautukine Namah</td>
                <td>Delighting at Krishna’s swayamvara</td>
              </tr>
              <tr>
                <td>754</td>
                <td>Sarvasammata</td>
                <td>Om Sarvasammataya Namah</td>
                <td>Accepted by all</td>
              </tr>
              <tr>
                <td>755</td>
                <td>Balasanrambhashamana</td>
                <td>Om Balasanrambhashamanaya Namah</td>
                <td>Subduer of Balarama’s temper</td>
              </tr>
              <tr>
                <td>756</td>
                <td>Baladarshitapandava</td>
                <td>Om Baladarshitapandavaya Namah</td>
                <td>Revealed Himself to the Pandavas as Balarama’s Guide</td>
              </tr>
              <tr>
                <td>757</td>
                <td>Yativesharjunabhishtadayi</td>
                <td>Om Yativesharjunabhishtadayine Namah</td>
                <td>Fulfiller of Arjuna’s Wishes</td>
              </tr>
              <tr>
                <td>758</td>
                <td>Sarvatmagochara</td>
                <td>Om Sarvatmagocharaya Namah</td>
                <td>Accessible to all</td>
              </tr>
              <tr>
                <td>759</td>
                <td>Subhadraphalgunodvahakartre</td>
                <td>Om Subhadraphalgunodvahakartre Namah</td>
                <td>Arranger of Subhadra and Arjuna’s Marriage</td>
              </tr>
              <tr>
                <td>760</td>
                <td>Prinitaphalguna</td>
                <td>Om Prinitaphalgunaya Namah</td>
                <td>Beloved of Arjuna</td>
              </tr>
              <tr>
                <td>761</td>
                <td>Khandavaprinitarchishma</td>
                <td>Om Khandavaprinitarchishmate Namah</td>
                <td>Witness to Khandava Forest Offering</td>
              </tr>
              <tr>
                <td>762</td>
                <td>Mayadanavamochana</td>
                <td>Om Mayadanavamochanaya Namah</td>
                <td>Liberator of Mayadanava</td>
              </tr>
              <tr>
                <td>763</td>
                <td>Sulabha</td>
                <td>Om Sulabhaya Namah</td>
                <td>Accessible to All</td>
              </tr>
              <tr>
                <td>764</td>
                <td>Rajasuyarhayudhishthiraniyojak</td>
                <td>Om Rajasuyarhayudhishthiraniyojakaya Namah</td>
                <td>Guide to Yudhishthira in Rajasuya Yajna</td>
              </tr>
              <tr>
                <td>765</td>
                <td>Bhimarditajarasandha</td>
                <td>Om Bhimarditajarasandhaya Namah</td>
                <td>Destroyer of Jarasandha by Bhima</td>
              </tr>
              <tr>
                <td>766</td>
                <td>Magadhatmajarajyada</td>
                <td>Om Magadhatmajarajyadaya Namah</td>
                <td>Establisher of Magadha’s Rule</td>
              </tr>
              <tr>
                <td>767</td>
                <td>Rajabandhananirmoktra</td>
                <td>Om Rajabandhananirmoktre Namah</td>
                <td>Liberator from Royal Captivity</td>
              </tr>
              <tr>
                <td>768</td>
                <td>Rajasuyagrapujana</td>
                <td>Om Rajasuyagrapujanaya Namah</td>
                <td>Recipient of First Worship at Rajasuya Yajna</td>
              </tr>
              <tr>
                <td>769</td>
                <td>Chaidyadyasahana</td>
                <td>Om Chaidyadyasahanaya Namah</td>
                <td>Subduer of King of Chedi</td>
              </tr>
              <tr>
                <td>770</td>
                <td>Bhishmastuta</td>
                <td>Om Bhishmastutaya Namah</td>
                <td>Praised by Bhishma</td>
              </tr>
              <tr>
                <td>771</td>
                <td>Satvatapurvaja</td>
                <td>Om Satvatapurvajaya Namah</td>
                <td>Foremost among the Satvatas</td>
              </tr>
              <tr>
                <td>772</td>
                <td>Sarvatman</td>
                <td>Om Sarvatmane Namah</td>
                <td>Soul of All</td>
              </tr>
              <tr>
                <td>773</td>
                <td>Arthasamaharta</td>
                <td>Om Arthasamahartre Namah</td>
                <td>Giver of Wealth</td>
              </tr>
              <tr>
                <td>774</td>
                <td>Mandarachaladharaka</td>
                <td>Om Mandarachaladharakaya Namah</td>
                <td>Holder of Mandara Mountain</td>
              </tr>
              <tr>
                <td>775</td>
                <td>Yajnavatara</td>
                <td>Om Yajnavataraya Namah</td>
                <td>Incarnation for Yajnas</td>
              </tr>
              <tr>
                <td>776</td>
                <td>Prahladapratijnaparipalaka</td>
                <td>Om Prahladapratijnaparipalakaya Namah</td>
                <td>Keeper of Prahlada’s Vow</td>
              </tr>
              <tr>
                <td>777</td>
                <td>Baliyajnasabhadhvansi</td>
                <td>Om Baliyajnasabhadhvansine Namah</td>
                <td>Destroyer of Bali’s Yajna Arena</td>
              </tr>
              <tr>
                <td>778</td>
                <td>Driptakshatrakulantaka</td>
                <td>Om Driptakshatrakulantakaya Namah</td>
                <td>Subduer of Proud Kshatriyas</td>
              </tr>
              <tr>
                <td>779</td>
                <td>Dashagrivantaka</td>
                <td>Om Dashagrivantakaya Namah</td>
                <td>Slayer of Ravana</td>
              </tr>
              <tr>
                <td>780</td>
                <td>Onjetr</td>
                <td>Om Onjetre Namah</td>
                <td>Renowned Everywhere</td>
              </tr>
              <tr>
                <td>781</td>
                <td>Revatipremavallabha</td>
                <td>Om Revatipremavallabhaya Namah</td>
                <td>Beloved of Revati</td>
              </tr>
              <tr>
                <td>782</td>
                <td>Sarvavataradhishthata</td>
                <td>Om Sarvavataradhishthatre Namah</td>
                <td>Lord of All Incarnations</td>
              </tr>
              <tr>
                <td>783</td>
                <td>Vedabahyavimohana</td>
                <td>Om Vedabahyavimohanaya Namah</td>
                <td>Fascinator Beyond the Vedas</td>
              </tr>
              <tr>
                <td>784</td>
                <td>Kalidoshanirakarta</td>
                <td>Om Kalidoshanirakartre Namah</td>
                <td>Remover of Kali’s Faults</td>
              </tr>
              <tr>
                <td>785</td>
                <td>Dashanamna</td>
                <td>Om Dashanamne Namah</td>
                <td>Holder of Ten Names</td>
              </tr>
              <tr>
                <td>786</td>
                <td>Dridhavrata</td>
                <td>Om Dridhavrataya Namah</td>
                <td>Steadfast in Vows</td>
              </tr>
              <tr>
                <td>787</td>
                <td>Ameyatma</td>
                <td>Om Ameyatmane Namah</td>
                <td>Immeasurable Soul</td>
              </tr>
              <tr>
                <td>788</td>
                <td>Jagatsvami</td>
                <td>Om Jagatsvamine Namah</td>
                <td>Lord of the Universe</td>
              </tr>
              <tr>
                <td>789</td>
                <td>Vagmi</td>
                <td>Om Vagmine Namah</td>
                <td>Eloquent Speaker</td>
              </tr>
              <tr>
                <td>790</td>
                <td>Chaidyashirohara</td>
                <td>Om Chaidyashiroharaya Namah</td>
                <td>Slayer of Shishupala</td>
              </tr>
              <tr>
                <td>791</td>
                <td>Draupadirachitastotra</td>
                <td>Om Draupadirachitastotraya Namah</td>
                <td>Worshipped by Draupadi</td>
              </tr>
              <tr>
                <td>792</td>
                <td>Keshava</td>
                <td>Om Keshavaya Namah</td>
                <td>Lord of Creation</td>
              </tr>
              <tr>
                <td>793</td>
                <td>Purushottama</td>
                <td>Om Purushottamaya Namah</td>
                <td>Supreme Being</td>
              </tr>
              <tr>
                <td>794</td>
                <td>Narayana</td>
                <td>Om Narayanaya Namah</td>
                <td>Shelter of All</td>
              </tr>
              <tr>
                <td>795</td>
                <td>Madhupati</td>
                <td>Om Madhupataye Namah</td>
                <td>Lord of Madhus</td>
              </tr>
              <tr>
                <td>796</td>
                <td>Madhava</td>
                <td>Om Madhavaya Namah</td>
                <td>Husband of Lakshmi</td>
              </tr>
              <tr>
                <td>797</td>
                <td>Doshavarjita</td>
                <td>Om Doshavarjitaya Namah</td>
                <td>Faultless</td>
              </tr>
              <tr>
                <td>798</td>
                <td>Govinda</td>
                <td>Om Govindaya Namah</td>
                <td>Protector of Cows</td>
              </tr>
              <tr>
                <td>799</td>
                <td>Pundarikaksha</td>
                <td>Om Pundarikakshaya Namah</td>
                <td>Lotus-Eyed</td>
              </tr>
              <tr>
                <td>800</td>
                <td>Vishnu</td>
                <td>Om Vishnave Namah</td>
                <td>All-Pervading</td>
              </tr>
              <tr>
                <td>801</td>
                <td>Madhusudana</td>
                <td>Om Madhusudanaya Namah</td>
                <td>Slayer of the Demon Madhu</td>
              </tr>
              <tr>
                <td>802</td>
                <td>Trivikrama</td>
                <td>Om Trivikramaya Namah</td>
                <td>Lord Who Measured the Three Worlds</td>
              </tr>
              <tr>
                <td>803</td>
                <td>Trilokesha</td>
                <td>Om Trilokeshaya Namah</td>
                <td>Lord of the Three Worlds</td>
              </tr>
              <tr>
                <td>804</td>
                <td>Vamana</td>
                <td>Om Vamanaya Namah</td>
                <td>Dwarf Incarnation</td>
              </tr>
              <tr>
                <td>805</td>
                <td>Shridhara</td>
                <td>Om Shridharaya Namah</td>
                <td>Bearer of Goddess Lakshmi</td>
              </tr>
              <tr>
                <td>806</td>
                <td>Punsa</td>
                <td>Om Punse Namah</td>
                <td>Supreme Man</td>
              </tr>
              <tr>
                <td>807</td>
                <td>Hrishikesha</td>
                <td>Om Hrishikeshaya Namah</td>
                <td>Master of the Senses</td>
              </tr>
              <tr>
                <td>808</td>
                <td>Vasudeva</td>
                <td>Om Vasudevaya Namah</td>
                <td>Son of Vasudeva</td>
              </tr>
              <tr>
                <td>809</td>
                <td>Padmanabha</td>
                <td>Om Padmanabhaya Namah</td>
                <td>Lotus-Naveled</td>
              </tr>
              <tr>
                <td>810</td>
                <td>Mahahrada</td>
                <td>Om Mahahradaya Namah</td>
                <td>Great Lake</td>
              </tr>
              <tr>
                <td>811</td>
                <td>Damodara</td>
                <td>Om Damodaraya Namah</td>
                <td>One Tied with a Rope</td>
              </tr>
              <tr>
                <td>812</td>
                <td>Chaturvyuha</td>
                <td>Om Chaturvyuhaya Namah</td>
                <td>Manifestation in Four Forms</td>
              </tr>
              <tr>
                <td>813</td>
                <td>Panchalimanarakshana</td>
                <td>Om Panchalimanarakshanaya Namah</td>
                <td>Protector of Draupadi</td>
              </tr>
              <tr>
                <td>814</td>
                <td>Salvaghna</td>
                <td>Om Salvaghnaya Namah</td>
                <td>Destroyer of Shalva</td>
              </tr>
              <tr>
                <td>815</td>
                <td>Samarashladhin</td>
                <td>Om Samarashladhine Namah</td>
                <td>One Who Rejoices in Battles</td>
              </tr>
              <tr>
                <td>816</td>
                <td>Dantavaktranibarhana</td>
                <td>Om Dantavaktranibarhanaya Namah</td>
                <td>Slayer of Dantavaktra</td>
              </tr>
              <tr>
                <td>817</td>
                <td>Damodarapriyasakha</td>
                <td>Om Damodarapriyasakhaya Namah</td>
                <td>Beloved Friend of Damodara</td>
              </tr>
              <tr>
                <td>818</td>
                <td>Prithukasvadanapriya</td>
                <td>Om Prithukasvadanapriyaya Namah</td>
                <td>Fond of Flattened Rice</td>
              </tr>
              <tr>
                <td>819</td>
                <td>Ghrini</td>
                <td>Om Ghrinine Namah</td>
                <td>Compassionate One</td>
              </tr>
              <tr>
                <td>820</td>
                <td>Damodara</td>
                <td>Om Damodaraya Namah</td>
                <td>Lord with a Rope Around His Belly</td>
              </tr>
              <tr>
                <td>821</td>
                <td>Shridaya</td>
                <td>Om Shridaya Namah</td>
                <td>Giver of Prosperity</td>
              </tr>
              <tr>
                <td>822</td>
                <td>Gopipunaravekshaka</td>
                <td>Om Gopipunaravekshakaya Namah</td>
                <td>Glancer at the Gopis Again</td>
              </tr>
              <tr>
                <td>823</td>
                <td>Gopikamuktidaya</td>
                <td>Om Gopikamuktidaya Namah</td>
                <td>Giver of Liberation to Gopis</td>
              </tr>
              <tr>
                <td>824</td>
                <td>Yogi</td>
                <td>Om Yogine Namah</td>
                <td>Great Ascetic</td>
              </tr>
              <tr>
                <td>825</td>
                <td>Durvasastriptikara</td>
                <td>Om Durvasastriptikarakaya Namah</td>
                <td>One Who Satisfied Durvasa</td>
              </tr>
              <tr>
                <td>826</td>
                <td>Avijnatavrajakirnapandavalokana</td>
                <td>Om Avijnatavrajakirnapandavalokanaya Namah</td>
                <td>Observer of Pandavas in Disguise</td>
              </tr>
              <tr>
                <td>827</td>
                <td>Jayi</td>
                <td>Om Jayine Namah</td>
                <td>Victorious</td>
              </tr>
              <tr>
                <td>828</td>
                <td>Parthasarathyanirata</td>
                <td>Om Parthasarathyanirataya Namah</td>
                <td>Devoted Charioteer of Arjuna</td>
              </tr>
              <tr>
                <td>829</td>
                <td>Prajna</td>
                <td>Om Prajnaya Namah</td>
                <td>Wisdom Personified</td>
              </tr>
              <tr>
                <td>830</td>
                <td>Pandavadautya</td>
                <td>Om Pandavadautyakrite Namah</td>
                <td>Messenger for the Pandavas</td>
              </tr>
              <tr>
                <td>831</td>
                <td>Viduratithyasantushta</td>
                <td>Om Viduratithyasantushtaya Namah</td>
                <td>Pleased by Vidura's Hospitality</td>
              </tr>
              <tr>
                <td>832</td>
                <td>Kuntisantoshadaya</td>
                <td>Om Kuntisantoshadayakaya Namah</td>
                <td>Giver of Joy to Kunti</td>
              </tr>
              <tr>
                <td>833</td>
                <td>Suyodhanatiraskarta</td>
                <td>Om Suyodhanatiraskartre Namah</td>
                <td>Reproacher of Duryodhana</td>
              </tr>
              <tr>
                <td>834</td>
                <td>Duryodhanavikaravid</td>
                <td>Om Duryodhanavikaravide Namah</td>
                <td>Knower of Duryodhana’s Distress</td>
              </tr>
              <tr>
                <td>835</td>
                <td>Vidurabhishtuta</td>
                <td>Om Vidurabhishtutaya Namah</td>
                <td>Praised by Vidura</td>
              </tr>
              <tr>
                <td>836</td>
                <td>Nitya</td>
                <td>Om Nityaya Namah</td>
                <td>Eternal One</td>
              </tr>
              <tr>
                <td>837</td>
                <td>Varshneya</td>
                <td>Om Varshneyaya Namah</td>
                <td>Descendant of the Vrishni Clan</td>
              </tr>
              <tr>
                <td>838</td>
                <td>Mangalatmaka</td>
                <td>Om Mangalatmakaya Namah</td>
                <td>Embodiment of Auspiciousness</td>
              </tr>
              <tr>
                <td>839</td>
                <td>Panchavinshatitattvesha</td>
                <td>Om Panchavinshatitattveshaya Namah</td>
                <td>Lord of the Twenty-Five Elements</td>
              </tr>
              <tr>
                <td>840</td>
                <td>Chaturvinshatidehabhaj</td>
                <td>Om Chaturvinshatidehabhaje Namah</td>
                <td>Possessor of Twenty-Four Forms</td>
              </tr>
              <tr>
                <td>841</td>
                <td>Sarvanugrahaka</td>
                <td>Om Sarvanugrahakaya Namah</td>
                <td>Benevolent to All</td>
              </tr>
              <tr>
                <td>842</td>
                <td>Sarvadasharhasatatarchita</td>
                <td>Om Sarvadasharhasatatarchitaya Namah</td>
                <td>Ever Worshipped by the Yadavas</td>
              </tr>
              <tr>
                <td>843</td>
                <td>Achintya</td>
                <td>Om Achintyaya Namah</td>
                <td>Inconceivable</td>
              </tr>
              <tr>
                <td>844</td>
                <td>Madhuralapa</td>
                <td>Om Madhuralapaya Namah</td>
                <td>Sweet Speaker</td>
              </tr>
              <tr>
                <td>845</td>
                <td>Sadhudarshina</td>
                <td>Om Sadhudarshine Namah</td>
                <td>Seer of the Pious</td>
              </tr>
              <tr>
                <td>846</td>
                <td>Durasada</td>
                <td>Om Durasadaya Namah</td>
                <td>Unassailable</td>
              </tr>
              <tr>
                <td>847</td>
                <td>Manushyadharmanugata</td>
                <td>Om Manushyadharmanugataya Namah</td>
                <td>Follower of Human Virtues</td>
              </tr>
              <tr>
                <td>848</td>
                <td>Kauravendrakshayekshitra</td>
                <td>Om Kauravendrakshayekshitre Namah</td>
                <td>Witness of the Kauravas' Destruction</td>
              </tr>
              <tr>
                <td>849</td>
                <td>Upendra</td>
                <td>Om Upendraya Namah</td>
                <td>Younger Brother of Indra</td>
              </tr>
              <tr>
                <td>850</td>
                <td>Danavarataya</td>
                <td>Om Danavarataye Namah</td>
                <td>Giver of Boons to Demons</td>
              </tr>
              <tr>
                <td>851</td>
                <td>Urugita</td>
                <td>Om Urugitaya Namah</td>
                <td>The One Who is Extolled</td>
              </tr>
              <tr>
                <td>852</td>
                <td>Mahadyuti</td>
                <td>Om Mahadyutaye Namah</td>
                <td>Of Great Splendor</td>
              </tr>
              <tr>
                <td>853</td>
                <td>Brahmanyadeva</td>
                <td>Om Brahmanyadevaya Namah</td>
                <td>The Supreme God for Brahmanas</td>
              </tr>
              <tr>
                <td>854</td>
                <td>Shrutimata</td>
                <td>Om Shrutimate Namah</td>
                <td>The One Who is All-Knowing</td>
              </tr>
              <tr>
                <td>855</td>
                <td>Gobrahmanahitashaya</td>
                <td>Om Gobrahmanahitashayaya Namah</td>
                <td>Protector of Cows and Brahmanas</td>
              </tr>
              <tr>
                <td>856</td>
                <td>Varashila</td>
                <td>Om Varashilaya Namah</td>
                <td>Of the Best Character</td>
              </tr>
              <tr>
                <td>857</td>
                <td>Shivarambha</td>
                <td>Om Shivarambhaya Namah</td>
                <td>Embodiment of Auspicious Beginnings</td>
              </tr>
              <tr>
                <td>858</td>
                <td>Suvijnanavimurtimata</td>
                <td>Om Suvijnanavimurtimate Namah</td>
                <td>Embodiment of Supreme Knowledge</td>
              </tr>
              <tr>
                <td>859</td>
                <td>Svabhavashuddha</td>
                <td>Om Svabhavashuddhaya Namah</td>
                <td>Pure by Nature</td>
              </tr>
              <tr>
                <td>860</td>
                <td>Sanmitra</td>
                <td>Om Sanmitraya Namah</td>
                <td>Friend to All</td>
              </tr>
              <tr>
                <td>861</td>
                <td>Susharana</td>
                <td>Om Susharanyaya Namah</td>
                <td>The Best Refuge</td>
              </tr>
              <tr>
                <td>862</td>
                <td>Sulakshana</td>
                <td>Om Sulakshanaya Namah</td>
                <td>Possessor of Auspicious Signs</td>
              </tr>
              <tr>
                <td>863</td>
                <td>Dhritarashtragata</td>
                <td>Om Dhritarashtragataya Namah</td>
                <td>Reached Dhritarashtra</td>
              </tr>
              <tr>
                <td>864</td>
                <td>Drishtiprada</td>
                <td>Om Drishtipradaya Namah</td>
                <td>Giver of Vision</td>
              </tr>
              <tr>
                <td>865</td>
                <td>Karnavibhedana</td>
                <td>Om Karnavibhedanaya Namah</td>
                <td>Piercer of Ears</td>
              </tr>
              <tr>
                <td>866</td>
                <td>Pratodadhrita</td>
                <td>Om Pratodadhrite Namah</td>
                <td>Holder of the Goad</td>
              </tr>
              <tr>
                <td>867</td>
                <td>Vishvarupavismaritadhananjaya</td>
                <td>Om Vishvarupavismaritadhananjayaya Namah</td>
                <td>Astonishing Arjuna with Universal Form</td>
              </tr>
              <tr>
                <td>868</td>
                <td>Samaganapriya</td>
                <td>Om Samaganapriyaya Namah</td>
                <td>Lover of Sama Veda Chants</td>
              </tr>
              <tr>
                <td>869</td>
                <td>Dharmadhena</td>
                <td>Om Dharmadhenave Namah</td>
                <td>The Dharma Cow</td>
              </tr>
              <tr>
                <td>870</td>
                <td>Varnottama</td>
                <td>Om Varnottamaya Namah</td>
                <td>The Supreme of All Castes</td>
              </tr>
              <tr>
                <td>871</td>
                <td>Avyaya</td>
                <td>Om Avyayaya Namah</td>
                <td>Indestructible</td>
              </tr>
              <tr>
                <td>872</td>
                <td>Chaturyugakriyakarta</td>
                <td>Om Chaturyugakriyakartre Namah</td>
                <td>Creator of the Four Yugas</td>
              </tr>
              <tr>
                <td>873</td>
                <td>Vishvarupapradarshaka</td>
                <td>Om Vishvarupapradarshakaya Namah</td>
                <td>Revealer of Universal Form</td>
              </tr>
              <tr>
                <td>874</td>
                <td>Brahmabodhaparitratapartha</td>
                <td>Om Brahmabodhaparitrataparthaya Namah</td>
                <td>Savior of Arjuna by Teaching Brahmavidya</td>
              </tr>
              <tr>
                <td>875</td>
                <td>Bhishmarthachakrabhrita</td>
                <td>Om Bhishmarthachakrabhrite Namah</td>
                <td>Bearer of the Chakra for Bhishma</td>
              </tr>
              <tr>
                <td>876</td>
                <td>Arjunayasavidhvansin</td>
                <td>Om Arjunayasavidhvansine Namah</td>
                <td>Destroyer of Arjuna’s Enemies</td>
              </tr>
              <tr>
                <td>877</td>
                <td>Kaladanshtravibhushana</td>
                <td>Om Kaladanshtravibhushanaya Namah</td>
                <td>Decorated with Fangs of Time</td>
              </tr>
              <tr>
                <td>878</td>
                <td>Sujatanantamahimna</td>
                <td>Om Sujatanantamahimne Namah</td>
                <td>Of Excellent and Infinite Glory</td>
              </tr>
              <tr>
                <td>879</td>
                <td>Svapnavyaparitarjuna</td>
                <td>Om Svapnavyaparitarjunaya Namah</td>
                <td>Influencer of Arjuna’s Dreams</td>
              </tr>
              <tr>
                <td>880</td>
                <td>Akalasandhyaghatana</td>
                <td>Om Akalasandhyaghatanaya Namah</td>
                <td>Creator of Timeless Unions</td>
              </tr>
              <tr>
                <td>881</td>
                <td>Chakrantaritabhaskara</td>
                <td>Om Chakrantaritabhaskaraya Namah</td>
                <td>The Sun Traversing Through the Wheel</td>
              </tr>
              <tr>
                <td>882</td>
                <td>Dushtapramathana</td>
                <td>Om Dushtapramathanaya Namah</td>
                <td>Subduer of the Wicked</td>
              </tr>
              <tr>
                <td>883</td>
                <td>Parthapratijnaparipalaka</td>
                <td>Om Parthapratijnaparipalakaya Namah</td>
                <td>Keeper of Arjuna’s Vow</td>
              </tr>
              <tr>
                <td>884</td>
                <td>Sindhurajashirahpatasthanavaktra</td>
                <td>Om Sindhurajashirahpatasthanavaktre Namah</td>
                <td>Head Ornament for the King of the Ocean</td>
              </tr>
              <tr>
                <td>885</td>
                <td>Vivekadrisha</td>
                <td>Om Vivekadrishe Namah</td>
                <td>Of Discerning Vision</td>
              </tr>
              <tr>
                <td>886</td>
                <td>Subhadrashokaharana</td>
                <td>Om Subhadrashokaharanaya Namah</td>
                <td>Remover of Subhadra’s Grief</td>
              </tr>
              <tr>
                <td>887</td>
                <td>Dronotsekadivismita</td>
                <td>Om Dronotsekadivismitaya Namah</td>
                <td>Astonished by Drona’s Enthusiasm</td>
              </tr>
              <tr>
                <td>888</td>
                <td>Parthamanyunirakarta</td>
                <td>Om Parthamanyunirakartre Namah</td>
                <td>Pacifier of Arjuna’s Anger</td>
              </tr>
              <tr>
                <td>889</td>
                <td>Pandavotsavadayaka</td>
                <td>Om Pandavotsavadayakaya Namah</td>
                <td>Giver of Joy to the Pandavas</td>
              </tr>
              <tr>
                <td>890</td>
                <td>Angushthakrantakaunteyaratha</td>
                <td>Om Angushthakrantakaunteyarathaya Namah</td>
                <td>The Thumb Walker of Arjuna’s Chariot</td>
              </tr>
              <tr>
                <td>891</td>
                <td>Shakta</td>
                <td>Om Shaktaya Namah</td>
                <td>Powerful</td>
              </tr>
              <tr>
                <td>892</td>
                <td>Ahishirshajita</td>
                <td>Om Ahishirshajite Namah</td>
                <td>Conqueror of the Serpent King</td>
              </tr>
              <tr>
                <td>893</td>
                <td>Kalakopaprashamana</td>
                <td>Om Kalakopaprashamanaya Namah</td>
                <td>Queller of Kali’s Wrath</td>
              </tr>
              <tr>
                <td>894</td>
                <td>Bhimasenajayaprada</td>
                <td>Om Bhimasenajayapradaya Namah</td>
                <td>Giver of Victory to Bhima</td>
              </tr>
              <tr>
                <td>895</td>
                <td>Ashvatthamavadhayasatratapandusuta</td>
                <td>Om Ashvatthamavadhayasatratapandusutaya Namah</td>
                <td>Supporter of the Pandavas in Killing Ashvatthama</td>
              </tr>
              <tr>
                <td>896</td>
                <td>Kriti</td>
                <td>Om Kritine Namah</td>
                <td>Skillful</td>
              </tr>
              <tr>
                <td>897</td>
                <td>Ishikastraprashamana</td>
                <td>Om Ishikastraprashamanaya Namah</td>
                <td>Subduer of Arrows</td>
              </tr>
              <tr>
                <td>898</td>
                <td>Draunirakshavichakshana</td>
                <td>Om Draunirakshavichakshanaya Namah</td>
                <td>Observer of Ashvatthama’s Treachery</td>
              </tr>
              <tr>
                <td>899</td>
                <td>Parthapaharitadraunichudamani</td>
                <td>Om Parthapaharitadraunichudamanaye Namah</td>
                <td>The One Who Retrieved Drauni’s Jewel for Arjuna</td>
              </tr>
              <tr>
                <td>900</td>
                <td>Abhangura</td>
                <td>Om Abhanguraya Namah</td>
                <td>Indestructible</td>
              </tr>
              <tr>
                <td>901</td>
                <td>Dhritarashtraparanrishtabhimapratikritismaya</td>
                <td>Om Dhritarashtraparanrishtabhimapratikritismayaya Namah</td>
                <td>The One Who Gave Bhima Satisfaction Over Duryodhana</td>
              </tr>
              <tr>
                <td>902</td>
                <td>Bhishmabuddhiprada</td>
                <td>Om Bhishmabuddhipradaya Namah</td>
                <td>The One Who Enlightened Bhishma</td>
              </tr>
              <tr>
                <td>903</td>
                <td>Shanta</td>
                <td>Om Shantaya Namah</td>
                <td>The Peaceful One</td>
              </tr>
              <tr>
                <td>904</td>
                <td>Sharachchandranibhanana</td>
                <td>Om Sharachchandranibhananaya Namah</td>
                <td>The One with a Face Like the Autumn Moon</td>
              </tr>
              <tr>
                <td>905</td>
                <td>Gadagrajana</td>
                <td>Om Gadagrajanmane Namah</td>
                <td>The Elder Brother of Gada</td>
              </tr>
              <tr>
                <td>906</td>
                <td>Panchalipratijnapalaka</td>
                <td>Om Panchalipratijnapalakaya Namah</td>
                <td>Keeper of Draupadi's Vow</td>
              </tr>
              <tr>
                <td>907</td>
                <td>Gandharikopadrigguptadharmasunu</td>
                <td>Om Gandharikopadrigguptadharmasunave Namah</td>
                <td>The Protector of Dharma in Gandhari's Anger</td>
              </tr>
              <tr>
                <td>908</td>
                <td>Anamaya</td>
                <td>Om Anamayaya Namah</td>
                <td>The One Without Affliction</td>
              </tr>
              <tr>
                <td>909</td>
                <td>Prapannartibhayachchhetta</td>
                <td>Om Prapannartibhayachchhettre Namah</td>
                <td>Remover of Fear and Pain for Devotees</td>
              </tr>
              <tr>
                <td>910</td>
                <td>Bhishmashalyavyathapaha</td>
                <td>Om Bhishmashalyavyathapahaya Namah</td>
                <td>The One Who Relieved Bhishma’s Pain</td>
              </tr>
              <tr>
                <td>911</td>
                <td>Shanta</td>
                <td>Om Shantaya Namah</td>
                <td>The Tranquil One</td>
              </tr>
              <tr>
                <td>912</td>
                <td>Shantanavodirnasarvadharmasamahita</td>
                <td>Om Shantanavodirnasarvadharmasamahitaya Namah</td>
                <td>Born of Shantanu, Established in Dharma</td>
              </tr>
              <tr>
                <td>913</td>
                <td>Smaritabrahmavidyarthapritapartha</td>
                <td>Om Smaritabrahmavidyarthapritaparthaya Namah</td>
                <td>The Teacher of Arjuna in Brahma Vidya</td>
              </tr>
              <tr>
                <td>914</td>
                <td>Mahastravid</td>
                <td>Om Mahastravide Namah</td>
                <td>Knower of All Great Weapons</td>
              </tr>
              <tr>
                <td>915</td>
                <td>Prasadaparamodara</td>
                <td>Om Prasadaparamodaraya Namah</td>
                <td>Of Supreme Generosity</td>
              </tr>
              <tr>
                <td>916</td>
                <td>Gangeyasugatiprada</td>
                <td>Om Gangeyasugatipradaya Namah</td>
                <td>Giver of Salvation to Bhishma</td>
              </tr>
              <tr>
                <td>917</td>
                <td>Vipakshapakshakshayakrit</td>
                <td>Om Vipakshapakshakshayakrite Namah</td>
                <td>Destroyer of Enemy Camps</td>
              </tr>
              <tr>
                <td>918</td>
                <td>Parikshitpranarakshana</td>
                <td>Om Parikshitpranarakshanaya Namah</td>
                <td>Protector of Parikshit's Life</td>
              </tr>
              <tr>
                <td>919</td>
                <td>Jagadguru</td>
                <td>Om Jagadgurave Namah</td>
                <td>The Universal Teacher</td>
              </tr>
              <tr>
                <td>920</td>
                <td>Dharmasunorvajimedhapravartaka</td>
                <td>Om Dharmasunorvajimedhapravartakaya Namah</td>
                <td>Promoter of the Ashvamedha of Dharma's Son</td>
              </tr>
              <tr>
                <td>921</td>
                <td>Vihitarthaptasatkara</td>
                <td>Om Vihitarthaptasatkaraya Namah</td>
                <td>Granting Proper Rewards</td>
              </tr>
              <tr>
                <td>922</td>
                <td>Masakatparivartada</td>
                <td>Om Masakatparivartadaya Namah</td>
                <td>Giver of Periodic Progress</td>
              </tr>
              <tr>
                <td>923</td>
                <td>Uttankaharshada</td>
                <td>Om Uttankaharshadaya Namah</td>
                <td>Delighter of Uttanka</td>
              </tr>
              <tr>
                <td>924</td>
                <td>Atmiyadivyarupapradarshaka</td>
                <td>Om Atmiyadivyarupapradarshakaya Namah</td>
                <td>Revealer of His Divine Form to His Devotees</td>
              </tr>
              <tr>
                <td>925</td>
                <td>Janakavagatasvoktabharata</td>
                <td>Om Janakavagatasvoktabharataya Namah</td>
                <td>The One Who Revealed the Essence of the Mahabharata</td>
              </tr>
              <tr>
                <td>926</td>
                <td>Sarvabhavana</td>
                <td>Om Sarvabhavanaya Namah</td>
                <td>The Cause of All Existence</td>
              </tr>
              <tr>
                <td>927</td>
                <td>Asodhayadavodreka</td>
                <td>Om Asodhayadavodrekaya Namah</td>
                <td>Subduer of the Pride of the Yadavas</td>
              </tr>
              <tr>
                <td>928</td>
                <td>Vihitaptadipujana</td>
                <td>Om Vihitaptadipujanaya Namah</td>
                <td>Worshiped by All Offerings</td>
              </tr>
              <tr>
                <td>929</td>
                <td>Samudrasthapitashcharyamusalaya</td>
                <td>Om Samudrasthapitashcharyamusalaya Namah</td>
                <td>Creator of the Extraordinary Mace in the Ocean</td>
              </tr>
              <tr>
                <td>930</td>
                <td>Vrishnivaha</td>
                <td>Om Vrishnivahakaya Namah</td>
                <td>The Leader of the Vrishnis</td>
              </tr>
              <tr>
                <td>931</td>
                <td>Munishapayudha</td>
                <td>Om Munishapayudhaya Namah</td>
                <td>The One Who Pacified the Sages</td>
              </tr>
              <tr>
                <td>932</td>
                <td>Padmasanaditridasharthita</td>
                <td>Om Padmasanaditridasharthitaya Namah</td>
                <td>The One Worshipped by Gods Seated on Lotuses</td>
              </tr>
              <tr>
                <td>933</td>
                <td>Srishtipratyavaharotka</td>
                <td>Om Srishtipratyavaharotkaya Namah</td>
                <td>Originator and Dissolver of Creation</td>
              </tr>
              <tr>
                <td>934</td>
                <td>Svadhamagamanotsuka</td>
                <td>Om Svadhamagamanotsukaya Namah</td>
                <td>Eager to Return to His Abode</td>
              </tr>
              <tr>
                <td>935</td>
                <td>Prabhasalokanodyukta</td>
                <td>Om Prabhasalokanodyuktaya Namah</td>
                <td>Active in the Realm of Prabhasa</td>
              </tr>
              <tr>
                <td>936</td>
                <td>Nanavidhanimittakrita</td>
                <td>Om Nanavidhanimittakrite Namah</td>
                <td>Creator of Various Omens</td>
              </tr>
              <tr>
                <td>937</td>
                <td>Sarvayadavasansevya</td>
                <td>Om Sarvayadavasansevyaya Namah</td>
                <td>Served by All Yadavas</td>
              </tr>
              <tr>
                <td>938</td>
                <td>Sarvotkrishtaparichchhada</td>
                <td>Om Sarvotkrishtaparichchhadaya Namah</td>
                <td>Of the Most Excellent Adornments</td>
              </tr>
              <tr>
                <td>939</td>
                <td>Velakananasancharin</td>
                <td>Om Velakananasancharine Namah</td>
                <td>Mover Along the Shore</td>
              </tr>
              <tr>
                <td>940</td>
                <td>Velanilahritashrama</td>
                <td>Om Velanilahritashramaya Namah</td>
                <td>Relieving the Fatigue of the Shore</td>
              </tr>
              <tr>
                <td>941</td>
                <td>Kalatma</td>
                <td>Om Kalatmane Namah</td>
                <td>The Essence of Time</td>
              </tr>
              <tr>
                <td>942</td>
                <td>Yadava</td>
                <td>Om Yadavaya Namah</td>
                <td>The Yadava Prince</td>
              </tr>
              <tr>
                <td>943</td>
                <td>Ananta</td>
                <td>Om Anantaya Namah</td>
                <td>The Infinite One</td>
              </tr>
              <tr>
                <td>944</td>
                <td>Stutisantushtamanasa</td>
                <td>Om Stutisantushtamanasaya Namah</td>
                <td>Pleased by the Praises Offered</td>
              </tr>
              <tr>
                <td>945</td>
                <td>Dvijalokanasantushta</td>
                <td>Om Dvijalokanasantushtaya Namah</td>
                <td>Pleased by the Sight of the Twice-Born</td>
              </tr>
              <tr>
                <td>946</td>
                <td>Punyatirthamahotsava</td>
                <td>Om Punyatirthamahotsavaya Namah</td>
                <td>Celebrated at Holy Pilgrimage Places</td>
              </tr>
              <tr>
                <td>947</td>
                <td>Satkarahladitasheshabhusura</td>
                <td>Om Satkarahladitasheshabhusuraya Namah</td>
                <td>Pleasing All Holy Beings with Respect</td>
              </tr>
              <tr>
                <td>948</td>
                <td>Suravallabha</td>
                <td>Om Suravallabhaya Namah</td>
                <td>Beloved of the Gods</td>
              </tr>
              <tr>
                <td>949</td>
                <td>Punyatirthapluta</td>
                <td>Om Punyatirthaplutaya Namah</td>
                <td>Immersed in the Holy Pilgrimage</td>
              </tr>
              <tr>
                <td>950</td>
                <td>Punya</td>
                <td>Om Punyaya Namah</td>
                <td>The Embodiment of Virtue</td>
              </tr>
              <tr>
                <td>951</td>
                <td>Punyadaya</td>
                <td>Om Punyadaya Namah</td>
                <td>Giver of Virtue</td>
              </tr>
              <tr>
                <td>952</td>
                <td>Tirthapavanaya</td>
                <td>Om Tirthapavanaya Namah</td>
                <td>Purifier of Pilgrimage Places</td>
              </tr>
              <tr>
                <td>953</td>
                <td>Viprasatkritagokotaye</td>
                <td>Om Viprasatkritagokotaye Namah</td>
                <td>The One Honored by Brahmins and Protector of Cows</td>
              </tr>
              <tr>
                <td>954</td>
                <td>Shatakotisuvarnadaya</td>
                <td>Om Shatakotisuvarnadaya Namah</td>
                <td>Giver of Hundreds of Crores of Gold</td>
              </tr>
              <tr>
                <td>955</td>
                <td>Svamayamohitasheshavrishniviraya</td>
                <td>Om Svamayamohitasheshavrishniviraya Namah</td>
                <td>The One Who Bewildered All the Vrishnis by His Maya</td>
              </tr>
              <tr>
                <td>956</td>
                <td>Visheshavide</td>
                <td>Om Visheshavide Namah</td>
                <td>Knower of All Special Aspects</td>
              </tr>
              <tr>
                <td>957</td>
                <td>Jalajayudhanirdeshtre</td>
                <td>Om Jalajayudhanirdeshtre Namah</td>
                <td>The Wielder of the Lotus Weapon</td>
              </tr>
              <tr>
                <td>958</td>
                <td>Svatmaveshitayadavaya</td>
                <td>Om Svatmaveshitayadavaya Namah</td>
                <td>The Self-Realized Leader of the Yadavas</td>
              </tr>
              <tr>
                <td>959</td>
                <td>Devatabhishtavaradaya</td>
                <td>Om Devatabhishtavaradaya Namah</td>
                <td>The Granter of the Gods' Wishes</td>
              </tr>
              <tr>
                <td>960</td>
                <td>Kritakrityaya</td>
                <td>Om Kritakrityaya Namah</td>
                <td>The One Who Has Achieved All Goals</td>
              </tr>
              <tr>
                <td>961</td>
                <td>Prasannadhiye</td>
                <td>Om Prasannadhiye Namah</td>
                <td>Of Tranquil Mind</td>
              </tr>
              <tr>
                <td>962</td>
                <td>Sthirasheshayutabalaya</td>
                <td>Om Sthirasheshayutabalaya Namah</td>
                <td>The One with Stable and Infinite Strength</td>
              </tr>
              <tr>
                <td>963</td>
                <td>Sahasraphanivikshanaya</td>
                <td>Om Sahasraphanivikshanaya Namah</td>
                <td>The One with a Thousand-Eyed Serpent Adornment</td>
              </tr>
              <tr>
                <td>964</td>
                <td>Brahmavrikshavarachchhayasinaya</td>
                <td>Om Brahmavrikshavarachchhayasinaya Namah</td>
                <td>The One Who Rests in the Shade of the Brahma Tree</td>
              </tr>
              <tr>
                <td>965</td>
                <td>Padmasanasthitaya</td>
                <td>Om Padmasanasthitaya Namah</td>
                <td>The One Seated in a Lotus Posture</td>
              </tr>
              <tr>
                <td>966</td>
                <td>Pratyagatmane</td>
                <td>Om Pratyagatmane Namah</td>
                <td>The Inner Self</td>
              </tr>
              <tr>
                <td>967</td>
                <td>Svabhavarthaya</td>
                <td>Om Svabhavarthaya Namah</td>
                <td>The One Who is the Essence of Nature</td>
              </tr>
              <tr>
                <td>968</td>
                <td>Pranidhanaparayanaya</td>
                <td>Om Pranidhanaparayanaya Namah</td>
                <td>The Devotee of Surrender</td>
              </tr>
              <tr>
                <td>969</td>
                <td>Vyadheshuviddhapujyanghraye</td>
                <td>Om Vyadheshuviddhapujyanghraye Namah</td>
                <td>Worshiped by Hunters and Tribesmen</td>
              </tr>
              <tr>
                <td>970</td>
                <td>Nishadabhayamochanaya</td>
                <td>Om Nishadabhayamochanaya Namah</td>
                <td>Protector of the Nishadas (Tribal People)</td>
              </tr>
              <tr>
                <td>971</td>
                <td>Pulindastutisantushtaya</td>
                <td>Om Pulindastutisantushtaya Namah</td>
                <td>Pleased by the Praise of the Pulindas</td>
              </tr>
              <tr>
                <td>972</td>
                <td>Pulindasugatipradaya</td>
                <td>Om Pulindasugatipradaya Namah</td>
                <td>Giver of Salvation to Pulindas</td>
              </tr>
              <tr>
                <td>973</td>
                <td>Darukarpitaparthadikaraniyoktaye</td>
                <td>Om Darukarpitaparthadikaraniyoktaye Namah</td>
                <td>Commander of Daruka to Serve Arjuna</td>
              </tr>
              <tr>
                <td>974</td>
                <td>Ishitre</td>
                <td>Om Ishitre Namah</td>
                <td>The Supreme Controller</td>
              </tr>
              <tr>
                <td>975</td>
                <td>Divyadundubhisanyuktaya</td>
                <td>Om Divyadundubhisanyuktaya Namah</td>
                <td>Accompanied by Celestial Drums</td>
              </tr>
              <tr>
                <td>976</td>
                <td>Pushpavrishtiprapujitaya</td>
                <td>Om Pushpavrishtiprapujitaya Namah</td>
                <td>Worshiped with Showers of Flowers</td>
              </tr>
              <tr>
                <td>977</td>
                <td>Puranaya</td>
                <td>Om Puranaya Namah</td>
                <td>The Ancient One</td>
              </tr>
              <tr>
                <td>978</td>
                <td>Parameshanaya</td>
                <td>Om Parameshanaya Namah</td>
                <td>The Supreme Lord</td>
              </tr>
              <tr>
                <td>979</td>
                <td>Purnabhumne</td>
                <td>Om Purnabhumne Namah</td>
                <td>The One Who is Complete</td>
              </tr>
              <tr>
                <td>980</td>
                <td>Parishtutaya</td>
                <td>Om Parishtutaya Namah</td>
                <td>Extensively Glorified</td>
              </tr>
              <tr>
                <td>981</td>
                <td>Shukavaganritabdhindave</td>
                <td>Om Shukavaganritabdhindave Namah</td>
                <td>The One Who is the Moon of the Ocean of Truth</td>
              </tr>
              <tr>
                <td>982</td>
                <td>Govindaya</td>
                <td>Om Govindaya Namah</td>
                <td>The Protector of Cows and Earth</td>
              </tr>
              <tr>
                <td>983</td>
                <td>Yoginam Pataye</td>
                <td>Om Yoginam Pataye Namah</td>
                <td>Lord of Yogis</td>
              </tr>
              <tr>
                <td>984</td>
                <td>Vasudevatmajaya</td>
                <td>Om Vasudevatmajaya Namah</td>
                <td>Son of Vasudeva</td>
              </tr>
              <tr>
                <td>985</td>
                <td>Punyaya</td>
                <td>Om Punyaya Namah</td>
                <td>The Virtuous One</td>
              </tr>
              <tr>
                <td>986</td>
                <td>Lilamanushavigrahaya</td>
                <td>Om Lilamanushavigrahaya Namah</td>
                <td>The One with a Playful Human Form</td>
              </tr>
              <tr>
                <td>987</td>
                <td>Jagadgurave</td>
                <td>Om Jagadgurave Namah</td>
                <td>The Universal Teacher</td>
              </tr>
              <tr>
                <td>988</td>
                <td>Jagannathaya</td>
                <td>Om Jagannathaya Namah</td>
                <td>Lord of the Universe</td>
              </tr>
              <tr>
                <td>989</td>
                <td>Gitanritamahodadhaye</td>
                <td>Om Gitanritamahodadhaye Namah</td>
                <td>The Ocean of Truth in the Bhagavad Gita</td>
              </tr>
              <tr>
                <td>990</td>
                <td>Punyashlokaya</td>
                <td>Om Punyashlokaya Namah</td>
                <td>The One of Holy Fame</td>
              </tr>
              <tr>
                <td>991</td>
                <td>Tirthapadaya</td>
                <td>Om Tirthapadaya Namah</td>
                <td>The One Whose Feet Are Sacred</td>
              </tr>
              <tr>
                <td>992</td>
                <td>Vedavedyaya</td>
                <td>Om Vedavedyaya Namah</td>
                <td>The One Who is Known Through the Vedas</td>
              </tr>
              <tr>
                <td>993</td>
                <td>Dayanidhaye</td>
                <td>Om Dayanidhaye Namah</td>
                <td>The Treasure of Compassion</td>
              </tr>
              <tr>
                <td>994</td>
                <td>Narayanaya</td>
                <td>Om Narayanaya Namah</td>
                <td>The Refuge of Mankind</td>
              </tr>
              <tr>
                <td>995</td>
                <td>Yajnamurtaye</td>
                <td>Om Yajnamurtaye Namah</td>
                <td>Embodiment of Sacrifice</td>
              </tr>
              <tr>
                <td>996</td>
                <td>Pannagashanavahanaya</td>
                <td>Om Pannagashanavahanaya Namah</td>
                <td>The One with a Serpent as His Vehicle</td>
              </tr>
              <tr>
                <td>997</td>
                <td>Adyaya Pataye</td>
                <td>Om Adyaya Pataye Namah</td>
                <td>The Primeval Master</td>
              </tr>
              <tr>
                <td>998</td>
                <td>Parasmai Brahmane</td>
                <td>Om Parasmai Brahmane Namah</td>
                <td>The Supreme Absolute Brahman</td>
              </tr>
              <tr>
                <td>999</td>
                <td>Paramatmane</td>
                <td>Om Paramatmane Namah</td>
                <td>The Supreme Soul</td>
              </tr>
              <tr>
                <td>1000</td>
                <td>Paratparaya</td>
                <td>Om Paratparaya Namah</td>
                <td>Greater than the Greatest</td>
              </tr>
            </tbody>
          </table>
        </table>
        <h3>Significance of Lord Krishna 1000 Names</h3>
        <p>
          The Shree Krishna Sahasranamavali, 1000 names of Krishna, has been of
          great significance since ancient times. Years ago, Sage Vyasa
          introduced Shree Krishna Sahasranamam Strotam, whose chanting is said
          to offer peace and mental clarity. Some also believe that it pleases
          Lord Krishna immensely and brings home wealth and happiness.
        </p>
        <p>
          Moreover, since Krishna's names talk of its qualities and the roles
          that he has played in his life, people use 1000 names lord krishna for
          baby boy Naamkaran. Based on the kid’s birth chart, parents consult
          pandits for an auspicious name. Choosing a Krishna name for your
          newborn is yet another way to please Krishna Ji.
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
export default Krishna1000;

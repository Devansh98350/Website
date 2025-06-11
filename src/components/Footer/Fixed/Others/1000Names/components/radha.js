import React, { useEffect,useState } from "react";
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
    question: "What are the benefits of chanting Goddess Radha Shasranamavali?",
    answer:
      "Chanting Rasdha Sahasranamavali benefits people by providing them with wealth and luck in their lives. Along with this, it also also removes struggles and problems in one’s love life.",
  },
  {
    question: "Which direction is ideal to chant 1000 names of Radharani?",
    answer:
      "The ideal direction to chant the 1000 names of Radharani is while facing the East direction.",
  },
  {
    question: "What is the 1000 names of Radha?",
    answer:
      "The 1000 names of Radharani are different names associated with the Goddess. These names all depict different attributes or qualities of the Goddess and are often chanted to seek her blessings.",
  },
  {
    question: "What are some easy Radha rani name for baby girl?",
    answer:
      "Some simple Radharani names for baby girls include Radha, Radhika, Madhvi, Sangeeta and Sanjana.",
  },
  {
    question: "How many name of Radha rani?",
    answer:
      "It is believed that the names associated with Goddess Radha are over 1000 in number..",
  },
  {
    question: "What are Radha 8 sakhi names?",
    answer:
      "The names of Radha and Krishna Ashtasakhis include Lalita, Vishaka, Champaklata, Chitra, Tungavidhya, Induleka, Rangadevi, and Sudevi.",
  },
];

const Radha1000 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  return (
    <Layout title="1000 Name of Goddess Radha - AstroSwarg" description="" keywords="">
<Breadcrumbs/>
    <Container>
      <div className="body">
        <h1 className="heading">1000 Names Of Radharani</h1>
        <h2>Learning About Goddess Radha 1000 Names</h2>
        <h3>About The 1000 Names Of Radharani</h3>
        <p>
          The 1000 names of Radharani are different names that are associated with the Goddess. These names tend to tell about the different qualities of Goddess Radha. Chanting these names is siad to help a person by removing struggles from their life. Continue reading to know more.
        </p>
        <h3>1000 Goddess Radha Name List</h3>
        <p>
          Below are the Radha Rani names. This list is written in alphabetical order for the ease of the readers. Along with the names, we have mentioned their associated meaning and mantra. These different names of Radha rani are as follows:
        </p>
        <Deity1000ButtonGrid/>

        <table>
          <table
            border="1"
            style={{
              width: "100%",
              height: "100%",
            }}>
            <thead>
              <tr>
                <th>No.</th>
                <th>1000 Name of Radha</th>
                <th>Mantra</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
        <tr>
            <td>1</td>
            <td>Abhayaprada</td>
            <td>Om Abhayapradaya Namah</td>
            <td>Giver of fearlessness</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Abhistada</td>
            <td>Om Abhistadaya Namah</td>
            <td>Bestower of desires</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Acyutapriya</td>
            <td>Om Acyutapriyayai Namah</td>
            <td>Beloved of Acyuta (Krishna)</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Aharada</td>
            <td>Om Aharadaya Namah</td>
            <td>Provider of nourishment</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Akasa-rupa</td>
            <td>Om Akasa-rupayai Namah</td>
            <td>Form of the sky</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Alakesvara-pujya</td>
            <td>Om Alakesvara-pujyayai Namah</td>
            <td>Worshipped by Alakesvara</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Amavasya</td>
            <td>Om Amavasyayai Namah</td>
            <td>New moon</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Ambhoda</td>
            <td>Om Ambhodaya Namah</td>
            <td>Cloud-like</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Ambika</td>
            <td>Om Ambikayai Namah</td>
            <td>Divine mother</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Amoha</td>
            <td>Om Amohayai Namah</td>
            <td>Free from delusion</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Anamsa</td>
            <td>Om Anamsayai Namah</td>
            <td>Without parts</td>
        </tr>
        <tr>
            <td>12</td>
            <td>Ananda-yukta</td>
            <td>Om Ananda-yuktayai Namah</td>
            <td>Full of bliss</td>
        </tr>
        <tr>
            <td>13</td>
            <td>Anandaprada</td>
            <td>Om Anandapradayai Namah</td>
            <td>Giver of bliss</td>
        </tr>
        <tr>
            <td>14</td>
            <td>Anandarpita-cetana</td>
            <td>Om Anandarpita-cetanayai Namah</td>
            <td>Offering blissful thoughts</td>
        </tr>
        <tr>
            <td>15</td>
            <td>Ananga-lata</td>
            <td>Om Ananga-latayai Namah</td>
            <td>Creeper of love</td>
        </tr>
        <tr>
            <td>16</td>
            <td>Ananga-mohini</td>
            <td>Om Ananga-mohinyai Namah</td>
            <td>Enchantress of love</td>
        </tr>
        <tr>
            <td>17</td>
            <td>Anda-bahya</td>
            <td>Om Anda-bahyayai Namah</td>
            <td>Beyond the universe</td>
        </tr>
        <tr>
            <td>18</td>
            <td>Anda-madhyastha</td>
            <td>Om Anda-madhyasthayai Namah</td>
            <td>Residing in the cosmic egg</td>
        </tr>
        <tr>
            <td>19</td>
            <td>Anda-paripalini</td>
            <td>Om Anda-paripalinayai Namah</td>
            <td>Protector of the universe</td>
        </tr>
        <tr>
            <td>20</td>
            <td>Anda-rupa</td>
            <td>Om Anda-rupayai Namah</td>
            <td>Form of the universe</td>
        </tr>
        <tr>
            <td>21</td>
            <td>Anda-samhartri</td>
            <td>Om Anda-samhartryai Namah</td>
            <td>Destroyer of the universe</td>
        </tr>
        <tr>
            <td>22</td>
            <td>Andhakara-bhaya-dhvasta</td>
            <td>Om Andhakara-bhaya-dhvastayai Namah</td>
            <td>Dispeller of darkness</td>
        </tr>
        <tr>
            <td>23</td>
            <td>Anga-harini</td>
            <td>Om Anga-harinayai Namah</td>
            <td>Remover of distress</td>
        </tr>
        <tr>
            <td>24</td>
            <td>Angara-purna</td>
            <td>Om Angara-purnayai Namah</td>
            <td>Full of divine radiance</td>
        </tr>
        <tr>
            <td>25</td>
            <td>Animady-asta-siddhi-da</td>
            <td>Om Animady-asta-siddhi-dayai Namah</td>
            <td>Bestower of eight powers</td>
        </tr>
        <tr>
            <td>26</td>
            <td>Anna-purna</td>
            <td>Om Anna-purnayai Namah</td>
            <td>Giver of nourishment</td>
        </tr>
        <tr>
            <td>27</td>
            <td>Anuttama</td>
            <td>Om Anuttamayai Namah</td>
            <td>Incomparable</td>
        </tr>
        <tr>
            <td>28</td>
            <td>Anuttara</td>
            <td>Om Anuttarayai Namah</td>
            <td>Supreme</td>
        </tr>
        <tr>
            <td>29</td>
            <td>Anviksiki</td>
            <td>Om Anviksikyai Namah</td>
            <td>Profound understanding</td>
        </tr>
        <tr>
            <td>30</td>
            <td>Aparajita</td>
            <td>Om Aparajitayai Namah</td>
            <td>Invincible</td>
        </tr>
        <tr>
            <td>31</td>
            <td>Apavrta</td>
            <td>Om Apavrtayai Namah</td>
            <td>Open and accessible</td>
        </tr>
        <tr>
            <td>32</td>
            <td>Apurva</td>
            <td>Om Apurvayai Namah</td>
            <td>Unique</td>
        </tr>
        <tr>
            <td>33</td>
            <td>Apurva-da</td>
            <td>Om Apurva-dayai Namah</td>
            <td>Giver of uniqueness</td>
        </tr>
        <tr>
            <td>34</td>
            <td>Ardha-candra-dhara</td>
            <td>Om Ardha-candra-dharayai Namah</td>
            <td>Wearing a crescent moon</td>
        </tr>
        <tr>
            <td>35</td>
            <td>Ardra-pada-ga</td>
            <td>Om Ardra-pada-gayai Namah</td>
            <td>Soft-footed</td>
        </tr>
        <tr>
            <td>36</td>
            <td>Arjuna-sakhi</td>
            <td>Om Arjuna-sakhyai Namah</td>
            <td>Friend of Arjuna</td>
        </tr>
        <tr>
            <td>37</td>
            <td>Arundhati</td>
            <td>Om Arundhatyai Namah</td>
            <td>Virtuous star</td>
        </tr>
        <tr>
            <td>38</td>
            <td>Asavasakta-vasana</td>
            <td>Om Asavasakta-vasanayai Namah</td>
            <td>Attached to divine nectar</td>
        </tr>
        <tr>
            <td>39</td>
            <td>Asesa-sadhani</td>
            <td>Om Asesa-sadhanayai Namah</td>
            <td>Achiever of infinite tasks</td>
        </tr>
        <tr>
            <td>40</td>
            <td>Asoka</td>
            <td>Om Asokayai Namah</td>
            <td>Free from sorrow</td>
        </tr>
        <tr>
            <td>41</td>
            <td>Atapa-rupa</td>
            <td>Om Atapa-rupayai Namah</td>
            <td>Radiant as the sun</td>
        </tr>
        <tr>
            <td>42</td>
            <td>Ati-sundari</td>
            <td>Om Ati-sundaryai Namah</td>
            <td>Extremely beautiful</td>
        </tr>
        <tr>
            <td>43</td>
            <td>Atita-gamana</td>
            <td>Om Atita-gamanayai Namah</td>
            <td>Transcendent movement</td>
        </tr>
        <tr>
            <td>44</td>
            <td>Atita-guna</td>
            <td>Om Atita-gunayai Namah</td>
            <td>Beyond qualities</td>
        </tr>
        <tr>
            <td>45</td>
            <td>Badhu-rupa</td>
            <td>Om Badhu-rupayai Namah</td>
            <td>Form of a bride</td>
        </tr>
        <tr>
            <td>46</td>
            <td>Bakula</td>
            <td>Om Bakulayai Namah</td>
            <td>Flowering tree</td>
        </tr>
        <tr>
            <td>47</td>
            <td>Bakulamoda</td>
            <td>Om Bakulamodayai Namah</td>
            <td>Fragrance of Bakula flowers</td>
        </tr>
        <tr>
            <td>48</td>
            <td>Balaradhya</td>
            <td>Om Balaradhyayai Namah</td>
            <td>Worshipped by the strong</td>
        </tr>
        <tr>
            <td>49</td>
            <td>Balesvari</td>
            <td>Om Balesvariyai Namah</td>
            <td>Goddess of power</td>
        </tr>
        <tr>
            <td>50</td>
            <td>Bara</td>
            <td>Om Barayai Namah</td>
            <td>Pure and holy</td>
        </tr>
        <tr>
            <td>51</td>
            <td>Bhagesvari</td>
            <td>Om Bhagesvariyai Namah</td>
            <td>Goddess of fortune</td>
        </tr>
        <tr>
            <td>52</td>
            <td>Bhagini</td>
            <td>Om Bhaginyai Namah</td>
            <td>Sister</td>
        </tr>
        <tr>
            <td>53</td>
            <td>Bhaimi</td>
            <td>Om Bhaimiyai Namah</td>
            <td>Beloved of Bhima</td>
        </tr>
        <tr>
            <td>54</td>
            <td>Bhakta</td>
            <td>Om Bhaktayai Namah</td>
            <td>Devotee</td>
        </tr>
        <tr>
            <td>55</td>
            <td>Bhakta-bhukti-subha-prada</td>
            <td>Om Bhakta-bhukti-subha-pradayai Namah</td>
            <td>Giver of joy to devotees</td>
        </tr>
        <tr>
            <td>56</td>
            <td>Bhakta-gati</td>
            <td>Om Bhakta-gatiyai Namah</td>
            <td>Path of the devotee</td>
        </tr>
        <tr>
            <td>57</td>
            <td>Bhakta-kalpa-drumatita</td>
            <td>Om Bhakta-kalpa-drumatitayai Namah</td>
            <td>Beyond the desires of devotees</td>
        </tr>
        <tr>
            <td>58</td>
            <td>Bhakta-phala-prada</td>
            <td>Om Bhakta-phala-pradayai Namah</td>
            <td>Bestower of fruits to devotees</td>
        </tr>
        <tr>
            <td>59</td>
            <td>Bhaktananda-pradayini</td>
            <td>Om Bhaktananda-pradayinyai Namah</td>
            <td>Giver of bliss to devotees</td>
        </tr>
        <tr>
            <td>60</td>
            <td>Bhakti-gamya</td>
            <td>Om Bhakti-gamyayai Namah</td>
            <td>Attainable through devotion</td>
        </tr>
        <tr>
            <td>61</td>
            <td>Bhakti-priya</td>
            <td>Om Bhakti-priyayai Namah</td>
            <td>Beloved of devotion</td>
        </tr>
        <tr>
            <td>62</td>
            <td>Bhaktika</td>
            <td>Om Bhaktikayai Namah</td>
            <td>Associated with devotion</td>
        </tr>
        <tr>
            <td>63</td>
            <td>Bhakty-atita</td>
            <td>Om Bhakty-atitayai Namah</td>
            <td>Beyond devotion</td>
        </tr>
        <tr>
            <td>64</td>
            <td>Bhama</td>
            <td>Om Bhamayai Namah</td>
            <td>Radiant</td>
        </tr>
        <tr>
            <td>65</td>
            <td>Bhandira-talavana-ga</td>
            <td>Om Bhandira-talavana-gayai Namah</td>
            <td>Dweller of Bhandira forest</td>
        </tr>
        <tr>
            <td>66</td>
            <td>Bharati</td>
            <td>Om Bharatiyai Namah</td>
            <td>Goddess of speech</td>
        </tr>
        <tr>
            <td>67</td>
            <td>Bharya</td>
            <td>Om Bharyayai Namah</td>
            <td>Wife</td>
        </tr>
        <tr>
            <td>68</td>
            <td>Bhasati-vegini</td>
            <td>Om Bhasati-veginyai Namah</td>
            <td>Swift-moving</td>
        </tr>
        <tr>
            <td>69</td>
            <td>Bhaumi</td>
            <td>Om Bhaumiyai Namah</td>
            <td>Earthly goddess</td>
        </tr>
        <tr>
            <td>70</td>
            <td>Bhava-bhavini</td>
            <td>Om Bhava-bhavinayai Namah</td>
            <td>Creator of existence</td>
        </tr>
        <tr>
            <td>71</td>
            <td>Bhava-nasanta-kariny</td>
            <td>Om Bhava-nasanta-karinyai Namah</td>
            <td>Destroyer of worldly bonds</td>
        </tr>
        <tr>
            <td>72</td>
            <td>Bhavatiga</td>
            <td>Om Bhavatigayai Namah</td>
            <td>Free from worldly attachments</td>
        </tr>
        <tr>
            <td>73</td>
            <td>Bhavisya</td>
            <td>Om Bhavisyayai Namah</td>
            <td>Future</td>
        </tr>
        <tr>
            <td>74</td>
            <td>Bhavya</td>
            <td>Om Bhavyayai Namah</td>
            <td>Auspicious</td>
        </tr>
        <tr>
            <td>75</td>
            <td>Bhavya-gatra</td>
            <td>Om Bhavya-gatrayai Namah</td>
            <td>Beautifully formed</td>
        </tr>
        <tr>
            <td>76</td>
            <td>Bhayapaha</td>
            <td>Om Bhayapahayai Namah</td>
            <td>Remover of fear</td>
        </tr>
        <tr>
            <td>77</td>
            <td>Bhima-kulodvaha</td>
            <td>Om Bhima-kulodvahayai Namah</td>
            <td>Belonging to Bhima’s family</td>
        </tr>
        <tr>
            <td>78</td>
            <td>Bhogya</td>
            <td>Om Bhogyayai Namah</td>
            <td>Enjoyable</td>
        </tr>
        <tr>
            <td>79</td>
            <td>Bhranti</td>
            <td>Om Bhrantyai Namah</td>
            <td>Illusion</td>
        </tr>
        <tr>
            <td>80</td>
            <td>Bhukti</td>
            <td>Om Bhuktyai Namah</td>
            <td>Material enjoyment</td>
        </tr>
        <tr>
            <td>81</td>
            <td>Bhumi</td>
            <td>Om Bhumyai Namah</td>
            <td>Earth</td>
        </tr>
        <tr>
            <td>82</td>
            <td>Bhuta</td>
            <td>Om Bhutayai Namah</td>
            <td>All beings</td>
        </tr>
        <tr>
            <td>83</td>
            <td>Bhuvana</td>
            <td>Om Bhuvanayai Namah</td>
            <td>World</td>
        </tr>
        <tr>
            <td>84</td>
            <td>Bhuvana-mohini</td>
            <td>Om Bhuvana-mohinyai Namah</td>
            <td>Enchantress of the world</td>
        </tr>
        <tr>
            <td>85</td>
            <td>Bhuvana-sundari</td>
            <td>Om Bhuvana-sundaryai Namah</td>
            <td>Most beautiful in the world</td>
        </tr>
        <tr>
            <td>86</td>
            <td>Bhuvanesvari</td>
            <td>Om Bhuvanesvariyai Namah</td>
            <td>Mistress of the world</td>
        </tr>
        <tr>
            <td>87</td>
            <td>Bilva-vapuh</td>
            <td>Om Bilva-vapuhyai Namah</td>
            <td>Form of the Bilva tree</td>
        </tr>
        <tr>
            <td>88</td>
            <td>Bilva-vrksa-nivasini</td>
            <td>Om Bilva-vrksa-nivasinyai Namah</td>
            <td>Residing in the Bilva tree</td>
        </tr>
        <tr>
            <td>89</td>
            <td>Bilva-vrksa-priya</td>
            <td>Om Bilva-vrksa-priyayai Namah</td>
            <td>Beloved of the Bilva tree</td>
        </tr>
        <tr>
            <td>90</td>
            <td>Bilvatmika</td>
            <td>Om Bilvatmikayai Namah</td>
            <td>Essence of the Bilva tree</td>
        </tr>
        <tr>
            <td>91</td>
            <td>Bilvopama-stani</td>
            <td>Om Bilvopama-stanayai Namah</td>
            <td>Breasts resembling Bilva fruits</td>
        </tr>
        <tr>
            <td>92</td>
            <td>Brahma</td>
            <td>Om Brahmayai Namah</td>
            <td>Creator</td>
        </tr>
        <tr>
            <td>93</td>
            <td>Brahma-patni</td>
            <td>Om Brahma-patnyai Namah</td>
            <td>Consort of Brahma</td>
        </tr>
        <tr>
            <td>94</td>
            <td>Brahma-rupa</td>
            <td>Om Brahma-rupayai Namah</td>
            <td>Form of Brahma</td>
        </tr>
        <tr>
            <td>95</td>
            <td>Brahma-visnu-sivardhanga</td>
            <td>Om Brahma-visnu-sivardhangayai Namah</td>
            <td>United with Brahma, Vishnu, and Shiva</td>
        </tr>
        <tr>
            <td>96</td>
            <td>Brahmaloka-pratisthita</td>
            <td>Om Brahmaloka-pratisthitayai Namah</td>
            <td>Established in the Brahma realm</td>
        </tr>
        <tr>
            <td>97</td>
            <td>Brahmanda-bhanda-madhyastha</td>
            <td>Om Brahmanda-bhanda-madhyasthayai Namah</td>
            <td>Center of the cosmic egg</td>
        </tr>
        <tr>
            <td>98</td>
            <td>Brahmanda-bhanda-rupini</td>
            <td>Om Brahmanda-bhanda-rupinyai Namah</td>
            <td>Form of the cosmic egg</td>
        </tr>
        <tr>
            <td>99</td>
            <td>Brahmanda-gocara</td>
            <td>Om Brahmanda-gocarayai Namah</td>
            <td>Pervading the universe</td>
        </tr>
        <tr>
            <td>100</td>
            <td>Brahmanda-paripalini</td>
            <td>Om Brahmanda-paripalinayai Namah</td>
            <td>Protector of the universe</td>
        </tr>
        <tr>
            <td>101</td>
            <td>Buddhi</td>
            <td>Om Buddhyai Namah</td>
            <td>Intelligence</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Caitanya</td>
            <td>Om Caitanyayai Namah</td>
            <td>Consciousness</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Caitanya-rupa</td>
            <td>Om Caitanya-rupayai Namah</td>
            <td>Embodiment of consciousness</td>
        </tr>
        <tr>
            <td>104</td>
            <td>Caitanya-rupini</td>
            <td>Om Caitanya-rupinyai Namah</td>
            <td>Consciousness personified</td>
        </tr>
        <tr>
            <td>105</td>
            <td>Cancala</td>
            <td>Om Cancalayai Namah</td>
            <td>Fickle</td>
        </tr>
        <tr>
            <td>106</td>
            <td>Cancalamoda</td>
            <td>Om Cancalamodayai Namah</td>
            <td>Fickleness with fragrance</td>
        </tr>
        <tr>
            <td>107</td>
            <td>Candi</td>
            <td>Om Candiyai Namah</td>
            <td>Fierce</td>
        </tr>
        <tr>
            <td>108</td>
            <td>Candra</td>
            <td>Om Candrayai Namah</td>
            <td>Moon-like</td>
        </tr>
        <tr>
            <td>109</td>
            <td>Candra-gatri</td>
            <td>Om Candra-gatrayai Namah</td>
            <td>Having a moon-like body</td>
        </tr>
        <tr>
            <td>110</td>
            <td>Candra-kesi</td>
            <td>Om Candra-kesiyai Namah</td>
            <td>Hair shining like the moon</td>
        </tr>
        <tr>
            <td>111</td>
            <td>Candra-koti-sugatri</td>
            <td>Om Candra-koti-sugatrayai Namah</td>
            <td>Beauty equal to millions of moons</td>
        </tr>
        <tr>
            <td>112</td>
            <td>Candra-prema-tarangini</td>
            <td>Om Candra-prema-taranginyai Namah</td>
            <td>Waves of moon-like love</td>
        </tr>
        <tr>
            <td>113</td>
            <td>Candranana-manohari</td>
            <td>Om Candranana-manoharyai Namah</td>
            <td>Enchanting moon-like face</td>
        </tr>
        <tr>
            <td>114</td>
            <td>Candravali</td>
            <td>Om Candravalayai Namah</td>
            <td>Garland of moons</td>
        </tr>
        <tr>
            <td>115</td>
            <td>Catur-bhuja</td>
            <td>Om Catur-bhujayai Namah</td>
            <td>Four-armed</td>
        </tr>
        <tr>
            <td>116</td>
            <td>Catura</td>
            <td>Om Caturayai Namah</td>
            <td>Clever</td>
        </tr>
        <tr>
            <td>117</td>
            <td>Caturi</td>
            <td>Om Caturiyai Namah</td>
            <td>Extremely clever</td>
        </tr>
        <tr>
            <td>118</td>
            <td>Citra</td>
            <td>Om Citrayai Namah</td>
            <td>Wonderous</td>
        </tr>
        <tr>
            <td>119</td>
            <td>Citra-lekha</td>
            <td>Om Citra-lekhayai Namah</td>
            <td>Artist of wonder</td>
        </tr>
        <tr>
            <td>120</td>
            <td>Citra-malini</td>
            <td>Om Citra-malinayai Namah</td>
            <td>Adorned with wondrous garlands</td>
        </tr>
        <tr>
            <td>121</td>
            <td>Citra-rupini</td>
            <td>Om Citra-rupinyai Namah</td>
            <td>Wondrous form</td>
        </tr>
        <tr>
            <td>122</td>
            <td>Dadhi-bhandarthini</td>
            <td>Om Dadhi-bhandarthinyai Namah</td>
            <td>Lover of curd pots</td>
        </tr>
        <tr>
            <td>123</td>
            <td>Dadimi-kusumopama</td>
            <td>Om Dadimi-kusumopamayai Namah</td>
            <td>Like a pomegranate flower</td>
        </tr>
        <tr>
            <td>124</td>
            <td>Daksa-kanya</td>
            <td>Om Daksa-kanyayai Namah</td>
            <td>Daughter of Daksa</td>
        </tr>
        <tr>
            <td>125</td>
            <td>Daksa-yajna-hara</td>
            <td>Om Daksa-yajna-harayai Namah</td>
            <td>Destroyer of Daksa's sacrifice</td>
        </tr>
        <tr>
            <td>126</td>
            <td>Daksi</td>
            <td>Om Daksiyai Namah</td>
            <td>Belonging to the south</td>
        </tr>
        <tr>
            <td>127</td>
            <td>Dama</td>
            <td>Om Damayai Namah</td>
            <td>Subduer</td>
        </tr>
        <tr>
            <td>128</td>
            <td>Dama-dharini</td>
            <td>Om Dama-dharinyai Namah</td>
            <td>One who holds self-restraint</td>
        </tr>
        <tr>
            <td>129</td>
            <td>Damini</td>
            <td>Om Daminyai Namah</td>
            <td>Lightning</td>
        </tr>
        <tr>
            <td>130</td>
            <td>Damodara-priya</td>
            <td>Om Damodara-priyayai Namah</td>
            <td>Beloved of Damodara</td>
        </tr>
        <tr>
            <td>131</td>
            <td>Danujendra-nivarini</td>
            <td>Om Danujendra-nivarinayai Namah</td>
            <td>Slayer of demon kings</td>
        </tr>
        <tr>
            <td>132</td>
            <td>Daru-haridrika</td>
            <td>Om Daru-haridrikayai Namah</td>
            <td>Yellow as sandalwood</td>
        </tr>
        <tr>
            <td>133</td>
            <td>Daya</td>
            <td>Om Dayayai Namah</td>
            <td>Compassion</td>
        </tr>
        <tr>
            <td>134</td>
            <td>Daya-rupa</td>
            <td>Om Daya-rupayai Namah</td>
            <td>Embodiment of compassion</td>
        </tr>
        <tr>
            <td>135</td>
            <td>Dayadhara</td>
            <td>Om Dayadharayai Namah</td>
            <td>Holder of compassion</td>
        </tr>
        <tr>
            <td>136</td>
            <td>Dayanvita</td>
            <td>Om Dayanvitayai Namah</td>
            <td>Filled with compassion</td>
        </tr>
        <tr>
            <td>137</td>
            <td>Deva-mata</td>
            <td>Om Deva-matayai Namah</td>
            <td>Mother of gods</td>
        </tr>
        <tr>
            <td>138</td>
            <td>Devari-kula-mardini</td>
            <td>Om Devari-kula-mardinyai Namah</td>
            <td>Destroyer of demon clans</td>
        </tr>
        <tr>
            <td>139</td>
            <td>Devi</td>
            <td>Om Devyai Namah</td>
            <td>Goddess</td>
        </tr>
        <tr>
            <td>140</td>
            <td>Dhairya-rupa-dhara</td>
            <td>Om Dhairya-rupa-dharayai Namah</td>
            <td>Embodiment of patience</td>
        </tr>
        <tr>
            <td>141</td>
            <td>Dhama-rupiny</td>
            <td>Om Dhama-rupinyai Namah</td>
            <td>Embodiment of energy</td>
        </tr>
        <tr>
            <td>142</td>
            <td>Dhana-dhanya-vidhatri</td>
            <td>Om Dhana-dhanya-vidhatryai Namah</td>
            <td>Giver of wealth and grains</td>
        </tr>
        <tr>
            <td>143</td>
            <td>Dhanya</td>
            <td>Om Dhanyayai Namah</td>
            <td>Blessed</td>
        </tr>
        <tr>
            <td>144</td>
            <td>Dharini</td>
            <td>Om Dharinyai Namah</td>
            <td>Holder</td>
        </tr>
        <tr>
            <td>145</td>
            <td>Dhatranandapradayini</td>
            <td>Om Dhatranandapradainyai Namah</td>
            <td>Giver of joy to nurturers</td>
        </tr>
        <tr>
            <td>146</td>
            <td>Dhatri</td>
            <td>Om Dhatryai Namah</td>
            <td>Creator</td>
        </tr>
        <tr>
            <td>147</td>
            <td>Dhira</td>
            <td>Om Dhirayai Namah</td>
            <td>Brave</td>
        </tr>
        <tr>
            <td>148</td>
            <td>Dhrti</td>
            <td>Om Dhrtyai Namah</td>
            <td>Patience</td>
        </tr>
        <tr>
            <td>149</td>
            <td>Dhumra</td>
            <td>Om Dhumrayai Namah</td>
            <td>Smoky</td>
        </tr>
        <tr>
            <td>150</td>
            <td>Dhumra-kesa</td>
            <td>Om Dhumra-kesayai Namah</td>
            <td>Smoky-haired</td>
        </tr>
        <tr>
            <td>151</td>
            <td>Dina</td>
            <td>Om Dinayai Namah</td>
            <td>Poor</td>
        </tr>
        <tr>
            <td>152</td>
            <td>Dipa-datri</td>
            <td>Om Dipa-datrayai Namah</td>
            <td>Giver of light</td>
        </tr>
        <tr>
            <td>153</td>
            <td>Dipa-priya</td>
            <td>Om Dipa-priyayai Namah</td>
            <td>Lover of light</td>
        </tr>
        <tr>
            <td>154</td>
            <td>Draupadi</td>
            <td>Om Draupadiyai Namah</td>
            <td>Daughter of Drupada</td>
        </tr>
        <tr>
            <td>155</td>
            <td>Drk-pata-mohita</td>
            <td>Om Drk-pata-mohitayai Namah</td>
            <td>Enchanting with a glance</td>
        </tr>
        <tr>
            <td>156</td>
            <td>Dugdha-manthana-karmadhya</td>
            <td>Om Dugdha-manthana-karmadhyayai Namah</td>
            <td>Enthralled in churning milk</td>
        </tr>
        <tr>
            <td>157</td>
            <td>Dugdha-manthana-tat-para</td>
            <td>Om Dugdha-manthana-tat-parayai Namah</td>
            <td>Engrossed in milk-churning</td>
        </tr>
        <tr>
            <td>158</td>
            <td>Duhkha-hantri</td>
            <td>Om Duhkha-hantryai Namah</td>
            <td>Remover of sorrow</td>
        </tr>
        <tr>
            <td>159</td>
            <td>Duhkha-hara</td>
            <td>Om Duhkha-harayai Namah</td>
            <td>Reliever of sorrow</td>
        </tr>
        <tr>
            <td>160</td>
            <td>Duhkha-kartri</td>
            <td>Om Duhkha-kartryai Namah</td>
            <td>Creator of sorrow</td>
        </tr>
        <tr>
            <td>161</td>
            <td>Durba-dala-tanu-ccbavih</td>
            <td>Om Durba-dala-tanu-ccbavihyai Namah</td>
            <td>Graceful as tender Durba grass</td>
        </tr>
        <tr>
            <td>162</td>
            <td>Durga</td>
            <td>Om Durgayai Namah</td>
            <td>Invincible</td>
        </tr>
        <tr>
            <td>163</td>
            <td>Durgati-nasini</td>
            <td>Om Durgati-nasinyai Namah</td>
            <td>Destroyer of misfortunes</td>
        </tr>
        <tr>
            <td>164</td>
            <td>Durva-dala-syama-tanuh</td>
            <td>Om Durva-dala-syama-tanuhyai Namah</td>
            <td>Graceful as Durva grass</td>
        </tr>
        <tr>
            <td>165</td>
            <td>Dvaraka-vasini</td>
            <td>Om Dvaraka-vasinyai Namah</td>
            <td>Residing in Dvaraka</td>
        </tr>
        <tr>
            <td>166</td>
            <td>Dvi-bhuja</td>
            <td>Om Dvi-bhujayai Namah</td>
            <td>Two-armed</td>
        </tr>
        <tr>
            <td>167</td>
            <td>Eka</td>
            <td>Om Ekayai Namah</td>
            <td>One</td>
        </tr>
        <tr>
            <td>168</td>
            <td>Ekanga</td>
            <td>Om Ekangayai Namah</td>
            <td>Part of the whole</td>
        </tr>
        <tr>
            <td>169</td>
            <td>Ela-lavanga-karpura</td>
            <td>Om Ela-lavanga-karpurayai Namah</td>
            <td>Fragrant as cardamom and camphor</td>
        </tr>
        <tr>
            <td>170</td>
            <td>Gagana</td>
            <td>Om Gaganayai Namah</td>
            <td>Sky</td>
        </tr>
        <tr>
            <td>171</td>
            <td>Gaganesi</td>
            <td>Om Gaganesiyai Namah</td>
            <td>Mistress of the sky</td>
        </tr>
        <tr>
            <td>172</td>
            <td>Gaja-mukta</td>
            <td>Om Gaja-muktayai Namah</td>
            <td>Elephant pearl</td>
        </tr>
        <tr>
            <td>173</td>
            <td>Gajendra-gamini</td>
            <td>Om Gajendra-gaminyai Namah</td>
            <td>Elephant-like graceful gait</td>
        </tr>
        <tr>
            <td>174</td>
            <td>Gaji</td>
            <td>Om Gajiyai Namah</td>
            <td>Like an elephant</td>
        </tr>
        <tr>
            <td>175</td>
            <td>Gamanagamana-priya</td>
            <td>Om Gamanagamana-priyayai Namah</td>
            <td>Lover of movement</td>
        </tr>
        <tr>
            <td>176</td>
            <td>Gamanatita-nirbhara</td>
            <td>Om Gamanatita-nirbharayai Namah</td>
            <td>Beyond movement</td>
        </tr>
        <tr>
            <td>177</td>
            <td>Gamya</td>
            <td>Om Gamyayai Namah</td>
            <td>Attainable</td>
        </tr>
        <tr>
            <td>178</td>
            <td>Gana-mata</td>
            <td>Om Gana-matayai Namah</td>
            <td>Mother of celestial beings</td>
        </tr>
        <tr>
            <td>179</td>
            <td>Gana-tosita</td>
            <td>Om Gana-tositayai Namah</td>
            <td>Satisfied by celestial beings</td>
        </tr>
        <tr>
            <td>180</td>
            <td>Ganadhyaksa</td>
            <td>Om Ganadhyaksayai Namah</td>
            <td>Chief of celestial beings</td>
        </tr>
        <tr>
            <td>181</td>
            <td>Ganga</td>
            <td>Om Gangayai Namah</td>
            <td>Sacred river</td>
        </tr>
        <tr>
            <td>182</td>
            <td>Ganga-jalamayi</td>
            <td>Om Ganga-jalamayai Namah</td>
            <td>Full of Ganga’s water</td>
        </tr>
        <tr>
            <td>183</td>
            <td>Gangerita</td>
            <td>Om Gangeritayai Namah</td>
            <td>Praised by the Ganges</td>
        </tr>
        <tr>
            <td>184</td>
            <td>Gati</td>
            <td>Om Gatayai Namah</td>
            <td>Movement or speed</td>
        </tr>
        <tr>
            <td>185</td>
            <td>Gati-jna</td>
            <td>Om Gati-jnayai Namah</td>
            <td>Knower of movement</td>
        </tr>
        <tr>
            <td>186</td>
            <td>Gati-nistha</td>
            <td>Om Gati-nisthayai Namah</td>
            <td>Rooted in motion</td>
        </tr>
        <tr>
            <td>187</td>
            <td>Gati-prada</td>
            <td>Om Gati-pradayai Namah</td>
            <td>Giver of motion</td>
        </tr>
        <tr>
            <td>188</td>
            <td>Gatimatam-dhatri</td>
            <td>Om Gatimatam-dhatryai Namah</td>
            <td>Holder of the moving ones</td>
        </tr>
        <tr>
            <td>189</td>
            <td>Gaunya</td>
            <td>Om Gaunyayai Namah</td>
            <td>Virtuous</td>
        </tr>
        <tr>
            <td>190</td>
            <td>Gaura-candranana</td>
            <td>Om Gaura-candrananayai Namah</td>
            <td>Moon-faced Gaura</td>
        </tr>
        <tr>
            <td>191</td>
            <td>Gaura-vigraha</td>
            <td>Om Gaura-vigrahayai Namah</td>
            <td>Golden form</td>
        </tr>
        <tr>
            <td>192</td>
            <td>Gaurangi</td>
            <td>Om Gaurangyai Namah</td>
            <td>Fair-complexioned</td>
        </tr>
        <tr>
            <td>193</td>
            <td>Gauri</td>
            <td>Om Gauryai Namah</td>
            <td>Radiant</td>
        </tr>
        <tr>
            <td>194</td>
            <td>Gavadhyaksa</td>
            <td>Om Gavadhyaksayai Namah</td>
            <td>Protector of cows</td>
        </tr>
        <tr>
            <td>195</td>
            <td>Gavam</td>
            <td>Om Gavamayai Namah</td>
            <td>Of cows</td>
        </tr>
        <tr>
            <td>196</td>
            <td>Gavesi</td>
            <td>Om Gavesiyai Namah</td>
            <td>Seeker</td>
        </tr>
        <tr>
            <td>197</td>
            <td>Gavesvari</td>
            <td>Om Gavesvariyai Namah</td>
            <td>Mistress of seekers</td>
        </tr>
        <tr>
            <td>198</td>
            <td>Gavi-vasini</td>
            <td>Om Gavi-vasinyai Namah</td>
            <td>Residing among cows</td>
        </tr>
        <tr>
            <td>199</td>
            <td>Gavisi</td>
            <td>Om Gavisyai Namah</td>
            <td>Attached to cows</td>
        </tr>
        <tr>
            <td>200</td>
            <td>Gaya</td>
            <td>Om Gayayai Namah</td>
            <td>Sacred pilgrimage site</td>
        </tr>
        <tr>
            <td>201</td>
            <td>Gayatri</td>
            <td>Om Gayatriyai Namah</td>
            <td>Sacred chant</td>
        </tr>
        <tr>
            <td>202</td>
            <td>Gayesvari</td>
            <td>Om Gayesvariyai Namah</td>
            <td>Mistress of Gayatri</td>
        </tr>
        <tr>
            <td>203</td>
            <td>Gayottara</td>
            <td>Om Gayottarayai Namah</td>
            <td>Supreme among chants</td>
        </tr>
        <tr>
            <td>204</td>
            <td>Geha-bhavana-bhavana</td>
            <td>Om Geha-bhavana-bhavanayai Namah</td>
            <td>Fulfiller of desires</td>
        </tr>
        <tr>
            <td>205</td>
            <td>Ghati</td>
            <td>Om Ghatyai Namah</td>
            <td>Bell-like</td>
        </tr>
        <tr>
            <td>206</td>
            <td>Ghrta-lipta</td>
            <td>Om Ghrta-liptayai Namah</td>
            <td>Anointed with ghee</td>
        </tr>
        <tr>
            <td>207</td>
            <td>Girbana</td>
            <td>Om Girbanayai Namah</td>
            <td>Praise</td>
        </tr>
        <tr>
            <td>208</td>
            <td>Girbana-gana-sevita</td>
            <td>Om Girbana-gana-sevitayai Namah</td>
            <td>Served by celestial beings</td>
        </tr>
        <tr>
            <td>209</td>
            <td>Girbana-vandya</td>
            <td>Om Girbana-vandyayai Namah</td>
            <td>Praised by celestial beings</td>
        </tr>
        <tr>
            <td>210</td>
            <td>Girija</td>
            <td>Om Girijayai Namah</td>
            <td>Daughter of the mountains</td>
        </tr>
        <tr>
            <td>211</td>
            <td>Gita</td>
            <td>Om Gitayai Namah</td>
            <td>Song</td>
        </tr>
        <tr>
            <td>212</td>
            <td>Gita-gamya</td>
            <td>Om Gita-gamyayai Namah</td>
            <td>Accessible through song</td>
        </tr>
        <tr>
            <td>213</td>
            <td>Gita-kusala</td>
            <td>Om Gita-kusalayai Namah</td>
            <td>Proficient in songs</td>
        </tr>
        <tr>
            <td>214</td>
            <td>Gokarna</td>
            <td>Om Gokarnayai Namah</td>
            <td>Sacred place</td>
        </tr>
        <tr>
            <td>215</td>
            <td>Gokulananda-dayini</td>
            <td>Om Gokulananda-dayinyai Namah</td>
            <td>Bestower of joy in Gokula</td>
        </tr>
        <tr>
            <td>216</td>
            <td>Gokulananda-kartri</td>
            <td>Om Gokulananda-kartryai Namah</td>
            <td>Creator of joy in Gokula</td>
        </tr>
        <tr>
            <td>217</td>
            <td>Gokulantara-geha</td>
            <td>Om Gokulantara-gehayai Namah</td>
            <td>Residing in Gokula’s core</td>
        </tr>
        <tr>
            <td>218</td>
            <td>Gokulanvita-deha</td>
            <td>Om Gokulanvita-dehayai Namah</td>
            <td>Embodied in Gokula</td>
        </tr>
        <tr>
            <td>219</td>
            <td>Gokulatva-pradayini</td>
            <td>Om Gokulatva-pradayinyai Namah</td>
            <td>Bestower of Gokula's essence</td>
        </tr>
        <tr>
            <td>220</td>
            <td>Gopa</td>
            <td>Om Gopayai Namah</td>
            <td>Cowherd</td>
        </tr>
        <tr>
            <td>221</td>
            <td>Gopa-mata</td>
            <td>Om Gopa-matayai Namah</td>
            <td>Mother of cowherds</td>
        </tr>
        <tr>
            <td>222</td>
            <td>Gopa-nandinim</td>
            <td>Om Gopa-nandinyai Namah</td>
            <td>Delight of cowherds</td>
        </tr>
        <tr>
            <td>223</td>
            <td>Gopa-patni</td>
            <td>Om Gopa-patnyai Namah</td>
            <td>Wife of a cowherd</td>
        </tr>
        <tr>
            <td>224</td>
            <td>Gopa-rajya-prada</td>
            <td>Om Gopa-rajya-pradayai Namah</td>
            <td>Bestower of cowherds' kingdom</td>
        </tr>
        <tr>
            <td>225</td>
            <td>Gopa-sundari</td>
            <td>Om Gopa-sundaryai Namah</td>
            <td>Beautiful among cowherds</td>
        </tr>
        <tr>
            <td>226</td>
            <td>Gopa-vanita</td>
            <td>Om Gopa-vanitayai Namah</td>
            <td>Lady among cowherds</td>
        </tr>
        <tr>
            <td>227</td>
            <td>Gopala-palika</td>
            <td>Om Gopala-palikayai Namah</td>
            <td>Protector of Gopala</td>
        </tr>
        <tr>
            <td>228</td>
            <td>Gopala-vanita</td>
            <td>Om Gopala-vanitayai Namah</td>
            <td>Gopala’s beloved</td>
        </tr>
        <tr>
            <td>229</td>
            <td>Gopalasya</td>
            <td>Om Gopalasyai Namah</td>
            <td>Of Gopala</td>
        </tr>
        <tr>
            <td>230</td>
            <td>Gopananda-kari</td>
            <td>Om Gopananda-karinyai Namah</td>
            <td>Creator of Gopala’s joy</td>
        </tr>
        <tr>
            <td>231</td>
            <td>Gopanganavestita</td>
            <td>Om Gopanganavestitayai Namah</td>
            <td>Surrounded by Gopis</td>
        </tr>
        <tr>
            <td>232</td>
            <td>Gopaniya</td>
            <td>Om Gopaniyayai Namah</td>
            <td>Secret</td>
        </tr>
        <tr>
            <td>233</td>
            <td>Gopi</td>
            <td>Om Gopiyai Namah</td>
            <td>Cowherd girl</td>
        </tr>
        <tr>
            <td>234</td>
            <td>Gopinatha-manohara</td>
            <td>Om Gopinatha-manoharayai Namah</td>
            <td>Enchanter of Gopinath</td>
        </tr>
        <tr>
            <td>235</td>
            <td>Gopinathesvari</td>
            <td>Om Gopinathesvariyai Namah</td>
            <td>Mistress of Gopinath</td>
        </tr>
        <tr>
            <td>236</td>
            <td>Govardhana-hasya</td>
            <td>Om Govardhana-hasyayai Namah</td>
            <td>Smiling at Govardhana</td>
        </tr>
        <tr>
            <td>237</td>
            <td>Govardhanesvari</td>
            <td>Om Govardhanesvariyai Namah</td>
            <td>Mistress of Govardhana</td>
        </tr>
        <tr>
            <td>238</td>
            <td>Govinda-gana-pujita</td>
            <td>Om Govinda-gana-pujitayai Namah</td>
            <td>Worshipped by Govinda's associates</td>
        </tr>
        <tr>
            <td>239</td>
            <td>Govinda-priya-karini</td>
            <td>Om Govinda-priya-karinyai Namah</td>
            <td>Maker of Govinda’s love</td>
        </tr>
        <tr>
            <td>240</td>
            <td>Govinda-raja-grhini</td>
            <td>Om Govinda-raja-grhinyai Namah</td>
            <td>Queen of Govinda</td>
        </tr>
        <tr>
            <td>241</td>
            <td>Gramya</td>
            <td>Om Gramyayai Namah</td>
            <td>Simple and rustic</td>
        </tr>
        <tr>
            <td>242</td>
            <td>Guna</td>
            <td>Om Gunayai Namah</td>
            <td>Qualities</td>
        </tr>
        <tr>
            <td>243</td>
            <td>Gunatita-phala-prada</td>
            <td>Om Gunatita-phala-pradayai Namah</td>
            <td>Bestower of fruits beyond qualities</td>
        </tr>
        <tr>
            <td>244</td>
            <td>Hai-hai-tala-dhara</td>
            <td>Om Hai-hai-tala-dharayai Namah</td>
            <td>Bearer of celestial beats</td>
        </tr>
        <tr>
            <td>245</td>
            <td>Haimavati</td>
            <td>Om Haimavatayai Namah</td>
            <td>Golden</td>
        </tr>
        <tr>
            <td>246</td>
            <td>Haimi</td>
            <td>Om Haimiyai Namah</td>
            <td>Resplendent</td>
        </tr>
        <tr>
            <td>247</td>
            <td>Hara</td>
            <td>Om Harayai Namah</td>
            <td>Remover</td>
        </tr>
        <tr>
            <td>248</td>
            <td>Hara-kanta</td>
            <td>Om Hara-kantayai Namah</td>
            <td>Beloved of Shiva</td>
        </tr>
        <tr>
            <td>249</td>
            <td>Hara-patni</td>
            <td>Om Hara-patnyai Namah</td>
            <td>Consort of Shiva</td>
        </tr>
        <tr>
            <td>250</td>
            <td>Hara-prana</td>
            <td>Om Hara-pranayai Namah</td>
            <td>Life-force of Shiva</td>
        </tr>
        <tr>
            <td>251</td>
            <td>Hara-prita</td>
            <td>Om Hara-pritayai Namah</td>
            <td>Dear to Shiva</td>
        </tr>
        <tr>
            <td>252</td>
            <td>Hara-rata</td>
            <td>Om Hara-ratayai Namah</td>
            <td>Engaged in Shiva’s love</td>
        </tr>
        <tr>
            <td>253</td>
            <td>Hara-tosana-tatpara</td>
            <td>Om Hara-tosana-tatparayai Namah</td>
            <td>Pleased by Shiva</td>
        </tr>
        <tr>
            <td>254</td>
            <td>Harananda-pradayini</td>
            <td>Om Harananda-pradayinyai Namah</td>
            <td>Giver of Shiva’s bliss</td>
        </tr>
        <tr>
            <td>255</td>
            <td>Harer jaya</td>
            <td>Om Harer-jayayai Namah</td>
            <td>Glories of Hari</td>
        </tr>
        <tr>
            <td>256</td>
            <td>Hares tanuh</td>
            <td>Om Hares-tanuhyai Namah</td>
            <td>Body of Hari</td>
        </tr>
        <tr>
            <td>257</td>
            <td>Haresvari</td>
            <td>Om Haresvariyai Namah</td>
            <td>Mistress of Hari</td>
        </tr>
        <tr>
            <td>258</td>
            <td>Hari-bhakti-pradayini</td>
            <td>Om Hari-bhakti-pradayinyai Namah</td>
            <td>Bestower of devotion to Hari</td>
        </tr>
        <tr>
            <td>259</td>
            <td>Hari-bhavana-sila</td>
            <td>Om Hari-bhavana-silayai Namah</td>
            <td>Engrossed in Hari's thoughts</td>
        </tr>
        <tr>
            <td>260</td>
            <td>Hari-bhusana-bhusadhya</td>
            <td>Om Hari-bhusana-bhusadhyayai Namah</td>
            <td>Ornament of Hari</td>
        </tr>
        <tr>
            <td>261</td>
            <td>Hari-dvara</td>
            <td>Om Hari-dvarayai Namah</td>
            <td>Gateway to Hari</td>
        </tr>
        <tr>
            <td>262</td>
            <td>Hari-kanta</td>
            <td>Om Hari-kantayai Namah</td>
            <td>Beloved of Hari</td>
        </tr>
        <tr>
            <td>263</td>
            <td>Hari-kautuka-mangala</td>
            <td>Om Hari-kautuka-mangalayai Namah</td>
            <td>Auspicious joy of Hari</td>
        </tr>
        <tr>
            <td>264</td>
            <td>Hari-prada</td>
            <td>Om Hari-pradayai Namah</td>
            <td>Giver of Hari</td>
        </tr>
        <tr>
            <td>265</td>
            <td>Hari-prana</td>
            <td>Om Hari-pranayai Namah</td>
            <td>Life force of Hari</td>
        </tr>
        <tr>
            <td>266</td>
            <td>Hari-priya</td>
            <td>Om Hari-priyayai Namah</td>
            <td>Beloved of Hari</td>
        </tr>
        <tr>
            <td>267</td>
            <td>Hari-sannidhya-datri</td>
            <td>Om Hari-sannidhya-datrayai Namah</td>
            <td>Giver of Hari’s presence</td>
        </tr>
        <tr>
            <td>268</td>
            <td>Hari-tosana-tat-para</td>
            <td>Om Hari-tosana-tat-parayai Namah</td>
            <td>Engaged in pleasing Hari</td>
        </tr>
        <tr>
            <td>269</td>
            <td>Hari-vallabha</td>
            <td>Om Hari-vallabhayai Namah</td>
            <td>Dearest to Hari</td>
        </tr>
        <tr>
            <td>270</td>
            <td>Harid-ambara-dharini</td>
            <td>Om Harid-ambara-dharinyai Namah</td>
            <td>Wearing golden garments</td>
        </tr>
        <tr>
            <td>271</td>
            <td>Haridra</td>
            <td>Om Haridrayai Namah</td>
            <td>Yellow-colored</td>
        </tr>
        <tr>
            <td>272</td>
            <td>Harini</td>
            <td>Om Harinyai Namah</td>
            <td>Deer-like</td>
        </tr>
        <tr>
            <td>273</td>
            <td>Hariny</td>
            <td>Om Harinyai Namah</td>
            <td>Graceful like a deer</td>
        </tr>
        <tr>
            <td>274</td>
            <td>Harita</td>
            <td>Om Haritayai Namah</td>
            <td>Green-colored</td>
        </tr>
        <tr>
            <td>275</td>
            <td>Hasya-bhasana-tat-para</td>
            <td>Om Hasya-bhasana-tat-parayai Namah</td>
            <td>Fond of laughing and speaking</td>
        </tr>
        <tr>
            <td>276</td>
            <td>Hava-bhavanvita</td>
            <td>Om Hava-bhavanvitayai Namah</td>
            <td>Possessing divine emotions</td>
        </tr>
        <tr>
            <td>277</td>
            <td>Haya</td>
            <td>Om Hayayai Namah</td>
            <td>Horse-like</td>
        </tr>
        <tr>
            <td>278</td>
            <td>Hayakrtih</td>
            <td>Om Hayakrtyai Namah</td>
            <td>Horse-formed</td>
        </tr>
        <tr>
            <td>279</td>
            <td>Hayasya</td>
            <td>Om Hayasyayai Namah</td>
            <td>Joyful like a horse</td>
        </tr>
        <tr>
            <td>280</td>
            <td>Hayi</td>
            <td>Om Hayiyai Namah</td>
            <td>With a horse-like energy</td>
        </tr>
        <tr>
            <td>281</td>
            <td>He-he-sabda-svarupa</td>
            <td>Om He-he-sabda-svarupayai Namah</td>
            <td>Embodiment of sound</td>
        </tr>
        <tr>
            <td>282</td>
            <td>Hela</td>
            <td>Om Helayai Namah</td>
            <td>Playfulness</td>
        </tr>
        <tr>
            <td>283</td>
            <td>Hema</td>
            <td>Om Hemayai Namah</td>
            <td>Gold-like</td>
        </tr>
        <tr>
            <td>284</td>
            <td>Hema-gatri</td>
            <td>Om Hema-gatrayai Namah</td>
            <td>Golden-bodied</td>
        </tr>
        <tr>
            <td>285</td>
            <td>Hema-mandana</td>
            <td>Om Hema-mandanayai Namah</td>
            <td>Adorned with gold</td>
        </tr>
        <tr>
            <td>286</td>
            <td>Hema-mukhi</td>
            <td>Om Hema-mukhiyai Namah</td>
            <td>Golden-faced</td>
        </tr>
        <tr>
            <td>287</td>
            <td>Hema-ragadbya</td>
            <td>Om Hema-ragadbyayai Namah</td>
            <td>Golden-hued</td>
        </tr>
        <tr>
            <td>288</td>
            <td>Hema-sundari</td>
            <td>Om Hema-sundaryai Namah</td>
            <td>Beautiful like gold</td>
        </tr>
        <tr>
            <td>289</td>
            <td>Heramba-suta</td>
            <td>Om Heramba-sutayai Namah</td>
            <td>Daughter of Heramba</td>
        </tr>
        <tr>
            <td>290</td>
            <td>Hetu-yukta</td>
            <td>Om Hetu-yuktayai Namah</td>
            <td>Purposeful</td>
        </tr>
        <tr>
            <td>291</td>
            <td>Hi-hi-vakya-visarada</td>
            <td>Om Hi-hi-vakya-visaradayai Namah</td>
            <td>Expert in sound expressions</td>
        </tr>
        <tr>
            <td>292</td>
            <td>Himalaya-suta</td>
            <td>Om Himalaya-sutayai Namah</td>
            <td>Daughter of the Himalayas</td>
        </tr>
        <tr>
            <td>293</td>
            <td>Hiranya-da</td>
            <td>Om Hiranya-dayai Namah</td>
            <td>Giver of gold</td>
        </tr>
        <tr>
            <td>294</td>
            <td>Hrdya</td>
            <td>Om Hrdyayai Namah</td>
            <td>Pleasing</td>
        </tr>
        <tr>
            <td>295</td>
            <td>Indranila-mani-nyasta</td>
            <td>Om Indranila-mani-nyastayai Namah</td>
            <td>Embedded with blue sapphire</td>
        </tr>
        <tr>
            <td>296</td>
            <td>Isvari</td>
            <td>Om Isvariyai Namah</td>
            <td>Mistress</td>
        </tr>
        <tr>
            <td>297</td>
            <td>Jagad-ambika</td>
            <td>Om Jagad-ambikayai Namah</td>
            <td>Universal mother</td>
        </tr>
        <tr>
            <td>298</td>
            <td>Jagad-ananda-kartri</td>
            <td>Om Jagad-ananda-kartryai Namah</td>
            <td>Creator of universal bliss</td>
        </tr>
        <tr>
            <td>299</td>
            <td>Jagad-anvaya</td>
            <td>Om Jagad-anvayayai Namah</td>
            <td>Connected to the universe</td>
        </tr>
        <tr>
            <td>300</td>
            <td>Jagad-bija</td>
            <td>Om Jagad-bijayai Namah</td>
            <td>Seed of the universe</td>
        </tr>
        <tr>
            <td>301</td>
            <td>Jagad-utpatti-karika</td>
            <td>Om Jagad-utpatti-karikayai Namah</td>
            <td>Creator of the universe</td>
        </tr>
        <tr>
            <td>302</td>
            <td>Jagad-yoni</td>
            <td>Om Jagad-yoniyai Namah</td>
            <td>Source of the universe</td>
        </tr>
        <tr>
            <td>303</td>
            <td>Jagannatha</td>
            <td>Om Jagannathayai Namah</td>
            <td>Mistress of the universe</td>
        </tr>
        <tr>
            <td>304</td>
            <td>Jagannatha-priya</td>
            <td>Om Jagannatha-priyayai Namah</td>
            <td>Beloved of Jagannatha</td>
        </tr>
        <tr>
            <td>305</td>
            <td>Jagannathesvari</td>
            <td>Om Jagannathesvariyai Namah</td>
            <td>Mistress of Jagannatha</td>
        </tr>
        <tr>
            <td>306</td>
            <td>Jagatam-adhisthatri</td>
            <td>Om Jagatam-adhisthatryai Namah</td>
            <td>Ruler of all beings</td>
        </tr>
        <tr>
            <td>307</td>
            <td>Jahnu-kanyka</td>
            <td>Om Jahnu-kanykayai Namah</td>
            <td>Daughter of Jahnu</td>
        </tr>
        <tr>
            <td>308</td>
            <td>Jaimuti</td>
            <td>Om Jaimutiyai Namah</td>
            <td>Celestial</td>
        </tr>
        <tr>
            <td>309</td>
            <td>Jaitra-prada</td>
            <td>Om Jaitra-pradayai Namah</td>
            <td>Giver of victory</td>
        </tr>
        <tr>
            <td>310</td>
            <td>Jala-saya</td>
            <td>Om Jala-sayayai Namah</td>
            <td>Residing in water</td>
        </tr>
        <tr>
            <td>311</td>
            <td>Jala-tala</td>
            <td>Om Jala-talayai Namah</td>
            <td>Surface of water</td>
        </tr>
        <tr>
            <td>312</td>
            <td>Jalodari</td>
            <td>Om Jalodariyai Namah</td>
            <td>Water-bellied</td>
        </tr>
        <tr>
            <td>313</td>
            <td>Jamatr-kula-vandita</td>
            <td>Om Jamatr-kula-vanditayai Namah</td>
            <td>Worshipped by son-in-law's family</td>
        </tr>
        <tr>
            <td>314</td>
            <td>Jambala-malika</td>
            <td>Om Jambala-malikayai Namah</td>
            <td>Garland of Jambala flowers</td>
        </tr>
        <tr>
            <td>315</td>
            <td>Jambavati</td>
            <td>Om Jambavatyyai Namah</td>
            <td>Wife of Jambavan</td>
        </tr>
        <tr>
            <td>316</td>
            <td>Janakananda-karini</td>
            <td>Om Janakananda-karinyai Namah</td>
            <td>Creator of Janaka’s joy</td>
        </tr>
        <tr>
            <td>317</td>
            <td>Janaki</td>
            <td>Om Janakayai Namah</td>
            <td>Daughter of Janaka</td>
        </tr>
        <tr>
            <td>318</td>
            <td>Janani</td>
            <td>Om Jananyai Namah</td>
            <td>Mother</td>
        </tr>
        <tr>
            <td>319</td>
            <td>Janma-mrtyu-jarapaha</td>
            <td>Om Janma-mrtyu-jarapahayai Namah</td>
            <td>Remover of birth, death, and old age</td>
        </tr>
        <tr>
            <td>320</td>
            <td>Janmasunya</td>
            <td>Om Janmasunyayai Namah</td>
            <td>Without birth</td>
        </tr>
        <tr>
            <td>321</td>
            <td>Jatila</td>
            <td>Om Jatilayai Namah</td>
            <td>With matted hair</td>
        </tr>
        <tr>
            <td>322</td>
            <td>Java-kusuma-sankasa</td>
            <td>Om Java-kusuma-sankasayai Namah</td>
            <td>Radiant like the Java flower</td>
        </tr>
        <tr>
            <td>323</td>
            <td>Jaya</td>
            <td>Om Jayayai Namah</td>
            <td>Victory</td>
        </tr>
        <tr>
            <td>324</td>
            <td>Jaya-patni</td>
            <td>Om Jaya-patnyai Namah</td>
            <td>Wife of the victorious</td>
        </tr>
        <tr>
            <td>325</td>
            <td>Jaya-prada</td>
            <td>Om Jaya-pradayai Namah</td>
            <td>Giver of victory</td>
        </tr>
        <tr>
            <td>326</td>
            <td>Jayanti</td>
            <td>Om Jayantyai Namah</td>
            <td>Victorious</td>
        </tr>
        <tr>
            <td>327</td>
            <td>Jimuta-rupa</td>
            <td>Om Jimuta-rupayai Namah</td>
            <td>Cloud-like</td>
        </tr>
        <tr>
            <td>328</td>
            <td>Jitamitra-pramodini</td>
            <td>Om Jitamitra-pramodinyai Namah</td>
            <td>Delighter of conquered enemies</td>
        </tr>
        <tr>
            <td>329</td>
            <td>Jitarthi</td>
            <td>Om Jitarthyai Namah</td>
            <td>One who fulfills desires</td>
        </tr>
        <tr>
            <td>330</td>
            <td>Jitendriya</td>
            <td>Om Jitendriyayai Namah</td>
            <td>Master of the senses</td>
        </tr>
        <tr>
            <td>331</td>
            <td>Jiva</td>
            <td>Om Jivayai Namah</td>
            <td>Life</td>
        </tr>
        <tr>
            <td>332</td>
            <td>Jiva-vandya</td>
            <td>Om Jiva-vandyayai Namah</td>
            <td>Worshipped by living beings</td>
        </tr>
        <tr>
            <td>333</td>
            <td>Jivananda-pradayini</td>
            <td>Om Jivananda-pradayinyai Namah</td>
            <td>Bestower of blissful life</td>
        </tr>
        <tr>
            <td>334</td>
            <td>Kadambari-pana-para</td>
            <td>Om Kadambari-pana-parayai Namah</td>
            <td>Enthralled in drinking nectar</td>
        </tr>
        <tr>
            <td>335</td>
            <td>Kailasa-vasini</td>
            <td>Om Kailasa-vasinyai Namah</td>
            <td>Residing in Kailasa</td>
        </tr>
        <tr>
            <td>336</td>
            <td>Kailasacala-vasini</td>
            <td>Om Kailasacala-vasinyai Namah</td>
            <td>Dweller of Kailasa mountain</td>
        </tr>
        <tr>
            <td>337</td>
            <td>Kailasini</td>
            <td>Om Kailasinyai Namah</td>
            <td>Residing in Kailasa</td>
        </tr>
        <tr>
            <td>338</td>
            <td>Kaivalya-dayini</td>
            <td>Om Kaivalya-dayinyai Namah</td>
            <td>Bestower of liberation</td>
        </tr>
        <tr>
            <td>339</td>
            <td>Kaivalya-patha-da</td>
            <td>Om Kaivalya-patha-dayai Namah</td>
            <td>Giver of the path of liberation</td>
        </tr>
        <tr>
            <td>340</td>
            <td>Kaivalya-sundari</td>
            <td>Om Kaivalya-sundaryai Namah</td>
            <td>Beautiful in liberation</td>
        </tr>
        <tr>
            <td>341</td>
            <td>Kaivarti</td>
            <td>Om Kaivartiyai Namah</td>
            <td>The eternal</td>
        </tr>
        <tr>
            <td>342</td>
            <td>Kala</td>
            <td>Om Kalayai Namah</td>
            <td>Time</td>
        </tr>
        <tr>
            <td>343</td>
            <td>Kaladhinatha-vadana</td>
            <td>Om Kaladhinatha-vadanayai Namah</td>
            <td>With a moon-like face</td>
        </tr>
        <tr>
            <td>344</td>
            <td>Kalanathadhirohini</td>
            <td>Om Kalanathadhirohinayai Namah</td>
            <td>Rising above the moon</td>
        </tr>
        <tr>
            <td>345</td>
            <td>Kali-kalmasa-bhanga</td>
            <td>Om Kali-kalmasa-bhangayai Namah</td>
            <td>Destroyer of Kali’s impurities</td>
        </tr>
        <tr>
            <td>346</td>
            <td>Kali-kalmasa-nasini</td>
            <td>Om Kali-kalmasa-nasinyai Namah</td>
            <td>Remover of Kali’s sins</td>
        </tr>
        <tr>
            <td>347</td>
            <td>Kali-kalmasa-rupa</td>
            <td>Om Kali-kalmasa-rupayai Namah</td>
            <td>Embodiment of Kali’s effects</td>
        </tr>
        <tr>
            <td>348</td>
            <td>Kalindatanaya-tira</td>
            <td>Om Kalindatanaya-tirayai Namah</td>
            <td>Dweller on the banks of Yamuna</td>
        </tr>
        <tr>
            <td>349</td>
            <td>Kalindi</td>
            <td>Om Kalindiyai Namah</td>
            <td>Sacred river Yamuna</td>
        </tr>
        <tr>
            <td>350</td>
            <td>Kalindi-kula-dipika</td>
            <td>Om Kalindi-kula-dipikayai Namah</td>
            <td>Lamp of Yamuna’s dynasty</td>
        </tr>
        <tr>
            <td>351</td>
            <td>Kalpa</td>
            <td>Om Kalpayai Namah</td>
            <td>Eternal time</td>
        </tr>
        <tr>
            <td>352</td>
            <td>Kalpa-rupini</td>
            <td>Om Kalpa-rupinyai Namah</td>
            <td>Form of eternity</td>
        </tr>
        <tr>
            <td>353</td>
            <td>Kama-bija-pradayini</td>
            <td>Om Kama-bija-pradayinyai Namah</td>
            <td>Giver of the seed of desire</td>
        </tr>
        <tr>
            <td>354</td>
            <td>Kama-kala</td>
            <td>Om Kama-kalayai Namah</td>
            <td>The art of love</td>
        </tr>
        <tr>
            <td>355</td>
            <td>Kama-karika</td>
            <td>Om Kama-karikayai Namah</td>
            <td>Creator of desires</td>
        </tr>
        <tr>
            <td>356</td>
            <td>Kama-lalasa-vigraha</td>
            <td>Om Kama-lalasa-vigrahayai Namah</td>
            <td>Eager in love</td>
        </tr>
        <tr>
            <td>357</td>
            <td>Kama-prakasika</td>
            <td>Om Kama-prakasikayai Namah</td>
            <td>Revealer of love</td>
        </tr>
        <tr>
            <td>358</td>
            <td>Kama-sastra-prakasini</td>
            <td>Om Kama-sastra-prakasinyai Namah</td>
            <td>Illuminator of love scriptures</td>
        </tr>
        <tr>
            <td>359</td>
            <td>Kama-sastra-vinoda</td>
            <td>Om Kama-sastra-vinodayai Namah</td>
            <td>Enjoyer of love scriptures</td>
        </tr>
        <tr>
            <td>360</td>
            <td>Kama-vallabha</td>
            <td>Om Kama-vallabhayai Namah</td>
            <td>Beloved of love</td>
        </tr>
        <tr>
            <td>361</td>
            <td>Kamala</td>
            <td>Om Kamalayai Namah</td>
            <td>Lotus</td>
        </tr>
        <tr>
            <td>362</td>
            <td>Kamala-kanta-grhini</td>
            <td>Om Kamala-kanta-grhinyai Namah</td>
            <td>Consort of Kamala’s lord</td>
        </tr>
        <tr>
            <td>363</td>
            <td>Kamala-sundari</td>
            <td>Om Kamala-sundaryai Namah</td>
            <td>Beautiful as a lotus</td>
        </tr>
        <tr>
            <td>364</td>
            <td>Kamalalaya</td>
            <td>Om Kamalayayai Namah</td>
            <td>Residing in the lotus</td>
        </tr>
        <tr>
            <td>365</td>
            <td>Kamanga-harini</td>
            <td>Om Kamanga-harinayai Namah</td>
            <td>Remover of lust</td>
        </tr>
        <tr>
            <td>366</td>
            <td>Kamari-kanta</td>
            <td>Om Kamari-kantayai Namah</td>
            <td>Beloved of Kamari</td>
        </tr>
        <tr>
            <td>367</td>
            <td>Kamesi</td>
            <td>Om Kamesiyai Namah</td>
            <td>Mistress of desire</td>
        </tr>
        <tr>
            <td>368</td>
            <td>Kamesvari</td>
            <td>Om Kamesvariyai Namah</td>
            <td>Mistress of Kamesh</td>
        </tr>
        <tr>
            <td>369</td>
            <td>Kaminy</td>
            <td>Om Kaminyai Namah</td>
            <td>Full of desire</td>
        </tr>
        <tr>
            <td>370</td>
            <td>Kampamana</td>
            <td>Om Kampamanayai Namah</td>
            <td>Quivering</td>
        </tr>
        <tr>
            <td>371</td>
            <td>Kamsa-hara</td>
            <td>Om Kamsa-harayai Namah</td>
            <td>Slayer of Kamsa</td>
        </tr>
        <tr>
            <td>372</td>
            <td>Kanakakrti</td>
            <td>Om Kanakakrtyai Namah</td>
            <td>Golden-bodied</td>
        </tr>
        <tr>
            <td>373</td>
            <td>Kancanabha</td>
            <td>Om Kancanabhayai Namah</td>
            <td>Radiant like gold</td>
        </tr>
        <tr>
            <td>374</td>
            <td>Kancanangada-dharini</td>
            <td>Om Kancanangada-dharinyai Namah</td>
            <td>Wearing golden bracelets</td>
        </tr>
        <tr>
            <td>375</td>
            <td>Kandarpa-koti-janani</td>
            <td>Om Kandarpa-koti-jananyai Namah</td>
            <td>Mother of millions of Cupids</td>
        </tr>
        <tr>
            <td>376</td>
            <td>Kandarpa-koti-sundari</td>
            <td>Om Kandarpa-koti-sundaryai Namah</td>
            <td>More beautiful than millions of Cupids</td>
        </tr>
        <tr>
            <td>377</td>
            <td>Kanta</td>
            <td>Om Kantayai Namah</td>
            <td>Beloved</td>
        </tr>
        <tr>
            <td>378</td>
            <td>Kanta-nitambini</td>
            <td>Om Kanta-nitambinyai Namah</td>
            <td>Beautiful-hipped</td>
        </tr>
        <tr>
            <td>379</td>
            <td>Kantara-sustha-vasini</td>
            <td>Om Kantara-sustha-vasinyai Namah</td>
            <td>Dwelling in the woods</td>
        </tr>
        <tr>
            <td>380</td>
            <td>Kantara-vasini</td>
            <td>Om Kantara-vasinyai Namah</td>
            <td>Residing in the forest</td>
        </tr>
        <tr>
            <td>381</td>
            <td>Kanti</td>
            <td>Om Kantiyai Namah</td>
            <td>Radiance</td>
        </tr>
        <tr>
            <td>382</td>
            <td>Kanya</td>
            <td>Om Kanyayai Namah</td>
            <td>Virgin</td>
        </tr>
        <tr>
            <td>383</td>
            <td>Kapala-malini</td>
            <td>Om Kapala-malinayai Namah</td>
            <td>Wearing a garland of skulls</td>
        </tr>
        <tr>
            <td>384</td>
            <td>Kapila</td>
            <td>Om Kapilayai Namah</td>
            <td>Tawny-colored</td>
        </tr>
        <tr>
            <td>385</td>
            <td>Karani</td>
            <td>Om Karanayai Namah</td>
            <td>Doer</td>
        </tr>
        <tr>
            <td>386</td>
            <td>Karika</td>
            <td>Om Karikayai Namah</td>
            <td>Worker</td>
        </tr>
        <tr>
            <td>387</td>
            <td>Karini</td>
            <td>Om Karinyai Namah</td>
            <td>Acting</td>
        </tr>
        <tr>
            <td>388</td>
            <td>Karna</td>
            <td>Om Karnayai Namah</td>
            <td>Ear</td>
        </tr>
        <tr>
            <td>389</td>
            <td>Karttika-vrata-kartri</td>
            <td>Om Karttika-vrata-kartryai Namah</td>
            <td>Performer of Karttika vows</td>
        </tr>
        <tr>
            <td>390</td>
            <td>Karttiki</td>
            <td>Om Karttikyai Namah</td>
            <td>Related to Karttika</td>
        </tr>
        <tr>
            <td>391</td>
            <td>Karuna</td>
            <td>Om Karunayai Namah</td>
            <td>Compassion</td>
        </tr>
        <tr>
            <td>392</td>
            <td>Karunamaya-karini</td>
            <td>Om Karunamaya-karinyai Namah</td>
            <td>Full of compassionate deeds</td>
        </tr>
        <tr>
            <td>393</td>
            <td>Karunarnava-dharini</td>
            <td>Om Karunarnava-dharinyai Namah</td>
            <td>Holder of the ocean of mercy</td>
        </tr>
        <tr>
            <td>394</td>
            <td>Karunarnava-rupini</td>
            <td>Om Karunarnava-rupinyai Namah</td>
            <td>Form of the ocean of mercy</td>
        </tr>
        <tr>
            <td>395</td>
            <td>Karunarnava-sampurna</td>
            <td>Om Karunarnava-sampurnayai Namah</td>
            <td>Filled with the ocean of mercy</td>
        </tr>
        <tr>
            <td>396</td>
            <td>Karunya</td>
            <td>Om Karunyayai Namah</td>
            <td>Merciful</td>
        </tr>
        <tr>
            <td>397</td>
            <td>Karyatita</td>
            <td>Om Karyatitayai Namah</td>
            <td>Beyond all actions</td>
        </tr>
        <tr>
            <td>398</td>
            <td>Kaulini</td>
            <td>Om Kaulinyai Namah</td>
            <td>Divine energy</td>
        </tr>
        <tr>
            <td>399</td>
            <td>Kaumari</td>
            <td>Om Kaumaryai Namah</td>
            <td>Young girl</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Kauseyambara-dharini</td>
            <td>Om Kauseyambara-dharinyai Namah</td>
            <td>Wearing silk garments</td>
        </tr>
        <tr>
            <td>401</td>
            <td>Kaya</td>
            <td>Om Kayayai Namah</td>
            <td>Body</td>
        </tr>
        <tr>
            <td>402</td>
            <td>Kesa</td>
            <td>Om Kesayai Namah</td>
            <td>Hair</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Kesa-pasa-rata</td>
            <td>Om Kesa-pasa-ratayai Namah</td>
            <td>Fond of hair ties</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Kesa-saivala-dhatri</td>
            <td>Om Kesa-saivala-dhatryai Namah</td>
            <td>Holder of hair like moss</td>
        </tr>
        <tr>
            <td>405</td>
            <td>Kesava</td>
            <td>Om Kesavayai Namah</td>
            <td>Beautiful-haired</td>
        </tr>
        <tr>
            <td>406</td>
            <td>Kesava-prita</td>
            <td>Om Kesava-pritayai Namah</td>
            <td>Dear to Kesava</td>
        </tr>
        <tr>
            <td>407</td>
            <td>Kesava-priya</td>
            <td>Om Kesava-priyayai Namah</td>
            <td>Beloved of Kesava</td>
        </tr>
        <tr>
            <td>408</td>
            <td>Kesavananda-datri</td>
            <td>Om Kesavananda-datrayai Namah</td>
            <td>Giver of Kesava’s bliss</td>
        </tr>
        <tr>
            <td>409</td>
            <td>Kesavananda-dayini</td>
            <td>Om Kesavananda-dayinyai Namah</td>
            <td>Giver of bliss to Kesava</td>
        </tr>
        <tr>
            <td>410</td>
            <td>Kesavi</td>
            <td>Om Kesaviyai Namah</td>
            <td>Of Kesava</td>
        </tr>
        <tr>
            <td>411</td>
            <td>Kesini</td>
            <td>Om Kesinyai Namah</td>
            <td>Beautiful-haired</td>
        </tr>
        <tr>
            <td>412</td>
            <td>Kevala</td>
            <td>Om Kevalayai Namah</td>
            <td>Independent</td>
        </tr>
        <tr>
            <td>413</td>
            <td>Khecara-suta</td>
            <td>Om Khecara-sutayai Namah</td>
            <td>Daughter of the sky-wanderers</td>
        </tr>
        <tr>
            <td>414</td>
            <td>Khecaratva-pradayini</td>
            <td>Om Khecaratva-pradayinyai Namah</td>
            <td>Giver of the power to fly</td>
        </tr>
        <tr>
            <td>415</td>
            <td>Khecari</td>
            <td>Om Khecaryai Namah</td>
            <td>Sky-wanderer</td>
        </tr>
        <tr>
            <td>416</td>
            <td>Kisora-sanga-samsarga</td>
            <td>Om Kisora-sanga-samsargayai Namah</td>
            <td>Mingling with young girls</td>
        </tr>
        <tr>
            <td>417</td>
            <td>Kisora-vallabha</td>
            <td>Om Kisora-vallabhayai Namah</td>
            <td>Beloved of young girls</td>
        </tr>
        <tr>
            <td>418</td>
            <td>Kisori</td>
            <td>Om Kisoriyai Namah</td>
            <td>Young girl</td>
        </tr>
        <tr>
            <td>419</td>
            <td>Kisorini</td>
            <td>Om Kisorinyai Namah</td>
            <td>Youthful</td>
        </tr>
        <tr>
            <td>420</td>
            <td>Kosa</td>
            <td>Om Kosayai Namah</td>
            <td>Treasure</td>
        </tr>
        <tr>
            <td>421</td>
            <td>Kosa-rupa</td>
            <td>Om Kosa-rupayai Namah</td>
            <td>Form of treasure</td>
        </tr>
        <tr>
            <td>422</td>
            <td>Kosala</td>
            <td>Om Kosalayai Namah</td>
            <td>Dweller in Kosala</td>
        </tr>
        <tr>
            <td>423</td>
            <td>Kosavari</td>
            <td>Om Kosavarayai Namah</td>
            <td>Mistress of treasures</td>
        </tr>
        <tr>
            <td>424</td>
            <td>Koti-kandarpa-lavanya</td>
            <td>Om Koti-kandarpa-lavanyayai Namah</td>
            <td>Beauty surpassing millions of Cupids</td>
        </tr>
        <tr>
            <td>425</td>
            <td>Krida-kautuka-rupini</td>
            <td>Om Krida-kautuka-rupinyai Namah</td>
            <td>Playful and joyous form</td>
        </tr>
        <tr>
            <td>426</td>
            <td>Kripatita</td>
            <td>Om Kripatitayai Namah</td>
            <td>Full of compassion</td>
        </tr>
        <tr>
            <td>427</td>
            <td>Krodhini</td>
            <td>Om Krodhinyai Namah</td>
            <td>Wrathful</td>
        </tr>
        <tr>
            <td>428</td>
            <td>Krpa</td>
            <td>Om Krpayai Namah</td>
            <td>Mercy</td>
        </tr>
        <tr>
            <td>429</td>
            <td>Krpanvita</td>
            <td>Om Krpanvitayai Namah</td>
            <td>Full of mercy</td>
        </tr>
        <tr>
            <td>430</td>
            <td>Krpavati</td>
            <td>Om Krpavatayai Namah</td>
            <td>Endowed with compassion</td>
        </tr>
        <tr>
            <td>431</td>
            <td>Krsna</td>
            <td>Om Krsnayai Namah</td>
            <td>Black or dark-colored</td>
        </tr>
        <tr>
            <td>432</td>
            <td>Krsna-bhakta-phalarthini</td>
            <td>Om Krsna-bhakta-phalarthinyai Namah</td>
            <td>Bestower of results to Krishna's devotees</td>
        </tr>
        <tr>
            <td>433</td>
            <td>Krsna-bhogya</td>
            <td>Om Krsna-bhogyayai Namah</td>
            <td>Enjoyable by Krishna</td>
        </tr>
        <tr>
            <td>434</td>
            <td>Krsna-kala</td>
            <td>Om Krsna-kalayai Namah</td>
            <td>Part of Krishna</td>
        </tr>
        <tr>
            <td>435</td>
            <td>Krsna-kanta</td>
            <td>Om Krsna-kantayai Namah</td>
            <td>Beloved of Krishna</td>
        </tr>
        <tr>
            <td>436</td>
            <td>Krsna-kroda</td>
            <td>Om Krsna-krodayai Namah</td>
            <td>Embraced by Krishna</td>
        </tr>
        <tr>
            <td>437</td>
            <td>Krsna-pivari</td>
            <td>Om Krsna-pivaryai Namah</td>
            <td>Round and plump like Krishna's form</td>
        </tr>
        <tr>
            <td>438</td>
            <td>Krsna-prema</td>
            <td>Om Krsna-premayai Namah</td>
            <td>Krishna's love</td>
        </tr>
        <tr>
            <td>439</td>
            <td>Krsna-prema-parayana</td>
            <td>Om Krsna-prema-parayanayai Namah</td>
            <td>Devoted to Krishna's love</td>
        </tr>
        <tr>
            <td>440</td>
            <td>Krsna-prema-rata</td>
            <td>Om Krsna-prema-ratayai Namah</td>
            <td>Engaged in Krishna's love</td>
        </tr>
        <tr>
            <td>441</td>
            <td>Krsna-prema-tarangini</td>
            <td>Om Krsna-prema-taranginyai Namah</td>
            <td>Waves of Krishna's love</td>
        </tr>
        <tr>
            <td>442</td>
            <td>Krsna-premavati</td>
            <td>Om Krsna-premavatayai Namah</td>
            <td>Filled with Krishna's love</td>
        </tr>
        <tr>
            <td>443</td>
            <td>Krsna-prita</td>
            <td>Om Krsna-pritayai Namah</td>
            <td>Dear to Krishna</td>
        </tr>
        <tr>
            <td>444</td>
            <td>Krsna-rata</td>
            <td>Om Krsna-ratayai Namah</td>
            <td>Delighting in Krishna</td>
        </tr>
        <tr>
            <td>445</td>
            <td>Krsna-samyuta</td>
            <td>Om Krsna-samyutayai Namah</td>
            <td>United with Krishna</td>
        </tr>
        <tr>
            <td>446</td>
            <td>Krsna-sangarthini</td>
            <td>Om Krsna-sangarthinyai Namah</td>
            <td>Companion of Krishna</td>
        </tr>
        <tr>
            <td>447</td>
            <td>Krsna-stuta</td>
            <td>Om Krsna-stutayai Namah</td>
            <td>Praised by Krishna</td>
        </tr>
        <tr>
            <td>448</td>
            <td>Krsna-taranga-da</td>
            <td>Om Krsna-taranga-dayai Namah</td>
            <td>Giver of Krishna's waves</td>
        </tr>
        <tr>
            <td>449</td>
            <td>Krsna-tosana-tat-para</td>
            <td>Om Krsna-tosana-tat-parayai Namah</td>
            <td>Eager to please Krishna</td>
        </tr>
        <tr>
            <td>450</td>
            <td>Krsnacandra-priya</td>
            <td>Om Krsnacandra-priyayai Namah</td>
            <td>Beloved of Krsnacandra</td>
        </tr>
        <tr>
            <td>451</td>
            <td>Krsnananda-pradayini</td>
            <td>Om Krsnananda-pradayinyai Namah</td>
            <td>Bestower of Krishna's bliss</td>
        </tr>
        <tr>
            <td>452</td>
            <td>Krsnananda-vidhayini</td>
            <td>Om Krsnananda-vidhayinyai Namah</td>
            <td>Performer of Krishna's bliss</td>
        </tr>
        <tr>
            <td>453</td>
            <td>Krsnanga-vasini</td>
            <td>Om Krsnanga-vasinyai Namah</td>
            <td>Residing in Krishna's body</td>
        </tr>
        <tr>
            <td>454</td>
            <td>Krsnartha-rahita</td>
            <td>Om Krsnartha-rahitayai Namah</td>
            <td>Without desires for Krishna</td>
        </tr>
        <tr>
            <td>455</td>
            <td>Krsnartha-vasana</td>
            <td>Om Krsnartha-vasanayai Namah</td>
            <td>Desiring Krishna</td>
        </tr>
        <tr>
            <td>456</td>
            <td>Krsnartha-vyakula</td>
            <td>Om Krsnartha-vyakulayai Namah</td>
            <td>Longing for Krishna</td>
        </tr>
        <tr>
            <td>457</td>
            <td>Krsnarthini</td>
            <td>Om Krsnarthinyai Namah</td>
            <td>Devoted to Krishna</td>
        </tr>
        <tr>
            <td>458</td>
            <td>Krsnavatara-nirata</td>
            <td>Om Krsnavatara-niratayai Namah</td>
            <td>Absorbed in Krishna's incarnation</td>
        </tr>
        <tr>
            <td>459</td>
            <td>Krsnesi</td>
            <td>Om Krsnesiyai Namah</td>
            <td>Mistress of Krishna</td>
        </tr>
        <tr>
            <td>460</td>
            <td>Ksama</td>
            <td>Om Ksamayai Namah</td>
            <td>Forgiveness</td>
        </tr>
        <tr>
            <td>461</td>
            <td>Ksamakula</td>
            <td>Om Ksamakulayai Namah</td>
            <td>Full of forgiveness</td>
        </tr>
        <tr>
            <td>462</td>
            <td>Ksema</td>
            <td>Om Ksemayai Namah</td>
            <td>Welfare</td>
        </tr>
        <tr>
            <td>463</td>
            <td>Ksema-kari</td>
            <td>Om Ksema-karinyai Namah</td>
            <td>Doer of good</td>
        </tr>
        <tr>
            <td>464</td>
            <td>Ksetra</td>
            <td>Om Ksetrayai Namah</td>
            <td>Sacred place</td>
        </tr>
        <tr>
            <td>465</td>
            <td>Ksetra-nivasini</td>
            <td>Om Ksetra-nivasinyai Namah</td>
            <td>Dwelling in sacred places</td>
        </tr>
        <tr>
            <td>466</td>
            <td>Ksetradhisthatr-rupa</td>
            <td>Om Ksetradhisthatr-rupayai Namah</td>
            <td>Protector of sacred places</td>
        </tr>
        <tr>
            <td>467</td>
            <td>Ksetratita</td>
            <td>Om Ksetratitayai Namah</td>
            <td>Beyond sacred places</td>
        </tr>
        <tr>
            <td>468</td>
            <td>Ksina</td>
            <td>Om Ksinayai Namah</td>
            <td>Thin or subtle</td>
        </tr>
        <tr>
            <td>469</td>
            <td>Ksirodasayini</td>
            <td>Om Ksirodasayinyai Namah</td>
            <td>Residing in the ocean of milk</td>
        </tr>
        <tr>
            <td>470</td>
            <td>Ksudha</td>
            <td>Om Ksudhayai Namah</td>
            <td>Hunger</td>
        </tr>
        <tr>
            <td>471</td>
            <td>Ksudra-kitanga-samsarga</td>
            <td>Om Ksudra-kitanga-samsargayai Namah</td>
            <td>Touching small creatures</td>
        </tr>
        <tr>
            <td>472</td>
            <td>Ksut</td>
            <td>Om Ksutyai Namah</td>
            <td>Sustenance</td>
        </tr>
        <tr>
            <td>473</td>
            <td>Kula-dipika</td>
            <td>Om Kula-dipikayai Namah</td>
            <td>Lamp of the family lineage</td>
        </tr>
        <tr>
            <td>474</td>
            <td>Kula-ksetra-nivasini</td>
            <td>Om Kula-ksetra-nivasinyai Namah</td>
            <td>Residing in the family’s sacred place</td>
        </tr>
        <tr>
            <td>475</td>
            <td>Kula-prada</td>
            <td>Om Kula-pradayai Namah</td>
            <td>Giver of family lineage</td>
        </tr>
        <tr>
            <td>476</td>
            <td>Kula-priya</td>
            <td>Om Kula-priyayai Namah</td>
            <td>Beloved of the family</td>
        </tr>
        <tr>
            <td>477</td>
            <td>Kula-pujya</td>
            <td>Om Kula-pujyayai Namah</td>
            <td>Worshipped by the family</td>
        </tr>
        <tr>
            <td>478</td>
            <td>Kulajendra-nivasini</td>
            <td>Om Kulajendra-nivasinyai Namah</td>
            <td>Dweller in noble families</td>
        </tr>
        <tr>
            <td>479</td>
            <td>Kulavati</td>
            <td>Om Kulavatayai Namah</td>
            <td>Belonging to noble families</td>
        </tr>
        <tr>
            <td>480</td>
            <td>Kulina</td>
            <td>Om Kulinayai Namah</td>
            <td>Noble</td>
        </tr>
        <tr>
            <td>481</td>
            <td>Kulodvaha</td>
            <td>Om Kulodvahayai Namah</td>
            <td>Exalted in the family</td>
        </tr>
        <tr>
            <td>482</td>
            <td>Kumari</td>
            <td>Om Kumariyai Namah</td>
            <td>Virgin</td>
        </tr>
        <tr>
            <td>483</td>
            <td>Kumuda</td>
            <td>Om Kumudayai Namah</td>
            <td>Lotus</td>
        </tr>
        <tr>
            <td>484</td>
            <td>Kumudananda</td>
            <td>Om Kumudanandayai Namah</td>
            <td>Joy of the lotus</td>
        </tr>
        <tr>
            <td>485</td>
            <td>Kusmanda-bhuta-vetala</td>
            <td>Om Kusmanda-bhuta-vetalayai Namah</td>
            <td>Overlord of ghosts and spirits</td>
        </tr>
        <tr>
            <td>486</td>
            <td>Kusumamoda-dharini</td>
            <td>Om Kusumamoda-dharinyai Namah</td>
            <td>Bearer of flower fragrance</td>
        </tr>
        <tr>
            <td>487</td>
            <td>Kutila</td>
            <td>Om Kutilayai Namah</td>
            <td>Crooked</td>
        </tr>
        <tr>
            <td>488</td>
            <td>Kutilalaka</td>
            <td>Om Kutilalakayai Namah</td>
            <td>With curly hair</td>
        </tr>
        <tr>
            <td>489</td>
            <td>Kutira-vasini</td>
            <td>Om Kutira-vasinyai Namah</td>
            <td>Dweller in huts</td>
        </tr>
        <tr>
            <td>490</td>
            <td>Kuveresvara-vallabha</td>
            <td>Om Kuveresvara-vallabhayai Namah</td>
            <td>Beloved of Kubera’s lord</td>
        </tr>
        <tr>
            <td>491</td>
            <td>Lajja</td>
            <td>Om Lajjayai Namah</td>
            <td>Modesty</td>
        </tr>
        <tr>
            <td>492</td>
            <td>Laksmana-geha-stha</td>
            <td>Om Laksmana-geha-sthayai Namah</td>
            <td>Residing in Laksmana’s abode</td>
        </tr>
        <tr>
            <td>493</td>
            <td>Laksmi</td>
            <td>Om Laksmyai Namah</td>
            <td>Goddess of wealth</td>
        </tr>
        <tr>
            <td>494</td>
            <td>Lalita</td>
            <td>Om Lalitayai Namah</td>
            <td>Playful</td>
        </tr>
        <tr>
            <td>495</td>
            <td>Langhana-ksama</td>
            <td>Om Langhana-ksamayai Namah</td>
            <td>Enduring weight</td>
        </tr>
        <tr>
            <td>496</td>
            <td>Lata</td>
            <td>Om Latayai Namah</td>
            <td>Creeper</td>
        </tr>
        <tr>
            <td>497</td>
            <td>Lavanga</td>
            <td>Om Lavangayai Namah</td>
            <td>Clove-like fragrance</td>
        </tr>
        <tr>
            <td>498</td>
            <td>Lavanga-namni</td>
            <td>Om Lavanga-namninyai Namah</td>
            <td>Named for clove</td>
        </tr>
        <tr>
            <td>499</td>
            <td>Lavanya-mangala</td>
            <td>Om Lavanya-mangalayai Namah</td>
            <td>Auspicious beauty</td>
        </tr>
        <tr>
            <td>500</td>
            <td>Lila</td>
            <td>Om Lilayai Namah</td>
            <td>Divine play</td>
        </tr>
        <tr>
            <td>501</td>
            <td>Mabodari</td>
            <td>Om Mabodariyai Namah</td>
            <td>With a large belly</td>
        </tr>
        <tr>
            <td>502</td>
            <td>Mada-dayini</td>
            <td>Om Mada-dayinyai Namah</td>
            <td>Giver of intoxication</td>
        </tr>
        <tr>
            <td>503</td>
            <td>Madana-mohini</td>
            <td>Om Madana-mohinyai Namah</td>
            <td>Enchantress of Kamadeva</td>
        </tr>
        <tr>
            <td>504</td>
            <td>Madhava-mano</td>
            <td>Om Madhava-manoyai Namah</td>
            <td>Dwelling in Madhava’s heart</td>
        </tr>
        <tr>
            <td>505</td>
            <td>Madhavi</td>
            <td>Om Madhaviyai Namah</td>
            <td>Sweet creeper</td>
        </tr>
        <tr>
            <td>506</td>
            <td>Maha-bhima</td>
            <td>Om Maha-bhimayai Namah</td>
            <td>Greatly terrifying</td>
        </tr>
        <tr>
            <td>507</td>
            <td>Maha-durga</td>
            <td>Om Maha-durgayai Namah</td>
            <td>The great invincible</td>
        </tr>
        <tr>
            <td>508</td>
            <td>Maha-jiva-prada</td>
            <td>Om Maha-jiva-pradayai Namah</td>
            <td>Giver of great life</td>
        </tr>
        <tr>
            <td>509</td>
            <td>Maha-laksmi</td>
            <td>Om Maha-laksmiyai Namah</td>
            <td>Supreme Goddess of Wealth</td>
        </tr>
        <tr>
            <td>510</td>
            <td>Maha-mukta</td>
            <td>Om Maha-muktayai Namah</td>
            <td>Supreme liberated</td>
        </tr>
        <tr>
            <td>511</td>
            <td>Maha-mukti-phala-prada</td>
            <td>Om Maha-mukti-phala-pradayai Namah</td>
            <td>Giver of supreme liberation</td>
        </tr>
        <tr>
            <td>512</td>
            <td>Maha-visnu-priya</td>
            <td>Om Maha-visnu-priyayai Namah</td>
            <td>Beloved of Maha-Vishnu</td>
        </tr>
        <tr>
            <td>513</td>
            <td>Mahalasa</td>
            <td>Om Mahalasayai Namah</td>
            <td>Playful</td>
        </tr>
        <tr>
            <td>514</td>
            <td>Maheyi</td>
            <td>Om Maheyiyai Namah</td>
            <td>Divine</td>
        </tr>
        <tr>
            <td>515</td>
            <td>Malati-malya-bhusadhya</td>
            <td>Om Malati-malya-bhusadhyayai Namah</td>
            <td>Adorned with Malati garlands</td>
        </tr>
        <tr>
            <td>516</td>
            <td>Malati-malya-dharini</td>
            <td>Om Malati-malya-dharinyai Namah</td>
            <td>Wearer of Malati garlands</td>
        </tr>
        <tr>
            <td>517</td>
            <td>Manda-lajja</td>
            <td>Om Manda-lajjayai Namah</td>
            <td>Slightly modest</td>
        </tr>
        <tr>
            <td>518</td>
            <td>Mangala-prada</td>
            <td>Om Mangala-pradayai Namah</td>
            <td>Giver of auspiciousness</td>
        </tr>
        <tr>
            <td>519</td>
            <td>Mangalamoda-janani</td>
            <td>Om Mangalamoda-jananyai Namah</td>
            <td>Creator of auspicious fragrance</td>
        </tr>
        <tr>
            <td>520</td>
            <td>Mangalya</td>
            <td>Om Mangalyayai Namah</td>
            <td>Auspiciousness</td>
        </tr>
        <tr>
            <td>521</td>
            <td>Mano-'dhisthatr-devi</td>
            <td>Om Mano-'dhisthatr-devyai Namah</td>
            <td>Goddess dwelling in the mind</td>
        </tr>
        <tr>
            <td>522</td>
            <td>Manohara</td>
            <td>Om Manoharayai Namah</td>
            <td>Enchanting</td>
        </tr>
        <tr>
            <td>523</td>
            <td>Manorama</td>
            <td>Om Manoramayai Namah</td>
            <td>Pleasing</td>
        </tr>
        <tr>
            <td>524</td>
            <td>Mathura</td>
            <td>Om Mathurayai Namah</td>
            <td>Residing in Mathura</td>
        </tr>
        <tr>
            <td>525</td>
            <td>Mathura-raja</td>
            <td>Om Mathura-rajayai Namah</td>
            <td>Queen of Mathura</td>
        </tr>
        <tr>
            <td>526</td>
            <td>Mati</td>
            <td>Om Matiyai Namah</td>
            <td>Intellect</td>
        </tr>
        <tr>
            <td>527</td>
            <td>Matsya-raja-suta</td>
            <td>Om Matsya-raja-sutayai Namah</td>
            <td>Daughter of Matsya king</td>
        </tr>
        <tr>
            <td>528</td>
            <td>Matsya-rupa</td>
            <td>Om Matsya-rupayai Namah</td>
            <td>Fish-like form</td>
        </tr>
        <tr>
            <td>529</td>
            <td>Maya</td>
            <td>Om Mayayai Namah</td>
            <td>Illusion</td>
        </tr>
        <tr>
            <td>530</td>
            <td>Megha-rupa</td>
            <td>Om Megha-rupayai Namah</td>
            <td>Cloud-like form</td>
        </tr>
        <tr>
            <td>531</td>
            <td>Mekhalamoda-dharini</td>
            <td>Om Mekhalamoda-dharinyai Namah</td>
            <td>Wearing a fragrant belt</td>
        </tr>
        <tr>
            <td>532</td>
            <td>Minavatara</td>
            <td>Om Minavatarayai Namah</td>
            <td>Fish incarnation</td>
        </tr>
        <tr>
            <td>533</td>
            <td>Minesi</td>
            <td>Om Minesiyai Namah</td>
            <td>Ruler of fishes</td>
        </tr>
        <tr>
            <td>534</td>
            <td>Mitravinda</td>
            <td>Om Mitravindayai Namah</td>
            <td>Friend-giving</td>
        </tr>
        <tr>
            <td>535</td>
            <td>Moha</td>
            <td>Om Mohayai Namah</td>
            <td>Delusion</td>
        </tr>
        <tr>
            <td>536</td>
            <td>Mohana</td>
            <td>Om Mohanayai Namah</td>
            <td>Enchanting</td>
        </tr>
        <tr>
            <td>537</td>
            <td>Mudrasya</td>
            <td>Om Mudrasyayai Namah</td>
            <td>Bearing mudras</td>
        </tr>
        <tr>
            <td>538</td>
            <td>Mukha-vasa-mukhanvita</td>
            <td>Om Mukha-vasa-mukhanvitayai Namah</td>
            <td>With charming expressions</td>
        </tr>
        <tr>
            <td>539</td>
            <td>Mukhi</td>
            <td>Om Mukhiyai Namah</td>
            <td>Chief or foremost</td>
        </tr>
        <tr>
            <td>540</td>
            <td>Mukhya</td>
            <td>Om Mukhyayai Namah</td>
            <td>Principal</td>
        </tr>
        <tr>
            <td>541</td>
            <td>Mukhya-nivasini</td>
            <td>Om Mukhya-nivasinyai Namah</td>
            <td>Residing in principal abodes</td>
        </tr>
        <tr>
            <td>542</td>
            <td>Mukhya-prada</td>
            <td>Om Mukhya-pradayai Namah</td>
            <td>Giver of importance</td>
        </tr>
        <tr>
            <td>543</td>
            <td>Mukti-datri</td>
            <td>Om Mukti-datrayai Namah</td>
            <td>Giver of liberation</td>
        </tr>
        <tr>
            <td>544</td>
            <td>Mukti-hetu</td>
            <td>Om Mukti-hetuyai Namah</td>
            <td>Cause of liberation</td>
        </tr>
        <tr>
            <td>545</td>
            <td>Mukti-hetu-langhani</td>
            <td>Om Mukti-hetu-langhaninyai Namah</td>
            <td>Crossing the cause of liberation</td>
        </tr>
        <tr>
            <td>546</td>
            <td>Nada-bindu-vidharini</td>
            <td>Om Nada-bindu-vidharinyai Namah</td>
            <td>Bearer of sound and energy</td>
        </tr>
        <tr>
            <td>547</td>
            <td>Nada-rupa</td>
            <td>Om Nada-rupayai Namah</td>
            <td>Form of sound</td>
        </tr>
        <tr>
            <td>548</td>
            <td>Nadesi</td>
            <td>Om Nadesiyai Namah</td>
            <td>Mistress of sound</td>
        </tr>
        <tr>
            <td>549</td>
            <td>Naga-karnika</td>
            <td>Om Naga-karnikayai Namah</td>
            <td>Serpent-like earrings</td>
        </tr>
        <tr>
            <td>550</td>
            <td>Naga-mata</td>
            <td>Om Naga-matayai Namah</td>
            <td>Mother of serpents</td>
        </tr>
        <tr>
            <td>551</td>
            <td>Nagara</td>
            <td>Om Nagarayai Namah</td>
            <td>City-like</td>
        </tr>
        <tr>
            <td>552</td>
            <td>Nagaralingana-para</td>
            <td>Om Nagaralingana-parayai Namah</td>
            <td>Engrossed in city-like embrace</td>
        </tr>
        <tr>
            <td>553</td>
            <td>Nagarananda-karini</td>
            <td>Om Nagarananda-karinyai Namah</td>
            <td>Creator of joy in cities</td>
        </tr>
        <tr>
            <td>554</td>
            <td>Nagarangana-mangala</td>
            <td>Om Nagarangana-mangalayai Namah</td>
            <td>Auspicious city lady</td>
        </tr>
        <tr>
            <td>555</td>
            <td>Nagendra</td>
            <td>Om Nagendrayai Namah</td>
            <td>Lord of serpents</td>
        </tr>
        <tr>
            <td>556</td>
            <td>Nagendra-kanya</td>
            <td>Om Nagendra-kanyayai Namah</td>
            <td>Daughter of serpent king</td>
        </tr>
        <tr>
            <td>557</td>
            <td>Nairvani</td>
            <td>Om Nairvaniyai Namah</td>
            <td>Silent or tranquil</td>
        </tr>
        <tr>
            <td>558</td>
            <td>Nanda</td>
            <td>Om Nandayai Namah</td>
            <td>Joyful</td>
        </tr>
        <tr>
            <td>559</td>
            <td>Nanda-priya</td>
            <td>Om Nanda-priyayai Namah</td>
            <td>Beloved of Nanda</td>
        </tr>
        <tr>
            <td>560</td>
            <td>Nanda-suta</td>
            <td>Om Nanda-sutayai Namah</td>
            <td>Daughter of Nanda</td>
        </tr>
        <tr>
            <td>561</td>
            <td>Nandanandana-patni</td>
            <td>Om Nandanandana-patnyai Namah</td>
            <td>Wife of Nanda’s son</td>
        </tr>
        <tr>
            <td>562</td>
            <td>Nandanangana</td>
            <td>Om Nandananganayai Namah</td>
            <td>Joyful lady</td>
        </tr>
        <tr>
            <td>563</td>
            <td>Nara-sevya</td>
            <td>Om Nara-sevyayai Namah</td>
            <td>Served by humans</td>
        </tr>
        <tr>
            <td>564</td>
            <td>Narakarnava-nasini</td>
            <td>Om Narakarnava-nasinyai Namah</td>
            <td>Destroyer of hell’s ocean</td>
        </tr>
        <tr>
            <td>565</td>
            <td>Narakarnava-samhantri</td>
            <td>Om Narakarnava-samhantryai Namah</td>
            <td>Vanquisher of hell’s ocean</td>
        </tr>
        <tr>
            <td>566</td>
            <td>Naranga-kula-mandana</td>
            <td>Om Naranga-kula-mandanayai Namah</td>
            <td>Ornament of the orange dynasty</td>
        </tr>
        <tr>
            <td>567</td>
            <td>Naranga-phala-sobhita</td>
            <td>Om Naranga-phala-sobhitayai Namah</td>
            <td>Glowing with orange fruits</td>
        </tr>
        <tr>
            <td>568</td>
            <td>Narangana</td>
            <td>Om Naranganayai Namah</td>
            <td>Lady of orange beauty</td>
        </tr>
        <tr>
            <td>569</td>
            <td>Narangi</td>
            <td>Om Narangiyai Namah</td>
            <td>Orange-like</td>
        </tr>
        <tr>
            <td>570</td>
            <td>Narasimhi</td>
            <td>Om Narasimhyai Namah</td>
            <td>Power of Narasimha</td>
        </tr>
        <tr>
            <td>571</td>
            <td>Naratita</td>
            <td>Om Naratitayai Namah</td>
            <td>Beyond humanity</td>
        </tr>
        <tr>
            <td>572</td>
            <td>Narayana-priya</td>
            <td>Om Narayana-priyayai Namah</td>
            <td>Beloved of Narayana</td>
        </tr>
        <tr>
            <td>573</td>
            <td>Narayani</td>
            <td>Om Narayaniyai Namah</td>
            <td>Consort of Narayana</td>
        </tr>
        <tr>
            <td>574</td>
            <td>Naresvari</td>
            <td>Om Naresvariyai Namah</td>
            <td>Mistress of all beings</td>
        </tr>
        <tr>
            <td>575</td>
            <td>Nari</td>
            <td>Om Nariyai Namah</td>
            <td>Woman</td>
        </tr>
        <tr>
            <td>576</td>
            <td>Nasgari-raga</td>
            <td>Om Nasgari-ragayai Namah</td>
            <td>Enchanting musical tune</td>
        </tr>
        <tr>
            <td>577</td>
            <td>Nasini</td>
            <td>Om Nasinyai Namah</td>
            <td>Destroyer</td>
        </tr>
        <tr>
            <td>578</td>
            <td>Nava-durgika</td>
            <td>Om Nava-durgikayai Namah</td>
            <td>Nine forms of Durga</td>
        </tr>
        <tr>
            <td>579</td>
            <td>Nava-nari</td>
            <td>Om Nava-nariyai Namah</td>
            <td>Nine women</td>
        </tr>
        <tr>
            <td>580</td>
            <td>Navanitika</td>
            <td>Om Navanitikayai Namah</td>
            <td>Fresh butter</td>
        </tr>
        <tr>
            <td>581</td>
            <td>Navina</td>
            <td>Om Navinayai Namah</td>
            <td>New or fresh</td>
        </tr>
        <tr>
            <td>582</td>
            <td>Nayaka-prita</td>
            <td>Om Nayaka-pritayai Namah</td>
            <td>Beloved of leaders</td>
        </tr>
        <tr>
            <td>583</td>
            <td>Nayakananda-rupini</td>
            <td>Om Nayakananda-rupinyai Namah</td>
            <td>Creator of leaders’ joy</td>
        </tr>
        <tr>
            <td>584</td>
            <td>Nayika</td>
            <td>Om Nayikayai Namah</td>
            <td>Lady or heroine</td>
        </tr>
        <tr>
            <td>585</td>
            <td>Nayika-nayananvita</td>
            <td>Om Nayika-nayananvitayai Namah</td>
            <td>Accompanied by heroines</td>
        </tr>
        <tr>
            <td>586</td>
            <td>Nidra</td>
            <td>Om Nidrayai Namah</td>
            <td>Sleep</td>
        </tr>
        <tr>
            <td>587</td>
            <td>Nila</td>
            <td>Om Nilayai Namah</td>
            <td>Dark blue</td>
        </tr>
        <tr>
            <td>588</td>
            <td>Nilakantha-priya</td>
            <td>Om Nilakantha-priyayai Namah</td>
            <td>Beloved of Nilakantha (Shiva)</td>
        </tr>
        <tr>
            <td>589</td>
            <td>Nilambara-vidhatri</td>
            <td>Om Nilambara-vidhatryai Namah</td>
            <td>Wearing blue garments</td>
        </tr>
        <tr>
            <td>590</td>
            <td>Nilambaradhara</td>
            <td>Om Nilambaradharayai Namah</td>
            <td>Wearing blue</td>
        </tr>
        <tr>
            <td>591</td>
            <td>Nimba-dadima-rupini</td>
            <td>Om Nimba-dadima-rupinyai Namah</td>
            <td>Form of neem and pomegranate</td>
        </tr>
        <tr>
            <td>592</td>
            <td>Nirakula</td>
            <td>Om Nirakulayai Namah</td>
            <td>Tranquil</td>
        </tr>
        <tr>
            <td>593</td>
            <td>Niralamba</td>
            <td>Om Niralambayai Namah</td>
            <td>Without support</td>
        </tr>
        <tr>
            <td>594</td>
            <td>Niralamba-gana-priya</td>
            <td>Om Niralamba-gana-priyayai Namah</td>
            <td>Beloved of the unsupported</td>
        </tr>
        <tr>
            <td>595</td>
            <td>Niralamba-janaih pujya</td>
            <td>Om Niralamba-janaih-pujyayai Namah</td>
            <td>Worshipped by the unsupported</td>
        </tr>
        <tr>
            <td>596</td>
            <td>Niraloka</td>
            <td>Om Niralokayai Namah</td>
            <td>Beyond sight</td>
        </tr>
        <tr>
            <td>597</td>
            <td>Niramaya</td>
            <td>Om Niramayayai Namah</td>
            <td>Free of disease</td>
        </tr>
        <tr>
            <td>598</td>
            <td>Nirantara</td>
            <td>Om Nirantarayai Namah</td>
            <td>Eternal</td>
        </tr>
        <tr>
            <td>599</td>
            <td>Nirasraya</td>
            <td>Om Nirasrayayai Namah</td>
            <td>Without shelter</td>
        </tr>
        <tr>
            <td>600</td>
            <td>Nirguna</td>
            <td>Om Nirgunayai Namah</td>
            <td>Beyond qualities</td>
        </tr>
        <tr>
            <td>601</td>
            <td>Nirvana-datri</td>
            <td>Om Nirvana-datrayai Namah</td>
            <td>Giver of liberation</td>
        </tr>
        <tr>
            <td>602</td>
            <td>Niscaitanya</td>
            <td>Om Niscaitanyayai Namah</td>
            <td>Without consciousness</td>
        </tr>
        <tr>
            <td>603</td>
            <td>Nisceta</td>
            <td>Om Niscetayai Namah</td>
            <td>Without perception</td>
        </tr>
        <tr>
            <td>604</td>
            <td>Niskulina</td>
            <td>Om Niskulinayai Namah</td>
            <td>Without lineage</td>
        </tr>
        <tr>
            <td>605</td>
            <td>Nisphala</td>
            <td>Om Nisphalayai Namah</td>
            <td>Without fruits</td>
        </tr>
        <tr>
            <td>606</td>
            <td>Nitambini</td>
            <td>Om Nitambinyai Namah</td>
            <td>Having beautiful hips</td>
        </tr>
        <tr>
            <td>607</td>
            <td>Niti</td>
            <td>Om Nitiyai Namah</td>
            <td>Morality</td>
        </tr>
        <tr>
            <td>608</td>
            <td>Niti-sastra-priya</td>
            <td>Om Niti-sastra-priyayai Namah</td>
            <td>Lover of moral scriptures</td>
        </tr>
        <tr>
            <td>609</td>
            <td>Nitya</td>
            <td>Om Nityayai Namah</td>
            <td>Eternal</td>
        </tr>
        <tr>
            <td>610</td>
            <td>Nitya-gehini</td>
            <td>Om Nitya-gehinyai Namah</td>
            <td>Eternal householder</td>
        </tr>
        <tr>
            <td>611</td>
            <td>Nitya-rupa</td>
            <td>Om Nitya-rupayai Namah</td>
            <td>Eternal form</td>
        </tr>
        <tr>
            <td>612</td>
            <td>Nitya-tarangini</td>
            <td>Om Nitya-taranginyai Namah</td>
            <td>Eternal waves</td>
        </tr>
        <tr>
            <td>613</td>
            <td>Nityananda-kari</td>
            <td>Om Nityananda-karinyai Namah</td>
            <td>Giver of eternal bliss</td>
        </tr>
        <tr>
            <td>614</td>
            <td>Nityangi</td>
            <td>Om Nityangiyai Namah</td>
            <td>With eternal body</td>
        </tr>
        <tr>
            <td>615</td>
            <td>Nivasa-kusala</td>
            <td>Om Nivasa-kusalayai Namah</td>
            <td>Expert in dwelling</td>
        </tr>
        <tr>
            <td>616</td>
            <td>Pada-padma-subha</td>
            <td>Om Pada-padma-subhayai Namah</td>
            <td>Auspicious lotus feet</td>
        </tr>
        <tr>
            <td>617</td>
            <td>Padma</td>
            <td>Om Padmayai Namah</td>
            <td>Lotus</td>
        </tr>
        <tr>
            <td>618</td>
            <td>Padma-hasta</td>
            <td>Om Padma-hastayai Namah</td>
            <td>Lotus-handed</td>
        </tr>
        <tr>
            <td>619</td>
            <td>Padmangaraga-samraga</td>
            <td>Om Padmangaraga-samragayai Namah</td>
            <td>Fragrant like lotus pollen</td>
        </tr>
        <tr>
            <td>620</td>
            <td>Palini</td>
            <td>Om Palinyai Namah</td>
            <td>Protector</td>
        </tr>
        <tr>
            <td>621</td>
            <td>Pana-pananda-dayini</td>
            <td>Om Pana-pananda-dayinyai Namah</td>
            <td>Giver of joy through drink</td>
        </tr>
        <tr>
            <td>622</td>
            <td>Pana-patra</td>
            <td>Om Pana-patrayai Namah</td>
            <td>Vessel for drinking</td>
        </tr>
        <tr>
            <td>623</td>
            <td>Panarthini</td>
            <td>Om Panarthinyai Namah</td>
            <td>One who offers beverages</td>
        </tr>
        <tr>
            <td>624</td>
            <td>Panasakta-tara</td>
            <td>Om Panasakta-tarayai Namah</td>
            <td>Highly devoted to drinking</td>
        </tr>
        <tr>
            <td>625</td>
            <td>Panca-sakti-svarupa</td>
            <td>Om Panca-sakti-svarupayai Namah</td>
            <td>Embodiment of five energies</td>
        </tr>
        <tr>
            <td>626</td>
            <td>Pandava-priya</td>
            <td>Om Pandava-priyayai Namah</td>
            <td>Beloved of the Pandavas</td>
        </tr>
        <tr>
            <td>627</td>
            <td>Pandava-sakhi</td>
            <td>Om Pandava-sakhyai Namah</td>
            <td>Friend of the Pandavas</td>
        </tr>
        <tr>
            <td>628</td>
            <td>Pandita</td>
            <td>Om Panditayai Namah</td>
            <td>Learned</td>
        </tr>
        <tr>
            <td>629</td>
            <td>Pandita-guna</td>
            <td>Om Pandita-gunayai Namah</td>
            <td>Possessing qualities of wisdom</td>
        </tr>
        <tr>
            <td>630</td>
            <td>Panditananda-karini</td>
            <td>Om Panditananda-karinyai Namah</td>
            <td>Giver of joy to the wise</td>
        </tr>
        <tr>
            <td>631</td>
            <td>Para</td>
            <td>Om Parayai Namah</td>
            <td>Supreme</td>
        </tr>
        <tr>
            <td>632</td>
            <td>Paranugraha-karini</td>
            <td>Om Paranugraha-karinyai Namah</td>
            <td>Giver of supreme grace</td>
        </tr>
        <tr>
            <td>633</td>
            <td>Parat</td>
            <td>Om Paratayai Namah</td>
            <td>Higher</td>
        </tr>
        <tr>
            <td>634</td>
            <td>Paripalana-kartri</td>
            <td>Om Paripalana-kartryai Namah</td>
            <td>Protector of all</td>
        </tr>
        <tr>
            <td>635</td>
            <td>Paripurna</td>
            <td>Om Paripurnayai Namah</td>
            <td>Complete</td>
        </tr>
        <tr>
            <td>636</td>
            <td>Parvatadhinivasa</td>
            <td>Om Parvatadhinivasayai Namah</td>
            <td>Dwelling on the mountain</td>
        </tr>
        <tr>
            <td>637</td>
            <td>Parvati</td>
            <td>Om Parvatyai Namah</td>
            <td>Daughter of the mountain</td>
        </tr>
        <tr>
            <td>638</td>
            <td>Pasa-sambandhini</td>
            <td>Om Pasa-sambandhinyai Namah</td>
            <td>Bound by ties</td>
        </tr>
        <tr>
            <td>639</td>
            <td>Pati-prana</td>
            <td>Om Pati-pranayai Namah</td>
            <td>Life force of the husband</td>
        </tr>
        <tr>
            <td>640</td>
            <td>Pati-vakya-vinodini</td>
            <td>Om Pati-vakya-vinodinyai Namah</td>
            <td>Pleasing in speech</td>
        </tr>
        <tr>
            <td>641</td>
            <td>Pati-vrata</td>
            <td>Om Pati-vratayai Namah</td>
            <td>Devoted to the husband</td>
        </tr>
        <tr>
            <td>642</td>
            <td>Paurnamasi</td>
            <td>Om Paurnamasiyai Namah</td>
            <td>Full moon-like</td>
        </tr>
        <tr>
            <td>643</td>
            <td>Pavitra</td>
            <td>Om Pavitryai Namah</td>
            <td>Pure</td>
        </tr>
        <tr>
            <td>644</td>
            <td>Pavitra-guna-siladhya</td>
            <td>Om Pavitra-guna-siladhyayai Namah</td>
            <td>Endowed with pure qualities</td>
        </tr>
        <tr>
            <td>645</td>
            <td>Pavitra-guna-simadhya</td>
            <td>Om Pavitra-guna-simadhyayai Namah</td>
            <td>Pure qualities personified</td>
        </tr>
        <tr>
            <td>646</td>
            <td>Pavitra-kula-dipani</td>
            <td>Om Pavitra-kula-dipaniyai Namah</td>
            <td>Light of the pure family</td>
        </tr>
        <tr>
            <td>647</td>
            <td>Pavitra-kula-dipika</td>
            <td>Om Pavitra-kula-dipikayai Namah</td>
            <td>Lamp of the pure lineage</td>
        </tr>
        <tr>
            <td>648</td>
            <td>Pavitrananda-dayini</td>
            <td>Om Pavitrananda-dayinyai Namah</td>
            <td>Giver of pure joy</td>
        </tr>
        <tr>
            <td>649</td>
            <td>Payasvini</td>
            <td>Om Payasvinyai Namah</td>
            <td>Abundant in milk</td>
        </tr>
        <tr>
            <td>650</td>
            <td>Payo-datri</td>
            <td>Om Payo-datrayai Namah</td>
            <td>Giver of milk</td>
        </tr>
        <tr>
            <td>651</td>
            <td>Payoda-da</td>
            <td>Om Payoda-dayai Namah</td>
            <td>Giver of rain</td>
        </tr>
        <tr>
            <td>652</td>
            <td>Pingala</td>
            <td>Om Pingalayai Namah</td>
            <td>Tawny-colored</td>
        </tr>
        <tr>
            <td>653</td>
            <td>Pipasa</td>
            <td>Om Pipasayai Namah</td>
            <td>Thirst</td>
        </tr>
        <tr>
            <td>654</td>
            <td>Pivari</td>
            <td>Om Pivaryai Namah</td>
            <td>Fat or plump</td>
        </tr>
        <tr>
            <td>655</td>
            <td>Pradhana-gopika</td>
            <td>Om Pradhana-gopikayai Namah</td>
            <td>Chief of the cowherd girls</td>
        </tr>
        <tr>
            <td>656</td>
            <td>Prakrty</td>
            <td>Om Prakrtyai Namah</td>
            <td> Nature</td>
        </tr>
        <tr>
            <td>657</td>
            <td>Prana</td>
            <td>Om Pranayai Namah</td>
            <td>Life</td>
        </tr>
        <tr>
            <td>658</td>
            <td>Prana-priya</td>
            <td>Om Prana-priyayai Namah</td>
            <td>Beloved by life</td>
        </tr>
        <tr>
            <td>659</td>
            <td>PPrana-rupa</td>
            <td>Om Prana-rupayai Namah</td>
            <td>Form of life</td>
        </tr>
        <tr>
            <td>660</td>
            <td>PPrana-rupiny</td>
            <td>Om Prana-rupayai Namah</td>
            <td>Life personified</td>
        </tr>
        <tr>
            <td>661</td>
            <td>Prana-sarvasva-dayini</td>
            <td>Om Prana-sarvasva-dayinyai Namah</td>
            <td>Giver of life’s essence</td>
        </tr>
        <tr>
            <td>662</td>
            <td>Prana-vimocana</td>
            <td>Om Prana-vimocanayai Namah</td>
            <td>Liberator of life</td>
        </tr>
        <tr>
            <td>663</td>
            <td>Pranava</td>
            <td>Om Pranavayai Namah</td>
            <td>Sacred syllable</td>
        </tr>
        <tr>
        <tr>
            <td>664</td>
            <td>Pranavartha-svarupini</td>
            <td>Om Pranavartha-svarupinyai Namah</td>
            <td>Embodiment of the sacred syllable</td>
        </tr>
        </tr>
        <tr>
        <tr>
            <td>665</td>
            <td>PPranavesi</td>
            <td>Om Pranavesiyai Namah</td>
            <td>Mistress of life</td>
        </tr>
        </tr>
        <tr>
            <td>666</td>
            <td>PPratar-asini</td>
            <td>Om Pratar-asinyai Namah</td>
            <td>Morning eater</td>
        </tr>
        <tr>
            <td>667</td>
            <td>Prema</td>
            <td>Om Premayai Namah</td>
            <td>Love</td>
        </tr>
        <tr>
            <td>668</td>
            <td>Prema-bhakta</td>
            <td>Om Prema-bhaktayai Namah</td>
            <td>Loving devotee</td>
        </tr>
        <tr>
            <td>669</td>
            <td>Prema-bhakti-prada</td>
            <td>Om Prema-bhakti-pradayai Namah</td>
            <td>Giver of loving devotion</td>
        </tr>
        <tr>
            <td>670</td>
            <td>Prema-bhakti-tarangini</td>
            <td>Om Prema-bhakti-taranginyai Namah</td>
            <td>Waves of loving devotion</td>
        </tr>
        <tr>
            <td>671</td>
            <td>Prema-datri</td>
            <td>Om Prema-datrayai Namah</td>
            <td>Giver of love</td>
        </tr>
        <tr>
            <td>672</td>
            <td>Prema-hara</td>
            <td>Om Prema-harayai Namah</td>
            <td>Captivating love</td>
        </tr>
        <tr>
            <td>673</td>
            <td>Prema-krida-paritangi</td>
            <td>Om Prema-krida-paritangyai Namah</td>
            <td>Enveloped in love play</td>
        </tr>
        <tr>
            <td>674</td>
            <td>Prema-priya</td>
            <td>Om Prema-priyayai Namah</td>
            <td>Beloved of love</td>
        </tr>
        <tr>
            <td>675</td>
            <td>Prema-rupa</td>
            <td>Om Prema-rupayai Namah</td>
            <td>Form of love</td>
        </tr>
        <tr>
            <td>676</td>
            <td>Prema-saktimayi</td>
            <td>Om Prema-saktimayyai Namah</td>
            <td>Filled with loving energy</td>
        </tr>
        <tr>
            <td>677</td>
            <td>Prema-tarangika</td>
            <td>Om Prema-tarangikayai Namah</td>
            <td>Waves of love</td>
        </tr>
        <tr>
            <td>678</td>
            <td>Premalingana-siddhangi</td>
            <td>Om Premalingana-siddhangyai Namah</td>
            <td>Perfect embrace of love</td>
        </tr>
        <tr>
            <td>679</td>
            <td>Premananda-tarangini</td>
            <td>Om Premananda-taranginyai Namah</td>
            <td>Waves of blissful love</td>
        </tr>
        <tr>
            <td>680</td>
            <td>Premartha-dayini</td>
            <td>Om Premartha-dayinyai Namah</td>
            <td>Giver of the essence of love</td>
        </tr>
        <tr>
            <td>681</td>
            <td>Preta-prana-vinasini</td>
            <td>Om Preta-prana-vinasinyai Namah</td>
            <td>Destroyer of restless spirits</td>
        </tr>
        <tr>
            <td>682</td>
            <td>Priti-janani</td>
            <td>Om Priti-jananyai Namah</td>
            <td>Creator of affection</td>
        </tr>
        <tr>
            <td>683</td>
            <td>Priya</td>
            <td>Om Priyayai Namah</td>
            <td>Beloved</td>
        </tr>
        <tr>
            <td>684</td>
            <td>Pundarikaksa-gehini</td>
            <td>Om Pundarikaksa-gehinyai Namah</td>
            <td>Companion of the lotus-eyed one</td>
        </tr>
        <tr>
            <td>685</td>
            <td>Pundarikaksa-nilaya</td>
            <td>Om Pundarikaksa-nilayayai Namah</td>
            <td>Abode of the lotus-eyed one</td>
        </tr>
        <tr>
            <td>686</td>
            <td>Pundarikaksa-sevya</td>
            <td>Om Pundarikaksa-sevyayai Namah</td>
            <td>Served by the lotus-eyed one</td>
        </tr>
        <tr>
            <td>687</td>
            <td>Pundarikaksa-vallabha</td>
            <td>Om Pundarikaksa-vallabhayai Namah</td>
            <td>Beloved of the lotus-eyed one</td>
        </tr>
        <tr>
            <td>688</td>
            <td>Purnatara</td>
            <td>Om Purnatarayai Namah</td>
            <td>Fully complete</td>
        </tr>
        <tr>
            <td>689</td>
            <td>Pusti</td>
            <td>Om Pustyai Namah</td>
            <td>Nourishment</td>
        </tr>
        <tr>
            <td>690</td>
            <td>Puta-gatra</td>
            <td>Om Puta-gatrayai Namah</td>
            <td>Pure-bodied</td>
        </tr>
        <tr>
            <td>691</td>
            <td>Radha-ramana-kanta</td>
            <td>Om Radha-ramana-kantayai Namah</td>
            <td>Beloved of Radha’s lover</td>
        </tr>
        <tr>
            <td>692</td>
            <td>Radhana-rupini</td>
            <td>Om Radhana-rupinyai Namah</td>
            <td>Embodiment of worship</td>
        </tr>
        <tr>
            <td>693</td>
            <td>Radhika</td>
            <td>Om Radhikayai Namah</td>
            <td>One who brings delight</td>
        </tr>
        <tr>
            <td>694</td>
            <td>Radhya</td>
            <td>Om Radhyayai Namah</td>
            <td>Worthy of worship</td>
        </tr>
        <tr>
            <td>695</td>
            <td>Radhyanandaprada</td>
            <td>Om Radhyanandapradayai Namah</td>
            <td>Giver of bliss to worshippers</td>
        </tr>
        <tr>
            <td>696</td>
            <td>Ragini</td>
            <td>Om Raginayai Namah</td>
            <td>Musical mode</td>
        </tr>
        <tr>
            <td>697</td>
            <td>Raksasi-nasini</td>
            <td>Om Raksasi-nasinyai Namah</td>
            <td>Destroyer of demons</td>
        </tr>
        <tr>
            <td>698</td>
            <td>Rama</td>
            <td>Om Ramayai Namah</td>
            <td>Pleasing</td>
        </tr>
        <tr>
            <td>699</td>
            <td>Rama-rata</td>
            <td>Om Rama-ratayai Namah</td>
            <td>Engaged in pleasing others</td>
        </tr>
        <tr>
            <td>700</td>
            <td>Rambha</td>
            <td>Om Rambhayai Namah</td>
            <td>Enchantress</td>
        </tr>
        <tr>
            <td>701</td>
            <td>Ramesvari</td>
            <td>Om Ramesvariyai Namah</td>
            <td>Mistress of Ramesh</td>
        </tr>
        <tr>
            <td>702</td>
            <td>Rasa</td>
            <td>Om Rasayai Namah</td>
            <td>Essence</td>
        </tr>
        <tr>
            <td>703</td>
            <td>Rasa-gamya</td>
            <td>Om Rasa-gamyayai Namah</td>
            <td>Accessible through essence</td>
        </tr>
        <tr>
            <td>704</td>
            <td>Rasa-krida</td>
            <td>Om Rasa-kridayai Namah</td>
            <td>Playful in essence</td>
        </tr>
        <tr>
            <td>705</td>
            <td>Rasa-krida-kari</td>
            <td>Om Rasa-krida-karinyai Namah</td>
            <td>Performer of essence play</td>
        </tr>
        <tr>
            <td>706</td>
            <td>Rasa-mandala-madhyastha</td>
            <td>Om Rasa-mandala-madhyasthayai Namah</td>
            <td>Center of the circle of essence</td>
        </tr>
        <tr>
            <td>707</td>
            <td>Rasa-mandala-sevya</td>
            <td>Om Rasa-mandala-sevyayai Namah</td>
            <td>Served in the circle of essence</td>
        </tr>
        <tr>
            <td>708</td>
            <td>Rasa-mandala-sobhita</td>
            <td>Om Rasa-mandala-sobhitayai Namah</td>
            <td>Glorious in the circle of essence</td>
        </tr>
        <tr>
            <td>709</td>
            <td>Rasa-priya</td>
            <td>Om Rasa-priyayai Namah</td>
            <td>Beloved of essence</td>
        </tr>
        <tr>
            <td>710</td>
            <td>Rasa-rati</td>
            <td>Om Rasa-ratayai Namah</td>
            <td>Loving essence</td>
        </tr>
        <tr>
            <td>711</td>
            <td>Rasa-sundari</td>
            <td>Om Rasa-sundaryai Namah</td>
            <td>Beautiful in essence</td>
        </tr>
        <tr>
            <td>712</td>
            <td>Rasadhisthatr-devata</td>
            <td>Om Rasadhisthatr-devatayai Namah</td>
            <td>Presiding deity of essence</td>
        </tr>
        <tr>
            <td>713</td>
            <td>Rasasakta</td>
            <td>Om Rasasaktayai Namah</td>
            <td>Attached to essence</td>
        </tr>
        <tr>
            <td>714</td>
            <td>Rasesvari</td>
            <td>Om Rasesvariyai Namah</td>
            <td>Mistress of essence</td>
        </tr>
        <tr>
            <td>715</td>
            <td>Rasika</td>
            <td>Om Rasikayai Namah</td>
            <td>Expert in essence</td>
        </tr>
        <tr>
            <td>716</td>
            <td>Rasikananda</td>
            <td>Om Rasikanandayai Namah</td>
            <td>Joy of the essence expert</td>
        </tr>
        <tr>
            <td>717</td>
            <td>Samhara-karini</td>
            <td>Om Samhara-karinyai Namah</td>
            <td>Destroyer of evil</td>
        </tr>
        <tr>
            <td>718</td>
            <td>Samhara-sabdadhya</td>
            <td>Om Samhara-sabdadhyayai Namah</td>
            <td>Filled with destructive sounds</td>
        </tr>
        <tr>
            <td>719</td>
            <td>Samhartri</td>
            <td>Om Samhartryai Namah</td>
            <td>Destroyer</td>
        </tr>
        <tr>
            <td>720</td>
            <td>Samsara-nasini</td>
            <td>Om Samsara-nasinyai Namah</td>
            <td>Destroyer of worldly existence</td>
        </tr>
        <tr>
            <td>721</td>
            <td>Samsara-ragini</td>
            <td>Om Samsara-raginyai Namah</td>
            <td>Attached to worldly existence</td>
        </tr>
        <tr>
            <td>722</td>
            <td>Samsararnava-para-da</td>
            <td>Om Samsararnava-para-dayai Namah</td>
            <td>Ferry across the ocean of existence</td>
        </tr>
        <tr>
            <td>723</td>
            <td>Samudra-jala-vasika</td>
            <td>Om Samudra-jala-vasikayai Namah</td>
            <td>Residing in ocean waters</td>
        </tr>
        <tr>
            <td>724</td>
            <td>Samudra-jala-vasini</td>
            <td>Om Samudra-jala-vasinyai Namah</td>
            <td>Dwelling in ocean waters</td>
        </tr>
        <tr>
            <td>725</td>
            <td>Samudra-mathanodbhuta</td>
            <td>Om Samudra-mathanodbhutayai Namah</td>
            <td>Emerged from churning of the ocean</td>
        </tr>
        <tr>
            <td>726</td>
            <td>Samudramrta-rupa</td>
            <td>Om Samudramrta-rupayai Namah</td>
            <td>Form of ocean nectar</td>
        </tr>
        <tr>
            <td>727</td>
            <td>Sandrananda-visarada</td>
            <td>Om Sandrananda-visaradayai Namah</td>
            <td>Expert in deep bliss</td>
        </tr>
        <tr>
            <td>728</td>
            <td>Sanga-dosa-vinasini</td>
            <td>Om Sanga-dosa-vinasinyai Namah</td>
            <td>Destroyer of attachment flaws</td>
        </tr>
        <tr>
            <td>729</td>
            <td>Sankata</td>
            <td>Om Sankatayai Namah</td>
            <td>Distress</td>
        </tr>
        <tr>
            <td>730</td>
            <td>Sankhaspada</td>
            <td>Om Sankhaspadayai Namah</td>
            <td>Abode of conch sound</td>
        </tr>
        <tr>
            <td>731</td>
            <td>Sannyasa-dharma-kusala</td>
            <td>Om Sannyasa-dharma-kusalayai Namah</td>
            <td>Expert in ascetic duties</td>
        </tr>
        <tr>
            <td>732</td>
            <td>Sannyasesi</td>
            <td>Om Sannyasesiyai Namah</td>
            <td>Mistress of ascetics</td>
        </tr>
        <tr>
            <td>733</td>
            <td>Sara-bhuta</td>
            <td>Om Sara-bhutayai Namah</td>
            <td>Quintessential being</td>
        </tr>
        <tr>
            <td>734</td>
            <td>Sara-carma-dhara</td>
            <td>Om Sara-carma-dharayai Namah</td>
            <td>Bearer of essential skin</td>
        </tr>
        <tr>
            <td>735</td>
            <td>Sarac-candra-mukhi</td>
            <td>Om Sarac-candra-mukhiyai Namah</td>
            <td>Moon-faced</td>
        </tr>
        <tr>
            <td>736</td>
            <td>Sarada</td>
            <td>Om Saradayai Namah</td>
            <td>Goddess of wisdom</td>
        </tr>
        <tr>
            <td>737</td>
            <td>Saradanvita</td>
            <td>Om Saradanvitayai Namah</td>
            <td>Endowed with wisdom</td>
        </tr>
        <tr>
            <td>738</td>
            <td>Saran-mukhi</td>
            <td>Om Saran-mukhiyai Namah</td>
            <td>Graceful-faced</td>
        </tr>
        <tr>
            <td>739</td>
            <td>Sarasvati</td>
            <td>Om Sarasvatyai Namah</td>
            <td>Goddess of learning</td>
        </tr>
        <tr>
            <td>740</td>
            <td>Sarpini</td>
            <td>Om Sarpinyai Namah</td>
            <td>Serpent-like</td>
        </tr>
        <tr>
            <td>741</td>
            <td>Sarva</td>
            <td>Om Sarvayai Namah</td>
            <td>Universal</td>
        </tr>
        <tr>
            <td>742</td>
            <td>Sarva-bhutanam</td>
            <td>Om Sarva-bhutanamyai Namah</td>
            <td>Of all beings</td>
        </tr>
        <tr>
            <td>743</td>
            <td>Sarva-daityanam</td>
            <td>Om Sarva-daityanamyai Namah</td>
            <td>Of all demons</td>
        </tr>
        <tr>
            <td>744</td>
            <td>Sarva-jivesvari</td>
            <td>Om Sarva-jivesvariyai Namah</td>
            <td>Mistress of all beings</td>
        </tr>
        <tr>
            <td>745</td>
            <td>Sarva-karana-karana</td>
            <td>Om Sarva-karana-karanayai Namah</td>
            <td>Cause of all causes</td>
        </tr>
        <tr>
            <td>746</td>
            <td>Sarva-mangala</td>
            <td>Om Sarva-mangalayai Namah</td>
            <td>All-auspicious</td>
        </tr>
        <tr>
            <td>747</td>
            <td>Sarva-vandya</td>
            <td>Om Sarva-vandyayai Namah</td>
            <td>Worshipped by all</td>
        </tr>
        <tr>
            <td>748</td>
            <td>Sarvaga</td>
            <td>Om Sarvagayai Namah</td>
            <td>Omnipresent</td>
        </tr>
        <tr>
            <td>749</td>
            <td>Sarvajnatva-vidhatri</td>
            <td>Om Sarvajnatva-vidhatryai Namah</td>
            <td>Bestower of omniscience</td>
        </tr>
        <tr>
            <td>750</td>
            <td>Sarvanga-sundari</td>
            <td>Om Sarvanga-sundaryai Namah</td>
            <td>Beautiful in all aspects</td>
        </tr>
        <tr>
            <td>751</td>
            <td>Sasi-koti-sama-prabha</td>
            <td>Om Sasi-koti-sama-prabhayai Namah</td>
            <td>Radiant like millions of moons</td>
        </tr>
        <tr>
            <td>752</td>
            <td>Sasi-sekhara</td>
            <td>Om Sasi-sekharayai Namah</td>
            <td>Crowned with the moon</td>
        </tr>
        <tr>
            <td>753</td>
            <td>Sasi-su-sobhana</td>
            <td>Om Sasi-su-sobhanayai Namah</td>
            <td>Radiant like the moon</td>
        </tr>
        <tr>
            <td>754</td>
            <td>Sastra-rupa</td>
            <td>Om Sastra-rupayai Namah</td>
            <td>Form of scriptures</td>
        </tr>
        <tr>
            <td>755</td>
            <td>Sastra-siddhanta-karini</td>
            <td>Om Sastra-siddhanta-karinyai Namah</td>
            <td>Interpreter of scriptures</td>
        </tr>
        <tr>
            <td>756</td>
            <td>Sati</td>
            <td>Om Satiyai Namah</td>
            <td>Virtuous woman</td>
        </tr>
        <tr>
            <td>757</td>
            <td>Satya</td>
            <td>Om Satyayai Namah</td>
            <td>Truth</td>
        </tr>
        <tr>
            <td>758</td>
            <td>Satya-prada</td>
            <td>Om Satya-pradayai Namah</td>
            <td>Giver of truth</td>
        </tr>
        <tr>
            <td>759</td>
            <td>Satya-rupa</td>
            <td>Om Satya-rupayai Namah</td>
            <td>Form of truth</td>
        </tr>
        <tr>
            <td>760</td>
            <td>Satyavati</td>
            <td>Om Satyavatayai Namah</td>
            <td>Truthful</td>
        </tr>
        <tr>
            <tr>
            <td>761</td>
            <td>Saumya</td>
            <td>Om Saumyayai Namah</td>
            <td>Gentle</td>
        </tr>
        </tr>
        <tr>
            <td>762</td>
            <td>Saumya-datri</td>
            <td>Om Saumya-datrayai Namah</td>
            <td>Giver of gentleness</td>
        </tr>
        <tr>
        <tr>
            <td>763</td>
            <td>Saumya-kulodvaha</td>
            <td>Om Saumya-kulodvahay</td>
            <td>Noble and gentle lineage</td>
        </tr>
        </tr>
        <tr>
        <tr>
            <td>764</td>
            <td>Savala</td>
            <td>Om Savalayai Namah</td>
            <td>Beautifully mottled</td>
        </tr>
        </tr>
        <tr>
        <tr>
            <td>765</td>
            <td>Savitri</td>
            <td>Om Savitryai Namah</td>
            <td>Goddess of the sun</td>
        </tr>
        </tr>
        <tr>
            <tr>
            <td>766</td>
            <td>Sesa</td>
            <td>Om Sesayayai Namah</td>
            <td>Residual</td>
        </tr>
        </tr>
        <tr>
            <tr>
            <td>767</td>
            <td>Sesavati</td>
            <td>Om Sesavatyai Namah</td>
            <td>Possessor of remnants</td>
        </tr>
        </tr>
        <tr>
            <tr>
            <td>768</td>
            <td>Seva-sevya</td>
            <td>Om Seva-sevyayai Namah</td>
            <td>Worthy of service</td>
        </tr>
        </tr>
        <tr>
            <tr>
            <td>769</td>
            <td>Sevakananda-dayika</td>
            <td>Om Sevakananda-dayikayai Namah</td>
            <td>Giver of joy to servants</td>
        </tr>
        </tr>
        <tr>
            <tr>
            <td>770</td>
            <td>Sevitepsita-sarvada</td>
            <td>Om Sevitepsita-sarvadayai Namah</td>
            <td>Always fulfills desires of devotees</td>
        </tr>
        </tr>
        <tr>
            <td>771</td>
            <td>Sevya</td>
            <td>OKm Sevyayai Namah</td>
            <td>Worthy of worship</td>
        </tr>
        <tr>
            <td>772</td>
            <td>Siddha</td>
            <td>Om Siddhayai Namah</td>
            <td>Perfect</td>
        </tr>
        <tr>
            <td>773</td>
            <td>Siddha-ksetra-nivasini</td>
            <td>Om Siddha-ksetra-nivasinyai Namah</td>
            <td>Residing in sacred places</td>
        </tr>
        <tr>
            <td>774</td>
            <td>Siddha-rupa</td>
            <td>Om Siddha-rupayai Namah</td>
            <td>Form of perfection</td>
        </tr>
        <tr>
            <td>775</td>
            <td>Siddha-yogini</td>
            <td>Om Siddha-yoginyai Namah</td>
            <td>Perfect yogini</td>
        </tr>
        <tr>
            <td>776</td>
            <td>Sila-tala-nivasini</td>
            <td>Om Sila-tala-nivasinyai Namah</td>
            <td>Dwelling on rocks</td>
        </tr>
        <tr>
            <td>777</td>
            <td>Sindhu-kanya</td>
            <td>Om Sindhu-kanyayai Namah</td>
            <td>Daughter of the ocean</td>
        </tr>
        <tr>
            <td>778</td>
            <td>Sirisa-kusumakrti</td>
            <td>Om Sirisa-kusumakrtayai Namah</td>
            <td>Formed like a Sirisa flower</td>
        </tr>
        <tr>
            <td>779</td>
            <td>Sirisa-kusumamoda</td>
            <td>Om Sirisa-kusumamodayai Namah</td>
            <td>Fragrance of Sirisa flowers</td>
        </tr>
        <tr>
            <td>780</td>
            <td>Sirisa-kusumojjvala</td>
            <td>Om Sirisa-kusumojjvalayai Namah</td>
            <td>Radiant like Sirisa flowers</td>
        </tr>
        <tr>
            <td>781</td>
            <td>Sirisa-mrdhvi</td>
            <td>Om Sirisa-mrdhviyai Namah</td>
            <td>Soft as Sirisa flowers</td>
        </tr>
        <tr>
            <td>782</td>
            <td>Sisira</td>
            <td>Om Sisirayai Namah</td>
            <td>Cool</td>
        </tr>
        <tr>
            <td>783</td>
            <td>Sita</td>
            <td>Om Sitayai Namah</td>
            <td>Furrowed, goddess of agriculture</td>
        </tr>
        <tr>
            <td>784</td>
            <td>Sitala</td>
            <td>Om Sitalayai Namah</td>
            <td>Coolness personified</td>
        </tr>
        <tr>
            <td>785</td>
            <td>Siva</td>
            <td>Om Sivayai Namah</td>
            <td>Auspicious</td>
        </tr>
        <tr>
            <td>786</td>
            <td>Siva-bhakta</td>
            <td>Om Siva-bhaktayai Namah</td>
            <td>Devotee of Shiva</td>
        </tr>
        <tr>
            <td>787</td>
            <td>Siva-bhakti-da</td>
            <td>Om Siva-bhakti-dayai Namah</td>
            <td>Giver of devotion to Shiva</td>
        </tr>
        <tr>
            <td>788</td>
            <td>Siva-bhakti-sukhanvita</td>
            <td>Om Siva-bhakti-sukhanvitayai Namah</td>
            <td>Endowed with Shiva’s devotion</td>
        </tr>
        <tr>
            <td>789</td>
            <td>Siva-brahma-hari-priya</td>
            <td>Om Siva-brahma-hari-priyayai Namah</td>
            <td>Beloved of Shiva, Brahma, Vishnu</td>
        </tr>
        <tr>
            <td>790</td>
            <td>Siva-kroda</td>
            <td>Om Siva-krodayai Namah</td>
            <td>Enclosed by Shiva</td>
        </tr>
        <tr>
            <td>791</td>
            <td>Siva-prana</td>
            <td>Om Siva-pranayai Namah</td>
            <td>Life force of Shiva</td>
        </tr>
        <tr>
            <td>792</td>
            <td>Siva-sakti-svarupa</td>
            <td>Om Siva-sakti-svarupayai Namah</td>
            <td>Embodiment of Shiva’s power</td>
        </tr>
        <tr>
            <td>793</td>
            <td>Sivanvita</td>
            <td>Om Sivanvitayai Namah</td>
            <td>Associated with Shiva</td>
        </tr>
        <tr>
            <td>794</td>
            <td>Sivardhanga-viharini</td>
            <td>Om Sivardhanga-viharinyai Namah</td>
            <td>Residing in Shiva’s body</td>
        </tr>
        <tr>
            <td>795</td>
            <td>Smrti</td>
            <td>Om Smrtyai Namah</td>
            <td>Memory</td>
        </tr>
        <tr>
            <td>796</td>
            <td>Sokanasini</td>
            <td>Om Sokanasinyai Namah</td>
            <td>Destroyer of sorrow</td>
        </tr>
        <tr>
            <td>797</td>
            <td>Sokorahita</td>
            <td>Om Sokorahitayai Namah</td>
            <td>Free from sorrow</td>
        </tr>
        <tr>
            <td>798</td>
            <td>Sranti</td>
            <td>Om Srantyai Namah</td>
            <td>Exhaustion</td>
        </tr>
        <tr>
            <td>799</td>
            <td>Srestha</td>
            <td>Om Sresthayai Namah</td>
            <td>The best</td>
        </tr>
        <tr>
            <td>800</td>
            <td>Srestha-rupa</td>
            <td>Om Srestha-rupayai Namah</td>
            <td>Supreme form</td>
        </tr>
        <tr>
            <td>801</td>
            <td>Sri-ganesa</td>
            <td>Om Sri-ganesayai Namah</td>
            <td>Lord of Sri’s followers</td>
        </tr>
        <tr>
            <td>802</td>
            <td>Sri-garbha</td>
            <td>Om Sri-garbhayai Namah</td>
            <td>Womb of prosperity</td>
        </tr>
        <tr>
            <td>803</td>
            <td>Sri-hara</td>
            <td>Om Sri-harayai Namah</td>
            <td>Remover of obstacles</td>
        </tr>
        <tr>
            <td>804</td>
            <td>Sri-kama</td>
            <td>Om Sri-kamayai Namah</td>
            <td>Desire for prosperity</td>
        </tr>
        <tr>
            <td>805</td>
            <td>Sri-kriya-rupini</td>
            <td>Om Sri-kriya-rupinyai Namah</td>
            <td>Form of auspicious actions</td>
        </tr>
        <tr>
            <td>806</td>
            <td>Sri-krsna-bhajananvita</td>
            <td>Om Sri-krsna-bhajananvitayai Namah</td>
            <td>Devoted to Lord Krishna</td>
        </tr>
        <tr>
            <td>807</td>
            <td>Sri-krsna-bhavanamoda</td>
            <td>Om Sri-krsna-bhavanamodayai Namah</td>
            <td>Enjoyer of Krishna’s thoughts</td>
        </tr>
        <tr>
            <td>808</td>
            <td>Sri-krsna-rahita</td>
            <td>Om Sri-krsna-rahitayai Namah</td>
            <td>Detached from Krishna</td>
        </tr>
        <tr>
            <td>809</td>
            <td>Sri-nitamba</td>
            <td>Om Sri-nitambayai Namah</td>
            <td>Beautiful hips</td>
        </tr>
        <tr>
            <td>810</td>
            <td>Sri-nivasa</td>
            <td>Om Sri-nivasayai Namah</td>
            <td>Abode of prosperity</td>
        </tr>
        <tr>
            <td>811</td>
            <td>Sri-prada</td>
            <td>Om Sri-pradayai Namah</td>
            <td>Giver of prosperity</td>
        </tr>
        <tr>
            <td>812</td>
            <td>Sri-radha</td>
            <td>Om Sri-radhayai Namah</td>
            <td>Prosperity and delight</td>
        </tr>
        <tr>
            <td>813</td>
            <td>Sri-rupa</td>
            <td>Om Sri-rupayai Namah</td>
            <td>Beautiful form</td>
        </tr>
        <tr>
            <td>814</td>
            <td>Sri-svarupasrita</td>
            <td>Om Sri-svarupasritayai Namah</td>
            <td>Protected by divine forms</td>
        </tr>
        <tr>
            <td>815</td>
            <td>Sri-svarupini</td>
            <td>Om Sri-svarupinyai Namah</td>
            <td>Divine embodiment</td>
        </tr>
        <tr>
            <td>816</td>
            <td>Srida</td>
            <td>Om Sridayai Namah</td>
            <td>Giver of prosperity</td>
        </tr>
        <tr>
            <td>817</td>
            <td>Sridamananda-datri</td>
            <td>Om Sridamananda-datrayai Namah</td>
            <td>Giver of joy to Sridama</td>
        </tr>
        <tr>
            <td>818</td>
            <td>Sridamesvara-vallabha</td>
            <td>Om Sridamesvara-vallabhayai Namah</td>
            <td>Beloved of Sridama’s Lord</td>
        </tr>
        <tr>
            <td>819</td>
            <td>Srila</td>
            <td>Om Srilayai Namah</td>
            <td>Graceful</td>
        </tr>
        <tr>
            <td>820</td>
            <td>Srimati</td>
            <td>Om Srimatyai Namah</td>
            <td>Divine consort</td>
        </tr>
        <tr>
            <td>821</td>
            <td>Srisa</td>
            <td>Om Srisayai Namah</td>
            <td>Mistress of wealth</td>
        </tr>
        <tr>
            <td>822</td>
            <td>Srkkani-parimohita</td>
            <td>Om Srkkani-parimohitayai Namah</td>
            <td>Enchanting</td>
        </tr>
        <tr>
            <td>823</td>
            <td>Srnkhala</td>
            <td>Om Srnkhalayai Namah</td>
            <td>Chained</td>
        </tr>
        <tr>
            <td>824</td>
            <td>Srsti-sthiti-kari</td>
            <td>Om Srsti-sthiti-karinyai Namah</td>
            <td>Creator and sustainer</td>
        </tr>
        <tr>
            <td>825</td>
            <td>Sruti</td>
            <td>Om Srutyai Namah</td>
            <td>Vedas</td>
        </tr>
        <tr>
            <td>826</td>
            <td>Sruti-priya</td>
            <td>Om Sruti-priyayai Namah</td>
            <td>Beloved of the Vedas</td>
        </tr>
        <tr>
            <td>827</td>
            <td>Sthana-datri</td>
            <td>Om Sthana-datrayai Namah</td>
            <td>Giver of positions</td>
        </tr>
        <tr>
            <td>828</td>
            <td>Sthana-rupa</td>
            <td>Om Sthana-rupayai Namah</td>
            <td>Form of positions</td>
        </tr>
        <tr>
            <td>829</td>
            <td>Sthira</td>
            <td>Om Sthirayai Namah</td>
            <td>Steady</td>
        </tr>
        <tr>
            <td>830</td>
            <td>Sthiti-vinodini</td>
            <td>Om Sthiti-vinodinyai Namah</td>
            <td>Delightful sustenance</td>
        </tr>
        <tr>
            <td>831</td>
            <td>Sthiti</td>
            <td>Om Sthityai Namah</td>
            <td>Maintenance</td>
        </tr>
        <tr>
            <td>832</td>
            <td>Su-gopi</td>
            <td>Om Su-gopiyai Namah</td>
            <td>Beautiful cowherd girl</td>
        </tr>
        <tr>
            <td>833</td>
            <td>Su-komala</td>
            <td>Om Su-komalayai Namah</td>
            <td>Very delicate</td>
        </tr>
        <tr>
            <td>834</td>
            <td>Su-kulina</td>
            <td>Om Su-kulinayai Namah</td>
            <td>Noble lineage</td>
        </tr>
        <tr>
            <td>835</td>
            <td>Su-locana</td>
            <td>Om Su-locanayai Namah</td>
            <td>Beautiful eyes</td>
        </tr>
        <tr>
            <td>836</td>
            <td>Su-vesini</td>
            <td>Om Su-vesinyai Namah</td>
            <td>Well-dressed</td>
        </tr>
        <tr>
            <td>837</td>
            <td>Subalasya</td>
            <td>Om Subalasyai Namah</td>
            <td>Subala’s delight</td>
        </tr>
        <tr>
            <td>838</td>
            <td>Subha</td>
            <td>Om Subhayai Namah</td>
            <td>Auspicious</td>
        </tr>
        <tr>
            <td>839</td>
            <td>Subhangi</td>
            <td>Om Subhangyai Namah</td>
            <td>Beautifully formed</td>
        </tr>
        <tr>
            <td>840</td>
            <td>Subhankari</td>
            <td>Om Subhankarinyai Namah</td>
            <td>Bestower of auspiciousness</td>
        </tr>
        <tr>
            <td>841</td>
            <td>Suci</td>
            <td>Om Sucyai Namah</td>
            <td>Pure</td>
        </tr>
        <tr>
            <td>842</td>
            <td>Suddha-sattva</td>
            <td>Om Suddha-sattvayai Namah</td>
            <td>Pure existence</td>
        </tr>
        <tr>
            <td>843</td>
            <td>Sukadeva-gunatita</td>
            <td>Om Sukadeva-gunatitayai Namah</td>
            <td>Beyond Sukadeva’s qualities</td>
        </tr>
        <tr>
            <td>844</td>
            <td>Sukadeva-priya</td>
            <td>Om Sukadeva-priyayai Namah</td>
            <td>Beloved of Sukadeva</td>
        </tr>
        <tr>
            <td>845</td>
            <td>Sukhesvari</td>
            <td>Om Sukhesvariyai Namah</td>
            <td>Mistress of happiness</td>
        </tr>
        <tr>
            <td>846</td>
            <td>Suki</td>
            <td>Om Sukiyai Namah</td>
            <td>Joyful</td>
        </tr>
        <tr>
            <td>847</td>
            <td>Suksma</td>
            <td>Om Suksmyai Namah</td>
            <td>Subtle</td>
        </tr>
        <tr>
            <td>848</td>
            <td>Sulaksmana</td>
            <td>Om Sulaksmanyai Namah</td>
            <td>Delicate beauty</td>
        </tr>
        <tr>
            <td>849</td>
            <td>Sunya</td>
            <td>Om Sunyayai Namah</td>
            <td>Void</td>
        </tr>
        <tr>
            <td>850</td>
            <td>Sunya-sthana-sthita</td>
            <td>Om Sunya-sthana-sthitayai Namah</td>
            <td>Residing in void places</td>
        </tr>
        <tr>
            <td>851</td>
            <td>Susevini</td>
            <td>Om Susevinyai Namah</td>
            <td>Easy to serve</td>
        </tr>
        <tr>
            <td>852</td>
            <td>Svarga-laksmi</td>
            <td>Om Svarga-laksmiyai Namah</td>
            <td>Celestial wealth</td>
        </tr>
        <tr>
            <td>853</td>
            <td>Svasa</td>
            <td>Om Svasayai Namah</td>
            <td>Breath</td>
        </tr>
        <tr>
            <td>854</td>
            <td>Svayam</td>
            <td>Om Svayamyai Namah</td>
            <td>Self</td>
        </tr>
        <tr>
            <td>855</td>
            <td>Svayam-prabha</td>
            <td>Om Svayam-prabhayai Namah</td>
            <td>Self-illuminated</td>
        </tr>
        <tr>
            <td>856</td>
            <td>Sveta</td>
            <td>Om Svetayai Namah</td>
            <td>White</td>
        </tr>
        <tr>
            <td>857</td>
            <td>Sveta-campaka-varnabha</td>
            <td>Om Sveta-campaka-varnabhayai Namah</td>
            <td>Radiant like white champaka flowers</td>
        </tr>
        <tr>
            <td>858</td>
            <td>Syama</td>
            <td>Om Syamayai Namah</td>
            <td>Dark</td>
        </tr>
        <tr>
            <td>859</td>
            <td>Syama-sakhi</td>
            <td>Om Syama-sakhyai Namah</td>
            <td>Companion of Syama</td>
        </tr>
        <tr>
            <td>860</td>
            <td>Syama-vallabha</td>
            <td>Om Syama-vallabhayai Namah</td>
            <td>Beloved of Syama</td>
        </tr>
        <tr>
            <td>861</td>
            <td>Syamala</td>
            <td>Om Syamalayai Namah</td>
            <td>Dark-hued</td>
        </tr>
        <tr>
            <td>862</td>
            <td>Taitilananda-paritosaka</td>
            <td>Om Taitilananda-paritosakayai Namah</td>
            <td>Delighter in sesame oil rituals</td>
        </tr>
        <tr>
            <td>863</td>
            <td>Takra-yukta</td>
            <td>Om Takra-yuktayai Namah</td>
            <td>Associated with buttermilk</td>
        </tr>
        <tr>
            <td>864</td>
            <td>Tami</td>
            <td>Om Tamiyai Namah</td>
            <td>Darkness</td>
        </tr>
        <tr>
            <td>865</td>
            <td>Tamisra</td>
            <td>Om Tamisrayai Namah</td>
            <td>Night</td>
        </tr>
        <tr>
            <td>866</td>
            <td>Tarkali</td>
            <td>Om Tarkaliyai Namah</td>
            <td>Assertive</td>
        </tr>
        <tr>
            <td>867</td>
            <td>Tejasvini</td>
            <td>Om Tejasvinyai Namah</td>
            <td>Radiant</td>
        </tr>
        <tr>
            <td>868</td>
            <td>Tejo-rupa</td>
            <td>Om Tejo-rupayai Namah</td>
            <td>Form of energy</td>
        </tr>
        <tr>
            <td>869</td>
            <td>Thai-thai-sabda-sakti-prakasini</td>
            <td>Om Thai-thai-sabda-sakti-prakasinayai Namah</td>
            <td>Revealer of sounds</td>
        </tr>
        <tr>
            <td>870</td>
            <td>Timingla-kulamoda</td>
            <td>Om Timingla-kulamodayai Namah</td>
            <td>Joy of aquatic creatures</td>
        </tr>
        <tr>
            <td>871</td>
            <td>Tira-gebini</td>
            <td>Om Tira-gebinyai Namah</td>
            <td>Shore-reaching</td>
        </tr>
        <tr>
            <td>872</td>
            <td>Trailokya-mata</td>
            <td>Om Trailokya-matayai Namah</td>
            <td>Mother of the three worlds</td>
        </tr>
        <tr>
            <td>873</td>
            <td>Trailokya-sundari</td>
            <td>Om Trailokya-sundaryai Namah</td>
            <td>Most beautiful in three worlds</td>
        </tr>
        <tr>
            <td>874</td>
            <td>Tulasi-tosika</td>
            <td>Om Tulasi-tosikayai Namah</td>
            <td>Pleaser of Tulasi</td>
        </tr>
        <tr>
            <td>875</td>
            <td>Tulasy-adhisthatr-devi</td>
            <td>Om Tulasy-adhisthatr-devyai Namah</td>
            <td>Presiding goddess of Tulasi</td>
        </tr>
        <tr>
            <td>876</td>
            <td>Ucca-nica</td>
            <td>Om Ucca-nicayai Namah</td>
            <td>High and low</td>
        </tr>
        <tr>
            <td>877</td>
            <td>Ugra-rupa</td>
            <td>Om Ugra-rupayai Namah</td>
            <td>Fierce form</td>
        </tr>
        <tr>
            <td>878</td>
            <td>Ujjvala-gatrika</td>
            <td>Om Ujjvala-gatrikayai Namah</td>
            <td>Radiant body</td>
        </tr>
        <tr>
            <td>879</td>
            <td>Ujjvalaprada</td>
            <td>Om Ujjvalapradayai Namah</td>
            <td>Bestower of radiance</td>
        </tr>
        <tr>
            <td>880</td>
            <td>Unmada-vidhayini</td>
            <td>Om Unmada-vidhayinyai Namah</td>
            <td>Giver of ecstasy</td>
        </tr>
        <tr>
            <td>881</td>
            <td>Vadana</td>
            <td>Om Vadanayai Namah</td>
            <td>Speech</td>
        </tr>
        <tr>
            <td>882</td>
            <td>Vadhu</td>
            <td>Om Vadhuyai Namah</td>
            <td>Bride</td>
        </tr>
        <tr>
            <td>883</td>
            <td>Vaijayanti</td>
            <td>Om Vaijayantyai Namah</td>
            <td>Garland of victory</td>
        </tr>
        <tr>
            <td>884</td>
            <td>Vaikuntha-natha-grhini</td>
            <td>Om Vaikuntha-natha-grhinyai Namah</td>
            <td>Consort of Vaikuntha’s Lord</td>
        </tr>
        <tr>
            <td>885</td>
            <td>Vaikuntha-paramalaya</td>
            <td>Om Vaikuntha-paramalayai Namah</td>
            <td>Supreme abode of Vaikuntha</td>
        </tr>
        <tr>
            <td>886</td>
            <td>Vaikuntha-sundari</td>
            <td>Om Vaikuntha-sundaryai Namah</td>
            <td>Beautiful goddess of Vaikuntha</td>
        </tr>
        <tr>
            <td>887</td>
            <td>Vaikunthadeva-devadhya</td>
            <td>Om Vaikunthadeva-devadhyayai Namah</td>
            <td>Revered by Vaikuntha’s deities</td>
        </tr>
        <tr>
            <td>888</td>
            <td>Vairagyakula-dipika</td>
            <td>Om Vairagyakula-dipikayai Namah</td>
            <td>Lamp of detachment</td>
        </tr>
        <tr>
            <td>889</td>
            <td>Vaisali</td>
            <td>Om Vaisaliyai Namah</td>
            <td>Belonging to Vaisali</td>
        </tr>
        <tr>
            <td>890</td>
            <td>Vaisnavi</td>
            <td>Om Vaisnaviyai Namah</td>
            <td>Devotee of Vishnu</td>
        </tr>
        <tr>
            <td>891</td>
            <td>Vakra-rupa</td>
            <td>Om Vakra-rupayai Namah</td>
            <td>Curved form</td>
        </tr>
        <tr>
            <td>892</td>
            <td>Vakra-viksana-viksita</td>
            <td>Om Vakra-viksana-viksitayai Namah</td>
            <td>Enchanting curved glance</td>
        </tr>
        <tr>
            <td>893</td>
            <td>Vakresvari</td>
            <td>Om Vakresvariyai Namah</td>
            <td>Mistress of curves</td>
        </tr>
        <tr>
            <td>894</td>
            <td>Vallabha</td>
            <td>Om Vallabhayai Namah</td>
            <td>Beloved</td>
        </tr>
        <tr>
            <td>895</td>
            <td>Vama-bhaga</td>
            <td>Om Vama-bhagayai Namah</td>
            <td>Left side</td>
        </tr>
        <tr>
            <td>896</td>
            <td>Vama-devi</td>
            <td>Om Vama-devyai Namah</td>
            <td>Gentle goddess</td>
        </tr>
        <tr>
            <td>897</td>
            <td>Vamanga-harini visnoh</td>
            <td>Om Vamanga-harinyai Namah</td>
            <td>Enchantress of Vishnu's left side</td>
        </tr>
        <tr>
            <td>898</td>
            <td>Varahi</td>
            <td>Om Varahiyai Namah</td>
            <td>Goddess Varahi</td>
        </tr>
        <tr>
            <td>899</td>
            <td>Vasana-harini</td>
            <td>Om Vasana-harinyai Namah</td>
            <td>Remover of desires</td>
        </tr>
        <tr>
            <td>900</td>
            <td>Vasanta-raga-samraga</td>
            <td>Om Vasanta-raga-samragayai Namah</td>
            <td>Filled with spring passion</td>
        </tr>
        <tr>
            <td>901</td>
            <td>Vasanta-vasanakrti</td>
            <td>Om Vasanta-vasanakrtyai Namah</td>
            <td>Embodiment of spring fragrance</td>
        </tr>
        <tr>
            <td>902</td>
            <td>Vasini</td>
            <td>Om Vasinyai Namah</td>
            <td>Dwelling</td>
        </tr>
        <tr>
            <td>903</td>
            <td>Vatsala</td>
            <td>Om Vatsalayai Namah</td>
            <td>Affectionate</td>
        </tr>
        <tr>
            <td>904</td>
            <td>Veda-gamini</td>
            <td>Om Veda-gaminyai Namah</td>
            <td>Moving in Vedic wisdom</td>
        </tr>
        <tr>
            <td>905</td>
            <td>Veda-marga-pravardhini</td>
            <td>Om Veda-marga-pravardhinyai Namah</td>
            <td>Propagator of Vedic paths</td>
        </tr>
        <tr>
            <td>906</td>
            <td>Veda-sara</td>
            <td>Om Veda-sarayai Namah</td>
            <td>Essence of the Vedas</td>
        </tr>
        <tr>
            <td>907</td>
            <td>Veda-vadini</td>
            <td>Om Veda-vadinyai Namah</td>
            <td>Speaker of the Vedas</td>
        </tr>
        <tr>
            <td>908</td>
            <td>Vedagamya</td>
            <td>Om Vedagamyayai Namah</td>
            <td>Accessible through the Vedas</td>
        </tr>
        <tr>
            <td>909</td>
            <td>Vedagarbha</td>
            <td>Om Vedagarbhayai Namah</td>
            <td>Womb of Vedic knowledge</td>
        </tr>
        <tr>
            <td>910</td>
            <td>Vedamata</td>
            <td>Om Vedamatayai Namah</td>
            <td>Mother of the Vedas</td>
        </tr>
        <tr>
            <td>911</td>
            <td>Vedapara</td>
            <td>Om Vedaparayai Namah</td>
            <td>Transcendent of the Vedas</td>
        </tr>
        <tr>
            <td>912</td>
            <td>Vedapriya</td>
            <td>Om Vedapriyayai Namah</td>
            <td>Lover of the Vedas</td>
        </tr>
        <tr>
            <td>913</td>
            <td>Vedatita</td>
            <td>Om Vedatitayai Namah</td>
            <td>Beyond the Vedas</td>
        </tr>
        <tr>
            <td>914</td>
            <td>Vedavati</td>
            <td>Om Vedavatayai Namah</td>
            <td>Vedic goddess</td>
        </tr>
        <tr>
            <td>915</td>
            <td>Vegadhya</td>
            <td>Om Vegadhyayai Namah</td>
            <td>Full of speed</td>
        </tr>
        <tr>
            <td>916</td>
            <td>Vegavati</td>
            <td>Om Vegavatyai Namah</td>
            <td>Fast-moving</td>
        </tr>
        <tr>
            <td>917</td>
            <td>Venu-rati</td>
            <td>Om Venu-ratayai Namah</td>
            <td>Fond of flute</td>
        </tr>
        <tr>
            <td>918</td>
            <td>Venu-vadya</td>
            <td>Om Venu-vadyayai Namah</td>
            <td>Player of the flute</td>
        </tr>
        <tr>
            <td>919</td>
            <td>Venu-vadya-parayana</td>
            <td>Om Venu-vadya-parayanayai Namah</td>
            <td>Expert in flute playing</td>
        </tr>
        <tr>
            <td>920</td>
            <td>Vetravati</td>
            <td>Om Vetravatyai Namah</td>
            <td>Flowing like a river</td>
        </tr>
        <tr>
            <td>921</td>
            <td>Vibhavari</td>
            <td>Om Vibhavariyai Namah</td>
            <td>Night</td>
        </tr>
        <tr>
            <td>922</td>
            <td>Vicitra-kathaka</td>
            <td>Om Vicitra-kathakayai Namah</td>
            <td>Speaker of varied stories</td>
        </tr>
        <tr>
            <td>923</td>
            <td>Vicitra-mani-bhusana</td>
            <td>Om Vicitra-mani-bhusanayai Namah</td>
            <td>Adorned with exquisite jewels</td>
        </tr>
        <tr>
            <td>924</td>
            <td>Vicitra-vasini</td>
            <td>Om Vicitra-vasinyai Namah</td>
            <td>Dweller in beautiful places</td>
        </tr>
        <tr>
            <td>925</td>
            <td>Vicittra-kanakojjvala</td>
            <td>Om Vicittra-kanakojjvalayai Namah</td>
            <td>Radiant with golden beauty</td>
        </tr>
        <tr>
            <td>926</td>
            <td>Vidusam</td>
            <td>Om Vidusamyai Namah</td>
            <td>Wise</td>
        </tr>
        <tr>
            <td>927</td>
            <td>Viduttama</td>
            <td>Om Viduttamayai Namah</td>
            <td>Supreme knowledge</td>
        </tr>
        <tr>
            <td>928</td>
            <td>Vidvaj-jana-manohara</td>
            <td>Om Vidvaj-jana-manoharayai Namah</td>
            <td>Enchanting the wise</td>
        </tr>
        <tr>
            <td>929</td>
            <td>Vidvat-prema-vivardhini</td>
            <td>Om Vidvat-prema-vivardhinyai Namah</td>
            <td>Enhancer of wise love</td>
        </tr>
        <tr>
            <td>930</td>
            <td>Vidya</td>
            <td>Om Vidyayai Namah</td>
            <td>Knowledge</td>
        </tr>
        <tr>
            <td>931</td>
            <td>Vidya-svarupini</td>
            <td>Om Vidya-svarupinyai Namah</td>
            <td>Embodiment of knowledge</td>
        </tr>
        <tr>
            <td>932</td>
            <td>Vidyamana</td>
            <td>Om Vidyamanayai Namah</td>
            <td>Visible</td>
        </tr>
        <tr>
            <td>933</td>
            <td>Vidyarthini</td>
            <td>Om Vidyarthinyai Namah</td>
            <td>Seeker of knowledge</td>
        </tr>
        <tr>
            <td>934</td>
            <td>Vidyut-prabha</td>
            <td>Om Vidyut-prabhayai Namah</td>
            <td>Lightning-like radiance</td>
        </tr>
        <tr>
            <td>935</td>
            <td>Viharini hareh</td>
            <td>Om Viharinyai Hareh Namah</td>
            <td>Wanderer of Lord Hari</td>
        </tr>
        <tr>
            <td>936</td>
            <td>Vihasya</td>
            <td>Om Vihasyayai Namah</td>
            <td>Smiling</td>
        </tr>
        <tr>
            <td>937</td>
            <td>Vijaya</td>
            <td>Om Vijayayai Namah</td>
            <td>Victorious</td>
        </tr>
        <tr>
            <td>938</td>
            <td>Vijita</td>
            <td>Om Vijitayai Namah</td>
            <td>Conquered</td>
        </tr>
        <tr>
            <td>939</td>
            <td>Vijitamoda</td>
            <td>Om Vijitamodayai Namah</td>
            <td>Overwhelmed by joy</td>
        </tr>
        <tr>
            <td>940</td>
            <td>Vikalotkarsini</td>
            <td>Om Vikalotkarsinyai Namah</td>
            <td>Uplifter of the distressed</td>
        </tr>
        <tr>
            <td>941</td>
            <td>Vikasita-mukhambuja</td>
            <td>Om Vikasita-mukhambujayai Namah</td>
            <td>Blossomed lotus-like face</td>
        </tr>
        <tr>
            <td>942</td>
            <td>Vilasini</td>
            <td>Om Vilasinyai Namah</td>
            <td>Playful</td>
        </tr>
        <tr>
            <td>943</td>
            <td>Vilasininy</td>
            <td>Om Vilasininyai Namah</td>
            <td>Cheerful</td>
        </tr>
        <tr>
            <td>944</td>
            <td>Vimala</td>
            <td>Om Vimalayai Namah</td>
            <td>Pure</td>
        </tr>
        <tr>
            <td>945</td>
            <td>Vimalangi</td>
            <td>Om Vimalangyai Namah</td>
            <td>Pure-bodied</td>
        </tr>
        <tr>
            <td>946</td>
            <td>Vimalodaka</td>
            <td>Om Vimalodakayai Namah</td>
            <td>Clear water</td>
        </tr>
        <tr>
            <td>947</td>
            <td>Vimoha</td>
            <td>Om Vimohayai Namah</td>
            <td>Without delusion</td>
        </tr>
        <tr>
            <td>948</td>
            <td>Vindhyacala-nivasini</td>
            <td>Om Vindhyacala-nivasinyai Namah</td>
            <td>Residing in Vindhya hills</td>
        </tr>
        <tr>
            <td>949</td>
            <td>Vindhyadri-parivasini</td>
            <td>Om Vindhyadri-parivasinyai Namah</td>
            <td>Dwelling around Vindhya mountains</td>
        </tr>
        <tr>
            <td>950</td>
            <td>Vindhyalaya</td>
            <td>Om Vindhyalayayai Namah</td>
            <td>House in Vindhya hills</td>
        </tr>
        <tr>
            <td>951</td>
            <td>Vipra-mata</td>
            <td>Om Vipra-matayai Namah</td>
            <td>Mother of the learned</td>
        </tr>
        <tr>
            <td>952</td>
            <td>Viraga-kusala</td>
            <td>Om Viraga-kusalayai Namah</td>
            <td>Expert in detachment</td>
        </tr>
        <tr>
            <td>953</td>
            <td>Virahini</td>
            <td>Om Virahinyai Namah</td>
            <td>Separated lover</td>
        </tr>
        <tr>
            <td>954</td>
            <td>Viraja</td>
            <td>Om Virajayai Namah</td>
            <td>Pure</td>
        </tr>
        <tr>
            <td>955</td>
            <td>Visakha</td>
            <td>Om Visakhayai Namah</td>
            <td>Branch-like</td>
        </tr>
        <tr>
            <td>956</td>
            <td>Visala-grha-vasa</td>
            <td>Om Visala-grha-vasayai Namah</td>
            <td>Dweller in vast houses</td>
        </tr>
        <tr>
            <td>957</td>
            <td>Visala-kula-sambhava</td>
            <td>Om Visala-kula-sambhavayai Namah</td>
            <td>Born in a noble family</td>
        </tr>
        <tr>
            <td>958</td>
            <td>Visala-netra</td>
            <td>Om Visala-netrayai Namah</td>
            <td>Large-eyed</td>
        </tr>
        <tr>
            <td>959</td>
            <td>Visala-vadari</td>
            <td>Om Visala-vadarayai Namah</td>
            <td>Expansive orchard</td>
        </tr>
        <tr>
            <td>960</td>
            <td>Visnor anga-nivasini</td>
            <td>Om Visnor-anga-nivasinyai Namah</td>
            <td>Residing in Vishnu’s form</td>
        </tr>
        <tr>
            <td>961</td>
            <td>Visnu-bhavana-tatpara</td>
            <td>Om Visnu-bhavana-tatparayai Namah</td>
            <td>Dedicated to Vishnu’s thoughts</td>
        </tr>
        <tr>
            <td>962</td>
            <td>Visnu-kanta</td>
            <td>Om Visnu-kantayai Namah</td>
            <td>Beloved of Vishnu</td>
        </tr>
        <tr>
            <td>963</td>
            <td>Visnu-priya</td>
            <td>Om Visnu-priyayai Namah</td>
            <td>Dear to Vishnu</td>
        </tr>
        <tr>
            <td>964</td>
            <td>Visnu-vaksah-sthala-stha</td>
            <td>Om Visnu-vaksah-sthala-sthayai Namah</td>
            <td>Residing on Vishnu’s chest</td>
        </tr>
        <tr>
            <td>965</td>
            <td>Visoka</td>
            <td>Om Visokayai Namah</td>
            <td>Free from sorrow</td>
        </tr>
        <tr>
            <td>966</td>
            <td>Vrksa-rupa</td>
            <td>Om Vrksa-rupayai Namah</td>
            <td>Tree-like</td>
        </tr>
        <tr>
            <td>967</td>
            <td>Vrnda</td>
            <td>Om Vrndayai Namah</td>
            <td>Clustered</td>
        </tr>
        <tr>
            <td>968</td>
            <td>Vrndaranya-priya</td>
            <td>Om Vrndaranya-priyayai Namah</td>
            <td>Beloved of Vrindavana forest</td>
        </tr>
        <tr>
            <td>969</td>
            <td>Vrndavana-vihari</td>
            <td>Om Vrndavana-viharinyai Namah</td>
            <td>Dweller in Vrindavana</td>
        </tr>
        <tr>
            <td>970</td>
            <td>Vrndavana-vilasini</td>
            <td>Om Vrndavana-vilasininyai Namah</td>
            <td>Playful in Vrindavana</td>
        </tr>
        <tr>
            <td>971</td>
            <td>Vrndavanesvari</td>
            <td>Om Vrndavanesvariyai Namah</td>
            <td>Queen of Vrindavana</td>
        </tr>
        <tr>
            <td>972</td>
            <td>Vrsabhanu-suta</td>
            <td>Om Vrsabhanu-sutayai Namah</td>
            <td>Daughter of Vrsabhanu</td>
        </tr>
        <tr>
            <td>973</td>
            <td>Yacakayacakananda</td>
            <td>Om Yacakayacakanandayai Namah</td>
            <td>Joy of beggars and givers</td>
        </tr>
        <tr>
            <td>974</td>
            <td>Yacakojjvala</td>
            <td>Om Yacakojjvalayai Namah</td>
            <td>Radiant giver</td>
        </tr>
        <tr>
            <td>975</td>
            <td>Yadavendra-vadhu</td>
            <td>Om Yadavendra-vadhuyai Namah</td>
            <td>Bride of the Yadava lord</td>
        </tr>
        <tr>
            <td>976</td>
            <td>Yaga-yoga-hara</td>
            <td>Om Yaga-yoga-harayai Namah</td>
            <td>Master of sacrifice and union</td>
        </tr>
        <tr>
            <td>977</td>
            <td>Yamalarjuna-bhanjini</td>
            <td>Om Yamalarjuna-bhanjinyai Namah</td>
            <td>Destroyer of Yamalarjuna</td>
        </tr>
        <tr>
            <td>978</td>
            <td>Yamini</td>
            <td>Om Yaminyai Namah</td>
            <td>Night</td>
        </tr>
        <tr>
            <td>979</td>
            <td>Yamini-natha</td>
            <td>Om Yamini-nathayai Namah</td>
            <td>Lord of the night</td>
        </tr>
        <tr>
            <td>980</td>
            <td>Yaminisvari</td>
            <td>Om Yaminisvariyai Namah</td>
            <td>Queen of the night</td>
        </tr>
        <tr>
            <td>981</td>
            <td>Yamuna</td>
            <td>Om Yamunayai Namah</td>
            <td>Sacred river Yamuna</td>
        </tr>
        <tr>
            <td>982</td>
            <td>Yamuna-jala-vasini</td>
            <td>Om Yamuna-jala-vasinyai Namah</td>
            <td>Dweller in Yamuna’s waters</td>
        </tr>
        <tr>
            <td>983</td>
            <td>Yamuna-para-kautuka</td>
            <td>Om Yamuna-para-kautukayai Namah</td>
            <td>Playful beyond the Yamuna</td>
        </tr>
        <tr>
            <td>984</td>
            <td>Yamuna-tosa-karini</td>
            <td>Om Yamuna-tosa-karinyai Namah</td>
            <td>Pleasing the Yamuna</td>
        </tr>
        <tr>
            <td>985</td>
            <td>Yamunangi</td>
            <td>Om Yamunangyai Namah</td>
            <td>Daughter of Yamuna</td>
        </tr>
        <tr>
            <td>986</td>
            <td>Yasasvini</td>
            <td>Om Yasasvinyai Namah</td>
            <td>Glorious</td>
        </tr>
        <tr>
            <td>987</td>
            <td>Yaso-’rthini</td>
            <td>Om Yaso-’rthinyai Namah</td>
            <td>Seeking glory</td>
        </tr>
        <tr>
            <td>988</td>
            <td>Yasoda</td>
            <td>Om Yasodayai Namah</td>
            <td>Mother of Krishna</td>
        </tr>
        <tr>
            <td>989</td>
            <td>Yasoda-kroda-vasini</td>
            <td>Om Yasoda-kroda-vasinyai Namah</td>
            <td>Dwelling in Yasoda’s embrace</td>
        </tr>
        <tr>
            <td>990</td>
            <td>Yasodanana-vallabha</td>
            <td>Om Yasodanana-vallabhayai Namah</td>
            <td>Beloved of Yasoda’s son</td>
        </tr>
        <tr>
            <td>991</td>
            <td>Yasodananda-gehini</td>
            <td>Om Yasodananda-gehinyai Namah</td>
            <td>Dweller in Yasoda’s house</td>
        </tr>
        <tr>
            <td>992</td>
            <td>Yasodananda-patni</td>
            <td>Om Yasodananda-patnyai Namah</td>
            <td>Wife of Yasoda’s son</td>
        </tr>
        <tr>
            <td>993</td>
            <td>Yasodanandanakrida</td>
            <td>Om Yasodanandanakridayai Namah</td>
            <td>Player in Yasoda’s house</td>
        </tr>
        <tr>
            <td>994</td>
            <td>Yasodanandanaramya</td>
            <td>Om Yasodanandanaramyayai Namah</td>
            <td>Beautiful in Yasoda’s house</td>
        </tr>
        <tr>
            <td>995</td>
            <td>Yasodanandanarthada</td>
            <td>Om Yasodanandanarthadayai Namah</td>
            <td>Fulfiller of Yasoda’s desires</td>
        </tr>
        <tr>
            <td>996</td>
            <td>Yasodanandanesvari</td>
            <td>Om Yasodanandanesvariyai Namah</td>
            <td>Queen of Yasoda’s house</td>
        </tr>
        <tr>
            <td>997</td>
            <td>Yasogamya</td>
            <td>Om Yasogamyayai Namah</td>
            <td>Attainable through glory</td>
        </tr>
        <tr>
            <td>998</td>
            <td>Yati</td>
            <td>Om Yatiyai Namah</td>
            <td>Ascetic</td>
        </tr>
        <tr>
            <td>999</td>
            <td>Yauvanananda</td>
            <td>Om Yauvananandayai Namah</td>
            <td>Joy of youthfulness</td>
        </tr>
        <tr>
            <td>1000</td>
            <td>Yoga-gamya</td>
            <td>Om Yoga-gamyayai Namah</td>
            <td>Accessible through yoga</td>
        </tr>
            </tbody>
          </table>
        </table>
        <h3>Significance of Goddess Radha Sahashanavali</h3>
        <p>
          Goddess Radha is associated with the qualities of beauty and limitless love in Hinduism. Her divine presence is said to enchant the devotees. Her blessings are considered highly crucial and beneficial for people who are facing difficulties in their love life.
        </p>
        <p>
          Chanting the 1000 various names of Radha is said to help a person in many ways. It provides one with calm and peace within themselves, keeping their stress levels low. Along with this, it is also believed that chanting 1000 names of radha helps one attain moksha.
        </p>
        <p>
          Her name chanting can also benefit a person by acting as a shield and protecting the devotee from evil and ill energies and spirits. It is advised that a person should chant the names of Radharani during Brahma Muhurat or early morning hours. This is said to be highly beneficial for an individual.
        </p>
        <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`accordion ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="accordion-icon">{openIndex === index ? "-" : "+"}</span>
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
export default Radha1000;
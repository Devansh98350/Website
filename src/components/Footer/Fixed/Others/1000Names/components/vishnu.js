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

const Vishnu1000FAQ = [
  {
    id: 1,
    title: "What happens if we chant vishnu Sahasranamam daily?",
    content:
      "Chanting the 1000 Lord Vishnu names daily has some long-term benefits. It is believed to remove past life bad karma and make a person more spiritual. Moreover, the powerful names enhance the aura and make a person more confident and courageous.",
  },
  {
    id: 2,
    title: "What does Vishnu Sahasranamam do?",
    content:
      "Vishnu Sahasranamam is a spiritual practice that enhances a person’s spiritual growth and brings peace. People who chant the thousand names of Lord Vishnu are usually positive and self-confident.",
  },
  {
    id: 3,
    title: "Who should recite Vishnu Sahasranamam?",
    content:
      "Anyone who is a devotee of Lord Vishnu and wants to bring peace and joy can recite Vishnu Sahasranamam namavali. The only thing that matters is pure devotion towards Lord Vishnu.",
  },
  {
    id: 4,
    title:
      "Which direction is ideal for chanting the thousand names od Lord Vishnu?",
    content:
      "West direction is ideal for chanting the thousand names of Lord Vishnu. This is because the east-facing west direction is the home of Lord Vishnu. Chanting the 1000 names of Vishnu in this direction will bring auspicious results.",
  },
  {
    id: 5,
    title: "How many versions of vishnu sahasranam are there?",
    content:
      "Anushasana Parva (Mahabharata), Padma Purana, Skanda Purana, Garuda Purana, and Sundat Gutka are some of the versions of Vishnu Sahasranamam namavali. However, Anushasana Parva from the Mahabharata is the most popular version.",
  },
  {
    id: 6,
    title: "Who wrote Vishnu Sahasranama?",
    content:
      "Maharishi Vyasa, the creator of the Mahabharata and the Bhagavad Gita, wrote 1000 names of Vishnu. According to mythological beliefs, Vyasa wrote a thousand names of Lord Vishnu on the 11th day of the waxing moon in the Magha month.",
  },
];

const Vishnu1000 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="1000 Name of Lord Vishnu - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">1000 Names of Lord Vishnu</h1>
          <h2>Chant Vishnu Sahasranamam, Experience Miracles</h2>
          <h3>Let Vishnu Sahasramavali Guide You to Peace</h3>
          <p>
            Vishnu Sahasranamam is a compilation of 1000 names of Lord Vishnu,
            the protector and preserver of the universe. These powerful hymns
            are believed to clear past life karma and help individuals attain
            moksha in their afterlife.
          </p>
          <h3>1000 Names of Lord Vishnu List</h3>
          <p>
            Lord Vishnu only blesses those who chant his name and protects them
            from all sorts of problems. Recite all the thousand names of Lord
            Vishnu to receive his blessings and protection:
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
                  <td>Vishvam</td>
                  <td>Om Vishvaya Namah</td>
                  <td>Universe; Virat-Purusha</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Vishnuh</td>
                  <td>Om Vishnave Namah</td>
                  <td>All-Pervading</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Vashatkaarah</td>
                  <td>Om Vashatkaraya Namah</td>
                  <td>Invoked for Oblations</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Bhoota-bhavya-bhavat-prabhuh</td>
                  <td>Om Bhoota-bhavya-bhavat-prabhave Namah</td>
                  <td>Lord of Past, Present, Future</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Bhoota-krit</td>
                  <td>Om Bhoota-krite Namah</td>
                  <td>Creator of All Creatures</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Bhoota-bhrit</td>
                  <td>Om Bhoota-bhrite Namah</td>
                  <td>Sustainer of All Creatures</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Bhaavah</td>
                  <td>Om Bhavaya Namah</td>
                  <td>Becomes All Things</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Bhoota-atmaa</td>
                  <td>Om Bhoota-atmane Namah</td>
                  <td>Soul of All Beings</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Bhoota-bhaavanah</td>
                  <td>Om Bhoota-bhaavanaya Namah</td>
                  <td>Cause of Creation</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Pootaatmaa</td>
                  <td>Om Pootaatmane Namah</td>
                  <td>Pure Essence</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Paramaatmaa</td>
                  <td>Om Paramaatmane Namah</td>
                  <td>Supreme Soul</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Muktaanaam paramaa gatih</td>
                  <td>Om Muktaanaam paramaa gataye Namah</td>
                  <td>Liberated Souls' Final Goal</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Avyayah</td>
                  <td>Om Avyayaya Namah</td>
                  <td>Indestructible</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Purushah</td>
                  <td>Om Purushaya Namah</td>
                  <td>Dweller in the Body</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Saakshee</td>
                  <td>Om Saaksine Namah</td>
                  <td>Witness</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Kshetrajnah</td>
                  <td>Om Kshetrajnaya Namah</td>
                  <td>Knower of the Field</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Akshara</td>
                  <td>Om Aksharaya Namah</td>
                  <td>Imperishable</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Yogah</td>
                  <td>Om Yogaya Namah</td>
                  <td>Realized Through Yoga</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Yoga-vidaam netaa</td>
                  <td>Om Yoga-vidaam netre Namah</td>
                  <td>Guide of Yogis</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Pradhaana-purusheshvarah</td>
                  <td>Om Pradhaana-purusheshvaraya Namah</td>
                  <td>Lord of Pradhana and Purusha</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Naarasimha-vapuh</td>
                  <td>Om Naarasimha-vapushe Namah</td>
                  <td>Man-Lion Form</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Shreemaan</td>
                  <td>Om Shreemate Namah</td>
                  <td>Always with Shri (Lakshmi)</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Keshavah</td>
                  <td>Om Keshavaya Namah</td>
                  <td>Beautiful-Haired</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Purushottamah</td>
                  <td>Om Purushottamaya Namah</td>
                  <td>Supreme Controller</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Sarvah</td>
                  <td>Om Sarvaya Namah</td>
                  <td>Everything</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Sharvas</td>
                  <td>Om Sharvaya Namah</td>
                  <td>Auspicious</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Shivah</td>
                  <td>Om Shivaya Namah</td>
                  <td>Eternally Pure</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Sthaanuh</td>
                  <td>Om Sthaanave Namah</td>
                  <td>Immovable Truth</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Bhootaadih</td>
                  <td>Om Bhootaadaye Namah</td>
                  <td>Cause of Elements</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Nidhir-avyayah</td>
                  <td>Om Nidhir-avyayaya Namah</td>
                  <td>Imperishable Treasure</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Sambhavah</td>
                  <td>Om Sambhavaya Namah</td>
                  <td>Self-Manifested</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Bhaavanah</td>
                  <td>Om Bhaavanaya Namah</td>
                  <td>Giver of Everything</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Bhartaa</td>
                  <td>Om Bhartre Namah</td>
                  <td>Supporter of the World</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Prabhavah</td>
                  <td>Om Prabhavaya Namah</td>
                  <td>Source of All Elements</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Prabhuh</td>
                  <td>Om Prabhave Namah</td>
                  <td>Almighty Lord</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Eeshvarah</td>
                  <td>Om Eeshvaraya Namah</td>
                  <td>Supreme Controller</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Svayambhooh</td>
                  <td>Om Svayambhoove Namah</td>
                  <td>Self-Manifested</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Shambhuh</td>
                  <td>Om Shambhave Namah</td>
                  <td>Bestower of Happiness</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Aadityah</td>
                  <td>Om Aadityaya Namah</td>
                  <td>Son of Aditi</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Pushkaraakshah</td>
                  <td>Om Pushkaraakshaya Namah</td>
                  <td>Lotus-Eyed</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Mahaasvanah</td>
                  <td>Om Mahaasvanaya Namah</td>
                  <td>Thundering Voice</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Anaadi-nidhanah</td>
                  <td>Om Anaadi-nidhanaya Namah</td>
                  <td>Without Beginning or End</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Dhaataa</td>
                  <td>Om Dhaatrey Namah</td>
                  <td>Supporter of All</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Vidhaataa</td>
                  <td>Om Vidhaatrey Namah</td>
                  <td>Dispenser of Fruits of Action</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Dhaaturuttamah</td>
                  <td>Om Dhaaturuttamaya Namah</td>
                  <td>Subtlest Atom</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Aprameyah</td>
                  <td>Om Aprameyaya Namah</td>
                  <td>Beyond Comprehension</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Hrisheekeshah</td>
                  <td>Om Hrisheekeshaya Namah</td>
                  <td>Lord of the Senses</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Padmanaabhah</td>
                  <td>Om Padmanaabhaya Namah</td>
                  <td>Lotus-Naveled</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Amaraprabhuh</td>
                  <td>Om Amaraprabhave Namah</td>
                  <td>Lord of the Devas</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Vishvakarmaa</td>
                  <td>Om Vishvakarmane Namah</td>
                  <td>Creator of the Universe</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Manuh</td>
                  <td>Om Manave Namah</td>
                  <td>Progenitor of Mankind</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Tvashtaa</td>
                  <td>Om Tvashtre Namah</td>
                  <td>Creator of Forms</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Sthavishtah</td>
                  <td>Om Sthavishtaya Namah</td>
                  <td>Immense</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Sthaviro Dhruvah</td>
                  <td>Om Sthaviraaya Dhruvaaya Namah</td>
                  <td>Ancient and Eternal</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Agraahyah</td>
                  <td>Om Agraahyaya Namah</td>
                  <td>Imperceptible</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Shaashvatah</td>
                  <td>Om Shaashvataaya Namah</td>
                  <td>Eternal</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Krishnah</td>
                  <td>Om Krishnaya Namah</td>
                  <td>Dark-Complexioned</td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Lohitaakshah</td>
                  <td>Om Lohitaakshaaya Namah</td>
                  <td>Red-Eyed</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Pratardanah</td>
                  <td>Om Pratardanaaya Namah</td>
                  <td>Destroyer</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Prabhootah</td>
                  <td>Om Prabhootaya Namah</td>
                  <td>Ever-Full</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Trikakubdhaama</td>
                  <td>Om Trikakubdhaamaaya Namah</td>
                  <td>Support of Three Worlds</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Pavitram</td>
                  <td>Om Pavitramaya Namah</td>
                  <td>Purifier</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Mangalam Param</td>
                  <td>Om Mangalaaya Parasmai Namah</td>
                  <td>Supreme Auspiciousness</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Eeshanah</td>
                  <td>Om Eeshanaaya Namah</td>
                  <td>Ruler</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Praanadah</td>
                  <td>Om Praanadaaya Namah</td>
                  <td>Giver of Life</td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Praanah</td>
                  <td>Om Praanaaya Namah</td>
                  <td>Life Force</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Jyeshthah</td>
                  <td>Om Jyeshthaaya Namah</td>
                  <td>Eldest</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Shreshthah</td>
                  <td>Om Shreshthaaya Namah</td>
                  <td>Most Glorious</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Prajaapatih</td>
                  <td>Om Prajaapataye Namah</td>
                  <td>Lord of Creatures</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Hiranyagarbhah</td>
                  <td>Om Hiranyagarbhaaya Namah</td>
                  <td>Golden Womb</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Bhoogarbhah</td>
                  <td>Om Bhoogarbhaaya Namah</td>
                  <td>Womb of the Earth</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Maadhavah</td>
                  <td>Om Maadhavaaya Namah</td>
                  <td>Consort of Lakshmi</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Madhusoodanah</td>
                  <td>Om Madhusoodanaaya Namah</td>
                  <td>Slayer of Madhu</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Eeshvarah</td>
                  <td>Om Eeshvaraaya Namah</td>
                  <td>Supreme Controller</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Vikramee</td>
                  <td>Om Vikramine Namah</td>
                  <td>Courageous</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Dhanvee</td>
                  <td>Om Dhanvine Namah</td>
                  <td>Armed with Bow</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Medhaavee</td>
                  <td>Om Medhaavine Namah</td>
                  <td>Wise</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Vikramah</td>
                  <td>Om Vikramaaya Namah</td>
                  <td>Valor</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Kramah</td>
                  <td>Om Kramaaya Namah</td>
                  <td>All-Pervading</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Anuttamah</td>
                  <td>Om Anuttamaaya Namah</td>
                  <td>Incomparably Great</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Duraadharshah</td>
                  <td>Om Duraadharshaaya Namah</td>
                  <td>Unassailable</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Kritajnah</td>
                  <td>Om Kritajnaaya Namah</td>
                  <td>Knower of All</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Kritih</td>
                  <td>Om Kritaye Namah</td>
                  <td>Rewarder of Actions</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Aatmavaan</td>
                  <td>Om Aatmavate Namah</td>
                  <td>Self-Existent</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Sureshah</td>
                  <td>Om Sureshaaya Namah</td>
                  <td>Lord of Gods</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Sharanam</td>
                  <td>Om Sharanaaya Namah</td>
                  <td>Refuge</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Sharma</td>
                  <td>Om Sharmaaya Namah</td>
                  <td>Bliss</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Vishvaretaah</td>
                  <td>Om Vishvaretaaya Namah</td>
                  <td>Seed of the Universe</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Prajaabhavah</td>
                  <td>Om Prajaabhavaaya Namah</td>
                  <td>Source of All Beings</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Ahah</td>
                  <td>Om Ahaaya Namah</td>
                  <td>Day; Time</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Samvatsarah</td>
                  <td>Om Samvatsaraaya Namah</td>
                  <td>Year; Time</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Vyaalah</td>
                  <td>Om Vyaalaaya Namah</td>
                  <td>Serpent; Formidable</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Pratyayah</td>
                  <td>Om Pratyayaaya Namah</td>
                  <td>Faith; Knowledge</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Sarvadarshanah</td>
                  <td>Om Sarvadarshanaaya Namah</td>
                  <td>All-Seeing</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Ajah</td>
                  <td>Om Ajaaya Namah</td>
                  <td>Unborn</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Sarveshvarah</td>
                  <td>Om Sarveshvaraaya Namah</td>
                  <td>Lord of All</td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Siddhah</td>
                  <td>Om Siddhaaya Namah</td>
                  <td>Perfected One</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Siddhih</td>
                  <td>Om Siddhaye Namah</td>
                  <td>Achievement; Success</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Sarvaadih</td>
                  <td>Om Sarvaadaye Namah</td>
                  <td>Beginning of All</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Achyutah</td>
                  <td>Om Achyutaaya Namah</td>
                  <td>Infallible</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Vrishaakapih</td>
                  <td>Om Vrishaakapaye Namah</td>
                  <td>Uplifter of Dharma</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Ameyaatmaa</td>
                  <td>Om Ameyaatmane Namah</td>
                  <td>Of Immeasurable Nature</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Sarva-yoga-vinissritah</td>
                  <td>Om Sarva-yoga-vinissritaya Namah</td>
                  <td>Free from All Attachments</td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Vasuh</td>
                  <td>Om Vasave Namah</td>
                  <td>Supporter of All Elements</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Vasumanaah</td>
                  <td>Om Vasumanaaya Namah</td>
                  <td>Pure-Minded</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Satyah</td>
                  <td>Om Satyaya Namah</td>
                  <td>Truth</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Samaatmaa</td>
                  <td>Om Samaatmane Namah</td>
                  <td>Equal-Minded</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Sammitah</td>
                  <td>Om Sammitaya Namah</td>
                  <td>Accepted by Authorities</td>
                </tr>
                <tr>
                  <td>109</td>
                  <td>Samah</td>
                  <td>Om Samaya Namah</td>
                  <td>Equal</td>
                </tr>
                <tr>
                  <td>110</td>
                  <td>Amoghah</td>
                  <td>Om Amoghaya Namah</td>
                  <td>Ever Useful</td>
                </tr>
                <tr>
                  <td>111</td>
                  <td>Pundareekaakshah</td>
                  <td>Om Pundareekaakshaya Namah</td>
                  <td>Lotus-Eyed</td>
                </tr>
                <tr>
                  <td>112</td>
                  <td>Vrishakarmaa</td>
                  <td>Om Vrishakarmane Namah</td>
                  <td>Righteous in Action</td>
                </tr>
                <tr>
                  <td>113</td>
                  <td>Vrishaakritih</td>
                  <td>Om Vrishaakritaye Namah</td>
                  <td>Embodiment of Dharma</td>
                </tr>
                <tr>
                  <td>114</td>
                  <td>Rudrah</td>
                  <td>Om Rudraya Namah</td>
                  <td>Remover of Sorrows</td>
                </tr>
                <tr>
                  <td>115</td>
                  <td>Bahu-shiraah</td>
                  <td>Om Bahu-shiraaya Namah</td>
                  <td>Many-Headed</td>
                </tr>
                <tr>
                  <td>116</td>
                  <td>Babhrur</td>
                  <td>Om Babhrave Namah</td>
                  <td>Protector</td>
                </tr>
                <tr>
                  <td>117</td>
                  <td>Vishvayonih</td>
                  <td>Om Vishvayonaye Namah</td>
                  <td>Source of the Universe</td>
                </tr>
                <tr>
                  <td>118</td>
                  <td>Shuchi-shravaah</td>
                  <td>Om Shuchi-shravaaya Namah</td>
                  <td>Pure-Sounding</td>
                </tr>
                <tr>
                  <td>119</td>
                  <td>Amritah</td>
                  <td>Om Amritaya Namah</td>
                  <td>Immortal</td>
                </tr>
                <tr>
                  <td>120</td>
                  <td>Shaashvatah-sthaanur</td>
                  <td>Om Shaashvatah-sthaanave Namah</td>
                  <td>Eternal and Firm</td>
                </tr>
                <tr>
                  <td>121</td>
                  <td>Varaaroho</td>
                  <td>Om Varaarohaaya Namah</td>
                  <td>Supreme Destination</td>
                </tr>
                <tr>
                  <td>122</td>
                  <td>Mahaatapaah</td>
                  <td>Om Mahaatapase Namah</td>
                  <td>Great Penance</td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Sarvagah</td>
                  <td>Om Sarvagaaya Namah</td>
                  <td>All-Pervading</td>
                </tr>
                <tr>
                  <td>124</td>
                  <td>Sarvavid-bhaanuh</td>
                  <td>Om Sarvavid-bhaanave Namah</td>
                  <td>All-Knowing and Effulgent</td>
                </tr>
                <tr>
                  <td>125</td>
                  <td>Vishvaksenah</td>
                  <td>Om Vishvaksenaya Namah</td>
                  <td>Conqueror of All Armies</td>
                </tr>
                <tr>
                  <td>126</td>
                  <td>Janaardanah</td>
                  <td>Om Janaardanaaya Namah</td>
                  <td>Benefactor of People</td>
                </tr>
                <tr>
                  <td>127</td>
                  <td>Vedah</td>
                  <td>Om Vedaya Namah</td>
                  <td>The Vedas</td>
                </tr>
                <tr>
                  <td>128</td>
                  <td>Vedavid</td>
                  <td>Om Vedavide Namah</td>
                  <td>Knower of the Vedas</td>
                </tr>
                <tr>
                  <td>129</td>
                  <td>Avyangah</td>
                  <td>Om Avyangaya Namah</td>
                  <td>Without Imperfections</td>
                </tr>
                <tr>
                  <td>130</td>
                  <td>Vedaangah</td>
                  <td>Om Vedaangaya Namah</td>
                  <td>Limbs of the Vedas</td>
                </tr>
                <tr>
                  <td>131</td>
                  <td>Vedavit</td>
                  <td>Om Vedavite Namah</td>
                  <td>Contemplator of the Vedas</td>
                </tr>
                <tr>
                  <td>132</td>
                  <td>Kavih</td>
                  <td>Om Kave Namah</td>
                  <td>Seer</td>
                </tr>
                <tr>
                  <td>133</td>
                  <td>Lokaadhyakshah</td>
                  <td>Om Lokaadhyakshaya Namah</td>
                  <td>Overseer of the Worlds</td>
                </tr>
                <tr>
                  <td>134</td>
                  <td>Suraadhyaksho</td>
                  <td>Om Suraadhyakshaya Namah</td>
                  <td>Lord of the Gods</td>
                </tr>
                <tr>
                  <td>135</td>
                  <td>Dharmaadhyakshah</td>
                  <td>Om Dharmaadhyakshaya Namah</td>
                  <td>Overseer of Dharma</td>
                </tr>
                <tr>
                  <td>136</td>
                  <td>Krita-akritah</td>
                  <td>Om Krita-akritaya Namah</td>
                  <td>Creator and Non-Creator</td>
                </tr>
                <tr>
                  <td>137</td>
                  <td>Chaturaatmaa</td>
                  <td>Om Chaturaatmane Namah</td>
                  <td>Fourfold Self</td>
                </tr>
                <tr>
                  <td>138</td>
                  <td>Chaturvyoohah</td>
                  <td>Om Chaturvyoohaya Namah</td>
                  <td>Fourfold Manifestation</td>
                </tr>
                <tr>
                  <td>139</td>
                  <td>Chaturdamstrah</td>
                  <td>Om Chaturdamstraaya Namah</td>
                  <td>Four-Tusked</td>
                </tr>
                <tr>
                  <td>140</td>
                  <td>Chaturbhujah</td>
                  <td>Om Chaturbhujaya Namah</td>
                  <td>Four-Armed</td>
                </tr>
                <tr>
                  <td>141</td>
                  <td>Bhraajishnur</td>
                  <td>Om Bhraajishnave Namah</td>
                  <td>Self-Effulgent</td>
                </tr>
                <tr>
                  <td>142</td>
                  <td>Bhojanam</td>
                  <td>Om Bhojanaya Namah</td>
                  <td>Sustenance</td>
                </tr>
                <tr>
                  <td>143</td>
                  <td>Bhoktaa</td>
                  <td>Om Bhoktre Namah</td>
                  <td>Enjoyer</td>
                </tr>
                <tr>
                  <td>144</td>
                  <td>Sahishnuh</td>
                  <td>Om Sahishnave Namah</td>
                  <td>Patient</td>
                </tr>
                <tr>
                  <td>145</td>
                  <td>Jagadaadijah</td>
                  <td>Om Jagadaadijaya Namah</td>
                  <td>Born of the Universe</td>
                </tr>
                <tr>
                  <td>146</td>
                  <td>Anaghah</td>
                  <td>Om Anaghaya Namah</td>
                  <td>Sinless</td>
                </tr>
                <tr>
                  <td>147</td>
                  <td>Vijayah</td>
                  <td>Om Vijayaaya Namah</td>
                  <td>Victorious</td>
                </tr>
                <tr>
                  <td>148</td>
                  <td>Jetaa</td>
                  <td>Om Jetre Namah</td>
                  <td>Ever-Successful</td>
                </tr>
                <tr>
                  <td>149</td>
                  <td>Vishvayonih</td>
                  <td>Om Vishvayonaye Namah</td>
                  <td>Source of the Universe</td>
                </tr>
                <tr>
                  <td>150</td>
                  <td>Punarvasuh</td>
                  <td>Om Punarvasave Namah</td>
                  <td>Ever-Dwelling</td>
                </tr>
                <tr>
                  <td>151</td>
                  <td>Upendrah</td>
                  <td>Om Upendraaya Namah</td>
                  <td>Younger Brother of Indra</td>
                </tr>
                <tr>
                  <td>152</td>
                  <td>Vaamanah</td>
                  <td>Om Vaamanaaya Namah</td>
                  <td>Dwarf Form</td>
                </tr>
                <tr>
                  <td>153</td>
                  <td>Praamshuh</td>
                  <td>Om Praamshave Namah</td>
                  <td>Tall</td>
                </tr>
                <tr>
                  <td>154</td>
                  <td>Amoghah</td>
                  <td>Om Amoghaya Namah</td>
                  <td>Ever Useful</td>
                </tr>
                <tr>
                  <td>155</td>
                  <td>Shuchih</td>
                  <td>Om Shuchaye Namah</td>
                  <td>Pure</td>
                </tr>
                <tr>
                  <td>156</td>
                  <td>Oorjitah</td>
                  <td>Om Oorjitaya Namah</td>
                  <td>Vigorous</td>
                </tr>
                <tr>
                  <td>157</td>
                  <td>Ateendrah</td>
                  <td>Om Ateendraaya Namah</td>
                  <td>Beyond Indra</td>
                </tr>
                <tr>
                  <td>158</td>
                  <td>Samgrahah</td>
                  <td>Om Samgrahaya Namah</td>
                  <td>All-Embracing</td>
                </tr>
                <tr>
                  <td>159</td>
                  <td>Sargah</td>
                  <td>Om Sargaya Namah</td>
                  <td>Creator</td>
                </tr>
                <tr>
                  <td>160</td>
                  <td>Dhritaatmaa</td>
                  <td>Om Dhritaatmane Namah</td>
                  <td>Self-Sustained</td>
                </tr>
                <tr>
                  <td>161</td>
                  <td>Niyamo</td>
                  <td>Om Niyamaya Namah</td>
                  <td>The Appointing Authority</td>
                </tr>
                <tr>
                  <td>162</td>
                  <td>Yamah</td>
                  <td>Om Yamaya Namah</td>
                  <td>The Administrator</td>
                </tr>
                <tr>
                  <td>163</td>
                  <td>Vedyah</td>
                  <td>Om Vedyaya Namah</td>
                  <td>That Which is to be Known</td>
                </tr>
                <tr>
                  <td>164</td>
                  <td>Vaidyah</td>
                  <td>Om Vaidyaya Namah</td>
                  <td>The Supreme Doctor</td>
                </tr>
                <tr>
                  <td>165</td>
                  <td>Sadaa-yogee</td>
                  <td>Om Sadaa-yogine Namah</td>
                  <td>Always in Yoga</td>
                </tr>
                <tr>
                  <td>166</td>
                  <td>Veerahaa</td>
                  <td>Om Veerahaaya Namah</td>
                  <td>Destroyer of Heroes</td>
                </tr>
                <tr>
                  <td>167</td>
                  <td>Maadhavo</td>
                  <td>Om Maadhavaya Namah</td>
                  <td>Lord of All Knowledge</td>
                </tr>
                <tr>
                  <td>168</td>
                  <td>Madhuh</td>
                  <td>Om Madhuve Namah</td>
                  <td>Sweet</td>
                </tr>
                <tr>
                  <td>169</td>
                  <td>Ateendriyo</td>
                  <td>Om Ateendriyaya Namah</td>
                  <td>Beyond the Senses</td>
                </tr>
                <tr>
                  <td>170</td>
                  <td>Mahaamayo</td>
                  <td>Om Mahaamayaya Namah</td>
                  <td>Master of All Maya</td>
                </tr>
                <tr>
                  <td>171</td>
                  <td>Mahotsaaho</td>
                  <td>Om Mahotsaahaya Namah</td>
                  <td>Great Enthusiast</td>
                </tr>
                <tr>
                  <td>172</td>
                  <td>Mahaabalah</td>
                  <td>Om Mahaabalaaya Namah</td>
                  <td>Supremely Strong</td>
                </tr>
                <tr>
                  <td>173</td>
                  <td>Mahaabuddhir</td>
                  <td>Om Mahaabuddhaye Namah</td>
                  <td>Supremely Intelligent</td>
                </tr>
                <tr>
                  <td>174</td>
                  <td>Mahaa-veeryah</td>
                  <td>Om Mahaa-veeryaya Namah</td>
                  <td>Supreme Essence</td>
                </tr>
                <tr>
                  <td>175</td>
                  <td>Mahaa-shaktih</td>
                  <td>Om Mahaa-shaktaye Namah</td>
                  <td>All-Powerful</td>
                </tr>
                <tr>
                  <td>176</td>
                  <td>Mahaa-dyutih</td>
                  <td>Om Mahaa-dyutaye Namah</td>
                  <td>Greatly Luminous</td>
                </tr>
                <tr>
                  <td>177</td>
                  <td>Anirdeshya-vapuh</td>
                  <td>Om Anirdeshya-vapushe Namah</td>
                  <td>Indescribable Form</td>
                </tr>
                <tr>
                  <td>178</td>
                  <td>Shreemaan</td>
                  <td>Om Shreemate Namah</td>
                  <td>Always with Glories</td>
                </tr>
                <tr>
                  <td>179</td>
                  <td>Ameyaatmaa</td>
                  <td>Om Ameyaatmane Namah</td>
                  <td>Immeasurable Essence</td>
                </tr>
                <tr>
                  <td>180</td>
                  <td>Mahaadri-dhrik</td>
                  <td>Om Mahaadri-dhrige Namah</td>
                  <td>Supporter of Great Mountain</td>
                </tr>
                <tr>
                  <td>181</td>
                  <td>Maheshvaasah</td>
                  <td>Om Maheshvaasaya Namah</td>
                  <td>Wielder of Shaarnga</td>
                </tr>
                <tr>
                  <td>182</td>
                  <td>Maheebhartaa</td>
                  <td>Om Maheebhartre Namah</td>
                  <td>Husband of Earth</td>
                </tr>
                <tr>
                  <td>183</td>
                  <td>Shreenivaasah</td>
                  <td>Om Shreenivaasaya Namah</td>
                  <td>Abode of Lakshmi</td>
                </tr>
                <tr>
                  <td>184</td>
                  <td>Sataam gatih</td>
                  <td>Om Sataam gataye Namah</td>
                  <td>Goal for Virtuous People</td>
                </tr>
                <tr>
                  <td>185</td>
                  <td>Aniruddhah</td>
                  <td>Om Aniruddhaya Namah</td>
                  <td>Unobstructed</td>
                </tr>
                <tr>
                  <td>186</td>
                  <td>Suraanando</td>
                  <td>Om Suraanandaya Namah</td>
                  <td>Giver of Happiness</td>
                </tr>
                <tr>
                  <td>187</td>
                  <td>Govindah</td>
                  <td>Om Govindaaya Namah</td>
                  <td>Protector of Cows</td>
                </tr>
                <tr>
                  <td>188</td>
                  <td>Govidaam-patih</td>
                  <td>Om Govidaam-pataye Namah</td>
                  <td>Lord of the Wise</td>
                </tr>
                <tr>
                  <td>189</td>
                  <td>Mareechih</td>
                  <td>Om Mareechaye Namah</td>
                  <td>Effulgence</td>
                </tr>
                <tr>
                  <td>190</td>
                  <td>Damanah</td>
                  <td>Om Damanaaya Namah</td>
                  <td>Controller of Demons</td>
                </tr>
                <tr>
                  <td>191</td>
                  <td>Hamsah</td>
                  <td>Om Hamsaya Namah</td>
                  <td>The Swan</td>
                </tr>
                <tr>
                  <td>192</td>
                  <td>Suparnah</td>
                  <td>Om Suparnaaya Namah</td>
                  <td>Beautiful-Winged</td>
                </tr>
                <tr>
                  <td>193</td>
                  <td>Bhujagottamah</td>
                  <td>Om Bhujagottamaya Namah</td>
                  <td>The Serpent Ananta</td>
                </tr>
                <tr>
                  <td>194</td>
                  <td>Hiranyanaabhah</td>
                  <td>Om Hiranyanaabhaya Namah</td>
                  <td>Golden-Naveled</td>
                </tr>
                <tr>
                  <td>195</td>
                  <td>Sutapaah</td>
                  <td>Om Sutapaaya Namah</td>
                  <td>Glorious Tapas</td>
                </tr>
                <tr>
                  <td>196</td>
                  <td>Padmanaabhah</td>
                  <td>Om Padmanaabhaya Namah</td>
                  <td>Lotus-Naveled</td>
                </tr>
                <tr>
                  <td>197</td>
                  <td>Prajaapatih</td>
                  <td>Om Prajaapataye Namah</td>
                  <td>Source of All Creatures</td>
                </tr>
                <tr>
                  <td>198</td>
                  <td>Amrityuh</td>
                  <td>Om Amrityave Namah</td>
                  <td>Immortal</td>
                </tr>
                <tr>
                  <td>199</td>
                  <td>Sarva-drik</td>
                  <td>Om Sarva-drishe Namah</td>
                  <td>Seer of Everything</td>
                </tr>
                <tr>
                  <td>200</td>
                  <td>Simhah</td>
                  <td>Om Simhaaya Namah</td>
                  <td>Destroyer</td>
                </tr>
                <tr>
                  <td>201</td>
                  <td>Sandhaataa</td>
                  <td>Om Sandhaatree Namah</td>
                  <td>Regulator</td>
                </tr>
                <tr>
                  <td>202</td>
                  <td>Sandhimaan</td>
                  <td>Om Sandhimane Namah</td>
                  <td>Conditioned</td>
                </tr>
                <tr>
                  <td>203</td>
                  <td>Sthirah</td>
                  <td>Om Sthiraya Namah</td>
                  <td>Steady</td>
                </tr>
                <tr>
                  <td>204</td>
                  <td>Ajah</td>
                  <td>Om Ajaaya Namah</td>
                  <td>Unborn</td>
                </tr>
                <tr>
                  <td>205</td>
                  <td>Durmarshanah</td>
                  <td>Om Durmarshanaaya Namah</td>
                  <td>Invincible</td>
                </tr>
                <tr>
                  <td>206</td>
                  <td>Shaastaa</td>
                  <td>Om Shaastre Namah</td>
                  <td>Ruler of the Universe</td>
                </tr>
                <tr>
                  <td>207</td>
                  <td>Visrutaatmaa</td>
                  <td>Om Visrutaatmane Namah</td>
                  <td>Known as Atma in Vedas</td>
                </tr>
                <tr>
                  <td>208</td>
                  <td>Suraarihaa</td>
                  <td>Om Suraarihaaya Namah</td>
                  <td>Destroyer of Deva's Enemies</td>
                </tr>
                <tr>
                  <td>209</td>
                  <td>Guruh</td>
                  <td>Om Gurave Namah</td>
                  <td>Teacher</td>
                </tr>
                <tr>
                  <td>210</td>
                  <td>Gurutamah</td>
                  <td>Om Gurutamaya Namah</td>
                  <td>Greatest Teacher</td>
                </tr>
                <tr>
                  <td>211</td>
                  <td>Dhaama</td>
                  <td>Om Dhaamne Namah</td>
                  <td>The Goal</td>
                </tr>
                <tr>
                  <td>212</td>
                  <td>Satyah</td>
                  <td>Om Satyaya Namah</td>
                  <td>Truth</td>
                </tr>
                <tr>
                  <td>213</td>
                  <td>Satya-paraakramah</td>
                  <td>Om Satya-paraakramaya Namah</td>
                  <td>Dynamic Truth</td>
                </tr>
                <tr>
                  <td>214</td>
                  <td>Nimishah</td>
                  <td>Om Nimishaya Namah</td>
                  <td>Closed-Eyed</td>
                </tr>
                <tr>
                  <td>215</td>
                  <td>Animishah</td>
                  <td>Om Animishaya Namah</td>
                  <td>Ever-Knowing</td>
                </tr>
                <tr>
                  <td>216</td>
                  <td>Sragvee</td>
                  <td>Om Sragvine Namah</td>
                  <td>Garlanded</td>
                </tr>
                <tr>
                  <td>217</td>
                  <td>Vaachaspatir-udaara-dheeh</td>
                  <td>Om Vaachaspatiye Udaara-dheeye Namah</td>
                  <td>Eloquent Lord</td>
                </tr>
                <tr>
                  <td>218</td>
                  <td>Agraneeh</td>
                  <td>Om Agranaye Namah</td>
                  <td>Guide</td>
                </tr>
                <tr>
                  <td>219</td>
                  <td>Graamaneeh</td>
                  <td>Om Graamanye Namah</td>
                  <td>Leader</td>
                </tr>
                <tr>
                  <td>220</td>
                  <td>Shreemaan</td>
                  <td>Om Shreemate Namah</td>
                  <td>Glorious</td>
                </tr>
                <tr>
                  <td>221</td>
                  <td>Nyaayah</td>
                  <td>Om Nyaayaaya Namah</td>
                  <td>Justice</td>
                </tr>
                <tr>
                  <td>222</td>
                  <td>Netaa</td>
                  <td>Om Netre Namah</td>
                  <td>Leader</td>
                </tr>
                <tr>
                  <td>223</td>
                  <td>Sameeranah</td>
                  <td>Om Sameeranaya Namah</td>
                  <td>Administrator</td>
                </tr>
                <tr>
                  <td>224</td>
                  <td>Sahasra-moordhaa</td>
                  <td>Om Sahasrah-moordhaye Namah</td>
                  <td>Thousand-Headed</td>
                </tr>
                <tr>
                  <td>225</td>
                  <td>Vishvaatmaa</td>
                  <td>Om Vishvaatmane Namah</td>
                  <td>Universal Soul</td>
                </tr>
                <tr>
                  <td>226</td>
                  <td>Sahasraakshah</td>
                  <td>Om Sahasraakshaya Namah</td>
                  <td>Thousand-Eyed</td>
                </tr>
                <tr>
                  <td>227</td>
                  <td>Sahasrapaat</td>
                  <td>Om Sahasrapade Namah</td>
                  <td>Thousand-Footed</td>
                </tr>
                <tr>
                  <td>228</td>
                  <td>Aavartanah</td>
                  <td>Om Aavartanaya Namah</td>
                  <td>Dynamic</td>
                </tr>
                <tr>
                  <td>229</td>
                  <td>Nivritaatmaa</td>
                  <td>Om Nivritaatmane Namah</td>
                  <td>Withdrawn Soul</td>
                </tr>
                <tr>
                  <td>230</td>
                  <td>Samvritah</td>
                  <td>Om Samvritaya Namah</td>
                  <td>Veiled</td>
                </tr>
                <tr>
                  <td>231</td>
                  <td>Sam-pramardanah</td>
                  <td>Om Sam-pramardanaya Namah</td>
                  <td>Persecutor</td>
                </tr>
                <tr>
                  <td>232</td>
                  <td>Ahassamvartakah</td>
                  <td>Om Ahassamvartakaya Namah</td>
                  <td>Day-Energizer</td>
                </tr>
                <tr>
                  <td>233</td>
                  <td>Vahnih</td>
                  <td>Om Vahnaye Namah</td>
                  <td>Fire</td>
                </tr>
                <tr>
                  <td>234</td>
                  <td>Anilah</td>
                  <td>Om Anilaya Namah</td>
                  <td>Air</td>
                </tr>
                <tr>
                  <td>235</td>
                  <td>Dharaneedharah</td>
                  <td>Om Dharaneedharaya Namah</td>
                  <td>Earth-Supporter</td>
                </tr>
                <tr>
                  <td>236</td>
                  <td>Suprasaadah</td>
                  <td>Om Suprasadaya Namah</td>
                  <td>Fully Satisfied</td>
                </tr>
                <tr>
                  <td>237</td>
                  <td>Prasanaatmaa</td>
                  <td>Om Prasanaatmane Namah</td>
                  <td>Blissful Self</td>
                </tr>
                <tr>
                  <td>238</td>
                  <td>Vishva-dhrik</td>
                  <td>Om Vishva-dhrishe Namah</td>
                  <td>World Supporter</td>
                </tr>
                <tr>
                  <td>239</td>
                  <td>Vishvabhuk</td>
                  <td>Om Vishvabhuje Namah</td>
                  <td>World Enjoyer</td>
                </tr>
                <tr>
                  <td>240</td>
                  <td>Vibhuh</td>
                  <td>Om Vibhave Namah</td>
                  <td>All-Pervading</td>
                </tr>
                <tr>
                  <td>241</td>
                  <td>Satkartaa</td>
                  <td>Om Satkartre Namah</td>
                  <td>Adorer of Good</td>
                </tr>
                <tr>
                  <td>242</td>
                  <td>Satkritah</td>
                  <td>Om Satkritaya Namah</td>
                  <td>Adored by Good</td>
                </tr>
                <tr>
                  <td>243</td>
                  <td>Saadhur</td>
                  <td>Om Saadhave Namah</td>
                  <td>Righteous</td>
                </tr>
                <tr>
                  <td>244</td>
                  <td>Jahnuh</td>
                  <td>Om Jahnave Namah</td>
                  <td>Leader</td>
                </tr>
                <tr>
                  <td>245</td>
                  <td>Naaraayanah</td>
                  <td>Om Naaraayanaaya Namah</td>
                  <td>Resides in Waters</td>
                </tr>
                <tr>
                  <td>246</td>
                  <td>Narah</td>
                  <td>Om Naraya Namah</td>
                  <td>Guide</td>
                </tr>
                <tr>
                  <td>247</td>
                  <td>Asankhyeyah</td>
                  <td>Om Asankhyeyaya Namah</td>
                  <td>Numberless</td>
                </tr>
                <tr>
                  <td>248</td>
                  <td>Aprameyaatmaa</td>
                  <td>Om Aprameyaatmane Namah</td>
                  <td>Unknowable Soul</td>
                </tr>
                <tr>
                  <td>249</td>
                  <td>Vishishtah</td>
                  <td>Om Vishishtaya Namah</td>
                  <td>Transcendent</td>
                </tr>
                <tr>
                  <td>250</td>
                  <td>Shishta-krit</td>
                  <td>Om Shishta-krite Namah</td>
                  <td>Law-Maker</td>
                </tr>
                <tr>
                  <td>251</td>
                  <td>Shuchih</td>
                  <td>Om Shuchaye Namah</td>
                  <td>Pure</td>
                </tr>
                <tr>
                  <td>252</td>
                  <td>Siddhaarthah</td>
                  <td>Om Siddhaarthaya Namah</td>
                  <td>Possessor of All</td>
                </tr>
                <tr>
                  <td>253</td>
                  <td>Siddhasankalpah</td>
                  <td>Om Siddhasankalpaya Namah</td>
                  <td>Wish-Fulfiller</td>
                </tr>
                <tr>
                  <td>254</td>
                  <td>Siddhidah</td>
                  <td>Om Siddhidaaya Namah</td>
                  <td>Giver of Boons</td>
                </tr>
                <tr>
                  <td>255</td>
                  <td>Siddhisaadhanah</td>
                  <td>Om Siddhisaadhanaya Namah</td>
                  <td>Power Behind Sadhana</td>
                </tr>
                <tr>
                  <td>256</td>
                  <td>Vrishaahee</td>
                  <td>Om Vrishahaye Namah</td>
                  <td>Controller of Actions</td>
                </tr>
                <tr>
                  <td>257</td>
                  <td>Vrishabhah</td>
                  <td>Om Vrishabhaya Namah</td>
                  <td>Showerer of Dharma</td>
                </tr>
                <tr>
                  <td>258</td>
                  <td>Vishnuh</td>
                  <td>Om Vishnave Namah</td>
                  <td>All-Pervading</td>
                </tr>
                <tr>
                  <td>259</td>
                  <td>Vrishaparvaa</td>
                  <td>Om Vrishaparvaya Namah</td>
                  <td>Ladder to Dharma</td>
                </tr>
                <tr>
                  <td>260</td>
                  <td>Vrishodarah</td>
                  <td>Om Vrishodaraya Namah</td>
                  <td>Source of Life</td>
                </tr>
                <tr>
                  <td>261</td>
                  <td>Vardhanah</td>
                  <td>Om Vardhanaya Namah</td>
                  <td>The Nurturer and Nourisher</td>
                </tr>
                <tr>
                  <td>262</td>
                  <td>Vardhamaanah</td>
                  <td>Om Vardhamanaya Namah</td>
                  <td>He Who Can Grow Into Any Dimension</td>
                </tr>
                <tr>
                  <td>263</td>
                  <td>Viviktah</td>
                  <td>Om Viviktaya Namah</td>
                  <td>Separate</td>
                </tr>
                <tr>
                  <td>264</td>
                  <td>Shruti-saagarah</td>
                  <td>Om Shruti-saagaraya Namah</td>
                  <td>The Ocean for All Scripture</td>
                </tr>
                <tr>
                  <td>265</td>
                  <td>Subhujah</td>
                  <td>Om Subhujaya Namah</td>
                  <td>He Who Has Graceful Arms</td>
                </tr>
                <tr>
                  <td>266</td>
                  <td>Durdurdharah</td>
                  <td>Om Durdurdhaya Namah</td>
                  <td>He Who Cannot Be Known by Great Yogis</td>
                </tr>
                <tr>
                  <td>267</td>
                  <td>Vaagmee</td>
                  <td>Om Vaagmine Namah</td>
                  <td>He Who Is Eloquent in Speech</td>
                </tr>
                <tr>
                  <td>268</td>
                  <td>Mahendrah</td>
                  <td>Om Mahendraya Namah</td>
                  <td>The Lord of Indra</td>
                </tr>
                <tr>
                  <td>269</td>
                  <td>Vasudah</td>
                  <td>Om Vasudaya Namah</td>
                  <td>He Who Gives All Wealth</td>
                </tr>
                <tr>
                  <td>270</td>
                  <td>Vasuh</td>
                  <td>Om Vasave Namah</td>
                  <td>He Who Is Wealth</td>
                </tr>
                <tr>
                  <td>271</td>
                  <td>Naika-roopo</td>
                  <td>Om Naika-roopaya Namah</td>
                  <td>He Who Has Unlimited Forms</td>
                </tr>
                <tr>
                  <td>272</td>
                  <td>Brihad-roopah</td>
                  <td>Om Brihad-roopaya Namah</td>
                  <td>Vast, Of Infinite Dimensions</td>
                </tr>
                <tr>
                  <td>273</td>
                  <td>Shipivishtah</td>
                  <td>Om Shipivishtaya Namah</td>
                  <td>The Presiding Deity of the Sun</td>
                </tr>
                <tr>
                  <td>274</td>
                  <td>Prakaashanah</td>
                  <td>Om Prakaashanaya Namah</td>
                  <td>He Who Illuminates</td>
                </tr>
                <tr>
                  <td>275</td>
                  <td>Ojas-tejo-dyutidharah</td>
                  <td>Om Ojas-tejo-dyutidharaya Namah</td>
                  <td>The Possessor of Vitality, Effulgence, and Beauty</td>
                </tr>
                <tr>
                  <td>276</td>
                  <td>Prakaashaatmaa</td>
                  <td>Om Prakaashaatmane Namah</td>
                  <td>The Effulgent Self</td>
                </tr>
                <tr>
                  <td>277</td>
                  <td>Prataapanah</td>
                  <td>Om Prataapanaya Namah</td>
                  <td>Thermal Energy; One Who Heats</td>
                </tr>
                <tr>
                  <td>278</td>
                  <td>Riddhah</td>
                  <td>Om Riddhaya Namah</td>
                  <td>Full of Prosperity</td>
                </tr>
                <tr>
                  <td>279</td>
                  <td>Spashtaaksharo</td>
                  <td>Om Spashtaaksharaya Namah</td>
                  <td>One Who Is Indicated by OM</td>
                </tr>
                <tr>
                  <td>280</td>
                  <td>Mantrah</td>
                  <td>Om Mantraya Namah</td>
                  <td>The Nature of the Vedic Mantras</td>
                </tr>
                <tr>
                  <td>281</td>
                  <td>Chandraamshuh</td>
                  <td>Om Chandraamshave Namah</td>
                  <td>The Rays of the Moon</td>
                </tr>
                <tr>
                  <td>282</td>
                  <td>Bhaaskara-dyutih</td>
                  <td>Om Bhaaskara-dyutaye Namah</td>
                  <td>The Effulgence of the Sun</td>
                </tr>
                <tr>
                  <td>283</td>
                  <td>Amritaamsoodbhavo</td>
                  <td>Om Amritaamsoodbhavaya Namah</td>
                  <td>The Moon Who Gives Flavor to Vegetables</td>
                </tr>
                <tr>
                  <td>284</td>
                  <td>Bhaanuh</td>
                  <td>Om Bhaanave Namah</td>
                  <td>Self-Effulgent</td>
                </tr>
                <tr>
                  <td>285</td>
                  <td>Shashabindhuh</td>
                  <td>Om Shashabindhave Namah</td>
                  <td>The Moon Who Has a Rabbit-Like Spot</td>
                </tr>
                <tr>
                  <td>286</td>
                  <td>Sureshvarah</td>
                  <td>Om Sureshvaraya Namah</td>
                  <td>A Person of Extreme Charity</td>
                </tr>
                <tr>
                  <td>287</td>
                  <td>Aushadham</td>
                  <td>Om Aushadhaya Namah</td>
                  <td>Medicine</td>
                </tr>
                <tr>
                  <td>288</td>
                  <td>Jagatas-setuh</td>
                  <td>Om Jagatas-setave Namah</td>
                  <td>A Bridge Across the Material Energy</td>
                </tr>
                <tr>
                  <td>289</td>
                  <td>Satya-dharma-paraakramah</td>
                  <td>Om Satya-dharma-paraakramaya Namah</td>
                  <td>
                    One Who Champions Heroically for Truth and Righteousness
                  </td>
                </tr>
                <tr>
                  <td>290</td>
                  <td>Bhoota-bhavya-bhavan-naathah</td>
                  <td>Om Bhoota-bhavya-bhavan-naathaya Namah</td>
                  <td>The Lord of Past, Present, and Future</td>
                </tr>
                <tr>
                  <td>291</td>
                  <td>Pavanah</td>
                  <td>Om Pavanaya Namah</td>
                  <td>The Air that Fills the Universe</td>
                </tr>
                <tr>
                  <td>292</td>
                  <td>Paavanah</td>
                  <td>Om Paavanaya Namah</td>
                  <td>He Who Gives Life-Sustaining Power to Air</td>
                </tr>
                <tr>
                  <td>293</td>
                  <td>Analah</td>
                  <td>Om Analaya Namah</td>
                  <td>Fire</td>
                </tr>
                <tr>
                  <td>294</td>
                  <td>Kaamaha</td>
                  <td>Om Kaamahaaya Namah</td>
                  <td>He Who Destroys All Desires</td>
                </tr>
                <tr>
                  <td>295</td>
                  <td>Kaamakrit</td>
                  <td>Om Kaamakrite Namah</td>
                  <td>He Who Fulfills All Desires</td>
                </tr>
                <tr>
                  <td>296</td>
                  <td>Kaantah</td>
                  <td>Om Kaantaya Namah</td>
                  <td>He Who Is of Enchanting Form</td>
                </tr>
                <tr>
                  <td>297</td>
                  <td>Kaamah</td>
                  <td>Om Kaamaya Namah</td>
                  <td>The Beloved</td>
                </tr>
                <tr>
                  <td>298</td>
                  <td>Kaamapradah</td>
                  <td>Om Kaamapradaaya Namah</td>
                  <td>He Who Supplies Desired Objects</td>
                </tr>
                <tr>
                  <td>299</td>
                  <td>Prabhuh</td>
                  <td>Om Prabhave Namah</td>
                  <td>The Lord</td>
                </tr>
                <tr>
                  <td>300</td>
                  <td>Yugaadi-krit</td>
                  <td>Om Yugaadi-krite Namah</td>
                  <td>The Creator of the Yugas</td>
                </tr>
                <tr>
                  <td>301</td>
                  <td>Yugaavartah</td>
                  <td>Om Yugaavartaya Namah</td>
                  <td>The Law Behind Time</td>
                </tr>
                <tr>
                  <td>302</td>
                  <td>Naikamaayah</td>
                  <td>Om Naikamaayaya Namah</td>
                  <td>He Whose Forms Are Endless and Varied</td>
                </tr>
                <tr>
                  <td>303</td>
                  <td>Mahaashanah</td>
                  <td>Om Mahaashanaya Namah</td>
                  <td>He Who Eats Up Everything</td>
                </tr>
                <tr>
                  <td>304</td>
                  <td>Adrishyah</td>
                  <td>Om Adrishyaya Namah</td>
                  <td>Imperceptible</td>
                </tr>
                <tr>
                  <td>305</td>
                  <td>Vyaktaroopah</td>
                  <td>Om Vyaktaroopaya Namah</td>
                  <td>He Who Is Perceptible to the Yogi</td>
                </tr>
                <tr>
                  <td>306</td>
                  <td>Sahasrajit</td>
                  <td>Om Sahasrajite Namah</td>
                  <td>He Who Vanquishes Thousands</td>
                </tr>
                <tr>
                  <td>307</td>
                  <td>Anantajit</td>
                  <td>Om Anantajite Namah</td>
                  <td>Ever-Victorious</td>
                </tr>
                <tr>
                  <td>308</td>
                  <td>Ishtah</td>
                  <td>Om Ishtaya Namah</td>
                  <td>He Who Is Invoked Through Vedic Rituals</td>
                </tr>
                <tr>
                  <td>309</td>
                  <td>Visishtah</td>
                  <td>Om Visishtaya Namah</td>
                  <td>The Noblest and Most Sacred</td>
                </tr>
                <tr>
                  <td>310</td>
                  <td>Sishteshtah</td>
                  <td>Om Sishteshtaya Namah</td>
                  <td>The Greatest Beloved</td>
                </tr>
                <tr>
                  <td>311</td>
                  <td>Shikhandee</td>
                  <td>Om Shikhandine Namah</td>
                  <td>He Who Wears a Peacock Feather</td>
                </tr>
                <tr>
                  <td>312</td>
                  <td>Nahushah</td>
                  <td>Om Nahushaya Namah</td>
                  <td>He Who Binds All with Maya</td>
                </tr>
                <tr>
                  <td>313</td>
                  <td>Vrishah</td>
                  <td>Om Vrishaya Namah</td>
                  <td>He Who Is Dharma</td>
                </tr>
                <tr>
                  <td>314</td>
                  <td>Krodhahaa</td>
                  <td>Om Krodhahaaya Namah</td>
                  <td>He Who Destroys Anger</td>
                </tr>
                <tr>
                  <td>315</td>
                  <td>Krodhakrit-kartaa</td>
                  <td>Om Krodhakrite-kartre Namah</td>
                  <td>He Who Generates Anger Against the Lower Tendency</td>
                </tr>
                <tr>
                  <td>316</td>
                  <td>Visvabaahuh</td>
                  <td>Om Visvabaahave Namah</td>
                  <td>He Whose Hand Is in Everything</td>
                </tr>
                <tr>
                  <td>317</td>
                  <td>Maheedharah</td>
                  <td>Om Maheedharaya Namah</td>
                  <td>The Support of the Earth</td>
                </tr>
                <tr>
                  <td>318</td>
                  <td>Achyutah</td>
                  <td>Om Achyutaaya Namah</td>
                  <td>He Who Undergoes No Changes</td>
                </tr>
                <tr>
                  <td>319</td>
                  <td>Prathitah</td>
                  <td>Om Prathitaya Namah</td>
                  <td>He Who Exists Pervading All</td>
                </tr>
                <tr>
                  <td>320</td>
                  <td>Praanah</td>
                  <td>Om Praanaaya Namah</td>
                  <td>The Prana in All Living Creatures</td>
                </tr>
                <tr>
                  <td>321</td>
                  <td>Praanadah</td>
                  <td>Om Praanadaaya Namah</td>
                  <td>He Who Gives Prana</td>
                </tr>
                <tr>
                  <td>322</td>
                  <td>Vaasavaanujah</td>
                  <td>Om Vaasavaanujaya Namah</td>
                  <td>The Brother of Indra</td>
                </tr>
                <tr>
                  <td>323</td>
                  <td>Apaam-nidhih</td>
                  <td>Om Apaam-nidhaye Namah</td>
                  <td>Treasure of Waters (the Ocean)</td>
                </tr>
                <tr>
                  <td>324</td>
                  <td>Adhishthaanam</td>
                  <td>Om Adhishthaanaaya Namah</td>
                  <td>The Substratum of the Entire Universe</td>
                </tr>
                <tr>
                  <td>325</td>
                  <td>Apramattah</td>
                  <td>Om Apramattaaya Namah</td>
                  <td>He Who Never Makes a Wrong Judgement</td>
                </tr>
                <tr>
                  <td>326</td>
                  <td>Pratishthitah</td>
                  <td>Om Pratishthitaaya Namah</td>
                  <td>He Who Has No Cause</td>
                </tr>
                <tr>
                  <td>327</td>
                  <td>Skandah</td>
                  <td>Om Skandaaya Namah</td>
                  <td>He Whose Glory Is Expressed Through Subrahmanya</td>
                </tr>
                <tr>
                  <td>328</td>
                  <td>Skanda-dharah</td>
                  <td>Om Skanda-dharaaya Namah</td>
                  <td>Upholder of Withering Righteousness</td>
                </tr>
                <tr>
                  <td>329</td>
                  <td>Dhuryah</td>
                  <td>Om Dhuryaaya Namah</td>
                  <td>Who Carries Out Creation Etc Without Hitch</td>
                </tr>
                <tr>
                  <td>330</td>
                  <td>Varadah</td>
                  <td>Om Varadaaya Namah</td>
                  <td>He Who Fulfills Boons</td>
                </tr>
                <tr>
                  <td>331</td>
                  <td>Vaayuvaahanah</td>
                  <td>Om Vaayuvaahanaaya Namah</td>
                  <td>Controller of Winds</td>
                </tr>
                <tr>
                  <td>332</td>
                  <td>Vaasudevah</td>
                  <td>Om Vaasudevaaya Namah</td>
                  <td>
                    Dwelling in All Creatures Although Not Affected by That
                    Condition
                  </td>
                </tr>
                <tr>
                  <td>333</td>
                  <td>Brihat-bhaanuh</td>
                  <td>Om Brihat-bhaanave Namah</td>
                  <td>
                    He Who Illumines the World with the Rays of the Sun and Moon
                  </td>
                </tr>
                <tr>
                  <td>334</td>
                  <td>Aadidevah</td>
                  <td>Om Aadidevaaya Namah</td>
                  <td>The Primary Source of Everything</td>
                </tr>
                <tr>
                  <td>335</td>
                  <td>Purandarah</td>
                  <td>Om Purandaraaya Namah</td>
                  <td>Destroyer of Cities</td>
                </tr>
                <tr>
                  <td>336</td>
                  <td>Ashokah</td>
                  <td>Om Ashokaaya Namah</td>
                  <td>He Who Has No Sorrow</td>
                </tr>
                <tr>
                  <td>337</td>
                  <td>Taaranah</td>
                  <td>Om Taaranaaya Namah</td>
                  <td>He Who Enables Others to Cross</td>
                </tr>
                <tr>
                  <td>338</td>
                  <td>Taarah</td>
                  <td>Om Taaraaya Namah</td>
                  <td>He Who Saves</td>
                </tr>
                <tr>
                  <td>339</td>
                  <td>Shoorah</td>
                  <td>Om Shooraaya Namah</td>
                  <td>The Valiant</td>
                </tr>
                <tr>
                  <td>340</td>
                  <td>Shaurih</td>
                  <td>Om Shauraye Namah</td>
                  <td>He Who Incarnated in the Dynasty of Shoora</td>
                </tr>
                <tr>
                  <td>341</td>
                  <td>Janeshvarah</td>
                  <td>Om Janeshvaraaya Namah</td>
                  <td>The Lord of the People</td>
                </tr>
                <tr>
                  <td>342</td>
                  <td>Anukoolah</td>
                  <td>Om Anukoolaaya Namah</td>
                  <td>Well-Wisher of Everyone</td>
                </tr>
                <tr>
                  <td>343</td>
                  <td>Sataavarttah</td>
                  <td>Om Sataavarttaaya Namah</td>
                  <td>He Who Takes Infinite Forms</td>
                </tr>
                <tr>
                  <td>344</td>
                  <td>Padmee</td>
                  <td>Om Padmine Namah</td>
                  <td>He Who Holds a Lotus</td>
                </tr>
                <tr>
                  <td>345</td>
                  <td>Padmanibhekshanah</td>
                  <td>Om Padmanibhekshanaaya Namah</td>
                  <td>Lotus-Eyed</td>
                </tr>
                <tr>
                  <td>346</td>
                  <td>Padmanaabhah</td>
                  <td>Om Padmanaabhaya Namah</td>
                  <td>He Who Has a Lotus-Navel</td>
                </tr>
                <tr>
                  <td>347</td>
                  <td>Aravindaakshah</td>
                  <td>Om Aravindaakshaaya Namah</td>
                  <td>He Who Has Eyes as Beautiful as the Lotus</td>
                </tr>
                <tr>
                  <td>348</td>
                  <td>Padmagarbhah</td>
                  <td>Om Padmagarbhaaya Namah</td>
                  <td>
                    He Who Is Being Meditated Upon in the Lotus of the Heart
                  </td>
                </tr>
                <tr>
                  <td>349</td>
                  <td>Shareerabhrit</td>
                  <td>Om Shareerabhrite Namah</td>
                  <td>He Who Sustains All Bodies</td>
                </tr>
                <tr>
                  <td>350</td>
                  <td>Maharddhi</td>
                  <td>Om Maharddhaye Namah</td>
                  <td>One Who Has Great Prosperity</td>
                </tr>
                <tr>
                  <td>351</td>
                  <td>Riddhah</td>
                  <td>Om Riddhaaya Namah</td>
                  <td>He Who Has Expanded Himself as the Universe</td>
                </tr>
                <tr>
                  <td>352</td>
                  <td>Vriddhaatmaa</td>
                  <td>Om Vriddhaatmane Namah</td>
                  <td>The Ancient Self</td>
                </tr>
                <tr>
                  <td>353</td>
                  <td>Mahaakshah</td>
                  <td>Om Mahaakshaaya Namah</td>
                  <td>The Great-Eyed</td>
                </tr>
                <tr>
                  <td>354</td>
                  <td>Garudadhvajah</td>
                  <td>Om Garudadhvajaaya Namah</td>
                  <td>One Who Has Garuda on His Flag</td>
                </tr>
                <tr>
                  <td>355</td>
                  <td>Atulah</td>
                  <td>Om Atulaaya Namah</td>
                  <td>Incomparable</td>
                </tr>
                <tr>
                  <td>356</td>
                  <td>Sharabhah</td>
                  <td>Om Sharabhaaya Namah</td>
                  <td>One Who Dwells and Shines Forth Through the Bodies</td>
                </tr>
                <tr>
                  <td>357</td>
                  <td>Bheemah</td>
                  <td>Om Bheemaaya Namah</td>
                  <td>The Terrible</td>
                </tr>
                <tr>
                  <td>358</td>
                  <td>Samayajnah</td>
                  <td>Om Samayajnaaya Namah</td>
                  <td>
                    One Whose Worship Is Nothing More Than Keeping an Equal
                    Vision of the Mind by the Devotee
                  </td>
                </tr>
                <tr>
                  <td>359</td>
                  <td>Havirharih</td>
                  <td>Om Havirharaye Namah</td>
                  <td>The Receiver of All Oblation</td>
                </tr>
                <tr>
                  <td>360</td>
                  <td>Sarva-lakshana-lakshanyah</td>
                  <td>Om Sarva-lakshana-lakshanyaaya Namah</td>
                  <td>Known Through All Proofs</td>
                </tr>
                <tr>
                  <td>361</td>
                  <td>Lakshmeevaan</td>
                  <td>Om Lakshmeevaanaya Namah</td>
                  <td>Consort of Lakshmi</td>
                </tr>
                <tr>
                  <td>362</td>
                  <td>Samitinjayah</td>
                  <td>Om Samitinjayaya Namah</td>
                  <td>Ever-Victorious</td>
                </tr>
                <tr>
                  <td>363</td>
                  <td>Viksharah</td>
                  <td>Om Viksharaya Namah</td>
                  <td>Imperishable</td>
                </tr>
                <tr>
                  <td>364</td>
                  <td>Rohitah</td>
                  <td>Om Rohitaya Namah</td>
                  <td>Fish Incarnation</td>
                </tr>
                <tr>
                  <td>365</td>
                  <td>Maargah</td>
                  <td>Om Maargaya Namah</td>
                  <td>The Path</td>
                </tr>
                <tr>
                  <td>366</td>
                  <td>Hetuh</td>
                  <td>Om Hetave Namah</td>
                  <td>The Cause</td>
                </tr>
                <tr>
                  <td>367</td>
                  <td>Daamodarah</td>
                  <td>Om Daamodaraya Namah</td>
                  <td>One with Rope-Bound Belly</td>
                </tr>
                <tr>
                  <td>368</td>
                  <td>Sahah</td>
                  <td>Om Sahaya Namah</td>
                  <td>All-Enduring</td>
                </tr>
                <tr>
                  <td>369</td>
                  <td>Maheedharah</td>
                  <td>Om Maheedharaya Namah</td>
                  <td>Bearer of the Earth</td>
                </tr>
                <tr>
                  <td>370</td>
                  <td>Mahaabhaago</td>
                  <td>Om Mahaabhaagaya Namah</td>
                  <td>Greatest Share Receiver</td>
                </tr>
                <tr>
                  <td>371</td>
                  <td>Vegavaan</td>
                  <td>Om Vegavanaaya Namah</td>
                  <td>Swift</td>
                </tr>
                <tr>
                  <td>372</td>
                  <td>Amitaashanah</td>
                  <td>Om Amitaashanaya Namah</td>
                  <td>Endless Appetite</td>
                </tr>
                <tr>
                  <td>373</td>
                  <td>Udbhavah</td>
                  <td>Om Udbhavaya Namah</td>
                  <td>Originator</td>
                </tr>
                <tr>
                  <td>374</td>
                  <td>Kshobhanah</td>
                  <td>Om Kshobhanaya Namah</td>
                  <td>Agitator</td>
                </tr>
                <tr>
                  <td>375</td>
                  <td>Devah</td>
                  <td>Om Devaaya Namah</td>
                  <td>He Who Revels</td>
                </tr>
                <tr>
                  <td>376</td>
                  <td>Shreegarbhah</td>
                  <td>Om Shreegarbhaaya Namah</td>
                  <td>Containing All Glories</td>
                </tr>
                <tr>
                  <td>377</td>
                  <td>Parameshvarah</td>
                  <td>Om Parameshvaraaya Namah</td>
                  <td>Supreme Lord</td>
                </tr>
                <tr>
                  <td>378</td>
                  <td>Karanam</td>
                  <td>Om Karanaya Namah</td>
                  <td>The Instrument</td>
                </tr>
                <tr>
                  <td>379</td>
                  <td>Kaaranam</td>
                  <td>Om Kaaranaya Namah</td>
                  <td>The Cause</td>
                </tr>
                <tr>
                  <td>380</td>
                  <td>Kartaa</td>
                  <td>Om Kartre Namah</td>
                  <td>The Doer</td>
                </tr>
                <tr>
                  <td>381</td>
                  <td>Vikartaa</td>
                  <td>Om Vikartre Namah</td>
                  <td>Creator of Varieties</td>
                </tr>
                <tr>
                  <td>382</td>
                  <td>Gahanah</td>
                  <td>Om Gahanaaya Namah</td>
                  <td>The Unknowable</td>
                </tr>
                <tr>
                  <td>383</td>
                  <td>Guhah</td>
                  <td>Om Guhaaya Namah</td>
                  <td>Dwells in the Heart's Cave</td>
                </tr>
                <tr>
                  <td>384</td>
                  <td>Vyavasaayah</td>
                  <td>Om Vyavasaayaaya Namah</td>
                  <td>Resolute</td>
                </tr>
                <tr>
                  <td>385</td>
                  <td>Vyavasthaanah</td>
                  <td>Om Vyavasthaanaaya Namah</td>
                  <td>The Substratum</td>
                </tr>
                <tr>
                  <td>386</td>
                  <td>Samsthaanah</td>
                  <td>Om Samsthaanaaya Namah</td>
                  <td>Ultimate Authority</td>
                </tr>
                <tr>
                  <td>387</td>
                  <td>Sthaanadah</td>
                  <td>Om Sthaanadaaya Namah</td>
                  <td>Confers Right Abode</td>
                </tr>
                <tr>
                  <td>388</td>
                  <td>Dhruvah</td>
                  <td>Om Dhruvaaya Namah</td>
                  <td>The Changeless</td>
                </tr>
                <tr>
                  <td>389</td>
                  <td>Pararddhih</td>
                  <td>Om Pararddhaye Namah</td>
                  <td>Supreme Manifestations</td>
                </tr>
                <tr>
                  <td>390</td>
                  <td>Paramaspashtah</td>
                  <td>Om Paramaspashtaaya Namah</td>
                  <td>Extremely Vivid</td>
                </tr>
                <tr>
                  <td>391</td>
                  <td>Tushtah</td>
                  <td>Om Tushtaaya Namah</td>
                  <td>Contented</td>
                </tr>
                <tr>
                  <td>392</td>
                  <td>Pushtah</td>
                  <td>Om Pushtaaya Namah</td>
                  <td>Ever-Full</td>
                </tr>
                <tr>
                  <td>393</td>
                  <td>Shubhekshanah</td>
                  <td>Om Shubhekshanaaya Namah</td>
                  <td>All-Auspicious Gaze</td>
                </tr>
                <tr>
                  <td>394</td>
                  <td>Raamah</td>
                  <td>Om Raamaaya Namah</td>
                  <td>Most Handsome</td>
                </tr>
                <tr>
                  <td>395</td>
                  <td>Viraamah</td>
                  <td>Om Viraamaaya Namah</td>
                  <td>Abode of Perfect Rest</td>
                </tr>
                <tr>
                  <td>396</td>
                  <td>Virajo</td>
                  <td>Om Virajaaya Namah</td>
                  <td>Passionless</td>
                </tr>
                <tr>
                  <td>397</td>
                  <td>Maargah</td>
                  <td>Om Maargaya Namah</td>
                  <td>The Path</td>
                </tr>
                <tr>
                  <td>398</td>
                  <td>Neyah</td>
                  <td>Om Neyaaya Namah</td>
                  <td>The Guide</td>
                </tr>
                <tr>
                  <td>399</td>
                  <td>Nayah</td>
                  <td>Om Nayaaya Namah</td>
                  <td>One Who Leads</td>
                </tr>
                <tr>
                  <td>400</td>
                  <td>Anayah</td>
                  <td>Om Anayaaya Namah</td>
                  <td>Without Leader</td>
                </tr>
                <tr>
                  <td>401</td>
                  <td>Veerah</td>
                  <td>Om Veeraaya Namah</td>
                  <td>The Valiant</td>
                </tr>
                <tr>
                  <td>402</td>
                  <td>Shaktimataam-shresthah</td>
                  <td>Om Shaktimataam-shresthaaya Namah</td>
                  <td>Best Among Powerful</td>
                </tr>
                <tr>
                  <td>403</td>
                  <td>Dharmah</td>
                  <td>Om Dharmaaya Namah</td>
                  <td>The Law of Being</td>
                </tr>
                <tr>
                  <td>404</td>
                  <td>Dharmaviduttamah</td>
                  <td>Om Dharmaviduttamaaya Namah</td>
                  <td>Highest Among Realized</td>
                </tr>
                <tr>
                  <td>405</td>
                  <td>Vaikunthah</td>
                  <td>Om Vaikunthaaya Namah</td>
                  <td>Prevents Wrong Paths</td>
                </tr>
                <tr>
                  <td>406</td>
                  <td>Purushah</td>
                  <td>Om Purushaaya Namah</td>
                  <td>Dwells in All Bodies</td>
                </tr>
                <tr>
                  <td>407</td>
                  <td>Praanah</td>
                  <td>Om Praanaaya Namah</td>
                  <td>Life</td>
                </tr>
                <tr>
                  <td>408</td>
                  <td>Praanadah</td>
                  <td>Om Praanadaaya Namah</td>
                  <td>Giver of Life</td>
                </tr>
                <tr>
                  <td>409</td>
                  <td>Pranavah</td>
                  <td>Om Pranavaaya Namah</td>
                  <td>Praised by the Gods</td>
                </tr>
                <tr>
                  <td>410</td>
                  <td>Prituh</td>
                  <td>Om Pritave Namah</td>
                  <td>The Expanded</td>
                </tr>
                <tr>
                  <td>411</td>
                  <td>Hiranyagarbhah</td>
                  <td>Om Hiranyagarbhaya Namah</td>
                  <td>The Creator</td>
                </tr>
                <tr>
                  <td>412</td>
                  <td>Shatrughnah</td>
                  <td>Om Shatrughnaya Namah</td>
                  <td>Destroyer of Enemies</td>
                </tr>
                <tr>
                  <td>413</td>
                  <td>Vyaptah</td>
                  <td>Om Vyaptaya Namah</td>
                  <td>The Pervader</td>
                </tr>
                <tr>
                  <td>414</td>
                  <td>Vayuh</td>
                  <td>Om Vayave Namah</td>
                  <td>The Air</td>
                </tr>
                <tr>
                  <td>415</td>
                  <td>Adhokshajah</td>
                  <td>Om Adhokshajaya Namah</td>
                  <td>Beyond Sensory Perception</td>
                </tr>
                <tr>
                  <td>416</td>
                  <td>Rituh</td>
                  <td>Om Ritave Namah</td>
                  <td>The Seasons</td>
                </tr>
                <tr>
                  <td>417</td>
                  <td>Sudarshanah</td>
                  <td>Om Sudarshanaya Namah</td>
                  <td>Auspicious Vision</td>
                </tr>
                <tr>
                  <td>418</td>
                  <td>Kalah</td>
                  <td>Om Kalaya Namah</td>
                  <td>Time</td>
                </tr>
                <tr>
                  <td>419</td>
                  <td>Parameshthi</td>
                  <td>Om Parameshtine Namah</td>
                  <td>Supreme Dweller</td>
                </tr>
                <tr>
                  <td>420</td>
                  <td>Parigrahah</td>
                  <td>Om Parigrahaya Namah</td>
                  <td>The Receiver</td>
                </tr>
                <tr>
                  <td>421</td>
                  <td>Ugrah</td>
                  <td>Om Ugraya Namah</td>
                  <td>The Fierce</td>
                </tr>
                <tr>
                  <td>422</td>
                  <td>Samvatsarah</td>
                  <td>Om Samvatsaraya Namah</td>
                  <td>The Year</td>
                </tr>
                <tr>
                  <td>423</td>
                  <td>Dakshah</td>
                  <td>Om Dakshaya Namah</td>
                  <td>The Skillful</td>
                </tr>
                <tr>
                  <td>424</td>
                  <td>Vishramah</td>
                  <td>Om Vishramaya Namah</td>
                  <td>The Resting Place</td>
                </tr>
                <tr>
                  <td>425</td>
                  <td>Vishvadakshinah</td>
                  <td>Om Vishvadakshinaya Namah</td>
                  <td>Skillful in All</td>
                </tr>
                <tr>
                  <td>426</td>
                  <td>Vistaarah</td>
                  <td>Om Vistaraya Namah</td>
                  <td>The Extension</td>
                </tr>
                <tr>
                  <td>427</td>
                  <td>Sthavarah-Sthaanuh</td>
                  <td>Om Sthavaraya Sthaanave Namah</td>
                  <td>Firm and Immovable</td>
                </tr>
                <tr>
                  <td>428</td>
                  <td>Pramaanam</td>
                  <td>Om Pramaanaya Namah</td>
                  <td>The Proof</td>
                </tr>
                <tr>
                  <td>429</td>
                  <td>Beejamavyayam</td>
                  <td>Om Beejamavyayaya Namah</td>
                  <td>Immutable Seed</td>
                </tr>
                <tr>
                  <td>430</td>
                  <td>Arthah</td>
                  <td>Om Arthaya Namah</td>
                  <td>The Goal</td>
                </tr>
                <tr>
                  <td>431</td>
                  <td>Anarthah</td>
                  <td>Om Anarthaya Namah</td>
                  <td>Without Needs</td>
                </tr>
                <tr>
                  <td>432</td>
                  <td>Mahaakoshah</td>
                  <td>Om Mahaakoshaya Namah</td>
                  <td>Great Treasury</td>
                </tr>
                <tr>
                  <td>433</td>
                  <td>Mahaabhogah</td>
                  <td>Om Mahaabhogaya Namah</td>
                  <td>Great Enjoyer</td>
                </tr>
                <tr>
                  <td>434</td>
                  <td>Mahaadhanah</td>
                  <td>Om Mahaadhanaya Namah</td>
                  <td>Supremely Rich</td>
                </tr>
                <tr>
                  <td>435</td>
                  <td>Anirvinnah</td>
                  <td>Om Anirvinnaya Namah</td>
                  <td>Without Despondency</td>
                </tr>
                <tr>
                  <td>436</td>
                  <td>Sthavisthah</td>
                  <td>Om Sthavisthaya Namah</td>
                  <td>Immense</td>
                </tr>
                <tr>
                  <td>437</td>
                  <td>A-Bhooh</td>
                  <td>Om A-Bhooh Namah</td>
                  <td>Unborn</td>
                </tr>
                <tr>
                  <td>438</td>
                  <td>Dharma-Yoopah</td>
                  <td>Om Dharma-Yoopaya Namah</td>
                  <td>Pillar of Dharma</td>
                </tr>
                <tr>
                  <td>439</td>
                  <td>Mahaa-Makhah</td>
                  <td>Om Mahaa-Makhaya Namah</td>
                  <td>The Great Sacrificer</td>
                </tr>
                <tr>
                  <td>440</td>
                  <td>Nakshatra-Nemih</td>
                  <td>Om Nakshatra-Nemaye Namah</td>
                  <td>Nave of the Stars</td>
                </tr>
                <tr>
                  <td>441</td>
                  <td>Nakshatree</td>
                  <td>Om Nakshatrine Namah</td>
                  <td>Lord of the Stars</td>
                </tr>
                <tr>
                  <td>442</td>
                  <td>Kshamah</td>
                  <td>Om Kshamaya Namah</td>
                  <td>The Efficient</td>
                </tr>
                <tr>
                  <td>443</td>
                  <td>Kshaamah</td>
                  <td>Om Kshaamaya Namah</td>
                  <td>Ever Content</td>
                </tr>
                <tr>
                  <td>444</td>
                  <td>Sameehanah</td>
                  <td>Om Sameehanaya Namah</td>
                  <td>Auspicious Desires</td>
                </tr>
                <tr>
                  <td>445</td>
                  <td>Yajnah</td>
                  <td>Om Yajnaya Namah</td>
                  <td>The Sacrifice</td>
                </tr>
                <tr>
                  <td>446</td>
                  <td>Ijyah</td>
                  <td>Om Ijyaya Namah</td>
                  <td>Worthy of Worship</td>
                </tr>
                <tr>
                  <td>447</td>
                  <td>Mahejyah</td>
                  <td>Om Mahejyaya Namah</td>
                  <td>Most Worshipped</td>
                </tr>
                <tr>
                  <td>448</td>
                  <td>Kratuh</td>
                  <td>Om Kratave Namah</td>
                  <td>The Ritual</td>
                </tr>
                <tr>
                  <td>449</td>
                  <td>Satram</td>
                  <td>Om Satramaya Namah</td>
                  <td>Protector of the Good</td>
                </tr>
                <tr>
                  <td>450</td>
                  <td>Sataam-Gatih</td>
                  <td>Om Sataam-Gataye Namah</td>
                  <td>Refuge of the Good</td>
                </tr>
                <tr>
                  <td>451</td>
                  <td>Sarvadarshee</td>
                  <td>Om Sarvadarsheeye Namah</td>
                  <td>All-Seeing</td>
                </tr>
                <tr>
                  <td>452</td>
                  <td>Vimuktaatmaa</td>
                  <td>Om Vimuktaatmane Namah</td>
                  <td>Ever-Liberated Self</td>
                </tr>
                <tr>
                  <td>453</td>
                  <td>Sarvajnah</td>
                  <td>Om Sarvajnaaya Namah</td>
                  <td>Omniscient</td>
                </tr>
                <tr>
                  <td>454</td>
                  <td>Jnaanamuttamam</td>
                  <td>Om Jnaanamuttamaya Namah</td>
                  <td>Supreme Knowledge</td>
                </tr>
                <tr>
                  <td>455</td>
                  <td>Suvratah</td>
                  <td>Om Suvrataya Namah</td>
                  <td>Of Good Vows</td>
                </tr>
                <tr>
                  <td>456</td>
                  <td>Sumukhah</td>
                  <td>Om Sumukhaya Namah</td>
                  <td>Pleasant-Faced</td>
                </tr>
                <tr>
                  <td>457</td>
                  <td>Sookshmah</td>
                  <td>Om Sookshmaya Namah</td>
                  <td>The Subtlest</td>
                </tr>
                <tr>
                  <td>458</td>
                  <td>Sughoshah</td>
                  <td>Om Sughoshaya Namah</td>
                  <td>Of Auspicious Sound</td>
                </tr>
                <tr>
                  <td>459</td>
                  <td>Sukhadah</td>
                  <td>Om Sukhadaaya Namah</td>
                  <td>Giver of Happiness</td>
                </tr>
                <tr>
                  <td>460</td>
                  <td>Suhrit</td>
                  <td>Om Suhrite Namah</td>
                  <td>Friend of All</td>
                </tr>
                <tr>
                  <td>461</td>
                  <td>Manoharah</td>
                  <td>Om Manoharaya Namah</td>
                  <td>Mind-Stealer</td>
                </tr>
                <tr>
                  <td>462</td>
                  <td>Jita-krodhah</td>
                  <td>Om Jita-krodhaya Namah</td>
                  <td>Conqueror of Anger</td>
                </tr>
                <tr>
                  <td>463</td>
                  <td>Veerabaahuh</td>
                  <td>Om Veerabaahave Namah</td>
                  <td>Mighty-Armed</td>
                </tr>
                <tr>
                  <td>464</td>
                  <td>Vidaaranah</td>
                  <td>Om Vidaaranaya Namah</td>
                  <td>One Who Splits Asunder</td>
                </tr>
                <tr>
                  <td>465</td>
                  <td>Svaapanah</td>
                  <td>Om Svaapanaya Namah</td>
                  <td>Inducer of Sleep</td>
                </tr>
                <tr>
                  <td>466</td>
                  <td>Svavashah</td>
                  <td>Om Svavashaya Namah</td>
                  <td>Self-Controlled</td>
                </tr>
                <tr>
                  <td>467</td>
                  <td>Vyaapee</td>
                  <td>Om Vyaapaye Namah</td>
                  <td>All-Pervading</td>
                </tr>
                <tr>
                  <td>468</td>
                  <td>Naikaatmaa</td>
                  <td>Om Naikaatmaaya Namah</td>
                  <td>Many-Souled</td>
                </tr>
                <tr>
                  <td>469</td>
                  <td>Naikakarmakrit</td>
                  <td>Om Naikakarmakrite Namah</td>
                  <td>Doer of Many Actions</td>
                </tr>
                <tr>
                  <td>470</td>
                  <td>Vatsarah</td>
                  <td>Om Vatsaraya Namah</td>
                  <td>Abode</td>
                </tr>
                <tr>
                  <td>471</td>
                  <td>Vatsalah</td>
                  <td>Om Vatsalaya Namah</td>
                  <td>Affectionate</td>
                </tr>
                <tr>
                  <td>472</td>
                  <td>Vatsee</td>
                  <td>Om Vatseeye Namah</td>
                  <td>Father</td>
                </tr>
                <tr>
                  <td>473</td>
                  <td>Ratnagarbhah</td>
                  <td>Om Ratnagarbhaya Namah</td>
                  <td>Jewel-Wombed</td>
                </tr>
                <tr>
                  <td>474</td>
                  <td>Dhaneshvarah</td>
                  <td>Om Dhaneshvaraaya Namah</td>
                  <td>Lord of Wealth</td>
                </tr>
                <tr>
                  <td>475</td>
                  <td>Dharmagub</td>
                  <td>Om Dharmagubhe Namah</td>
                  <td>Protector of Dharma</td>
                </tr>
                <tr>
                  <td>476</td>
                  <td>Dharmakrit</td>
                  <td>Om Dharmakrite Namah</td>
                  <td>Doer of Dharma</td>
                </tr>
                <tr>
                  <td>477</td>
                  <td>Dharmee</td>
                  <td>Om Dharmaye Namah</td>
                  <td>Supporter of Dharma</td>
                </tr>
                <tr>
                  <td>478</td>
                  <td>Sat</td>
                  <td>Om Sataya Namah</td>
                  <td>Existence</td>
                </tr>
                <tr>
                  <td>479</td>
                  <td>Asat</td>
                  <td>Om Asataya Namah</td>
                  <td>Non-Existence</td>
                </tr>
                <tr>
                  <td>480</td>
                  <td>Ksharam</td>
                  <td>Om Ksharaya Namah</td>
                  <td>Perishable</td>
                </tr>
                <tr>
                  <td>481</td>
                  <td>Aksharam</td>
                  <td>Om Aksharaya Namah</td>
                  <td>Imperishable</td>
                </tr>
                <tr>
                  <td>482</td>
                  <td>Avijnaataa</td>
                  <td>Om Avijnaataaya Namah</td>
                  <td>Non-Knower</td>
                </tr>
                <tr>
                  <td>483</td>
                  <td>Sahasraamshuh</td>
                  <td>Om Sahasraamshave Namah</td>
                  <td>Thousand-Rayed</td>
                </tr>
                <tr>
                  <td>484</td>
                  <td>Vidhaataa</td>
                  <td>Om Vidhaatreye Namah</td>
                  <td>All-Supporter</td>
                </tr>
                <tr>
                  <td>485</td>
                  <td>Kritalakshanah</td>
                  <td>Om Kritalakshanaya Namah</td>
                  <td>Famous for Qualities</td>
                </tr>
                <tr>
                  <td>486</td>
                  <td>Gabhastinemih</td>
                  <td>Om Gabhastinemaye Namah</td>
                  <td>Hub of Universal Wheel</td>
                </tr>
                <tr>
                  <td>487</td>
                  <td>Sattvasthah</td>
                  <td>Om Sattvasthaya Namah</td>
                  <td>Situated in Sattva</td>
                </tr>
                <tr>
                  <td>488</td>
                  <td>Simhah</td>
                  <td>Om Simhaya Namah</td>
                  <td>Lion</td>
                </tr>
                <tr>
                  <td>489</td>
                  <td>Bhoota-maheshvarah</td>
                  <td>Om Bhoota-maheshvaraaya Namah</td>
                  <td>Great Lord of Beings</td>
                </tr>
                <tr>
                  <td>490</td>
                  <td>Aadidevah</td>
                  <td>Om Aadidevaaya Namah</td>
                  <td>First Deity</td>
                </tr>
                <tr>
                  <td>491</td>
                  <td>Mahaadevah</td>
                  <td>Om Mahaadevaaya Namah</td>
                  <td>Great Deity</td>
                </tr>
                <tr>
                  <td>492</td>
                  <td>Deveshah</td>
                  <td>Om Deveshaya Namah</td>
                  <td>Lord of Devas</td>
                </tr>
                <tr>
                  <td>493</td>
                  <td>Devabhrit-guruh</td>
                  <td>Om Devabhrit-gurave Namah</td>
                  <td>Advisor of Indra</td>
                </tr>
                <tr>
                  <td>494</td>
                  <td>Uttarah</td>
                  <td>Om Uttaraaya Namah</td>
                  <td>Lifts from Samsara</td>
                </tr>
                <tr>
                  <td>495</td>
                  <td>Gopatih</td>
                  <td>Om Gopataye Namah</td>
                  <td>Shepherd</td>
                </tr>
                <tr>
                  <td>496</td>
                  <td>Goptaa</td>
                  <td>Om Goptaaya Namah</td>
                  <td>Protector</td>
                </tr>
                <tr>
                  <td>497</td>
                  <td>Jnaanagamyah</td>
                  <td>Om Jnaanagamyaya Namah</td>
                  <td>Known Through Knowledge</td>
                </tr>
                <tr>
                  <td>498</td>
                  <td>Puraatanah</td>
                  <td>Om Puraatanaaya Namah</td>
                  <td>Ancient</td>
                </tr>
                <tr>
                  <td>499</td>
                  <td>Shareera-bhootabhrit</td>
                  <td>Om Shareera-bhootabhrite Namah</td>
                  <td>Nourisher of Nature</td>
                </tr>
                <tr>
                  <td>500</td>
                  <td>Bhoktaa</td>
                  <td>Om Bhoktaaya Namah</td>
                  <td>Enjoyer</td>
                </tr>
                <tr>
                  <td>501</td>
                  <td>Kapeendrah</td>
                  <td>Om Kapeendraaya Namah</td>
                  <td>Lord of Monkeys</td>
                </tr>
                <tr>
                  <td>502</td>
                  <td>Bhooridakshinah</td>
                  <td>Om Bhooridakshinaaya Namah</td>
                  <td>Generous Giver</td>
                </tr>
                <tr>
                  <td>503</td>
                  <td>Somapah</td>
                  <td>Om Somapaaya Namah</td>
                  <td>Drinker of Soma</td>
                </tr>
                <tr>
                  <td>504</td>
                  <td>Amritapah</td>
                  <td>Om Amritapaaya Namah</td>
                  <td>Drinker of Nectar</td>
                </tr>
                <tr>
                  <td>505</td>
                  <td>Somah</td>
                  <td>Om Somaaya Namah</td>
                  <td>Moon</td>
                </tr>
                <tr>
                  <td>506</td>
                  <td>Purujit</td>
                  <td>Om Purujite Namah</td>
                  <td>Conqueror of Many</td>
                </tr>
                <tr>
                  <td>507</td>
                  <td>Purusattamah</td>
                  <td>Om Purusattamaaya Namah</td>
                  <td>Greatest of the Great</td>
                </tr>
                <tr>
                  <td>508</td>
                  <td>Vinayah</td>
                  <td>Om Vinayaaya Namah</td>
                  <td>Humiliator of Unrighteous</td>
                </tr>
                <tr>
                  <td>509</td>
                  <td>Jayah</td>
                  <td>Om Jayaaya Namah</td>
                  <td>Victorious</td>
                </tr>
                <tr>
                  <td>510</td>
                  <td>Satyasandhah</td>
                  <td>Om Satyasandhaaya Namah</td>
                  <td>Truthful in Resolve</td>
                </tr>
                <tr>
                  <td>511</td>
                  <td>Daashaarhah</td>
                  <td>Om Daashaarhaya Namah</td>
                  <td>Born in the Dasarha Race</td>
                </tr>
                <tr>
                  <td>512</td>
                  <td>Saatvataam-patih</td>
                  <td>Om Saatvataam-pataye Namah</td>
                  <td>Lord of the Satvatas</td>
                </tr>
                <tr>
                  <td>513</td>
                  <td>Jeevah</td>
                  <td>Om Jeevaya Namah</td>
                  <td>The Living Being</td>
                </tr>
                <tr>
                  <td>514</td>
                  <td>Vinayitaa-saakshee</td>
                  <td>Om Vinayitaa-saaksine Namah</td>
                  <td>Witness of Humility</td>
                </tr>
                <tr>
                  <td>515</td>
                  <td>Mukundah</td>
                  <td>Om Mukundaya Namah</td>
                  <td>Giver of Liberation</td>
                </tr>
                <tr>
                  <td>516</td>
                  <td>Amitavikramah</td>
                  <td>Om Amitavikramaya Namah</td>
                  <td>Of Immeasurable Prowess</td>
                </tr>
                <tr>
                  <td>517</td>
                  <td>Ambho-nidhih</td>
                  <td>Om Ambho-nidhaye Namah</td>
                  <td>Ocean, Repository of Waters</td>
                </tr>
                <tr>
                  <td>518</td>
                  <td>Anantaatmaa</td>
                  <td>Om Anantaatmane Namah</td>
                  <td>Infinite Self</td>
                </tr>
                <tr>
                  <td>519</td>
                  <td>Mahodadhishayah</td>
                  <td>Om Mahodadhishayaya Namah</td>
                  <td>Rests on the Great Ocean</td>
                </tr>
                <tr>
                  <td>520</td>
                  <td>Antakah</td>
                  <td>Om Antakaya Namah</td>
                  <td>The Ender, Death</td>
                </tr>
                <tr>
                  <td>521</td>
                  <td>Ajah</td>
                  <td>Om Ajaaya Namah</td>
                  <td>Unborn</td>
                </tr>
                <tr>
                  <td>522</td>
                  <td>Mahaarhah</td>
                  <td>Om Mahaarhaya Namah</td>
                  <td>Deserving Highest Worship</td>
                </tr>
                <tr>
                  <td>523</td>
                  <td>Svaabhaavyah</td>
                  <td>Om Svaabhaavyaya Namah</td>
                  <td>Of Inherent Nature</td>
                </tr>
                <tr>
                  <td>524</td>
                  <td>Jitaamitrah</td>
                  <td>Om Jitaamitraya Namah</td>
                  <td>Conqueror of Enemies</td>
                </tr>
                <tr>
                  <td>525</td>
                  <td>Pramodanah</td>
                  <td>Om Pramodanaya Namah</td>
                  <td>Ever Joyful</td>
                </tr>
                <tr>
                  <td>526</td>
                  <td>Aanandah</td>
                  <td>Om Aanandaya Namah</td>
                  <td>Bliss</td>
                </tr>
                <tr>
                  <td>527</td>
                  <td>Nandanah</td>
                  <td>Om Nandanaya Namah</td>
                  <td>Delightful</td>
                </tr>
                <tr>
                  <td>528</td>
                  <td>Nandah</td>
                  <td>Om Nandaya Namah</td>
                  <td>Free from Worldly Pleasures</td>
                </tr>
                <tr>
                  <td>529</td>
                  <td>Satyadharmaa</td>
                  <td>Om Satyadharmaaya Namah</td>
                  <td>True to His Dharma</td>
                </tr>
                <tr>
                  <td>530</td>
                  <td>Trivikramah</td>
                  <td>Om Trivikramaaya Namah</td>
                  <td>Conqueror of Three Worlds</td>
                </tr>
                <tr>
                  <td>531</td>
                  <td>Maharshih Kapilaachaaryah</td>
                  <td>Om Maharshaye Kapilaachaaryaya Namah</td>
                  <td>Great Sage Kapila</td>
                </tr>
                <tr>
                  <td>532</td>
                  <td>Kritajnah</td>
                  <td>Om Kritajnaaya Namah</td>
                  <td>Knower of Creation</td>
                </tr>
                <tr>
                  <td>533</td>
                  <td>Medineepatih</td>
                  <td>Om Medineepataye Namah</td>
                  <td>Lord of the Earth</td>
                </tr>
                <tr>
                  <td>534</td>
                  <td>Tripadah</td>
                  <td>Om Tripadaaya Namah</td>
                  <td>Three-Stepped</td>
                </tr>
                <tr>
                  <td>535</td>
                  <td>Tridashaadhyakshah</td>
                  <td>Om Tridashaadhyakshaya Namah</td>
                  <td>Lord of Three States</td>
                </tr>
                <tr>
                  <td>536</td>
                  <td>Mahaashringah</td>
                  <td>Om Mahaashringaya Namah</td>
                  <td>Great-Horned</td>
                </tr>
                <tr>
                  <td>537</td>
                  <td>Kritaantakrit</td>
                  <td>Om Kritaantakrite Namah</td>
                  <td>Destroyer of Creation</td>
                </tr>
                <tr>
                  <td>538</td>
                  <td>Mahaavaraahah</td>
                  <td>Om Mahaavaraahaya Namah</td>
                  <td>Great Boar</td>
                </tr>
                <tr>
                  <td>539</td>
                  <td>Govindah</td>
                  <td>Om Govindaaya Namah</td>
                  <td>Protector of Cows</td>
                </tr>
                <tr>
                  <td>540</td>
                  <td>Sushenah</td>
                  <td>Om Sushenaya Namah</td>
                  <td>Having a Charming Army</td>
                </tr>
                <tr>
                  <td>541</td>
                  <td>Kanakaangadee</td>
                  <td>Om Kanakaangadaye Namah</td>
                  <td>Wearing Golden Armlets</td>
                </tr>
                <tr>
                  <td>542</td>
                  <td>Guhyah</td>
                  <td>Om Guhyaya Namah</td>
                  <td>Mysterious</td>
                </tr>
                <tr>
                  <td>543</td>
                  <td>Gabheerah</td>
                  <td>Om Gabheeraya Namah</td>
                  <td>Unfathomable</td>
                </tr>
                <tr>
                  <td>544</td>
                  <td>Gahanah</td>
                  <td>Om Gahanaaya Namah</td>
                  <td>Impenetrable</td>
                </tr>
                <tr>
                  <td>545</td>
                  <td>Guptah</td>
                  <td>Om Guptaya Namah</td>
                  <td>Well-Concealed</td>
                </tr>
                <tr>
                  <td>546</td>
                  <td>Chakra-gadaadharah</td>
                  <td>Om Chakra-gadaadharaaya Namah</td>
                  <td>Bearer of Discus and Mace</td>
                </tr>
                <tr>
                  <td>547</td>
                  <td>Vedhaah</td>
                  <td>Om Vedhaaya Namah</td>
                  <td>Creator of the Universe</td>
                </tr>
                <tr>
                  <td>548</td>
                  <td>Svaangah</td>
                  <td>Om Svaangaya Namah</td>
                  <td>One with Well-Proportioned Limbs</td>
                </tr>
                <tr>
                  <td>549</td>
                  <td>Ajitah</td>
                  <td>Om Ajitaya Namah</td>
                  <td>Unconquered</td>
                </tr>
                <tr>
                  <td>550</td>
                  <td>Krishnah</td>
                  <td>Om Krishnaya Namah</td>
                  <td>Dark-Complexioned</td>
                </tr>
                <tr>
                  <td>551</td>
                  <td>Dridhah</td>
                  <td>Om Dridhaya Namah</td>
                  <td>Firm</td>
                </tr>
                <tr>
                  <td>552</td>
                  <td>Sankarshanah-achyutah</td>
                  <td>Om Sankarshanaachyutaaya Namah</td>
                  <td>Absorber of Creation</td>
                </tr>
                <tr>
                  <td>553</td>
                  <td>Varunah</td>
                  <td>Om Varunaaya Namah</td>
                  <td>Lord of Waters</td>
                </tr>
                <tr>
                  <td>554</td>
                  <td>Vaaruṇah</td>
                  <td>Om Vaarunaaya Namah</td>
                  <td>Son of Varuna</td>
                </tr>
                <tr>
                  <td>555</td>
                  <td>Vrikshah</td>
                  <td>Om Vrikshaaya Namah</td>
                  <td>The Tree</td>
                </tr>
                <tr>
                  <td>556</td>
                  <td>Pushkaraakshah</td>
                  <td>Om Pushkaraakshaaya Namah</td>
                  <td>Lotus-Eyed</td>
                </tr>
                <tr>
                  <td>557</td>
                  <td>Mahaamanaah</td>
                  <td>Om Mahaamanaaya Namah</td>
                  <td>Great-Minded</td>
                </tr>
                <tr>
                  <td>558</td>
                  <td>Bhagavaan</td>
                  <td>Om Bhagavate Namah</td>
                  <td>Possessor of Six Opulences</td>
                </tr>
                <tr>
                  <td>559</td>
                  <td>Bhagahaa</td>
                  <td>Om Bhagahaaya Namah</td>
                  <td>Destroyer of Wealth</td>
                </tr>
                <tr>
                  <td>560</td>
                  <td>Aanandee</td>
                  <td>Om Aanandine Namah</td>
                  <td>Giver of Delight</td>
                </tr>
                <tr>
                  <td>561</td>
                  <td>Vanamaalee</td>
                  <td>Om Vanamaalaye Namah</td>
                  <td>Wearer of Forest Garlands</td>
                </tr>
                <tr>
                  <td>562</td>
                  <td>Halaayudhah</td>
                  <td>Om Halaayudhaya Namah</td>
                  <td>Wielder of the Plough</td>
                </tr>
                <tr>
                  <td>563</td>
                  <td>Aadityah</td>
                  <td>Om Aadityaya Namah</td>
                  <td>Son of Aditi</td>
                </tr>
                <tr>
                  <td>564</td>
                  <td>Jyotir-aadityah</td>
                  <td>Om Jyotiraadityaya Namah</td>
                  <td>Resplendent Like the Sun</td>
                </tr>
                <tr>
                  <td>565</td>
                  <td>Sahishnuh</td>
                  <td>Om Sahishnave Namah</td>
                  <td>Enduring</td>
                </tr>
                <tr>
                  <td>566</td>
                  <td>Gati-sattamah</td>
                  <td>Om Gati-sattamaya Namah</td>
                  <td>Supreme Refuge</td>
                </tr>
                <tr>
                  <td>567</td>
                  <td>Sudhanvaa</td>
                  <td>Om Sudhanvaaya Namah</td>
                  <td>Wielder of the Bow Shaarnga</td>
                </tr>
                <tr>
                  <td>568</td>
                  <td>Khanda-parashuh</td>
                  <td>Om Khanda-parashave Namah</td>
                  <td>Wielder of the Axe</td>
                </tr>
                <tr>
                  <td>569</td>
                  <td>Daarunah</td>
                  <td>Om Daarunaaya Namah</td>
                  <td>Merciless Towards the Wicked</td>
                </tr>
                <tr>
                  <td>570</td>
                  <td>Dravina-pradah</td>
                  <td>Om Dravina-pradaaya Namah</td>
                  <td>Bestower of Wealth</td>
                </tr>
                <tr>
                  <td>571</td>
                  <td>Divah-sprik</td>
                  <td>Om Divah-sprike Namah</td>
                  <td>Sky-Reaching</td>
                </tr>
                <tr>
                  <td>572</td>
                  <td>Sarva-drik-vyaasah</td>
                  <td>Om Sarva-drik-vyaasaaya Namah</td>
                  <td>All-Seeing and Expansive</td>
                </tr>
                <tr>
                  <td>573</td>
                  <td>Vaachaspati-ayonijah</td>
                  <td>Om Vaachaspati-ayonijaya Namah</td>
                  <td>Master of Speech, Unborn</td>
                </tr>
                <tr>
                  <td>574</td>
                  <td>Trisaamaa</td>
                  <td>Om Trisaamaya Namah</td>
                  <td>Embodiment of the Three Saamas</td>
                </tr>
                <tr>
                  <td>575</td>
                  <td>Saamagah</td>
                  <td>Om Saamagaaya Namah</td>
                  <td>Singer of the Saama Veda</td>
                </tr>
                <tr>
                  <td>576</td>
                  <td>Saama</td>
                  <td>Om Saamaya Namah</td>
                  <td>The Saama Veda</td>
                </tr>
                <tr>
                  <td>577</td>
                  <td>Nirvaanam</td>
                  <td>Om Nirvaanaya Namah</td>
                  <td>Liberation</td>
                </tr>
                <tr>
                  <td>578</td>
                  <td>Bheshajam</td>
                  <td>Om Bheshajaya Namah</td>
                  <td>Medicine</td>
                </tr>
                <tr>
                  <td>579</td>
                  <td>Bhishak</td>
                  <td>Om Bhishakaya Namah</td>
                  <td>Physician</td>
                </tr>
                <tr>
                  <td>580</td>
                  <td>Sannyaasa-krit</td>
                  <td>Om Sannyaasa-krite Namah</td>
                  <td>Institutor of Sannyaasa</td>
                </tr>
                <tr>
                  <td>581</td>
                  <td>Samah</td>
                  <td>Om Samaya Namah</td>
                  <td>Equal</td>
                </tr>
                <tr>
                  <td>582</td>
                  <td>Shaantah</td>
                  <td>Om Shaantaya Namah</td>
                  <td>Peaceful</td>
                </tr>
                <tr>
                  <td>583</td>
                  <td>Nishthaa</td>
                  <td>Om Nishthaaya Namah</td>
                  <td>Abode</td>
                </tr>
                <tr>
                  <td>584</td>
                  <td>Shaantih</td>
                  <td>Om Shaantaye Namah</td>
                  <td>Peace</td>
                </tr>
                <tr>
                  <td>585</td>
                  <td>Paraayanam</td>
                  <td>Om Paraayanaaya Namah</td>
                  <td>Supreme Goal</td>
                </tr>
                <tr>
                  <td>586</td>
                  <td>Shubhaangah</td>
                  <td>Om Shubhaangaya Namah</td>
                  <td>Auspicious-Limbed</td>
                </tr>
                <tr>
                  <td>587</td>
                  <td>Shaanti-dah</td>
                  <td>Om Shaanti-daaya Namah</td>
                  <td>Giver of Peace</td>
                </tr>
                <tr>
                  <td>588</td>
                  <td>Shrashtaa</td>
                  <td>Om Shrashtre Namah</td>
                  <td>Creator</td>
                </tr>
                <tr>
                  <td>589</td>
                  <td>Kumudah</td>
                  <td>Om Kumudaya Namah</td>
                  <td>Delighter in the Earth</td>
                </tr>
                <tr>
                  <td>590</td>
                  <td>Kuvaleshayah</td>
                  <td>Om Kuvaleshayaya Namah</td>
                  <td>Reclining in the Waters</td>
                </tr>
                <tr>
                  <td>591</td>
                  <td>Gohitah</td>
                  <td>Om Gohitaya Namah</td>
                  <td>Well-Wisher of Cows</td>
                </tr>
                <tr>
                  <td>592</td>
                  <td>Gopatih</td>
                  <td>Om Gopataye Namah</td>
                  <td>Lord of the Earth</td>
                </tr>
                <tr>
                  <td>593</td>
                  <td>Goptaa</td>
                  <td>Om Goptre Namah</td>
                  <td>Protector</td>
                </tr>
                <tr>
                  <td>594</td>
                  <td>Vrishabhaakshah</td>
                  <td>Om Vrishabhaakshaaya Namah</td>
                  <td>Righteous-Eyed</td>
                </tr>
                <tr>
                  <td>595</td>
                  <td>Vrisha-priyah</td>
                  <td>Om Vrisha-priyaya Namah</td>
                  <td>Lover of Righteousness</td>
                </tr>
                <tr>
                  <td>596</td>
                  <td>Anivarttee</td>
                  <td>Om Anivartine Namah</td>
                  <td>Non-Retreating</td>
                </tr>
                <tr>
                  <td>597</td>
                  <td>Nivrittaatmaa</td>
                  <td>Om Nivrittaatmane Namah</td>
                  <td>Self-Restrained</td>
                </tr>
                <tr>
                  <td>598</td>
                  <td>Samksheptaa</td>
                  <td>Om Samksheptre Namah</td>
                  <td>Condenser</td>
                </tr>
                <tr>
                  <td>599</td>
                  <td>Kshema-krit</td>
                  <td>Om Kshema-krite Namah</td>
                  <td>Doer of Good</td>
                </tr>
                <tr>
                  <td>600</td>
                  <td>Shivah</td>
                  <td>Om Shivaya Namah</td>
                  <td>Auspicious</td>
                </tr>
                <tr>
                  <td>601</td>
                  <td>Shrīvatsa-vakshāh</td>
                  <td>Om Shrīvatsa-vakshāya Namah</td>
                  <td>Bearer of Shrīvatsa Mark</td>
                </tr>
                <tr>
                  <td>602</td>
                  <td>Shrīvāsah</td>
                  <td>Om Shrīvāsāya Namah</td>
                  <td>Abode of Lakshmi</td>
                </tr>
                <tr>
                  <td>603</td>
                  <td>Shrīpatih</td>
                  <td>Om Shrīpataye Namah</td>
                  <td>Consort of Lakshmi</td>
                </tr>
                <tr>
                  <td>604</td>
                  <td>Shrīmatām-varah</td>
                  <td>Om Shrīmatām-varāya Namah</td>
                  <td>Best Among the Glorious</td>
                </tr>
                <tr>
                  <td>605</td>
                  <td>Shrīdah</td>
                  <td>Om Shrīdāya Namah</td>
                  <td>Giver of Wealth</td>
                </tr>
                <tr>
                  <td>606</td>
                  <td>Shrīshah</td>
                  <td>Om Shrīshāya Namah</td>
                  <td>Lord of Wealth</td>
                </tr>
                <tr>
                  <td>607</td>
                  <td>Shrīnivāsah</td>
                  <td>Om Shrīnivāsāya Namah</td>
                  <td>Abode of Fortune</td>
                </tr>
                <tr>
                  <td>608</td>
                  <td>Shrīnidhih</td>
                  <td>Om Shrīnidhaye Namah</td>
                  <td>Treasure of Lakshmi</td>
                </tr>
                <tr>
                  <td>609</td>
                  <td>Shrī-vibhāvanah</td>
                  <td>Om Shrī-vibhāvanāya Namah</td>
                  <td>Distributor of Wealth</td>
                </tr>
                <tr>
                  <td>610</td>
                  <td>Shrīdharah</td>
                  <td>Om Shrīdharāya Namah</td>
                  <td>Bearer of Fortune</td>
                </tr>
                <tr>
                  <td>611</td>
                  <td>Shreekarah</td>
                  <td>Om Shreekarāya Namah</td>
                  <td>Giver of Prosperity</td>
                </tr>
                <tr>
                  <td>612</td>
                  <td>Shreyah</td>
                  <td>Om Shreyase Namah</td>
                  <td>Liberation</td>
                </tr>
                <tr>
                  <td>613</td>
                  <td>Shreemaan</td>
                  <td>Om Shreemate Namah</td>
                  <td>Possessor of Wealth</td>
                </tr>
                <tr>
                  <td>614</td>
                  <td>Loka-trayaashrayah</td>
                  <td>Om Loka-trayaashrayāya Namah</td>
                  <td>Shelter of Three Worlds</td>
                </tr>
                <tr>
                  <td>615</td>
                  <td>Svakshah</td>
                  <td>Om Svakshāya Namah</td>
                  <td>Beautiful-Eyed</td>
                </tr>
                <tr>
                  <td>616</td>
                  <td>Svangah</td>
                  <td>Om Svangāya Namah</td>
                  <td>Beautiful-Limbed</td>
                </tr>
                <tr>
                  <td>617</td>
                  <td>Shataanandah</td>
                  <td>Om Shataanandāya Namah</td>
                  <td>Of Infinite Joys</td>
                </tr>
                <tr>
                  <td>618</td>
                  <td>Nandih</td>
                  <td>Om Nandaye Namah</td>
                  <td>Infinite Bliss</td>
                </tr>
                <tr>
                  <td>619</td>
                  <td>Jyotir-ganeshvarah</td>
                  <td>Om Jyotir-ganeshvarāya Namah</td>
                  <td>Lord of Luminaries</td>
                </tr>
                <tr>
                  <td>620</td>
                  <td>Vijitaatmaa</td>
                  <td>Om Vijitaatmane Namah</td>
                  <td>Conqueror of Senses</td>
                </tr>
                <tr>
                  <td>621</td>
                  <td>Vidheyaatmaa</td>
                  <td>Om Vidheyaatmane Namah</td>
                  <td>Obedient Soul</td>
                </tr>
                <tr>
                  <td>622</td>
                  <td>Sat-keertih</td>
                  <td>Om Sat-keertaye Namah</td>
                  <td>Of Pure Fame</td>
                </tr>
                <tr>
                  <td>623</td>
                  <td>Chinnasamshayah</td>
                  <td>Om Chinnasamshayāya Namah</td>
                  <td>Doubtless</td>
                </tr>
                <tr>
                  <td>624</td>
                  <td>Udeernah</td>
                  <td>Om Udeernāya Namah</td>
                  <td>The Transcendent</td>
                </tr>
                <tr>
                  <td>625</td>
                  <td>Sarvatah-chakshuh</td>
                  <td>Om Sarvatah-chakshushe Namah</td>
                  <td>All-Seeing</td>
                </tr>
                <tr>
                  <td>626</td>
                  <td>Aneeshah</td>
                  <td>Om Aneeshāya Namah</td>
                  <td>Without a Lord</td>
                </tr>
                <tr>
                  <td>627</td>
                  <td>Shaashvata-sthirah</td>
                  <td>Om Shaashvata-sthirāya Namah</td>
                  <td>Eternal and Stable</td>
                </tr>
                <tr>
                  <td>628</td>
                  <td>Bhooshayah</td>
                  <td>Om Bhooshayāya Namah</td>
                  <td>Rested on Ocean Shore</td>
                </tr>
                <tr>
                  <td>629</td>
                  <td>Bhooshanah</td>
                  <td>Om Bhooshanāya Namah</td>
                  <td>Adorner of the World</td>
                </tr>
                <tr>
                  <td>630</td>
                  <td>Bhootih</td>
                  <td>Om Bhootaye Namah</td>
                  <td>Pure Existence</td>
                </tr>
                <tr>
                  <td>631</td>
                  <td>Vishokah</td>
                  <td>Om Vishokāya Namah</td>
                  <td>Sorrowless</td>
                </tr>
                <tr>
                  <td>632</td>
                  <td>Shoka-naashanah</td>
                  <td>Om Shoka-naashanāya Namah</td>
                  <td>Destroyer of Sorrows</td>
                </tr>
                <tr>
                  <td>633</td>
                  <td>Archishmaan</td>
                  <td>Om Archishmane Namah</td>
                  <td>The Effulgent</td>
                </tr>
                <tr>
                  <td>634</td>
                  <td>Architah</td>
                  <td>Om Architāya Namah</td>
                  <td>Worshipped</td>
                </tr>
                <tr>
                  <td>635</td>
                  <td>Kumbhah</td>
                  <td>Om Kumbhāya Namah</td>
                  <td>The Pot</td>
                </tr>
                <tr>
                  <td>636</td>
                  <td>Vishuddhaatmaa</td>
                  <td>Om Vishuddhaatmane Namah</td>
                  <td>Purest Soul</td>
                </tr>
                <tr>
                  <td>637</td>
                  <td>Vishodhanah</td>
                  <td>Om Vishodhanāya Namah</td>
                  <td>Great Purifier</td>
                </tr>
                <tr>
                  <td>638</td>
                  <td>Aniruddhah</td>
                  <td>Om Aniruddhāya Namah</td>
                  <td>Invincible</td>
                </tr>
                <tr>
                  <td>639</td>
                  <td>Apratirathah</td>
                  <td>Om Apratirathāya Namah</td>
                  <td>Without Enemies</td>
                </tr>
                <tr>
                  <td>640</td>
                  <td>Pradyumnah</td>
                  <td>Om Pradyumnāya Namah</td>
                  <td>Very Rich</td>
                </tr>
                <tr>
                  <td>641</td>
                  <td>Amitavikramah</td>
                  <td>Om Amitavikramāya Namah</td>
                  <td>Immeasurable Prowess</td>
                </tr>
                <tr>
                  <td>642</td>
                  <td>Kaalanemi-nihaa</td>
                  <td>Om Kaalanemi-nihaaya Namah</td>
                  <td>Slayer of Kalanemi</td>
                </tr>
                <tr>
                  <td>643</td>
                  <td>Veerah</td>
                  <td>Om Veerāya Namah</td>
                  <td>The Heroic Victor</td>
                </tr>
                <tr>
                  <td>644</td>
                  <td>Shauri</td>
                  <td>Om Shauraye Namah</td>
                  <td>Invincible Prowess</td>
                </tr>
                <tr>
                  <td>645</td>
                  <td>Shoora-janeshvarah</td>
                  <td>Om Shoora-janeshvarāya Namah</td>
                  <td>Lord of the Valiant</td>
                </tr>
                <tr>
                  <td>646</td>
                  <td>Trilokaatmaa</td>
                  <td>Om Trilokaatmane Namah</td>
                  <td>Self of Three Worlds</td>
                </tr>
                <tr>
                  <td>647</td>
                  <td>Trilokeshah</td>
                  <td>Om Trilokeshāya Namah</td>
                </tr>
                <tr>
                  <td>648</td>
                  <td>Keshavah</td>
                  <td>Om Keshavāya Namah</td>
                  <td>Illumines the Cosmos</td>
                </tr>
                <tr>
                  <td>649</td>
                  <td>Keshihaa</td>
                  <td>Om Keshihaaya Namah</td>
                  <td>Killer of Kesh</td>
                </tr>
                <tr>
                  <td>650</td>
                  <td>Harih</td>
                  <td>Om Haraye Namah</td>
                  <td>The Destroyer</td>
                </tr>
                <tr>
                  <td>651</td>
                  <td>Kaamadevah</td>
                  <td>Om Kaamadevaya Namah</td>
                  <td>The Beloved Lord</td>
                </tr>
                <tr>
                  <td>652</td>
                  <td>Kaamapaalah</td>
                  <td>Om Kaamapaalaya Namah</td>
                  <td>Fulfiller of Desires</td>
                </tr>
                <tr>
                  <td>653</td>
                  <td>Kaamee</td>
                  <td>Om Kaamaye Namah</td>
                  <td>Fulfilled All Desires</td>
                </tr>
                <tr>
                  <td>654</td>
                  <td>Kaantah</td>
                  <td>Om Kaantaya Namah</td>
                  <td>Enchanting Form</td>
                </tr>
                <tr>
                  <td>655</td>
                  <td>Kritaagamah</td>
                  <td>Om Kritaagamaya Namah</td>
                  <td>Author of Scriptures</td>
                </tr>
                <tr>
                  <td>656</td>
                  <td>Anirdeshya-vapuh</td>
                  <td>Om Anirdeshya-vapushe Namah</td>
                  <td>Indescribable Form</td>
                </tr>
                <tr>
                  <td>657</td>
                  <td>Vishnuh</td>
                  <td>Om Vishnave Namah</td>
                  <td>All-Pervading</td>
                </tr>
                <tr>
                  <td>658</td>
                  <td>Veerah</td>
                  <td>Om Veeraya Namah</td>
                  <td>The Courageous</td>
                </tr>
                <tr>
                  <td>659</td>
                  <td>Anantah</td>
                  <td>Om Anantaya Namah</td>
                  <td>Endless</td>
                </tr>
                <tr>
                  <td>660</td>
                  <td>Dhananjayah</td>
                  <td>Om Dhananjayaya Namah</td>
                  <td>Wealth Through Conquest</td>
                </tr>
                <tr>
                  <td>661</td>
                  <td>Brahmanyah</td>
                  <td>Om Brahmanyaya Namah</td>
                  <td>Protector of Brahman</td>
                </tr>
                <tr>
                  <td>662</td>
                  <td>Brahmakrit</td>
                  <td>Om Brahmakrite Namah</td>
                  <td>Creator of Brahman</td>
                </tr>
                <tr>
                  <td>663</td>
                  <td>Brahmaa</td>
                  <td>Om Brahmane Namah</td>
                  <td>Creator</td>
                </tr>
                <tr>
                  <td>664</td>
                  <td>Brahma</td>
                  <td>Om Brahmane Namah</td>
                  <td>The Absolute Reality</td>
                </tr>
                <tr>
                  <td>665</td>
                  <td>Brahma-vivardhanah</td>
                  <td>Om Brahma-vivardhanaya Namah</td>
                  <td>Promoter of Brahman</td>
                </tr>
                <tr>
                  <td>666</td>
                  <td>Brahmavid</td>
                  <td>Om Brahmavide Namah</td>
                  <td>Knower of Brahman</td>
                </tr>
                <tr>
                  <td>667</td>
                  <td>Braahmanah</td>
                  <td>Om Braahmanaya Namah</td>
                  <td>Realized Brahman</td>
                </tr>
                <tr>
                  <td>668</td>
                  <td>Brahmee</td>
                  <td>Om Brahmane Namah</td>
                  <td>Associated with Brahma</td>
                </tr>
                <tr>
                  <td>669</td>
                  <td>Brahmajno</td>
                  <td>Om Brahmajne Namah</td>
                  <td>Knower of Brahman's Nature</td>
                </tr>
                <tr>
                  <td>670</td>
                  <td>Braahmana-priyah</td>
                  <td>Om Braahmana-priyaya Namah</td>
                  <td>Dear to Brahmanas</td>
                </tr>
                <tr>
                  <td>671</td>
                  <td>Mahaakramo</td>
                  <td>Om Mahaakramaya Namah</td>
                  <td>Of Great Step</td>
                </tr>
                <tr>
                  <td>672</td>
                  <td>Mahaakarmaa</td>
                  <td>Om Mahaakarmane Namah</td>
                  <td>Performer of Great Deeds</td>
                </tr>
                <tr>
                  <td>673</td>
                  <td>Mahaatejaah</td>
                  <td>Om Mahaatejase Namah</td>
                  <td>Great Resplendence</td>
                </tr>
                <tr>
                  <td>674</td>
                  <td>Mahoragah</td>
                  <td>Om Mahoragaya Namah</td>
                  <td>The Great Serpent</td>
                </tr>
                <tr>
                  <td>675</td>
                  <td>Mahaakratuh</td>
                  <td>Om Mahaakratave Namah</td>
                  <td>The Great Sacrifice</td>
                </tr>
                <tr>
                  <td>676</td>
                  <td>Mahaayajvaa</td>
                  <td>Om Mahaayajvane Namah</td>
                  <td>Performer of Great Yajnas</td>
                </tr>
                <tr>
                  <td>677</td>
                  <td>Mahaayajnah</td>
                  <td>Om Mahaayajnaya Namah</td>
                  <td>The Great Yajna</td>
                </tr>
                <tr>
                  <td>678</td>
                  <td>Mahaahavih</td>
                  <td>Om Mahaahavaye Namah</td>
                  <td>The Great Offering</td>
                </tr>
                <tr>
                  <td>679</td>
                  <td>Stavyah</td>
                  <td>Om Stavyaya Namah</td>
                  <td>Object of All Praise</td>
                </tr>
                <tr>
                  <td>680</td>
                  <td>Stavapriyah</td>
                  <td>Om Stavapriyaya Namah</td>
                  <td>Invoked Through Prayer</td>
                </tr>
                <tr>
                  <td>681</td>
                  <td>Stotram</td>
                  <td>Om Stotraya Namah</td>
                  <td>The Hymn</td>
                </tr>
                <tr>
                  <td>682</td>
                  <td>Stutih</td>
                  <td>Om Stutaye Namah</td>
                  <td>The Act of Praise</td>
                </tr>
                <tr>
                  <td>683</td>
                  <td>Stotaa</td>
                  <td>Om Stotre Namah</td>
                  <td>One Who Adores or Praises</td>
                </tr>
                <tr>
                  <td>684</td>
                  <td>Ranapriyah</td>
                  <td>Om Ranapriyaya Namah</td>
                  <td>Lover of Battles</td>
                </tr>
                <tr>
                  <td>685</td>
                  <td>Poornah</td>
                  <td>Om Poornaya Namah</td>
                  <td>The Complete</td>
                </tr>
                <tr>
                  <td>686</td>
                  <td>Poorayitaa</td>
                  <td>Om Poorayitaya Namah</td>
                  <td>The Fulfiller</td>
                </tr>
                <tr>
                  <td>687</td>
                  <td>Punyah</td>
                  <td>Om Punyaya Namah</td>
                  <td>The Truly Holy</td>
                </tr>
                <tr>
                  <td>688</td>
                  <td>Punya-keertir</td>
                  <td>Om Punya-keertaye Namah</td>
                  <td>Of Holy Fame</td>
                </tr>
                <tr>
                  <td>689</td>
                  <td>Anaamayah</td>
                  <td>Om Anaamayaya Namah</td>
                  <td>Free from Diseases</td>
                </tr>
                <tr>
                  <td>690</td>
                  <td>Manojavah</td>
                  <td>Om Manojavaya Namah</td>
                  <td>Swift as the Mind</td>
                </tr>
                <tr>
                  <td>691</td>
                  <td>Teerthakaro</td>
                  <td>Om Teerthakaraya Namah</td>
                  <td>Teacher of the Tirthas</td>
                </tr>
                <tr>
                  <td>692</td>
                  <td>Vasuretaah</td>
                  <td>Om Vasuretase Namah</td>
                  <td>Golden Essence</td>
                </tr>
                <tr>
                  <td>693</td>
                  <td>Vasupradah</td>
                  <td>Om Vasupradaya Namah</td>
                  <td>Free-Giver of Wealth</td>
                </tr>
                <tr>
                  <td>694</td>
                  <td>Vasupradah</td>
                  <td>Om Vasupradaya Namah</td>
                  <td>Giver of Salvation</td>
                </tr>
                <tr>
                  <td>695</td>
                  <td>Vaasudevo</td>
                  <td>Om Vaasudevaya Namah</td>
                  <td>Son of Vasudeva</td>
                </tr>
                <tr>
                  <td>696</td>
                  <td>Vasuh</td>
                  <td>Om Vasave Namah</td>
                  <td>Refuge for All</td>
                </tr>
                <tr>
                  <td>697</td>
                  <td>Vasumanaah</td>
                  <td>Om Vasumanase Namah</td>
                  <td>Attentive to Everything</td>
                </tr>
                <tr>
                  <td>698</td>
                  <td>Havih</td>
                  <td>Om Havishe Namah</td>
                  <td>The Oblation</td>
                </tr>
                <tr>
                  <td>699</td>
                  <td>Sadgatih</td>
                  <td>Om Sadgataye Namah</td>
                  <td>Goal of Good People</td>
                </tr>
                <tr>
                  <td>700</td>
                  <td>Satkritih</td>
                  <td>Om Satkritaye Namah</td>
                  <td>Full of Good Actions</td>
                </tr>
                <tr>
                  <td>701</td>
                  <td>Satta</td>
                  <td>Om Sattaya Namah</td>
                  <td>One Without a Second</td>
                </tr>
                <tr>
                  <td>702</td>
                  <td>Sadbhootih</td>
                  <td>Om Sadbhootaye Namah</td>
                  <td>Rich in Glories</td>
                </tr>
                <tr>
                  <td>703</td>
                  <td>Satparaayanah</td>
                  <td>Om Satparaayanaya Namah</td>
                  <td>Supreme Goal for the Good</td>
                </tr>
                <tr>
                  <td>704</td>
                  <td>Shoorasenaah</td>
                  <td>Om Shoorasenaya Namah</td>
                  <td>Leader of Heroic Armies</td>
                </tr>
                <tr>
                  <td>705</td>
                  <td>Yadu-shresthah</td>
                  <td>Om Yadu-shresthaya Namah</td>
                  <td>Best Among Yadavas</td>
                </tr>
                <tr>
                  <td>706</td>
                  <td>Sannivaasah</td>
                  <td>Om Sannivaasaya Namah</td>
                  <td>Abode of the Good</td>
                </tr>
                <tr>
                  <td>707</td>
                  <td>Suyaamunah</td>
                  <td>Om Suyaamunaya Namah</td>
                  <td>Attended by Yamuna People</td>
                </tr>
                <tr>
                  <td>708</td>
                  <td>Bhootaavaaso</td>
                  <td>Om Bhootaavaasaya Namah</td>
                  <td>Dwelling Place of Elements</td>
                </tr>
                <tr>
                  <td>709</td>
                  <td>Vaasudevah</td>
                  <td>Om Vaasudevaya Namah</td>
                  <td>Enveloper of the World</td>
                </tr>
                <tr>
                  <td>710</td>
                  <td>Sarvaasunilayah</td>
                  <td>Om Sarvaasunilayaya Namah</td>
                  <td>Abode of All Life Energies</td>
                </tr>
                <tr>
                  <td>711</td>
                  <td>Analah</td>
                  <td>Om Analaya Namah</td>
                  <td>Unlimited Wealth, Power, Glory</td>
                </tr>
                <tr>
                  <td>712</td>
                  <td>Darpahaa</td>
                  <td>Om Darpahaaya Namah</td>
                  <td>Destroyer of Pride in Evil-Minded</td>
                </tr>
                <tr>
                  <td>713</td>
                  <td>Darpadah</td>
                  <td>Om Darpadaaya Namah</td>
                  <td>Creator of Righteous Pride</td>
                </tr>
                <tr>
                  <td>714</td>
                  <td>Driptah</td>
                  <td>Om Driptaaya Namah</td>
                  <td>Drunk with Infinite Bliss</td>
                </tr>
                <tr>
                  <td>715</td>
                  <td>Durdharah</td>
                  <td>Om Durdharaaya Namah</td>
                  <td>Object of Contemplation</td>
                </tr>
                <tr>
                  <td>716</td>
                  <td>Athaaparaajitah</td>
                  <td>Om Athaaparaajitaaya Namah</td>
                  <td>The Unvanquished</td>
                </tr>
                <tr>
                  <td>717</td>
                  <td>Vishvamoortih</td>
                  <td>Om Vishvamoortaye Namah</td>
                  <td>Form of the Entire Universe</td>
                </tr>
                <tr>
                  <td>718</td>
                  <td>Mahaamortir</td>
                  <td>Om Mahaamortaye Namah</td>
                  <td>The Great Form</td>
                </tr>
                <tr>
                  <td>719</td>
                  <td>Deeptamoortir</td>
                  <td>Om Deeptamoortaye Namah</td>
                  <td>Resplendent Form</td>
                </tr>
                <tr>
                  <td>720</td>
                  <td>A-moortirmaan</td>
                  <td>Om Amoortimaane Namah</td>
                  <td>Formless</td>
                </tr>
                <tr>
                  <td>721</td>
                  <td>Anekamoortih</td>
                  <td>Om Anekamoortaye Namah</td>
                  <td>Multi-Formed</td>
                </tr>
                <tr>
                  <td>722</td>
                  <td>Avyaktah</td>
                  <td>Om Avyaktaaya Namah</td>
                  <td>Unmanifest</td>
                </tr>
                <tr>
                  <td>723</td>
                  <td>Shatamoortih</td>
                  <td>Om Shatamoortaye Namah</td>
                  <td>Of Many Forms</td>
                </tr>
                <tr>
                  <td>724</td>
                  <td>Shataananah</td>
                  <td>Om Shataananaaya Namah</td>
                  <td>Many-Faced</td>
                </tr>
                <tr>
                  <td>725</td>
                  <td>Ekah</td>
                  <td>Om Ekaaya Namah</td>
                  <td>The One</td>
                </tr>
                <tr>
                  <td>726</td>
                  <td>Naikah</td>
                  <td>Om Naikaaya Namah</td>
                  <td>The Many</td>
                </tr>
                <tr>
                  <td>727</td>
                  <td>Savah</td>
                  <td>Om Savaaya Namah</td>
                  <td>Nature of Sacrifice</td>
                </tr>
                <tr>
                  <td>728</td>
                  <td>Kah</td>
                  <td>Om Kaaya Namah</td>
                  <td>Bliss</td>
                </tr>
                <tr>
                  <td>729</td>
                  <td>Kim</td>
                  <td>Om Kime Namah</td>
                  <td>What (to be Inquired)</td>
                </tr>
                <tr>
                  <td>730</td>
                  <td>Yat</td>
                  <td>Om Yate Namah</td>
                  <td>Which</td>
                </tr>
                <tr>
                  <td>731</td>
                  <td>Tat</td>
                  <td>Om Tate Namah</td>
                  <td>That</td>
                </tr>
                <tr>
                  <td>732</td>
                  <td>Padam-anuttamam</td>
                  <td>Om Padam-anuttamaya Namah</td>
                  <td>Unequalled State of Perfection</td>
                </tr>
                <tr>
                  <td>733</td>
                  <td>Lokabandhur</td>
                  <td>Om Lokabandhave Namah</td>
                  <td>Friend of the World</td>
                </tr>
                <tr>
                  <td>734</td>
                  <td>Lokanaathah</td>
                  <td>Om Lokanaathaaya Namah</td>
                  <td>Lord of the World</td>
                </tr>
                <tr>
                  <td>735</td>
                  <td>Maadhavah</td>
                  <td>Om Maadhavaaya Namah</td>
                  <td>Born in Madhu's Family</td>
                </tr>
                <tr>
                  <td>736</td>
                  <td>Bhaktavatsalah</td>
                  <td>Om Bhaktavatsalaaya Namah</td>
                  <td>Lover of Devotees</td>
                </tr>
                <tr>
                  <td>737</td>
                  <td>Suvarna-varnah</td>
                  <td>Om Suvarna-varnaaya Namah</td>
                  <td>Golden-Colored</td>
                </tr>
                <tr>
                  <td>738</td>
                  <td>Hemaangah</td>
                  <td>Om Hemaangaaya Namah</td>
                  <td>Golden-Limbed</td>
                </tr>
                <tr>
                  <td>739</td>
                  <td>Varaangah</td>
                  <td>Om Varaangaaya Namah</td>
                  <td>Beautiful-Limbed</td>
                </tr>
                <tr>
                  <td>740</td>
                  <td>Chandanaangadee</td>
                  <td>Om Chandanaangadine Namah</td>
                  <td>Wears Attractive Armlets</td>
                </tr>
                <tr>
                  <td>741</td>
                  <td>Veerahaa</td>
                  <td>Om Veerahaaya Namah</td>
                  <td>Destroyer of Valiant Heroes</td>
                </tr>
                <tr>
                  <td>742</td>
                  <td>Vishama</td>
                  <td>Om Vishamaaya Namah</td>
                  <td>Unequalled</td>
                </tr>
                <tr>
                  <td>743</td>
                  <td>Shoonyah</td>
                  <td>Om Shoonyaaya Namah</td>
                  <td>The Void</td>
                </tr>
                <tr>
                  <td>744</td>
                  <td>Ghritaaseeh</td>
                  <td>Om Ghritaaseeh Namah</td>
                  <td>Needs No Good Wishes</td>
                </tr>
                <tr>
                  <td>745</td>
                  <td>Acalah</td>
                  <td>Om Acalaaya Namah</td>
                  <td>Non-Moving</td>
                </tr>
                <tr>
                  <td>746</td>
                  <td>Chalah</td>
                  <td>Om Chalaaya Namah</td>
                  <td>Moving</td>
                </tr>
                <tr>
                  <td>747</td>
                  <td>Amaanee</td>
                  <td>Om Amaane Namah</td>
                  <td>Without False Vanity</td>
                </tr>
                <tr>
                  <td>748</td>
                  <td>Maanadah</td>
                  <td>Om Maanadaaya Namah</td>
                  <td>Causes False Identification</td>
                </tr>
                <tr>
                  <td>749</td>
                  <td>Maanyah</td>
                  <td>Om Maanyaaya Namah</td>
                  <td>To Be Honored</td>
                </tr>
                <tr>
                  <td>750</td>
                  <td>Lokasvaamee</td>
                  <td>Om Lokasvaamine Namah</td>
                  <td>Lord of the Universe</td>
                </tr>
                <tr>
                  <td>751</td>
                  <td>Trilokadhrik</td>
                  <td>Om Trilokadhrishe Namah</td>
                  <td>Support of Three Worlds</td>
                </tr>
                <tr>
                  <td>752</td>
                  <td>Sumedhaa</td>
                  <td>Om Sumedhase Namah</td>
                  <td>Pure Intelligence</td>
                </tr>
                <tr>
                  <td>753</td>
                  <td>Medhajah</td>
                  <td>Om Medhajaaya Namah</td>
                  <td>Born of Sacrifices</td>
                </tr>
                <tr>
                  <td>754</td>
                  <td>Dhanyah</td>
                  <td>Om Dhanyaaya Namah</td>
                  <td>Fortunate</td>
                </tr>
                <tr>
                  <td>755</td>
                  <td>Satyamedhah</td>
                  <td>Om Satyamedhase Namah</td>
                  <td>True Intelligence</td>
                </tr>
                <tr>
                  <td>756</td>
                  <td>Dharaadharah</td>
                  <td>Om Dharaadharaaya Namah</td>
                  <td>Support of the Earth</td>
                </tr>
                <tr>
                  <td>757</td>
                  <td>Tejovrisho</td>
                  <td>Om Tejovrishaaya Namah</td>
                  <td>Showers Radiance</td>
                </tr>
                <tr>
                  <td>758</td>
                  <td>Dyutidharah</td>
                  <td>Om Dyutidharaaya Namah</td>
                  <td>Bears Effulgent Form</td>
                </tr>
                <tr>
                  <td>759</td>
                  <td>Sarva-shastra-bhritaam-varah</td>
                  <td>Om Sarva-shastra-bhritaam-varaaya Namah</td>
                  <td>Best Among Weapon Wielders</td>
                </tr>
                <tr>
                  <td>760</td>
                  <td>Pragrahah</td>
                  <td>Om Pragrahaaya Namah</td>
                  <td>Receiver of Worship</td>
                </tr>
                <tr>
                  <td>761</td>
                  <td>Nigrahah</td>
                  <td>Om Nigrahaya Namah</td>
                  <td>The Controller</td>
                </tr>
                <tr>
                  <td>762</td>
                  <td>Vyagrah</td>
                  <td>Om Vyagraya Namah</td>
                  <td>The Tiger (Valiant One)</td>
                </tr>
                <tr>
                  <td>763</td>
                  <td>Naikashringah</td>
                  <td>Om Naikashringaya Namah</td>
                  <td>Many-Horned</td>
                </tr>
                <tr>
                  <td>764</td>
                  <td>Gadaagrajah</td>
                  <td>Om Gadaagrajaya Namah</td>
                  <td>Invoked Through Mantra</td>
                </tr>
                <tr>
                  <td>765</td>
                  <td>Chaturmoortih</td>
                  <td>Om Chaturmoortaye Namah</td>
                  <td>Four-Formed</td>
                </tr>
                <tr>
                  <td>766</td>
                  <td>Chaturbaahuh</td>
                  <td>Om Chaturbaahave Namah</td>
                  <td>Four-Handed</td>
                </tr>
                <tr>
                  <td>767</td>
                  <td>Chaturvyoohah</td>
                  <td>Om Chaturvyoohaya Namah</td>
                  <td>Fourfold Manifestation</td>
                </tr>
                <tr>
                  <td>768</td>
                  <td>Chaturgatih</td>
                  <td>Om Chaturgataye Namah</td>
                  <td>Fourfold Refuge</td>
                </tr>
                <tr>
                  <td>769</td>
                  <td>Chaturaatmaa</td>
                  <td>Om Chaturaatmane Namah</td>
                  <td>Fourfold Self</td>
                </tr>
                <tr>
                  <td>770</td>
                  <td>Chaturbhaavas</td>
                  <td>Om Chaturbhaavaya Namah</td>
                  <td>Source of Four</td>
                </tr>
                <tr>
                  <td>771</td>
                  <td>Chatur-vedavid</td>
                  <td>Om Chaturvedavide Namah</td>
                  <td>Knower of Four Vedas</td>
                </tr>
                <tr>
                  <td>772</td>
                  <td>Ekapaat</td>
                  <td>Om Ekapadaya Namah</td>
                  <td>One-Footed</td>
                </tr>
                <tr>
                  <td>773</td>
                  <td>Samaavartah</td>
                  <td>Om Samaavartaya Namah</td>
                  <td>Efficient Turner</td>
                </tr>
                <tr>
                  <td>774</td>
                  <td>Nivrittaatmaa</td>
                  <td>Om Nivrittaatmane Namah</td>
                  <td>Detached Self</td>
                </tr>
                <tr>
                  <td>775</td>
                  <td>Durjayah</td>
                  <td>Om Durjayaya Namah</td>
                  <td>Invincible</td>
                </tr>
                <tr>
                  <td>776</td>
                  <td>Duratikramah</td>
                  <td>Om Duratikramaya Namah</td>
                  <td>Difficult to Surpass</td>
                </tr>
                <tr>
                  <td>777</td>
                  <td>Durlabhah</td>
                  <td>Om Durlabhaya Namah</td>
                  <td>Hard to Obtain</td>
                </tr>
                <tr>
                  <td>778</td>
                  <td>Durgamah</td>
                  <td>Om Durgamaya Namah</td>
                  <td>Hard to Access</td>
                </tr>
                <tr>
                  <td>779</td>
                  <td>Durgah</td>
                  <td>Om Durgaya Namah</td>
                  <td>Difficult to Approach</td>
                </tr>
                <tr>
                  <td>780</td>
                  <td>Duraavaasah</td>
                  <td>Om Duraavaasaya Namah</td>
                  <td>Hard to Dwell In</td>
                </tr>
                <tr>
                  <td>781</td>
                  <td>Duraarihaa</td>
                  <td>Om Duraarihaaya Namah</td>
                  <td>Slayer of Demons</td>
                </tr>
                <tr>
                  <td>782</td>
                  <td>Shubhaangah</td>
                  <td>Om Shubhaangaya Namah</td>
                  <td>Auspicious-Limbed</td>
                </tr>
                <tr>
                  <td>783</td>
                  <td>Lokasaarangah</td>
                  <td>Om Lokasaarangaya Namah</td>
                  <td>Essence of the World</td>
                </tr>
                <tr>
                  <td>784</td>
                  <td>Sutantuh</td>
                  <td>Om Sutantave Namah</td>
                  <td>Beautifully Expanded</td>
                </tr>
                <tr>
                  <td>785</td>
                  <td>Tantu-vardhanah</td>
                  <td>Om Tantu-vardhanaaya Namah</td>
                  <td>Sustainer of Continuity</td>
                </tr>
                <tr>
                  <td>786</td>
                  <td>Indrakarmaa</td>
                  <td>Om Indrakarmane Namah</td>
                  <td>Performer of Great Deeds</td>
                </tr>
                <tr>
                  <td>787</td>
                  <td>Mahaakarmaa</td>
                  <td>Om Mahaakarmane Namah</td>
                  <td>Performer of Great Acts</td>
                </tr>
                <tr>
                  <td>788</td>
                  <td>Kritakarmaa</td>
                  <td>Om Kritakarmane Namah</td>
                  <td>Accomplished in Acts</td>
                </tr>
                <tr>
                  <td>789</td>
                  <td>Kritaagamah</td>
                  <td>Om Kritaagamaya Namah</td>
                  <td>Author of Scriptures</td>
                </tr>
                <tr>
                  <td>790</td>
                  <td>Udbhavah</td>
                  <td>Om Udbhavaya Namah</td>
                  <td>Originator</td>
                </tr>
                <tr>
                  <td>791</td>
                  <td>Sundarah</td>
                  <td>Om Sundaraya Namah</td>
                  <td>Beautiful</td>
                </tr>
                <tr>
                  <td>792</td>
                  <td>Sundah</td>
                  <td>Om Sundaya Namah</td>
                  <td>Of Great Mercy</td>
                </tr>
                <tr>
                  <td>793</td>
                  <td>Ratna-naabhah</td>
                  <td>Om Ratna-naabhaya Namah</td>
                  <td>Jewel-Naveled</td>
                </tr>
                <tr>
                  <td>794</td>
                  <td>Sulochanah</td>
                  <td>Om Sulochanaaya Namah</td>
                  <td>Beautiful-Eyed</td>
                </tr>
                <tr>
                  <td>795</td>
                  <td>Arkah</td>
                  <td>Om Arkaaya Namah</td>
                  <td>Radiant</td>
                </tr>
                <tr>
                  <td>796</td>
                  <td>Vaajasanah</td>
                  <td>Om Vaajasanaaya Namah</td>
                  <td>Giver of Food</td>
                </tr>
                <tr>
                  <td>797</td>
                  <td>Shringee</td>
                  <td>Om Shringine Namah</td>
                  <td>Horned One</td>
                </tr>
                <tr>
                  <td>798</td>
                  <td>Jayantah</td>
                  <td>Om Jayantaaya Namah</td>
                  <td>Victorious</td>
                </tr>
                <tr>
                  <td>799</td>
                  <td>Sarvavij-jayee</td>
                  <td>Om Sarvavij-jayine Namah</td>
                  <td>Omniscient Victor</td>
                </tr>
                <tr>
                  <td>800</td>
                  <td>Suvarna-binduh</td>
                  <td>Om Suvarna-bindave Namah</td>
                  <td>Golden-Point</td>
                </tr>
                <tr>
                  <td>801</td>
                  <td>Akshobhyah</td>
                  <td>Om Akshobhyaaya Namah</td>
                  <td>Unshakable</td>
                </tr>
                <tr>
                  <td>802</td>
                  <td>Sarva-vaageeshvareshvarah</td>
                  <td>Om Sarva-vaageeshvareshvaraaya Namah</td>
                  <td>Lord of Speech</td>
                </tr>
                <tr>
                  <td>803</td>
                  <td>Mahaahradah</td>
                  <td>Om Mahaahradaaya Namah</td>
                  <td>Great Pool</td>
                </tr>
                <tr>
                  <td>804</td>
                  <td>Mahaagartah</td>
                  <td>Om Mahaagartaaya Namah</td>
                  <td>Great Chasm</td>
                </tr>
                <tr>
                  <td>805</td>
                  <td>Mahaabhootah</td>
                  <td>Om Mahaabhootaaya Namah</td>
                  <td>Great Being</td>
                </tr>
                <tr>
                  <td>806</td>
                  <td>Mahaanidhih</td>
                  <td>Om Mahaanidhaye Namah</td>
                  <td>Great Abode</td>
                </tr>
                <tr>
                  <td>807</td>
                  <td>Kumudah</td>
                  <td>Om Kumudaaya Namah</td>
                  <td>Earth-Delighter</td>
                </tr>
                <tr>
                  <td>808</td>
                  <td>Kundarah</td>
                  <td>Om Kundaraaya Namah</td>
                  <td>Uplifter of Earth</td>
                </tr>
                <tr>
                  <td>809</td>
                  <td>Kundah</td>
                  <td>Om Kundaaya Namah</td>
                  <td>Pure</td>
                </tr>
                <tr>
                  <td>810</td>
                  <td>Parjanyah</td>
                  <td>Om Parjanyaaya Namah</td>
                  <td>Rain-Bearing Cloud</td>
                </tr>
                <tr>
                  <td>811</td>
                  <td>Paavanah</td>
                  <td>Om Paavanaya Namah</td>
                  <td>One Who Ever Purifies</td>
                </tr>
                <tr>
                  <td>812</td>
                  <td>Anilah</td>
                  <td>Om Anilaya Namah</td>
                  <td>One Who Never Slips</td>
                </tr>
                <tr>
                  <td>813</td>
                  <td>Amritaashah</td>
                  <td>Om Amritaashaya Namah</td>
                  <td>One Whose Desires Are Never Fruitless</td>
                </tr>
                <tr>
                  <td>814</td>
                  <td>Amritavapuh</td>
                  <td>Om Amritavapushe Namah</td>
                  <td>He Whose Form Is Immortal</td>
                </tr>
                <tr>
                  <td>815</td>
                  <td>Sarvajna</td>
                  <td>Om Sarvajnaaya Namah</td>
                  <td>Omniscient</td>
                </tr>
                <tr>
                  <td>816</td>
                  <td>Sarvato-mukhah</td>
                  <td>Om Sarvato-mukhaya Namah</td>
                  <td>One Who Has His Face Turned Everywhere</td>
                </tr>
                <tr>
                  <td>817</td>
                  <td>Sulabhah</td>
                  <td>Om Sulabhaya Namah</td>
                  <td>One Who Is Readily Available</td>
                </tr>
                <tr>
                  <td>818</td>
                  <td>Suvratah</td>
                  <td>Om Suvrataya Namah</td>
                  <td>One Who Has Taken the Most Auspicious Forms</td>
                </tr>
                <tr>
                  <td>819</td>
                  <td>Siddhah</td>
                  <td>Om Siddhaya Namah</td>
                  <td>One Who Is Perfection</td>
                </tr>
                <tr>
                  <td>820</td>
                  <td>Shatrujit</td>
                  <td>Om Shatrujite Namah</td>
                  <td>One Who Is Ever Victorious Over His Hosts of Enemies</td>
                </tr>
                <tr>
                  <td>821</td>
                  <td>Shatrutaapanah</td>
                  <td>Om Shatrutaapanaya Namah</td>
                  <td>The Scorcher of Enemies</td>
                </tr>
                <tr>
                  <td>822</td>
                  <td>Nyagrodhah</td>
                  <td>Om Nyagrodhaya Namah</td>
                  <td>The One Who Veils Himself with Maya</td>
                </tr>
                <tr>
                  <td>823</td>
                  <td>Udumbarah</td>
                  <td>Om Udumbaraya Namah</td>
                  <td>Nourishment of All Living Creatures</td>
                </tr>
                <tr>
                  <td>824</td>
                  <td>Ashvatthah</td>
                  <td>Om Ashvatthaya Namah</td>
                  <td>Tree of Life</td>
                </tr>
                <tr>
                  <td>825</td>
                  <td>Chaanooraandhra-nishoodanah</td>
                  <td>Om Chaanooraandhra-nishoodanaya Namah</td>
                  <td>The Slayer of Chanoora</td>
                </tr>
                <tr>
                  <td>826</td>
                  <td>Sahasraarchih</td>
                  <td>Om Sahasraarchishe Namah</td>
                  <td>He Who Has Thousands of Rays</td>
                </tr>
                <tr>
                  <td>827</td>
                  <td>Saptajihvah</td>
                  <td>Om Saptajihvaya Namah</td>
                  <td>He Who Expresses Himself as the Seven Tongues of Fire</td>
                </tr>
                <tr>
                  <td>828</td>
                  <td>Saptaidhaah</td>
                  <td>Om Saptaidhaaya Namah</td>
                  <td>The Seven Effulgences in the Flames</td>
                </tr>
                <tr>
                  <td>829</td>
                  <td>Saptavaahanah</td>
                  <td>Om Saptavaahanaya Namah</td>
                  <td>One Who Has a Vehicle of Seven Horses (Sun)</td>
                </tr>
                <tr>
                  <td>830</td>
                  <td>Amoortih</td>
                  <td>Om Amoortaye Namah</td>
                  <td>Formless</td>
                </tr>
                <tr>
                  <td>831</td>
                  <td>Anaghah</td>
                  <td>Om Anaghaya Namah</td>
                  <td>Sinless</td>
                </tr>
                <tr>
                  <td>832</td>
                  <td>Achintyah</td>
                  <td>Om Achintyaya Namah</td>
                  <td>Inconceivable</td>
                </tr>
                <tr>
                  <td>833</td>
                  <td>Bhayakrit</td>
                  <td>Om Bhayakrite Namah</td>
                  <td>Giver of Fear</td>
                </tr>
                <tr>
                  <td>834</td>
                  <td>Bhayanaashanah</td>
                  <td>Om Bhayanaashanaya Namah</td>
                  <td>Destroyer of Fear</td>
                </tr>
                <tr>
                  <td>835</td>
                  <td>Anuh</td>
                  <td>Om Anave Namah</td>
                  <td>The Subtlest</td>
                </tr>
                <tr>
                  <td>836</td>
                  <td>Brihat</td>
                  <td>Om Brihate Namah</td>
                  <td>The Greatest</td>
                </tr>
                <tr>
                  <td>837</td>
                  <td>Krishah</td>
                  <td>Om Krishaya Namah</td>
                  <td>Delicate, Lean</td>
                </tr>
                <tr>
                  <td>838</td>
                  <td>Sthoolah</td>
                  <td>Om Sthoolaya Namah</td>
                  <td>One Who Is the Fattest</td>
                </tr>
                <tr>
                  <td>839</td>
                  <td>Gunabhrit</td>
                  <td>Om Gunabhrite Namah</td>
                  <td>One Who Supports</td>
                </tr>
                <tr>
                  <td>840</td>
                  <td>Nirgunah</td>
                  <td>Om Nirgunaya Namah</td>
                  <td>Without Any Properties</td>
                </tr>
                <tr>
                  <td>841</td>
                  <td>Mahaan</td>
                  <td>Om Mahaane Namah</td>
                  <td>The Mighty</td>
                </tr>
                <tr>
                  <td>842</td>
                  <td>Adhritah</td>
                  <td>Om Adhritaya Namah</td>
                  <td>Without Support</td>
                </tr>
                <tr>
                  <td>843</td>
                  <td>Svadhritah</td>
                  <td>Om Svadhritaya Namah</td>
                  <td>Self-Supported</td>
                </tr>
                <tr>
                  <td>844</td>
                  <td>Svaasyah</td>
                  <td>Om Svaasyaya Namah</td>
                  <td>One Who Has an Effulgent Face</td>
                </tr>
                <tr>
                  <td>845</td>
                  <td>Praagvamshah</td>
                  <td>Om Praagvamshaya Namah</td>
                  <td>One Who Has the Most Ancient Ancestry</td>
                </tr>
                <tr>
                  <td>846</td>
                  <td>Vamshavardhanah</td>
                  <td>Om Vamshavardhanaya Namah</td>
                  <td>He Who Multiplies His Family of Descendants</td>
                </tr>
                <tr>
                  <td>847</td>
                  <td>Bhaarabhrit</td>
                  <td>Om Bhaarabhrite Namah</td>
                  <td>One Who Carries the Load of the Universe</td>
                </tr>
                <tr>
                  <td>848</td>
                  <td>Kathitah</td>
                  <td>Om Kathitaya Namah</td>
                  <td>One Who Is Glorified in All Scriptures</td>
                </tr>
                <tr>
                  <td>849</td>
                  <td>Yogee</td>
                  <td>Om Yogine Namah</td>
                  <td>One Who Can Be Realized Through Yoga</td>
                </tr>
                <tr>
                  <td>850</td>
                  <td>Yogeeshah</td>
                  <td>Om Yogeeshaaya Namah</td>
                  <td>The King of Yogis</td>
                </tr>
                <tr>
                  <td>851</td>
                  <td>Sarvakaamadah</td>
                  <td>Om Sarvakaamadaaya Namah</td>
                  <td>One Who Fulfills All Desires of True Devotees</td>
                </tr>
                <tr>
                  <td>852</td>
                  <td>Aashramah</td>
                  <td>Om Aashramaaya Namah</td>
                  <td>Haven</td>
                </tr>
                <tr>
                  <td>853</td>
                  <td>Shramanah</td>
                  <td>Om Shramanaaya Namah</td>
                  <td>One Who Persecutes the Worldly People</td>
                </tr>
                <tr>
                  <td>854</td>
                  <td>Kshaamah</td>
                  <td>Om Kshaamaya Namah</td>
                  <td>One Who Destroys Everything</td>
                </tr>
                <tr>
                  <td>855</td>
                  <td>Suparnah</td>
                  <td>Om Suparnaaya Namah</td>
                  <td>The Golden Leaf (Vedas)</td>
                </tr>
                <tr>
                  <td>856</td>
                  <td>Vaayuvaahanah</td>
                  <td>Om Vaayuvaahanaaya Namah</td>
                  <td>The Mover of the Winds</td>
                </tr>
                <tr>
                  <td>857</td>
                  <td>Dhanurdharah</td>
                  <td>Om Dhanurdharaaya Namah</td>
                  <td>The Wielder of the Bow</td>
                </tr>
                <tr>
                  <td>858</td>
                  <td>Dhanurvedah</td>
                  <td>Om Dhanurvedaaya Namah</td>
                  <td>One Who Declared the Science of Archery</td>
                </tr>
                <tr>
                  <td>859</td>
                  <td>Dandah</td>
                  <td>Om Dandaaya Namah</td>
                  <td>One Who Punishes the Wicked</td>
                </tr>
                <tr>
                  <td>860</td>
                  <td>Damayitaa</td>
                  <td>Om Damayitri Namah</td>
                  <td>The Controller</td>
                </tr>
                <tr>
                  <td>861</td>
                  <td>Damah</td>
                  <td>Om Damaya Namah</td>
                  <td>Self-Restraint</td>
                </tr>
                <tr>
                  <td>862</td>
                  <td>Aparaajitah</td>
                  <td>Om Aparajitaya Namah</td>
                  <td>Unconquered</td>
                </tr>
                <tr>
                  <td>863</td>
                  <td>Sarvasahah</td>
                  <td>Om Sarvasahaya Namah</td>
                  <td>All-Enduring</td>
                </tr>
                <tr>
                  <td>864</td>
                  <td>Aniyantaa</td>
                  <td>Om Aniyantre Namah</td>
                  <td>Without Controller</td>
                </tr>
                <tr>
                  <td>865</td>
                  <td>Niyamah</td>
                  <td>Om Niyamaya Namah</td>
                  <td>Self-Ruler</td>
                </tr>
                <tr>
                  <td>866</td>
                  <td>Ayamah</td>
                  <td>Om Ayamaya Namah</td>
                  <td>Deathless</td>
                </tr>
                <tr>
                  <td>867</td>
                  <td>Sattvavaan</td>
                  <td>Om Sattvavate Namah</td>
                  <td>Full of Goodness</td>
                </tr>
                <tr>
                  <td>868</td>
                  <td>Saattvikah</td>
                  <td>Om Saattvikaya Namah</td>
                  <td>Pure</td>
                </tr>
                <tr>
                  <td>869</td>
                  <td>Satyah</td>
                  <td>Om Satyaya Namah</td>
                  <td>Truth</td>
                </tr>
                <tr>
                  <td>870</td>
                  <td>Satya-dharma-paraayanah</td>
                  <td>Om Satya-dharma-paraayanaya Namah</td>
                  <td>Devoted to Truth and Righteousness</td>
                </tr>
                <tr>
                  <td>871</td>
                  <td>Abhipraayah</td>
                  <td>Om Abhipraayaya Namah</td>
                  <td>Intentions</td>
                </tr>
                <tr>
                  <td>872</td>
                  <td>Priyaarhah</td>
                  <td>Om Priyaarhaya Namah</td>
                  <td>Worthy of Love</td>
                </tr>
                <tr>
                  <td>873</td>
                  <td>Arhah</td>
                  <td>Om Arhaya Namah</td>
                  <td>Deserving</td>
                </tr>
                <tr>
                  <td>874</td>
                  <td>Priyakrit</td>
                  <td>Om Priyakrite Namah</td>
                  <td>Doer of Good</td>
                </tr>
                <tr>
                  <td>875</td>
                  <td>Preetivardhanah</td>
                  <td>Om Preetivardhanaya Namah</td>
                  <td>Enhancer of Joy</td>
                </tr>
                <tr>
                  <td>876</td>
                  <td>Vihaayasa-gatih</td>
                  <td>Om Vihaayasa-gataye Namah</td>
                  <td>Mover in Space</td>
                </tr>
                <tr>
                  <td>877</td>
                  <td>Jyotih</td>
                  <td>Om Jyotishe Namah</td>
                  <td>Light</td>
                </tr>
                <tr>
                  <td>878</td>
                  <td>Suruchih</td>
                  <td>Om Suruchaye Namah</td>
                  <td>Beautiful</td>
                </tr>
                <tr>
                  <td>879</td>
                  <td>Hutabhuk</td>
                  <td>Om Hutabhujaya Namah</td>
                  <td>Consumer of Offerings</td>
                </tr>
                <tr>
                  <td>880</td>
                  <td>Vibhuh</td>
                  <td>Om Vibhave Namah</td>
                  <td>All-Pervading</td>
                </tr>
                <tr>
                  <td>881</td>
                  <td>Ravih</td>
                  <td>Om Ravaye Namah</td>
                  <td>Sun</td>
                </tr>
                <tr>
                  <td>882</td>
                  <td>Virochanah</td>
                  <td>Om Virochanaya Namah</td>
                  <td>Radiant</td>
                </tr>
                <tr>
                  <td>883</td>
                  <td>Sooryah</td>
                  <td>Om Sooryaya Namah</td>
                  <td>Sun God</td>
                </tr>
                <tr>
                  <td>884</td>
                  <td>Savitaa</td>
                  <td>Om Savitre Namah</td>
                  <td>Creator</td>
                </tr>
                <tr>
                  <td>885</td>
                  <td>Ravilochanah</td>
                  <td>Om Ravilochanaya Namah</td>
                  <td>Sun-Eyed</td>
                </tr>
                <tr>
                  <td>886</td>
                  <td>Anantah</td>
                  <td>Om Anantaya Namah</td>
                  <td>Infinite</td>
                </tr>
                <tr>
                  <td>887</td>
                  <td>Hutabhuk</td>
                  <td>Om Hutabhujaya Namah</td>
                  <td>Consumer of Offerings</td>
                </tr>
                <tr>
                  <td>888</td>
                  <td>Bhoktaa</td>
                  <td>Om Bhoktre Namah</td>
                  <td>Enjoyer</td>
                </tr>
                <tr>
                  <td>889</td>
                  <td>Sukhadah</td>
                  <td>Om Sukhadaya Namah</td>
                  <td>Giver of Happiness</td>
                </tr>
                <tr>
                  <td>890</td>
                  <td>Naikajah</td>
                  <td>Om Naikajaya Namah</td>
                  <td>Born Many Times</td>
                </tr>
                <tr>
                  <td>891</td>
                  <td>Agrajah</td>
                  <td>Om Agrajaya Namah</td>
                  <td>First-Born</td>
                </tr>
                <tr>
                  <td>892</td>
                  <td>Anirvinnah</td>
                  <td>Om Anirvinnaya Namah</td>
                  <td>Without Despondency</td>
                </tr>
                <tr>
                  <td>893</td>
                  <td>Sadaamarshee</td>
                  <td>Om Sadaamarshe Namah</td>
                  <td>Ever-Forgiving</td>
                </tr>
                <tr>
                  <td>894</td>
                  <td>Lokaadhishthaanam</td>
                  <td>Om Lokaadhishthaanaya Namah</td>
                  <td>Support of the Worlds</td>
                </tr>
                <tr>
                  <td>895</td>
                  <td>Adbhutah</td>
                  <td>Om Adbhutaya Namah</td>
                  <td>Wonderful</td>
                </tr>
                <tr>
                  <td>896</td>
                  <td>Sanaat</td>
                  <td>Om Sanaataya Namah</td>
                  <td>Eternal</td>
                </tr>
                <tr>
                  <td>897</td>
                  <td>Sanaatanatamah</td>
                  <td>Om Sanaatanatamaya Namah</td>
                  <td>Most Ancient</td>
                </tr>
                <tr>
                  <td>898</td>
                  <td>Kapilah</td>
                  <td>Om Kapilaya Namah</td>
                  <td>Sage Kapila</td>
                </tr>
                <tr>
                  <td>899</td>
                  <td>Kapih</td>
                  <td>Om Kapaye Namah</td>
                  <td>One Who Drinks Water</td>
                </tr>
                <tr>
                  <td>900</td>
                  <td>Apyayah</td>
                  <td>Om Apyayaya Namah</td>
                  <td>Source of Dissolution</td>
                </tr>
                <tr>
                  <td>901</td>
                  <td>Svastidah</td>
                  <td>Om Svastidaya Namah</td>
                  <td>Giver of Auspiciousness</td>
                </tr>
                <tr>
                  <td>902</td>
                  <td>Svastikrit</td>
                  <td>Om Svastikrite Namah</td>
                  <td>Creator of Auspiciousness</td>
                </tr>
                <tr>
                  <td>903</td>
                  <td>Svasti</td>
                  <td>Om Svastaye Namah</td>
                  <td>Auspiciousness</td>
                </tr>
                <tr>
                  <td>904</td>
                  <td>Svastibhuk</td>
                  <td>Om Svastibhujaya Namah</td>
                  <td>Enjoyer of Auspiciousness</td>
                </tr>
                <tr>
                  <td>905</td>
                  <td>Svastidakshinah</td>
                  <td>Om Svastidakshinaya Namah</td>
                  <td>Distributor of Auspiciousness</td>
                </tr>
                <tr>
                  <td>906</td>
                  <td>Araudrah</td>
                  <td>Om Araudraya Namah</td>
                  <td>Non-Fierce</td>
                </tr>
                <tr>
                  <td>907</td>
                  <td>Kundalee</td>
                  <td>Om Kundaline Namah</td>
                  <td>Wears Earrings</td>
                </tr>
                <tr>
                  <td>908</td>
                  <td>Chakree</td>
                  <td>Om Chakrine Namah</td>
                  <td>Bearer of Discus</td>
                </tr>
                <tr>
                  <td>909</td>
                  <td>Vikramee</td>
                  <td>Om Vikramine Namah</td>
                  <td>Courageous</td>
                </tr>
                <tr>
                  <td>910</td>
                  <td>Oorjita-shaasanah</td>
                  <td>Om Oorjita-shaasanaya Namah</td>
                  <td>Strong Ruler</td>
                </tr>
                <tr>
                  <td>911</td>
                  <td>Shabdaatigah</td>
                  <td>Om Shabdaatigaya Namah</td>
                  <td>One Who Transcends All Words</td>
                </tr>
                <tr>
                  <td>912</td>
                  <td>Shabdasahah</td>
                  <td>Om Shabdasahaya Namah</td>
                  <td>Allows Himself to Be Invoked by Vedic Words</td>
                </tr>
                <tr>
                  <td>913</td>
                  <td>Shishirah</td>
                  <td>Om Shishiraya Namah</td>
                  <td>The Cold Season, Winter</td>
                </tr>
                <tr>
                  <td>914</td>
                  <td>Sharvaree-karah</td>
                  <td>Om Sharvaree-karaya Namah</td>
                  <td>Creator of Darkness</td>
                </tr>
                <tr>
                  <td>915</td>
                  <td>Akroorah</td>
                  <td>Om Akrooraya Namah</td>
                  <td>Never Cruel</td>
                </tr>
                <tr>
                  <td>916</td>
                  <td>Peshalah</td>
                  <td>Om Peshalaya Namah</td>
                  <td>Supremely Soft</td>
                </tr>
                <tr>
                  <td>917</td>
                  <td>Dakshah</td>
                  <td>Om Dakshaya Namah</td>
                  <td>Prompt</td>
                </tr>
                <tr>
                  <td>918</td>
                  <td>Dakshinah</td>
                  <td>Om Dakshinaya Namah</td>
                  <td>The Most Liberal</td>
                </tr>
                <tr>
                  <td>919</td>
                  <td>Kshaminaam-varah</td>
                  <td>Om Kshaminaam-varaya Namah</td>
                  <td>Greatest Patience with Sinners</td>
                </tr>
                <tr>
                  <td>920</td>
                  <td>Vidvattamah</td>
                  <td>Om Vidvattamaya Namah</td>
                  <td>One with the Greatest Wisdom</td>
                </tr>
                <tr>
                  <td>921</td>
                  <td>Veetabhayah</td>
                  <td>Om Veetabhayaya Namah</td>
                  <td>Fearless</td>
                </tr>
                <tr>
                  <td>922</td>
                  <td>Punya-shravana-keertanah</td>
                  <td>Om Punya-shravana-keertanaya Namah</td>
                  <td>Hearing of Whose Glory Brings Holiness</td>
                </tr>
                <tr>
                  <td>923</td>
                  <td>Uttaaranah</td>
                  <td>Om Uttaranaya Namah</td>
                  <td>Lifts Us Out of the Ocean of Change</td>
                </tr>
                <tr>
                  <td>924</td>
                  <td>Dushkritihaa</td>
                  <td>Om Dushkritihaya Namah</td>
                  <td>Destroyer of Bad Actions</td>
                </tr>
                <tr>
                  <td>925</td>
                  <td>Punyah</td>
                  <td>Om Punyaya Namah</td>
                  <td>Supremely Pure</td>
                </tr>
                <tr>
                  <td>926</td>
                  <td>Duh-svapna-naashanah</td>
                  <td>Om Duh-svapna-naashanaya Namah</td>
                  <td>Destroyer of Bad Dreams</td>
                </tr>
                <tr>
                  <td>927</td>
                  <td>Veerahaa</td>
                  <td>Om Veerahaya Namah</td>
                  <td>Ends Rebirth</td>
                </tr>
                <tr>
                  <td>928</td>
                  <td>Rakshanah</td>
                  <td>Om Rakshanaya Namah</td>
                  <td>Protector of the Universe</td>
                </tr>
                <tr>
                  <td>929</td>
                  <td>Santah</td>
                  <td>Om Santaya Namah</td>
                  <td>Expressed Through Saintly Men</td>
                </tr>
                <tr>
                  <td>930</td>
                  <td>Jeevanah</td>
                  <td>Om Jeevanaya Namah</td>
                  <td>Life Spark in All Creatures</td>
                </tr>
                <tr>
                  <td>931</td>
                  <td>Paryavasthitah</td>
                  <td>Om Paryavasthitaya Namah</td>
                  <td>One Who Dwells Everywhere</td>
                </tr>
                <tr>
                  <td>932</td>
                  <td>Anantaroopah</td>
                  <td>Om Anantaroopaya Namah</td>
                  <td>One of Infinite Forms</td>
                </tr>
                <tr>
                  <td>933</td>
                  <td>Anantashreeh</td>
                  <td>Om Anantashreeye Namah</td>
                  <td>Full of Infinite Glories</td>
                </tr>
                <tr>
                  <td>934</td>
                  <td>Jitamanyuh</td>
                  <td>Om Jitamanyave Namah</td>
                  <td>One Who Has No Anger</td>
                </tr>
                <tr>
                  <td>935</td>
                  <td>Bhayapahah</td>
                  <td>Om Bhayapahaya Namah</td>
                  <td>Destroys All Fears</td>
                </tr>
                <tr>
                  <td>936</td>
                  <td>Chaturashrah</td>
                  <td>Om Chaturashraya Namah</td>
                  <td>Deals Squarely</td>
                </tr>
                <tr>
                  <td>937</td>
                  <td>Gabheeraatmaa</td>
                  <td>Om Gabheeraatmane Namah</td>
                  <td>Too Deep to Be Fathomed</td>
                </tr>
                <tr>
                  <td>938</td>
                  <td>Vidishah</td>
                  <td>Om Vidishaya Namah</td>
                  <td>Unique in Giving</td>
                </tr>
                <tr>
                  <td>939</td>
                  <td>Vyaadishah</td>
                  <td>Om Vyaadishaya Namah</td>
                  <td>Unique in Commanding Power</td>
                </tr>
                <tr>
                  <td>940</td>
                  <td>Dishah</td>
                  <td>Om Dishaya Namah</td>
                  <td>Advisor and Giver of Knowledge</td>
                </tr>
                <tr>
                  <td>941</td>
                  <td>Anaadih</td>
                  <td>Om Anaadaye Namah</td>
                  <td>The First Cause</td>
                </tr>
                <tr>
                  <td>942</td>
                  <td>Bhoor-bhuvo</td>
                  <td>Om Bhoor-bhuvaya Namah</td>
                  <td>Substratum of the Earth</td>
                </tr>
                <tr>
                  <td>943</td>
                  <td>Lakshmeeh</td>
                  <td>Om Lakshmeeye Namah</td>
                  <td>Glory of the Universe</td>
                </tr>
                <tr>
                  <td>944</td>
                  <td>Suveerah</td>
                  <td>Om Suveeraya Namah</td>
                  <td>Moves Through Various Ways</td>
                </tr>
                <tr>
                  <td>945</td>
                  <td>Ruchiraangadah</td>
                  <td>Om Ruchiraangadaya Namah</td>
                  <td>Wears Resplendent Shoulder Caps</td>
                </tr>
                <tr>
                  <td>946</td>
                  <td>Jananah</td>
                  <td>Om Jananaya Namah</td>
                  <td>Deliverer of All Living Creatures</td>
                </tr>
                <tr>
                  <td>947</td>
                  <td>Jana-janmaadir</td>
                  <td>Om Jana-janmaadaye Namah</td>
                  <td>Cause of All Beings' Birth</td>
                </tr>
                <tr>
                  <td>948</td>
                  <td>Bheemah</td>
                  <td>Om Bheemaya Namah</td>
                  <td>Terrible Form</td>
                </tr>
                <tr>
                  <td>949</td>
                  <td>Bheema-paraakramah</td>
                  <td>Om Bheema-paraakramaya Namah</td>
                  <td>Prowess Frightful to Enemies</td>
                </tr>
                <tr>
                  <td>950</td>
                  <td>Aadhaaranilayah</td>
                  <td>Om Aadhaaranilayaya Namah</td>
                  <td>Fundamental Sustainer</td>
                </tr>
                <tr>
                  <td>951</td>
                  <td>Adhaataa</td>
                  <td>Om Adhaataya Namah</td>
                  <td>Supreme Commander</td>
                </tr>
                <tr>
                  <td>952</td>
                  <td>Pushpahaasah</td>
                  <td>Om Pushpahaasaya Namah</td>
                  <td>Shines Like an Opening Flower</td>
                </tr>
                <tr>
                  <td>953</td>
                  <td>Prajaagarah</td>
                  <td>Om Prajaagaraya Namah</td>
                  <td>Ever-Awakened</td>
                </tr>
                <tr>
                  <td>954</td>
                  <td>Oordhvagah</td>
                  <td>Om Oordhvagaya Namah</td>
                  <td>On Top of Everything</td>
                </tr>
                <tr>
                  <td>955</td>
                  <td>Satpathaachaarah</td>
                  <td>Om Satpathaachaaraaya Namah</td>
                  <td>Follower of Truth</td>
                </tr>
                <tr>
                  <td>956</td>
                  <td>Praanadah</td>
                  <td>Om Praanadaya Namah</td>
                  <td>Giver of Life</td>
                </tr>
                <tr>
                  <td>957</td>
                  <td>Pranavah</td>
                  <td>Om Pranavaya Namah</td>
                  <td>Omkara</td>
                </tr>
                <tr>
                  <td>958</td>
                  <td>Panah</td>
                  <td>Om Panaya Namah</td>
                  <td>Supreme Universal Manager</td>
                </tr>
                <tr>
                  <td>959</td>
                  <td>Pramaanam</td>
                  <td>Om Pramaanaya Namah</td>
                  <td>Form of the Vedas</td>
                </tr>
                <tr>
                  <td>960</td>
                  <td>Praananilayah</td>
                  <td>Om Praananilayaya Namah</td>
                  <td>He in Whom All Prana Is Established</td>
                </tr>
                <tr>
                  <td>961</td>
                  <td>Praanibhrit</td>
                  <td>Om Praanibhrite Namah</td>
                  <td>He Who Rules Over All Pranas</td>
                </tr>
                <tr>
                  <td>962</td>
                  <td>Praanajeevanah</td>
                  <td>Om Praanajeevanaya Namah</td>
                  <td>Maintains the Life-Breath</td>
                </tr>
                <tr>
                  <td>963</td>
                  <td>Tattvam</td>
                  <td>Om Tattvaya Namah</td>
                  <td>The Reality</td>
                </tr>
                <tr>
                  <td>964</td>
                  <td>Tattvavit</td>
                  <td>Om Tattvavite Namah</td>
                  <td>Realised the Reality</td>
                </tr>
                <tr>
                  <td>965</td>
                  <td>Ekaatmaa</td>
                  <td>Om Ekaatmane Namah</td>
                  <td>The One Self</td>
                </tr>
                <tr>
                  <td>966</td>
                  <td>Janma-mrityu-jaraatigah</td>
                  <td>Om Janma-mrityu-jaraatigaya Namah</td>
                  <td>Beyond Birth, Death, and Old Age</td>
                </tr>
                <tr>
                  <td>967</td>
                  <td>Bhoor-bhuvah-svas-taruh</td>
                  <td>Om Bhoor-bhuvah-svas-tarave Namah</td>
                  <td>Tree of Bhur, Bhuvah, and Svah</td>
                </tr>
                <tr>
                  <td>968</td>
                  <td>Taarah</td>
                  <td>Om Taaraya Namah</td>
                  <td>Helper to Cross Over</td>
                </tr>
                <tr>
                  <td>969</td>
                  <td>Savitaa</td>
                  <td>Om Savitre Namah</td>
                  <td>Father of All</td>
                </tr>
                <tr>
                  <td>970</td>
                  <td>Prapitaamahah</td>
                  <td>Om Prapitaamahaya Namah</td>
                  <td>Father of the Father (Brahma)</td>
                </tr>
                <tr>
                  <td>971</td>
                  <td>Yajnah</td>
                  <td>Om Yajnaya Namah</td>
                  <td>Nature of Yajna</td>
                </tr>
                <tr>
                  <td>972</td>
                  <td>Yajnapatih</td>
                  <td>Om Yajnapataye Namah</td>
                  <td>Lord of Yajnas</td>
                </tr>
                <tr>
                  <td>973</td>
                  <td>Yajvaa</td>
                  <td>Om Yajvane Namah</td>
                  <td>Performer of Yajna</td>
                </tr>
                <tr>
                  <td>974</td>
                  <td>Yajnaangah</td>
                  <td>Om Yajnaangaya Namah</td>
                  <td>Limbs Are Parts of Yajna</td>
                </tr>
                <tr>
                  <td>975</td>
                  <td>Yajnavaahanah</td>
                  <td>Om Yajnavaahanaya Namah</td>
                  <td>Completes Yajnas</td>
                </tr>
                <tr>
                  <td>976</td>
                  <td>Yajnabhrid</td>
                  <td>Om Yajnabhride Namah</td>
                  <td>Ruler of Yajnas</td>
                </tr>
                <tr>
                  <td>977</td>
                  <td>Yajnakrit</td>
                  <td>Om Yajnakrite Namah</td>
                  <td>Performs Yajnas</td>
                </tr>
                <tr>
                  <td>978</td>
                  <td>Yajnee</td>
                  <td>Om Yajnee Namah</td>
                  <td>Enjoyer of Yajnas</td>
                </tr>
                <tr>
                  <td>979</td>
                  <td>Yajnabhuk</td>
                  <td>Om Yajnabhukaya Namah</td>
                  <td>Receiver of Offerings</td>
                </tr>
                <tr>
                  <td>980</td>
                  <td>Yajnasaadhanah</td>
                  <td>Om Yajnasaadhanaya Namah</td>
                  <td>Fulfills Yajnas</td>
                </tr>
                <tr>
                  <td>981</td>
                  <td>Yajnaantakrit</td>
                  <td>Om Yajnaantakrite Namah</td>
                  <td>Performs Concluding Yajna Act</td>
                </tr>
                <tr>
                  <td>982</td>
                  <td>Yajnaguhyam</td>
                  <td>Om Yajnaguhyaya Namah</td>
                  <td>Realised Through Yajna</td>
                </tr>
                <tr>
                  <td>983</td>
                  <td>Annam</td>
                  <td>Om Annaya Namah</td>
                  <td>One Who Is Food</td>
                </tr>
                <tr>
                  <td>984</td>
                  <td>Annaadah</td>
                  <td>Om Annaadaya Namah</td>
                  <td>One Who Eats Food</td>
                </tr>
                <tr>
                  <td>985</td>
                  <td>Aatmayonih</td>
                  <td>Om Aatmayonaye Namah</td>
                  <td>The Uncaused Cause</td>
                </tr>
                <tr>
                  <td>986</td>
                  <td>Svayamjaatah</td>
                  <td>Om Svayamjaataya Namah</td>
                  <td>Self-Born</td>
                </tr>
                <tr>
                  <td>987</td>
                  <td>Vaikhaanah</td>
                  <td>Om Vaikhaanaya Namah</td>
                  <td>Cut Through the Earth</td>
                </tr>
                <tr>
                  <td>988</td>
                  <td>Saamagaayanah</td>
                  <td>Om Saamagaayanaya Namah</td>
                  <td>Singer of Sama Songs</td>
                </tr>
                <tr>
                  <td>989</td>
                  <td>Devakee-nandanah</td>
                  <td>Om Devakee-nandanaya Namah</td>
                  <td>Son of Devaki</td>
                </tr>
                <tr>
                  <td>990</td>
                  <td>Srashtaa</td>
                  <td>Om Srashtre Namah</td>
                  <td>Creator</td>
                </tr>
                <tr>
                  <td>991</td>
                  <td>Kshiteeshah</td>
                  <td>Om Kshiteeshaya Namah</td>
                  <td>Lord of the Earth</td>
                </tr>
                <tr>
                  <td>992</td>
                  <td>Paapa-naashanah</td>
                  <td>Om Paapa-naashanaya Namah</td>
                  <td>Destroyer of Sin</td>
                </tr>
                <tr>
                  <td>993</td>
                  <td>Samkha-bhrit</td>
                  <td>Om Samkha-bhrite Namah</td>
                  <td>Holder of the Divine Pancajanya</td>
                </tr>
                <tr>
                  <td>994</td>
                  <td>Nandakee</td>
                  <td>Om Nandakee Namah</td>
                  <td>Holder of the Nandaka Sword</td>
                </tr>
                <tr>
                  <td>995</td>
                  <td>Chakree</td>
                  <td>Om Chakrine Namah</td>
                  <td>Carrier of Sudarsana</td>
                </tr>
                <tr>
                  <td>996</td>
                  <td>Shaarnga-dhanvaa</td>
                  <td>Om Shaarnga-dhanvane Namah</td>
                  <td>Wielder of the Shaarnga Bow</td>
                </tr>
                <tr>
                  <td>997</td>
                  <td>Gadaadharah</td>
                  <td>Om Gadaadharaya Namah</td>
                  <td>Holder of the Kaumodakee Club</td>
                </tr>
                <tr>
                  <td>998</td>
                  <td>Rathaanga-paanih</td>
                  <td>Om Rathaanga-paanaye Namah</td>
                  <td>Has the Wheel of a Chariot as His Weapon</td>
                </tr>
                <tr>
                  <td>999</td>
                  <td>Akshobhyah</td>
                  <td>Om Akshobhyaaya Namah</td>
                  <td>Cannot Be Annoyed</td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>Sarva-praharanaayudhah</td>
                  <td>Om Sarva-praharanaayudhaya Namah</td>
                  <td>Possesses All Kinds of Weapons for Assault</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Significance of Lord Vishnu Sahasranama Names</h3>
          <p>
            Vishnu Sahasranamam 1000 names comes from the Mahabharata, one of
            the greatest Hindu epics. It was first recited by a great warrior,
            Bhishma Pitamaha, on his deathbed, guiding others to the right path.
            Chanting Lord Vishnu's thousand names is believed to lead one to
            moksha as it frees one from the cycle of life and death.
          </p>
          <p>
            Today, when stress and anxiety have become the new normal, chanting
            Vishnu Sahasranamam namavali can help individuals calm their minds.
            The one who attains the blessings of Lord Vishnu gets his protection
            and gets rid of the upcoming obstacles.
          </p>
        </div>
      </Container>
      <FAQLayout faqData={Vishnu1000FAQ} />
    </Layout>
  );
};
export default Vishnu1000;

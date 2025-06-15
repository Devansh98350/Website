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
const Murugan108FAQ = [
  {
    id: 1,
    title: "What is Lord Murugan?",
    content:
      "Lord Murugan, also known as Kartikeya, Skanda, or Subramanya Swamy, is a great Hindu deity. He is worshipped as the god of war and victory and is particularly popular in South India. As the son of Lord Shiva and Goddess Parvati, Murugan possesses divine power and wisdom.",
  },
  {
    id: 2,
    title: "Why does Lord Murugan have 108 names?",
    content:
      "The 108 names of Lord Murugan, known as the Subramanya Ashtottara Shatanamavali, represent different aspects of Lord Murugan's divine nature. Each name highlights a unique attribute, power, or story associated w ith him. Reciting 108 names is common in Hinduism and is believed to get the deity's blessings.",
  },
  {
    id: 3,
    title: "What are some popular names of Lord Murugan?",
    content:
      "Some notable names include Shanmukha (six-faced one), Vel Murugan (spear-wielding Murugan), and Kumaresa (Lord of Kumaras). Each name offers insight into Murugan's character, mythology, and spiritual significance, making the Sri Subrahmanya Swamy Ashtothram a way to attract his divine presence.",
  },
  {
    id: 4,
    title: "Why to chant 108 names of Murugan?",
    content:
      "Chanting 108 names of Murugan is a popular practice in South India, especially in Tamil Nadu. It is believed to please Lord Murugan ( Lord Kartikeya), who brings wealth, prosperity, good health and protection to his devotees. Go through the Murugan 108 names in English today.",
  },
  {
    id: 5,
    title: "How to chant Subramanya Swamy Shatanamavali?",
    content:
      "Find a peaceful time to chant Murugan names. People usually prefer Brahma Muhurta (1.5 hours before sunrise). One can also chant during sunset or before going to sleep. Place Lord Murugan idol or yantra in the North or East direction. Light diya or incense and start the chant facing it.",
  },
  {
    id: 6,
    title: "How to decide Lord Murugan names for baby boy?",
    content:
      "First of all, keep the list of 108 lord Muruga names with you. Then select some names based on the meanings like Shanmukh meaning, Subramanya meaning, etc. Look for other names of Lord Muruga and share your top choices with elders and an astrologer.",
  },
];

const Murugan108 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="108 Name of Lord Murugan - AstroSwarg"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <Container>
        <div className="body">
          <h1 className="heading">108 Names of Lord Murugan</h1>
          <h2>Gain The Blessings of Prabhu Kartikeya</h2>
          <h3>Learn Murugan Ashtottara Shatanamavali</h3>
          <p>
            The Murugan Ashtottara Shatanamavali is a sacred Hindu chant that
            consists of 108 names of Lord Murugan, also known as Kartikeya or
            Subramanya Swamy. This powerful chant is a form of devotional
            worship that allows devotees to connect with the divine energy of
            Lord Murugan. Let’s read more about South India’s popular 108
            Murugan Potri in English.
          </p>
          <h3>108 names of Lord Muruga With Meanings</h3>
          <p>
            Different names of Lord Muruga talk about his various forms,
            weapons, qualities, and functions. By reciting or meditating on
            these names, devotees can deepen their understanding and devotion to
            the Lord.
          </p>
          <p>
            Here is a complete list of 108 names of Lord Muruga with meanings
            and also mantras that add auspiciousness to his names.
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
                  <td>Skanda</td>
                  <td>Om Skandaya Namah</td>
                  <td>Salutations to the Attacker of evils</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Guhaya</td>
                  <td>Om Guhaya Namah</td>
                  <td>Salutations to the Hidden One</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Shanmukh</td>
                  <td>Om Shanmukhaya Namah</td>
                  <td>Salutations to the Six-Faced One</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Phalanetra</td>
                  <td>Om Phalanetraya Namah</td>
                  <td>Salutations to the One with a Forehead Eye</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Prabhav</td>
                  <td>Om Prabhave Namah</td>
                  <td>Salutations to the Lord Almighty</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Pingala</td>
                  <td>Om Pingalaya Namah</td>
                  <td>Salutations to the Golden-Hued One</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Krittikasuna</td>
                  <td>Om Krittikasunave Namah</td>
                  <td>Salutations to the Son of the Star Cluster Krittika</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Shikhivahana</td>
                  <td>Om Shikhivahanaya Namah</td>
                  <td>Salutations to the One Who Rides a Peacock</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Dvinetra</td>
                  <td>Om Dvinetraya Namah</td>
                  <td>Salutations to the Two-Eyed Lord</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Dwimurta</td>
                  <td>Om Dwimurtaye Namah</td>
                  <td>Salutations to the Lord with Two Forms</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Dwimuk</td>
                  <td>Om Dwimukaya Namah</td>
                  <td>Salutations to the Lord with Two Faces</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Dvinaday</td>
                  <td>Om Dvinadayai Namah</td>
                  <td>Salutations to the Lord with Two Arms</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Shaktidhar</td>
                  <td>Om Shaktidharaya Namah</td>
                  <td>Salutations to the Bearer of the Powerful Lance</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Pisidasaprabhajan</td>
                  <td>Om Pisidasaprabhajanaya Namah</td>
                  <td>Salutations to the Destroyer of Demons</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Tarakasurasam</td>
                  <td>Om Tarakasurasamhartre Namah</td>
                  <td>Salutations to the Slayer of Tarakasura</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Raksobalavimardana</td>
                  <td>Om Raksobalavimardanaya Namah</td>
                  <td>
                    Salutations to the Destroyer of the Strength of Demons
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Mattaya</td>
                  <td>Om Mattaya Namah</td>
                  <td>Salutations to the Fierce One</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Pramattaya</td>
                  <td>Om Pramattaya Namah</td>
                  <td>Salutations to the Lord Who is Eternally Free</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Unmattaya</td>
                  <td>Om Unmattaya Namah</td>
                  <td>Salutations to the Fierce Form</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Surasainyasuraksha</td>
                  <td>Om Surasainyasurakshakaya Namah</td>
                  <td>Salutations to the Protector of the Army of Devas</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Devasenapate</td>
                  <td>Om Devasenapataye Namah</td>
                  <td>Salutations to the Commander of the Army of Devas</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Prabhave</td>
                  <td>Om Prabhave Namah</td>
                  <td>Salutations to the One with Supreme Power</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Balaye</td>
                  <td>Om Balaye Namah</td>
                  <td>Salutations to the One Who is Powerful</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Kadambavanavasine</td>
                  <td>Om Kadambavanavasine Namah</td>
                  <td>
                    Salutations to the One Who Resides in the Kadamba Forest
                  </td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Umasutaya</td>
                  <td>Om Umasutaya Namah</td>
                  <td>Salutations to the Son of Goddess Uma</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Shaktidhara</td>
                  <td>Om Shaktidharaya Namah</td>
                  <td>Salutations to the Wielder of the Divine Spear</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Krounchadhwamsin</td>
                  <td>Om Krounchadhwamsine Namah</td>
                  <td>Salutations to the Destroyer of Krouncha Demon</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Sadanandaya</td>
                  <td>Om Sadanandaya Namah</td>
                  <td>Salutations to the Embodiment of Eternal Bliss</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Mahamunaye</td>
                  <td>Om Maha-munaye Namah</td>
                  <td>Salutations to the Great Ascetic</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Mayuravahanay</td>
                  <td>Om Mayuravahanaya Namah</td>
                  <td>Salutations to the One Who Rides a Peacock</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Devasenapataye</td>
                  <td>Om Devasenapataye Namah</td>
                  <td>Salutations to the Commander of the Army of the Gods</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Vishakhaya</td>
                  <td>Om Vishakhaya Namah</td>
                  <td>Salutations to the Omnipresent One</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Shaktidharaya</td>
                  <td>Om Shaktidharaya Namah</td>
                  <td>Salutations to the Wielder of the Shakti</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Avyaya</td>
                  <td>Om Avyaya Namah</td>
                  <td>Salutations to the Imperishable One</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Dakshaya</td>
                  <td>Om Dakshaya Namah</td>
                  <td>Salutations to the Skilled One</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Mahasenaya</td>
                  <td>Om Mahasenaya Namah</td>
                  <td>Salutations to the Commander-in-Chief of the Gods</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>Vaishakhashatrujit</td>
                  <td>Om Vaishakha-shatru-jitaye Namah</td>
                  <td>Salutations to the Conqueror of Enemies</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>Prajapati</td>
                  <td>Om Prajapatiaye Namah</td>
                  <td>Salutations to the Lord of All Beings</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>Surapriya</td>
                  <td>Om Surapriyaya Namah</td>
                  <td>Salutations to the Beloved of the Devas</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>Santanaya</td>
                  <td>Om Santanaya Namah</td>
                  <td>Salutations to the Granter of Progeny</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>Svarnavarna</td>
                  <td>Om Svarnavarnaya Namah</td>
                  <td>Salutations to the Golden-Hued One</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>Vibhave</td>
                  <td>Om Vibhave Namah</td>
                  <td>Salutations to the Prosperous One</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>Saravanabhavaya</td>
                  <td>Om Saravanabhavaya Namah</td>
                  <td>Salutations to the One Born in the Forest of Reeds</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>Bhaktavatsalaya</td>
                  <td>Om Bhaktavatsalaya Namah</td>
                  <td>Salutations to the Protector of Devotees</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>Kumaragurave</td>
                  <td>Om Kumara-gurave Namah</td>
                  <td>Salutations to the Preceptor of All Youth</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>Veladharaya</td>
                  <td>Om Veladharayaya Namah</td>
                  <td>Salutations to the Wielder of the Vel (Spear)</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>Vishnudatta</td>
                  <td>Om Vishnudattaya Namah</td>
                  <td>Salutations to the One Blessed by Lord Vishnu</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>Bhaktapalaya</td>
                  <td>Om Bhakta-palaya Namah</td>
                  <td>Salutations to the Protector of Devotees</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>Umaputraya</td>
                  <td>Om Uma-putraya Namah</td>
                  <td>Salutations to the Son of Goddess Uma</td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>Gangasutasambhavaya</td>
                  <td>Om Gangasutasambhavaya Namah</td>
                  <td>Salutations to the One Who Originated from Ganga</td>
                </tr>
                <tr>
                  <td>51</td>
                  <td>Sharavanodbhavaya</td>
                  <td>Om Sharavanodbhavaya Namah</td>
                  <td>Salutations to the One Born in a Forest of Reeds</td>
                </tr>
                <tr>
                  <td>52</td>
                  <td>Mahamayaya</td>
                  <td>Om Mahamayaya Namah</td>
                  <td>Salutations to the One of Great Illusions</td>
                </tr>
                <tr>
                  <td>53</td>
                  <td>Parvataya</td>
                  <td>Om Parvataya Namah</td>
                  <td>Salutations to the Son of Parvati</td>
                </tr>
                <tr>
                  <td>54</td>
                  <td>Visakhaya</td>
                  <td>Om Visakhaya Namah</td>
                  <td>Salutations to the One Who Pervades Everywhere</td>
                </tr>
                <tr>
                  <td>55</td>
                  <td>Shastrekshaya</td>
                  <td>Om Shastrekshaya Namah</td>
                  <td>Salutations to the One with Many Eyes</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>Shatruhantre</td>
                  <td>Om Shatruhantre Namah</td>
                  <td>Salutations to the Destroyer of Enemies</td>
                </tr>
                <tr>
                  <td>57</td>
                  <td>Rakshobalavimardanaya</td>
                  <td>Om Rakshobalavimardanaya Namah</td>
                  <td>
                    Salutations to the One Who Crushes the Strength of Demons
                  </td>
                </tr>
                <tr>
                  <td>58</td>
                  <td>Mattaya</td>
                  <td>Om Mattaya Namah</td>
                  <td>Salutations to the Intoxicated One</td>
                </tr>
                <tr>
                  <td>59</td>
                  <td>Pramattaya</td>
                  <td>Om Pramattaya Namah</td>
                  <td>Salutations to the Lord Who is Eternally Free</td>
                </tr>
                <tr>
                  <td>60</td>
                  <td>Unmattaya</td>
                  <td>Om Unmattaya Namah</td>
                  <td>Salutations to the Intoxicated One</td>
                </tr>
                <tr>
                  <td>61</td>
                  <td>Surasainyasurakshakaya</td>
                  <td>Om Surasainyasurakshakaya Namah</td>
                  <td>Salutations to the Protector of the Army of Devas</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>Devasenapataye</td>
                  <td>Om Devasenapataye Namah</td>
                  <td>Salutations to the Commander of the Army of Devas</td>
                </tr>
                <tr>
                  <td>63</td>
                  <td>Prabhave</td>
                  <td>Om Prabhave Namah</td>
                  <td>Salutations to the One with Supreme Power</td>
                </tr>
                <tr>
                  <td>64</td>
                  <td>Balaye</td>
                  <td>Om Balaye Namah</td>
                  <td>Salutations to the Powerful One</td>
                </tr>
                <tr>
                  <td>65</td>
                  <td>Kadambavanavasine</td>
                  <td>Om Kadambavanavasine Namah</td>
                  <td>
                    Salutations to the One Who Resides in the Kadamba Forest
                  </td>
                </tr>
                <tr>
                  <td>66</td>
                  <td>Umasutaya</td>
                  <td>Om Umasutaya Namah</td>
                  <td>Salutations to the Son of Uma</td>
                </tr>
                <tr>
                  <td>67</td>
                  <td>Shaktidharaya</td>
                  <td>Om Shaktidharaya Namah</td>
                  <td>Salutations to the Bearer of the Shakti</td>
                </tr>
                <tr>
                  <td>68</td>
                  <td>Krounchadhwamsine</td>
                  <td>Om Krounchadhwamsine Namah</td>
                  <td>Salutations to the Destroyer of Krouncha</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Sadanandaya</td>
                  <td>Om Sadanandaya Namah</td>
                  <td>Salutations to the One Who is Always Blissful</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Mahate</td>
                  <td>Om Mahate Namah</td>
                  <td>Salutations to the Great One</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Brahmane</td>
                  <td>Om Brahmane Namah</td>
                  <td>Salutations to the Supreme Knowledge</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Brahmaviduttamaya</td>
                  <td>Om Brahmaviduttamaya Namah</td>
                  <td>
                    Salutations to the One Who is Supreme in Knowledge of
                    Brahman
                  </td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Shuddhaya</td>
                  <td>Om Shuddhaya Namah</td>
                  <td>Salutations to the Pure One</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Shuddhavigrahaya</td>
                  <td>Om Shuddha-vigrahaya Namah</td>
                  <td>Salutations to the Pure Form</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Shrinivasaya</td>
                  <td>Om Shrinivasaya Namah</td>
                  <td>Salutations to the Abode of Shri (Wealth)</td>
                </tr>
                <tr>
                  <td>76</td>
                  <td>Shrinidhaye</td>
                  <td>Om Shrinidhaye Namah</td>
                  <td>Salutations to the Treasure House of Shri (Wealth)</td>
                </tr>
                <tr>
                  <td>77</td>
                  <td>Mayuravahanaya</td>
                  <td>Om Mayuravahanaya Namah</td>
                  <td>Salutations to the One Who Rides a Peacock</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>Diptatejase</td>
                  <td>Om Diptatejase Namah</td>
                  <td>Salutations to the One with Shining Brilliance</td>
                </tr>
                <tr>
                  <td>79</td>
                  <td>Mahatejase</td>
                  <td>Om Mahatejase Namah</td>
                  <td>Salutations to the Great Radiant One</td>
                </tr>
                <tr>
                  <td>80</td>
                  <td>Shashvate</td>
                  <td>Om Shashvate Namah</td>
                  <td>Salutations to the Eternal One</td>
                </tr>
                <tr>
                  <td>81</td>
                  <td>Baladaya</td>
                  <td>Om Baladaya Namah</td>
                  <td>Salutations to the Bestower of Strength</td>
                </tr>
                <tr>
                  <td>82</td>
                  <td>Parameshvaraya</td>
                  <td>Om Parameshvaraya Namah</td>
                  <td>Salutations to the Supreme Lord</td>
                </tr>
                <tr>
                  <td>83</td>
                  <td>Parakramaya</td>
                  <td>Om Parakramaya Namah</td>
                  <td>Salutations to the One of Valor</td>
                </tr>
                <tr>
                  <td>84</td>
                  <td>Jitakrodhaya</td>
                  <td>Om Jitakrodhaya Namah</td>
                  <td>Salutations to the One Who has Conquered Anger</td>
                </tr>
                <tr>
                  <td>85</td>
                  <td>Jitendriyaya</td>
                  <td>Om Jitendriyaya Namah</td>
                  <td>Salutations to the One Who has Conquered the Senses</td>
                </tr>
                <tr>
                  <td>86</td>
                  <td>Jitamitraya</td>
                  <td>Om Jitamitraya Namah</td>
                  <td>Salutations to the One Who has Conquered His Foes</td>
                </tr>
                <tr>
                  <td>87</td>
                  <td>Jagadgurave</td>
                  <td>Om Jagadgurave Namah</td>
                  <td>Salutations to the Preceptor of the Universe</td>
                </tr>
                <tr>
                  <td>88</td>
                  <td>Rakshobalavimardanaya</td>
                  <td>Om Rakshobalavimardanaya Namah</td>
                  <td>
                    Salutations to the One Who Crushes the Strength of Demons
                  </td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Mattaya</td>
                  <td>Om Mattaya Namah</td>
                  <td>Salutations to the Intoxicated One</td>
                </tr>
                <tr>
                  <td>90</td>
                  <td>Pramattaya</td>
                  <td>Om Pramattaya Namah</td>
                  <td>Salutations to the Lord Who is Eternally Free</td>
                </tr>
                <tr>
                  <td>91</td>
                  <td>Unmattaya</td>
                  <td>Om Unmattaya Namah</td>
                  <td>Salutations to the Intoxicated One</td>
                </tr>
                <tr>
                  <td>92</td>
                  <td>Surasainyasurakshakaya</td>
                  <td>Om Surasainyasurakshakaya Namah</td>
                  <td>Salutations to the Protector of the Army of Devas</td>
                </tr>
                <tr>
                  <td>93</td>
                  <td>Devasenapataye</td>
                  <td>Om Devasenapataye Namah</td>
                  <td>Salutations to the Commander of the Army of Devas</td>
                </tr>
                <tr>
                  <td>94</td>
                  <td>Prabhave</td>
                  <td>Om Prabhave Namah</td>
                  <td>Salutations to the One with Supreme Power</td>
                </tr>
                <tr>
                  <td>95</td>
                  <td>Balaye</td>
                  <td>Om Balaye Namah</td>
                  <td>Salutations to the Powerful One</td>
                </tr>
                <tr>
                  <td>96</td>
                  <td>Kadambavanavasine</td>
                  <td>Om Kadambavanavasine Namah</td>
                  <td>
                    Salutations to the One Who Resides in the Kadamba Forest
                  </td>
                </tr>
                <tr>
                  <td>97</td>
                  <td>Umasutaya</td>
                  <td>Om Umasutaya Namah</td>
                  <td>Salutations to the Son of Uma</td>
                </tr>
                <tr>
                  <td>98</td>
                  <td>Shaktidharaya</td>
                  <td>Om Shaktidharaya Namah</td>
                  <td>Salutations to the Bearer of the Shakti</td>
                </tr>
                <tr>
                  <td>99</td>
                  <td>Krounchadhwamsine</td>
                  <td>Om Krounchadhwamsine Namah</td>
                  <td>Salutations to the Destroyer of Krouncha</td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>Sadanandaya</td>
                  <td>Om Sadanandaya Namah</td>
                  <td>Salutations to the One Who is Always Blissful</td>
                </tr>
                <tr>
                  <td>101</td>
                  <td>Mahate</td>
                  <td>Om Mahate Namah</td>
                  <td>Salutations to the Great One</td>
                </tr>
                <tr>
                  <td>102</td>
                  <td>Brahmane</td>
                  <td>Om Brahmane Namah</td>
                  <td>Salutations to the Supreme Knowledge</td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Brahmaviduttamaya</td>
                  <td>Om Brahmaviduttamaya Namah</td>
                  <td>
                    Salutations to the One Who is Supreme in Knowledge of
                    Brahman
                  </td>
                </tr>
                <tr>
                  <td>104</td>
                  <td>Shuddhaya</td>
                  <td>Om Shuddhaya Namah</td>
                  <td>Salutations to the Pure One</td>
                </tr>
                <tr>
                  <td>105</td>
                  <td>Shuddhavigrahaya</td>
                  <td>Om Shuddha-vigrahaya Namah</td>
                  <td>Salutations to the Pure Form</td>
                </tr>
                <tr>
                  <td>106</td>
                  <td>Shrinivasaya</td>
                  <td>Om Shrinivasaya Namah</td>
                  <td>Salutations to the Abode of Shri (Wealth)</td>
                </tr>
                <tr>
                  <td>107</td>
                  <td>Shrinidhaye</td>
                  <td>Om Shrinidhaye Namah</td>
                  <td>Salutations to the Treasure House of Shri (Wealth)</td>
                </tr>
                <tr>
                  <td>108</td>
                  <td>Mayuravahanaya</td>
                  <td>Om Mayuravahanaya Namah</td>
                  <td>Salutations to the One Who Rides a Peacock</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Choosing A Lord Murugan Name For Newborn Baby</h3>
          <p>
            Selecting a name for your newborn that honours Lord Murugan can be a
            deeply meaningful and spiritual decision. The different names of
            lord Muruga each carry their own significance and power. We bring
            some steps to decide a Muruga name for your baby.
          </p>
          <ol>
            <li>
              Firstly, go through the list of Murugan 108 names in English that
              we have provided. Learn them and understand the meaning of each
              name.
            </li>
            <li>
              Next, think of the Murugan qualities that you want your kid to
              relate to. For example, is it his youthful energy? Or is it his
              bravery?
            </li>
            <li>
              For example, suppose you are looking for Lord Murugan names for
              baby boy, and you wish to relate your boy with the physical
              features of the lord. You can go for Shanmukh meaning “beautiful
              attributes”.
            </li>
            <li>
              Similarly, you may look for other names of Lord Muruga and then
              share your top picks with elders for further shortlisting.
            </li>
            <li>
              The last step could be consulting an astrologer with the selected
              Murugan names who will look into your kid’s birth chart for the
              final name.
            </li>
          </ol>
          <h3>Benefits Of Chanting Lord Murugan 108 Names</h3>
          <p>
            Chanting the 108 names of Murugan, also known as the Sri Subrahmanya
            Swamy Ashtothram, offers many spiritual and personal benefits to
            devotees. This sacred practice brings about positive transformations
            in various aspects of life.
          </p>
          <UnorderedList>
            <ListItem>
              <b>Spiritual Growth and Protection</b> By reciting these powerful
              Lord Muruga names, you invite the Lord’s blessings and protection
              into your life. It serves as a shield against negative energies
              and obstacles and helps purify your mind and soul. This leads to
              self-awareness and spiritual growth.
            </ListItem>
            <ListItem>
              <b>Mental Clarity and Emotional Balance: </b>The rhythmic chant of
              Lord Muruga names acts as a form of meditation, calming the mind
              and reducing stress. This practice enhances focus, improves
              concentration, and promotes emotional stability. Hence, you gain
              mental clarity to make better decisions and solve problems.
            </ListItem>
            <ListItem>
              <b>Physical Well-being and Prosperity: </b>Devotees often report
              improved health and increased strength through consistent
              chanting. The positive energy generated by this practice can boost
              your immune system. Plus, chanting Lord Murugan names is believed
              to attract prosperity and success in various goals.
            </ListItem>
            <ListItem>
              <b>Strengthen Family Bonding: </b>Chanting 108 names of lord
              Muruga together as a family can help strengthen emotional bonds
              and promote a sense of spiritual togetherness. This shared
              spiritual practice can bring family members closer, enhancing
              feelings of love, care and mutual support.
            </ListItem>
          </UnorderedList>
          <h3>The Ideal Way To Chant Lord Murugan 108 Names</h3>
          <p>
            In order to gain maximum benefits from the chanting of 108 names of
            Murugan, one must properly follow a chant process. There is an ideal
            way to attract the blessings of Subramanya Swamy (our Murugan or
            Kartikeya). Let us see how.
          </p>
          <h3>Ideal Direction To Chant Muruga Namavali</h3>
          <p>
            When chanting 108 names of Murugan, it's best to face East or North.
            These directions are considered auspicious in Hindu tradition.
            Facing East symbolises new beginnings and spiritual awareness while
            facing North represents wisdom and progress.
          </p>
          <p>
            Ensure your posture is comfortable yet respectful. Sit with your
            back straight and shoulders relaxed for a powerful experience.
          </p>
          <h3>Ideal Time To Chant Muruga Namavali</h3>
          <p>
            The most auspicious time for chanting lord Muruga names is during
            the Brahma Muhurta, which occurs approximately 1.5 hours before
            sunrise. This pre-dawn period is believed to be spiritually charged,
            enhancing the potency of your prayers.
          </p>
          <p>
            Alternatively, you may choose to recite the names during sandhya
            kala (twilight) or before retiring for the night. For your ease, we
            have provided the 108 Murugan Potri in English.
          </p>
          <h3>Ideal Beads To Chant Muruga Namavali</h3>
          <p>
            Use a mala (prayer beads) with 108 beads to keep count as you chant.
            Traditionally, Rudraksha or Red Coral beads are preferred, but any
            mala will work. Hold the mala in your right hand, using your thumb
            to move each bead as you recite a name.
          </p>
          <p>
            This unbroken connection of beads aids in maintaining focus and
            rhythm during your devotional practice. At the same time, it is
            considered auspicious.
          </p>
          <h3>Ideal Setting/Atmosphere To Chant Muruga Namavali</h3>
          <p>
            Establish a calm environment for your chanting ritual. Light a lamp
            or incense to purify the space and create a meditating atmosphere.
            If possible, set up a small altar with Lord Murugan's image or
            yantra.
          </p>
          <p>
            Minimise distractions by choosing a quiet area. Also, inform others
            of your spiritual practice to ensure undisturbed devotion.
          </p>
        </div>
      </Container>
      <FAQLayout faqData={Murugan108FAQ} />
    </Layout>
  );
};
export default Murugan108;

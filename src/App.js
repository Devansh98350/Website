/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/Homepage.js";
/*Navbar*/
import Gallery from "./components/Header/Others/About/Gallery.js";
import Contact from "./components/Header/Others/Contact/Contact.js";
import About from "./components/Header/Others/About/About.js";
import Careermain from "./components/Header/Others/Contact/Career/Careermain.js";
/*Horoscope 2024*/
import Horoscope2024 from "./components/Footer/Variable/Horoscope/Horoscope2024/Horoscope2024.js";
import Virgo from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Virgo/Virgo.js";
import Tarus from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Tarus/Tarus.js";
import Scorpio from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Scorpio/Scorpio.js";
import Sagittarius from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Sagittarius/Sagittarius.js";
import Pisces from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Pisces/Pisces.js";
import Libra from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Libra/Libra.js";
import Leo from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Leo/Leo.js";
import Gemini from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Gemini/Gemini.js";
import Capricorn from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Capricorn/Capricorn.js";
import Cancer from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Cancer/Cancer.js";
import Aries from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Aries/Aries.js";
import Aquarius from "./components/Footer/Variable/Horoscope/Horoscope2024/Others/Aquarius/Aquarius.js";
/*Shubh Muhurat*/
import Shubh_Muhrat from "./components/Footer/Variable/Shubh_Muhurat/Shubh_Muhrat.js";
import Annanprashan from "./components/Footer/Variable/Shubh_Muhurat/Annanprashan.js";
import Naamkaran from "./components/Footer/Variable/Shubh_Muhurat/Naamkaran.js";
import Car from "./components/Footer/Variable/Shubh_Muhurat/Car.js";
import Marriage from "./components/Footer/Variable/Shubh_Muhurat/Marriage.js";
import Gold_Buying from "./components/Footer/Variable/Shubh_Muhurat/Gold_Buying.js";
import Bhoomi_Pujan from "./components/Footer/Variable/Shubh_Muhurat/Bhoomi_Pujan.js";
import Griha_Pravesh from "./components/Footer/Variable/Shubh_Muhurat/Griha_Pravesh.js";
import Mundan from "./components/Footer/Variable/Shubh_Muhurat/Mundan.js";
/*Free Kundli*/
import FreeKundli from "./components/Footer/Fixed/Others/FreeKundli/FreeKundli.js";
import KundliReading from "./components/Footer/Fixed/Others/FreeKundli/KundliReading/KundliReading.js";
import PlanetsAstro from "./components/Footer/Fixed/Others/FreeKundli/Others/PlanetsAstro.js";
import ReadPlanets from "./components/Footer/Fixed/Others/FreeKundli/Others/ReadPlanets.js";
import UnderHouses from "./components/Footer/Fixed/Others/FreeKundli/Others/UnderHouses.js";
import PlanetSignificance from "./components/Footer/Fixed/Others/FreeKundli/Others/PlanetSignificance.js";
/*Nakshatras Constellations*/
import Nakshatras from "./components/Footer/Fixed/Nakshatras/Nakshatras.js";
import Ashwini from "./components/Footer/Fixed/Nakshatras/Description/Ashwini.js";
import Bharani from "./components/Footer/Fixed/Nakshatras/Description/Bharani.js";
import Krittika from "./components/Footer/Fixed/Nakshatras/Description/Krittika.js";
import Rohini from "./components/Footer/Fixed/Nakshatras/Description/Rohini.js";
import Mrigashira from "./components/Footer/Fixed/Nakshatras/Description/Mrigashira.js";
import Ardra from "./components/Footer/Fixed/Nakshatras/Description/Ardra.js";
import Punarvasu from "./components/Footer/Fixed/Nakshatras/Description/Punarvasu.js";
import Pushya from "./components/Footer/Fixed/Nakshatras/Description/Pushya.js";
import Ashlesha from "./components/Footer/Fixed/Nakshatras/Description/Ashlesha.js";
import Magha from "./components/Footer/Fixed/Nakshatras/Description/Magha.js";
import Pphalguni from "./components/Footer/Fixed/Nakshatras/Description/Pphalguni.js";
import Uphalguni from "./components/Footer/Fixed/Nakshatras/Description/Uphalguni.js";
import Hasta from "./components/Footer/Fixed/Nakshatras/Description/Hasta.js";
import Chitra from "./components/Footer/Fixed/Nakshatras/Description/Chitra.js";
import Swati from "./components/Footer/Fixed/Nakshatras/Description/Swati.js";
import Vishakha from "./components/Footer/Fixed/Nakshatras/Description/Vishakha.js";
import Anuradha from "./components/Footer/Fixed/Nakshatras/Description/Anuradha.js";
import Jyestha from "./components/Footer/Fixed/Nakshatras/Description/Jyestha.js";
import Moola from "./components/Footer/Fixed/Nakshatras/Description/Moola.js";
import Poorvashada from "./components/Footer/Fixed/Nakshatras/Description/Poorvashada.js";
import Uttarashada from "./components/Footer/Fixed/Nakshatras/Description/Uttarashada.js";
import Abhijit from "./components/Footer/Fixed/Nakshatras/Description/Abhijit.js";
import Dhanishta from "./components/Footer/Fixed/Nakshatras/Description/Dhanishta.js";
import Shatabhisha from "./components/Footer/Fixed/Nakshatras/Description/Shatabhisha.js";
import Pbhadrapada from "./components/Footer/Fixed/Nakshatras/Description/Pbhadrapada.js";
import Ubhadrapada from "./components/Footer/Fixed/Nakshatras/Description/Ubhadrapada.js";
import Revati from "./components/Footer/Fixed/Nakshatras/Description/Revati.js";
import Shravana from "./components/Footer/Fixed/Nakshatras/Description/Shravana.js";
/*Numerology*/
import Numerology from "./components/Footer/Fixed/Numerology/Numerology.js";
import Tamil from "./components/Footer/Fixed/Numerology/Other/Tamil.js";
import Pythagoras from "./components/Footer/Fixed/Numerology/Other/Pythagoras.js";
import Chaldean from "./components/Footer/Fixed/Numerology/Other/Chaldean.js";
import Kabbalah from "./components/Footer/Fixed/Numerology/Other/Kabbalah.js";
import N1 from "./components/Footer/Fixed/Numerology/Other/N1.js";
import N2 from "./components/Footer/Fixed/Numerology/Other/N2.js";
import N3 from "./components/Footer/Fixed/Numerology/Other/N3.js";
import N4 from "./components/Footer/Fixed/Numerology/Other/N4.js";
import N5 from "./components/Footer/Fixed/Numerology/Other/N5.js";
import N6 from "./components/Footer/Fixed/Numerology/Other/N6.js";
import N7 from "./components/Footer/Fixed/Numerology/Other/N7.js";
import N8 from "./components/Footer/Fixed/Numerology/Other/N8.js";
import N9 from "./components/Footer/Fixed/Numerology/Other/N9.js";
import Life from "./components/Footer/Fixed/Numerology/Other/Life.js";
import Master from "./components/Footer/Fixed/Numerology/Other/Master.js";
import SunN from "./components/Footer/Fixed/Numerology/Other/SunN.js";
import Karmic from "./components/Footer/Fixed/Numerology/Other/Karmic.js";
import Name from "./components/Footer/Fixed/Numerology/Other/Name.js";
import Mnn from "./components/Footer/Fixed/Numerology/Other/Mnn.js";
import Fnn from "./components/Footer/Fixed/Numerology/Other/Fnn.js";
import Cnn from "./components/Footer/Fixed/Numerology/Other/Cnn.js";
import Fonn from "./components/Footer/Fixed/Numerology/Other/Fonn.js";
/*Mantras*/
import Mantras from "./components/Footer/Fixed/Mantras/Mantras.js";
import Surya from "./components/Footer/Fixed/Mantras/NavagrahaMantras/Surya.js";
import Chandra from "./components/Footer/Fixed/Mantras/NavagrahaMantras/Chandra.js";
import Mangal from "./components/Footer/Fixed/Mantras/NavagrahaMantras/Mangal.js";
import Budh from "./components/Footer/Fixed/Mantras/NavagrahaMantras/Budh.js";
import Brihaspati from "./components/Footer/Fixed/Mantras/NavagrahaMantras/Brihaspati.js";
import Shukra from "./components/Footer/Fixed/Mantras/NavagrahaMantras/Shukra.js";
import Shani from "./components/Footer/Fixed/Mantras/NavagrahaMantras/Shani.js";
import Rahu1 from "./components/Footer/Fixed/Mantras/NavagrahaMantras/Rahu1.js";
import Ketu1 from "./components/Footer/Fixed/Mantras/NavagrahaMantras/Ketu1.js";
import Success from "./components/Footer/Fixed/Mantras/OtherMantras/Success.js";
import Chandraghanta from "./components/Footer/Fixed/Mantras/OtherMantras/Chandraghanta.js";
import Shabar from "./components/Footer/Fixed/Mantras/OtherMantras/Shabar.js";
import Sai from "./components/Footer/Fixed/Mantras/OtherMantras/Sai.js";
import Kali from "./components/Footer/Fixed/Mantras/OtherMantras/Kali.js";
import Batuk from "./components/Footer/Fixed/Mantras/OtherMantras/Batuk.js";
import Kaal from "./components/Footer/Fixed/Mantras/OtherMantras/Kaal.js";
import Shakti from "./components/Footer/Fixed/Mantras/OtherMantras/Shakti.js";
import Parvati from "./components/Footer/Fixed/Mantras/OtherMantras/Parvati.js";
import Beej from "./components/Footer/Fixed/Mantras/OtherMantras/Beej.js";
import Om from "./components/Footer/Fixed/Mantras/OtherMantras/Om.js";
import Durga from "./components/Footer/Fixed/Mantras/OtherMantras/Durga.js";
import Katyayani from "./components/Footer/Fixed/Mantras/OtherMantras/Katyayani.js";
import Tulsi from "./components/Footer/Fixed/Mantras/OtherMantras/Tulsi.js";
import Maham from "./components/Footer/Fixed/Mantras/OtherMantras/Maham.js";
import Shiva from "./components/Footer/Fixed/Mantras/OtherMantras/Shiva.js";
import Kuber from "./components/Footer/Fixed/Mantras/OtherMantras/Kuber.js";
import Rudra from "./components/Footer/Fixed/Mantras/OtherMantras/Rudra.js";
import Ram from "./components/Footer/Fixed/Mantras/OtherMantras/Ram.js";
import Santan from "./components/Footer/Fixed/Mantras/OtherMantras/Santan.js";
import Gayatri from "./components/Footer/Fixed/Mantras/OtherMantras/Gayatri.js";
import Hanuman from "./components/Footer/Fixed/Mantras/OtherMantras/Hanuman.js";
import Lakshmi from "./components/Footer/Fixed/Mantras/OtherMantras/Lakshmi.js";
import Baglamukhi from "./components/Footer/Fixed/Mantras/OtherMantras/Baglamukhi.js";
import Navagraha from "./components/Footer/Fixed/Mantras/OtherMantras/Navagraha.js";
import Saraswati from "./components/Footer/Fixed/Mantras/OtherMantras/Saraswati.js";
import Vastu1 from "./components/Footer/Fixed/Mantras/OtherMantras/Vastu1.js";
import Pregnancy from "./components/Footer/Fixed/Mantras/OtherMantras/Pregnancy.js";
import Grihasan from "./components/Footer/Fixed/Mantras/OtherMantras/Grihasan.js";
import Ganesh from "./components/Footer/Fixed/Mantras/OtherMantras/Ganesh.js";
import Rashi from "./components/Footer/Fixed/Mantras/OtherMantras/Rashi.js";
import Krishna from "./components/Footer/Fixed/Mantras/OtherMantras/Krishna.js";
/*Planetary Transit 2024*/
import Planet from "./components/Footer/Variable/Planet/Planet.js";
import Sun from "./components/Footer/Variable/Planet/Sun.js";
import Mars from "./components/Footer/Variable/Planet/Mars.js";
import Mercury from "./components/Footer/Variable/Planet/Mercury.js";
import Jupiter from "./components/Footer/Variable/Planet/Jupiter.js";
import Venus from "./components/Footer/Variable/Planet/Venus.js";
import Saturn from "./components/Footer/Variable/Planet/Saturn.js";
import Rahu from "./components/Footer/Variable/Planet/Rahu.js";
import Ketu from "./components/Footer/Variable/Planet/Ketu.js";
import Moon from "./components/Footer/Variable/Planet/Moon.js";
/*Footer-Others*/
import Yoga from "./components/Footer/Fixed/Others/Yoga/Yoga.js";
import Kaalsharp from "./components/Footer/Fixed/Others/Kaalsharp/Kaalsharp.js";
import ChildAstro from "./components/Footer/Fixed/Others/ChildAstro/ChildAstro.js";
import Gfascendant from "./components/Footer/Fixed/Others/Gfascendant/Gfascendant.js";
import Remedies from "./components/Footer/Fixed/Others/Remedies/Remedies.js";
/*Tarot*/
import Tarot from "./components/Footer/Fixed/Tarot/Tarot.js";
import Fool from "./components/Footer/Fixed/Tarot/Major/Fool.js";
import Magician from "./components/Footer/Fixed/Tarot/Major/Magician.js";
import Priestess from "./components/Footer/Fixed/Tarot/Major/Priestess";
import Empress from "./components/Footer/Fixed/Tarot/Major/Empress.js";
import Emperor from "./components/Footer/Fixed/Tarot/Major/Emperor.js";
import Hierophant from "./components/Footer/Fixed/Tarot/Major/Hierophant.js";
import Lovers from "./components/Footer/Fixed/Tarot/Major/Lovers.js";
import Chariot from "./components/Footer/Fixed/Tarot/Major/Chariot.js";
import Strength from "./components/Footer/Fixed/Tarot/Major/Strength.js";
import Hermit from "./components/Footer/Fixed/Tarot/Major/Hermit.js";
import Wheel from "./components/Footer/Fixed/Tarot/Major/Wheel.js";
import Justice from "./components/Footer/Fixed/Tarot/Major/Justice.js";
import Hanged from "./components/Footer/Fixed/Tarot/Major/Hanged.js";
import Death from "./components/Footer/Fixed/Tarot/Major/Death.js";
import Temperance from "./components/Footer/Fixed/Tarot/Major/Temperance";
import Devil from "./components/Footer/Fixed/Tarot/Major/Devil";
import Tower from "./components/Footer/Fixed/Tarot/Major/Tower";
import Star from "./components/Footer/Fixed/Tarot/Major/Star.js";
import Moon1 from "./components/Footer/Fixed/Tarot/Major/Moon1.js";
import Judgement from "./components/Footer/Fixed/Tarot/Major/Judgement.js";
import World from "./components/Footer/Fixed/Tarot/Major/World";
import Ace from "./components/Footer/Fixed/Tarot/Minor/Wands/Ace.js";
import Two from "./components/Footer/Fixed/Tarot/Minor/Wands/Two.js";
import Three from "./components/Footer/Fixed/Tarot/Minor/Wands/Three.js";
import Four from "./components/Footer/Fixed/Tarot/Minor/Wands/Four.js";
import Five from "./components/Footer/Fixed/Tarot/Minor/Wands/Five.js";
import Six from "./components/Footer/Fixed/Tarot/Minor/Wands/Six.js";
import Seven from "./components/Footer/Fixed/Tarot/Minor/Wands/Seven.js";
import Eight from "./components/Footer/Fixed/Tarot/Minor/Wands/Eight.js";
import Nine from "./components/Footer/Fixed/Tarot/Minor/Wands/Nine.js";
import Ten from "./components/Footer/Fixed/Tarot/Minor/Wands/Ten.js";
import Page from "./components/Footer/Fixed/Tarot/Minor/Wands/Page.js";
import Knight from "./components/Footer/Fixed/Tarot/Minor/Wands/Knight.js";
import Queen from "./components/Footer/Fixed/Tarot/Minor/Wands/Queen.js";
import King from "./components/Footer/Fixed/Tarot/Minor/Wands/King.js";
import Ace1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Ace1.js";
import Two1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Two1.js";
import Three1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Three1.js";
import Four1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Four1.js";
import Five1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Five1.js";
import Six1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Six1.js";
import Seven1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Seven1.js";
import Eight1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Eight1.js";
import Nine1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Nine1.js";
import Ten1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Ten1.js";
import Page1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Page1.js";
import Knight1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Knight1.js";
import Queen1 from "./components/Footer/Fixed/Tarot/Minor/Cups/Queen1.js";
import King1 from "./components/Footer/Fixed/Tarot/Minor/Cups/King1.js";
import Ace2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Ace2.js";
import Two2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Two2.js";
import Three2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Three2.js";
import Four2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Four2.js";
import Five2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Five2.js";
import Six2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Six2.js";
import Seven2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Seven2.js";
import Eight2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Eight2.js";
import Nine2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Nine2.js";
import Ten2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Ten2.js";
import Page2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Page2.js";
import Knight2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Knight2.js";
import Queen2 from "./components/Footer/Fixed/Tarot/Minor/Swords/Queen2.js";
import King2 from "./components/Footer/Fixed/Tarot/Minor/Swords/King2.js";
import Ace3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Ace3.js";
import Two3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Two3.js";
import Three3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Three3.js";
import Four3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Four3.js";
import Five3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Five3.js";
import Six3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Six3.js";
import Seven3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Seven3.js";
import Eight3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Eight3.js";
import Nine3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Nine3.js";
import Ten3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Ten3.js";
import Page3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Page3.js";
import Knight3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Knight3.js";
import Queen3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/Queen3.js";
import King3 from "./components/Footer/Fixed/Tarot/Minor/Pentacles/King3.js";
/*Zodiac Signs*/
import Zodiac from "./components/Footer/Variable/Zodiac_Signs/Zodiac.js";
/*Vastu Shastra*/
import Vastu from "./components/Footer/Fixed/Vastu_Shastra/Vastu.js";
import Home1 from "./components/Footer/Fixed/Vastu_Shastra/Home1.js";
import Property from "./components/Footer/Fixed/Vastu_Shastra/Property.js";
import Career from "./components/Footer/Fixed/Vastu_Shastra/Career.js";
import Health from "./components/Footer/Fixed/Vastu_Shastra/Health.js";
import Wealth from "./components/Footer/Fixed/Vastu_Shastra/Wealth.js";
import Lmlife from "./components/Footer/Fixed/Vastu_Shastra/Lmlife.js";
import Plants from "./components/Footer/Fixed/Vastu_Shastra/Plants.js";
import Energy from "./components/Footer/Fixed/Vastu_Shastra/Energy.js";
import Lnr from "./components/Footer/Fixed/Vastu_Shastra/Lnr.js";
import Dlife from "./components/Footer/Fixed/Vastu_Shastra/Dlife.js";
import Pmirror from "./components/Footer/Fixed/Vastu_Shastra/Pmirror.js";
import Sdirection from "./components/Footer/Fixed/Vastu_Shastra/Sdirection.js";
import Products from "./components/Footer/Fixed/Vastu_Shastra/Products.js";
/*Calendar2024*/
import SolarEclipse from "./components/Footer/Variable/Calendar2024/SolarEclipse.js";
import LunarEclipse from "./components/Footer/Variable/Calendar2024/LunarEclipse.js";
import FestivalCalendar from "./components/Footer/Variable/Calendar2024/Festival2024/FestivalCalendar.js";
import VratCalendar from "./components/Footer/Variable/Calendar2024/VratCalendar.js";
import HinduCalendar from "./components/Footer/Variable/Calendar2024/Festival2024/HinduCalendar/HinduCalendar.js";
import JainCalendar from "./components/Footer/Variable/Calendar2024/Festival2024/JainCalendar/JainCalendar.js";
import SikhCalendar from "./components/Footer/Variable/Calendar2024/Festival2024/SikhCalendar/SikhCalendar.js";
import BuddhistCalendar from "./components/Footer/Variable/Calendar2024/Festival2024/BuddhistCalendar/BuddhistCalendar.js";
import PradoshaVrat from "./components/Footer/Variable/Calendar2024/Vrat2024/PradoshaVrat.js";
import EkadashiVrat from "./components/Footer/Variable/Calendar2024/Vrat2024/EkadashiVrat.js";
import AmavasyaVrat from "./components/Footer/Variable/Calendar2024/Vrat2024/AmavasyaVrat.js";
import PurnimaVrat from "./components/Footer/Variable/Calendar2024/Vrat2024/PurnimaVrat.js";
import SankashtiChaturthi from "./components/Footer/Variable/Calendar2024/Vrat2024/SankashtiChaturthi.js";
import ShradhaDays from "./components/Footer/Variable/Calendar2024/Vrat2024/ShradhaDays.js";
import RohiniVrat from "./components/Footer/Variable/Calendar2024/Vrat2024/RohiniVrat.js";
/*Mole Astrology*/
import MoleAstro from "./components/Footer/Fixed/Others/MoleAstrology/MoleAstro.js";
import Moface from "./components/Footer/Fixed/Others/MoleAstrology/Others/Moface.js";
import Molegs from "./components/Footer/Fixed/Others/MoleAstrology/Others/Molegs.js";
import Mostomach from "./components/Footer/Fixed/Others/MoleAstrology/Others/Mostomach.js";
import Mogenitals from "./components/Footer/Fixed/Others/MoleAstrology/Others/Mogenitals.js";
import Moarms from "./components/Footer/Fixed/Others/MoleAstrology/Others/Moarms.js";
import Mobacks from "./components/Footer/Fixed/Others/MoleAstrology/Others/Mobacks.js";
/*Corporate Info*/
import Rcp from "./components/Footer/Corporate_Info/Rcp.js";
import Tnc from "./components/Footer/Corporate_Info/tnc.js";
import Privacy from "./components/Footer/Corporate_Info/Privacy.js";
import Disclaimer from "./components/Footer/Corporate_Info/Disclaimer.js";
import Pricing from "./components/Footer/Corporate_Info/Pricing.js";

function App() {
  return (
    <Router>
      <Routes>
        {/*<Route path=" " element={<HomePage />} />*/}
        <Route path="/" element={<HomePage />} />
        {/*Navbar*/}
        <Route path="/about-us" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/join-our-team" element={<Careermain />} />
        <Route path="/contact-us" element={<Contact />} />
        {/*Horoscope 2024*/}
        <Route path="/horoscope-2024" element={<Horoscope2024 />} />
        <Route
          path="/horoscope-2024/virgo-horoscope-2024"
          element={<Virgo />}
        />
        <Route
          path="/horoscope-2024/taurus-horoscope-2024"
          element={<Tarus />}
        />
        <Route
          path="/horoscope-2024/scorpio-horoscope-2024"
          element={<Scorpio />}
        />
        <Route
          path="/horoscope-2024/sagittarius-horoscope-2024"
          element={<Sagittarius />}
        />
        <Route
          path="/horoscope-2024/libra-horoscope-2024"
          element={<Libra />}
        />
        <Route path="/horoscope-2024/leo-horoscope-2024" element={<Leo />} />
        <Route
          path="/horoscope-2024/gemini-horoscope-2024"
          element={<Gemini />}
        />
        <Route
          path="/horoscope-2024/capricorn-horoscope-2024"
          element={<Capricorn />}
        />
        <Route
          path="/horoscope-2024/cancer-horoscope-2024"
          element={<Cancer />}
        />
        <Route
          path="/horoscope-2024/aries-horoscope-2024"
          element={<Aries />}
        />
        <Route
          path="/horoscope-2024/aquarius-horoscope-2024"
          element={<Aquarius />}
        />
        <Route
          path="/horoscope-2024/pisces-horoscope-2024"
          element={<Pisces />}
        />
        {/*Shubh Muhurat*/}
        <Route path="/shubh-muhurat-2024" element={<Shubh_Muhrat />} />
        <Route
          path="/shubh-muhurat-2024/annanprashan-muhurat-2024"
          element={<Annanprashan />}
        />
        <Route
          path="/shubh-muhurat-2024/namkaran-muhurat-2024"
          element={<Naamkaran />}
        />
        <Route
          path="/shubh-muhurat-2024/car-bike-muhurat-2024"
          element={<Car />}
        />
        <Route
          path="/shubh-muhurat-2024/marriage-muhurat-2024"
          element={<Marriage />}
        />
        <Route
          path="/shubh-muhurat-2024/gold-buying-muhurat-2024"
          element={<Gold_Buying />}
        />
        <Route
          path="/shubh-muhurat-2024/bhoomi-pujan-muhurat-2024"
          element={<Bhoomi_Pujan />}
        />
        <Route
          path="/shubh-muhurat-2024/griha-pravesh-muhurat-2024"
          element={<Griha_Pravesh />}
        />
        <Route
          path="/shubh-muhurat-2024/mundan-muhurat-2024"
          element={<Mundan />}
        />
        {/*Free Kundli*/}
        <Route path="/freekundli" element={<FreeKundli />} />
        <Route
          path="/freekundli/how-to-read-kundli"
          element={<KundliReading />}
        />
        <Route
          path="/freekundli/planets-signs-houses-in-astrology"
          element={<PlanetsAstro />}
        />
        <Route
          path="/freekundli/how-to-read-planets-in-astrology"
          element={<ReadPlanets />}
        />
        <Route
          path="/freekundli/how-to-read-houses-in-kundli"
          element={<UnderHouses />}
        />
        <Route
          path="/freekundli/planets-signs-and-their-significance-in-astrology"
          element={<PlanetSignificance />}
        />
        {/*Nakshatras Constellations*/}
        <Route path="/nakshatras-constellations" element={<Nakshatras />} />
        <Route
          path="/nakshatras-constellations/ashwini"
          element={<Ashwini />}
        />
        <Route
          path="/nakshatras-constellations/bharani/"
          element={<Bharani />}
        />
        <Route
          path="/nakshatras-constellations/krittika"
          element={<Krittika />}
        />
        <Route path="/nakshatras-constellations/rohini" element={<Rohini />} />
        <Route
          path="/nakshatras-constellations/mrigashira"
          element={<Mrigashira />}
        />
        <Route path="/nakshatras-constellations/ardra" element={<Ardra />} />
        <Route
          path="/nakshatras-constellations/Punarvasu"
          element={<Punarvasu />}
        />
        <Route path="/nakshatras-constellations/pushya" element={<Pushya />} />
        <Route
          path="/nakshatras-constellations/ashlesha"
          element={<Ashlesha />}
        />
        <Route path="/nakshatras-constellations/magha" element={<Magha />} />
        <Route
          path="/nakshatras-constellations/purvaphalguni"
          element={<Pphalguni />}
        />
        <Route
          path="/nakshatras-constellations/uttaraphalguni"
          element={<Uphalguni />}
        />
        <Route path="/nakshatras-constellations/hasta" element={<Hasta />} />
        <Route path="/nakshatras-constellations/chitra" element={<Chitra />} />
        <Route path="/nakshatras-constellations/swati" element={<Swati />} />
        <Route
          path="/nakshatras-constellations/vishakha"
          element={<Vishakha />}
        />
        <Route
          path="/nakshatras-constellations/anuradha"
          element={<Anuradha />}
        />
        <Route
          path="/nakshatras-constellations/jyestha"
          element={<Jyestha />}
        />
        <Route path="/nakshatras-constellations/moola" element={<Moola />} />
        <Route
          path="/nakshatras-constellations/poorvashada"
          element={<Poorvashada />}
        />
        <Route
          path="/nakshatras-constellations/uttarashada"
          element={<Uttarashada />}
        />
        <Route
          path="/nakshatras-constellations/abhijit"
          element={<Abhijit />}
        />
        <Route
          path="/nakshatras-constellations/dhanishta"
          element={<Dhanishta />}
        />
        <Route
          path="/nakshatras-constellations/shatabhisha"
          element={<Shatabhisha />}
        />
        <Route
          path="/nakshatras-constellations/purvabhadrapada"
          element={<Pbhadrapada />}
        />
        <Route
          path="/nakshatras-constellations/uttarabhadrapada"
          element={<Ubhadrapada />}
        />
        <Route path="/nakshatras-constellations/revati" element={<Revati />} />
        <Route
          path="/nakshatras-constellations/shravana"
          element={<Shravana />}
        />
        {/*Numerology*/}
        <Route path="/numerology-introduction" element={<Numerology />} />
        <Route path="/numerology-introduction/tamil" element={<Tamil />} />
        <Route
          path="/numerology-introduction/pythagorean"
          element={<Pythagoras />}
        />
        <Route
          path="/numerology-introduction/chaldean"
          element={<Chaldean />}
        />
        <Route
          path="/numerology-introduction/kabbalah"
          element={<Kabbalah />}
        />
        <Route
          path="/numerology-introduction/numerology-number-1"
          element={<N1 />}
        />
        <Route
          path="/numerology-introduction/numerology-number-2"
          element={<N2 />}
        />
        <Route
          path="/numerology-introduction/numerology-number-3"
          element={<N3 />}
        />
        <Route
          path="/numerology-introduction/numerology-number-4"
          element={<N4 />}
        />
        <Route
          path="/numerology-introduction/numerology-number-5"
          element={<N5 />}
        />
        <Route
          path="/numerology-introduction/numerology-number-6"
          element={<N6 />}
        />
        <Route
          path="/numerology-introduction/numerology-number-7"
          element={<N7 />}
        />
        <Route
          path="/numerology-introduction/numerology-number-8"
          element={<N8 />}
        />
        <Route
          path="/numerology-introduction/numerology-number-9"
          element={<N9 />}
        />
        <Route path="/numerology-introduction/life-path" element={<Life />} />
        <Route
          path="/numerology-introduction/master-numbers"
          element={<Master />}
        />
        <Route
          path="/numerology-introduction/sun-numbers-numerology"
          element={<SunN />}
        />
        <Route
          path="/numerology-introduction/karmic-debt"
          element={<Karmic />}
        />
        <Route
          path="/numerology-introduction/name-numerology"
          element={<Name />}
        />
        <Route
          path="/numerology-introduction/marriage-and-numerology"
          element={<Mnn />}
        />
        <Route
          path="/numerology-introduction/finance-and-numerology"
          element={<Fnn />}
        />
        <Route
          path="/numerology-introduction/career-and-numerology"
          element={<Cnn />}
        />
        <Route
          path="/numerology-introduction/food-and-numerology"
          element={<Fonn />}
        />
        {/*Mantras*/}
        <Route path="/mantras" element={<Mantras />} />
        <Route path="/mantras/surya-mantra" element={<Surya />} />
        <Route path="/mantras/chandra-mantra" element={<Chandra />} />
        <Route path="/mantras/mangal-mantra" element={<Mangal />} />
        <Route path="/mantras/budh-mantra" element={<Budh />} />
        <Route path="/mantras/brihaspati-mantra" element={<Brihaspati />} />
        <Route path="/mantras/shukra-mantra" element={<Shukra />} />
        <Route path="/mantras/shani-mantra" element={<Shani />} />
        <Route path="/mantras/rahu-mantra" element={<Rahu1 />} />
        <Route path="/mantras/ketu-mantra" element={<Ketu1 />} />
        <Route path="/mantras/success-mantra" element={<Success />} />
        <Route
          path="/mantras/devi-chandraghanta-mantra"
          element={<Chandraghanta />}
        />
        <Route path="/mantras/shabar-mantra" element={<Shabar />} />
        <Route path="/mantras/sai-mantra" element={<Sai />} />
        <Route path="/mantras/kali-mantra" element={<Kali />} />
        <Route path="/mantras/batuk-bhairav-mantra" element={<Batuk />} />
        <Route path="/mantras/kaal-bhairav-mantra" element={<Kaal />} />
        <Route path="/mantras/shakti-mantra" element={<Shakti />} />
        <Route path="/mantras/parvati-mantra" element={<Parvati />} />
        <Route path="/mantras/beej-mantra" element={<Beej />} />
        <Route path="/mantras/om-mantra" element={<Om />} />
        <Route path="/mantras/durga-mantra" element={<Durga />} />
        <Route path="/mantras/katyayani-mantra" element={<Katyayani />} />
        <Route path="/mantras/tulsi-mantra" element={<Tulsi />} />
        <Route path="/mantras/maha-mrityunjay-mantra" element={<Maham />} />
        <Route path="/mantras/shiva-mantra" element={<Shiva />} />
        <Route path="/mantras/kuber-mantra" element={<Kuber />} />
        <Route path="/mantras/rudra-mantra" element={<Rudra />} />
        <Route path="/mantras/ram-mantra" element={<Ram />} />
        <Route path="/mantras/santan-gopal-mantra" element={<Santan />} />
        <Route path="/mantras/gayatri-mantra" element={<Gayatri />} />
        <Route path="/mantras/hanuman-mantra" element={<Hanuman />} />
        <Route path="/mantras/lakshmi-mantra" element={<Lakshmi />} />
        <Route path="/mantras/baglamukhi-mantra" element={<Baglamukhi />} />
        <Route path="/mantras/navagraha-mantra" element={<Navagraha />} />
        <Route path="/mantras/saraswati-mantra" element={<Saraswati />} />
        <Route path="/mantras/vastu-mantra" element={<Vastu1 />} />
        <Route path="/mantras/pregnancy-mantra" element={<Pregnancy />} />
        <Route path="/mantras/griha-shanti-mantra" element={<Grihasan />} />
        <Route path="/mantras/ganesh-mantra" element={<Ganesh />} />
        <Route path="/mantras/rashi-mantra" element={<Rashi />} />
        <Route path="/mantras/krishna-mantra" element={<Krishna />} />
        {/*Planetary Transit 2024*/}
        <Route path="/planetary-transit-2024" element={<Planet />} />
        <Route path="/sun-transit-2024" element={<Sun />} />
        <Route path="/mars-transit-2024" element={<Mars />} />
        <Route path="/mercury-transit-2024" element={<Mercury />} />
        <Route path="/jupiter-transit-2024" element={<Jupiter />} />
        <Route path="/venus-transit-2024" element={<Venus />} />
        <Route path="/saturn-transit-2024" element={<Saturn />} />
        <Route path="/rahu-transit-2024" element={<Rahu />} />
        <Route path="/ketu-transit-2024" element={<Ketu />} />
        <Route path="/moon-transit-2024" element={<Moon />} />
        {/*Zodiac Signs*/}
        <Route path="/zodiac-signs" element={<Zodiac />} />
        {/*Footer-Others*/}
        <Route path="/astrology-yoga" element={<Yoga />} />
        <Route path="/kaal-sarp-dosh-12-types" element={<Kaalsharp />} />
        <Route
          path="/astrological-remedies-to-conceive-a-child"
          element={<ChildAstro />}
        />
        <Route path="/gemstones-for-ascendants" element={<Gfascendant />} />
        <Route
          path="/astrology-remedies/astrological-remedies-for-job-promotion"
          element={<Remedies />}
        />
        {/*Tarot*/}
        <Route path="/tarot" element={<Tarot />} />
        <Route path="/tarot/the-fool" element={<Fool />} />
        <Route path="/tarot/the-magician" element={<Magician />} />
        <Route path="/tarot/the-high-priestess" element={<Priestess />} />
        <Route path="/tarot/the-empress" element={<Empress />} />
        <Route path="/tarot/the-emperor" element={<Emperor />} />
        <Route path="/tarot/the-hierophant" element={<Hierophant />} />
        <Route path="/tarot/the-lovers" element={<Lovers />} />
        <Route path="/tarot/the-chariot" element={<Chariot />} />
        <Route path="/tarot/strength" element={<Strength />} />
        <Route path="/tarot/the-hermit" element={<Hermit />} />
        <Route path="/tarot/wheel-of-fortune" element={<Wheel />} />
        <Route path="/tarot/justice" element={<Justice />} />
        <Route path="/tarot/the-hanged-man" element={<Hanged />} />
        <Route path="/tarot/death" element={<Death />} />
        <Route path="/tarot/temperance" element={<Temperance />} />
        <Route path="/tarot/the-devil" element={<Devil />} />
        <Route path="/tarot/the-tower" element={<Tower />} />
        <Route path="/tarot/the-star" element={<Star />} />
        <Route path="/tarot/the-moon" element={<Moon1 />} />
        <Route path="/tarot/the-sun" element={<Sun />} />
        <Route path="/tarot/judgement" element={<Judgement />} />
        <Route path="/tarot/the-world" element={<World />} />
        <Route path="/tarot/ace-of-wands" element={<Ace />} />
        <Route path="/tarot/two-of-wands" element={<Two />} />
        <Route path="/tarot/three-of-wands" element={<Three />} />
        <Route path="/tarot/four-of-wands" element={<Four />} />
        <Route path="/tarot/five-of-wands" element={<Five />} />
        <Route path="/tarot/six-of-wands" element={<Six />} />
        <Route path="/tarot/seven-of-wands" element={<Seven />} />
        <Route path="/tarot/eight-of-wands" element={<Eight />} />
        <Route path="/tarot/nine-of-wands" element={<Nine />} />
        <Route path="/tarot/ten-of-wands" element={<Ten />} />
        <Route path="/tarot/page-of-wands" element={<Page />} />
        <Route path="/tarot/knight-of-wands" element={<Knight />} />
        <Route path="/tarot/queen-of-wands" element={<Queen />} />
        <Route path="/tarot/king-of-wands" element={<King />} />
        <Route path="/tarot/ace-of-cups" element={<Ace1 />} />
        <Route path="/tarot/two-of-cups" element={<Two1 />} />
        <Route path="/tarot/three-of-cups" element={<Three1 />} />
        <Route path="/tarot/four-of-cups" element={<Four1 />} />
        <Route path="/tarot/five-of-cups" element={<Five1 />} />
        <Route path="/tarot/six-of-cups" element={<Six1 />} />
        <Route path="/tarot/seven-of-cups" element={<Seven1 />} />
        <Route path="/tarot/eight-of-cups" element={<Eight1 />} />
        <Route path="/tarot/nine-of-cups" element={<Nine1 />} />
        <Route path="/tarot/ten-of-cups" element={<Ten1 />} />
        <Route path="/tarot/page-of-cups" element={<Page1 />} />
        <Route path="/tarot/knight-of-cups" element={<Knight1 />} />
        <Route path="/tarot/queen-of-cups" element={<Queen1 />} />
        <Route path="/tarot/king-of-cups" element={<King1 />} />
        <Route path="/tarot/ace-of-swords" element={<Ace2 />} />
        <Route path="/tarot/two-of-swords" element={<Two2 />} />
        <Route path="/tarot/three-of-swords" element={<Three2 />} />
        <Route path="/tarot/four-of-swords" element={<Four2 />} />
        <Route path="/tarot/five-of-swords" element={<Five2 />} />
        <Route path="/tarot/six-of-swords" element={<Six2 />} />
        <Route path="/tarot/seven-of-swords" element={<Seven2 />} />
        <Route path="/tarot/eight-of-swords" element={<Eight2 />} />
        <Route path="/tarot/nine-of-swords" element={<Nine2 />} />
        <Route path="/tarot/ten-of-swords" element={<Ten2 />} />
        <Route path="/tarot/page-of-swords" element={<Page2 />} />
        <Route path="/tarot/knight-of-swords" element={<Knight2 />} />
        <Route path="/tarot/queen-of-swords" element={<Queen2 />} />
        <Route path="/tarot/king-of-swords" element={<King2 />} />
        <Route path="/tarot/ace-of-pentacles" element={<Ace3 />} />
        <Route path="/tarot/two-of-pentacles" element={<Two3 />} />
        <Route path="/tarot/three-of-pentacles" element={<Three3 />} />
        <Route path="/tarot/four-of-pentacles" element={<Four3 />} />
        <Route path="/tarot/five-of-pentacles" element={<Five3 />} />
        <Route path="/tarot/six-of-pentacles" element={<Six3 />} />
        <Route path="/tarot/seven-of-pentacles" element={<Seven3 />} />
        <Route path="/tarot/eight-of-pentacles" element={<Eight3 />} />
        <Route path="/tarot/nine-of-pentacles" element={<Nine3 />} />
        <Route path="/tarot/ten-of-pentacles" element={<Ten3 />} />
        <Route path="/tarot/page-of-pentacles" element={<Page3 />} />
        <Route path="/tarot/knight-of-pentacles" element={<Knight3 />} />
        <Route path="/tarot/queen-of-pentacles" element={<Queen3 />} />
        <Route path="/tarot/king-of-pentacles" element={<King3 />} />
        {/*Vastu Shastra*/}
        <Route path="/vastu-shastra" element={<Vastu />} />
        <Route path="/vastu-shastra/vastu-for-home" element={<Home1 />} />
        <Route
          path="/vastu-shastra/vastu-for-commercial-properties"
          element={<Property />}
        />
        <Route
          path="/vastu-shastra/vastu-for-career-success"
          element={<Career />}
        />
        <Route path="/vastu-shastra/vastu-for-health" element={<Health />} />
        <Route path="/vastu-shastra/vastu-for-wealth" element={<Wealth />} />
        <Route path="/vastu-shastra/vastu-for-love" element={<Lmlife />} />
        <Route path="/vastu-shastra/vastu-for-plants" element={<Plants />} />
        <Route
          path="/vastu-shastra/vastu-for-positive-energy"
          element={<Energy />}
        />
        <Route
          path="/vastu-shastra/vastu-for-love-and-relationships"
          element={<Lnr />}
        />
        <Route
          path="/vastu-shastra/vastu-tips-for-daily-life"
          element={<Dlife />}
        />
        <Route
          path="/vastu-shastra/vastu-tips-for-placing-mirrors"
          element={<Pmirror />}
        />
        <Route
          path="/vastu-shastra/sleeping-direction-vastu-shastra"
          element={<Sdirection />}
        />
        <Route path="/vastu-shastra/vastu-products" element={<Products />} />
        {/*Calendar2024*/}
        <Route path="/solar-eclipse-2024" element={<SolarEclipse />} />
        <Route path="/lunar-eclipse-2024" element={<LunarEclipse />} />
        <Route
          path="/indian-calendar-festivals-2024"
          element={<FestivalCalendar />}
        />
        <Route path="/fasts-calendar-2024" element={<VratCalendar />} />
        <Route
          path="/indian-calendar-festivals-2024/hindu-calendar-2024"
          element={<HinduCalendar />}
        />
        <Route
          path="/indian-calendar-festivals-2024/buddhist-calendar-2024"
          element={<BuddhistCalendar />}
        />
        <Route
          path="/indian-calendar-festivals-2024/jain-calendar-2024"
          element={<JainCalendar />}
        />
        <Route
          path="/indian-calendar-festivals-2024/sikh-calendar-2024"
          element={<SikhCalendar />}
        />
        <Route
          path="/fasts-calendar-2024/pradosh-vrat-2024"
          element={<PradoshaVrat />}
        />
        <Route
          path="/fasts-calendar-2024/ekadashi-vrat-2024"
          element={<EkadashiVrat />}
        />
        <Route
          path="/fasts-calendar-2024/amavasya-vrat-2024"
          element={<AmavasyaVrat />}
        />
        <Route
          path="/fasts-calendar-2024/purnima-vrat-2024"
          element={<PurnimaVrat />}
        />
        <Route
          path="/fasts-calendar-2024/sankashti-vrat-2024"
          element={<SankashtiChaturthi />}
        />
        <Route
          path="/fasts-calendar-2024/shradha-days-vrat-2024"
          element={<ShradhaDays />}
        />
        <Route
          path="/fasts-calendar-2024/rohini-vrat-2024"
          element={<RohiniVrat />}
        />
        {/*Mole Astrology*/}
        <Route path="/mole-astrology" element={<MoleAstro />} />
        <Route path="/mole-astrology/mole-on-the-face" element={<Moface />} />
        <Route path="/mole-astrology/mole-on-legs" element={<Molegs />} />
        <Route path="/mole-astrology/mole-on-stomach" element={<Mostomach />} />
        <Route
          path="/mole-astrology/mole-on-the-genitals"
          element={<Mogenitals />}
        />
        <Route path="/mole-astrology/mole-on-arm" element={<Moarms />} />
        <Route
          path="/mole-astrology/mole-on-back-chest-ribs"
          element={<Mobacks />}
        />
        {/*Corporate Info*/}
        <Route path="/refund-and-cancellation-policy" element={<Rcp />} />
        <Route path="/terms-and-conditions" element={<Tnc />} />
        <Route path="/privacy-policies" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;

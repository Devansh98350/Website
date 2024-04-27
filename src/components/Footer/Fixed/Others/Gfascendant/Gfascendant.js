import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../../../Layout/Layout.js";
import GfaFYQ from "./GfaFyq";

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
  h2 {
    color: red;
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
`;

const Gfascendant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Gemstone for Ascendant">
      <Container>
        <div className="body">
          <h1 className="heading">Ascendant Sign Gemstone</h1>

          <h2>Aries</h2>
          <h3>Life stone for Aries (Mesh Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the Aries
            ascendant/Lagna is Mars, and to please Mars, the person born with
            Aries Ascendant (Mesh Lagna) must wear a Red Coral stone.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Aries</td>
                  <td>Red Coral (Moonga)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>With Gold or Silver ring, on ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ क्रं क्रीं क्रौं सः भौमाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Aries (Mesh)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Sun and Jupiter are beneficial planets for
            Aries, hence the Lucky gemstone for the Aries Ascendant is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Aries</td>
                  <td>Ruby (Manikya)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>With Gold ring, on ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ह्रीं ह्रीं ह्रौं सः सूर्याय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Aries (Mesh)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Aries</td>
                  <td>Yellow Sapphire (Pukhraj)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>With Gold ring, on index finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ग्राम ग्रीं ग्रौं सः गुरावे नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h2>Taurus</h2>
          <h3>Life stone for Taurus (Vrishabha Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the Taurus
            ascendant/Lagna is Venus, and to please Venus, the person born with
            Taurus Ascendant (Vrishabha Lagna) must wear Diamond.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Taurus</td>
                  <td>Diamond (Heera)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold or silver on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ द्रां द्रीं द्रौं सः शुक्राय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Taurus (Vrishabha)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Mercury and Saturn are beneficial planets for
            Taurus, hence the Lucky gemstone for the Taurus Ascendant is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Taurus</td>
                  <td>Emerald (Panna)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on ring or little finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ब्रं ब्रीं ब्रौं सः बुधाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Taurus (Vrishabha)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Taurus</td>
                  <td>Blue Sapphire (Neelam)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ प्रं प्रीं प्रौं सः शनैशराय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h2>Gemini</h2>
          <h3>Life stone for Gemini (Mithun Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the Gemini
            ascendant/Lagna is Mercury, and to please Mercury, the person born
            with Gemini Ascendant (Mithun Lagna) must wear Emerald stone.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Gemini</td>
                  <td>Emerald (Panna)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on ring or little finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ब्रं ब्रीं ब्रौं सः बुधाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Gemini (Mithun)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Venus and Saturn are beneficial planets for
            Gemini, hence the Lucky gemstone for the Gemini Ascendant is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Gemini</td>
                  <td>Diamond (Heera)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold or silver on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ब्रं ब्रीं ब्रौं सः बुधाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Gemini (Mithun)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Gemini</td>
                  <td>Blue Sapphire (Neelam)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ प्रं प्रीं प्रौं सः शनैशराय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h2>Cancer</h2>
          <h3>Life stone for Cancer (Karka Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the Cancer
            ascendant/Lagna is Moon, and to please Moon, the person born with
            Cancer Ascendant (Karka Lagna) must wear a Pearl.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Cancer</td>
                  <td>Pearl (Moti)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Silver, on ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Cancer (Karka)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Mars and Jupiter are beneficial planets for
            Cancer, hence the Lucky gemstone for the Cancer Ascendant is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Cancer</td>
                  <td>Coral (Moonga)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold or Silver, on ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ क्रं क्रीं क्रौं सः भौमाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Cancer (Karka)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Cancer</td>
                  <td>Yellow Sapphire (Pukhraj)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on index finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ग्राम ग्रीं ग्रौं सः गुरावे नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h2>Leo</h2>
          <h3>Life stone for Leo (Simha Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the Leo
            ascendant/Lagna is Sun, and to please Sun, the person born with Leo
            Ascendant (Simha Lagna) must wear Ruby.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Leo</td>
                  <td>Ruby (Manikya)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ह्रीं ह्रीं ह्रौं सः सूर्याय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Leo (Simha)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Jupiter and Mars are beneficial planets for
            Leo, hence the Lucky gemstone for the Leo Ascendant is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Leo</td>
                  <td>Yellow Sapphire (Pukhraj)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on index finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ग्राम ग्रीं ग्रौं सः गुरावे नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Leo (Simha)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Leo</td>
                  <td>Coral (Moonga)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold on Silver, in ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ क्रं क्रीं क्रौं सः भौमाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h2>Virgo</h2>
          <h3>Life stone for Virgo (Kanya Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the Virgo
            ascendant/Lagna is Mercury, and to please Mercury, the person born
            with Virgo Ascendant (Kanya Lagna) must wear Emerald.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Virgo</td>
                  <td>Emerald (Panna)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on ring or little finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ब्रं ब्रीं ब्रौं सः बुधाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Virgo (Kanya)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Saturn and Venus are beneficial planets for
            Virgo, hence the Lucky gemstone for the Virgo Ascendant is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Virgo</td>
                  <td>Blue Sapphire (Neelam)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ प्रं प्रीं प्रौं सः शनैशराय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Virgo (Kanya)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Virgo</td>
                  <td>Diamond (Heera)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold or silver on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ द्रां द्रीं द्रौं सः शुक्राय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h2>Libra</h2>
          <h3>Life stone for Libra (Tula Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the Libra
            ascendant/Lagna is Venus, and to please Venus, the person born with
            Libra Ascendant (Tula Lagna) must wear Diamond.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Libra</td>
                  <td>Diamond (Heera)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold or silver on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ द्रां द्रौं द्रौं सः शुक्राय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Libra (Tula)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Mercury and Saturn are beneficial planets for
            Libra, hence the Lucky gemstone for the Libra Ascendant is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Libra</td>
                  <td>Blue Sapphire (Neelam)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ प्रं प्रीं प्रौं सः शनैशराय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Libra (Tula)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Libra</td>
                  <td>Emerald (Panna)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on ring or little finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ब्रं ब्रीं ब्रौं सः बुधाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h2>Scorpio</h2>
          <h3>Life stone for Scorpio (Vrishchika Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the Scorpio
            ascendant/Lagna is Mars, and to please Mars, the person born with
            Scorpio Ascendant (Vrishchika Lagna) must wear Coral.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Scorpio</td>
                  <td>Coral (Moonga)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold or Silver, on ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ क्रं क्रीं क्रौं सः भौमाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Scorpio (Vrishchika)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Jupiter and Moon are beneficial planets for
            Scorpio, hence the Lucky gemstone for the Scorpio Ascendant is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Scorpio</td>
                  <td>Yellow Sapphire (Pukhraj)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on index finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ग्राम ग्रीं ग्रौं सः गुरावे नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Scorpio (Vrishchika)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Scorpio</td>
                  <td>Pearl (Moti)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Silver, on ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h2>Sagittarius</h2>
          <h3>Life stone for Sagittarius (Dhanu Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the
            Sagittarius ascendant/Lagna is Jupiter, and to please Jupiter, the
            person born with Sagittarius Ascendant (Dhanu Lagna) must wear
            Yellow Sapphire.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Sagittarius</td>
                  <td>Yellow Sapphire (Pukhraj)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on index finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ग्राम ग्रीं ग्रौं सः गुरावे नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Sagittarius (Dhanu)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Mars and Sun are beneficial planets for
            Sagittarius, hence the Lucky gemstone for the Sagittarius Ascendant
            is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Sagittarius</td>
                  <td>Coral (Moonga)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold or Silver, on ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ क्रं क्रीं क्रौं सः भौमाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Sagittarius (Dhanu)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Sagittarius</td>
                  <td>Ruby (Manikya)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ह्रीं ह्रीं ह्रौं सः सूर्याय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h2>Capricorn</h2>
          <h3>Life stone for Capricorn (Makara Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the Capricorn
            ascendant/Lagna is Saturn, and to please Saturn, the person born
            with Capricorn Ascendant (Makara Lagna) must wear Blue Sapphire.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Capricorn</td>
                  <td>Blue Sapphire (Neelam)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ प्रं प्रीं प्रौं सः शनैशराय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Capricorn (Makara)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Venus and Mercury are beneficial planets for
            Capricorn, hence the Lucky gemstone for the Capricorn Ascendant is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Capricorn</td>
                  <td>Diamond (Heera)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold or silver on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ द्रां द्रीं द्रौं सः शुक्राय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Capricorn (Makara)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Capricorn</td>
                  <td>Emerald (Panna)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on ring or little finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ब्रं ब्रीं ब्रौं सः बुधाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h2>Aquarius</h2>
          <h3>Life stone for Aquarius (Kumbha Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the Aquarius
            ascendant/Lagna is Saturn, and to please Saturn, the person born
            with Aquarius Ascendant (Kumbha Lagna) must wear Blue Sapphire.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Aquarius</td>
                  <td>Blue Sapphire (Neelam)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ प्रं प्रीं प्रौं सः शनैशराय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Aquarius (Kumbha)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Mercury and Venus are beneficial planets for
            Aquarius, hence the Lucky gemstone for the Aquarius Ascendant is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Aquarius</td>
                  <td>Emerald (Panna)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on ring or little finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ब्रं ब्रीं ब्रौं सः बुधाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Aquarius (Kumbha)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Aquarius</td>
                  <td>Diamond (Heera)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold or silver on middle finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ द्रां द्रीं द्रौं सः शुक्राय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <h2>Pisces</h2>
          <h3>Life stone for Pisces (Meena Lagna)</h3>
          <p>
            A life stone is a gem for the Lagna lord, which the native can wear
            throughout his or her life. A life stone collectively influences
            everything that makes your self-image, i.e. your wealth, education,
            health, business, spouse, intellect, etc. The lord of the Pisces
            ascendant/Lagna is Jupiter, and to please Jupiter, the person born
            with Pisces Ascendant (Meena Lagna) must wear Diamond.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Life stone for Pisces</td>
                  <td>Yellow Sapphire (Pukhraj)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold, on index finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ ग्राम ग्रीं ग्रौं सः गुरावे नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Lucky Gemstone for Pisces (Meena)</h3>
          <p>
            A lucky gemstone is worn to enhance the native's luck and open new
            doors to success for him. An individual's lucky stone is one that
            keeps luck ticking for him while ensuring the blessing of favourable
            planets upon him. As Moon and Mars are beneficial planets for
            Pisces, hence the Lucky gemstone for the Pisces Ascendant is:
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Lucky stone for Pisces</td>
                  <td>Pearl (Moti)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Silver, on ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>
          <h3>Fortune Stone for Pisces (Meena)</h3>
          <p>
            The Bhagya stone is suggested by the astrologers based on the Lord
            governing the 9th house of the native's birth chart. The Bhagya
            stone helps the native attract fortune when s/he needs it the most.
            Wearing Bhagya stone as per ascendant sign helps in fighting
            obstacles and enhances prosperity both in personal and professional
            life.
          </p>
          <table>
            <table
              border="1"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td>Fortune stone for Pisces</td>
                  <td>Coral (Moonga)</td>
                </tr>
                <tr>
                  <td>How to wear</td>
                  <td>Gold or Silver, on ring finger</td>
                </tr>
                <tr>
                  <td>Mantra</td>
                  <td>ॐ क्रं क्रीं क्रौं सः भौमाय नमः</td>
                </tr>
              </tbody>
            </table>
          </table>

          <GfaFYQ />
        </div>
      </Container>
    </Layout>
  );
};

export default Gfascendant;

import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.js";
import styled from "styled-components";

const Container = styled.div`
  .album {
    width: 90%;
    margin-left: 5%;
  }
  .heading {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .album .responsive-container-block {
    min-height: 75px;
    height: fit-content;
    width: 100%;
    padding: 3px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: flex-start;
  }

  .album .responsive-container-block.bg {
    max-width: 1320px;
    margin: 0;
    justify-content: space-between;
  }

  .album .img {
    width: 100%;
    margin: 0 0 20px 0;
  }

  .album #i9rb,
  .album #ir6i,
  .album #ikz3b,
  .album #ipix,
  .album #ipzoh,
  .album #ig5q8,
  .album #imtzl,
  .album #i53es {
    color: black;
  }

  .album .responsive-container-block.img-cont {
    flex-direction: column;
    max-width: 33.3%;
    min-height: auto;
    margin: 0;
    height: 100%;
  }

  .album .img.img-big {
    height: 50%;
    margin: 0 0 16px 0;
  }

  @media (max-width: 1024px) {
    .album .img {
      margin: 0 0 18px 0;
    }
  }

  @media (max-width: 768px) {
    .album {
      width: 100%;
      margin-left: 0%;
    }
    .album .img {
      max-width: 32.5%;
      margin: 0;
    }

    .album .responsive-container-block.bg {
      flex-direction: column;
    }

    .album .responsive-container-block.img-cont {
      max-width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }

    .album .img.img-big {
      max-width: 49%;
      margin: 0;
    }
  }

  @media (max-width: 500px) {
    .album .img {
      max-width: 94%;
      margin: 0 0 25px 0;
    }

    .album .responsive-container-block.img-cont {
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }

    .album .img.img-big {
      max-width: 94%;
      margin: 0 0 25px 0;
    }

    .album .img.img-last {
      margin: 0 0 5px 0;
    }
  }
`;

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg">
      <Container>
        <div className="album">
          <h1 className="heading">Gallery</h1>
          <div className="responsive-container-block bg">
            <div className="responsive-container-block img-cont">
              <img
                className="img"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.4.svg"
                alt=""
              />
              <img
                className="img"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.5.svg"
                alt=""
              />
              <img
                className="img img-last"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.6.svg"
                alt=""
              />
            </div>
            <div className="responsive-container-block img-cont">
              <img
                className="img img-big"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.11.svg"
                alt=""
              />
              <img
                className="img img-big img-last"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.10.svg"
                alt=""
              />
            </div>
            <div className="responsive-container-block img-cont">
              <img
                className="img"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.7.svg"
                alt=""
              />
              <img
                className="img"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.8.svg"
                alt=""
              />
              <img
                className="img"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.9.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Gallery;

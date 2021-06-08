import React from "react";
import "./About.css";
import trusted from "./trusted.svg";
import home from './home.svg'
import profit from './profit.svg'

const About = () => {
  return (
    <>
      <div className="About-Container">
        <div className="NewPost-Title">
          <span>Pourquoi Nous Choisir</span>
          <h1>
            Nous fournissons un service <br></br> complet à chaque étape.
          </h1>
          <div className="bar-">
            <div className="bar--"></div>
            <div className="circle"></div>
            <div className="bar--"></div>
          </div>
        </div>
        <div className="About-Cards">
          <div className="About-Card">
            <div className="About-Card-Image">
              <img src={trusted} alt='image1' />
            </div>
            <div className="About-Card-Text">
              <span>
                Aliquam dictum elit vitae mauris facilisis at dictum urna
                dignissim donec vel lectus vel felis.
              </span>
            </div>
          </div>
          <div className="About-Card">
            <div className="About-Card-Image">
              <img src={home} alt='image2' />
            </div>
            <div className="About-Card-Text">
              <span>
                Aliquam dictum elit vitae mauris facilisis at dictum urna
                dignissim donec vel lectus vel felis.
              </span>
            </div>
          </div>
          <div className="About-Card">
            <div className="About-Card-Image">
              <img src={profit} alt='image3' />
            </div>
            <div className="About-Card-Text">
              <span>
                Aliquam dictum elit vitae mauris facilisis at dictum urna
                dignissim donec vel lectus vel felis.
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default About;

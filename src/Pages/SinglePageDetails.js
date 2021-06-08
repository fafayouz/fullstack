import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../components/navbar/Navbar";
import "./SinglePageDetails.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CompareArrowsRoundedIcon from "@material-ui/icons/CompareArrowsRounded";
import HotelRoundedIcon from "@material-ui/icons/HotelRounded";
import BathtubRoundedIcon from "@material-ui/icons/BathtubRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import DriveEtaRoundedIcon from "@material-ui/icons/DriveEtaRounded";
import Footer from "../components/footer/Footer";
import API from "../api/API";
import { Link, NavLink } from "react-router-dom";

const SinglePageDetails = (props) => {
  const sliderProp = {
    autoPlay: true,
    infiniteLoop: true,
    showArrows: true,
    showThumbs: false,
    showStatus: false,
    stopOnHover: false,
  };
  const imagefiles = props.images;
  const URI = "http://www.localhost:8001/";

  const [randomposts , setRandomposts] = useState([])

  useEffect(() => {
    API.get('api/Fetchhousesdata').then(res => {
      setRandomposts(res.data)

    }).catch(err => {
      console.log(err)
    })
  }, [])

  
  console.log(randomposts)
  return (
    <>
      <div className="SinglePage-ImageShow">
        <Carousel className="Slider--" {...sliderProp}>
          {imagefiles &&
            imagefiles.map((photo, index) => (
              <img src={`${URI}${photo.filename}`} key={index} />
            ))}
        </Carousel>
        <div className="SinglePage-Price">
            <span> {props.price} {props.transaction === "Vendre" ? "DZD" : "DZD/MOIS"}</span>
        </div>
      </div>
      <div className="SinglePage-Info">
        <div className="Info-1">
          <div className="build-info">
            <div className="info-room">
              <span className="info-room-icons">
                {" "}
                <HotelRoundedIcon />{" "}
              </span>
              <span className='info-room-text--'> {props.salle} chambres</span>
            </div>
            <div className="info-room">
              <span className="info-room-icons">
                {" "}
                <BathtubRoundedIcon />{" "}
              </span>
              <span className='info-room-text--'> {props.douche} Douche </span>
            </div>
            <div className="info-room">
              <span className="info-room-icons">
                {" "}
                <CompareArrowsRoundedIcon />{" "}
              </span>
              <span className='info-room-text--'> {props.area} Surface </span>
            </div>
            <div className="info-room">
              <span className="info-room-icons">
                {" "}
                <LocationOnRoundedIcon />{" "}
              </span>
              <span className='info-room-text--'> {props.wilaya} </span>
            </div>
            <div className="info-room">
              <span className="info-room-icons">
                {" "}
                <DriveEtaRoundedIcon />{" "}
              </span>
              <span className='info-room-text--'> {props.garage} Garage </span>
            </div>
          </div>
          <div className="build-description">
            <div className="description-title">
              <h2>la propriété</h2>
              <span></span>
            </div>
            <div className="description-text">
              <p>
                {props.bio}
              </p>
            </div>
          </div>
        </div>
        <div className="Info-2">
          {randomposts.slice(-3).map((list) => {
            return (
              <div className="other-houses">
            <div className="other-houses-img">
              <img src={`${URI}${list.images[0].filename}`} alt="imageone" />
            </div>
            <div className="other-houses-text">
              <div className="houses-text-title">
                  <h4> {list.title} </h4>
              </div>
              <div className="houses-text-location">
                  <h4> {list.wilaya} </h4>
              </div>
              <div className="houses-text-price">
                  <div className="text-price--">
                    <span> {list.price} {list.transaction === "Vendre" ? "DZD" : "DZD/MOIS"} </span>
                  </div>
                  <Link to={ `${'Details/'}${list._id}` } className="text-price-icon">
                    <ArrowForwardIosIcon/>
                  </Link>
              </div>
              
            </div>
          </div>
            )
          })}
        </div>
      </div>
        
        
    </>
  );
};

export default SinglePageDetails;

import React from "react";
import "./NewPost.css";
import image from "../slider/imageOne.jpg";
import CompareArrowsRoundedIcon from "@material-ui/icons/CompareArrowsRounded";
import HotelRoundedIcon from "@material-ui/icons/HotelRounded";
import BathtubRoundedIcon from "@material-ui/icons/BathtubRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import DriveEtaRoundedIcon from "@material-ui/icons/DriveEtaRounded";
import {Link} from 'react-router-dom'


const NewPost = (props) => {
  const URI = 'http://www.localhost:8001/'
  return (
    <>
      <div className="Card">
        <div className="Card-img">
        <Link to={ `${'Details/'}${props.id}` }> <img loading="lazy" src={`${URI}${props.images[0].filename}`} alt="image1" /></Link> 
        </div>
        <div className="Card-transaction">
          <span>A {props.transaction}</span>
        </div>

        <div className="Card-info">
          <div className="Card-type">
            <span>{props.typedebien}</span>
          </div>
          <div className="Card-title">
            <span>{props.title}</span>
          </div>
          <div className="Card-wilaya">
            <span className="Card-icons">
              {" "}
              <LocationOnRoundedIcon />{" "}
            </span>
            <span>{props.wilaya}</span>
          </div>
          <div className="Card-house">
            <div className="house-details">
              <span className="details-icons">
                {" "}
                <HotelRoundedIcon />{" "}
              </span>
              <span> {props.salle} Bedrooms </span>
            </div>
            <div className="house-details">
              <span className="details-icons">
                {" "}
                <BathtubRoundedIcon />{" "}
              </span>
              <span> {props.douche} bhatroom </span>
            </div>
            <div className="house-details">
              <span className="details-icons">
                {" "}
                <CompareArrowsRoundedIcon />{" "}
              </span>
              <span> {props.area} superficie </span>
            </div>
            <div className="house-details">
              <span className="details-icons">
                {" "}
                <DriveEtaRoundedIcon />{" "}
              </span>
              <span> {props.garage} garage </span>
            </div>
          </div>
          <div className="Card-pirce">
            <span> {props.price} DZD</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;

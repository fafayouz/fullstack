import React from "react";
import "./Footer.css";
import alger from "./alger.jfif";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { Button, TextField } from "@material-ui/core";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
  const position = [36.768970, 3.030307]
  return (
    <>
      <div className="Footer-Container">
        <img src={alger} alt="Alger" />
      </div>
      <div className="Footer-Container--"></div>
      <div className="Footer-Section-One">
        <div className="Footer-Contact">
          <div className="Footer-Logo">
            <span>LOGO</span>
          </div>
          <div className="Footer-Contact-Informations">
            <div className="Footer-Informations-Box">
              <div className="Footer-Informations-Icon">
                <LocationOnIcon fontSize="large" />
              </div>
              <div className="Footer-Informations-Text">
                <span>2903 Avenue Z, Brooklyn, NY</span>
              </div>
            </div>
            <div className="Footer-Informations-Box">
              <div className="Footer-Informations-Icon">
                <PhoneIcon fontSize="large" />
              </div>
              <div className="Footer-Informations-Text">
                <span>(+100) 123 456 7890</span>
              </div>
            </div>
            <div className="Footer-Informations-Box">
              <div className="Footer-Informations-Icon">
                <EmailIcon fontSize="large" />
              </div>
              <div className="Footer-Informations-Text">
                <span>contact@RealEstate.com</span>
              </div>
            </div>
            <div className="Footer-Informations-Box">
              <div className="Footer-Informations-Icon">
                <AccessTimeIcon fontSize="large" />
              </div>
              <div className="Footer-Informations-Text">
                <span>Mon - Sun / 9:00AM - 8:00PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer-Feedback">
          <div className="FeedBack-Container">
            <h1>FEEDBACK</h1>
            <span>Nous voulons vos commentaires sur tout</span>
          </div>
          <div className="FeedBack-Input-Email">
            <TextField
              id="standard-password-input"
              label="E-mail"
              variant="outlined"
            />
          </div>
          <div className="FeedBack-Input-message">
            <TextField
              id="outlined-multiline-static"
              label="Message pour nous"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <div className="FeedBack-Input-btn">
            <Button
              id="standard-password-input"
              label="E-mail"
              variant="outlined"
            >Envoyer</Button>
          </div>
        </div>
        <div className="Footer-Map">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "40vh" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="Footer-Section-Two">
        <div className="Footer-CopyRight">
          <span>Copyright © 2021 All Rights Reserved</span>
        </div>
        <div className="Footer-CopyRight--">
          <span>
            Designed & Developed by{" "}
            <a href="https://fafareact.herokuapp.com/">fafayouz</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;

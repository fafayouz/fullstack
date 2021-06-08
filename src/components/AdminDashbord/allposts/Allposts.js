import React, { useState } from "react";
import "./Allposts.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CompareArrowsRoundedIcon from "@material-ui/icons/CompareArrowsRounded";
import HotelRoundedIcon from "@material-ui/icons/HotelRounded";
import BathtubRoundedIcon from "@material-ui/icons/BathtubRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import DriveEtaRoundedIcon from "@material-ui/icons/DriveEtaRounded";
import API from "../../../api/API";
import { Button, Dialog, DialogActions,  DialogTitle } from "@material-ui/core";


const Allposts = (props) => {
    const URI = 'http://www.localhost:8001/'
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    

    const PostDelete = (id) => { 
      setOpen(false)
      API.delete(`api/delete/${id}`)
    }
  return (
    <>
    <div className="Post-Card">
      <div onClick={handleClickOpen} className="Post-Card-delete-icon">
        <DeleteForeverIcon cursor="pointer" fontSize="large" />
      </div>
      <div className="Post-Card-img">
          <img src={`${URI}${props.images[0].filename}`} />
      </div>
      <div className="Post-Card-Title">
        <span> {props.title} </span>
      </div>
      <div className="Post-Card-Informations">
        <div className="Post-Card-Information">
          <CompareArrowsRoundedIcon className="Card-icons" />
          <span>{props.area} superficie</span>
        </div>
        <div className="Post-Card-Information">
          <BathtubRoundedIcon className="Card-icons" />
          <span>{props.douche} bhatroom</span>
        </div>
        <div className="Post-Card-Information">
          <HotelRoundedIcon className="Card-icons" />
          <span>{props.salle} Bedrooms</span>
        </div>
        <div className="Post-Card-Information">
          <DriveEtaRoundedIcon className="Card-icons" />
          <span>{props.garage} garage</span>
        </div>
      </div>
      <div className="Post-Card-Price-Location">
        <div className="Post-Card-Location">
          <span>{props.wilaya} {""}</span>
          <LocationOnRoundedIcon className="Card-icons" />
        </div>
        <div className="Post-Card-Price">
          <span>{props.price} {props.transaction === "Louer" ? "DZD/MOIS" : "DZD"}</span>
        </div>
      </div>
    </div>
     <Dialog
     open={open}
     
     keepMounted
     onClose={handleClose}
     aria-labelledby="alert-dialog-slide-title"
     aria-describedby="alert-dialog-slide-description"
   >
     <DialogTitle id="alert-dialog-slide-title">{"Voulez-vous supprimer ce post ?"}</DialogTitle>
     <DialogActions>
       <Button onClick={()=> {
    PostDelete(props.id)
    }}  color="primary">
         OUI
       </Button>
       <Button onClick={handleClose} color="primary">
         NO
       </Button>
     </DialogActions>
   </Dialog>
   </>
  );
};

export default Allposts;

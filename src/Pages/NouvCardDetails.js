import React, { useEffect, useState } from "react";
import API from "../api/API";
import Navbar from "../components/navbar/Navbar";
import SinglePageDetails from "./SinglePageDetails";
import image from './property.jpg'
import Footer from "../components/footer/Footer";

const NouvCardDetails = (props) => {
    const [singleDetails, setSingleDetails] = useState({})
    const [message , setMessage] = useState(singleDetails)
    useEffect(() => {
        API.get('api/Fetchhousesdata').then(res => {
            if(res.data.length === 0 ) {
              setMessage("Aucun publication apartien ce lien");
            }else {
                const card= res.data.find(x => x._id === props.match.params.id)
                setSingleDetails(card)
            }
          }).catch(err => {
            console.log(err)
          })
        
    }, [])
    
  return (
    <>
      <div className="SinglePage-Navbar">
        <Navbar />
      </div>
      <div className="property-details">
        <img src={image} alt="imageProperty" />
        <div>
          <span>DÉTAIL DE LA PROPRIÉTÉ</span>
        </div>
      </div>
      <div className="SinglePage-Container">
      {[singleDetails] && [singleDetails].map(single => 
                    <SinglePageDetails
                    title={single.title}
                    images={single.images}
                    bio={single.bio}
                    douche={single.douche}
                    salle={single.salle}
                    price={single.price}
                    area={single.area}
                    garage={single.garage}
                    transaction={single.transaction}
                    typedebien={single.typedebien}
                    wilaya={single.wilaya}
                    />
                    )}
                    
      </div>
      <Footer/>
    </>
  );
};

export default NouvCardDetails;

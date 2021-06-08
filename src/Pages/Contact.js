import { TextField } from "@material-ui/core";
import React , {useState} from "react";
import Navbar from "../components/navbar/Navbar";
import "./Contact.css";
import imagehouse from "./imagehouse.jpg";
import ContactUsImage from "./contactus.jpg"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Footer from "../components/footer/Footer";
import API from "../api/API";
const Contact = () => {
  const [name,setName] = useState()
  const [email , setEmail] = useState()
  const [text , setText] = useState()
  const [messagevalid , setMessagevalid] = useState()


  const Send = () => {
   const newdata = {name , email , text}
   API.post('api/PostMessage' , newdata).then((res) => {
    if(res.data.error === false) {
      setMessagevalid(res.data.message)
      setName('')
      setEmail('')
      setText('')
      setTimeout(() => {
        setMessagevalid(false)
      }, 3000);
    }
   })

    }

  const position = [36.76897, 3.030307];

  return (
    <>
      <Navbar />
      <div className="Contact-Container-Image">
        <img src={imagehouse} alt="imagehouse" />
        <div className="Contact-Container-Title">
          <span>Entrer en contact</span>
        </div>
      </div>
      <div className="OurLocation-Container">
        <div className="OurLocation-Title">
          <span>NOTRE EMPLACEMENT</span>
        </div>
        <div className="OurLocation-Map">
          <MapContainer center={position} zoom={13} style={{ height: "50vh" }}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
          </MapContainer>
        </div>
      </div>
      <div className="CONTACTUS-Container">
        <div className="Contact-Form">
  <div className="container">
    <div className="head">
      <h2>Dis Bonjour</h2>
    </div>
    <input defaultValue={name}
         onChange={e => setName(e.target.value)} className="Contact-Input" type="text"  placeholder="Name" /><br />
    <input defaultValue={email}
         onChange={e => setEmail(e.target.value)} className="Contact-Input" type="email"  placeholder="Email" /><br />
    <textarea defaultValue={text}
         onChange={e => setText(e.target.value)} className="Contact-Input Contact-Textarea" type="text"  placeholder="Message"></textarea><br />
    {messagevalid && (<div className="message">{messagevalid}</div>)}
    <button onClick={Send} className="Contact-btn"  >
      Send!
    </button>
  </div>
        </div>
        <div className="Contact-Form-Image">
          <img src={ContactUsImage} alt="imageone" />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;

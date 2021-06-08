import React, { useRef, useState } from "react";
import "./Form.css";
import imageholder from "./imageholder.jpg";
import { TextField } from "@material-ui/core";
import API from "../../../api/API";

const Form = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [transaction, setTransaction] = useState();
  const [area, setArea] = useState();
  const [bio, setBio] = useState();
  const [typedebien, setTypedebien] = useState();
  const [garage, setGarage] = useState();
  const [wilaya, setWilaya] = useState();
  const [douche, setDouche] = useState();
  const [salle, setSalle] = useState();
  const [images, setImages] = useState("");
  const [messageerr, setMessageerr] = useState(false);
  const [messagevalid, setMessagevalid] = useState(false);

  const [show, setShow] = useState(true);

  const back = () => {
    setShow(true);
  };
  const Show = () => {
    setShow(false);
  };
  

  const Send = () => {
    const formData = new FormData();
    formData.set("title", title);
    formData.set("price", price);
    formData.set("douche", douche);
    formData.set("wilaya", wilaya);
    formData.set("transaction", transaction);
    formData.set("typedebien", typedebien);
    formData.set("salle", salle);
    formData.set("area", area);
    formData.set("title", title);
    formData.set("bio", bio);
    formData.set("garage", garage);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    API.post("api/CreatePosts", formData)
      .then((res) => {
        if (res.data.erreur === true) {
          setMessageerr(res.data.message);
          setTimeout(() => {
            setMessageerr(false)
          }, 3000);
        } else {
          setMessagevalid(res.data.message);
          setTitle("");
          setWilaya("");
          setPrice("");
          setSalle("");
          setGarage("");
          setArea("");
          setTransaction("");
          setDouche("");
          setTypedebien("");
          setBio("");
          setTimeout(() => {
            setMessagevalid(false)
          }, 3000);
          
        }
      })
      .catch((err) => {
        setMessageerr(err.data.message);
      });
  };
  return (
    <>
      {messageerr && (
        <div id="messageerr" className="toolbar-error-message">
          <span>{messageerr}</span>
        </div>
      )}
      {messagevalid && (
        <div id="messagevalid" className="toolbar-valid-message">
          <span>{messagevalid}</span>
        </div>
      )}

      <div className="admin-post-container">
        {show ? (
          <>
            <div className="post-btn-container">
              <div className="post-btn">
                <input
                  placeholder="Titre"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="btn-select"
                />
              </div>
              <div className="post-btn">
                <select
                  value={salle}
                  onChange={(event) => setSalle(event.target.value)}
                  className="btn-select"
                >
                  <option>SALLE</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
              </div>
              <div className="post-btn">
                <select
                  value={typedebien}
                  onChange={(event) => setTypedebien(event.target.value)}
                  className="btn-select"
                >
                  <option>Type De bien</option>
                  <option>Appartement</option>
                  <option>Bloc</option>
                  <option>Duplex</option>
                  <option>Hangars</option>
                  <option>Locaux</option>
                  <option>Niveau de Villa</option>
                  <option>Terrain</option>
                  <option>Villa</option>
                </select>
              </div>
              <div className="post-btn">
                <select
                  value={transaction}
                  onChange={(event) => setTransaction(event.target.value)}
                  className="btn-select"
                >
                  <option value="Transiction">Transiction </option>
                  <option value="Louer">Louer</option>
                  <option value="Vendre">Vendre</option>
                </select>
              </div>
              <div className="post-btn">
                <select
                  value={wilaya}
                  onChange={(event) => setWilaya(event.target.value)}
                  className="btn-select"
                >
                  <option>Wilayas </option>
                  <option>Adrar </option>
                  <option>Chlef </option>
                  <option>Laghouat </option>
                  <option>Oum El Bouaghi </option>
                  <option>Batna </option>
                  <option>Béjaïa </option>
                  <option>Biskra </option>
                  <option>Béchar </option>
                  <option>Blida </option>
                  <option>Bouira </option>
                  <option>Tamanrasset </option>
                  <option>Tébessa </option>
                  <option>Tlemcen </option>
                  <option>Tiaret </option>
                  <option>Tizi Ouzou </option>
                  <option>Alger </option>
                  <option>Djelfa </option>
                  <option>Jijel </option>
                  <option>Sétif </option>
                  <option>Saïda </option>
                  <option>Skikda </option>
                  <option>Sidi Bel Abbès </option>
                  <option>Annaba </option>
                  <option>Guelma </option>
                  <option>Constantine </option>
                  <option>Médéa </option>
                  <option>Mostaganem </option>
                  <option>Msila </option>
                  <option>Mascara </option>
                  <option>Ouargla </option>
                  <option>Oran </option>
                  <option>El Bayadh </option>
                  <option>Illizi </option>
                  <option>Bordj Bou Arreridj </option>
                  <option>Boumerdès </option>
                  <option>El Tarf </option>
                  <option>Tindouf </option>
                  <option>Tissemsilt </option>
                  <option>El Oued </option>
                  <option>Khenchela </option>
                  <option>Souk Ahras </option>
                  <option>Tipaza </option>
                  <option>Mila </option>
                  <option>Aïn Defla </option>
                  <option>Naâma </option>
                  <option>Aïn Témouchent </option>
                  <option>Ghardaïa </option>
                  <option>Relizane </option>
                </select>
              </div>
              <div className="post-btn">
                <select
                  value={douche}
                  onChange={(event) => setDouche(event.target.value)}
                  className="btn-select"
                >
                  <option>Douche </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div className="post-btn">
                <select
                  value={garage}
                  onChange={(event) => setGarage(event.target.value)}
                  className="btn-select"
                >
                  <option value="0">Garage </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div className="post-btn">
                <input
                  value={area}
                  onChange={(event) => setArea(event.target.value)}
                  type="number"
                  placeholder="Superficie"
                  className="btn-select"
                ></input>
              </div>
              <div className="post-btn">
                <input
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  type="number"
                  placeholder="Prix"
                  className="btn-select"
                ></input>
              </div>
            </div>
            <div className="toolbar-next-back">
              <div className="bio-box">
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  value={bio}
                  onChange={(event) => setBio(event.target.value)}
                  multiline
                  rows={5}
                  defaultValue="Description de l'article"
                  variant="outlined"
                />
              </div>
              <div onClick={Show} className="next-btn">
                <span>Suivant</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="image-gallery-container">
              <input
                type="file"
                multiple
                onChange={(event) => setImages(event.target.files)}
              />
            </div>

            <div className="toolbar-next-back">
              <div onClick={back} className="next-btn">
                <span>Back</span>
              </div>
              <div onClick={Send} className="next-btn">
                <span>Poster</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Form;

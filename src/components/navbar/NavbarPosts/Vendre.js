import React, { useEffect , useState } from 'react'
import API from '../../../api/API';
import CompareArrowsRoundedIcon from "@material-ui/icons/CompareArrowsRounded";
import HotelRoundedIcon from "@material-ui/icons/HotelRounded";
import BathtubRoundedIcon from "@material-ui/icons/BathtubRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import DriveEtaRoundedIcon from "@material-ui/icons/DriveEtaRounded";
import Footer from '../../footer/Footer';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
const Vendre = () => {
    const [alldata, setAlldata] = useState([]);


    
    useEffect(() => {
        API.get("api/FetchAvendre")
      .then((res) => {
        setAlldata(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
    }, [])
    console.log(alldata)

    const URI = "http://www.localhost:8001/";

    return (
        <>
             <div className="SearchPage-Container">
      <div className="SearchPage-Navbar">
        <Navbar />
      </div>


        <div className="Box-Filter">
            <div className="Posts-Number">
            <span> {alldata.length} {alldata.length === 1 ? "Résultat trouvé" : "Résultats trouvés"} </span>
            </div>
        </div>
        
      {alldata.length > 0 ? (
        alldata.map((ok ) => {
          return <div className="Card-SearchPage">
              <div className="Card-SearchPage-Image">
              <img src={`${URI}${ok.images[0].filename}`} alt="image1"  />
              </div>
              <div className="Card-SearchPage-Title">
                <h3> {ok.title} </h3>
              </div>
              <div className="Card-SearchPage-Localisation">
            
                <span> {ok.wilaya} </span>
              </div>
              <div className="Card-SearchPage-Price">
              <span> {ok.price} {ok.transaction === "Vendre" ? "DZD" : "DZD/MOIS"}</span>
              </div>
              <div className="Card-SearchPage-Informations">
                    <div className="Card-SearchPage-Informations-box">
                        <div className="Card-Search-Icon">
                            <HotelRoundedIcon/>
                        </div>
                        <div className="Card-Search-IconTitle">
                            <span> {ok.salle} Salle </span>
                        </div>
                    </div>
                    <div className="Card-SearchPage-Informations-box">
                        <div className="Card-Search-Icon">
                        <BathtubRoundedIcon/>
                        </div>
                        <div className="Card-Search-IconTitle">
                        <span> {ok.douche} Douche </span>
                            
                        </div>
                    </div>
                    <div className="Card-SearchPage-Informations-box">
                        <div className="Card-Search-Icon">
                        <CompareArrowsRoundedIcon/>
                        </div>
                        <div className="Card-Search-IconTitle">
                        <span> {ok.area} Superficie </span>

                        </div>
                    </div>
                    <div className="Card-SearchPage-Informations-box">
                        <div className="Card-Search-Icon">
                    <DriveEtaRoundedIcon/>
                        </div>
                        <div className="Card-Search-IconTitle">
                        <span> {ok.garage} Garage </span>
                            
                        </div>
                    </div>
              </div>
              <Link to={ `${'Details/'}${ok._id}` }>
              <div className="Card-Search-Btn-Details">
                    <span>Détails</span>
              </div>
              </Link>
          </div>;
        })
      ) : (
        <div className="Nodata-Container">
          {" "}
          <h1>Aucun résultat de recherche trouvé</h1>{" "}
        </div>
      )}
      <Footer />
</div>
        </>
    )
}

export default Vendre

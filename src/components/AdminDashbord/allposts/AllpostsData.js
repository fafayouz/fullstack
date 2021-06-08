import React, { useEffect, useState } from "react";
import API from "../../../api/API";
import LoadingData from "../../../Pages/LoginData";
import Allposts from "./Allposts";

const AllpostsData = () => {
  const [cards, setCards] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    API.get("api/Fetchhousesdata")
      .then((res) => {
        if (res.data.length === 0) {
          setMessage("vous avez pas poster une property");
        } else {
          setCards(res.data);
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {!message ? (
        <div className="Allposts-container">
          <div className="Allposts-Filter"></div>
          <div className='Allposts-Card'>
          {loading ? (
            cards.map((house) => (
              <Allposts
                title={house.title}
                typedebien={house.typedebien}
                transaction={house.transaction}
                images={house.images}
                area={house.area}
                price={house.price}
                douche={house.douche}
                wilaya={house.wilaya}
                salle={house.salle}
                garage={house.garage}
                bio={house.bio}
                id={house._id}
              />
            ))
            
          ) : (
            <div className="message-err-data">
              <LoadingData />
            </div>
          )}
          </div>
        </div>
      ) : (
        <>
        <div className="Allposts-container">
        <div className="Allposts-Filter"></div>
        <div className='Allposts-Card'>
          <div className="message-err-data">
            <span>{message}</span>
          </div>
        </div>
        </div>
        </>
      )}
    </>
  );
};

export default AllpostsData;

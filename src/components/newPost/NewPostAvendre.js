import React, { useEffect, useState } from "react";
import API from "../../api/API";
import LoadingData from "../../Pages/LoginData";
import NewPost from "./NewPost";

const NewPostAvendre = () => {
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    API.get("api/FetchAvendre")
      .then((res) => {
        if (res.data.length === 0) {
          setMessage("Il ñ'y a pas de nouveaux publication");
        } else {
          setData(res.data);
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
        <div className="NewPost-Container">
          <div className="NewPost-Title">
            <span>Nouveau à Vendre</span>
            <div className="bar-">
              <div className="bar--"></div>
              <div className="circle"></div>
              <div className="bar--"></div>
            </div>
          </div>
          <div className="NewPost-card">
            {loading ? (
              data
                .slice(-3)
                .map((house) => (
                  <NewPost
                    title={house.title}
                    typedebien={house.typedebien}
                    images={house.images}
                    area={house.area}
                    price={house.price}
                    douche={house.douche}
                    wilaya={house.wilaya}
                    salle={house.salle}
                    transaction={house.transaction}
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
        <div className="NewPost-Container">
          <div className="NewPost-Title">
            <span>Nouveau à Vendre</span>
            <div className="bar-">
              <div className="bar--"></div>
              <div className="circle"></div>
              <div className="bar--"></div>
            </div>
          </div>
          <div className="NewPost-card">
            <div className="message-err-data">
              <span>{message}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPostAvendre;

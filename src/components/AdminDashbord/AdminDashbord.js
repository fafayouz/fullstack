import React, { useState } from "react";
import "./AdminDashbord.css";
import { Link, useHistory } from "react-router-dom";
import { useCallback } from "react";
import { setLoggedOut } from "../../store/store";
import { useDispatch } from "react-redux";
import Form from "./form/Form";
import Addadmin from "./AddAdmin/Addadmin";
import AllpostsData from "./allposts/AllpostsData";
import Messages from "./messages/Messages";
const AdminDashbord = () => {
  const [showform, setShowform] = useState(true);
  const [showformterrain, setShowformterrain] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showMessage , setShowMessage] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("token");

  const navigate = (path) => {
    history.push(path);
  };
  const loggedOut = useCallback(() => dispatch(setLoggedOut()), [dispatch]);

  const logout = () => {
    loggedOut();
    localStorage.setItem("token", "");
    navigate("/Admin");
  };

  const show = () => {
    setShowform(true);
    setShowformterrain(false);
    setShowMessage(false)
    setShowAdmin(false);
  };
  const showagain = () => {
    setShowform(false);
    setShowAdmin(false);
    setShowMessage(false)
    setShowformterrain(true);
  };
  const showpageadmin = () => {
    setShowform(false);
    setShowformterrain(false);
    setShowMessage(false)
    setShowAdmin(true);
  };
  const showpagemessage = () => {
    setShowform(false);
    setShowformterrain(false);
    setShowAdmin(false);
    setShowMessage(true)
  }
  const profilUsername = localStorage.getItem("Username");
  console.log(profilUsername);
  return (
    <>
      {isLoggedIn && (
        <div className="AdminDashbord-Container">
          <div className="admin-sidebar">
            <div className="AdminSidebar-container">
              <div className="profil-admin">
                <span>Hello {profilUsername}</span>
              </div>
              <div className="AdmineSidebar-span">
                <div className="span-box">
                  <Link to="/">Home </Link>
                </div>
              </div>
              <div onClick={show} className="AdmineSidebar-span">
                <div className="span-box">
                  <span>Ajouter</span>
                </div>
              </div>
              <div onClick={showagain} className="AdmineSidebar-span">
                <div className="span-box">
                  <span>List</span>
                </div>
              </div>
              <div onClick={showpageadmin} className="AdmineSidebar-span">
                <div className="span-box">
                  <span>Ajouter Un Admin </span>
                </div>
              </div>
              <div onClick={showpagemessage} className="AdmineSidebar-span">
                <div className="span-box">
                  <span>Messages </span>
                </div>
              </div>

              <div onClick={logout} className="AdmineSidebar-span">
                <div className="span-box">
                  <span>Loogout </span>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-post">
            {showform && <Form />}
            {showformterrain && <AllpostsData />}
            {showAdmin && <Addadmin />}
            {showMessage && <Messages/>}
          </div>
        </div>
      )}
      {!isLoggedIn && (
        <div>
          <h1>Page 404</h1>
        </div>
      )}
    </>
  );
};

export default AdminDashbord;

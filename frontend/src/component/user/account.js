import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../main.js";
import { Link,useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { logout} from "../../actions/userAction";
import "./account.css";
import "../header/header.css"
import { useAlert } from "react-alert";

const Account = ({ history }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if(isAuthenticated == undefined){
      navigate("/login");
    }
  }, [history, isAuthenticated,navigate]);
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
    navigate("/login")
  }
  function logoutUser() {
    dispatch(logout());
    navigate("/")
    alert.success("Logout Successfully");
		window.location.reload(false);

  }
  
  
  return (
    <Fragment>
    <MetaData title={`${user.name}'s Profile`} />
    <header>
        <div className="logo">
            Todo List
        </div>
        <div className="menu" id="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/signup_signin">{`${user.name}`}...</a></li>
            </ul>
        </div>
    </header>
    <div className="profileContainer">
      <div>
        <h1>My Profile</h1>
        <Button onClick={logoutUser}  className="logout">Logout</Button>
      </div>
      <div >
      <div>
          <h4 className="account1">Name</h4>
          <p>{user.name}</p>
        </div>
        <div>
          <h4 className="account1">Email</h4>
          <p>{user.email}</p>
        </div>
        <div>
          <h4 className="account1">Joined On</h4>
          <p>{String(user.createdAt).substr(0, 10)}</p>
        </div>
      </div>
    </div>
  </Fragment>
  );
};

export default Account;
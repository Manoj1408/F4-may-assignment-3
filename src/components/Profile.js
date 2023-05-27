import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setUser } from "../actions/counterActionCreator";

export default function Profile() {
     const dispatch = useDispatch();


    const counter = useSelector((state) => state.user);
    // console.log(counter);
    const navigate = useNavigate();
    useEffect(() => {
      if (!counter) {
        // Redirect to signup page or any other appropriate route
        navigate("/");
      }
    }, [counter, navigate]);

    function existUser() {
        localStorage.setItem("user","");
        dispatch(setUser(null));
        navigate("/");

    }

  return (
    <>
      <div className="pmain">
        <h1>Profile</h1>
        {counter ? (
          <div>
            <h2>Full Name : {counter.name}</h2>
            <h2>Email : {counter.email}</h2>
            <h2>Password : {counter.password}</h2>
            <button onClick={existUser}>Logout</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

import React from "react";
import { useState } from "react";
import ReactFacebookLogin from "react-facebook-login";

const Facebook = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userID, setUserID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");

    const responseFacebook = (response) => {
        setIsLoggedIn(true);
        setUserID(response.userID);
        setName(response.name);
        setEmail(response.email);
        setPicture(response.picture.data.url);
    };

    const componentClicked = (response) => {
        console.log("Button Click");
    };

    let fbContent;

    if (isLoggedIn) {
        fbContent = (
            <div
                style={{
                    width: "400px",
                    margin: "auto",
                    background: "#f4f4f4",
                    color: "black",
                    padding: "20px",
                }}
            >
                <img src={picture} alt={name} />
                <h2>Welcome, {name} !</h2>
                Email: {email}
            </div>
        );
    } else {
        fbContent = (
            <ReactFacebookLogin
                appId="1607367353017118"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
            />
        );
    }
    return <div>{fbContent}</div>;
};

export default Facebook;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import ReactFacebookLogin from "react-facebook-login";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { FacebookLoginClient } from "@greatsumini/react-facebook-login";

const Facebook = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userID, setUserID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");

    useEffect(() => {
        if (localStorage.getItem("sessionStorage")) {
            setIsLoggedIn(true);
            let sessionData = JSON.parse(
                localStorage.getItem("sessionStorage")
            );

            setUserID(sessionData.userID);
            setName(sessionData.name);
            setEmail(sessionData.email);
            setPicture(sessionData.picture);
        }
    }, []);

    const responseFacebook = (response) => {
        console.log(response);
        setIsLoggedIn(true);
        setUserID(response.userID);
        setName(response.name);
        setEmail(response.email);
        setPicture(response.picture.data.url);

        sessionStorage.setItem("userID", response.userID);
        sessionStorage.setItem("name", response.name);
        sessionStorage.setItem("email", response.email);
        sessionStorage.setItem("picture", response.picture.data.url);

        localStorage.setItem("sessionStorage", JSON.stringify(sessionStorage));
    };

    const componentClicked = (response) => {
        console.log("Button Click");
    };

    const logout = () => {
        //nullify the authResponse
        FacebookLoginClient.logout(() => {
            // console.log("logout");
            console.log(
                JSON.parse(sessionStorage.getItem("fbssls_1607367353017118"))
                    .authResponse
            );
            let authResponse = JSON.parse(
                sessionStorage.getItem("fbssls_1607367353017118")
            ).authResponse;

            //if it is null or logged out, then delete the sessions and other states
            if (!authResponse) {
                sessionStorage.clear();
                localStorage.clear();
                setIsLoggedIn(false);
            }
        });
    };

    let fbContent;

    if (isLoggedIn) {
        fbContent = (
            <div
                style={{
                    width: "800px",
                    margin: "10px",
                    background: "#f4f4f4",
                    color: "black",
                    padding: "20px",
                }}
            >
                <img src={picture} alt={name} />
                <h2>Welcome, {name} !</h2>
                Email: {email}
                <br />
                <button
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        backgroundColor: "#3b5998",
                        color: "white",
                        borderRadius: "5px",
                        marginTop: "10px",
                        cursor: "pointer",
                    }}
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
        );
    } else {
        fbContent = (
            <FacebookLogin
                appId="1607367353017118"
                style={{
                    backgroundColor: "#4267b2",
                    color: "#fff",
                    fontSize: "16px",
                    padding: "12px 24px",
                    border: "none",
                    borderRadius: "4px",
                }}
                onProfileSuccess={(response) => {
                    //get profile here
                    responseFacebook(response);
                }}
                onLogout
            />
        );
    }
    return <div>{fbContent}</div>;
};

export default Facebook;

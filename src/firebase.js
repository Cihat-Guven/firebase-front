// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import React from "react";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiLHRh2pE_vrRoHu3ibwqCFuWjVpGLIXI",
    authDomain: "test-notification-53562.firebaseapp.com",
    projectId: "test-notification-53562",
    storageBucket: "test-notification-53562.appspot.com",
    messagingSenderId: "430185113883",
    appId: "1:430185113883:web:b59cedbeb065fd8c3d8bbe",
    measurementId: "G-90NMJFEBS4"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const GetToken = ({ setTokenFound }) => {
    const vapidKey = "BCTvTmkeOXCJTcZOzvpSmyf7r3DBgVu8DisTTQ-0QPVbq_816gTCOSY71JaaCoGSDizorhKtsFUPp6Av2KKjumU";
    return getToken(messaging, { vapidKey }).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
            // shows on the UI that permission is required 
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

import { getDatabase, ref, set, onValue, } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCzQj6c86LXydv6eBCBGKtf4xHrd_IWnmo",
    authDomain: "hackathon-eea59.firebaseapp.com",
    databaseURL: "https://hackathon-eea59-default-rtdb.firebaseio.com",
    projectId: "hackathon-eea59",
    storageBucket: "hackathon-eea59.appspot.com",
    messagingSenderId: "476528487989",
    appId: "1:476528487989:web:47c2eb5e884af5a6bb4b7c",
    measurementId: "G-4PJFF7CTB6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getDatabase();

export{auth, createUserWithEmailAndPassword,signInWithEmailAndPassword}

let signup_btn = document.getElementById("signup_btn");

signup_btn.addEventListener("click", function () {

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    console.log(email.value);
    console.log(password.value);

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            set(ref(db, `users/${user.uid}`), {
                email: email.value,
                password: password.value,
            });

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("error=>", errorMessage)
            // ..
        });

        alert("User is successfully registered! Diverting you to the login page...")
        setTimeout(() => {
          window.location.href = "blogs.html"
        }, 1000);

});


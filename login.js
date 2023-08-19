
let login_btn = document.getElementById("login_btn");
login_btn.addEventListener("click", function () {

    let login_email = document.getElementById("login_email");
    let login_password = document.getElementById("login_password");

    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            onValue(ref(db, `users/${user.uid}`), (data) => {
                console.log("data==>", data.val())
            })

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error=>", errorMessage);
        });

    alert("User is successfully registered! Diverting you to the login page...")
    setTimeout(() => {
        window.location.href = "blogs.html"
    }, 1000);

})
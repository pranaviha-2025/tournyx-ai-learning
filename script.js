function validateLogin() {

    let email =
        document.getElementById("email").value.trim();

    let password =
        document.getElementById("password").value.trim();

    let message =
        document.getElementById("message");

    if (email === "") {

        message.style.color = "#ff4d4d";
        message.innerText =
            "Email cannot be empty";

        return;
    }

    if (password.length < 6) {

        message.style.color = "#ff4d4d";
        message.innerText =
            "Password must contain at least 6 characters";

        return;
    }

    message.style.color = "#c7a45c";
    message.innerText = "Login Successful";
}

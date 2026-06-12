document.getElementById("signinForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    document.getElementById("loginEmailError").textContent = "";
    document.getElementById("loginPasswordError").textContent = "";

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if(!savedUser){
        alert("Please register first.");
        return;
    }

    if(
        email === savedUser.email &&
        password === savedUser.password
    ){
        alert("Login Successful!");
        window.location.href = "tourist.html";
    }
    else{
        document.getElementById("loginPasswordError").textContent =
        "Invalid Email or Password";
    }

});

function togglePassword(id){
    const field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
}
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;

    document.querySelectorAll(".error").forEach(error => {
        error.textContent = "";
    });

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const city = document.getElementById("city").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const cityRegex = /^[A-Za-z ]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (fullname === "") {
        document.getElementById("nameError").textContent = "Full name required";
        valid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Enter valid email";
        valid = false;
    }

    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone must contain 10 digits";
        valid = false;
    }

    if (!cityRegex.test(city)) {
        document.getElementById("cityError").textContent = "Only alphabets allowed";
        valid = false;
    }

    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent =
        "Minimum 8 characters with letters and numbers";
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent =
        "Passwords do not match";
        valid = false;
    }

    if (valid) {

        const user = {
            fullname,
            email,
            phone,
            city,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Registration Successful!");
        window.location.href = "signin.html";
    }
});

function togglePassword(id) {
    const field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
}
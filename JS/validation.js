// validation.js

function validateSignup() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
  
    const phoneRegex = /^(\d{10}|(\d{3}[-.\s]){2}\d{4})$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number format.");
      return false;
    }
  
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters with uppercase, lowercase, and a number.");
      return false;
    }
  
    alert("Signup Successful!");
    return true;
  }
  
  function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthText = document.getElementById("strength");
    let strength = "Poor";
    let color = "red";
  
    const mediumRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;
    const strongRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{10,}/;
  
    if (strongRegex.test(password)) {
      strength = "Strong";
      color = "green";
    } else if (mediumRegex.test(password)) {
      strength = "Medium";
      color = "orange";
    }
  
    strengthText.textContent = `Strength: ${strength}`;
    strengthText.style.color = color;
  }
  
  function validateLogin() {
    const password = document.getElementById("loginPassword").value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters, include one uppercase letter, one lowercase letter, and one number.");
      return false;
    }
  
    // Redirect or perform login logic
    window.location.href = "home.html";
    return false;
  }
  
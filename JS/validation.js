// validation.js

function validateSignup(event) {
    event.preventDefault();
    
    // Get form elements
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    
    // Get error elements
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    
    // Reset previous error messages
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    passwordError.style.display = 'none';
    
    let isValid = true;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    }
    
    // Phone validation
    const phoneRegex = /^(?:\d{10}|\d{3}[-. ]\d{3}[-. ]\d{4})$/;
    if (phone.value.trim() === '') {
        phoneError.textContent = 'Phone number is required';
        phoneError.style.display = 'block';
        isValid = false;
    } else if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = 'Please enter a valid phone number (10 digits) in format: 1234567890, 123-456-7890, 123.456.7890, or 123 456 7890';
        phoneError.style.display = 'block';
        isValid = false;
    }
    
    // Password validation
    if (password.value === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (!/(?=.*[a-z])/.test(password.value)) {
        passwordError.textContent = 'Password must contain at least one lowercase letter';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (!/(?=.*[A-Z])/.test(password.value)) {
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (!/(?=.*\d)/.test(password.value)) {
        passwordError.textContent = 'Password must contain at least one number';
        passwordError.style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // Here you would typically make an API call to your backend
        console.log('Form is valid, submitting...');
        alert('Account created successfully!');
        window.location.href = 'index.html';
    }
    
    return false;
}

function validateLogin(event) {
    event.preventDefault();
    
    // Get form elements
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    // Reset previous error messages
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    
    let isValid = true;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    }
    
    // Password validation
    if (password.value === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // Here you would typically make an API call to your backend
        console.log('Login successful, redirecting...');
        // Store login state if needed
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to home page
        window.location.href = 'home.html';
    }
    
    return false;
}

// Add real-time validation for all fields
document.getElementById('email').addEventListener('input', function() {
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value.trim() === '') {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
    } else if (!emailRegex.test(this.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

document.getElementById('phone').addEventListener('input', function() {
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^(?:\d{10}|\d{3}[-. ]\d{3}[-. ]\d{4})$/;
    
    // Remove any non-digit characters except allowed separators
    let cleanedValue = this.value.replace(/[^\d\s\-\.]/g, '');
    
    // Format the number as user types
    if (cleanedValue.length > 0) {
        if (cleanedValue.length <= 3) {
            this.value = cleanedValue;
        } else if (cleanedValue.length <= 6) {
            this.value = cleanedValue.slice(0, 3) + '-' + cleanedValue.slice(3);
        } else {
            this.value = cleanedValue.slice(0, 3) + '-' + cleanedValue.slice(3, 6) + '-' + cleanedValue.slice(6, 10);
        }
    }

    if (this.value.trim() === '') {
        phoneError.textContent = 'Phone number is required';
        phoneError.style.display = 'block';
    } else if (!phoneRegex.test(this.value)) {
        phoneError.textContent = 'Please enter a valid phone number (10 digits) in format: 1234567890, 123-456-7890, 123.456.7890, or 123 456 7890';
        phoneError.style.display = 'block';
    } else {
        phoneError.style.display = 'none';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const passwordError = document.getElementById('passwordError');
    const strengthText = document.getElementById('strength');
    
    if (this.value === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        strengthText.textContent = '';
    } else if (this.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        passwordError.style.display = 'block';
        strengthText.textContent = 'Strength: Poor';
        strengthText.style.color = '#ff4444'; // Red
    } else if (!/(?=.*[a-z])/.test(this.value)) {
        passwordError.textContent = 'Password must contain at least one lowercase letter';
        passwordError.style.display = 'block';
        strengthText.textContent = 'Strength: Poor';
        strengthText.style.color = '#ff4444'; // Red
    } else if (!/(?=.*[A-Z])/.test(this.value)) {
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        passwordError.style.display = 'block';
        strengthText.textContent = 'Strength: Poor';
        strengthText.style.color = '#ff4444'; // Red
    } else if (!/(?=.*\d)/.test(this.value)) {
        passwordError.textContent = 'Password must contain at least one number';
        passwordError.style.display = 'block';
        strengthText.textContent = 'Strength: Poor';
        strengthText.style.color = '#ff4444'; // Red
    } else {
        passwordError.style.display = 'none';
        
        // Check password strength
        let strength = 0;
        
        // Length check
        if (this.value.length >= 8) strength++;
        if (this.value.length >= 12) strength++;
        
        // Character type checks
        if (/(?=.*[a-z])/.test(this.value)) strength++;
        if (/(?=.*[A-Z])/.test(this.value)) strength++;
        if (/(?=.*\d)/.test(this.value)) strength++;
        if (/(?=.*[!@#$%^&*])/.test(this.value)) strength++;
        
        // Determine strength level
        if (strength >= 5) {
            strengthText.textContent = 'Strength: Strong';
            strengthText.style.color = '#00C851'; // Green
        } else if (strength >= 3) {
            strengthText.textContent = 'Strength: Medium';
            strengthText.style.color = '#ffbb33'; // Orange
        } else {
            strengthText.textContent = 'Strength: Poor';
            strengthText.style.color = '#ff4444'; // Red
        }
    }
});
  
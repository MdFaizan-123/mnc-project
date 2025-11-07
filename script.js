// Update current date
function updateDate() {
    const now = new Date();
    const day = now.getDate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    document.getElementById('currentDate').textContent = day;
    document.getElementById('currentMonth').textContent = `${month} ${year}`;
}

// Initialize date on load
updateDate();

// Student Selector Dropdown
const studentSelector = document.getElementById('studentSelector');
const studentDropdown = document.getElementById('studentDropdown');
const studentText = document.querySelector('.student-text');

studentSelector.addEventListener('click', (e) => {
    e.stopPropagation();
    studentDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!studentSelector.contains(e.target) && !studentDropdown.contains(e.target)) {
        studentDropdown.classList.remove('show');
    }
});

// Handle dropdown option selection
document.querySelectorAll('.dropdown-option').forEach(option => {
    option.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');
        const text = e.target.textContent;
        studentText.textContent = text;
        studentDropdown.classList.remove('show');
    });
});

// Login Form Submission
const loginButton = document.getElementById('loginButton');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const userType = studentText.textContent.toLowerCase();
    
    // Validation
    if (!email) {
        alert('Please enter your email');
        emailInput.focus();
        return;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        emailInput.focus();
        return;
    }
    
    if (!password) {
        alert('Please enter your password');
        passwordInput.focus();
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        passwordInput.focus();
        return;
    }
    
    // Simulate login (replace with actual API call)
    console.log('Login attempt:', {
        email: email,
        userType: userType,
        timestamp: new Date().toISOString()
    });
    
    // Show success message
    alert(`Login successful!\nEmail: ${email}\nUser Type: ${userType}`);
    
    // In a real application, you would redirect or update the UI here
    // window.location.href = '/dashboard';
});

// Forgot Password
const forgetPassword = document.getElementById('forgetPassword');

forgetPassword.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Please enter your email address first');
        emailInput.focus();
        return;
    }
    
    // Simulate password reset
    alert(`Password reset link has been sent to ${email}`);
    
    // In a real application, you would make an API call here
    console.log('Password reset requested for:', email);
});

// Biometric Authentication
const faceIdBtn = document.getElementById('faceIdBtn');
const biometricBtn = document.getElementById('biometricBtn');

faceIdBtn.addEventListener('click', () => {
    // Simulate Face ID authentication
    if (confirm('Initiate Face ID authentication?')) {
        // In a real application, you would use Web Authentication API
        console.log('Face ID authentication initiated');
        
        // Simulate authentication process
        setTimeout(() => {
            alert('Face ID authentication successful!');
            // Redirect or update UI
        }, 1500);
    }
});

biometricBtn.addEventListener('click', () => {
    // Simulate Biometric authentication
    if (confirm('Initiate Biometric authentication?')) {
        // In a real application, you would use Web Authentication API
        console.log('Biometric authentication initiated');
        
        // Simulate authentication process
        setTimeout(() => {
            alert('Biometric authentication successful!');
            // Redirect or update UI
        }, 1500);
    }
});

// Register Link
const registerLink = document.getElementById('registerLink');

registerLink.addEventListener('click', () => {
    // In a real application, you would navigate to the registration page
    alert('Redirecting to registration page...');
    console.log('Navigate to registration page');
    // window.location.href = '/register';
});

// Down Arrow Button
const downArrow = document.getElementById('downArrow');

downArrow.addEventListener('click', () => {
    // Scroll down or navigate to next section
    alert('Scroll to next section');
    console.log('Scroll action triggered');
    // window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
let isDarkMode = false;

darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.style.filter = 'brightness(0.8)';
        console.log('Dark mode enabled');
    } else {
        document.body.style.filter = 'brightness(1)';
        console.log('Dark mode disabled');
    }
});

// Enter key to submit login
emailInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        passwordInput.focus();
    }
});

passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        loginButton.click();
    }
});

// Real-time weather update (simulated)
function updateWeather() {
    // In a real application, you would fetch from a weather API
    const weatherConditions = ['Rain', 'Sunny', 'Cloudy', 'Partly Cloudy'];
    const temperatures = [25, 27, 29, 31, 33];
    
    const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const randomTemp = temperatures[Math.floor(Math.random() * temperatures.length)];
    
    // Uncomment to enable random weather updates
    // document.getElementById('weatherText').textContent = `${randomCondition} ${randomTemp}c`;
}

// Update weather every 5 minutes (optional)
// setInterval(updateWeather, 300000);


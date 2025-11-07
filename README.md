# mE n CAMPUS - Landing Page

A modern, responsive landing page for mE n CAMPUS built from Figma design specifications. This project features a beautiful login interface with dark mode support, biometric authentication options, and a fully responsive design that works seamlessly across all devices.

![Project Preview](assets/background.png)

## 🚀 Features

### Design & UI
- **Exact Figma Match**: Pixel-perfect implementation matching the original Figma design
- **Responsive Design**: Fully responsive layout that adapts to mobile, tablet, and desktop screens
- **Dark Mode Toggle**: Moon icon toggle for dark/light mode switching
- **Modern UI Elements**: Gradient backgrounds, rounded corners, and smooth animations
- **Beautiful Typography**: Multiple font families (Manrope, Caveat, Goldman, Inter, Jersey 20)

### Functionality
- **Login Form**: Complete login form with email and password validation
- **User Type Selector**: Dropdown to select between Student, Faculty, and Admin
- **Biometric Authentication**: Face ID and Biometric login options
- **Forgot Password**: Password recovery functionality
- **Real-time Date Display**: Automatically updates to show current date
- **Weather Display**: Weather information display
- **Interactive Elements**: Hover effects, click animations, and smooth transitions

### Responsive Breakpoints
- **Desktop**: > 1024px - Full side-by-side layout
- **Tablet**: ≤ 1024px - Stacked layout with adjusted spacing
- **Mobile**: ≤ 768px - Optimized single-column layout
- **Small Mobile**: ≤ 480px - Compact layout for small screens

## 📁 Project Structure

```
mnc-figmafile/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
│
└── assets/             # Images and icons
    ├── background.png  # Background image
    ├── clock.png       # Clock image
    ├── logo.svg        # mE n CAMPUS logo
    ├── moon-icon.svg   # Dark mode toggle icon
    ├── weather-icon.svg # Weather icon
    ├── face-scan-icon.svg # Face ID icon
    ├── fingerprint-icon.svg # Biometric icon
    └── down-arrow.png  # Dropdown arrow
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox, Grid, and Media Queries
- **JavaScript (Vanilla)**: Interactive functionality
- **Google Fonts**: 
  - Manrope (300, 500, 700)
  - Caveat (700)
  - Goldman (400)
  - Inter (500)
  - Jersey 20 (400)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mnc-figmafile
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **View the page**
   - Navigate to `http://localhost:8000` (or your chosen port)
   - Or directly open `index.html` in your browser

## 🎯 Usage

### Login Form
1. Select your user type (Student/Faculty/Admin) from the dropdown
2. Enter your email address
3. Enter your password
4. Click "Let's go" to submit
5. Or use "I Forget" for password recovery

### Biometric Authentication
- Click on "Face ID" or "Biometric" buttons to initiate authentication
- These buttons simulate biometric authentication (ready for Web Authentication API integration)

### Dark Mode
- Click the moon icon in the top right corner to toggle dark mode

### Registration
- Click "New user? Register Here" to navigate to registration (ready for integration)

## 📱 Responsive Design

The page is fully responsive with the following breakpoints:

- **Desktop (1440px+)**: Original two-column layout
- **Tablet (≤1024px)**: Stacked vertical layout
- **Mobile (≤768px)**: Optimized single-column with adjusted font sizes
- **Small Mobile (≤480px)**: Compact layout with touch-friendly elements

### Touch Optimizations
- Minimum 44px touch targets for all interactive elements
- Active state feedback for touch interactions
- Prevents iOS zoom on input focus (16px minimum font size)

## 🎨 Design Specifications

- **Container Width**: 1440px (max-width on larger screens)
- **Container Height**: 1024px (min-height, auto on smaller screens)
- **Border Radius**: 40px for major elements
- **Colors**: 
  - Background: Image-based with overlay
  - Primary: #D9D9D9 (light grey)
  - Text: #FFFFFF (white) and #000000 (black)
  - Gradients: Multiple gradient combinations for buttons and banners

## 🔧 Customization

### Changing Colors
Edit the color values in `styles.css`:
```css
/* Primary background */
background: #D9D9D9;

/* Text colors */
color: #FFFFFF; /* White text */
color: #000000; /* Black text */
```

### Modifying Fonts
Update the Google Fonts import in `index.html` and adjust font-family in `styles.css`.

### Adding Functionality
Extend the JavaScript in `script.js`:
- Connect to your authentication API
- Implement real biometric authentication
- Add form validation rules
- Integrate with backend services

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created for mE n CAMPUS. All rights reserved.

## 👤 Author

**MdFaizan-123**
- Email: mdfaizanali277@gmail.com
- GitHub: [@MdFaizan-123](https://github.com/MdFaizan-123)

## 🙏 Acknowledgments

- Design inspiration from Figma
- Google Fonts for typography
- All icon creators and contributors

## 📞 Support

For support, email mdfaizanali277@gmail.com or open an issue in the repository.

---

**Note**: This is a frontend implementation. Backend integration is required for full authentication functionality.


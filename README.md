# 🏮 PenguinSky

**PenguinSky** is an interactive, real-time web application built for **Diwali**, allowing users to write down their hopes, wishes, or burdens and release them as glowing, floating paper lanterns into an infinite night sky.

![PenguinSky Banner](https://img.shields.io/badge/Diwali-Festival_of_Lights-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-purple?style=for-the-badge)
![Sonner](https://img.shields.io/badge/Sonner-Dark_Toasts-black?style=for-the-badge)

---

## ✨ Features

* **🪔 Floating Wish & Burden Lanterns:** Craft custom paper lanterns with custom color palettes and personalized messages.
* **🎬 Cinematic Intro:** A festive Diwali entry screen with animated ambient lanterns and smooth text reveals powered by Framer Motion.
* **🎨 Custom Color Picker UX:** Interactive color selector featuring active visual indicator rings for enhanced user feedback.
* **🌙 Dark Night Sky Aesthetic:** Deep space radial gradients designed to make glowing lanterns and text shadows stand out with high contrast readability.
* **🔔 Stackable Dark Notifications:** Integrated with **Sonner** (`theme="dark"`) for sleek, modern feedback as lanterns are launched.
* **⚡ Fluid Animations:** Real-time vertical ascension using dynamic initial offsets (`startX`) and effortless Framer Motion lifecycles.

---

## 🛠️ Tech Stack

* **Frontend:** React, JavaScript (ES6+)
* **Animation:** Framer Motion (`framer-motion`)
* **Styling:** CSS Modules, Custom CSS Shapes (`border-radius` curves & pseudo-elements)
* **Notifications:** Sonner
* **Icons:** FontAwesome
* **Backend Ready:** Firebase JS SDK installed for live sync & persistence

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16 or higher) and `npm` installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/penguinsky.git
   cd penguinsky
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Required packages:**
   If you are setting up the project from scratch, make sure to install the following dependencies:
   ```bash
   npm install framer-motion sonner firebase @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
   ```

4. **Run the development server:**
   ```bash
   npm start
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your terminal) to view it in your browser.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Background/
│   │   └── Background.jsx      # Ambient night sky overlay
│   ├── Button/
│   │   ├── button.jsx          # Launch modal & interactive form
│   │   └── launchbutton.module.css
│   ├── Intro/
│   │   └── intro.jsx           # Cinematic intro overlay & Happy Diwali greetings
│   ├── Lantern/
│   │   ├── lantern.jsx         # Framer Motion animated lantern component
│   │   └── lantern.module.css  # Oval shape curves, glowing gradients, & wire caps
│   └── Navbar/
│       └── Navbar.jsx          # Navigation header
├── App.css
├── App.jsx                     # Root application container & entrance state
└── main.jsx
```

---

## 🪔 How It Works

1. **Enter the Sky:** Tap "Enter the Sky" on the cinematic landing screen to enter the main app view.
2. **Craft a Lantern:** Click the **Launch Lantern** button to open the modal form.
3. **Customize:** Type out your wish or burden, add an author name (or stay Anonymous), and pick your lantern color palette.
4. **Release:** Hit **Release into the Sky 🏮** to spawn a randomly positioned floating lantern that gently ascends into the night sky!

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  <i>Wishing you a bright, prosperous, and joyful Diwali! ✨🪔</i>
</p>
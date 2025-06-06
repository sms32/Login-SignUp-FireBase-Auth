# 🔐 Vite React Firebase Auth PWA

A modern Progressive Web App (PWA) built with **Vite + React + Firebase Authentication**. This project includes login, signup, and installable PWA support — perfect for scalable, fast-loading apps with authentication.

---

## 🚀 Features

- ⚡ Built with **Vite** for blazing-fast dev/build times
- 🔐 User **Authentication** using Firebase (Email/Password)
- 🌐 Fully **Installable PWA** (Add to Home Screen)
- 🔁 Auto redirect between Login / Signup / Home (auth protected routes)
- ✅ Clean and modular folder structure
- 🧼 Firebase secure and responsive auth handling

---

## 🧱 Tech Stack

| Tech         | Purpose                         |
|--------------|---------------------------------|
| React + Vite | UI and frontend framework       |
| Firebase     | Auth (Email/Password), hosting  |
| React Router | Routing and navigation          |
| Workbox      | PWA Service Worker              |

---

## 📦 Setup Instructions

### 🔧 Prerequisites
- Node.js (v16+ recommended)
- Firebase account

### 📁 Clone the repository

```bash
git clone https://github.com/sms32/Login-SignUp-FireBase-Auth.git
cd Login-SignUp-FireBase-Auth
```

### 🛠️ Install dependencies

```bash
npm install
```

---

## 🔥 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a project
3. Enable **Authentication → Sign-in method → Email/Password**
4. Go to **Project Settings → Web App → Register App**
5. Copy the Firebase config

### 🔐 Add Firebase Config

In your project, create a file:

```
src/firebase.js
```

```js
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---

## 💡 Run the App Locally

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173)

---

## 📲 Install as PWA

1. Open the app in browser
2. Click "Install" icon in the address bar or "Add to Home Screen" prompt
3. App works offline and opens in standalone mode!

---

## 🧪 Auth Flow

- ✅ Signup → redirects to Home
- ✅ Login → Authenticated users can access protected routes
- ✅ Logout → Session clears, back to login

---

## 📁 Project Structure

```
src/
├── components/
│ ├── InstallButton.jsx
│ ├── Login.jsx
│ ├── LogoutButton.jsx
│ ├── ProtectedRoute.jsx
│ ├── Signup.jsx
│ └── Spinner.jsx
├── contexts/
│ └── AuthContext.jsx
├── pages/
│ └── Home.jsx
├── style/ # Global or scoped styles (CSS/SCSS)
│ └── Login.css
├── App.jsx # Main routing and structure
├── firebase.ts # Firebase config and initialization
├── index.css # Base styles
├── InstallPrompt.jsx # PWA install banner component
└── main.jsx # ReactDOM + AuthContext + Router setup
```

---

## 🌐 Deployment (Optional)

You can deploy the app using:

### 📤 Firebase Hosting

```bash
npm run build
firebase login
firebase init hosting
firebase deploy
```

---


## 📄 License

Free to use and modify.

---

## 🤝 Contributing

Pull requests and suggestions are welcome! Please open an issue for major changes.

---

## 🧑‍💻 Author

Built with ❤️ by [Your Name](https://github.com/YOUR_USERNAME)
EOF

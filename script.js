import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHQVIX_P94pKOeE1-TsiVhCzM5pM1AaRU",
  authDomain: "breadloverswebindies.firebaseapp.com",
  databaseURL: "https://breadloverswebindies-default-rtdb.firebaseio.com",
  projectId: "breadloverswebindies",
  storageBucket: "breadloverswebindies.firebasestorage.app",
  messagingSenderId: "495702964488",
  appId: "1:495702964488:web:7ad74438e17d1ee057d4bd",
  measurementId: "G-E0GYLJ7K1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.database().ref("ranking").push({
  name: playerName,
  score: playerScore
});


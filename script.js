import  { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

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

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

//PRUEBA: enviar dato de ejemplo al ranking
push(ref(db, "ranking"), {
  name: "JugadorPrueba",
  score: Math.floor(Math.random() * 100)
});

console.log("🔥 Firebase conectado correctamente ")

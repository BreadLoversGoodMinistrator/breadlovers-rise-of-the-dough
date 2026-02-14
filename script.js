import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "breadloverswebindies.firebaseapp.com",
  databaseURL: "https://breadloverswebindies-default-rtdb.firebaseio.com",
  projectId: "breadloverswebindies",
  storageBucket: "breadloverswebindies.firebasestorage.app",
  messagingSenderId: "495702964488",
  appId: "1:495702964488:web:7ad74438e17d1ee057d4bd"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// PRUEBA
push(ref(db, "ranking"), {
  name: "JugadorPrueba",
  score: Math.floor(Math.random() * 100)
});

console.log("🔥 Firebase Database funcionando");

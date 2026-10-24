// ===== ضع هنا بيانات مشروعك من Firebase (Project settings > Your apps > Web app) =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBREPKprsMXlH_ejlXLHNLltyWanvUweMU",
  authDomain: "moda9bal.firebaseapp.com",
  projectId: "moda9bal",
  appId: "1:555350108884:web:8fd567de05cbd8cece2941"
};

export const configured = !firebaseConfig.apiKey.startsWith("PASTE");
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

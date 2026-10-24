// ===== ضع هنا بيانات مشروعك من Firebase (Project settings > Your apps > Web app) =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  appId: "PASTE_APP_ID"
};

export const configured = !firebaseConfig.apiKey.startsWith("PASTE");
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

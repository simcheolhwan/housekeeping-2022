import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"

const config = {
  projectId: "housekeeping-2022",
  apiKey: "AIzaSyCtuucJEofmjN320-Y_jiMTY3-a_w-2GhQ",
  authDomain: "housekeeping-2022.firebaseapp.com",
  databaseURL:
    "https://housekeeping-2022-default-rtdb.asia-southeast1.firebasedatabase.app",
  appId: "1:612879301974:web:989876b9024b85050a2af7",
}

const app = initializeApp(config)
export const auth = getAuth(app)
export const db = getDatabase(app)

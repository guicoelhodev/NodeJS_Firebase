import * as admin from "firebase-admin";

const firebaseConfig = require("../../accountKeyFirebase.json");

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

export const db = admin.firestore();

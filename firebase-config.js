// ============================================================
// CONFIGURATION FIREBASE — ZaidiLab Suivi en direct du préleveur
// ============================================================
// Projet Firebase "zaidilab-suivi" créé et configuré automatiquement.
// Realtime Database active (région us-central1), règles de sécurité
// publiées : seul le chemin "live" est exposé (position GPS du
// préleveur pendant sa tournée), aucune donnée patient.
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyA3oUYOtlyCKPy6HM363TfgDstJFETYeG0",
  authDomain: "zaidilab-suivi.firebaseapp.com",
  databaseURL: "https://zaidilab-suivi-default-rtdb.firebaseio.com",
  projectId: "zaidilab-suivi",
  storageBucket: "zaidilab-suivi.firebasestorage.app",
  messagingSenderId: "650940730970",
  appId: "1:650940730970:web:d34aafed754f33ee8d5263"
};

// Code PIN simple pour empêcher un inconnu d'ouvrir la page préleveur
// et d'activer le suivi. À changer ci-dessous si besoin (4 chiffres).
const PRELEVEUR_PIN = "2580";

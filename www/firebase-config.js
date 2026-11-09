// ============================================================
// CONFIGURATION FIREBASE — ZaidiLab Suivi en direct du préleveur
// ============================================================
// À REMPLIR par Dr. Adil Zaidi une seule fois, dans CE fichier
// uniquement (il est partagé par l'app patient et la page préleveur).
//
// Comment obtenir ces valeurs (gratuit, 5 minutes) :
// 1. Aller sur https://console.firebase.google.com
// 2. Se connecter avec un compte Google (ex: zaidi.adil1980@gmail.com)
// 3. "Ajouter un projet" → nommer par ex. "zaidilab-suivi" → créer
//    (désactiver Google Analytics, pas nécessaire)
// 4. Dans le projet : icône "</>" (Web) → donner un nom (ex. "app")
//    → "Enregistrer l'application" → NE PAS ajouter Firebase Hosting
// 5. Copier les valeurs affichées (apiKey, authDomain, databaseURL,
//    projectId...) et les coller ci-dessous à la place de chaque
//    "REMPLACER_..."
// 6. Dans le menu de gauche : Compilation → Realtime Database
//    → "Créer une base de données" → choisir une région proche
//    (europe-west1 par ex.) → démarrer en mode "test"
// 7. Onglet "Règles" de la Realtime Database → coller :
//      {
//        "rules": {
//          "live": {
//            ".read": true,
//            ".write": true
//          }
//        }
//      }
//    puis "Publier".
//    (Ces règles sont volontairement simples pour un démarrage
//    rapide et gratuit. Elles ne protègent pas par mot de passe —
//    seule la position GPS du préleveur pendant sa tournée est
//    exposée, aucune donnée patient. Si besoin plus tard, on pourra
//    ajouter une vraie authentification.)
// ============================================================

const firebaseConfig = {
  apiKey: "REMPLACER_API_KEY",
  authDomain: "REMPLACER_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://REMPLACER_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "REMPLACER_PROJECT_ID",
  storageBucket: "REMPLACER_PROJECT_ID.appspot.com",
  messagingSenderId: "REMPLACER_SENDER_ID",
  appId: "REMPLACER_APP_ID"
};

// Code PIN simple pour empêcher un inconnu d'ouvrir la page préleveur
// et d'activer le suivi. À changer ci-dessous si besoin (4 chiffres).
const PRELEVEUR_PIN = "2580";

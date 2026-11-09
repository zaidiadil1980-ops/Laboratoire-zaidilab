#!/usr/bin/env bash
# Copie les fichiers web statiques vers www/ (dossier source de l'app native Capacitor),
# puis synchronise le projet iOS. À lancer chaque fois qu'index.html (ou les icônes,
# manifest, service worker, politique de confidentialité) est modifié à la racine.
set -euo pipefail
cd "$(dirname "$0")"
cp index.html manifest.json sw.js icon-192.png icon-512.png politique-confidentialite.html www/
npx cap sync ios
echo "www/ et ios/App/App/public mis à jour."

# Wrapper iOS (Capacitor) — ZaidiLab

Ce dossier `ios/` est un projet Xcode généré avec Capacitor, qui encapsule l'app web
(`www/`, copie des fichiers de la racine : index.html, manifest, icônes, politique de
confidentialité) dans une app native installable depuis l'App Store.

## Ce qui est déjà fait
- Projet Xcode généré (`ios/App/App.xcodeproj`)
- Identifiant d'app : `com.zaidilab.app`
- Nom affiché : ZaidiLab
- Icône 1024×1024 posée (dérivée du logo 2026)
- Autorisation de localisation déclarée (texte affiché à l'utilisateur quand l'app
  demande sa position pour le suivi de la préleveuse)
- Script `./sync-www.sh` : à lancer après toute modification d'index.html / des icônes
  / de la politique de confidentialité, pour les recopier dans `www/` et resynchroniser
  le projet iOS (`npx cap sync ios`)

## Ce qu'il reste à faire (nécessite un Mac + Xcode — pas possible depuis cet environnement)
1. Installer Xcode (Mac App Store) et CocoaPods (`sudo gem install cocoapods`)
2. `cd ios/App && pod install`
3. Ouvrir `ios/App/App.xcworkspace` dans Xcode (⚠️ pas le .xcodeproj)
4. Dans Xcode : onglet "Signing & Capabilities" → choisir ton compte Apple Developer
   et une équipe (Team) — nécessite un compte Apple Developer (99 USD/an)
5. Brancher un iPhone ou utiliser le simulateur pour tester
6. Une fois satisfait : Product → Archive, puis envoyer vers App Store Connect
   (création de la fiche app, captures d'écran, etc.)

## Rappel Android
Le wrapper Android (TWA) est préparé séparément (`twa-manifest.json`, clé de
signature déjà générée et envoyée à Adil). Reste : configurer le DNS de
`app.zaidilab.com` puis créer le compte Google Play Developer (25 USD, paiement
unique) avant de pouvoir publier.

## v3 (Apple + suivi du préleveur)
- `v3.html` = nouvelle app (FR/ES/AR). `sync-www.sh` la copie dans `www/index.html` pour l'app native ; le `index.html` racine (site en ligne) reste inchangé.
- Suivi live : Firebase `live/preleveur`. Sur iPhone natif, le plugin `@capacitor-community/background-geolocation` garde le GPS actif écran verrouillé (Info.plist : `UIBackgroundModes=location` + `NSLocationAlwaysAndWhenInUseUsageDescription`).
- À faire sur un Mac : `npm install && ./sync-www.sh`, ouvrir `ios/App` dans Xcode, choisir l'équipe Apple Developer, Archive → App Store Connect.
- Sécurité : le PIN préleveur et les règles Firebase sont faibles côté client ; durcir les règles Firebase avant la production.

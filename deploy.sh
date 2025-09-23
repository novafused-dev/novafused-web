#!/data/data/com.termux/files/usr/bin/bash

# 📁 Variables
 REPO_URL="https://github.com/novafused-dev/NovaFused-web.git"
 BRANCH="main"
 LOG="$HOME/NovaFused-web/deploy.log"

 # 🕒 Timestamp
 echo "=== Déploiement lancé à $(date '+%Y-%m-%d %H:%M:%S') ===" >> "$LOG"

 # 👤 Configuration Git locale
 git config user.name "NovaFused"
 git config user.email "admin@novafused.dev"

 # 📍 Se placer dans le dossier du projet
 cd "$HOME/NovaFused-web" || {
   echo "Erreur : dossier NovaFused-web introuvable." >> "$LOG"
     exit 1
     }

     # 🧠 Vérifier les changements locaux
     if ! git diff --quiet || ! git diff --cached --quiet; then
       echo "Modifications locales détectées, commit automatique..." >> "$LOG"
         git add . >> "$LOG" 2>&1
           git commit -m "Auto commit before rebase" >> "$LOG" 2>&1
           fi

           # 🔄 Synchronisation avec le dépôt distant
           echo "Pull avec rebase..." >> "$LOG"
           git pull origin "$BRANCH" --rebase >> "$LOG" 2>&1

           # 🚀 Push vers GitHub
           echo "Push vers GitHub..." >> "$LOG"
           git push origin "$BRANCH" >> "$LOG" 2>&1

           # ✅ Fin
           echo "=== Déploiement terminé avec succès ===" >> "$LOG"

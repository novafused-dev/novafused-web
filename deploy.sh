REPO_URL="git@github.com:novafused-dev/NovaFused-web.git"
BRANCH="main"
COMMIT_MSG="Auto deploy: $(date '+%Y-%m-%d %H:%M:%S')"

 if [ ! -d .git ]; then
   git init
     git remote add origin $REPO_URL
     fi

     git add .
     git commit -m "$COMMIT_MSG"
     git push -u origin $BRANCH

LOG="$HOME/NovaFused-web/deploy.log"
echo "=== Déploiement lancé à $(date) ===" >> "$LOG"

REPO_URL="git@github.com:VOTRE_UTILISATEUR/NovaFused-web.git"
BRANCH="main"
COMMIT_MSG="Auto deploy: $(date '+%Y-%m-%d %H:%M:%S')"

if [ ! -d .git ]; then
	  echo "Initialisation du dépôt..." >> "$LOG"
	    git init >> "$LOG" 2>&1
	      git remote add origin $REPO_URL >> "$LOG" 2>&1
fi

echo "Ajout des fichiers..." >> "$LOG"
git add . >> "$LOG" 2>&1

echo "Commit en cours..." >> "$LOG"
git commit -m "$COMMIT_MSG" >> "$LOG" 2>&1

echo "Push vers GitHub..." >> "$LOG"
git push -u origin $BRANCH >> "$LOG" 2>&1

echo "=== Fin du déploiement ===" >> "$LOG"

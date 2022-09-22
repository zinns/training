#!/usr/bin/env node
echo "Your desired project is: $1"
target=$1
folders=$(ls ./trainings/React | wc -l)
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

if [ $target -lt $folders ];
then
cd "./trainings/React/project-${target}"
echo "${BLUE} Project will be launched in 1 second ${NC} 🚀"
sleep 1
yarn start
else
echo "${RED} There is no project with that index ${NC}"
fi

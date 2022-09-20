#!/usr/bin/env node
echo "Your desired project is: $1"
target=$1
folders=$(ls ./trainings/React | wc -l)
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

sleep 1

if [ $target -le $folders ];
	then
		echo $folders
		if [ $target -lt 10 ];
			then
				cd "./trainings/React/project-0${target}"
			else
				cd "./trainings/React/project-${target}"
		fi

		echo "${BLUE} Project will be launched in 1 second ${NC} 🚀"
		sleep 1
		yarn start
	else
		echo "Fin"
fi

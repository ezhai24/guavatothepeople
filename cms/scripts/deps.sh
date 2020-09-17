#!/usr/bin/env bash
POSTGRES_CONTAINER=guavatothepeople

announce() { >&2 echo '-------'; >&2 echo $1; >&2 echo '-------'; }

relaunch() {
  local name=$1
  local ALIVE=`docker ps -f name=$name -f status=running -q`
  local STOPPED=`docker ps -f name=$name -f status=exited -q`
  if [[ -n $STOPPED ]]; then
    announce "Restarting stopped $name container ID $STOPPED ('docker rm $STOPPED' to force a fresh db)"
    docker start $STOPPED > /dev/null 2>&1
    echo 0
  elif [[ -n $ALIVE ]]; then
    announce "$name container is running, ID $ALIVE"
    echo 0
  else
    # could not relaunch
    echo 1
  fi
}

if [[ "$(relaunch $POSTGRES_CONTAINER)" -ne "0" ]]; then
  announce "Starting new Postgres container $POSTGRES_CONTAINER"
  docker run -d --name $POSTGRES_CONTAINER -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_DB=guavatothepeople -e POSTGRES_USER=`whoami` -p 5433:5432 postgres 
fi

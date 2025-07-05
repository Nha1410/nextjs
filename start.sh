#!/bin/sh

# Usage: ./start.sh dev
#        ./start.sh prod

ENV=$1

if [ -z "$ENV" ]; then
  echo "Missing argument. Please specify 'dev' or 'prod'."
  echo "Usage: ./start.sh dev | prod"
  exit 1
fi

if [ "$ENV" = "dev" ]; then
  echo "Starting in development mode..."
  docker build --target dev -t angency-ui-dev .
  docker run -it --rm -p 3000:3000 -v $(pwd):/app -v /app/node_modules angency-ui-dev

elif [ "$ENV" = "prod" ]; then
  echo "Building for production..."
  docker build -t angency-ui .
  docker run -d --name angency-ui-prod -p 3000:3000 angency-ui

else
  echo "Unknown environment: $ENV"
  echo "Valid options are 'dev' or 'prod'."
  exit 1
fi

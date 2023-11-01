# FROM node:18-alpine
# WORKDIR /app
# COPY . .
# RUN npm install
# EXPOSE 3000
# CMD [ "node", "app.js" ]


FROM --platform=linux/amd64 node:18

# Install Dapr CLI
RUN wget -q https://raw.githubusercontent.com/dapr/cli/master/install/install.sh -O - | /bin/bash

# Install Dapr runtime
RUN dapr init --slim

# Install your app
WORKDIR /server
COPY package*.json ./
RUN ["npm", "install"]
COPY . .
EXPOSE 3500


# Run the app using Dapr
CMD ["sh", "-c", "dapr run --app-port 3000 --app-id \"express-app1\" --app-protocol \"http\" --dapr-http-port 3500 -- npm run start"]

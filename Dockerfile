FROM node:carbon

ARG GIT_SHA
ENV GIT_SHA $GIT_SHA

ARG GIT_BRANCH
ENV GIT_BRANCH $GIT_BRANCH

RUN echo "Building GIT_SHA: $GIT_SHA from GIT_BRANCH: $GIT_BRANCH"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY server.js .

EXPOSE 8080
EXPOSE 5000

CMD [ "npm", "start" ]

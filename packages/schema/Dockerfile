FROM node:8-alpine

# install npm@5.5.1
RUN yarn global add npm@5.5.1

# create app directory
WORKDIR /usr/src/app

# install node_modules utilising Docker layer caching
# http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/
COPY package.json package-lock.json ./
RUN npm install

# copy the rest of the files to the app directory
COPY . .

# compile the app code
RUN npm run build

# expose server's port
EXPOSE 4000

# start the app
CMD ["npm", "start"]

#FROM registry.access.redhat.com/ubi8/nodejs-16:latest

# Windows
#FROM mcr.microsoft.com/windows/servercore:ltsc2019

FROM node:slim
WORKDIR ./usr/local/ticket/

# Copy package.json and package-lock.json
COPY package*.json ./usr/local/ticket

# Install npm production packages 
RUN npm install --production

COPY . /usr/local/ticket/

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]

FROM node:6-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY fortigate.pem /usr/fortigate.pem
ENV NODE_EXTRA_CA_CERTS /usr/fortigate.pem

RUN npm install --production

COPY . .

CMD ["npm", "start"]
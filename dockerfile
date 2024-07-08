FROM node:22-alpine

WORKDIR /app

COPY package* .

COPY . .

RUN npm install
RUN npm install typescript -g
RUN tsc -b


EXPOSE 3000

CMD ["node", "./dist/index.js"]
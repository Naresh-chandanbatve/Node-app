FROM node:16.19.1

WORKDIR /app

COPY . .

RUN npm install express

CMD ["node", "index.js"]

EXPOSE 3000
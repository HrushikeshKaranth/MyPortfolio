FROM node:12.2.0-alpine
WORKDIR app
COPY . .
RUN npm install
RUN npm install express --save
RUN npm run build
# RUN npm run test
EXPOSE 5000
CMD ["node","index.js"]


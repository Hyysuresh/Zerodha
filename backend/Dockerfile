# base image (os)
FROM node:18-bullseye
WORKDIR /app

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# install app dependencies
COPY package*.json ./
# RUN rm -rf node_modules package-lock.json && \
#     npm cache clean --force

RUN npm install react-router-dom --save
# copy app files
COPY . .

# FROM node:18-alpine

# WORKDIR /app

# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/index.js ./index.js
# COPY --from=builder /app/model/ ./model/

# expose port
EXPOSE 5000
# start app
CMD ["npm", "start"]
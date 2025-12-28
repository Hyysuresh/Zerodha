FROM node:18-alpine 
WORKDIR /app
# install app dependencies
COPY package.json ./
# RUN rm -rf node_modules package-lock.json && \
#     npm cache clean --force

RUN  npm install react-router-dom --save

    
# copy app files
COPY . .
RUN npm run build

# FROM node:18-alpine 

# WORKDIR /app
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/src/ ./src/
# COPY --from=builder /app/src/components/ ./src/components/
# COPY --from=builder /app/public/ ./public/
# COPY --from=builder /app/package.json ./package.json

# expose port
EXPOSE 3000
# start app
CMD ["npm", "start"]
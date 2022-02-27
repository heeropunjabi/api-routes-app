# Get NPM packages
FROM node:14-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . ./         
RUN yarn install
RUN yarn build
ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

RUN chown -R nextjs:nodejs /app/.next

USER nextjs
EXPOSE 3000
CMD ["yarn","start"]

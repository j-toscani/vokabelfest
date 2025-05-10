FROM node:lts-alpine AS build
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM node:lts-alpine AS runtime
WORKDIR /app

COPY --from=build /app /app

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs
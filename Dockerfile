FROM node:16-alpine
WORKDIR /website

COPY postcss.config.js .
COPY tsconfig.vite-config.json .
COPY tsconfig.json .
COPY index.html .
COPY tailwind.config.js .
COPY vite.config.ts .
COPY package.json .
COPY yarn.lock .

RUN yarn
COPY prerender.js .
COPY server.js .
COPY public public
COPY src src
COPY \.env .
RUN yarn generate

COPY dist/static dist/static

CMD yarn serve

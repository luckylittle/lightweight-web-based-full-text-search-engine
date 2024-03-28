MAINTAINER lmaly@redhat.com
FROM registry.access.redhat.com/ubi8/nodejs-18@sha256:cf3b944a5fffa2da8e133583b406004c583dd6e17dfea24825cd3f15f6335ac2
USER 1001
WORKDIR /opt/app-root/src/
COPY index.html /opt/app-root/src/
COPY server.js /opt/app-root/src/
COPY package.json /opt/app-root/src/
COPY data.txt /opt/app-root/src/
RUN npm install --no-package-lock
EXPOSE 3000
CMD ["node", "/opt/app-root/src/server.js"]

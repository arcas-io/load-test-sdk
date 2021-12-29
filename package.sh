#!/bin/bash

RELEASE="release"
PROTO_PATH="proto"

# yarn autogen
# yarn build
rm -rf ${RELEASE}
mkdir ${RELEASE} && mkdir ${RELEASE}/bin
# yarn download && cp bin/arcas ${RELEASE}/bin/arcas
cp -R build/. ${RELEASE}
cp -R package.json ${RELEASE}/package.json
cp -R downloader.js ${RELEASE}/downloader.js
cp -R REVISION ${RELEASE}/REVISION
cp -R ${PROTO_PATH} ${RELEASE}/proto

PACKAGE_VERSION=$(node -pe "require('./package.json').version")
FILE_NAME="arcas-sdk-${PACKAGE_VERSION}.tgz"

tar -czf ${FILE_NAME} -C ${RELEASE} .
rm -rf ${RELEASE}/*
mv ${FILE_NAME} ${RELEASE}/${FILE_NAME}

#!/bin/bash

RELEASE="release"
PROTO_PATH="../../rust/server/proto"
PACKAGE_VERSION=$(node -pe "require('./package.json').version")
TAG=${1:-$PACKAGE_VERSION}
FILE_NAME="arcas-sdk-${TAG}.tgz"

yarn autogen
yarn build
rm -rf ${RELEASE}
mkdir ${RELEASE} && mkdir ${RELEASE}/bin
cp -R build/. ${RELEASE}
cp -R package.json ${RELEASE}/package.json
cp -R downloader.js ${RELEASE}/downloader.js
cp -R REVISION ${RELEASE}/REVISION
cp -R ${PROTO_PATH} ${RELEASE}/proto


tar -czf ${FILE_NAME} -C ${RELEASE} .
rm -rf ${RELEASE}/*
mv ${FILE_NAME} ${RELEASE}/${FILE_NAME}

echo ${FILE_NAME}

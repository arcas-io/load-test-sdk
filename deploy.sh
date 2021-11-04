#!/bin/bash

repo=../../../arcas-test-script-example

yarn build
cp -R build ${repo}
cp examples/index.mjs ${repo}/index.mjs
cp ../../rust/server/proto/webrtc.proto ${repo}/build/proto/webrtc.proto
sed -i 's/\.\/\.\.\/build/\.\/build/g' ${repo}/index.mjs
sed -i 's/\.\/\.\.\/\.\.\/rust\/server\/proto\/webrtc.proto/\.\/build\/proto\/webrtc.proto/g' ${repo}/build/src/client.js

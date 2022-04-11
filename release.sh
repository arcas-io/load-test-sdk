#! /bin/bash -ex

bucket=libwebrtc-dev
git_sha1=$(git rev-parse --short HEAD)
tag=${1:-$git_sha1}

# update the value in js/sdk/REVISION file
echo $tag > REVISION

# build the package
file=$(./package.sh $tag)
echo "file=${file}"

# upload to the sdk bucket
gsutil cp release/$file gs://$bucket/sdk/$file

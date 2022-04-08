# Arcas Load Test for Gather.town

The Arcas Load Test validates producer and conumer creation and the ability of the SFU to sustain video traffic over a period of time.

## Install Dependencies
A package.json file is included in the package.  Simply run `yarn` to install all dependencies:

```shell
yarn
```

## Start the Test Server
In a separate terminal in the same directory, start the server:

```shell
yarn server
```
## Start the SFU
Follow instructions for starting a MediaSoup SFU: https://mediasoup.org/

## Run the test
```shell
yarn start
```

## Configuration Options
See https://arcas.readme.io/docs
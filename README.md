# Node WebRTC SDK

## Installation
```shell
yarn
```

## Generate TS Type Definitions for Proto
For type safety, TS Type Definitions can be auto-generated using a binary in node_modules:

```shell
yarn autogen
```
This will create and populate the `/proto` directory.
Even though this is auto-generated, it's OK to push it to the repo.

## gRPC Server
A gRPC server will need to be running to run tests.
This project currently assumes the server is running on `[::]:50051`.

## TDD
To run all tests while developing:
```shell
yarn test:watch
```
## Example
To run the example script, which matches the API in the user story:

```shell
yarn build && node examples/index.mjs
```
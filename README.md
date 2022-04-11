# Arcas Load Test Node SDK
The Arcas Load Test validates producer and conumer creation and the ability of the SFU to sustain video traffic over a period of time.

## Requirements
* Node 14

## Load Testing

### Create Project
```
mkdir -p arcas-load-test
cd arcas-load-test
yarn init
```

### Configure Dependencies
Open package.json and add to "dependencies"
```json
"@arcas/sdk": "https://storage.googleapis.com/libwebrtc-dev/sdk/arcas-sdk-0.1.2.tgz"
```

Now install the dependencies:
```shell
yarn
```

### Configuration
Configuration should be done via ENV vars to eliminate the need to edit any files.

| Variable              | Data Type | Default                 | Detail                                                                                                                                                                                        |
| --------------------- | --------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NUM_CONNECTIONS       | Integer   | 20                      | The total number of producers to create                                                                                                                                                       |
| SOAK_TIME_MS          | Integer   | 60000                   | Once `NUM_PEER_GROUPS` is ramped up, the number of milliseconds to hold the test for                                                                                                          |
| STATS_INCREMENTS_S    | Integer   | 1                       | The seconds to wait to poll the server for failure criteria                                                                                                                                   |
| FAILURE_PCT           | Float     | 0.05                    | The percentage (in decimal form) of stale peer connections allowed. For example, `0.05` fails a test when 5% of the peer connections are stale for FAILURE_PERSISTENCE_S consecutive seconds. |
| FAILURE_PERSISTENCE_S | Integer   | 2                       | Consecutive seconds of stale peer connections allowed                                                                                                                                         |
| SOCKET_URI            | String    | 'http://127.0.0.1:5000' | The IP/Port of the signaling server (SFU)                                                                                                                                                     |
| SERVERS               | String    | ['[::]:50051']          | The list of Arcas Load Test servers                                                                                                                                                           |
| LOG_LEVEL             | String    | 'ERROR'                 | The server log level for this session.  Options include: 'NONE', 'INFO', 'WARN', 'ERROR', 'VERBOSE'                                                                                           |
#### Definitions
* **Stale Connection:** When a producer doesn't send bytes within 1 second
* **Failure Criteria:** When the configured FAILURE_PCT of Stale Connections persists for FAILURE_PERSISTENCE_S seconds

### Start the Arcas Server
```shell
yarn server
```

Note: your operating system may ask for permissions.  After accepting them, restart the Arcas Server.

### Start the SFU
Start your SFU before running the test.

### Run the Test
```shell
yarn start
```

## Developing


### Installation
```shell
yarn
```

### Generate TS Type Definitions for Proto
For type safety, TS Type Definitions can be auto-generated using a binary in node_modules:

```shell
yarn autogen
```
This will create and populate the `/proto` directory.
Even though this is auto-generated, it's OK to push it to the repo.

### gRPC Server
A gRPC server will need to be running to run tests.
This project currently assumes the server is running on `[::]:50051`.

### TDD
To test all tests while developing:
```shell
yarn test:watch
```

To test a single test while developing:
```shell
yarn test:watch -t setRemoteDescription
```
### Example
To run the example script, first start the Load Test Server and the SFU.  Then:

```shell
yarn build && node examples/mediasoup/index.mjs
```

### Debugging MediaSoup

```
DEBUG="mediasoup*" node examples/index.mjs
```

### Deploy to the arcas-test-script-example repo
To push new code to the arcas-test-script-example repo:
```shell
./deploy.sh
```

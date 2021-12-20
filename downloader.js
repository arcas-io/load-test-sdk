const fs = require('fs');
const os = require('os');
const zlib = require('zlib');
const Downloader = require('nodejs-file-downloader');
const { pipeline } = require('stream');

const BASE_URL = 'https://storage.googleapis.com/libwebrtc-dev/arcas-load-server/';
const DEST_PATH = __dirname + '/node_modules/.bin/';
const REVISION = fs.readFileSync('./REVISION', 'utf8').trim();

fs.mkdirSync(DEST_PATH, { recursive: true });

let arch;
switch (os.arch()) {
  case 'x64':
    arch = 'x86_64';
    break;
  default:
    arch = os.arch();
}

const cliProgress = require('cli-progress');

// create new progress bar
// create a new progress bar instance and use shades_classic theme
const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const osStr = os.platform();
const downloadStr = `${REVISION}-${osStr}-${arch}`;

const download = new Downloader({
  url: `${BASE_URL}${downloadStr}`,
  directory: DEST_PATH,
  maxAttempts: 3,
  fileName: 'arcas',
  cloneFiles: false,
  shouldStop: function (error) {
    //A request that results in a status code of 400 and above, will throw an Error, that contains a custom property

    //"statusCode".
    //Note that an error that is thrown during the stream itself(after a valid http response was already received. It's quite rare, but happens), will not have a "statusCode" property.
    if (e.statusCode && e.statusCode === 404) {
      return true; //If you return true, the repetition will not happen. Returning anything else, including undefined, will let the downloader know that you want to continue repeating.
    }
  },
  onProgress: function (percentage, chunk, remainingSize) {
    bar.update(parseFloat(percentage));
  },
})


async function main() {
  try {
    console.log('Downloading arcas-load-server...');
    console.log();
    bar.start(100, 0);
    await download.download();
    fs.chmodSync(`${DEST_PATH}/arcas`, 0755);

  } catch (e) {
    console.error();
    console.error(
      `Failed to download Arcas load server from ${BASE_URL}${downloadStr} . Please report this as an issue/bug to the Aracs team.`

    )
    console.error(e);
  } finally {
    bar.stop();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
})

import { fork } from 'child_process';
import { createPathFromUrl } from '../utils.js';

const args = process.argv.slice(2);

const spawnChildProcess = async (args) => {
    const scriptFile = createPathFromUrl(import.meta.url, 'files/script.js');

    fork(scriptFile, args);
};

spawnChildProcess(args);

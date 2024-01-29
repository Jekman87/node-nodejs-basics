import { createWriteStream } from 'fs';
import { createPathFromUrl } from '../utils.js';

const write = async () => {
    const fileToWrite = createPathFromUrl(
        import.meta.url,
        'files/fileToWrite.txt'
    );
    const writeStream = createWriteStream(fileToWrite);

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk.toString());
    });
};

await write();

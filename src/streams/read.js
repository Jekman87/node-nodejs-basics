import { createReadStream } from 'fs';
import { createPathFromUrl } from '../utils.js';

const read = async () => {
    const fileForRead = createPathFromUrl(
        import.meta.url,
        'files/fileToRead.txt'
    );

    const readStream = createReadStream(fileForRead);
    let res = '';

    readStream.on('data', (chunk) => {
        res += chunk;
    });

    readStream.on('end', () => {
        process.stdout.write(res);
        console.log();
    });
};

await read();

import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import zlib from 'zlib';
import { createPathFromUrl } from '../utils.js';

const decompress = async () => {
    const compressedFile = createPathFromUrl(
        import.meta.url,
        'files/archive.gz'
    );
    const decompressedFile = createPathFromUrl(
        import.meta.url,
        'files/fileToCompress.txt'
    );

    pipeline(
        createReadStream(compressedFile),
        zlib.createGunzip(),
        createWriteStream(decompressedFile),
        (err) => {
            if (err) {
                console.error('Decompression failed!', err);
            } else {
                console.log('Decompression succeeded!');
            }
        }
    );
};

await decompress();

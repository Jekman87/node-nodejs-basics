import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import zlib from 'zlib';
import { createPathFromUrl } from '../utils.js';

const compress = async () => {
    const fileForCompress = createPathFromUrl(
        import.meta.url,
        'files/fileToCompress.txt'
    );
    const compressedFile = createPathFromUrl(
        import.meta.url,
        'files/archive.gz'
    );

    pipeline(
        createReadStream(fileForCompress),
        zlib.createGzip(),
        createWriteStream(compressedFile),
        (err) => {
            if (err) {
                console.error('Compression failed!', err);
            } else {
                console.log('Compression succeeded!');
            }
        }
    );
};

await compress();

import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { createPathFromUrl } from '../utils.js';

const calculateHash = async () => {
    const fileForHash = createPathFromUrl(
        import.meta.url,
        'files/fileToCalculateHashFor.txt'
    );
    const hash = createHash('sha256');

    const stream = createReadStream(fileForHash);

    stream.on('readable', () => {
        const data = stream.read();

        if (data) {
            hash.update(data);
        } else {
            console.log(hash.digest('hex'));
        }
    });
};

await calculateHash();

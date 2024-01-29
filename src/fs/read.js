import { readFile } from 'fs/promises';
import { createPathFromUrl } from '../utils.js';

const read = async () => {
    const filePath = createPathFromUrl(import.meta.url, 'files/fileToRead.txt');

    try {
        const file = await readFile(filePath);
        console.log(file.toString());
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();

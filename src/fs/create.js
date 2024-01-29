import { writeFile } from 'fs/promises';
import { createPathFromUrl } from '../utils.js';

const create = async () => {
    const newFilePath = createPathFromUrl(import.meta.url, 'files/fresh.txt');

    try {
        await writeFile(newFilePath, 'I am fresh and young', { flag: 'wx' });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();

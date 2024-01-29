import { rm } from 'fs/promises';
import { createPathFromUrl } from '../utils.js';

const remove = async () => {
    const filePath = createPathFromUrl(import.meta.url, 'files/fileToRemove.txt');

    try {
        await rm(filePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();

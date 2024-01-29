import { readdir } from "fs/promises";
import { createPathFromUrl } from '../utils.js';

const list = async () => {
    const dirPath = createPathFromUrl(import.meta.url, 'files');

    try {
        const files = await readdir(dirPath)
        console.log(files);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();
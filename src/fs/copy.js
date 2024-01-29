import { mkdir, readdir, copyFile, access } from 'fs/promises';
import { join } from 'path';
import { createPathFromUrl } from '../utils.js';

const copy = async () => {
    const filesDirPath = createPathFromUrl(import.meta.url, 'files');
    const filesCopyDirPath = createPathFromUrl(import.meta.url, 'files_copy');

    try {
        await access(filesDirPath);
        await mkdir(filesCopyDirPath);
        await copyFiles(filesDirPath, filesCopyDirPath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

const copyFiles = async (fromPath, toPath) => {
    try {
        const allFiles = await readdir(fromPath);
        allFiles.forEach((file) => {
            const fromFilePath = join(fromPath, `${file}`);
            const toFilePath = join(toPath, `${file}`);
            copyFile(fromFilePath, toFilePath);
        });
    } catch (err) {
        throw new Error();
    }
};

await copy();

import { access, constants, rename as fsRename } from 'fs/promises';
import { createPathFromUrl } from '../utils.js';

const rename = async () => {
    const wrongFilePath = createPathFromUrl(
        import.meta.url,
        'files/wrongFilename.txt'
    );
    const properFilePath = createPathFromUrl(
        import.meta.url,
        'files/properFilename.md'
    );

    const isWrongFileExists = await isFileExists(wrongFilePath);
    const isProperFileExists = await isFileExists(properFilePath);

    if (!isWrongFileExists || isProperFileExists) {
        throw new Error('FS operation failed');
    }

    await fsRename(wrongFilePath, properFilePath);
};

const isFileExists = async (path) => {
    try {
        await access(path, constants.F_OK);

        return true;
    } catch (err) {
        return false;
    }
};

await rename();

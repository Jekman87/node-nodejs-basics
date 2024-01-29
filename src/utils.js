import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const createPathFromUrl = (url, path) => {
    const currentFilePath = fileURLToPath(url);
    const currentDirPath = dirname(currentFilePath);
    const newFilePath = join(currentDirPath, path);

    return newFilePath;
};

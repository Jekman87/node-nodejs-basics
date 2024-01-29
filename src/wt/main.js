import { Worker, isMainThread } from 'worker_threads';
import os from 'os';
import { createPathFromUrl } from '../utils.js';

const performCalculations = async () => {
    const workerFile = createPathFromUrl(import.meta.url, 'worker.js');

    const coreNumber = os.cpus().length;
    const dataForWorkers = [...new Array(coreNumber)].map((_, i) => i + 10);

    if (isMainThread) {
        const arr = await Promise.all(
            dataForWorkers.map((data) => {
                return new Promise((res) => {
                    const worker = new Worker(workerFile, {
                        workerData: data,
                    });

                    worker.on('message', (data) =>
                        res({
                            status: 'resolve',
                            data,
                        })
                    );

                    worker.on('error', () =>
                        res({
                            status: 'error',
                            data: null,
                        })
                    );
                });
            })
        );

        console.log(arr);
    }
};

await performCalculations();

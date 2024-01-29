import { Transform  } from 'stream';
const { stdin, stdout } = process;

const transform = async () => {
    const reverseStream = new Transform({
        transform (data, encoding, callback) {
            const reversedData = data.toString().trim().split('').reverse().join('') + '\n';
            this.push(reversedData);
            callback();
        }
    });

    stdin.pipe(reverseStream).pipe(stdout);
};

await transform();

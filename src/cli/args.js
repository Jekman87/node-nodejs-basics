import { argv } from 'process';

const parseArgs = () => {
    const args = argv.slice(2);
    const res = [];

    args.forEach((arg, i) => {
        if (arg.startsWith('--')) {
            res.push(`${arg.slice(2)} is ${args[i + 1]}`);
        }
    });

    console.log(res.join(', '));
};

parseArgs();

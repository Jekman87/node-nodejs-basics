import { env } from 'process';

const parseEnv = () => {
    const envNames = Object.keys(env);

    const RSSNames = envNames.filter((name) => name.startsWith('RSS_'));

    let res = '';
    RSSNames.forEach((name) => {
        res += `${name}=${env[name]}; `;
    });

    console.log(res);
};

parseEnv();

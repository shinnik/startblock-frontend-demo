const ip = 'localhost';
const upstreamAccount = '0xCB32de2b9d1f1Efb4abDE7d24131eBeD6c649ad7';
// const ip = '192.168.0.39';
const port = 8888;
// const uri = 'api';

// const port = undefined;
const uri = undefined;

export const BACKEND_SERVER_USERDATA = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}/userdata`;
export const BACKEND_SERVER_SETTINGS = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}/settingsdata`;
export const BACKEND_SERVER = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}`;


const ip = 'localhost';
const upstreamAccount = '0xaa3a672cfb69796e5b61ac63d31dd01e614a3d3c';
// const ip = '192.168.0.39';
const port = 8888;
// const uri = 'api';

// const port = undefined;
const uri = undefined;

export const BACKEND_SERVER_USERDATA = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}/userdata`;
export const BACKEND_SERVER_SETTINGS = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}/settingsdata`;
export const BACKEND_SERVER = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}`;

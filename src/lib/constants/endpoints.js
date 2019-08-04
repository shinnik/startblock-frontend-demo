const ip = 'localhost';
const upstreamAccount = '0x5fc4558c67bf6886ee453aec35af7ea8021eab7a';
// const ip = '192.168.0.39';
const port = 8888;
// const uri = 'api';

// const port = undefined;
const uri = undefined;

export const BACKEND_SERVER_USERDATA = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}/userdata`;
export const BACKEND_SERVER_SETTINGS = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}/settingsdata`;
export const BACKEND_SERVER = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}`;


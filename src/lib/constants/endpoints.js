const ip = 'localhost';
// const upstreamAccount = '0x5fc4558c67bf6886ee453aec35af7ea8021eab7a'; //2
const upstreamAccount = '0xaa3a672cfb69796e5b61ac63d31dd01e614a3d3c'; //1
// const upstreamAccount = '0xD1A513c48b7f370c1e2eDE1F7673D1819ed00FD2'; //3
// const upstreamAccount = '0x44ac47379573F997098d02714D652abc28629c44'; //4
// const ip = '192.168.0.39';
const port = 8881;
// const uri = 'api';

// const port = undefined;
const uri = undefined;

export const BACKEND_SERVER_USERDATA = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}/userdata`;
export const BACKEND_SERVER_USERFULLDATA = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}/userfulldata`;
export const BACKEND_SERVER_SETTINGS = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}/settingsdata`;
export const BACKEND_SERVER = `http://${ip}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${upstreamAccount}`;

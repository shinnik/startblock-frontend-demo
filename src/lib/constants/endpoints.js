const serverName = '34.65.103.172';
// const ethAddress = '0x5fc4558c67bf6886ee453aec35af7ea8021eab7a'; //2
const ethAddress = '0x512B41D07C70087A1BaAC4d1A49D55B051B05f4a'; //1
// const ethAddress = '0xD1A513c48b7f370c1e2eDE1F7673D1819ed00FD2'; //3
// const ethAddress = '0x44ac47379573F997098d02714D652abc28629c44'; //4
// const serverName = '192.168.0.39';
const port = 8888;
// const uri = 'api';
// const port = undefined;
const uri = null;

export const BACKEND_SERVER_USERDATA = `http://${serverName}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${ethAddress}/userdata`;
export const BACKEND_SERVER_USERFULLDATA = `http://${serverName}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${ethAddress}/userfulldata`;
export const BACKEND_SERVER_SETTINGS = `http://${serverName}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${ethAddress}/settingsdata`;
export const BACKEND_SERVER = `http://${serverName}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${ethAddress}`;

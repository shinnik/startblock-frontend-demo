const serverName = 'idea.test.onder.tech';
// const ethAddress = '0x5fc4558c67bf6886ee453aec35af7ea8021eab7a'; //2
const ethAddress = '0xaa3a672cfb69796e5b61ac63d31dd01e614a3d3c'; //1
// const ethAddress = '0xD1A513c48b7f370c1e2eDE1F7673D1819ed00FD2'; //3
// const ethAddress = '0x44ac47379573F997098d02714D652abc28629c44'; //4
// const serverName = '192.168.0.39';
const port = null;
// const uri = 'api';
// const port = undefined;
const uri = null;

export const BACKEND_SERVER_USERDATA = `http://${serverName}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${ethAddress}/userdata`;
export const BACKEND_SERVER_USERFULLDATA = `http://${serverName}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${ethAddress}/userfulldata`;
export const BACKEND_SERVER_SETTINGS = `http://${serverName}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${ethAddress}/settingsdata`;
export const BACKEND_SERVER = `http://${serverName}${port ? `:${port}` : ''}${uri ? `/${uri}` : ''}/meters/${ethAddress}`;

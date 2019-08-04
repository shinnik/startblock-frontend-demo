const ip = 'localhost';
const port = 8888;
const upstreamAccount = '0xCB32de2b9d1f1Efb4abDE7d24131eBeD6c649ad7';

export const BACKEND_SERVER_USERDATA = `http://${ip}:${port}/meters/${upstreamAccount}/userdata`;
export const BACKEND_SERVER_SETTINGS = `http://${ip}:${port}/meters/${upstreamAccount}/settingsdata`;
export const BACKEND_SERVER = `http://${ip}:${port}/meters/${upstreamAccount}`;

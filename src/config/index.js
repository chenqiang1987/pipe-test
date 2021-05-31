export default {
    baseURL: process.env.NODE_ENV === 'development'? 'http://192.168.1.123:803':'http://192.168.1.123:803',
    wsUrl: process.env.NODE_ENV === 'development'? 'ws://192.168.1.123:803/webSocket':'ws://192.168.1.123:803/webSocket',
    chatWsUrl: process.env.NODE_ENV === 'development' ? 'ws://192.168.1.46:3000' : 'ws://192.168.1.46:3000'
}

console.log(process.env)
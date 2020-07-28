//pattern Constructor
//ES5
function Server(name, ip) {
    this.name = name
    this.ip = ip
}

Server.prototype.getUrl = function() {
    return `https://${this.ip}:80`
}

const aws = new Server('AWS German', '121.21.21.34')
console.log(aws.getUrl());

//ES6
class ServerNew {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }
    getUrl() {
        return `https://${this.ip}:80`
    }
}
const srv = new ServerNew('AWS USA', '164.88.45.98')
console.log(srv.getUrl());
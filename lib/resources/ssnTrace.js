var SsnTrace;
var request = require('reqwest');

function SsnTrace(config) {
    this.uri = config.endpoint + 'ssn_traces';
    this.apiKey = config.apiKey;
    return this;
}

SsnTrace.prototype.retrieve = function (id, done) {
    request(
        {
            url: this.uri + '/' + id,
            auth: {
                user: this.apiKey,
                password: ''
            },
            json: true,
            method: 'GET'
        }, function (e, r, body) {
            if (body.message) {
                done(body.message, body);
            } else {
                done(e, body);
            }
        });
    return true;
};

module.exports = SsnTrace;

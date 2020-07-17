var NationalCriminalSearch;
var request = require('reqwest');

function NationalCriminalSearch(config) {
    this.uri = config.endpoint + 'national_criminal_searches';
    this.apiKey = config.apiKey;
    return this;
}

NationalCriminalSearch.prototype.retrieve = function (id, done) {
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

module.exports = NationalCriminalSearch;

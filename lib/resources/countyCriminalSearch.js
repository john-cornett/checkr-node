var CountyCriminalSearch;
var request = require('reqwest');

function CountyCriminalSearch(config) {
    this.uri = config.endpoint + 'county_criminal_searches';
    this.apiKey = config.apiKey;
    return this;
}

CountyCriminalSearch.prototype.retrieve = function (id, done) {
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

module.exports = CountyCriminalSearch;

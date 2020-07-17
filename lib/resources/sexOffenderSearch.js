var SexOffenderSearch;
var request = require('reqwest');

function SexOffenderSearch(config) {
    this.uri = config.endpoint + 'sex_offender_searches';
    this.apiKey = config.apiKey;
    return this;
}

SexOffenderSearch.prototype.retrieve = function (id, done) {
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

module.exports = SexOffenderSearch;

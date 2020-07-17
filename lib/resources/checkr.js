'use strict';

var Candidates = require('./Candidates');
var Invitations = require('./Invitations');
var Reports = require('./Reports');
var SsnTrace = require('./SsnTrace');
var SexOffenderSearch = require('./SexOffenderSearch');
var TerroristWatchlistSearch = require('./TerroristWatchlistSearch');
var NationalCriminalSearch = require('./NationalCriminalSearch');
var CountyCriminalSearch = require('./CountyCriminalSearch');
var MotorVehicleReport = require('./MotorVehicleReport');

var Checkr = function (apiKey) {
    if (this === undefined) {
        return new Checkr(apiKey);
    }
    if (typeof apiKey === 'string') {
        this.endpoint = 'https://api.checkr.io/v1/';
        this.apiKey = apiKey;
    } else {
        throw new Error('API Key must be set');
    }
    this.candidates = new Candidates(this);
    this.invitations = new Invitations(this);
    this.reports = new Reports(this);
    this.SsnTrace = new SsnTrace(this);
    this.SexOffenderSearch = new SexOffenderSearch(this);
    this.terroristWatchlistSearch = new TerroristWatchlistSearch(this);
    this.NationalCriminalSearch = new NationalCriminalSearch(this);
    this.CountyCriminalSearch = new CountyCriminalSearch(this);
    this.MotorVehicleReport = new MotorVehicleReport(this);
};

module.exports = Checkr;

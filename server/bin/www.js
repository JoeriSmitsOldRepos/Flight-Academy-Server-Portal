/**
 * Created by Joeri Smits on 31/12/2014.
 */
/*jslint node: true, devel:true */
"use strict";

var http = require('../../app'); //Require our app

var server = http.listen(process.env.PORT || 80, function () {
    console.log('Express server listening on port ' + server.address().port);
});
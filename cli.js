#!/usr/bin/env node

var got = require("got");

if (process.argv.length <= 2) {
	return console.log("usage:", "gi <type>");
}

got("http://www.gitignore.io/api/" + process.argv[2], function(err, data, res) {
	if(err) {
		throw err;
	}

	console.log(data);
});

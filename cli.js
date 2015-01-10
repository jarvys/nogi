#!/usr/bin/env node

var got = require("got");

if (process.argv.length <= 2) {
	return console.log("usage:", "nogi <type>");
}

got("http://gitignore.jarvys.me/api/" + process.argv[2], function(err, data, res) {
	if(err) {
		throw err;
	}

	console.log(data);
});

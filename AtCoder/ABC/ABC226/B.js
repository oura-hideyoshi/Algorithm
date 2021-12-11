"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("B.txt", "utf8").trim().split('\n');

var streams = []; function print(s) { streams.push(s); }


function main() {
    // TODO
    const s = new Set(input);
    return (s.size - 1);
}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));
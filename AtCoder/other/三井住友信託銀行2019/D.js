"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("input.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

const zeroPadding = (NUM, LEN) => (Array(LEN).join('0') + NUM).slice(-LEN);

function main() {
    const [N] = getLine();
    let [S] = getLine(1);
    let ans = 0;

    for (let key = 0; key < 1000; key++) {
        let keyS = zeroPadding(key, 3).split("");

        let idxL = S.indexOf(keyS[0]);
        if (idxL == -1)
            continue;
        let idxM = S.slice(idxL + 1).indexOf(keyS[1]);
        if (idxM == -1)
            continue;
        idxM += 1 + idxL;
        let idxR = S.slice(idxM + 1).indexOf(keyS[2]);
        if (idxR == -1)
            continue;
        ans++;
    }
    return ans;

}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));
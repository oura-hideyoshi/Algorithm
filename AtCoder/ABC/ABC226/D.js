"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("D.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split().map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

const gcd = (x, y) => {
    return (x % y) ? gcd(y, x % y) : y;
}


function main() {
    const N = getLine()[0];
    let cities = getLines(N);
    let magic = new Set();

    // x座標昇順でソート x座標が同じ場合はy座標でソート
    cities.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
    for (let here = 0; here < N - 1; here++) {
        const currentCity = cities[here];
        for (let next = here + 1; next < N; next++) {
            const nextCity = cities[next];
            let newMagic = [nextCity[0] - currentCity[0], nextCity[1] - currentCity[1]];
            let val = gcd(newMagic[0], newMagic[1]);
            if (val == 0) {
                newMagic[0] == 0
                    ?
                    newMagic[1] = 1
                    :
                    newMagic[0] = 1
            }
            else {
                newMagic = newMagic.map(e => e / val);
            }
            magic.add("" + newMagic);
        }
    }
    return magic.size * 2;

}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));
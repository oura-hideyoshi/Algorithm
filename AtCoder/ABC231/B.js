'use strict';
var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }



function main() {
    const [N] = getLine();
    const votes = getLines(N, true);
    let dic = {};

    for (const vote of votes) {
        dic[vote] = 1 + (dic[vote] || 0);
    }

    let ans = null;
    let max = 0;
    for (const cand in dic) {
        if(dic[cand] > max){
            max = dic[cand];
            ans = cand;
        }
    }
    return ans;

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));
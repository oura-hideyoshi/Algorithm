'use strict';
// var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
var input = require('fs').readFileSync('../input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
function xArray(v) { var a = arguments, l = a.length, r = "Array(a[" + --l + "]).fill().map(x=>{return " + v + ";})"; while (--l) r = "Array(a[" + l + "]).fill().map(x=>" + r + ")"; return eval(r); }
var streams = []; function print(s) { streams.push(s); }



function main() {
    const [N, K] = getLine();
    const [S] = getLine(true);
    const ACode = "a".charCodeAt();
    let preprocess = xArray(Infinity, 26, S.length);

    // 貪欲的に決定する
    // 前処理をすることで計算量を減らす
    // pre[i][j] : i文字
    S.split('').reverse().forEach((char, idx) => {
        if (N - idx - 1 < N - 1)
            for (let cidx = 0; cidx < 26; cidx++) {
                preprocess[cidx][N - idx - 1] = preprocess[cidx][N - idx]
            }
        preprocess[char.charCodeAt() - ACode][N - idx - 1] = N - idx - 1;
    })

    let k = 0;
    let leftLen = -1;
    let ans = "";
    while (k < K) {
        for (let charIdx = 0; charIdx < 26; charIdx++) {
            if (preprocess[charIdx][leftLen + 1] < N - (K - ans.length - 1)) {
                ans += String.fromCharCode(charIdx + ACode);
                leftLen = preprocess[charIdx][leftLen + 1];
            }
        }
    }
};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));
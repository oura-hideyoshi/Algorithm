'use strict';
// var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
var input = require('fs').readFileSync('input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

/**
 * 
 * @param {string} cidr CIDRのネットワークアドレスの文字列
 * @param {string} ipaddr IPアドレスの文字列
 * @returns 
 */
const solverQ1 = (cidr, ipaddr) => {
    // 左に0を埋める
    const zeroPadding = (NUM, LEN) => (Array(LEN).join('0') + NUM).slice(-LEN);

    let netAdrr = cidr.split("/")[0];
    let maskDigit = cidr.split("/")[1];
    maskDigit = parseInt(maskDigit);

    // 二進数に変換(str) : ex) "11000101000110011100001000011110"
    netAdrr = netAdrr.split(".").map(e => zeroPadding(parseInt(e).toString(2), 8)).join("");
    ipaddr = ipaddr.split(".").map(e => zeroPadding(parseInt(e).toString(2), 8)).join("");

    // IPアドレスの最小値・最大値を求める
    const minAdrr = netAdrr.slice(0, maskDigit) + "0".repeat(maskDigit);
    const maxAdrr = netAdrr.slice(0, maskDigit) + "1".repeat(maskDigit);

    // 文字列の辞書順で判定
    if (minAdrr <= ipaddr && ipaddr <= maxAdrr)
        return true;
    else
        return false;
}

function main() {
    const [_cidr] = getLine(true);
    const [_ipaddr] = getLine(true);

    return solverQ1(_cidr, _ipaddr);

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));
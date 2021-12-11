'use strict';
// var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
var input = require('fs').readFileSync('input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

function getRandomNumber() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const num = Math.floor(Math.random() * 5);
            console.log("random: ", num);
            resolve(num);
        }, Math.random() * 100);
    })
}

/**
 * getRandomNumber()が0を返すまでの和を出力する
 */
async function solverQ2() {
    let sum = 0;
    while (true) {
        let num = null;

        // getRandomNumber()の返り値を待機し、和を出力する
        await getRandomNumber().then(e => {
            num = e;
            console.log("sum: ", sum = sum + e);
        });

        // 終了条件
        if (num == 0)
            break;
    }
};

function main() {
    solverQ2();
};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));
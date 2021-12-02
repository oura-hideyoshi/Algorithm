"use strict";
// 出典：https://atcoder.jp/users/catoon

// var input = require("fs").readFileSync("/dev/stdin", "utf8");
var input = require("fs").readFileSync("C.txt", "utf8");

var cin = input.split(/ |\n/), cid = 0;
/**
 * 次の値を数値として１行取得する
 * @returns {number}
 */
function next() { return +cin[cid++]; }
/**
 * 次の値を文字として１行取得する
 * @returns {string}
 */
function nextstr() { return cin[cid++]; }
/**
 * 次の値をbigIntとして１行取得する
 * @returns {bigint}
 */
function nextbig() { return BigInt(cin[cid++]); }
/**
 * n個の値を取得する
 * aがtrueならそのまま(文字列)、falseもしくはundefinedなら数値として読み取る
 * @param {number} n 個数
 * @param {boolean | undefined} a 
 * @returns 
 */
function nexts(n, a) { return a ? cin.slice(cid, cid += n) : cin.slice(cid, cid += n).map(a => +a); }
/**
 * n個の値をソートして取得する
 * aがtrueなら
 * @param {number} n 
 * @param {boolean} a 
 * @returns 
 */
function nextssort(n, a) { return a ? cin.slice(cid, cid += n).map(a => +a).sort((a, b) => b - a) : cin.slice(cid, cid += n).map(a => +a).sort((a, b) => a - b); }
/**
 * 行列として取得する
 * aがtrueならそのまま(文字列)、falseもしくはundefinedなら数値として読み取る
 * @param {number} h 高さ
 * @param {number} w 幅
 * @param {boolean} a 
 * @returns 
 */
function nextm(h, w, a) { var r = [], i = 0; if (a) for (; i < h; i++)r.push(cin.slice(cid, cid += w)); else for (; i < h; i++)r.push(cin.slice(cid, cid += w).map(a => +a)); return r; }
/**
 * valueの値で埋め尽くされたsizeの行列を作製する
 * @param {number} v value
 * @argument {number} args size
 * @returns 
 */
function xArray(v) { var a = arguments, l = a.length, r = "Array(a[" + --l + "]).fill().map(x=>{return " + v + ";})"; while (--l) r = "Array(a[" + l + "]).fill().map(x=>" + r + ")"; return eval(r); }
var streams = []; function print(s) { streams.push(s); }

function main() {
    let A = nextstr();
    let B = nextstr();
    let Afrequency = [];
    let Bfrequency = [];
    const calcFrequency = (array) => {
        let result = xArray(0, 10);
        for (let value of array) {
            result[parseInt(value)]++;
        }
        return result
    }
    Afrequency = calcFrequency(A);
    Bfrequency = calcFrequency(B);

    streams = solver(Afrequency, Bfrequency);
}

/**
 * targetに、freqの値のいずれかを加えて、min以上となる制約の上で最小のfreqのidxを返す
 * @param {*} target 
 * @param {*} freq 
 * @param {*} min 
 */
const calcMinPare = (target, freq, min) => {
    for (let idx = 0; idx <= 9; idx++) {
        if (target + idx >= min && freq[idx] > 0)
            return idx;
    }

    return null;
}

const createStrFromFreq = (initStr, freq) => {
    let result = initStr;
    for (let idx in freq) {
        result = result.concat(String(idx).repeat(freq[idx]))
    }
    return result;
}

const solver = (Afreq, Bfreq) => {
    let ansA = "";
    let ansB = "";
    let minVal = Infinity;

    // aの最初の桁
    for (let initDigitVal = 1; initDigitVal <= 9; initDigitVal++) {
        let a = "";
        let b = "";
        let _Afreq = Afreq;
        let _Bfreq = Bfreq;
        // １桁目
        let bVal = calcMinPare(initDigitVal, _Bfreq, 10);
        if (bVal != null) {
            _Afreq[initDigitVal]--;
            _Bfreq[bVal]--;
        }
        else {
            a = createStrFromFreq(a, _Afreq);
            b = createStrFromFreq(b, _Bfreq);
            a = parseInt(a.split("").reverse().join(""));
            b = parseInt(b.split("").reverse().join(""));
            if (a + b < minVal) {
                ansA = a;
                ansB = b;
                continue;
            }
        }

        // それ以降
        // 10 ~ 18 で、つくれる順に作っていく
        for (let largerThan = 10; largerThan <= 18; largerThan++) {
            for (let aVal = 0; aVal <= 9; aVal++) {

            }
        }


    }

    return [ansA, ansB];
}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));
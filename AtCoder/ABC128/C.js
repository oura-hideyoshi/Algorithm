"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("input.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

const zeroPadding = (NUM, LEN) => (Array(LEN).join('0') + NUM).slice(-LEN);

function main() {
    const [n_switch, n_bulb] = getLine();
    let bulbs = [];
    for (let idx = 0; idx < n_bulb; idx++) {
        bulbs.push(getLine().slice(1));
    }
    let strict = getLine();
    let ans = 0;

    // 各スイッチの点け方についてビット探索
    for (let idx = 0; idx < Math.pow(2, n_switch); idx++) {
        let bits = zeroPadding(idx.toString(2), n_switch).split("").map(e => parseInt(e)).reverse();
        // console.log(bits)

        let flag = true;
        // バルブを1から探索
        for (let bulbIdx in bulbs) {
            // 初期状態で点灯しているのか
            let isOn = !Boolean(strict[bulbIdx]);
            let bulb = bulbs[bulbIdx];

            // バルブとつながってるスイッチを探索
            for (let connectTo of bulb) {
                if (bits[connectTo - 1] == 1)
                    isOn = !isOn;
            }

            flag = flag && isOn;
        }

        // 全部ついていた時
        if (flag){
            ans++;
            // console.log(bits);
        }
    }
    return ans;
}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));
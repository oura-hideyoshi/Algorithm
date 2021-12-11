'use strict';
// var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
var input = require('fs').readFileSync('input.txt', 'utf8').trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(' ') : input[cid - 1].split(' ').map(e => +e) };
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(' ')) : input.slice(cid - n, cid).map(line => line.split(' ').map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }

/**
 * 
 * @param {*} val 
 * @param {*} left 
 * @param {*} right 
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * 
 * @param {Array<Number>} arr Treeに入れる数字の配列
 * @returns 配列をTreeNodeに変換したもの
 */
function solverQ3(arr) {

    // 再帰的にtreeの子を決定する
    function rec(idx) {
        // 終了条件
        // ノードが存在しないとき
        if (arr[idx] == null)
            return undefined;

        return new TreeNode(arr[idx], rec(idx * 2 + 1), rec(idx * 2 + 2))
    }

    // 0 = 親 から決定していく
    return rec(0);
}

function main() {
    let line = getLine();
    line = line.map(e => isNaN(e) ? null : e);
    let ans = solverQ3(line);

};

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join('\n'));
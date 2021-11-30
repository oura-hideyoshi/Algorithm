/**
 * 階乗
 * @param {number} a 
 * @returns 
 */
function factorial(a) {
    if (a == 1 || a == 0)
        return 1;
    else
        return a * factorial(a - 1)
}

/**
 * 順列
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function permutation(a, b){
    return factorial(a) / factorial(a-b);
}

/**
 * 組み合わせ
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function combination(a, b){
    return permutation(a, b) / factorial(b);
}

console.log(combination(3,2))
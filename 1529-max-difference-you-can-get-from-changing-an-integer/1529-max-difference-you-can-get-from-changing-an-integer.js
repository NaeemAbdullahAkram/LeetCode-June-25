/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    const s = num.toString(), as = s.split('');
    const n1 = as.find((x) => x !== '1' && x !== '0') ?? '1';
    const n9 = as.find((x) => x !== '9') ?? '9';

    const minS = (as[0] === n1 ? '1' : '0');
    return Number(s.replaceAll(n9, '9')) - Number(s.replaceAll(n1, minS));
};
module.exports = function reverse (n) {
    if(typeof n !== 'number' && isNaN(n)) {return false};
        let numpositive = Math.abs(n);
        let stringFromNum = numpositive.toString().split('').reverse().join('');
        return (+stringFromNum);




}

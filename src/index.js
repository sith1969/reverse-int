'use strict';
module.exports = function reverse (n) {
    if(n < 0) {n = Math.abs(n);}
    if(n < 0) {n = Math.abs(n);}
    n = `${n}`.split('').reverse().join('');
    return +n;  
};


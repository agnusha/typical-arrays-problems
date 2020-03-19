
exports.min = function min (array) {
    if (array == undefined || array.length == 0) return 0;
    return array.reduce((accumulator, value)=> Math.min(accumulator, value));
}

exports.max = function max (array) {
    if (array == undefined || array.length == 0) return 0;
    return array.reduce((accumulator, value)=> Math.max(accumulator, value));
}

exports.avg = function avg (array) {
    if (array == undefined || array.length == 0) return 0;
    return array.reduce((total, amount, index, array) => {
        total += amount;
        if( index === array.length-1) { 
          return total/array.length;
        }else { 
          return total;
        }
      });
}

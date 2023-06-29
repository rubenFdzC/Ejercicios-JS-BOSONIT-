const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

const ArrayTruthy = arrDirty.filter(value => value);
console.log(ArrayTruthy);
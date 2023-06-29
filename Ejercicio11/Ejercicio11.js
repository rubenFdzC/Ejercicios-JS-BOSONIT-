function splitArrayIntoChuncks(arr , chunckSize){
    const result = [];
    let index = 0;

    while (index < arr.length){
        result.push(arr.slice(index,index + chunckSize ));
        index += chunckSize;
    }
    return result ;
}
const result = splitArrayIntoChuncks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); 
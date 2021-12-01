function solution(inputdata) {
    const dataArray = inputdata.split('\n').map(Number);
    const numberIncreased = dataArray.filter((depth, index, array) => {
        return depth > array[index-1];
        }
    )
    return numberIncreased.length;   
}
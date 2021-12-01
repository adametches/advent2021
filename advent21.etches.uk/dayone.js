function solutionPart1(inputData) {
    const dataArray = inputData.split('\n').map(Number);
    const numberIncreased = dataArray.filter((depth, index, array) => {
        return depth > array[index-1];
    })
    return numberIncreased.length;   
}
function solutionPart2(inputData) {
    const dataArray = inputData.split('\n').map(Number);
    const numberIncreased = dataArray.map((depth, index, array) => {
        return depth + array[index+1] + array[index+2];
        }).filter((depth, index, array) => {
            return depth > array[index-1];
    })   
    return numberIncreased.length;   
}
function solutionPart1(inputData) {
     
    inputData = `0123456789
0123456789
0123456789
0123456789
0123456789
0123456789
0123456789
0123456789
0123456789`


    const dataArray = inputData.split('\n').map(row => row.split(''))
    print2dArray(dataArray)
    
    return "part1";   
}
function solutionPart2(inputData) {
    inputData = `One
Two
Three`
    const dataArray = inputData.split('\n')
    return "part2";   
}

function print2dArray(array) {
    array.forEach(rwo => {
        let printrwo = '['
        rwo.forEach(cell => {

            printrwo += cell + ']['
        });
        printrwo = printrwo.substring(0, printrwo.length - 1);
        console.log(printrwo)
        
    });

}

console.log(`Part 1: ${solutionPart1()}`);
console.log(`Part 2: ${solutionPart2()}`);

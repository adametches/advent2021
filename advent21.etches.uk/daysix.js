function solutionPart1(inputData) {
    const dataArray = inputData.split(',')
    numberOfFish = laternfishSimulator(dataArray, 80)
    return numberOfFish;
}
function solutionPart2(inputData) {
    //inputData = '3,4,3,1,2'
    const dataArray = inputData.split(',')
    numberOfFish = laternfishSimulator(dataArray, 256)
    return numberOfFish;
}
function laternfishSimulator(initialState, numberOfDays) {
    initialState = initialState.map(Number)
    var fishCounter = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0}   
    for (let i = 0; i < 9; i++) {fishCounter[i] = initialState.filter(x=> x==i).length;}   
    for (let day = 1; day <= numberOfDays; day++) {
        console.log("Day ", day)
        var zeroCount = fishCounter[0]
        for (let i = 0; i < 9; i++) {fishCounter[i] = fishCounter[i+1];}
        fishCounter[6] = fishCounter[6] + zeroCount
        fishCounter[8] = zeroCount
    }
    var numberOfFish = 0;
    for (let i = 0; i < 9; i++) {numberOfFish += fishCounter[i]}
    return numberOfFish;

}


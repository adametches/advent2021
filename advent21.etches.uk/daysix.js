function solutionPart1(inputData) {
    const dataArray = inputData.split(',')
    daysState = [dataArray];
    for (let day = 1; day <= 80; day++) {
        daysState[day] = daysState[day - 1]
        daysState[day].forEach((fish, fishIndex) => {
            fish -= 1;
            if (fish == -1) {
                fish = 6;
                daysState[day].push(8)
            }
            daysState[day][fishIndex] = fish;
        });
    }
    return daysState[80].length;
}
function solutionPart2(inputData) {
    inputData = '3,4,3,1,2'
    const dataArray = inputData.split(',')
    numberOfFish = largeLaternfishSimulator(dataArray, 18)
    return numberOfFish;
}
function laternfishSimulator(initialState, numberOfDays) {
    daysState = initialState;
    for (let day = 1; day <= numberOfDays; day++) {
        daysState.forEach((fish, fishIndex) => {
            fish -= 1;
            if (fish == -1) {
                fish = 6;
                daysState.push(8)
            }
            daysState[fishIndex] = fish;
        });
    }
    return daysState.length;
}

function largeLaternfishSimulator(initialState, numberOfDays) {
    daysState = [initialState];
    chunkSize = 5
    console.log("Initial state: " + daysState[0].toString())
    for (let day = 1; day <= numberOfDays; day++) {
        daysState.push([])
        daysState[day].forEach((fish, fishIndex) => {
            fish -= 1;
            if (fish == -1) {
                fish = 6;
                daysState[day].push(8)
            }
            daysState[day][fishIndex] = fish;
        });
        console.log("Day " + day + " " + daysState[day].toString())

    }
    var numberOfFish = 0;
    daysState.forEach(element => {
        numberOfFish += element.length
    });

    return numberOfFish;

}
function chunkArray(arr, n) {
    var chunkLength = Math.max(arr.length / n, 1);
    var chunks = [];
    for (var i = 0; i < n; i++) {
        if (chunkLength * (i + 1) <= arr.length) chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
    }
    return chunks;
}

//res = solutionPart2("1,3,1,5,5,1,1,1,5,1,1,1,3,1,1,4,3,1,1,2,2,4,2,1,3,3,2,4,4,4,1,3,1,1,4,3,1,5,5,1,1,3,4,2,1,5,3,4,5,5,2,5,5,1,5,5,2,1,5,1,1,2,1,1,1,4,4,1,3,3,1,5,4,4,3,4,3,3,1,1,3,4,1,5,5,2,5,2,2,4,1,2,5,2,1,2,5,4,1,1,1,1,1,4,1,1,3,1,5,2,5,1,3,1,5,3,3,2,2,1,5,1,1,1,2,1,1,2,1,1,2,1,5,3,5,2,5,2,2,2,1,1,1,5,5,2,2,1,1,3,4,1,1,3,1,3,5,1,4,1,4,1,3,1,4,1,1,1,1,2,1,4,5,4,5,5,2,1,3,1,4,2,5,1,1,3,5,2,1,2,2,5,1,2,2,4,5,2,1,1,1,1,2,2,3,1,5,5,5,3,2,4,2,4,1,5,3,1,4,4,2,4,2,2,4,4,4,4,1,3,4,3,2,1,3,5,3,1,5,5,4,1,5,1,2,4,2,5,4,1,3,3,1,4,1,3,3,3,1,3,1,1,1,1,4,1,2,3,1,3,3,5,2,3,1,1,1,5,5,4,1,2,3,1,3,1,1,4,1,3,2,2,1,1,1,3,4,3,1,3")
//console.log("number of fish: ",res)
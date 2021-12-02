function solutionPart1(inputData){
    const dataArray = inputData.split('\n')
    var horizontal = 0, depth = 0;
    const moveSub = {
        'forward': (value) => horizontal += value,
        'up': (value) => depth -= value,
        'down': (value) => depth += value,
      };
    dataArray.forEach(element => { 
        var [command, value] = element.split(" ");
        value = parseInt(value);
        moveSub[command](value); 
    });
    return horizontal * depth;
}

function solutionPart2(inputData){
    const dataArray = inputData.split('\n')
    var horizontal = 0, depth = 0, aim = 0;
    const moveSub = {
        'forward': (value) => {horizontal += value; depth += value * aim},
        'up': (value) => aim -= value,
        'down': (value) => aim += value,
    };
    dataArray.forEach(element => {
        var [command, value] = element.split(" ");
        value = parseInt(value);
        moveSub[command](value);
    });
    return horizontal * depth;
}
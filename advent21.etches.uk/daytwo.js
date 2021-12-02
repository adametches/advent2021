function solutionPart1(inputData){
    const dataArray = inputData.split('\n')
    var horizontal = 0, vertical = 0;
    dataArray.forEach(element => { 
        var [command, value] = element.split(" ");
        value = parseInt(value);
        switch(command) {
            case "forward":
                horizontal += value;
                break;
            case "up":
                vertical -= value;
                break;
            case "down":
                vertical += value;
                break;
          }        
    });
    return horizontal * vertical;
}

function solutionPart2(inputData){
    const dataArray = inputData.split('\n')
    var horizontal = 0, depth = 0, aim = 0;
    dataArray.forEach(element => {
        var [command, value] = element.split(" ");
        value = parseInt(value);
        switch(command) {
            case "forward":
                horizontal += value;
                depth += value * aim;
                break;
            case "up":
                aim -= value;
                break;
            case "down":
                aim += value;
                break;
          }       
    });
    return horizontal * depth;
}

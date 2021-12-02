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

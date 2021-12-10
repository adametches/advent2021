function solutionPart1(inputData) {

    inputData = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`

    const dataArray = inputData.split('\n').map(x => x.split(''))
    const startsmap = new Map([
        ['<', '>'],
        ['{', '}'],
        ['(', ')'],
        ['[', ']'],
        [']', '['],
        [')', '('],
        ['}', '{'],
        ['>', '<']
    ])
    for (i = 0; i < 1; i++) {
        var line = dataArray[i]
        var cont = true
        while (cont){
            cont = false
            var length = line.length
           
            for (j = 0;j<line.length;i++){
                if (line[j] == startsmap.get(line[j+1])){
                    line.splice(j,2)
                }

            }
            if (line.length < length) cont = true;
            console.log(line)
            
        }
        console.log(line)



    }




return "part1";
}
function solutionPart2(inputData) {
    inputData = `One
    Two
    Three`

    const dataArray = inputData.split('\n')
    return "part2";
}

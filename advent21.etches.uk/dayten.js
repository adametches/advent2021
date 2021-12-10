const characterScoreMap = new Map([
    [')', 3],
    [']', 57],
    ['}', 1197],
    ['>', 25137],
  ]);
  
  const closingCharacterMap = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['<', '>'],
  ]);


function solutionPart1(inputData) {
/*
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
*/
    //const dataArray = inputData.split('\n').map(x => x.split(''))
   
      return inputData.split('\n').reduce((score, line) => {
        const characters = line.trim().split('');
        const history = [];
    
        for (let i = 0; i < characters.length; i++) {
          const currentCharacter = characters[i];
    
          if (closingCharacterMap.has(currentCharacter)) {
            history.push(currentCharacter);
          } else {
            const lastOpeningCharacter = history.slice(-1)[0];
            const lastClosingCharacter = closingCharacterMap.get(lastOpeningCharacter);
    
            if (lastClosingCharacter === currentCharacter) {
              history.pop();
            } else {
              score += characterScoreMap.get(currentCharacter);
              break;
            }
          }
        }
    
        return score;
      }, 0);
    }


function solutionPart2(inputData) {
    inputData = `One
    Two
    Three`

    const dataArray = inputData.split('\n')
    return "part2";
}

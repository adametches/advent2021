
function solutionPart1(inputData) {
  const endingMap = new Map([
    ['(', ')'], ['[', ']'], ['{', '}'], ['<', '>'],
  ]);
  const scoreMap = new Map([
    [')', 3], [']', 57], ['}', 1197], ['>', 25137],
  ]);
  var score = 0;
  const dataArray = inputData.split('\n').map(x => x.split(''))
  for (lineCount = 0; lineCount < dataArray.length; lineCount++) {
    parsed = [];
    const chars = dataArray[lineCount];
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      if (endingMap.has(char)) { parsed.push(char) }
      else {
        const lastChar = parsed.slice(-1)[0];
        const lastEndingChar = endingMap.get(lastChar);
        if (lastEndingChar === char) parsed.pop()
        else {
          score += scoreMap.get(char);
          break;
        }
      }
    }
  }
  return score
}


function solutionPart2(inputData) {

  const endingMap = new Map([
    ['(', ')'], ['[', ']'], ['{', '}'], ['<', '>'],
  ]);
  const scoreMap = new Map([
    [')', 3], [']', 57], ['}', 1197], ['>', 25137],
  ]);
  var scores = [];
  const dataArray = inputData.split('\n').map(x => x.split(''))
  for (lineCount = 0; lineCount < dataArray.length; lineCount++) {
    parsed = [];
    const chars = dataArray[lineCount];
    console.log("LINE: ", lineCount)
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      if (endingMap.has(char)) { parsed.push(char) }
      else {
        const lastChar = parsed.slice(-1)[0];
        const lastEndingChar = endingMap.get(lastChar);
        if (lastEndingChar === char) parsed.pop()
        else {
          break;
        }
      }
    }
    parsed.reverse();
    scores.push(parsed.reduce((total, character) => {
      return total * 5 + scoreMap.get(endingMap.get(character));
    }, 0));
  }
  return scores.slice(Math.floor(scores.length / 2))[0];
}
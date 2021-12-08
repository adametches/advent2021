function solutionPart1(inputData) { 
    const dataArray = inputData.split('\n')
    let io = []
    let digitCount = 0;
    for (let i = 0; i < dataArray.length; i++) {
        let element = dataArray[i];
        let [input, output] = element.split(" | ")
        digitCount += output.split(" ").filter(out => [7, 4, 3, 2].includes(out.length)).length
        io.push({ input: input, output: output })
    }
    return digitCount;
}
function solutionPart2(inputData) {
    const dataArray = inputData.split('\n').map((row) => {
        const inputs = row.split(' | ')[0].split(' ');
        const outputs = row.split(' | ')[1].split(' ');
        return { inputs, outputs };
    });
    let total = 0;
    for (let i = 0; i < dataArray.length; i++) {
        const inputs = dataArray[i].inputs;
        const outputs = dataArray[i].outputs;        

        let digit1 = inputs.filter(input => input.length === 2)[0].split('')
        let digit4 = inputs.filter(input => input.length === 4)[0].split('')
        let digit7 = inputs.filter(input => input.length === 3)[0].split('')
        let digit8 = inputs.filter(input => input.length === 7)[0].split('')
        let digits235 = inputs.filter(input => input.length === 5)
        let digit069 = inputs.filter(input => input.length === 6)

        let digit3 = [], digit2 = [], digit5 = []
        let digit0 = [], digit6 = [], digit9 = []

        for (let di = 0; di < digits235.length; di++) {
            difference = digits235[di].split('').filter(x => !digit7.includes(x));
            if (difference.length === 2 ) {
                digit3 = digits235[di].split('')
                digits235.splice(di, 1); 
            }
        }

        for (let di = 0; di < digits235.length; di++) {
            difference = digits235[di].split('').filter(x => !digit4.includes(x));
            if (difference.length === 3 ) digit2 = digits235[di].split('')
            else digit5 = digits235[di].split('')
        }

        for (let di = 0; di < digit069.length; di++) {
            difference = digit069[di].split('').filter(x => !digit1.includes(x));
            if (difference.length === 5 ) {
                digit6 = digit069[di].split('')
                digit069.splice(di, 1);   
            }       
        }

        for (let di = 0; di < digit069.length; di++) {
            difference = digit069[di].split('').filter(x => !digit4.includes(x));
            if (difference.length === 2 ) digit9 = digit069[di].split('')
            else digit0 = digit069[di].split('')
        }

        const digits = new Map([
            [digit0.sort().join(''), '0'],
            [digit1.sort().join(''), '1'],
            [digit2.sort().join(''), '2'],
            [digit3.sort().join(''), '3'],
            [digit4.sort().join(''), '4'],
            [digit5.sort().join(''), '5'],
            [digit6.sort().join(''), '6'],
            [digit7.sort().join(''), '7'],
            [digit8.sort().join(''), '8'],
            [digit9.sort().join(''), '9'],
        ]);
        outputDigits = []
        for (let oi = 0; oi < outputs.length; oi++) {
            output = outputs[oi].split('').sort().join('')
            outputDigits.push(digits.get(output))        
        }

        total += parseInt(outputDigits.join(''));
    }

    return total;

}

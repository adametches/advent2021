
function solutionPart1(inputData) {

    inputData = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`

inputData = `SHHBNFBCKNHCNOSHHVFF

CK -> N
VP -> B
CF -> S
FO -> V
VC -> S
BV -> V
NP -> P
SN -> C
KN -> V
NF -> P
SB -> C
PC -> B
OB -> V
NS -> O
FH -> S
NK -> S
HO -> V
NV -> O
FV -> O
FB -> S
PS -> S
FN -> K
HS -> O
CB -> K
HV -> P
NH -> C
BO -> B
FF -> N
PO -> F
BB -> N
PN -> C
BP -> C
HN -> K
CO -> P
BF -> H
BC -> S
CV -> B
VV -> F
FS -> B
BN -> P
VK -> S
PV -> V
PP -> B
PH -> N
SS -> O
SK -> S
NC -> P
ON -> F
NB -> N
CC -> N
SF -> H
PF -> H
OV -> O
KH -> C
CP -> V
PK -> O
KC -> K
KK -> C
KF -> B
HP -> C
FK -> H
BH -> K
VN -> H
OO -> S
SC -> K
SP -> B
KO -> V
KV -> F
HK -> N
FP -> N
NN -> B
VS -> O
HC -> K
BK -> N
KS -> K
VB -> O
OH -> F
KB -> F
KP -> H
HB -> N
NO -> N
OF -> O
BS -> H
VO -> H
SH -> O
SV -> K
HF -> C
CS -> F
FC -> N
VH -> H
OP -> K
OK -> H
PB -> K
HH -> S
OC -> V
VF -> B
CH -> K
CN -> C
SO -> P
OS -> O`


    const dataArray = inputData.split('\n')
    let polymerTemplate = dataArray[0].split('')
    const rules = new Map(dataArray.slice(2).map(x => x.split(" -> ")))
    let newPoly = [];
    console.log(newPoly.toString())
    for (let step = 1; step < 41; step++) { 
        console.log('Step ',step)
        
        for (let i = 0; i < polymerTemplate.length - 1; i++) {    
           newP = rules.get(polymerTemplate[i]+polymerTemplate[i+1])
 
           newPoly.push(polymerTemplate[i])
           newPoly.push(newP)
        }
        newPoly.push(polymerTemplate[polymerTemplate.length-1])
        polymerTemplate = [...newPoly]
        
        newPoly = [];
        //polymerTemplate = newPoly.split('')
    }
    let letters = []
    for (const letter of ['S','H','B','N','F','C','K','O','V']){
        letters.push({[letter]:letter,length: polymerTemplate.filter(x=>x===letter).length})
    }
    letters.sort((a,b) => b.length-a.length)
    console.log(letters)
let val = letters[0].length - letters[letters.length-1].length
    return val;
}
function insertAt(array, index, el) {
    array.splice(index, 0, el);
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


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
    for (let step = 1; step < 11; step++) {
        for (let i = 0; i < polymerTemplate.length - 1; i++) {
            newP = rules.get(polymerTemplate[i] + polymerTemplate[i + 1])
            newPoly.push(polymerTemplate[i])
            newPoly.push(newP)
        }
        newPoly.push(polymerTemplate[polymerTemplate.length - 1])
        polymerTemplate = [...newPoly]
        newPoly = [];
    }
    let letters = []
    for (const letter of ['S', 'H', 'B', 'N', 'F', 'C', 'K', 'O', 'V']) {
        letters.push({ [letter]: letter, length: polymerTemplate.filter(x => x === letter).length })
    }
    letters.sort((a, b) => b.length - a.length)
    let val = letters[0].length - letters[letters.length - 1].length
    return val;
}

function solutionPart2(inputData) {
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
    const ruleMap = new Map();
    for (const rule of dataArray.slice(2).map(x => x.split(" -> "))) {
        ruleMap.set(rule[0],[rule[0][0] + rule[1] ,rule[1] + rule[0][1]] )
        
    }
    let pairCounts = new Map();
    for (let i = 0; i < polymerTemplate.length - 1; i++) {
        const pair = polymerTemplate[i] + polymerTemplate[i+1]
        addToMap(pairCounts,pair)
    }
    const lastChar = polymerTemplate[polymerTemplate.length-1]  
    for (let step = 0; step < 40; step++) {
        let current = new Map()
        const keys = pairCounts.keys()
        for (const key of keys) {
            const next = ruleMap.get(key)
            addToMap(current, next[0], pairCounts.get(key))
            addToMap(current, next[1], pairCounts.get(key))
        }
        pairCounts = current;
    }
    const elementCount = new Map();
    addToMap(elementCount, lastChar)
    const keys = pairCounts.keys()
    for (const key of keys) {
        addToMap(elementCount, key[0],pairCounts.get(key))      
    }
    const values = [...elementCount.values()]
    const min = Math.min(...values)
    const max = Math.max(...values)
    return max-min;
}

function addToMap(map, pair, val = 1) {
    if (!map.has(pair)){
        map.set(pair,0);
    }
    map.set(pair,map.get(pair)+val)
}


console.log(`Part 1: ${solutionPart1()}`);
console.log(`Part 2: ${solutionPart2()}`);

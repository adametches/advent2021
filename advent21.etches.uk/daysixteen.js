function solutionPart1(inputData) {

    inputData = `38006F45291200`
    const binaryNumber = inputData.split('').map(d => parseInt(d, 16).toString(2).padStart(4, '0')).join('')
    decodePacket(binaryNumber,[])
    console.log(JSON.stringify(packet))
    return "part1";
}
function solutionPart2(inputData) {
    inputData = `One
Two
Three`
    const dataArray = inputData.split('\n')
    return "part2";
}


function decodePacket(packetText, packetArray) {
    console.log(packetText)
    const packetVersion = parseInt(packetText.substring(0, 3), 2)
    const packetType = parseInt(packetText.substring(3, 6), 2)
    const packetValue = ''
    let packetContent = packetText.substring(6)
    if (packetType == 4) {
        let binaryString = ''
        while (packetContent.length > 0) {

            binaryString += packetContent.substring(1, 5)

            if (packetContent[0] == '0') {

                packetContent = ''
            }
            packetContent = packetContent.substring(5)

        }
        packetValue = parseInt(binaryString, 2);
    }
    else{
        // operater package
        console.log('packet content',packetContent)
        const lengthTypeId = packetContent[0];
        console.log('lengthTypeId',lengthTypeId)
        if (lengthTypeId  === '0'){
            binaryString = packetContent.substring(1, 16)
            console.log('binaryString', binaryString)
            let length = parseInt(binaryString, 2) 
            console.log(length)
            



        }
        else{
            binaryString = packetContent.substring(1, 12)
            console.log(binaryString)
            let length = parseInt(binaryString, 2) 
            console.log(length)
        }
    }

    return {
        packetVersion: packetVersion,
        packetType: packetType,
        packetValue: packetValue
    }


}

console.log(`Part 1: ${solutionPart1()}`);
//console.log(`Part 2: ${solutionPart2()}`);

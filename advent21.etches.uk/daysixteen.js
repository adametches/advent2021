function solutionPart1(inputData) {

    inputData = `38006F45291200`
    inputData = 'EE00D40C823060'
    inputData = '8A004A801A8002F478'
    const binaryNumber = inputData.split('').map(d => parseInt(d, 16).toString(2).padStart(4, '0')).join('')
    packet = decodePacket(binaryNumber,[])
    console.log(packet)
    return packet.sumOfVersions();
}
function solutionPart2(inputData) {
    inputData = `One
Two
Three`
    const dataArray = inputData.split('\n')
    return "part2";
}


function decodePacket(packetText, packetArray) {
    console.log('decodePacket', packetText)
    const packetVersion = parseInt(packetText.substring(0, 3), 2)
    const packetType = parseInt(packetText.substring(3, 6), 2)
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
        const packetValue = parseInt(binaryString, 2);

        return new Packet(packetVersion,packetType,packetValue)

       
    
    }
    else{
        // operater package
        console.log('packet content',packetContent)
        const lengthTypeId = packetContent[0];
        console.log('lengthTypeId',lengthTypeId)
        const packet =  new Packet(packetVersion,packetType,0)
        if (lengthTypeId  === '0'){
            lengthInBits = packetContent.substring(1, 16)
            let length = parseInt(lengthInBits, 2) 
            packetContent = packetContent.substring(16)
            console.log('packet content',packetContent)
            
            console.log(length)
            packet.packetArray.push(decodePacket(packetContent.substring(0,11)))
            packetContent = packetContent.substring(11)
            packet.packetArray.push(decodePacket(packetContent.substring(0,16)))
            packetContent = packetContent.substring(16)


        }
        else{
            lengthInBits = packetContent.substring(1, 12)
            packetContent = packetContent.substring(12)
            console.log('packet content',packetContent)
            let length = parseInt(lengthInBits, 2) 
            console.log(length)
            while(length > 0){
                packet.packetArray.push(decodePacket(packetContent.substring(0, 11)))
                packetContent = packetContent.substring(11)
                length--;

            }
        }
        return packet;
    }

   
}
class Packet{

    constructor(packetVersion,packetType,packetValue){
        this.packetVersion = packetVersion;
        this.packetType = packetType;
        this.packetValue = packetValue;
        this.packetArray = []
    }

    sumOfVersions() {
        let sum = this.packetVersion
        this.packetArray.forEach(subpacket => {
            sum = sum + subpacket.packetVersion
        });

        return sum;
        
    }



}

console.log(`Part 1: ${solutionPart1()}`);
//console.log(`Part 2: ${solutionPart2()}`);

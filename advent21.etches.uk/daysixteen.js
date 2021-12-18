function solutionPart1(inputData) {

    

    inputData = 'D2FE28' //one value = 2021
    inputData = `38006F45291200` //two
    inputData = 'EE00D40C823060' //three
    inputData = '8A004A801A8002F478' // four
    const binaryNumber = inputData.split('').map(d => parseInt(d, 16).toString(2).padStart(4, '0')).join('')
    packet = decodePacket(binaryNumber,[])
    console.log(packet[0])
    return packet[0].sumOfVersions();
}
function solutionPart2(inputData) {
    inputData = `One
Two
Three`
    const dataArray = inputData.split('\n')
    return "part2";
}


function decodePacket(packetText, packetArray) {
    //console.log('literal packet')
    //console.log('decodePacket', packetText)
    const packetVersion = parseInt(packetText.substring(0, 3), 2)
    const packetType = parseInt(packetText.substring(3, 6), 2)
    let packetContent = packetText.substring(6)
    if (packetType == 4) {
        packetValuebinary = '';
        //console.log(packetContent)
        while (packetContent.length > 0) {
            let leadingBit = packetContent[0]
            packetValuebinary += packetContent.substring(1, 5)   
            packetContent = packetContent.substring(5)
            if ( leadingBit == '0') {
                const packetValue = parseInt(packetValuebinary, 2);
                return [new Packet(packetVersion,packetType,packetValue),packetContent]
            }   
        }
        

        //return [new Packet(packetVersion,packetType,packetValue),packetContent]

       
    
    }
    else{
        // operater package
        //console.log('operator packet')
        //console.log('packet content',packetContent)
        const lengthTypeId = packetContent[0];
        //console.log('lengthTypeId',lengthTypeId)
        const packet =  new Packet(packetVersion,packetType,0)
        
        if (lengthTypeId  === '0'){
            lengthInBits = packetContent.substring(1, 16)
            let length = parseInt(lengthInBits, 2) 
            packetContent = packetContent.substring(16)
            //console.log('packet content',packetContent)
            
            //console.log(length)
            let usedbits = 0;
            while(usedbits < length){
                
                
                let [subpacket,remainingPacketContent] = decodePacket(packetContent)
                usedbits = usedbits + packetContent.length - remainingPacketContent.length
                //console.log('usedbits ',usedbits)
                packetContent = remainingPacketContent;
                //console.log('packetContent.length ', packetContent.length)
                packet.packetArray.push(subpacket)

            }
           
        }
        else{
            lengthInBits = packetContent.substring(1, 12)
            packetContent = packetContent.substring(12)
            //console.log('packet content',packetContent)
            let length = parseInt(lengthInBits, 2) 
            packet.subpackageLength = length;
            console.log('number of packets ',length)
            while(length > 0){
                [subpacket,packetContent] = decodePacket(packetContent)
                packet.packetArray.push(subpacket)
                length--;

            }
        }
        return [packet, packetContent];
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

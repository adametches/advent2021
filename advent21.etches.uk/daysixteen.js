function solutionPart1(inputData) {



    inputData = 'D2FE28' //one value = 2021
    inputData = `38006F45291200` //two
    inputData = 'EE00D40C823060' //three
    inputData = '8A004A801A8002F478' // four = 16
    inputData = '620080001611562C8802118E34' //five =12
    inputData = 'C0015000016115A2E0802F182340' //six =23
    inputData = 'A0016C880162017C3686B18A3D4780' //seven =31
    inputData = '420D4900B8F31EFE7BD9DA455401AB80021504A2745E1007A21C1C862801F54AD0765BE833D8B9F4CE8564B9BE6C5CC011E00D5C001098F11A232080391521E4799FC5BB3EE1A8C010A00AE256F4963B33391DEE57DA748F5DCC011D00461A4FDC823C900659387DA00A49F5226A54EC378615002A47B364921C201236803349B856119B34C76BD8FB50B6C266EACE400424883880513B62687F38A13BCBEF127782A600B7002A923D4F959A0C94F740A969D0B4C016D00540010B8B70E226080331961C411950F3004F001579BA884DD45A59B40005D8362011C7198C4D0A4B8F73F3348AE40183CC7C86C017997F9BC6A35C220001BD367D08080287914B984D9A46932699675006A702E4E3BCF9EA5EE32600ACBEADC1CD00466446644A6FBC82F9002B734331D261F08020192459B24937D9664200B427963801A094A41CE529075200D5F4013988529EF82CEFED3699F469C8717E6675466007FE67BE815C9E84E2F300257224B256139A9E73637700B6334C63719E71D689B5F91F7BFF9F6EE33D5D72BE210013BCC01882111E31980391423FC4920042E39C7282E4028480021111E1BC6310066374638B200085C2C8DB05540119D229323700924BE0F3F1B527D89E4DB14AD253BFC30C01391F815002A539BA9C4BADB80152692A012CDCF20F35FDF635A9CCC71F261A080356B00565674FBE4ACE9F7C95EC19080371A009025B59BE05E5B59BE04E69322310020724FD3832401D14B4A34D1FE80233578CD224B9181F4C729E97508C017E005F2569D1D92D894BFE76FAC4C5FDDBA990097B2FBF704B40111006A1FC43898200E419859079C00C7003900B8D1002100A49700340090A40216CC00F1002900688201775400A3002C8040B50035802CC60087CC00E1002A4F35815900903285B401AA880391E61144C0004363445583A200CC2C939D3D1A41C66EC40'
    //inputData = 'C200B40A82'
    //inputData = '04005AC33890'
    //inputData = '880086C3E88112'
    //inputData = 'CE00C43D881120'
    //inputData = 'D8005AC2A8F0'

    const binaryNumber = inputData.split('').map(d => parseInt(d, 16).toString(2).padStart(4, '0')).join('')
    const [packet, rest] = decodePacket(binaryNumber, [])
    return sumOfVersions(packet.packetArray) + packet.packetVersion;
}
function solutionPart2(inputData) {
    inputData = '420D4900B8F31EFE7BD9DA455401AB80021504A2745E1007A21C1C862801F54AD0765BE833D8B9F4CE8564B9BE6C5CC011E00D5C001098F11A232080391521E4799FC5BB3EE1A8C010A00AE256F4963B33391DEE57DA748F5DCC011D00461A4FDC823C900659387DA00A49F5226A54EC378615002A47B364921C201236803349B856119B34C76BD8FB50B6C266EACE400424883880513B62687F38A13BCBEF127782A600B7002A923D4F959A0C94F740A969D0B4C016D00540010B8B70E226080331961C411950F3004F001579BA884DD45A59B40005D8362011C7198C4D0A4B8F73F3348AE40183CC7C86C017997F9BC6A35C220001BD367D08080287914B984D9A46932699675006A702E4E3BCF9EA5EE32600ACBEADC1CD00466446644A6FBC82F9002B734331D261F08020192459B24937D9664200B427963801A094A41CE529075200D5F4013988529EF82CEFED3699F469C8717E6675466007FE67BE815C9E84E2F300257224B256139A9E73637700B6334C63719E71D689B5F91F7BFF9F6EE33D5D72BE210013BCC01882111E31980391423FC4920042E39C7282E4028480021111E1BC6310066374638B200085C2C8DB05540119D229323700924BE0F3F1B527D89E4DB14AD253BFC30C01391F815002A539BA9C4BADB80152692A012CDCF20F35FDF635A9CCC71F261A080356B00565674FBE4ACE9F7C95EC19080371A009025B59BE05E5B59BE04E69322310020724FD3832401D14B4A34D1FE80233578CD224B9181F4C729E97508C017E005F2569D1D92D894BFE76FAC4C5FDDBA990097B2FBF704B40111006A1FC43898200E419859079C00C7003900B8D1002100A49700340090A40216CC00F1002900688201775400A3002C8040B50035802CC60087CC00E1002A4F35815900903285B401AA880391E61144C0004363445583A200CC2C939D3D1A41C66EC40'
    
    const binaryNumber = inputData.split('').map(d => parseInt(d, 16).toString(2).padStart(4, '0')).join('')
    const [packet, rest] = decodePacket(binaryNumber, [])
    return packet.packetValue;
}


function decodePacket(packetText, packetArray) {

    const packetVersion = parseInt(packetText.substring(0, 3), 2)
    const packetType = parseInt(packetText.substring(3, 6), 2)
    const packet = new Packet(packetVersion, packetType, 0)
    packet.packetType = packetType;
    let packetContent = packetText.substring(6)
    if (packetType == 4) {
        packetValuebinary = '';
        while (packetContent.length > 0) {
            let leadingBit = packetContent[0]
            packetValuebinary += packetContent.substring(1, 5)
            packetContent = packetContent.substring(5)
            if (leadingBit == '0') {
                packet.packetValue = parseInt(packetValuebinary, 2);
                break;
            }
        }
    }
    else {
        // operater packet
        const lengthTypeId = packetContent[0];
        if (lengthTypeId === '0') {
            lengthInBits = packetContent.substring(1, 16)
            let length = parseInt(lengthInBits, 2)
            packetContent = packetContent.substring(16)
            let usedbits = 0;
            while (usedbits < length) {
                let [subpacket, remainingPacketContent] = decodePacket(packetContent)
                usedbits = usedbits + packetContent.length - remainingPacketContent.length
                packetContent = remainingPacketContent;
                packet.packetArray.push(subpacket)
            }
        }
        else {
            lengthInBits = packetContent.substring(1, 12)
            packetContent = packetContent.substring(12)
            let length = parseInt(lengthInBits, 2)
            while (length > 0) {
                [subpacket, packetContent] = decodePacket(packetContent)
                packet.packetArray.push(subpacket)
                length--;
            }
        }
        switch (packetType) {
            case 0:
                packet.packetValue = packet.packetArray.reduce((a, b) => a + b.packetValue, 0);
                break;
            case 1:
                packet.packetValue = packet.packetArray.reduce((a, b) => a * b.packetValue, 1);
                break;
            case 2:
                packet.packetValue = Math.min( ... packet.packetArray.map((p) => p.packetValue));
                break;
            case 3:
                packet.packetValue = Math.max( ... packet.packetArray.map((p) => p.packetValue));
                break;
            case 5:
                packet.packetValue = Number(
                    packet.packetArray[0].packetValue > packet.packetArray[1].packetValue
                )
                break;
            case 6:
                packet.packetValue = Number(
                    packet.packetArray[0].packetValue < packet.packetArray[1].packetValue
                    )
                break;
            case 7:
                packet.packetValue = Number(
                    packet.packetArray[0].packetValue === packet.packetArray[1].packetValue
                    )
                break;

            default:
                break;
        }

    }
    return [packet, packetContent];
}

function sumOfVersions(packets) {

    return packets
        .map((p) => p.packetVersion + sumOfVersions(p.packetArray))
        .reduce((a, b) => a + b, 0);
}
class Packet {

    constructor(packetVersion, packetType, packetValue) {
        this.packetVersion = packetVersion;
        this.packetType = packetType;
        this.packetValue = packetValue;
        this.packetArray = []
    }





}

console.log(`Part 1: ${solutionPart1()}`);
console.log(`Part 2: ${ solutionPart2() } `);

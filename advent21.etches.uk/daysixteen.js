function solutionPart1(inputData) {
    const binaryNumber = inputData.split('').map(d => parseInt(d, 16).toString(2).padStart(4, '0')).join('')
    const [packet, rest] = decodePacket(binaryNumber, [])
    return sumOfVersions(packet.packetArray) + packet.packetVersion;
}
function solutionPart2(inputData) {
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

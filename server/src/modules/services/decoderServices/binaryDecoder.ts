export function binaryDecoder(text: string, spaced: Boolean): string {
    if (!spaced) {
        const splitedText: string[] = text.split('');
        let endText: string = "";
        for(let i = 1; i <= splitedText.length; i++) {
            if (i%8 > 0) {
                endText += splitedText[(i-1)];
            } else {
                endText += splitedText[(i-1)];
                endText += " ";
            }
        }
        text = endText.trim()
    }

    const binaryText: string[] = text.split(' ');
    let decodedText: string = "";

    for(let i = 0; i < binaryText.length; i++) {

        if(binaryText[i].length !== 8) {
            decodedText += ".Invalid ASCII Binary.";
        } else {
            const binaryChar = binaryText[i];
            let ASCIInumber = 0

            for(let i = 0; i < 8; i++) {
                binaryChar.charAt(7-i) == "0" 
                ? ASCIInumber += 0 
                : ASCIInumber += Math.pow(2,i)
            };

            decodedText += String.fromCharCode(ASCIInumber)
        };
    };

    return decodedText.trim()
};
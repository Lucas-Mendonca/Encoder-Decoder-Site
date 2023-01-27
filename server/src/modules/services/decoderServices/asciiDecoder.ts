export function asciiDecoder(text: string): string {

    const asciiText: string[] = text.split(' ');
    let decodedText: string = "";

    for(let i = 0; i < asciiText.length; i++) {
        const ASCIInumber = parseInt(asciiText[i])

        decodedText += String.fromCharCode(ASCIInumber)
    };

    return decodedText.trim();
}
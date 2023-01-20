export function binaryDecoder(text: string, spaced?: Boolean): string {
    if (!spaced) {
        let splitedText: String[] = text.split('');
        let endText: string = "";
        for(let i = 1; i <= splitedText.length; i++) {
            if (i%8 == 0) {
                endText += splitedText[(i-1)];
            } else {
                endText += " ";
                endText += splitedText[(i-1)];
            }
        }
        text = endText
    }

    return text
}
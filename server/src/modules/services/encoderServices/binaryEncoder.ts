export function binaryEncode(text: String, spaced?: Boolean): string {
    let binaryText: string[] = []
    text.trim()

    for(let i = 0; i < text.length; i++) {
        let charInASCII:number = text.charCodeAt(i)
        let charInBinary:string = "";

        while(charInASCII > 0) {
            if(charInASCII % 2 == 1) {
                charInBinary += "1"
            } else {
                charInBinary += "0"
            }
            charInASCII = Math.floor(charInASCII/2)
        }

        binaryText.push(charInBinary)
    }

    let join = ""
    if(spaced) {
        join = " "
    }

    const output = binaryText.join(join)
    return output
}
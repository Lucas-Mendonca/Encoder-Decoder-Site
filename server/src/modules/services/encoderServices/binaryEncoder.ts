export function binaryEncoder (text: String, spaced: Boolean): string {
    let binaryText: string[] = []
    text.trim()

    for(let i = 0; i < text.length; i++) {
        let charInASCII:number = text.charCodeAt(i)
        let charInBinary8digits:string = "";

        let charInBinary:string = (charInASCII).toString(2)
        while (charInBinary.length < 8) {
            let corrector = "0"
            corrector += charInBinary
            charInBinary = corrector
        };

        binaryText.push(charInBinary)
    }

    let join = ""
    if(spaced) {
        join = " "
    }

    const output = binaryText.join(join)
    return output
}
export function asciiEncoder (text: String): string {
    let binaryText: string[] = []
    text.trim()

    for(let i = 0; i < text.length; i++) {
        const charInASCII:number = text.charCodeAt(i)

        binaryText.push(charInASCII.toString())
    }

    const output = binaryText.join(' ')
    return output
}
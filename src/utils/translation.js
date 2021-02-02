export default function translate(rosetta, rawText) {
    let text = rawText.split('')
    let translation = []

    for (let char of text) {
        if (rosetta.hasOwnProperty(char)) {
            translation.push(rosetta[char])
        } else {
            translation.push(char)
        }
    }

    return translation.join('')
}
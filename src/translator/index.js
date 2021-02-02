import { useEffect, useState } from 'react'
import translate from '../utils/translation'
import rosetta from '../utils/rosetta.json'

import Input from './input'
import Output from './output' 

export default function Translator() {
    const [input, setInput] = useState('')
    const [translation, setTranslation] = useState('')

    function updateInputState (e) {
        setInput(e.target.value)
    }

    useEffect(() => {
        setTranslation(translate(rosetta, input))
    }, [input])

return (
    <main className="translator-container">
        <Input updateTextState={updateInputState}/>
        <Output translation={translation}/>
    </main>
)}
import { useState, useRef, useEffect } from 'react'

export default function Output({ translation }) {
    const outputText = useRef(null)
    const [copied, setCopied] = useState(false)

    function copyToClip() {
        outputText.current.select()
        document.execCommand("copy")
    }

    function copiedToClip() {
        setCopied(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }, [copied])

return (
    <div className="output-container">
        <h2>Ⱦŗå∩ѕ⌠åŁëd</h2>
        
        {copied &&  
            <div className="copied-message">Copied!</div>
        }
        <textarea
            ref={outputText}
            className="output"
            onClick={copyToClip}
            readOnly={true}
            spellCheck={false}
            value={translation}
            onCopy={copiedToClip}
            />
        <p>Click the text to copy to clipboard</p>
    </div>
)}
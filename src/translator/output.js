export default function Output({ translation }) {
return (
    <div className="output-container">
        <h2>Ⱦŗå∩ѕ⌠åŁëd</h2>
        <textarea className="output" readOnly={true} spellCheck={false} value={translation}/>
    </div>
)}
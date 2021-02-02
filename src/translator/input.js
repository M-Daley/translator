export default function Input({ updateTextState }) {

return (
    <div className="input-container">
        <h2>Untranslated</h2>
        <textarea 
            className="input"
            onChange={updateTextState} />
    </div>
)}
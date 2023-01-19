import React from 'react'

export default function Translation({doStuff, setInput, result}) {
  return (
    <div className='translation-container'>
      <textarea className="text-area" cols={50} rows={10} onChange={(e) => setInput(e.target.value)}></textarea>
      <button className="action-btn" onClick={doStuff}>SUBMIT</button>
      <div className='result-container'>
        <h3 className="result-text">{result.length > 0 ? result : "Hi, I am happy to help you, Submit your question above!! \n" }</h3>
      </div>
    </div>
  )
}

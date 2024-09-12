import { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [response, setResponse] = useState('')

  const getInterpretation = async () => {
    const response = await fetch('http://localhost:8000/interpret', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ text }),
    })
      const data = await response.json()
      console.log(data);
      setResponse(data.response);

  }

  return (
    <div>
      <h1>Enter your dream</h1> 
      <p>Enter your dream and AI will interpret it for you</p>
      <textarea onChange={e => setText(e.target.value)} />
      <button onClick={getInterpretation}>Submit</button>
      <p>{response}</p>
    </div>
  )
}

export default App

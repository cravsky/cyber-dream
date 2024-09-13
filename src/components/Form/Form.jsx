import { useState } from 'react'

export default function Form() {

    const [userInput, setUserInput] = useState('')
    const [response, setResponse] = useState('')

    const getInterpretation = async () => {
        const response = await fetch('http://localhost:8000/interpret', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ text: userInput }),
        })
        const data = await response.json()
        console.log(data);
        setResponse(data.response);

    }

    return (
        <>
           
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Opisz swój sen</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Śniło mi się, że..." onChange={e => setUserInput(e.target.value)}></textarea>
                </label>
                <button className="btn btn-primary" onClick={getInterpretation}>Primary</button>
          
            <h1>Analiza snu</h1>
            <p className="py-6">
                {response}
            </p>
        </>

        // <div>
        //     <p>Enter your dream and AI will interpret it for you</p>
        //     <textarea onChange={e => setText(e.target.value)} />
        //     <button onClick={getInterpretation}>Submit</button>
        //     <p>{response}</p>
        // </div>
    )

}

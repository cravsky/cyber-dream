import { useState } from 'react'

export default function CoreSection() {

    const [userInput, setUserInput] = useState('')
    const [response, setResponse] = useState('')

    const requestUrl = 'https://cyber-dream-be-test.up.railway.app/interpret'
    // const requestUrl = 'http://localhost:8000/interpret'
    // const requestUrl = '/interpret'

    const getInterpretation = async () => {
        const response = await fetch(requestUrl, {
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
            <section className='p-5 text-center mx-auto'>
                <div className='max-w-xl mx-auto'>
                    <label className="block text-center mb-2">
                        <div className="label">
                            <span className="label-text">Opisz swój sen</span>
                        </div>
                        <textarea className="textarea textarea-bordered textarea-primary h-24 w-full max-w-xl" placeholder="Śniło mi się, że..." onChange={e => setUserInput(e.target.value)}></textarea>
                    </label>

                </div>

                <button className="btn btn-primary mt-2" onClick={getInterpretation}>Analizuj</button>

                <p className="py-24 text-left">
                    {response}
                </p>

            </section>
        </>

        // <div>
        //     <p>Enter your dream and AI will interpret it for you</p>
        //     <textarea onChange={e => setText(e.target.value)} />
        //     <button onClick={getInterpretation}>Submit</button>
        //     <p>{response}</p>
        // </div>
    )

}

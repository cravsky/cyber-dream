import { useState } from 'react'

export default function CoreSection() {

    const [userInput, setUserInput] = useState('')
    const [response, setResponse] = useState('')

    const requestUrl = 'https://cyber-dream-be-test.up.railway.app/api'
    const requestTestUrl = 'https://cyber-dream-be-test.up.railway.app/api/test'
    // const requestUrl = 'http://localhost:8000/api'
    // const requestTestUrl = 'http://localhost:8000/api/test'

    const getInterpretation = async (url) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ text: userInput }),
            mode: 'cors'
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

                <button className="btn btn-primary mt-2 mx-2" onClick={() => getInterpretation(requestUrl)}>PROD</button>
                <button className="btn btn-primary mt-2" onClick={() => getInterpretation(requestTestUrl)}>TEST</button >
                <p className="py-24 text-left">
                    {response}
                </p>

            </section >
        </>

        // <div>
        //     <p>Enter your dream and AI will interpret it for you</p>
        //     <textarea onChange={e => setText(e.target.value)} />
        //     <button onClick={getInterpretation}>Submit</button>
        //     <p>{response}</p>
        // </div>
    )

}

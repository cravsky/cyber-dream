import { useState } from 'react'

export default function CoreSection() {

    const [userInput, setUserInput] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false); // <-- New loading state

    const requestUrl = 'https://cyber-dream-be-test.up.railway.app/api'
    const requestTestUrl = 'https://cyber-dream-be-test.up.railway.app/api/test'
    // const requestUrl = 'http://localhost:8000/api'
    // const requestTestUrl = 'http://localhost:8000/api/test'

    const getInterpretation = async (url) => {
        setLoading(true); // <-- Show loading indicator
        try {
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
        } catch (error) {
            setResponse('Error fetching interpretation');
        } finally {
            setLoading(false); // <-- Hide loading indicator
        }

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

                <button
                    className="btn btn-primary mt-2 mx-2"
                    onClick={() => getInterpretation(requestUrl)}
                    disabled={loading} // Disable button while loading
                >
                    {loading ? 'Ładowanie...' : 'PROD'}
                </button>
                <button
                    className="btn btn-primary mt-2"
                    onClick={() => getInterpretation(requestTestUrl)}
                    disabled={loading}
                >
                    {loading ? 'Ładowanie...' : 'TEST'}
                </button>

                {/* Show loading indicator */}
                <div className="flex justify-center items-center mt-4 h-10">

                    {loading && (
                        <div className="flex justify-center items-center mt-4">
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
                        </div>
                    )}
                </div>
                <p className="py-4 px-4 text-left border border-gray-300 bg-white bg-opacity-30 text-gray-900 rounded-lg shadow-md backdrop-blur-md">
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

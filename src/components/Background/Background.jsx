import React from 'react'
import morpheusImage from '../../assets/morpheus.png';


export default function Background() {
    return (
        //     <div className="fixed top-0 left-0 w-full h-full bg-black z-[-1]">
        //     {/* Your static background */}
        //   </div>
        <div className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]" style={{
            backgroundImage: `url(${morpheusImage})`,
            filter: 'brightness(0.4)',
            opacity: 0.8,
        }}>
        </div>

    )
}

// Example with image background:
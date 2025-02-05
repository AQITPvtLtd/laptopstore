import React from 'react'
import Image from 'next/image'

const Slider = () => {
    return (
        <div className=''>
            {/* Background styling with correct syntax */}
            <div
                className="bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: 'url("/slider/slider1.png")',
                    minHeight: '500px',
                    backgroundRepeat: 'no-repeat',  // Correct property for no-repeat
                }}
            ></div>

            <div
                className="bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: 'url("/slider/slider2.png")',
                    minHeight: '800px',
                    backgroundRepeat: 'no-repeat',  // Correct property for no-repeat
                }}
            ></div>
    
        </div>
    )
}

export default Slider

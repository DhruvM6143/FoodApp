import React, { useEffect, useState } from 'react'
import { ClockLoader } from 'react-spinners'
const Success = () => {
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000); // Change the delay as per your requirement 2000ms = 2 seconds. 1000ms = 1 second. 500ms = 0.5 seconds. ect. 100ms = 0.1 second. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect. ect
    }, [])
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            {
                Loading ? (
                    <ClockLoader />
                ) :
                    <div>
                        <h2 className='text-3xl font-semiboldbold mb-4 text-center'>Order Successful !!</h2>
                        <p>Your order has been placed successfully</p>
                    </div>
            }


        </div>
    )
}

export default Success
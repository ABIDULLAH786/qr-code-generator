import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import Button from '../theme/button';

function Instagram() {
    const [username, setUsername] = useState(null);
    const [qr, setQR] = useState(null);
    function handleSubmit(e) {
        if (username)
            setQR('https://instagram.com/' + username);
        else
            alert('Please enter a username')
    }

    return (
        <div className='mx-2 my-5 '>
            <div>
                <h1 className='font-samibold text-3xl'>Instagram QR Code Generator</h1>
            </div>
            <div className='mt-5'>
                <div className='grid md:grid-cols-2'>
                    <div className='w-full'>
                        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                            <div className="flex -mr-px">
                                <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-base md:text-lg select-none">@</span>
                            </div>
                            <input type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="flex-shrink flex-grow leading-normal w-full flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative outline-none"
                                placeholder="Username"
                            />
                        </div>
                        <div className='mt-5 md:mt-0 flex sm:block items-center justify-center space-x-2'>
                            <Button
                                title="Generate QR Code"
                                className=""
                                onClick={handleSubmit}
                                aria_label={"submit button"}
                            />
                            <Button
                                title="Reset"
                                className=""
                                onClick={() => {
                                    setQR(null)
                                    setUsername(null)
                                }}
                                aria_label={"rest all fields button"}
                            />
                        </div>
                    </div>

                    {qr && <div className='mt-10 md:mt-0 my-2 flex items-center justify-center'>
                        <QRCode value={qr} />
                    </div>}
                </div>



            </div>

        </div>
    )
}

export default Instagram
import React, { useState } from 'react'
import Button from '../theme/button';
import RenderQRCode from '../components/QRCode';

function SMS() {
    const [number, setNumber] = useState(null);
    const [message, setMessage] = useState(null);
    const [qr, setQR] = useState(null);
    function handleSubmit() {
        if (number && message)
            setQR(`smsto:${number}:${message}`);
        else
            alert('Please fill all the fields')


    }
    return (
        <div className='mx-2 my-5 mt-20 lg:mt-10 '>
            <div>
                <h1 className='font-samibold text-3xl'>SMS QR Code Generator</h1>
            </div>
            <div className='grid md:grid-cols-2 mt-5'>
                <form className='w-full mb-2'>
                    <div className=' mb-2'>
                        <input type="text"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className="flex-shrink flex-grow leading-normal w-full flex-1 border h-10 border-grey-light rounded-lg px-3 relative outline-none"
                            placeholder="Receiver Phone number"
                        />
                    </div>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="description bg-gray-100 sec p-3 w-full h-60 border border-gray-300 rounded-lg outline-none" spellcheck="true"
                        placeholder="Describe everything you want to send in messages"
                    />
                    <div className='mt-5 md:mt-0 flex sm:block items-center justify-center space-x-2'>
                        <Button
                            type={"button"}
                            title="Generate QR Code"
                            className=""
                            onClick={handleSubmit}
                            aria_label={"submit button"}
                        />
                        <Button
                            type={"button"}
                            title="Reset"
                            className=""
                            onClick={() => {
                                setQR(null)
                                setMessage("")
                                setNumber("")
                            }}
                            aria_label={"rest all fields button"}
                        />
                    </div>
                </form>
                {qr && <RenderQRCode qr={qr} />}
            </div>

        </div>
    )
}

export default SMS
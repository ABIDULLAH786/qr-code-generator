import React, { useState } from 'react'
import QRCode from 'react-qr-code';
import Button from '../theme/button';

function SMS() {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [qr, setQR] = useState(null);
    function handleSubmit() {
        setQR(`smsto:${number}:${message}`);
        
    }
    return (
        <div className='mx-2 my-5 '>
            <div>
                <h1 className='font-samibold text-3xl'>SMS QR Code Generator</h1>
            </div>
            <div className='mt-5'>
                <div className='grid grid-cols-2'>
                    <div className='w-full mb-2'>
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
                        <Button
                            title="Generate QR Code"
                            className=""
                            onClick={handleSubmit}
                            aria_label={"submit button"}
                        />
                    </div>

                    {qr && <div className='my-2 flex items-center justify-center'>
                        <QRCode value={qr} />
                    </div>}
                </div>
                
            </div>

        </div>
    )
}

export default SMS
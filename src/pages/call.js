import React, { useState } from 'react'
import Button from '../theme/button';
import RenderQRCode from '../components/QRCode';

function Call() {
    const [number, setNumber] = useState("");
    const [qr, setQR] = useState(null);
    function handleSubmit() {
        if (number)
            setQR("TEL:" + number);
        else
            alert('Please enter number')

    }
    return (
        <div className='mx-2 my-5 mt-20 lg:mt-10 '>
            <div>
                <h1 className='font-samibold text-3xl'>Call QR Code Generator</h1>
            </div>
            <div className='mt-5'>
                <div className='grid md:grid-cols-2'>
                    <form className='w-full mb-2'>
                        <div className=' mb-2'>
                            <input type="text"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                className="flex-shrink flex-grow leading-normal w-full md:w-1/2 flex-1 border h-10 border-grey-light rounded-lg px-3 relative outline-none"
                                placeholder="phone number"
                            />
                        </div>
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
                                    setNumber("")
                                }}
                                aria_label={"rest all fields button"}
                            />
                        </div>
                    </form>

                    {qr && <RenderQRCode qr={qr} />}

                </div>

            </div>

        </div>
    )
}

export default Call
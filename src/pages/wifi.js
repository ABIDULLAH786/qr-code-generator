import React, { useEffect, useRef, useState } from 'react'
import QRCode from 'react-qr-code';
import Button from '../theme/button';
import Select from '../theme/select';

function Wifi() {
    const [authentication, setAuthentication] = useState('nopass');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(false);
    const [qr, setQR] = useState(null);

    function handleSubmit() {
        setQR(`WIFI:T:${authentication};S:${name};${authentication !== 'nopass' ? `P:${password};` : ''}H:${hidden};`);
    }
    return (
        <div className='mx-2 my-5 '>
            <div>
                <h1 className='font-samibold text-3xl'>Wifi QR Code Generator</h1>
            </div>
            <div className='mt-5'>
                <div className='grid md:grid-cols-2'>
                    <div className='w-full mb-2'>
                        <Select />
                        <div className=' mb-2'>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="leading-normal w-full  border h-10 border-grey-light rounded-lg px-3 outline-none"
                                placeholder="Network Name (SSID)"
                            />

                        </div>
                        <div className=' mb-2'>
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="leading-normal w-full border h-10 border-grey-light rounded-lg px-3  outline-none"
                                placeholder="Password (Optional)"
                            />
                        </div>
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


export default Wifi


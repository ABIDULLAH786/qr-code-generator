import React, { useState } from 'react'
import QRCode from 'react-qr-code';
import Button from '../theme/button';

function Email() {
    const [emailTo, setEmailTo] = useState('');
    const [subject, setSubject] = useState('');
    const [emailBody, setEmailBody] = useState('');
    const [qr, setQR] = useState(null);
    function handleSubmit() {
        setQR(`MATMSG:TO:${emailTo};SUB:${subject};BODY:${emailBody};;`);

        return false;
    }


    return (
        <div className='mx-2 my-5 '>
            <div>
                <h1 className='font-samibold text-3xl'>Mail QR Code Generator</h1>
            </div>
            <div className='mt-5'>
                <div className='grid grid-cols-2'>
                    <div className='w-full space-y-2'>
                        <input type="text"
                            value={emailTo}
                            onChange={(e) => setEmailTo(e.target.value)}
                            className="flex-shrink flex-grow leading-normal w-full flex-1 border h-10 border-grey-light rounded-lg px-3 relative outline-none"
                            placeholder="example@gmail.com"
                        />
                        <input type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="flex-shrink flex-grow leading-normal w-full flex-1 border h-10 border-grey-light rounded-lg px-3 relative outline-none"
                            placeholder="Add subject to mail"
                        />
                        <textarea
                            value={emailBody}
                            onChange={(e) => setEmailBody(e.target.value)}
                            className="description bg-gray-100 sec p-3 w-full h-60 border border-gray-300 rounded-lg outline-none" spellcheck="true"
                            placeholder="Describe everything you want to send in mail"
                        />
                       
                    </div>

                    {qr && <div className='my-2 flex items-center justify-center'>
                        <QRCode value={qr} />
                    </div>}
                </div>
                <Button
                    title="Generate QR Code"
                    className=""
                    onClick={handleSubmit}
                    aria_label={"submit button"}
                />
            </div>

        </div>
    )
}

export default Email
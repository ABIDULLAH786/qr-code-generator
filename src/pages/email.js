import React, { useState } from 'react'
import QRCode from 'react-qr-code';
import Button from '../theme/button';

function Email() {
    const [emailTo, setEmailTo] = useState(null);
    const [subject, setSubject] = useState(null);
    const [emailBody, setEmailBody] = useState(null);
    const [qr, setQR] = useState(null);
    function handleSubmit() {
        if (emailTo && subject && emailBody)
            setQR(`MATMSG:TO:${emailTo};SUB:${subject};BODY:${emailBody};;`);
        else
            alert('Please fill all the fileds')
    }


    return (
        <div className='mx-2 my-5 '>
            <div>
                <h1 className='font-samibold text-3xl'>Mail QR Code Generator</h1>
            </div>
            <div className='grid md:grid-cols-2 mt-5'>
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
                                setEmailBody(null)
                                setEmailTo(null)
                                setSubject(null)
                            }}
                            aria_label={"rest all fields button"}
                        />
                    </div>
                </div>

                {qr && <div className='mt-10 md:mt-0  my-2 flex items-center justify-center'>
                    <QRCode value={qr} />
                </div>}
            </div>

        </div>
    )
}

export default Email
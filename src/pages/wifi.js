import React, { useState } from 'react'
import Button from '../theme/button';
import Select from '../theme/select';
import RenderQRCode from '../components/QRCode';

function Wifi() {
    const [authentication, setAuthentication] = useState('nopass');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(false);
    const [qr, setQR] = useState(null);
    const [selectedOption, setSelectedOption] = useState("Select authentication type")

    function handleSubmit() {
        if (name && password && selectedOption !=="Select authentication type")
            setQR(`WIFI:T:${authentication};S:${name};${authentication !== 'nopass' ? `P:${password};` : ''}H:${hidden};`);
        else
            alert('Please fill all the fileds')

    }
    return (
        <div className='mx-2 my-5 '>
            <div>
                <h1 className='font-samibold text-3xl'>Wifi QR Code Generator</h1>
            </div>
            <div className='grid md:grid-cols-2 mt-5'>
                <form className='w-full mb-2'>
                    <Select
                        optionList={["WPA", "WEP"]}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
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
                                setName("")
                                setPassword("")
                                setSelectedOption("Select authentication type")
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


export default Wifi


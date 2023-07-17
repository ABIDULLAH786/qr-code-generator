import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import Button from '../theme/button';
const tabs = [
    {
        id: 1,
        name: "Tweet",
    }, {
        id: 2,
        name: "Profile"
    }
]
function Twitter() {
    const [text, setText] = useState('');
    const [qrText, setQrText] = useState(null);
    const [seletedTab, setSeletedTab] = useState("Tweet")
    function handleSubmit(e) {
        e.preventDefault();

        setQrText('https://twitter.com/' + (seletedTab === 'Profile' ? text : 'intent/tweet?text=' + text));

        return false;
    }
    useEffect(() => {
        if (text?.lenght > 0) {
            setQrText(null)
        }
    }, [text]);

    useEffect(() => {
        setText("")
        setQrText(null)

    }, [seletedTab]);

    return (
        <div className='mx-2 my-5 '>
            <div>
                <h1 className='font-samibold text-3xl'>Twitter QR Code Generator</h1>
            </div>
            <div className='mt-5'>
                <div className='grid grid-cols-2'>
                    <div className='w-full'>
                        <ul className='flex cursor-pointer mb-3'>
                            {tabs.map(tab => <li key={tab.id} className={`py-2 px-6 rounded-t-lg ${tab.name === seletedTab ? "bg-blue-500 text-white" : "text-gray-500 bg-gray-200"}`} onClick={() => setSeletedTab(tab.name)}>{tab.name}</li>)}
                        </ul>
                        {seletedTab === "Tweet" && <textarea className="description bg-gray-100 sec p-3 w-full h-60 border border-gray-300 rounded-lg outline-none" spellcheck="true" placeholder="Describe everything you want to post on twitter"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />}
                        {seletedTab === "Profile" && <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                            <div className="flex -mr-px">
                                <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-base md:text-lg select-none">@</span>
                            </div>
                            <input type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)} 
                                className="flex-shrink flex-grow leading-normal w-full flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative outline-none"
                                placeholder="Username"
                            />
                        </div>}
                    </div>

                    {qrText && <div className='my-2 flex items-center justify-center'>
                        <QRCode value={qrText} />
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

export default Twitter
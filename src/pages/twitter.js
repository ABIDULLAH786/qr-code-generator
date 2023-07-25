import React, { useEffect, useState } from 'react'
import Button from '../theme/button';
import RenderQRCode from '../components/QRCode';
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
    const [username, setUsername] = useState('');
    const [qr, setQR] = useState(null);
    const [seletedTab, setSeletedTab] = useState("Tweet")
    function handleSubmit(e) {
        if (username)
            setQR('https://twitter.com/' + (seletedTab === 'Profile' ? username : 'intent/tweet?text=' + username));
        else
            alert("Please enter username");
    }
    useEffect(() => {
        if (username?.lenght > 0) {
            setQR(null)
        }
    }, [username]);

    useEffect(() => {
        setUsername("")
        setQR(null)

    }, [seletedTab]);

    return (
        <div className='mx-2 my-5 mt-20 lg:mt-10 '>
            <div>
                <h1 className='font-samibold text-3xl'>Twitter QR Code Generator</h1>
            </div>
            <div className='mt-5'>
                <div className='grid grid-cols-2'>
                    <form className='w-full'>
                        <ul className='flex cursor-pointer mb-3'>
                            {tabs.map(tab => <li key={tab.id} className={`py-2 px-6 rounded-t-lg ${tab.name === seletedTab ? "bg-blue-500 text-white" : "text-gray-500 bg-gray-200"}`} onClick={() => setSeletedTab(tab.name)}>{tab.name}</li>)}
                        </ul>
                        {seletedTab === "Tweet" && <textarea className="description bg-gray-100 sec p-3 w-full h-60 border border-gray-300 rounded-lg outline-none" spellcheck="true" placeholder="Describe everything you want to post on twitter"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />}
                        {seletedTab === "Profile" && <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                            <div className="flex -mr-px">
                                <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-base md:text-lg select-none">@</span>
                            </div>
                            <input type="text"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}
                                className="flex-shrink flex-grow leading-normal w-full flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative outline-none"
                                placeholder="Username"
                            />
                        </div>}

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
                                    setUsername("")
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

export default Twitter
import React, { useEffect, useRef, useState } from 'react'
import QRCode from 'react-qr-code';
import Button from '../theme/button';
import Select from '../theme/select';

function Youtube() {
    const [search, setSearch] = useState(null);
    const [url, setUrl] = useState(null);
    const [qr, setQR] = useState(null);
    const [selectedOption, setSelectedOption] = useState("Select Option")

    function handleSubmit() {

        if (selectedOption === "Youtube Search" && search) {
            setQR('https://www.youtube.com/results?search_query=' + search?.split(" ").join("+"));
        } else if (selectedOption === "Youtube Search" && !search) {
            alert("Please add a video to search text")
        }
        if (selectedOption === "Youtube URL" && url) {
            setQR(url);
        } else if (selectedOption === "Youtube URL" && !url) {
            alert("Please add a video url")
        }
    }
    return (
        <div className='mx-2 my-5 '>
            <div>
                <h1 className='font-samibold text-3xl'>Youtube QR Code Generator</h1>
            </div>
            <div className='mt-5'>
                <div className='grid md:grid-cols-2'>
                    <div className='w-full mb-2'>
                        <Select optionList={["Youtube Search", "Youtube URL"]}
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                        />
                        {selectedOption === "Youtube Search" && <div className=' mb-2'>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="leading-normal w-full  border h-10 border-grey-light rounded-lg px-3 outline-none"
                                placeholder="Search text..."
                            />

                        </div>}
                        {selectedOption === "Youtube URL" && <div className=' mb-2'>
                            <input
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="leading-normal w-full border h-10 border-grey-light rounded-lg px-3  outline-none"
                                placeholder="Paste url"
                            />
                        </div>}
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
                                    setUrl(null)
                                    setSelectedOption("Select Option")
                                    setSearch(null)
                                }}
                                aria_label={"rest all fields button"}
                            />
                        </div>
                    </div>

                    {qr && <div className='my-2 flex items-center justify-center mt-10 md:mt-0'>
                        <QRCode value={qr} />
                    </div>}
                </div>

            </div>

        </div>
    )
}


export default Youtube


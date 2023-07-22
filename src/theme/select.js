import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { RxCross2 } from "react-icons/rx"
export default function Select() {
    const [expend, setExpend] = useState(false)
    const [selectedOption, setSelectedOption] = useState("Select authentication type")
    const ref = useRef()
    const optionList = ["WPA", "WEP"]
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-overlay')
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
            //document.body.style.overflow = 'unset';
            //document.body.classList.remove('modal-overlay')
        };
    }, []);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setExpend(false);
        }
    };
    return (
        <div ref={ref} className='w-full relative select-none'>
            <div class="my-2 bg-white p-1 flex border border-gray-200 rounded-lg">
                <div class="flex flex-auto flex-wrap"></div>
                <input value={selectedOption} disabled class="p-1 px-2 disabled:bg-white appearance-none outline-none w-full text-gray-800 " />
                {/* clear icon */}
                {selectedOption !== "Select authentication type" && <div>
                    <button class="cursor-pointer w-6 h-full flex items-center text-red-500 outline-none focus:outline-none"
                        onClick={(e) => {
                            setSelectedOption("Select authentication type")
                            setExpend(false)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x w-4 h-4">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>}
                {/* expend button */}
                <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
                    onClick={() => setExpend(!expend)}
                >
                    <MdOutlineKeyboardArrowDown className={`cursor-pointer feather feather-chevron-up w-7 h-7 text-gray-600 outline-none focus:outline-none hover:text-blue-500  ${expend == true && "transform rotate-180"}`} />
                </div>
            </div>
            {/* expended options/list */}
            {expend && <div class="absolute shadow top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
                <ul class="flex flex-col w-full">
                    {optionList.map((option, index) =>
                        <li class={`p-2 pl-4 flex cursor-pointer w-full border-gray-100 border-b 
                            items-center bg-white relative hover:bg-blue-500 hover:text-white 
                            ${index == 0 && "rounded-t"}`}
                            onClick={() => {
                                setSelectedOption(option)
                                setExpend(false)
                            }}
                        >
                            <span class="">
                                {option}
                            </span>
                        </li>
                    )}

                </ul>
            </div>}
        </div>
    )
}
import React from 'react'
import { FaComments, FaLinkedin, FaTwitter, FaWhatsapp, FaWifi, FaYoutube } from 'react-icons/fa';
import { BiLogoGmail, BiSolidPhone } from 'react-icons/bi';
import Card from '../theme/containers/card';
import { InstagramIcon } from '../constants/icons';
const features = [
    {
        id: 1,
        name: "Twitter",
        Icon: FaTwitter,
        href: "/twitter",
        color: "text-[#00acee]"
    },
    {
        id: 2,
        name: "Instagram",
        Icon: InstagramIcon,
        href: "/instagram",
        color: ""
    },
    {
        id: 3,
        name: "Youtube",
        Icon: FaYoutube,
        href: "/youtube",
        color: "text-[#c4302b]"
    },
    ,
    {
        id: 4,
        name: "Whatsapp",
        Icon: FaWhatsapp,
        href: "/whatsapp",
        color: "text-green-400"
    }, {
        id: 5,
        name: "Linkedin",
        Icon: FaLinkedin,
        href: "/linkedin",
        color: "text-blue-700"
    },
    {
        id: 6,
        name: "Mail",
        Icon: BiLogoGmail,
        href: "/mail",
        color: "text-[#BB001B]"
    },
    {
        id: 7,
        name: "Wifi",
        Icon: FaWifi,
        href: "/wifi",
        color: "text-[#00ff00]"
    },
    {
        id: 8,
        name: "SMS",
        Icon: FaComments,
        href: "/sms",
        color: "text-[#004f9f]"
    },
    {
        id: 9,
        name: "Call",
        Icon: BiSolidPhone,
        href: "/call",
        color: "text-[#2c2c2c]"
    },

]
function Home() {
    return (
        <div className='flex flex-wrap justify-center items-center mt-20'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5 '>
                {features?.map((feature, index) =>
                    <Card
                        title={feature?.name}
                        icon={<feature.Icon className={`w-10 h-10 ${feature.color}`} />}
                        href={feature.href}
                        width={"w-52"} height={"h-52"}
                        className={"transition-transform ease-in-out hover:scale-105"}
                        titleStyle="font-semibold text-md sm:text-lg md:text-xl " />
                )}
            </div>
        </div>
    )
}

export default Home
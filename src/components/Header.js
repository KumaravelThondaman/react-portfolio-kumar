import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Header(){
    const headerList = [
        {
            id:1,
            name: "Home"
        },
        {
            id:2,
            name: "About"
        },
        {
            id:3,
            name: "Projects"
        },
        {
            id:4,
            name: "Resume"
        },
        {
            id:5,
            name: "Contact"
        }
    ];

    const [toggleNav, setToggleNav] = useState(false);
    return(
        <header className="flex justify-between px-10">
            <div className="flex">
                <div className="text-green-400">Kumaravel Thondaman</div>
            </div>
            <div className="hidden md:block">
                <ul className="flex flex-end gap-10">
                    {headerList.map((item) => (
                        <li className="header-li" key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
            { toggleNav &&
                            <div className="block md:hidden mobile-nav">
                            <ul className="flex flex-col">
                                {headerList.map((item) => (
                                    <li className="border-nav" key={item.id}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
            }

            <button onClick={() => setToggleNav(!toggleNav)} className="block md:hidden"> 
                <Bars3Icon className="h-6"/>
            </button>
        </header>
    )
}
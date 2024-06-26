import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import {GiIceCube } from 'react-icons/gi';
import {FaTemperatureLow} from 'react-icons/fa';
import {FiSettings} from 'react-icons/fi';
import {TbMapPins} from 'react-icons/tb';
import {MdForest} from 'react-icons/md';


const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
        <div className='fixed w-90 h-screen p-3 bg-black border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <div>
                    <img className='pb-6'src='/../saf-logo.png' alt='safaricom-logo' width='125' height='160'>                                   
                    </img>                  
                    </div>  
            
                <Link href ='/'>
                    <div className='bg-green-600 text-white p-3 rounded-lg inline-block'>
                        <GiIceCube size = '40'/>
                        IOT CUBE
                    </div>
                </Link>
                <span className='border-b-[2px] border-gray-200 w-full py-2'></span>
                <Link href ='/' >
                    <div className='bg-green-600 text-white p-4 mt-8 rounded-lg inline-block' >
                        <RxDashboard size = '40'/>
                        HOME
                    </div>
                </Link>

                <Link href ='/readings' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <FaTemperatureLow size = '40'/>
                        READINGS
                    </div>
                </Link>

                {/* <Link href ='/users' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <MdForest size = '40'/>
                        REGIONS
                    </div>
                </Link> */}



                <Link href ='/maps' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <TbMapPins size = '40'/>
                        MAP
                    </div>
                </Link>

                <Link href ='/' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <FiSettings size = '60'/>
                    </div>
                </Link>


            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
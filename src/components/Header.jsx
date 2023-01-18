import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

export default function Header() {
    const location=useLocation()
    const navigate=useNavigate()
    function realme(ps){
        if(ps===location.pathname){
            return true
        }
    }
  return (
    <>
    <div className='bg-white border-b-2 shadow-sm sticky top-0 z-11'>
        <header className='flex justify-between items-center px-5 max-w-6xl max-auto'>
             <div className=''>
                < img src='./airbnb.png'
                alt='airbnb'
                className='h-12 cursor-pointer'
                onClick={ ()=> navigate('/')} />
             </div>
             <div className=''>
                <ul className='flex space-x-6'>
                    <li
                    className={` py-3 text-slate-500 text-sm font-semibold border-b-[3px] cursor-pointer
                    border-b-transparent ${realme('/') && 'text-black border-b-red-600'}
                    `}
                    onClick={ ()=>navigate('/')}
                   
                    >
                        Home</li>
                        <li
                    className={` py-3 text-slate-500 text-sm font-semibold border-b-[3px] cursor-pointer
                    border-b-transparent ${realme('/Airbnb') && 'text-black border-b-red-600'}
                    `}
                    onClick={ ()=>navigate('/Airbnb')}
                   
                    >
                        Airbnb</li>
                        <li
                    className={` py-3 text-slate-500 text-sm font-semibold border-b-[3px] cursor-pointer
                    border-b-transparent ${realme('/Singin') && 'text-black border-b-red-600'}
                    `}
                    onClick={ ()=>navigate('/Signin')}
                   
                    >
                        Signin</li>
                    {/* <li>Signup</li> */}
                </ul>

             </div>
        </header>

    </div>
    </>
  )
}

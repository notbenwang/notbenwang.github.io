import React from 'react'

export default function ContactButton({setOpen, setDialogTo}) {
    return (
    <div className=" perspective-400 -translate-y-[-96px] translate-x-[-20px]">
        <div className="container w-fit transform rotate-x-[-12deg] rotate-y-[60deg] -translate-z-0">
            <div className=" box-border w-fit rotate-[-10deg] rounded-lg bg-rose-700
                hover:bg-rose-600 hover:scale-125 duration-200 transition ease-in-out shadow-inner p-3"
                onClick={() => {setOpen(true); setDialogTo(true);}}>
                    <p className='text-center text-white font-bold text-sm'>
                        CONTACT
                    </p>
            </div>
        </div>
    </div>
  )
}

import React from 'react'

export default function ContactButton({setOpen, setDialogTo}) {
    return (
    <div className=" ml-[55%]">
        <div className="container w-fit">
            <div className=" box-border w-28 rounded-lg bg-slate-700
                hover:bg-amber-500 hover:scale-125 duration-200 transition ease-in-out shadow-inner p-3"
                onClick={() => {setOpen(true); setDialogTo(true);}}>
                    <p className='text-center text-white font-bold text-sm'>
                        CONTACT
                    </p>
            </div>
        </div>
    </div>
  )
}

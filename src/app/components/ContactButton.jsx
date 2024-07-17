import React from 'react'

export default function ContactButton({setOpen, setDialogTo}) {
    return (
    <div className="-translate-y-[80px] translate-x-[320px]">
        <div className="container w-fit">
            <div className=" box-border w-fit rounded-lg bg-slate-700
                hover:bg-rose-600 shadow-inner hover:scale-125 duration-200 transition ease-in-out shadow-inner p-3"
                onClick={() => {setOpen(true); setDialogTo(true);}}>
                    <p className='text-center text-white font-bold text-sm'>
                        CONTACT
                    </p>
            </div>
        </div>
    </div>
  )
}

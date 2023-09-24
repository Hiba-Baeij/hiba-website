"use client"
import React, { useState } from 'react'

export default function PhoneNumberCopy() {
    const phoneNumber = '+963 967283981'; // Replace with your phone number
    const [copied, setCopied] = useState(false);

    const handleCopyClick = async () => {
        try {
            // Use the Clipboard API to copy the phone number to the clipboard
            setCopied(true)
            await navigator.clipboard.writeText(phoneNumber);
            setTimeout(() => setCopied(false), 2000)


        } catch (error) {
            console.error('Error copying phone number:', error);
        }
    };

    return (
        <div className='relative cursor-pointer'>
            <button className='font-bold' onClick={handleCopyClick}>
                {phoneNumber}
            </button>
            {
                copied ?
                    <div className='absolute z-40 -right-5 -top-12'>
                        <div className="inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-lg rounded-bl-none shadow-sm ">
                            Copied
                        </div>
                        <svg className='-mt-1' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="#0F1212" d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z" /></g></svg>
                    </div> : null
            }

        </div>
    );
}

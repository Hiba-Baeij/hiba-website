"use client"
import PBtn from '@/app/components/PBtn';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaDownload } from 'react-icons/fa6';

export default function AboutBtn() {
    const [cvURL, setCVURL] = useState('');
    const handleButtonClick = () => {
        const googleDocsURL = 'https://docs.google.com/document/d/1wnoNLMPtUJqTbsE3qIOoxVwB6dgQTls2d6qIsrOO_8I/export?format=pdf'; // Replace with your Google Docs file URL

        // Function to trigger the download
        const downloadCV = async () => {
            try {
                const response = await fetch(googleDocsURL);
                const blob = await response.blob();

                // Create a URL for the blob
                const blobURL = URL.createObjectURL(blob);

                // Set the URL in state to trigger the download link
                setCVURL(blobURL);
            } catch (error) {
                console.error('Error downloading CV:', error);
            }
        };
        downloadCV()
    };
    return (
        <PBtn className='top-4 -left-2' border={<Image src='/shapes/ovals/oval-red.svg' height={97} width={200} alt='border' />} onClick={() => handleButtonClick} text='Download CV' icon={<FaDownload size={20} />}></PBtn>

    )
}

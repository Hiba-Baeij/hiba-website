"use client"
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaDownload } from 'react-icons/fa6';

export default function AboutBtn() {
    const [cvURL, setCVURL] = useState('');
    useEffect(() => {
        const googleDocsURL = 'https://docs.google.com/document/d/1wnoNLMPtUJqTbsE3qIOoxVwB6dgQTls2d6qIsrOO_8I/export?format=pdf';
        const downloadCV = async () => {
            try {
                const response = await fetch(googleDocsURL);
                const blob = await response.blob();
                const blobURL = URL.createObjectURL(blob);
                setCVURL(blobURL);
            } catch (error) {
                console.error('Error downloading CV:', error);
            }
        };

        downloadCV();
    }, []);
    const handleDownloadClick = () => {
        console.log(cvURL);
        console.log("cvURL");

        if (cvURL) {
            const link = document.createElement('a');
            link.href = cvURL;
            link.download = 'cv.pdf';
            link.click();
            URL.revokeObjectURL(link.href);
        }
    };
    return (
        // <PBtn className='top-4 -left-2' border={<Image src='/shapes/ovals/oval-red.svg' height={97} width={200} alt='border' />} onClick={handleDownloadClick} text='Download CV' icon={<FaDownload size={20} />}></PBtn>
        <Button onClick={handleDownloadClick} color="secondary" size='md' radius='full' endContent={<FaDownload size={20} />}>Download CV</Button>
    )
}

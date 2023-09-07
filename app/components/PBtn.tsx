// import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import React, { ReactNode } from 'react'
type ButtonProps = {
    text: string;
    className?: string;
    icon?: ReactNode;
    onClick: () => void;
};
export default function PBtn(props: ButtonProps) {
    return (
        <button className={`${props.className} bg-dark shadow-shap rounded-full flex justify-center items-center `}>
            <span className='mx-6'>{props.text}</span>
            <div className='bg-primary text-white rounded-full p-3 m-1'>
                {props.icon}
            </div>
        </button>
    )
}

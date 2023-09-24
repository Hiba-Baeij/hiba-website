import React from 'react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

function FullScreenDialog({ isOpen, onClose }: Props) {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            {/* Add your dialog content here */}
            <div className="bg-black/70 backdrop-blur-sm p-8 rounded shadow-lg w-screen h-screen">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
                    Close
                </button>
                <h2 className="text-2xl font-bold mb-4">Fullscreen Dialog</h2>
                <p>Your dialog content goes here.</p>
            </div>
        </div>
    );
};

export default FullScreenDialog;
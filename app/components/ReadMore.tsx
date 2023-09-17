"use client"

import React, { useState, useMemo } from 'react';

interface Props {
    text: string;
    wordsCount?: number;
    default?: boolean;
}

export default function ReadMoreText({
    text,
    wordsCount = 20,
    default: defaultExpanded = false,
}: Props) {
    const [expand, setExpand] = useState(defaultExpanded);

    const textLength = useMemo(() => text?.split(' ').length ?? 0, [text]);

    const truncatedText =
        textLength <= wordsCount
            ? text
            : `${text?.split(' ').slice(0, wordsCount).join(' ')} ...`;

    return (
        <p className="transition-all" style={{ lineHeight: 2 }}>
            {expand || textLength <= wordsCount ? text : truncatedText}
            {text && textLength > wordsCount && (
                <button
                    className="text-xl hover:bg-white underline border-primary transition hover:bg-opacity-10 p-1 rounded-lg"
                    onClick={() => setExpand(!expand)}
                >
                    {expand ? 'Read Less' : 'Read More'}
                </button>
            )}
        </p>
    );
}

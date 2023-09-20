'use client'
import React, { useEffect, useRef } from 'react';
import Vara from 'vara';

type VaraTextProps = {
    text: string;
    fontSize?: number;
    onVaraInit?: (varaInstance: any) => void;
};

const VaraText: React.FC<VaraTextProps> = ({ text, fontSize = 32, onVaraInit }) => {
    const containerId = "vara-container";
    const varaRef = useRef<InstanceType<typeof Vara> | null>(null);

    useEffect(() => {
        if (!varaRef.current) {
            varaRef.current = new Vara(
                `#${containerId}`,
                '/handwriting.json',
                [
                    {
                        text,
                        fontSize,
                        id: "jack",
                        strokeWidth: 1.5,
                        letterSpacing: -2,
                        duration: 1300,
                        textAlign: "center",
                        delay: 800,
                        color: "hsl(var(--bc))",
                    }
                ]
            );
            if (onVaraInit) {
                onVaraInit(varaRef.current);
            }
        }
    }, [text, fontSize, onVaraInit]);

    return <div id={containerId}></div>;
};

export default VaraText;

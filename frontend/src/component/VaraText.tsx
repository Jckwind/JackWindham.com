import React, { useEffect } from 'react';
import Vara from 'vara';

type VaraTextProps = {
  text: string;
  fontSize?: number;
};

const VaraText: React.FC<VaraTextProps> = ({ text, fontSize = 32 }) => {
    const containerId = "vara-container";

    useEffect(() => {
        new Vara(
            `#${containerId}`,
            '/handwriting.json',
            [
                {
                text,
                fontSize,
                strokeWidth: 1.2,
                letterSpacing: -14,
                delay:500,
                duration:2000,
                textAlign:"center",
                color: "#002b59"
                }
            ]
        );
      }, [text, fontSize]);
    
    return <div id={containerId}>
        <svg>
            <defs>
                <filter id="noiseFilter1">
                <feTurbulence baseFrequency="0.05" />
                <feDisplacementMap in="SourceGraphic" scale="3" />
                <feGaussianBlur stdDeviation="0.25" />
                <feComposite operator="in" in="SourceGraphic" />
                </filter>
            </defs>
        </svg>
    </div>;
};

export default VaraText;

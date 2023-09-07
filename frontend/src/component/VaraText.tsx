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
                strokeWidth: 1,
                letterSpacing: -14,
                delay:500,
                duration:4000,
                textAlign:"center",
                }
            ]
        );
      }, [text, fontSize]);
    
    return <div id={containerId}></div>;
};

export default VaraText;

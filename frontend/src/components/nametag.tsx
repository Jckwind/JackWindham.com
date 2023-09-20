import React from 'react';
import VaraText from '@/components/VaraText';
import Image from 'next/image';
import Vara from 'vara';
import "./css/nametag.css";

const Nametag: React.FC = () => {

    let varaInstance: InstanceType<typeof Vara>;
    const onVaraInit = (instance: any) => { varaInstance = instance; };

    return (
        <div className="sticker-holder flex justify-center">
            <Image src="mynameis.svg" alt="My Name Is" width={500} height={300} className='welcome-sticker'/>
            <VaraText text="Jack" fontSize={40} onVaraInit={onVaraInit} />
        </div>
    );
};

export default Nametag;
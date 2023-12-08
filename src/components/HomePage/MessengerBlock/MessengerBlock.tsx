import React from 'react';

import Image from 'next/image';

import MessengerImage from '../../../../public/img/messenger.png';
import styles from './MessengerBlock.module.scss';

const MessengerBlock:React.FC = () => {

    return (
        <div>
            <Image 
                src={MessengerImage}
                alt='Messenger'
            />
        </div>
    );
};

export default MessengerBlock;

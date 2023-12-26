import React from 'react';

import { Text } from '@chakra-ui/react';
import Image from 'next/image';

import MessengerImage from '../../../../public/img/messenger.png';
import styles from './MessengerBlock.module.scss';

const MessengerBlock:React.FC = () => {

    return (
        <div
            className={styles.rowCont}
        >
            <Image
                className={styles.image}
                src={MessengerImage}
                alt='Messenger'
            />
            <div className={styles.textCol}>
                <Text
                    className={styles.text}
                    fontSize='2xl'
                >
                    Use SDK for client and server together with a self-hosted server to speed up
                    real-time application development
                </Text>
            </div>
        </div>
    );
};

export default MessengerBlock;

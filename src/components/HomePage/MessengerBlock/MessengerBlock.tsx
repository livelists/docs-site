import React from 'react';

import { Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineFileText } from 'react-icons/ai';

import { REACT_SDK_PAGE } from 'const/http/CLIENT_URLS';

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
                    Using flexible client code you can create a full-fledged chat system integrated into
                    your application
                </Text>
                <Link
                    href={REACT_SDK_PAGE}
                >
                    <Button
                        className={styles.getStartedButton}
                        rightIcon={<AiOutlineFileText />}
                        colorScheme='messenger'
                    >
                        Read docs
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default MessengerBlock;

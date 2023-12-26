import React from 'react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Heading, Highlight, Text, Button } from '@chakra-ui/react';

import styles from './MainInfo.module.scss';

const MainInfo:React.FC = () => {
    return (
        <div className={styles.cont}>
            <Heading
                lineHeight='tall'
                className={styles.heading}
            >
                <Highlight
                    query='LiveLists'
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                >
                    Build chats faster with LiveLists
                </Highlight>
            </Heading>
            <Text
                className={styles.text}
                fontSize='2xl'
            >
                Use SDK for client and server together with a self-hosted server to speed up
                real-time application development
            </Text>
            <Button
                className={styles.getStartedButton}
                rightIcon={<ArrowForwardIcon />}
                colorScheme='messenger'
            >
                Get started
            </Button>
        </div>
    );
};

export default MainInfo;

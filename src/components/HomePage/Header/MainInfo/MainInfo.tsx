import React from 'react';

import { Heading, Highlight } from '@chakra-ui/react';

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
        </div>
    );
};

export default MainInfo;

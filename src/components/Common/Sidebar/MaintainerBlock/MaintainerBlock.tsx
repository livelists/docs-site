import React from 'react';

import {
    Avatar,
    Text,
} from '@chakra-ui/react';

import styles from './MaintainerBlock.module.scss';

interface IProps {

}

export const MaintainerBlock = () => {
    return (
        <div
            className={styles.cont}
        >
            <Avatar
                src={'../../../../public/img/avatar.png'}
            />
            <Text>
                Maintainer
            </Text>
        </div>
    );
};

export default MaintainerBlock;
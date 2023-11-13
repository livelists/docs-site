import React from 'react';

import {
    Avatar,
    Text,
    Link,
} from '@chakra-ui/react';

import { MAINTAINER_URL } from 'const/http/MAINTAINER_URL';

import styles from './MaintainerBlock.module.scss';

interface IProps {

}

export const MaintainerBlock = () => {
    return (
        <div
            className={styles.cont}
        >
            <Avatar
                src={'/img/avatar.png'}
            />
            <Link
                target='_blank'
                href={MAINTAINER_URL}
            >
                <Text>
                    Maintainer
                </Text>
            </Link>
        </div>
    );
};

export default MaintainerBlock;
import React from 'react';

import { Link, Text } from '@chakra-ui/react';
import { CgNpm } from 'react-icons/cg';

import styles from './NpmLink.module.scss';

interface IProps {
    href: string,
    label: string,
}

const NpmLink:React.FC<IProps> = ({
    href,
    label,
}) => {
    return (
        <Link
            href={href}
            className={styles.cont}
            target='_blank'
            rel='noopener'
        >
            <div className={styles.iconCont}>
                <CgNpm
                    className={styles.icon}
                />
            </div>
            <Text
                className={styles.text}
            >
                {label}
            </Text>
        </Link>
    );
};

export default NpmLink;

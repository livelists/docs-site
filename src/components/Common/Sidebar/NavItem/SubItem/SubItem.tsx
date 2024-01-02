import React from 'react';

// eslint-disable-next-line import/named
import { Flex } from '@chakra-ui/react';
import { cnb } from 'cnbuilder';
import Link from 'next/link';
// eslint-disable-next-line import/named
import { useRouter } from 'next/router';

import styles from './SubItem.module.scss';

interface NavItemProps {
    href: string;
    name: string;
}
const SubItem = ({ href, name }:NavItemProps) => {
    const router = useRouter();

    if (router.pathname === href) {
        return (
            <div className={cnb(styles.selectedCont, styles.cont)}>
                {name}
            </div>
        );
    }

    return (
        <Link href={href} style={{ textDecoration: 'none' }}>
            <div className={cnb(styles.notSelectedCont, styles.cont)}>
                {name}
            </div>
        </Link>
    );
};

export default SubItem;
import React from 'react';

import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

import styles from './PagesNavigation.module.scss';

interface IPageInfo {
    label: string,
    url: string,
}

interface IProps {
    prevPage?: IPageInfo,
    nextPage?: IPageInfo,
}

const PagesNavigation:React.FC<IProps> = ({
    prevPage,
    nextPage,
}) => {
    return (
        <div className={styles.cont}>
            <div className={styles.prevCont}>
                {prevPage && (
                    <>
                        <Text className={styles.prevText}>
                            Previous
                        </Text>
                        <Link
                            href={prevPage.url}
                        >
                            <Text
                                color='blue.500'
                                fontWeight={600}
                                fontSize={24}
                                className={styles.linkText}
                            >
                                <ChevronLeftIcon />
                                <>{prevPage.label}</>
                            </Text>
                        </Link>
                    </>
                )}
            </div>
            <div className={styles.nextCont}>
                {nextPage && (
                    <>
                        <Text className={styles.nextText}>
                            Next
                        </Text>
                        <Link
                            href={nextPage.url}
                        >
                            <Text
                                fontWeight={600}
                                color='blue.500'
                                fontSize={24}
                                className={styles.linkText}
                            >
                                <>{nextPage.label}</>
                                <ChevronRightIcon />
                            </Text>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default PagesNavigation;

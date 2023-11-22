import React, { ReactElement } from 'react';

import styles from './Text.module.scss';

interface IProps {
    children: ReactElement
}

const Text:React.FC<IProps> = ({
    children
}) => {

    return (
        <div className={styles.cont}>
            {children}
        </div>
    );
};

export default Text;

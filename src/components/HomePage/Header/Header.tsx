import React from 'react';

import { useApp } from '../../../context/AppContext';
import { Example } from './Example';
import styles from './Header.module.scss';
import { MainInfo } from './MainInfo';

const Header:React.FC = () => {
    const {
        appState
    } = useApp();

    return (
        <div className={styles.cont}>
            <MainInfo />
            {appState.accessToken && (
                <Example
                    accessToken={appState.accessToken}
                />
            )}
        </div>
    );
};

export default Header;

import React, { useEffect, useState } from 'react';

import { Spinner } from '@chakra-ui/react';
import { WSConnector } from 'livelists-js-core';
import { useWsConnection } from 'livelists-react-sdk';

import { ChatComponent } from './ChatComponent';
import styles from './Example.module.scss';

interface IProps {
    accessToken: string,
}

const Example:React.FC<IProps> = ({
    accessToken,
}) => {
    const [ws, setWs] = useState<WSConnector | null>(null);

    const {
        onGetConnection,
    } = useWsConnection({
        url: 'wss://livelists.tech/livelists-ws/',
        accessToken,
    });
    
    useEffect(() => {
        const handleGetConnection = async () => {
            const wsConnection = (await onGetConnection()).current;
            setWs(wsConnection);
        };
        handleGetConnection();
    }, []);

    return (
        <div className={styles.cont}>
            {!ws ? (
                <div className={styles.loaderCont}>
                    <Spinner />
                </div>
            ) : (
                <ChatComponent
                    wsConnector={ws}
                    selectedChannelId='chat._id'
                />
            )}
        </div>
    );
};

export default Example;

import React, { useEffect } from 'react';

import { Spinner } from '@chakra-ui/react';
import { WSConnector } from 'livelists-js-core';
import {
    useChannel,
    MessagesList,
    ChatInput,
    HistoryMessages,
    RecentMessages,
    ChannelInfo,
} from 'livelists-react-sdk';


import styles from './Messenger.module.scss';


interface IProps {
    wsRef: WSConnector,
    channelId: string,
}

const Messenger:React.FC<IProps> = ({
    wsRef,
    channelId,
}) => {
    const {
        join,
        publishMessage,
        recentMessages,
        historyMessages,
        connectionState,
        isLoadingHistory,
        loadMoreMessages,
        scrollToBottomKey,
        readMessage,
        initialScroll,
    } = useChannel({
        channelId,
        wsConnector: wsRef,
    });

    useEffect(() => {
        join();
    }, []);

    if (connectionState === 'connecting') {
        return (
            <div className={styles.loaderCont}>
                <Spinner />
            </div>
        );
    }

    if (connectionState === 'connectionError') {
        return (
            <p>
                Connection error
            </p>
        );
    }
    
    return (
        <div className={styles.content}>
            <ChannelInfo />
            <MessagesList
                initialScroll={initialScroll}
                onLoadMore={loadMoreMessages}
                isLoadingMore={isLoadingHistory}
                scrollToBottomKey={scrollToBottomKey}
            >
                <HistoryMessages
                    readMessage={readMessage}
                    messages={historyMessages}
                />
                <RecentMessages
                    messages={recentMessages}
                />
            </MessagesList>
            <ChatInput
                placeholder="Type something..."
                onSubmit={({ value }) => publishMessage({
                    text: value || '',
                })}
            />
        </div>
    );
};

export default Messenger;

import React, { useEffect } from 'react';

import { Spinner } from '@chakra-ui/react';
import { ConnectionStates, WSConnector } from 'livelists-js-core';
import {
    useChannel,
    MessagesList,
    HistoryMessages,
    RecentMessages,
    ChatInput,
} from 'livelists-react-sdk';

import styles from './ChatComponent.module.scss';

interface IProps {
    wsConnector: WSConnector,
    selectedChannelId: string,
}

const ChatComponent:React.FC<IProps> = ({
    wsConnector,
    selectedChannelId,
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
    } = useChannel({
        channelId: selectedChannelId,
        wsConnector,
    });

    useEffect(() => {
        setTimeout(() => {
            join();
        }, 1000);
    }, []);

    if (connectionState !== ConnectionStates.Connected) {
        return (
            <div className={styles.loaderCont}>
                <Spinner />
            </div>
        );
    }

    return (
        <div className={styles.cont}>
            <MessagesList
                onLoadMore={loadMoreMessages}
                isLoadingMore={isLoadingHistory}
                className={styles.list}
                scrollToBottomKey={scrollToBottomKey}
            >
                <HistoryMessages messages={historyMessages} />
                <RecentMessages messages={recentMessages} />
            </MessagesList>
            <ChatInput
                placeholder="Type something..."
                onSubmit={({ value }) => value ? publishMessage({
                    text: value,
                }) : undefined}
            />
        </div>
    );
};

export default ChatComponent;

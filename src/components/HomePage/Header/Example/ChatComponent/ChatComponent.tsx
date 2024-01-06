import React, { useEffect } from 'react';

import { Spinner } from '@chakra-ui/react';
import {
    ConnectionState,
    ConnectionStates,
    CustomEvent, IInitialInfoUpdated,
    ILoadMoreMessagesArgs,
    LocalMessage,
    WSConnector
} from 'livelists-js-core';
import {
    useChannel,
    MessagesList,
    HistoryMessages,
    RecentMessages,
    ChatInput,
    ChannelContent,
} from 'livelists-react-sdk';

import styles from './ChatComponent.module.scss';
import { ISubscribeArgs } from 'livelists-react-sdk/dist/types/customEvents.types';
import {
    IFindNotSeenArgs,
    IInitialScroll,
    IPublishMessageArgs,
    IReadMessageArgs
} from 'livelists-react-sdk/dist/types/channel.types';

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
        initialScroll,
        readMessage,
        onFindFirstNotSeen,
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
        <ChannelContent>
            <div className={styles.cont}>
                <MessagesList
                    onLoadMore={loadMoreMessages}
                    isLoadingMore={isLoadingHistory}
                    className={styles.list}
                    scrollToBottomKey={scrollToBottomKey}
                    initialScroll={initialScroll}
                >
                    <HistoryMessages
                        messages={historyMessages}
                        readMessage={readMessage}
                        onFindFirstNotSeen={onFindFirstNotSeen}
                    />
                    <RecentMessages messages={recentMessages} />
                </MessagesList>
                <ChatInput
                    placeholder="Type something..."
                    onSubmit={({ value }) => value ? publishMessage({
                        text: value,
                    }) : undefined}
                />
            </div>
        </ChannelContent>
    );
};

export default ChatComponent;

export const CREATE_CHANNEL = `const {
    identifier,
    customData,
    createdAt,
    maxParticipants
} = await LiveLists.channel.createChannel({
    identifier: 'id',
    maxParticipants: 100,
    customData: {
        channelName: ""
    }
});
`;
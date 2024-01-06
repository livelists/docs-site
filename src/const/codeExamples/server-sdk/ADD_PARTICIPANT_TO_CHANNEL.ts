export const ADD_PARTICIPANT_TO_CHANNEL = `const {
    accessToken,
    participant,
    grants
} = await LiveLists.participant.addParticipantToChannel({
    identifier: token,
    channelId: "chat._id",
    grants: {
        admin: true,
        readMessages: true,
        sendMessage: true,
    },
    customData: {
        username: randomName,
    }
});`;
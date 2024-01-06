export const GET_ACCESS_TOKEN = `const { 
    accessToken,
    identifier,
    channelId
} = await LiveLists.participant.getAccessToken({
    identifier: token,
    channelId: "chat._id"
});`;
export const CLIENTS_INIT = `import { ChannelClient, ParticipantClient } from 'livelists-node-js';

class LiveListsClient {
    constructor() {
        this.channel = new ChannelClient({
            apiHost: "https://livelists.tech/livelists-twirp/",
            apiKey: "apiKey",
            secretKey:  "secretKey"
        })
        this.participant = new ParticipantClient({
            apiHost: "https://livelists.tech/livelists-twirp/",
            apiKey: "apiKey",
            secretKey: "secretKey"
        })
    }

    public channel:ChannelClient
    public participant:ParticipantClient
}

export const LiveLists = new LiveListsClient()
`;
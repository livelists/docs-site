export const WEB_CLIENT_CONNECT = `const {
    onGetConnection,
    ws,
} = useWsConnection({
    url: 'wss://livelists.tech/livelists-ws/',
    accessToken,
});

useEffect(() => {
    onGetConnection();
}, []);`;
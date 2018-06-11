function setUpApiManager() {
    window.servicesList = [];
    window.apiManager = {
        addService: function(serviceId, host, port) {
            let newService = new WebSocket("ws://" + host + ":" + port + "/");
            newService.onmessage = function(event) {
                console.log("RECV: " + event.data);
                var parsedJson = JSON.parse(event.data);
                window.eventObserver.publish('command' + parsedJson.command, parsedJson);
            };
            window.servicesList[serviceId] = newService;
        },
        sendData: function(serviceId, type, data={}) {
            console.log(window.servicesList);
            window.servicesList[serviceId].send(JSON.stringify({
                "type": type,
                "data": data
            }));
        },
        sendAuthData: function(serviceId, type, token, data={}) {
            window.servicesList[serviceId].send(JSON.stringify({
                "type": type,
                "token": token,
                "data": data
            }));
        }
    };
}
export default setUpApiManager;
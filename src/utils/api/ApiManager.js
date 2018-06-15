function setUpApiManager() {
    window.servicesList = [];
    window.apiManager = {
        addService: function(serviceId, host, port) {
            let newService = new WebSocket("ws://" + host + ":" + port + "/");
            newService.onmessage = function(event) {
                console.log("RECV: " + event.data);
                var parsedJson = JSON.parse(event.data);
                window.eventObserver.publish('command' + parsedJson.command, parsedJson);
                window.eventObserver.publish('gotResponse', parsedJson);
            };
            newService.onclose = function(){
                setTimeout(function(){ window.apiManager.addService(serviceId, host, port); }, 3000);
            };
            window.servicesList[serviceId] = newService;
        },
        sendData: function(serviceId, type, data={}) {
            const jsonToSend = JSON.stringify({
                "type": type,
                "data": data
            });
            console.log("SENT to service " + serviceId + " -> " + jsonToSend); 
            window.servicesList[serviceId].send(jsonToSend);
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
# sharpy-react-client

Simple panel that can be used for sharpy API testing / boilerplate for projects

This client working via websockets, aimed for handling multiple connections with different services

I use react-event-observer for response handling, publishing "command" + requestId (ex. command3) with data, then every subscribed component received this data.
I also use same package to communicate between components

Currently deployed project look like this:
![alt text](https://raw.githubusercontent.com/mxss/sharpy-react-client/master/examples/img/example.png)

import React from "react";
import ContentBlock from "../../modules/base/ContentBlock";

class ApiLogComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastSentRequest: "{}",
            subscribedEvents: {
                getResponse: window.eventObserver.subscribe("gotResponse", (response)=>{
                    this.getResponse(response)
                }),
            },
            lastResponses: [],
            isButtonActive: {
                "test": true
            }
        }
    }
    getResponse(data) {
        let responses = this.state.lastResponses;
        responses.push(JSON.stringify(data));
        while (responses.length > 10) {
            responses.shift();
        }
        this.setState({
            lastResponses: responses
        });
    }
    render() {
        return <ContentBlock
            cardTitle="API log component"
            content={<div>
                <b>Last responses:</b>
                <div className="row3vh"/>
                {this.state.lastResponses.map(function (item, i) {
                    return <p key={i}>{item}</p>;
                }, this)}
            </div>}
        />;
    }
};

export default ApiLogComponent;
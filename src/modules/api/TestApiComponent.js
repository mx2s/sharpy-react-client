import React from "react";
import { Button } from "antd";
import ContentBlock from "../../utils/ContentBlock";

class TestApiComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetHost: "localhost",
            targetPort: 9026,

            isButtonActive: {
                "test": true
            }
        }
    }
    componentDidMount() {
        this.setState({
            wsClient: new WebSocket("ws://" + this.state.targetHost + ":" + this.state.targetPort  + "/")
        });
    }
    sendAPIRequest(type) {
        if (this.state.isButtonActive[type] === true) {
            this.state.wsClient.send(type);
            console.log(type);
            let buttonStates = this.state.isButtonActive;
            buttonStates[type] = false;
            this.setState({
                isButtonActive: buttonStates
            });
            setTimeout(() => {
                let buttonStates = this.state.isButtonActive;
                buttonStates[type] = true;
                this.setState({
                    isButtonActive: buttonStates
                });
            }, 1400);
        }
    }
    render() {
        return <ContentBlock
            cardTitle="API test block"
            content={<div>
                <Button
                    type={"primary"}
                    loading={!this.state.isButtonActive["test"]}
                    onClick={() => {
                        this.sendAPIRequest("test")
                    }}
                >
                    Test 1
                </Button>
            </div>}
        />;
    }
}

export default TestApiComponent;
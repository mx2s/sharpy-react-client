import React from "react";
import { Button } from "antd";
import ContentBlock from "../../modules/base/ContentBlock";

class TestApiComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isButtonActive: {
                "test": true
            }
        }
    }
    sendAPIRequest(type) {
        if (this.state.isButtonActive[type] === true) {
            const requestData = JSON.stringify({
                "type": 1,
                "data": {
                  "login": "username",
                  "pass": "password"
                }
            });

            window.apiManager.sendData(0, 1, {
                "login": "username",
                "pass": "password"
            });
            
            console.log("Send: " + requestData);

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
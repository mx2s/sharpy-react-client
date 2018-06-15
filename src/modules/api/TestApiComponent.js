import React from "react";
import { Row, Button, Input } from "antd";
import ContentBlock from "../../modules/base/ContentBlock";
const { TextArea } = Input;

class TestApiComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextRequest: JSON.stringify({
                "type": 1,
                "data": {
                  "login": "username",
                  "pass": "password"
                }
            }),
            lastSentRequest: "{}",
            isButtonActive: {
                "test": true
            }
        }
    }
    sendAPIRequest(type) {
        if (this.state.isButtonActive[type] === true) {
            this.setState({
                lastSentRequest: this.state.nextRequest
            });

            const parsedJson = JSON.parse(this.state.nextRequest);

            window.apiManager.sendData(0, parsedJson.type, parsedJson.data);

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
    handleInputChange(event) {
        this.setState({
            nextRequest: event.target.value
        });
    }
    render() {
        return <ContentBlock
            cardTitle="API test component"
            content={<div>
                <Row>
                    <p>Last request: {this.state.lastSentRequest}</p>
                </Row>
                <Row className="verticalMargin15px">
                    <TextArea 
                        placeholder="{example json request here}" 
                        value={this.state.nextRequest}
                        onChange={this.handleInputChange.bind(this) }
                        autosize={{ minRows: 2, maxRows: 8 }} 
                    />
                </Row>
                <Row>
                    <Button
                        type={"primary"}
                        loading={!this.state.isButtonActive["test"]}
                        onClick={() => {
                            this.sendAPIRequest("test")
                        }}
                    >
                        Test 1
                    </Button>
                </Row>
            </div>}
        />;
    }
}

export default TestApiComponent;
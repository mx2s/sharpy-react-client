import React from "react";
import { Row, Col } from "antd";
import BaseHeader from "../modules/header/BaseHeader";
import TestApiComponent from "../modules/api/TestApiComponent";
import ApiLogComponent  from "../modules/api/ApiLogComponent";

class IndexLayout extends React.Component {
    render() {
        return <div>
            <BaseHeader/>
            <Row gutter={32} className="horizontalMargin15px">
                <Col className="marginTop25px" xs={24} md={12}>
                    <ApiLogComponent/>
                </Col>
                <Col className="marginTop25px" xs={24} md={12}>
                    <TestApiComponent/>
                </Col>
            </Row>
        </div>;
    }
}

export default IndexLayout;
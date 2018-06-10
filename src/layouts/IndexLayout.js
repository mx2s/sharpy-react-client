import React from "react";
import { Row, Col } from "antd";
import BaseHeader from "../modules/header/BaseHeader";
import TestApiComponent from "../modules/api/TestApiComponent";

class IndexLayout extends React.Component {
    render() {
        return <div>
            <BaseHeader/>
            <Row className="marginTop25px">
                <Col xs={0} sm={4} md={6} lg={6} xl={6}/>
                <Col xs={24} sm={16} md={12} lg={12} xl={12}>
                    <TestApiComponent/>
                </Col>
            </Row>
        </div>;
    }
}

export default IndexLayout;
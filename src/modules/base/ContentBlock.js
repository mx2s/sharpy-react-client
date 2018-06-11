import React from "react";
import { Card } from "antd";

class ContentBlock extends React.Component {
    render() {
        return <div>
            <Card title={this.props.cardTitle} >
                {this.props.content}
            </Card>
        </div>;
    }
}

export default ContentBlock;
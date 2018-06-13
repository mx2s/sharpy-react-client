import React from "react";
import ContentBlock from "../../modules/base/ContentBlock";

class ApiLogComponent extends React.Component {
    render() {
        return <ContentBlock
            cardTitle="API log component"
            content={<div>
                <p>data here</p>
            </div>}
        />;
    }
};

export default ApiLogComponent;
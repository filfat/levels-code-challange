import React, { Component } from 'react';

import './Pane.css';

class Pane extends Component {
    render() {
        return (
			<div className="pane">
                {this.props.children}
            </div>
        );
    }
}

export default Pane;
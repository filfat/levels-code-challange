import React, { Component } from 'react';

import './Panes.css';

class Panes extends Component {
    render() {
        return (
			<div className={"panes " + (this.props.className ||'')}>
                {this.props.children}
            </div>
        );
    }
}

export default Panes;
import React, { Component } from 'react';

import './ListItem.css';

class ListItem extends Component {
    render() {
        return (
			<div className="list-item">
                {this.props.children}

                <div className="indicator">></div>
            </div>
        );
    }
}

export default ListItem;
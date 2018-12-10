import React, { Component } from 'react';

import './List.css';

class List extends Component {
    render() {
        return (
			<div>
                {this.props.children}
            </div>
        );
    }
}

export default List;
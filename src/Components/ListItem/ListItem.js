import React, { Component } from 'react';

import './ListItem.css';

class ListItem extends Component {
    state = {
        expanded: false
    };

    constructor(props) {
        super(props);

        this.toggleExpand= this.toggleExpand.bind(this);
    }

    toggleExpand() {
        this.setState({ active: !this.state.expanded });
        console.error('hi!');
    }

    render() {
        return (
			<div className={"list-item" + (this.state.expanded ? ' expanded' : '')} onClick={() => this.toggleExpand}>
                <div className="details">
                    {this.props.children}

                    <div className="content" style={{display: this.state.expanded ? 'block' : 'none'}}>
                        {this.state.expanded ? this.props.content : null}
                    </div>
                </div>

                <div className="indicator">{!this.props.content ? '>' : '∨'}</div>
            </div>
        );
    }
}

export default ListItem;
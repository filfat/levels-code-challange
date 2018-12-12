import React, { Component } from 'react';

import './ListItem.css';

class ListItem extends Component {
    state = {
        expanded: false
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.props.content) this.setState({ expanded: !this.state.expanded });

        if(this.props.onClick) this.props.onClick();
    }

    render() {
        return (
			<div className={"list-item" + (this.state.expanded ? ' expanded' : '')} onClick={this.handleClick}>
                <div className="details">
                    {this.props.children}

                    <div className="content" style={{display: this.state.expanded ? 'block' : 'none'}}>
                        {this.state.expanded ? this.props.content : null}
                    </div>
                </div>

                {this.props.indicator ? <div className="indicator">{this.state.expanded ? '∧' : '∨'}</div> : null}
            </div>
        );
    }
}

export default ListItem;
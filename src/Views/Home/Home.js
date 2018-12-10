import React, { Component } from 'react';

import Panes from '../../Components/Panes';
import Pane from '../../Components/Pane';

import List from '../../Components/List';
import ListItem from '../../Components/ListItem';

class Home extends Component {
    componentDidMount() {
        document.title = "Home"; // FIXME:
    }

    render() {
        return (
			<div className="home">
                <Panes>
                    <Pane type="menu">
                        <List>
                            <ListItem>Pod 1</ListItem>
                            <ListItem>Pod 2</ListItem>
                            <ListItem>Pod 3</ListItem>
                            <ListItem>Pod 4</ListItem>
                            <ListItem>Pod 5</ListItem>
                        </List>
                    </Pane>
                    <Pane type="content">
                        <List>
                            <ListItem>Episode 1</ListItem>
                            <ListItem>Episode 2</ListItem>
                            <ListItem>Episode 3</ListItem>
                        </List>
                    </Pane>
                </Panes>
			</div>
        );
    }
}

export default Home;

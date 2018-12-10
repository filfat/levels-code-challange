import React, { Component } from 'react';
import API from '../../Utils/API';

import Panes from '../../Components/Panes';
import Pane from '../../Components/Pane';

import List from '../../Components/List';
import ListItem from '../../Components/ListItem';

class Home extends Component {
    state = {
        podcasts: []
    };

    componentDidMount() {
        document.title = "Home"; // FIXME:

        API.Get('podcasts', (res) => {
            this.setState({ podcasts: res.data });
        });
    }

    render() {
        return (
			<div className="home">
                <Panes>
                    <Pane className="menu">
                        <List>
                            {this.state.podcasts.map((data, i) => {
                                return <ListItem key={data.id + '-pod'}>{data.title}</ListItem>;
                            })}
                        </List>
                    </Pane>
                    <Pane className="content">
                        <List>
                            <ListItem content={
                                <div>
                                    Hello World!
                                </div>
                            }>Episode 1</ListItem>
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

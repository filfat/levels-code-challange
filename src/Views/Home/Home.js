import React, { Component } from 'react';
import API from '../../Utils/API';

import Panes from '../../Components/Panes';
import Pane from '../../Components/Pane';

import List from '../../Components/List';
import ListItem from '../../Components/ListItem';

class Home extends Component {
    state = {
        selectedPodcast: null,
        podcasts: [],
        episodes: []
    };

    constructor(props) {
        super(props);

        this.selectPodcast = this.selectPodcast.bind(this);
    }

    componentDidMount() {
        document.title = "Home"; // FIXME:

        API.Get({path: 'podcasts'}, (res) => {
            this.setState({ podcasts: res.data });
        });
    }

    selectPodcast(id) {
        API.Get({path: 'podcasts', id}, (res) => {
            this.setState({ episodes: res.data, selectedPodcast: id });
        });
    }

    render() {
        return (
			<div className="home">
                <Panes navigated={this.state.selectedPodcast !== null}>
                    <Pane className="menu">
                        <List>
                            {this.state.podcasts.map((data, i) => {
                                return (
                                    <ListItem key={data.id + '-pod'} onClick={() => this.selectPodcast(data.id)}>
                                        <div className="title">{data.title}</div>
                                        <div className="description">{data.description.substring(0, 75)}... <b>{data.numberOfEpisodes} Episodes</b></div>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Pane>
                    <Pane className="content">
                        {this.state.selectedPodcast !== null ? <div className="pane-header">
                            <h1 className="title">
                                <span className="back-button" onClick={() => this.setState({selectedPodcast: null})}>&lt;</span>
                                {this.state.podcasts[this.state.selectedPodcast].title}
                            </h1>
                            <div className="description">
                                {this.state.podcasts[this.state.selectedPodcast].description} 
                                <b>{this.state.podcasts[this.state.selectedPodcast].numberOfEpisodes} Episodes.</b>
                            </div>
                        </div> : null }
                        <List>
                            {this.state.episodes.map((data, i) => {
                                return (
                                    <ListItem key={data.id + '-epi'} content={
                                        <div>
                                            <p>Duration: {data.duration} Seconds</p>
                                            <p>Created: {data.created}</p>
                                        </div>
                                    } indicator>
                                        <div className="title">{data.title}</div>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Pane>
                </Panes>
			</div>
        );
    }
}

export default Home;

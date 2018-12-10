import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import ListItem from './ListItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <ListItem />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});
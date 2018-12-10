import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import Pane from './Pane';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Pane />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});
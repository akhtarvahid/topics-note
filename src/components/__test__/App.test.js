import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', ()=>{
    const div = document.createAttribute('div');

    ReactDOM.render(<App />, div);

    ReactDOM.unmountComponentAtNode(div);
})
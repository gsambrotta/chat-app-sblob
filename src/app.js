/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

import Conversation from './components/Conversation';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      conversations: [],
      contacts: []
    }
  }

  render() {
    return (
      <main>
        {React.cloneElement(this.props.children,
          {
            conversations: this.state.conversations,
            contacts: this.state.contacts
          }
        )}
      </main>
    );
  }
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Conversation} />
    </Route>
  </Router>,

  document.getElementById('app')
);

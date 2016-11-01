/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

import ConversationsList from './components/ConversationsList';
import Conversation from './components/Conversation';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.children;
  }
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={ConversationsList} />
    </Route>
  </Router>,

  document.getElementById('app')
);

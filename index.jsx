import ReactDOM from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import App from './components/app.jsx';
import Home from './components/home.jsx';

require("file!./assets/imgs/favicon-32x32.png?output=./favicon-32x32.png");

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

const container = document.getElementById('container');

ReactDOM.render(routes, container);

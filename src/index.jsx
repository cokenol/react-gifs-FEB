import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
  <App />, root);
}
// First, identify the components you need in your App.
// Then, think about the data and design their props / state
// Finally, add events / callbacks

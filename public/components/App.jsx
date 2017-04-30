import React from 'react';
import PropTypes from 'prop-types';
import './App.less';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;

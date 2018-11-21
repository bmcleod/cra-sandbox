import React, { Component, Fragment } from 'react';

import { Button } from 'antd';

import './App.less';

class App extends Component {
  render() {
    return (
      <Fragment>
        Welcome to React
        <Button type="primary">Primary</Button>
      </Fragment>
    );
  }
}

export default App;

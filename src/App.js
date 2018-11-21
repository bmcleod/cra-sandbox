import React, { Component, Fragment } from 'react';

import { Button } from 'antd';

import './App.less';

class App extends Component {
  render() {
    return (
      <Fragment>
        <p>Welcome to React</p>
        <Button type="primary">Primary</Button>
      </Fragment>
    );
  }
}

export default App;

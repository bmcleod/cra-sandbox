import React, { Component } from 'react';
import { Button } from 'antd';

import styles from './app.less';

class App extends Component {
  render() {
    return (
      <div>
        <p className={styles.textPrimary}>Welcome to React</p>
        <Button type="primary">Hello Button</Button>
      </div>
    );
  }
}

export default App;

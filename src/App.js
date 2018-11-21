import React, { Component, Fragment } from 'react';

import 'carbon-components/src/components/button/_button.scss';
import { Button } from 'carbon-components-react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <p>Welcome to React</p>
        <Button>Hello</Button>
      </Fragment>
    );
  }
}

export default App;

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import '../styles/app.scss';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => 
  <div>
    <a className="uk-button uk-button-default" href="">Text Link</a>
    <button className="uk-button uk-button-default" style={{backgroundColor: 'white', color: 'white'}}>Text Button</button>
    <button className="uk-button uk-button-default" disabled>Text Button Disabled</button>
    <button style={{ backgroundColor: 'red', color: 'darkRed', }}>
      Inaccessible button
    </button>
  </div>
)
  .add('with some emoji', () => (
    <Button className="uk-button uk-button-default" onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 TEST
      </span>
    </Button>
  ))
  .add('Accessible', () => (
    <button>
      Accessible button
    </button>
  ))
  .add('Inaccessible', () => (
    <button style={{ backgroundColor: 'red', color: 'darkRed', }}>
      Inaccessible button
    </button>
  ));


  storiesOf('Column', module)
  .add('with divider', () => 
  <div className="uk-column-1-2@s uk-column-divider">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
  </div>
);

  
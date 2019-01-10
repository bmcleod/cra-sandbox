import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import '../styles/app.scss';


import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

storiesOf('Welcome', module).add('intro', () => <h1>UIKIT</h1>);

storiesOf('Button', module)
  .add('with text', () => 
  <div>
    <a className="uk-button uk-button-default" href="">Text Link</a>
    <button className="uk-button uk-button-default" style={{backgroundColor: 'white', color: 'white'}}>Text Button</button>
    <button className="uk-button uk-button-default" disabled>Text Button Disabled</button>
    <button style={{ backgroundColor: 'red', color: 'darkRed', }}>
      Inaccessible button
    </button>
    <br />
    <button className="uk-button uk-button-default">Default</button>
    <button className="uk-button uk-button-primary">Primary</button>
    <button className="uk-button uk-button-secondary">Secondary</button>
    <button className="uk-button uk-button-danger">Danger</button>
    <button className="uk-button uk-button-text">Text</button>
    <button className="uk-button uk-button-link">Link</button>
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

storiesOf('Navbar', module)
.add('click mode', () => 
<nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
  <div className="uk-navbar-left">

      <ul className="uk-navbar-nav">
          <li className="uk-active"><a href="#">Active</a></li>
          <li>
              <a href="#">Parent</a>
              <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className="uk-active"><a href="#">Active</a></li>
                      <li><a href="#">Item</a></li>
                      <li><a href="#">Item</a></li>
                  </ul>
              </div>
          </li>
          <li><a href="#">Item</a></li>
      </ul>

  </div>
</nav>
);

storiesOf('Switcher', module)
.add('basic', () => 
<div>
<ul className="uk-subnav uk-subnav-pill">
    <li className="uk-active"><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li>
        <a href="#">More <span uk-icon="icon:  triangle-down"></span></a>
        <div uk-dropdown="mode: click;">
            <ul className="uk-nav uk-dropdown-nav">
                <li className="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li className="uk-nav-header">Header</li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li className="uk-nav-divider"></li>
                <li><a href="#">Item</a></li>
            </ul>
        </div>
    </li>
</ul>
</div>
);

storiesOf('Pagination', module)
.add('basic', () => 
  <ul className="uk-pagination" uk-margin="10">
      <li><a href="#"><span uk-pagination-previous></span></a></li>
      <li><a href="#">1</a></li>
      <li className="uk-disabled"><span>...</span></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li className="uk-active"><span>7</span></li>
      <li><a href="#">8</a></li>
      <li><a href="#">9</a></li>
      <li><a href="#">10</a></li>
      <li className="uk-disabled"><span>...</span></li>
      <li><a href="#">20</a></li>
      <li><a href="#"><span uk-pagination-next></span></a></li>
  </ul>
);


storiesOf('Modal', module)
.add('basic', () => 
  <div>
    <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-example">Open</button>
    <div id="modal-example" uk-modal="true">
        <div className="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" uk-close="true"></button>
            <h2 className="uk-modal-title">Headline</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="uk-text-right">
                <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                <button className="uk-button uk-button-primary" type="button">Save</button>
            </p>
        </div>
    </div>
  </div>
);



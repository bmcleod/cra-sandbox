import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from 'antd';

import '../index.less';

storiesOf('Button', module)
  .add('with text', () => <Button type="primary" onClick={action('clicked')}>Hello Button</Button>);


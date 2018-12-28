import React from 'react';
import cn from 'classnames';

import mc from '../util/modifierClassnames';
import withActiveToggle from '../util/withActiveToggle';
import Button from './Button';

const Toggle = withActiveToggle((props) => (
  <Button className={cn('toggle', mc(props))} onClick={props.toggle}>
    Toggle Me
  </Button>
));

Toggle.defaultProps = {
  enabled: true,
  color: 'RED',
};

export default Toggle;

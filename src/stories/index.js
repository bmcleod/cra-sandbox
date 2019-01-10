import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Button, Image, Segment, Rail, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import '../index.less';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
  ));

  storiesOf('Segment', module)
  .add('with spinner', () => 
  <Segment loading>
    <Image src='http://fillmurray.com/100/100' />
  </Segment>
  );

  storiesOf('Rail', module)
  .add('internal', () => 
    <Segment textAlign='center'>
    <Image className="ui wireframe image" src='/images/wireframe/paragraph.png' />

    <Rail internal position='left'>
      <Segment>Left Rail Content</Segment>
    </Rail>

    <Rail internal position='right'>
      <Segment>Right Rail Content</Segment>
    </Rail>
  </Segment>
  );


  import { Placeholder } from 'semantic-ui-react'
  storiesOf('Placeholder', module)
  .add('paragraph', () => (
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
  )
);

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

storiesOf('Form', module)
.add('composed', () => (
<Form>
<Form.Group widths='equal'>
  <Form.Field control={Input} label='First name' placeholder='First name' />
  <Form.Field control={Input} label='Last name' placeholder='Last name' />
  <Form.Field control={Select} label='Gender' placeholder='Gender' />
</Form.Group>
<Form.Group inline>
  <label>Quantity</label>
  <Form.Field
    control={Radio}
    label='One'
    value='1'
  />
  <Form.Field
    control={Radio}
    label='Two'
    value='2'
  />
  <Form.Field
    control={Radio}
    label='Three'
    value='3'
  />
</Form.Group>
<Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
<Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
<Form.Field control={Button}>Submit</Form.Field>
</Form>
));

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '@mui/material/Button';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('primary', () => (
    <Button variant="contained" color="primary" onClick={action('clicked!')}>
      {text('Button text', 'Hello Button')}
    </Button>
  ))
  .add('with some emoji', () => (
    <Button variant="contained" onClick={action('clicked-emoji')}>
      😀 😎 👍 💯
    </Button>
  ));

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};
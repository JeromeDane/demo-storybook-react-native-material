import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Button from '../../../components/Button';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('primary', () => (
    <Button icon="camera" mode="contained" onPress={() => action('Pressed')}>
      {text('text', 'Press me')}
    </Button>
  ))
  .add('with some emoji', () => (
    <Button mode="contained">
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
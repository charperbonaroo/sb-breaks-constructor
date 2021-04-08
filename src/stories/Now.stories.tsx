import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Now } from './Now';

export default {
  title: 'Example/Now',
  component: Now,
  argTypes: {
  },
} as Meta;

const Template: Story<{}> = (args) => <Now />;

export const Primary = Template.bind({});
Primary.args = {};

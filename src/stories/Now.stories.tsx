import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Now } from './Now';
import { Time } from './Time';

export default {
  title: 'Example/Now',
  component: Now,
  argTypes: {
  },
} as Meta;

const Template: Story<{}> = (args) => <div>
  This: <b><Now /></b> should be <b><code>9001</code></b>.<br />
  If it is <b><code>1</code></b>, the constructor is broken. Constructor source below.<br />
  <pre>{Time.toString()}</pre>
  Note that <code>this.time = time</code> should be present in the constructor somewhere,
  but it is somehow removed.
</div>;

export const Primary = Template.bind({});
Primary.args = {};

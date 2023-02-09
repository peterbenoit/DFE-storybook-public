import { createButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export default {
  title: 'Components/Buttons',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    return createButton({ ...args });
  },
  argTypes: {
    showIcon: { type: 'boolean' },
    buttonType: {
      control: { type: 'select' },
      options: ['Primary', 'Secondary', 'Tertiary'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/html/writing-stories/args
export const Primary = {
  args: {
    showIcon: false,
    buttonType: 'Primary',
  },
};

export const Secondary = {
  args: {
    buttonType: 'Secondary',
  },
};

export const Tertiary = {
  args: {
    buttonType: 'Tertiary',
  },
};
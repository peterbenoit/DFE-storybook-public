import { createTextbox } from './Textbox';
import './textbox.css';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/html/writing-stories/introduction
export default {
  title: 'Components/Textbox',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    return createTextbox({ label, ...args });
  },
  argTypes: {
    showIcon: { type: 'boolean' },
    inputType: {
      control: { type: 'select' },
      options: ['Text', 'Email', 'Password', 'Search'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/html/writing-stories/args
export const Text = {
  args: {
    showIcon: false,
    inputValue: 'Text Input',
    inputType: 'Text',
  },
};

export const Email = {
  args: {
    showIcon: false,
    inputValue: 'Email Input',
    inputType: 'Email',
  },
};

export const Password = {
  args: {
    showIcon: false,
    inputValue: 'Password Input',
    inputType: 'Password',
  },
};

export const Search = {
  args: {
    showIcon: false,
    inputValue: 'Search',
    inputType: 'Search',
  },
};
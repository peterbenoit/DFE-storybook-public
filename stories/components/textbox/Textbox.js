import './textbox.css';

export const createTextbox = ({
  inputType = 'text',
  inputValue = 'Standard Input',
  showIcon = false
}) => {
  const input = document.createElement('input');
  const icon = showIcon ? 'with-icon' : '';

  input.type = inputType.toLowerCase();
  input.className = ['form-control', icon].join(' ');
  input.value = inputValue;

  return input;
};

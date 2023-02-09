import './button.css';

export const createButton = ({
  buttonType = 'Primary',
  showIcon = false,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = buttonType + ' Button';
  btn.addEventListener('click', onClick);
  btn.className = ['btn', `btn-${buttonType.toLowerCase()}`].join(' ');

  if (showIcon) {
    btn.innerHTML = buttonType + ' Button <i class="fa-regular fa-image"></i>';
  }

  return btn;
};

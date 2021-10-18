import classNames from 'classnames';
import _isFunction from 'lodash/isFunction';

const Button = ({ children, className, onClick, disabled = false }) => {
  const componentClasses = classNames(
      'bg-rain-forest',
      'text-white',
      'py-4',
      'px-8',
      {
        'disabled:pointer-events-none': disabled,
        'disabled:bg-dark-gray': disabled,
        'disabled:opacity-50': disabled,
      },
      className,
  );

  const onButtonClick = () => {
    if (_isFunction(onClick)) {
      onClick();
    }
  };

  return (
      <button type="button" className={componentClasses} onClick={onButtonClick} disabled={disabled}>
        {children}
      </button>
  );
};

export default Button;

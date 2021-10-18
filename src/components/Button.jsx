import classNames from 'classnames';
import _isFunction from 'lodash/isFunction';

const Button = ({ children, className, onClick }) => {
  const componentClasses = classNames(
      'bg-rain-forest',
      'text-white',
      'py-4',
      'px-8',
      className,
  );

  const onButtonClick = () => {
    if (_isFunction(onClick)) {
      onClick();
    }
  };

  return (
      <button type="button" className={componentClasses} onClick={onButtonClick}>
        {children}
      </button>
  );
};

export default Button;

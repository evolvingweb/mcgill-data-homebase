import classNames from 'classnames';
import _isFunction from 'lodash/isFunction';

const ButtonIcon = ({ children, icon: Icon, className, onClick, disabled = false }) => {
  const componentClasses = classNames(
      'text-rain-forest',
      'font-semibold',
      'transition-colors',
      'hover:text-black-olive',
      {
        'disabled:pointer-events-none': disabled,
        'disabled:bg-dark-gray': disabled,
        'disabled:opacity-50': disabled,
        'inline-flex align-center': Icon,
      },
      className,
  );

  const onButtonIconClick = () => {
    if (_isFunction(onClick)) {
      onClick();
    }
  };

  return (
      <button type="button" className={componentClasses} onClick={onButtonIconClick} disabled={disabled}>
        {Icon && <Icon className="mr-2" />}
        {children}
      </button>
  );
};

export default ButtonIcon;

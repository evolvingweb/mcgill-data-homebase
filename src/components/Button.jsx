import classNames from 'classnames';
import _isFunction from 'lodash/isFunction';

export const ICON_POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
}

export const BUTTON_TYPE = {
  BUTTON: 'button',
  TEXT: 'text',
  OUTLINE: 'outline',
}

const Button = ({
                  children,
                  className,
                  onClick,
                  icon: Icon,
                  iconPosition = ICON_POSITION.RIGHT,
                  type = BUTTON_TYPE.BUTTON,
                  invert = false,
                  disabled = false
                }) => {
  const buttonClasses = classNames(
      'text-white',
      'py-4',
      'px-8',
      {
        'bg-rain-forest': !invert,
        'hover:bg-black-olive': !invert,
        'bg-black': invert,
        'hover:bg-dark-gray': invert,
      },
      className,
  );

  const linkClasses = classNames(
      'text-rain-forest',
      'hover:text-black-olive',
      className,
  );

  const componentClasses = classNames(
      'transition-colors',
      {
        'font-semibold': type !== BUTTON_TYPE.OUTLINE,
      },
      {
        'disabled:pointer-events-none': disabled,
        'disabled:bg-dark-gray': disabled,
        'disabled:opacity-50': disabled,
        'inline-flex items-center': Icon,
      },
      {
        [buttonClasses]: type === BUTTON_TYPE.BUTTON,
        [linkClasses]: type === BUTTON_TYPE.TEXT,
      },
  );

  const onButtonClick = () => {
    if (_isFunction(onClick)) {
      onClick();
    }
  };

  const iconLeft = iconPosition === ICON_POSITION.LEFT;
  const iconRight = iconPosition === ICON_POSITION.RIGHT;

  return (
      <button type="button" className={componentClasses} onClick={onButtonClick} disabled={disabled}>
        {iconLeft && Icon && <Icon className="mr-2 w-5 h-5" />}
        {children}
        {iconRight && Icon && <Icon className="ml-3 w-5 h-5" />}
      </button>
  );
};

export default Button;

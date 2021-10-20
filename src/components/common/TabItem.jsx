import React from 'react';
import classNames from 'classnames';

export const TabItemType = {
  LINK: 'LINK',
  BUTTON: 'BUTTON',
  PILL: 'PILL',
};

const TabItem = ({
                   label,
                   className,
                   activeTab,
                   onClick,
                   style = TabItemType.LINK,
                   textCenter = true,
                 }) => {
  const onListItemClick = () => {
    if (typeof onClick === 'function') {
      onClick({ label });
    }
  };

  const componentClasses = classNames(
      'text-md',
      className,
  );

  const isActive = activeTab === label;
  let buttonClasses = classNames(
      {
        'text-left': !textCenter,
        'text-center': textCenter,
      },
  );
  switch (style) {
    case TabItemType.BUTTON:
      buttonClasses = classNames(
          buttonClasses,
          'text-sm',
          'py-2',
          'px-4',
          'block',
          'w-full',
          'transition-colors',
          'border',
          'border-black-olive',
          {

            'text-dark-gray': !isActive,
            'text-white bg-black-olive': isActive,
          },
      );
      break;
    case TabItemType.PILL:
      buttonClasses = classNames(
          buttonClasses,
          'p-2',
          'md:p-4',
          'rounded-lg',
          'block',
          'w-full',
          'transition-colors',
          {

            'text-gray-4': !isActive,
            'font-bold text-main bg-gray-1': isActive,
          },
      );
      break;
    case TabItemType.LINK:
    default:
      buttonClasses = classNames(
          buttonClasses,
          'py-2',
          'sm:px-2',
          'block',
          'w-full',
          {
            'text-gray-4': !isActive,
            'font-bold  border-b-3 border-main': isActive,
          },
      );
      break;
  }

  return (
      <li className={componentClasses}>
        <button
            className={buttonClasses}
            onClick={onListItemClick}
            type="button"
        >
          {label}
        </button>
      </li>
  );
};

export default TabItem;

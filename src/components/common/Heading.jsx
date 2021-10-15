import React from 'react';
import classNames from 'classnames';

const Heading = ({
  children,
  size = 2,
  bold = true,
  semibold = false,
  uppercase,
  className,
  noMargin,
}) => {
  let headingSizeClasses = '';

  switch (size) {
    case 1:
      headingSizeClasses = `text-3xl md:text-4xl${noMargin ? '' : ' mb-6'}${uppercase === false ? '' : ' uppercase'}`;
      break;
    case 3:
      headingSizeClasses = `${noMargin ? '' : 'mb-3'}`;
      break;
    case 4:
      headingSizeClasses = `${noMargin ? '' : 'mb-2'} text-xs`;
      break;
    case 5:
      headingSizeClasses = `${noMargin ? '' : 'mb-1'} text-xs`;
      break;
    case 6:
      headingSizeClasses = 'text-xs';
      break;
    default:
    case 2:
      headingSizeClasses = `text-2xl ${noMargin ? '' : 'mb-4'}`;
      break;
  }

  const componentClasses = classNames(
    'block',
    'text-black-olive',
    headingSizeClasses,
    className,
    {
      'font-bold': bold,
      'font-semibold': semibold,
      uppercase,
    },
  );

  switch (size) {
    case 1:
      return <h1 className={componentClasses}>{children}</h1>;
    case 3:
      return <h3 className={componentClasses}>{children}</h3>;
    case 4:
      return <h4 className={componentClasses}>{children}</h4>;
    case 5:
      return <h5 className={componentClasses}>{children}</h5>;
    case 6:
      return <h6 className={componentClasses}>{children}</h6>;
    default:
    case 2:
      return <h2 className={componentClasses}>{children}</h2>;
  }
};


export default Heading;

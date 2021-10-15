import React from 'react';
import classNames from 'classnames';

const Container = ({
  className,
  children,
}) => {
  const componentClasses = classNames(
    'mx-auto',
    'max-w-screen-xl',
    className,
  );

  return (
    <section className={componentClasses}>
      { children }
    </section>
  );
};

Container.defaultProps = {
  className: null,
  children: null,
};

export default Container;

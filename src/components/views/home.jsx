import React from 'react';
import classNames from 'classnames';
import _isFunction from 'lodash/isFunction';

import homeBuildings from 'images/home-buildings.png';
import Button from '../Button';

const HomeView = ({ onStart }) => {
  const onClickStart = () => {
    if (_isFunction(onStart)) {
      onStart();
    }
  };
  const containerClasses = classNames(
      'bg-white',
      'px-6',
      'py-6',
      'lg:px-24',
      'lg:py-14',
      'min-h-screen',
      'flex',
      'flex-col',
      'justify-center',
  );
  const componentClasses = classNames(
      'max-w-screen-xl',
      'mx-auto',
      'flex',
      'flex-col',
      'lg:flex-row',
      'justify-between',
      'align-center',
  );
  const titleClasses = classNames(
      'text-4xl',
      'font-bold',
      'pr-12',
      'pb-7',
      'mb-7',
      'border-b-2',
      'border-rain-forest',
  );

  return (
      <section className={containerClasses}>
        <section className={componentClasses}>
          <div className="lg:max-w-md lg:flex-shrink-0 mb-20 lg:mb-0 lg:pr-20">
            <h2 className={titleClasses}>Embodied Carbon</h2>
            <p className="font-bold">How to use our interactive visualization of carbon metrics:</p>
            <ol className="mt-7 pl-7">
              <li>Select different house components</li>
              <li className="mt-6">View their impact on a project’s global warming potential</li>
              <li className="mt-6">Save different combinations to compare their impact.</li>
            </ol>
            <div className="mt-7 lg:mr-14">
              <Button className="w-full" onClick={onClickStart}>Start Exploring</Button>
            </div>
          </div>
          <div className="flex align-center lg:max-w-xl">
            <img src={homeBuildings} alt="home buildings" />
          </div>
        </section>
      </section>
  );
};

export default HomeView;

import React from 'react';
import classNames from 'classnames';
import _map from 'lodash/map';
import _isFunction from 'lodash/isFunction';

import Button, { BUTTON_TYPE, ICON_POSITION } from '../Button';

import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import { ReactComponent as ExclamationIcon } from 'images/exclamation-mark.svg';
import { ReactComponent as DiagonalArrows } from 'images/diagonal-arrows.svg';

import FILTER_CATEGORIES from 'utils/filters.categories';
import CarbonRating from '../charts/CarbonRating';
import Summary from '../charts/Summary';
import Container from '../common/Container';
import Heading from '../common/Heading';
import FilterField from '../FilterField';
import { AppContext } from 'context/AppContextProvider';

const CompareView = ({ onClose }) => {
  const {
    designs,
  } = React.useContext(AppContext);
  const componentClasses = classNames(
      'bg-pale-gray',
      'px-6',
      'py-6',
      'lg:py-14',
  );

  const onCloseClick = () => {
    if (_isFunction(onClose)) {
      onClose();
    }
  };

  return (
      <section className={componentClasses}>
        <Button
            onClick={onCloseClick}
            className="absolute top-0 right-0"
            invert
            icon={CancelIcon}
        >Close compare view</Button>
        <pre className="w-full h-56 overflow-visible whitespace-pre-wrap text-xs">
          {JSON.stringify(designs)}
        </pre>
      </section>
  );
};

export default CompareView;

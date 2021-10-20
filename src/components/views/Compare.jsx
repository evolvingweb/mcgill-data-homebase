import React from 'react';
import classNames from 'classnames';
import _map from 'lodash/map';
import _isFunction from 'lodash/isFunction';

import Button, { BUTTON_TYPE } from '../Button';

import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import { ReactComponent as ExclamationIcon } from 'images/exclamation-mark.svg';
import { AppContext } from 'context/AppContextProvider';
import DesignCompareItem from '../DesignCompareItem';
import Container from '../common/Container';
import CompareCharts from '../CompareCharts';

const MAX_DESIGNS = 3;

const CompareView = ({ onClose }) => {
  const {
    designs,
  } = React.useContext(AppContext);

  const designsCount = designs.length;
  const isMaxDesigns = MAX_DESIGNS === designsCount;
  const emptySlotsClass = designsCount === 1 ? 'col-span-2' : 'col-span-1';
  const emptySlotMessage = designsCount === 1 ? 'You can create up to 3 different designs to compare global warming potential metrics.' : 'Differences between your designs are highlighted in green!';

  const baseClasses = classNames(
      'px-6',
      'py-6',
      'lg:py-14',
  );

  const comparisonClasses = classNames(
      baseClasses,
      'bg-white',
  );

  const chartsClasses = classNames(
      baseClasses,
      'bg-pale-gray',
  );

  const onCloseClick = () => {
    if (_isFunction(onClose)) {
      onClose();
    }
  };

  return (
      <>
        <Button
            onClick={onCloseClick}
            className="absolute top-0 right-0"
            invert
            icon={CancelIcon}
        >Close compare view</Button>

        {/* Comparison */}
        <div className={comparisonClasses}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:place-items-center mt-4">
              {
                _map(designs, (design, index) => {
                  return (
                      <DesignCompareItem design={design} id={index + 1} key={index} compare={index > 0} />
                  );
                })
              }
              {
                !isMaxDesigns
                    ? (
                        <div className={`${emptySlotsClass}`}>
                          <div className="flex max-w-md mx-auto">
                            <ExclamationIcon className="mr-2.5 w-5 h-5 flex-shrink-0 mt-1" />
                            <div>
                              {emptySlotMessage}
                              <div>
                                <Button type={BUTTON_TYPE.TEXT} onClick={onCloseClick} className="mt-4">
                                  Close view and add design
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                    )
                    : null
              }
            </div>
          </Container>
        </div>
        {/* End Comparison */}
        {/* Charts */}
        <div className={chartsClasses}>
          <Container>
            <CompareCharts designs={designs} title="Embodied Carbon" />
          </Container>
        </div>
        {/* End Charts */}
      </>
  );
};

export default CompareView;

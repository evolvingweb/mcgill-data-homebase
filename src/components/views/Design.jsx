import React from 'react';
import classNames from 'classnames';
import _map from 'lodash/map';
import _isFunction from 'lodash/isFunction';

import Button, { BUTTON_TYPE, ICON_POSITION } from '../Button';

import { ReactComponent as PencilIcon } from 'images/pencil.svg';
import { ReactComponent as DiagonalArrows } from 'images/diagonal-arrows.svg';

import FILTER_CATEGORIES from 'utils/filters.categories';
import CarbonRating from '../charts/CarbonRating';
import Summary from '../charts/Summary';
import useImage from 'hooks/useImage';

const DesignView = ({ id, design, onEdit, onShowCompare }) => {
  const imageAlt = `Design ${id}`;
  const { imageUrl } = useImage(id); // @TODO change id for Option Number

  const {
    'Sum of embodied carbon': sumEmbodiedCarbon = 0,
    'Embodied carbon rating': embodiedCarbonRating = 0,
  } = design;

  const sumEmbodiedCarbonParts = sumEmbodiedCarbon.toString().split('.');

  const replaceCommas = sumEmbodiedCarbon.replace(',', '');
  const chartData = {
    datasets: [
      {
        data: [0, replaceCommas],
      }
    ],
  };

  const chartOptions = {
    barThickness: 60,
    animation: false,
    scales: {
      x: {
        ticks: {
          callback: (value) => {
            if (!value) {
              return 0;
            }

            return `${value / 1000}K`
          }
        },
      },
    },
  };

  const containerClasses = classNames(
      'bg-white',
      'min-h-screen',
      'flex',
      'flex-col',
  );
  const componentClasses = classNames(
      'grid',
      'grid-cols-4',
      'gap-14',
      'place-items-start',
  );

  const titleClasses = classNames(
      'text-4xl',
      'font-bold',
      'pb-7',
      'mb-7',
  );

  const onEditClick = () => {
    if (_isFunction(onEdit)) {
      onEdit();
    }
  };

  const onShowCompareClick = () => {
    if (_isFunction(onShowCompare)) {
      onShowCompare();
    }
  };

  return (
      <section className={containerClasses}>
        <section className={componentClasses}>
          <div className="pl-6 pr-6 pt-6 bg-pale-gray xl:pl-14 xl:pr-12 xl:pt-14 min-h-screen">
            <div className="mb-8">
              <Button
                  icon={PencilIcon}
                  onClick={onEditClick}
                  type={BUTTON_TYPE.TEXT}
                  iconPosition={ICON_POSITION.LEFT}>
                Edit
              </Button>
            </div>
            <h3 className="text-black-olive font-bold text-lg">Multi-Family Design Options</h3>
            <div className="mt-7">
              {
                _map(FILTER_CATEGORIES, (columnData) => {
                  return _map(columnData, columnItem => {
                    const { title, filters, disabled = false, } = columnItem;
                    if (disabled) {
                      return null;
                    }

                    return (
                        <article className="mt-4" key={title}>
                          <h4 className="font-semibold text-rain-forest uppercase text-xs">{title}</h4>
                          {
                            _map(filters, (filter) => {
                              const filterValue = design[filter] || null;
                              if (!filterValue) {
                                return null;
                              }

                              return (
                                  <p key={filter} className="mt-0">
                                    <span className="inline-block px-2 py-1 bg-white rounded-xl text-xxs">
                                      {filterValue}
                                    </span>
                                  </p>
                              );
                            })
                          }
                        </article>
                    )
                  })
                })
              }
            </div>
          </div>
          <div className="grid grid-cols-3 gap-14 col-span-3 pt-14 pr-24">
            <div className="col-span-2 flex flex-col">
              <img src={imageUrl} alt={imageAlt} className="mx-auto" width={324} height={506} />
              <div className="mt-auto">
                <h3 className="uppercase font-semibold mt-7 mb-4 flex align-center">
                  Building Embodied Carbon Rating
                </h3>
                <CarbonRating value={embodiedCarbonRating} />
              </div>
            </div>
            <div className="flex align-start flex-col">
              <h2 className={titleClasses}>Design {id}</h2>
              <div>
                <Button icon={DiagonalArrows} onClick={onShowCompareClick}>Save & view all metrics</Button>
              </div>
              <div className="mt-auto mb-3">
                <h3 className="uppercase font-semibold mt-7 mb-4 flex align-center">
                  Sum of Embodied Carbon
                </h3>
                <p className="text-2xl font-normal">
                  {sumEmbodiedCarbonParts[0]}
                  <span>{sumEmbodiedCarbonParts.length > 1 ? '.' : null}</span>
                  <span
                      className="text-xs">{sumEmbodiedCarbonParts.length > 1 ? sumEmbodiedCarbonParts[1] : null}</span>
                  <span className="ml-1 text-xs font-bold">KgCO2eq/m2</span>
                </p>
                <div className="relative -left-2">
                  <Summary data={chartData} height={80} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
  );
};

export default DesignView;

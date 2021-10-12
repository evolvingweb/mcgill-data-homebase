import _map from 'lodash/map';

import 'styles/CarbonRating.scss';

const RATINGS = [
  {
    name: 'Best',
    range: [-100, 0],
  },
  {
    name: 'Great',
    range: [0, 100],

  },
  {
    name: 'Good',
    range: [100, 200],
  },
  {
    name: 'Fair',
    range: [200, 300],
  },
  {
    key: 'ghost',
    range: [300, 400],
  },
  {
    name: 'Average',
    range: [400, 500],
  },
  {
    key: 'ghost2',
    range: [500, 600],
  },
  {
    name: 'Poor',
    range: [600, 650],
  },
]

const CarbonRating = ({ value }) => {

  return (
      <>
        <h3>
          Score <strong>({value}KgCO2eq/m2)</strong>
        </h3>
        <div className="carbon-rating">
          <div className="bg">
            {
              _map(RATINGS, ({ key, name, range }) => {
                const classNames = [
                    'item',
                    name && name.toLowerCase(),
                ].join(' ');
                return (
                    <>
                      <div className={classNames} key={key || name}>
                        { key ? '' : name }
                      </div>
                      <div className="vertical-line" />
                    </>
                );
              })
            }
          </div>
        </div>
      </>
  );
};

export default CarbonRating;

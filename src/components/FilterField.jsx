import _map from 'lodash/map';
import _isFunction from 'lodash/isFunction';
import classNames from 'classnames';

const FilterField = ({
                       defaultOption,
                       options = [],
                       onChange,
                       className
                     }) => {
  if (!options.length) {
    return null;
  }

  const componentClasses = classNames(
      'lg:block',
      'p-3',
      className,
  );
  const mergedOptions = [defaultOption, ...options] || [defaultOption];

  const onSelectChange = (e) => {
    if (_isFunction(onChange)) {
      const valueToSend = defaultOption === e.target.value ? null : e.target.value;
      onChange(defaultOption, valueToSend);
    }
  };

  return (
      <select className={componentClasses} defaultValue={defaultOption} onChange={onSelectChange}>
        {
          _map(mergedOptions, (optionItem) => {
            if (!optionItem) {
              return null;
            }
            return (
                <option value={optionItem} key={optionItem}>
                  {optionItem}
                </option>
            );
          })
        }

      </select>
  );
};

export default FilterField;


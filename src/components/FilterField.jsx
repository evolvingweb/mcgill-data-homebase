import React from 'react';
import _map from 'lodash/map';
import Select, { components } from "react-select";

import _isFunction from 'lodash/isFunction';

const { ValueContainer, Placeholder } = components;

const styles = {
  container: (provided) => ({
    ...provided,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    overflow: 'visible',
    paddingTop: state.hasValue ? '16px' : '12px',
    paddingBottom: state.hasValue ? '8px' : '12px',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    position: 'absolute',
    top: state.hasValue || state.selectProps.inputValue ? -12 : 2,
    transition: 'top 0.1s, font-size 0.1s, color .1s',
    fontSize: (state.hasValue || state.selectProps.inputValue) ? 10 : 14,
    color: state.hasValue ? '#377B65' : '#6E7777',
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    color: '#6E7777',
    fontSize: 14,
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: 0,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none'
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 1,
    borderRadius: 0,
    boxShadow: '0 10px 20px -25px rgba(0,0,0,.5)',
    border: '1px solid #D9DEDD',
  }),
  menuList: (provided) => ({
    ...provided,
    marginTop: 1,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: 14,
    color: '#3F3F37',
    backgroundColor: state.isFocused
      ? '#C1E8C3'
      : state.isFocused
        ? '#C1E8C3'
        : '#FFF',
    ':active': {
      ...styles[':active'],
      backgroundColor: !state.isDisabled
          ? state.isSelected
              ? '#F3F5F5'
              : '#F3F5F5'
          : undefined,
    },
  }),
}

const CustomValueContainer = ({ children, ...props }) => {
  return (
      <ValueContainer {...props}>
        <Placeholder {...props} isFocused={props.isFocused}>
          {props.selectProps.placeholder}
        </Placeholder>
        {React.Children.map(children, child =>
            child && child.type !== Placeholder ? child : null
        )}
      </ValueContainer>
  );
};

const FilterField = ({
                       defaultOption,
                       options = [],
                       onChange,
                     }) => {
  if (!options.length) {
    return null;
  }
  const mergedOptions = _map(options, option => ({ value: option, label: option }));

  const onSelectChange = (selectedValue, select) => {
    const { value } = selectedValue;
    const { name } = select;
    if (_isFunction(onChange)) {
      onChange(name, value);
    }
  };

  return (
      <Select
          options={mergedOptions}
          styles={styles}
          name={defaultOption}
          onChange={onSelectChange}
          placeholder={defaultOption}
          components={{
            ValueContainer: CustomValueContainer
          }}
      />
  );
};

export default FilterField;


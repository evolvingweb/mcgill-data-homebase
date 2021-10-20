import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import _isFunction from 'lodash/isFunction';

import TabItem, { TabItemType } from './TabItem';

const TabGroup = ({
                    items,
                    activeItem,
                    onChange,
                    className,
                    column = false,
                    style = TabItemType.LINK,
                  }) => {
  const componentClasses = classNames(
      'flex',
      'list-none',
      'flex-wrap',
      className,
      {
        'flex-col': column,
      },
  );

  const [activeTab, setActiveTab] = useState(activeItem || items[0]);

  const onClickTabItem = (tab) => {
    if (activeTab.label !== tab.label) {
      setActiveTab(tab);
      if (_isFunction(onChange)) {
        onChange(tab);
      }
    }
  };

  useEffect(() => {
    if (activeItem && activeItem.label !== activeTab.label) {
      setActiveTab(activeItem);
    }
  }, [activeItem, activeTab, setActiveTab]);

  return (
      <ol
          className={componentClasses}
          role="tablist"
      >
        {
          items && items.length ? (
              items.map(({ label }, index) => {
                const itemClasses = classNames(
                    {
                      'ml-4': !column && index,
                      'mt-4 w-full': column && index,
                    },
                );

                return (
                    <TabItem
                        key={label}
                        label={label}
                        activeTab={activeTab.label}
                        style={style}
                        textCenter={!column}
                        className={itemClasses}
                        onClick={onClickTabItem}
                    />
                );
              })
          ) : null
        }
      </ol>
  );
};

export default TabGroup;

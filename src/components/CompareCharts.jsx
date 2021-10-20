import React, { useEffect, useReducer } from 'react';
import TabGroup from './common/TabGroup';
import { TabItemType } from './common/TabItem';
import Summary from './charts/Summary';
import _map from 'lodash/map';
import ElementCategories from './charts/ElementCategories';
import parseSummaryChartData from 'utils/summary-chart.parser';
import parseElementCategoriesChartData from 'utils/element-catogories-chart.parser';

const ChartsActionType = {
  SUMMARY: 'Summary',
  ELEMENT_CATEGORIES: 'Element Categories',
  LIFE_CYCLE_STAGES: 'Life Cycle Stages',
  DIVISIONS: 'Divisions',
};

const chartReducer = (state, action) => {
  switch (action.type) {
    case ChartsActionType.ELEMENT_CATEGORIES:
      return {
        ...state,
        Element: ElementCategories,
        data: parseElementCategoriesChartData(state.designs),
        elementOptions: {
          height: 300,
        }
      };
    case ChartsActionType.SUMMARY:
    default:
      return {
        ...state,
        Element: Summary,
        data: parseSummaryChartData(state.designs),
        elementOptions: {
          height: 300,
        }
      };
  }
};

const initialValue = {
  Element: null,
  data: null,
  elementOptions: {},
  designs: [],
};

const CompareCharts = ({ title, designs, className }) => {
  const [ currentChart, dispatch ] = useReducer(chartReducer, { ...initialValue, designs });
  const {
    Element,
    data,
    elementOptions = {},
  } = currentChart || {};

  const tabsItems = _map(ChartsActionType, label => ({ label }));

  const onTabChange = ({ label }) => {
    dispatch({ type: label })
  };

  useEffect(() => {
    if (!data) {
      dispatch({ type: ChartsActionType.SUMMARY });
    }
  }, [data]);

  return (
      <section className={className}>
        <h2 className="font-bold text-black text-2xl flex items-center title ml-16 pl-2">
          {title}
        </h2>
        <div className="mt-4 ml-16 pl-2">
          <TabGroup items={tabsItems} style={TabItemType.BUTTON} onChange={onTabChange} />
        </div>
        <div className="mt-4">
          { Element && <Element data={data} {...elementOptions} /> }
        </div>
      </section>
  );
};

export default CompareCharts;

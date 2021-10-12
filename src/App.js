import './styles/App.scss';
import SummaryExamples from './components/SummariesExamples';
import ElementCategoriesExamples from './components/ElementCategoriesExamples';
import LifeCycleExamples from './components/LifeCycleExamples';
import CarbonRatingExamples from './components/CarbonRatingExamples';


function App() {
  return (
    <div className="App">
      <h1>Charts Demo</h1>
      <CarbonRatingExamples />
      <LifeCycleExamples />
      <ElementCategoriesExamples />
      <SummaryExamples />
    </div>
  );
}

export default App;

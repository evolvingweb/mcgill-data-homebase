import './styles/App.scss';
import SummaryExamples from './components/SummariesExamples';
import ElementCategoriesExamples from './components/ElementCategoriesExamples';
import LifeCycleExamples from './components/LifeCycleExamples';


function App() {
  return (
    <div className="App">
      <h1>Charts Demo</h1>
      <LifeCycleExamples />
      <ElementCategoriesExamples />
      <SummaryExamples />
    </div>
  );
}

export default App;

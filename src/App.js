import './styles/App.scss';
import SummaryExamples from './components/SummariesExamples';
import ElementCategoriesExamples from './components/ElementCategoriesExamples';


function App() {
  return (
    <div className="App">
      <h1>Charts Demo</h1>
      <ElementCategoriesExamples />
      <SummaryExamples />
    </div>
  );
}

export default App;

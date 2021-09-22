import './styles/App.scss';
import Summary from './components/charts/Summary';

import summaryMockData from './mock-data/summary.mock';

function App() {
  return (
    <div className="App">
      <h1>Charts Demo</h1>

      <section>
        <h2>Summary</h2>
        <Summary data={summaryMockData} />
      </section>
    </div>
  );
}

export default App;

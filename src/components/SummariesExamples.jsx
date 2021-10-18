import Summary from './charts/Summary';
import { summaryMockData, summaryMultipleMockData, summaryThreeMockData } from '../mock-data/summary.mock';

const SummaryExamples = () => {
  return (
      <>
        <section>
          <h2>Summary</h2>
          <Summary data={summaryMockData} />
        </section>

        <section>
          <h2>Summary (Multiple)</h2>
          <Summary data={summaryMultipleMockData} />
        </section>

        <section>
          <h2>Summary (Multiple 2)</h2>
          <Summary data={summaryThreeMockData} height={250} />
        </section>
      </>

  );
};

export default SummaryExamples;

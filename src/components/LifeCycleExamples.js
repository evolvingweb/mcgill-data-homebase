import LifeCycle from './charts/LifeCycle';
import { lifeCycleMockData, lifeCycleMultipleMockData } from '../mock-data/life-cycle.mock';

const LifeCycleExamples = () => {
  return (
      <>
        <section>
          <h2>Life Cycle</h2>
          <LifeCycle data={lifeCycleMockData} />
        </section>
        <section>
          <h2>Life Cycle Multiple</h2>
          <LifeCycle data={lifeCycleMultipleMockData} />
        </section>
      </>

  );
};

export default LifeCycleExamples;

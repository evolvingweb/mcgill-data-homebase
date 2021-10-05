import LifeCycle from './charts/LifeCycle';
import { lifeCycleMockData } from '../mock-data/life-cycle.mock';

const LifeCycleExamples = () => {
  return (
      <>
        <section>
          <h2>Life Cycle</h2>
          <LifeCycle data={lifeCycleMockData} />
        </section>
      </>

  );
};

export default LifeCycleExamples;

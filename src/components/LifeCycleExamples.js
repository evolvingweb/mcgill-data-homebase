import LifeCycle from './charts/LifeCycle';
import {
  divisionsMockData,
  lifeCycleMockData,
  lifeCycleMultipleMockData,
} from '../mock-data/life-cycle.mock';

const LifeCycleExamples = () => {
  return (
      <>
        <section>
          <h2>Divisions</h2>
          <LifeCycle data={divisionsMockData} height={360} />
        </section>
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

import ElementCategories from './charts/ElementCategories';
import { elementCategoriesMockData, elementCategoriesMultipleMockData } from '../mock-data/element-categories.mock';

const ElementCategoriesExamples = () => {
  return (
      <>
        <section>
          <h2>Element Categories</h2>
          <ElementCategories data={elementCategoriesMockData} />
        </section>
        <section>
          <h2>Element Categories (Multiple)</h2>
          <ElementCategories data={elementCategoriesMultipleMockData} height={300} />
        </section>
      </>

  );
};

export default ElementCategoriesExamples;

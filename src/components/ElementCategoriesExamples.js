import ElementCategories from './charts/ElementCategories';
import { elementCategoriesMockData } from '../mock-data/element-categories.mock';

const ElementCategoriesExamples = () => {
  return (
      <>
        <section>
          <h2>Element Categories</h2>
            <ElementCategories data={elementCategoriesMockData} />
        </section>
      </>

  );
};

export default ElementCategoriesExamples;

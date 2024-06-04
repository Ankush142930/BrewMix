import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../wrappers/SearchForm';
useNavigation;

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form className="form" method="GET">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn " disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
      SearchForm
    </Wrapper>
  );
};
export default SearchForm;

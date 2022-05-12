import { TitleFilter, InputFilter } from './Filter.styled.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selector.js';
import { changeFilter } from 'redux/actions.js';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <div>
      <TitleFilter>Find contacts by name</TitleFilter>
      <InputFilter
        type="text"
        value={value}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};

export default Filter;

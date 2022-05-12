import { BiSearchAlt2 } from 'react-icons/bi';
import * as S from './style';
const Search = () => {
  return (
    <S.SearchWrapper>
      <S.SearchIcon>
        <BiSearchAlt2 />
      </S.SearchIcon>
      <S.SearchInput type="text" placeholder="Search" />
    </S.SearchWrapper>
  );
};

export default Search;

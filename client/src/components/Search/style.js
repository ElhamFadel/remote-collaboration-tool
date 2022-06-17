import styled from 'styled-components';
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fff;
`;
export const SearchIcon = styled.div`
  color: #000;
  font-size: 1.5rem;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  color: #000;
  background: #fff;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
  &:focus {
    outline: none;
  }
`;

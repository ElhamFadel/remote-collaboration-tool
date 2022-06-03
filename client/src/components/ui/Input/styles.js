import styled from 'styled-components';

export const InputStyled = styled.input`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 14px;
  color: #333;
  outline: none;
  &:focus {
    border: 1px solid #837bce;
  }
`;
export const Label = styled.label`
  font-size: 14px;
  color: #333;
  display: block;
  margin-bottom: 5px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

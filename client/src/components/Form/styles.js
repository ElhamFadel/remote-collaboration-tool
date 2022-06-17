import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const Submit = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #837bceb8;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ff5a5f;
    color: #fff;
  }
`;

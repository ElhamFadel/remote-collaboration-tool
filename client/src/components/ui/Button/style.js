import styled from 'styled-components';
export const ButtonContainer = styled.a`
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background-color: ${({ color }) => color};
  border: none;
  border-radius: 5px;
  padding: 13px 20px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.3s;
  width: ${({ width }) => width || '100%'};
  &:hover {
    background-color: ${({ color }) => color};
    opacity: 0.8;
  }
`;

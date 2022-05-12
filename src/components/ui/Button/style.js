import styled from 'styled-components';
export const ButtonContainer = styled.a`
   text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    background-color: ${({ color }) => color};
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px 0;
    cursor: pointer;
    transition: all 0.3s;
    /* width: 100%; */
    &:hover {
      background-color: ${({ color }) => color};
      opacity: 0.8;
    }
`;

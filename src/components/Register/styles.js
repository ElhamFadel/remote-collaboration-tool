import styled from 'styled-components';
import Logo from '../../assets/logo.png';
export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 70vh;
    background-color: #fafafa;
    padding: 0px 20px;
    border-radius: 9px;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 26%);
    margin: 7rem auto;
    position: relative;
    `;
export const RegisterLogo = styled.div`
    width: 15%;
    height: 15%;
    border-radius: 100%;
    background-image: url(${Logo});
    background-position: center;
    `;
    
import styled from "styled-components"
import Button from "../Button";

const infoSign = [
    {
        id: 1,
        title: "Sign in with Google",
        color: "#4285F4",
    },
    {
        id: 2,
        title: "Sign in with Facebook",
        color: "#3B5998",
    },
    {
        id: 3,
        title: "Sign in with GitHub",
        color: "#5f6368",
    }
]

const RowSign = () => {
  return (
    <RowSignContainer>
        {infoSign.map(({id,title,color}) => (
            <Button key={id} label={title} color={color} />
        ))}
    </RowSignContainer>
  )
}

export default RowSign
const RowSignContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 20%;
    padding: 0 20px;
    margin: 0;
    flex-wrap: wrap;

    `;
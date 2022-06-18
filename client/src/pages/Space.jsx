import SideBar from '../components/SideBar';
import SpaceNotes from '../components/SpaceNotes';
import styled from 'styled-components';
const Space = () => {
  console.log('Hellllllllllllo', 'imimi');
  return (
    <Container>
      <SideBar />
      <SpaceNotes />
    </Container>
  );
};

export default Space;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;

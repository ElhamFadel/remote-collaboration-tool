import { useEffect } from 'react';
import { CardNote } from '../ui';
import useStateNote from '../../hooks/useNoteAppProvider';
// import Mitt from 'mitt';
import { io } from 'socket.io-client';
const socket = io('http://localhost:5000');
import * as S from './style';
const WhiteBoard = () => {
  const {
    state: { numberOfUsers },
    dispatch
  } = useStateNote();
  useEffect(() => {
    // socket.on('connect', () => console.log(socket.id));
    socket.on('connect', () => dispatch({ type: 'userJoin' }));
    socket.on('disconnect', () => dispatch({ type: 'userLeave' }));
  }, []);
  return (
    <S.ContainerWhiteBoard>
      {numberOfUsers}
      <CardNote />
    </S.ContainerWhiteBoard>
  );
};

export default WhiteBoard;

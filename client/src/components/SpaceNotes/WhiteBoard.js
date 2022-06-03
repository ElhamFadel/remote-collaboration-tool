import { useEffect } from 'react';
import { CardNote } from '../ui';
import { io } from 'socket.io-client';
import * as S from './style';
const WhiteBoard = () => {
  useEffect(() => {
    const socket = io('http://localhost:5000');
    socket.on('connect', () => console.log(socket.id));
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 5000);
    });
    socket.on('disconnect', () => console.log('Hello'));
  }, []);
  return (
    <S.ContainerWhiteBoard>
      <CardNote />
    </S.ContainerWhiteBoard>
  );
};

export default WhiteBoard;
